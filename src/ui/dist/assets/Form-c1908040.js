import{m as x,n as h,o as s,f as u,w as D,a as n,t as $,P as F,c as r,r as j,d as v,N as b,e as B,k as N,l as O,_ as I,F as g,i as E,u as C,g as L,T as V,h as M,E as P,Q as A,R as Q,p as R,L as W}from"./index-63840441.js";import{I as w}from"./IconButton-fd8d7fa0.js";import{D as z}from"./Dropdown-685e63fc.js";const G=o=>(N("data-v-1581fd8c"),o=o(),O(),o),H={class:"wrapper"},J={class:"header bg-secondary rounded-t-2xl p-3"},K={class:"title font-black"},X=G(()=>n("span",{class:"title material-icons-round"}," close ",-1)),Y=[X],Z={key:1},ee={key:2,class:"p-4 pt-0 flex flex-col overflow-x-hidden overflow-y-auto"},ae={key:0,class:"confirm"},se=x({__name:"Template",props:{name:{type:String,required:!0},submit:{type:Object,required:!0},secondary:{type:Object,required:!1,default:null}},emits:["submit","close","secondary"],setup(o,{expose:y,emit:m}){const l=o,d=h(!1),c=h(!1),e=h(""),a=()=>c.value=!1,i=()=>{d.value=!1,c.value=!0},k=()=>{d.value=!0,c.value=!0},U=async(p,t)=>{k();const _=await window.fetch(p,t);return i(),_.ok?_:(e.value=await _.text(),null)},f=()=>{a(),m("close")},T=()=>{m("submit"),f()},q=()=>{m("secondary"),f()};return y({show:i,hide:a,load:k,fetch:U}),(p,t)=>{const _=B("vue-final-modal");return s(),u(_,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=S=>c.value=S),classes:"modal-container","content-class":"modal-content",onClick:t[1]||(t[1]=b(()=>{},["stop"])),onContextmenu:t[2]||(t[2]=b(()=>{},["stop"])),onDrag:t[3]||(t[3]=b(()=>{},["stop"]))},{default:D(()=>[n("div",H,[n("div",J,[n("h3",K,$(o.name),1),n("button",{class:"modal-close",onClick:f},Y)]),d.value?(s(),u(F,{key:0})):e.value?(s(),r("div",Z)):(s(),r("div",ee,[j(p.$slots,"default",{},void 0,!0),l.submit||l.secondary?(s(),r("div",ae,[l.secondary?(s(),u(w,{key:0,icon:l.secondary.icon,label:l.secondary.label,type:l.secondary.type,onClick:q},null,8,["icon","label","type"])):v("",!0),l.submit?(s(),u(w,{key:1,icon:l.submit.icon,label:l.submit.label,type:l.submit.type,onClick:T},null,8,["icon","label","type"])):v("",!0)])):v("",!0)]))])]),_:3},8,["modelValue"])}}});const _e=I(se,[["__scopeId","data-v-1581fd8c"]]),le={class:"form"},te={class:"content"},ne=["onClick"],oe=["accept","onChange"],ce={class:"imagePreview"},de=["onUpdate:modelValue","type","onChange"],re=x({__name:"Form",props:{options:{type:Array,required:!0}},setup(o,{expose:y}){const m=o;return y({toObject:()=>{const d={};return m.options.forEach(c=>{d[c.name]=c.value}),d}}),(d,c)=>(s(),r("div",le,[(s(!0),r(g,null,E(o.options,e=>(s(),r("div",{key:e.name,class:"option"},[n("h4",null,$(C(Q)(e.name)),1),n("div",te,[e.type=="upload"?(s(),r(g,{key:0},[n("span",{class:"material-symbols-rounded icon-button",onClick:()=>{var a,i;return(i=(a=d.$refs["upload-"+e.name])==null?void 0:a[0])==null?void 0:i.click()}}," file_upload ",8,ne),n("input",{ref_for:!0,ref:"upload-"+e.name,accept:e.accept,style:{display:"none"},type:"file",onChange:a=>e==null?void 0:e.onUpload(a.target.files[0])},null,40,oe),L(V,{ref_for:!0,ref:"cover",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,class:"addSong cover",type:"text",onChange:a=>e==null?void 0:e.onChange(e.value)},null,8,["modelValue","onUpdate:modelValue","icon","onChange"]),n("div",ce,[e.imagePreview?(s(),u(M,{key:0,src:C(R)(e.value),class:"cover",onClick:a=>C(W)(e.value)},null,8,["src","onClick"])):v("",!0)])],64)):e.type=="dropdown"?(s(),u(z,{key:1,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,options:e.options},null,8,["modelValue","onUpdate:modelValue","icon","options"])):e.type=="text"?(s(),u(V,{key:2,modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,icon:e.icon,placeholder:e.placeholder,required:e.required,type:e.type,onChange:a=>e.onChange?e==null?void 0:e.onChange(e.value):null},null,8,["modelValue","onUpdate:modelValue","icon","placeholder","required","type","onChange"])):P((s(),r("input",{key:3,"onUpdate:modelValue":a=>e.value=a,type:e.type,onChange:a=>e.onChange?e==null?void 0:e.onChange(e.value):null},null,40,de)),[[A,e.value]])])]))),128))]))}});const ve=I(re,[["__scopeId","data-v-93d1cb3f"]]);export{ve as F,_e as T};