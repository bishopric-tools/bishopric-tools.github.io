import{s as O,f as D,a as N,g as E,w as K,c as y,h as Q,d as S,j as F,i as C,y as q,p as I,O as L,l as R,m as W,K as X}from"../chunks/scheduler.3ea34062.js";import{S as G,i as J,b as p,d as m,m as c,a as g,t as _,e as d,f as A}from"../chunks/index.6ddf9fe6.js";import{B as Y,a as Z}from"../chunks/auth.state.0703a52c.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.063c4f60.js";import{A as ee,L as x,I as H}from"../chunks/AuthSection.133f336e.js";function te(r){let e,s,a;function n(t){r[2](t)}let o={type:"email",name:"email",placeholder:"Email",required:!0};return r[0].email!==void 0&&(o.value=r[0].email),e=new H({props:o}),I.push(()=>A(e,"value",n)),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),a=!0},p(t,i){const f={};!s&&i&1&&(s=!0,f.value=t[0].email,L(()=>s=!1)),e.$set(f)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function ae(r){let e,s,a;function n(t){r[3](t)}let o={type:"password",name:"password",placeholder:"Password",required:!0};return r[0].password!==void 0&&(o.value=r[0].password),e=new H({props:o}),I.push(()=>A(e,"value",n)),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),a=!0},p(t,i){const f={};!s&&i&1&&(s=!0,f.value=t[0].password,L(()=>s=!1)),e.$set(f)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function ne(r){let e,s,a;function n(t){r[4](t)}let o={type:"text",name:"first-name",placeholder:"First name",required:!0};return r[0].firstName!==void 0&&(o.value=r[0].firstName),e=new H({props:o}),I.push(()=>A(e,"value",n)),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),a=!0},p(t,i){const f={};!s&&i&1&&(s=!0,f.value=t[0].firstName,L(()=>s=!1)),e.$set(f)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function se(r){let e,s,a;function n(t){r[5](t)}let o={type:"text",name:"last-name",placeholder:"Last name",required:!0};return r[0].lastName!==void 0&&(o.value=r[0].lastName),e=new H({props:o}),I.push(()=>A(e,"value",n)),{c(){p(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,i){c(e,t,i),a=!0},p(t,i){const f={};!s&&i&1&&(s=!0,f.value=t[0].lastName,L(()=>s=!1)),e.$set(f)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function re(r){let e;return{c(){e=R("Sign up")},l(s){e=W(s,"Sign up")},m(s,a){C(s,e,a)},d(s){s&&S(e)}}}function le(r){let e,s="Sign Up",a,n,o,t,i,f,h,$,b,U,v,B,w,M='Already registered? <a href="/auth/sign-in" class="text-primary-700 hover:underline dark:text-primary-500">Sign In</a>',k;return o=new x({props:{class:"space-y-2",$$slots:{default:[te]},$$scope:{ctx:r}}}),i=new x({props:{class:"space-y-2",$$slots:{default:[ae]},$$scope:{ctx:r}}}),h=new x({props:{class:"space-y-2",$$slots:{default:[ne]},$$scope:{ctx:r}}}),b=new x({props:{class:"space-y-2",$$slots:{default:[se]},$$scope:{ctx:r}}}),v=new Y({props:{type:"button",class:"w-full",$$slots:{default:[re]},$$scope:{ctx:r}}}),v.$on("click",r[1]),{c(){e=D("h1"),e.textContent=s,a=N(),n=D("div"),p(o.$$.fragment),t=N(),p(i.$$.fragment),f=N(),p(h.$$.fragment),$=N(),p(b.$$.fragment),U=N(),p(v.$$.fragment),B=N(),w=D("div"),w.innerHTML=M,this.h()},l(l){e=E(l,"H1",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-uy5m8m"&&(e.textContent=s),a=y(l),n=E(l,"DIV",{class:!0});var u=Q(n);m(o.$$.fragment,u),t=y(u),m(i.$$.fragment,u),f=y(u),m(h.$$.fragment,u),$=y(u),m(b.$$.fragment,u),U=y(u),m(v.$$.fragment,u),B=y(u),w=E(u,"DIV",{class:!0,"data-svelte-h":!0}),K(w)!=="svelte-11d8zll"&&(w.innerHTML=M),u.forEach(S),this.h()},h(){F(e,"class","text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"),F(w,"class","text-sm font-medium text-gray-500 dark:text-gray-300"),F(n,"class","space-y-4 md:space-y-6")},m(l,u){C(l,e,u),C(l,a,u),C(l,n,u),c(o,n,null),q(n,t),c(i,n,null),q(n,f),c(h,n,null),q(n,$),c(b,n,null),q(n,U),c(v,n,null),q(n,B),q(n,w),k=!0},p(l,u){const P={};u&129&&(P.$$scope={dirty:u,ctx:l}),o.$set(P);const T={};u&129&&(T.$$scope={dirty:u,ctx:l}),i.$set(T);const V={};u&129&&(V.$$scope={dirty:u,ctx:l}),h.$set(V);const j={};u&129&&(j.$$scope={dirty:u,ctx:l}),b.$set(j);const z={};u&128&&(z.$$scope={dirty:u,ctx:l}),v.$set(z)},i(l){k||(g(o.$$.fragment,l),g(i.$$.fragment,l),g(h.$$.fragment,l),g(b.$$.fragment,l),g(v.$$.fragment,l),k=!0)},o(l){_(o.$$.fragment,l),_(i.$$.fragment,l),_(h.$$.fragment,l),_(b.$$.fragment,l),_(v.$$.fragment,l),k=!1},d(l){l&&(S(e),S(a),S(n)),d(o),d(i),d(h),d(b),d(v)}}}function ue(r){let e,s;return e=new ee({props:{$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){p(e.$$.fragment)},l(a){m(e.$$.fragment,a)},m(a,n){c(e,a,n),s=!0},p(a,[n]){const o={};n&129&&(o.$$scope={dirty:n,ctx:a}),e.$set(o)},i(a){s||(g(e.$$.fragment,a),s=!0)},o(a){_(e.$$.fragment,a),s=!1},d(a){d(e,a)}}}function ie(r,e,s){const{actions:{signUp:a}}=Z;let n={email:"",password:"",firstName:"",lastName:""};const o=async()=>{await a(n.email,n.password,n.firstName,n.lastName)};function t($){r.$$.not_equal(n.email,$)&&(n.email=$,s(0,n))}function i($){r.$$.not_equal(n.password,$)&&(n.password=$,s(0,n))}function f($){r.$$.not_equal(n.firstName,$)&&(n.firstName=$,s(0,n))}function h($){r.$$.not_equal(n.lastName,$)&&(n.lastName=$,s(0,n))}return[n,o,t,i,f,h]}class oe extends G{constructor(e){super(),J(this,e,ie,ue,O,{})}}function fe(r){let e,s;return e=new oe({}),{c(){p(e.$$.fragment)},l(a){m(e.$$.fragment,a)},m(a,n){c(e,a,n),s=!0},p:X,i(a){s||(g(e.$$.fragment,a),s=!0)},o(a){_(e.$$.fragment,a),s=!1},d(a){d(e,a)}}}class _e extends G{constructor(e){super(),J(this,e,null,fe,O,{})}}export{_e as component};
