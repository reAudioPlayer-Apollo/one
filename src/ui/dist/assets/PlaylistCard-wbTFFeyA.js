import{e as b,j as A,l as y,o as f,i as w,w as h,g as d,u as I,ap as j,aL as O,q as $,a as u,aM as B,a8 as D,aa as q,s as N,a5 as x,A as E,f as M,d as g,E as T,J as V,t as v,c as F,C as J,_ as L}from"./index-CTxjSbok.js";import{p as C}from"./playerInPicture-Dfp9IAsf.js";const W=b({__name:"ImportSpotifyPlaylist",props:{playlist:{type:Object,required:!0}},setup(t,{expose:o}){const i=A(),e=t,n=y([{name:"playlist",type:"dropdown",required:!0,value:null,options:i.playlistsAsDropdown}]),r=y(null),p=y(null),s=y([]),c=async()=>{if(r.value.load(),s.value.length==0){const l=e.playlist.id==="liked"?"/api/spotify/tracks":`/api/spotify/playlists/${e.playlist.id}`,a=await fetch(l);s.value=await a.json()}r.value.show()},m=()=>{C("Spotify Playlist",e.playlist.name,e.playlist.href)},P=async l=>{if(l==="new"){const a=await N("classic",e.playlist.name,e.playlist.description,e.playlist.cover);return n.value[0].options=i.playlistsAsDropdown,n.value[0].value=a,a}return l},k=async(l,a=null)=>{s.value[l].added||(a??(a=p.value.toObject().playlist),a=await P(a),await q(a,s.value[l]),s.value[l].added=!0)},_=async()=>{let l=p.value.toObject().playlist;l=await P(l),s.value.forEach((a,S)=>{k(S,l)})};return o({show:c}),(l,a)=>(f(),w(D,{ref_key:"modal",ref:r,submit:{label:"Add All",icon:"add"},name:"Import Playlist",onClose:a[0]||(a[0]=S=>l.$emit("close")),onSubmit:_},{default:h(()=>[d(O,{cover:t.playlist.cover,icons:[{name:"share",onClick:()=>I(j)(t.playlist.href)},{name:"play_arrow",onClick:m}],title:t.playlist.name},null,8,["cover","icons","title"]),d($,{ref_key:"form",ref:p,options:n.value},null,8,["options"]),a[1]||(a[1]=u("br",null,null,-1)),d(B,{songs:s.value,onAdd:k},null,8,["songs"])]),_:1},512))}}),z={class:"relative"},G={class:"title"},H={key:0,class:"material-symbols-rounded"},K=b({__name:"PlaylistCard",props:{playlist:{type:Object,required:!0},isSpotify:{type:Boolean,default:!1}},setup(t){const o=t,i=x(),e=y(),n=E(()=>i.playlistPlayOrPauseIcon(o.playlist.id)),r=()=>{if(o.isSpotify){C(o.playlist.name,"Spotify",o.playlist.href);return}i.playlistId==o.playlist.id?i.playPause():i.loadPlaylist(o.playlist.id)},p=s=>{var c;console.log(o.isSpotify),o.isSpotify&&(s.preventDefault(),s.stopPropagation(),(c=e.value)==null||c.show(),console.log("showing",e.value))};return(s,c)=>{const m=M("router-link");return f(),w(m,{to:t.playlist.href,class:"no-underline"},{default:h(()=>[t.isSpotify?(f(),w(W,{key:0,ref_key:"importSpotify",ref:e,playlist:t.playlist},null,8,["playlist"])):g("",!0),d(J,{class:"home-playlist drop-shadow-md","with-hover":"",onClick:p},{default:h(()=>[u("div",z,[d(T,{src:t.playlist.cover,type:"playlist",name:t.playlist.name},null,8,["src","name"]),u("span",{class:"material-symbols-rounded ms-fill play",onClick:V(r,["stop","prevent"])},v(n.value),1)]),u("div",G,[t.playlist.type!="classic"?(f(),F("span",H,v(t.playlist.type=="smart"?"neurology":"bolt"),1)):g("",!0),u("h4",null,v(t.playlist.name),1)])]),_:1})]),_:1},8,["to"])}}}),U=L(K,[["__scopeId","data-v-d1d701cc"]]);export{U as P};