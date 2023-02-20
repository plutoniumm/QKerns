import{S as Va,i as Ga,s as Qa,k as l,q as e,a as x,l as s,m as $,r as i,h as r,c as m,n as W,p as Za,b as f,F as t,C as na}from"../../../chunks/index-4da46a33.js";function tn(Ua){let K,tt,O,R,z,et,it,d,at,nt,lt,st,ht,rt,ot,la="{i=1}",$t,pt,ct,dt,_t,ut,sa="{-1}",bt,xt,F,B,L,mt,vt,o,wt,Tt,ft,yt,gt,Kt,Rt,ha="{-1}",Bt,Et,Wt,Yt,It,Xt,ra="{-1}",kt,qt,zt,Lt,St,Ct,P,y,X,q,Mt,At,b,S,Jt,Nt,Ot,Ft,oa="{-1}",Pt,Ht,jt,Dt,$a="{-1}",Ut,Vt,Gt,a,Qt,Zt,te,pa="{i=1}",ee,ie,ca="{\\lambda}",ae,da=2+"",ne,le,se,he,re,oe,_a=1+"",$e,ua="{\\lambda}",pe,ce,ba="{i=1}",de,_e,ue,be,xe,me,xa=1+"",ve,ma="{\\lambda}",we,Te,va="{i=1}",fe,ye,ge,Ke,Re,Be,wa="{i=1}",Ee,We,Ye,Ie,Xe,ke,Ta="{\\lambda}",qe,fa=2+"",ze,Le,Se,Ce,Me,Ae,ya="{\\lambda}",Je,ga=2+"",Ne,Oe,Fe,Pe,Ka="{bmatrix}",He,je,Ra="{bmatrix}",De,Ue,Ve,Ge,Qe,Ze,Ba="{\\lambda}",ti,Ea=2+"",ei,ii,ai,ni,li,si,Wa="{\\lambda}",hi,Ya=2+"",ri,oi,Ia=-1+"",$i,pi,Xa=-1+"",ci,di,_i,ui,bi,xi,ka=-1+"",mi,vi,wi,Ti,qa=-1+"",fi,yi,gi,Ki,H,E,C,Ri,Bi,p,Ei,Wi,Yi,Ii,Xi,ki,qi,za="{bmatrix}",zi,Li,La="{bmatrix}",Si,Ci,Mi,Ai,Sa="{x_1, x_2, \\cdots}",Ji,Ni,Oi,j,w,M,Fi,Pi,g,Hi,Ca="{bmatrix}",ji,Di,Ma="{bmatrix}",Ui,Vi,Gi,Qi,Y,A,Zi,ta,J,ea,ia,N,aa;return{c(){K=l("h1"),tt=e("Kernel Functions"),O=x(),R=l("section"),z=l("h2"),et=e("Regression"),it=x(),d=l("p"),at=e(`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),nt=l("br"),lt=e(`
    $$ Y = w^T X $$ `),st=l("br"),ht=e(`
    We do this simply by defining the loss function as the sum of squared errors
    and minimizing it with respect to $w$. We can write this as `),rt=l("br"),ot=e(`
    $$ J(w) = \\min_w \\sum_`),$t=e(la),pt=e("^n (y_i - w^T x_i)^2 $$ "),ct=l("br"),dt=e(`
    Solving this for $w$ gives us `),_t=l("br"),ut=e(`
    $$ w = (X^T X)^`),bt=e(sa),xt=e(" X^T Y $$"),F=x(),B=l("section"),L=l("h2"),mt=e("Non Linearity"),vt=x(),o=l("p"),wt=e(`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),Tt=l("br"),ft=e(`
    $$ Y = w^T \\phi(X) $$ `),yt=l("br"),gt=e(`
    We can then also write the weight matrix as `),Kt=l("br"),Rt=e(`
    $$ w^* = (\\phi^T \\phi)^`),Bt=e(ha),Et=e(" \\phi^T Y $$ "),Wt=l("br"),Yt=e(`
    Let us introduce a regularization term $\\lambda$ such that the weight matrix
    is `),It=l("br"),Xt=e(`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),kt=e(ra),qt=e(" \\phi^T Y $$ "),zt=l("br"),Lt=e(`
    The logic behind adding a regularization term is that we want to penalise the
    slope of the line. This is because we want to avoid overfitting. Adding bias
    results in a lower variance which makes the outputs less sensitive to the inputs.
    The parameter $\\lambda$ is what controls the amount of bias we want to add
    `),St=l("br"),Ct=e(`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),P=x(),y=l("details"),X=l("summary"),q=l("h2"),Mt=e("Restructuring the Weight Matrix"),At=x(),b=l("div"),S=l("b"),Jt=e("Result:"),Nt=x(),Ot=l("br"),Ft=e(`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),Pt=e(oa),Ht=e(" \\phi^T Y $ → "),jt=l("br"),Dt=e(` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),Ut=e($a),Vt=e(" Y $"),Gt=x(),a=l("p"),Qt=e("Let us now define the new loss function along with a regularization term "),Zt=l("br"),te=e(`
    $$ J(w) = \\min_w \\sum_`),ee=e(pa),ie=e("^n (y_i - w^T \\phi(x_i))^2 + \\frac"),ae=e(ca),ne=e(da),le=e(`
    ||w||^2 $$ `),se=l("br"),he=e(`
    We can now solve for $w$ and get `),re=l("br"),oe=e(`
    $$ w^* = \\frac`),$e=e(_a),pe=e(ua),ce=e(" \\sum_"),de=e(ba),_e=e(`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ `),ue=l("br"),be=e(`
    For sake of simplicity let us define a variable $\\alpha$ such that `),xe=l("br"),me=e(`
    $$ \\alpha = \\frac`),ve=e(xa),we=e(ma),Te=e(" \\sum_"),fe=e(va),ye=e(`^n (y_i - w^T
    \\phi(x_i)) $$ `),ge=l("br"),Ke=e(`
    We can now write the weight matrix as `),Re=l("br"),Be=e(`
    $$ w^* = \\sum_`),Ee=e(wa),We=e("^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ "),Ye=l("br"),Ie=e(`
    Let us now substitute this into the loss function and get `),Xe=l("br"),ke=e(`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),qe=e(Ta),ze=e(fa),Le=e(`
    w^T w $$ `),Se=l("br"),Ce=e(`
    expanding and simplifying this will give us `),Me=l("br"),Ae=e(`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),Je=e(ya),Ne=e(ga),Oe=e(" w^T w $$ "),Fe=l("br"),Pe=e(`

    We can see that $\\phi \\phi^T$ is a repeated term. Let us define this new
    matrix as $K$ such that $$ K = \\phi \\phi^T = \\begin`),He=e(Ka),je=e(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),De=e(Ra),Ue=e(" $$ "),Ve=l("br"),Ge=e(`

    This matrix has two very important properties. First, it is symmetric and
    second, it is positive semi-definite. (This also means it is invertible
    which $\\phi^T \\phi$ MAY NOT). We can substitute all $\\phi \\phi^T$ with $K$
    and also $K$ with $K^T$ and get `),Qe=l("br"),Ze=e(`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),ti=e(Ba),ei=e(Ea),ii=e(`
    \\alpha^T K \\alpha $$ `),ai=l("br"),ni=e(`
    Seeting the derivative of this with respect to $\\alpha$ to zero and solving for
    $\\alpha$ gives us (along with $K = \\phi \\phi^T$) `),li=l("br"),si=e(`
    $$ \\alpha* = (K + \\frac`),hi=e(Wa),ri=e(Ya),oi=e(" I)^"),$i=e(Ia),pi=e(` y $$ or $$ \\alpha* = (K
    + \\lambda' I)^`),ci=e(Xa),di=e(" y $$ "),_i=l("br"),ui=e(`
    We have achieved in this section effectively converting one equation to another
    as follows `),bi=l("br"),xi=e(`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),mi=e(ka),vi=e(" \\phi^T Y $$ into "),wi=l("br"),Ti=e(`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),fi=e(qa),yi=e(" Y $$ "),gi=l("br"),Ki=e(`
    By the looks of it we may not have done anything, but as we will see in the next
    section, this step will reduce the computation time by a lot.`),H=x(),E=l("section"),C=l("h2"),Ri=e("Mercer's Theorem"),Bi=x(),p=l("p"),Ei=e(`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),Wi=l("br"),Yi=e(`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),Ii=l("br"),Xi=e(`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),ki=l("br"),qi=e(`
    $$ \\begin`),zi=e(za),Li=e(` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),Si=e(La),Ci=e(" $$ "),Mi=l("br"),Ai=e(`
    is positive semi-definite for any collection $`),Ji=e(Sa),Ni=e(`$
    `),Oi=l("br"),j=x(),w=l("section"),M=l("h2"),Fi=e("The Kernel Trick"),Pi=x(),g=l("p"),Hi=e(`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),ji=e(Ca),Di=e(`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Ui=e(Ma),Vi=e(`
    $$ `),Gi=l("br"),Qi=x(),Y=l("ul"),A=l("li"),Zi=e("First: $K$ is symmetric"),ta=x(),J=l("li"),ea=e(`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),ia=x(),N=l("p"),aa=e("hi"),this.h()},l(h){K=s(h,"H1",{class:!0});var v=$(K);tt=i(v,"Kernel Functions"),v.forEach(r),O=m(h),R=s(h,"SECTION",{class:!0});var D=$(R);z=s(D,"H2",{});var Aa=$(z);et=i(Aa,"Regression"),Aa.forEach(r),it=m(D),d=s(D,"P",{});var u=$(d);at=i(u,`Our objective first is to find the best linear predictor for the response
    variable $Y$ given the covariates $X$. We will assume that the response
    variable $Y$ is a linear combination of the covariates $X$ and derive a
    weight matrix $w$ such that `),nt=s(u,"BR",{}),lt=i(u,`
    $$ Y = w^T X $$ `),st=s(u,"BR",{}),ht=i(u,`
    We do this simply by defining the loss function as the sum of squared errors
    and minimizing it with respect to $w$. We can write this as `),rt=s(u,"BR",{}),ot=i(u,`
    $$ J(w) = \\min_w \\sum_`),$t=i(u,la),pt=i(u,"^n (y_i - w^T x_i)^2 $$ "),ct=s(u,"BR",{}),dt=i(u,`
    Solving this for $w$ gives us `),_t=s(u,"BR",{}),ut=i(u,`
    $$ w = (X^T X)^`),bt=i(u,sa),xt=i(u," X^T Y $$"),u.forEach(r),D.forEach(r),F=m(h),B=s(h,"SECTION",{class:!0});var U=$(B);L=s(U,"H2",{});var Ja=$(L);mt=i(Ja,"Non Linearity"),Ja.forEach(r),vt=m(U),o=s(U,"P",{});var c=$(o);wt=i(c,`We can extend this to non linear mappings for $X$ by introducing a function
    $\\phi$ such that $X \\rightarrow \\phi(X)$. We can then write the desired
    predictor as `),Tt=s(c,"BR",{}),ft=i(c,`
    $$ Y = w^T \\phi(X) $$ `),yt=s(c,"BR",{}),gt=i(c,`
    We can then also write the weight matrix as `),Kt=s(c,"BR",{}),Rt=i(c,`
    $$ w^* = (\\phi^T \\phi)^`),Bt=i(c,ha),Et=i(c," \\phi^T Y $$ "),Wt=s(c,"BR",{}),Yt=i(c,`
    Let us introduce a regularization term $\\lambda$ such that the weight matrix
    is `),It=s(c,"BR",{}),Xt=i(c,`
    $$ w = (\\phi^T \\phi + \\lambda I)^`),kt=i(c,ra),qt=i(c," \\phi^T Y $$ "),zt=s(c,"BR",{}),Lt=i(c,`
    The logic behind adding a regularization term is that we want to penalise the
    slope of the line. This is because we want to avoid overfitting. Adding bias
    results in a lower variance which makes the outputs less sensitive to the inputs.
    The parameter $\\lambda$ is what controls the amount of bias we want to add
    `),St=s(c,"BR",{}),Ct=i(c,`
    We additionally notice that in order to calculate the weight matrix, we need
    also calculate $\\phi^T \\phi$ which is an $n \\times n$ matrix. This is computationally
    expensive and we can instead use a 'kernel trick' to avoid this. Before we do
    that, in the next section we will first set up the necessary background for the
    kernel trick.`),c.forEach(r),U.forEach(r),P=m(h),y=s(h,"DETAILS",{class:!0,style:!0});var V=$(y);X=s(V,"SUMMARY",{});var G=$(X);q=s(G,"H2",{class:!0});var Na=$(q);Mt=i(Na,"Restructuring the Weight Matrix"),Na.forEach(r),At=m(G),b=s(G,"DIV",{class:!0});var T=$(b);S=s(T,"B",{});var Oa=$(S);Jt=i(Oa,"Result:"),Oa.forEach(r),Nt=m(T),Ot=s(T,"BR",{}),Ft=i(T,`
      $ w^* = (\\phi^T \\phi + \\lambda I)^`),Pt=i(T,oa),Ht=i(T," \\phi^T Y $ → "),jt=s(T,"BR",{}),Dt=i(T,` $ w^*
      = \\phi^T (\\phi \\phi^T + \\lambda' I)^`),Ut=i(T,$a),Vt=i(T," Y $"),T.forEach(r),G.forEach(r),Gt=m(V),a=s(V,"P",{});var n=$(a);Qt=i(n,"Let us now define the new loss function along with a regularization term "),Zt=s(n,"BR",{}),te=i(n,`
    $$ J(w) = \\min_w \\sum_`),ee=i(n,pa),ie=i(n,"^n (y_i - w^T \\phi(x_i))^2 + \\frac"),ae=i(n,ca),ne=i(n,da),le=i(n,`
    ||w||^2 $$ `),se=s(n,"BR",{}),he=i(n,`
    We can now solve for $w$ and get `),re=s(n,"BR",{}),oe=i(n,`
    $$ w^* = \\frac`),$e=i(n,_a),pe=i(n,ua),ce=i(n," \\sum_"),de=i(n,ba),_e=i(n,`^n (y_i - w^T \\phi(x_i))
    \\phi(x_i) $$ `),ue=s(n,"BR",{}),be=i(n,`
    For sake of simplicity let us define a variable $\\alpha$ such that `),xe=s(n,"BR",{}),me=i(n,`
    $$ \\alpha = \\frac`),ve=i(n,xa),we=i(n,ma),Te=i(n," \\sum_"),fe=i(n,va),ye=i(n,`^n (y_i - w^T
    \\phi(x_i)) $$ `),ge=s(n,"BR",{}),Ke=i(n,`
    We can now write the weight matrix as `),Re=s(n,"BR",{}),Be=i(n,`
    $$ w^* = \\sum_`),Ee=i(n,wa),We=i(n,"^n \\alpha_i \\phi(x_i) = \\phi^T \\alpha $$ "),Ye=s(n,"BR",{}),Ie=i(n,`
    Let us now substitute this into the loss function and get `),Xe=s(n,"BR",{}),ke=i(n,`
    $$ J(\\alpha) = (y - \\phi \\alpha)^T (y - \\phi \\alpha) + \\frac`),qe=i(n,Ta),ze=i(n,fa),Le=i(n,`
    w^T w $$ `),Se=s(n,"BR",{}),Ce=i(n,`
    expanding and simplifying this will give us `),Me=s(n,"BR",{}),Ae=i(n,`
    $$ J(\\alpha) = y^T y - y^T \\phi \\phi^T \\alpha - \\alpha^T \\phi^T y + \\alpha^T
    \\phi^T \\phi \\alpha + \\frac`),Je=i(n,ya),Ne=i(n,ga),Oe=i(n," w^T w $$ "),Fe=s(n,"BR",{}),Pe=i(n,`

    We can see that $\\phi \\phi^T$ is a repeated term. Let us define this new
    matrix as $K$ such that $$ K = \\phi \\phi^T = \\begin`),He=i(n,Ka),je=i(n,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),De=i(n,Ra),Ue=i(n," $$ "),Ve=s(n,"BR",{}),Ge=i(n,`

    This matrix has two very important properties. First, it is symmetric and
    second, it is positive semi-definite. (This also means it is invertible
    which $\\phi^T \\phi$ MAY NOT). We can substitute all $\\phi \\phi^T$ with $K$
    and also $K$ with $K^T$ and get `),Qe=s(n,"BR",{}),Ze=i(n,`
    $$ J(\\alpha) = y^T y - 2 y^T K \\alpha + \\alpha^T K^2 \\alpha + \\frac`),ti=i(n,Ba),ei=i(n,Ea),ii=i(n,`
    \\alpha^T K \\alpha $$ `),ai=s(n,"BR",{}),ni=i(n,`
    Seeting the derivative of this with respect to $\\alpha$ to zero and solving for
    $\\alpha$ gives us (along with $K = \\phi \\phi^T$) `),li=s(n,"BR",{}),si=i(n,`
    $$ \\alpha* = (K + \\frac`),hi=i(n,Wa),ri=i(n,Ya),oi=i(n," I)^"),$i=i(n,Ia),pi=i(n,` y $$ or $$ \\alpha* = (K
    + \\lambda' I)^`),ci=i(n,Xa),di=i(n," y $$ "),_i=s(n,"BR",{}),ui=i(n,`
    We have achieved in this section effectively converting one equation to another
    as follows `),bi=s(n,"BR",{}),xi=i(n,`
    $$ w^* = (\\phi^T \\phi + \\lambda I)^`),mi=i(n,ka),vi=i(n," \\phi^T Y $$ into "),wi=s(n,"BR",{}),Ti=i(n,`
    $$ w^* = \\phi^T (K + \\lambda' I)^`),fi=i(n,qa),yi=i(n," Y $$ "),gi=s(n,"BR",{}),Ki=i(n,`
    By the looks of it we may not have done anything, but as we will see in the next
    section, this step will reduce the computation time by a lot.`),n.forEach(r),V.forEach(r),H=m(h),E=s(h,"SECTION",{class:!0});var Q=$(E);C=s(Q,"H2",{});var Fa=$(C);Ri=i(Fa,"Mercer's Theorem"),Fa.forEach(r),Bi=m(Q),p=s(Q,"P",{});var _=$(p);Ei=i(_,`A symmetric positive semi-definite function $K(x, y)$ can be expressed as an
    inner product of two vectors $\\phi(x)$ and $\\phi(y)$ such that `),Wi=s(_,"BR",{}),Yi=i(_,`
    $$ K(x, y) = \\langle \\phi(x), \\phi(y) \\rangle $$ for some function $\\phi$ iff
    $K(x,y)$ is positive semi-definite i.e `),Ii=s(_,"BR",{}),Xi=i(_,`
    $$ \\int K(x, y) g(x) g(y) dx dy \\geq 0 \\forall g $$ or equivalently `),ki=s(_,"BR",{}),qi=i(_,`
    $$ \\begin`),zi=i(_,za),Li=i(_,` K(x_1, x_1) & K(x_1, x_2) & \\cdots \\\\ K(x_2, x_1) & \\ddots
    & \\\\ \\vdots & & \\ddots \\end`),Si=i(_,La),Ci=i(_," $$ "),Mi=s(_,"BR",{}),Ai=i(_,`
    is positive semi-definite for any collection $`),Ji=i(_,Sa),Ni=i(_,`$
    `),Oi=s(_,"BR",{}),_.forEach(r),Q.forEach(r),j=m(h),w=s(h,"SECTION",{class:!0});var I=$(w);M=s(I,"H2",{});var Pa=$(M);Fi=i(Pa,"The Kernel Trick"),Pa.forEach(r),Pi=m(I),g=s(I,"P",{});var k=$(g);Hi=i(k,`What Mercer's Theorem lets us do is rewrite every term in the Kernel matrix
    $K$ as only a function of its base features $$ K = \\phi \\phi^T = \\begin`),ji=i(k,Ca),Di=i(k,`
    \\phi(x_1)^T \\phi(x_1) & \\phi(x_1)^T \\phi(x_2) & \\cdots & \\phi(x_1)^T \\phi(x_n)
    \\\\ \\phi(x_2)^T \\phi(x_1) & \\phi(x_2)^T \\phi(x_2) & \\cdots & \\phi(x_2)^T \\phi(x_n)
    \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\phi(x_n)^T \\phi(x_1) & \\phi(x_n)^T \\phi(x_2)
    & \\cdots & \\phi(x_n)^T \\phi(x_n) \\end`),Ui=i(k,Ma),Vi=i(k,`
    $$ `),Gi=s(k,"BR",{}),k.forEach(r),Qi=m(I),Y=s(I,"UL",{class:!0});var Z=$(Y);A=s(Z,"LI",{});var Ha=$(A);Zi=i(Ha,"First: $K$ is symmetric"),Ha.forEach(r),ta=m(Z),J=s(Z,"LI",{});var ja=$(J);ea=i(ja,`Second: $K$ is positive semi-definite (This also means it is invertible
      which $\\phi^T \\phi$ MAY NOT)`),ja.forEach(r),Z.forEach(r),ia=m(I),N=s(I,"P",{});var Da=$(N);aa=i(Da,"hi"),Da.forEach(r),I.forEach(r),this.h()},h(){W(K,"class","w-100 mx-a"),W(R,"class","svelte-1qyrz6f"),W(B,"class","svelte-1qyrz6f"),W(q,"class","d-ib m5"),W(b,"class","mx-a"),W(y,"class","p5 rx20 svelte-1qyrz6f"),Za(y,"border","1px solid #ccc"),W(E,"class","svelte-1qyrz6f"),W(Y,"class","d-ib"),W(w,"class","svelte-1qyrz6f")},m(h,v){f(h,K,v),t(K,tt),f(h,O,v),f(h,R,v),t(R,z),t(z,et),t(R,it),t(R,d),t(d,at),t(d,nt),t(d,lt),t(d,st),t(d,ht),t(d,rt),t(d,ot),t(d,$t),t(d,pt),t(d,ct),t(d,dt),t(d,_t),t(d,ut),t(d,bt),t(d,xt),f(h,F,v),f(h,B,v),t(B,L),t(L,mt),t(B,vt),t(B,o),t(o,wt),t(o,Tt),t(o,ft),t(o,yt),t(o,gt),t(o,Kt),t(o,Rt),t(o,Bt),t(o,Et),t(o,Wt),t(o,Yt),t(o,It),t(o,Xt),t(o,kt),t(o,qt),t(o,zt),t(o,Lt),t(o,St),t(o,Ct),f(h,P,v),f(h,y,v),t(y,X),t(X,q),t(q,Mt),t(X,At),t(X,b),t(b,S),t(S,Jt),t(b,Nt),t(b,Ot),t(b,Ft),t(b,Pt),t(b,Ht),t(b,jt),t(b,Dt),t(b,Ut),t(b,Vt),t(y,Gt),t(y,a),t(a,Qt),t(a,Zt),t(a,te),t(a,ee),t(a,ie),t(a,ae),t(a,ne),t(a,le),t(a,se),t(a,he),t(a,re),t(a,oe),t(a,$e),t(a,pe),t(a,ce),t(a,de),t(a,_e),t(a,ue),t(a,be),t(a,xe),t(a,me),t(a,ve),t(a,we),t(a,Te),t(a,fe),t(a,ye),t(a,ge),t(a,Ke),t(a,Re),t(a,Be),t(a,Ee),t(a,We),t(a,Ye),t(a,Ie),t(a,Xe),t(a,ke),t(a,qe),t(a,ze),t(a,Le),t(a,Se),t(a,Ce),t(a,Me),t(a,Ae),t(a,Je),t(a,Ne),t(a,Oe),t(a,Fe),t(a,Pe),t(a,He),t(a,je),t(a,De),t(a,Ue),t(a,Ve),t(a,Ge),t(a,Qe),t(a,Ze),t(a,ti),t(a,ei),t(a,ii),t(a,ai),t(a,ni),t(a,li),t(a,si),t(a,hi),t(a,ri),t(a,oi),t(a,$i),t(a,pi),t(a,ci),t(a,di),t(a,_i),t(a,ui),t(a,bi),t(a,xi),t(a,mi),t(a,vi),t(a,wi),t(a,Ti),t(a,fi),t(a,yi),t(a,gi),t(a,Ki),f(h,H,v),f(h,E,v),t(E,C),t(C,Ri),t(E,Bi),t(E,p),t(p,Ei),t(p,Wi),t(p,Yi),t(p,Ii),t(p,Xi),t(p,ki),t(p,qi),t(p,zi),t(p,Li),t(p,Si),t(p,Ci),t(p,Mi),t(p,Ai),t(p,Ji),t(p,Ni),t(p,Oi),f(h,j,v),f(h,w,v),t(w,M),t(M,Fi),t(w,Pi),t(w,g),t(g,Hi),t(g,ji),t(g,Di),t(g,Ui),t(g,Vi),t(g,Gi),t(w,Qi),t(w,Y),t(Y,A),t(A,Zi),t(Y,ta),t(Y,J),t(J,ea),t(w,ia),t(w,N),t(N,aa)},p:na,i:na,o:na,d(h){h&&r(K),h&&r(O),h&&r(R),h&&r(F),h&&r(B),h&&r(P),h&&r(y),h&&r(H),h&&r(E),h&&r(j),h&&r(w)}}}class an extends Va{constructor(K){super(),Ga(this,K,null,tn,Qa,{})}}export{an as default};
