import{j as D,v as B,x as E,m as P,n as w,o,f as y,w as F,a as d,t as V,L as I,c as u,r as q,d as h,y as b,e as J,k as M,l as L,_ as T,F as C,i as A,u as g,g as H,T as S,h as W,z,A as R,B as G,p as K,C as Q,D as X}from"./index-59a56c74.js";import{I as $}from"./IconButton-288e0ba4.js";import{D as Y}from"./Dropdown-0ad947f4.js";const p=D(),Z=async e=>{await fetch(`/api/playlists/${e.id}`,{method:"POST",body:JSON.stringify({name:e.name,description:e.description,cover:e.cover})}),await p.fetchPlaylists()},ee=async e=>{const t=await fetch(`/api/playlists/${e}`);if(t.status===404)return null;const l=await t.json();for(const s of l.songs)s.href=`/track/${E(s.id)}`;return l.id=e,l},ge=async e=>await ee(B(e)),ke=async e=>{await fetch(`/api/playlists/${e}`,{method:"DELETE"}),await p.fetchPlaylists()},O=async()=>{const t=await(await fetch("/api/playlists/new")).json();return await p.fetchPlaylists(),t},Ce=async(e,t="",l="")=>{const s=await O();return await Z({id:s,name:e,description:t,cover:l}),s},Se=async(e,t)=>{await fetch(`/api/playlists/${e}/tracks`,{method:"DELETE",body:JSON.stringify({songId:t})}),await p.fetchPlaylists()},ae=e=>(M("data-v-6b1f1aae"),e=e(),L(),e),te={class:"wrapper"},se={class:"header bg-secondary rounded-t-2xl p-3"},ne={class:"title font-black"},oe=ae(()=>d("span",{class:"title material-icons-round"}," close ",-1)),le=[oe],ce={key:1},re={key:2,class:"p-4 pt-0 flex flex-col overflow-hidden"},ie={key:0,class:"confirm"},de=P({__name:"Template",props:{name:{type:String,required:!0},submit:{type:Object,required:!0},secondary:{type:Object,required:!1,default:null}},emits:["submit","close","secondary"],setup(e,{expose:t,emit:l}){const s=e,r=w(!1),i=w(!1),a=w(""),n=()=>i.value=!1,m=()=>{r.value=!1,i.value=!0},k=()=>{r.value=!0,i.value=!0},x=async(_,c)=>{k();const f=await window.fetch(_,c);return m(),f.ok?f:(a.value=await f.text(),null)},v=()=>{n(),l("close")},j=()=>{l("submit"),v()},U=()=>{l("secondary"),v()};return t({show:m,hide:n,load:k,fetch:x}),(_,c)=>{const f=J("vue-final-modal");return o(),y(f,{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=N=>i.value=N),classes:"modal-container","content-class":"modal-content",onClick:c[1]||(c[1]=b(()=>{},["stop"])),onContextmenu:c[2]||(c[2]=b(()=>{},["stop"])),onDrag:c[3]||(c[3]=b(()=>{},["stop"]))},{default:F(()=>[d("div",te,[d("div",se,[d("h3",ne,V(e.name),1),d("button",{class:"modal-close",onClick:v},le)]),r.value?(o(),y(I,{key:0})):a.value?(o(),u("div",ce)):(o(),u("div",re,[q(_.$slots,"default",{},void 0,!0),s.submit||s.secondary?(o(),u("div",ie,[s.secondary?(o(),y($,{key:0,icon:s.secondary.icon,label:s.secondary.label,type:s.secondary.type,onClick:U},null,8,["icon","label","type"])):h("",!0),s.submit?(o(),y($,{key:1,icon:s.submit.icon,label:s.submit.label,type:s.submit.type,onClick:j},null,8,["icon","label","type"])):h("",!0)])):h("",!0)]))])]),_:3},8,["modelValue"])}}});const $e=T(de,[["__scopeId","data-v-6b1f1aae"]]),ue={class:"form"},ye={class:"content"},me=["onClick"],fe=["accept","onChange"],he=["onUpdate:modelValue","type","onChange"],pe=P({__name:"Form",props:{options:{type:Array,required:!0}},setup(e,{expose:t}){const l=e;return t({toObject:()=>{const r={};return l.options.forEach(i=>{r[i.name]=i.value}),r}}),(r,i)=>(o(),u("div",ue,[(o(!0),u(C,null,A(e.options,a=>(o(),u("div",{key:a.name,class:"option"},[d("h4",null,V(g(G)(a.name)),1),d("div",ye,[a.type=="upload"?(o(),u(C,{key:0},[d("span",{class:"material-symbols-rounded icon-button",onClick:()=>{var n,m;return(m=(n=r.$refs["upload-"+a.name])==null?void 0:n[0])==null?void 0:m.click()}}," file_upload ",8,me),d("input",{ref_for:!0,ref:"upload-"+a.name,accept:a.accept,style:{display:"none"},type:"file",onChange:n=>a==null?void 0:a.onUpload(n.target.files[0])},null,40,fe),H(S,{ref_for:!0,ref:"cover",modelValue:a.value,"onUpdate:modelValue":n=>a.value=n,icon:a.icon,class:"addSong cover",type:"text",onChange:n=>a==null?void 0:a.onChange(a.value)},null,8,["modelValue","onUpdate:modelValue","icon","onChange"]),a.imagePreview?(o(),y(W,{key:0,src:g(K)(a.value),class:"imagePreview",onClick:n=>g(Q)(a.value)},null,8,["src","onClick"])):h("",!0)],64)):a.type=="dropdown"?(o(),y(Y,{key:1,modelValue:a.value,"onUpdate:modelValue":n=>a.value=n,icon:a.icon,options:a.options},null,8,["modelValue","onUpdate:modelValue","icon","options"])):a.type=="text"?(o(),y(S,{key:2,modelValue:a.value,"onUpdate:modelValue":n=>a.value=n,icon:a.icon,placeholder:a.placeholder,required:a.required,type:a.type,onChange:n=>a.onChange?a==null?void 0:a.onChange(a.value):null},null,8,["modelValue","onUpdate:modelValue","icon","placeholder","required","type","onChange"])):z((o(),u("input",{key:3,"onUpdate:modelValue":n=>a.value=n,type:a.type,onChange:n=>a.onChange?a==null?void 0:a.onChange(a.value):null},null,40,he)),[[R,a.value]])])]))),128))]))}});const Pe=T(pe,[["__scopeId","data-v-a0379122"]]),Ve=async e=>{await fetch(`/api/tracks/${e.id}`,{method:"PUT",body:JSON.stringify({source:e.source,title:e.title,artist:e.artist,album:e.album,cover:e.cover})})},Te=async e=>await(await fetch("/api/browse/track",{method:"POST",body:JSON.stringify({url:e})})).json(),Oe=async(e,t)=>{e==="new"&&(e=await O()),typeof e=="string"&&console.error("playlistId cannot be a string",e),await fetch(`/api/playlists/${e}/tracks`,{method:"POST",body:JSON.stringify({source:t.source,title:t.title,artist:t.artist,album:t.album,cover:t.cover})})},xe=async(e,t=!0)=>{await fetch(`/api/tracks/${e}`,{method:"PUT",body:JSON.stringify({favourite:t})})},je=async e=>{window.open(`/api/tracks/${e}/download`)},ve=async e=>await(await fetch(`/api/tracks/${e}`)).json(),Ue=async e=>{const t=X(e);return await ve(t)},Ne=async(e,t=!1,l=null)=>{const s={id:e};return t&&(s.forceFetch=!0),l&&(s.spotifyId=l),await(await fetch("/api/spotify/meta",{method:"POST",body:JSON.stringify(s)})).json()},De=async e=>await(await fetch(`/api/spotify/recommendations/${e}`)).json();export{Pe as F,$e as T,Oe as a,Te as b,Ce as c,je as d,Z as e,xe as f,ee as g,ke as h,O as i,ge as j,Ue as k,Ne as l,De as m,Se as r,Ve as u};