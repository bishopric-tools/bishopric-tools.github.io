import{s as G,O as V,P as Q,f as P,a as j,l as M,g as S,w as T,c as B,h as L,m as N,d as _,j as x,i as C,y as w,z as U,Q as J,K as W,p as X,R as Y,I as Z}from"../chunks/scheduler.040d6b8f.js";import{S as H,i as K,b as E,d as I,m as A,a as F,t as R,e as q,f as ee}from"../chunks/index.f15851d2.js";import{w as te}from"../chunks/index.60b351e8.js";import{B as z,a as ae,A as se,g as ne}from"../chunks/navigation.1c437f2f.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.063c4f60.js";import{A as re,f as le,c as oe,a as ie,L as ue,T as me}from"../chunks/fo-dator.cf934cd7.js";function fe(s){var p,b,m;let e,a,t,n;function c(l){s[10](l)}let h={type:"email",name:"email",label:"Username",placeholder:"Email",disabled:s[1],isInvalid:((p=s[2])==null?void 0:p.email)!==void 0,helperMessage:(m=(b=s[2])==null?void 0:b.email)==null?void 0:m.message,novalidate:!0,required:!0};return s[0].email!==void 0&&(h.value=s[0].email),a=new me({props:h}),X.push(()=>ee(a,"value",c)),a.$on("input",s[8]),{c(){e=P("div"),E(a.$$.fragment),this.h()},l(l){e=S(l,"DIV",{class:!0});var i=L(e);I(a.$$.fragment,i),i.forEach(_),this.h()},h(){x(e,"class","space-y-2")},m(l,i){C(l,e,i),A(a,e,null),n=!0},p(l,i){var d,g,$;const f={};i&2&&(f.disabled=l[1]),i&4&&(f.isInvalid=((d=l[2])==null?void 0:d.email)!==void 0),i&4&&(f.helperMessage=($=(g=l[2])==null?void 0:g.email)==null?void 0:$.message),!t&&i&1&&(t=!0,f.value=l[0].email,Y(()=>t=!1)),a.$set(f)},i(l){n||(F(a.$$.fragment,l),n=!0)},o(l){R(a.$$.fragment,l),n=!1},d(l){l&&_(e),q(a)}}}function ce(s){let e;return{c(){e=M("Reset")},l(a){e=N(a,"Reset")},m(a,t){C(a,e,t)},d(a){a&&_(e)}}}function de(s){let e;return{c(){e=M("Submit")},l(a){e=N(a,"Submit")},m(a,t){C(a,e,t)},d(a){a&&_(e)}}}function $e(s){let e,a="Forgot Password",t,n,c,h,p,b,m,l="Sign up",i,f,d,g,$,y,D,o;return c=new ue({props:{class:"space-y-2",$$slots:{default:[fe]},$$scope:{ctx:s}}}),d=new z({props:{type:"button",class:"mr-3",color:"alternative",disabled:s[1],$$slots:{default:[ce]},$$scope:{ctx:s}}}),d.$on("click",s[7]),$=new z({props:{type:"button",$$slots:{default:[de]},$$scope:{ctx:s}}}),$.$on("click",s[9]),{c(){e=P("h1"),e.textContent=a,t=j(),n=P("form"),E(c.$$.fragment),h=j(),p=P("div"),b=M("Not registered? "),m=P("a"),m.textContent=l,i=j(),f=P("div"),E(d.$$.fragment),g=j(),E($.$$.fragment),this.h()},l(r){e=S(r,"H1",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-i2x120"&&(e.textContent=a),t=B(r),n=S(r,"FORM",{class:!0});var u=L(n);I(c.$$.fragment,u),h=B(u),p=S(u,"DIV",{class:!0});var k=L(p);b=N(k,"Not registered? "),m=S(k,"A",{href:!0,class:!0,"data-svelte-h":!0}),T(m)!=="svelte-xwhabj"&&(m.textContent=l),k.forEach(_),i=B(u),f=S(u,"DIV",{class:!0});var v=L(f);I(d.$$.fragment,v),g=B(v),I($.$$.fragment,v),v.forEach(_),u.forEach(_),this.h()},h(){x(e,"class","text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"),x(m,"href","/auth/sign-up"),x(m,"class","text-primary-700 hover:underline dark:text-primary-500"),x(p,"class","text-sm font-medium text-gray-500 dark:text-gray-300"),x(f,"class","flex justify-end"),x(n,"class","space-y-4 md:space-y-6"),n.noValidate=!0},m(r,u){C(r,e,u),C(r,t,u),C(r,n,u),A(c,n,null),w(n,h),w(n,p),w(p,b),w(p,m),w(n,i),w(n,f),A(d,f,null),w(f,g),A($,f,null),y=!0,D||(o=[U(m,"click",s[7]),U(n,"submit",J(s[9]))],D=!0)},p(r,u){const k={};u&32775&&(k.$$scope={dirty:u,ctx:r}),c.$set(k);const v={};u&2&&(v.disabled=r[1]),u&32768&&(v.$$scope={dirty:u,ctx:r}),d.$set(v);const O={};u&32768&&(O.$$scope={dirty:u,ctx:r}),$.$set(O)},i(r){y||(F(c.$$.fragment,r),F(d.$$.fragment,r),F($.$$.fragment,r),y=!0)},o(r){R(c.$$.fragment,r),R(d.$$.fragment,r),R($.$$.fragment,r),y=!1},d(r){r&&(_(e),_(t),_(n)),q(c),q(d),q($),D=!1,W(o)}}}function pe(s){let e,a;return e=new re({props:{$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){A(e,t,n),a=!0},p(t,[n]){const c={};n&32775&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){a||(F(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function ge(s,e,a){let t,n,c,h;const{actions:{triggerResetPassword:p},store:{loading:b}}=ae;V(s,b,o=>a(1,c=o));const m=te({email:""});V(s,m,o=>a(0,t=o));const{errors:l,submitted:i,validate:f,reset:d}=le(oe({email:ie().required("Email is required").email("Email is not valid")}));V(s,l,o=>a(2,h=o)),V(s,i,o=>a(11,n=o));const g=()=>{m.set({email:""}),i.set(!1),d()},$=async()=>{if(!n)return;const{email:o}=t;await f({email:o})},y=async()=>{try{i.set(!0);const{email:o}=t;await f({email:o});const r=await p(o,`${se.APP_BASE_URL}/auth/update-password`);r!=null&&r.success&&(g(),await ne("/auth/sign-in"))}catch(o){console.log("submit failed",o)}};Q(g);function D(o){s.$$.not_equal(t.email,o)&&(t.email=o,m.set(t))}return[t,c,h,b,m,l,i,g,$,y,D]}class _e extends H{constructor(e){super(),K(this,e,ge,pe,G,{})}}function he(s){let e,a;return e=new _e({}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){A(e,t,n),a=!0},p:Z,i(t){a||(F(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}class Pe extends H{constructor(e){super(),K(this,e,null,he,G,{})}}export{Pe as component};
