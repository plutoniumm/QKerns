import{S as Gh,i as zh,s as Vh,Q as Et,k as s,l as r,m,h as o,R as pn,T as jd,b as j,F as e,U as Vd,K as Uh,V as Zn,W as Jd,q as t,r as n,u as hf,M as cf,e as Pd,N as uf,C as df,G as ff,H as pf,I as _f,g as yt,d as Tt,X as gf,j as mf,y as _n,z as gn,A as mn,Y as bf,B as bn,a as k,c as R,n as X,E as xf}from"../chunks/index.486f8b79.mjs";var Jh={exports:{}};function Zh(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(function(a){var l=i[a];typeof l=="object"&&!Object.isFrozen(l)&&Zh(l)}),i}Jh.exports=Zh;Jh.exports.default=Zh;class Hd{constructor(a){a.data===void 0&&(a.data={}),this.data=a.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Zd(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ve(i,...a){const l=Object.create(null);for(const g in i)l[g]=i[g];return a.forEach(function(g){for(const y in g)l[y]=g[y]}),l}const $f="</span>",Fd=i=>!!i.scope||i.sublanguage&&i.language,wf=(i,{prefix:a})=>{if(i.includes(".")){const l=i.split(".");return[`${a}${l.shift()}`,...l.map((g,y)=>`${g}${"_".repeat(y+1)}`)].join(" ")}return`${a}${i}`};class vf{constructor(a,l){this.buffer="",this.classPrefix=l.classPrefix,a.walk(this)}addText(a){this.buffer+=Zd(a)}openNode(a){if(!Fd(a))return;let l="";a.sublanguage?l=`language-${a.language}`:l=wf(a.scope,{prefix:this.classPrefix}),this.span(l)}closeNode(a){Fd(a)&&(this.buffer+=$f)}value(){return this.buffer}span(a){this.buffer+=`<span class="${a}">`}}const qd=(i={})=>{const a={children:[]};return Object.assign(a,i),a};class Qh{constructor(){this.rootNode=qd(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(a){this.top.children.push(a)}openNode(a){const l=qd({scope:a});this.add(l),this.stack.push(l)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(a){return this.constructor._walk(a,this.rootNode)}static _walk(a,l){return typeof l=="string"?a.addText(l):l.children&&(a.openNode(l),l.children.forEach(g=>this._walk(a,g)),a.closeNode(l)),a}static _collapse(a){typeof a!="string"&&a.children&&(a.children.every(l=>typeof l=="string")?a.children=[a.children.join("")]:a.children.forEach(l=>{Qh._collapse(l)}))}}class yf extends Qh{constructor(a){super(),this.options=a}addKeyword(a,l){a!==""&&(this.openNode(l),this.addText(a),this.closeNode())}addText(a){a!==""&&this.add(a)}addSublanguage(a,l){const g=a.root;g.sublanguage=!0,g.language=l,this.add(g)}toHTML(){return new vf(this,this.options).value()}finalize(){return!0}}function xn(i){return i?typeof i=="string"?i:i.source:null}function Qd(i){return ft("(?=",i,")")}function Tf(i){return ft("(?:",i,")*")}function Ef(i){return ft("(?:",i,")?")}function ft(...i){return i.map(l=>xn(l)).join("")}function kf(i){const a=i[i.length-1];return typeof a=="object"&&a.constructor===Object?(i.splice(i.length-1,1),a):{}}function ec(...i){return"("+(kf(i).capture?"":"?:")+i.map(g=>xn(g)).join("|")+")"}function ef(i){return new RegExp(i.toString()+"|").exec("").length-1}function Rf(i,a){const l=i&&i.exec(a);return l&&l.index===0}const Mf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function tc(i,{joinWith:a}){let l=0;return i.map(g=>{l+=1;const y=l;let _=xn(g),u="";for(;_.length>0;){const d=Mf.exec(_);if(!d){u+=_;break}u+=_.substring(0,d.index),_=_.substring(d.index+d[0].length),d[0][0]==="\\"&&d[1]?u+="\\"+String(Number(d[1])+y):(u+=d[0],d[0]==="("&&l++)}return u}).map(g=>`(${g})`).join(a)}const Sf=/\b\B/,tf="[a-zA-Z]\\w*",nc="[a-zA-Z_]\\w*",nf="\\b\\d+(\\.\\d+)?",af="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",lf="\\b(0b[01]+)",Bf="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",If=(i={})=>{const a=/^#![ ]*\//;return i.binary&&(i.begin=ft(a,/.*\b/,i.binary,/\b.*/)),Ve({scope:"meta",begin:a,end:/$/,relevance:0,"on:begin":(l,g)=>{l.index!==0&&g.ignoreMatch()}},i)},$n={begin:"\\\\[\\s\\S]",relevance:0},Nf={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[$n]},Af={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[$n]},Of={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ei=function(i,a,l={}){const g=Ve({scope:"comment",begin:i,end:a,contains:[]},l);g.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const y=ec("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return g.contains.push({begin:ft(/[ ]+/,"(",y,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),g},Lf=ei("//","$"),Kf=ei("/\\*","\\*/"),Cf=ei("#","$"),Df={scope:"number",begin:nf,relevance:0},jf={scope:"number",begin:af,relevance:0},Pf={scope:"number",begin:lf,relevance:0},Hf={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[$n,{begin:/\[/,end:/\]/,relevance:0,contains:[$n]}]}]},Ff={scope:"title",begin:tf,relevance:0},qf={scope:"title",begin:nc,relevance:0},Wf={begin:"\\.\\s*"+nc,relevance:0},Xf=function(i){return Object.assign(i,{"on:begin":(a,l)=>{l.data._beginMatch=a[1]},"on:end":(a,l)=>{l.data._beginMatch!==a[1]&&l.ignoreMatch()}})};var zn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Sf,IDENT_RE:tf,UNDERSCORE_IDENT_RE:nc,NUMBER_RE:nf,C_NUMBER_RE:af,BINARY_NUMBER_RE:lf,RE_STARTERS_RE:Bf,SHEBANG:If,BACKSLASH_ESCAPE:$n,APOS_STRING_MODE:Nf,QUOTE_STRING_MODE:Af,PHRASAL_WORDS_MODE:Of,COMMENT:ei,C_LINE_COMMENT_MODE:Lf,C_BLOCK_COMMENT_MODE:Kf,HASH_COMMENT_MODE:Cf,NUMBER_MODE:Df,C_NUMBER_MODE:jf,BINARY_NUMBER_MODE:Pf,REGEXP_MODE:Hf,TITLE_MODE:Ff,UNDERSCORE_TITLE_MODE:qf,METHOD_GUARD:Wf,END_SAME_AS_BEGIN:Xf});function Yf(i,a){i.input[i.index-1]==="."&&a.ignoreMatch()}function Uf(i,a){i.className!==void 0&&(i.scope=i.className,delete i.className)}function Gf(i,a){a&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=Yf,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function zf(i,a){Array.isArray(i.illegal)&&(i.illegal=ec(...i.illegal))}function Vf(i,a){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function Jf(i,a){i.relevance===void 0&&(i.relevance=1)}const Zf=(i,a)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const l=Object.assign({},i);Object.keys(i).forEach(g=>{delete i[g]}),i.keywords=l.keywords,i.begin=ft(l.beforeMatch,Qd(l.begin)),i.starts={relevance:0,contains:[Object.assign(l,{endsParent:!0})]},i.relevance=0,delete l.beforeMatch},Qf=["of","and","for","in","not","or","if","then","parent","list","value"],ep="keyword";function sf(i,a,l=ep){const g=Object.create(null);return typeof i=="string"?y(l,i.split(" ")):Array.isArray(i)?y(l,i):Object.keys(i).forEach(function(_){Object.assign(g,sf(i[_],a,_))}),g;function y(_,u){a&&(u=u.map(d=>d.toLowerCase())),u.forEach(function(d){const h=d.split("|");g[h[0]]=[_,tp(h[0],h[1])]})}}function tp(i,a){return a?Number(a):np(i)?0:1}function np(i){return Qf.includes(i.toLowerCase())}const Wd={},dt=i=>{console.error(i)},Xd=(i,...a)=>{console.log(`WARN: ${i}`,...a)},vt=(i,a)=>{Wd[`${i}/${a}`]||(console.log(`Deprecated as of ${i}. ${a}`),Wd[`${i}/${a}`]=!0)},Qn=new Error;function rf(i,a,{key:l}){let g=0;const y=i[l],_={},u={};for(let d=1;d<=a.length;d++)u[d+g]=y[d],_[d+g]=!0,g+=ef(a[d-1]);i[l]=u,i[l]._emit=_,i[l]._multi=!0}function ip(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw dt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Qn;if(typeof i.beginScope!="object"||i.beginScope===null)throw dt("beginScope must be object"),Qn;rf(i,i.begin,{key:"beginScope"}),i.begin=tc(i.begin,{joinWith:""})}}function ap(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw dt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Qn;if(typeof i.endScope!="object"||i.endScope===null)throw dt("endScope must be object"),Qn;rf(i,i.end,{key:"endScope"}),i.end=tc(i.end,{joinWith:""})}}function lp(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function sp(i){lp(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),ip(i),ap(i)}function rp(i){function a(u,d){return new RegExp(xn(u),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(d?"g":""))}class l{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(d,h){h.position=this.position++,this.matchIndexes[this.matchAt]=h,this.regexes.push([h,d]),this.matchAt+=ef(d)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const d=this.regexes.map(h=>h[1]);this.matcherRe=a(tc(d,{joinWith:"|"}),!0),this.lastIndex=0}exec(d){this.matcherRe.lastIndex=this.lastIndex;const h=this.matcherRe.exec(d);if(!h)return null;const S=h.findIndex((z,H)=>H>0&&z!==void 0),L=this.matchIndexes[S];return h.splice(0,S),Object.assign(h,L)}}class g{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(d){if(this.multiRegexes[d])return this.multiRegexes[d];const h=new l;return this.rules.slice(d).forEach(([S,L])=>h.addRule(S,L)),h.compile(),this.multiRegexes[d]=h,h}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(d,h){this.rules.push([d,h]),h.type==="begin"&&this.count++}exec(d){const h=this.getMatcher(this.regexIndex);h.lastIndex=this.lastIndex;let S=h.exec(d);if(this.resumingScanAtSamePosition()&&!(S&&S.index===this.lastIndex)){const L=this.getMatcher(0);L.lastIndex=this.lastIndex+1,S=L.exec(d)}return S&&(this.regexIndex+=S.position+1,this.regexIndex===this.count&&this.considerAll()),S}}function y(u){const d=new g;return u.contains.forEach(h=>d.addRule(h.begin,{rule:h,type:"begin"})),u.terminatorEnd&&d.addRule(u.terminatorEnd,{type:"end"}),u.illegal&&d.addRule(u.illegal,{type:"illegal"}),d}function _(u,d){const h=u;if(u.isCompiled)return h;[Uf,Vf,sp,Zf].forEach(L=>L(u,d)),i.compilerExtensions.forEach(L=>L(u,d)),u.__beforeBegin=null,[Gf,zf,Jf].forEach(L=>L(u,d)),u.isCompiled=!0;let S=null;return typeof u.keywords=="object"&&u.keywords.$pattern&&(u.keywords=Object.assign({},u.keywords),S=u.keywords.$pattern,delete u.keywords.$pattern),S=S||/\w+/,u.keywords&&(u.keywords=sf(u.keywords,i.case_insensitive)),h.keywordPatternRe=a(S,!0),d&&(u.begin||(u.begin=/\B|\b/),h.beginRe=a(h.begin),!u.end&&!u.endsWithParent&&(u.end=/\B|\b/),u.end&&(h.endRe=a(h.end)),h.terminatorEnd=xn(h.end)||"",u.endsWithParent&&d.terminatorEnd&&(h.terminatorEnd+=(u.end?"|":"")+d.terminatorEnd)),u.illegal&&(h.illegalRe=a(u.illegal)),u.contains||(u.contains=[]),u.contains=[].concat(...u.contains.map(function(L){return op(L==="self"?u:L)})),u.contains.forEach(function(L){_(L,h)}),u.starts&&_(u.starts,d),h.matcher=y(h),h}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=Ve(i.classNameAliases||{}),_(i)}function of(i){return i?i.endsWithParent||of(i.starts):!1}function op(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(a){return Ve(i,{variants:null},a)})),i.cachedVariants?i.cachedVariants:of(i)?Ve(i,{starts:i.starts?Ve(i.starts):null}):Object.isFrozen(i)?Ve(i):i}var hp="11.7.0";class cp extends Error{constructor(a,l){super(a),this.name="HTMLInjectionError",this.html=l}}const Yh=Zd,Yd=Ve,Ud=Symbol("nomatch"),up=7,dp=function(i){const a=Object.create(null),l=Object.create(null),g=[];let y=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:yf};function h(p){return d.noHighlightRe.test(p)}function S(p){let M=p.className+" ";M+=p.parentNode?p.parentNode.className:"";const A=d.languageDetectRe.exec(M);if(A){const K=ue(A[1]);return K||(Xd(_.replace("{}",A[1])),Xd("Falling back to no-highlight mode for this block.",p)),K?A[1]:"no-highlight"}return M.split(/\s+/).find(K=>h(K)||ue(K))}function L(p,M,A){let K="",q="";typeof M=="object"?(K=p,A=M.ignoreIllegals,q=M.language):(vt("10.7.0","highlight(lang, code, ...args) has been deprecated."),vt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=p,K=M),A===void 0&&(A=!0);const te={code:K,language:q};Le("before:highlight",te);const me=te.result?te.result:z(te.language,te.code,A);return me.code=te.code,Le("after:highlight",me),me}function z(p,M,A,K){const q=Object.create(null);function te(b,E){return b.keywords[E]}function me(){if(!B.keywords){W.addText(C);return}let b=0;B.keywordPatternRe.lastIndex=0;let E=B.keywordPatternRe.exec(C),I="";for(;E;){I+=C.substring(b,E.index);const c=ae.case_insensitive?E[0].toLowerCase():E[0],U=te(B,c);if(U){const[se,Ot]=U;if(W.addText(I),I="",q[c]=(q[c]||0)+1,q[c]<=up&&(je+=Ot),se.startsWith("_"))I+=E[0];else{const vn=ae.classNameAliases[se]||se;W.addKeyword(E[0],vn)}}else I+=E[0];b=B.keywordPatternRe.lastIndex,E=B.keywordPatternRe.exec(C)}I+=C.substring(b),W.addText(I)}function Ke(){if(C==="")return;let b=null;if(typeof B.subLanguage=="string"){if(!a[B.subLanguage]){W.addText(C);return}b=z(B.subLanguage,C,!0,mt[B.subLanguage]),mt[B.subLanguage]=b._top}else b=ye(C,B.subLanguage.length?B.subLanguage:null);B.relevance>0&&(je+=b.relevance),W.addSublanguage(b._emitter,b.language)}function Z(){B.subLanguage!=null?Ke():me(),C=""}function de(b,E){let I=1;const c=E.length-1;for(;I<=c;){if(!b._emit[I]){I++;continue}const U=ae.classNameAliases[b[I]]||b[I],se=E[I];U?W.addKeyword(se,U):(C=se,me(),C=""),I++}}function gt(b,E){return b.scope&&typeof b.scope=="string"&&W.openNode(ae.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(W.addKeyword(C,ae.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),C=""):b.beginScope._multi&&(de(b.beginScope,E),C="")),B=Object.create(b,{parent:{value:B}}),B}function Qe(b,E,I){let c=Rf(b.endRe,I);if(c){if(b["on:end"]){const U=new Hd(b);b["on:end"](E,U),U.isMatchIgnored&&(c=!1)}if(c){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Qe(b.parent,E,I)}function fe(b){return B.matcher.regexIndex===0?(C+=b[0],1):(bt=!0,0)}function Te(b){const E=b[0],I=b.rule,c=new Hd(I),U=[I.__beforeBegin,I["on:begin"]];for(const se of U)if(se&&(se(b,c),c.isMatchIgnored))return fe(E);return I.skip?C+=E:(I.excludeBegin&&(C+=E),Z(),!I.returnBegin&&!I.excludeBegin&&(C=E)),gt(I,b),I.returnBegin?0:E.length}function Ce(b){const E=b[0],I=M.substring(b.index),c=Qe(B,b,I);if(!c)return Ud;const U=B;B.endScope&&B.endScope._wrap?(Z(),W.addKeyword(E,B.endScope._wrap)):B.endScope&&B.endScope._multi?(Z(),de(B.endScope,b)):U.skip?C+=E:(U.returnEnd||U.excludeEnd||(C+=E),Z(),U.excludeEnd&&(C=E));do B.scope&&W.closeNode(),!B.skip&&!B.subLanguage&&(je+=B.relevance),B=B.parent;while(B!==c.parent);return c.starts&&gt(c.starts,b),U.returnEnd?0:E.length}function Nt(){const b=[];for(let E=B;E!==ae;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>W.openNode(E))}let De={};function V(b,E){const I=E&&E[0];if(C+=b,I==null)return Z(),0;if(De.type==="begin"&&E.type==="end"&&De.index===E.index&&I===""){if(C+=M.slice(E.index,E.index+1),!y){const c=new Error(`0 width match regex (${p})`);throw c.languageName=p,c.badRule=De.rule,c}return 1}if(De=E,E.type==="begin")return Te(E);if(E.type==="illegal"&&!A){const c=new Error('Illegal lexeme "'+I+'" for mode "'+(B.scope||"<unnamed>")+'"');throw c.mode=B,c}else if(E.type==="end"){const c=Ce(E);if(c!==Ud)return c}if(E.type==="illegal"&&I==="")return 1;if(tt>1e5&&tt>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return C+=I,I.length}const ae=ue(p);if(!ae)throw dt(_.replace("{}",p)),new Error('Unknown language: "'+p+'"');const At=rp(ae);let et="",B=K||At;const mt={},W=new d.__emitter(d);Nt();let C="",je=0,be=0,tt=0,bt=!1;try{for(B.matcher.considerAll();;){tt++,bt?bt=!1:B.matcher.considerAll(),B.matcher.lastIndex=be;const b=B.matcher.exec(M);if(!b)break;const E=M.substring(be,b.index),I=V(E,b);be=b.index+I}return V(M.substring(be)),W.closeAllNodes(),W.finalize(),et=W.toHTML(),{language:p,value:et,relevance:je,illegal:!1,_emitter:W,_top:B}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:p,value:Yh(M),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:be,context:M.slice(be-100,be+100),mode:b.mode,resultSoFar:et},_emitter:W};if(y)return{language:p,value:Yh(M),illegal:!1,relevance:0,errorRaised:b,_emitter:W,_top:B};throw b}}function H(p){const M={value:Yh(p),illegal:!1,relevance:0,_top:u,_emitter:new d.__emitter(d)};return M._emitter.addText(p),M}function ye(p,M){M=M||d.languages||Object.keys(a);const A=H(p),K=M.filter(ue).filter(Y).map(Z=>z(Z,p,!1));K.unshift(A);const q=K.sort((Z,de)=>{if(Z.relevance!==de.relevance)return de.relevance-Z.relevance;if(Z.language&&de.language){if(ue(Z.language).supersetOf===de.language)return 1;if(ue(de.language).supersetOf===Z.language)return-1}return 0}),[te,me]=q,Ke=te;return Ke.secondBest=me,Ke}function _e(p,M,A){const K=M&&l[M]||A;p.classList.add("hljs"),p.classList.add(`language-${K}`)}function ce(p){let M=null;const A=S(p);if(h(A))return;if(Le("before:highlightElement",{el:p,language:A}),p.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(p)),d.throwUnescapedHTML))throw new cp("One of your code blocks includes unescaped HTML.",p.innerHTML);M=p;const K=M.textContent,q=A?L(K,{language:A,ignoreIllegals:!0}):ye(K);p.innerHTML=q.value,_e(p,A,q.language),p.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(p.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Le("after:highlightElement",{el:p,result:q,text:K})}function Je(p){d=Yd(d,p)}const Ae=()=>{Oe(),vt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function kt(){Oe(),vt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Rt=!1;function Oe(){if(document.readyState==="loading"){Rt=!0;return}document.querySelectorAll(d.cssSelector).forEach(ce)}function Mt(){Rt&&Oe()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Mt,!1);function pt(p,M){let A=null;try{A=M(i)}catch(K){if(dt("Language definition for '{}' could not be registered.".replace("{}",p)),y)dt(K);else throw K;A=u}A.name||(A.name=p),a[p]=A,A.rawDefinition=M.bind(null,i),A.aliases&&_t(A.aliases,{languageName:p})}function ge(p){delete a[p];for(const M of Object.keys(l))l[M]===p&&delete l[M]}function Ze(){return Object.keys(a)}function ue(p){return p=(p||"").toLowerCase(),a[p]||a[l[p]]}function _t(p,{languageName:M}){typeof p=="string"&&(p=[p]),p.forEach(A=>{l[A.toLowerCase()]=M})}function Y(p){const M=ue(p);return M&&!M.disableAutodetect}function St(p){p["before:highlightBlock"]&&!p["before:highlightElement"]&&(p["before:highlightElement"]=M=>{p["before:highlightBlock"](Object.assign({block:M.el},M))}),p["after:highlightBlock"]&&!p["after:highlightElement"]&&(p["after:highlightElement"]=M=>{p["after:highlightBlock"](Object.assign({block:M.el},M))})}function Bt(p){St(p),g.push(p)}function Le(p,M){const A=p;g.forEach(function(K){K[A]&&K[A](M)})}function It(p){return vt("10.7.0","highlightBlock will be removed entirely in v12.0"),vt("10.7.0","Please use highlightElement now."),ce(p)}Object.assign(i,{highlight:L,highlightAuto:ye,highlightAll:Oe,highlightElement:ce,highlightBlock:It,configure:Je,initHighlighting:Ae,initHighlightingOnLoad:kt,registerLanguage:pt,unregisterLanguage:ge,listLanguages:Ze,getLanguage:ue,registerAliases:_t,autoDetection:Y,inherit:Yd,addPlugin:Bt}),i.debugMode=function(){y=!1},i.safeMode=function(){y=!0},i.versionString=hp,i.regex={concat:ft,lookahead:Qd,either:ec,optional:Ef,anyNumberOfTimes:Tf};for(const p in zn)typeof zn[p]=="object"&&Jh.exports(zn[p]);return Object.assign(i,zn),i};var wn=dp({}),fp=wn;wn.HighlightJS=wn;wn.default=wn;const Gd=fp;function pp(i){let a;return{c(){a=t(i[2])},l(l){a=n(l,i[2])},m(l,g){j(l,a,g)},p(l,g){g&4&&hf(a,l[2])},d(l){l&&o(a)}}}function _p(i){let a,l;return{c(){a=new cf(!1),l=Pd(),this.h()},l(g){a=uf(g,!1),l=Pd(),this.h()},h(){a.a=l},m(g,y){a.m(i[1],g,y),j(g,l,y)},p(g,y){y&2&&a.p(g[1])},d(g){g&&o(l),g&&a.d()}}}function gp(i){let a,l;function g(h,S){return h[1]?_p:pp}let y=g(i),_=y(i),u=[{"data-language":i[3]},i[4]],d={};for(let h=0;h<u.length;h+=1)d=Et(d,u[h]);return{c(){a=s("pre"),l=s("code"),_.c(),this.h()},l(h){a=r(h,"PRE",{"data-language":!0});var S=m(a);l=r(S,"CODE",{});var L=m(l);_.l(L),L.forEach(o),S.forEach(o),this.h()},h(){pn(l,"hljs",!0),jd(a,d),pn(a,"langtag",i[0]),pn(a,"svelte-11sh29b",!0)},m(h,S){j(h,a,S),e(a,l),_.m(l,null)},p(h,[S]){y===(y=g(h))&&_?_.p(h,S):(_.d(1),_=y(h),_&&(_.c(),_.m(l,null))),jd(a,d=Vd(u,[S&8&&{"data-language":h[3]},S&16&&h[4]])),pn(a,"langtag",h[0]),pn(a,"svelte-11sh29b",!0)},i:Uh,o:Uh,d(h){h&&o(a),_.d()}}}function mp(i,a,l){const g=["langtag","highlighted","code","languageName"];let y=Zn(a,g),{langtag:_=!1}=a,{highlighted:u}=a,{code:d}=a,{languageName:h="plaintext"}=a;return i.$$set=S=>{a=Et(Et({},a),Jd(S)),l(4,y=Zn(a,g)),"langtag"in S&&l(0,_=S.langtag),"highlighted"in S&&l(1,u=S.highlighted),"code"in S&&l(2,d=S.code),"languageName"in S&&l(3,h=S.languageName)},[_,u,d,h,y]}class bp extends Gh{constructor(a){super(),zh(this,a,mp,gp,Vh,{langtag:0,highlighted:1,code:2,languageName:3})}}const xp=bp,$p=i=>({highlighted:i&8}),zd=i=>({highlighted:i[3]});function wp(i){let a,l;const g=[i[4],{languageName:i[0].name},{langtag:i[2]},{highlighted:i[3]},{code:i[1]}];let y={};for(let _=0;_<g.length;_+=1)y=Et(y,g[_]);return a=new xp({props:y}),{c(){_n(a.$$.fragment)},l(_){gn(a.$$.fragment,_)},m(_,u){mn(a,_,u),l=!0},p(_,u){const d=u&31?Vd(g,[u&16&&bf(_[4]),u&1&&{languageName:_[0].name},u&4&&{langtag:_[2]},u&8&&{highlighted:_[3]},u&2&&{code:_[1]}]):{};a.$set(d)},i(_){l||(yt(a.$$.fragment,_),l=!0)},o(_){Tt(a.$$.fragment,_),l=!1},d(_){bn(a,_)}}}function vp(i){let a;const l=i[6].default,g=df(l,i,i[5],zd),y=g||wp(i);return{c(){y&&y.c()},l(_){y&&y.l(_)},m(_,u){y&&y.m(_,u),a=!0},p(_,[u]){g?g.p&&(!a||u&40)&&ff(g,l,_,_[5],a?_f(l,_[5],u,$p):pf(_[5]),zd):y&&y.p&&(!a||u&31)&&y.p(_,a?u:-1)},i(_){a||(yt(y,_),a=!0)},o(_){Tt(y,_),a=!1},d(_){y&&y.d(_)}}}function yp(i,a,l){const g=["language","code","langtag"];let y=Zn(a,g),{$$slots:_={},$$scope:u}=a,{language:d}=a,{code:h}=a,{langtag:S=!1}=a;const L=gf();let z="";return mf(()=>{z&&L("highlight",{highlighted:z})}),i.$$set=H=>{a=Et(Et({},a),Jd(H)),l(4,y=Zn(a,g)),"language"in H&&l(0,d=H.language),"code"in H&&l(1,h=H.code),"langtag"in H&&l(2,S=H.langtag),"$$scope"in H&&l(5,u=H.$$scope)},i.$$.update=()=>{i.$$.dirty&3&&(Gd.registerLanguage(d.name,d.register),l(3,z=Gd.highlight(h,{language:d.name}).value))},[d,h,S,z,y,u,_]}class Tp extends Gh{constructor(a){super(),zh(this,a,yp,vp,Vh,{language:0,code:1,langtag:2})}}const Vn=Tp;function Ep(i){const a=i.regex,l=/[\p{XID_Start}_]\p{XID_Continue}*/u,g=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],d={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:g,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},h={className:"meta",begin:/^(>>>|\.\.\.) /},S={className:"subst",begin:/\{/,end:/\}/,keywords:d,illegal:/#/},L={begin:/\{\{/,relevance:0},z={className:"string",contains:[i.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[i.BACKSLASH_ESCAPE,h],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[i.BACKSLASH_ESCAPE,h],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[i.BACKSLASH_ESCAPE,h,L,S]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[i.BACKSLASH_ESCAPE,h,L,S]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[i.BACKSLASH_ESCAPE,L,S]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[i.BACKSLASH_ESCAPE,L,S]},i.APOS_STRING_MODE,i.QUOTE_STRING_MODE]},H="[0-9](_?[0-9])*",ye=`(\\b(${H}))?\\.(${H})|\\b(${H})\\.`,_e=`\\b|${g.join("|")}`,ce={className:"number",relevance:0,variants:[{begin:`(\\b(${H})|(${ye}))[eE][+-]?(${H})[jJ]?(?=${_e})`},{begin:`(${ye})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_e})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${_e})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${_e})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_e})`},{begin:`\\b(${H})[jJ](?=${_e})`}]},Je={className:"comment",begin:a.lookahead(/# type:/),end:/$/,keywords:d,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Ae={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:["self",h,ce,z,i.HASH_COMMENT_MODE]}]};return S.contains=[z,ce,h],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:d,illegal:/(<\/|->|\?)|=>/,contains:[h,ce,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},z,Je,i.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,l],scope:{1:"keyword",3:"title.function"},contains:[Ae]},{variants:[{match:[/\bclass/,/\s+/,l,/\s*/,/\(\s*/,l,/\s*\)/]},{match:[/\bclass/,/\s+/,l]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[ce,Ae,z]}]}}const kp={name:"python",register:Ep},Jn=kp;function Rp(i){let a,l,g,y,_,u,d,h,S,L,z,H,ye,_e="{i=1}",ce,Je,Ae,kt,Rt="{-1}",Oe,Mt,pt,ge,Ze,ue,_t,Y,St,Bt,Le,It,p,M="{-1}",A,K,q,te,me="{-1}",Ke,Z,de,gt,Qe,fe,Te,Ce,Nt,De,V,ae,At,et,B,mt,W="{-1}",C,je,be,tt,bt="{-1}",b,E,I,c,U,se,Ot,vn="{i=1}",ti,ni,ic="{\\lambda}",ii,ac=2+"",ai,li,si,ri,lc=1+"",oi,sc="{\\lambda}",hi,ci,rc="{i=1}",ui,di,fi,pi,oc=1+"",_i,hc="{\\lambda}",gi,mi,cc="{i=1}",bi,xi,$i,wi,uc="{i=1}",vi,yi,Ti,Ei,dc="{\\lambda}",ki,fc=2+"",Ri,Mi,Si,Bi,pc="{\\lambda}",Ii,_c=2+"",Ni,Ai,gc="{bmatrix}",Oi,Li,mc="{bmatrix}",Ki,Ci,Di,ji,bc="{\\lambda}",Pi,xc=2+"",Hi,Fi,qi,Wi,$c="{\\lambda}",Xi,wc=2+"",Yi,Ui,vc="{-1}",Gi,zi,yc="{-1}",Vi,Ji,Zi,Qi,Tc="{-1}",ea,ta,na,ia,Ec="{-1}",aa,la,yn,Re,Lt,sa,ra,J,oa,ha,ca,ua,da,fa,pa,kc="{bmatrix}",_a,ga,Rc="{bmatrix}",ma,ba,Mc="{x_1, x_2, \\cdots}",xa,$a,wa,Tn,re,Kt,va,ya,oe,Ta,Sc="{bmatrix}",Ea,ka,Bc="{bmatrix}",Ra,Ma,Ic="{bmatrix}",Sa,Ba,Nc="{bmatrix}",Ia,Na,Aa,Pe,Ct,Oa,La,Dt,Ka,Ca,jt,Da,En,Me,Pt,ja,Pa,x,Ha,Ac="{bmatrix}",Fa,qa,Oc="{2}",Wa,Xa,Lc="{bmatrix}",Ya,Ua,Ga,za,Kc="{bmatrix}",Va,Ja,Cc="{m,1}",Za,Qa,Dc="{2}",el,tl,jc="{m,1}",nl,il,Pc="{m,2}",al,ll,Hc="{m,2}",sl,rl,Fc="{bmatrix}",ol,hl,qc="{bmatrix}",cl,ul,Wc="{n,1}",dl,fl,Xc="{2}",pl,_l,Yc="{n,1}",gl,ml,Uc="{n,2}",bl,xl,Gc="{n,2}",$l,wl,zc="{bmatrix}",vl,yl,Vc="{m,1}",Tl,El,Jc="{n,1}",kl,Rl,Zc="{m,1}",Ml,Sl,Qc="{m,2}",Bl,Il,eu="{n,1}",Nl,Al,tu="{n,2}",Ol,Ll,nu="{m,2}",Kl,Cl,iu="{n,2}",Dl,jl,Pl,Hl,au="{m,1}",Fl,ql,lu="{n,1}",Wl,Xl,su="{m,2}",Yl,Ul,ru="{n,2}",Gl,zl,Ht,Vl,Jl,Zl,kn,Se,Ft,Ql,es,G,ts,ns,is,ou="{-1}",as,ls,ss,rs,hu="{-1}",os,hs,cs,us,cu="{bmatrix}",ds,fs,uu="{bmatrix}",ps,_s,gs,Rn,N,qt,ms,bs,nt,xs,$s,ws,vs,it,ys,He,du,Ts,at,Es,ks,Rs,Ms,Wt,Ss,Bs,Xt,Is,Ns,lt,As,Os,Ls,Ks,st,Cs,Yt,Ds,js,Ut,Ps,Hs,rt,Fs,qs,Ws,Xs,ot,Ys,Gt,Us,Gs,zt,zs,Vs,ht,Js,Zs,Qs,er,ct,tr,xe,nr,ir,ar,fu="{infinite terms...}",lr,sr,Vt,rr,or,Mn,Be,Jt,hr,cr,Fe,ur,dr,fr,Ie,Zt,pr,_r,Qt,gr,mr,en,br,Sn,Ne,tn,xt,xr,$r,$,wr,vr,yr,pu="{1}",Tr,_u="{2}",Er,kr,Rr,Mr,gu="{1}",Sr,mu="{2}",Br,Ir,Nr,Ar,bu="{1}",Or,xu="{2}",Lr,Kr,Cr,Dr,$u="{1}",jr,wu="{2}",Pr,Hr,Fr,qr,vu="{1}",Wr,yu="{2}",Xr,Yr,Ur,Gr,Tu="{1}",zr,Eu="{2}",Vr,Jr,ku="{1}",Zr,Ru="{2}",Qr,eo,to,no,Mu="{\\langle x_i, x_j\\rangle}",io,ao,Su="{since }",lo,so,Bu="{1}",ro,Iu="{2}",oo,ho,Nu="{1}",co,Au="{2}",uo,fo,po,_o,Ou="{n=0}",go,mo,Lu="{\\infty}",bo,xo,Ku="{\\langle x_i, x_j\\rangle^n}",$o,Cu="{n!}",wo,vo,Du="{Taylor Series Expansion}",yo,To,Eo,ko,ju="{n=0}",Ro,Mo,Pu="{\\infty}",So,Bo,Hu="{K_{poly(n)}(x_i, x_j) }",Io,Fu="{n!}",No,Ao,Bn,$t,Oo,In,ne,nn,Lo,Ko,P,Co,Do,jo,qu="{d(x,x')}",Po,Wu="{2*\rho^2}",Ho,Fo,qo,Wo,Xo,Yo,Xu="{2^{1-\\nu}}",Uo,Yu="{\\Gamma(\\nu)}",Go,zo,Uu="{\\sqrt{2\\nu}d(x,x')}",Vo,Gu="{\\rho}",Jo,Zo,zu="{\\nu}",Qo,eh,Vu="{\\sqrt{2\\nu}d(x,x')}",th,Ju="{\\rho}",nh,ih,Zu="{\\nu}",ah,lh,sh,an,rh,oh,ee,hh,ch,uh,dh,fh,ph,_h,gh,mh,bh,xh,$h,wh,ut,ln,vh,yh,$e,qe,sn,Th,Eh,Qu="{-d}",kh,Rh,Mh,We,rn,Sh,Bh,ed="{-\\sqrt(3) d}",Ih,Nh,Ah,we,on,Oh,Lh,td=5+"",Kh,nd=3+"",Ch,Dh,id="{-\\sqrt(5) d}",jh,Ph,Hh,Xe,hn,Fh,qh,ad="{-\\frac{d^2}{2}}",Wh,Xh,Nn;return it=new Vn({props:{language:Jn,code:`def rand_pt_circle(rad_min, rad_max):
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
      svm.SVC().fit(fX,Y)`}}),st=new Vn({props:{language:Jn,code:"svm.SVC(kernel='linear').fit(X,Y)"}}),ot=new Vn({props:{language:Jn,code:"svm.SVC(kernel='poly', degree=2).fit(X,Y)"}}),ct=new Vn({props:{language:Jn,code:"svm.SVC(kernel='rbf', gamma=1).fit(X,Y)"}}),{c(){a=s("h1"),l=t("Kernel Functions Mechanism"),g=k(),y=s("section"),_=s("h2"),u=t("Regression"),d=k(),h=s("p"),S=t(`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),L=s("br"),z=t(`
    $$ Y = w^T X $$ We do this simply by defining the loss function as the sum of
    squared errors and minimizing it with respect to $w$. We can write this as
    `),H=s("br"),ye=t(`
    $$ J(w) = \\min_w \\sum_`),ce=t(_e),Je=t(`^n (y_i - w^T x_i)^2 $$ Solving this for $w$
    gives us `),Ae=s("br"),kt=t(`
    $$ w = (X^T X)^`),Oe=t(Rt),Mt=t(" X^T Y $$"),pt=k(),ge=s("section"),Ze=s("h2"),ue=t("Non Linearity"),_t=k(),Y=s("p"),St=t(`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),Bt=s("br"),Le=t(`
    $$ Y = w^T \\phi(X) $$ We can then also write the weight matrix as `),It=s("br"),p=t(`
    $$ w^* = (\\phi^T \\phi)^`),A=t(M),K=t(` \\phi^T Y $$ Let us introduce a regularization
    term $\\lambda$ such that the weight matrix is `),q=s("br"),te=t(`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),Ke=t(me),Z=t(` \\phi^T Y $$ The logic behind adding
    a regularization term is that we want to penalise the slope of the line. This
    is because we want to avoid overfitting. Adding bias results in a lower variance
    which makes the outputs less sensitive to the inputs. The parameter $\\lambda$
    is what controls the amount of bias we want to add
    `),de=s("br"),gt=t(`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),Qe=k(),fe=s("details"),Te=s("summary"),Ce=s("h2"),Nt=t("Restructuring the Weight Matrix"),De=k(),V=s("div"),ae=s("b"),At=t("Result:"),et=k(),B=s("br"),mt=t(`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),C=t(W),je=t(" \\phi^T Y $ → "),be=s("br"),tt=t(` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),b=t(bt),E=t(" Y $"),I=k(),c=s("p"),U=t("Let us now define the new loss function along with a regularization term "),se=s("br"),Ot=t(`
    $$ J(w) = \\min_w \\sum_`),ti=t(vn),ni=t("^n (y_i - w^T \\phi(x_i))^2 + \\frac"),ii=t(ic),ai=t(ac),li=t(`
    ||w||^2 $$ We can now solve for $w$ and get `),si=s("br"),ri=t(`
    $$ w^* = \\frac`),oi=t(lc),hi=t(sc),ci=t(" \\sum_"),ui=t(rc),di=t(`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ For sake of simplicity let us define a variable $\\alpha$ such
    that `),fi=s("br"),pi=t(`
    $$ \\alpha = \\frac`),_i=t(oc),gi=t(hc),mi=t(" \\sum_"),bi=t(cc),xi=t(`^n (y_i - w^T
    \\phi(x_i)) $$ We can now write the weight matrix as `),$i=s("br"),wi=t(`
    $$ w^* = \\sum_`),vi=t(uc),yi=t(`^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ Let us now
    substitute this into the loss function and get `),Ti=s("br"),Ei=t(`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),ki=t(dc),Ri=t(fc),Mi=t(`
    w^T w $$ expanding and simplifying this will give us `),Si=s("br"),Bi=t(`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),Ii=t(pc),Ni=t(_c),Ai=t(` w^T w $$ We can see that $\\phi
    \\phi^T$ is a repeated term. Let us define this new matrix as $K$ such that $$
    K = \\phi \\phi^T = \\begin`),Oi=t(gc),Li=t(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Ki=t(mc),Ci=t(` $$ This matrix has two very
    important properties. First, it is symmetric and second, it is positive semi-definite.
    (This also means it is invertible which $\\phi^T \\phi$ MAY NOT). We can substitute
    all $\\phi \\phi^T$ with $K$ and also $K$ with $K^T$ and get `),Di=s("br"),ji=t(`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),Pi=t(bc),Hi=t(xc),Fi=t(`
    \\alpha^T K \\alpha $$ Seeting the derivative of this with respect to $\\alpha$
    to zero and solving for $\\alpha$ gives us (along with $K = \\phi \\phi^T$)
    `),qi=s("br"),Wi=t(`
    $$ \\alpha* = (K + \\frac`),Xi=t($c),Yi=t(wc),Ui=t(" I)^"),Gi=t(vc),zi=t(` y $$ or $$ \\alpha* =
    (K + \\lambda' I)^`),Vi=t(yc),Ji=t(` y $$ We have achieved in this section effectively converting
    one equation to another as follows `),Zi=s("br"),Qi=t(`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),ea=t(Tc),ta=t(" \\phi^T Y $$ into "),na=s("br"),ia=t(`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),aa=t(Ec),la=t(` Y $$ By the looks of it we may not
    have done anything, but as we will see in the next section, this step will reduce
    the computation time by a lot.`),yn=k(),Re=s("section"),Lt=s("h2"),sa=t("Mercer's Theorem"),ra=k(),J=s("p"),oa=t(`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),ha=s("br"),ca=t(`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),ua=s("br"),da=t(`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),fa=s("br"),pa=t(`
    $$ \\begin`),_a=t(kc),ga=t(` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),ma=t(Rc),ba=t(` $$ is positive semi-definite for any
    collection $`),xa=t(Mc),$a=t(`$
    `),wa=s("br"),Tn=k(),re=s("section"),Kt=s("h2"),va=t("The Kernel Trick"),ya=k(),oe=s("p"),Ta=t(`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),Ea=t(Sc),ka=t(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Ra=t(Bc),Ma=t(" = \\begin"),Sa=t(Ic),Ba=t(`
    k(x_1, x_1) & k(x_1, x_2) & \\cdots & k(x_1, x_n) \\\\ k(x_2, x_1) & k(x_2, x_2)
    & \\cdots & k(x_2, x_n) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ k(x_n, x_1) &
    k(x_n, x_2) & \\cdots & k(x_n, x_n) \\end`),Ia=t(Nc),Na=t(" $$"),Aa=k(),Pe=s("ul"),Ct=s("li"),Oa=t("First: $K$ is symmetric"),La=k(),Dt=s("li"),Ka=t(`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),Ca=k(),jt=s("p"),Da=t(`So as long as we know the Kernel (which we can either choose or learn), we
    can compute the Kernel matrix and use it to solve for $\\alpha$ and then
    compute $w^*$ efficiently`),En=k(),Me=s("section"),Pt=s("h2"),ja=t("Working Example"),Pa=k(),x=s("p"),Ha=t("Consider the following mapping $$ \\phi: x \\rightarrow \\phi(x) = \\begin"),Fa=t(Ac),qa=t(`
    x_1^2 \\\\ \\sqrt`),Wa=t(Oc),Xa=t(" x_1 x_2 \\\\ x_2^2 \\end"),Ya=t(Lc),Ua=t(` $$ Let us for sake of
    demonstration work out its kernel `),Ga=s("br"),za=t(`
    $$ \\phi^T(x_m) \\phi(x_n) = \\begin`),Va=t(Kc),Ja=t(" x_"),Za=t(Cc),Qa=t("^2 & \\sqrt"),el=t(Dc),tl=t(" x_"),nl=t(jc),il=t(`
    x_`),al=t(Pc),ll=t(" & x_"),sl=t(Hc),rl=t("^2 \\end"),ol=t(Fc),hl=t(" \\begin"),cl=t(qc),ul=t(" x_"),dl=t(Wc),fl=t(`^2
    \\\\ \\sqrt`),pl=t(Xc),_l=t(" x_"),gl=t(Yc),ml=t(" x_"),bl=t(Uc),xl=t(" \\\\ x_"),$l=t(Gc),wl=t("^2 \\end"),vl=t(zc),yl=t(`
    = x_`),Tl=t(Vc),El=t("^2 x_"),kl=t(Jc),Rl=t("^2 + 2 x_"),Ml=t(Zc),Sl=t(" x_"),Bl=t(Qc),Il=t(" x_"),Nl=t(eu),Al=t(" x_"),Ol=t(tu),Ll=t(`
    + x_`),Kl=t(nu),Cl=t("^2 x_"),Dl=t(iu),jl=t("^2 $$ "),Pl=s("br"),Hl=t(`
    Clearly $$ \\phi^T(x_m) \\phi(x_n) = (x_`),Fl=t(au),ql=t(`
    x_`),Wl=t(lu),Xl=t(" + x_"),Yl=t(su),Ul=t(" x_"),Gl=t(ru),zl=t(`)^2 = (x_m^T x_n)^2 = k(x_m, x_n) $$
    This is an example of a Kernel called the `),Ht=s("b"),Vl=t("Polynomial Kernel"),Jl=t(` which is
    defined as $$ k(x, y) = (x^T y + r)^d $$ making in our case the parameters
    $d = 2$ and $r = 0$ `),Zl=s("br"),kn=k(),Se=s("section"),Ft=s("h2"),Ql=t("Making Predictions"),es=k(),G=s("p"),ts=t(`We can now make predictions using the Kernel trick. We can use the following
    equation to make predictions with $ y = w^T \\phi(x) $ But as we have seen
    above we can convert the RHS from
    `),ns=s("br"),is=t("$$ w^T \\phi(x) = y(\\phi \\phi^T + \\lambda' I)^"),as=t(ou),ls=t(` \\phi^T \\phi(x) $$
    to `),ss=s("br"),rs=t(" $$ w^T \\phi(x) = y(K + \\lambda' I)^"),os=t(hu),hs=t(` k_x $$ where $k_x$ is
    `),cs=s("br"),us=t(`
    $$ k_x = \\phi^T \\phi(x) = \\begin`),ds=t(cu),fs=t(` \\phi(x_1)^T \\phi(x) \\\\ \\phi(x_2)^T
    \\phi(x) \\\\ \\vdots \\\\ \\phi(x_n)^T \\phi(x) \\end`),ps=t(uu),_s=t(` $$ And our result
    is completely independent of the mapping $\\phi$ and only depends on the Kernel
    $k$ and the data $X$ and $Y$ `),gs=s("br"),Rn=k(),N=s("section"),qt=s("h2"),ms=t("Applying the Kernel Trick to the SVM"),bs=k(),nt=s("p"),xs=t(`As we know an SVM is a machine that can classify data by finding a
    hyperplane that separates the data into two classes. The SVM is a linear
    classifier, which means that it can only classify data that is linearly
    separable. But most data in the real world is not linear and so we need to
    use a non-linear classifier. The work around for that is that we first apply
    a non linear transformation to the data and then use a linear classifier to
    classify the transformed data. `),$s=s("br"),ws=t(`
    Let us look at how we do that for a simple case`),vs=k(),_n(it.$$.fragment),ys=k(),He=s("img"),Ts=k(),at=s("p"),Es=t(`While in an ideal world we should be able to stop here and call it a day, in
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
    `),ks=s("br"),Rs=t(" $$k(x_i, x_j) := f(x_i)^T f(x_j) $$"),Ms=k(),Wt=s("h3"),Ss=t("Examples"),Bs=k(),Xt=s("h4"),Is=t("Linear Kernel"),Ns=k(),lt=s("p"),As=t(`Let us say the transform we intend to make is $f(x) = x$ i.e the identity
    transform. Then the kernel function is
    `),Os=s("br"),Ls=t(" $$ k(x_i, x_j) = x_i^T x_j $$ With the call"),Ks=k(),_n(st.$$.fragment),Cs=k(),Yt=s("p"),Ds=t(`The linear kernel gives us a flat decision boundary as expected, it can only
    make a straight line through the data without any transforms.`),js=k(),Ut=s("h4"),Ps=t("Polynomial Kernel"),Hs=k(),rt=s("p"),Fs=t(`Let us say the non linear transform we intend to make is $f(x) = (x_1, x_2,
    x_1x_2, x_1^2 ,x_2^2)$ i.e the polynomial transform. Then the kernel
    function is
    `),qs=s("br"),Ws=t(" $$k(x_i, x_j) = (1 + x_i^T x_j)^2 $$ With the call"),Xs=k(),_n(ot.$$.fragment),Ys=k(),Gt=s("p"),Us=t(`The polynomial kernel gives us a curved decision boundary as expected, this
    is equivalent to first making an ideal transform before hand of the type
    $c_0 + c_1x_1 + c_2x_2 + c_3x_1x_2 + c_4x_1^2 + c_5x_2^2$ for some values
    $c_i$ and then using the linear kernel on the transformed data. The Kernel
    function here lets us find the relations between the values as if we had
    done the transform before hand without actually doing the transform.`),Gs=k(),zt=s("h4"),zs=t("RBF Kernel"),Vs=k(),ht=s("p"),Js=t(`What if we were to have a function for whom the transform were extremely
    difficult or impossible to calculate even in an approximate case, one such
    example is the Radial Basis Function (RBF) kernel. The RBF kernel is defined
    as
    `),Zs=s("br"),Qs=t(`
    $$ k(x_i, x_j) = \\exp(-\\gamma ||x_i - x_j||^2) $$ With the call`),er=k(),_n(ct.$$.fragment),tr=k(),xe=s("p"),nr=t(`It turns out that the transform needed before hand for an RBF is infinite
    dimensional, i.e it looks like
    `),ir=s("br"),ar=t(`
    $$ f(x) = (\\text`),lr=t(fu),sr=t(`) $$ Notice how being basically
    impossible to calculate, we can still use the RBF kernel to find the
    relations between the points.
    `),Vt=s("b"),rr=t("Note:"),or=t(` Gamma is a hyper parameter that controls the width of the RBF kernel.
    The smaller the gamma the wider the Kernel is therefore making it closer to a
    linear kernel. The larger the gamma the narrower the Kernel is therefore making
    it closer to a polynomial kernel of arbitrary degree. (See Proof in last section)`),Mn=k(),Be=s("section"),Jt=s("h2"),hr=t("Comparison with SINDy"),cr=k(),Fe=s("div"),ur=t(`This method is different from SINDy because SINDy usually aims to find the
    exact equations of the least number of degrees of freedom in any given
    system. We don't aim to do that. SINDy will not be able to convert a text
    description to an image. We want an arbitrary classifier that can be applied
    to any data set. SINDy would be much more suitable for a physical system
    where physics modelling is needed, ML is not needed for that and does not
    aim to solve those problems in the first place.
    `),dr=s("br"),fr=t(`
    ML however can be used in places where even the Non Linear systems don't have
    a closed form solution and we want to predict the state at some far time t beyond
    the chaos boundary. The results, models or even the architectures of the ML models
    used here are however not well studied and is an active area of research.
    `),Ie=s("ul"),Zt=s("li"),pr=t(`It is possible however that even for a given SINDy model, the ML model
        has lower computational requirements and thus is better used despite not
        being as accurate. A real world example was seen in Tesla Motors Inc
        where when calculating the current level of a battery it proved to be
        simpler to just use an ML model on the raw voltage than actually add
        physical resistors and model the complex interactions of all different
        sections, heat profiles and retentivities of the battery.`),_r=k(),Qt=s("li"),gr=t(`As mentioned above, we have seen in Kadierdan et al CDC 2019, that SINDy
        can be very accurately used to model, and therefore balance an inverted
        vertical double pendulum. It however also turns out that SINDy is good
        at small specific classes of tasks and should be used for as such, it
        generalists very poorly as was seen in the modelling of Nuclear Fusion
        where fusion control is done much better with DeepMind's new model, we
        see that they're able to not only model and predict the gas plume
        behaviour but also control it. This is a much more complex task than the
        simple double pendulum and so it is not surprising that SINDy fails
        here. This is also a good example of how ML can be used to solve
        problems that are not solvable by SINDy.`),mr=k(),en=s("li"),br=t(`SINDy aims to find a simple model such that it is EXPLAINABLE. The
        latter being the more important part, in ML the model has no constraint
        on being explainable and is very happy being a black box in interest of
        which it has no constraints on what forms it can take, therefore
        structurally it can be much more complex than a SINDy model. This is a
        good thing because it allows us to model much more complex systems, but
        it is also a bad thing because it makes it harder to explain the model
        and thus harder to trust it. In interest of this ability to Generalise,
        in 2011 NASA switched to ML for aircraft engine premptive fault
        detection and in 2015 for drought prediction in the ECOSTRESS mission,
        both areas which were traditionally left to modelling.`),Sn=k(),Ne=s("details"),tn=s("summary"),xt=s("h2"),xr=t("Proof of RBF Kernel's Dimensionality"),$r=k(),$=s("div"),wr=t("$ k(x_i, x_j) $ "),vr=s("br"),yr=t(`
    $ \\quad = \\exp(-\\frac`),Tr=t(pu),Er=t(_u),kr=t(` ||x_i - x_j||^2)$
    `),Rr=s("br"),Mr=t(`
    $ \\quad = \\exp(-\\frac`),Sr=t(gu),Br=t(mu),Ir=t(`
    \\langle x_i - x_j\\rangle^T \\langle x_i - x_j\\rangle) $ `),Nr=s("br"),Ar=t(`
    $ \\quad = \\exp(-\\frac`),Or=t(bu),Lr=t(xu),Kr=t(`
    (\\langle x_i, x_i - x_j\\rangle - \\langle x_j, x_i - x_j\\rangle)) $ `),Cr=s("br"),Dr=t(`
    $ \\quad = \\exp(-\\frac`),jr=t($u),Pr=t(wu),Hr=t(`
    (\\langle x_i, x_i\\rangle - \\langle x_i, x_j\\rangle - \\langle x_j, x_i\\rangle
    + \\langle x_j, x_j\\rangle)) $ `),Fr=s("br"),qr=t(`
    $ \\quad = \\exp(-\\frac`),Wr=t(vu),Xr=t(yu),Yr=t(` (||x_i||^2 - 2\\langle x_i, x_j\\rangle + ||x_j||^2))
    $ `),Ur=s("br"),Gr=t(`
    $ \\quad = \\exp[-\\frac`),zr=t(Tu),Vr=t(Eu),Jr=t(`
    ||x_i||^2 - \\frac`),Zr=t(ku),Qr=t(Ru),eo=t(" ||x_j||^2] \\exp(\\langle x_i, x_j\\rangle) $"),to=s("br"),no=t(`
    $ \\quad = C e^`),io=t(Mu),ao=t(`
    \\quad \\quad \\text`),lo=t(Su),so=t(" C = \\exp(-\\frac"),ro=t(Bu),oo=t(Iu),ho=t(" ||x_i||^2 - \\frac"),co=t(Nu),uo=t(Au),fo=t(`
    ||x_j||^2) $ `),po=s("br"),_o=t(" $ \\quad = C \\sum_"),go=t(Ou),mo=t("^"),bo=t(Lu),xo=t(" \\frac"),$o=t(Ku),wo=t(Cu),vo=t(`
    \\quad \\quad \\text`),yo=t(Du),To=t(" $ "),Eo=s("br"),ko=t(`
    $ \\quad = C \\sum_`),Ro=t(ju),Mo=t("^"),So=t(Pu),Bo=t(`
    \\frac`),Io=t(Hu),No=t(Fu),Ao=t("$"),Bn=k(),$t=s("h1"),Oo=t("Kernel Generalisations"),In=k(),ne=s("section"),nn=s("h2"),Lo=t("RBF $\\rightarrow$ Matern"),Ko=k(),P=s("div"),Co=t(`The RBF kernel is defined as
    `),Do=s("br"),jo=t(" $$ k(x,x') = \\exp\\left(-\\frac"),Po=t(qu),Ho=t(Wu),Fo=t(`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),qo=s("br"),Wo=t(`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),Xo=s("br"),Yo=t(" $$ k(x,x') = \\frac"),Uo=t(Xu),Go=t(Yu),zo=t("\\left(\\frac"),Vo=t(Uu),Jo=t(Gu),Zo=t(`\\right)^\\nu
    K_`),Qo=t(zu),eh=t("\\left(\\frac"),th=t(Vu),nh=t(Ju),ih=t(`\\right) $$ where
    $K_`),ah=t(Zu),lh=t(`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),sh=k(),an=s("h3"),rh=t("Intuition"),oh=k(),ee=s("div"),hh=t(`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),ch=s("br"),uh=k(),dh=s("br"),fh=t(`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),ph=s("br"),_h=t(`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),gh=s("br"),mh=k(),bh=s("br"),xh=t(`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),$h=s("br"),wh=k(),ut=s("div"),ln=s("h4"),vh=t("Special Cases"),yh=k(),$e=s("ul"),qe=s("li"),sn=s("b"),Th=t("nu = 0.5:"),Eh=t(" Matern reduces to $e^"),kh=t(Qu),Rh=t("$ i.e exponential distance"),Mh=k(),We=s("li"),rn=s("b"),Sh=t("nu = 1.5:"),Bh=t(" Matern reduces to $(1+ \\sqrt(3) d) e^"),Ih=t(ed),Nh=t("$"),Ah=k(),we=s("li"),on=s("b"),Oh=t("nu = 2.5:"),Lh=t(" Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Kh=t(td),Ch=t(nd),Dh=t(" d^2) e^"),jh=t(id),Ph=t("$"),Hh=k(),Xe=s("li"),hn=s("b"),Fh=t("nu = $\\infty$"),qh=t(" Matern reduces to $e^"),Wh=t(ad),Xh=t(`$ i.e RBF
        kernel`),this.h()},l(f){a=r(f,"H1",{class:!0});var D=m(a);l=n(D,"Kernel Functions Mechanism"),D.forEach(o),g=R(f),y=r(f,"SECTION",{class:!0});var An=m(y);_=r(An,"H2",{});var ld=m(_);u=n(ld,"Regression"),ld.forEach(o),d=R(An),h=r(An,"P",{});var pe=m(h);S=n(pe,`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),L=r(pe,"BR",{}),z=n(pe,`
    $$ Y = w^T X $$ We do this simply by defining the loss function as the sum of
    squared errors and minimizing it with respect to $w$. We can write this as
    `),H=r(pe,"BR",{}),ye=n(pe,`
    $$ J(w) = \\min_w \\sum_`),ce=n(pe,_e),Je=n(pe,`^n (y_i - w^T x_i)^2 $$ Solving this for $w$
    gives us `),Ae=r(pe,"BR",{}),kt=n(pe,`
    $$ w = (X^T X)^`),Oe=n(pe,Rt),Mt=n(pe," X^T Y $$"),pe.forEach(o),An.forEach(o),pt=R(f),ge=r(f,"SECTION",{class:!0});var On=m(ge);Ze=r(On,"H2",{});var sd=m(Ze);ue=n(sd,"Non Linearity"),sd.forEach(o),_t=R(On),Y=r(On,"P",{});var le=m(Y);St=n(le,`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),Bt=r(le,"BR",{}),Le=n(le,`
    $$ Y = w^T \\phi(X) $$ We can then also write the weight matrix as `),It=r(le,"BR",{}),p=n(le,`
    $$ w^* = (\\phi^T \\phi)^`),A=n(le,M),K=n(le,` \\phi^T Y $$ Let us introduce a regularization
    term $\\lambda$ such that the weight matrix is `),q=r(le,"BR",{}),te=n(le,`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),Ke=n(le,me),Z=n(le,` \\phi^T Y $$ The logic behind adding
    a regularization term is that we want to penalise the slope of the line. This
    is because we want to avoid overfitting. Adding bias results in a lower variance
    which makes the outputs less sensitive to the inputs. The parameter $\\lambda$
    is what controls the amount of bias we want to add
    `),de=r(le,"BR",{}),gt=n(le,`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),le.forEach(o),On.forEach(o),Qe=R(f),fe=r(f,"DETAILS",{class:!0});var Ln=m(fe);Te=r(Ln,"SUMMARY",{id:!0});var Kn=m(Te);Ce=r(Kn,"H2",{class:!0});var rd=m(Ce);Nt=n(rd,"Restructuring the Weight Matrix"),rd.forEach(o),De=R(Kn),V=r(Kn,"DIV",{class:!0});var ve=m(V);ae=r(ve,"B",{});var od=m(ae);At=n(od,"Result:"),od.forEach(o),et=R(ve),B=r(ve,"BR",{}),mt=n(ve,`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),C=n(ve,W),je=n(ve," \\phi^T Y $ → "),be=r(ve,"BR",{}),tt=n(ve,` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),b=n(ve,bt),E=n(ve," Y $"),ve.forEach(o),Kn.forEach(o),I=R(Ln),c=r(Ln,"P",{});var T=m(c);U=n(T,"Let us now define the new loss function along with a regularization term "),se=r(T,"BR",{}),Ot=n(T,`
    $$ J(w) = \\min_w \\sum_`),ti=n(T,vn),ni=n(T,"^n (y_i - w^T \\phi(x_i))^2 + \\frac"),ii=n(T,ic),ai=n(T,ac),li=n(T,`
    ||w||^2 $$ We can now solve for $w$ and get `),si=r(T,"BR",{}),ri=n(T,`
    $$ w^* = \\frac`),oi=n(T,lc),hi=n(T,sc),ci=n(T," \\sum_"),ui=n(T,rc),di=n(T,`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ For sake of simplicity let us define a variable $\\alpha$ such
    that `),fi=r(T,"BR",{}),pi=n(T,`
    $$ \\alpha = \\frac`),_i=n(T,oc),gi=n(T,hc),mi=n(T," \\sum_"),bi=n(T,cc),xi=n(T,`^n (y_i - w^T
    \\phi(x_i)) $$ We can now write the weight matrix as `),$i=r(T,"BR",{}),wi=n(T,`
    $$ w^* = \\sum_`),vi=n(T,uc),yi=n(T,`^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ Let us now
    substitute this into the loss function and get `),Ti=r(T,"BR",{}),Ei=n(T,`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),ki=n(T,dc),Ri=n(T,fc),Mi=n(T,`
    w^T w $$ expanding and simplifying this will give us `),Si=r(T,"BR",{}),Bi=n(T,`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),Ii=n(T,pc),Ni=n(T,_c),Ai=n(T,` w^T w $$ We can see that $\\phi
    \\phi^T$ is a repeated term. Let us define this new matrix as $K$ such that $$
    K = \\phi \\phi^T = \\begin`),Oi=n(T,gc),Li=n(T,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Ki=n(T,mc),Ci=n(T,` $$ This matrix has two very
    important properties. First, it is symmetric and second, it is positive semi-definite.
    (This also means it is invertible which $\\phi^T \\phi$ MAY NOT). We can substitute
    all $\\phi \\phi^T$ with $K$ and also $K$ with $K^T$ and get `),Di=r(T,"BR",{}),ji=n(T,`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),Pi=n(T,bc),Hi=n(T,xc),Fi=n(T,`
    \\alpha^T K \\alpha $$ Seeting the derivative of this with respect to $\\alpha$
    to zero and solving for $\\alpha$ gives us (along with $K = \\phi \\phi^T$)
    `),qi=r(T,"BR",{}),Wi=n(T,`
    $$ \\alpha* = (K + \\frac`),Xi=n(T,$c),Yi=n(T,wc),Ui=n(T," I)^"),Gi=n(T,vc),zi=n(T,` y $$ or $$ \\alpha* =
    (K + \\lambda' I)^`),Vi=n(T,yc),Ji=n(T,` y $$ We have achieved in this section effectively converting
    one equation to another as follows `),Zi=r(T,"BR",{}),Qi=n(T,`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),ea=n(T,Tc),ta=n(T," \\phi^T Y $$ into "),na=r(T,"BR",{}),ia=n(T,`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),aa=n(T,Ec),la=n(T,` Y $$ By the looks of it we may not
    have done anything, but as we will see in the next section, this step will reduce
    the computation time by a lot.`),T.forEach(o),Ln.forEach(o),yn=R(f),Re=r(f,"SECTION",{class:!0});var Cn=m(Re);Lt=r(Cn,"H2",{});var hd=m(Lt);sa=n(hd,"Mercer's Theorem"),hd.forEach(o),ra=R(Cn),J=r(Cn,"P",{});var ie=m(J);oa=n(ie,`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),ha=r(ie,"BR",{}),ca=n(ie,`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),ua=r(ie,"BR",{}),da=n(ie,`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),fa=r(ie,"BR",{}),pa=n(ie,`
    $$ \\begin`),_a=n(ie,kc),ga=n(ie,` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),ma=n(ie,Rc),ba=n(ie,` $$ is positive semi-definite for any
    collection $`),xa=n(ie,Mc),$a=n(ie,`$
    `),wa=r(ie,"BR",{}),ie.forEach(o),Cn.forEach(o),Tn=R(f),re=r(f,"SECTION",{class:!0});var Ye=m(re);Kt=r(Ye,"H2",{});var cd=m(Kt);va=n(cd,"The Kernel Trick"),cd.forEach(o),ya=R(Ye),oe=r(Ye,"P",{});var Ee=m(oe);Ta=n(Ee,`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),Ea=n(Ee,Sc),ka=n(Ee,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Ra=n(Ee,Bc),Ma=n(Ee," = \\begin"),Sa=n(Ee,Ic),Ba=n(Ee,`
    k(x_1, x_1) & k(x_1, x_2) & \\cdots & k(x_1, x_n) \\\\ k(x_2, x_1) & k(x_2, x_2)
    & \\cdots & k(x_2, x_n) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ k(x_n, x_1) &
    k(x_n, x_2) & \\cdots & k(x_n, x_n) \\end`),Ia=n(Ee,Nc),Na=n(Ee," $$"),Ee.forEach(o),Aa=R(Ye),Pe=r(Ye,"UL",{class:!0});var Dn=m(Pe);Ct=r(Dn,"LI",{});var ud=m(Ct);Oa=n(ud,"First: $K$ is symmetric"),ud.forEach(o),La=R(Dn),Dt=r(Dn,"LI",{});var dd=m(Dt);Ka=n(dd,`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),dd.forEach(o),Dn.forEach(o),Ca=R(Ye),jt=r(Ye,"P",{});var fd=m(jt);Da=n(fd,`So as long as we know the Kernel (which we can either choose or learn), we
    can compute the Kernel matrix and use it to solve for $\\alpha$ and then
    compute $w^*$ efficiently`),fd.forEach(o),Ye.forEach(o),En=R(f),Me=r(f,"SECTION",{class:!0});var jn=m(Me);Pt=r(jn,"H2",{});var pd=m(Pt);ja=n(pd,"Working Example"),pd.forEach(o),Pa=R(jn),x=r(jn,"P",{});var w=m(x);Ha=n(w,"Consider the following mapping $$ \\phi: x \\rightarrow \\phi(x) = \\begin"),Fa=n(w,Ac),qa=n(w,`
    x_1^2 \\\\ \\sqrt`),Wa=n(w,Oc),Xa=n(w," x_1 x_2 \\\\ x_2^2 \\end"),Ya=n(w,Lc),Ua=n(w,` $$ Let us for sake of
    demonstration work out its kernel `),Ga=r(w,"BR",{}),za=n(w,`
    $$ \\phi^T(x_m) \\phi(x_n) = \\begin`),Va=n(w,Kc),Ja=n(w," x_"),Za=n(w,Cc),Qa=n(w,"^2 & \\sqrt"),el=n(w,Dc),tl=n(w," x_"),nl=n(w,jc),il=n(w,`
    x_`),al=n(w,Pc),ll=n(w," & x_"),sl=n(w,Hc),rl=n(w,"^2 \\end"),ol=n(w,Fc),hl=n(w," \\begin"),cl=n(w,qc),ul=n(w," x_"),dl=n(w,Wc),fl=n(w,`^2
    \\\\ \\sqrt`),pl=n(w,Xc),_l=n(w," x_"),gl=n(w,Yc),ml=n(w," x_"),bl=n(w,Uc),xl=n(w," \\\\ x_"),$l=n(w,Gc),wl=n(w,"^2 \\end"),vl=n(w,zc),yl=n(w,`
    = x_`),Tl=n(w,Vc),El=n(w,"^2 x_"),kl=n(w,Jc),Rl=n(w,"^2 + 2 x_"),Ml=n(w,Zc),Sl=n(w," x_"),Bl=n(w,Qc),Il=n(w," x_"),Nl=n(w,eu),Al=n(w," x_"),Ol=n(w,tu),Ll=n(w,`
    + x_`),Kl=n(w,nu),Cl=n(w,"^2 x_"),Dl=n(w,iu),jl=n(w,"^2 $$ "),Pl=r(w,"BR",{}),Hl=n(w,`
    Clearly $$ \\phi^T(x_m) \\phi(x_n) = (x_`),Fl=n(w,au),ql=n(w,`
    x_`),Wl=n(w,lu),Xl=n(w," + x_"),Yl=n(w,su),Ul=n(w," x_"),Gl=n(w,ru),zl=n(w,`)^2 = (x_m^T x_n)^2 = k(x_m, x_n) $$
    This is an example of a Kernel called the `),Ht=r(w,"B",{});var _d=m(Ht);Vl=n(_d,"Polynomial Kernel"),_d.forEach(o),Jl=n(w,` which is
    defined as $$ k(x, y) = (x^T y + r)^d $$ making in our case the parameters
    $d = 2$ and $r = 0$ `),Zl=r(w,"BR",{}),w.forEach(o),jn.forEach(o),kn=R(f),Se=r(f,"SECTION",{class:!0});var Pn=m(Se);Ft=r(Pn,"H2",{});var gd=m(Ft);Ql=n(gd,"Making Predictions"),gd.forEach(o),es=R(Pn),G=r(Pn,"P",{});var Q=m(G);ts=n(Q,`We can now make predictions using the Kernel trick. We can use the following
    equation to make predictions with $ y = w^T \\phi(x) $ But as we have seen
    above we can convert the RHS from
    `),ns=r(Q,"BR",{}),is=n(Q,"$$ w^T \\phi(x) = y(\\phi \\phi^T + \\lambda' I)^"),as=n(Q,ou),ls=n(Q,` \\phi^T \\phi(x) $$
    to `),ss=r(Q,"BR",{}),rs=n(Q," $$ w^T \\phi(x) = y(K + \\lambda' I)^"),os=n(Q,hu),hs=n(Q,` k_x $$ where $k_x$ is
    `),cs=r(Q,"BR",{}),us=n(Q,`
    $$ k_x = \\phi^T \\phi(x) = \\begin`),ds=n(Q,cu),fs=n(Q,` \\phi(x_1)^T \\phi(x) \\\\ \\phi(x_2)^T
    \\phi(x) \\\\ \\vdots \\\\ \\phi(x_n)^T \\phi(x) \\end`),ps=n(Q,uu),_s=n(Q,` $$ And our result
    is completely independent of the mapping $\\phi$ and only depends on the Kernel
    $k$ and the data $X$ and $Y$ `),gs=r(Q,"BR",{}),Q.forEach(o),Pn.forEach(o),Rn=R(f),N=r(f,"SECTION",{class:!0});var O=m(N);qt=r(O,"H2",{});var md=m(qt);ms=n(md,"Applying the Kernel Trick to the SVM"),md.forEach(o),bs=R(O),nt=r(O,"P",{});var Hn=m(nt);xs=n(Hn,`As we know an SVM is a machine that can classify data by finding a
    hyperplane that separates the data into two classes. The SVM is a linear
    classifier, which means that it can only classify data that is linearly
    separable. But most data in the real world is not linear and so we need to
    use a non-linear classifier. The work around for that is that we first apply
    a non linear transformation to the data and then use a linear classifier to
    classify the transformed data. `),$s=r(Hn,"BR",{}),ws=n(Hn,`
    Let us look at how we do that for a simple case`),Hn.forEach(o),vs=R(O),gn(it.$$.fragment,O),ys=R(O),He=r(O,"IMG",{class:!0,src:!0,height:!0,width:!0}),Ts=R(O),at=r(O,"P",{});var Fn=m(at);Es=n(Fn,`While in an ideal world we should be able to stop here and call it a day, in
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
    `),ks=r(Fn,"BR",{}),Rs=n(Fn," $$k(x_i, x_j) := f(x_i)^T f(x_j) $$"),Fn.forEach(o),Ms=R(O),Wt=r(O,"H3",{});var bd=m(Wt);Ss=n(bd,"Examples"),bd.forEach(o),Bs=R(O),Xt=r(O,"H4",{});var xd=m(Xt);Is=n(xd,"Linear Kernel"),xd.forEach(o),Ns=R(O),lt=r(O,"P",{});var qn=m(lt);As=n(qn,`Let us say the transform we intend to make is $f(x) = x$ i.e the identity
    transform. Then the kernel function is
    `),Os=r(qn,"BR",{}),Ls=n(qn," $$ k(x_i, x_j) = x_i^T x_j $$ With the call"),qn.forEach(o),Ks=R(O),gn(st.$$.fragment,O),Cs=R(O),Yt=r(O,"P",{});var $d=m(Yt);Ds=n($d,`The linear kernel gives us a flat decision boundary as expected, it can only
    make a straight line through the data without any transforms.`),$d.forEach(o),js=R(O),Ut=r(O,"H4",{});var wd=m(Ut);Ps=n(wd,"Polynomial Kernel"),wd.forEach(o),Hs=R(O),rt=r(O,"P",{});var Wn=m(rt);Fs=n(Wn,`Let us say the non linear transform we intend to make is $f(x) = (x_1, x_2,
    x_1x_2, x_1^2 ,x_2^2)$ i.e the polynomial transform. Then the kernel
    function is
    `),qs=r(Wn,"BR",{}),Ws=n(Wn," $$k(x_i, x_j) = (1 + x_i^T x_j)^2 $$ With the call"),Wn.forEach(o),Xs=R(O),gn(ot.$$.fragment,O),Ys=R(O),Gt=r(O,"P",{});var vd=m(Gt);Us=n(vd,`The polynomial kernel gives us a curved decision boundary as expected, this
    is equivalent to first making an ideal transform before hand of the type
    $c_0 + c_1x_1 + c_2x_2 + c_3x_1x_2 + c_4x_1^2 + c_5x_2^2$ for some values
    $c_i$ and then using the linear kernel on the transformed data. The Kernel
    function here lets us find the relations between the values as if we had
    done the transform before hand without actually doing the transform.`),vd.forEach(o),Gs=R(O),zt=r(O,"H4",{});var yd=m(zt);zs=n(yd,"RBF Kernel"),yd.forEach(o),Vs=R(O),ht=r(O,"P",{});var Xn=m(ht);Js=n(Xn,`What if we were to have a function for whom the transform were extremely
    difficult or impossible to calculate even in an approximate case, one such
    example is the Radial Basis Function (RBF) kernel. The RBF kernel is defined
    as
    `),Zs=r(Xn,"BR",{}),Qs=n(Xn,`
    $$ k(x_i, x_j) = \\exp(-\\gamma ||x_i - x_j||^2) $$ With the call`),Xn.forEach(o),er=R(O),gn(ct.$$.fragment,O),tr=R(O),xe=r(O,"P",{});var Ue=m(xe);nr=n(Ue,`It turns out that the transform needed before hand for an RBF is infinite
    dimensional, i.e it looks like
    `),ir=r(Ue,"BR",{}),ar=n(Ue,`
    $$ f(x) = (\\text`),lr=n(Ue,fu),sr=n(Ue,`) $$ Notice how being basically
    impossible to calculate, we can still use the RBF kernel to find the
    relations between the points.
    `),Vt=r(Ue,"B",{});var Td=m(Vt);rr=n(Td,"Note:"),Td.forEach(o),or=n(Ue,` Gamma is a hyper parameter that controls the width of the RBF kernel.
    The smaller the gamma the wider the Kernel is therefore making it closer to a
    linear kernel. The larger the gamma the narrower the Kernel is therefore making
    it closer to a polynomial kernel of arbitrary degree. (See Proof in last section)`),Ue.forEach(o),O.forEach(o),Mn=R(f),Be=r(f,"SECTION",{class:!0});var Yn=m(Be);Jt=r(Yn,"H2",{});var Ed=m(Jt);hr=n(Ed,"Comparison with SINDy"),Ed.forEach(o),cr=R(Yn),Fe=r(Yn,"DIV",{});var cn=m(Fe);ur=n(cn,`This method is different from SINDy because SINDy usually aims to find the
    exact equations of the least number of degrees of freedom in any given
    system. We don't aim to do that. SINDy will not be able to convert a text
    description to an image. We want an arbitrary classifier that can be applied
    to any data set. SINDy would be much more suitable for a physical system
    where physics modelling is needed, ML is not needed for that and does not
    aim to solve those problems in the first place.
    `),dr=r(cn,"BR",{}),fr=n(cn,`
    ML however can be used in places where even the Non Linear systems don't have
    a closed form solution and we want to predict the state at some far time t beyond
    the chaos boundary. The results, models or even the architectures of the ML models
    used here are however not well studied and is an active area of research.
    `),Ie=r(cn,"UL",{});var wt=m(Ie);Zt=r(wt,"LI",{});var kd=m(Zt);pr=n(kd,`It is possible however that even for a given SINDy model, the ML model
        has lower computational requirements and thus is better used despite not
        being as accurate. A real world example was seen in Tesla Motors Inc
        where when calculating the current level of a battery it proved to be
        simpler to just use an ML model on the raw voltage than actually add
        physical resistors and model the complex interactions of all different
        sections, heat profiles and retentivities of the battery.`),kd.forEach(o),_r=R(wt),Qt=r(wt,"LI",{});var Rd=m(Qt);gr=n(Rd,`As mentioned above, we have seen in Kadierdan et al CDC 2019, that SINDy
        can be very accurately used to model, and therefore balance an inverted
        vertical double pendulum. It however also turns out that SINDy is good
        at small specific classes of tasks and should be used for as such, it
        generalists very poorly as was seen in the modelling of Nuclear Fusion
        where fusion control is done much better with DeepMind's new model, we
        see that they're able to not only model and predict the gas plume
        behaviour but also control it. This is a much more complex task than the
        simple double pendulum and so it is not surprising that SINDy fails
        here. This is also a good example of how ML can be used to solve
        problems that are not solvable by SINDy.`),Rd.forEach(o),mr=R(wt),en=r(wt,"LI",{});var Md=m(en);br=n(Md,`SINDy aims to find a simple model such that it is EXPLAINABLE. The
        latter being the more important part, in ML the model has no constraint
        on being explainable and is very happy being a black box in interest of
        which it has no constraints on what forms it can take, therefore
        structurally it can be much more complex than a SINDy model. This is a
        good thing because it allows us to model much more complex systems, but
        it is also a bad thing because it makes it harder to explain the model
        and thus harder to trust it. In interest of this ability to Generalise,
        in 2011 NASA switched to ML for aircraft engine premptive fault
        detection and in 2015 for drought prediction in the ECOSTRESS mission,
        both areas which were traditionally left to modelling.`),Md.forEach(o),wt.forEach(o),cn.forEach(o),Yn.forEach(o),Sn=R(f),Ne=r(f,"DETAILS",{class:!0});var Un=m(Ne);tn=r(Un,"SUMMARY",{});var Sd=m(tn);xt=r(Sd,"H2",{class:!0});var Bd=m(xt);xr=n(Bd,"Proof of RBF Kernel's Dimensionality"),Bd.forEach(o),Sd.forEach(o),$r=R(Un),$=r(Un,"DIV",{});var v=m($);wr=n(v,"$ k(x_i, x_j) $ "),vr=r(v,"BR",{}),yr=n(v,`
    $ \\quad = \\exp(-\\frac`),Tr=n(v,pu),Er=n(v,_u),kr=n(v,` ||x_i - x_j||^2)$
    `),Rr=r(v,"BR",{}),Mr=n(v,`
    $ \\quad = \\exp(-\\frac`),Sr=n(v,gu),Br=n(v,mu),Ir=n(v,`
    \\langle x_i - x_j\\rangle^T \\langle x_i - x_j\\rangle) $ `),Nr=r(v,"BR",{}),Ar=n(v,`
    $ \\quad = \\exp(-\\frac`),Or=n(v,bu),Lr=n(v,xu),Kr=n(v,`
    (\\langle x_i, x_i - x_j\\rangle - \\langle x_j, x_i - x_j\\rangle)) $ `),Cr=r(v,"BR",{}),Dr=n(v,`
    $ \\quad = \\exp(-\\frac`),jr=n(v,$u),Pr=n(v,wu),Hr=n(v,`
    (\\langle x_i, x_i\\rangle - \\langle x_i, x_j\\rangle - \\langle x_j, x_i\\rangle
    + \\langle x_j, x_j\\rangle)) $ `),Fr=r(v,"BR",{}),qr=n(v,`
    $ \\quad = \\exp(-\\frac`),Wr=n(v,vu),Xr=n(v,yu),Yr=n(v,` (||x_i||^2 - 2\\langle x_i, x_j\\rangle + ||x_j||^2))
    $ `),Ur=r(v,"BR",{}),Gr=n(v,`
    $ \\quad = \\exp[-\\frac`),zr=n(v,Tu),Vr=n(v,Eu),Jr=n(v,`
    ||x_i||^2 - \\frac`),Zr=n(v,ku),Qr=n(v,Ru),eo=n(v," ||x_j||^2] \\exp(\\langle x_i, x_j\\rangle) $"),to=r(v,"BR",{}),no=n(v,`
    $ \\quad = C e^`),io=n(v,Mu),ao=n(v,`
    \\quad \\quad \\text`),lo=n(v,Su),so=n(v," C = \\exp(-\\frac"),ro=n(v,Bu),oo=n(v,Iu),ho=n(v," ||x_i||^2 - \\frac"),co=n(v,Nu),uo=n(v,Au),fo=n(v,`
    ||x_j||^2) $ `),po=r(v,"BR",{}),_o=n(v," $ \\quad = C \\sum_"),go=n(v,Ou),mo=n(v,"^"),bo=n(v,Lu),xo=n(v," \\frac"),$o=n(v,Ku),wo=n(v,Cu),vo=n(v,`
    \\quad \\quad \\text`),yo=n(v,Du),To=n(v," $ "),Eo=r(v,"BR",{}),ko=n(v,`
    $ \\quad = C \\sum_`),Ro=n(v,ju),Mo=n(v,"^"),So=n(v,Pu),Bo=n(v,`
    \\frac`),Io=n(v,Hu),No=n(v,Fu),Ao=n(v,"$"),v.forEach(o),Un.forEach(o),Bn=R(f),$t=r(f,"H1",{});var Id=m($t);Oo=n(Id,"Kernel Generalisations"),Id.forEach(o),In=R(f),ne=r(f,"SECTION",{class:!0});var ke=m(ne);nn=r(ke,"H2",{});var Nd=m(nn);Lo=n(Nd,"RBF $\\rightarrow$ Matern"),Nd.forEach(o),Ko=R(ke),P=r(ke,"DIV",{});var F=m(P);Co=n(F,`The RBF kernel is defined as
    `),Do=r(F,"BR",{}),jo=n(F," $$ k(x,x') = \\exp\\left(-\\frac"),Po=n(F,qu),Ho=n(F,Wu),Fo=n(F,`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),qo=r(F,"BR",{}),Wo=n(F,`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),Xo=r(F,"BR",{}),Yo=n(F," $$ k(x,x') = \\frac"),Uo=n(F,Xu),Go=n(F,Yu),zo=n(F,"\\left(\\frac"),Vo=n(F,Uu),Jo=n(F,Gu),Zo=n(F,`\\right)^\\nu
    K_`),Qo=n(F,zu),eh=n(F,"\\left(\\frac"),th=n(F,Vu),nh=n(F,Ju),ih=n(F,`\\right) $$ where
    $K_`),ah=n(F,Zu),lh=n(F,`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),F.forEach(o),sh=R(ke),an=r(ke,"H3",{});var Ad=m(an);rh=n(Ad,"Intuition"),Ad.forEach(o),oh=R(ke),ee=r(ke,"DIV",{});var he=m(ee);hh=n(he,`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),ch=r(he,"BR",{}),uh=R(he),dh=r(he,"BR",{}),fh=n(he,`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),ph=r(he,"BR",{}),_h=n(he,`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),gh=r(he,"BR",{}),mh=R(he),bh=r(he,"BR",{}),xh=n(he,`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),$h=r(he,"BR",{}),he.forEach(o),wh=R(ke),ut=r(ke,"DIV",{});var Gn=m(ut);ln=r(Gn,"H4",{});var Od=m(ln);vh=n(Od,"Special Cases"),Od.forEach(o),yh=R(Gn),$e=r(Gn,"UL",{});var Ge=m($e);qe=r(Ge,"LI",{});var un=m(qe);sn=r(un,"B",{});var Ld=m(sn);Th=n(Ld,"nu = 0.5:"),Ld.forEach(o),Eh=n(un," Matern reduces to $e^"),kh=n(un,Qu),Rh=n(un,"$ i.e exponential distance"),un.forEach(o),Mh=R(Ge),We=r(Ge,"LI",{});var dn=m(We);rn=r(dn,"B",{});var Kd=m(rn);Sh=n(Kd,"nu = 1.5:"),Kd.forEach(o),Bh=n(dn," Matern reduces to $(1+ \\sqrt(3) d) e^"),Ih=n(dn,ed),Nh=n(dn,"$"),dn.forEach(o),Ah=R(Ge),we=r(Ge,"LI",{});var ze=m(we);on=r(ze,"B",{});var Cd=m(on);Oh=n(Cd,"nu = 2.5:"),Cd.forEach(o),Lh=n(ze," Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Kh=n(ze,td),Ch=n(ze,nd),Dh=n(ze," d^2) e^"),jh=n(ze,id),Ph=n(ze,"$"),ze.forEach(o),Hh=R(Ge),Xe=r(Ge,"LI",{});var fn=m(Xe);hn=r(fn,"B",{});var Dd=m(hn);Fh=n(Dd,"nu = $\\infty$"),Dd.forEach(o),qh=n(fn," Matern reduces to $e^"),Wh=n(fn,ad),Xh=n(fn,`$ i.e RBF
        kernel`),fn.forEach(o),Ge.forEach(o),Gn.forEach(o),ke.forEach(o),this.h()},h(){X(a,"class","w-100 mx-a"),X(y,"class","svelte-2crdhv"),X(ge,"class","svelte-2crdhv"),X(Ce,"class","d-ib m5"),X(V,"class","mx-a"),X(Te,"id","proof"),fe.open=!0,X(fe,"class","svelte-2crdhv"),X(Re,"class","svelte-2crdhv"),X(Pe,"class","d-ib"),X(re,"class","svelte-2crdhv"),X(Me,"class","svelte-2crdhv"),X(Se,"class","svelte-2crdhv"),X(He,"class","mx-a rx10"),xf(He.src,du="https://i.imgur.com/V6IWaD2.png")||X(He,"src",du),X(He,"height","400px"),X(He,"width","400px"),X(N,"class","svelte-2crdhv"),X(Be,"class","svelte-2crdhv"),X(xt,"class","d-ib m5"),X(Ne,"class","svelte-2crdhv"),X(ne,"class","svelte-2crdhv")},m(f,D){j(f,a,D),e(a,l),j(f,g,D),j(f,y,D),e(y,_),e(_,u),e(y,d),e(y,h),e(h,S),e(h,L),e(h,z),e(h,H),e(h,ye),e(h,ce),e(h,Je),e(h,Ae),e(h,kt),e(h,Oe),e(h,Mt),j(f,pt,D),j(f,ge,D),e(ge,Ze),e(Ze,ue),e(ge,_t),e(ge,Y),e(Y,St),e(Y,Bt),e(Y,Le),e(Y,It),e(Y,p),e(Y,A),e(Y,K),e(Y,q),e(Y,te),e(Y,Ke),e(Y,Z),e(Y,de),e(Y,gt),j(f,Qe,D),j(f,fe,D),e(fe,Te),e(Te,Ce),e(Ce,Nt),e(Te,De),e(Te,V),e(V,ae),e(ae,At),e(V,et),e(V,B),e(V,mt),e(V,C),e(V,je),e(V,be),e(V,tt),e(V,b),e(V,E),e(fe,I),e(fe,c),e(c,U),e(c,se),e(c,Ot),e(c,ti),e(c,ni),e(c,ii),e(c,ai),e(c,li),e(c,si),e(c,ri),e(c,oi),e(c,hi),e(c,ci),e(c,ui),e(c,di),e(c,fi),e(c,pi),e(c,_i),e(c,gi),e(c,mi),e(c,bi),e(c,xi),e(c,$i),e(c,wi),e(c,vi),e(c,yi),e(c,Ti),e(c,Ei),e(c,ki),e(c,Ri),e(c,Mi),e(c,Si),e(c,Bi),e(c,Ii),e(c,Ni),e(c,Ai),e(c,Oi),e(c,Li),e(c,Ki),e(c,Ci),e(c,Di),e(c,ji),e(c,Pi),e(c,Hi),e(c,Fi),e(c,qi),e(c,Wi),e(c,Xi),e(c,Yi),e(c,Ui),e(c,Gi),e(c,zi),e(c,Vi),e(c,Ji),e(c,Zi),e(c,Qi),e(c,ea),e(c,ta),e(c,na),e(c,ia),e(c,aa),e(c,la),j(f,yn,D),j(f,Re,D),e(Re,Lt),e(Lt,sa),e(Re,ra),e(Re,J),e(J,oa),e(J,ha),e(J,ca),e(J,ua),e(J,da),e(J,fa),e(J,pa),e(J,_a),e(J,ga),e(J,ma),e(J,ba),e(J,xa),e(J,$a),e(J,wa),j(f,Tn,D),j(f,re,D),e(re,Kt),e(Kt,va),e(re,ya),e(re,oe),e(oe,Ta),e(oe,Ea),e(oe,ka),e(oe,Ra),e(oe,Ma),e(oe,Sa),e(oe,Ba),e(oe,Ia),e(oe,Na),e(re,Aa),e(re,Pe),e(Pe,Ct),e(Ct,Oa),e(Pe,La),e(Pe,Dt),e(Dt,Ka),e(re,Ca),e(re,jt),e(jt,Da),j(f,En,D),j(f,Me,D),e(Me,Pt),e(Pt,ja),e(Me,Pa),e(Me,x),e(x,Ha),e(x,Fa),e(x,qa),e(x,Wa),e(x,Xa),e(x,Ya),e(x,Ua),e(x,Ga),e(x,za),e(x,Va),e(x,Ja),e(x,Za),e(x,Qa),e(x,el),e(x,tl),e(x,nl),e(x,il),e(x,al),e(x,ll),e(x,sl),e(x,rl),e(x,ol),e(x,hl),e(x,cl),e(x,ul),e(x,dl),e(x,fl),e(x,pl),e(x,_l),e(x,gl),e(x,ml),e(x,bl),e(x,xl),e(x,$l),e(x,wl),e(x,vl),e(x,yl),e(x,Tl),e(x,El),e(x,kl),e(x,Rl),e(x,Ml),e(x,Sl),e(x,Bl),e(x,Il),e(x,Nl),e(x,Al),e(x,Ol),e(x,Ll),e(x,Kl),e(x,Cl),e(x,Dl),e(x,jl),e(x,Pl),e(x,Hl),e(x,Fl),e(x,ql),e(x,Wl),e(x,Xl),e(x,Yl),e(x,Ul),e(x,Gl),e(x,zl),e(x,Ht),e(Ht,Vl),e(x,Jl),e(x,Zl),j(f,kn,D),j(f,Se,D),e(Se,Ft),e(Ft,Ql),e(Se,es),e(Se,G),e(G,ts),e(G,ns),e(G,is),e(G,as),e(G,ls),e(G,ss),e(G,rs),e(G,os),e(G,hs),e(G,cs),e(G,us),e(G,ds),e(G,fs),e(G,ps),e(G,_s),e(G,gs),j(f,Rn,D),j(f,N,D),e(N,qt),e(qt,ms),e(N,bs),e(N,nt),e(nt,xs),e(nt,$s),e(nt,ws),e(N,vs),mn(it,N,null),e(N,ys),e(N,He),e(N,Ts),e(N,at),e(at,Es),e(at,ks),e(at,Rs),e(N,Ms),e(N,Wt),e(Wt,Ss),e(N,Bs),e(N,Xt),e(Xt,Is),e(N,Ns),e(N,lt),e(lt,As),e(lt,Os),e(lt,Ls),e(N,Ks),mn(st,N,null),e(N,Cs),e(N,Yt),e(Yt,Ds),e(N,js),e(N,Ut),e(Ut,Ps),e(N,Hs),e(N,rt),e(rt,Fs),e(rt,qs),e(rt,Ws),e(N,Xs),mn(ot,N,null),e(N,Ys),e(N,Gt),e(Gt,Us),e(N,Gs),e(N,zt),e(zt,zs),e(N,Vs),e(N,ht),e(ht,Js),e(ht,Zs),e(ht,Qs),e(N,er),mn(ct,N,null),e(N,tr),e(N,xe),e(xe,nr),e(xe,ir),e(xe,ar),e(xe,lr),e(xe,sr),e(xe,Vt),e(Vt,rr),e(xe,or),j(f,Mn,D),j(f,Be,D),e(Be,Jt),e(Jt,hr),e(Be,cr),e(Be,Fe),e(Fe,ur),e(Fe,dr),e(Fe,fr),e(Fe,Ie),e(Ie,Zt),e(Zt,pr),e(Ie,_r),e(Ie,Qt),e(Qt,gr),e(Ie,mr),e(Ie,en),e(en,br),j(f,Sn,D),j(f,Ne,D),e(Ne,tn),e(tn,xt),e(xt,xr),e(Ne,$r),e(Ne,$),e($,wr),e($,vr),e($,yr),e($,Tr),e($,Er),e($,kr),e($,Rr),e($,Mr),e($,Sr),e($,Br),e($,Ir),e($,Nr),e($,Ar),e($,Or),e($,Lr),e($,Kr),e($,Cr),e($,Dr),e($,jr),e($,Pr),e($,Hr),e($,Fr),e($,qr),e($,Wr),e($,Xr),e($,Yr),e($,Ur),e($,Gr),e($,zr),e($,Vr),e($,Jr),e($,Zr),e($,Qr),e($,eo),e($,to),e($,no),e($,io),e($,ao),e($,lo),e($,so),e($,ro),e($,oo),e($,ho),e($,co),e($,uo),e($,fo),e($,po),e($,_o),e($,go),e($,mo),e($,bo),e($,xo),e($,$o),e($,wo),e($,vo),e($,yo),e($,To),e($,Eo),e($,ko),e($,Ro),e($,Mo),e($,So),e($,Bo),e($,Io),e($,No),e($,Ao),j(f,Bn,D),j(f,$t,D),e($t,Oo),j(f,In,D),j(f,ne,D),e(ne,nn),e(nn,Lo),e(ne,Ko),e(ne,P),e(P,Co),e(P,Do),e(P,jo),e(P,Po),e(P,Ho),e(P,Fo),e(P,qo),e(P,Wo),e(P,Xo),e(P,Yo),e(P,Uo),e(P,Go),e(P,zo),e(P,Vo),e(P,Jo),e(P,Zo),e(P,Qo),e(P,eh),e(P,th),e(P,nh),e(P,ih),e(P,ah),e(P,lh),e(ne,sh),e(ne,an),e(an,rh),e(ne,oh),e(ne,ee),e(ee,hh),e(ee,ch),e(ee,uh),e(ee,dh),e(ee,fh),e(ee,ph),e(ee,_h),e(ee,gh),e(ee,mh),e(ee,bh),e(ee,xh),e(ee,$h),e(ne,wh),e(ne,ut),e(ut,ln),e(ln,vh),e(ut,yh),e(ut,$e),e($e,qe),e(qe,sn),e(sn,Th),e(qe,Eh),e(qe,kh),e(qe,Rh),e($e,Mh),e($e,We),e(We,rn),e(rn,Sh),e(We,Bh),e(We,Ih),e(We,Nh),e($e,Ah),e($e,we),e(we,on),e(on,Oh),e(we,Lh),e(we,Kh),e(we,Ch),e(we,Dh),e(we,jh),e(we,Ph),e($e,Hh),e($e,Xe),e(Xe,hn),e(hn,Fh),e(Xe,qh),e(Xe,Wh),e(Xe,Xh),Nn=!0},p:Uh,i(f){Nn||(yt(it.$$.fragment,f),yt(st.$$.fragment,f),yt(ot.$$.fragment,f),yt(ct.$$.fragment,f),Nn=!0)},o(f){Tt(it.$$.fragment,f),Tt(st.$$.fragment,f),Tt(ot.$$.fragment,f),Tt(ct.$$.fragment,f),Nn=!1},d(f){f&&o(a),f&&o(g),f&&o(y),f&&o(pt),f&&o(ge),f&&o(Qe),f&&o(fe),f&&o(yn),f&&o(Re),f&&o(Tn),f&&o(re),f&&o(En),f&&o(Me),f&&o(kn),f&&o(Se),f&&o(Rn),f&&o(N),bn(it),bn(st),bn(ot),bn(ct),f&&o(Mn),f&&o(Be),f&&o(Sn),f&&o(Ne),f&&o(Bn),f&&o($t),f&&o(In),f&&o(ne)}}}class Sp extends Gh{constructor(a){super(),zh(this,a,null,Rp,Vh,{})}}export{Sp as default};
