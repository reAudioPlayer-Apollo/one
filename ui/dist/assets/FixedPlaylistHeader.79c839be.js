import{_ as o,o as i,c as _,p,h as u,a as e,e as h,t as m,g as v}from"./index.c762bf64.js";const y={name:"GridHeader"},a=s=>(p("data-v-11b30391"),s=s(),u(),s),$={class:"gridHeader"},f=a(()=>e("span",{class:"id"},"#",-1)),x=a(()=>e("span",{class:"title"},"Title",-1)),b=a(()=>e("span",{class:"album"},"Album",-1)),g=a(()=>e("span",{class:"clock material-symbols-rounded"},"schedule",-1)),H=[f,x,b,g];function I(s,t,d,r,c,l){return i(),_("div",$,H)}var k=o(y,[["render",I],["__scopeId","data-v-11b30391"]]);const P={name:"FixedPlaylistHeader",components:{GridHeader:k},props:{title:String}},S={class:"fixedPlaylistHeader"},F={class:"upperWrapper"};function G(s,t,d,r,c,l){const n=h("grid-header");return i(),_("div",S,[e("div",F,[e("span",{id:"loadPlaylist",onClick:t[0]||(t[0]=B=>this.$emit("loadPlaylist")),class:"material-symbols-rounded hideIfMobile"},"play_circle"),e("h3",null,m(d.title),1)]),v(n,{class:"padding-20 darkback hideIfMobile"})])}var M=o(P,[["render",G],["__scopeId","data-v-600711f2"]]);export{M as F,k as G};