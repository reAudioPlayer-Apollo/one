import{e as w,z as b,m as C,l as d,v as B,o,c as n,a,t as c,b as _,i as I,w as $,F as j,h as N,g as m,I as f,u as L,C as R,aE as V,_ as E}from"./index-CTxjSbok.js";const F={class:"max-w-[60ch] w-full h-full flex items-center justify-center"},S={class:"flex-col"},z={key:0,class:"text-muted italic text-sm"},A={class:"ml-0"},D={class:"flex gap-2 items-center"},M={class:"text-muted uppercase text-sm"},O=["onClick"],T={class:"buttons flex gap-2"},q=w({__name:"ImportLink",setup(G){const h=b(),l=C(),r=d(""),t=d([]);B(async()=>{const i=h.params.id,s=atob(i),[e,...u]=s.split(":");if(e==="gist"){const[p,v,g]=u,y=`https://gist.githubusercontent.com/${p}/${v}/raw/${g}`,k=await(await fetch(y)).json();t.value=[k],r.value=p}});const x=async()=>{await V(t.value),l.push("/")};return(i,s)=>(o(),n("div",F,[a("div",S,[a("strong",null,c(r.value),1),s[1]||(s[1]=_(" wants to share: ")),t.value.length==0?(o(),n("span",z,"Nothing")):(o(),I(R,{key:1,class:"p-4 mt-4 w-max flex flex-col gap-4"},{default:$(()=>[a("ul",A,[(o(!0),n(j,null,N(t.value,e=>(o(),n("li",D,[a("span",M,c(e.type),1),_(" "+c(e.playlist.name)+" ",1),a("span",{class:"material-symbols-rounded cursor-pointer",onClick:u=>t.value.splice(t.value.indexOf(e),1)}," delete ",8,O)]))),256))]),a("div",T,[m(f,{type:"success",icon:"check",label:"Accept",onClick:x}),m(f,{type:"danger",icon:"close",label:"Reject",onClick:s[0]||(s[0]=e=>L(l).push("/"))})])]),_:1}))])]))}}),K=E(q,[["__scopeId","data-v-608ea9fa"]]);export{K as default};