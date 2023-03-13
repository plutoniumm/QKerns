import{S as Zh,i as Qh,s as ec,Q as Rt,k as s,l as r,m,h as o,R as _n,T as qd,b as j,F as e,U as ef,K as Jh,V as ei,W as tf,q as t,r as n,u as ff,M as pf,e as Wd,N as _f,C as gf,G as mf,H as bf,I as xf,g as Et,d as kt,X as $f,j as wf,y as gn,z as mn,A as bn,Y as vf,B as xn,a as k,c as R,n as W,E as yf}from"../chunks/index.486f8b79.mjs";var tc={exports:{}};function nc(i){return i instanceof Map?i.clear=i.delete=i.set=function(){throw new Error("map is read-only")}:i instanceof Set&&(i.add=i.clear=i.delete=function(){throw new Error("set is read-only")}),Object.freeze(i),Object.getOwnPropertyNames(i).forEach(function(a){var l=i[a];typeof l=="object"&&!Object.isFrozen(l)&&nc(l)}),i}tc.exports=nc;tc.exports.default=nc;class Xd{constructor(a){a.data===void 0&&(a.data={}),this.data=a.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function nf(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ve(i,...a){const l=Object.create(null);for(const g in i)l[g]=i[g];return a.forEach(function(g){for(const y in g)l[y]=g[y]}),l}const Tf="</span>",Yd=i=>!!i.scope||i.sublanguage&&i.language,Ef=(i,{prefix:a})=>{if(i.includes(".")){const l=i.split(".");return[`${a}${l.shift()}`,...l.map((g,y)=>`${g}${"_".repeat(y+1)}`)].join(" ")}return`${a}${i}`};class kf{constructor(a,l){this.buffer="",this.classPrefix=l.classPrefix,a.walk(this)}addText(a){this.buffer+=nf(a)}openNode(a){if(!Yd(a))return;let l="";a.sublanguage?l=`language-${a.language}`:l=Ef(a.scope,{prefix:this.classPrefix}),this.span(l)}closeNode(a){Yd(a)&&(this.buffer+=Tf)}value(){return this.buffer}span(a){this.buffer+=`<span class="${a}">`}}const Ud=(i={})=>{const a={children:[]};return Object.assign(a,i),a};class ic{constructor(){this.rootNode=Ud(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(a){this.top.children.push(a)}openNode(a){const l=Ud({scope:a});this.add(l),this.stack.push(l)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(a){return this.constructor._walk(a,this.rootNode)}static _walk(a,l){return typeof l=="string"?a.addText(l):l.children&&(a.openNode(l),l.children.forEach(g=>this._walk(a,g)),a.closeNode(l)),a}static _collapse(a){typeof a!="string"&&a.children&&(a.children.every(l=>typeof l=="string")?a.children=[a.children.join("")]:a.children.forEach(l=>{ic._collapse(l)}))}}class Rf extends ic{constructor(a){super(),this.options=a}addKeyword(a,l){a!==""&&(this.openNode(l),this.addText(a),this.closeNode())}addText(a){a!==""&&this.add(a)}addSublanguage(a,l){const g=a.root;g.sublanguage=!0,g.language=l,this.add(g)}toHTML(){return new kf(this,this.options).value()}finalize(){return!0}}function $n(i){return i?typeof i=="string"?i:i.source:null}function af(i){return pt("(?=",i,")")}function Mf(i){return pt("(?:",i,")*")}function Sf(i){return pt("(?:",i,")?")}function pt(...i){return i.map(l=>$n(l)).join("")}function Bf(i){const a=i[i.length-1];return typeof a=="object"&&a.constructor===Object?(i.splice(i.length-1,1),a):{}}function ac(...i){return"("+(Bf(i).capture?"":"?:")+i.map(g=>$n(g)).join("|")+")"}function lf(i){return new RegExp(i.toString()+"|").exec("").length-1}function If(i,a){const l=i&&i.exec(a);return l&&l.index===0}const Nf=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function lc(i,{joinWith:a}){let l=0;return i.map(g=>{l+=1;const y=l;let _=$n(g),u="";for(;_.length>0;){const d=Nf.exec(_);if(!d){u+=_;break}u+=_.substring(0,d.index),_=_.substring(d.index+d[0].length),d[0][0]==="\\"&&d[1]?u+="\\"+String(Number(d[1])+y):(u+=d[0],d[0]==="("&&l++)}return u}).map(g=>`(${g})`).join(a)}const Af=/\b\B/,sf="[a-zA-Z]\\w*",sc="[a-zA-Z_]\\w*",rf="\\b\\d+(\\.\\d+)?",of="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",hf="\\b(0b[01]+)",Of="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Lf=(i={})=>{const a=/^#![ ]*\//;return i.binary&&(i.begin=pt(a,/.*\b/,i.binary,/\b.*/)),Ve({scope:"meta",begin:a,end:/$/,relevance:0,"on:begin":(l,g)=>{l.index!==0&&g.ignoreMatch()}},i)},wn={begin:"\\\\[\\s\\S]",relevance:0},Kf={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[wn]},Cf={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[wn]},Df={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ni=function(i,a,l={}){const g=Ve({scope:"comment",begin:i,end:a,contains:[]},l);g.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const y=ac("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return g.contains.push({begin:pt(/[ ]+/,"(",y,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),g},jf=ni("//","$"),Pf=ni("/\\*","\\*/"),Hf=ni("#","$"),Ff={scope:"number",begin:rf,relevance:0},qf={scope:"number",begin:of,relevance:0},Wf={scope:"number",begin:hf,relevance:0},Xf={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[wn,{begin:/\[/,end:/\]/,relevance:0,contains:[wn]}]}]},Yf={scope:"title",begin:sf,relevance:0},Uf={scope:"title",begin:sc,relevance:0},Gf={begin:"\\.\\s*"+sc,relevance:0},zf=function(i){return Object.assign(i,{"on:begin":(a,l)=>{l.data._beginMatch=a[1]},"on:end":(a,l)=>{l.data._beginMatch!==a[1]&&l.ignoreMatch()}})};var Jn=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Af,IDENT_RE:sf,UNDERSCORE_IDENT_RE:sc,NUMBER_RE:rf,C_NUMBER_RE:of,BINARY_NUMBER_RE:hf,RE_STARTERS_RE:Of,SHEBANG:Lf,BACKSLASH_ESCAPE:wn,APOS_STRING_MODE:Kf,QUOTE_STRING_MODE:Cf,PHRASAL_WORDS_MODE:Df,COMMENT:ni,C_LINE_COMMENT_MODE:jf,C_BLOCK_COMMENT_MODE:Pf,HASH_COMMENT_MODE:Hf,NUMBER_MODE:Ff,C_NUMBER_MODE:qf,BINARY_NUMBER_MODE:Wf,REGEXP_MODE:Xf,TITLE_MODE:Yf,UNDERSCORE_TITLE_MODE:Uf,METHOD_GUARD:Gf,END_SAME_AS_BEGIN:zf});function Vf(i,a){i.input[i.index-1]==="."&&a.ignoreMatch()}function Jf(i,a){i.className!==void 0&&(i.scope=i.className,delete i.className)}function Zf(i,a){a&&i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=Vf,i.keywords=i.keywords||i.beginKeywords,delete i.beginKeywords,i.relevance===void 0&&(i.relevance=0))}function Qf(i,a){Array.isArray(i.illegal)&&(i.illegal=ac(...i.illegal))}function ep(i,a){if(i.match){if(i.begin||i.end)throw new Error("begin & end are not supported with match");i.begin=i.match,delete i.match}}function tp(i,a){i.relevance===void 0&&(i.relevance=1)}const np=(i,a)=>{if(!i.beforeMatch)return;if(i.starts)throw new Error("beforeMatch cannot be used with starts");const l=Object.assign({},i);Object.keys(i).forEach(g=>{delete i[g]}),i.keywords=l.keywords,i.begin=pt(l.beforeMatch,af(l.begin)),i.starts={relevance:0,contains:[Object.assign(l,{endsParent:!0})]},i.relevance=0,delete l.beforeMatch},ip=["of","and","for","in","not","or","if","then","parent","list","value"],ap="keyword";function cf(i,a,l=ap){const g=Object.create(null);return typeof i=="string"?y(l,i.split(" ")):Array.isArray(i)?y(l,i):Object.keys(i).forEach(function(_){Object.assign(g,cf(i[_],a,_))}),g;function y(_,u){a&&(u=u.map(d=>d.toLowerCase())),u.forEach(function(d){const h=d.split("|");g[h[0]]=[_,lp(h[0],h[1])]})}}function lp(i,a){return a?Number(a):sp(i)?0:1}function sp(i){return ip.includes(i.toLowerCase())}const Gd={},ft=i=>{console.error(i)},zd=(i,...a)=>{console.log(`WARN: ${i}`,...a)},Tt=(i,a)=>{Gd[`${i}/${a}`]||(console.log(`Deprecated as of ${i}. ${a}`),Gd[`${i}/${a}`]=!0)},ti=new Error;function uf(i,a,{key:l}){let g=0;const y=i[l],_={},u={};for(let d=1;d<=a.length;d++)u[d+g]=y[d],_[d+g]=!0,g+=lf(a[d-1]);i[l]=u,i[l]._emit=_,i[l]._multi=!0}function rp(i){if(Array.isArray(i.begin)){if(i.skip||i.excludeBegin||i.returnBegin)throw ft("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ti;if(typeof i.beginScope!="object"||i.beginScope===null)throw ft("beginScope must be object"),ti;uf(i,i.begin,{key:"beginScope"}),i.begin=lc(i.begin,{joinWith:""})}}function op(i){if(Array.isArray(i.end)){if(i.skip||i.excludeEnd||i.returnEnd)throw ft("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ti;if(typeof i.endScope!="object"||i.endScope===null)throw ft("endScope must be object"),ti;uf(i,i.end,{key:"endScope"}),i.end=lc(i.end,{joinWith:""})}}function hp(i){i.scope&&typeof i.scope=="object"&&i.scope!==null&&(i.beginScope=i.scope,delete i.scope)}function cp(i){hp(i),typeof i.beginScope=="string"&&(i.beginScope={_wrap:i.beginScope}),typeof i.endScope=="string"&&(i.endScope={_wrap:i.endScope}),rp(i),op(i)}function up(i){function a(u,d){return new RegExp($n(u),"m"+(i.case_insensitive?"i":"")+(i.unicodeRegex?"u":"")+(d?"g":""))}class l{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(d,h){h.position=this.position++,this.matchIndexes[this.matchAt]=h,this.regexes.push([h,d]),this.matchAt+=lf(d)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const d=this.regexes.map(h=>h[1]);this.matcherRe=a(lc(d,{joinWith:"|"}),!0),this.lastIndex=0}exec(d){this.matcherRe.lastIndex=this.lastIndex;const h=this.matcherRe.exec(d);if(!h)return null;const S=h.findIndex((z,H)=>H>0&&z!==void 0),L=this.matchIndexes[S];return h.splice(0,S),Object.assign(h,L)}}class g{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(d){if(this.multiRegexes[d])return this.multiRegexes[d];const h=new l;return this.rules.slice(d).forEach(([S,L])=>h.addRule(S,L)),h.compile(),this.multiRegexes[d]=h,h}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(d,h){this.rules.push([d,h]),h.type==="begin"&&this.count++}exec(d){const h=this.getMatcher(this.regexIndex);h.lastIndex=this.lastIndex;let S=h.exec(d);if(this.resumingScanAtSamePosition()&&!(S&&S.index===this.lastIndex)){const L=this.getMatcher(0);L.lastIndex=this.lastIndex+1,S=L.exec(d)}return S&&(this.regexIndex+=S.position+1,this.regexIndex===this.count&&this.considerAll()),S}}function y(u){const d=new g;return u.contains.forEach(h=>d.addRule(h.begin,{rule:h,type:"begin"})),u.terminatorEnd&&d.addRule(u.terminatorEnd,{type:"end"}),u.illegal&&d.addRule(u.illegal,{type:"illegal"}),d}function _(u,d){const h=u;if(u.isCompiled)return h;[Jf,ep,cp,np].forEach(L=>L(u,d)),i.compilerExtensions.forEach(L=>L(u,d)),u.__beforeBegin=null,[Zf,Qf,tp].forEach(L=>L(u,d)),u.isCompiled=!0;let S=null;return typeof u.keywords=="object"&&u.keywords.$pattern&&(u.keywords=Object.assign({},u.keywords),S=u.keywords.$pattern,delete u.keywords.$pattern),S=S||/\w+/,u.keywords&&(u.keywords=cf(u.keywords,i.case_insensitive)),h.keywordPatternRe=a(S,!0),d&&(u.begin||(u.begin=/\B|\b/),h.beginRe=a(h.begin),!u.end&&!u.endsWithParent&&(u.end=/\B|\b/),u.end&&(h.endRe=a(h.end)),h.terminatorEnd=$n(h.end)||"",u.endsWithParent&&d.terminatorEnd&&(h.terminatorEnd+=(u.end?"|":"")+d.terminatorEnd)),u.illegal&&(h.illegalRe=a(u.illegal)),u.contains||(u.contains=[]),u.contains=[].concat(...u.contains.map(function(L){return dp(L==="self"?u:L)})),u.contains.forEach(function(L){_(L,h)}),u.starts&&_(u.starts,d),h.matcher=y(h),h}if(i.compilerExtensions||(i.compilerExtensions=[]),i.contains&&i.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return i.classNameAliases=Ve(i.classNameAliases||{}),_(i)}function df(i){return i?i.endsWithParent||df(i.starts):!1}function dp(i){return i.variants&&!i.cachedVariants&&(i.cachedVariants=i.variants.map(function(a){return Ve(i,{variants:null},a)})),i.cachedVariants?i.cachedVariants:df(i)?Ve(i,{starts:i.starts?Ve(i.starts):null}):Object.isFrozen(i)?Ve(i):i}var fp="11.7.0";class pp extends Error{constructor(a,l){super(a),this.name="HTMLInjectionError",this.html=l}}const Vh=nf,Vd=Ve,Jd=Symbol("nomatch"),_p=7,gp=function(i){const a=Object.create(null),l=Object.create(null),g=[];let y=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Rf};function h(p){return d.noHighlightRe.test(p)}function S(p){let M=p.className+" ";M+=p.parentNode?p.parentNode.className:"";const A=d.languageDetectRe.exec(M);if(A){const K=ue(A[1]);return K||(zd(_.replace("{}",A[1])),zd("Falling back to no-highlight mode for this block.",p)),K?A[1]:"no-highlight"}return M.split(/\s+/).find(K=>h(K)||ue(K))}function L(p,M,A){let K="",q="";typeof M=="object"?(K=p,A=M.ignoreIllegals,q=M.language):(Tt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Tt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),q=p,K=M),A===void 0&&(A=!0);const te={code:K,language:q};Le("before:highlight",te);const me=te.result?te.result:z(te.language,te.code,A);return me.code=te.code,Le("after:highlight",me),me}function z(p,M,A,K){const q=Object.create(null);function te(b,E){return b.keywords[E]}function me(){if(!B.keywords){X.addText(C);return}let b=0;B.keywordPatternRe.lastIndex=0;let E=B.keywordPatternRe.exec(C),I="";for(;E;){I+=C.substring(b,E.index);const c=ae.case_insensitive?E[0].toLowerCase():E[0],U=te(B,c);if(U){const[se,Kt]=U;if(X.addText(I),I="",q[c]=(q[c]||0)+1,q[c]<=_p&&(je+=Kt),se.startsWith("_"))I+=E[0];else{const yn=ae.classNameAliases[se]||se;X.addKeyword(E[0],yn)}}else I+=E[0];b=B.keywordPatternRe.lastIndex,E=B.keywordPatternRe.exec(C)}I+=C.substring(b),X.addText(I)}function Ke(){if(C==="")return;let b=null;if(typeof B.subLanguage=="string"){if(!a[B.subLanguage]){X.addText(C);return}b=z(B.subLanguage,C,!0,bt[B.subLanguage]),bt[B.subLanguage]=b._top}else b=ye(C,B.subLanguage.length?B.subLanguage:null);B.relevance>0&&(je+=b.relevance),X.addSublanguage(b._emitter,b.language)}function Z(){B.subLanguage!=null?Ke():me(),C=""}function de(b,E){let I=1;const c=E.length-1;for(;I<=c;){if(!b._emit[I]){I++;continue}const U=ae.classNameAliases[b[I]]||b[I],se=E[I];U?X.addKeyword(se,U):(C=se,me(),C=""),I++}}function mt(b,E){return b.scope&&typeof b.scope=="string"&&X.openNode(ae.classNameAliases[b.scope]||b.scope),b.beginScope&&(b.beginScope._wrap?(X.addKeyword(C,ae.classNameAliases[b.beginScope._wrap]||b.beginScope._wrap),C=""):b.beginScope._multi&&(de(b.beginScope,E),C="")),B=Object.create(b,{parent:{value:B}}),B}function Qe(b,E,I){let c=If(b.endRe,I);if(c){if(b["on:end"]){const U=new Xd(b);b["on:end"](E,U),U.isMatchIgnored&&(c=!1)}if(c){for(;b.endsParent&&b.parent;)b=b.parent;return b}}if(b.endsWithParent)return Qe(b.parent,E,I)}function fe(b){return B.matcher.regexIndex===0?(C+=b[0],1):(xt=!0,0)}function Te(b){const E=b[0],I=b.rule,c=new Xd(I),U=[I.__beforeBegin,I["on:begin"]];for(const se of U)if(se&&(se(b,c),c.isMatchIgnored))return fe(E);return I.skip?C+=E:(I.excludeBegin&&(C+=E),Z(),!I.returnBegin&&!I.excludeBegin&&(C=E)),mt(I,b),I.returnBegin?0:E.length}function Ce(b){const E=b[0],I=M.substring(b.index),c=Qe(B,b,I);if(!c)return Jd;const U=B;B.endScope&&B.endScope._wrap?(Z(),X.addKeyword(E,B.endScope._wrap)):B.endScope&&B.endScope._multi?(Z(),de(B.endScope,b)):U.skip?C+=E:(U.returnEnd||U.excludeEnd||(C+=E),Z(),U.excludeEnd&&(C=E));do B.scope&&X.closeNode(),!B.skip&&!B.subLanguage&&(je+=B.relevance),B=B.parent;while(B!==c.parent);return c.starts&&mt(c.starts,b),U.returnEnd?0:E.length}function Ot(){const b=[];for(let E=B;E!==ae;E=E.parent)E.scope&&b.unshift(E.scope);b.forEach(E=>X.openNode(E))}let De={};function V(b,E){const I=E&&E[0];if(C+=b,I==null)return Z(),0;if(De.type==="begin"&&E.type==="end"&&De.index===E.index&&I===""){if(C+=M.slice(E.index,E.index+1),!y){const c=new Error(`0 width match regex (${p})`);throw c.languageName=p,c.badRule=De.rule,c}return 1}if(De=E,E.type==="begin")return Te(E);if(E.type==="illegal"&&!A){const c=new Error('Illegal lexeme "'+I+'" for mode "'+(B.scope||"<unnamed>")+'"');throw c.mode=B,c}else if(E.type==="end"){const c=Ce(E);if(c!==Jd)return c}if(E.type==="illegal"&&I==="")return 1;if(tt>1e5&&tt>E.index*3)throw new Error("potential infinite loop, way more iterations than matches");return C+=I,I.length}const ae=ue(p);if(!ae)throw ft(_.replace("{}",p)),new Error('Unknown language: "'+p+'"');const Lt=up(ae);let et="",B=K||Lt;const bt={},X=new d.__emitter(d);Ot();let C="",je=0,be=0,tt=0,xt=!1;try{for(B.matcher.considerAll();;){tt++,xt?xt=!1:B.matcher.considerAll(),B.matcher.lastIndex=be;const b=B.matcher.exec(M);if(!b)break;const E=M.substring(be,b.index),I=V(E,b);be=b.index+I}return V(M.substring(be)),X.closeAllNodes(),X.finalize(),et=X.toHTML(),{language:p,value:et,relevance:je,illegal:!1,_emitter:X,_top:B}}catch(b){if(b.message&&b.message.includes("Illegal"))return{language:p,value:Vh(M),illegal:!0,relevance:0,_illegalBy:{message:b.message,index:be,context:M.slice(be-100,be+100),mode:b.mode,resultSoFar:et},_emitter:X};if(y)return{language:p,value:Vh(M),illegal:!1,relevance:0,errorRaised:b,_emitter:X,_top:B};throw b}}function H(p){const M={value:Vh(p),illegal:!1,relevance:0,_top:u,_emitter:new d.__emitter(d)};return M._emitter.addText(p),M}function ye(p,M){M=M||d.languages||Object.keys(a);const A=H(p),K=M.filter(ue).filter(Y).map(Z=>z(Z,p,!1));K.unshift(A);const q=K.sort((Z,de)=>{if(Z.relevance!==de.relevance)return de.relevance-Z.relevance;if(Z.language&&de.language){if(ue(Z.language).supersetOf===de.language)return 1;if(ue(de.language).supersetOf===Z.language)return-1}return 0}),[te,me]=q,Ke=te;return Ke.secondBest=me,Ke}function _e(p,M,A){const K=M&&l[M]||A;p.classList.add("hljs"),p.classList.add(`language-${K}`)}function ce(p){let M=null;const A=S(p);if(h(A))return;if(Le("before:highlightElement",{el:p,language:A}),p.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(p)),d.throwUnescapedHTML))throw new pp("One of your code blocks includes unescaped HTML.",p.innerHTML);M=p;const K=M.textContent,q=A?L(K,{language:A,ignoreIllegals:!0}):ye(K);p.innerHTML=q.value,_e(p,A,q.language),p.result={language:q.language,re:q.relevance,relevance:q.relevance},q.secondBest&&(p.secondBest={language:q.secondBest.language,relevance:q.secondBest.relevance}),Le("after:highlightElement",{el:p,result:q,text:K})}function Je(p){d=Vd(d,p)}const Ae=()=>{Oe(),Tt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Mt(){Oe(),Tt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let St=!1;function Oe(){if(document.readyState==="loading"){St=!0;return}document.querySelectorAll(d.cssSelector).forEach(ce)}function Bt(){St&&Oe()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Bt,!1);function _t(p,M){let A=null;try{A=M(i)}catch(K){if(ft("Language definition for '{}' could not be registered.".replace("{}",p)),y)ft(K);else throw K;A=u}A.name||(A.name=p),a[p]=A,A.rawDefinition=M.bind(null,i),A.aliases&&gt(A.aliases,{languageName:p})}function ge(p){delete a[p];for(const M of Object.keys(l))l[M]===p&&delete l[M]}function Ze(){return Object.keys(a)}function ue(p){return p=(p||"").toLowerCase(),a[p]||a[l[p]]}function gt(p,{languageName:M}){typeof p=="string"&&(p=[p]),p.forEach(A=>{l[A.toLowerCase()]=M})}function Y(p){const M=ue(p);return M&&!M.disableAutodetect}function It(p){p["before:highlightBlock"]&&!p["before:highlightElement"]&&(p["before:highlightElement"]=M=>{p["before:highlightBlock"](Object.assign({block:M.el},M))}),p["after:highlightBlock"]&&!p["after:highlightElement"]&&(p["after:highlightElement"]=M=>{p["after:highlightBlock"](Object.assign({block:M.el},M))})}function Nt(p){It(p),g.push(p)}function Le(p,M){const A=p;g.forEach(function(K){K[A]&&K[A](M)})}function At(p){return Tt("10.7.0","highlightBlock will be removed entirely in v12.0"),Tt("10.7.0","Please use highlightElement now."),ce(p)}Object.assign(i,{highlight:L,highlightAuto:ye,highlightAll:Oe,highlightElement:ce,highlightBlock:At,configure:Je,initHighlighting:Ae,initHighlightingOnLoad:Mt,registerLanguage:_t,unregisterLanguage:ge,listLanguages:Ze,getLanguage:ue,registerAliases:gt,autoDetection:Y,inherit:Vd,addPlugin:Nt}),i.debugMode=function(){y=!1},i.safeMode=function(){y=!0},i.versionString=fp,i.regex={concat:pt,lookahead:af,either:ac,optional:Sf,anyNumberOfTimes:Mf};for(const p in Jn)typeof Jn[p]=="object"&&tc.exports(Jn[p]);return Object.assign(i,Jn),i};var vn=gp({}),mp=vn;vn.HighlightJS=vn;vn.default=vn;const Zd=mp;function bp(i){let a;return{c(){a=t(i[2])},l(l){a=n(l,i[2])},m(l,g){j(l,a,g)},p(l,g){g&4&&ff(a,l[2])},d(l){l&&o(a)}}}function xp(i){let a,l;return{c(){a=new pf(!1),l=Wd(),this.h()},l(g){a=_f(g,!1),l=Wd(),this.h()},h(){a.a=l},m(g,y){a.m(i[1],g,y),j(g,l,y)},p(g,y){y&2&&a.p(g[1])},d(g){g&&o(l),g&&a.d()}}}function $p(i){let a,l;function g(h,S){return h[1]?xp:bp}let y=g(i),_=y(i),u=[{"data-language":i[3]},i[4]],d={};for(let h=0;h<u.length;h+=1)d=Rt(d,u[h]);return{c(){a=s("pre"),l=s("code"),_.c(),this.h()},l(h){a=r(h,"PRE",{"data-language":!0});var S=m(a);l=r(S,"CODE",{});var L=m(l);_.l(L),L.forEach(o),S.forEach(o),this.h()},h(){_n(l,"hljs",!0),qd(a,d),_n(a,"langtag",i[0]),_n(a,"svelte-11sh29b",!0)},m(h,S){j(h,a,S),e(a,l),_.m(l,null)},p(h,[S]){y===(y=g(h))&&_?_.p(h,S):(_.d(1),_=y(h),_&&(_.c(),_.m(l,null))),qd(a,d=ef(u,[S&8&&{"data-language":h[3]},S&16&&h[4]])),_n(a,"langtag",h[0]),_n(a,"svelte-11sh29b",!0)},i:Jh,o:Jh,d(h){h&&o(a),_.d()}}}function wp(i,a,l){const g=["langtag","highlighted","code","languageName"];let y=ei(a,g),{langtag:_=!1}=a,{highlighted:u}=a,{code:d}=a,{languageName:h="plaintext"}=a;return i.$$set=S=>{a=Rt(Rt({},a),tf(S)),l(4,y=ei(a,g)),"langtag"in S&&l(0,_=S.langtag),"highlighted"in S&&l(1,u=S.highlighted),"code"in S&&l(2,d=S.code),"languageName"in S&&l(3,h=S.languageName)},[_,u,d,h,y]}class vp extends Zh{constructor(a){super(),Qh(this,a,wp,$p,ec,{langtag:0,highlighted:1,code:2,languageName:3})}}const yp=vp,Tp=i=>({highlighted:i&8}),Qd=i=>({highlighted:i[3]});function Ep(i){let a,l;const g=[i[4],{languageName:i[0].name},{langtag:i[2]},{highlighted:i[3]},{code:i[1]}];let y={};for(let _=0;_<g.length;_+=1)y=Rt(y,g[_]);return a=new yp({props:y}),{c(){gn(a.$$.fragment)},l(_){mn(a.$$.fragment,_)},m(_,u){bn(a,_,u),l=!0},p(_,u){const d=u&31?ef(g,[u&16&&vf(_[4]),u&1&&{languageName:_[0].name},u&4&&{langtag:_[2]},u&8&&{highlighted:_[3]},u&2&&{code:_[1]}]):{};a.$set(d)},i(_){l||(Et(a.$$.fragment,_),l=!0)},o(_){kt(a.$$.fragment,_),l=!1},d(_){xn(a,_)}}}function kp(i){let a;const l=i[6].default,g=gf(l,i,i[5],Qd),y=g||Ep(i);return{c(){y&&y.c()},l(_){y&&y.l(_)},m(_,u){y&&y.m(_,u),a=!0},p(_,[u]){g?g.p&&(!a||u&40)&&mf(g,l,_,_[5],a?xf(l,_[5],u,Tp):bf(_[5]),Qd):y&&y.p&&(!a||u&31)&&y.p(_,a?u:-1)},i(_){a||(Et(y,_),a=!0)},o(_){kt(y,_),a=!1},d(_){y&&y.d(_)}}}function Rp(i,a,l){const g=["language","code","langtag"];let y=ei(a,g),{$$slots:_={},$$scope:u}=a,{language:d}=a,{code:h}=a,{langtag:S=!1}=a;const L=$f();let z="";return wf(()=>{z&&L("highlight",{highlighted:z})}),i.$$set=H=>{a=Rt(Rt({},a),tf(H)),l(4,y=ei(a,g)),"language"in H&&l(0,d=H.language),"code"in H&&l(1,h=H.code),"langtag"in H&&l(2,S=H.langtag),"$$scope"in H&&l(5,u=H.$$scope)},i.$$.update=()=>{i.$$.dirty&3&&(Zd.registerLanguage(d.name,d.register),l(3,z=Zd.highlight(h,{language:d.name}).value))},[d,h,S,z,y,u,_]}class Mp extends Zh{constructor(a){super(),Qh(this,a,Rp,kp,ec,{language:0,code:1,langtag:2})}}const Zn=Mp;function Sp(i){const a=i.regex,l=/[\p{XID_Start}_]\p{XID_Continue}*/u,g=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],d={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:g,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},h={className:"meta",begin:/^(>>>|\.\.\.) /},S={className:"subst",begin:/\{/,end:/\}/,keywords:d,illegal:/#/},L={begin:/\{\{/,relevance:0},z={className:"string",contains:[i.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[i.BACKSLASH_ESCAPE,h],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[i.BACKSLASH_ESCAPE,h],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[i.BACKSLASH_ESCAPE,h,L,S]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[i.BACKSLASH_ESCAPE,h,L,S]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[i.BACKSLASH_ESCAPE,L,S]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[i.BACKSLASH_ESCAPE,L,S]},i.APOS_STRING_MODE,i.QUOTE_STRING_MODE]},H="[0-9](_?[0-9])*",ye=`(\\b(${H}))?\\.(${H})|\\b(${H})\\.`,_e=`\\b|${g.join("|")}`,ce={className:"number",relevance:0,variants:[{begin:`(\\b(${H})|(${ye}))[eE][+-]?(${H})[jJ]?(?=${_e})`},{begin:`(${ye})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_e})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${_e})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${_e})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_e})`},{begin:`\\b(${H})[jJ](?=${_e})`}]},Je={className:"comment",begin:a.lookahead(/# type:/),end:/$/,keywords:d,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Ae={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:["self",h,ce,z,i.HASH_COMMENT_MODE]}]};return S.contains=[z,ce,h],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:d,illegal:/(<\/|->|\?)|=>/,contains:[h,ce,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},z,Je,i.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,l],scope:{1:"keyword",3:"title.function"},contains:[Ae]},{variants:[{match:[/\bclass/,/\s+/,l,/\s*/,/\(\s*/,l,/\s*\)/]},{match:[/\bclass/,/\s+/,l]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[ce,Ae,z]}]}}const Bp={name:"python",register:Sp},Qn=Bp;function Ip(i){let a,l,g,y,_,u,d,h,S,L,z,H,ye,_e="{i=1}",ce,Je,Ae,Mt,St="{-1}",Oe,Bt,_t,ge,Ze,ue,gt,Y,It,Nt,Le,At,p,M="{-1}",A,K,q,te,me="{-1}",Ke,Z,de,mt,Qe,fe,Te,Ce,Ot,De,V,ae,Lt,et,B,bt,X="{-1}",C,je,be,tt,xt="{-1}",b,E,I,c,U,se,Kt,yn="{i=1}",ii,ai,rc="{\\lambda}",li,oc=2+"",si,ri,oi,hi,hc=1+"",ci,cc="{\\lambda}",ui,di,uc="{i=1}",fi,pi,_i,gi,dc=1+"",mi,fc="{\\lambda}",bi,xi,pc="{i=1}",$i,wi,vi,yi,_c="{i=1}",Ti,Ei,ki,Ri,gc="{\\lambda}",Mi,mc=2+"",Si,Bi,Ii,Ni,bc="{\\lambda}",Ai,xc=2+"",Oi,Li,$c="{bmatrix}",Ki,Ci,wc="{bmatrix}",Di,ji,Pi,Hi,vc="{\\lambda}",Fi,yc=2+"",qi,Wi,Xi,Yi,Tc="{\\lambda}",Ui,Ec=2+"",Gi,zi,kc="{-1}",Vi,Ji,Rc="{-1}",Zi,Qi,ea,ta,Mc="{-1}",na,ia,aa,la,Sc="{-1}",sa,ra,Tn,Re,Ct,oa,ha,J,ca,ua,da,fa,pa,_a,ga,Bc="{bmatrix}",ma,ba,Ic="{bmatrix}",xa,$a,Nc="{x_1, x_2, \\cdots}",wa,va,ya,En,re,Dt,Ta,Ea,oe,ka,Ac="{bmatrix}",Ra,Ma,Oc="{bmatrix}",Sa,Ba,Lc="{bmatrix}",Ia,Na,Kc="{bmatrix}",Aa,Oa,La,Pe,jt,Ka,Ca,Pt,Da,ja,Ht,Pa,kn,Me,Ft,Ha,Fa,x,qa,Cc="{bmatrix}",Wa,Xa,Dc="{2}",Ya,Ua,jc="{bmatrix}",Ga,za,Va,Ja,Pc="{bmatrix}",Za,Qa,Hc="{m,1}",el,tl,Fc="{2}",nl,il,qc="{m,1}",al,ll,Wc="{m,2}",sl,rl,Xc="{m,2}",ol,hl,Yc="{bmatrix}",cl,ul,Uc="{bmatrix}",dl,fl,Gc="{n,1}",pl,_l,zc="{2}",gl,ml,Vc="{n,1}",bl,xl,Jc="{n,2}",$l,wl,Zc="{n,2}",vl,yl,Qc="{bmatrix}",Tl,El,eu="{m,1}",kl,Rl,tu="{n,1}",Ml,Sl,nu="{m,1}",Bl,Il,iu="{m,2}",Nl,Al,au="{n,1}",Ol,Ll,lu="{n,2}",Kl,Cl,su="{m,2}",Dl,jl,ru="{n,2}",Pl,Hl,Fl,ql,ou="{m,1}",Wl,Xl,hu="{n,1}",Yl,Ul,cu="{m,2}",Gl,zl,uu="{n,2}",Vl,Jl,qt,Zl,Ql,es,Rn,Se,Wt,ts,ns,G,is,as,ls,du="{-1}",ss,rs,os,hs,fu="{-1}",cs,us,ds,fs,pu="{bmatrix}",ps,_s,_u="{bmatrix}",gs,ms,bs,Mn,N,Xt,xs,$s,nt,ws,vs,ys,Ts,it,Es,He,gu,ks,at,Rs,Ms,Ss,Bs,Yt,Is,Ns,Ut,As,Os,lt,Ls,Ks,Cs,Ds,st,js,Gt,Ps,Hs,zt,Fs,qs,rt,Ws,Xs,Ys,Us,ot,Gs,Vt,zs,Vs,Jt,Js,Zs,ht,Qs,er,tr,nr,ct,ir,xe,ar,lr,sr,mu="{infinite terms...}",rr,or,Zt,hr,cr,Sn,Be,Qt,ur,dr,Fe,fr,pr,_r,Ie,en,gr,mr,ut,br,$t,xr,$r,wr,tn,vr,Bn,Ne,nn,wt,yr,Tr,$,Er,kr,Rr,bu="{1}",Mr,xu="{2}",Sr,Br,Ir,Nr,$u="{1}",Ar,wu="{2}",Or,Lr,Kr,Cr,vu="{1}",Dr,yu="{2}",jr,Pr,Hr,Fr,Tu="{1}",qr,Eu="{2}",Wr,Xr,Yr,Ur,ku="{1}",Gr,Ru="{2}",zr,Vr,Jr,Zr,Mu="{1}",Qr,Su="{2}",eo,to,Bu="{1}",no,Iu="{2}",io,ao,lo,so,Nu="{\\langle x_i, x_j\\rangle}",ro,oo,Au="{since }",ho,co,Ou="{1}",uo,Lu="{2}",fo,po,Ku="{1}",_o,Cu="{2}",go,mo,bo,xo,Du="{n=0}",$o,wo,ju="{\\infty}",vo,yo,Pu="{\\langle x_i, x_j\\rangle^n}",To,Hu="{n!}",Eo,ko,Fu="{Taylor Series Expansion}",Ro,Mo,So,Bo,qu="{n=0}",Io,No,Wu="{\\infty}",Ao,Oo,Xu="{K_{poly(n)}(x_i, x_j) }",Lo,Yu="{n!}",Ko,Co,In,vt,Do,Nn,ne,an,jo,Po,P,Ho,Fo,qo,Uu="{d(x,x')}",Wo,Gu="{2*\rho^2}",Xo,Yo,Uo,Go,zo,Vo,zu="{2^{1-\\nu}}",Jo,Vu="{\\Gamma(\\nu)}",Zo,Qo,Ju="{\\sqrt{2\\nu}d(x,x')}",eh,Zu="{\\rho}",th,nh,Qu="{\\nu}",ih,ah,ed="{\\sqrt{2\\nu}d(x,x')}",lh,td="{\\rho}",sh,rh,nd="{\\nu}",oh,hh,ch,ln,uh,dh,ee,fh,ph,_h,gh,mh,bh,xh,$h,wh,vh,yh,Th,Eh,dt,sn,kh,Rh,$e,qe,rn,Mh,Sh,id="{-d}",Bh,Ih,Nh,We,on,Ah,Oh,ad="{-\\sqrt(3) d}",Lh,Kh,Ch,we,hn,Dh,jh,ld=5+"",Ph,sd=3+"",Hh,Fh,rd="{-\\sqrt(5) d}",qh,Wh,Xh,Xe,cn,Yh,Uh,od="{-\\frac{d^2}{2}}",Gh,zh,An;return it=new Zn({props:{language:Qn,code:`def rand_pt_circle(rad_min, rad_max):
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
      svm.SVC().fit(fX,Y)`}}),st=new Zn({props:{language:Qn,code:"svm.SVC(kernel='linear').fit(X,Y)"}}),ot=new Zn({props:{language:Qn,code:"svm.SVC(kernel='poly', degree=2).fit(X,Y)"}}),ct=new Zn({props:{language:Qn,code:"svm.SVC(kernel='rbf', gamma=1).fit(X,Y)"}}),{c(){a=s("h1"),l=t("Kernel Functions Mechanism"),g=k(),y=s("section"),_=s("h2"),u=t("Regression"),d=k(),h=s("p"),S=t(`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),L=s("br"),z=t(`
    $$ Y = w^T X $$ We do this simply by defining the loss function as the sum of
    squared errors and minimizing it with respect to $w$. We can write this as
    `),H=s("br"),ye=t(`
    $$ J(w) = \\min_w \\sum_`),ce=t(_e),Je=t(`^n (y_i - w^T x_i)^2 $$ Solving this for $w$
    gives us `),Ae=s("br"),Mt=t(`
    $$ w = (X^T X)^`),Oe=t(St),Bt=t(" X^T Y $$"),_t=k(),ge=s("section"),Ze=s("h2"),ue=t("Non Linearity"),gt=k(),Y=s("p"),It=t(`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),Nt=s("br"),Le=t(`
    $$ Y = w^T \\phi(X) $$ We can then also write the weight matrix as `),At=s("br"),p=t(`
    $$ w^* = (\\phi^T \\phi)^`),A=t(M),K=t(` \\phi^T Y $$ Let us introduce a regularization
    term $\\lambda$ such that the weight matrix is `),q=s("br"),te=t(`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),Ke=t(me),Z=t(` \\phi^T Y $$ The logic behind adding
    a regularization term is that we want to penalise the slope of the line. This
    is because we want to avoid overfitting. Adding bias results in a lower variance
    which makes the outputs less sensitive to the inputs. The parameter $\\lambda$
    is what controls the amount of bias we want to add
    `),de=s("br"),mt=t(`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),Qe=k(),fe=s("details"),Te=s("summary"),Ce=s("h2"),Ot=t("Restructuring the Weight Matrix"),De=k(),V=s("div"),ae=s("b"),Lt=t("Result:"),et=k(),B=s("br"),bt=t(`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),C=t(X),je=t(" \\phi^T Y $ → "),be=s("br"),tt=t(` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),b=t(xt),E=t(" Y $"),I=k(),c=s("p"),U=t("Let us now define the new loss function along with a regularization term "),se=s("br"),Kt=t(`
    $$ J(w) = \\min_w \\sum_`),ii=t(yn),ai=t("^n (y_i - w^T \\phi(x_i))^2 + \\frac"),li=t(rc),si=t(oc),ri=t(`
    ||w||^2 $$ We can now solve for $w$ and get `),oi=s("br"),hi=t(`
    $$ w^* = \\frac`),ci=t(hc),ui=t(cc),di=t(" \\sum_"),fi=t(uc),pi=t(`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ For sake of simplicity let us define a variable $\\alpha$ such
    that `),_i=s("br"),gi=t(`
    $$ \\alpha = \\frac`),mi=t(dc),bi=t(fc),xi=t(" \\sum_"),$i=t(pc),wi=t(`^n (y_i - w^T
    \\phi(x_i)) $$ We can now write the weight matrix as `),vi=s("br"),yi=t(`
    $$ w^* = \\sum_`),Ti=t(_c),Ei=t(`^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ Let us now
    substitute this into the loss function and get `),ki=s("br"),Ri=t(`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),Mi=t(gc),Si=t(mc),Bi=t(`
    w^T w $$ expanding and simplifying this will give us `),Ii=s("br"),Ni=t(`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),Ai=t(bc),Oi=t(xc),Li=t(` w^T w $$ We can see that $\\phi
    \\phi^T$ is a repeated term. Let us define this new matrix as $K$ such that $$
    K = \\phi \\phi^T = \\begin`),Ki=t($c),Ci=t(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Di=t(wc),ji=t(` $$ This matrix has two very
    important properties. First, it is symmetric and second, it is positive semi-definite.
    (This also means it is invertible which $\\phi^T \\phi$ MAY NOT). We can substitute
    all $\\phi \\phi^T$ with $K$ and also $K$ with $K^T$ and get `),Pi=s("br"),Hi=t(`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),Fi=t(vc),qi=t(yc),Wi=t(`
    \\alpha^T K \\alpha $$ Seeting the derivative of this with respect to $\\alpha$
    to zero and solving for $\\alpha$ gives us (along with $K = \\phi \\phi^T$)
    `),Xi=s("br"),Yi=t(`
    $$ \\alpha* = (K + \\frac`),Ui=t(Tc),Gi=t(Ec),zi=t(" I)^"),Vi=t(kc),Ji=t(` y $$ or $$ \\alpha* =
    (K + \\lambda' I)^`),Zi=t(Rc),Qi=t(` y $$ We have achieved in this section effectively converting
    one equation to another as follows `),ea=s("br"),ta=t(`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),na=t(Mc),ia=t(" \\phi^T Y $$ into "),aa=s("br"),la=t(`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),sa=t(Sc),ra=t(` Y $$ By the looks of it we may not
    have done anything, but as we will see in the next section, this step will reduce
    the computation time by a lot.`),Tn=k(),Re=s("section"),Ct=s("h2"),oa=t("Mercer's Theorem"),ha=k(),J=s("p"),ca=t(`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),ua=s("br"),da=t(`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),fa=s("br"),pa=t(`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),_a=s("br"),ga=t(`
    $$ \\begin`),ma=t(Bc),ba=t(` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),xa=t(Ic),$a=t(` $$ is positive semi-definite for any
    collection $`),wa=t(Nc),va=t(`$
    `),ya=s("br"),En=k(),re=s("section"),Dt=s("h2"),Ta=t("The Kernel Trick"),Ea=k(),oe=s("p"),ka=t(`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),Ra=t(Ac),Ma=t(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Sa=t(Oc),Ba=t(" = \\begin"),Ia=t(Lc),Na=t(`
    k(x_1, x_1) & k(x_1, x_2) & \\cdots & k(x_1, x_n) \\\\ k(x_2, x_1) & k(x_2, x_2)
    & \\cdots & k(x_2, x_n) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ k(x_n, x_1) &
    k(x_n, x_2) & \\cdots & k(x_n, x_n) \\end`),Aa=t(Kc),Oa=t(" $$"),La=k(),Pe=s("ul"),jt=s("li"),Ka=t("First: $K$ is symmetric"),Ca=k(),Pt=s("li"),Da=t(`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),ja=k(),Ht=s("p"),Pa=t(`So as long as we know the Kernel (which we can either choose or learn), we
    can compute the Kernel matrix and use it to solve for $\\alpha$ and then
    compute $w^*$ efficiently`),kn=k(),Me=s("section"),Ft=s("h2"),Ha=t("Working Example"),Fa=k(),x=s("p"),qa=t("Consider the following mapping $$ \\phi: x \\rightarrow \\phi(x) = \\begin"),Wa=t(Cc),Xa=t(`
    x_1^2 \\\\ \\sqrt`),Ya=t(Dc),Ua=t(" x_1 x_2 \\\\ x_2^2 \\end"),Ga=t(jc),za=t(` $$ Let us for sake of
    demonstration work out its kernel `),Va=s("br"),Ja=t(`
    $$ \\phi^T(x_m) \\phi(x_n) = \\begin`),Za=t(Pc),Qa=t(" x_"),el=t(Hc),tl=t("^2 & \\sqrt"),nl=t(Fc),il=t(" x_"),al=t(qc),ll=t(`
    x_`),sl=t(Wc),rl=t(" & x_"),ol=t(Xc),hl=t("^2 \\end"),cl=t(Yc),ul=t(" \\begin"),dl=t(Uc),fl=t(" x_"),pl=t(Gc),_l=t(`^2
    \\\\ \\sqrt`),gl=t(zc),ml=t(" x_"),bl=t(Vc),xl=t(" x_"),$l=t(Jc),wl=t(" \\\\ x_"),vl=t(Zc),yl=t("^2 \\end"),Tl=t(Qc),El=t(`
    = x_`),kl=t(eu),Rl=t("^2 x_"),Ml=t(tu),Sl=t("^2 + 2 x_"),Bl=t(nu),Il=t(" x_"),Nl=t(iu),Al=t(" x_"),Ol=t(au),Ll=t(" x_"),Kl=t(lu),Cl=t(`
    + x_`),Dl=t(su),jl=t("^2 x_"),Pl=t(ru),Hl=t("^2 $$ "),Fl=s("br"),ql=t(`
    Clearly $$ \\phi^T(x_m) \\phi(x_n) = (x_`),Wl=t(ou),Xl=t(`
    x_`),Yl=t(hu),Ul=t(" + x_"),Gl=t(cu),zl=t(" x_"),Vl=t(uu),Jl=t(`)^2 = (x_m^T x_n)^2 = k(x_m, x_n) $$
    This is an example of a Kernel called the `),qt=s("b"),Zl=t("Polynomial Kernel"),Ql=t(` which is
    defined as $$ k(x, y) = (x^T y + r)^d $$ making in our case the parameters
    $d = 2$ and $r = 0$ `),es=s("br"),Rn=k(),Se=s("section"),Wt=s("h2"),ts=t("Making Predictions"),ns=k(),G=s("p"),is=t(`We can now make predictions using the Kernel trick. We can use the following
    equation to make predictions with $ y = w^T \\phi(x) $ But as we have seen
    above we can convert the RHS from
    `),as=s("br"),ls=t("$$ w^T \\phi(x) = y(\\phi \\phi^T + \\lambda' I)^"),ss=t(du),rs=t(` \\phi^T \\phi(x) $$
    to `),os=s("br"),hs=t(" $$ w^T \\phi(x) = y(K + \\lambda' I)^"),cs=t(fu),us=t(` k_x $$ where $k_x$ is
    `),ds=s("br"),fs=t(`
    $$ k_x = \\phi^T \\phi(x) = \\begin`),ps=t(pu),_s=t(` \\phi(x_1)^T \\phi(x) \\\\ \\phi(x_2)^T
    \\phi(x) \\\\ \\vdots \\\\ \\phi(x_n)^T \\phi(x) \\end`),gs=t(_u),ms=t(` $$ And our result
    is completely independent of the mapping $\\phi$ and only depends on the Kernel
    $k$ and the data $X$ and $Y$ `),bs=s("br"),Mn=k(),N=s("section"),Xt=s("h2"),xs=t("Applying the Kernel Trick to the SVM"),$s=k(),nt=s("p"),ws=t(`As we know an SVM is a machine that can classify data by finding a
    hyperplane that separates the data into two classes. The SVM is a linear
    classifier, which means that it can only classify data that is linearly
    separable. But most data in the real world is not linear and so we need to
    use a non-linear classifier. The work around for that is that we first apply
    a non linear transformation to the data and then use a linear classifier to
    classify the transformed data. `),vs=s("br"),ys=t(`
    Let us look at how we do that for a simple case`),Ts=k(),gn(it.$$.fragment),Es=k(),He=s("img"),ks=k(),at=s("p"),Rs=t(`While in an ideal world we should be able to stop here and call it a day, in
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
    `),Ms=s("br"),Ss=t(" $$k(x_i, x_j) := f(x_i)^T f(x_j) $$"),Bs=k(),Yt=s("h3"),Is=t("Examples"),Ns=k(),Ut=s("h4"),As=t("Linear Kernel"),Os=k(),lt=s("p"),Ls=t(`Let us say the transform we intend to make is $f(x) = x$ i.e the identity
    transform. Then the kernel function is
    `),Ks=s("br"),Cs=t(" $$ k(x_i, x_j) = x_i^T x_j $$ With the call"),Ds=k(),gn(st.$$.fragment),js=k(),Gt=s("p"),Ps=t(`The linear kernel gives us a flat decision boundary as expected, it can only
    make a straight line through the data without any transforms.`),Hs=k(),zt=s("h4"),Fs=t("Polynomial Kernel"),qs=k(),rt=s("p"),Ws=t(`Let us say the non linear transform we intend to make is $f(x) = (x_1, x_2,
    x_1x_2, x_1^2 ,x_2^2)$ i.e the polynomial transform. Then the kernel
    function is
    `),Xs=s("br"),Ys=t(" $$k(x_i, x_j) = (1 + x_i^T x_j)^2 $$ With the call"),Us=k(),gn(ot.$$.fragment),Gs=k(),Vt=s("p"),zs=t(`The polynomial kernel gives us a curved decision boundary as expected, this
    is equivalent to first making an ideal transform before hand of the type
    $c_0 + c_1x_1 + c_2x_2 + c_3x_1x_2 + c_4x_1^2 + c_5x_2^2$ for some values
    $c_i$ and then using the linear kernel on the transformed data. The Kernel
    function here lets us find the relations between the values as if we had
    done the transform before hand without actually doing the transform.`),Vs=k(),Jt=s("h4"),Js=t("RBF Kernel"),Zs=k(),ht=s("p"),Qs=t(`What if we were to have a function for whom the transform were extremely
    difficult or impossible to calculate even in an approximate case, one such
    example is the Radial Basis Function (RBF) kernel. The RBF kernel is defined
    as
    `),er=s("br"),tr=t(`
    $$ k(x_i, x_j) = \\exp(-\\gamma ||x_i - x_j||^2) $$ With the call`),nr=k(),gn(ct.$$.fragment),ir=k(),xe=s("p"),ar=t(`It turns out that the transform needed before hand for an RBF is infinite
    dimensional, i.e it looks like
    `),lr=s("br"),sr=t(`
    $$ f(x) = (\\text`),rr=t(mu),or=t(`) $$ Notice how being basically
    impossible to calculate, we can still use the RBF kernel to find the
    relations between the points.
    `),Zt=s("b"),hr=t("Note:"),cr=t(` Gamma is a hyper parameter that controls the width of the RBF kernel.
    The smaller the gamma the wider the Kernel is therefore making it closer to a
    linear kernel. The larger the gamma the narrower the Kernel is therefore making
    it closer to a polynomial kernel of arbitrary degree. (See Proof in last section)`),Sn=k(),Be=s("section"),Qt=s("h2"),ur=t("Comparison with SINDy"),dr=k(),Fe=s("div"),fr=t(`This method is different from SINDy because SINDy usually aims to find the
    exact equations of the least number of degrees of freedom in any given
    system. We don't aim to do that. SINDy will not be able to convert a text
    description to an image. We want an arbitrary classifier that can be applied
    to any data set. SINDy would be much more suitable for a physical system
    where physics modelling is needed, ML is not needed for that and does not
    aim to solve those problems in the first place.
    `),pr=s("br"),_r=t(`
    ML however can be used in places where even the Non Linear systems don't have
    a closed form solution and we want to predict the state at some far time t beyond
    the chaos boundary. The results, models or even the architectures of the ML models
    used here are however not well studied and is an active area of research.
    `),Ie=s("ul"),en=s("li"),gr=t(`It is possible however that even for a given SINDy model, the ML model
        has lower computational requirements and thus is better used despite not
        being as accurate. A real world example was seen in Tesla Motors Inc
        where when calculating the current level of a battery it proved to be
        simpler to just use an ML model on the raw voltage than actually add
        physical resistors and model the complex interactions of all different
        sections, heat profiles and retentivities of the battery.`),mr=k(),ut=s("li"),br=t(`As mentioned above, we have seen in Kadierdan et al CDC 2019, that SINDy
        can be very accurately used to model, and therefore balance an inverted
        vertical double pendulum. It however also turns out that SINDy is good
        at small specific classes of tasks and should be used for as such, it
        generalists very poorly as was seen in the modelling of Nuclear Fusion
        where fusion control is done much better with DeepMind's new model `),$t=s("a"),xr=t(":Deepmind"),$r=t(`, we see that they're able to not only model and predict the gas plume
        behaviour but also control it. This is a much more complex task than the
        simple double pendulum and so it is not surprising that SINDy fails
        here. This is also a good example of how ML can be used to solve
        problems that are not solvable by SINDy.`),wr=k(),tn=s("li"),vr=t(`SINDy aims to find a simple model such that it is EXPLAINABLE. The
        latter being the more important part, in ML the model has no constraint
        on being explainable and is very happy being a black box in interest of
        which it has no constraints on what forms it can take, therefore
        structurally it can be much more complex than a SINDy model. This is a
        good thing because it allows us to model much more complex systems, but
        it is also a bad thing because it makes it harder to explain the model
        and thus harder to trust it. In interest of this ability to Generalise,
        in 2011 NASA switched to ML for aircraft engine premptive fault
        detection and in 2015 for drought prediction in the ECOSTRESS mission,
        both areas which were traditionally left to modelling.`),Bn=k(),Ne=s("details"),nn=s("summary"),wt=s("h2"),yr=t("Proof of RBF Kernel's Dimensionality"),Tr=k(),$=s("div"),Er=t("$ k(x_i, x_j) $ "),kr=s("br"),Rr=t(`
    $ \\quad = \\exp(-\\frac`),Mr=t(bu),Sr=t(xu),Br=t(` ||x_i - x_j||^2)$
    `),Ir=s("br"),Nr=t(`
    $ \\quad = \\exp(-\\frac`),Ar=t($u),Or=t(wu),Lr=t(`
    \\langle x_i - x_j\\rangle^T \\langle x_i - x_j\\rangle) $ `),Kr=s("br"),Cr=t(`
    $ \\quad = \\exp(-\\frac`),Dr=t(vu),jr=t(yu),Pr=t(`
    (\\langle x_i, x_i - x_j\\rangle - \\langle x_j, x_i - x_j\\rangle)) $ `),Hr=s("br"),Fr=t(`
    $ \\quad = \\exp(-\\frac`),qr=t(Tu),Wr=t(Eu),Xr=t(`
    (\\langle x_i, x_i\\rangle - \\langle x_i, x_j\\rangle - \\langle x_j, x_i\\rangle
    + \\langle x_j, x_j\\rangle)) $ `),Yr=s("br"),Ur=t(`
    $ \\quad = \\exp(-\\frac`),Gr=t(ku),zr=t(Ru),Vr=t(` (||x_i||^2 - 2\\langle x_i, x_j\\rangle + ||x_j||^2))
    $ `),Jr=s("br"),Zr=t(`
    $ \\quad = \\exp[-\\frac`),Qr=t(Mu),eo=t(Su),to=t(`
    ||x_i||^2 - \\frac`),no=t(Bu),io=t(Iu),ao=t(" ||x_j||^2] \\exp(\\langle x_i, x_j\\rangle) $"),lo=s("br"),so=t(`
    $ \\quad = C e^`),ro=t(Nu),oo=t(`
    \\quad \\quad \\text`),ho=t(Au),co=t(" C = \\exp(-\\frac"),uo=t(Ou),fo=t(Lu),po=t(" ||x_i||^2 - \\frac"),_o=t(Ku),go=t(Cu),mo=t(`
    ||x_j||^2) $ `),bo=s("br"),xo=t(" $ \\quad = C \\sum_"),$o=t(Du),wo=t("^"),vo=t(ju),yo=t(" \\frac"),To=t(Pu),Eo=t(Hu),ko=t(`
    \\quad \\quad \\text`),Ro=t(Fu),Mo=t(" $ "),So=s("br"),Bo=t(`
    $ \\quad = C \\sum_`),Io=t(qu),No=t("^"),Ao=t(Wu),Oo=t(`
    \\frac`),Lo=t(Xu),Ko=t(Yu),Co=t("$"),In=k(),vt=s("h1"),Do=t("Kernel Generalisations"),Nn=k(),ne=s("section"),an=s("h2"),jo=t("RBF $\\rightarrow$ Matern"),Po=k(),P=s("div"),Ho=t(`The RBF kernel is defined as
    `),Fo=s("br"),qo=t(" $$ k(x,x') = \\exp\\left(-\\frac"),Wo=t(Uu),Xo=t(Gu),Yo=t(`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),Uo=s("br"),Go=t(`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),zo=s("br"),Vo=t(" $$ k(x,x') = \\frac"),Jo=t(zu),Zo=t(Vu),Qo=t("\\left(\\frac"),eh=t(Ju),th=t(Zu),nh=t(`\\right)^\\nu
    K_`),ih=t(Qu),ah=t("\\left(\\frac"),lh=t(ed),sh=t(td),rh=t(`\\right) $$ where
    $K_`),oh=t(nd),hh=t(`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),ch=k(),ln=s("h3"),uh=t("Intuition"),dh=k(),ee=s("div"),fh=t(`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),ph=s("br"),_h=k(),gh=s("br"),mh=t(`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),bh=s("br"),xh=t(`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),$h=s("br"),wh=k(),vh=s("br"),yh=t(`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),Th=s("br"),Eh=k(),dt=s("div"),sn=s("h4"),kh=t("Special Cases"),Rh=k(),$e=s("ul"),qe=s("li"),rn=s("b"),Mh=t("nu = 0.5:"),Sh=t(" Matern reduces to $e^"),Bh=t(id),Ih=t("$ i.e exponential distance"),Nh=k(),We=s("li"),on=s("b"),Ah=t("nu = 1.5:"),Oh=t(" Matern reduces to $(1+ \\sqrt(3) d) e^"),Lh=t(ad),Kh=t("$"),Ch=k(),we=s("li"),hn=s("b"),Dh=t("nu = 2.5:"),jh=t(" Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Ph=t(ld),Hh=t(sd),Fh=t(" d^2) e^"),qh=t(rd),Wh=t("$"),Xh=k(),Xe=s("li"),cn=s("b"),Yh=t("nu = $\\infty$"),Uh=t(" Matern reduces to $e^"),Gh=t(od),zh=t(`$ i.e RBF
        kernel`),this.h()},l(f){a=r(f,"H1",{class:!0});var D=m(a);l=n(D,"Kernel Functions Mechanism"),D.forEach(o),g=R(f),y=r(f,"SECTION",{class:!0});var On=m(y);_=r(On,"H2",{});var hd=m(_);u=n(hd,"Regression"),hd.forEach(o),d=R(On),h=r(On,"P",{});var pe=m(h);S=n(pe,`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),L=r(pe,"BR",{}),z=n(pe,`
    $$ Y = w^T X $$ We do this simply by defining the loss function as the sum of
    squared errors and minimizing it with respect to $w$. We can write this as
    `),H=r(pe,"BR",{}),ye=n(pe,`
    $$ J(w) = \\min_w \\sum_`),ce=n(pe,_e),Je=n(pe,`^n (y_i - w^T x_i)^2 $$ Solving this for $w$
    gives us `),Ae=r(pe,"BR",{}),Mt=n(pe,`
    $$ w = (X^T X)^`),Oe=n(pe,St),Bt=n(pe," X^T Y $$"),pe.forEach(o),On.forEach(o),_t=R(f),ge=r(f,"SECTION",{class:!0});var Ln=m(ge);Ze=r(Ln,"H2",{});var cd=m(Ze);ue=n(cd,"Non Linearity"),cd.forEach(o),gt=R(Ln),Y=r(Ln,"P",{});var le=m(Y);It=n(le,`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),Nt=r(le,"BR",{}),Le=n(le,`
    $$ Y = w^T \\phi(X) $$ We can then also write the weight matrix as `),At=r(le,"BR",{}),p=n(le,`
    $$ w^* = (\\phi^T \\phi)^`),A=n(le,M),K=n(le,` \\phi^T Y $$ Let us introduce a regularization
    term $\\lambda$ such that the weight matrix is `),q=r(le,"BR",{}),te=n(le,`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),Ke=n(le,me),Z=n(le,` \\phi^T Y $$ The logic behind adding
    a regularization term is that we want to penalise the slope of the line. This
    is because we want to avoid overfitting. Adding bias results in a lower variance
    which makes the outputs less sensitive to the inputs. The parameter $\\lambda$
    is what controls the amount of bias we want to add
    `),de=r(le,"BR",{}),mt=n(le,`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),le.forEach(o),Ln.forEach(o),Qe=R(f),fe=r(f,"DETAILS",{class:!0});var Kn=m(fe);Te=r(Kn,"SUMMARY",{id:!0});var Cn=m(Te);Ce=r(Cn,"H2",{class:!0});var ud=m(Ce);Ot=n(ud,"Restructuring the Weight Matrix"),ud.forEach(o),De=R(Cn),V=r(Cn,"DIV",{class:!0});var ve=m(V);ae=r(ve,"B",{});var dd=m(ae);Lt=n(dd,"Result:"),dd.forEach(o),et=R(ve),B=r(ve,"BR",{}),bt=n(ve,`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),C=n(ve,X),je=n(ve," \\phi^T Y $ → "),be=r(ve,"BR",{}),tt=n(ve,` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),b=n(ve,xt),E=n(ve," Y $"),ve.forEach(o),Cn.forEach(o),I=R(Kn),c=r(Kn,"P",{});var T=m(c);U=n(T,"Let us now define the new loss function along with a regularization term "),se=r(T,"BR",{}),Kt=n(T,`
    $$ J(w) = \\min_w \\sum_`),ii=n(T,yn),ai=n(T,"^n (y_i - w^T \\phi(x_i))^2 + \\frac"),li=n(T,rc),si=n(T,oc),ri=n(T,`
    ||w||^2 $$ We can now solve for $w$ and get `),oi=r(T,"BR",{}),hi=n(T,`
    $$ w^* = \\frac`),ci=n(T,hc),ui=n(T,cc),di=n(T," \\sum_"),fi=n(T,uc),pi=n(T,`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ For sake of simplicity let us define a variable $\\alpha$ such
    that `),_i=r(T,"BR",{}),gi=n(T,`
    $$ \\alpha = \\frac`),mi=n(T,dc),bi=n(T,fc),xi=n(T," \\sum_"),$i=n(T,pc),wi=n(T,`^n (y_i - w^T
    \\phi(x_i)) $$ We can now write the weight matrix as `),vi=r(T,"BR",{}),yi=n(T,`
    $$ w^* = \\sum_`),Ti=n(T,_c),Ei=n(T,`^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ Let us now
    substitute this into the loss function and get `),ki=r(T,"BR",{}),Ri=n(T,`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),Mi=n(T,gc),Si=n(T,mc),Bi=n(T,`
    w^T w $$ expanding and simplifying this will give us `),Ii=r(T,"BR",{}),Ni=n(T,`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),Ai=n(T,bc),Oi=n(T,xc),Li=n(T,` w^T w $$ We can see that $\\phi
    \\phi^T$ is a repeated term. Let us define this new matrix as $K$ such that $$
    K = \\phi \\phi^T = \\begin`),Ki=n(T,$c),Ci=n(T,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Di=n(T,wc),ji=n(T,` $$ This matrix has two very
    important properties. First, it is symmetric and second, it is positive semi-definite.
    (This also means it is invertible which $\\phi^T \\phi$ MAY NOT). We can substitute
    all $\\phi \\phi^T$ with $K$ and also $K$ with $K^T$ and get `),Pi=r(T,"BR",{}),Hi=n(T,`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),Fi=n(T,vc),qi=n(T,yc),Wi=n(T,`
    \\alpha^T K \\alpha $$ Seeting the derivative of this with respect to $\\alpha$
    to zero and solving for $\\alpha$ gives us (along with $K = \\phi \\phi^T$)
    `),Xi=r(T,"BR",{}),Yi=n(T,`
    $$ \\alpha* = (K + \\frac`),Ui=n(T,Tc),Gi=n(T,Ec),zi=n(T," I)^"),Vi=n(T,kc),Ji=n(T,` y $$ or $$ \\alpha* =
    (K + \\lambda' I)^`),Zi=n(T,Rc),Qi=n(T,` y $$ We have achieved in this section effectively converting
    one equation to another as follows `),ea=r(T,"BR",{}),ta=n(T,`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),na=n(T,Mc),ia=n(T," \\phi^T Y $$ into "),aa=r(T,"BR",{}),la=n(T,`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),sa=n(T,Sc),ra=n(T,` Y $$ By the looks of it we may not
    have done anything, but as we will see in the next section, this step will reduce
    the computation time by a lot.`),T.forEach(o),Kn.forEach(o),Tn=R(f),Re=r(f,"SECTION",{class:!0});var Dn=m(Re);Ct=r(Dn,"H2",{});var fd=m(Ct);oa=n(fd,"Mercer's Theorem"),fd.forEach(o),ha=R(Dn),J=r(Dn,"P",{});var ie=m(J);ca=n(ie,`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),ua=r(ie,"BR",{}),da=n(ie,`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),fa=r(ie,"BR",{}),pa=n(ie,`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),_a=r(ie,"BR",{}),ga=n(ie,`
    $$ \\begin`),ma=n(ie,Bc),ba=n(ie,` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),xa=n(ie,Ic),$a=n(ie,` $$ is positive semi-definite for any
    collection $`),wa=n(ie,Nc),va=n(ie,`$
    `),ya=r(ie,"BR",{}),ie.forEach(o),Dn.forEach(o),En=R(f),re=r(f,"SECTION",{class:!0});var Ye=m(re);Dt=r(Ye,"H2",{});var pd=m(Dt);Ta=n(pd,"The Kernel Trick"),pd.forEach(o),Ea=R(Ye),oe=r(Ye,"P",{});var Ee=m(oe);ka=n(Ee,`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),Ra=n(Ee,Ac),Ma=n(Ee,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Sa=n(Ee,Oc),Ba=n(Ee," = \\begin"),Ia=n(Ee,Lc),Na=n(Ee,`
    k(x_1, x_1) & k(x_1, x_2) & \\cdots & k(x_1, x_n) \\\\ k(x_2, x_1) & k(x_2, x_2)
    & \\cdots & k(x_2, x_n) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ k(x_n, x_1) &
    k(x_n, x_2) & \\cdots & k(x_n, x_n) \\end`),Aa=n(Ee,Kc),Oa=n(Ee," $$"),Ee.forEach(o),La=R(Ye),Pe=r(Ye,"UL",{class:!0});var jn=m(Pe);jt=r(jn,"LI",{});var _d=m(jt);Ka=n(_d,"First: $K$ is symmetric"),_d.forEach(o),Ca=R(jn),Pt=r(jn,"LI",{});var gd=m(Pt);Da=n(gd,`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),gd.forEach(o),jn.forEach(o),ja=R(Ye),Ht=r(Ye,"P",{});var md=m(Ht);Pa=n(md,`So as long as we know the Kernel (which we can either choose or learn), we
    can compute the Kernel matrix and use it to solve for $\\alpha$ and then
    compute $w^*$ efficiently`),md.forEach(o),Ye.forEach(o),kn=R(f),Me=r(f,"SECTION",{class:!0});var Pn=m(Me);Ft=r(Pn,"H2",{});var bd=m(Ft);Ha=n(bd,"Working Example"),bd.forEach(o),Fa=R(Pn),x=r(Pn,"P",{});var w=m(x);qa=n(w,"Consider the following mapping $$ \\phi: x \\rightarrow \\phi(x) = \\begin"),Wa=n(w,Cc),Xa=n(w,`
    x_1^2 \\\\ \\sqrt`),Ya=n(w,Dc),Ua=n(w," x_1 x_2 \\\\ x_2^2 \\end"),Ga=n(w,jc),za=n(w,` $$ Let us for sake of
    demonstration work out its kernel `),Va=r(w,"BR",{}),Ja=n(w,`
    $$ \\phi^T(x_m) \\phi(x_n) = \\begin`),Za=n(w,Pc),Qa=n(w," x_"),el=n(w,Hc),tl=n(w,"^2 & \\sqrt"),nl=n(w,Fc),il=n(w," x_"),al=n(w,qc),ll=n(w,`
    x_`),sl=n(w,Wc),rl=n(w," & x_"),ol=n(w,Xc),hl=n(w,"^2 \\end"),cl=n(w,Yc),ul=n(w," \\begin"),dl=n(w,Uc),fl=n(w," x_"),pl=n(w,Gc),_l=n(w,`^2
    \\\\ \\sqrt`),gl=n(w,zc),ml=n(w," x_"),bl=n(w,Vc),xl=n(w," x_"),$l=n(w,Jc),wl=n(w," \\\\ x_"),vl=n(w,Zc),yl=n(w,"^2 \\end"),Tl=n(w,Qc),El=n(w,`
    = x_`),kl=n(w,eu),Rl=n(w,"^2 x_"),Ml=n(w,tu),Sl=n(w,"^2 + 2 x_"),Bl=n(w,nu),Il=n(w," x_"),Nl=n(w,iu),Al=n(w," x_"),Ol=n(w,au),Ll=n(w," x_"),Kl=n(w,lu),Cl=n(w,`
    + x_`),Dl=n(w,su),jl=n(w,"^2 x_"),Pl=n(w,ru),Hl=n(w,"^2 $$ "),Fl=r(w,"BR",{}),ql=n(w,`
    Clearly $$ \\phi^T(x_m) \\phi(x_n) = (x_`),Wl=n(w,ou),Xl=n(w,`
    x_`),Yl=n(w,hu),Ul=n(w," + x_"),Gl=n(w,cu),zl=n(w," x_"),Vl=n(w,uu),Jl=n(w,`)^2 = (x_m^T x_n)^2 = k(x_m, x_n) $$
    This is an example of a Kernel called the `),qt=r(w,"B",{});var xd=m(qt);Zl=n(xd,"Polynomial Kernel"),xd.forEach(o),Ql=n(w,` which is
    defined as $$ k(x, y) = (x^T y + r)^d $$ making in our case the parameters
    $d = 2$ and $r = 0$ `),es=r(w,"BR",{}),w.forEach(o),Pn.forEach(o),Rn=R(f),Se=r(f,"SECTION",{class:!0});var Hn=m(Se);Wt=r(Hn,"H2",{});var $d=m(Wt);ts=n($d,"Making Predictions"),$d.forEach(o),ns=R(Hn),G=r(Hn,"P",{});var Q=m(G);is=n(Q,`We can now make predictions using the Kernel trick. We can use the following
    equation to make predictions with $ y = w^T \\phi(x) $ But as we have seen
    above we can convert the RHS from
    `),as=r(Q,"BR",{}),ls=n(Q,"$$ w^T \\phi(x) = y(\\phi \\phi^T + \\lambda' I)^"),ss=n(Q,du),rs=n(Q,` \\phi^T \\phi(x) $$
    to `),os=r(Q,"BR",{}),hs=n(Q," $$ w^T \\phi(x) = y(K + \\lambda' I)^"),cs=n(Q,fu),us=n(Q,` k_x $$ where $k_x$ is
    `),ds=r(Q,"BR",{}),fs=n(Q,`
    $$ k_x = \\phi^T \\phi(x) = \\begin`),ps=n(Q,pu),_s=n(Q,` \\phi(x_1)^T \\phi(x) \\\\ \\phi(x_2)^T
    \\phi(x) \\\\ \\vdots \\\\ \\phi(x_n)^T \\phi(x) \\end`),gs=n(Q,_u),ms=n(Q,` $$ And our result
    is completely independent of the mapping $\\phi$ and only depends on the Kernel
    $k$ and the data $X$ and $Y$ `),bs=r(Q,"BR",{}),Q.forEach(o),Hn.forEach(o),Mn=R(f),N=r(f,"SECTION",{class:!0});var O=m(N);Xt=r(O,"H2",{});var wd=m(Xt);xs=n(wd,"Applying the Kernel Trick to the SVM"),wd.forEach(o),$s=R(O),nt=r(O,"P",{});var Fn=m(nt);ws=n(Fn,`As we know an SVM is a machine that can classify data by finding a
    hyperplane that separates the data into two classes. The SVM is a linear
    classifier, which means that it can only classify data that is linearly
    separable. But most data in the real world is not linear and so we need to
    use a non-linear classifier. The work around for that is that we first apply
    a non linear transformation to the data and then use a linear classifier to
    classify the transformed data. `),vs=r(Fn,"BR",{}),ys=n(Fn,`
    Let us look at how we do that for a simple case`),Fn.forEach(o),Ts=R(O),mn(it.$$.fragment,O),Es=R(O),He=r(O,"IMG",{class:!0,src:!0,height:!0,width:!0}),ks=R(O),at=r(O,"P",{});var qn=m(at);Rs=n(qn,`While in an ideal world we should be able to stop here and call it a day, in
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
    `),Ms=r(qn,"BR",{}),Ss=n(qn," $$k(x_i, x_j) := f(x_i)^T f(x_j) $$"),qn.forEach(o),Bs=R(O),Yt=r(O,"H3",{});var vd=m(Yt);Is=n(vd,"Examples"),vd.forEach(o),Ns=R(O),Ut=r(O,"H4",{});var yd=m(Ut);As=n(yd,"Linear Kernel"),yd.forEach(o),Os=R(O),lt=r(O,"P",{});var Wn=m(lt);Ls=n(Wn,`Let us say the transform we intend to make is $f(x) = x$ i.e the identity
    transform. Then the kernel function is
    `),Ks=r(Wn,"BR",{}),Cs=n(Wn," $$ k(x_i, x_j) = x_i^T x_j $$ With the call"),Wn.forEach(o),Ds=R(O),mn(st.$$.fragment,O),js=R(O),Gt=r(O,"P",{});var Td=m(Gt);Ps=n(Td,`The linear kernel gives us a flat decision boundary as expected, it can only
    make a straight line through the data without any transforms.`),Td.forEach(o),Hs=R(O),zt=r(O,"H4",{});var Ed=m(zt);Fs=n(Ed,"Polynomial Kernel"),Ed.forEach(o),qs=R(O),rt=r(O,"P",{});var Xn=m(rt);Ws=n(Xn,`Let us say the non linear transform we intend to make is $f(x) = (x_1, x_2,
    x_1x_2, x_1^2 ,x_2^2)$ i.e the polynomial transform. Then the kernel
    function is
    `),Xs=r(Xn,"BR",{}),Ys=n(Xn," $$k(x_i, x_j) = (1 + x_i^T x_j)^2 $$ With the call"),Xn.forEach(o),Us=R(O),mn(ot.$$.fragment,O),Gs=R(O),Vt=r(O,"P",{});var kd=m(Vt);zs=n(kd,`The polynomial kernel gives us a curved decision boundary as expected, this
    is equivalent to first making an ideal transform before hand of the type
    $c_0 + c_1x_1 + c_2x_2 + c_3x_1x_2 + c_4x_1^2 + c_5x_2^2$ for some values
    $c_i$ and then using the linear kernel on the transformed data. The Kernel
    function here lets us find the relations between the values as if we had
    done the transform before hand without actually doing the transform.`),kd.forEach(o),Vs=R(O),Jt=r(O,"H4",{});var Rd=m(Jt);Js=n(Rd,"RBF Kernel"),Rd.forEach(o),Zs=R(O),ht=r(O,"P",{});var Yn=m(ht);Qs=n(Yn,`What if we were to have a function for whom the transform were extremely
    difficult or impossible to calculate even in an approximate case, one such
    example is the Radial Basis Function (RBF) kernel. The RBF kernel is defined
    as
    `),er=r(Yn,"BR",{}),tr=n(Yn,`
    $$ k(x_i, x_j) = \\exp(-\\gamma ||x_i - x_j||^2) $$ With the call`),Yn.forEach(o),nr=R(O),mn(ct.$$.fragment,O),ir=R(O),xe=r(O,"P",{});var Ue=m(xe);ar=n(Ue,`It turns out that the transform needed before hand for an RBF is infinite
    dimensional, i.e it looks like
    `),lr=r(Ue,"BR",{}),sr=n(Ue,`
    $$ f(x) = (\\text`),rr=n(Ue,mu),or=n(Ue,`) $$ Notice how being basically
    impossible to calculate, we can still use the RBF kernel to find the
    relations between the points.
    `),Zt=r(Ue,"B",{});var Md=m(Zt);hr=n(Md,"Note:"),Md.forEach(o),cr=n(Ue,` Gamma is a hyper parameter that controls the width of the RBF kernel.
    The smaller the gamma the wider the Kernel is therefore making it closer to a
    linear kernel. The larger the gamma the narrower the Kernel is therefore making
    it closer to a polynomial kernel of arbitrary degree. (See Proof in last section)`),Ue.forEach(o),O.forEach(o),Sn=R(f),Be=r(f,"SECTION",{class:!0});var Un=m(Be);Qt=r(Un,"H2",{});var Sd=m(Qt);ur=n(Sd,"Comparison with SINDy"),Sd.forEach(o),dr=R(Un),Fe=r(Un,"DIV",{});var un=m(Fe);fr=n(un,`This method is different from SINDy because SINDy usually aims to find the
    exact equations of the least number of degrees of freedom in any given
    system. We don't aim to do that. SINDy will not be able to convert a text
    description to an image. We want an arbitrary classifier that can be applied
    to any data set. SINDy would be much more suitable for a physical system
    where physics modelling is needed, ML is not needed for that and does not
    aim to solve those problems in the first place.
    `),pr=r(un,"BR",{}),_r=n(un,`
    ML however can be used in places where even the Non Linear systems don't have
    a closed form solution and we want to predict the state at some far time t beyond
    the chaos boundary. The results, models or even the architectures of the ML models
    used here are however not well studied and is an active area of research.
    `),Ie=r(un,"UL",{});var yt=m(Ie);en=r(yt,"LI",{});var Bd=m(en);gr=n(Bd,`It is possible however that even for a given SINDy model, the ML model
        has lower computational requirements and thus is better used despite not
        being as accurate. A real world example was seen in Tesla Motors Inc
        where when calculating the current level of a battery it proved to be
        simpler to just use an ML model on the raw voltage than actually add
        physical resistors and model the complex interactions of all different
        sections, heat profiles and retentivities of the battery.`),Bd.forEach(o),mr=R(yt),ut=r(yt,"LI",{});var Gn=m(ut);br=n(Gn,`As mentioned above, we have seen in Kadierdan et al CDC 2019, that SINDy
        can be very accurately used to model, and therefore balance an inverted
        vertical double pendulum. It however also turns out that SINDy is good
        at small specific classes of tasks and should be used for as such, it
        generalists very poorly as was seen in the modelling of Nuclear Fusion
        where fusion control is done much better with DeepMind's new model `),$t=r(Gn,"A",{href:!0});var Id=m($t);xr=n(Id,":Deepmind"),Id.forEach(o),$r=n(Gn,`, we see that they're able to not only model and predict the gas plume
        behaviour but also control it. This is a much more complex task than the
        simple double pendulum and so it is not surprising that SINDy fails
        here. This is also a good example of how ML can be used to solve
        problems that are not solvable by SINDy.`),Gn.forEach(o),wr=R(yt),tn=r(yt,"LI",{});var Nd=m(tn);vr=n(Nd,`SINDy aims to find a simple model such that it is EXPLAINABLE. The
        latter being the more important part, in ML the model has no constraint
        on being explainable and is very happy being a black box in interest of
        which it has no constraints on what forms it can take, therefore
        structurally it can be much more complex than a SINDy model. This is a
        good thing because it allows us to model much more complex systems, but
        it is also a bad thing because it makes it harder to explain the model
        and thus harder to trust it. In interest of this ability to Generalise,
        in 2011 NASA switched to ML for aircraft engine premptive fault
        detection and in 2015 for drought prediction in the ECOSTRESS mission,
        both areas which were traditionally left to modelling.`),Nd.forEach(o),yt.forEach(o),un.forEach(o),Un.forEach(o),Bn=R(f),Ne=r(f,"DETAILS",{class:!0});var zn=m(Ne);nn=r(zn,"SUMMARY",{});var Ad=m(nn);wt=r(Ad,"H2",{class:!0});var Od=m(wt);yr=n(Od,"Proof of RBF Kernel's Dimensionality"),Od.forEach(o),Ad.forEach(o),Tr=R(zn),$=r(zn,"DIV",{});var v=m($);Er=n(v,"$ k(x_i, x_j) $ "),kr=r(v,"BR",{}),Rr=n(v,`
    $ \\quad = \\exp(-\\frac`),Mr=n(v,bu),Sr=n(v,xu),Br=n(v,` ||x_i - x_j||^2)$
    `),Ir=r(v,"BR",{}),Nr=n(v,`
    $ \\quad = \\exp(-\\frac`),Ar=n(v,$u),Or=n(v,wu),Lr=n(v,`
    \\langle x_i - x_j\\rangle^T \\langle x_i - x_j\\rangle) $ `),Kr=r(v,"BR",{}),Cr=n(v,`
    $ \\quad = \\exp(-\\frac`),Dr=n(v,vu),jr=n(v,yu),Pr=n(v,`
    (\\langle x_i, x_i - x_j\\rangle - \\langle x_j, x_i - x_j\\rangle)) $ `),Hr=r(v,"BR",{}),Fr=n(v,`
    $ \\quad = \\exp(-\\frac`),qr=n(v,Tu),Wr=n(v,Eu),Xr=n(v,`
    (\\langle x_i, x_i\\rangle - \\langle x_i, x_j\\rangle - \\langle x_j, x_i\\rangle
    + \\langle x_j, x_j\\rangle)) $ `),Yr=r(v,"BR",{}),Ur=n(v,`
    $ \\quad = \\exp(-\\frac`),Gr=n(v,ku),zr=n(v,Ru),Vr=n(v,` (||x_i||^2 - 2\\langle x_i, x_j\\rangle + ||x_j||^2))
    $ `),Jr=r(v,"BR",{}),Zr=n(v,`
    $ \\quad = \\exp[-\\frac`),Qr=n(v,Mu),eo=n(v,Su),to=n(v,`
    ||x_i||^2 - \\frac`),no=n(v,Bu),io=n(v,Iu),ao=n(v," ||x_j||^2] \\exp(\\langle x_i, x_j\\rangle) $"),lo=r(v,"BR",{}),so=n(v,`
    $ \\quad = C e^`),ro=n(v,Nu),oo=n(v,`
    \\quad \\quad \\text`),ho=n(v,Au),co=n(v," C = \\exp(-\\frac"),uo=n(v,Ou),fo=n(v,Lu),po=n(v," ||x_i||^2 - \\frac"),_o=n(v,Ku),go=n(v,Cu),mo=n(v,`
    ||x_j||^2) $ `),bo=r(v,"BR",{}),xo=n(v," $ \\quad = C \\sum_"),$o=n(v,Du),wo=n(v,"^"),vo=n(v,ju),yo=n(v," \\frac"),To=n(v,Pu),Eo=n(v,Hu),ko=n(v,`
    \\quad \\quad \\text`),Ro=n(v,Fu),Mo=n(v," $ "),So=r(v,"BR",{}),Bo=n(v,`
    $ \\quad = C \\sum_`),Io=n(v,qu),No=n(v,"^"),Ao=n(v,Wu),Oo=n(v,`
    \\frac`),Lo=n(v,Xu),Ko=n(v,Yu),Co=n(v,"$"),v.forEach(o),zn.forEach(o),In=R(f),vt=r(f,"H1",{});var Ld=m(vt);Do=n(Ld,"Kernel Generalisations"),Ld.forEach(o),Nn=R(f),ne=r(f,"SECTION",{class:!0});var ke=m(ne);an=r(ke,"H2",{});var Kd=m(an);jo=n(Kd,"RBF $\\rightarrow$ Matern"),Kd.forEach(o),Po=R(ke),P=r(ke,"DIV",{});var F=m(P);Ho=n(F,`The RBF kernel is defined as
    `),Fo=r(F,"BR",{}),qo=n(F," $$ k(x,x') = \\exp\\left(-\\frac"),Wo=n(F,Uu),Xo=n(F,Gu),Yo=n(F,`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),Uo=r(F,"BR",{}),Go=n(F,`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),zo=r(F,"BR",{}),Vo=n(F," $$ k(x,x') = \\frac"),Jo=n(F,zu),Zo=n(F,Vu),Qo=n(F,"\\left(\\frac"),eh=n(F,Ju),th=n(F,Zu),nh=n(F,`\\right)^\\nu
    K_`),ih=n(F,Qu),ah=n(F,"\\left(\\frac"),lh=n(F,ed),sh=n(F,td),rh=n(F,`\\right) $$ where
    $K_`),oh=n(F,nd),hh=n(F,`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),F.forEach(o),ch=R(ke),ln=r(ke,"H3",{});var Cd=m(ln);uh=n(Cd,"Intuition"),Cd.forEach(o),dh=R(ke),ee=r(ke,"DIV",{});var he=m(ee);fh=n(he,`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),ph=r(he,"BR",{}),_h=R(he),gh=r(he,"BR",{}),mh=n(he,`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),bh=r(he,"BR",{}),xh=n(he,`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),$h=r(he,"BR",{}),wh=R(he),vh=r(he,"BR",{}),yh=n(he,`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),Th=r(he,"BR",{}),he.forEach(o),Eh=R(ke),dt=r(ke,"DIV",{});var Vn=m(dt);sn=r(Vn,"H4",{});var Dd=m(sn);kh=n(Dd,"Special Cases"),Dd.forEach(o),Rh=R(Vn),$e=r(Vn,"UL",{});var Ge=m($e);qe=r(Ge,"LI",{});var dn=m(qe);rn=r(dn,"B",{});var jd=m(rn);Mh=n(jd,"nu = 0.5:"),jd.forEach(o),Sh=n(dn," Matern reduces to $e^"),Bh=n(dn,id),Ih=n(dn,"$ i.e exponential distance"),dn.forEach(o),Nh=R(Ge),We=r(Ge,"LI",{});var fn=m(We);on=r(fn,"B",{});var Pd=m(on);Ah=n(Pd,"nu = 1.5:"),Pd.forEach(o),Oh=n(fn," Matern reduces to $(1+ \\sqrt(3) d) e^"),Lh=n(fn,ad),Kh=n(fn,"$"),fn.forEach(o),Ch=R(Ge),we=r(Ge,"LI",{});var ze=m(we);hn=r(ze,"B",{});var Hd=m(hn);Dh=n(Hd,"nu = 2.5:"),Hd.forEach(o),jh=n(ze," Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Ph=n(ze,ld),Hh=n(ze,sd),Fh=n(ze," d^2) e^"),qh=n(ze,rd),Wh=n(ze,"$"),ze.forEach(o),Xh=R(Ge),Xe=r(Ge,"LI",{});var pn=m(Xe);cn=r(pn,"B",{});var Fd=m(cn);Yh=n(Fd,"nu = $\\infty$"),Fd.forEach(o),Uh=n(pn," Matern reduces to $e^"),Gh=n(pn,od),zh=n(pn,`$ i.e RBF
        kernel`),pn.forEach(o),Ge.forEach(o),Vn.forEach(o),ke.forEach(o),this.h()},h(){W(a,"class","w-100 mx-a"),W(y,"class","svelte-2crdhv"),W(ge,"class","svelte-2crdhv"),W(Ce,"class","d-ib m5"),W(V,"class","mx-a"),W(Te,"id","proof"),fe.open=!0,W(fe,"class","svelte-2crdhv"),W(Re,"class","svelte-2crdhv"),W(Pe,"class","d-ib"),W(re,"class","svelte-2crdhv"),W(Me,"class","svelte-2crdhv"),W(Se,"class","svelte-2crdhv"),W(He,"class","mx-a rx10"),yf(He.src,gu="https://i.imgur.com/V6IWaD2.png")||W(He,"src",gu),W(He,"height","400px"),W(He,"width","400px"),W(N,"class","svelte-2crdhv"),W($t,"href","#"),W(Be,"class","svelte-2crdhv"),W(wt,"class","d-ib m5"),W(Ne,"class","svelte-2crdhv"),W(ne,"class","svelte-2crdhv")},m(f,D){j(f,a,D),e(a,l),j(f,g,D),j(f,y,D),e(y,_),e(_,u),e(y,d),e(y,h),e(h,S),e(h,L),e(h,z),e(h,H),e(h,ye),e(h,ce),e(h,Je),e(h,Ae),e(h,Mt),e(h,Oe),e(h,Bt),j(f,_t,D),j(f,ge,D),e(ge,Ze),e(Ze,ue),e(ge,gt),e(ge,Y),e(Y,It),e(Y,Nt),e(Y,Le),e(Y,At),e(Y,p),e(Y,A),e(Y,K),e(Y,q),e(Y,te),e(Y,Ke),e(Y,Z),e(Y,de),e(Y,mt),j(f,Qe,D),j(f,fe,D),e(fe,Te),e(Te,Ce),e(Ce,Ot),e(Te,De),e(Te,V),e(V,ae),e(ae,Lt),e(V,et),e(V,B),e(V,bt),e(V,C),e(V,je),e(V,be),e(V,tt),e(V,b),e(V,E),e(fe,I),e(fe,c),e(c,U),e(c,se),e(c,Kt),e(c,ii),e(c,ai),e(c,li),e(c,si),e(c,ri),e(c,oi),e(c,hi),e(c,ci),e(c,ui),e(c,di),e(c,fi),e(c,pi),e(c,_i),e(c,gi),e(c,mi),e(c,bi),e(c,xi),e(c,$i),e(c,wi),e(c,vi),e(c,yi),e(c,Ti),e(c,Ei),e(c,ki),e(c,Ri),e(c,Mi),e(c,Si),e(c,Bi),e(c,Ii),e(c,Ni),e(c,Ai),e(c,Oi),e(c,Li),e(c,Ki),e(c,Ci),e(c,Di),e(c,ji),e(c,Pi),e(c,Hi),e(c,Fi),e(c,qi),e(c,Wi),e(c,Xi),e(c,Yi),e(c,Ui),e(c,Gi),e(c,zi),e(c,Vi),e(c,Ji),e(c,Zi),e(c,Qi),e(c,ea),e(c,ta),e(c,na),e(c,ia),e(c,aa),e(c,la),e(c,sa),e(c,ra),j(f,Tn,D),j(f,Re,D),e(Re,Ct),e(Ct,oa),e(Re,ha),e(Re,J),e(J,ca),e(J,ua),e(J,da),e(J,fa),e(J,pa),e(J,_a),e(J,ga),e(J,ma),e(J,ba),e(J,xa),e(J,$a),e(J,wa),e(J,va),e(J,ya),j(f,En,D),j(f,re,D),e(re,Dt),e(Dt,Ta),e(re,Ea),e(re,oe),e(oe,ka),e(oe,Ra),e(oe,Ma),e(oe,Sa),e(oe,Ba),e(oe,Ia),e(oe,Na),e(oe,Aa),e(oe,Oa),e(re,La),e(re,Pe),e(Pe,jt),e(jt,Ka),e(Pe,Ca),e(Pe,Pt),e(Pt,Da),e(re,ja),e(re,Ht),e(Ht,Pa),j(f,kn,D),j(f,Me,D),e(Me,Ft),e(Ft,Ha),e(Me,Fa),e(Me,x),e(x,qa),e(x,Wa),e(x,Xa),e(x,Ya),e(x,Ua),e(x,Ga),e(x,za),e(x,Va),e(x,Ja),e(x,Za),e(x,Qa),e(x,el),e(x,tl),e(x,nl),e(x,il),e(x,al),e(x,ll),e(x,sl),e(x,rl),e(x,ol),e(x,hl),e(x,cl),e(x,ul),e(x,dl),e(x,fl),e(x,pl),e(x,_l),e(x,gl),e(x,ml),e(x,bl),e(x,xl),e(x,$l),e(x,wl),e(x,vl),e(x,yl),e(x,Tl),e(x,El),e(x,kl),e(x,Rl),e(x,Ml),e(x,Sl),e(x,Bl),e(x,Il),e(x,Nl),e(x,Al),e(x,Ol),e(x,Ll),e(x,Kl),e(x,Cl),e(x,Dl),e(x,jl),e(x,Pl),e(x,Hl),e(x,Fl),e(x,ql),e(x,Wl),e(x,Xl),e(x,Yl),e(x,Ul),e(x,Gl),e(x,zl),e(x,Vl),e(x,Jl),e(x,qt),e(qt,Zl),e(x,Ql),e(x,es),j(f,Rn,D),j(f,Se,D),e(Se,Wt),e(Wt,ts),e(Se,ns),e(Se,G),e(G,is),e(G,as),e(G,ls),e(G,ss),e(G,rs),e(G,os),e(G,hs),e(G,cs),e(G,us),e(G,ds),e(G,fs),e(G,ps),e(G,_s),e(G,gs),e(G,ms),e(G,bs),j(f,Mn,D),j(f,N,D),e(N,Xt),e(Xt,xs),e(N,$s),e(N,nt),e(nt,ws),e(nt,vs),e(nt,ys),e(N,Ts),bn(it,N,null),e(N,Es),e(N,He),e(N,ks),e(N,at),e(at,Rs),e(at,Ms),e(at,Ss),e(N,Bs),e(N,Yt),e(Yt,Is),e(N,Ns),e(N,Ut),e(Ut,As),e(N,Os),e(N,lt),e(lt,Ls),e(lt,Ks),e(lt,Cs),e(N,Ds),bn(st,N,null),e(N,js),e(N,Gt),e(Gt,Ps),e(N,Hs),e(N,zt),e(zt,Fs),e(N,qs),e(N,rt),e(rt,Ws),e(rt,Xs),e(rt,Ys),e(N,Us),bn(ot,N,null),e(N,Gs),e(N,Vt),e(Vt,zs),e(N,Vs),e(N,Jt),e(Jt,Js),e(N,Zs),e(N,ht),e(ht,Qs),e(ht,er),e(ht,tr),e(N,nr),bn(ct,N,null),e(N,ir),e(N,xe),e(xe,ar),e(xe,lr),e(xe,sr),e(xe,rr),e(xe,or),e(xe,Zt),e(Zt,hr),e(xe,cr),j(f,Sn,D),j(f,Be,D),e(Be,Qt),e(Qt,ur),e(Be,dr),e(Be,Fe),e(Fe,fr),e(Fe,pr),e(Fe,_r),e(Fe,Ie),e(Ie,en),e(en,gr),e(Ie,mr),e(Ie,ut),e(ut,br),e(ut,$t),e($t,xr),e(ut,$r),e(Ie,wr),e(Ie,tn),e(tn,vr),j(f,Bn,D),j(f,Ne,D),e(Ne,nn),e(nn,wt),e(wt,yr),e(Ne,Tr),e(Ne,$),e($,Er),e($,kr),e($,Rr),e($,Mr),e($,Sr),e($,Br),e($,Ir),e($,Nr),e($,Ar),e($,Or),e($,Lr),e($,Kr),e($,Cr),e($,Dr),e($,jr),e($,Pr),e($,Hr),e($,Fr),e($,qr),e($,Wr),e($,Xr),e($,Yr),e($,Ur),e($,Gr),e($,zr),e($,Vr),e($,Jr),e($,Zr),e($,Qr),e($,eo),e($,to),e($,no),e($,io),e($,ao),e($,lo),e($,so),e($,ro),e($,oo),e($,ho),e($,co),e($,uo),e($,fo),e($,po),e($,_o),e($,go),e($,mo),e($,bo),e($,xo),e($,$o),e($,wo),e($,vo),e($,yo),e($,To),e($,Eo),e($,ko),e($,Ro),e($,Mo),e($,So),e($,Bo),e($,Io),e($,No),e($,Ao),e($,Oo),e($,Lo),e($,Ko),e($,Co),j(f,In,D),j(f,vt,D),e(vt,Do),j(f,Nn,D),j(f,ne,D),e(ne,an),e(an,jo),e(ne,Po),e(ne,P),e(P,Ho),e(P,Fo),e(P,qo),e(P,Wo),e(P,Xo),e(P,Yo),e(P,Uo),e(P,Go),e(P,zo),e(P,Vo),e(P,Jo),e(P,Zo),e(P,Qo),e(P,eh),e(P,th),e(P,nh),e(P,ih),e(P,ah),e(P,lh),e(P,sh),e(P,rh),e(P,oh),e(P,hh),e(ne,ch),e(ne,ln),e(ln,uh),e(ne,dh),e(ne,ee),e(ee,fh),e(ee,ph),e(ee,_h),e(ee,gh),e(ee,mh),e(ee,bh),e(ee,xh),e(ee,$h),e(ee,wh),e(ee,vh),e(ee,yh),e(ee,Th),e(ne,Eh),e(ne,dt),e(dt,sn),e(sn,kh),e(dt,Rh),e(dt,$e),e($e,qe),e(qe,rn),e(rn,Mh),e(qe,Sh),e(qe,Bh),e(qe,Ih),e($e,Nh),e($e,We),e(We,on),e(on,Ah),e(We,Oh),e(We,Lh),e(We,Kh),e($e,Ch),e($e,we),e(we,hn),e(hn,Dh),e(we,jh),e(we,Ph),e(we,Hh),e(we,Fh),e(we,qh),e(we,Wh),e($e,Xh),e($e,Xe),e(Xe,cn),e(cn,Yh),e(Xe,Uh),e(Xe,Gh),e(Xe,zh),An=!0},p:Jh,i(f){An||(Et(it.$$.fragment,f),Et(st.$$.fragment,f),Et(ot.$$.fragment,f),Et(ct.$$.fragment,f),An=!0)},o(f){kt(it.$$.fragment,f),kt(st.$$.fragment,f),kt(ot.$$.fragment,f),kt(ct.$$.fragment,f),An=!1},d(f){f&&o(a),f&&o(g),f&&o(y),f&&o(_t),f&&o(ge),f&&o(Qe),f&&o(fe),f&&o(Tn),f&&o(Re),f&&o(En),f&&o(re),f&&o(kn),f&&o(Me),f&&o(Rn),f&&o(Se),f&&o(Mn),f&&o(N),xn(it),xn(st),xn(ot),xn(ct),f&&o(Sn),f&&o(Be),f&&o(Bn),f&&o(Ne),f&&o(In),f&&o(vt),f&&o(Nn),f&&o(ne)}}}class Ap extends Zh{constructor(a){super(),Qh(this,a,null,Ip,ec,{})}}export{Ap as default};
