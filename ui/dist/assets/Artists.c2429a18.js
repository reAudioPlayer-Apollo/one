import{F as l}from"./FullShelf.a0271eb6.js";import{A as d}from"./ArtistItem.522402b3.js";import{C as m}from"./CollectionHeader.e4eb49c6.js";import{_ as f,o as s,c as r,g as i,a as u,w as h,F as v,i as y,f as A,e as o}from"./index.c762bf64.js";import"./FindSources.b17baaa7.js";import"./SpotifyPlaylistEntry.60815110.js";import"./MiniPlayer.81a42f41.js";import"./SpotifyPlaylistHeader.3a49411a.js";const g={components:{CollectionHeader:m,ArtistItem:d,FullShelf:l},name:"Artists",data(){return fetch("/api/spotify/artists").then(t=>t.json()).then(t=>this.spotifyArtists.push(...t)),{spotifyArtists:[]}}},C={class:"padding-20"},x={class:"artists"};function F(t,k,B,w,a,H){const n=o("CollectionHeader"),c=o("artist-item"),p=o("full-shelf");return s(),r("div",C,[i(n),u("div",x,[i(p,{heading:"Following on Spotify"},{default:h(()=>[(s(!0),r(v,null,y(a.spotifyArtists,(e,_)=>(s(),A(c,{key:_,cover:e.cover,description:e.description,name:e.name,id:e.id},null,8,["cover","description","name","id"]))),128))]),_:1})])])}var b=f(g,[["render",F],["__scopeId","data-v-a55ee8c8"]]);export{b as default};