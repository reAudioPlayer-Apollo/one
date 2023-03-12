import{m as x,n as b,f as u,a as n,bz as _,t as I,L as j,c as r,r as D,d as v,T as F,o as s,k as B,l as N,_ as T,F as C,i as O,u as k,b$ as L,g as w,bI as V,p as M,bN as E,h as P,bw as z,bj as A}from"./index-d352562c.js";import{I as $}from"./IconButton-3b9ab991.js";import{D as W}from"./Dropdown-96615ab2.js";const G=o=>(B("data-v-963d749d"),o=o(),N(),o),H={class:"header bg-secondary rounded-t-2xl p-3"},J={class:"title font-black"},K=G(()=>n("span",{class:"title material-icons-round"}," close ",-1)),Q=[K],R={key:1},X={key:2,class:"p-4 pt-0 flex flex-col overflow-x-hidden overflow-y-auto"},Y={key:0,class:"confirm"},Z=x({__name:"Template",props:{name:{type:String,required:!0},submit:{type:Object,required:!0},secondary:{type:Object,required:!1,default:null}},emits:["submit","close","secondary"],setup(o,{expose:p,emit:i}){const l=o,d=b(!1),c=b(!1),e=b(""),a=()=>c.value=!1,m=()=>{d.value=!1,c.value=!0},g=()=>{d.value=!0,c.value=!0},U=async(h,t)=>{g();const y=await window.fetch(h,t);return m(),y.ok?y:(e.value=await y.text(),null)},f=()=>{a(),i("close")},q=()=>{i("submit"),f()},S=()=>{i("secondary"),f()};return p({show:m,hide:a,load:g,fetch:U}),(h,t)=>c.value?(s(),u(F,{key:0,to:"#popup-target"},[n("div",{class:"modal",onClick:t[1]||(t[1]=_(y=>c.value=!1,["stop"])),onContextmenu:t[2]||(t[2]=_(()=>{},["stop"])),onDrag:t[3]||(t[3]=_(()=>{},["stop"]))},[n("div",{class:"modal-content",onClick:t[0]||(t[0]=_(()=>{},["stop"]))},[n("div",H,[n("h3",J,I(o.name),1),n("button",{class:"modal-close",onClick:f},Q)]),d.value?(s(),u(j,{key:0})):e.value?(s(),r("div",R)):(s(),r("div",X,[D(h.$slots,"default",{},void 0,!0),l.submit||l.secondary?(s(),r("div",Y,[l.secondary?(s(),u($,{key:0,icon:l.secondary.icon,label:l.secondary.label,type:l.secondary.type,onClick:S},null,8,["icon","label","type"])):v("",!0),l.submit?(s(),u($,{key:1,icon:l.submit.icon,label:l.submit.label,type:l.submit.type,onClick:q},null,8,["icon","label","type"])):v("",!0)])):v("",!0)]))])],32)])):v("",!0)}});const ue=T(Z,[["__scopeId","data-v-963d749d"]]),ee={class:"form"},ae={class:"content"},se=["onClick"],le=["accept","onChange"],te={key:0,class:"imagePreview"},ne=["onUpdate:modelValue","type","onChange"],oe=x({__name:"Form",props:{options:{type:Array,required:!0}},setup(o,{expose:p}){const i=o;return p({toObject:()=>{const d={};return i.options.forEach(c=>{d[c.name]=c.value}),d}}),(d,c)=>(s(),r("div",ee,[(s(!0),r(C,null,O(o.options,e=>(s(),r("div",{key:e.name,class:"option"},[n("h4",null,I(k(L)(e.name)),1),n("div",ae,[e.type=="upload"?(s(),r(C,{key:0},[n("span",{class:"material-symbols-rounded icon-button",onClick:()=>{var a,m;return(m=(a=d.$refs["upload-"+e.name])==null?void 0:a[0])==null?void 0:m.click()}}," file_upload ",8,se),n("input",{ref_for:!0,ref:"upload-"+e.name,accept:e.accept,style:{display:"none"},type:"file",onChange:a=>e==null?void 0:e.onUpload(a.target.files[0])},null,40,le),w(V,{ref_for:!0,ref:"cover",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,class:"addSong cover",type:"text",onChange:a=>e==null?void 0:e.onChange(e.value)},null,8,["modelValue","onUpdate:modelValue","icon","onChange"]),e.imagePreview?(s(),r("div",te,[w(P,{src:k(M)(e.value),class:"cover",onClick:a=>k(E)(e.value)},null,8,["src","onClick"])])):v("",!0)],64)):e.type=="dropdown"?(s(),u(W,{key:1,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,options:e.options},null,8,["modelValue","onUpdate:modelValue","icon","options"])):e.type=="text"?(s(),u(V,{key:2,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,placeholder:e.placeholder,required:e.required,type:e.type,onChange:a=>e.onChange?e==null?void 0:e.onChange(e.value):null},null,8,["modelValue","onUpdate:modelValue","icon","placeholder","required","type","onChange"])):z((s(),r("input",{key:3,"onUpdate:modelValue":a=>e.value=a,type:e.type,onChange:a=>e.onChange?e==null?void 0:e.onChange(e.value):null},null,40,ne)),[[A,e.value]])])]))),128))]))}});const ie=T(oe,[["__scopeId","data-v-e0fee69e"]]);export{ie as F,ue as T};