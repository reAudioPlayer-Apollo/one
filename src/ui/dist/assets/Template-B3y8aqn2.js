import{e as E,l as x,B as N,A as F,v as ee,a0 as we,o as m,c as $,r as ue,a1 as K,a2 as xe,J as j,a3 as le,K as G,O as de,_ as Y,a as p,t as O,d as S,F as W,h as ae,b as H,i as A,a4 as he,a5 as ce,a6 as pe,g as h,P as ve,x as be,z as _e,a7 as ke,w as I,q as $e,a8 as me,y as Ce,a9 as Pe,aa as Ve,u as L,I as se,j as te,m as ye,f as J,ab as fe,$ as Se,ac as oe,ad as Ie,E as Me,C as ne,Y as Te,X as Oe,ae as ie,af as qe}from"./index-CTxjSbok.js";import{P as Fe}from"./PlaylistEntry-DrzB4VXk.js";import{d as Ae}from"./vuedraggable.umd-pw-5IPtN.js";import{F as Q}from"./FactCard-CcCpkYQW.js";import{G as Be}from"./gistClient-DbxNDpvo.js";import{M as De,_ as Ue}from"./Markdown.vue_vue_type_style_index_0_lang-Dj9oziRW.js";const Ee=a=>{const{search:f,artist:l,title:i,album:e,order:y,sort:r}=a;return(f==null?void 0:f.length)||(l==null?void 0:l.length)||(i==null?void 0:i.length)||(e==null?void 0:e.length)||y!="asc"||r!="index"},He=(a,f)=>{const{search:l,artist:i,title:e,album:y,sort:r}=f;return a.map(w=>{const s=l!=null&&l.length?w.title.toLowerCase().includes(l.toLowerCase())||w.artist.toLowerCase().includes(l.toLowerCase()):!0,g=i!=null&&i.length?i.includes(w.artist):!0,d=e!=null&&e.length?e.includes(w.title):!0,t=y!=null&&y.length?y.includes(w.album.name):!0;return{...w,show:s&&g&&d&&t,index:a.indexOf(w)}}).sort((w,s)=>{const g=w[r],d=s[r];return g<d?-1:g>d?1:0})},Le=a=>a.map(f=>({label:f.title,value:f.title})),Ne=a=>a.map(f=>({label:f.album.name,value:f.album.name})),Re=a=>{const f=new Set;for(const l of a)for(const i of l.artist.split(", "))f.add(i);return Array.from(f).sort().map(l=>({label:l,value:l}))},je=["placeholder"],ze=E({__name:"EditableText",props:{modelValue:{type:String,required:!0},locked:{type:Boolean,default:!1},noOutline:{type:Boolean,default:!1},placeholder:{type:String,default:"Click to edit"}},emits:["update:modelValue","change"],setup(a,{emit:f}){const l=a,i=x(l.modelValue);N(()=>l.modelValue,t=>i.value=t);const e=x(!1),y=f,r=x(null),w=()=>{l.locked||(e.value=!0,de(()=>{r.value&&r.value.focus()}))},s=F(()=>l.locked?!0:e.value?!1:i.value),g=t=>{i.value=t,y("change",t),y("update:modelValue",t)},d=()=>{r.value&&(r.value.style.height="auto",r.value.style.height=r.value.scrollHeight+"px")};return ee(()=>d()),we(()=>{e.value&&d()}),(t,o)=>(m(),$("div",{class:G(["editable-text",{outlined:!a.noOutline&&e.value}]),onDblclick:j(w,["stop"])},[s.value?ue(t.$slots,"default",{key:0},void 0,!0):K((m(),$("textarea",{key:1,ref_key:"area",ref:r,rows:"1","onUpdate:modelValue":o[0]||(o[0]=u=>i.value=u),onChange:o[1]||(o[1]=u=>g(u.target.value)),onInput:o[2]||(o[2]=u=>d()),onClick:o[3]||(o[3]=j(u=>e.value=!0,["stop"])),onKeydown:[o[4]||(o[4]=le(u=>e.value=!1,["enter"])),o[5]||(o[5]=le(u=>e.value=!1,["esc"]))],onBlur:o[6]||(o[6]=u=>e.value=!1),placeholder:a.placeholder},null,40,je)),[[xe,i.value]])],34))}}),re=Y(ze,[["__scopeId","data-v-f05f8e35"]]),Ge={class:"flex flex-row gap-2 items-center overflow-hidden"},Ye={key:0,class:"material-symbols-rounded ms-wght-200"},We={class:"selected-labels"},Ke=["onClick"],Xe={class:"material-symbols-rounded"},Je=["onClick"],Qe={class:"material-symbols-rounded"},Ze={key:0,class:"material-symbols-rounded"},et=E({__name:"MultiSelect",props:{modelValue:{type:Array,required:!0},options:{type:Array,required:!0},icon:{type:String,required:!1}},emits:["update:modelValue"],setup(a,{emit:f}){const l=a,i=x(l.modelValue),e=x(!1),y=f;N(l,d=>{i.value=d.modelValue},{deep:!0});const r=d=>{i.value.includes(d)?i.value=i.value.filter(t=>t!=d):i.value.push(d),y("update:modelValue",i.value),e.value=!1},w=F(()=>{const d=[];for(const t of i.value){const o=l.options.find(u=>u.value==t);o&&d.push(o.label)}return d}),s=x(null),g=x(null);return N(e,d=>{de(()=>{if(d){const t=s.value.getBoundingClientRect(),o=g.value.getBoundingClientRect(),u=o.top,c=o.bottom,v=window.innerHeight-c,_=o.width;s.value.style.width=_+"px",s.value.style.left=o.left+"px",v>t.height?(s.value.style.top=c+"px",s.value.style.bottom="auto"):(s.value.style.top="auto",s.value.style.bottom=u-t.height+"px")}})}),window.addEventListener("click",()=>{e.value=!1}),(d,t)=>(m(),$("div",{ref_key:"container",ref:g,class:"dropdown"},[p("div",{class:G([{expanded:e.value},"dropdown__selected"]),onClick:t[0]||(t[0]=j(o=>e.value=!e.value,["stop"]))},[p("div",Ge,[a.icon?(m(),$("span",Ye,O(a.icon),1)):S("",!0),p("div",We,[(m(!0),$(W,null,ae(w.value,o=>(m(),$("span",{key:o,class:"selected-label"},[H(O(o)+" ",1),p("i",{class:"material-symbols-rounded",onClick:u=>r(o)}," close ",8,Ke)]))),128))])]),p("i",Xe,O(e.value?"expand_less":"expand_more"),1)],2),(m(),A(he,{to:"#dropdown-target"},[e.value?(m(),$("div",{key:0,ref_key:"trueDropdown",ref:s,class:"dropdown__options"},[(m(!0),$(W,null,ae(a.options,o=>(m(),$("div",{key:o.value,class:"dropdown__option",onClick:j(u=>r(o.value),["stop"])},[p("span",Qe,O(o.icon),1),p("span",null,O(o.label),1),i.value.includes(o.value)?(m(),$("span",Ze,"check")):S("",!0)],8,Je))),128))],512)):S("",!0)]))],512))}}),Z=Y(et,[["__scopeId","data-v-8ec711b9"]]),tt={class:"upperWrapper"},lt={class:"font-black"},at={class:"padding-20 darkback"},st=E({__name:"FixedPlaylistHeader",props:{accentColour:{type:String},playlist:{type:Object,required:!0}},setup(a){const f=ce(),l=a,i=F(()=>f.playlistPlayOrPauseIcon(l.playlist.id));return(e,y)=>(m(),$("div",{class:"fixedPlaylistHeader",style:be({"--colour":a.accentColour})},[a.playlist.cover?(m(),A(pe,{key:0,src:a.playlist.cover},null,8,["src"])):S("",!0),p("div",tt,[p("span",{id:"loadPlaylist",class:"material-symbols-rounded hideIfMobile ms-fill",onClick:y[0]||(y[0]=r=>this.$emit("loadPlaylist"))},O(i.value),1),p("h3",lt,O(a.playlist.name),1)]),p("div",at,[h(ve,{class:"fixedHeader hideIfMobile","with-album":"","with-more":""})])],4))}}),ot=Y(st,[["__scopeId","data-v-34ec84ab"]]),nt=E({__name:"AddNewSong",emits:["update","close"],setup(a,{expose:f,emit:l}){const i=_e(),e=l,y={title:"",artist:"",artists:[],album:"",cover:"",source:"",href:""},r=async(u,c)=>{const v=Ce(String(new Date().getTime())),_=new FormData,D="."+c.name.split(".").pop();var V=c.slice(0,c.size,c.type),C=new File([V],v+D,{type:c.type});return _.append("file",C),await(await fetch(u,{method:"POST",body:_})).text()},w=x(null),s=x([{name:"source",type:"upload",accept:"audio/mp3",required:!0,onUpload:u=>{r("/api/config/tracks",u).then(c=>s.value.find(v=>v.name=="source").value=c)},onChange:async u=>{const c=await ke(u);s.value.find(v=>v.name==="title").value=c.title,s.value.find(v=>v.name==="artist").value=c.artist,s.value.find(v=>v.name==="album").value=c.album,s.value.find(v=>v.name==="cover").value=c.cover,s.value.find(v=>v.name==="source").value=c.source,w.value=c.track.metadata},value:y.source},{name:"title",type:"text",icon:"title",required:!0,value:y.title},{name:"artist",type:"text",icon:"person",required:!0,value:y.artist},{name:"album",type:"text",icon:"album",value:y.album},{name:"cover",type:"upload",accept:"image/*",imagePreview:!0,value:y.cover,onUpload:u=>{r("/api/config/images",u).then(c=>s.value.find(v=>v.name=="cover").value=c)}}]),g=x(null),d=x(null),t=async()=>{if(g.value.show(),!navigator.clipboard)return;const u=await navigator.clipboard.readText();if(!Pe(u))return;const c=s.value.find(v=>v.name==="source");c.value=u,c.onChange(u)},o=async u=>{const c=i.params.id;await Ve(c,{...d.value.toObject(),metadata:w.value}),e("update")};return f({show:t,options:s}),(u,c)=>(m(),A(me,{ref_key:"modal",ref:g,submit:{label:"Add",icon:"add"},name:"Add Song",onClose:c[0]||(c[0]=v=>u.$emit("close")),onSubmit:o},{default:I(()=>[h($e,{ref_key:"form",ref:d,options:s.value},null,8,["options"])]),_:1},512))}}),it=["innerHTML"],rt={class:"buttons w-full justify-end flex gap-2"},ut=E({__name:"Confirmation",props:{title:{type:String,required:!0},question:{type:String,required:!0},closeOnNo:{type:Boolean,required:!1,default:!0}},emits:["close","update","yes","no"],setup(a,{expose:f,emit:l}){const i=a,e=l,y=x(null),r=new De;f({show:()=>{y.value.show()}});const s=()=>{i.closeOnNo&&y.value.hide(),e("no")};return(g,d)=>(m(),A(me,{ref_key:"modal",ref:y,name:a.title,onClose:d[1]||(d[1]=t=>g.$emit("close"))},{default:I(()=>[p("div",{class:"overflow-hidden",innerHTML:L(r).render(a.question)},null,8,it),p("div",rt,[h(se,{type:"success",icon:"check",label:"Yes",onClick:d[0]||(d[0]=t=>g.$emit("yes"))}),h(se,{type:"danger",icon:"close",label:"No",onClick:s})])]),_:1},8,["name"]))}}),dt=E({__name:"PlaylistContext",props:{playlist:{type:Object,required:!0},canEdit:{type:Boolean,required:!1,default:!1}},setup(a,{expose:f}){const l=a,i=te(),e=ye(),y=x(null),r=x(null),w=x(""),s=x(null),g=x(null),d=x(""),t=x(""),o=(C=null)=>{r.value.visible?u():c(C)},u=()=>{r.value.hide()},c=(C=null)=>{const k=y.value.getBoundingClientRect();if(C){r.value.show({top:C.clientY,left:C.clientX});return}const M={top:k.height+k.top+window.scrollY,left:k.width+k.left+window.scrollX};r.value.show(M)};f({show:c,toggle:o,hide:u});const v=()=>{e.push(`/playlist/${l.playlist.id}/edit`)},_=async()=>{await Se(l.playlist.id),await i.fetchPlaylists(),e.push("/")},D=async()=>{const C=await oe(l.playlist);Ie(C,l.playlist.name)},V=async()=>{const C=await oe(l.playlist),k=`${l.playlist.name}.one.playlist`,M=await Be.save({[k]:C},l.playlist.name,!0),R=M.files[k].raw_url,P=M.id,n=M.owner.login,B=R.split("/raw/")[1].split("/")[0],q=`gist:${n}:${P}:${B}`,T=btoa(q);w.value=`http://localhost:1234/import/${T}`,t.value=`Share this URL to import this playlist on another device: [${w.value}](${w.value})`,d.value="Share "+l.playlist.name,s.value.show()};return ee(()=>{document.addEventListener("click",u)}),(C,k)=>{const M=J("v-contextmenu-item"),z=J("v-contextmenu-submenu"),R=J("v-contextmenu"),P=fe("contextmenu");return K((m(),$("div",{ref_key:"box",ref:y},[ue(C.$slots,"default"),h(Ue,{ref_key:"markdownRef",ref:s,title:d.value,content:t.value,onClose:u},null,8,["title","content"]),h(ut,{ref_key:"confirmation",ref:g,title:"Delete Playlist",question:"Are you sure you want to delete this playlist?",onYes:_,onNo:u,"close-on-no":""},null,512),h(R,{ref_key:"contextmenu",ref:r},{default:I(()=>[a.canEdit?(m(),A(M,{key:0,onClick:v},{default:I(()=>k[1]||(k[1]=[p("span",{class:"material-symbols-rounded"},"edit",-1),H(" Edit ")])),_:1})):S("",!0),h(M,{onClick:k[0]||(k[0]=n=>g.value.show())},{default:I(()=>k[2]||(k[2]=[p("span",{class:"material-symbols-rounded"},"delete",-1),H(" Delete ")])),_:1}),h(M,null,{default:I(()=>[k[5]||(k[5]=p("span",{class:"material-symbols-rounded"},"share",-1)),h(z,{title:"Export..."},{default:I(()=>[h(M,{onClick:D},{default:I(()=>k[3]||(k[3]=[H(" to file ")])),_:1}),h(M,{onClick:V},{default:I(()=>k[4]||(k[4]=[H(" to GitHub Gists ")])),_:1})]),_:1})]),_:1})]),_:1},512)])),[[P,void 0,"contextmenu"]])}}}),ct={class:"upper relative"},pt={class:"track__info__details"},vt={class:"trac__info__details__normal"},mt={key:0,class:"flex flex-row items-center gap-2 playlist-type"},yt={class:"material-symbols-rounded"},ft={class:"flex flew-row items-center"},gt={class:"font-black text-5xl ml-4 w-full flex-1"},wt={class:"text-muted"},xt={class:"features flex flex-row gap-4 pt-4 pb-2 overflow-x-auto"},ht={key:0,class:"filters relative overflow-clip"},bt=E({__name:"PlaylistMeta",props:{playlist:{type:Object,required:!1},coverIcon:{type:String,required:!0}},setup(a,{expose:f}){var z,R;const l=a,i=x(),e=F(()=>l.playlist),y=x(!0);ye();const r=ce(),w=te(),s=x(((z=e.value)==null?void 0:z.name.trim())??""),g=x(((R=e.value)==null?void 0:R.description.trim())??""),d=()=>({sort:"index",order:"asc",search:"",title:[],artist:[],album:[]}),t=x(null),o=()=>{t.value={...d()}};o(),f({songFilters:t}),N(()=>e.value,()=>{var P,n;s.value=((P=e.value)==null?void 0:P.name.trim())??"",g.value=((n=e.value)==null?void 0:n.description.trim())??""}),N([s,g],()=>{var n,B;if(s.value===((n=e.value)==null?void 0:n.name)&&g.value===((B=e.value)==null?void 0:B.description))return;const P={...e.value,name:s.value,description:g.value};ie(P),w.fetchPlaylists(e.value.id)});const u=(P,n)=>{y.value=P},c=F(()=>e.value.type==="classic"),v=F(()=>["smart"].includes(e.value.type)),_=[{value:"title",label:"Title",icon:"title"},{value:"artist",label:"Artist",icon:"person"},{value:"album",label:"Album",icon:"album"},{value:"duration",label:"Duration",icon:"timer"},{value:"index",label:"Added",icon:"date_range"}],D=F(()=>{let P=0,n=!1;if(!e.value.songs.length)return"N/A";for(const U of e.value.songs){n=n||U.duration<=0;const X=U.duration<=0?3*60:U.duration;P+=X}const B=P,q=Math.floor(B/60),T=Math.floor(q/60),b=n?"about ":"";return T?b+`${T} hr ${q-T*60} min`:q?b+`${q} min ${B-q*60} sec`:b+P+" sec"}),V=x(null),C=async P=>{const B=await(async(q,T)=>{const b=new FormData,U="."+T.name.split(".").pop();var X=T.slice(0,T.size,T.type),ge=new File([X],l.playlist.name+U,{type:T.type});return b.append("file",ge),await(await fetch(q,{method:"POST",body:b})).text()})("/api/config/images",V.value.files[0]);ie({...e.value,cover:B})},k=F(()=>r.playlistPlayOrPauseIcon(e.value.id)),M=()=>{r.playlistId===e.value.id?r.playPause():r.loadPlaylist(e.value.id)};return(P,n)=>{const B=fe("observe-visibility");return m(),A(dt,{ref_key:"contextmenu",ref:i,playlist:e.value,"can-edit":v.value},{default:I(()=>{var q,T;return[e.value?(m(),A(ot,{key:0,ref:"fixedHeading",class:G({hidden:y.value}),playlist:e.value,onLoadPlaylist:M},null,8,["class","playlist"])):S("",!0),h(nt,{ref:"addSongPopup"},null,512),K((m(),$("div",ct,[h(Me,{placeholder:a.coverIcon,src:e.value.cover,class:G(["cover rounded-xl",{"animate-size":e.value.songs.length>7}]),type:"playlist",name:e.value.name,onClick:n[0]||(n[0]=b=>{var U;return(U=V.value)==null?void 0:U.click()})},null,8,["placeholder","src","name","class"]),v.value?S("",!0):(m(),$("input",{key:0,ref_key:"imgUpload",ref:V,type:"file",accept:"image/*",class:"hidden",onChange:C},null,544)),p("div",pt,[p("div",vt,[e.value.type!="classic"?(m(),$("div",mt,[p("span",yt,O(e.value.type=="smart"?"neurology":"bolt"),1),p("span",null,O(e.value.type)+" Playlist",1)])):S("",!0),p("div",ft,[p("span",{class:"text-5xl cursor-pointer material-symbols-rounded ms-fill my-auto",onClick:M},O(k.value),1),p("h1",gt,[h(re,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=b=>s.value=b)},{default:I(()=>[H(O(e.value.name),1)]),_:1},8,["modelValue"])])]),p("p",wt,[h(re,{modelValue:g.value,"onUpdate:modelValue":n[2]||(n[2]=b=>g.value=b),placeholder:"No description"},{default:I(()=>[H(O(e.value.description),1)]),_:1},8,["modelValue"])])]),p("div",xt,[h(Q,{"primary-text":(q=e.value.songs)==null?void 0:q.length,"secondary-text":((T=e.value.songs)==null?void 0:T.length)===1?"Song":"Songs",class:"w-full"},null,8,["primary-text","secondary-text"]),h(Q,{"primary-text":D.value,class:"w-full","secondary-text":"Total Duration"},null,8,["primary-text"]),e.value.plays?(m(),A(Q,{key:0,"primary-text":e.value.plays,class:"w-full","secondary-text":"Plays"},null,8,["primary-text"])):S("",!0),c.value?(m(),A(ne,{key:1,class:"p-4 w-1/2 flex flex-col items-center justify-center"},{default:I(()=>[p("span",{id:"addToPlaylist",class:"material-symbols-rounded ms-fill",onClick:n[3]||(n[3]=b=>P.$refs.addSongPopup.show())}," add_circle "),n[11]||(n[11]=p("span",{class:"text-muted"},"Add a song",-1))]),_:1})):S("",!0),e.value.type!="special"?(m(),A(ne,{key:2,class:"p-4 w-1/2 flex flex-col items-center justify-center"},{default:I(()=>[p("span",{id:"addToPlaylist",class:"material-symbols-rounded ms-fill",onClick:n[4]||(n[4]=j(b=>i.value.toggle(b),["prevent","stop"]))}," more_horiz "),n[12]||(n[12]=p("span",{class:"text-muted"},"More...",-1))]),_:1})):S("",!0)]),e.value.songs?(m(),$("div",ht,[h(Te,{modelValue:t.value.search,"onUpdate:modelValue":n[5]||(n[5]=b=>t.value.search=b),icon:"search",placeholder:"Search"},null,8,["modelValue"]),h(Z,{modelValue:t.value.title,"onUpdate:modelValue":n[6]||(n[6]=b=>t.value.title=b),options:L(Le)(e.value.songs),class:"multiselect",icon:"title",placeholder:"Title"},null,8,["modelValue","options"]),h(Z,{modelValue:t.value.artist,"onUpdate:modelValue":n[7]||(n[7]=b=>t.value.artist=b),options:L(Re)(e.value.songs),class:"multiselect",icon:"person",placeholder:"Artist"},null,8,["modelValue","options"]),h(Z,{modelValue:t.value.album,"onUpdate:modelValue":n[8]||(n[8]=b=>t.value.album=b),options:L(Ne)(e.value.songs),class:"multiselect",icon:"album",placeholder:"Album"},null,8,["modelValue","options"]),h(Oe,{modelValue:t.value.sort,"onUpdate:modelValue":n[9]||(n[9]=b=>t.value.sort=b),options:_,icon:"filter_list"},null,8,["modelValue"]),p("span",{class:"cursor-pointer material-symbols-rounded ms-wght-100 text-5xl",onClick:n[10]||(n[10]=b=>t.value.order=t.value.order=="asc"?"desc":"asc")},O(t.value.order=="asc"?"arrow_drop_up":"arrow_drop_down"),1),p("span",{class:"cursor-pointer material-symbols-rounded ms-wght-300 text-3xl mr-2",onClick:o}," delete_sweep ")])):S("",!0)])])),[[B,u]])]}),_:1},8,["playlist","can-edit"])}}}),_t=Y(bt,[["__scopeId","data-v-81204978"]]),kt={class:"playlist relative p-4"},$t={key:0,class:"fill-page"},Ct={key:1,class:"wrap"},Pt={class:"track__data"},Vt={key:1,class:"items"},St={key:2,class:"text-muted italic text-sm text-center mt-10"},It=E({__name:"Template",props:{id:{type:String,required:!0},coverIcon:{type:String,required:!1}},emits:["rearrange"],setup(a,{emit:f}){var c;const l=a,i=te(),e=F(()=>i.getPlaylistById(l.id)),y=x(),r=x(((c=e.value)==null?void 0:c.songs)??[]),w=x(null),s=F(()=>{var v;return((v=y.value)==null?void 0:v.songFilters)??{}});N([s,e],()=>{e.value&&g()},{deep:!0});const g=()=>{var v;r.value=He(((v=e.value)==null?void 0:v.songs)??[],s.value)};ee(()=>{g()}),N(e,()=>{g()});const d=F(()=>e.value.type==="classic"&&document.body.clientWidth>950),t=F(()=>e.value.type==="classic"),o=f,u=v=>{const _=v.moved;_&&o("rearrange",_.oldIndex,_.newIndex)};return(v,_)=>{var D;return m(),$(W,null,[(D=e.value)!=null&&D.cover?(m(),A(pe,{key:0,placeholder:a.coverIcon,src:e.value.cover},null,8,["placeholder","src"])):S("",!0),p("div",kt,[e.value?(m(),$("div",Ct,[p("div",Pt,[h(_t,{ref_key:"playlistMeta",ref:y,playlist:e.value,coverIcon:a.coverIcon},null,8,["playlist","coverIcon"]),r.value.length?(m(),$(W,{key:0},[h(ve,{class:"hideIfMobile mt-8","with-album":"","with-more":""}),_[4]||(_[4]=p("hr",{class:"mb-4"},null,-1))],64)):S("",!0),r.value.length?(m(),$("div",Vt,[r.value.length?(m(),A(L(Ae),{key:a.id,modelValue:r.value,"onUpdate:modelValue":_[1]||(_[1]=V=>r.value=V),class:G([s.value.order=="asc"?"flex-col":"flex-col-reverse","flex"]),disabled:L(Ee)(s.value)||!d.value,"item-key":"id",onChange:u,onDragover:_[2]||(_[2]=j(()=>{},["stop"]))},{item:I(({element:V})=>[K(h(Fe,{index:e.value.songs.findIndex(C=>C.source==V.source),"playlist-id":a.id,selected:w.value==V.id,song:V,"with-album":"","with-cover":"","with-more":"",onClick:C=>w.value==V.id?w.value=-1:w.value=V.id,onUpdate:_[0]||(_[0]=C=>L(i).fetchPlaylists())},null,8,["index","playlist-id","selected","song","onClick"]),[[qe,V.show]])]),_:1},8,["modelValue","class","disabled"])):S("",!0)])):t.value?(m(),$("p",St," No songs. Add some! ")):S("",!0)])])):(m(),$("div",$t,_[3]||(_[3]=[p("h2",{class:"text-2xl text-center error"},"Playlist not found",-1)])))])],64)}}}),Dt=Y(It,[["__scopeId","data-v-8e9c3532"]]);export{Dt as T};