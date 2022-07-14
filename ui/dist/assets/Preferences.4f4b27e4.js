import{F as S}from"./FullShelf.a0271eb6.js";import{_ as f,o as i,c as u,a as e,t as k,j as _,H as C,l as a,bn as c,m as w,f as m,w as T,F as B,i as I,p as x,h as N,b,e as g}from"./index.c762bf64.js";import{b as A}from"./index.11d3b0f3.js";const P={name:"Theme",props:{name:String},methods:{selected(){return window.getCurrentTheme()==this.name},select(){window.setTheme(this.name),this.$emit("selected")}}},V=["src"];function M(l,t,d,h,r,o){return i(),u("div",{onClick:t[0]||(t[0]=(...p)=>o.select&&o.select(...p)),class:"wrapper"},[e("p",{class:_({selected:o.selected()})},k(d.name),3),e("img",{src:`/assets/img/themes/${this.name}.svg`,class:_({selected:o.selected()})},null,10,V)])}var U=f(P,[["render",M],["__scopeId","data-v-19ce98eb"]]);window.Buffer=A.Buffer;new C("reapApollo");const D={components:{Theme:U,FullShelf:S},name:"Preferences",methods:{updateThemes(){this.themeSelected=window.getCurrentTheme()},changeCoverAsBackground(){window.localStorage.setItem("player.coverAsBackground",this.coverAsBackground?"true":"false")},changeShowSportsTab(){window.localStorage.setItem("sidebar.showSportsTab",this.showSportsTab?"true":"false")},changeShowNewsTab(){window.localStorage.setItem("sidebar.showNewsTab",this.showNewsTab?"true":"false")},changePlayInBrowser(){window.localStorage.setItem("player.inBrowser",this.playInBrowser?"true":"false")},saveRestrictedMode(){this.spotifyClientId||this.spotifyClientSecret||fetch("/api/config/spotify",{method:"POST",body:JSON.stringify({id:"restricted",secret:"restricted"})}).then(l=>console.log(l))},saveSpotify(){!this.spotifyClientId||!this.spotifyClientSecret||fetch("/api/config/spotify",{method:"POST",body:JSON.stringify({id:this.spotifyClientId,secret:this.spotifyClientSecret})}).then(l=>console.log(l))}},data(){const l=["night-jade","night-cobalt","night-crimson","night-fire","apollo","gradient","underground","default","royal","ruby","light","light-royal","light-ruby"],t=window.getCurrentTheme();let d="",h="";return{coverAsBackground:window.localStorage.getItem("player.coverAsBackground")=="true",themes:l,themeSelected:t,showSportsTab:window.localStorage.getItem("sidebar.showSportsTab")=="true",showNewsTab:window.localStorage.getItem("sidebar.showNewsTab")=="true",playInBrowser:window.localStorage.getItem("player.inBrowser")=="true",spotifyClientId:d,spotifyClientSecret:h}}},n=l=>(x("data-v-924ca2da"),l=l(),N(),l),F={class:"preferences"},H={class:"padding-10"},O={class:"sidebar"},R=n(()=>e("h2",null,"Sidebar",-1)),E={class:"checkbox"},j=n(()=>e("label",{for:"checkbox"},[e("span",null,'Show "News" tab')],-1)),J={class:"checkbox"},z=n(()=>e("label",{for:"checkbox2"},[e("span",null,'Show "Sports" tab')],-1)),L={class:"sidebar"},q=n(()=>e("h2",null,"Player",-1)),G={class:"checkbox"},K=n(()=>e("label",{for:"checkbox3"},[e("span",null,"Play in browser")],-1)),Q={class:"sidebar"},W=n(()=>e("h2",null,"Data Backup",-1)),X={class:"wrapTogether spaceBetween"},Y={class:"spotify"},Z=n(()=>e("h2",null,"Spotify",-1)),$=n(()=>e("summary",null,"How to",-1)),ee=b("1) Head over to the "),te=n(()=>e("p",null,"2) Create An App",-1)),se=n(()=>e("p",null,"3) Enter any name and any description",-1)),oe=n(()=>e("p",null,[b("4) Edit the settings: set the redirect url to "),e("a",{href:"http://reap.ml/"},"http://reap.ml/")],-1)),ne=n(()=>e("p",null,"5) Copy and enter the client id and secret into the corresponding input field",-1)),re={class:"wrapTogether"},le=n(()=>e("p",null,"Client ID: ",-1)),ae={class:"wrapTogether"},ie=n(()=>e("p",null,"Client Secret: ",-1)),de={class:"wrapTogether spaceBetween"},ce=n(()=>e("h2",null,"Themes",-1)),he={class:"checkbox"},pe=n(()=>e("label",{for:"bgcheck"},[e("span",null,"Cover as background")],-1));function ue(l,t,d,h,r,o){const p=g("theme"),v=g("full-shelf");return i(),u("div",F,[e("div",H,[e("div",O,[R,e("div",E,[a(e("input",{onChange:t[0]||(t[0]=(...s)=>o.changeShowNewsTab&&o.changeShowNewsTab(...s)),"onUpdate:modelValue":t[1]||(t[1]=s=>r.showNewsTab=s),type:"checkbox",id:"checkbox",name:"",value:""},null,544),[[c,r.showNewsTab]]),j]),e("div",J,[a(e("input",{onChange:t[2]||(t[2]=(...s)=>o.changeShowSportsTab&&o.changeShowSportsTab(...s)),"onUpdate:modelValue":t[3]||(t[3]=s=>r.showSportsTab=s),type:"checkbox",id:"checkbox2",name:"",value:""},null,544),[[c,r.showSportsTab]]),z])]),e("div",L,[q,e("div",G,[a(e("input",{onChange:t[4]||(t[4]=(...s)=>o.changePlayInBrowser&&o.changePlayInBrowser(...s)),"onUpdate:modelValue":t[5]||(t[5]=s=>r.playInBrowser=s),type:"checkbox",id:"checkbox3",name:"",value:""},null,544),[[c,r.playInBrowser]]),K])]),e("div",Q,[W,e("div",X,[e("button",{onClick:t[6]||(t[6]=s=>l.$router.push("/export"))},"Save"),e("button",{onClick:t[7]||(t[7]=s=>l.$router.push("/import"))},"Restore")])]),e("div",Y,[Z,e("details",null,[$,e("p",null,[ee,e("a",{onClick:t[8]||(t[8]=()=>l.redirect("https://developer.spotify.com/dashboard/applications"))},"spotify developer dashboard")]),te,se,oe,ne]),e("div",re,[le,a(e("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=s=>r.spotifyClientId=s)},null,512),[[w,r.spotifyClientId]])]),e("div",ae,[ie,a(e("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=s=>r.spotifyClientSecret=s)},null,512),[[w,r.spotifyClientSecret]])]),e("div",de,[e("button",{onClick:t[11]||(t[11]=(...s)=>o.saveSpotify&&o.saveSpotify(...s))},"save"),e("button",{onClick:t[12]||(t[12]=(...s)=>o.saveRestrictedMode&&o.saveRestrictedMode(...s)),class:"restrictedMode"},"enter restricted mode")])])]),e("div",null,[ce,e("div",he,[a(e("input",{onChange:t[13]||(t[13]=(...s)=>o.changeCoverAsBackground&&o.changeCoverAsBackground(...s)),"onUpdate:modelValue":t[14]||(t[14]=s=>r.coverAsBackground=s),type:"checkbox",id:"bgcheck",name:"",value:""},null,544),[[c,r.coverAsBackground]]),pe]),(i(),m(v,{key:r.themeSelected},{default:T(()=>[(i(!0),u(B,null,I(r.themes,(s,y)=>(i(),m(p,{onSelected:o.updateThemes,key:y,name:s},null,8,["onSelected","name"]))),128))]),_:1}))])])}var ge=f(D,[["render",ue],["__scopeId","data-v-924ca2da"]]);export{ge as default};