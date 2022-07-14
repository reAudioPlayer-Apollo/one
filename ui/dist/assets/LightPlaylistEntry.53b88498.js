import{S as v,E as m}from"./EditSong.84e0e070.js";import{H as p,_,M as k,e as d,o as P,f as S,w as u,g as n,a as l,j as r,t as y}from"./index.c762bf64.js";const x=new p("reapOne.track",22),A={name:"LightPlaylistEntry",components:{SongCtx:v,EditSong:m,Marquee:k},props:{index:Number,id:Number,artist:{type:String,default:"N/A"},title:{type:String,default:"N/A"},cover:{type:String,default:"/assets/img/music_placeholder.png"},source:String,album:{type:String,default:"N/A"},duration:{type:String,default:"N/A"},favourite:{type:Boolean,default:!1},playing:{type:Boolean,default:!1},loadAt:{type:Object}},data(){return{highlighted:!1,favourited:this.favourite,isAutoPlaylist:this.$route.path=="/collection/tracks",hovering:!1}},computed:{trackId(){return x.encode(this.id)}},methods:{download(){window.open(`/api/tracks/${this.id}/download`)},addToPlaylist(a){fetch(`/api/playlists/${a}/tracks`,{method:"POST",body:JSON.stringify({source:this.source})}).then(i=>{i.status==200&&this.$emit("requestUpdate")})},update(){this.$refs.editSongPopup.showModal=!0},remove(){},onselect(){this.highlighted=!this.highlighted},playAt(){console.log(this.$route.path);const a=this.loadAt||{};a.index=this.index,fetch("/api/player/at",{method:"POST",body:JSON.stringify(a)})},setFavourite(){fetch(`/api/tracks/${this.id}`,{method:"PUT",body:JSON.stringify({favourite:this.favourited,album:this.album,artist:this.artist,title:this.title,duration:this.duration,cover:this.cover,source:this.source})})},displayPlay(){const a=this.$refs.idOrPlay;a.innerHTML="play_arrow",a.classList.add("material-icons-round")},displayId(){const a=this.$refs.idOrPlay;a.innerHTML=this.index+1,a.classList.remove("material-icons-round")}},watch:{added(){console.log("change"),this.$refs.add.innerHTML=this.added?"done":"add"},favourited(){this.setFavourite()},favourite(){console.log("mounted",this.title,this.favourite,this.favourited),this.favourited=this.favourite,this.highlighted=!1}}},b={class:"track"},w=["src"],O={class:"trackwrapper"},M={class:"duration"};function N(a,i,t,C,o,e){const f=d("EditSong"),c=d("Marquee"),h=d("router-link"),g=d("SongCtx");return P(),S(g,{onDownload:e.download,onAddto:e.addToPlaylist,onRemove:e.remove,onUpdate:e.update,onLike:i[5]||(i[5]=s=>o.favourited=!o.favourited),isAutoPlaylist:o.isAutoPlaylist,liked:o.favourited,ref:"ctxMenu"},{default:u(()=>[n(f,{onClose:a.updatePlaylist,ref:"editSongPopup",cover:t.cover,id:t.id,title:t.title,album:t.album,artist:t.artist,source:t.source},null,8,["onClose","cover","id","title","album","artist","source"]),l("div",{onDblclick:i[1]||(i[1]=()=>{e.playAt(),e.onselect()}),onClick:i[2]||(i[2]=(...s)=>e.onselect&&e.onselect(...s)),onMouseover:i[3]||(i[3]=(...s)=>e.displayPlay&&e.displayPlay(...s)),onMouseleave:i[4]||(i[4]=(...s)=>e.displayId&&e.displayId(...s)),class:r(["playlistEntry",{selected:o.highlighted}])},[l("span",{onClick:i[0]||(i[0]=(...s)=>e.playAt&&e.playAt(...s)),ref:"idOrPlay",class:r([{playing:t.playing},"id"])},y(t.index+1),3),l("div",b,[l("img",{src:t.cover||"/assets/img/music_placeholder.png"},null,8,w),l("div",O,[l("span",{class:r(["title",{playing:t.playing}])},[n(h,{class:"linkOnHover",to:`/track/${e.trackId}`},{default:u(()=>[n(c,{text:t.title},null,8,["text"])]),_:1},8,["to"])],2),l("span",{class:r(["artist",{playing:t.playing}])},[n(h,{class:"linkOnHover",to:`/search/artist:${t.artist}`},{default:u(()=>[n(c,{text:t.artist},null,8,["text"])]),_:1},8,["to"])],2)])]),l("span",M,y(t.duration),1)],34)]),_:1},8,["onDownload","onAddto","onRemove","onUpdate","isAutoPlaylist","liked"])}var T=_(A,[["render",N],["__scopeId","data-v-c665f0e0"]]);export{T as L};