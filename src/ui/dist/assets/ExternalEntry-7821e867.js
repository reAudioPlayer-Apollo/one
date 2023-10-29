import{i as _,o as l,c as v,a as o,F as $,j as M,t as y,_ as A,k as N,q as m,f as k,w as E,g as f,u as I,ca as P,bZ as T,cg as O,x as D,b_ as j,B as C,d as b,aS as S,h as F,M as q,bc as V,c1 as W,cq as z,A as H,ct as J}from"./index-3c7a9a86.js";import{T as L}from"./Template-9352e3b4.js";import{F as Z}from"./Form-17d74877.js";const G={class:"padding-20 playlisteditor"},K=["src"],Q={class:"details"},R={class:"detailswrapper"},U=["onClick"],X=_({__name:"TrackInfo",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},cover:{type:String,required:!0},icons:{type:Array,required:!0}},setup(e){return(g,t)=>(l(),v("div",G,[o("img",{src:e.cover,class:"cover"},null,8,K),o("div",Q,[o("div",R,[(l(!0),v($,null,M(e.icons,(s,r)=>(l(),v("span",{key:r,class:"material-icons-round",onClick:s.onClick},y(s.name),9,U))),128))]),o("h1",null,y(e.title),1),o("h6",null,y(e.subtitle),1)])]))}});const Y=A(X,[["__scopeId","data-v-eab2eaeb"]]),ee=_({__name:"ImportSpotifySong",props:{song:{type:Object,required:!0}},setup(e,{expose:g}){const t=N(),s=e,r=m([{name:"playlist",type:"dropdown",icon:"playlist_add",required:!0,value:null,options:t.playlistsAsDropdown}]),c=m(null),i=m(null),u=m(null),p=async()=>{if(u.value){c.value.show();return}const a=await c.value.fetch("/api/browse/track",{method:"POST",body:JSON.stringify({url:s.song.href})});a&&(c.value.load(),u.value=await a.json(),c.value.show())},h=()=>{const a=new CustomEvent("player.play",{detail:{artist:s.song.artist,title:s.song.title,source:s.song.href}});window.dispatchEvent(a)},x=async a=>{if(a==="new"){const n=await D(s.song.title,s.song.artist,s.song.cover);return r.value[0].options=t.playlistsAsDropdown,r.value[0].value=n,n}return a},d=async(a,n=null)=>{var w;n??(n=i.value.toObject().playlist),console.log(n),n=await x(n),await T(n,u.value),s.song.added=!0,O.addSuccess(u.value.title,`Added to ${(w=t.playlists.find(B=>B.id==n))==null?void 0:w.name}`,3e3)};return g({show:p}),(a,n)=>(l(),k(L,{ref_key:"modal",ref:c,submit:{label:"Add",icon:"add"},name:"Import Song",onClose:n[0]||(n[0]=w=>a.$emit("close")),onSubmit:d},{default:E(()=>[f(Y,{cover:e.song.cover,icons:[{name:"share",onClick:()=>I(P)(e.song.href)},{name:"play_arrow",onClick:h}],title:e.song.title},null,8,["cover","icons","title"]),f(Z,{ref_key:"form",ref:i,options:r.value},null,8,["options"])]),_:1},512))}}),te={key:0,class:"cover"},se={class:"artist-title"},ae={class:"title"},ne={class:"artist"},oe={key:1,class:"album"},le=["onClick"],re=_({__name:"ExternalEntry",props:{song:{type:Object,required:!0},index:{type:Number,required:!0},withCover:{type:Boolean,required:!1,default:!1},withAlbum:{type:Boolean,required:!1,default:!1},selected:{type:Boolean,required:!1,default:!1},playlistId:{type:Number,required:!1,default:null},canImport:{type:Boolean,required:!1,default:!1}},emits:["update","add"],setup(e,{emit:g}){const t=e,s=g,r=j(),c=C(()=>t.song.id==r.song.id),i=m(!1);C(()=>t.playlistId==null?r.playlist.id:t.playlistId);const u=()=>{J(t.song.title,t.song.artist,t.song.source||t.song.href)},p=m(null),h=()=>{t.canImport?p.value.show():s("add")};return(x,d)=>(l(),v($,null,[e.canImport?(l(),k(ee,{key:0,ref_key:"updatePopup",ref:p,song:e.song},null,8,["song"])):b("",!0),o("div",{class:S([{playing:c.value,selected:e.selected,hovering:i.value,withCover:e.withCover,withAlbum:e.withAlbum},"playlist-entry"]),onDblclick:u,onMouseenter:d[0]||(d[0]=a=>i.value=!0),onMouseleave:d[1]||(d[1]=a=>i.value=!1)},[o("div",{class:S([{"material-symbols-rounded":i.value},"index text-right"]),onClick:u},y(i.value?"play_arrow":e.index+1),3),e.withCover?(l(),v("div",te,[f(F,{src:e.song.cover,type:"track"},null,8,["src"])])):b("",!0),o("div",se,[o("span",ae,[(l(),k(V(e.song.href.startsWith("http")?"a":"router-link"),{href:e.song.href,to:e.song.href,class:"linkOnHover"},{default:E(()=>[f(q,{text:e.song.title},null,8,["text"])]),_:1},8,["href","to"]))]),o("span",ne,[f(W,{artist:e.song.artist,class:"text-muted text-xs"},null,8,["artist"])])]),e.withAlbum&&!I(z)?(l(),v("div",oe,[f(q,{text:e.song.album},null,8,["text"])])):b("",!0),o("div",{class:"icon text-left material-symbols-rounded",onClick:H(h,["stop"])},y(e.song.added?"done":"add"),9,le)],34)],64))}});const de=A(re,[["__scopeId","data-v-2482bde4"]]);export{de as E,Y as T,ee as _};