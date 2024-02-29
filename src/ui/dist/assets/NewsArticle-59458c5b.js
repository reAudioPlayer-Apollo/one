import{_ as f,L as m,i as d,c,a as i,t as o,b as y,d as u,O as w,f as p,o as n}from"./index-c248245e.js";import{E as k}from"./Error-cd77547d.js";const L={name:"NewsArticle",components:{Loader:m,Error:k},data(){return{error:"",article:{},fullWidth:!1}},methods:{updateData(){fetch(`/api/news/articles/${this.$route.params.url}`).then(async s=>{if(s.status==404){this.error="This wouldn't have happened if you had clicked on the links we provided!<br>ヽ(ಠ_ಠ)ノ",setTimeout(this.updateData,1e3);return}if(s.status==400){window.open(await s.text()),this.$router.push("/news");return}if(s.status==200){if(this.article=await s.json(),this.article.headline==="N/A"){window.open(this.article.href),this.$router.push("/news");return}let t=this.article.body.split(" ").filter(e=>e.includes('href="/'));t=t.map(e=>e.split('href="')[1].split('"')[0]);const h=this.article.href.split("/")[2],l=t.map(e=>"https://"+h+e);for(const e in t){let a=l[e];fetch("/api/news/articles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:l[e]})}).then(async r=>{r.status==200?a=await r.text():console.error(await r.text()),this.article.body=this.article.body.replaceAll(t[e],a)})}return}this.error=s.statusText})}},mounted(){this.updateData()}},b={key:2,class:"padding-20 newsArticle"},v=["innerHTML"],g={class:"leading-tight headline"},x=["innerHTML"],T={key:0,class:"date"},N=["href"],A={key:1,class:"my-4"},H=["innerHTML"];function M(s,t,h,l,e,a){const r=p("Error"),_=p("Loader");return e.error?(n(),d(r,{key:0,msg:e.error},null,8,["msg"])):e.article.headline?(n(),c("div",b,[i("span",{class:"toggleWidth material-icons-round",onClick:t[0]||(t[0]=W=>e.fullWidth=!e.fullWidth)},o(e.fullWidth?"close_fullscreen":"open_in_full"),1),i("div",{class:w([{slim:!e.fullWidth},"wrapper"])},[i("h6",{class:"accentLink topic",innerHTML:e.article.topic},null,8,v),i("h1",g,o(e.article.headline),1),i("h4",{class:"standfirst",innerHTML:e.article.standfirst},null,8,x),e.article.date?(n(),c("h6",T,[y(o(e.article.date)+", ",1),i("a",{href:e.article.href},o(e.article.href),9,N)])):u("",!0),e.article.body?(n(),c("hr",A)):u("",!0),i("div",{class:"body leading-relaxed text-md",innerHTML:e.article.body},null,8,H)],2)])):(n(),d(_,{key:1}))}const B=f(L,[["render",M],["__scopeId","data-v-32bc12c0"]]);export{B as default};