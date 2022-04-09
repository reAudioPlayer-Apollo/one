(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"0f5c":function(e,t,c){},"1d73":function(e,t,c){"use strict";c("bcba")},"35da":function(e,t,c){},"3be8":function(e,t,c){"use strict";c("d14d")},"479d":function(e,t,c){"use strict";c("0f5c")},"4d5e":function(e,t,c){"use strict";c("07e6"),c("0e37");var r=c("69be"),n={class:"wrapper"},o=["src"],l={key:0,class:"note"};function i(e,t,c,i,a,s){var d,u=Object(r["resolveComponent"])("add-album-to-playlist");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[Object(r["createVNode"])(u,{id:null===(d=this.href)||void 0===d?void 0:d.replace("https://open.spotify.com/album/",""),cover:c.cover,title:c.title,artist:c.artist,href:c.href,ref:"addAlbum"},null,8,["id","cover","title","artist","href"]),Object(r["createElementVNode"])("div",{class:"item",onClick:t[0]||(t[0]=function(){return s.redirect&&s.redirect.apply(s,arguments)})},[Object(r["createElementVNode"])("img",{src:c.cover},null,8,o),Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(c.title),1),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(c.artist),1),c.releaseDate?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",l,"Released on "+Object(r["toDisplayString"])(c.releaseDate),1)):Object(r["createCommentVNode"])("",!0)])])}var a=c("7c07"),s={name:"ReleaseItem",components:{AddAlbumToPlaylist:a["a"]},methods:{redirect:function(){this.$refs.addAlbum.showModal=!0}},props:{cover:String,title:String,artist:String,href:String,releaseDate:String}},d=(c("9a2d"),c("1c27")),u=c.n(d);const b=u()(s,[["render",i],["__scopeId","data-v-51ec51ca"]]);t["a"]=b},"5b51":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},6453:function(e,t,c){"use strict";c("35da")},"70f2":function(e,t,c){},"77b3":function(e,t,c){"use strict";var r=c("69be"),n={class:"shelf"},o={key:0,class:"header"},l={class:"items"};function i(e,t,c,i,a,s){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[c.heading?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("h2",null,Object(r["toDisplayString"])(c.heading),1),Object(r["createElementVNode"])("h5",{onClick:t[0]||(t[0]=function(){return s.redirect&&s.redirect.apply(s,arguments)})},"See All")])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",l,[Object(r["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var a={name:"Shelf",props:{heading:String,href:String},methods:{redirect:function(){this.href&&this.$router.push(this.href)}}},s=(c("1d73"),c("1c27")),d=c.n(s);const u=d()(a,[["render",i],["__scopeId","data-v-1b7b46db"]]);t["a"]=u},"8a8e":function(e,t,c){},"9a2d":function(e,t,c){"use strict";c("e52f")},bcba:function(e,t,c){},c720:function(e,t,c){"use strict";var r=c("edd6"),n=c("9a1e"),o=c("572d"),l=c("03b9"),i=c("5b51"),a=c("8c1c"),s=c("c30e"),d=c("4a04");n("search",(function(e,t,c){return[function(t){var c=l(this),n=void 0==t?void 0:s(t,e);return n?r(n,t,c):new RegExp(t)[e](a(c))},function(e){var r=o(this),n=a(e),l=c(t,r,n);if(l.done)return l.value;var s=r.lastIndex;i(s,0)||(r.lastIndex=0);var u=d(r,n);return i(r.lastIndex,s)||(r.lastIndex=s),null===u?-1:u.index}]}))},ce21:function(e,t,c){"use strict";c.r(t);c("ed98"),c("4228"),c("526b"),c("a15b");var r=c("69be"),n={class:"search"};function o(e,t,c,o,l,i){var a=Object(r["resolveComponent"])("TrackItem"),s=Object(r["resolveComponent"])("Shelf"),d=Object(r["resolveComponent"])("search-item"),u=Object(r["resolveComponent"])("Item"),b=Object(r["resolveComponent"])("artist-item");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{onKeyup:t[0]||(t[0]=function(){return i.enterText&&i.enterText.apply(i,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.query=e}),type:"text"},null,544),[[r["vModelText"],l.query]]),l.tracks.length?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:0,heading:"Songs"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.tracks,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(a,{key:e.url,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["cover","href","artist","title"])})),128))]})),_:1})):Object(r["createCommentVNode"])("",!0),l.spotifyTracks.length?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:1,heading:"Songs (Spotify)"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.spotifyTracks,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:e.url,preview:e.preview,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["preview","cover","href","artist","title"])})),128))]})),_:1})):Object(r["createCommentVNode"])("",!0),l.youtubeTracks.length?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:2,heading:"Songs (Youtube)"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.youtubeTracks,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:e.url,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["cover","href","artist","title"])})),128))]})),_:1})):Object(r["createCommentVNode"])("",!0),l.artists.length?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:3,heading:"Artists"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.artists,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:e.url,cover:e.cover,href:e.url,artist:e.artists.join(", "),title:e.title},null,8,["cover","href","artist","title"])})),128))]})),_:1})):Object(r["createCommentVNode"])("",!0),l.spotifyArtists.length?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:4,heading:"Artists (Spotify)"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(l.spotifyArtists,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:t,cover:e.cover,description:e.description,name:e.name,id:e.id,showFollowButton:!0},null,8,["cover","description","name","id"])})),128))]})),_:1})):Object(r["createCommentVNode"])("",!0)])}var l=c("e599"),i=(c("3efd"),c("f258"),c("07e6"),c("c720"),c("13c1")),a=c("4d5e"),s={class:"wrapper"},d=["src"],u={key:0,class:"note"};function b(e,t,c,n,o,l){var i=Object(r["resolveComponent"])("add-song-to-playlist");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[Object(r["createVNode"])(i,{href:c.href,cover:c.cover,title:c.title,artist:c.artist,preview:c.preview,ref:"addAlbum"},null,8,["href","cover","title","artist","preview"]),Object(r["createElementVNode"])("div",{class:"item",onClick:t[0]||(t[0]=function(){return l.redirect&&l.redirect.apply(l,arguments)})},[Object(r["createElementVNode"])("img",{src:c.cover},null,8,d),Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(c.title),1),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(c.artist),1),c.releaseDate?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",u,"Released on "+Object(r["toDisplayString"])(c.releaseDate),1)):Object(r["createCommentVNode"])("",!0)])])}var p=function(e){return Object(r["pushScopeId"])("data-v-12f811ec"),e=e(),Object(r["popScopeId"])(),e},h={class:"wrapper"},f={class:"header"},j=p((function(){return Object(r["createElementVNode"])("h3",null,"Add song",-1)})),O=p((function(){return Object(r["createElementVNode"])("span",{class:"material-icons-round"}," close ",-1)})),m=[O],v=p((function(){return Object(r["createElementVNode"])("h4",null,"To Playlist",-1)})),k=p((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),y=["src"],g={class:"details"},S={class:"detailswrapper"},B=Object(r["createTextVNode"])("Song"),V={class:"confirm"};function E(e,t,c,n,o,l){var i=Object(r["resolveComponent"])("h7"),a=Object(r["resolveComponent"])("mini-player"),s=Object(r["resolveComponent"])("vue-final-modal"),d=Object(r["resolveDirective"])("observe-visibility");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(s,{onClick:e.hideFindSourcesCtx,modelValue:o.showModal,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.showModal=e}),classes:"modal-containerr","content-class":"addAlbumToPlaylistPopup"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",h,[Object(r["createElementVNode"])("div",f,[j,Object(r["createElementVNode"])("button",{class:"modal-close",onClick:t[0]||(t[0]=function(){return l.close&&l.close.apply(l,arguments)})},m)]),v,Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.selectedPlaylist=e})},[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.playlists,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("option",{key:e},Object(r["toDisplayString"])(e),1)})),128))],512),[[r["vModelSelect"],o.selectedPlaylist]]),k,Object(r["createElementVNode"])("div",null,[Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"padding-20 playlisteditor",onClick:t[3]||(t[3]=function(){return e.editPlaylist&&e.editPlaylist.apply(e,arguments)})},[Object(r["createElementVNode"])("img",{class:"cover",src:c.cover},null,8,y),Object(r["createElementVNode"])("div",g,[Object(r["createElementVNode"])("div",S,[Object(r["createVNode"])(i,null,{default:Object(r["withCtx"])((function(){return[B]})),_:1}),Object(r["createElementVNode"])("span",{class:"material-icons-round share",onClick:t[2]||(t[2]=function(){return l.share&&l.share.apply(l,arguments)})},"share")]),Object(r["createElementVNode"])("h1",null,Object(r["toDisplayString"])(c.title),1),Object(r["createElementVNode"])("h5",null,Object(r["toDisplayString"])(c.artist),1)])])),[[d,e.headerVisibilityChanged]])]),Object(r["createElementVNode"])("div",V,[Object(r["createVNode"])(a,{class:"miniPlayer",src:c.preview},null,8,["src"]),Object(r["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(){return l.add&&l.add.apply(l,arguments)}),class:"negative"},"Add")])])]})),_:1},8,["onClick","modelValue"])])}c("867d");var N=c("cb9b"),w={components:{MiniPlayer:N["a"]},name:"AddSongToPlaylist",props:{cover:String,artist:String,title:String,href:String,preview:String},data:function(){return{showModal:!1,selectedPlaylist:-1,track:{},playlists:[]}},methods:{share:function(){window.open(this.href)},close:function(){this.showModal=!1,this.$emit("close")},loadMetadata:function(){var e=this;fetch("http://localhost:1234/api/metadata",{method:"POST",body:JSON.stringify({url:this.href})}).then((function(e){return e.json()})).then((function(t){e.track=t}))},openInNewTab:function(){window.open(this.cover?this.cover:"/assets/img/music_placeholder.png")},add:function(){var e=this,t=this.track,c=this.playlists.findIndex((function(t){return t==e.selectedPlaylist}));console.log(t,c),c<0?alert("no playlist selected"):fetch("http://localhost:1234/api/add",{method:"POST",body:JSON.stringify({id:c,source:t.src,title:t.title,artist:t.artists.join(", "),album:this.title,cover:this.cover})}).then((function(c){200==c.status&&(t.added=!0,e.close())}))}},watch:{showModal:function(){var e=this;this.showModal&&(fetch("http://localhost:1234/api/playlists").then((function(e){return e.json()})).then((function(t){var c;e.playlists.length=0,(c=e.playlists).push.apply(c,Object(l["a"])(t))})),this.loadMetadata())}}},C=(c("e0d3"),c("479d"),c("1c27")),T=c.n(C);const I=T()(w,[["render",E],["__scopeId","data-v-12f811ec"]]);var x=I,D={components:{AddSongToPlaylist:x},name:"SearchItem",methods:{redirect:function(){this.$refs.addAlbum.showModal=!0}},props:{cover:String,title:String,artist:String,releaseDate:String,href:String,preview:String}};c("6453");const A=T()(D,[["render",b],["__scopeId","data-v-799cbdbe"]]);var _=A,P=c("77b3"),M={class:"wrapper"},$=["src"];function F(e,t,c,n,o,l){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",M,[Object(r["createElementVNode"])("div",{class:"item",onClick:t[0]||(t[0]=function(){return l.redirect&&l.redirect.apply(l,arguments)})},[Object(r["createElementVNode"])("img",{src:c.cover},null,8,$),Object(r["createElementVNode"])("h4",null,Object(r["toDisplayString"])(c.title),1),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(c.artist),1)])])}var q={name:"TrackItem",methods:{redirect:function(){console.log("redirect"),this.$router.push(this.href)}},props:{cover:String,title:String,artist:String,href:String}};c("e80f");const L=T()(q,[["render",F],["__scopeId","data-v-79083404"]]);var J=L,R={name:"Search",components:{Shelf:P["a"],Item:a["a"],SearchItem:_,ArtistItem:i["a"],TrackItem:J},data:function(){return{query:"",spotifyTracks:[],spotifyArtists:[],tracks:[],artists:[],youtubeTracks:[]}},methods:{search:function(){var e=this,t=this.$route.params.query;t&&fetch("http://localhost:1234/api/search",{method:"POST",body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(t){var c,r,n,o,i;e.spotifyTracks.length=0,e.spotifyArtists.length=0,e.tracks.length=0,e.artists.length=0,e.youtubeTracks.length=0,(c=e.spotifyTracks).push.apply(c,Object(l["a"])(t.spotifyTracks||[])),(r=e.spotifyArtists).push.apply(r,Object(l["a"])(t.spotifyArtists||[])),(n=e.tracks).push.apply(n,Object(l["a"])(t.tracks||[])),(o=e.artists).push.apply(o,Object(l["a"])(t.artists||[])),(i=e.youtubeTracks).push.apply(i,Object(l["a"])(t.youtubeTracks||[]))}))},enterText:function(e){"Enter"===e.key&&this.$router.push("/search/"+this.query)}},watch:{$route:function(){this.search()}},mounted:function(){this.search()}};c("3be8");const U=T()(R,[["render",o],["__scopeId","data-v-2cc5b43c"]]);t["default"]=U},d14d:function(e,t,c){},e0d3:function(e,t,c){"use strict";c("8a8e")},e52f:function(e,t,c){},e80f:function(e,t,c){"use strict";c("70f2")}}]);
//# sourceMappingURL=search.26e8f01f.js.map