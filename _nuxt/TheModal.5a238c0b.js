import{_ as Ft}from"./UiButton.vue.f7442ca3.js";import{_ as kt}from"./nuxt-link.0cc1458b.js";import{i as vt,r as x,G as zt,U as Vt,V as Ht,o as Kt,c as $t,a as W,s as Z,l as v,b as gt,w as ht,d as mt,t as Jt,x as Ot}from"./entry.2feb2fc3.js";import{u as Yt}from"./default.37019c5f.js";import{_ as jt}from"./_plugin-vue_export-helper.c27b6911.js";var Gt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},pt={},N={};let ut;const Qt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];N.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};N.getSymbolTotalCodewords=function(t){return Qt[t]};N.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};N.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ut=t};N.isKanjiModeEnabled=function(){return typeof ut<"u"};N.toSJIS=function(t){return ut(t)};var Y={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(Y);function Et(){this.buffer=[],this.length=0}Et.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var qt=Et;function H(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}H.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};H.prototype.get=function(e,t){return this.data[e*this.size+t]};H.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};H.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var xt=H,Bt={};(function(e){const t=N.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let u=1;u<o-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||o.push([n[a],n[u]]);return o}})(Bt);var Tt={};const Wt=N.getSymbolSize,wt=7;Tt.getPositions=function(t){const i=Wt(t);return[[0,0],[i-wt,0],[0,i-wt]]};var At={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,u=0,c=null,l=null;for(let E=0;E<n;E++){a=u=0,c=l=null;for(let m=0;m<n;m++){let f=o.get(E,m);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=o.get(m,E),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const c=o.get(a,u)+o.get(a,u+1)+o.get(a+1,u)+o.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,u=0;for(let c=0;c<n;c++){a=u=0;for(let l=0;l<n;l++)a=a<<1&2047|o.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|o.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let u=0;u<s;u++)n+=o.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,i(o,u,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,o);const l=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(c,o),l<u&&(u=l,a=c)}return a}})(At);var j={};const P=Y,K=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],$=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];j.getBlocksCount=function(t,i){switch(i){case P.L:return K[(t-1)*4+0];case P.M:return K[(t-1)*4+1];case P.Q:return K[(t-1)*4+2];case P.H:return K[(t-1)*4+3];default:return}};j.getTotalCodewordsCount=function(t,i){switch(i){case P.L:return $[(t-1)*4+0];case P.M:return $[(t-1)*4+1];case P.Q:return $[(t-1)*4+2];case P.H:return $[(t-1)*4+3];default:return}};var Nt={},G={};const z=new Uint8Array(512),J=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)z[i]=t,J[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)z[i]=z[i-255]})();G.log=function(t){if(t<1)throw new Error("log("+t+")");return J[t]};G.exp=function(t){return z[t]};G.mul=function(t,i){return t===0||i===0?0:z[J[t]+J[i]]};(function(e){const t=G;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let u=0;u<o.length;u++)n[u]^=t.mul(o[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(Nt);const It=Nt;function ct(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ct.prototype.initialize=function(t){this.degree=t,this.genPoly=It.generateECPolynomial(this.degree)};ct.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=It.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var Zt=ct,Mt={},R={},lt={};lt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var b={};const bt="[0-9]+",Xt="[A-Z $%*+\\-./:]+";let V="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";V=V.replace(/u/g,"\\u");const te="(?:(?![A-Z0-9 $%*+\\-./:]|"+V+`)(?:.|[\r
]))+`;b.KANJI=new RegExp(V,"g");b.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");b.BYTE=new RegExp(te,"g");b.NUMERIC=new RegExp(bt,"g");b.ALPHANUMERIC=new RegExp(Xt,"g");const ee=new RegExp("^"+V+"$"),ne=new RegExp("^"+bt+"$"),oe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");b.testKanji=function(t){return ee.test(t)};b.testNumeric=function(t){return ne.test(t)};b.testAlphanumeric=function(t){return oe.test(t)};(function(e){const t=lt,i=b;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(R);(function(e){const t=N,i=j,r=Y,o=R,n=lt,s=7973,a=t.getBCHDigit(s);function u(m,f,w){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,w,m))return y}function c(m,f){return o.getCharCountIndicator(m,f)+4}function l(m,f){let w=0;return m.forEach(function(y){const A=c(y.mode,f);w+=A+y.getBitsLength()}),w}function E(m,f){for(let w=1;w<=40;w++)if(l(m,w)<=e.getCapacity(w,f,o.MIXED))return w}e.from=function(f,w){return n.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const A=t.getSymbolTotalCodewords(f),h=i.getTotalCodewordsCount(f,w),C=(A-h)*8;if(y===o.MIXED)return C;const g=C-c(y,f);switch(y){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,w){let y;const A=r.from(w,r.M);if(Array.isArray(f)){if(f.length>1)return E(f,A);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),A)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return f<<12|w}})(Mt);var St={};const rt=N,_t=1335,re=21522,yt=rt.getBCHDigit(_t);St.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;rt.getBCHDigit(o)-yt>=0;)o^=_t<<rt.getBCHDigit(o)-yt;return(r<<10|o)^re};var Pt={};const ie=R;function L(e){this.mode=ie.NUMERIC,this.data=e.toString()}L.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};L.prototype.getLength=function(){return this.data.length};L.prototype.getBitsLength=function(){return L.getBitsLength(this.data.length)};L.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var se=L;const ae=R,X=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function D(e){this.mode=ae.ALPHANUMERIC,this.data=e}D.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=X.indexOf(this.data[i])*45;r+=X.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(X.indexOf(this.data[i]),6)};var ue=D,ce=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const le=ce,fe=R;function U(e){this.mode=fe.BYTE,typeof e=="string"&&(e=le(e)),this.data=new Uint8Array(e)}U.getBitsLength=function(t){return t*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var de=U;const ge=R,he=N;function F(e){this.mode=ge.KANJI,this.data=e}F.getBitsLength=function(t){return t*13};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=he.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var me=F,Rt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var u,c,l,E,m,f,w,y,A;!a.empty();){u=a.pop(),c=u.value,E=u.cost,m=i[c]||{};for(l in m)m.hasOwnProperty(l)&&(f=m[l],w=E+f,y=s[l],A=typeof s[l]>"u",(A||y>w)&&(s[l]=w,a.push(l,w),n[l]=c))}if(typeof o<"u"&&typeof s[o]>"u"){var h=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(h)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Rt);var we=Rt.exports;(function(e){const t=R,i=se,r=ue,o=de,n=me,s=b,a=N,u=we;function c(h){return unescape(encodeURIComponent(h)).length}function l(h,C,g){const d=[];let p;for(;(p=h.exec(g))!==null;)d.push({data:p[0],index:p.index,mode:C,length:p[0].length});return d}function E(h){const C=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,p;return a.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),p=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),p=[]),C.concat(g,d,p).sort(function(T,I){return T.index-I.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function m(h,C){switch(C){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return r.getBitsLength(h);case t.KANJI:return n.getBitsLength(h);case t.BYTE:return o.getBitsLength(h)}}function f(h){return h.reduce(function(C,g){const d=C.length-1>=0?C[C.length-1]:null;return d&&d.mode===g.mode?(C[C.length-1].data+=g.data,C):(C.push(g),C)},[])}function w(h){const C=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:C.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:C.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:C.push([d,{data:d.data,mode:t.BYTE,length:c(d.data)}]);break;case t.BYTE:C.push([{data:d.data,mode:t.BYTE,length:c(d.data)}])}}return C}function y(h,C){const g={},d={start:{}};let p=["start"];for(let B=0;B<h.length;B++){const T=h[B],I=[];for(let _=0;_<T.length;_++){const M=T[_],k=""+B+_;I.push(k),g[k]={node:M,lastCount:0},d[k]={};for(let q=0;q<p.length;q++){const S=p[q];g[S]&&g[S].node.mode===M.mode?(d[S][k]=m(g[S].lastCount+M.length,M.mode)-m(g[S].lastCount,M.mode),g[S].lastCount+=M.length):(g[S]&&(g[S].lastCount=M.length),d[S][k]=m(M.length,M.mode)+4+t.getCharCountIndicator(M.mode,C))}}p=I}for(let B=0;B<p.length;B++)d[p[B]].end=0;return{map:d,table:g}}function A(h,C){let g;const d=t.getBestModeForData(h);if(g=t.from(C,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new r(h);case t.KANJI:return new n(h);case t.BYTE:return new o(h)}}e.fromArray=function(C){return C.reduce(function(g,d){return typeof d=="string"?g.push(A(d,null)):d.data&&g.push(A(d.data,d.mode)),g},[])},e.fromString=function(C,g){const d=E(C,a.isKanjiModeEnabled()),p=w(d),B=y(p,g),T=u.find_path(B.map,"start","end"),I=[];for(let _=1;_<T.length-1;_++)I.push(B.table[T[_]].node);return e.fromArray(f(I))},e.rawSplit=function(C){return e.fromArray(E(C,a.isKanjiModeEnabled()))}})(Pt);const Q=N,tt=Y,ye=qt,Ce=xt,pe=Bt,Ee=Tt,it=At,st=j,Be=Zt,O=Mt,Te=St,Ae=R,et=Pt;function Ne(e,t){const i=e.size,r=Ee.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function Ie(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Me(e,t){const i=pe.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,n+a,!0,!0):e.set(o+s,n+a,!1,!0)}}function be(e,t){const i=e.size,r=O.getEncodedBits(t);let o,n,s;for(let a=0;a<18;a++)o=Math.floor(a/3),n=a%3+i-8-3,s=(r>>a&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function nt(e,t,i){const r=e.size,o=Te.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function Se(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(o,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(o,a-u,c),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function _e(e,t,i){const r=new ye;i.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),Ae.getCharCountIndicator(u.mode,e)),u.write(r)});const o=Q.getSymbolTotalCodewords(e),n=st.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let u=0;u<a;u++)r.put(u%2?17:236,8);return Pe(r,e,t)}function Pe(e,t,i){const r=Q.getSymbolTotalCodewords(t),o=st.getTotalCodewordsCount(t,i),n=r-o,s=st.getBlocksCount(t,i),a=r%s,u=s-a,c=Math.floor(r/s),l=Math.floor(n/s),E=l+1,m=c-l,f=new Be(m);let w=0;const y=new Array(s),A=new Array(s);let h=0;const C=new Uint8Array(e.buffer);for(let T=0;T<s;T++){const I=T<u?l:E;y[T]=C.slice(w,w+I),A[T]=f.encode(y[T]),w+=I,h=Math.max(h,I)}const g=new Uint8Array(r);let d=0,p,B;for(p=0;p<h;p++)for(B=0;B<s;B++)p<y[B].length&&(g[d++]=y[B][p]);for(p=0;p<m;p++)for(B=0;B<s;B++)g[d++]=A[B][p];return g}function Re(e,t,i,r){let o;if(Array.isArray(e))o=et.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=et.rawSplit(e);c=O.getBestVersionForData(l,i)}o=et.fromString(e,c||40)}else throw new Error("Invalid data");const n=O.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=_e(t,i,o),a=Q.getSymbolSize(t),u=new Ce(a);return Ne(u,t),Ie(u),Me(u,t),nt(u,i,0),t>=7&&be(u,t),Se(u,s),isNaN(r)&&(r=it.getBestMask(u,nt.bind(null,u,i))),it.applyMask(r,u),nt(u,i,r),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}pt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=tt.M,o,n;return typeof i<"u"&&(r=tt.from(i.errorCorrectionLevel,tt.M),o=O.from(i.version),n=it.from(i.maskPattern),i.toSJISFunc&&Q.setToSJISFunction(i.toSJISFunc)),Re(t,o,r,n)};var Lt={},ft={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,u=e.getScale(s,n),c=Math.floor((s+n.margin*2)*u),l=n.margin*u,E=[n.color.light,n.color.dark];for(let m=0;m<c;m++)for(let f=0;f<c;f++){let w=(m*c+f)*4,y=n.color.light;if(m>=l&&f>=l&&m<c-l&&f<c-l){const A=Math.floor((m-l)/u),h=Math.floor((f-l)/u);y=E[a[A*s+h]?1:0]}r[w++]=y.r,r[w++]=y.g,r[w++]=y.b,r[w]=y.a}}})(ft);(function(e){const t=ft;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,c=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=r()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),E=c.getContext("2d"),m=E.createImageData(l,l);return t.qrToImageData(m.data,n,u),i(E,c,l),E.putImageData(m,0,0),c},e.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(n,s,u),l=u.type||"image/png",E=u.rendererOpts||{};return c.toDataURL(l,E.quality)}})(Lt);var Dt={};const Le=ft;function Ct(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ot(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function De(e,t,i){let r="",o=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(r+=n?ot("M",u+i,.5+c+i):ot("m",o,0),o=0,n=!1),u+1<t&&e[a+1]||(r+=ot("h",s),s=0)):o++}return r}Dt.render=function(t,i,r){const o=Le.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+o.margin*2,u=o.color.light.a?"<path "+Ct(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Ct(o.color.dark,"stroke")+' d="'+De(s,n,o.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof r=="function"&&r(null,m),m};const Ue=Gt,at=pt,Ut=Lt,Fe=Dt;function dt(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Ue())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(u,c){try{const l=at.create(i,r);u(e(l,t,r))}catch(l){c(l)}})}try{const u=at.create(i,r);o(null,e(u,t,r))}catch(u){o(u)}}at.create;dt.bind(null,Ut.render);var ke=dt.bind(null,Ut.renderToDataURL);dt.bind(null,function(e,t,i){return Fe.render(e,i)});const ve=e=>{const t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(i){console.error("Fallback: Oops, unable to copy",i)}document.body.removeChild(t)},ze=e=>{if(!navigator.clipboard){ve(e);return}return new Promise((t,i)=>{navigator.clipboard.writeText(e).then(function(){t(),console.log("Async: Copying to clipboard was successful!")},function(r){console.error("Async: Could not copy text: ",r),i(r)})})},Ve={class:"TheModal"},He=["src"],Ke=vt({__name:"TheModal",setup(e){const t=Yt(),i=x("Скопировать ссылку"),r=x(""),o=x(""),n=async a=>{try{r.value=await ke(a)}catch(u){console.error(u)}};zt(()=>{const a=JSON.parse(localStorage.getItem(Vt)||"{}");o.value=`${location.href}?${Ht.stringify(a)}`,n(o.value)});const s=async()=>{await ze(o.value),i.value="Ссылка скопирована",setTimeout(()=>{i.value="Скопировать ссылку"},2e3)};return(a,u)=>{const c=Ft,l=kt;return Kt(),$t("div",Ve,[W("div",{class:Z(a.$style.wrapper),onClick:u[0]||(u[0]=Ot((...E)=>v(t).changeState&&v(t).changeState(...E),["self"]))},[W("div",{class:Z(a.$style.content)},[W("img",{src:v(r),alt:"",class:Z(a.$style.image)},null,10,He),gt(c,{onClick:s},{default:ht(()=>[mt(Jt(v(i)),1)]),_:1}),gt(l,{to:`https://t.me/share/url?url=${v(o)}`,target:"_blank",class:"UiButton --medium-size"},{default:ht(()=>[mt(" Поделиться в TG ")]),_:1},8,["to"])],2)],2)])}}}),$e="_wrapper_1l5zh_10",Je="_content_1l5zh_19",Oe="_image_1l5zh_27",Ye={wrapper:$e,content:Je,image:Oe},je={$style:Ye},Ze=jt(Ke,[["__cssModules",je]]);export{Ze as default};
