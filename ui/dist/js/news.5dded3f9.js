(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"0acf":function(e,t,n){"use strict";n("92cf")},1494:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("4228"),n("526b"),n("3efd"),n("5b8c"),n("2670"),n("324c");var c=n("4e3d");function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(c["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n["return"]||n["return"]()}finally{if(u)throw a}}}}},"32fa":function(e,t,n){},"338d":function(e,t,n){"use strict";n("32fa")},3733:function(e,t,n){"use strict";var c=n("e6df"),r=n("f45e"),o=n("5df3");c({target:"String",proto:!0,forced:o("link")},{link:function(e){return r(this,"a","href",e)}})},"5df3":function(e,t,n){var c=n("117f");e.exports=function(e){return c((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},"68e0":function(e,t,n){"use strict";var c=n("69be"),r={class:"shelf"},o={class:"header"},a={key:0,class:"icon material-icons-outlined"},i={class:"items"};function u(e,t,n,u,s,l){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("h2",null,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.heading),1),n.icon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",a,Object(c["toDisplayString"])(n.icon),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",i,[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var s={name:"FullShelf",props:{heading:String,icon:String}},l=(n("338d"),n("1c27")),d=n.n(l);const f=d()(s,[["render",u],["__scopeId","data-v-1a1df171"]]);t["a"]=f},"6c9c":function(e,t,n){},"6d49":function(e,t,n){},"867d":function(e,t,n){"use strict";var c=n("e6df"),r=n("fe06").findIndex,o=n("513e"),a="findIndex",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),c({target:"Array",proto:!0,forced:i},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},"92cf":function(e,t,n){},a09a:function(e,t,n){"use strict";n("500c");var c=n("69be"),r={class:"itemBig"},o=["src"],a={class:"wrapper"},i=["innerHTML"],u={class:"small"};function s(e,t,n,s,l,d){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createElementVNode"])("div",{class:"item",onClick:t[0]||(t[0]=function(){return d.redirect&&d.redirect.apply(d,arguments)})},[n.image?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,src:n.image},null,8,o)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("h4",null,Object(c["toDisplayString"])(n.title),1),Object(c["createElementVNode"])("p",{innerHTML:n.summary,class:"newsSummary"},null,8,i),Object(c["createElementVNode"])("p",u,Object(c["toDisplayString"])("".concat(d.updatedTimestamp,", ").concat(n.source)),1)])])])}var l={name:"NewsItemBig",methods:{redirect:function(){this.$router.push(this.href)}},computed:{updatedTimestamp:function(){var e=new Date(this.updated),t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return"".concat(t[e.getUTCDay()]," ").concat(e.getUTCDate()," ").concat(n[e.getUTCMonth()]," ").concat(e.getUTCFullYear()," ").concat(e.getUTCHours(),".").concat(e.getUTCMinutes()," GMT")}},props:{image:String,title:String,summary:String,href:String,updated:String,source:String}},d=(n("0acf"),n("edd3"),n("1c27")),f=n.n(d);const m=f()(l,[["render",s],["__scopeId","data-v-15431c06"]]);t["a"]=m},a5d2:function(e,t,n){"use strict";n.r(t);n("3733");var c=n("69be"),r=function(e){return Object(c["pushScopeId"])("data-v-4484a120"),e=e(),Object(c["popScopeId"])(),e},o={class:"padding-20"},a={class:"news"},i=r((function(){return Object(c["createElementVNode"])("h1",null,"News",-1)}));function u(e,t,n,r,u,s){var l=Object(c["resolveComponent"])("news-item-big"),d=Object(c["resolveComponent"])("full-shelf");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",a,[i,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(u.news,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:e.source,heading:e.source},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.items,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:e.url,title:e.title,image:e.image,summary:e.summary,href:e.link,updated:e.updated,source:e.source},null,8,["title","image","summary","href","updated","source"])})),128))]})),_:2},1032,["heading"])})),128))])])}var s=n("1494"),l=(n("3efd"),n("867d"),n("68e0")),d=n("a09a"),f={components:{FullShelf:l["a"],NewsItemBig:d["a"]},name:"News",data:function(){return{news:[]}},mounted:function(){var e=this;fetch("http://localhost:1234/api/news").then((function(e){return e.json()})).then((function(t){e.news.length=0;var n,c=Object(s["a"])(t);try{var r=function(){var t=n.value,c=e.news.findIndex((function(e){return e.source==t.source}));c>=0?e.news[c].items.push(t):e.news.push({source:t.source,items:[t]})};for(c.s();!(n=c.n()).done;)r()}catch(o){c.e(o)}finally{c.f()}}))}},m=(n("bbea"),n("1c27")),p=n.n(m);const b=p()(f,[["render",u],["__scopeId","data-v-4484a120"]]);t["default"]=b},bbea:function(e,t,n){"use strict";n("6d49")},edd3:function(e,t,n){"use strict";n("6c9c")},f45e:function(e,t,n){var c=n("23ae"),r=n("03b9"),o=n("8c1c"),a=/"/g,i=c("".replace);e.exports=function(e,t,n,c){var u=o(r(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+i(o(c),a,"&quot;")+'"'),s+">"+u+"</"+t+">"}}}]);
//# sourceMappingURL=news.5dded3f9.js.map