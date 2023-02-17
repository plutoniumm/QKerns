import{S as at,i as ot,s as rt,k as l,q as a,a as x,l as s,m as i,r as o,h as r,c as m,b as lt,E as t,C as Q}from"../../chunks/index-7ccf10d2.js";function st(nt){let e,y,M,H,c,z,V=`function plotFunction3D(F) {
      const numPoints = 100;
      const x = new Array(numPoints);
      const y = new Array(numPoints);
      const z = new Array(numPoints);
      for (let i = 0; i < numPoints; i++) {
        x[i] = Math.random();
        y[i] = Math.random();
        z[i] = F(x[i], y[i]);
      }
      const data = [
        {
          x: x,
          y: y,
          z: z,
          type: 'surface'
        }
      ];
      Plotly.newPlot('plot', data);
    }`,g,q,R,d,A,D,p,U,W=`// Example 1: F with RBF
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
      `,C,S,B,f,L,b,h,k,X=`function plotFunctionHeatmap(F) {
    const numPoints = 100;
    const x = new Array(numPoints);
    const z = new Array(numPoints);
    for (let i = 0; i < numPoints; i++) {
      x[i] = Math.random();
      z[i] = F(x[i], 0);
    }
    const data = [
      {
        x: x,
        y: z,
        type: 'heatmap'
      }
    ];
    Plotly.newPlot('plot', data);
  }`,I,N,O,F,T,j,u,G,Y=`// Example 1: F with RBF
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
      `,J,K;return{c(){e=l("section"),y=l("h2"),M=a("3D"),H=x(),c=l("pre"),z=a("    "),g=a(V),q=a(`
  `),R=x(),d=l("h3"),A=a("Usage"),D=x(),p=l("pre"),U=a("    "),C=a(W),S=a(`
  `),B=x(),f=l("h2"),L=a("Heatmap"),b=x(),h=l("pre"),k=a("    "),I=a(X),N=a(`
  `),O=x(),F=l("h3"),T=a("Usage"),j=x(),u=l("pre"),G=a("    "),J=a(Y),K=a(`
  `)},l(_){e=s(_,"SECTION",{});var n=i(e);y=s(n,"H2",{});var Z=i(y);M=o(Z,"3D"),Z.forEach(r),H=m(n),c=s(n,"PRE",{});var E=i(c);z=o(E,"    "),g=o(E,V),q=o(E,`
  `),E.forEach(r),R=m(n),d=s(n,"H3",{});var $=i(d);A=o($,"Usage"),$.forEach(r),D=m(n),p=s(n,"PRE",{});var P=i(p);U=o(P,"    "),C=o(P,W),S=o(P,`
  `),P.forEach(r),B=m(n),f=s(n,"H2",{});var tt=i(f);L=o(tt,"Heatmap"),tt.forEach(r),b=m(n),h=s(n,"PRE",{});var v=i(h);k=o(v,"    "),I=o(v,X),N=o(v,`
  `),v.forEach(r),O=m(n),F=s(n,"H3",{});var et=i(F);T=o(et,"Usage"),et.forEach(r),j=m(n),u=s(n,"PRE",{});var w=i(u);G=o(w,"    "),J=o(w,Y),K=o(w,`
  `),w.forEach(r),n.forEach(r)},m(_,n){lt(_,e,n),t(e,y),t(y,M),t(e,H),t(e,c),t(c,z),t(c,g),t(c,q),t(e,R),t(e,d),t(d,A),t(e,D),t(e,p),t(p,U),t(p,C),t(p,S),t(e,B),t(e,f),t(f,L),t(e,b),t(e,h),t(h,k),t(h,I),t(h,N),t(e,O),t(e,F),t(F,T),t(e,j),t(e,u),t(u,G),t(u,J),t(u,K)},p:Q,i:Q,o:Q,d(_){_&&r(e)}}}class ct extends at{constructor(e){super(),ot(this,e,null,st,rt,{})}}export{ct as default};
