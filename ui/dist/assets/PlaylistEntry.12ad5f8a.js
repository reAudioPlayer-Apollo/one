import{S as x,E as _}from"./EditSong.79e013d7.js";import{H as g,_ as p,M as k,e as u,o as P,f as w,w as c,g as r,a as e,j as h,k as n,t as y}from"./index.50099120.js";const b=new g("reapOne.track",22),M=new g("reapOne.playlist",22),S={name:"PlaylistEntry",components:{SongCtx:x,EditSong:_,Marquee:k},props:{playlists:Array,index:Number,id:Number,source:String,artist:{type:String,default:"N/A"},cover:{type:String,default:"/assets/img/music_placeholder.png"},title:{type:String,default:"N/A"},album:{type:String,default:"N/A"},duration:{type:String,default:"N/A"},favourite:{type:Boolean,default:!1},playing:{type:Boolean,default:!1}},data(){return{highlighted:!1,favourited:this.favourite,isAutoPlaylist:this.$route.path=="/collection/tracks"}},computed:{trackId(){return b.encode(this.id)}},methods:{getPlaylistId(){return M.decode(this.$route.params.id)},download(){this.$emit("download",this.index)},addToPlaylist(l){fetch(`/api/playlists/${l}/tracks`,{method:"POST",body:JSON.stringify({source:this.source})}).then(i=>{i.status==200&&this.$emit("requestUpdate")})},remove(){fetch(`/api/playlists/${this.getPlaylistId()}/tracks`,{method:"DELETE",body:JSON.stringify({songId:this.id})}).then(l=>{l.status==200&&this.$emit("requestUpdate")})},update(){this.$refs.editSongPopup.showModal=!0},hideCtxMenu(){this.$refs.ctxMenu.hide()},showCtxMenu(l){console.log("show"),this.$refs.ctxMenu.show(l)},onselect(){this.highlighted=!this.highlighted,this.hideCtxMenu()},displayPlay(){const l=this.$refs.idOrPlay;l.innerHTML="play_arrow",l.classList.add("material-icons-round")},displayId(){const l=this.$refs.idOrPlay;l.innerHTML=this.index+1,l.classList.remove("material-icons-round")},playAt(){console.log(this.$route.path);const l={index:this.index};this.$route.path.includes("/playlist/")&&(l.playlistIndex=Number(this.getPlaylistId())),this.$route.path.includes("/collection/tracks")&&(l.type="collection"),this.$route.path.includes("/collection/tracks/breaking")&&(l.type="collection/breaking"),fetch("/api/player/at",{method:"POST",body:JSON.stringify(l)})},setFavourite(){fetch(`/api/tracks/${this.id}`,{method:"PUT",body:JSON.stringify({favourite:this.favourited,album:this.album,artist:this.artist,title:this.title,duration:this.duration,cover:this.cover,source:this.source})})}},watch:{favourited(){this.setFavourite()},favourite(){this.favourited=this.favourite,this.highlighted=!1}}},C={class:"h-full flex flex-col justify-center"},A={class:"track"},I=["src"],N={class:"trackwrapper"},O={class:"h-full flex flex-col justify-center w-full album"},E={class:"h-full flex flex-col justify-center grow-0"},T={class:"h-full flex flex-col justify-center"},j={class:"duration"},H={class:"h-full flex flex-col justify-center"},L={class:"mobilePlaylist showIfMobile"},q={class:"track"},B=["src"],D={class:"trackwrapper"};function U(l,i,t,J,o,s){const m=u("EditSong"),d=u("Marquee"),f=u("router-link"),v=u("SongCtx");return P(),w(v,{playlists:t.playlists,artist:t.artist,src:t.source,title:t.title,onDownload:s.download,onAddto:s.addToPlaylist,onRemove:s.remove,onUpdate:s.update,onLike:i[9]||(i[9]=a=>o.favourited=!o.favourited),isAutoPlaylist:o.isAutoPlaylist,liked:o.favourited,ref:"ctxMenu"},{default:c(()=>[r(m,{onClose:l.updatePlaylist,ref:"editSongPopup",cover:t.cover,id:t.id,title:t.title,album:t.album,artist:t.artist,source:t.source},null,8,["onClose","cover","id","title","album","artist","source"]),e("div",{onDblclick:i[3]||(i[3]=()=>{s.playAt(),s.onselect()}),onClick:i[4]||(i[4]=(...a)=>s.onselect&&s.onselect(...a)),onMouseover:i[5]||(i[5]=(...a)=>s.displayPlay&&s.displayPlay(...a)),onMouseleave:i[6]||(i[6]=(...a)=>s.displayId&&s.displayId(...a)),class:n(["playlistEntry hideIfMobile",{selected:o.highlighted}])},[e("div",C,[e("span",{onClick:i[0]||(i[0]=h((...a)=>s.playAt&&s.playAt(...a),["stop"])),ref:"idOrPlay",class:n([{playing:t.playing},"id"])},y(t.index+1),3)]),e("div",A,[e("img",{src:t.cover||"/assets/img/music_placeholder.png"},null,8,I),e("div",N,[e("span",{class:n(["title",{playing:t.playing}])},[r(f,{class:"linkOnHover",to:`/track/${s.trackId}`},{default:c(()=>[r(d,{text:t.title},null,8,["text"])]),_:1},8,["to"])],2),e("span",{class:n(["artist",{playing:t.playing}])},[r(f,{class:"linkOnHover",to:`/search/artist:${t.artist}`},{default:c(()=>[r(d,{text:t.artist},null,8,["text"])]),_:1},8,["to"])],2)])]),e("div",O,[e("span",{class:n(["",{playing:t.playing}])},[r(d,{text:t.album},null,8,["text"])],2)]),e("div",E,[e("span",{onClick:i[1]||(i[1]=h(a=>o.favourited=!o.favourited,["stop"])),class:n(["favourite material-icons-round",{showfavourite:o.favourited||o.highlighted}])},y(o.favourited?"favorite":"favorite_border"),3)]),e("div",T,[e("span",j,y(t.duration),1)]),e("div",H,[e("span",{onClick:i[2]||(i[2]=(...a)=>s.showCtxMenu&&s.showCtxMenu(...a)),class:n(["more material-icons-round",{hidden:!o.highlighted}])},"more_horiz",2)])],34),e("div",L,[e("div",q,[e("img",{onClick:i[7]||(i[7]=h((...a)=>s.playAt&&s.playAt(...a),["stop"])),src:t.cover||"/assets/img/music_placeholder.png"},null,8,B),e("div",D,[e("span",{class:n(["title",{playing:t.playing}])},[r(d,{text:t.title},null,8,["text"])],2),e("span",{class:n(["artist",{playing:t.playing}])},[r(d,{text:t.artist},null,8,["text"])],2)])]),e("span",{onClick:i[8]||(i[8]=(...a)=>s.showCtxMenu&&s.showCtxMenu(...a)),class:"more material-symbols-rounded"},"more_horiz")])]),_:1},8,["playlists","artist","src","title","onDownload","onAddto","onRemove","onUpdate","isAutoPlaylist","liked"])}const R=p(S,[["render",U],["__scopeId","data-v-556c13fc"]]);export{R as P};