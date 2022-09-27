import{F as v}from"./FullShelf.ed782072.js";import{_ as f,o as a,c as i,a as r,d as y,t as l,F as m,i as p,f as h,w as S,p as T,h as $,e as g}from"./index.80f99097.js";const N={name:"NewsItemBig",methods:{redirect(){this.$router.push(this.href)}},computed:{updatedTimestamp(){const e=new Date(this.updated),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${s[e.getUTCDay()]} ${e.getUTCDate()} ${t[e.getUTCMonth()]} ${e.getUTCFullYear()} ${e.getUTCHours()}.${e.getUTCMinutes()} GMT`}},props:{image:String,title:String,summary:String,href:String,updated:String,source:String}},C={class:"itemBig"},I=["src"],x={class:"wrapper"},B=["innerHTML"],M={class:"small"};function k(e,s,t,c,_,o){return a(),i("div",C,[r("div",{class:"item",onClick:s[0]||(s[0]=(...u)=>o.redirect&&o.redirect(...u))},[t.image?(a(),i("img",{key:0,src:t.image},null,8,I)):y("",!0),r("div",x,[r("h4",null,l(t.title),1),r("p",{innerHTML:t.summary,class:"newsSummary"},null,8,B),r("p",M,l(`${o.updatedTimestamp}, ${t.source}`),1)])])])}var F=f(N,[["render",k],["__scopeId","data-v-6a316d94"]]);const D={components:{FullShelf:v,NewsItemBig:F},name:"News",data(){return{news:[]}},mounted(){fetch("/api/news/articles").then(e=>e.json()).then(e=>{this.news.length=0;for(const s of e){const t=this.news.findIndex(c=>c.source==s.source);t>=0?this.news[t].items.push(s):this.news.push({source:s.source,items:[s]})}})}},U=e=>(T("data-v-74ddf3f0"),e=e(),$(),e),H={class:"padding-20"},b={class:"news"},A=U(()=>r("h1",null,"News",-1));function J(e,s,t,c,_,o){const u=g("news-item-big"),w=g("full-shelf");return a(),i("div",H,[r("div",b,[A,(a(!0),i(m,null,p(_.news,d=>(a(),h(w,{key:d.source,heading:d.source},{default:S(()=>[(a(!0),i(m,null,p(d.items,n=>(a(),h(u,{key:n.url,title:n.title,image:n.image,summary:n.summary,href:n.link,updated:n.updated,source:n.source},null,8,["title","image","summary","href","updated","source"]))),128))]),_:2},1032,["heading"]))),128))])])}var V=f(D,[["render",J],["__scopeId","data-v-74ddf3f0"]]);export{V as default};