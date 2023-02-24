import{S as fe,i as pe,s as W,k as P,l as S,m as j,h as _,n as I,p as _e,b as $,L,o as de,w as ye,a as R,q as N,e as X,D as ge,c as H,r as C,E as ee,F as x,g as B,f as G,d as T,J as O,u as Q,v as U,Z as te,Y as ve,y as be,z as we,A as Fe,B as xe}from"../chunks/index.75c3cfdb.mjs";import{_ as ke}from"../chunks/preload-helper.41c905a7.mjs";const ae=(l=0,t=1)=>Math.random()*(t-l)+l,le=(l,t,a)=>{const e=new Float32Array(a),i=(t-l)/(a-1);for(let n=0;n<a;n++)e[n]=l+i*n;return e},Ee=(l,t="scatter3d")=>{let a,e,i;return t==="scatter3d"&&(a=new Float32Array(l),e=new Float32Array(l),i=new Float32Array(l)),t==="heatmap"&&(a=le(-1,1,l),e=le(-1,1,l),i=new Array(l)),[a,e,i]},J=()=>Math.round(Math.random()*1e10).toString(36);function Me(l){let t;return{c(){t=P("div"),this.h()},l(a){t=S(a,"DIV",{id:!0,class:!0,style:!0}),j(t).forEach(_),this.h()},h(){I(t,"id",l[1]),I(t,"class","w-100 fade-up h-100 plut svelte-185ij4c"),_e(t,"height","400px")},m(a,e){$(a,t,e),l[6](t)},p:L,i:L,o:L,d(a){a&&_(t),l[6](null)}}}function Pe(l,t,a){let e;const i=J();let{F:n=(c,b)=>c*b}=t,{samples:r=1e3}=t,{name:o="Function"}=t,{type:g="scatter3d"}=t,[w,F,M]=Ee(r,g);const h={heatmap:()=>{for(let c=0;c<r;c++)M[c]=new Float32Array(w.map(b=>n(b,F[c])))},scatter3d:()=>{for(let c=0;c<r;c++)w[c]=ae(-1,1),F[c]=ae(-1,1),M[c]=n(w[c],F[c])}};de(async()=>{const c=await ke(()=>import("../chunks/plotly.5c81bb72.mjs").then(f=>f.p),["../chunks/plotly.5c81bb72.mjs","../chunks/_commonjsHelpers.725317a4.mjs"],import.meta.url);for(let f=0;f<r;f++)h[g]();let b={x:w,y:F,z:M,type:g,mode:"markers",marker:{size:Math.floor(16/Math.round(Math.log10(r))),color:M,colorscale:"Viridis",opacity:.75},hoverongaps:!1};c.newPlot(i,[b],{title:`${o} ${g}`.toUpperCase(),margin:{l:20,r:20,b:50,t:50}})});function p(c){ye[c?"unshift":"push"](()=>{e=c,a(0,e)})}return l.$$set=c=>{"F"in c&&a(2,n=c.F),"samples"in c&&a(3,r=c.samples),"name"in c&&a(4,o=c.name),"type"in c&&a(5,g=c.type)},[e,i,n,r,o,g,p]}class Se extends fe{constructor(t){super(),pe(this,t,Pe,Me,W,{F:2,samples:3,name:4,type:5})}}function ne(l,t,a){const e=l.slice();e[12]=t[a],e[17]=a;const i=e[12].name;e[13]=i;const n=e[12].f;e[14]=n;const r=J();return e[15]=r,e}function re(l,t,a){const e=l.slice();return e[18]=t[a][0],e[19]=t[a][1],e}function se(l,t,a){const e=l.slice();e[22]=t[a],e[25]=t,e[26]=a;const i=J();e[23]=i;const n=e[22].name;return e[24]=n,e}function oe(l){let t,a=l[24]+"",e,i,n,r,o,g,w,F;function M(){l[11].call(o,l[25],l[26])}return{c(){t=P("label"),e=N(a),i=N(":"),r=R(),o=P("input"),this.h()},l(h){t=S(h,"LABEL",{class:!0,for:!0});var p=j(t);e=C(p,a),i=C(p,":"),p.forEach(_),r=H(h),o=S(h,"INPUT",{name:!0,class:!0,type:!0}),this.h()},h(){I(t,"class","fw5 svelte-32rhl6"),I(t,"for",n=l[24]+"-"+l[15]),I(o,"name",g=l[24]+"-"+l[23]),I(o,"class","rpm-5 svelte-32rhl6"),I(o,"type","text")},m(h,p){$(h,t,p),x(t,e),x(t,i),$(h,r,p),$(h,o,p),te(o,l[22].value),w||(F=ve(o,"input",M),w=!0)},p(h,p){l=h,p&1&&a!==(a=l[24]+"")&&Q(e,a),p&1&&n!==(n=l[24]+"-"+l[15])&&I(t,"for",n),p&1&&g!==(g=l[24]+"-"+l[23])&&I(o,"name",g),p&1&&o.value!==l[22].value&&te(o,l[22].value)},d(h){h&&_(t),h&&_(r),h&&_(o),w=!1,F()}}}function ie(l){let t,a;return t=new Se({props:{samples:l[19],type:l[18],name:l[13],F:new Function("x","y",...l[12].params.map(me),l[14])}}),{c(){be(t.$$.fragment)},l(e){we(t.$$.fragment,e)},m(e,i){Fe(t,e,i),a=!0},p(e,i){const n={};i&1&&(n.name=e[13]),i&1&&(n.F=new Function("x","y",...e[12].params.map(me),e[14])),t.$set(n)},i(e){a||(B(t.$$.fragment,e),a=!0)},o(e){T(t.$$.fragment,e),a=!1},d(e){xe(t,e)}}}function ce(l){let t,a=l[12].params.map(he).join("-"),e,i,n=ie(l);return{c(){t=P("div"),n.c(),e=R(),this.h()},l(r){t=S(r,"DIV",{class:!0});var o=j(t);n.l(o),e=H(o),o.forEach(_),this.h()},h(){I(t,"class","w-100")},m(r,o){$(r,t,o),n.m(t,null),x(t,e),i=!0},p(r,o){o&1&&W(a,a=r[12].params.map(he).join("-"))?(U(),T(n,1,1,L),G(),n=ie(r),n.c(),B(n,1),n.m(t,e)):n.p(r,o)},i(r){i||(B(n),i=!0)},o(r){T(n),i=!1},d(r){r&&_(t),n.d(r)}}}function ue(l){let t,a,e,i,n=l[12].title+"",r,o,g,w=l[12].desc+"",F,M,h,p,c,b,f,K,m,y,d=l[12].params,k=[];for(let s=0;s<d.length;s+=1)k[s]=oe(se(l,d,s));let D=[["scatter3d",1e3],["heatmap",50]],E=[];for(let s=0;s<2;s+=1)E[s]=ce(re(l,D,s));const z=s=>T(E[s],1,1,()=>{E[s]=null});return{c(){t=P("hr"),a=R(),e=P("section"),i=P("h2"),r=N(n),o=R(),g=P("div"),F=N(w),M=R(),h=P("div"),p=P("br"),c=R(),b=P("div");for(let s=0;s<k.length;s+=1)k[s].c();f=R(),K=P("div");for(let s=0;s<2;s+=1)E[s].c();m=R(),this.h()},l(s){t=S(s,"HR",{class:!0}),a=H(s),e=S(s,"SECTION",{});var v=j(e);i=S(v,"H2",{});var u=j(i);r=C(u,n),u.forEach(_),o=H(v),g=S(v,"DIV",{});var A=j(g);F=C(A,w),A.forEach(_),M=H(v),h=S(v,"DIV",{});var q=j(h);p=S(q,"BR",{}),c=H(q),b=S(q,"DIV",{class:!0,style:!0});var Y=j(b);for(let V=0;V<k.length;V+=1)k[V].l(Y);Y.forEach(_),f=H(q),K=S(q,"DIV",{class:!0});var Z=j(K);for(let V=0;V<2;V+=1)E[V].l(Z);Z.forEach(_),q.forEach(_),m=H(v),v.forEach(_),this.h()},h(){I(t,"class","o-25"),I(b,"class","params w-100 ƒ p5"),_e(b,"background","#ccc"),I(K,"class","ƒ")},m(s,v){$(s,t,v),$(s,a,v),$(s,e,v),x(e,i),x(i,r),x(e,o),x(e,g),x(g,F),x(e,M),x(e,h),x(h,p),x(h,c),x(h,b);for(let u=0;u<k.length;u+=1)k[u].m(b,null);x(h,f),x(h,K);for(let u=0;u<2;u+=1)E[u].m(K,null);x(e,m),y=!0},p(s,v){if((!y||v&1)&&n!==(n=s[12].title+"")&&Q(r,n),(!y||v&1)&&w!==(w=s[12].desc+"")&&Q(F,w),v&1){d=s[12].params;let u;for(u=0;u<d.length;u+=1){const A=se(s,d,u);k[u]?k[u].p(A,v):(k[u]=oe(A),k[u].c(),k[u].m(b,null))}for(;u<k.length;u+=1)k[u].d(1);k.length=d.length}if(v&1){D=[["scatter3d",1e3],["heatmap",50]];let u;for(u=0;u<2;u+=1){const A=re(s,D,u);E[u]?(E[u].p(A,v),B(E[u],1)):(E[u]=ce(A),E[u].c(),B(E[u],1),E[u].m(K,null))}for(U(),u=2;u<2;u+=1)z(u);G()}},i(s){if(!y){for(let v=0;v<2;v+=1)B(E[v]);y=!0}},o(s){E=E.filter(Boolean);for(let v=0;v<2;v+=1)T(E[v]);y=!1},d(s){s&&_(t),s&&_(a),s&&_(e),O(k,s),O(E,s)}}}function Ie(l){let t,a,e,i,n,r,o,g,w,F,M,h,p,c,b=l[0],f=[];for(let m=0;m<b.length;m+=1)f[m]=ue(ne(l,b,m));const K=m=>T(f[m],1,1,()=>{f[m]=null});return{c(){t=P("script"),e=P("script"),n=R(),r=P("section"),o=P("h1"),g=N("Kernel Functions"),w=R(),F=P("div"),M=N(`The ultimate objective of a kernel is to use some fancy way to still tell us
    how similar any two inputs $x$, $x'$ are and map it to a higher dimensions.
    Some commonly used kernels are as follows. Our objective here is to define
    some basic kernels and then see how we can use them to combine them and
    generate fancier functions`),h=R();for(let m=0;m<f.length;m+=1)f[m].c();p=X(),this.h()},l(m){const y=ge("svelte-1tfm19b",document.head);t=S(y,"SCRIPT",{src:!0});var d=j(t);d.forEach(_),e=S(y,"SCRIPT",{src:!0});var k=j(e);k.forEach(_),y.forEach(_),n=H(m),r=S(m,"SECTION",{});var D=j(r);o=S(D,"H1",{});var E=j(o);g=C(E,"Kernel Functions"),E.forEach(_),w=H(D),F=S(D,"DIV",{});var z=j(F);M=C(z,`The ultimate objective of a kernel is to use some fancy way to still tell us
    how similar any two inputs $x$, $x'$ are and map it to a higher dimensions.
    Some commonly used kernels are as follows. Our objective here is to define
    some basic kernels and then see how we can use them to combine them and
    generate fancier functions`),z.forEach(_),D.forEach(_),h=H(m);for(let s=0;s<f.length;s+=1)f[s].l(m);p=X(),this.h()},h(){ee(t.src,a="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.5.1/math.js")||I(t,"src",a),ee(e.src,i="https://unpkg.com/bessel@1.0.2/bessel.js")||I(e,"src",i)},m(m,y){x(document.head,t),x(document.head,e),$(m,n,y),$(m,r,y),x(r,o),x(o,g),x(r,w),x(r,F),x(F,M),$(m,h,y);for(let d=0;d<f.length;d+=1)f[d].m(m,y);$(m,p,y),c=!0},p(m,[y]){if(y&1){b=m[0];let d;for(d=0;d<b.length;d+=1){const k=ne(m,b,d);f[d]?(f[d].p(k,y),B(f[d],1)):(f[d]=ue(k),f[d].c(),B(f[d],1),f[d].m(p.parentNode,p))}for(U(),d=b.length;d<f.length;d+=1)K(d);G()}},i(m){if(!c){for(let y=0;y<b.length;y+=1)B(f[y]);c=!0}},o(m){f=f.filter(Boolean);for(let y=0;y<f.length;y+=1)T(f[y]);c=!1},d(m){_(t),_(e),m&&_(n),m&&_(r),m&&_(h),O(f,m),m&&_(p)}}}const me=l=>`${l.name}=${l.value}`,he=l=>l.value;function je(l,t,a){let e,i,n,r,o,g,w,F,M,h,p;function c(b,f){b[f].value=this.value,a(0,p),a(10,e),a(9,i),a(8,n),a(7,r),a(6,o),a(5,g),a(4,w),a(3,F),a(2,M),a(1,h)}return l.$$.update=()=>{l.$$.dirty&2046&&a(0,p=[{name:"Plain",title:"Baseline testing with just to see things work",desc:`Here we plot the function $F(x, y) = x * y$ simply for an established
         baseline.`,params:[],f:"return x**2 * y**2;"},{name:"RBF",title:"RBF Kernel: $F(x, y) = e^{-\\gamma * (x - y)^2}$",params:[{name:"gamma",value:e}],desc:"Here we plot the function $F(x, y) = e^{-\\gamma * (x - y)^2}$, where $gamma$ is a hyperparameter.",f:"return Math.exp(-1 * gamma * (x - y) ** 2);"},{name:"Sigmoid",title:"Sigmoid Kernel: $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$",desc:"Here we plot the function $F(x, y) = \\tanh(\\gamma * (x - y) + \\beta)$, where $\\gamma$ and $\\beta=0.5$ are hyperparameters.",params:[{name:"gamma",value:i},{name:"beta",value:n}],f:"return Math.tanh(gamma * (x - y) + beta);"},{name:"Polynomial",title:"Polynomial Kernel: $F(x, y) = (\\gamma * (x - y) + \\beta)^d$",desc:"Here we plot the function $F(x, y) = (\\gamma * (x - y) + \\beta)^d$, where $\\gamma$, $\\beta=0.5$ and $d=2$ are hyperparameters.",params:[{name:"gamma",value:r},{name:"d",value:o},{name:"r",value:g}],f:"return (gamma * (x - y) + r) ** d;"},{name:"Matern",title:"Matern Kernel: $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$",desc:"Here we plot the function $F(x, y) = \\frac{2^{1-\\nu}}{\\Gamma(\\nu)}\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)^\\nu K_\\nu\\left(\\sqrt{2\\nu}\\frac{|x - y|}{\\lambda}\\right)$, where $\\nu=1.5$ and $\\lambda=1$ are hyperparameters.",params:[{name:"nu",value:w}],f:`{
        return (
          (2 ** (1 - nu)) / math.gamma(nu) *
          ((2 * nu) ** 0.5 * Math.abs(x - y)) ** nu *
          BESSEL.besselk(nu, (2 * nu) ** 0.5 * Math.abs(x - y))
        );
      };`},{name:"Periodic or ESS",title:"Periodic Kernel: $F(x, y) = \\exp\\left(-\\frac{2\\sin^2\\left(\\pi\\frac{|x - y|}{p}\\right)}{l^2}\\right)$",desc:"Here we plot the function $F(x, y) = \\exp\\left(-\\frac{2\\sin^2\\left(\\pi\\frac{|x - y|}{p}\\right)}{l^2}\\right)$, where $l=1$ and $p=1$ are hyperparameters.",params:[],f:"return Math.exp(-2 * Math.sin(Math.PI * Math.abs(x - y)) ** 2);"},{name:"RQ",title:"RQ Kernel: $F(x, y) = \\left(1 + \\frac{|x - y|^2}{2\\alpha l^2}\\right)^{-\\alpha}$",desc:"Here we plot the function $F(x, y) = \\left(1 + \\frac{|x - y|^2}{2\\alpha l^2}\\right)^{-\\alpha}$, where $\\alpha=1$ and $l=1$ are hyperparameters.",params:[{name:"alpha",value:F},{name:"l",value:M}],f:"return (1 + (x - y) ** 2 / (2 * alpha * l ** 2)) ** -alpha;"},{name:"White Noise",title:"White Noise Kernel: $F(x, y) = v\\delta(x - y)$",desc:"Here we plot the function $F(x, y) = v\\delta(x - y)$, where $v=1$ is a hyperparameter.",params:[{name:"v",value:h}],f:"return v * (x === y ? 1 : 0);"}])},a(10,e=1),a(9,i=1),a(8,n=.5),a(7,r=1),a(6,o=2),a(5,g=.5),a(4,w=1.5),a(3,F=1),a(2,M=1),a(1,h=.66),[p,h,M,F,w,g,o,r,n,i,e,c]}class He extends fe{constructor(t){super(),pe(this,t,je,Ie,W,{})}}export{He as default};
