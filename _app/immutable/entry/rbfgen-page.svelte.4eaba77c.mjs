import{S as nn,i as an,s as rn,k as a,q as t,a as m,l as i,m as h,r as n,h as l,c as v,n as en,b as C,F as e,L as xt}from"../chunks/index.75c3cfdb.mjs";function ln(tn){let x,j,H,f,R,O,P,r,U,A,Q,wt="{d(x,x')}",X,kt="{2*\rho^2}",Y,Z,ee,te,ne,ae,gt="{2^{1-\\nu}}",ie,Bt="{\\Gamma(\\nu)}",re,le,Mt="{\\sqrt{2\\nu}d(x,x')}",se,Tt="{\\rho}",oe,he,Et="{\\nu}",de,ce,Rt="{\\sqrt{2\\nu}d(x,x')}",ue,It="{\\rho}",fe,$e,Ft="{\\nu}",me,ve,be,I,pe,ye,u,_e,xe,we,ke,ge,Be,Me,Te,Ee,Re,Ie,Fe,qe,E,F,Ke,De,b,w,q,Ge,Se,qt="{-d}",ze,Je,Le,k,K,Ce,He,Kt="{-\\sqrt(3) d}",Ne,Ve,We,p,D,je,Oe,Dt=5+"",Pe,Gt=3+"",Ue,Ae,St="{-\\sqrt(5) d}",Qe,Xe,Ye,g,G,Ze,et,zt="{-\\frac{d^2}{2}}",tt,nt,N,_,S,at,it,o,rt,lt,st,Jt="{2^{1-\\nu}}",ot,Lt="{\\Gamma(\\nu)}",ht,dt,Ct="{\\sqrt{2\\nu}d(x,x')}",ct,Ht="{\\rho}",ut,ft,Nt="{\\nu}",$t,mt,Vt="{\\sqrt{2\\nu}d(x,x')}",vt,Wt="{\\rho}",bt,pt,jt="{\\nu}",yt,_t;return{c(){x=a("h1"),j=t("Kernel Generalisations"),H=m(),f=a("section"),R=a("h2"),O=t("RBF $\\rightarrow$ Matern"),P=m(),r=a("div"),U=t(`The RBF kernel is defined as
    `),A=a("br"),Q=t(" $$ k(x,x') = \\exp\\left(-\\frac"),X=t(wt),Y=t(kt),Z=t(`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),ee=a("br"),te=t(`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),ne=a("br"),ae=t(" $$ k(x,x') = \\frac"),ie=t(gt),re=t(Bt),le=t("\\left(\\frac"),se=t(Mt),oe=t(Tt),he=t(`\\right)^\\nu
    K_`),de=t(Et),ce=t("\\left(\\frac"),ue=t(Rt),fe=t(It),$e=t(`\\right) $$ where
    $K_`),me=t(Ft),ve=t(`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),be=m(),I=a("h3"),pe=t("Intuition"),ye=m(),u=a("div"),_e=t(`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),xe=a("br"),we=m(),ke=a("br"),ge=t(`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),Be=a("br"),Me=t(`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),Te=a("br"),Ee=m(),Re=a("br"),Ie=t(`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),Fe=a("br"),qe=m(),E=a("div"),F=a("h4"),Ke=t("Special Cases"),De=m(),b=a("ul"),w=a("li"),q=a("b"),Ge=t("nu = 0.5:"),Se=t(" Matern reduces to $e^"),ze=t(qt),Je=t("$ i.e exponential distance"),Le=m(),k=a("li"),K=a("b"),Ce=t("nu = 1.5:"),He=t(" Matern reduces to $(1+ \\sqrt(3) d) e^"),Ne=t(Kt),Ve=t("$"),We=m(),p=a("li"),D=a("b"),je=t("nu = 2.5:"),Oe=t(" Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Pe=t(Dt),Ue=t(Gt),Ae=t(" d^2) e^"),Qe=t(St),Xe=t("$"),Ye=m(),g=a("li"),G=a("b"),Ze=t("nu = $\\infty$"),et=t(" Matern reduces to $e^"),tt=t(zt),nt=t(`$ i.e RBF
        kernel`),N=m(),_=a("section"),S=a("h2"),at=t("Matern $\\rightarrow$ Wendland"),it=m(),o=a("div"),rt=t(`The Matern kernel is defined as
    `),lt=a("br"),st=t(" $$ k(x,x') = \\frac"),ot=t(Jt),ht=t(Lt),dt=t("\\left(\\frac"),ct=t(Ct),ut=t(Ht),ft=t(`\\right)^\\nu
    K_`),$t=t(Nt),mt=t("\\left(\\frac"),vt=t(Vt),bt=t(Wt),pt=t(`\\right) $$ where
    $K_`),yt=t(jt),_t=t(`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function.`),this.h()},l(d){x=i(d,"H1",{});var B=h(x);j=n(B,"Kernel Generalisations"),B.forEach(l),H=v(d),f=i(d,"SECTION",{class:!0});var y=h(f);R=i(y,"H2",{});var Ot=h(R);O=n(Ot,"RBF $\\rightarrow$ Matern"),Ot.forEach(l),P=v(y),r=i(y,"DIV",{});var s=h(r);U=n(s,`The RBF kernel is defined as
    `),A=i(s,"BR",{}),Q=n(s," $$ k(x,x') = \\exp\\left(-\\frac"),X=n(s,wt),Y=n(s,kt),Z=n(s,`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),ee=i(s,"BR",{}),te=n(s,`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),ne=i(s,"BR",{}),ae=n(s," $$ k(x,x') = \\frac"),ie=n(s,gt),re=n(s,Bt),le=n(s,"\\left(\\frac"),se=n(s,Mt),oe=n(s,Tt),he=n(s,`\\right)^\\nu
    K_`),de=n(s,Et),ce=n(s,"\\left(\\frac"),ue=n(s,Rt),fe=n(s,It),$e=n(s,`\\right) $$ where
    $K_`),me=n(s,Ft),ve=n(s,`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),s.forEach(l),be=v(y),I=i(y,"H3",{});var Pt=h(I);pe=n(Pt,"Intuition"),Pt.forEach(l),ye=v(y),u=i(y,"DIV",{});var $=h(u);_e=n($,`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),xe=i($,"BR",{}),we=v($),ke=i($,"BR",{}),ge=n($,`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),Be=i($,"BR",{}),Me=n($,`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),Te=i($,"BR",{}),Ee=v($),Re=i($,"BR",{}),Ie=n($,`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),Fe=i($,"BR",{}),$.forEach(l),qe=v(y),E=i(y,"DIV",{});var V=h(E);F=i(V,"H4",{});var Ut=h(F);Ke=n(Ut,"Special Cases"),Ut.forEach(l),De=v(V),b=i(V,"UL",{});var M=h(b);w=i(M,"LI",{});var z=h(w);q=i(z,"B",{});var At=h(q);Ge=n(At,"nu = 0.5:"),At.forEach(l),Se=n(z," Matern reduces to $e^"),ze=n(z,qt),Je=n(z,"$ i.e exponential distance"),z.forEach(l),Le=v(M),k=i(M,"LI",{});var J=h(k);K=i(J,"B",{});var Qt=h(K);Ce=n(Qt,"nu = 1.5:"),Qt.forEach(l),He=n(J," Matern reduces to $(1+ \\sqrt(3) d) e^"),Ne=n(J,Kt),Ve=n(J,"$"),J.forEach(l),We=v(M),p=i(M,"LI",{});var T=h(p);D=i(T,"B",{});var Xt=h(D);je=n(Xt,"nu = 2.5:"),Xt.forEach(l),Oe=n(T," Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Pe=n(T,Dt),Ue=n(T,Gt),Ae=n(T," d^2) e^"),Qe=n(T,St),Xe=n(T,"$"),T.forEach(l),Ye=v(M),g=i(M,"LI",{});var L=h(g);G=i(L,"B",{});var Yt=h(G);Ze=n(Yt,"nu = $\\infty$"),Yt.forEach(l),et=n(L," Matern reduces to $e^"),tt=n(L,zt),nt=n(L,`$ i.e RBF
        kernel`),L.forEach(l),M.forEach(l),V.forEach(l),y.forEach(l),N=v(d),_=i(d,"SECTION",{class:!0});var W=h(_);S=i(W,"H2",{});var Zt=h(S);at=n(Zt,"Matern $\\rightarrow$ Wendland"),Zt.forEach(l),it=v(W),o=i(W,"DIV",{});var c=h(o);rt=n(c,`The Matern kernel is defined as
    `),lt=i(c,"BR",{}),st=n(c," $$ k(x,x') = \\frac"),ot=n(c,Jt),ht=n(c,Lt),dt=n(c,"\\left(\\frac"),ct=n(c,Ct),ut=n(c,Ht),ft=n(c,`\\right)^\\nu
    K_`),$t=n(c,Nt),mt=n(c,"\\left(\\frac"),vt=n(c,Vt),bt=n(c,Wt),pt=n(c,`\\right) $$ where
    $K_`),yt=n(c,jt),_t=n(c,`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function.`),c.forEach(l),W.forEach(l),this.h()},h(){en(f,"class","svelte-xe0otn"),en(_,"class","svelte-xe0otn")},m(d,B){C(d,x,B),e(x,j),C(d,H,B),C(d,f,B),e(f,R),e(R,O),e(f,P),e(f,r),e(r,U),e(r,A),e(r,Q),e(r,X),e(r,Y),e(r,Z),e(r,ee),e(r,te),e(r,ne),e(r,ae),e(r,ie),e(r,re),e(r,le),e(r,se),e(r,oe),e(r,he),e(r,de),e(r,ce),e(r,ue),e(r,fe),e(r,$e),e(r,me),e(r,ve),e(f,be),e(f,I),e(I,pe),e(f,ye),e(f,u),e(u,_e),e(u,xe),e(u,we),e(u,ke),e(u,ge),e(u,Be),e(u,Me),e(u,Te),e(u,Ee),e(u,Re),e(u,Ie),e(u,Fe),e(f,qe),e(f,E),e(E,F),e(F,Ke),e(E,De),e(E,b),e(b,w),e(w,q),e(q,Ge),e(w,Se),e(w,ze),e(w,Je),e(b,Le),e(b,k),e(k,K),e(K,Ce),e(k,He),e(k,Ne),e(k,Ve),e(b,We),e(b,p),e(p,D),e(D,je),e(p,Oe),e(p,Pe),e(p,Ue),e(p,Ae),e(p,Qe),e(p,Xe),e(b,Ye),e(b,g),e(g,G),e(G,Ze),e(g,et),e(g,tt),e(g,nt),C(d,N,B),C(d,_,B),e(_,S),e(S,at),e(_,it),e(_,o),e(o,rt),e(o,lt),e(o,st),e(o,ot),e(o,ht),e(o,dt),e(o,ct),e(o,ut),e(o,ft),e(o,$t),e(o,mt),e(o,vt),e(o,bt),e(o,pt),e(o,yt),e(o,_t)},p:xt,i:xt,o:xt,d(d){d&&l(x),d&&l(H),d&&l(f),d&&l(N),d&&l(_)}}}class on extends nn{constructor(x){super(),an(this,x,null,ln,rn,{})}}export{on as default};
