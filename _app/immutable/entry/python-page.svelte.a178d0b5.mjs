import{S as y,i as k,s as q,a as x,k as p,c as E,l as d,m as b,h as o,E as _,n as c,b as f,X as g,K as u,Y as v,o as S,J as A,q as C,r as F,F as I}from"../chunks/index.a4d57a87.mjs";const{window:M}=A;function P(l,t,s){const a=l.slice();return a[2]=t[s],a}function R(l){let t,s;return{c(){t=p("span"),s=C(" "),this.h()},l(a){t=d(a,"SPAN",{class:!0,id:!0});var r=b(t);s=F(r," "),r.forEach(o),this.h()},h(){c(t,"class","d-n"),c(t,"id",l[2])},m(a,r){f(a,t,r),I(t,s)},p:u,d(a){a&&o(t)}}}function $(l){let t,s,a,r,m,w=["qgss-kerns.html","docs-hybrid.html"],i=[];for(let e=0;e<2;e+=1)i[e]=R(P(l,w,e));return{c(){for(let e=0;e<2;e+=1)i[e].c();t=x(),s=p("iframe"),this.h()},l(e){for(let n=0;n<2;n+=1)i[n].l(e);t=E(e),s=d(e,"IFRAME",{src:!0,class:!0,title:!0,frameborder:!0}),b(s).forEach(o),this.h()},h(){_(s.src,a="/python/"+l[0])||c(s,"src",a),c(s,"class","w-100 h-100"),c(s,"title","ipynb Iframe"),c(s,"frameborder","0")},m(e,n){for(let h=0;h<2;h+=1)i[h].m(e,n);f(e,t,n),f(e,s,n),r||(m=g(M,"hashchange",l[1]),r=!0)},p(e,[n]){n&1&&!_(s.src,a="/python/"+e[0])&&c(s,"src",a)},i:u,o:u,d(e){v(i,e),e&&o(t),e&&o(s),r=!1,m()}}}function J(l,t,s){let a;const r=()=>s(0,a=new URL(window.location.href).hash.slice(1));return S(r),s(0,a=""),[a,r]}class L extends y{constructor(t){super(),k(this,t,J,$,q,{})}}export{L as default};
