import{n as B,q as v,bs as $,aI as D,o as t,c as m,_ as U,f as n,w as P,C as I,a as s,t as f,d as r,B as z,A as F,bM as H,g as x,h as W,aA as M,bS as K,u as h,F as V,bN as O,i as T,bI as R,bT as N,bU as X,l as G,m as J,bV as Q,bW as Y,bX as Z,b as ee,L as ae}from"./index-73e4032e.js";import{g as te,b as se,c as le,d as oe}from"./song-ab7f6530.js";import{E as ne}from"./ExternalEntry-22a55a1a.js";import{F as k}from"./FactCard-beea88de.js";import{_ as ue}from"./EditSong.vue_vue_type_script_setup_true_lang-9d32fc14.js";import{s as re}from"./spotify-0b961bc3.js";import"./Template-973a37f3.js";import"./IconButton-8ea97c6a.js";import"./Form-2144997c.js";import"./Dropdown-83fafee8.js";const ie=["aria-valuemax","aria-valuenow"],de=B({__name:"ProgressCircle",props:{max:{type:Number,required:!1,default:100},modelValue:{type:Number,required:!1,default:0},displayValue:{type:String,required:!0}},setup(u){const _=u,d=v(null),g=()=>{if(d.value){const c=_.modelValue/_.max*100;d.value.style.setProperty("--progress",`${c}%`),d.value.innerHTML=_.displayValue}};$(_,g,{deep:!0});const l=()=>{d.value&&(d.value.style.height=d.value.offsetWidth+"px")};return D(()=>{l(),g()}),window.addEventListener("resize",l),(c,y)=>(t(),m("div",{ref_key:"radialProgress",ref:d,"aria-valuemax":u.max,"aria-valuenow":u.modelValue,"aria-valuemin":"0",class:"radialProgress",role:"progressbar"},null,8,ie))}});const q=U(de,[["__scopeId","data-v-2329319f"]]),ce={class:"material-symbols-rounded ms-fill"},pe={key:0,class:"text-muted"},me=B({__name:"ButtonCard",props:{icon:{type:String,required:!0},label:{type:String,required:!1}},setup(u){return(_,d)=>(t(),n(I,{class:"p-4 flex flex-col w-full items-center justify-center"},{default:P(()=>[s("span",ce,f(u.icon),1),u.label?(t(),m("span",pe,f(u.label),1)):r("",!0)]),_:1}))}});const E=U(me,[["__scopeId","data-v-1b7199f2"]]),j=u=>(G("data-v-56a3b0f7"),u=u(),J(),u),_e={class:"track p-4"},ve={key:2},fe={class:"track__data"},ye={class:"upper"},xe={class:"trac__info__details__normal"},he={class:"text-secondary my-0 text-2xl font-bold"},be={class:"text-muted text-base ml-4 font-light"},ke={class:"flex flew-row items-center"},ge={class:"font-black text-5xl ml-4"},we={key:0,class:"features flex flex-row gap-4 pt-4 pb-2 overflow-x-auto"},Ce={class:"spotify-infos mt-4"},Ve={class:"meta items-center"},Se={class:"text-muted"},$e={key:0,class:"material-symbols-rounded ms-fill"},Pe={class:"flex flex-row align-items"},Ie=j(()=>s("span",{class:"material-symbols-rounded ms-fill mr-2"},"local_fire_department",-1)),Be={class:"font-bold"},Ue={class:"relative w-full mt-4"},Me={class:"spotify__features__circles"},Te={class:"text-muted mb-0 text-center text-sm capitalize flex justify-center"},Ne={class:"material-symbols-rounded mr-2"},qe=j(()=>s("h2",{class:"!text-left"},"Similar Songs",-1)),Ee=B({__name:"Track",setup(u){const _=R(),d=z(),g=F(()=>_.params.hash),l=v(null),c=v(null),y=v("url"),a=v(null),w=v([]),S=v([]),b=v(!1),A={acousticness:"piano",danceability:"nightlife",energy:"electric_bolt",happiness:"mood",instrumentalness:"mic_off",liveness:"groups_2",speechiness:"mic",loudness:"volume_up"},C=async(p=null)=>{var o;l.value=null,a.value=null,w.value=[],l.value=await te(g.value),window.document.title=`${l.value.title} - reAudioPlayer One`,a.value=await se(l.value.id,!!p,p),c.value=`https://open.spotify.com/track/${a.value.spotify.id}`,y.value="link",b.value=((o=a.value.spotify.id)==null?void 0:o.length)==22,w.value=await le(l.value.id),S.value=[];for(let[e,i]of Object.entries(a.value.spotify.features))["key","mode","tempo","duration_ms","time_signature"].includes(e)||typeof i=="number"&&(e=e.replaceAll("_"," "),e=e.replace("valence","happiness"),e==="loudness"&&(i=60+i),S.value.push({key:e,value:i,icon:A[e]}))};D(C),$(_,()=>C(),{deep:!0}),$(c,()=>{var p,o;if(((o=(p=a.value)==null?void 0:p.spotify)==null?void 0:o.id)==N(c.value,"track")){y.value="link";return}y.value="save"});const L=()=>{if(y.value==="save"){const p=N(c.value,"track");if(!p)return;C(p);return}X(c.value)};return(p,o)=>(t(),m(V,null,[l.value?(t(),n(H,{key:0,src:l.value.cover,class:"-z-10"},null,8,["src"])):r("",!0),s("div",_e,[l.value?(t(),n(ue,{key:0,ref:"updatePopup",song:l.value,onUpdate:o[0]||(o[0]=()=>C())},null,8,["song"])):r("",!0),l.value?(t(),m("div",ve,[s("div",fe,[s("div",ye,[x(W,{src:l.value.cover,class:"max-w-sm rounded-xl"},null,8,["src"]),s("div",{class:M([{"justify-end":a.value,"justify-center":!a.value},"track__info__details flex flex-col"])},[s("div",xe,[s("h3",he,[x(K,{artist:l.value.artist,class:"inline"},null,8,["artist"]),s("span",be,f(l.value.album),1)]),s("div",ke,[s("span",{class:"text-5xl cursor-pointer material-symbols-rounded ms-fill my-auto",onClick:o[1]||(o[1]=e=>h(d).loadPlaylist("track",l.value.id))}," play_circle "),s("h1",ge,f(l.value.title),1)])]),a.value&&a.value.spotify.features?(t(),m(V,{key:0},[a.value&&a.value.spotify.features?(t(),m("div",we,[a.value?(t(),n(k,{key:0,"primary-text":a.value.spotify.features.key+" "+a.value.spotify.features.mode,class:"w-full","secondary-text":"Key"},null,8,["primary-text"])):r("",!0),a.value?(t(),n(k,{key:1,"primary-text":h(Q)(a.value),class:"w-full","secondary-text":"Camelot"},null,8,["primary-text"])):r("",!0),a.value?(t(),n(k,{key:2,"primary-text":Math.round(a.value.spotify.features.tempo),class:"w-full","secondary-text":"BPM"},null,8,["primary-text"])):r("",!0),x(k,{"primary-text":h(Y)(l.value.duration),class:"w-full","secondary-text":"Duration"},null,8,["primary-text"]),a.value?(t(),n(k,{key:3,"primary-text":a.value.plays,class:"w-full","secondary-text":"Plays"},null,8,["primary-text"])):r("",!0),x(E,{icon:"edit",label:"Edit",onClick:o[2]||(o[2]=e=>p.$refs.updatePopup.show())}),x(E,{icon:"download",label:"Download",onClick:o[3]||(o[3]=e=>h(oe)(l.value.id))})])):r("",!0),s("div",Ce,[s("div",Ve,[s("span",Se,f(h(Z)(a.value.spotify.releaseDate)),1),a.value.spotify.explicit?(t(),m("span",$e,"explicit")):r("",!0),s("span",Pe,[Ie,s("span",Be,f(a.value.spotify.popularity),1)])]),x(h(re),{class:M([{enabled:b.value},"spotify-enable"]),onClick:o[4]||(o[4]=e=>b.value=!b.value)},null,8,["class"]),b.value?(t(),n(O,{key:0,modelValue:c.value,"onUpdate:modelValue":o[5]||(o[5]=e=>c.value=e),icon:y.value,onClick:L},null,8,["modelValue","icon"])):r("",!0)])],64)):r("",!0)],2)])]),s("div",Ue,[s("div",Me,[(t(!0),m(V,null,T(S.value,e=>(t(),n(I,{class:"p-2"},{default:P(()=>[e.key==="loudness"?(t(),n(q,{key:0,modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,"display-value":Math.round(-60+e.value)+"dB",class:"circle",max:"60"},null,8,["modelValue","onUpdate:modelValue","display-value"])):(t(),n(q,{key:1,modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,"display-value":Math.round(e.value*100)+"%",class:"circle",max:"1"},null,8,["modelValue","onUpdate:modelValue","display-value"])),s("p",Te,[s("span",Ne,f(e.icon),1),ee(" "+f(e.key),1)])]),_:2},1024))),256))])]),w.value.length?(t(),n(I,{key:0,class:"p-4 mt-4"},{default:P(()=>[qe,(t(!0),m(V,null,T(w.value,(e,i)=>(t(),n(ne,{key:i,index:i,song:e,"can-import":"","cannot-add":"","with-album":"","with-cover":""},null,8,["index","song"]))),128))]),_:1})):r("",!0)])):(t(),n(ae,{key:1}))])],64))}});const Re=U(Ee,[["__scopeId","data-v-56a3b0f7"]]);export{Re as default};