import{_ as k,o as s,c as o,a as r,b as m,t as v,d,r as w,e as S,f as h,w as l,u as P,p as $,g as n,F as _,h as p,i as H,j as O,k as C,l as j}from"./index.789939b0.js";import{g as D}from"./playlist.e85eb7bf.js";import{T as f}from"./TrackCompact.1bb767a5.js";import{S as g,L as b}from"./LightPlaylistEntry.64eea6ca.js";import"./ImportSpotifyAlbum.vue_vue_type_script_setup_true_lang.e49e81db.js";import"./song.21840599.js";import"./TrackInfo.2257f372.js";import"./MiniPlayer.d7ae9c7c.js";import"./ImportSpotifySong.vue_vue_type_script_setup_true_lang.851f266f.js";import"./SongCtx.e97d8c11.js";import"./EditSong.vue_vue_type_script_setup_true_lang.9b01811f.js";const I={name:"FlexShelf",props:{heading:String,icon:String}},N={class:"shelf"},T={class:"header"},B={key:0},F={key:0,class:"icon material-symbols-round"},q={class:"items"};function E(t,i,u,c,e,a){return s(),o("div",N,[r("div",T,[u.heading||u.icon?(s(),o("h2",B,[m(v(u.heading),1),u.icon?(s(),o("span",F,v(u.icon),1)):d("",!0)])):d("",!0)]),r("div",q,[w(t.$slots,"default",{},void 0,!0)])])}const y=k(I,[["render",E],["__scopeId","data-v-b884f5aa"]]);const L={class:"home-playlist drop-shadow-md"},R=["src"],V={__name:"Playlist",props:{name:{type:String,required:!0},cover:{type:String,required:!0},href:{type:String,required:!0}},setup(t){return(i,u)=>{const c=S("router-link");return s(),h(c,{to:t.href,class:"no-underline"},{default:l(()=>[r("div",L,[r("img",{src:P($)(t.cover)},null,8,R),r("h2",null,v(t.name),1)])]),_:1},8,["to"])}}},G=k(V,[["__scopeId","data-v-4219b825"]]);const A=t=>(C("data-v-2ebc74d4"),t=t(),j(),t),J={class:"home"},M={class:"main"},z={key:0,class:"playlists"},K={key:1,class:"liked"},Q={key:2,class:"breaking"},U={class:"side"},W={key:0,class:"releases"},X={key:1,class:"disovery"},Y={key:2,class:"recommendations"},Z=A(()=>r("h2",null,"Recommendations",-1)),x={name:"Home",data(){const t=new Date;return{greeting:t.getHours()<12?"Good morning":t.getHours()<18?"Good afternoon":"Good evening",releases:[],picks:[],songs:[],liked:[],breaking:[],recommendations:[],data:H()}},mounted(){fetch("/api/config").then(t=>{t.status==400&&this.$router.push("/welcome")}),fetch("/api/releases").then(t=>t.json()).then(t=>{this.releases=t.slice(0,3)}),fetch("/api/me/liked").then(t=>t.json()).then(t=>{this.liked=t.songs.slice(0,3)}),fetch("/api/me/new").then(t=>t.json()).then(t=>{this.breaking=t.songs.slice(0,3)}),this.pick()},computed:{playlists(){return this.data.playlists}},methods:{playDiscover(t){fetch("/api/player/load",{method:"POST",body:JSON.stringify({id:t.id,type:"track"})})},playRecommendation(t){const i=new CustomEvent("player.play",{detail:{artist:t.artist,title:t.title,source:t.src||t.url}});window.dispatchEvent(i)},async pick(){if(!this.data.playlists.length){setTimeout(()=>this.pick(),2e3);return}this.songs=(await Promise.all(this.playlists.map(async t=>(await D(t.id)).songs))).flat();for(let t=0;t<3;t++)this.picks.push(this.songs[Math.floor(Math.random()*this.songs.length)]);fetch("/api/spotify/recommendations",{method:"POST",body:JSON.stringify({query:`${this.picks[0].artist} ${this.picks[0].title}`})}).then(t=>t.json()).then(t=>{this.recommendations=t.slice(0,3)})}}},ee=Object.assign(x,{setup(t){return(i,u)=>{const c=S("router-link");return s(),o("div",J,[r("div",M,[i.playlists.length?(s(),o("div",z,[r("h2",null,[n(c,{to:"/collection/playlists",class:"linkOnHover"},{default:l(()=>[m("Playlists")]),_:1})]),n(y,null,{default:l(()=>[(s(!0),o(_,null,p(i.playlists,(e,a)=>(s(),h(G,{key:a,name:e.name,cover:e.cover,href:e==null?void 0:e.href},null,8,["name","cover","href"]))),128))]),_:1})])):d("",!0),i.liked.length?(s(),o("div",K,[r("h2",null,[n(c,{to:"/collection/tracks",class:"linkOnHover"},{default:l(()=>[m("Liked Songs")]),_:1})]),n(g),(s(!0),o(_,null,p(i.liked,(e,a)=>(s(),h(b,{key:a,index:a,loadAt:{type:"collection"},source:e.source,id:e.id,title:e.title,playing:e.playing,album:e.album,artist:e.artist,cover:e.cover,favourite:e.favourite,duration:e.duration},null,8,["index","source","id","title","playing","album","artist","cover","favourite","duration"]))),128))])):d("",!0),i.breaking.length?(s(),o("div",Q,[r("h2",null,[n(c,{to:"/collection/tracks/breaking",class:"linkOnHover"},{default:l(()=>[m("Breaking Songs")]),_:1})]),n(g),(s(!0),o(_,null,p(i.breaking,(e,a)=>(s(),h(b,{key:a,index:a,loadAt:{type:"collection/breaking"},source:e.source,id:e.id,title:e.title,playing:e.playing,album:e.album,artist:e.artist,cover:e.cover,favourite:e.favourite,duration:e.duration},null,8,["index","source","id","title","playing","album","artist","cover","favourite","duration"]))),128))])):d("",!0)]),r("div",U,[i.releases.length?(s(),o("div",W,[r("h2",null,[n(c,{to:"/collection/releases",class:"linkOnHover"},{default:l(()=>[m("Out now")]),_:1})]),n(y,null,{default:l(()=>[(s(!0),o(_,null,p(i.releases,(e,a)=>(s(),h(f,{onPlay:()=>i.playRecommendation(e),key:a,artist:e.artist,title:e.title,cover:e.cover,href:e.url},null,8,["onPlay","artist","title","cover","href"]))),128))]),_:1})])):d("",!0),i.picks.length?(s(),o("div",X,[r("h2",null,[n(c,{to:"/discover",class:"linkOnHover"},{default:l(()=>[m("Discover")]),_:1})]),n(y,null,{default:l(()=>[(s(!0),o(_,null,p(i.picks,(e,a)=>(s(),h(f,{onPlay:()=>i.playDiscover(e),key:a,artist:e.artist,title:e.title,cover:P(O)(e.cover),id:e.id,href:e.href},null,8,["onPlay","artist","title","cover","id","href"]))),128))]),_:1})])):d("",!0),i.recommendations.length?(s(),o("div",Y,[Z,n(y,null,{default:l(()=>[(s(!0),o(_,null,p(i.recommendations,(e,a)=>(s(),h(f,{onPlay:()=>i.playRecommendation(e),key:a,artist:e.artist,title:e.title,cover:e.cover,href:e.src},null,8,["onPlay","artist","title","cover","href"]))),128))]),_:1})])):d("",!0)])])}}}),he=k(ee,[["__scopeId","data-v-2ebc74d4"]]);export{he as default};