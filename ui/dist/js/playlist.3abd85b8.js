(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playlist"],{3347:function(e,t,n){"use strict";n("6a9b")},"3a2e":function(e,t,n){"use strict";n("5715")},5715:function(e,t,n){},"6a9b":function(e,t,n){},"7fbc":function(e,t,n){},"8d04":function(e,t,n){"use strict";n("f33a")},"90f6":function(e,t,n){"use strict";n("be0d")},"924a":function(e,t,n){"use strict";n("a3c2")},a3c2:function(e,t,n){},be0d:function(e,t,n){},d538:function(e,t,n){"use strict";n("7fbc")},d9fa:function(e,t,n){"use strict";n.r(t);n("867d");var o=n("69be"),a=function(e){return Object(o["pushScopeId"])("data-v-125f6e55"),e=e(),Object(o["popScopeId"])(),e},i={class:"playlist"},l=Object(o["createTextVNode"])("Playlist"),c=a((function(){return Object(o["createElementVNode"])("hr",null,null,-1)})),r={class:"padding-20"},s={class:"grid"},d=a((function(){return Object(o["createElementVNode"])("hr",null,null,-1)})),u={class:"playlistEntries"};function p(e,t,n,a,p,h){var f=Object(o["resolveComponent"])("AddSong"),m=Object(o["resolveComponent"])("EditPlaylist"),b=Object(o["resolveComponent"])("fixed-playlist-header"),y=Object(o["resolveComponent"])("h7"),v=Object(o["resolveComponent"])("grid-header"),O=Object(o["resolveComponent"])("playlist-entry"),j=Object(o["resolveComponent"])("draggable"),N=Object(o["resolveDirective"])("observe-visibility");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createVNode"])(f,{onClose:h.updatePlaylist,ref:"addSongPopup"},null,8,["onClose"]),Object(o["createVNode"])(m,{onClose:h.updatePlaylist,playlistName:p.playlistName,playlistDescription:p.playlistDescription,ref:"editPlaylistPopup"},null,8,["onClose","playlistName","playlistDescription"]),Object(o["createVNode"])(b,{onLoadPlaylist:h.loadPlaylist,ref:"fixedHeading",class:Object(o["normalizeClass"])({hidden:p.fixedHeaderHidden}),title:p.playlistName},null,8,["onLoadPlaylist","class","title"]),Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"padding-20 playlisteditor",onClick:t[0]||(t[0]=function(){return h.editPlaylist&&h.editPlaylist.apply(h,arguments)})},[Object(o["createVNode"])(y,null,{default:Object(o["withCtx"])((function(){return[l]})),_:1}),Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(p.playlistName),1),Object(o["createElementVNode"])("h5",null,Object(o["toDisplayString"])(p.playlistDescription),1)])),[[N,h.headerVisibilityChanged]]),c,Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("span",{id:"loadPlaylist",onClick:t[1]||(t[1]=function(){return h.loadPlaylist&&h.loadPlaylist.apply(h,arguments)}),class:"material-icons-outlined"},"play_circle_filled"),Object(o["createElementVNode"])("span",{id:"addToPlaylist",onClick:t[2]||(t[2]=function(){return h.addToPlaylist&&h.addToPlaylist.apply(h,arguments)}),class:"material-icons-outlined"},"add_circle"),Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(v),d,Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(j,{modelValue:p.playlist,"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.playlist=e}),onChange:h.onPlaylistRearrange},{item:Object(o["withCtx"])((function(e){var t=e.element;return[Object(o["createVNode"])(O,{onDownload:h.download,onRequestUpdate:h.updatePlaylist,index:p.playlist.findIndex((function(e){return e.source==t.source})),source:t.source,playing:t.playing,id:t.id,title:t.title,album:t.album,artist:t.artist,cover:t.cover,favourite:t.favourite,duration:t.duration},null,8,["onDownload","onRequestUpdate","index","source","playing","id","title","album","artist","cover","favourite","duration"])]})),_:1},8,["modelValue","onChange"])])])])])}var h=n("afa6"),f=n("1494"),m=(n("a623"),n("3efd"),n("f258"),n("dfac"),n("89b1"),n("1c6f"),n("a15b"),n("4228"),n("526b"),n("c988")),b=n("8ed2"),y=n("dcbb"),v=function(e){return Object(o["pushScopeId"])("data-v-23f10b9b"),e=e(),Object(o["popScopeId"])(),e},O={class:"wrapper"},j={class:"header"},N=v((function(){return Object(o["createElementVNode"])("h3",null,"Add song",-1)})),g=v((function(){return Object(o["createElementVNode"])("span",{class:"material-icons-round"}," close ",-1)})),V=[g],E=v((function(){return Object(o["createElementVNode"])("h4",null,"Source",-1)})),w={class:"content"},x=v((function(){return Object(o["createElementVNode"])("h4",null,"Title",-1)})),C={class:"content"},P=v((function(){return Object(o["createElementVNode"])("h4",null,"Album",-1)})),S={class:"content"},k={type:"text",ref:"album"},$=v((function(){return Object(o["createElementVNode"])("h4",null,"Artist",-1)})),M={class:"content"},D=v((function(){return Object(o["createElementVNode"])("h4",null,"Cover",-1)})),T={class:"content"},_=["src"],I={class:"confirm"};function A(e,t,n,a,i,l){var c=Object(o["resolveComponent"])("FindSources"),r=Object(o["resolveComponent"])("vue-final-modal");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(r,{onClick:l.hideFindSourcesCtx,modelValue:i.showModal,"onUpdate:modelValue":t[8]||(t[8]=function(e){return i.showModal=e}),classes:"modal-container","content-class":"modal-content"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("div",j,[N,Object(o["createElementVNode"])("button",{class:"modal-close",onClick:t[0]||(t[0]=function(e){return i.showModal=!1})},V)]),E,Object(o["createVNode"])(c,{ref:"findSources",title:i.title,artist:i.artist},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("input",{onChange:t[1]||(t[1]=function(){return l.loadMetadata&&l.loadMetadata.apply(l,arguments)}),type:"text",ref:"source"},null,544),Object(o["createElementVNode"])("span",{class:"material-icons-round more",ref:"sourceMore",onClick:t[2]||(t[2]=function(){return l.opencontextmenu&&l.opencontextmenu.apply(l,arguments)})},"more_vert",512)])]})),_:1},8,["title","artist"]),x,Object(o["createElementVNode"])("div",C,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.title=e}),type:"text"},null,512),[[o["vModelText"],i.title]])]),P,Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("input",k,null,512)]),$,Object(o["createElementVNode"])("div",M,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.artist=e}),type:"text"},null,512),[[o["vModelText"],i.artist]])]),D,Object(o["createElementVNode"])("div",T,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"addSong cover","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.cover=e}),ref:"cover"},null,512),[[o["vModelText"],i.cover]]),Object(o["createElementVNode"])("img",{onClick:t[6]||(t[6]=function(){return l.openInNewTab&&l.openInNewTab.apply(l,arguments)}),class:"addSong cover",src:i.cover?i.cover:"/assets/img/music_placeholder.png"},null,8,_)]),Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("button",{onClick:t[7]||(t[7]=function(){return l.add&&l.add.apply(l,arguments)}),class:"negative"},"Add")])])]})),_:1},8,["onClick","modelValue"])])}n("ed98");var U=n("06b9"),H={name:"AddSong",components:{FindSources:U["a"]},data:function(){return{showModal:!1,cover:"",artist:"",title:""}},methods:{opencontextmenu:function(e){this.$refs.findSources.show(e)},hideFindSourcesCtx:function(){this.$refs.findSources.hide()},add:function(){var e=this;this.showModal=!1,console.log("fetch"),fetch("http://localhost:1234/api/add",{method:"POST",body:JSON.stringify({id:Number(this.$route.params.id),source:this.$refs.source.value,title:this.title,artist:this.artist,album:this.$refs.album.value,cover:this.cover})}).then((function(t){console.log(t),e.$emit("close")}))},loadMetadata:function(){var e=this;fetch("http://localhost:1234/api/metadata",{method:"POST",body:JSON.stringify({url:this.$refs.source.value})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.title=t.title,e.$refs.album.value=t.album,e.artist=t.artists.join(", "),e.cover=t.cover,e.$refs.source.value=t.src}))},openInNewTab:function(){window.open(this.cover?this.cover:"/assets/img/music_placeholder.png")}}},J=(n("3347"),n("924a"),n("1c27")),B=n.n(J);const z=B()(H,[["render",A],["__scopeId","data-v-23f10b9b"]]);var L=z,R=function(e){return Object(o["pushScopeId"])("data-v-6c5f56b9"),e=e(),Object(o["popScopeId"])(),e},F={class:"wrapper"},q={class:"header"},G=R((function(){return Object(o["createElementVNode"])("h3",null,"Edit details",-1)})),W=R((function(){return Object(o["createElementVNode"])("span",{class:"material-icons-round"}," close ",-1)})),K=[W],Q=R((function(){return Object(o["createElementVNode"])("h4",null,"Name",-1)})),X={class:"content"},Y=R((function(){return Object(o["createElementVNode"])("h4",null,"Description",-1)})),Z={class:"content"},ee={class:"confirm"};function te(e,t,n,a,i,l){var c=Object(o["resolveComponent"])("vue-final-modal");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(c,{modelValue:i.showModal,"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.showModal=e}),classes:"modal-container","content-class":"modal-content"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("div",q,[G,Object(o["createElementVNode"])("button",{class:"modal-close",onClick:t[0]||(t[0]=function(e){return i.showModal=!1})},K)]),Q,Object(o["createElementVNode"])("div",X,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.name=e}),type:"text",ref:"name"},null,512),[[o["vModelText"],i.name]])]),Y,Object(o["createElementVNode"])("div",Z,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.description=e}),type:"text",ref:"description"},null,512),[[o["vModelText"],i.description]])]),Object(o["createElementVNode"])("div",ee,[Object(o["createElementVNode"])("button",{onClick:t[3]||(t[3]=function(){return l.remove&&l.remove.apply(l,arguments)}),class:"negative left"},"Delete"),Object(o["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(){return l.apply&&l.apply.apply(l,arguments)}),class:"negative"},"Save")])])]})),_:1},8,["modelValue"])])}var ne={name:"EditPlaylist",props:{playlistName:String,playlistDescription:String},data:function(){return{showModal:!1,cover:"",name:this.playlistName,description:this.playlistDescription}},methods:{apply:function(){var e=this;this.showModal=!1,console.log("fetch"),fetch("http://localhost:1234/api/updatePlaylist",{method:"POST",body:JSON.stringify({id:Number(this.$route.params.id),name:this.name,description:this.description})}).then((function(t){console.log(t),e.$emit("close")}))},remove:function(){var e=this;fetch("http://localhost:1234/api/playlist/".concat(Number(this.$route.params.id)),{method:"DELETE"}).then((function(){e.$router.push("/")}))}},watch:{playlistName:function(){this.name=this.playlistName},playlistDescription:function(){this.description=this.playlistDescription}}};n("8d04"),n("d538");const oe=B()(ne,[["render",te],["__scopeId","data-v-6c5f56b9"]]);var ae=oe,ie=n("2e60"),le=n.n(ie),ce={components:{PlaylistEntry:y["a"],FixedPlaylistHeader:m["a"],GridHeader:b["a"],AddSong:L,EditPlaylist:ae,draggable:le.a},name:"Playlist",data:function(){return this.updatePlaylist(),{fixedHeaderHidden:!0,playlist:[],playlistName:"N/A",playlistDescription:""}},methods:{download:function(e){var t,n=null===(t=this.playlist)||void 0===t?void 0:t[e];window.open("http://localhost:1234/api/download/"+n.id)},onPlaylistRearrange:function(e){var t=e.moved;t&&fetch("http://localhost:1234/api/rearrange",{method:"POST",body:JSON.stringify({playlistIndex:Number(this.$route.params.id),songOldIndex:t.oldIndex,songNewIndex:t.newIndex})})},connect:function(){var e=this;console.log("attempting reconnect");var t=new WebSocket("ws://localhost:1234/ws");t.onclose=function(){console.log("ws closed"),setTimeout(this.connect,1e3)},t.onopen=function(){console.log("ws connected")},t.onmessage=function(t){var n=JSON.parse(t.data);e.updateData(n)}},headerVisibilityChanged:function(e){this.fixedHeaderHidden=e},addToPlaylist:function(){this.$refs.addSongPopup.showModal=!0},editPlaylist:function(){this.$refs.editPlaylistPopup.showModal=!0},updateData:function(e){if("player.song"==e.path){var t,n,o=(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.title)||"N/A",a=Object(f["a"])(this.playlist);try{for(a.s();!(n=a.n()).done;){var i=n.value;i.playing=i.title==o}}catch(l){a.e(l)}finally{a.f()}}},updatePlaylist:function(){var e=this;this.$route.params.id&&this.$route.path.includes("/playlist/")&&("create"!=this.$route.params.id?fetch("http://localhost:1234/api/playlist",{method:"POST",body:JSON.stringify({id:Number(this.$route.params.id)})}).then(function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(404!=n.status){t.next=3;break}return e.$router.push("/"),t.abrupt("return");case 3:return t.next=5,n.json();case 5:o=t.sent,e.playlist=o.songs,e.playlistName=o.name,e.playlistDescription=o.description,document.title="".concat(e.playlistName," - reAudioPlayer One"),console.log(e.playlist),e.connect();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):fetch("http://localhost:1234/api/playlist/create").then((function(e){return e.text()})).then((function(t){console.log(t),e.$router.push(t)})))},loadPlaylist:function(){fetch("http://localhost:1234/api/loadPlaylist",{method:"POST",body:JSON.stringify({id:Number(this.$route.params.id),type:"playlist"})})}},watch:{$route:function(){this.updatePlaylist()}}};n("90f6");const re=B()(ce,[["render",p],["__scopeId","data-v-125f6e55"]]);t["default"]=re},dcbb:function(e,t,n){"use strict";var o=n("69be"),a={class:"track"},i=["src"],l={class:"trackwrapper"},c={class:"duration"};function r(e,t,n,r,s,d){var u=Object(o["resolveComponent"])("EditSong"),p=Object(o["resolveComponent"])("Marquee"),h=Object(o["resolveComponent"])("router-link"),f=Object(o["resolveComponent"])("SongCtx");return Object(o["openBlock"])(),Object(o["createBlock"])(f,{onDownload:d.download,onAddto:d.addToPlaylist,onRemove:d.remove,onUpdate:d.update,onLike:t[7]||(t[7]=function(e){return s.favourited=!s.favourited}),isAutoPlaylist:s.isAutoPlaylist,liked:s.favourited,ref:"ctxMenu"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{onClose:e.updatePlaylist,ref:"editSongPopup",cover:n.cover,id:n.id,title:n.title,album:n.album,artist:n.artist,source:n.source},null,8,["onClose","cover","id","title","album","artist","source"]),Object(o["createElementVNode"])("div",{onDblclick:t[3]||(t[3]=function(){d.playAt(),d.onselect()}),onClick:t[4]||(t[4]=function(){return d.onselect&&d.onselect.apply(d,arguments)}),onMouseover:t[5]||(t[5]=function(){return d.displayPlay&&d.displayPlay.apply(d,arguments)}),onMouseleave:t[6]||(t[6]=function(){return d.displayId&&d.displayId.apply(d,arguments)}),class:Object(o["normalizeClass"])(["playlistEntry",{selected:s.highlighted}])},[Object(o["createElementVNode"])("span",{onClick:t[0]||(t[0]=function(){return d.playAt&&d.playAt.apply(d,arguments)}),ref:"idOrPlay",class:Object(o["normalizeClass"])([{playing:n.playing},"id"])},Object(o["toDisplayString"])(n.index+1),3),Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("img",{src:n.cover||"/assets/img/music_placeholder.png"},null,8,i),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(["title",{playing:n.playing}])},[Object(o["createVNode"])(h,{class:"linkOnHover",to:"/track/".concat(n.id)},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{text:n.title},null,8,["text"])]})),_:1},8,["to"])],2),Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(["artist",{playing:n.playing}])},[Object(o["createVNode"])(h,{class:"linkOnHover",to:"/search/".concat(n.artist)},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{text:n.artist},null,8,["text"])]})),_:1},8,["to"])],2)])]),Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(["album",{playing:n.playing}])},[Object(o["createVNode"])(p,{text:n.album},null,8,["text"])],2),Object(o["createElementVNode"])("span",{onClick:t[1]||(t[1]=function(e){return s.favourited=!s.favourited}),class:Object(o["normalizeClass"])(["favourite material-icons-round",{showfavourite:s.favourited||s.highlighted}])},Object(o["toDisplayString"])(s.favourited?"favorite":"favorite_border"),3),Object(o["createElementVNode"])("span",c,Object(o["toDisplayString"])(n.duration),1),Object(o["createElementVNode"])("span",{onClick:t[2]||(t[2]=function(){return d.showCtxMenu&&d.showCtxMenu.apply(d,arguments)}),class:Object(o["normalizeClass"])(["more material-icons-round",{hidden:!s.highlighted}])},"more_horiz",2)],34)]})),_:1},8,["onDownload","onAddto","onRemove","onUpdate","isAutoPlaylist","liked"])}n("dfac"),n("3efd"),n("f258"),n("89b1"),n("1c6f");var s=n("a279"),d=n("d0cc"),u=n("5acf"),p={name:"PlaylistEntry",components:{SongCtx:s["a"],EditSong:u["a"],Marquee:d["a"]},props:{index:Number,id:Number,source:String,artist:{type:String,default:"N/A"},cover:{type:String,default:"/assets/img/music_placeholder.png"},title:{type:String,default:"N/A"},album:{type:String,default:"N/A"},duration:{type:String,default:"N/A"},favourite:{type:Boolean,default:!1},playing:{type:Boolean,default:!1}},data:function(){return{highlighted:!1,favourited:this.favourite,isAutoPlaylist:"/collection/tracks"==this.$route.path}},methods:{download:function(){this.$emit("download",this.index)},addToPlaylist:function(e){var t=this;fetch("http://localhost:1234/api/add",{method:"POST",body:JSON.stringify({id:e,source:this.source})}).then((function(e){200==e.status&&t.$emit("requestUpdate")}))},remove:function(){var e=this;fetch("http://localhost:1234/api/remove",{method:"POST",body:JSON.stringify({playlistId:Number(this.$route.params.id),songId:this.id})}).then((function(t){200==t.status&&e.$emit("requestUpdate")}))},update:function(){this.$refs.editSongPopup.showModal=!0},hideCtxMenu:function(){this.$refs.ctxMenu.hide()},showCtxMenu:function(e){console.log("show"),this.$refs.ctxMenu.show(e)},onselect:function(){this.highlighted=!this.highlighted,this.hideCtxMenu()},displayPlay:function(){var e=this.$refs.idOrPlay;e.innerHTML="play_arrow",e.classList.add("material-icons-round")},displayId:function(){var e=this.$refs.idOrPlay;e.innerHTML=this.index+1,e.classList.remove("material-icons-round")},playAt:function(){console.log(this.$route.path);var e={index:this.index};this.$route.path.includes("/playlist/")&&(e.playlistIndex=Number(this.$route.params.id)),this.$route.path.includes("/collection/tracks")&&(e.type="collection"),fetch("http://localhost:1234/api/at",{method:"POST",body:JSON.stringify(e)})},setFavourite:function(){fetch("http://localhost:1234/api/updateSong",{method:"POST",body:JSON.stringify({id:this.id,favourite:this.favourited,album:this.album,artist:this.artist,title:this.title,duration:this.duration,cover:this.cover,source:this.source})})}},watch:{favourited:function(){this.setFavourite()},favourite:function(){console.log("mounted",this.title,this.favourite,this.favourited),this.favourited=this.favourite,this.highlighted=!1}}},h=(n("3a2e"),n("1c27")),f=n.n(h);const m=f()(p,[["render",r],["__scopeId","data-v-4cb927fe"]]);t["a"]=m},f33a:function(e,t,n){}}]);
//# sourceMappingURL=playlist.3abd85b8.js.map