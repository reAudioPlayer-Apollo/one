import{F as p}from"./FullShelf-40d936fe.js";import{A as d}from"./ArtistItem-6e787d05.js";import{C as f}from"./CollectionHeader-f351a395.js";import{_ as m,c as a,g as i,a as u,w as h,e,o,F as v,i as y,f as A}from"./index-b250113a.js";const g={components:{CollectionHeader:f,ArtistItem:d,FullShelf:p},name:"Artists",data(){return fetch("/api/spotify/artists").then(t=>t.json()).then(t=>this.spotifyArtists.push(...t)),{spotifyArtists:[]}}},C={class:"padding-20"},w={class:"artists"};function x(t,F,k,B,n,H){const r=e("CollectionHeader"),c=e("artist-item"),_=e("full-shelf");return o(),a("div",C,[i(r),u("div",w,[i(_,{heading:"Following on Spotify"},{default:h(()=>[(o(!0),a(v,null,y(n.spotifyArtists,(s,l)=>(o(),A(c,{id:s.id,key:l,cover:s.cover,description:s.description,name:s.name,"show-follow-button":""},null,8,["id","cover","description","name"]))),128))]),_:1})])])}const V=m(g,[["render",x],["__scopeId","data-v-5aa5cc06"]]);export{V as default};