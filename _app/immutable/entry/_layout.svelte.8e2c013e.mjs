import{S as se,i as ae,s as re,C as ne,k as p,a as R,D as ie,l as m,m as b,h as i,c as q,E as U,n as u,F as h,b as C,G as ce,H as oe,I as he,g as ue,d as fe,J as G,o as _e,q as j,r as D,p as V,K as le}from"../chunks/index.486f8b79.mjs";import{n as Q}from"../chunks/nav.cdc405cf.mjs";function de(f,e,s){const t=f.slice();return t[4]=e[s],t}function W(f,e,s){const t=f.slice();return t[7]=e[s],t}function Y(f,e,s){const t=f.slice();return t[10]=e[s],t}function Z(f){let e,s,t,d,_,n,c,o,r,w,a,P,y,A,k,N,L,l,E,x,H,S,M=f[1],I=[];for(let v=0;v<M.length;v+=1)I[v]=te(W(f,M,v));return{c(){e=p("nav"),s=p("a"),t=p("img"),_=R(),n=p("div"),c=j("new qkerns()"),o=R(),r=p("hr"),w=R(),a=p("h4"),P=j("Pages"),y=R(),A=p("ul"),k=p("li"),N=p("a"),L=j("Kern Visualisations"),l=R(),E=p("li"),x=p("a"),H=j("Mechanism"),S=R();for(let v=0;v<I.length;v+=1)I[v].c();this.h()},l(v){e=m(v,"NAV",{class:!0,"data-sveltekit-preload-data":!0,"data-sveltekit-reload":!0});var $=b(e);s=m($,"A",{href:!0,id:!0,class:!0,style:!0});var g=b(s);t=m(g,"IMG",{src:!0,alt:!0,height:!0,width:!0,style:!0}),_=q(g),n=m(g,"DIV",{class:!0,style:!0});var T=b(n);c=D(T,"new qkerns()"),T.forEach(i),g.forEach(i),o=q($),r=m($,"HR",{class:!0}),w=q($),a=m($,"H4",{class:!0});var z=b(a);P=D(z,"Pages"),z.forEach(i),y=q($),A=m($,"UL",{class:!0});var F=b(A);k=m(F,"LI",{class:!0});var B=b(k);N=m(B,"A",{href:!0});var J=b(N);L=D(J,"Kern Visualisations"),J.forEach(i),B.forEach(i),l=q(F),E=m(F,"LI",{class:!0});var X=b(E);x=m(X,"A",{href:!0});var O=b(x);H=D(O,"Mechanism"),O.forEach(i),X.forEach(i),F.forEach(i),S=q($);for(let K=0;K<I.length;K+=1)I[K].l($);$.forEach(i),this.h()},h(){U(t.src,d="qiskit.svg")||u(t,"src",d),u(t,"alt","logo"),u(t,"height","32px"),u(t,"width","32px"),V(t,"margin-right","5px"),u(n,"class","fw4"),V(n,"font-size","24px"),V(n,"line-height","32px"),V(n,"align-self","center"),u(s,"href","/"),u(s,"id","logo"),u(s,"class","ƒ ∆-ct mx-a"),V(s,"padding","20px 0 10px 0"),V(s,"display","block"),u(r,"class","w-50 o-25"),u(a,"class","p510 m0 svelte-1pvnnym"),u(N,"href","/visualisations"),u(k,"class","svelte-1pvnnym"),u(x,"href","/mechanism"),u(E,"class","svelte-1pvnnym"),u(A,"class","p520 svelte-1pvnnym"),u(e,"class","fade-right svelte-1pvnnym"),u(e,"data-sveltekit-preload-data",""),u(e,"data-sveltekit-reload","")},m(v,$){C(v,e,$),h(e,s),h(s,t),h(s,_),h(s,n),h(n,c),h(e,o),h(e,r),h(e,w),h(e,a),h(a,P),h(e,y),h(e,A),h(A,k),h(k,N),h(N,L),h(A,l),h(A,E),h(E,x),h(x,H),h(e,S);for(let g=0;g<I.length;g+=1)I[g].m(e,null)},p(v,$){if($&2){M=v[1];let g;for(g=0;g<M.length;g+=1){const T=W(v,M,g);I[g]?I[g].p(T,$):(I[g]=te(T),I[g].c(),I[g].m(e,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=M.length}},d(v){v&&i(e),G(I,v)}}}function ee(f){let e,s,t=f[10].title+"",d;return{c(){e=p("li"),s=p("a"),d=j(t),this.h()},l(_){e=m(_,"LI",{class:!0});var n=b(e);s=m(n,"A",{href:!0});var c=b(s);d=D(c,t),c.forEach(i),n.forEach(i),this.h()},h(){u(s,"href",f[7][2](f[10].href)),u(e,"class","svelte-1pvnnym")},m(_,n){C(_,e,n),h(e,s),h(s,d)},p:le,d(_){_&&i(e)}}}function te(f){let e,s=f[7][0]+"",t,d,_,n,c=Q[f[7][1]],o=[];for(let r=0;r<c.length;r+=1)o[r]=ee(Y(f,c,r));return{c(){e=p("h4"),t=j(s),d=R(),_=p("ul");for(let r=0;r<o.length;r+=1)o[r].c();n=R(),this.h()},l(r){e=m(r,"H4",{class:!0});var w=b(e);t=D(w,s),w.forEach(i),d=q(r),_=m(r,"UL",{class:!0});var a=b(_);for(let P=0;P<o.length;P+=1)o[P].l(a);n=q(a),a.forEach(i),this.h()},h(){u(e,"class","p510 m0 svelte-1pvnnym"),u(_,"class","p520 svelte-1pvnnym")},m(r,w){C(r,e,w),h(e,t),C(r,d,w),C(r,_,w);for(let a=0;a<o.length;a+=1)o[a].m(_,null);h(_,n)},p(r,w){if(w&2){c=Q[r[7][1]];let a;for(a=0;a<c.length;a+=1){const P=Y(r,c,a);o[a]?o[a].p(P,w):(o[a]=ee(P),o[a].c(),o[a].m(_,n))}for(;a<o.length;a+=1)o[a].d(1);o.length=c.length}},d(r){r&&i(e),r&&i(d),r&&i(_),G(o,r)}}}function ve(f){let e,s;return{c(){e=p("p"),s=p("br"),this.h()},l(t){e=m(t,"P",{class:!0});var d=b(e);s=m(d,"BR",{}),d.forEach(i),this.h()},h(){u(e,"class","p520 svelte-1pvnnym")},m(t,d){C(t,e,d),h(e,s)},p:le,d(t){t&&i(e)}}}function pe(f){let e,s,t,d,_,n,c,o,r,w,a,P,y=f[0]&&Z(f);const A=f[3].default,k=ne(A,f,f[2],null);let N=new Array(4),L=[];for(let l=0;l<N.length;l+=1)L[l]=ve(de(f,N,l));return{c(){e=p("script"),t=p("script"),_=R(),n=p("main"),y&&y.c(),c=R(),o=p("article"),k&&k.c(),r=R();for(let l=0;l<L.length;l+=1)L[l].c();w=R(),a=p("div"),this.h()},l(l){const E=ie("svelte-1us85gb",document.head);e=m(E,"SCRIPT",{src:!0});var x=b(e);x.forEach(i),t=m(E,"SCRIPT",{src:!0});var H=b(t);H.forEach(i),E.forEach(i),_=q(l),n=m(l,"MAIN",{class:!0});var S=b(n);y&&y.l(S),c=q(S),o=m(S,"ARTICLE",{class:!0});var M=b(o);k&&k.l(M),r=q(M);for(let v=0;v<L.length;v+=1)L[v].l(M);M.forEach(i),S.forEach(i),w=q(l),a=m(l,"DIV",{class:!0,id:!0});var I=b(a);I.forEach(i),this.h()},h(){e.defer=!0,U(e.src,s="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js")||u(e,"src",s),t.defer=!0,U(t.src,d="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js")||u(t,"src",d),u(o,"class","mx-a p520 fade svelte-1pvnnym"),u(n,"class","svelte-1pvnnym"),u(a,"class","p-abs o-0 svelte-1pvnnym"),u(a,"id","overlay")},m(l,E){h(document.head,e),h(document.head,t),C(l,_,E),C(l,n,E),y&&y.m(n,null),h(n,c),h(n,o),k&&k.m(o,null),h(o,r);for(let x=0;x<L.length;x+=1)L[x].m(o,null);C(l,w,E),C(l,a,E),P=!0},p(l,[E]){l[0]?y?y.p(l,E):(y=Z(l),y.c(),y.m(n,c)):y&&(y.d(1),y=null),k&&k.p&&(!P||E&4)&&ce(k,A,l,l[2],P?he(A,l[2],E,null):oe(l[2]),null)},i(l){P||(ue(k,l),P=!0)},o(l){fe(k,l),P=!1},d(l){i(e),i(t),l&&i(_),l&&i(n),y&&y.d(),k&&k.d(l),G(L,l),l&&i(w),l&&i(a)}}}function me(f,e,s){let{$$slots:t={},$$scope:d}=e,_=!0;_e(()=>{window.TEXRender(),new URLSearchParams(window.location.search).get("no-nav")!==null&&s(0,_=!1)});const n=[["🐍 Python Files","python",c=>`/python#${c}.html`],["📝 Markdown Files","markdown",c=>`/markdown#${c}.md`],["📸 Docs & Imgs","documents",c=>`/document#${c}`],["🖥️ Presentation","presentations",c=>`/presentation#${c}`]];return f.$$set=c=>{"$$scope"in c&&s(2,d=c.$$scope)},[_,n,d,t]}class ke extends se{constructor(e){super(),ae(this,e,me,pe,re,{})}}export{ke as default};
