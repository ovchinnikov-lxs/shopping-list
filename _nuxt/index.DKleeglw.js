import{d as P,j as S,u as T,k as B,a as I,l as q,m as z,p as k,c as r,b as n,n as s,t as c,f as h,q as $,r as d,s as V,F as v,v as M,e as m,h as U,i as o,x as j,y as F,_ as G}from"./entry.DlqHIhoZ.js";import{_ as O}from"./UiButton.vue.B7X74Jcv.js";import{_ as R}from"./NuxtLinkLocale.feuzMoYK.js";import{u as X}from"./asyncData.Bc7ztNnx.js";const Y=j(()=>F(()=>import("./TheLoader.Cld4ocq6.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(_=>_.default||_)),Q={class:"IndexPage"},W=["onClick"],Z=P({__name:"index",async setup(_){let i,y;const u=S(),a=T(),p=B(),g=I();q({title:()=>p.t("pages.index.title")});const{data:w,pending:b,refresh:L}=([i,y]=z(async()=>X(async()=>{var e;try{if(!((e=a==null?void 0:a.value)!=null&&e.id))return[];const{data:t}=await u.from("Lists").select().eq("user_id",a.value.id);return t}catch(t){return console.error("INDEX_PAGE:USE_LAZY_ASYNC_DATA",t),[]}},"$pqtWcjQkdb")),i=await i,y(),i),f=k(()=>w.value||[]);async function C(){var e;try{if(!((e=a.value)!=null&&e.id))return!1;const t=await u.from("Lists").insert({user_id:a.value.id}).select("id");t.data&&await U(g(`/list/${t.data[0].id}`))}catch(t){console.error("INDEX_PAGE:ON_CREATE:",t)}}async function A(e){await u.from("Lists").delete().eq("id",e),await L()}const E=k(()=>e=>{const t=new Date(e.created_at).toLocaleDateString(p.locale.value,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return`${p.t("pages.index.list.item.title")} - ${t}`});return(e,t)=>{const D=O,x=Y,N=R;return o(),r("div",Q,[n("div",{class:s(e.$style.wrapper)},[n("header",{class:s(e.$style.header)},[n("h3",null,c(e.$t("pages.index.subtitle")),1),h(D,{onClick:C},{default:$(()=>[m(c(e.$t("pages.index.button.add")),1)]),_:1})],2),n("div",{class:s(e.$style.list)},[d(b)?(o(),V(x,{key:0,class:s(e.$style.loader)},null,8,["class"])):d(f).length?(o(!0),r(v,{key:1},M(d(f),l=>(o(),r("div",{key:l.id,class:s(e.$style.item)},[h(N,{to:`/list/${l.id}`,class:s(e.$style.link)},{default:$(()=>[m(c(d(E)(l)),1)]),_:2},1032,["to","class"]),n("div",{class:s(e.$style.delete),onClick:oe=>A(l.id)}," ❌ ",10,W)],2))),128)):(o(),r(v,{key:2},[m(c(e.$t("pages.index.list.empty")),1)],64))],2)],2)])}}}),H="_wrapper_4iokb_10",J="_header_4iokb_18",K="_list_4iokb_25",ee="_item_4iokb_33",te="_loader_4iokb_38",se="_link_4iokb_42",ae={wrapper:H,header:J,list:K,item:ee,loader:te,link:se,delete:"_delete_4iokb_51"},ne={$style:ae},de=G(Z,[["__cssModules",ne]]);export{de as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TheLoader.Cld4ocq6.js","./entry.DlqHIhoZ.js","./entry.DNMLEd9_.css","./TheLoader.DBFlxvvG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
