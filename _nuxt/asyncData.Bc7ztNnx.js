import{H as w,z as d,I as C,J as x,K as b,L as m,w as O,M as z,N as M,r as k,O as B}from"./entry.DlqHIhoZ.js";const H=s=>s==="defer"||s===!1;function A(...s){var h;const l=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(l);let[a,c,e={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=z(),D=c,v=()=>null,_=()=>t.isHydrating?t.payload.data[a]:t.static.data[a];e.server=e.server??!0,e.default=e.default??v,e.getCachedData=e.getCachedData??_,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??w.deep,e.dedupe=e.dedupe??"cancel";const f=()=>![null,void 0].includes(e.getCachedData(a));if(!t._asyncData[a]||!e.immediate){(h=t.payload._errors)[a]??(h[a]=null);const i=e.deep?d:C;t._asyncData[a]={data:i(e.getCachedData(a)??e.default()),pending:d(!f()),error:x(t.payload._errors,a),status:d("idle")}}const n={...t._asyncData[a]};n.refresh=n.execute=(i={})=>{if(t._asyncDataPromises[a]){if(H(i.dedupe??e.dedupe))return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if((i._initial||t.isHydrating&&i._initial!==!1)&&f())return Promise.resolve(e.getCachedData(a));n.pending.value=!0,n.status.value="pending";const u=new Promise((r,o)=>{try{r(D(t))}catch(P){o(P)}}).then(r=>{if(u.cancelled)return t._asyncDataPromises[a];let o=r;e.transform&&(o=e.transform(r)),e.pick&&(o=E(o,e.pick)),t.payload.data[a]=o,n.data.value=o,n.error.value=null,n.status.value="success"}).catch(r=>{if(u.cancelled)return t._asyncDataPromises[a];n.error.value=M(r),n.data.value=k(e.default()),n.status.value="error"}).finally(()=>{u.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=u,t._asyncDataPromises[a]};const y=()=>n.refresh({_initial:!0}),g=e.server!==!1&&t.payload.serverRendered;{const i=B();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const r=i._nuxtOnBeforeMountCbs;i&&(b(()=>{r.forEach(o=>{o()}),r.splice(0,r.length)}),m(()=>r.splice(0,r.length)))}g&&t.isHydrating&&(n.error.value||f())?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&O(e.watch,()=>n.refresh());const u=t.hook("app:data:refresh",async r=>{(!r||r.includes(a))&&await n.refresh()});i&&m(u)}const p=Promise.resolve(t._asyncDataPromises[a]).then(()=>n);return Object.assign(p,n),p}function K(...s){const l=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(l);const[a,c,e={}]=s;return A(a,c,{...e,lazy:!0},null)}function E(s,l){const a={};for(const c of l)a[c]=s[c];return a}export{K as u};