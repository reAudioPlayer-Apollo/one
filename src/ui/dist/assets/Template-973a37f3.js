import{n as B,q as m,f as c,a,bB as r,t as I,L as S,c as f,r as T,d as i,T as q,o,l as j,m as D,_ as L}from"./index-73e4032e.js";import{I as h}from"./IconButton-8ea97c6a.js";const M=s=>(j("data-v-0ca4e489"),s=s(),D(),s),N={class:"header bg-secondary rounded-t-2xl p-3"},O={class:"title font-black"},V=M(()=>a("span",{class:"title material-icons-round"}," close ",-1)),$=[V],E={key:1},z={key:2,class:"p-4 pt-0 flex flex-col overflow-x-hidden overflow-y-auto"},A={key:0,class:"confirm"},F=B({__name:"Template",props:{name:{type:String,required:!0},submit:{type:Object,required:!0},secondary:{type:Object,required:!1,default:null}},emits:["submit","close","secondary"],setup(s,{expose:w,emit:d}){const e=s,u=m(!1),l=m(!1),v=m(""),_=()=>l.value=!1,b=()=>{u.value=!1,l.value=!0},k=()=>{u.value=!0,l.value=!0},x=async(y,t)=>{k();const n=await window.fetch(y,t);return b(),n.ok?n:(v.value=await n.text(),null)},p=()=>{_(),d("close")},C=()=>{d("submit"),p()},g=()=>{d("secondary"),p()};return w({show:b,hide:_,load:k,fetch:x}),(y,t)=>l.value?(o(),c(q,{key:0,to:"#popup-target"},[a("div",{class:"modal",onClick:t[1]||(t[1]=r(n=>l.value=!1,["stop"])),onContextmenu:t[2]||(t[2]=r(()=>{},["stop"])),onDrag:t[3]||(t[3]=r(()=>{},["stop"]))},[a("div",{class:"modal-content",onClick:t[0]||(t[0]=r(()=>{},["stop"]))},[a("div",N,[a("h3",O,I(s.name),1),a("button",{class:"modal-close",onClick:p},$)]),u.value?(o(),c(S,{key:0})):v.value?(o(),f("div",E)):(o(),f("div",z,[T(y.$slots,"default",{},void 0,!0),e.submit||e.secondary?(o(),f("div",A,[e.secondary?(o(),c(h,{key:0,icon:e.secondary.icon,label:e.secondary.label,type:e.secondary.type,onClick:g},null,8,["icon","label","type"])):i("",!0),e.submit?(o(),c(h,{key:1,icon:e.submit.icon,label:e.submit.label,type:e.submit.type,onClick:C},null,8,["icon","label","type"])):i("",!0)])):i("",!0)]))])],32)])):i("",!0)}});const J=L(F,[["__scopeId","data-v-0ca4e489"]]);export{J as T};