import{s as q,b as B,k as E,n as H}from"../chunks/scheduler.f5d5ad8b.js";import{S as F,i as I,r as d,u as g,v as _,d as h,t as x,w as v,g as C,s as y,h as k,j as M,y as A,c as P,f as w,k as b,a as S,A as p,G as N,m as G,n as O}from"../chunks/index.ae74f566.js";import{B as T,A as U,a as j}from"../chunks/auth.state.34418e9f.js";import{C as z,L as D,I as V}from"../chunks/Input.1a5f0168.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.063c4f60.js";import{g as J}from"../chunks/navigation.c6e34cfc.js";function K(o){let t,a="Email",e,n,r,m;function c(s){o[2](s)}let $={type:"email",name:"email",placeholder:"name@company.com",required:!0};return o[0].email!==void 0&&($.value=o[0].email),n=new V({props:$}),B.push(()=>N(n,"value",c)),{c(){t=C("span"),t.textContent=a,e=y(),d(n.$$.fragment)},l(s){t=k(s,"SPAN",{"data-svelte-h":!0}),A(t)!=="svelte-1bg9cgq"&&(t.textContent=a),e=P(s),g(n.$$.fragment,s)},m(s,l){S(s,t,l),S(s,e,l),_(n,s,l),m=!0},p(s,l){const f={};!r&&l&1&&(r=!0,f.value=s[0].email,E(()=>r=!1)),n.$set(f)},i(s){m||(h(n.$$.fragment,s),m=!0)},o(s){x(n.$$.fragment,s),m=!1},d(s){s&&(w(t),w(e)),v(n,s)}}}function Q(o){let t;return{c(){t=G("Restore email password")},l(a){t=O(a,"Restore email password")},m(a,e){S(a,t,e)},d(a){a&&w(t)}}}function W(o){let t,a,e="Forgot Password?",n,r,m,c,$='Not registered? <a href="/auth/sign-up" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>',s,l,f;return r=new D({props:{class:"space-y-2",$$slots:{default:[K]},$$scope:{ctx:o}}}),l=new T({props:{type:"button",class:"w-full",$$slots:{default:[Q]},$$scope:{ctx:o}}}),l.$on("click",o[1]),{c(){t=C("form"),a=C("h3"),a.textContent=e,n=y(),d(r.$$.fragment),m=y(),c=C("div"),c.innerHTML=$,s=y(),d(l.$$.fragment),this.h()},l(u){t=k(u,"FORM",{class:!0,action:!0});var i=M(t);a=k(i,"H3",{class:!0,"data-svelte-h":!0}),A(a)!=="svelte-148u7v1"&&(a.textContent=e),n=P(i),g(r.$$.fragment,i),m=P(i),c=k(i,"DIV",{class:!0,"data-svelte-h":!0}),A(c)!=="svelte-1rrzm7r"&&(c.innerHTML=$),s=P(i),g(l.$$.fragment,i),i.forEach(w),this.h()},h(){b(a,"class","text-xl font-medium text-gray-900 dark:text-white"),b(c,"class","text-sm font-medium text-gray-500 dark:text-gray-300"),b(t,"class","flex flex-col space-y-6"),b(t,"action","/")},m(u,i){S(u,t,i),p(t,a),p(t,n),_(r,t,null),p(t,m),p(t,c),p(t,s),_(l,t,null),f=!0},p(u,i){const L={};i&17&&(L.$$scope={dirty:i,ctx:u}),r.$set(L);const R={};i&16&&(R.$$scope={dirty:i,ctx:u}),l.$set(R)},i(u){f||(h(r.$$.fragment,u),h(l.$$.fragment,u),f=!0)},o(u){x(r.$$.fragment,u),x(l.$$.fragment,u),f=!1},d(u){u&&w(t),v(r),v(l)}}}function X(o){let t,a;return t=new z({props:{class:"w-full max-w-md",$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,n){_(t,e,n),a=!0},p(e,[n]){const r={};n&17&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){x(t.$$.fragment,e),a=!1},d(e){v(t,e)}}}function Y(o,t,a){const{actions:{triggerResetPassword:e}}=j;let n={email:""};const r=async()=>{console.log("### onSubmit",n),await e(n.email,`${U.APP_BASE_URL}/auth/update-password`),await J("/")};function m(c){o.$$.not_equal(n.email,c)&&(n.email=c,a(0,n))}return[n,r,m]}class Z extends F{constructor(t){super(),I(this,t,Y,X,q,{})}}function tt(o){let t,a;return t=new Z({}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,n){_(t,e,n),a=!0},p:H,i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){x(t.$$.fragment,e),a=!1},d(e){v(t,e)}}}class lt extends F{constructor(t){super(),I(this,t,null,tt,q,{})}}export{lt as component};
