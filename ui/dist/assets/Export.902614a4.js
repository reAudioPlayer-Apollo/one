import{b as m}from"./index.11d3b0f3.js";import{_ as y,H as f,o as l,c as i,a as o,t as d,j as k,F as v,h as w,i as C,p as D,k as x,b as S,g}from"./index.69f951fe.js";import{C as T}from"./CloudPlaylist.42e85564.js";window.Buffer=m.Buffer;new f("reapApollo");const b={name:"import",methods:{upload(){this.userData.data.playlists=this.playlists,console.error(this.userData.data);const s=this.$route.params.data;fetch(`https://eu-apollo.herokuapp.com/user/${s}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.userData.data)})}},data(){if(this.$route.params.data){const s=this.$route.params.data;fetch(`https://eu-apollo.herokuapp.com/user/${s}`).then(async e=>this.userData=await e.json()),fetch("/api/playlists").then(async e=>{const n=await e.json();for(let a=0;a<n.length;a++){const t=await fetch(`/api/playlists/${a}`);this.playlists.push(await t.json())}})}else window.location=`https://eu-apollo.herokuapp.com/user/accessToken?redirect=${encodeURIComponent(window.location.origin+"/#/export/<token>")}`;return{playlists:[],userData:{}}},components:{CloudPlaylist:T}},h=s=>(D("data-v-41238c40"),s=s(),x(),s),B={class:"export"},P={class:"action"},j=h(()=>o("h1",null,"Cloud Save",-1)),I={key:0},N=h(()=>o("span",{class:"material-symbols-rounded"},"cloud_upload",-1)),E=g(" Synchronise"),H=[N,E],R={class:"data"};function V(s,e,n,a,t,c){const _=S("CloudPlaylist");return l(),i("div",B,[o("div",P,[j,t.userData.user?(l(),i("h2",I,"Hello "+d(t.userData.user.userinfo.name)+" ("+d(t.userData.user.userinfo.email)+")",1)):k("",!0),o("button",{onClick:e[0]||(e[0]=(...r)=>c.upload&&c.upload(...r)),class:"iconWithText"},H)]),o("div",R,[(l(!0),i(v,null,w(t.playlists,(r,p)=>{var u;return l(),C(_,{onRemove:()=>t.playlists.splice(p,1),key:p,playlist:r,cloudPlaylists:((u=t.userData.data)==null?void 0:u.playlists)||[]},null,8,["onRemove","playlist","cloudPlaylists"])}),128))])])}var A=y(b,[["render",V],["__scopeId","data-v-41238c40"]]);export{A as default};