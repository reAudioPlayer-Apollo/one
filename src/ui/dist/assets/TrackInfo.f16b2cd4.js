import{a as p,A as v}from"./AlbumHeader.70d1b95c.js";import{B as l,o,c as r,g as y,a as s,F as c,h as d,f,k as m,l as h,_,t as n}from"./index.6f3ae9d0.js";const g=e=>(m("data-v-27ffd9e4"),e=e(),h(),e),I={class:"playlist"},A=g(()=>s("hr",null,null,-1)),S={class:"entries"},b=l({__name:"Playlist",props:{songs:{type:Array,required:!0},noCover:{type:Boolean,default:!1}},setup(e){return(i,u)=>(o(),r("div",I,[y(p),A,s("div",S,[(o(!0),r(c,null,d(e.songs,(t,a)=>(o(),f(v,{onAdd:w=>i.$emit("add",a),key:t.source,added:t.added,index:a,cover:e.noCover?null:t.cover,artist:t.artists.join(", "),title:t.title,source:t.src,preview:t.source},null,8,["onAdd","added","index","cover","artist","title","source","preview"]))),128))])]))}});const E=_(b,[["__scopeId","data-v-27ffd9e4"]]),k={class:"padding-20 playlisteditor"},B=["src"],C={class:"details"},$={class:"detailswrapper"},q=["onClick"],x=l({__name:"TrackInfo",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},cover:{type:String,required:!0},icons:{type:Array,required:!0}},setup(e){return(i,u)=>(o(),r("div",k,[s("img",{class:"cover",src:e.cover},null,8,B),s("div",C,[s("div",$,[(o(!0),r(c,null,d(e.icons,(t,a)=>(o(),r("span",{key:a,class:"material-icons-round",onClick:t.onClick},n(t.name),9,q))),128))]),s("h1",null,n(e.title),1),s("h5",null,n(e.subtitle),1)])]))}});const F=_(x,[["__scopeId","data-v-b1532a79"]]);export{E as P,F as T};