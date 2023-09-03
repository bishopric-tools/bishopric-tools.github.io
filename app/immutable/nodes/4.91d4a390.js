import{s as R,f as b,a as y,g as k,w as L,c as C,h as E,d as f,j as P,i as v,y as A,p as F,O as H,l as D,m as M,K as N}from"../chunks/scheduler.3ea34062.js";import{S as q,i as B,b as $,d as p,m as d,a as g,t as _,e as h,f as O}from"../chunks/index.6ddf9fe6.js";import{B as T,A as U,a as V}from"../chunks/auth.state.0703a52c.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.063c4f60.js";import{A as j,L as z,I as G}from"../chunks/AuthSection.133f336e.js";import{g as K}from"../chunks/navigation.d57dcb74.js";function J(o){let t,n,e;function a(s){o[2](s)}let l={type:"email",name:"email",placeholder:"Email",required:!0};return o[0].email!==void 0&&(l.value=o[0].email),t=new G({props:l}),F.push(()=>O(t,"value",a)),{c(){$(t.$$.fragment)},l(s){p(t.$$.fragment,s)},m(s,u){d(t,s,u),e=!0},p(s,u){const m={};!n&&u&1&&(n=!0,m.value=s[0].email,H(()=>n=!1)),t.$set(m)},i(s){e||(g(t.$$.fragment,s),e=!0)},o(s){_(t.$$.fragment,s),e=!1},d(s){h(t,s)}}}function Q(o){let t;return{c(){t=D("Restore email password")},l(n){t=M(n,"Restore email password")},m(n,e){v(n,t,e)},d(n){n&&f(t)}}}function W(o){let t,n="Forgot Password",e,a,l,s,u,m='Not registered? <a href="/auth/sign-up" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>',w,c,x;return l=new z({props:{class:"space-y-2",$$slots:{default:[J]},$$scope:{ctx:o}}}),c=new T({props:{type:"button",class:"w-full",$$slots:{default:[Q]},$$scope:{ctx:o}}}),c.$on("click",o[1]),{c(){t=b("h1"),t.textContent=n,e=y(),a=b("div"),$(l.$$.fragment),s=y(),u=b("div"),u.innerHTML=m,w=y(),$(c.$$.fragment),this.h()},l(r){t=k(r,"H1",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-i2x120"&&(t.textContent=n),e=C(r),a=k(r,"DIV",{class:!0});var i=E(a);p(l.$$.fragment,i),s=C(i),u=k(i,"DIV",{class:!0,"data-svelte-h":!0}),L(u)!=="svelte-1rrzm7r"&&(u.innerHTML=m),w=C(i),p(c.$$.fragment,i),i.forEach(f),this.h()},h(){P(t,"class","text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"),P(u,"class","text-sm font-medium text-gray-500 dark:text-gray-300"),P(a,"class","flex flex-col space-y-6")},m(r,i){v(r,t,i),v(r,e,i),v(r,a,i),d(l,a,null),A(a,s),A(a,u),A(a,w),d(c,a,null),x=!0},p(r,i){const S={};i&17&&(S.$$scope={dirty:i,ctx:r}),l.$set(S);const I={};i&16&&(I.$$scope={dirty:i,ctx:r}),c.$set(I)},i(r){x||(g(l.$$.fragment,r),g(c.$$.fragment,r),x=!0)},o(r){_(l.$$.fragment,r),_(c.$$.fragment,r),x=!1},d(r){r&&(f(t),f(e),f(a)),h(l),h(c)}}}function X(o){let t,n;return t=new j({props:{$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){$(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p(e,[a]){const l={};a&17&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function Y(o,t,n){const{actions:{triggerResetPassword:e}}=V;let a={email:""};const l=async()=>{await e(a.email,`${U.APP_BASE_URL}/auth/update-password`),await K("/")};function s(u){o.$$.not_equal(a.email,u)&&(a.email=u,n(0,a))}return[a,l,s]}class Z extends q{constructor(t){super(),B(this,t,Y,X,R,{})}}function tt(o){let t,n;return t=new Z({}),{c(){$(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,a){d(t,e,a),n=!0},p:N,i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}class ot extends q{constructor(t){super(),B(this,t,null,tt,R,{})}}export{ot as component};
