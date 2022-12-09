import{F as w,T as g,a as C}from"./song.22c0d5cf.js";import{T as S,P as k}from"./TrackInfo.f16b2cd4.js";import{B as A,i as I,C as m,o as v,f as T,w as B,g as d,u as D,G as N,a as o,_ as E,e as j,c as b,t as f,d as P}from"./index.6f3ae9d0.js";const R=o("br",null,null,-1),V=A({__name:"ImportSpotifyAlbum",props:{album:{type:Object,required:!0}},setup(l,{expose:n}){const e=l,h=I(),p=[{name:"playlist",type:"dropdown",required:!0,value:null,options:h.playlists.map(t=>({label:t.name,value:t.id}))}],s=m(null),r=m(null),a=m([]),i=async()=>{if(s.value.load(),a.value.length==0){const t=await fetch(`/api/spotify/albums/${e.album.id}`);a.value=await t.json()}s.value.show()},u=()=>{console.log(a.value);const t=new CustomEvent("player.play",{detail:{artist:e.album.artist,title:e.album.title,source:e.album.href}});window.dispatchEvent(t)},_=async t=>{a.value[t].added||(await C(r.value.toObject().playlist,a.value[t]),a.value[t].added=!0)},y=()=>{a.value.forEach((t,c)=>{_(c)})};return n({show:i}),(t,c)=>(v(),T(g,{ref_key:"modal",ref:s,name:"Import Album",submitName:"Add All",onSubmit:y,onClose:c[0]||(c[0]=z=>t.$emit("close"))},{default:B(()=>[d(S,{title:l.album.title,subtitle:l.album.artist,cover:l.album.cover,icons:[{name:"share",onClick:()=>D(N)(l.album.href)},{name:"play_arrow",onClick:u}]},null,8,["title","subtitle","cover","icons"]),d(w,{ref_key:"form",ref:r,options:p},null,512),R,d(k,{songs:a.value,onAdd:_,noCover:""},null,8,["songs"])]),_:1},512))}});const q={name:"ReleaseItem",components:{AddAlbumToPlaylist:V},methods:{redirect(){this.$refs.addAlbum.show()}},props:{cover:String,title:String,artist:String,href:String,releaseDate:String}},x={class:"wrapper drop-shadow-md"},F=["src"],O={key:0,class:"note"};function G(l,n,e,h,p,s){var a,i;const r=j("add-album-to-playlist");return v(),b("div",x,[d(r,{id:(a=this.href)==null?void 0:a.replace("https://open.spotify.com/album/",""),cover:e.cover,title:e.title,artist:e.artist,href:e.href,ref:"addAlbum",album:{id:(i=this.href)==null?void 0:i.replace("https://open.spotify.com/album/",""),title:this.title,artist:this.artist,cover:this.cover,href:this.href}},null,8,["id","cover","title","artist","href","album"]),o("div",{class:"item",onClick:n[0]||(n[0]=(...u)=>s.redirect&&s.redirect(...u))},[o("img",{src:e.cover},null,8,F),o("h4",null,f(e.title),1),o("p",null,f(e.artist),1),e.releaseDate?(v(),b("p",O,"Released on "+f(e.releaseDate),1)):P("",!0)])])}const L=E(q,[["render",G],["__scopeId","data-v-df09858d"]]);export{L as I,V as _};