import{F as u}from"./FullShelf-b301c76a.js";import{P as f}from"./PlaylistItem-a886fb81.js";import{_ as B,o as s,c,a,t as _,d as l,j,A as C,g as F,u as v,f as n,w as P,F as S,i as b}from"./index-a21b7814.js";import{C as w}from"./CollectionHeader-879e8bea.js";import"./Template-6d1fbb86.js";import"./IconButton-d131a59b.js";import"./Form-90b03f50.js";import"./Dropdown-3bb770a9.js";import"./Playlist-b3012551.js";import"./PlaylistHeader-235481c1.js";import"./ExternalEntry-9173684c.js";import"./song-09082ef7.js";import"./playerInPicture-af203fdf.js";const $={name:"ReleaseItemBig",methods:{redirect(){this.$router.push(this.href)}},props:{title:String,description:String,href:String,icon:String}},x={class:"itemBig drop-shadow-md"},N={key:0,class:"icon"},V={class:"material-symbols-rounded"},D={class:"wrapper"};function L(t,d,i,o,I,e){return s(),c("div",x,[a("div",{class:"item h-full flex justify-between",onClick:d[0]||(d[0]=(...r)=>e.redirect&&e.redirect(...r))},[i.icon?(s(),c("div",N,[a("span",V,_(i.icon),1)])):l("",!0),a("div",D,[a("h4",null,_(i.title),1),a("p",null,_(i.description),1)])])])}const h=B($,[["render",L],["__scopeId","data-v-f5318c1c"]]);const A={class:"padding-20"},E={class:"playlists"},H={components:{CollectionHeader:w,PlaylistItem:f,FullShelf:u,PlaylistItemBig:h},data(){return fetch("/api/me/liked").then(t=>t.json()).then(t=>{this.likedTracks=t}),fetch("/api/me/new").then(t=>t.json()).then(t=>{this.breakingTracks=t}),fetch("/api/spotify/playlists").then(t=>t.json()).then(t=>{this.spotifyPlaylists=t}),{likedTracks:null,breakingTracks:null,spotifyPlaylists:[]}}},O=Object.assign(H,{__name:"Playlists",setup(t){const d=j(),i=C(()=>d.playlists);return(o,I)=>(s(),c("div",A,[F(w),a("div",E,[v(i).length?(s(),n(u,{key:0,heading:"Playlists"},{default:P(()=>{var e,r,y,m,g,k;return[(r=(e=o.likedTracks)==null?void 0:e.songs)!=null&&r.length?(s(),n(h,{key:0,title:"Liked Songs",icon:"favorite",description:`${(m=(y=o.likedTracks)==null?void 0:y.songs)==null?void 0:m.length} liked songs`,href:"/collection/tracks"},null,8,["description"])):l("",!0),(k=(g=o.breakingTracks)==null?void 0:g.songs)!=null&&k.length?(s(),n(h,{key:1,title:"Breaking Songs",description:"your 25 newest songs",icon:"trending_up",href:"/collection/tracks/breaking"})):l("",!0),(s(!0),c(S,null,b(v(i),(p,T)=>(s(),n(f,{key:T,href:p.href,cover:p.cover,description:p.description,title:p.name,spotify:!1},null,8,["href","cover","description","title"]))),128))]}),_:1})):l("",!0),o.spotifyPlaylists.length?(s(),n(u,{key:1,heading:"Import From Spotify"},{default:P(()=>[(s(!0),c(S,null,b(o.spotifyPlaylists,(e,r)=>(s(),n(f,{key:r,cover:e.cover,description:e.description,title:e.name,id:e.id,spotify:!0,href:`https://open.spotify.com/playlist/${e.id}`},null,8,["cover","description","title","id","href"]))),128))]),_:1})):l("",!0)])]))}}),tt=B(O,[["__scopeId","data-v-5b2a3954"]]);export{tt as default};