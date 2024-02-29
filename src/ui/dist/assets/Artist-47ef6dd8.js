import{e as F,o as a,i as n,w as x,b as H,t as v,C as w,_ as L,A as j,q,B as D,n as h,E as U,D as R,c as o,af as z,d as i,g as y,L as M,a as t,H as V,O as A,F as p,h as g,u as O,$ as J,P as W,a3 as Y,al as G,ap as B,aq as K,ag as Q,l as X,m as Z}from"./index-c248245e.js";import{F as E}from"./FactCard-030aefd2.js";import{P as ee}from"./PlaylistEntry-1c179b4a.js";import{s as ae}from"./spotify-7dee0250.js";import"./EditSong.vue_vue_type_script_setup_true_lang-e324b708.js";import"./playerInPicture-af203fdf.js";const te=F({__name:"Tag",props:{tag:{type:String,required:!0},withHash:{type:Boolean,default:!1}},setup(c){return(b,$)=>(a(),n(w,{class:"tag px-4 py-2 cursor-pointer","with-hover":""},{default:x(()=>[H(v(c.withHash?"#":"")+v(c.tag),1)]),_:1}))}});const se=L(te,[["__scopeId","data-v-2712639d"]]),k=c=>(X("data-v-58a94783"),c=c(),Z(),c),le={key:1,class:"fill-page"},oe={key:2,class:"artist p-4"},ne={class:"wrap"},re={class:"artist__data"},ie={class:"upper"},ue={class:"trac__info__details__normal"},de={key:0,class:"mt-0 mb-2 flex flex-row gap-2"},ce={class:"flex flew-row items-center"},_e={class:"font-black text-5xl ml-4"},pe={class:"features flex flex-row gap-4 mt-4 overflow-x-auto"},ve={class:"spotify-infos pt-4 pb-2"},me={class:"meta items-center"},fe={key:0,class:"flex flex-row align-items"},he=k(()=>t("span",{class:"material-symbols-rounded ms-fill mr-2"},"local_fire_department",-1)),ye={class:"font-bold"},ge=k(()=>t("hr",{class:"mb-4"},null,-1)),xe={class:"items"},we={key:0,class:"spotify-suggestions mt-4"},ke=k(()=>t("h2",null,"Top Tracks",-1)),be={class:"items"},$e=k(()=>t("h2",null,"Related Artists",-1)),Ce={class:"flex flex-row items-center gap-4"},Ie={class:"flex flex-col"},Se={class:"font-bold"},Te=F({__name:"Artist",setup(c){const b=j();q();const $=D(()=>b.params.name),e=h(null),m=h(null),u=h(null),f=h("url"),d=h(!1),C=async()=>{const r=await fetch(`/api/artists/${$.value}`);e.value=await r.json(),m.value=null,u.value="",d.value=!1,e.value.metadata.id.length==22&&(u.value="https://open.spotify.com/artist/"+e.value.metadata.id,d.value=!0),f.value="link"},I=async r=>{await fetch(`/api/artists/${$.value}`,{method:"PUT",body:JSON.stringify({spotifyId:r})}),e.value=null,await C()};U(u,()=>{var r,l;if(((l=(r=e.value)==null?void 0:r.metadata)==null?void 0:l.id)==B(u.value,"artist")){f.value="link";return}f.value="save"});const P=()=>{if(f.value=="link"){K(u.value);return}I(B(u.value,"artist"))};return R(C),U(()=>b.params.name,()=>{e.value=null,C()}),(r,l)=>{var S,T,N;return a(),o(p,null,[e.value?(a(),n(z,{key:0,src:e.value.cover,class:"-z-10"},null,8,["src"])):i("",!0),e.value?(a(),o("div",oe,[t("div",ne,[t("div",re,[t("div",ie,[y(V,{src:e.value.cover,class:"max-w-sm rounded-xl",placeholder:"person"},null,8,["src"]),t("div",{class:A([{"justify-end":e.value.metadata,"justify-center":!e.value.metadata},"track__info__details flex flex-col"])},[t("div",ue,[(S=e.value.metadata)!=null&&S.genres?(a(),o("div",de,[(a(!0),o(p,null,g(e.value.metadata.genres,s=>(a(),n(se,{tag:s,"with-hash":""},null,8,["tag"]))),256))])):i("",!0),t("div",ce,[t("h1",_e,v(e.value.name),1)])]),e.value.metadata?(a(),o(p,{key:0},[t("div",pe,[e.value.metadata.followers?(a(),n(E,{key:0,"primary-text":e.value.metadata.followers.toLocaleString(),class:"w-full","secondary-text":"Followers"},null,8,["primary-text"])):i("",!0),e.value.songs.length?(a(),n(E,{key:1,"primary-text":e.value.songs.length,class:"w-full","secondary-text":"Tracks in Your Library"},null,8,["primary-text"])):i("",!0)]),t("div",ve,[t("div",me,[e.value.metadata.popularity?(a(),o("span",fe,[he,t("span",ye,v(e.value.metadata.popularity),1)])):i("",!0)]),y(O(ae),{class:A([{enabled:d.value},"spotify-enable"]),onClick:l[0]||(l[0]=s=>d.value=!d.value)},null,8,["class"]),d.value?(a(),n(J,{key:0,modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=s=>u.value=s),icon:f.value,onClick:P},null,8,["modelValue","icon"])):i("",!0),t("span",{class:"material-symbols-rounded cursor-pointer",onClick:l[2]||(l[2]=s=>d.value?I(!1):I(!0))},v(d.value?"delete":"search"),1)])],64)):i("",!0)],2)]),y(W,{class:"hideIfMobile mt-8","with-album":"","with-more":""}),ge,t("div",xe,[(a(!0),o(p,null,g(e.value.songs,s=>Y((a(),n(ee,{index:e.value.songs.findIndex(_=>_.source==s.source),selected:m.value==s.id,song:s,"playlist-id":"artist","with-album":"","with-cover":"","with-more":"",artist:e.value.name,onClick:_=>m.value==s.id?m.value=-1:m.value=s.id,onUpdate:l[3]||(l[3]=_=>r.$emit("update"))},null,8,["index","selected","song","artist","onClick"])),[[Q,!0]])),256))]),e.value.metadata?(a(),o("div",we,[(T=e.value.metadata.topTracks)!=null&&T.length?(a(),n(w,{key:0,class:"p-4"},{default:x(()=>[ke,t("div",be,[(a(!0),o(p,null,g(e.value.metadata.topTracks,(s,_)=>(a(),n(G,{index:_,song:s,"can-import":"","cannot-add":"","with-album":"","with-cover":"","with-more":"",onUpdate:l[4]||(l[4]=Ne=>r.$emit("update"))},null,8,["index","song"]))),256))])]),_:1})):i("",!0),(N=e.value.metadata.related)!=null&&N.length?(a(),n(w,{key:1,class:"p-4 flex flex-col gap-2 related overflow-y-auto"},{default:x(()=>[$e,(a(!0),o(p,null,g(e.value.metadata.related,s=>(a(),n(w,{class:"cursor-pointer px-4 py-2","with-hover":"",onClick:_=>r.$router.push(`/artist/${s.name}`)},{default:x(()=>[t("div",Ce,[y(V,{src:s.cover,class:"w-8 h-8 rounded-xl",placeholder:"person"},null,8,["src"]),t("div",Ie,[t("h3",Se,v(s.name),1)])])]),_:2},1032,["onClick"]))),256))]),_:1})):i("",!0)])):i("",!0)])])])):(a(),o("div",le,[y(M)]))],64)}}});const Le=L(Te,[["__scopeId","data-v-58a94783"]]);export{Le as default};