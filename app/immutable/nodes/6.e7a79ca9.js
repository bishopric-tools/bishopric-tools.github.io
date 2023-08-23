import{s as O,b as F,k as H,n as Y}from"../chunks/scheduler.f5d5ad8b.js";import{S as R,i as V,r as c,u as _,v as g,d,t as v,w as h,g as S,s as b,h as k,j as K,y as A,c as x,f as w,k as P,a as C,A as q,G as M,m as Q,n as W}from"../chunks/index.ae74f566.js";import{B as X,a as Z}from"../chunks/auth.state.34418e9f.js";import{C as ee,L as I,I as j}from"../chunks/Input.1a5f0168.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.063c4f60.js";function te(l){let t,s="Email",a,n,u,o;function $(e){l[2](e)}let m={type:"email",name:"email",placeholder:"name@company.com",required:!0};return l[0].email!==void 0&&(m.value=l[0].email),n=new j({props:m}),F.push(()=>M(n,"value",$)),{c(){t=S("span"),t.textContent=s,a=b(),c(n.$$.fragment)},l(e){t=k(e,"SPAN",{"data-svelte-h":!0}),A(t)!=="svelte-1bg9cgq"&&(t.textContent=s),a=x(e),_(n.$$.fragment,e)},m(e,r){C(e,t,r),C(e,a,r),g(n,e,r),o=!0},p(e,r){const p={};!u&&r&1&&(u=!0,p.value=e[0].email,H(()=>u=!1)),n.$set(p)},i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(w(t),w(a)),h(n,e)}}}function ne(l){let t,s="Your password",a,n,u,o;function $(e){l[3](e)}let m={type:"password",name:"password",placeholder:"•••••",required:!0};return l[0].password!==void 0&&(m.value=l[0].password),n=new j({props:m}),F.push(()=>M(n,"value",$)),{c(){t=S("span"),t.textContent=s,a=b(),c(n.$$.fragment)},l(e){t=k(e,"SPAN",{"data-svelte-h":!0}),A(t)!=="svelte-1nyqqaq"&&(t.textContent=s),a=x(e),_(n.$$.fragment,e)},m(e,r){C(e,t,r),C(e,a,r),g(n,e,r),o=!0},p(e,r){const p={};!u&&r&1&&(u=!0,p.value=e[0].password,H(()=>u=!1)),n.$set(p)},i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(w(t),w(a)),h(n,e)}}}function ae(l){let t,s="First name",a,n,u,o;function $(e){l[4](e)}let m={type:"text",name:"first-name",placeholder:"John",required:!0};return l[0].firstName!==void 0&&(m.value=l[0].firstName),n=new j({props:m}),F.push(()=>M(n,"value",$)),{c(){t=S("span"),t.textContent=s,a=b(),c(n.$$.fragment)},l(e){t=k(e,"SPAN",{"data-svelte-h":!0}),A(t)!=="svelte-1kfqwgv"&&(t.textContent=s),a=x(e),_(n.$$.fragment,e)},m(e,r){C(e,t,r),C(e,a,r),g(n,e,r),o=!0},p(e,r){const p={};!u&&r&1&&(u=!0,p.value=e[0].firstName,H(()=>u=!1)),n.$set(p)},i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(w(t),w(a)),h(n,e)}}}function se(l){let t,s="Last name",a,n,u,o;function $(e){l[5](e)}let m={type:"text",name:"last-name",placeholder:"Doe",required:!0};return l[0].lastName!==void 0&&(m.value=l[0].lastName),n=new j({props:m}),F.push(()=>M(n,"value",$)),{c(){t=S("span"),t.textContent=s,a=b(),c(n.$$.fragment)},l(e){t=k(e,"SPAN",{"data-svelte-h":!0}),A(t)!=="svelte-d4gu7j"&&(t.textContent=s),a=x(e),_(n.$$.fragment,e)},m(e,r){C(e,t,r),C(e,a,r),g(n,e,r),o=!0},p(e,r){const p={};!u&&r&1&&(u=!0,p.value=e[0].lastName,H(()=>u=!1)),n.$set(p)},i(e){o||(d(n.$$.fragment,e),o=!0)},o(e){v(n.$$.fragment,e),o=!1},d(e){e&&(w(t),w(a)),h(n,e)}}}function re(l){let t;return{c(){t=Q("Sign up")},l(s){t=W(s,"Sign up")},m(s,a){C(s,t,a)},d(s){s&&w(t)}}}function le(l){let t,s,a="Sign up",n,u,o,$,m,e,r,p,B,N,D,y,E='Already registered? <a href="/auth/sign-in" class="text-primary-700 hover:underline dark:text-primary-500">Sign In</a>',L;return u=new I({props:{class:"space-y-2",$$slots:{default:[te]},$$scope:{ctx:l}}}),$=new I({props:{class:"space-y-2",$$slots:{default:[ne]},$$scope:{ctx:l}}}),e=new I({props:{class:"space-y-2",$$slots:{default:[ae]},$$scope:{ctx:l}}}),p=new I({props:{class:"space-y-2",$$slots:{default:[se]},$$scope:{ctx:l}}}),N=new X({props:{type:"button",class:"w-full",$$slots:{default:[re]},$$scope:{ctx:l}}}),N.$on("click",l[1]),{c(){t=S("form"),s=S("h3"),s.textContent=a,n=b(),c(u.$$.fragment),o=b(),c($.$$.fragment),m=b(),c(e.$$.fragment),r=b(),c(p.$$.fragment),B=b(),c(N.$$.fragment),D=b(),y=S("div"),y.innerHTML=E,this.h()},l(f){t=k(f,"FORM",{class:!0,action:!0});var i=K(t);s=k(i,"H3",{class:!0,"data-svelte-h":!0}),A(s)!=="svelte-dwrs08"&&(s.textContent=a),n=x(i),_(u.$$.fragment,i),o=x(i),_($.$$.fragment,i),m=x(i),_(e.$$.fragment,i),r=x(i),_(p.$$.fragment,i),B=x(i),_(N.$$.fragment,i),D=x(i),y=k(i,"DIV",{class:!0,"data-svelte-h":!0}),A(y)!=="svelte-11d8zll"&&(y.innerHTML=E),i.forEach(w),this.h()},h(){P(s,"class","text-xl font-medium text-gray-900 dark:text-white"),P(y,"class","text-sm font-medium text-gray-500 dark:text-gray-300"),P(t,"class","flex flex-col space-y-6"),P(t,"action","/")},m(f,i){C(f,t,i),q(t,s),q(t,n),g(u,t,null),q(t,o),g($,t,null),q(t,m),g(e,t,null),q(t,r),g(p,t,null),q(t,B),g(N,t,null),q(t,D),q(t,y),L=!0},p(f,i){const T={};i&129&&(T.$$scope={dirty:i,ctx:f}),u.$set(T);const U={};i&129&&(U.$$scope={dirty:i,ctx:f}),$.$set(U);const z={};i&129&&(z.$$scope={dirty:i,ctx:f}),e.$set(z);const G={};i&129&&(G.$$scope={dirty:i,ctx:f}),p.$set(G);const J={};i&128&&(J.$$scope={dirty:i,ctx:f}),N.$set(J)},i(f){L||(d(u.$$.fragment,f),d($.$$.fragment,f),d(e.$$.fragment,f),d(p.$$.fragment,f),d(N.$$.fragment,f),L=!0)},o(f){v(u.$$.fragment,f),v($.$$.fragment,f),v(e.$$.fragment,f),v(p.$$.fragment,f),v(N.$$.fragment,f),L=!1},d(f){f&&w(t),h(u),h($),h(e),h(p),h(N)}}}function ue(l){let t,s;return t=new ee({props:{class:"w-full max-w-md",$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){c(t.$$.fragment)},l(a){_(t.$$.fragment,a)},m(a,n){g(t,a,n),s=!0},p(a,[n]){const u={};n&129&&(u.$$scope={dirty:n,ctx:a}),t.$set(u)},i(a){s||(d(t.$$.fragment,a),s=!0)},o(a){v(t.$$.fragment,a),s=!1},d(a){h(t,a)}}}function ie(l,t,s){const{actions:{signUp:a}}=Z;let n={email:"",password:"",firstName:"",lastName:""};const u=async()=>{console.log("### onSubmit",n),await a(n.email,n.password,n.firstName,n.lastName)};function o(r){l.$$.not_equal(n.email,r)&&(n.email=r,s(0,n))}function $(r){l.$$.not_equal(n.password,r)&&(n.password=r,s(0,n))}function m(r){l.$$.not_equal(n.firstName,r)&&(n.firstName=r,s(0,n))}function e(r){l.$$.not_equal(n.lastName,r)&&(n.lastName=r,s(0,n))}return[n,u,o,$,m,e]}class oe extends R{constructor(t){super(),V(this,t,ie,ue,O,{})}}function fe(l){let t,s;return t=new oe({}),{c(){c(t.$$.fragment)},l(a){_(t.$$.fragment,a)},m(a,n){g(t,a,n),s=!0},p:Y,i(a){s||(d(t.$$.fragment,a),s=!0)},o(a){v(t.$$.fragment,a),s=!1},d(a){h(t,a)}}}class ge extends R{constructor(t){super(),V(this,t,null,fe,O,{})}}export{ge as component};
