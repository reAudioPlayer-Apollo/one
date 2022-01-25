from __future__ import annotations
from typing import List
import requests
from bs4 import BeautifulSoup
import re
from datetime import datetime, timedelta


class Match:
    def __init__(self, url) -> None:
        self._url = url
        self._html = None
        self._soup = None
        self._team1 = None
        self._team2 = None
        self._result = None
        self._competition = None
        self._date = None
        self._progress = None
        self._sport = None
        self._sref = self._url

    def toJson(self) -> dict:
        return {
            "href": self._url,
            "sref": self._sref,
            "team1": self._team1,
            "team2": self._team2,
            "result": self._result,
            "progress": self._progress,
            "competition": self._competition,
            "sport": self._sport,
            "date": self._date
        }


class OneFootballMatch(Match):
    def __init__(self, url) -> None:
        if "/team" in url:
            nurl = OneFootballTeam.GetFirstMatch(url)
        if "/competition" in url:
            nurl = OneFootballTeam.GetFirstMatch(url)
        super().__init__(nurl)
        self._sref = url
        self._html = requests.get(nurl).text
        self._soup = BeautifulSoup(self._html, "html.parser")
        section = self._soup.find("div", class_="match-score__main")
        teams = section.find_all("of-match-score-team")
        self._team1 = str(teams[0])
        self._team2 = str(teams[1])
        if section.find("p", class_="match-score-scores"):
            self._result = section.find("p", class_="match-score-scores").text
        else:
            self._result = section.find("time", class_="match-score__kickoff-date").find("span").text.replace("00:00:00", "")
        aggregate = section.find("p", class_="match-score__aggregated-score")
        if aggregate:
            txt = aggregate.text.removesuffix(" ").removeprefix(" ").replace("-", ":")
            self._result += f"<br><p class='accent additional-result'>({txt})</p>"
        self._sport = "Football"
        progress = section.find("div", class_="match-score__data").find("span", class_="title-7-medium")
        if not progress:
            progress = section.find("div", class_="match-score__data").find("span", class_="match-score__highlighted-text")
        self._progress = progress.text
        competition = self._soup.find("span", class_="match-info__entry-subtitle")
        self._competition = competition.text
        competition.decompose()
        self._date = self._soup.find("span", class_="match-info__entry-subtitle").text.removesuffix(" ").removeprefix(" ")


class OneFootballTeam:
    @staticmethod
    def GetFirstMatch(url: str) -> str:
        if not url.endswith("/fixtures"):
            url += "/fixtures"
        html = requests.get(url).text
        soup = BeautifulSoup(html, "html.parser")
        matches = soup.find_all("a", class_="match-card", href=True)
        href = None
        for match in matches:
            if not match.find("span", text=" Full time "):
                href = match["href"]
                break
            if match.find("time", text=re.compile(r"(.*)Yesterday(.*)")):
                href = match["href"]
                break
        return "https://onefootball.com" + href


class CEVMatch(Match):
    def __init__(self, url) -> None:
        nurl = CEVMatch.extractLiveScore(url)
        super().__init__(url)
        jdata = requests.get(nurl).json()
        self._date = jdata.get("Date")
        self._team1 = CEVMatch.generateTeam(jdata.get("HomeTeam"))
        self._team2 = CEVMatch.generateTeam(jdata.get("AwayTeam"), True)
        self._competition = jdata.get("Competition")
        self._result = f"{jdata.get('HomeTeam').get('Score')}:{jdata.get('AwayTeam').get('Score')}"
        if jdata.get("GoldenSet"):
            self._result += f"<br><p class='accent additional-result'>({jdata.get('GoldenSet')})</p>"
        elif jdata.get("SetsFormatted"):
            self._result += f"<br><p class='muted smaller additional-result'>{jdata.get('SetsFormatted').replace('<span>', ''.replace('</span>', ''))}</p>"
        
        self._progress = jdata.get("Duration").replace(" mins", "'")

        date = datetime.strptime(self._date.split(" ")[0], "%d/%m/%Y")
        timeOfDate = self._date.split(" ")[1]
        
        today = datetime.today()
        if today.date() == date.date():
            self._date = f"Today {timeOfDate}"
        tomorrow = today + timedelta(days = 1)
        if tomorrow.date() == date.date():
            self._date = f"Tomorrow {timeOfDate}"
        
        if not jdata.get("HasGameStarted"):
            self._progress = self._date.split(" ")[1]
            if not jdata.get("HasGameFinished"):
                self._result = self._date.split(" ")[0]
        if jdata.get("HasGameFinished"):
            self._progress = "Full time"
        self._sport = "Volleyball"

    @staticmethod
    def generateTeam(team: dict, away: bool = False) -> str:
        if not isinstance(team, dict):
            return "N/A"
        img = None
        if isinstance(team, dict) and "Logo" in team and isinstance(team.get("Logo"), dict) and "Url" in team.get("Logo"):
            img = team.get("Logo").get("Url")
        name = team.get("Name")
        aClass = "match-score-team"
        sClass = "match-score-team__name"
        if away:
            sClass += " match-score-team__name--away"
        else:
            aClass += " match-score-team--home"
        return f"<of-match-score-team><a class='{aClass}'><img class='teamlogo' src='{img}' /><span class='{sClass}'>{name}</span></a></of-match-score-team>"

    @staticmethod
    def extractLiveScore(url) -> str:
        html = requests.get(url).text
        soup = BeautifulSoup(html, "html.parser")
        elem = soup.find("div", {"data-endpoint" : re.compile(r".*")})
        return "https:" + elem["data-endpoint"].replace("GetFormComponent", "getlivescorehero").replace("GetPlayByPlayComponent", "getlivescorehero")

    @staticmethod
    def FromCalendar(nurl) -> List[dict]:
        url = "https://www.cev.eu/umbraco/api/CalendarApi/GetCalendar?nodeId=11346&culture=en-US"
        jdata = requests.get(url).json()
        dates = jdata.get("Dates") or [ ]
        today = datetime.today()
        dates = [ date for date in dates
                  if date.get("DayNumber") >= today.day and date.get("NumMatches") > 0 ][:1]
        if len(dates) == 0:
            return [ ]
        def implement(match: CEVMatch) -> dict:
            match._sref = nurl
            return match.toJson()
        return [ implement(CEVMatch(match.get("MatchCentreUrl"))) for match in dates[0].get("Matches") if match.get("MatchCentreUrl")]