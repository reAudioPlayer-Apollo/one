import{F as g,T as f,u as y}from"./song.619409cb.js";import{m as w,n as s,o as b,f as _,w as h,g as x}from"./index.1d09503d.js";const C=w({__name:"EditSong",props:{song:{type:Object,required:!0}},setup(c,{expose:l}){const t=c,r=async(o,e)=>{const a=new FormData,m="."+e.name.split(".").pop();var d=e.slice(0,e.size,e.type),v=new File([d],t.song.id+m,{type:e.type});return a.append("file",v),await(await fetch(o,{method:"POST",body:a})).text()},n=s([{name:"source",type:"upload",icon:"music_note",accept:"audio/mp3",required:!0,onUpload:o=>{r("/api/config/tracks",o).then(e=>n.value.find(a=>a.name=="source").value=e)},value:t.song.source},{name:"title",type:"text",icon:"title",required:!0,value:t.song.title},{name:"artist",type:"text",icon:"person",required:!0,value:t.song.artist},{name:"album",type:"text",icon:"album",value:t.song.album},{name:"cover",type:"upload",icon:"art_track",accept:"image/*",imagePreview:!0,value:t.song.cover,onUpload:o=>{r("/api/config/images",o).then(e=>n.value.find(a=>a.name=="cover").value=e)}}]),p=async()=>{await y({...t.song,...u.value.toObject()})},i=s(null),u=s(null);return l({show:()=>{i.value.show()}}),(o,e)=>(b(),_(f,{ref_key:"modal",ref:i,submit:{label:"Save",icon:"save"},name:"Edit Song",onClose:e[0]||(e[0]=a=>o.$emit("close")),onSubmit:p},{default:h(()=>[x(g,{ref_key:"form",ref:u,options:n.value},null,8,["options"])]),_:1},512))}});export{C as _};