import{S as Yt,i as Zt,s as en,k as a,q as t,a as m,l as i,m as h,r as n,h as s,c as v,n as Qt,b as vt,F as e,C as bt}from"../../../chunks/index-28406e41.js";function tn(Xt){let d,T,H,N,r,V,W,j,pt="{d(x,x')}",O,yt="{2*\rho^2}",P,U,A,Q,X,Y,_t="{2^{1-\\nu}}",Z,wt="{\\Gamma(\\nu)}",ee,te,xt="{\\sqrt{2\\nu}d(x,x')}",ne,kt="{\\rho}",ae,ie,gt="{\\nu}",re,le,Bt="{\\sqrt{2\\nu}d(x,x')}",se,Mt="{\\rho}",oe,he,Tt="{\\nu}",de,ce,ue,E,fe,$e,u,me,ve,be,pe,ye,_e,we,xe,ke,ge,Be,Me,Te,M,R,Ee,Re,b,w,I,Ie,Fe,Et="{-d}",qe,De,Ke,x,F,Ge,Se,Rt="{-\\sqrt(3) d}",ze,Ce,Je,p,q,Le,He,It=5+"",Ne,Ft=3+"",Ve,We,qt="{-\\sqrt(5) d}",je,Oe,Pe,k,D,Ue,Ae,Dt="{-\\frac{d^2}{2}}",Qe,Xe,C,_,K,Ye,Ze,o,et,tt,nt,Kt="{2^{1-\\nu}}",at,Gt="{\\Gamma(\\nu)}",it,rt,St="{\\sqrt{2\\nu}d(x,x')}",lt,zt="{\\rho}",st,ot,Ct="{\\nu}",ht,dt,Jt="{\\sqrt{2\\nu}d(x,x')}",ct,Lt="{\\rho}",ut,ft,Ht="{\\nu}",$t,mt;return{c(){d=a("section"),T=a("h2"),H=t("RBF $\\rightarrow$ Matern"),N=m(),r=a("div"),V=t(`The RBF kernel is defined as
    `),W=a("br"),j=t(" $$ k(x,x') = \\exp\\left(-\\frac"),O=t(pt),P=t(yt),U=t(`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),A=a("br"),Q=t(`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),X=a("br"),Y=t(" $$ k(x,x') = \\frac"),Z=t(_t),ee=t(wt),te=t("\\left(\\frac"),ne=t(xt),ae=t(kt),ie=t(`\\right)^\\nu
    K_`),re=t(gt),le=t("\\left(\\frac"),se=t(Bt),oe=t(Mt),he=t(`\\right) $$ where
    $K_`),de=t(Tt),ce=t(`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),ue=m(),E=a("h3"),fe=t("Intuition"),$e=m(),u=a("div"),me=t(`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),ve=a("br"),be=m(),pe=a("br"),ye=t(`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),_e=a("br"),we=t(`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),xe=a("br"),ke=m(),ge=a("br"),Be=t(`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),Me=a("br"),Te=m(),M=a("div"),R=a("h4"),Ee=t("Special Cases"),Re=m(),b=a("ul"),w=a("li"),I=a("b"),Ie=t("nu = 0.5:"),Fe=t(" Matern reduces to $e^"),qe=t(Et),De=t("$ i.e exponential distance"),Ke=m(),x=a("li"),F=a("b"),Ge=t("nu = 1.5:"),Se=t(" Matern reduces to $(1+ \\sqrt(3) d) e^"),ze=t(Rt),Ce=t("$"),Je=m(),p=a("li"),q=a("b"),Le=t("nu = 2.5:"),He=t(" Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Ne=t(It),Ve=t(Ft),We=t(" d^2) e^"),je=t(qt),Oe=t("$"),Pe=m(),k=a("li"),D=a("b"),Ue=t("nu = $\\infty$"),Ae=t(" Matern reduces to $e^"),Qe=t(Dt),Xe=t(`$ i.e RBF
        kernel`),C=m(),_=a("section"),K=a("h2"),Ye=t("Matern $\\rightarrow$ Wendland"),Ze=m(),o=a("div"),et=t(`The Matern kernel is defined as
    `),tt=a("br"),nt=t(" $$ k(x,x') = \\frac"),at=t(Kt),it=t(Gt),rt=t("\\left(\\frac"),lt=t(St),st=t(zt),ot=t(`\\right)^\\nu
    K_`),ht=t(Ct),dt=t("\\left(\\frac"),ct=t(Jt),ut=t(Lt),ft=t(`\\right) $$ where
    $K_`),$t=t(Ht),mt=t(`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function.`),this.h()},l(y){d=i(y,"SECTION",{class:!0});var f=h(d);T=i(f,"H2",{});var Nt=h(T);H=n(Nt,"RBF $\\rightarrow$ Matern"),Nt.forEach(s),N=v(f),r=i(f,"DIV",{});var l=h(r);V=n(l,`The RBF kernel is defined as
    `),W=i(l,"BR",{}),j=n(l," $$ k(x,x') = \\exp\\left(-\\frac"),O=n(l,pt),P=n(l,yt),U=n(l,`\\right) $$
    where $d(x,x') \\geq 0$ is the Euclidean distance between $x$ and $x'$ and
    $\\rho$ is a hyperparameter. The RBF kernel is infinitely differentiable and
    is positive definite.
    `),A=i(l,"BR",{}),Q=n(l,`
    The Matern kernel is a generalization of the RBF kernel. It is defined as
    `),X=i(l,"BR",{}),Y=n(l," $$ k(x,x') = \\frac"),Z=n(l,_t),ee=n(l,wt),te=n(l,"\\left(\\frac"),ne=n(l,xt),ae=n(l,kt),ie=n(l,`\\right)^\\nu
    K_`),re=n(l,gt),le=n(l,"\\left(\\frac"),se=n(l,Bt),oe=n(l,Mt),he=n(l,`\\right) $$ where
    $K_`),de=n(l,Tt),ce=n(l,`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function. For $\\nu=1/2$, the Matern kernel reduces to the RBF kernel.
    For $\\nu=1$, the Matern kernel reduces to the absolute exponential kernel.
    For $\\nu\\rightarrow\\infty$, the Matern kernel reduces to the absolute
    exponential kernel. The Matern kernel is infinitely differentiable and is
    positive definite. The Matern kernel is also isotropic. The Matern kernel is
    defined for $d(x,x')\\geq 0$.`),l.forEach(s),ue=v(f),E=i(f,"H3",{});var Vt=h(E);fe=n(Vt,"Intuition"),Vt.forEach(s),$e=v(f),u=i(f,"DIV",{});var $=h(u);me=n($,`It's common to say that the Bessel functions are the solutions of the Bessel
    Differential Equation, but thats not much of an explanation. We arrive at
    the Bessel Differential Equation by transforming the wave equation into
    cylindrical co-ordinates.
    `),ve=i($,"BR",{}),be=v($),pe=i($,"BR",{}),ye=n($,`
    Intuitively The Bessel functions are what you get in two dimensions by taking
    superpositions of sine waves with circular symmetry. If you draw a circle 100
    meters in diameter, and put 1000 sources around the circumference of the circle,
    and have them transmit sine waves towards the center, all synchronized in phase,
    then the disturbance you get in the middle is described by a Bessel function
    … actually, $J_0$. If we do the same thing but have the source phase delayed
    linearly in a clockwise direction, so that when you come full circle they are
    back in phase again…that's the next Bessel function, $J_1$. Double the phase
    delay, and you get $J_2$, and so on.
    `),_e=i($,"BR",{}),we=n($,`
    So the RBF is effectively the same thing as a bessel function where on a membrane,
    rather than one 'dip', i.e as in dropping a ball in the center, In the Matern
    Kernel there may be an arbitrary amount of dips of varying hights say as when
    we beat a drum. The Gamma function is just a normalization factor which comes
    with some mathematical trickery.
    `),xe=i($,"BR",{}),ke=v($),ge=i($,"BR",{}),Be=n($,`
    The main power of a Matern kernel is that it allows for non-stationary processes.
    The RBF kernel is stationary, meaning that the covariance between two points
    $x$ and $x'$ is independent of the distance between them. The Matern kernel is
    non-stationary, meaning that the covariance between two points $x$ and $x'$ is
    dependent on the distance between them making it much more flexible. Non-stationary
    kernels have proved to be very useful for modeling data that exhibit spatially
    varying behavior, such as weather patterns or population density. `),Me=i($,"BR",{}),$.forEach(s),Te=v(f),M=i(f,"DIV",{});var J=h(M);R=i(J,"H4",{});var Wt=h(R);Ee=n(Wt,"Special Cases"),Wt.forEach(s),Re=v(J),b=i(J,"UL",{});var g=h(b);w=i(g,"LI",{});var G=h(w);I=i(G,"B",{});var jt=h(I);Ie=n(jt,"nu = 0.5:"),jt.forEach(s),Fe=n(G," Matern reduces to $e^"),qe=n(G,Et),De=n(G,"$ i.e exponential distance"),G.forEach(s),Ke=v(g),x=i(g,"LI",{});var S=h(x);F=i(S,"B",{});var Ot=h(F);Ge=n(Ot,"nu = 1.5:"),Ot.forEach(s),Se=n(S," Matern reduces to $(1+ \\sqrt(3) d) e^"),ze=n(S,Rt),Ce=n(S,"$"),S.forEach(s),Je=v(g),p=i(g,"LI",{});var B=h(p);q=i(B,"B",{});var Pt=h(q);Le=n(Pt,"nu = 2.5:"),Pt.forEach(s),He=n(B," Matern reduces to $(1+ \\sqrt(5) d + \\frac"),Ne=n(B,It),Ve=n(B,Ft),We=n(B," d^2) e^"),je=n(B,qt),Oe=n(B,"$"),B.forEach(s),Pe=v(g),k=i(g,"LI",{});var z=h(k);D=i(z,"B",{});var Ut=h(D);Ue=n(Ut,"nu = $\\infty$"),Ut.forEach(s),Ae=n(z," Matern reduces to $e^"),Qe=n(z,Dt),Xe=n(z,`$ i.e RBF
        kernel`),z.forEach(s),g.forEach(s),J.forEach(s),f.forEach(s),C=v(y),_=i(y,"SECTION",{class:!0});var L=h(_);K=i(L,"H2",{});var At=h(K);Ye=n(At,"Matern $\\rightarrow$ Wendland"),At.forEach(s),Ze=v(L),o=i(L,"DIV",{});var c=h(o);et=n(c,`The Matern kernel is defined as
    `),tt=i(c,"BR",{}),nt=n(c," $$ k(x,x') = \\frac"),at=n(c,Kt),it=n(c,Gt),rt=n(c,"\\left(\\frac"),lt=n(c,St),st=n(c,zt),ot=n(c,`\\right)^\\nu
    K_`),ht=n(c,Ct),dt=n(c,"\\left(\\frac"),ct=n(c,Jt),ut=n(c,Lt),ft=n(c,`\\right) $$ where
    $K_`),$t=n(c,Ht),mt=n(c,`$ is the modified Bessel function of the second kind and
    $\\Gamma$ is the gamma function. The parameter $\\nu$ controls the smoothness
    of the function.`),c.forEach(s),L.forEach(s),this.h()},h(){Qt(d,"class","svelte-2crdhv"),Qt(_,"class","svelte-2crdhv")},m(y,f){vt(y,d,f),e(d,T),e(T,H),e(d,N),e(d,r),e(r,V),e(r,W),e(r,j),e(r,O),e(r,P),e(r,U),e(r,A),e(r,Q),e(r,X),e(r,Y),e(r,Z),e(r,ee),e(r,te),e(r,ne),e(r,ae),e(r,ie),e(r,re),e(r,le),e(r,se),e(r,oe),e(r,he),e(r,de),e(r,ce),e(d,ue),e(d,E),e(E,fe),e(d,$e),e(d,u),e(u,me),e(u,ve),e(u,be),e(u,pe),e(u,ye),e(u,_e),e(u,we),e(u,xe),e(u,ke),e(u,ge),e(u,Be),e(u,Me),e(d,Te),e(d,M),e(M,R),e(R,Ee),e(M,Re),e(M,b),e(b,w),e(w,I),e(I,Ie),e(w,Fe),e(w,qe),e(w,De),e(b,Ke),e(b,x),e(x,F),e(F,Ge),e(x,Se),e(x,ze),e(x,Ce),e(b,Je),e(b,p),e(p,q),e(q,Le),e(p,He),e(p,Ne),e(p,Ve),e(p,We),e(p,je),e(p,Oe),e(b,Pe),e(b,k),e(k,D),e(D,Ue),e(k,Ae),e(k,Qe),e(k,Xe),vt(y,C,f),vt(y,_,f),e(_,K),e(K,Ye),e(_,Ze),e(_,o),e(o,et),e(o,tt),e(o,nt),e(o,at),e(o,it),e(o,rt),e(o,lt),e(o,st),e(o,ot),e(o,ht),e(o,dt),e(o,ct),e(o,ut),e(o,ft),e(o,$t),e(o,mt)},p:bt,i:bt,o:bt,d(y){y&&s(d),y&&s(C),y&&s(_)}}}class an extends Yt{constructor(d){super(),Zt(this,d,null,tn,en,{})}}export{an as default};
