import{_ as V,N as z,j as D,G as i,n as d,E as F,aS as j,o,c as n,u as t,F as _,a as e,g as h,J as x,h as G,I as f,i as P,f as w,d as H,t as B,y as J,k as L,l as O}from"./index-59a56c74.js";import{P as q}from"./PlaylistEntry-f1de1d1d.js";import{P as A}from"./PlaylistHeader-fd9c1571.js";import{P as K}from"./PlaylistItem-58592a6a.js";import"./song-8627c30f.js";import"./IconButton-288e0ba4.js";import"./Dropdown-0ad947f4.js";import"./playerInPicture-af203fdf.js";import"./Playlist-792721be.js";import"./ExternalEntry-c35d63de.js";const S=u=>(L("data-v-f9fd69d2"),u=u(),O(),u),Q={class:"bigPlayer"},R={class:"upNow"},U=S(()=>e("div",{style:{"animation-delay":"0s"},class:"block"},null,-1)),W={key:0,class:"playlistOverflow drop-shadow-2xl"},X={class:"settings"},Y={key:1,class:"no-playlist-selected"},Z={class:"wrapper"},ss=S(()=>e("h2",null,"Nothing playing yet...",-1)),es={class:"playlists"},ts={__name:"BigPlayer",emits:["maximise"],setup(u,{emit:b}){const l=z(),C=D(),g=i(()=>l.playing),I=i(()=>l.song.cover),N=i(()=>l.song.id),$=i(()=>l.playlist),k=i(()=>`${l.song.title} • ${l.song.artist}`),E=i(()=>C.playlists),v=d(null);document.title=k.value,F(k,r=>{document.title=r}),j(()=>{window.setTimeout(()=>{var a,s;if((a=v.value)!=null&&a.scrollTop)return;const r=(s=document.getElementById(`bplayer-entry-${N.value}`))==null?void 0:s.offsetTop;r>=354&&(v.value.scrollTop=r-354)},1e3)});let p=d(!1);const T=()=>{p.value=!p.value,b("maximise",p.value)},y=d(!1),c=d(!1),m=d(-1);return(r,a)=>(o(),n("div",Q,[t(l).loaded?(o(),n(_,{key:0},[e("div",R,[h(G,{class:x([{playing:t(g),animate:c.value},"drop-shadow-2xl"]),src:t(I),type:"track"},null,8,["class","src"]),e("div",{class:x([{playing:t(g),animate:c.value},"blocks"])},[U,e("div",{style:f({"animation-delay":".25s"}),class:"block"},null,4),e("div",{style:f({"animation-delay":".5s"}),class:"block"},null,4)],2)]),y.value?H("",!0):(o(),n("div",W,[e("div",{ref_key:"playlistScroll",ref:v,class:"playlist"},[h(A),(o(!0),n(_,null,P(t($).songs,(s,M)=>(o(),w(q,{id:"bplayer-entry-"+s.id,key:s.source,index:M,selected:m.value==s.id,song:s,"with-cover":"",onClick:ls=>m.value==s.id?m.value=-1:m.value=s.id},null,8,["id","index","selected","song","onClick"]))),128))],512)])),e("div",X,[e("span",{class:"iconButton material-symbols-rounded",onClick:T},B(t(p)?"fullscreen_exit":"fullscreen"),1),e("span",{style:f({transform:`rotate(${y.value?0:180}deg)`}),class:"iconButton material-symbols-rounded",onClick:a[0]||(a[0]=()=>y.value=!y.value)},"menu_open",4),e("span",{class:"iconButton material-symbols-rounded",onClick:a[1]||(a[1]=()=>c.value=!c.value)},B(c.value?"motion_photos_off":"animation"),1)])],64)):(o(),n("div",Y,[e("div",Z,[ss,e("div",es,[(o(!0),n(_,null,P(t(E),s=>(o(),w(t(K),{key:s.id,cover:s.cover,description:s.description,title:s.name,onClick:J(()=>t(l).loadPlaylist(s.id),["stop"])},null,8,["cover","description","title","onClick"]))),128))])])]))]))}},ms=V(ts,[["__scopeId","data-v-f9fd69d2"]]);export{ms as default};