import{A as O,i as h,l as T,o as a,c as m,a as l,m as s,s as d,B as u,w as r,d as n,y as p,z as $,_ as k,b as _,C,T as L}from"./entry.ui39n9Qz.js";import{_ as y}from"./_plugin-vue_export-helper.x3n3nnut.js";import{_ as S}from"./nuxt-link.u_GqTDRp.js";const v=O("modal",{state:()=>({isOpened:!1}),actions:{changeState(){this.isOpened=!this.isOpened}}}),w=$(()=>k(()=>import("./UiButton.t6GYyJXS.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>e.default||e)),E={class:"TheHeader"},z=l("h1",null,"Shopping list",-1),g=h({__name:"TheHeader",setup(e){const o=T(),t=()=>{v().changeState()};return(c,f)=>{const i=w;return a(),m("header",E,[l("div",{class:s(c.$style.wrapper)},[l("main",{class:s([c.$style.container,"container"])},[z,d(o).hasCurrent?(a(),u(i,{key:0,size:"small",onClick:t},{default:r(()=>[n(" Поделиться ")]),_:1})):p("",!0),d(o).hasCurrent?(a(),u(i,{key:1,size:"small",class:s(c.$style.clear),onClick:d(o).clearList},{default:r(()=>[n(" Отчистить список ")]),_:1},8,["class","onClick"])):p("",!0)],2)],2)])}}}),V="_wrapper_lem6y_10",b="_container_lem6y_27",B="_clear_lem6y_33",D={wrapper:V,container:b,clear:B},N={$style:D},P=y(g,[["__cssModules",N]]),x="_wrapper_184xn_10",R="_link_184xn_22",A={wrapper:x,link:R},H={},I={class:"TheFooter"},j={class:"container"};function F(e,o){const t=S;return a(),m("div",I,[l("div",{class:s(e.$style.wrapper)},[l("main",j,[n(" VERSION: 1.1.0 | "),_(t,{to:"https://github.com/ovchinnikov-lxs",title:"ME",class:s(e.$style.link)},{default:r(()=>[n(" ME ")]),_:1},8,["class"]),n(" | "),_(t,{to:"https://github.com/ovchinnikov-lxs/shopping-list",title:"REPO",class:s(e.$style.link)},{default:r(()=>[n(" REPO ")]),_:1},8,["class"])])],2)])}const U={$style:A},q=y(H,[["render",F],["__cssModules",U]]),G=$(()=>k(()=>import("./TheModal.xfL1eD7N.js"),__vite__mapDeps([5,1,2,3,4,6,7,8]),import.meta.url).then(e=>e.default||e)),J=h({__name:"default",setup(e){const o=v();return(t,c)=>{const f=P,i=G,M=q;return a(),m("div",{class:s(t.$style.DefaultLayout)},[_(f,{class:s(t.$style.header)},null,8,["class"]),l("div",{class:s(["container",t.$style.container])},[C(t.$slots,"default")],2),_(L,{name:"fade"},{default:r(()=>[d(o).isOpened?(a(),u(i,{key:0,class:s(t.$style.modal)},null,8,["class"])):p("",!0)]),_:1}),_(M,{class:s(t.$style.footer)},null,8,["class"])],2)}}}),K="_DefaultLayout_14yoc_10",Q="_header_14yoc_20",W="_footer_14yoc_21",X="_container_14yoc_25",Y="_modal_14yoc_37",Z={DefaultLayout:K,header:Q,footer:W,container:X,modal:Y},ee={$style:Z},te=y(J,[["__cssModules",ee]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));export{ae as _,v as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./UiButton.t6GYyJXS.js","./UiButton.vue.5MwKi3Gm.js","./entry.ui39n9Qz.js","./entry.ZaMkzaTw.css","./UiButton.ed01od1X.css","./TheModal.xfL1eD7N.js","./nuxt-link.u_GqTDRp.js","./_plugin-vue_export-helper.x3n3nnut.js","./TheModal.uI2DcxvD.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
