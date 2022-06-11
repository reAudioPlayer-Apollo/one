import{F as I}from"./FullShelf.f7a645df.js";import{I as w}from"./ReleaseItem.adba3fff.js";import{A as B}from"./AddAlbumToPlaylist.2362979b.js";import{_ as D,b as i,o as r,c,e as S,a as n,t as g,j as _,i as l,f as p,F as v,h as y}from"./index.ea90892d.js";import{C as A}from"./CollectionHeader.55a219ce.js";import"./MiniPlayer.a7e09d70.js";import"./FindSources.08493556.js";const C={components:{AddAlbumToPlaylist:B},name:"ReleaseItemBig",methods:{redirect(){this.$refs.addAlbum.showModal=!0}},props:{cover:String,title:String,artist:String,href:String,releaseDate:String}},N={class:"itemBig"},x=["src"],R={class:"wrapper"},F={key:0,class:"note"};function j(u,o,t,a,s,d){const h=i("add-album-to-playlist");return r(),c("div",N,[S(h,{id:this.href.replace("https://open.spotify.com/album/",""),cover:t.cover,title:t.title,artist:t.artist,href:t.href,ref:"addAlbum"},null,8,["id","cover","title","artist","href"]),n("div",{class:"item",onClick:o[0]||(o[0]=(...f)=>d.redirect&&d.redirect(...f))},[n("img",{src:t.cover},null,8,x),n("div",R,[n("h4",null,g(t.title),1),n("p",null,g(t.artist),1),t.releaseDate?(r(),c("p",F,"Released on "+g(t.releaseDate),1)):_("",!0)])])])}var H=D(C,[["render",j],["__scopeId","data-v-41c0dcde"]]);const M={components:{CollectionHeader:A,FullShelf:I,Item:w,ItemBig:H},name:"Releases",data(){return{outSoon:[],outNow:[],outAlready:[]}},mounted(){fetch("/api/releases").then(u=>u.json()).then(u=>{const o=new Date;for(const t of u){const a=new Date(t.releaseDate);o<a?this.outSoon.push(t):o.getMonth()==a.getMonth()&&o.getDate()==a.getDate()&&o.getFullYear()==a.getFullYear()?this.outNow.push(t):this.outAlready.push(t)}})}},V={class:"padding-20"},O={class:"releases"};function Y(u,o,t,a,s,d){const h=i("CollectionHeader"),f=i("item-big"),m=i("full-shelf"),b=i("ItemBig"),k=i("Item");return r(),c("div",V,[S(h),n("div",O,[s.outSoon.length?(r(),l(m,{key:0,heading:"Out Soon"},{default:p(()=>[(r(!0),c(v,null,y(s.outSoon,e=>(r(),l(f,{key:e.url,releaseDate:e.releaseDate,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["releaseDate","cover","href","artist","title"]))),128))]),_:1})):_("",!0),s.outNow.length?(r(),l(m,{key:1,heading:"Out Now"},{default:p(()=>[(r(!0),c(v,null,y(s.outNow,e=>(r(),l(b,{key:e.url,releaseDate:e.releaseDate,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["releaseDate","cover","href","artist","title"]))),128))]),_:1})):_("",!0),s.outAlready.length?(r(),l(m,{key:2,heading:"Releases"},{default:p(()=>[(r(!0),c(v,null,y(s.outAlready,e=>(r(),l(k,{key:e.url,releaseDate:e.releaseDate,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["releaseDate","cover","href","artist","title"]))),128))]),_:1})):_("",!0)])])}var J=D(M,[["render",Y],["__scopeId","data-v-51d460fb"]]);export{J as default};