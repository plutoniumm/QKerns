import{S as uo,i as fo,s as po,K as dt,k as s,l as r,m as E,h as f,L as qt,M as Ac,b as P,F as e,N as Fc,C as co,O as kn,P as Xc,q as t,r as n,u as nu,Q as iu,e as Oc,R as au,D as lu,G as su,H as ru,I as ou,f as ct,t as ut,T as hu,j as cu,x as Ft,y as Xt,z as Yt,U as uu,A as Ut,a as N,c as B,n as Y,E as du}from"../../../chunks/index-7af328a4.js";var _o={exports:{}};function go(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(function(a){var l=i[a];typeof l=="object"&&!Object.isFrozen(l)&&go(l)}),i}_o.exports=go;_o.exports.default=go;class Lc{constructor(a){a.data===void 0&&(a.data={}),this.data=a.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Yc(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ke(i,...a){const l=Object.create(null);for(const _ in i)l[_]=i[_];return a.forEach(function(_){for(const v in _)l[v]=_[v]}),l}const fu="</span>",Cc=i=>!!i.scope||i.sublanguage&&i.language,pu=(i,{prefix:a})=>{if(i.includes(".")){const l=i.split(".");return[`${a}${l.shift()}`,...l.map((_,v)=>`${_}${"_".repeat(v+1)}`)].join(" ")}return`${a}${i}`};class _u{constructor(a,l){this.buffer="",this.classPrefix=l.classPrefix,a.walk(this)}addText(a){this.buffer+=Yc(a)}openNode(a){if(!Cc(a))return;let l="";a.sublanguage?l=`language-${a.language}`:l=pu(a.scope,{prefix:this.classPrefix}),this.span(l)}closeNode(a){Cc(a)&&(this.buffer+=fu)}value(){return this.buffer}span(a){this.buffer+=`<span class="${a}">`}}const Kc=(i={})=>{const a={children:[]};return Object.assign(a,i),a};class xo{constructor(){this.rootNode=Kc(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(a){this.top.children.push(a)}openNode(a){const l=Kc({scope:a});this.add(l),this.stack.push(l)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(a){return this.constructor._walk(a,this.rootNode)}static _walk(a,l){return typeof l=="string"?a.addText(l):l.children&&(a.openNode(l),l.children.forEach(_=>this._walk(a,_)),a.closeNode(l)),a}static _collapse(a){typeof a!="string"&&a.children&&(a.children.every(l=>typeof l=="string")?a.children=[a.children.join("")]:a.children.forEach(l=>{xo._collapse(l)}))}}class gu extends xo{constructor(a){super(),this.options=a}addKeyword(a,l){a!==""&&(this.openNode(l),this.addText(a),this.closeNode())}addText(a){a!==""&&this.add(a)}addSublanguage(a,l){const _=a.root;_.sublanguage=!0,_.language=l,this.add(_)}toHTML(){return new _u(this,this.options).value()}finalize(){return!0}}function Gt(i){return i?typeof i=="string"?i:i.source:null}function Uc(i){return et("(?=",i,")")}function xu(i){return et("(?:",i,")*")}function mu(i){return et("(?:",i,")?")}function et(...i){return i.map(l=>Gt(l)).join("")}function bu(i){const a=i[i.length-1];return typeof a=="object"&&a.constructor===Object?(i.splice(i.length-1,1),a):{}}function mo(...i){return"("+(bu(i).capture?"":"?:")+i.map(_=>Gt(_)).join("|")+")"}function Gc(i){return new RegExp(i.toString()+"|").exec("").length-1}function $u(i,a){const l=i&&i.exec(a);return l&&l.index===0}const wu=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function bo(i,{joinWith:a}){let l=0;return i.map(_=>{l+=1;const v=l;let p=Gt(_),c="";for(;p.length>0;){const u=wu.exec(p);if(!u){c+=p;break}c+=p.substring(0,u.index),p=p.substring(u.index+u[0].length),u[0][0]==="\\"&&u[1]?c+="\\"+String(Number(u[1])+v):(c+=u[0],u[0]==="("&&l++)}return c}).map(_=>`(${_})`).join(a)}const vu=/\b\B/,zc="[a-zA-Z]\\w*",$o="[a-zA-Z_]\\w*",Vc="\\b\\d+(\\.\\d+)?",Jc="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Zc="\\b(0b[01]+)",yu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Tu=(i={})=>{const a=/^#![ ]*\//;return i.binary&&(i.begin=et(a,/.*\b/,i.binary,/\b.*/)),Ke({scope:"meta",begin:a,end:/$/,relevance:0,"on:begin":(l,_)=>{l.index!==0&&_.ignoreMatch()}},i)},zt={begin:"\\\\[\\s\\S]",relevance:0},Eu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[zt]},ku={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[zt]},Ru={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Sn=function(i,a,l={}){const _=Ke({scope:"comment",begin:i,end:a,contains:[]},l);_.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const v=mo("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return _.contains.push({begin:et(/[ ]+/,"(",v,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),_},Su=Sn("//","$"),Mu=Sn("/\\*","\\*/"),Nu=Sn("#","$"),Bu={scope:"number",begin:Vc,relevance:0},Iu={scope:"number",begin:Jc,relevance:0},Au={scope:"number",begin:Zc,relevance:0},Ou={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[zt,{begin:/\[/,end:/\]/,relevance:0,contains:[zt]}]}]},Lu={scope:"title",begin:zc,relevance:0},Cu={scope:"title",begin:$o,relevance:0},Ku={begin:"\\.\\s*"+$o,relevance:0},Du=function(i){return Object.assign(i,{"on:begin":(a,l)=>{l.data._beginMatch=a[1]},"on:end":(a,l)=>{l.data._beginMatch!==a[1]&&l.ignoreMatch()}})};var yn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:vu,IDENT_RE:zc,UNDERSCORE_IDENT_RE:$o,NUMBER_RE:Vc,C_NUMBER_RE:Jc,BINARY_NUMBER_RE:Zc,RE_STARTERS_RE:yu,SHEBANG:Tu,BACKSLASH_ESCAPE:zt,APOS_STRING_MODE:Eu,QUOTE_STRING_MODE:ku,PHRASAL_WORDS_MODE:Ru,COMMENT:Sn,C_LINE_COMMENT_MODE:Su,C_BLOCK_COMMENT_MODE:Mu,HASH_COMMENT_MODE:Nu,NUMBER_MODE:Bu,C_NUMBER_MODE:Iu,BINARY_NUMBER_MODE:Au,REGEXP_MODE:Ou,TITLE_MODE:Lu,UNDERSCORE_TITLE_MODE:Cu,METHOD_GUARD:Ku,END_SAME_AS_BEGIN:Du});function ju(i,a){i.input[i.index-1]==="."&&a.ignoreMatch()}function Pu(i,a){i.className!==void 0&&(i.scope=i.className,delete i.className)}function Hu(i,a){a&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=ju,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function Wu(i,a){Array.isArray(i.illegal)&&(i.illegal=mo(...i.illegal))}function qu(i,a){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Fu(i,a){i.relevance===void 0&&(i.relevance=1)}const Xu=(i,a)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const l=Object.assign({},i);Object.keys(i).forEach(_=>{delete i[_]}),i.keywords=l.keywords,i.begin=et(l.beforeMatch,Uc(l.begin)),i.starts={relevance:0,contains:[Object.assign(l,{endsParent:!0})]},i.relevance=0,delete l.beforeMatch},Yu=["of","and","for","in","not","or","if","then","parent","list","value"],Uu="keyword";function Qc(i,a,l=Uu){const _=Object.create(null);return typeof i=="string"?v(l,i.split(" ")):Array.isArray(i)?v(l,i):Object.keys(i).forEach(function(p){Object.assign(_,Qc(i[p],a,p))}),_;function v(p,c){a&&(c=c.map(u=>u.toLowerCase())),c.forEach(function(u){const o=u.split("|");_[o[0]]=[p,Gu(o[0],o[1])]})}}function Gu(i,a){return a?Number(a):zu(i)?0:1}function zu(i){return Yu.includes(i.toLowerCase())}const Dc={},Qe=i=>{console.error(i)},jc=(i,...a)=>{console.log(`WARN: ${i}`,...a)},ht=(i,a)=>{Dc[`${i}/${a}`]||(console.log(`Deprecated as of ${i}. ${a}`),Dc[`${i}/${a}`]=!0)},Rn=new Error;function eu(i,a,{key:l}){let _=0;const v=i[l],p={},c={};for(let u=1;u<=a.length;u++)c[u+_]=v[u],p[u+_]=!0,_+=Gc(a[u-1]);i[l]=c,i[l]._emit=p,i[l]._multi=!0}function Vu(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw Qe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Rn;if(typeof i.beginScope!="object"||i.beginScope===null)throw Qe("beginScope must be object"),Rn;eu(i,i.begin,{key:"beginScope"}),i.begin=bo(i.begin,{joinWith:""})}}function Ju(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw Qe("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Rn;if(typeof i.endScope!="object"||i.endScope===null)throw Qe("endScope must be object"),Rn;eu(i,i.end,{key:"endScope"}),i.end=bo(i.end,{joinWith:""})}}function Zu(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function Qu(i){Zu(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),Vu(i),Ju(i)}function ed(i){function a(c,u){return new RegExp(Gt(c),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(u?"g":""))}class l{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(u,o){o.position=this.position++,this.matchIndexes[this.matchAt]=o,this.regexes.push([o,u]),this.matchAt+=Gc(u)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const u=this.regexes.map(o=>o[1]);this.matcherRe=a(bo(u,{joinWith:"|"}),!0),this.lastIndex=0}exec(u){this.matcherRe.lastIndex=this.lastIndex;const o=this.matcherRe.exec(u);if(!o)return null;const R=o.findIndex((U,D)=>D>0&&U!==void 0),L=this.matchIndexes[R];return o.splice(0,R),Object.assign(o,L)}}class _{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(u){if(this.multiRegexes[u])return this.multiRegexes[u];const o=new l;return this.rules.slice(u).forEach(([R,L])=>o.addRule(R,L)),o.compile(),this.multiRegexes[u]=o,o}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(u,o){this.rules.push([u,o]),o.type==="begin"&&this.count++}exec(u){const o=this.getMatcher(this.regexIndex);o.lastIndex=this.lastIndex;let R=o.exec(u);if(this.resumingScanAtSamePosition()&&!(R&&R.index===this.lastIndex)){const L=this.getMatcher(0);L.lastIndex=this.lastIndex+1,R=L.exec(u)}return R&&(this.regexIndex+=R.position+1,this.regexIndex===this.count&&this.considerAll()),R}}function v(c){const u=new _;return c.contains.forEach(o=>u.addRule(o.begin,{rule:o,type:"begin"})),c.terminatorEnd&&u.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&u.addRule(c.illegal,{type:"illegal"}),u}function p(c,u){const o=c;if(c.isCompiled)return o;[Pu,qu,Qu,Xu].forEach(L=>L(c,u)),i.compilerExtensions.forEach(L=>L(c,u)),c.__beforeBegin=null,[Hu,Wu,Fu].forEach(L=>L(c,u)),c.isCompiled=!0;let R=null;return typeof c.keywords=="object"&&c.keywords.$pattern&&(c.keywords=Object.assign({},c.keywords),R=c.keywords.$pattern,delete c.keywords.$pattern),R=R||/\w+/,c.keywords&&(c.keywords=Qc(c.keywords,i.case_insensitive)),o.keywordPatternRe=a(R,!0),u&&(c.begin||(c.begin=/\B|\b/),o.beginRe=a(o.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(o.endRe=a(o.end)),o.terminatorEnd=Gt(o.end)||"",c.endsWithParent&&u.terminatorEnd&&(o.terminatorEnd+=(c.end?"|":"")+u.terminatorEnd)),c.illegal&&(o.illegalRe=a(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(L){return td(L==="self"?c:L)})),c.contains.forEach(function(L){p(L,o)}),c.starts&&p(c.starts,u),o.matcher=v(o),o}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=Ke(i.classNameAliases||{}),p(i)}function tu(i){return i?i.endsWithParent||tu(i.starts):!1}function td(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(a){return Ke(i,{variants:null},a)})),i.cachedVariants?i.cachedVariants:tu(i)?Ke(i,{starts:i.starts?Ke(i.starts):null}):Object.isFrozen(i)?Ke(i):i}var nd="11.7.0";class id extends Error{constructor(a,l){super(a),this.name="HTMLInjectionError",this.html=l}}const ho=Yc,Pc=Ke,Hc=Symbol("nomatch"),ad=7,ld=function(i){const a=Object.create(null),l=Object.create(null),_=[];let v=!0;const p="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let u={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:gu};function o(d){return u.noHighlightRe.test(d)}function R(d){let k=d.className+" ";k+=d.parentNode?d.parentNode.className:"";const A=u.languageDetectRe.exec(k);if(A){const C=se(A[1]);return C||(jc(p.replace("{}",A[1])),jc("Falling back to no-highlight mode for this block.",d)),C?A[1]:"no-highlight"}return k.split(/\s+/).find(C=>o(C)||se(C))}function L(d,k,A){let C="",H="";typeof k=="object"?(C=d,A=k.ignoreIllegals,H=k.language):(ht("10.7.0","highlight(lang, code, ...args) has been deprecated."),ht("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),H=d,C=k),A===void 0&&(A=!0);const Z={code:C,language:H};Re("before:highlight",Z);const ue=Z.result?Z.result:U(Z.language,Z.code,A);return ue.code=Z.code,Re("after:highlight",ue),ue}function U(d,k,A,C){const H=Object.create(null);function Z(x,T){return x.keywords[T]}function ue(){if(!S.keywords){W.addText(K);return}let x=0;S.keywordPatternRe.lastIndex=0;let T=S.keywordPatternRe.exec(K),M="";for(;T;){M+=K.substring(x,T.index);const h=ee.case_insensitive?T[0].toLowerCase():T[0],F=Z(S,h);if(F){const[ne,wt]=F;if(W.addText(M),M="",H[h]=(H[h]||0)+1,H[h]<=ad&&(Be+=wt),ne.startsWith("_"))M+=T[0];else{const Jt=ee.classNameAliases[ne]||ne;W.addKeyword(T[0],Jt)}}else M+=T[0];x=S.keywordPatternRe.lastIndex,T=S.keywordPatternRe.exec(K)}M+=K.substring(x),W.addText(M)}function Se(){if(K==="")return;let x=null;if(typeof S.subLanguage=="string"){if(!a[S.subLanguage]){W.addText(K);return}x=U(S.subLanguage,K,!0,at[S.subLanguage]),at[S.subLanguage]=x._top}else x=ge(K,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(Be+=x.relevance),W.addSublanguage(x._emitter,x.language)}function V(){S.subLanguage!=null?Se():ue(),K=""}function re(x,T){let M=1;const h=T.length-1;for(;M<=h;){if(!x._emit[M]){M++;continue}const F=ee.classNameAliases[x[M]]||x[M],ne=T[M];F?W.addKeyword(ne,F):(K=ne,ue(),K=""),M++}}function it(x,T){return x.scope&&typeof x.scope=="string"&&W.openNode(ee.classNameAliases[x.scope]||x.scope),x.beginScope&&(x.beginScope._wrap?(W.addKeyword(K,ee.classNameAliases[x.beginScope._wrap]||x.beginScope._wrap),K=""):x.beginScope._multi&&(re(x.beginScope,T),K="")),S=Object.create(x,{parent:{value:S}}),S}function Pe(x,T,M){let h=$u(x.endRe,M);if(h){if(x["on:end"]){const F=new Lc(x);x["on:end"](T,F),F.isMatchIgnored&&(h=!1)}if(h){for(;x.endsParent&&x.parent;)x=x.parent;return x}}if(x.endsWithParent)return Pe(x.parent,T,M)}function de(x){return S.matcher.regexIndex===0?(K+=x[0],1):(lt=!0,0)}function be(x){const T=x[0],M=x.rule,h=new Lc(M),F=[M.__beforeBegin,M["on:begin"]];for(const ne of F)if(ne&&(ne(x,h),h.isMatchIgnored))return de(T);return M.skip?K+=T:(M.excludeBegin&&(K+=T),V(),!M.returnBegin&&!M.excludeBegin&&(K=T)),it(M,x),M.returnBegin?0:T.length}function Me(x){const T=x[0],M=k.substring(x.index),h=Pe(S,x,M);if(!h)return Hc;const F=S;S.endScope&&S.endScope._wrap?(V(),W.addKeyword(T,S.endScope._wrap)):S.endScope&&S.endScope._multi?(V(),re(S.endScope,x)):F.skip?K+=T:(F.returnEnd||F.excludeEnd||(K+=T),V(),F.excludeEnd&&(K=T));do S.scope&&W.closeNode(),!S.skip&&!S.subLanguage&&(Be+=S.relevance),S=S.parent;while(S!==h.parent);return h.starts&&it(h.starts,x),F.returnEnd?0:T.length}function bt(){const x=[];for(let T=S;T!==ee;T=T.parent)T.scope&&x.unshift(T.scope);x.forEach(T=>W.openNode(T))}let Ne={};function G(x,T){const M=T&&T[0];if(K+=x,M==null)return V(),0;if(Ne.type==="begin"&&T.type==="end"&&Ne.index===T.index&&M===""){if(K+=k.slice(T.index,T.index+1),!v){const h=new Error(`0 width match regex (${d})`);throw h.languageName=d,h.badRule=Ne.rule,h}return 1}if(Ne=T,T.type==="begin")return be(T);if(T.type==="illegal"&&!A){const h=new Error('Illegal lexeme "'+M+'" for mode "'+(S.scope||"<unnamed>")+'"');throw h.mode=S,h}else if(T.type==="end"){const h=Me(T);if(h!==Hc)return h}if(T.type==="illegal"&&M==="")return 1;if(We>1e5&&We>T.index*3)throw new Error("potential infinite loop, way more iterations than matches");return K+=M,M.length}const ee=se(d);if(!ee)throw Qe(p.replace("{}",d)),new Error('Unknown language: "'+d+'"');const $t=ed(ee);let He="",S=C||$t;const at={},W=new u.__emitter(u);bt();let K="",Be=0,fe=0,We=0,lt=!1;try{for(S.matcher.considerAll();;){We++,lt?lt=!1:S.matcher.considerAll(),S.matcher.lastIndex=fe;const x=S.matcher.exec(k);if(!x)break;const T=k.substring(fe,x.index),M=G(T,x);fe=x.index+M}return G(k.substring(fe)),W.closeAllNodes(),W.finalize(),He=W.toHTML(),{language:d,value:He,relevance:Be,illegal:!1,_emitter:W,_top:S}}catch(x){if(x.message&&x.message.includes("Illegal"))return{language:d,value:ho(k),illegal:!0,relevance:0,_illegalBy:{message:x.message,index:fe,context:k.slice(fe-100,fe+100),mode:x.mode,resultSoFar:He},_emitter:W};if(v)return{language:d,value:ho(k),illegal:!1,relevance:0,errorRaised:x,_emitter:W,_top:S};throw x}}function D(d){const k={value:ho(d),illegal:!1,relevance:0,_top:c,_emitter:new u.__emitter(u)};return k._emitter.addText(d),k}function ge(d,k){k=k||u.languages||Object.keys(a);const A=D(d),C=k.filter(se).filter(q).map(V=>U(V,d,!1));C.unshift(A);const H=C.sort((V,re)=>{if(V.relevance!==re.relevance)return re.relevance-V.relevance;if(V.language&&re.language){if(se(V.language).supersetOf===re.language)return 1;if(se(re.language).supersetOf===V.language)return-1}return 0}),[Z,ue]=H,Se=Z;return Se.secondBest=ue,Se}function he(d,k,A){const C=k&&l[k]||A;d.classList.add("hljs"),d.classList.add(`language-${C}`)}function le(d){let k=null;const A=R(d);if(o(A))return;if(Re("before:highlightElement",{el:d,language:A}),d.children.length>0&&(u.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(d)),u.throwUnescapedHTML))throw new id("One of your code blocks includes unescaped HTML.",d.innerHTML);k=d;const C=k.textContent,H=A?L(C,{language:A,ignoreIllegals:!0}):ge(C);d.innerHTML=H.value,he(d,A,H.language),d.result={language:H.language,re:H.relevance,relevance:H.relevance},H.secondBest&&(d.secondBest={language:H.secondBest.language,relevance:H.secondBest.relevance}),Re("after:highlightElement",{el:d,result:H,text:C})}function De(d){u=Pc(u,d)}const Ee=()=>{ke(),ht("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ft(){ke(),ht("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let pt=!1;function ke(){if(document.readyState==="loading"){pt=!0;return}document.querySelectorAll(u.cssSelector).forEach(le)}function _t(){pt&&ke()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",_t,!1);function tt(d,k){let A=null;try{A=k(i)}catch(C){if(Qe("Language definition for '{}' could not be registered.".replace("{}",d)),v)Qe(C);else throw C;A=c}A.name||(A.name=d),a[d]=A,A.rawDefinition=k.bind(null,i),A.aliases&&nt(A.aliases,{languageName:d})}function ce(d){delete a[d];for(const k of Object.keys(l))l[k]===d&&delete l[k]}function je(){return Object.keys(a)}function se(d){return d=(d||"").toLowerCase(),a[d]||a[l[d]]}function nt(d,{languageName:k}){typeof d=="string"&&(d=[d]),d.forEach(A=>{l[A.toLowerCase()]=k})}function q(d){const k=se(d);return k&&!k.disableAutodetect}function gt(d){d["before:highlightBlock"]&&!d["before:highlightElement"]&&(d["before:highlightElement"]=k=>{d["before:highlightBlock"](Object.assign({block:k.el},k))}),d["after:highlightBlock"]&&!d["after:highlightElement"]&&(d["after:highlightElement"]=k=>{d["after:highlightBlock"](Object.assign({block:k.el},k))})}function xt(d){gt(d),_.push(d)}function Re(d,k){const A=d;_.forEach(function(C){C[A]&&C[A](k)})}function mt(d){return ht("10.7.0","highlightBlock will be removed entirely in v12.0"),ht("10.7.0","Please use highlightElement now."),le(d)}Object.assign(i,{highlight:L,highlightAuto:ge,highlightAll:ke,highlightElement:le,highlightBlock:mt,configure:De,initHighlighting:Ee,initHighlightingOnLoad:ft,registerLanguage:tt,unregisterLanguage:ce,listLanguages:je,getLanguage:se,registerAliases:nt,autoDetection:q,inherit:Pc,addPlugin:xt}),i.debugMode=function(){v=!1},i.safeMode=function(){v=!0},i.versionString=nd,i.regex={concat:et,lookahead:Uc,either:mo,optional:mu,anyNumberOfTimes:xu};for(const d in yn)typeof yn[d]=="object"&&_o.exports(yn[d]);return Object.assign(i,yn),i};var Vt=ld({}),sd=Vt;Vt.HighlightJS=Vt;Vt.default=Vt;const Wc=sd;function rd(i){let a;return{c(){a=t(i[2])},l(l){a=n(l,i[2])},m(l,_){P(l,a,_)},p(l,_){_&4&&nu(a,l[2])},d(l){l&&f(a)}}}function od(i){let a,l;return{c(){a=new iu(!1),l=Oc(),this.h()},l(_){a=au(_,!1),l=Oc(),this.h()},h(){a.a=l},m(_,v){a.m(i[1],_,v),P(_,l,v)},p(_,v){v&2&&a.p(_[1])},d(_){_&&f(l),_&&a.d()}}}function hd(i){let a,l;function _(o,R){return o[1]?od:rd}let v=_(i),p=v(i),c=[{"data-language":i[3]},i[4]],u={};for(let o=0;o<c.length;o+=1)u=dt(u,c[o]);return{c(){a=s("pre"),l=s("code"),p.c(),this.h()},l(o){a=r(o,"PRE",{"data-language":!0});var R=E(a);l=r(R,"CODE",{});var L=E(l);p.l(L),L.forEach(f),R.forEach(f),this.h()},h(){qt(l,"hljs",!0),Ac(a,u),qt(a,"langtag",i[0]),qt(a,"svelte-11sh29b",!0)},m(o,R){P(o,a,R),e(a,l),p.m(l,null)},p(o,[R]){v===(v=_(o))&&p?p.p(o,R):(p.d(1),p=v(o),p&&(p.c(),p.m(l,null))),Ac(a,u=Fc(c,[R&8&&{"data-language":o[3]},R&16&&o[4]])),qt(a,"langtag",o[0]),qt(a,"svelte-11sh29b",!0)},i:co,o:co,d(o){o&&f(a),p.d()}}}function cd(i,a,l){const _=["langtag","highlighted","code","languageName"];let v=kn(a,_),{langtag:p=!1}=a,{highlighted:c}=a,{code:u}=a,{languageName:o="plaintext"}=a;return i.$$set=R=>{a=dt(dt({},a),Xc(R)),l(4,v=kn(a,_)),"langtag"in R&&l(0,p=R.langtag),"highlighted"in R&&l(1,c=R.highlighted),"code"in R&&l(2,u=R.code),"languageName"in R&&l(3,o=R.languageName)},[p,c,u,o,v]}class ud extends uo{constructor(a){super(),fo(this,a,cd,hd,po,{langtag:0,highlighted:1,code:2,languageName:3})}}const dd=ud,fd=i=>({highlighted:i&8}),qc=i=>({highlighted:i[3]});function pd(i){let a,l;const _=[i[4],{languageName:i[0].name},{langtag:i[2]},{highlighted:i[3]},{code:i[1]}];let v={};for(let p=0;p<_.length;p+=1)v=dt(v,_[p]);return a=new dd({props:v}),{c(){Ft(a.$$.fragment)},l(p){Xt(a.$$.fragment,p)},m(p,c){Yt(a,p,c),l=!0},p(p,c){const u=c&31?Fc(_,[c&16&&uu(p[4]),c&1&&{languageName:p[0].name},c&4&&{langtag:p[2]},c&8&&{highlighted:p[3]},c&2&&{code:p[1]}]):{};a.$set(u)},i(p){l||(ct(a.$$.fragment,p),l=!0)},o(p){ut(a.$$.fragment,p),l=!1},d(p){Ut(a,p)}}}function _d(i){let a;const l=i[6].default,_=lu(l,i,i[5],qc),v=_||pd(i);return{c(){v&&v.c()},l(p){v&&v.l(p)},m(p,c){v&&v.m(p,c),a=!0},p(p,[c]){_?_.p&&(!a||c&40)&&su(_,l,p,p[5],a?ou(l,p[5],c,fd):ru(p[5]),qc):v&&v.p&&(!a||c&31)&&v.p(p,a?c:-1)},i(p){a||(ct(v,p),a=!0)},o(p){ut(v,p),a=!1},d(p){v&&v.d(p)}}}function gd(i,a,l){const _=["language","code","langtag"];let v=kn(a,_),{$$slots:p={},$$scope:c}=a,{language:u}=a,{code:o}=a,{langtag:R=!1}=a;const L=hu();let U="";return cu(()=>{U&&L("highlight",{highlighted:U})}),i.$$set=D=>{a=dt(dt({},a),Xc(D)),l(4,v=kn(a,_)),"language"in D&&l(0,u=D.language),"code"in D&&l(1,o=D.code),"langtag"in D&&l(2,R=D.langtag),"$$scope"in D&&l(5,c=D.$$scope)},i.$$.update=()=>{i.$$.dirty&3&&(Wc.registerLanguage(u.name,u.register),l(3,U=Wc.highlight(o,{language:u.name}).value))},[u,o,R,U,v,c,p]}class xd extends uo{constructor(a){super(),fo(this,a,gd,_d,po,{language:0,code:1,langtag:2})}}const Tn=xd;function md(i){const a=i.regex,l=/[\p{XID_Start}_]\p{XID_Continue}*/u,_=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],u={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:_,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},o={className:"meta",begin:/^(>>>|\.\.\.) /},R={className:"subst",begin:/\{/,end:/\}/,keywords:u,illegal:/#/},L={begin:/\{\{/,relevance:0},U={className:"string",contains:[i.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[i.BACKSLASH_ESCAPE,o],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[i.BACKSLASH_ESCAPE,o],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[i.BACKSLASH_ESCAPE,o,L,R]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[i.BACKSLASH_ESCAPE,o,L,R]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[i.BACKSLASH_ESCAPE,L,R]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[i.BACKSLASH_ESCAPE,L,R]},i.APOS_STRING_MODE,i.QUOTE_STRING_MODE]},D="[0-9](_?[0-9])*",ge=`(\\b(${D}))?\\.(${D})|\\b(${D})\\.`,he=`\\b|${_.join("|")}`,le={className:"number",relevance:0,variants:[{begin:`(\\b(${D})|(${ge}))[eE][+-]?(${D})[jJ]?(?=${he})`},{begin:`(${ge})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${he})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${he})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${he})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${he})`},{begin:`\\b(${D})[jJ](?=${he})`}]},De={className:"comment",begin:a.lookahead(/# type:/),end:/$/,keywords:u,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Ee={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:["self",o,le,U,i.HASH_COMMENT_MODE]}]};return R.contains=[U,le,o],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:u,illegal:/(<\/|->|\?)|=>/,contains:[o,le,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},U,De,i.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,l],scope:{1:"keyword",3:"title.function"},contains:[Ee]},{variants:[{match:[/\bclass/,/\s+/,l,/\s*/,/\(\s*/,l,/\s*\)/]},{match:[/\bclass/,/\s+/,l]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[le,Ee,U]}]}}const bd={name:"python",register:md},En=bd;function $d(i){let a,l,_,v,p,c,u,o,R,L,U,D,ge,he="{i=1}",le,De,Ee,ft,pt="{-1}",ke,_t,tt,ce,je,se,nt,q,gt,xt,Re,mt,d,k="{-1}",A,C,H,Z,ue="{-1}",Se,V,re,it,Pe,de,be,Me,bt,Ne,G,ee,$t,He,S,at,W="{-1}",K,Be,fe,We,lt="{-1}",x,T,M,h,F,ne,wt,Jt="{i=1}",Mn,Nn,wo="{\\lambda}",Bn,vo=2+"",In,An,On,Ln,yo=1+"",Cn,To="{\\lambda}",Kn,Dn,Eo="{i=1}",jn,Pn,Hn,Wn,ko=1+"",qn,Ro="{\\lambda}",Fn,Xn,So="{i=1}",Yn,Un,Gn,zn,Mo="{i=1}",Vn,Jn,Zn,Qn,No="{\\lambda}",ei,Bo=2+"",ti,ni,ii,ai,Io="{\\lambda}",li,Ao=2+"",si,ri,Oo="{bmatrix}",oi,hi,Lo="{bmatrix}",ci,ui,di,fi,Co="{\\lambda}",pi,Ko=2+"",_i,gi,xi,mi,Do="{\\lambda}",bi,jo=2+"",$i,wi,Po=-1+"",vi,yi,Ho=-1+"",Ti,Ei,ki,Ri,Wo=-1+"",Si,Mi,Ni,Bi,qo=-1+"",Ii,Ai,Zt,$e,vt,Oi,Li,z,Ci,Ki,Di,ji,Pi,Hi,Wi,Fo="{bmatrix}",qi,Fi,Xo="{bmatrix}",Xi,Yi,Yo="{x_1, x_2, \\cdots}",Ui,Gi,zi,Qt,ie,yt,Vi,Ji,ae,Zi,Uo="{bmatrix}",Qi,ea,Go="{bmatrix}",ta,na,zo="{bmatrix}",ia,aa,Vo="{bmatrix}",la,sa,ra,Ie,Tt,oa,ha,Et,ca,ua,kt,da,en,we,Rt,fa,pa,m,_a,Jo="{bmatrix}",ga,xa,Zo="{2}",ma,ba,Qo="{bmatrix}",$a,wa,va,ya,eh="{bmatrix}",Ta,Ea,th="{m,1}",ka,Ra,nh="{2}",Sa,Ma,ih="{m,1}",Na,Ba,ah="{m,2}",Ia,Aa,lh="{m,2}",Oa,La,sh="{bmatrix}",Ca,Ka,rh="{bmatrix}",Da,ja,oh="{n,1}",Pa,Ha,hh="{2}",Wa,qa,ch="{n,1}",Fa,Xa,uh="{n,2}",Ya,Ua,dh="{n,2}",Ga,za,fh="{bmatrix}",Va,Ja,ph="{m,1}",Za,Qa,_h="{n,1}",el,tl,gh="{m,1}",nl,il,xh="{m,2}",al,ll,mh="{n,1}",sl,rl,bh="{n,2}",ol,hl,$h="{m,2}",cl,ul,wh="{n,2}",dl,fl,pl,_l,vh="{m,1}",gl,xl,yh="{n,1}",ml,bl,Th="{m,2}",$l,wl,Eh="{n,2}",vl,yl,St,Tl,El,kl,tn,ve,Mt,Rl,Sl,X,Ml,Nl,Bl,kh="{-1}",Il,Al,Ol,Ll,Rh="{-1}",Cl,Kl,Dl,jl,Sh="{bmatrix}",Pl,Hl,Mh="{bmatrix}",Wl,ql,Fl,nn,I,Nt,Xl,Yl,qe,Ul,Gl,zl,Vl,Fe,Jl,Ae,Nh,Zl,Xe,Ql,es,ts,ns,Bt,is,as,It,ls,ss,Ye,rs,os,hs,cs,Ue,us,At,ds,fs,Ot,ps,_s,Ge,gs,xs,ms,bs,ze,$s,Lt,ws,vs,Ct,ys,Ts,Ve,Es,ks,Rs,Ss,Je,Ms,pe,Ns,Bs,Is,Bh="{infinite terms...}",As,Os,Kt,Ls,Cs,an,ye,Dt,Ks,Ds,Oe,js,Ps,Hs,Te,jt,Ws,qs,Ze,Fs,st,Xs,Ys,Us,Pt,Gs,ln,xe,Ht,rt,zs,Vs,b,Js,Zs,Qs,Ih="{1}",er,Ah="{2}",tr,nr,ir,ar,Oh="{1}",lr,Lh="{2}",sr,rr,or,hr,Ch="{1}",cr,Kh="{2}",ur,dr,fr,pr,Dh="{1}",_r,jh="{2}",gr,xr,mr,br,Ph="{1}",$r,Hh="{2}",wr,vr,yr,Tr,Wh="{1}",Er,qh="{2}",kr,Rr,Fh="{1}",Sr,Xh="{2}",Mr,Nr,Br,Ir,Yh="{\\langle x_i, x_j\\rangle}",Ar,Or,Uh="{since }",Lr,Cr,Gh="{1}",Kr,zh="{2}",Dr,jr,Vh="{1}",Pr,Jh="{2}",Hr,Wr,qr,Fr,Zh="{n=0}",Xr,Yr,Qh="{\\infty}",Ur,Gr,ec="{\\langle x_i, x_j\\rangle^n}",zr,tc="{n!}",Vr,Jr,nc="{Taylor Series Expansion}",Zr,Qr,eo,to,ic="{n=0}",no,io,ac="{\\infty}",ao,lo,lc="{K_{poly(n)}(x_i, x_j) }",so,sc="{n!}",ro,oo,sn;return Fe=new Tn({props:{language:En,code:`def rand_pt_circle(rad_min, rad_max):
      angle = random.uniform(0, 2 * math.pi)
      radius = random.uniform(rad_min, rad_max)
      x = radius * math.cos(angle)
      y = radius * math.sin(angle)
      return (x, y)

      # Data points,
      #   X = listed 2D points of uniform random in circle of rad 0.6
      #   Y = listed 2D points of uniform random in annulus of rad 0.5 to 1
      X = [rand_pt_circle(0, 0.6) for i in range(100)]
      Y = [rand_pt_circle(0.5, 1) for i in range(100)]

      fX = [(x[0], x[1], x[0] ** 2 + x[1] ** 2) for x in X] # THE TRANSFORMATION

      # fit
      # svm.SVC().fit(X,Y) rather than X,Y we use fX,Y
      svm.SVC().fit(fX,Y)`}}),Ue=new Tn({props:{language:En,code:"svm.SVC(kernel='linear').fit(X,Y)"}}),ze=new Tn({props:{language:En,code:"svm.SVC(kernel='poly', degree=2).fit(X,Y)"}}),Je=new Tn({props:{language:En,code:"svm.SVC(kernel='rbf', gamma=1).fit(X,Y)"}}),{c(){a=s("h1"),l=t("Kernel Functions Mechanism"),_=N(),v=s("section"),p=s("h2"),c=t("Regression"),u=N(),o=s("p"),R=t(`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),L=s("br"),U=t(`
    $$ Y = w^T X $$ We do this simply by defining the loss function as the sum of
    squared errors and minimizing it with respect to $w$. We can write this as
    `),D=s("br"),ge=t(`
    $$ J(w) = \\min_w \\sum_`),le=t(he),De=t(`^n (y_i - w^T x_i)^2 $$ Solving this for $w$
    gives us `),Ee=s("br"),ft=t(`
    $$ w = (X^T X)^`),ke=t(pt),_t=t(" X^T Y $$"),tt=N(),ce=s("section"),je=s("h2"),se=t("Non Linearity"),nt=N(),q=s("p"),gt=t(`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),xt=s("br"),Re=t(`
    $$ Y = w^T \\phi(X) $$ We can then also write the weight matrix as `),mt=s("br"),d=t(`
    $$ w^* = (\\phi^T \\phi)^`),A=t(k),C=t(` \\phi^T Y $$ Let us introduce a regularization
    term $\\lambda$ such that the weight matrix is `),H=s("br"),Z=t(`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),Se=t(ue),V=t(` \\phi^T Y $$ The logic behind adding
    a regularization term is that we want to penalise the slope of the line. This
    is because we want to avoid overfitting. Adding bias results in a lower variance
    which makes the outputs less sensitive to the inputs. The parameter $\\lambda$
    is what controls the amount of bias we want to add
    `),re=s("br"),it=t(`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),Pe=N(),de=s("details"),be=s("summary"),Me=s("h2"),bt=t("Restructuring the Weight Matrix"),Ne=N(),G=s("div"),ee=s("b"),$t=t("Result:"),He=N(),S=s("br"),at=t(`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),K=t(W),Be=t(" \\phi^T Y $ → "),fe=s("br"),We=t(` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),x=t(lt),T=t(" Y $"),M=N(),h=s("p"),F=t("Let us now define the new loss function along with a regularization term "),ne=s("br"),wt=t(`
    $$ J(w) = \\min_w \\sum_`),Mn=t(Jt),Nn=t("^n (y_i - w^T \\phi(x_i))^2 + \\frac"),Bn=t(wo),In=t(vo),An=t(`
    ||w||^2 $$ We can now solve for $w$ and get `),On=s("br"),Ln=t(`
    $$ w^* = \\frac`),Cn=t(yo),Kn=t(To),Dn=t(" \\sum_"),jn=t(Eo),Pn=t(`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ For sake of simplicity let us define a variable $\\alpha$ such
    that `),Hn=s("br"),Wn=t(`
    $$ \\alpha = \\frac`),qn=t(ko),Fn=t(Ro),Xn=t(" \\sum_"),Yn=t(So),Un=t(`^n (y_i - w^T
    \\phi(x_i)) $$ We can now write the weight matrix as `),Gn=s("br"),zn=t(`
    $$ w^* = \\sum_`),Vn=t(Mo),Jn=t(`^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ Let us now
    substitute this into the loss function and get `),Zn=s("br"),Qn=t(`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),ei=t(No),ti=t(Bo),ni=t(`
    w^T w $$ expanding and simplifying this will give us `),ii=s("br"),ai=t(`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),li=t(Io),si=t(Ao),ri=t(` w^T w $$ We can see that $\\phi
    \\phi^T$ is a repeated term. Let us define this new matrix as $K$ such that $$
    K = \\phi \\phi^T = \\begin`),oi=t(Oo),hi=t(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),ci=t(Lo),ui=t(` $$ This matrix has two very
    important properties. First, it is symmetric and second, it is positive semi-definite.
    (This also means it is invertible which $\\phi^T \\phi$ MAY NOT). We can substitute
    all $\\phi \\phi^T$ with $K$ and also $K$ with $K^T$ and get `),di=s("br"),fi=t(`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),pi=t(Co),_i=t(Ko),gi=t(`
    \\alpha^T K \\alpha $$ Seeting the derivative of this with respect to $\\alpha$
    to zero and solving for $\\alpha$ gives us (along with $K = \\phi \\phi^T$)
    `),xi=s("br"),mi=t(`
    $$ \\alpha* = (K + \\frac`),bi=t(Do),$i=t(jo),wi=t(" I)^"),vi=t(Po),yi=t(` y $$ or $$ \\alpha* = (K
    + \\lambda' I)^`),Ti=t(Ho),Ei=t(` y $$ We have achieved in this section effectively converting
    one equation to another as follows `),ki=s("br"),Ri=t(`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),Si=t(Wo),Mi=t(" \\phi^T Y $$ into "),Ni=s("br"),Bi=t(`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),Ii=t(qo),Ai=t(` Y $$ By the looks of it we may not have
    done anything, but as we will see in the next section, this step will reduce
    the computation time by a lot.`),Zt=N(),$e=s("section"),vt=s("h2"),Oi=t("Mercer's Theorem"),Li=N(),z=s("p"),Ci=t(`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),Ki=s("br"),Di=t(`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),ji=s("br"),Pi=t(`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),Hi=s("br"),Wi=t(`
    $$ \\begin`),qi=t(Fo),Fi=t(` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),Xi=t(Xo),Yi=t(` $$ is positive semi-definite for any
    collection $`),Ui=t(Yo),Gi=t(`$
    `),zi=s("br"),Qt=N(),ie=s("section"),yt=s("h2"),Vi=t("The Kernel Trick"),Ji=N(),ae=s("p"),Zi=t(`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),Qi=t(Uo),ea=t(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),ta=t(Go),na=t(" = \\begin"),ia=t(zo),aa=t(`
    k(x_1, x_1) & k(x_1, x_2) & \\cdots & k(x_1, x_n) \\\\ k(x_2, x_1) & k(x_2, x_2)
    & \\cdots & k(x_2, x_n) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ k(x_n, x_1) &
    k(x_n, x_2) & \\cdots & k(x_n, x_n) \\end`),la=t(Vo),sa=t(" $$"),ra=N(),Ie=s("ul"),Tt=s("li"),oa=t("First: $K$ is symmetric"),ha=N(),Et=s("li"),ca=t(`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),ua=N(),kt=s("p"),da=t(`So as long as we know the Kernel (which we can either choose or learn), we
    can compute the Kernel matrix and use it to solve for $\\alpha$ and then
    compute $w^*$ efficiently`),en=N(),we=s("section"),Rt=s("h2"),fa=t("Working Example"),pa=N(),m=s("p"),_a=t("Consider the following mapping $$ \\phi: x \\rightarrow \\phi(x) = \\begin"),ga=t(Jo),xa=t(`
    x_1^2 \\\\ \\sqrt`),ma=t(Zo),ba=t(" x_1 x_2 \\\\ x_2^2 \\end"),$a=t(Qo),wa=t(` $$ Let us for sake of
    demonstration work out its kernel `),va=s("br"),ya=t(`
    $$ \\phi^T(x_m) \\phi(x_n) = \\begin`),Ta=t(eh),Ea=t(" x_"),ka=t(th),Ra=t("^2 & \\sqrt"),Sa=t(nh),Ma=t(" x_"),Na=t(ih),Ba=t(`
    x_`),Ia=t(ah),Aa=t(" & x_"),Oa=t(lh),La=t("^2 \\end"),Ca=t(sh),Ka=t(" \\begin"),Da=t(rh),ja=t(" x_"),Pa=t(oh),Ha=t(`^2
    \\\\ \\sqrt`),Wa=t(hh),qa=t(" x_"),Fa=t(ch),Xa=t(" x_"),Ya=t(uh),Ua=t(" \\\\ x_"),Ga=t(dh),za=t("^2 \\end"),Va=t(fh),Ja=t(`
    = x_`),Za=t(ph),Qa=t("^2 x_"),el=t(_h),tl=t("^2 + 2 x_"),nl=t(gh),il=t(" x_"),al=t(xh),ll=t(" x_"),sl=t(mh),rl=t(" x_"),ol=t(bh),hl=t(`
    + x_`),cl=t($h),ul=t("^2 x_"),dl=t(wh),fl=t("^2 $$ "),pl=s("br"),_l=t(`
    Clearly $$ \\phi^T(x_m) \\phi(x_n) = (x_`),gl=t(vh),xl=t(`
    x_`),ml=t(yh),bl=t(" + x_"),$l=t(Th),wl=t(" x_"),vl=t(Eh),yl=t(`)^2 = (x_m^T x_n)^2 = k(x_m, x_n) $$
    This is an example of a Kernel called the `),St=s("b"),Tl=t("Polynomial Kernel"),El=t(` which is
    defined as $$ k(x, y) = (x^T y + r)^d $$ making in our case the parameters
    $d = 2$ and $r = 0$ `),kl=s("br"),tn=N(),ve=s("section"),Mt=s("h2"),Rl=t("Making Predictions"),Sl=N(),X=s("p"),Ml=t(`We can now make predictions using the Kernel trick. We can use the following
    equation to make predictions with $ y = w^T \\phi(x) $ But as we have seen
    above we can convert the RHS from
    `),Nl=s("br"),Bl=t("$$ w^T \\phi(x) = y(\\phi \\phi^T + \\lambda' I)^"),Il=t(kh),Al=t(` \\phi^T \\phi(x) $$
    to `),Ol=s("br"),Ll=t(" $$ w^T \\phi(x) = y(K + \\lambda' I)^"),Cl=t(Rh),Kl=t(` k_x $$ where $k_x$ is
    `),Dl=s("br"),jl=t(`
    $$ k_x = \\phi^T \\phi(x) = \\begin`),Pl=t(Sh),Hl=t(` \\phi(x_1)^T \\phi(x) \\\\ \\phi(x_2)^T
    \\phi(x) \\\\ \\vdots \\\\ \\phi(x_n)^T \\phi(x) \\end`),Wl=t(Mh),ql=t(` $$ And our result
    is completely independent of the mapping $\\phi$ and only depends on the Kernel
    $k$ and the data $X$ and $Y$ `),Fl=s("br"),nn=N(),I=s("section"),Nt=s("h2"),Xl=t("Applying the Kernel Trick to the SVM"),Yl=N(),qe=s("p"),Ul=t(`As we know an SVM is a machine that can classify data by finding a
    hyperplane that separates the data into two classes. The SVM is a linear
    classifier, which means that it can only classify data that is linearly
    separable. But most data in the real world is not linear and so we need to
    use a non-linear classifier. The work around for that is that we first apply
    a non linear transformation to the data and then use a linear classifier to
    classify the transformed data. `),Gl=s("br"),zl=t(`
    Let us look at how we do that for a simple case`),Vl=N(),Ft(Fe.$$.fragment),Jl=N(),Ae=s("img"),Zl=N(),Xe=s("p"),Ql=t(`While in an ideal world we should be able to stop here and call it a day, in
    reality we need to do a bit more work. The problem here is that choosing the
    the function fX here is a difficult task, and in interest of laziness we
    want this work cut out for us. The second problem is that in order to be
    able to make a non standard boundary we need to make a more complex non
    linear transform which in turn increases the computational requirements. The
    kernel trick will now be useful to us. The idea here is that the SVM itself
    does not need to know what each point is mapped to under this non linear
    transform, i.e $x_i \\rightarrow f(x_i) \\forall i$. The only thing it
    actually needs to know is how each point compares to each other data point
    i.e $f(x_i) vs f(x_j)$. This is still ultimately finding a glorified version
    of the distance between each point. Mathematically this is equivalent to
    doing $f(x_i)^T f(x_j)$ and this is what we define as the Kernel function
    `),es=s("br"),ts=t(" $$k(x_i, x_j) := f(x_i)^T f(x_j) $$"),ns=N(),Bt=s("h3"),is=t("Examples"),as=N(),It=s("h4"),ls=t("Linear Kernel"),ss=N(),Ye=s("p"),rs=t(`Let us say the transform we intend to make is $f(x) = x$ i.e the identity
    transform. Then the kernel function is
    `),os=s("br"),hs=t(" $$ k(x_i, x_j) = x_i^T x_j $$ With the call"),cs=N(),Ft(Ue.$$.fragment),us=N(),At=s("p"),ds=t(`The linear kernel gives us a flat decision boundary as expected, it can only
    make a straight line through the data without any transforms.`),fs=N(),Ot=s("h4"),ps=t("Polynomial Kernel"),_s=N(),Ge=s("p"),gs=t(`Let us say the non linear transform we intend to make is $f(x) = (x_1, x_2,
    x_1x_2, x_1^2 ,x_2^2)$ i.e the polynomial transform. Then the kernel
    function is
    `),xs=s("br"),ms=t(" $$k(x_i, x_j) = (1 + x_i^T x_j)^2 $$ With the call"),bs=N(),Ft(ze.$$.fragment),$s=N(),Lt=s("p"),ws=t(`The polynomial kernel gives us a curved decision boundary as expected, this
    is equivalent to first making an ideal transform before hand of the type
    $c_0 + c_1x_1 + c_2x_2 + c_3x_1x_2 + c_4x_1^2 + c_5x_2^2$ for some values
    $c_i$ and then using the linear kernel on the transformed data. The Kernel
    function here lets us find the relations between the values as if we had
    done the transform before hand without actually doing the transform.`),vs=N(),Ct=s("h4"),ys=t("RBF Kernel"),Ts=N(),Ve=s("p"),Es=t(`What if we were to have a function for whom the transform were extremely
    difficult or impossible to calculate even in an approximate case, one such
    example is the Radial Basis Function (RBF) kernel. The RBF kernel is defined
    as
    `),ks=s("br"),Rs=t(`
    $$ k(x_i, x_j) = \\exp(-\\gamma ||x_i - x_j||^2) $$ With the call`),Ss=N(),Ft(Je.$$.fragment),Ms=N(),pe=s("p"),Ns=t(`It turns out that the transform needed before hand for an RBF is infinite
    dimensional, i.e it looks like
    `),Bs=s("br"),Is=t(`
    $$ f(x) = (\\text`),As=t(Bh),Os=t(`) $$ Notice how being basically
    impossible to calculate, we can still use the RBF kernel to find the
    relations between the points.
    `),Kt=s("b"),Ls=t("Note:"),Cs=t(` Gamma is a hyper parameter that controls the width of the RBF kernel.
    The smaller the gamma the wider the Kernel is therefore making it closer to a
    linear kernel. The larger the gamma the narrower the Kernel is therefore making
    it closer to a polynomial kernel of arbitrary degree. (See Proof in last section)`),an=N(),ye=s("section"),Dt=s("h2"),Ks=t("Comparison with SINDy"),Ds=N(),Oe=s("div"),js=t(`This method is different from SINDy because SINDy usually aims to find the
    exact equations of the least number of degrees of freedom in any given
    system. We don't aim to do that. SINDy will not be able to convert a text
    description to an image. We want an arbitrary classifier that can be applied
    to any data set. SINDy would be much more suitable for a physical system
    where physics modelling is needed, ML is not needed for that and does not
    aim to solve those problems in the first place.
    `),Ps=s("br"),Hs=t(`
    ML however can be used in places where even the Non Linear systems don't have
    a closed form solution and we want to predict the state at some far time t beyond
    the chaos boundary. The results, models or even the architectures of the ML models
    used here are however not well studied and is an active area of research.
    `),Te=s("ul"),jt=s("li"),Ws=t(`It is possible however that even for a given SINDy model, the ML model
        has lower computational requirements and thus is better used despite not
        being as accurate. A real world example was seen in Tesla Motors Inc
        where when calculating the current level of a battery it proved to be
        simpler to just use an ML model on the raw voltage than actually add
        physical resistors and model the complex interactions of all different
        sections, heat profiles and retentivities of the battery.`),qs=N(),Ze=s("li"),Fs=t(`As mentioned above, we have seen in Kadierdan et al CDC 2019, that SINDy
        can be very accurately used to model, and therefore balance an inverted
        vertical double pendulum. It however also turns out that SINDy is good
        at small specific classes of tasks and should be used for as such, it
        generalists very poorly as was seen in the modelling of Nuclear Fusion
        where fusion control is done much better with DeepMind's new model `),st=s("a"),Xs=t(":Deepmind"),Ys=t(`, we see that they're able to not only model and predict the gas plume
        behaviour but also control it. This is a much more complex task than the
        simple double pendulum and so it is not surprising that SINDy fails
        here. This is also a good example of how ML can be used to solve
        problems that are not solvable by SINDy.`),Us=N(),Pt=s("li"),Gs=t(`SINDy aims to find a simple model such that it is EXPLAINABLE. The
        latter being the more important part, in ML the model has no constraint
        on being explainable and is very happy being a black box in interest of
        which it has no constraints on what forms it can take, therefore
        structurally it can be much more complex than a SINDy model. This is a
        good thing because it allows us to model much more complex systems, but
        it is also a bad thing because it makes it harder to explain the model
        and thus harder to trust it. In interest of this ability to Generalise,
        in 2011 NASA switched to ML for aircraft engine premptive fault
        detection and in 2015 for drought prediction in the ECOSTRESS mission,
        both areas which were traditionally left to modelling.`),ln=N(),xe=s("details"),Ht=s("summary"),rt=s("h2"),zs=t("Proof of RBF Kernel's Dimensionality"),Vs=N(),b=s("div"),Js=t("$ k(x_i, x_j) $ "),Zs=s("br"),Qs=t(`
    $ \\quad = \\exp(-\\frac`),er=t(Ih),tr=t(Ah),nr=t(` ||x_i - x_j||^2)$
    `),ir=s("br"),ar=t(`
    $ \\quad = \\exp(-\\frac`),lr=t(Oh),sr=t(Lh),rr=t(`
    \\langle x_i - x_j\\rangle^T \\langle x_i - x_j\\rangle) $ `),or=s("br"),hr=t(`
    $ \\quad = \\exp(-\\frac`),cr=t(Ch),ur=t(Kh),dr=t(`
    (\\langle x_i, x_i - x_j\\rangle - \\langle x_j, x_i - x_j\\rangle)) $ `),fr=s("br"),pr=t(`
    $ \\quad = \\exp(-\\frac`),_r=t(Dh),gr=t(jh),xr=t(`
    (\\langle x_i, x_i\\rangle - \\langle x_i, x_j\\rangle - \\langle x_j, x_i\\rangle
    + \\langle x_j, x_j\\rangle)) $ `),mr=s("br"),br=t(`
    $ \\quad = \\exp(-\\frac`),$r=t(Ph),wr=t(Hh),vr=t(` (||x_i||^2 - 2\\langle x_i, x_j\\rangle + ||x_j||^2))
    $ `),yr=s("br"),Tr=t(`
    $ \\quad = \\exp[-\\frac`),Er=t(Wh),kr=t(qh),Rr=t(`
    ||x_i||^2 - \\frac`),Sr=t(Fh),Mr=t(Xh),Nr=t(" ||x_j||^2] \\exp(\\langle x_i, x_j\\rangle) $"),Br=s("br"),Ir=t(`
    $ \\quad = C e^`),Ar=t(Yh),Or=t(`
    \\quad \\quad \\text`),Lr=t(Uh),Cr=t(" C = \\exp(-\\frac"),Kr=t(Gh),Dr=t(zh),jr=t(" ||x_i||^2 - \\frac"),Pr=t(Vh),Hr=t(Jh),Wr=t(`
    ||x_j||^2) $ `),qr=s("br"),Fr=t(" $ \\quad = C \\sum_"),Xr=t(Zh),Yr=t("^"),Ur=t(Qh),Gr=t(" \\frac"),zr=t(ec),Vr=t(tc),Jr=t(`
    \\quad \\quad \\text`),Zr=t(nc),Qr=t(" $ "),eo=s("br"),to=t(`
    $ \\quad = C \\sum_`),no=t(ic),io=t("^"),ao=t(ac),lo=t(`
    \\frac`),so=t(lc),ro=t(sc),oo=t("$"),this.h()},l(g){a=r(g,"H1",{class:!0});var j=E(a);l=n(j,"Kernel Functions Mechanism"),j.forEach(f),_=B(g),v=r(g,"SECTION",{class:!0});var rn=E(v);p=r(rn,"H2",{});var rc=E(p);c=n(rc,"Regression"),rc.forEach(f),u=B(rn),o=r(rn,"P",{});var oe=E(o);R=n(oe,`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),L=r(oe,"BR",{}),U=n(oe,`
    $$ Y = w^T X $$ We do this simply by defining the loss function as the sum of
    squared errors and minimizing it with respect to $w$. We can write this as
    `),D=r(oe,"BR",{}),ge=n(oe,`
    $$ J(w) = \\min_w \\sum_`),le=n(oe,he),De=n(oe,`^n (y_i - w^T x_i)^2 $$ Solving this for $w$
    gives us `),Ee=r(oe,"BR",{}),ft=n(oe,`
    $$ w = (X^T X)^`),ke=n(oe,pt),_t=n(oe," X^T Y $$"),oe.forEach(f),rn.forEach(f),tt=B(g),ce=r(g,"SECTION",{class:!0});var on=E(ce);je=r(on,"H2",{});var oc=E(je);se=n(oc,"Non Linearity"),oc.forEach(f),nt=B(on),q=r(on,"P",{});var te=E(q);gt=n(te,`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),xt=r(te,"BR",{}),Re=n(te,`
    $$ Y = w^T \\phi(X) $$ We can then also write the weight matrix as `),mt=r(te,"BR",{}),d=n(te,`
    $$ w^* = (\\phi^T \\phi)^`),A=n(te,k),C=n(te,` \\phi^T Y $$ Let us introduce a regularization
    term $\\lambda$ such that the weight matrix is `),H=r(te,"BR",{}),Z=n(te,`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),Se=n(te,ue),V=n(te,` \\phi^T Y $$ The logic behind adding
    a regularization term is that we want to penalise the slope of the line. This
    is because we want to avoid overfitting. Adding bias results in a lower variance
    which makes the outputs less sensitive to the inputs. The parameter $\\lambda$
    is what controls the amount of bias we want to add
    `),re=r(te,"BR",{}),it=n(te,`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),te.forEach(f),on.forEach(f),Pe=B(g),de=r(g,"DETAILS",{class:!0});var hn=E(de);be=r(hn,"SUMMARY",{});var cn=E(be);Me=r(cn,"H2",{class:!0});var hc=E(Me);bt=n(hc,"Restructuring the Weight Matrix"),hc.forEach(f),Ne=B(cn),G=r(cn,"DIV",{class:!0});var _e=E(G);ee=r(_e,"B",{});var cc=E(ee);$t=n(cc,"Result:"),cc.forEach(f),He=B(_e),S=r(_e,"BR",{}),at=n(_e,`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),K=n(_e,W),Be=n(_e," \\phi^T Y $ → "),fe=r(_e,"BR",{}),We=n(_e,` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),x=n(_e,lt),T=n(_e," Y $"),_e.forEach(f),cn.forEach(f),M=B(hn),h=r(hn,"P",{});var y=E(h);F=n(y,"Let us now define the new loss function along with a regularization term "),ne=r(y,"BR",{}),wt=n(y,`
    $$ J(w) = \\min_w \\sum_`),Mn=n(y,Jt),Nn=n(y,"^n (y_i - w^T \\phi(x_i))^2 + \\frac"),Bn=n(y,wo),In=n(y,vo),An=n(y,`
    ||w||^2 $$ We can now solve for $w$ and get `),On=r(y,"BR",{}),Ln=n(y,`
    $$ w^* = \\frac`),Cn=n(y,yo),Kn=n(y,To),Dn=n(y," \\sum_"),jn=n(y,Eo),Pn=n(y,`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ For sake of simplicity let us define a variable $\\alpha$ such
    that `),Hn=r(y,"BR",{}),Wn=n(y,`
    $$ \\alpha = \\frac`),qn=n(y,ko),Fn=n(y,Ro),Xn=n(y," \\sum_"),Yn=n(y,So),Un=n(y,`^n (y_i - w^T
    \\phi(x_i)) $$ We can now write the weight matrix as `),Gn=r(y,"BR",{}),zn=n(y,`
    $$ w^* = \\sum_`),Vn=n(y,Mo),Jn=n(y,`^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ Let us now
    substitute this into the loss function and get `),Zn=r(y,"BR",{}),Qn=n(y,`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),ei=n(y,No),ti=n(y,Bo),ni=n(y,`
    w^T w $$ expanding and simplifying this will give us `),ii=r(y,"BR",{}),ai=n(y,`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),li=n(y,Io),si=n(y,Ao),ri=n(y,` w^T w $$ We can see that $\\phi
    \\phi^T$ is a repeated term. Let us define this new matrix as $K$ such that $$
    K = \\phi \\phi^T = \\begin`),oi=n(y,Oo),hi=n(y,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),ci=n(y,Lo),ui=n(y,` $$ This matrix has two very
    important properties. First, it is symmetric and second, it is positive semi-definite.
    (This also means it is invertible which $\\phi^T \\phi$ MAY NOT). We can substitute
    all $\\phi \\phi^T$ with $K$ and also $K$ with $K^T$ and get `),di=r(y,"BR",{}),fi=n(y,`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),pi=n(y,Co),_i=n(y,Ko),gi=n(y,`
    \\alpha^T K \\alpha $$ Seeting the derivative of this with respect to $\\alpha$
    to zero and solving for $\\alpha$ gives us (along with $K = \\phi \\phi^T$)
    `),xi=r(y,"BR",{}),mi=n(y,`
    $$ \\alpha* = (K + \\frac`),bi=n(y,Do),$i=n(y,jo),wi=n(y," I)^"),vi=n(y,Po),yi=n(y,` y $$ or $$ \\alpha* = (K
    + \\lambda' I)^`),Ti=n(y,Ho),Ei=n(y,` y $$ We have achieved in this section effectively converting
    one equation to another as follows `),ki=r(y,"BR",{}),Ri=n(y,`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),Si=n(y,Wo),Mi=n(y," \\phi^T Y $$ into "),Ni=r(y,"BR",{}),Bi=n(y,`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),Ii=n(y,qo),Ai=n(y,` Y $$ By the looks of it we may not have
    done anything, but as we will see in the next section, this step will reduce
    the computation time by a lot.`),y.forEach(f),hn.forEach(f),Zt=B(g),$e=r(g,"SECTION",{class:!0});var un=E($e);vt=r(un,"H2",{});var uc=E(vt);Oi=n(uc,"Mercer's Theorem"),uc.forEach(f),Li=B(un),z=r(un,"P",{});var Q=E(z);Ci=n(Q,`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),Ki=r(Q,"BR",{}),Di=n(Q,`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),ji=r(Q,"BR",{}),Pi=n(Q,`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),Hi=r(Q,"BR",{}),Wi=n(Q,`
    $$ \\begin`),qi=n(Q,Fo),Fi=n(Q,` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),Xi=n(Q,Xo),Yi=n(Q,` $$ is positive semi-definite for any
    collection $`),Ui=n(Q,Yo),Gi=n(Q,`$
    `),zi=r(Q,"BR",{}),Q.forEach(f),un.forEach(f),Qt=B(g),ie=r(g,"SECTION",{class:!0});var Le=E(ie);yt=r(Le,"H2",{});var dc=E(yt);Vi=n(dc,"The Kernel Trick"),dc.forEach(f),Ji=B(Le),ae=r(Le,"P",{});var me=E(ae);Zi=n(me,`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),Qi=n(me,Uo),ea=n(me,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),ta=n(me,Go),na=n(me," = \\begin"),ia=n(me,zo),aa=n(me,`
    k(x_1, x_1) & k(x_1, x_2) & \\cdots & k(x_1, x_n) \\\\ k(x_2, x_1) & k(x_2, x_2)
    & \\cdots & k(x_2, x_n) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ k(x_n, x_1) &
    k(x_n, x_2) & \\cdots & k(x_n, x_n) \\end`),la=n(me,Vo),sa=n(me," $$"),me.forEach(f),ra=B(Le),Ie=r(Le,"UL",{class:!0});var dn=E(Ie);Tt=r(dn,"LI",{});var fc=E(Tt);oa=n(fc,"First: $K$ is symmetric"),fc.forEach(f),ha=B(dn),Et=r(dn,"LI",{});var pc=E(Et);ca=n(pc,`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),pc.forEach(f),dn.forEach(f),ua=B(Le),kt=r(Le,"P",{});var _c=E(kt);da=n(_c,`So as long as we know the Kernel (which we can either choose or learn), we
    can compute the Kernel matrix and use it to solve for $\\alpha$ and then
    compute $w^*$ efficiently`),_c.forEach(f),Le.forEach(f),en=B(g),we=r(g,"SECTION",{class:!0});var fn=E(we);Rt=r(fn,"H2",{});var gc=E(Rt);fa=n(gc,"Working Example"),gc.forEach(f),pa=B(fn),m=r(fn,"P",{});var $=E(m);_a=n($,"Consider the following mapping $$ \\phi: x \\rightarrow \\phi(x) = \\begin"),ga=n($,Jo),xa=n($,`
    x_1^2 \\\\ \\sqrt`),ma=n($,Zo),ba=n($," x_1 x_2 \\\\ x_2^2 \\end"),$a=n($,Qo),wa=n($,` $$ Let us for sake of
    demonstration work out its kernel `),va=r($,"BR",{}),ya=n($,`
    $$ \\phi^T(x_m) \\phi(x_n) = \\begin`),Ta=n($,eh),Ea=n($," x_"),ka=n($,th),Ra=n($,"^2 & \\sqrt"),Sa=n($,nh),Ma=n($," x_"),Na=n($,ih),Ba=n($,`
    x_`),Ia=n($,ah),Aa=n($," & x_"),Oa=n($,lh),La=n($,"^2 \\end"),Ca=n($,sh),Ka=n($," \\begin"),Da=n($,rh),ja=n($," x_"),Pa=n($,oh),Ha=n($,`^2
    \\\\ \\sqrt`),Wa=n($,hh),qa=n($," x_"),Fa=n($,ch),Xa=n($," x_"),Ya=n($,uh),Ua=n($," \\\\ x_"),Ga=n($,dh),za=n($,"^2 \\end"),Va=n($,fh),Ja=n($,`
    = x_`),Za=n($,ph),Qa=n($,"^2 x_"),el=n($,_h),tl=n($,"^2 + 2 x_"),nl=n($,gh),il=n($," x_"),al=n($,xh),ll=n($," x_"),sl=n($,mh),rl=n($," x_"),ol=n($,bh),hl=n($,`
    + x_`),cl=n($,$h),ul=n($,"^2 x_"),dl=n($,wh),fl=n($,"^2 $$ "),pl=r($,"BR",{}),_l=n($,`
    Clearly $$ \\phi^T(x_m) \\phi(x_n) = (x_`),gl=n($,vh),xl=n($,`
    x_`),ml=n($,yh),bl=n($," + x_"),$l=n($,Th),wl=n($," x_"),vl=n($,Eh),yl=n($,`)^2 = (x_m^T x_n)^2 = k(x_m, x_n) $$
    This is an example of a Kernel called the `),St=r($,"B",{});var xc=E(St);Tl=n(xc,"Polynomial Kernel"),xc.forEach(f),El=n($,` which is
    defined as $$ k(x, y) = (x^T y + r)^d $$ making in our case the parameters
    $d = 2$ and $r = 0$ `),kl=r($,"BR",{}),$.forEach(f),fn.forEach(f),tn=B(g),ve=r(g,"SECTION",{class:!0});var pn=E(ve);Mt=r(pn,"H2",{});var mc=E(Mt);Rl=n(mc,"Making Predictions"),mc.forEach(f),Sl=B(pn),X=r(pn,"P",{});var J=E(X);Ml=n(J,`We can now make predictions using the Kernel trick. We can use the following
    equation to make predictions with $ y = w^T \\phi(x) $ But as we have seen
    above we can convert the RHS from
    `),Nl=r(J,"BR",{}),Bl=n(J,"$$ w^T \\phi(x) = y(\\phi \\phi^T + \\lambda' I)^"),Il=n(J,kh),Al=n(J,` \\phi^T \\phi(x) $$
    to `),Ol=r(J,"BR",{}),Ll=n(J," $$ w^T \\phi(x) = y(K + \\lambda' I)^"),Cl=n(J,Rh),Kl=n(J,` k_x $$ where $k_x$ is
    `),Dl=r(J,"BR",{}),jl=n(J,`
    $$ k_x = \\phi^T \\phi(x) = \\begin`),Pl=n(J,Sh),Hl=n(J,` \\phi(x_1)^T \\phi(x) \\\\ \\phi(x_2)^T
    \\phi(x) \\\\ \\vdots \\\\ \\phi(x_n)^T \\phi(x) \\end`),Wl=n(J,Mh),ql=n(J,` $$ And our result
    is completely independent of the mapping $\\phi$ and only depends on the Kernel
    $k$ and the data $X$ and $Y$ `),Fl=r(J,"BR",{}),J.forEach(f),pn.forEach(f),nn=B(g),I=r(g,"SECTION",{class:!0});var O=E(I);Nt=r(O,"H2",{});var bc=E(Nt);Xl=n(bc,"Applying the Kernel Trick to the SVM"),bc.forEach(f),Yl=B(O),qe=r(O,"P",{});var _n=E(qe);Ul=n(_n,`As we know an SVM is a machine that can classify data by finding a
    hyperplane that separates the data into two classes. The SVM is a linear
    classifier, which means that it can only classify data that is linearly
    separable. But most data in the real world is not linear and so we need to
    use a non-linear classifier. The work around for that is that we first apply
    a non linear transformation to the data and then use a linear classifier to
    classify the transformed data. `),Gl=r(_n,"BR",{}),zl=n(_n,`
    Let us look at how we do that for a simple case`),_n.forEach(f),Vl=B(O),Xt(Fe.$$.fragment,O),Jl=B(O),Ae=r(O,"IMG",{class:!0,src:!0,height:!0,width:!0}),Zl=B(O),Xe=r(O,"P",{});var gn=E(Xe);Ql=n(gn,`While in an ideal world we should be able to stop here and call it a day, in
    reality we need to do a bit more work. The problem here is that choosing the
    the function fX here is a difficult task, and in interest of laziness we
    want this work cut out for us. The second problem is that in order to be
    able to make a non standard boundary we need to make a more complex non
    linear transform which in turn increases the computational requirements. The
    kernel trick will now be useful to us. The idea here is that the SVM itself
    does not need to know what each point is mapped to under this non linear
    transform, i.e $x_i \\rightarrow f(x_i) \\forall i$. The only thing it
    actually needs to know is how each point compares to each other data point
    i.e $f(x_i) vs f(x_j)$. This is still ultimately finding a glorified version
    of the distance between each point. Mathematically this is equivalent to
    doing $f(x_i)^T f(x_j)$ and this is what we define as the Kernel function
    `),es=r(gn,"BR",{}),ts=n(gn," $$k(x_i, x_j) := f(x_i)^T f(x_j) $$"),gn.forEach(f),ns=B(O),Bt=r(O,"H3",{});var $c=E(Bt);is=n($c,"Examples"),$c.forEach(f),as=B(O),It=r(O,"H4",{});var wc=E(It);ls=n(wc,"Linear Kernel"),wc.forEach(f),ss=B(O),Ye=r(O,"P",{});var xn=E(Ye);rs=n(xn,`Let us say the transform we intend to make is $f(x) = x$ i.e the identity
    transform. Then the kernel function is
    `),os=r(xn,"BR",{}),hs=n(xn," $$ k(x_i, x_j) = x_i^T x_j $$ With the call"),xn.forEach(f),cs=B(O),Xt(Ue.$$.fragment,O),us=B(O),At=r(O,"P",{});var vc=E(At);ds=n(vc,`The linear kernel gives us a flat decision boundary as expected, it can only
    make a straight line through the data without any transforms.`),vc.forEach(f),fs=B(O),Ot=r(O,"H4",{});var yc=E(Ot);ps=n(yc,"Polynomial Kernel"),yc.forEach(f),_s=B(O),Ge=r(O,"P",{});var mn=E(Ge);gs=n(mn,`Let us say the non linear transform we intend to make is $f(x) = (x_1, x_2,
    x_1x_2, x_1^2 ,x_2^2)$ i.e the polynomial transform. Then the kernel
    function is
    `),xs=r(mn,"BR",{}),ms=n(mn," $$k(x_i, x_j) = (1 + x_i^T x_j)^2 $$ With the call"),mn.forEach(f),bs=B(O),Xt(ze.$$.fragment,O),$s=B(O),Lt=r(O,"P",{});var Tc=E(Lt);ws=n(Tc,`The polynomial kernel gives us a curved decision boundary as expected, this
    is equivalent to first making an ideal transform before hand of the type
    $c_0 + c_1x_1 + c_2x_2 + c_3x_1x_2 + c_4x_1^2 + c_5x_2^2$ for some values
    $c_i$ and then using the linear kernel on the transformed data. The Kernel
    function here lets us find the relations between the values as if we had
    done the transform before hand without actually doing the transform.`),Tc.forEach(f),vs=B(O),Ct=r(O,"H4",{});var Ec=E(Ct);ys=n(Ec,"RBF Kernel"),Ec.forEach(f),Ts=B(O),Ve=r(O,"P",{});var bn=E(Ve);Es=n(bn,`What if we were to have a function for whom the transform were extremely
    difficult or impossible to calculate even in an approximate case, one such
    example is the Radial Basis Function (RBF) kernel. The RBF kernel is defined
    as
    `),ks=r(bn,"BR",{}),Rs=n(bn,`
    $$ k(x_i, x_j) = \\exp(-\\gamma ||x_i - x_j||^2) $$ With the call`),bn.forEach(f),Ss=B(O),Xt(Je.$$.fragment,O),Ms=B(O),pe=r(O,"P",{});var Ce=E(pe);Ns=n(Ce,`It turns out that the transform needed before hand for an RBF is infinite
    dimensional, i.e it looks like
    `),Bs=r(Ce,"BR",{}),Is=n(Ce,`
    $$ f(x) = (\\text`),As=n(Ce,Bh),Os=n(Ce,`) $$ Notice how being basically
    impossible to calculate, we can still use the RBF kernel to find the
    relations between the points.
    `),Kt=r(Ce,"B",{});var kc=E(Kt);Ls=n(kc,"Note:"),kc.forEach(f),Cs=n(Ce,` Gamma is a hyper parameter that controls the width of the RBF kernel.
    The smaller the gamma the wider the Kernel is therefore making it closer to a
    linear kernel. The larger the gamma the narrower the Kernel is therefore making
    it closer to a polynomial kernel of arbitrary degree. (See Proof in last section)`),Ce.forEach(f),O.forEach(f),an=B(g),ye=r(g,"SECTION",{class:!0});var $n=E(ye);Dt=r($n,"H2",{});var Rc=E(Dt);Ks=n(Rc,"Comparison with SINDy"),Rc.forEach(f),Ds=B($n),Oe=r($n,"DIV",{});var Wt=E(Oe);js=n(Wt,`This method is different from SINDy because SINDy usually aims to find the
    exact equations of the least number of degrees of freedom in any given
    system. We don't aim to do that. SINDy will not be able to convert a text
    description to an image. We want an arbitrary classifier that can be applied
    to any data set. SINDy would be much more suitable for a physical system
    where physics modelling is needed, ML is not needed for that and does not
    aim to solve those problems in the first place.
    `),Ps=r(Wt,"BR",{}),Hs=n(Wt,`
    ML however can be used in places where even the Non Linear systems don't have
    a closed form solution and we want to predict the state at some far time t beyond
    the chaos boundary. The results, models or even the architectures of the ML models
    used here are however not well studied and is an active area of research.
    `),Te=r(Wt,"UL",{});var ot=E(Te);jt=r(ot,"LI",{});var Sc=E(jt);Ws=n(Sc,`It is possible however that even for a given SINDy model, the ML model
        has lower computational requirements and thus is better used despite not
        being as accurate. A real world example was seen in Tesla Motors Inc
        where when calculating the current level of a battery it proved to be
        simpler to just use an ML model on the raw voltage than actually add
        physical resistors and model the complex interactions of all different
        sections, heat profiles and retentivities of the battery.`),Sc.forEach(f),qs=B(ot),Ze=r(ot,"LI",{});var wn=E(Ze);Fs=n(wn,`As mentioned above, we have seen in Kadierdan et al CDC 2019, that SINDy
        can be very accurately used to model, and therefore balance an inverted
        vertical double pendulum. It however also turns out that SINDy is good
        at small specific classes of tasks and should be used for as such, it
        generalists very poorly as was seen in the modelling of Nuclear Fusion
        where fusion control is done much better with DeepMind's new model `),st=r(wn,"A",{href:!0});var Mc=E(st);Xs=n(Mc,":Deepmind"),Mc.forEach(f),Ys=n(wn,`, we see that they're able to not only model and predict the gas plume
        behaviour but also control it. This is a much more complex task than the
        simple double pendulum and so it is not surprising that SINDy fails
        here. This is also a good example of how ML can be used to solve
        problems that are not solvable by SINDy.`),wn.forEach(f),Us=B(ot),Pt=r(ot,"LI",{});var Nc=E(Pt);Gs=n(Nc,`SINDy aims to find a simple model such that it is EXPLAINABLE. The
        latter being the more important part, in ML the model has no constraint
        on being explainable and is very happy being a black box in interest of
        which it has no constraints on what forms it can take, therefore
        structurally it can be much more complex than a SINDy model. This is a
        good thing because it allows us to model much more complex systems, but
        it is also a bad thing because it makes it harder to explain the model
        and thus harder to trust it. In interest of this ability to Generalise,
        in 2011 NASA switched to ML for aircraft engine premptive fault
        detection and in 2015 for drought prediction in the ECOSTRESS mission,
        both areas which were traditionally left to modelling.`),Nc.forEach(f),ot.forEach(f),Wt.forEach(f),$n.forEach(f),ln=B(g),xe=r(g,"DETAILS",{class:!0});var vn=E(xe);Ht=r(vn,"SUMMARY",{});var Bc=E(Ht);rt=r(Bc,"H2",{class:!0});var Ic=E(rt);zs=n(Ic,"Proof of RBF Kernel's Dimensionality"),Ic.forEach(f),Bc.forEach(f),Vs=B(vn),b=r(vn,"DIV",{});var w=E(b);Js=n(w,"$ k(x_i, x_j) $ "),Zs=r(w,"BR",{}),Qs=n(w,`
    $ \\quad = \\exp(-\\frac`),er=n(w,Ih),tr=n(w,Ah),nr=n(w,` ||x_i - x_j||^2)$
    `),ir=r(w,"BR",{}),ar=n(w,`
    $ \\quad = \\exp(-\\frac`),lr=n(w,Oh),sr=n(w,Lh),rr=n(w,`
    \\langle x_i - x_j\\rangle^T \\langle x_i - x_j\\rangle) $ `),or=r(w,"BR",{}),hr=n(w,`
    $ \\quad = \\exp(-\\frac`),cr=n(w,Ch),ur=n(w,Kh),dr=n(w,`
    (\\langle x_i, x_i - x_j\\rangle - \\langle x_j, x_i - x_j\\rangle)) $ `),fr=r(w,"BR",{}),pr=n(w,`
    $ \\quad = \\exp(-\\frac`),_r=n(w,Dh),gr=n(w,jh),xr=n(w,`
    (\\langle x_i, x_i\\rangle - \\langle x_i, x_j\\rangle - \\langle x_j, x_i\\rangle
    + \\langle x_j, x_j\\rangle)) $ `),mr=r(w,"BR",{}),br=n(w,`
    $ \\quad = \\exp(-\\frac`),$r=n(w,Ph),wr=n(w,Hh),vr=n(w,` (||x_i||^2 - 2\\langle x_i, x_j\\rangle + ||x_j||^2))
    $ `),yr=r(w,"BR",{}),Tr=n(w,`
    $ \\quad = \\exp[-\\frac`),Er=n(w,Wh),kr=n(w,qh),Rr=n(w,`
    ||x_i||^2 - \\frac`),Sr=n(w,Fh),Mr=n(w,Xh),Nr=n(w," ||x_j||^2] \\exp(\\langle x_i, x_j\\rangle) $"),Br=r(w,"BR",{}),Ir=n(w,`
    $ \\quad = C e^`),Ar=n(w,Yh),Or=n(w,`
    \\quad \\quad \\text`),Lr=n(w,Uh),Cr=n(w," C = \\exp(-\\frac"),Kr=n(w,Gh),Dr=n(w,zh),jr=n(w," ||x_i||^2 - \\frac"),Pr=n(w,Vh),Hr=n(w,Jh),Wr=n(w,`
    ||x_j||^2) $ `),qr=r(w,"BR",{}),Fr=n(w," $ \\quad = C \\sum_"),Xr=n(w,Zh),Yr=n(w,"^"),Ur=n(w,Qh),Gr=n(w," \\frac"),zr=n(w,ec),Vr=n(w,tc),Jr=n(w,`
    \\quad \\quad \\text`),Zr=n(w,nc),Qr=n(w," $ "),eo=r(w,"BR",{}),to=n(w,`
    $ \\quad = C \\sum_`),no=n(w,ic),io=n(w,"^"),ao=n(w,ac),lo=n(w,`
    \\frac`),so=n(w,lc),ro=n(w,sc),oo=n(w,"$"),w.forEach(f),vn.forEach(f),this.h()},h(){Y(a,"class","w-100 mx-a"),Y(v,"class","svelte-2crdhv"),Y(ce,"class","svelte-2crdhv"),Y(Me,"class","d-ib m5"),Y(G,"class","mx-a"),Y(de,"class","svelte-2crdhv"),Y($e,"class","svelte-2crdhv"),Y(Ie,"class","d-ib"),Y(ie,"class","svelte-2crdhv"),Y(we,"class","svelte-2crdhv"),Y(ve,"class","svelte-2crdhv"),Y(Ae,"class","mx-a rx10"),du(Ae.src,Nh="https://i.imgur.com/V6IWaD2.png")||Y(Ae,"src",Nh),Y(Ae,"height","400px"),Y(Ae,"width","400px"),Y(I,"class","svelte-2crdhv"),Y(st,"href","#"),Y(ye,"class","svelte-2crdhv"),Y(rt,"class","d-ib m5"),xe.open=!0,Y(xe,"class","svelte-2crdhv")},m(g,j){P(g,a,j),e(a,l),P(g,_,j),P(g,v,j),e(v,p),e(p,c),e(v,u),e(v,o),e(o,R),e(o,L),e(o,U),e(o,D),e(o,ge),e(o,le),e(o,De),e(o,Ee),e(o,ft),e(o,ke),e(o,_t),P(g,tt,j),P(g,ce,j),e(ce,je),e(je,se),e(ce,nt),e(ce,q),e(q,gt),e(q,xt),e(q,Re),e(q,mt),e(q,d),e(q,A),e(q,C),e(q,H),e(q,Z),e(q,Se),e(q,V),e(q,re),e(q,it),P(g,Pe,j),P(g,de,j),e(de,be),e(be,Me),e(Me,bt),e(be,Ne),e(be,G),e(G,ee),e(ee,$t),e(G,He),e(G,S),e(G,at),e(G,K),e(G,Be),e(G,fe),e(G,We),e(G,x),e(G,T),e(de,M),e(de,h),e(h,F),e(h,ne),e(h,wt),e(h,Mn),e(h,Nn),e(h,Bn),e(h,In),e(h,An),e(h,On),e(h,Ln),e(h,Cn),e(h,Kn),e(h,Dn),e(h,jn),e(h,Pn),e(h,Hn),e(h,Wn),e(h,qn),e(h,Fn),e(h,Xn),e(h,Yn),e(h,Un),e(h,Gn),e(h,zn),e(h,Vn),e(h,Jn),e(h,Zn),e(h,Qn),e(h,ei),e(h,ti),e(h,ni),e(h,ii),e(h,ai),e(h,li),e(h,si),e(h,ri),e(h,oi),e(h,hi),e(h,ci),e(h,ui),e(h,di),e(h,fi),e(h,pi),e(h,_i),e(h,gi),e(h,xi),e(h,mi),e(h,bi),e(h,$i),e(h,wi),e(h,vi),e(h,yi),e(h,Ti),e(h,Ei),e(h,ki),e(h,Ri),e(h,Si),e(h,Mi),e(h,Ni),e(h,Bi),e(h,Ii),e(h,Ai),P(g,Zt,j),P(g,$e,j),e($e,vt),e(vt,Oi),e($e,Li),e($e,z),e(z,Ci),e(z,Ki),e(z,Di),e(z,ji),e(z,Pi),e(z,Hi),e(z,Wi),e(z,qi),e(z,Fi),e(z,Xi),e(z,Yi),e(z,Ui),e(z,Gi),e(z,zi),P(g,Qt,j),P(g,ie,j),e(ie,yt),e(yt,Vi),e(ie,Ji),e(ie,ae),e(ae,Zi),e(ae,Qi),e(ae,ea),e(ae,ta),e(ae,na),e(ae,ia),e(ae,aa),e(ae,la),e(ae,sa),e(ie,ra),e(ie,Ie),e(Ie,Tt),e(Tt,oa),e(Ie,ha),e(Ie,Et),e(Et,ca),e(ie,ua),e(ie,kt),e(kt,da),P(g,en,j),P(g,we,j),e(we,Rt),e(Rt,fa),e(we,pa),e(we,m),e(m,_a),e(m,ga),e(m,xa),e(m,ma),e(m,ba),e(m,$a),e(m,wa),e(m,va),e(m,ya),e(m,Ta),e(m,Ea),e(m,ka),e(m,Ra),e(m,Sa),e(m,Ma),e(m,Na),e(m,Ba),e(m,Ia),e(m,Aa),e(m,Oa),e(m,La),e(m,Ca),e(m,Ka),e(m,Da),e(m,ja),e(m,Pa),e(m,Ha),e(m,Wa),e(m,qa),e(m,Fa),e(m,Xa),e(m,Ya),e(m,Ua),e(m,Ga),e(m,za),e(m,Va),e(m,Ja),e(m,Za),e(m,Qa),e(m,el),e(m,tl),e(m,nl),e(m,il),e(m,al),e(m,ll),e(m,sl),e(m,rl),e(m,ol),e(m,hl),e(m,cl),e(m,ul),e(m,dl),e(m,fl),e(m,pl),e(m,_l),e(m,gl),e(m,xl),e(m,ml),e(m,bl),e(m,$l),e(m,wl),e(m,vl),e(m,yl),e(m,St),e(St,Tl),e(m,El),e(m,kl),P(g,tn,j),P(g,ve,j),e(ve,Mt),e(Mt,Rl),e(ve,Sl),e(ve,X),e(X,Ml),e(X,Nl),e(X,Bl),e(X,Il),e(X,Al),e(X,Ol),e(X,Ll),e(X,Cl),e(X,Kl),e(X,Dl),e(X,jl),e(X,Pl),e(X,Hl),e(X,Wl),e(X,ql),e(X,Fl),P(g,nn,j),P(g,I,j),e(I,Nt),e(Nt,Xl),e(I,Yl),e(I,qe),e(qe,Ul),e(qe,Gl),e(qe,zl),e(I,Vl),Yt(Fe,I,null),e(I,Jl),e(I,Ae),e(I,Zl),e(I,Xe),e(Xe,Ql),e(Xe,es),e(Xe,ts),e(I,ns),e(I,Bt),e(Bt,is),e(I,as),e(I,It),e(It,ls),e(I,ss),e(I,Ye),e(Ye,rs),e(Ye,os),e(Ye,hs),e(I,cs),Yt(Ue,I,null),e(I,us),e(I,At),e(At,ds),e(I,fs),e(I,Ot),e(Ot,ps),e(I,_s),e(I,Ge),e(Ge,gs),e(Ge,xs),e(Ge,ms),e(I,bs),Yt(ze,I,null),e(I,$s),e(I,Lt),e(Lt,ws),e(I,vs),e(I,Ct),e(Ct,ys),e(I,Ts),e(I,Ve),e(Ve,Es),e(Ve,ks),e(Ve,Rs),e(I,Ss),Yt(Je,I,null),e(I,Ms),e(I,pe),e(pe,Ns),e(pe,Bs),e(pe,Is),e(pe,As),e(pe,Os),e(pe,Kt),e(Kt,Ls),e(pe,Cs),P(g,an,j),P(g,ye,j),e(ye,Dt),e(Dt,Ks),e(ye,Ds),e(ye,Oe),e(Oe,js),e(Oe,Ps),e(Oe,Hs),e(Oe,Te),e(Te,jt),e(jt,Ws),e(Te,qs),e(Te,Ze),e(Ze,Fs),e(Ze,st),e(st,Xs),e(Ze,Ys),e(Te,Us),e(Te,Pt),e(Pt,Gs),P(g,ln,j),P(g,xe,j),e(xe,Ht),e(Ht,rt),e(rt,zs),e(xe,Vs),e(xe,b),e(b,Js),e(b,Zs),e(b,Qs),e(b,er),e(b,tr),e(b,nr),e(b,ir),e(b,ar),e(b,lr),e(b,sr),e(b,rr),e(b,or),e(b,hr),e(b,cr),e(b,ur),e(b,dr),e(b,fr),e(b,pr),e(b,_r),e(b,gr),e(b,xr),e(b,mr),e(b,br),e(b,$r),e(b,wr),e(b,vr),e(b,yr),e(b,Tr),e(b,Er),e(b,kr),e(b,Rr),e(b,Sr),e(b,Mr),e(b,Nr),e(b,Br),e(b,Ir),e(b,Ar),e(b,Or),e(b,Lr),e(b,Cr),e(b,Kr),e(b,Dr),e(b,jr),e(b,Pr),e(b,Hr),e(b,Wr),e(b,qr),e(b,Fr),e(b,Xr),e(b,Yr),e(b,Ur),e(b,Gr),e(b,zr),e(b,Vr),e(b,Jr),e(b,Zr),e(b,Qr),e(b,eo),e(b,to),e(b,no),e(b,io),e(b,ao),e(b,lo),e(b,so),e(b,ro),e(b,oo),sn=!0},p:co,i(g){sn||(ct(Fe.$$.fragment,g),ct(Ue.$$.fragment,g),ct(ze.$$.fragment,g),ct(Je.$$.fragment,g),sn=!0)},o(g){ut(Fe.$$.fragment,g),ut(Ue.$$.fragment,g),ut(ze.$$.fragment,g),ut(Je.$$.fragment,g),sn=!1},d(g){g&&f(a),g&&f(_),g&&f(v),g&&f(tt),g&&f(ce),g&&f(Pe),g&&f(de),g&&f(Zt),g&&f($e),g&&f(Qt),g&&f(ie),g&&f(en),g&&f(we),g&&f(tn),g&&f(ve),g&&f(nn),g&&f(I),Ut(Fe),Ut(Ue),Ut(ze),Ut(Je),g&&f(an),g&&f(ye),g&&f(ln),g&&f(xe)}}}class vd extends uo{constructor(a){super(),fo(this,a,null,$d,po,{})}}export{vd as default};
