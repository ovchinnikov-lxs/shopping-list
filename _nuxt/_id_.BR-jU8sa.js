import{d as W,z as C,w as R,o as X,i as h,c as $,g as Z,j as J,k as K,m as Q,l as ee,A as te,p as ne,b as D,r as v,s as ae,n as T,F as N,B as re,f as I,C as oe,q as se,v as ie,D as ue,e as le,t as ce,E as de,G as fe,x as me,y as pe,_ as _e}from"./entry.DlqHIhoZ.js";import ve from"./TheLoader.Cld4ocq6.js";import{_ as be}from"./UiButton.vue.B7X74Jcv.js";import{u as ge}from"./asyncData.Bc7ztNnx.js";import{c as O,g as ye}from"./_commonjsHelpers.Cpj98o6Y.js";const he=["value"],Te=W({__name:"UiTextarea",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:n}){const i=e,d=n,u=C();function r(){if(!u.value)return!1;u.value.style.height="5px",u.value.style.height=u.value.scrollHeight+"px"}function l(o){const c=o.target;d("update:modelValue",c.value),r()}return R(()=>i.modelValue,async()=>{await Z(),r()}),X(()=>{r()}),(o,c)=>(h(),$("textarea",{ref_key:"textareaRef",ref:u,value:o.modelValue,cols:"1",class:"UiTextarea --medium-size",onInput:l},null,40,he))}}),$e="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Se=(e=21)=>{let n="",i=crypto.getRandomValues(new Uint8Array(e));for(;e--;)n+=$e[i[e]&63];return n};function je(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var q=je,we=typeof O=="object"&&O&&O.Object===Object&&O,xe=we,Le=xe,Oe=typeof self=="object"&&self&&self.Object===Object&&self,Ce=Le||Oe||Function("return this")(),z=Ce,Ee=z,ke=function(){return Ee.Date.now()},Ie=ke,Ae=/\s/;function Re(e){for(var n=e.length;n--&&Ae.test(e.charAt(n)););return n}var Ve=Re,De=Ve,Ne=/^\s+/;function Me(e){return e&&e.slice(0,De(e)+1).replace(Ne,"")}var Pe=Me,Be=z,Ge=Be.Symbol,Y=Ge,M=Y,H=Object.prototype,Ue=H.hasOwnProperty,Fe=H.toString,L=M?M.toStringTag:void 0;function We(e){var n=Ue.call(e,L),i=e[L];try{e[L]=void 0;var d=!0}catch{}var u=Fe.call(e);return d&&(n?e[L]=i:delete e[L]),u}var qe=We,ze=Object.prototype,Ye=ze.toString;function He(e){return Ye.call(e)}var Xe=He,P=Y,Ze=qe,Je=Xe,Ke="[object Null]",Qe="[object Undefined]",B=P?P.toStringTag:void 0;function et(e){return e==null?e===void 0?Qe:Ke:B&&B in Object(e)?Ze(e):Je(e)}var tt=et;function nt(e){return e!=null&&typeof e=="object"}var at=nt,rt=tt,ot=at,st="[object Symbol]";function it(e){return typeof e=="symbol"||ot(e)&&rt(e)==st}var ut=it,lt=Pe,G=q,ct=ut,U=NaN,dt=/^[-+]0x[0-9a-f]+$/i,ft=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,pt=parseInt;function _t(e){if(typeof e=="number")return e;if(ct(e))return U;if(G(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=G(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=lt(e);var i=ft.test(e);return i||mt.test(e)?pt(e.slice(2),i?2:8):dt.test(e)?U:+e}var vt=_t,bt=q,A=Ie,F=vt,gt="Expected a function",yt=Math.max,ht=Math.min;function Tt(e,n,i){var d,u,r,l,o,c,g=0,S=!1,_=!1,j=!0;if(typeof e!="function")throw new TypeError(gt);n=F(n)||0,bt(i)&&(S=!!i.leading,_="maxWait"in i,r=_?yt(F(i.maxWait)||0,n):r,j="trailing"in i?!!i.trailing:j);function w(t){var p=d,x=u;return d=u=void 0,g=t,l=e.apply(x,p),l}function E(t){return g=t,o=setTimeout(s,n),S?w(t):l}function k(t){var p=t-c,x=t-g,V=n-p;return _?ht(V,r-x):V}function a(t){var p=t-c,x=t-g;return c===void 0||p>=n||p<0||_&&x>=r}function s(){var t=A();if(a(t))return y(t);o=setTimeout(s,k(t))}function y(t){return o=void 0,j&&d?w(t):(d=u=void 0,l)}function b(){o!==void 0&&clearTimeout(o),g=0,d=c=u=o=void 0}function f(){return o===void 0?l:y(A())}function m(){var t=A(),p=a(t);if(d=arguments,u=this,c=t,p){if(o===void 0)return E(c);if(_)return clearTimeout(o),o=setTimeout(s,n),w(c)}return o===void 0&&(o=setTimeout(s,n)),l}return m.cancel=b,m.flush=f,m}var $t=Tt;const St=ye($t),jt=me(()=>pe(()=>import("./ListItem.Bt-B0qpg.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.default||e)),wt={class:"ListDetailPage"},xt=W({__name:"[id]",async setup(e){let n,i;const d=J(),u=K(),r=C([]),{data:l,pending:o}=([n,i]=Q(async()=>ge(async()=>{try{const a=de(),{data:s}=await d.from("Lists").select().eq("id",a.params.id);return s!=null&&s.length?(r.value=s[0].list||[],s[0]):null}catch(a){return console.error("LIST_DETAIL_PAGE:USE_LAZY_ASYNC_DATA",a),null}},"$d5dhPY7EYe")),n=await n,i(),n);R(o,a=>{if(!a&&!l.value)throw fe({statusCode:404,statusMessage:u.t("pages.listDetail.notFound.message"),fatal:!0})},{immediate:!0}),ee({title:()=>{if(!l.value)return"";const a=new Date(l.value.created_at).toLocaleDateString(u.locale.value,{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return`${u.t("pages.listDetail.title")} - ${a}`}});const c=C(!1);R(()=>r.value,(a,s)=>{St(async()=>{var b;if(!((b=l.value)!=null&&b.id)||s===void 0)return!1;c.value=!0,await d.from("Lists").update({list:a}).eq("id",l.value.id),c.value=!1},300)()},{deep:!0});function g(){const a=C(""),s=async()=>{if(!a.value)return!1;a.value.split(`
`).forEach(f=>{const[m,t]=f.split(/,\s*|,/);r.value.push({id:Se(4),name:m,count:Number(t||1)})}),a.value="",setTimeout(()=>{const f=document.querySelector("#product-input");f==null||f.focus()},100)};async function y(f){r.value=r.value.filter(m=>m.id!==f)}async function b(f,m){r.value=r.value.map(t=>t.id===f?m:t)}return{actualValue:a,onSubmit:s,onRemove:y,onChange:b}}const{onSubmit:S,actualValue:_,onChange:j,onRemove:w}=g(),E=te(),k=ne(()=>[{[E["--is-loading"]]:c.value}]);return(a,s)=>{const y=ve,b=Te,f=be,m=jt;return h(),$("div",wt,[D("div",{class:T([a.$style.wrapper,v(k)])},[v(o)?(h(),ae(y,{key:0,class:T(a.$style.loader)},null,8,["class"])):(h(),$(N,{key:1},[D("form",{class:T(a.$style.header),onSubmit:s[1]||(s[1]=re((...t)=>v(S)&&v(S)(...t),["prevent"]))},[I(b,{id:"product-input",modelValue:v(_),"onUpdate:modelValue":s[0]||(s[0]=t=>oe(_)?_.value=t:null),placeholder:a.$t("pages.listDetail.input.placeholder"),class:T(a.$style.input)},null,8,["modelValue","placeholder","class"]),I(f,{disabled:!v(_),class:T(a.$style.button)},{default:se(()=>[le(ce(a.$t("pages.listDetail.button.add")),1)]),_:1},8,["disabled","class"])],34),v(r).length?(h(),$("ul",{key:0,class:T(a.$style.list)},[(h(!0),$(N,null,ie(v(r),t=>(h(),$("li",{key:t.id},[I(m,{name:t.name,count:t.count,onRemove:p=>v(w)(t.id),onChange:p=>v(j)(t.id,{...t,...p})},null,8,["name","count","onRemove","onChange"])]))),128))],2)):ue("",!0)],64))],2)])}}}),Lt="_wrapper_a286j_10",Ot="_loader_a286j_23",Ct="_header_a286j_27",Et="_input_a286j_43",kt="_button_a286j_52",It="_list_a286j_56",At={wrapper:Lt,loader:Ot,header:Ct,input:Et,button:kt,list:It},Rt={$style:At},Bt=_e(xt,[["__cssModules",Rt]]);export{Bt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ListItem.Bt-B0qpg.js","./entry.DlqHIhoZ.js","./entry.DNMLEd9_.css","./ListItem.B8KActwX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
