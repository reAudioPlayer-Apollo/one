import{e as d,q as p,A as y,D as m,o as f,c as x,a as e,g as n,w as r,C as i,V as h,l as v,m as C,_ as w}from"./index-c248245e.js";const s=a=>(v("data-v-907ec981"),a=a(),C(),a),b={class:"flex h-full w-full items-center justify-center"},k={class:"types"},I=s(()=>e("div",{class:"flex flex-row justify-center"},[e("span",{class:"text-9xl material-symbols-rounded icon"},"library_music")],-1)),S=s(()=>e("h4",null,"Classic Playlist",-1)),g=s(()=>e("p",{class:"text-sm text-muted"},"Manage your playlist manually",-1)),j=s(()=>e("div",{class:"flex flex-row justify-center"},[e("span",{class:"text-9xl material-symbols-rounded icon"},"bolt")],-1)),q=s(()=>e("h4",null,"Smart Playlist",-1)),B=s(()=>e("p",{class:"text-sm text-muted"}," Define rules to automatically update your playlist ",-1)),P=d({__name:"Create",setup(a){const u=p(),l=y(),o=async c=>{const t=await h(c);u.push(t)};return m(()=>{l.query.type&&o(l.query.type)}),(c,t)=>(f(),x("div",b,[e("div",k,[n(i,{"with-hover":"",class:"cursor-pointer",onClick:t[0]||(t[0]=_=>o("classic"))},{default:r(()=>[I,S,g]),_:1}),n(i,{"with-hover":"",class:"cursor-pointer",onClick:t[1]||(t[1]=_=>o("smart"))},{default:r(()=>[j,q,B]),_:1})])]))}});const D=w(P,[["__scopeId","data-v-907ec981"]]);export{D as default};