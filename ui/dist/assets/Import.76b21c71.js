import{b as _}from"./index.11d3b0f3.js";import{_ as m,H as h,o as i,c as r,a as o,t as p,j as f,F as y,h as v,i as w,p as k,k as P,b as C,g as D}from"./index.69f951fe.js";import{C as I}from"./CloudPlaylist.42e85564.js";window.Buffer=_.Buffer;new h("reapApollo");const g={name:"import",data(){if(this.$route.params.data){const t=this.$route.params.data;fetch(`https://eu-apollo.herokuapp.com/user/${t}`).then(async e=>{this.userData=await e.json(),this.cloudPlaylists=this.userData.data.playlists}),fetch("/api/playlists").then(async e=>{const n=await e.json();for(let a=0;a<n.length;a++){const s=await fetch(`/api/playlists/${a}`);this.localPlaylists.push(await s.json())}})}else window.location=`https://eu-apollo.herokuapp.com/user/accessToken?redirect=${encodeURIComponent(window.location.origin+"/#/import/<token>")}`;return{localPlaylists:[],cloudPlaylists:[],userData:{}}},components:{CloudPlaylist:I}},u=t=>(k("data-v-35672f8f"),t=t(),P(),t),B={class:"import"},b={class:"action"},S=u(()=>o("h1",null,"Cloud Restore",-1)),$={key:0},j=u(()=>o("span",{class:"material-symbols-rounded"},"cloud_download",-1)),x=D(" Synchronise"),E=[j,x],R={class:"data"};function T(t,e,n,a,s,H){const d=C("CloudPlaylist");return i(),r("div",B,[o("div",b,[S,s.userData.user?(i(),r("h2",$,"Hello "+p(s.userData.user.userinfo.name)+" ("+p(s.userData.user.userinfo.email)+")",1)):f("",!0),o("button",{onClick:e[0]||(e[0]=c=>t.$refs.playlistsElements.forEach(l=>l.import())),class:"iconWithText"},E)]),o("div",R,[(i(!0),r(y,null,v(s.cloudPlaylists,(c,l)=>(i(),w(d,{onRemove:()=>s.cloudPlaylists.splice(l,1),ref_for:!0,ref:"playlistsElements",key:l,playlist:c,localPlaylists:s.localPlaylists},null,8,["onRemove","playlist","localPlaylists"]))),128))])])}var A=m(g,[["render",T],["__scopeId","data-v-35672f8f"]]);export{A as default};