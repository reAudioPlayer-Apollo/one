(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["artists"],{"06b9":function(e,t,n){"use strict";var c=n("69be"),o={ref:"box"},r=Object(c["createTextVNode"])("Soundcloud"),i=Object(c["createTextVNode"])("Audius"),a=Object(c["createTextVNode"])("Youtube Music"),s=Object(c["createTextVNode"])("Spotify");function l(e,t,n,l,u,d){var f=Object(c["resolveComponent"])("v-contextmenu-item"),p=Object(c["resolveComponent"])("v-contextmenu-submenu"),b=Object(c["resolveComponent"])("v-contextmenu"),h=Object(c["resolveDirective"])("contextmenu");return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["renderSlot"])(e.$slots,"default"),Object(c["createVNode"])(b,{ref:"contextmenu"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{title:"Search on"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{onClick:d.openSoundcloud},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["onClick"]),Object(c["createVNode"])(f,{onClick:d.openAudius},{default:Object(c["withCtx"])((function(){return[i]})),_:1},8,["onClick"]),Object(c["createVNode"])(f,{onClick:d.openYoutubeMusic},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["onClick"]),Object(c["createVNode"])(f,{onClick:d.openSpotify},{default:Object(c["withCtx"])((function(){return[s]})),_:1},8,["onClick"])]})),_:1})]})),_:1},512)])),[[h,void 0,"contextmenu"]])}n("500c");var u={name:"FindSources",props:{artist:String,title:String},methods:{hide:function(){this.$refs.contextmenu.hide()},show:function(e){var t=this.$refs.box.getBoundingClientRect(),n={top:t.height+t.top+window.scrollY,left:t.width+t.left+window.scrollX};this.$refs.contextmenu.show(n),null===e||void 0===e||e.stopPropagation()},openSoundcloud:function(){window.open("https://soundcloud.com/search?q=".concat(this.artist," ").concat(this.title))},openAudius:function(){window.open("https://audius.co/search/".concat(this.artist," ").concat(this.title))},openYoutubeMusic:function(){window.open("https://music.youtube.com/search?q=".concat(this.artist," ").concat(this.title))},openSpotify:function(){window.open("https://open.spotify.com/search/".concat(this.artist," ").concat(this.title))}}},d=n("1c27"),f=n.n(d);const p=f()(u,[["render",l]]);t["a"]=p},"132a":function(e,t,n){},"1a49":function(e,t,n){"use strict";n.r(t);n("4228"),n("526b"),n("a15b");var c=n("69be"),o={class:"padding-20"},r={class:"artists"};function i(e,t,n,i,a,s){var l=Object(c["resolveComponent"])("CollectionHeader"),u=Object(c["resolveComponent"])("artist-item"),d=Object(c["resolveComponent"])("full-shelf");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createVNode"])(l),Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(d,{heading:"Following on Spotify"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.spotifyArtists,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:t,cover:e.cover,description:e.description,name:e.name,id:e.id},null,8,["cover","description","name","id"])})),128))]})),_:1})])])}var a=n("e599"),s=(n("3efd"),n("68e0")),l=n("13c1"),u=n("8454"),d={components:{CollectionHeader:u["a"],ArtistItem:l["a"],FullShelf:s["a"]},name:"Artists",data:function(){var e=this;return fetch("http://localhost:1234/api/spotify/artists").then((function(e){return e.json()})).then((function(t){var n;return(n=e.spotifyArtists).push.apply(n,Object(a["a"])(t))})),{spotifyArtists:[]}}},f=(n("6edd"),n("1c27")),p=n.n(f);const b=p()(d,[["render",i],["__scopeId","data-v-5d050db1"]]);t["default"]=b},"32fa":function(e,t,n){},"338d":function(e,t,n){"use strict";n("32fa")},"68e0":function(e,t,n){"use strict";var c=n("69be"),o={class:"shelf"},r={class:"header"},i={key:0,class:"icon material-icons-outlined"},a={class:"items"};function s(e,t,n,s,l,u){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("h2",null,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.heading),1),n.icon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",i,Object(c["toDisplayString"])(n.icon),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",a,[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var l={name:"FullShelf",props:{heading:String,icon:String}},u=(n("338d"),n("1c27")),d=n.n(u);const f=d()(l,[["render",s],["__scopeId","data-v-1a1df171"]]);t["a"]=f},"6edd":function(e,t,n){"use strict";n("132a")},8454:function(e,t,n){"use strict";var c=n("69be"),o=function(e){return Object(c["pushScopeId"])("data-v-005a915a"),e=e(),Object(c["popScopeId"])(),e},r={class:"wrapper"},i=o((function(){return Object(c["createElementVNode"])("div",{class:"collection"}," Playlists ",-1)})),a=o((function(){return Object(c["createElementVNode"])("div",{class:"collection"}," Releases ",-1)})),s=o((function(){return Object(c["createElementVNode"])("div",{class:"collection"}," Artists ",-1)}));function l(e,t,n,o,l,u){var d=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createVNode"])(d,{class:"link",to:"/collection/playlists"},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),Object(c["createVNode"])(d,{class:"link",to:"/collection/releases"},{default:Object(c["withCtx"])((function(){return[a]})),_:1}),Object(c["createVNode"])(d,{class:"link",to:"/collection/artists"},{default:Object(c["withCtx"])((function(){return[s]})),_:1}),Object(c["createCommentVNode"])("",!0)])}var u={name:"CollectionHeader",props:{href:String}},d=(n("dad6"),n("1c27")),f=n.n(d);const p=f()(u,[["render",l],["__scopeId","data-v-005a915a"]]);t["a"]=p},"867d":function(e,t,n){"use strict";var c=n("e6df"),o=n("fe06").findIndex,r=n("513e"),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),c({target:"Array",proto:!0,forced:a},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(i)},a503:function(e,t,n){},b226:function(e,t,n){},c0b8:function(e,t,n){"use strict";var c=n("117f");e.exports=function(e,t){var n=[][e];return!!n&&c((function(){n.call(null,t||function(){throw 1},1)}))}},cb9b:function(e,t,n){"use strict";var c=n("69be"),o={class:"miniPlayer"},r=["src"];function i(e,t,n,i,a,s){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("audio",{src:n.src,ref:"player"},null,8,r),n.display?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:0,onClick:t[0]||(t[0]=function(){return s.playPause&&s.playPause.apply(s,arguments)}),class:"material-icons-round circle"},Object(c["toDisplayString"])(a.playing?"pause":"play_arrow"),1)):Object(c["createCommentVNode"])("",!0)])}n("3efd");var a={name:"MiniPlayer",props:{src:String,display:{type:Boolean,default:!0}},data:function(){return{playing:!1}},methods:{get:function(e){fetch("http://localhost:1234/api/".concat(e))},pause:function(){this.get("pause")},play:function(){this.get("play")},playPause:function(){var e=this;this.$refs.player.onended||(this.$refs.player.onended=function(){e.playing=!1}),window.player=this.$refs.player,this.playing=this.$refs.player.paused,this.$refs.player.paused?(this.pause(),this.$refs.player.play()):this.$refs.player.pause()}}},s=(n("e383"),n("1c27")),l=n.n(s);const u=l()(a,[["render",i],["__scopeId","data-v-ef9941c4"]]);t["a"]=u},dad6:function(e,t,n){"use strict";n("b226")},e383:function(e,t,n){"use strict";n("a503")},e599:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n("73c1");function o(e){if(Array.isArray(e))return Object(c["a"])(e)}n("4228"),n("526b"),n("3efd"),n("5b8c"),n("2670"),n("324c"),n("5eca");function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var i=n("4e3d");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return o(e)||r(e)||Object(i["a"])(e)||a()}},ed98:function(e,t,n){"use strict";var c=n("e6df"),o=n("23ae"),r=n("00d8"),i=n("4deb"),a=n("c0b8"),s=o([].join),l=r!=Object,u=a("join",",");c({target:"Array",proto:!0,forced:l||!u},{join:function(e){return s(i(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=artists.fb766351.js.map