import{F as m,G as x}from"./FixedPlaylistHeader.5cb40335.js";import{P}from"./PlaylistEntry.591816c5.js";import{_ as b,B as k,l as w,e as o,s as S,o as r,c as n,g as c,q as C,v as I,w as H,b as N,a as s,t as u,F as B,j as D,f as T,p as V,i as q}from"./index.e4364b30.js";const E={components:{PlaylistEntry:P,FixedPlaylistHeader:m,GridHeader:x},props:{src:{type:String,required:!0}},data(){return this.updateTracks(),{fixedHeaderHidden:!0,playlist:[],playlistName:"",store:k()}},watch:{currentSong(){this.updateIsPlaying()}},computed:{currentSong(){return this.store.song.id}},methods:{parseCover:w,download(e){var d;const l=(d=this.playlist)==null?void 0:d[e];window.open(`/api/tracks/${l.id}/download`)},updateIsPlaying(){console.log("Updating is playing",this.currentSong),this.playlist.forEach(e=>{e.playing=e.id==this.currentSong})},headerVisibilityChanged(e){this.fixedHeaderHidden=e},updateTracks(){fetch(this.src).then(e=>e.json()).then(e=>{this.playlist=e.songs,this.playlistName=e.name,this.updateIsPlaying()})},loadPlaylist(){fetch("/api/player/load",{method:"POST",body:JSON.stringify({type:"collection"})})}}},y=e=>(V("data-v-4c449e54"),e=e(),q(),e),F={class:"playlist"},U={class:"padding-20"},j=y(()=>s("hr",null,null,-1)),G={class:"padding-20"},O={class:"grid"},R=y(()=>s("hr",null,null,-1)),z={class:"playlistEntries"};function J(e,l,d,L,a,i){const _=o("fixed-playlist-header"),h=o("h7"),g=o("grid-header"),v=o("playlist-entry"),f=S("observe-visibility");return r(),n("div",F,[c(_,{onClick:i.loadPlaylist,ref:"fixedHeading",class:C({hidden:a.fixedHeaderHidden}),title:a.playlistName},null,8,["onClick","class","title"]),I((r(),n("div",U,[c(h,null,{default:H(()=>[N("Playlist")]),_:1}),s("h1",null,u(a.playlistName),1),s("h5",null,"Your "+u(a.playlist.length)+" favourite tracks, auto-generated just for you",1)])),[[f,i.headerVisibilityChanged]]),j,s("div",G,[s("span",{id:"loadPlaylist",onClick:l[0]||(l[0]=(...t)=>i.loadPlaylist&&i.loadPlaylist(...t)),class:"material-icons-outlined"},"play_circle_filled"),s("div",O,[c(g,{class:"hideIfMobile"}),R,s("div",z,[(r(!0),n(B,null,D(a.playlist,(t,p)=>(r(),T(v,{key:p,index:p,source:t.source,id:t.id,title:t.title,playing:t.playing,album:t.album,artist:t.artist,cover:i.parseCover(t.cover),favourite:t.favourite,duration:t.duration,onDownload:i.download,onRequestUpdate:i.updateTracks},null,8,["index","source","id","title","playing","album","artist","cover","favourite","duration","onDownload","onRequestUpdate"]))),128))])])])])}const K=b(E,[["render",J],["__scopeId","data-v-4c449e54"]]);export{K as I};