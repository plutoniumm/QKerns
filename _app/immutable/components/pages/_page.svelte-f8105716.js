import{S as b,i as k,s as I,k as h,q as n,a as D,l as x,m as u,r,h as o,c as R,b as N,F as t,C as U}from"../../chunks/index-ea944ca2.js";function O(L){let e,c,f,_,s,y,C=`// Example 1: F with RBF
      function F1(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r * r);
      }
      plotFunction3D(F1);

      // Example 2: F with Laplacian
      function F2(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r);
      }
      plotFunction3D(F2);
      `,d,E,v,p,M,g,l,q,P=`// Example 1: F with RBF
      function F1(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r * r);
      }
      plotFunctionHeatmap(F1);

      // Example 2: F with Laplacian
      function F2(x, y) {
        const r = Math.sqrt(x * x + y * y);
        return Math.exp(-r);
      }
      plotFunctionHeatmap(F2);
      `,H,w;return{c(){e=h("section"),c=h("h2"),f=n("3D Usage"),_=D(),s=h("pre"),y=n("    "),d=n(C),E=n(`
  `),v=D(),p=h("h2"),M=n("Heatmap Usage"),g=D(),l=h("pre"),q=n("    "),H=n(P),w=n(`
  `)},l(i){e=x(i,"SECTION",{});var a=u(e);c=x(a,"H2",{});var S=u(c);f=r(S,"3D Usage"),S.forEach(o),_=R(a),s=x(a,"PRE",{});var m=u(s);y=r(m,"    "),d=r(m,C),E=r(m,`
  `),m.forEach(o),v=R(a),p=x(a,"H2",{});var B=u(p);M=r(B,"Heatmap Usage"),B.forEach(o),g=R(a),l=x(a,"PRE",{});var F=u(l);q=r(F,"    "),H=r(F,P),w=r(F,`
  `),F.forEach(o),a.forEach(o)},m(i,a){N(i,e,a),t(e,c),t(c,f),t(e,_),t(e,s),t(s,y),t(s,d),t(s,E),t(e,v),t(e,p),t(p,M),t(e,g),t(e,l),t(l,q),t(l,H),t(l,w)},p:U,i:U,o:U,d(i){i&&o(e)}}}class j extends b{constructor(e){super(),k(this,e,null,O,I,{})}}export{j as default};
