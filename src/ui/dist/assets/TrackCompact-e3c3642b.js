import{_ as w,q as I,x as $,n as i,z as B,A as T,B as d,e as H,o as c,c as y,f as u,u as l,d as g,g as n,w as m,a as t,C as N,M as _,t as D,k as M,l as O}from"./index-2fc95183.js";import{_ as R}from"./ImportSpotifyAlbum.vue_vue_type_script_setup_true_lang-c94ee53c.js";import{_ as V}from"./ExternalEntry-e73c466b.js";import{C as q}from"./Card-3ca661b0.js";const z=e=>(M("data-v-9676db93"),e=e(),O(),e),A={class:"home-track-compact-wrapper"},E=["src"],P=z(()=>t("div",{class:"play"},[t("span",{class:"material-symbols-rounded"},"play_arrow")],-1)),j={class:"info"},F={class:"title"},G=["href"],J={class:"artist"},K={__name:"TrackCompact",props:{title:String,artist:String,cover:String,id:Number,href:String},emits:["play"],setup(e,{emit:C}){const a=e,S=I(),f=`/track/${$(String(a.id))}`,h=i(null),k=i(null),b=o=>{o.stopPropagation(),C("play")},x=()=>{var o,r;if(!((o=a.href)!=null&&o.includes("spotify.com"))){S.push(f);return}if((r=a.href)!=null&&r.includes("spotify.com/album/")){k.value.show();return}h.value.show()},s=i(a.cover);B(()=>a.cover,()=>{s.value=a.cover});const v=T(()=>d(s.value));return(o,r)=>{const p=H("router-link");return c(),y("div",A,[e.href.includes("spotify.com/album/")?(c(),u(R,{key:0,ref_key:"addRelease",ref:k,album:{cover:l(v),name:e.title,artist:e.artist,id:e.href.replace("https://open.spotify.com/album/",""),href:e.href,releaseDate:null}},null,8,["album"])):g("",!0),e.href.includes("spotify.com/track/")?(c(),u(V,{key:1,ref_key:"addSong",ref:h,song:{cover:l(v),title:e.title,artist:e.artist,id:e.href.replace("https://open.spotify.com/track/",""),href:e.href,releaseDate:null}},null,8,["song"])):g("",!0),n(q,{class:"home-track-compact","with-hover":"",onClick:x},{default:m(()=>[t("div",{style:N({backgroundImage:`url(${l(d)(s.value)})`}),class:"cover",onClick:b},[t("img",{src:l(d)(s.value),class:"hidden",onError:r[0]||(r[0]=Q=>s.value=null)},null,40,E),P],4),t("div",j,[t("span",F,[e.href?(c(),y("a",{key:1,href:e.href,class:"linkOnHover"},[n(_,{text:e.title},null,8,["text"])],8,G)):(c(),u(p,{key:0,to:f,class:"linkOnHover"},{default:m(()=>[n(_,{text:e.title},null,8,["text"])]),_:1}))]),n(p,{to:`/search/artist:${e.artist}`,class:"linkOnHover"},{default:m(()=>[t("span",J,D(e.artist),1)]),_:1},8,["to"])])]),_:1})])}}},Z=w(K,[["__scopeId","data-v-9676db93"]]);export{Z as T};