import{s as we,z as O,a1 as ye,p as pe,f as q,a as B,l as Q,g as C,C as ce,c as R,h as H,d as c,m as W,j as I,i as G,x as p,E as Ee,M as ge,y as qe}from"../chunks/scheduler.b53f554c.js";import{S as be,i as ke,b as D,d as x,m as V,a as A,t as M,e as P,f as $e}from"../chunks/index.8dc6213e.js";import{w as Ce}from"../chunks/index.adf7635c.js";import{B as _e}from"../chunks/Button.faff8da5.js";import{T as De}from"../chunks/Toggle.8aaef795.js";import{f as xe,c as Ve,a as he,T as ve}from"../chunks/TextField.422033c6.js";import{a as Ae}from"../chunks/auth.state.423078db.js";import{A as Me}from"../chunks/AuthSection.e3d690f8.js";import{g as Pe}from"../chunks/navigation.8ce23afe.js";function Te(t){let e;return{c(){e=Q("Show password")},l(a){e=W(a,"Show password")},m(a,n){G(a,e,n)},d(a){a&&c(e)}}}function Ue(t){let e;return{c(){e=Q("Reset")},l(a){e=W(a,"Reset")},m(a,n){G(a,e,n)},d(a){a&&c(e)}}}function je(t){let e;return{c(){e=Q("Sign up")},l(a){e=W(a,"Sign up")},m(a,n){G(a,e,n)},d(a){a&&c(e)}}}function Fe(t){var te,se,ae,ne,re,ie;let e,a="Sign Up",n,r,f,u,T,J,h,o,U,S,v,g,w,m,$,K,_,L,b,l,d,j="Sign In",N,X,Y;function Ie(s){t[12](s)}let Z={type:"email",name:"email",label:"Username",placeholder:"Email",disabled:t[3],isInvalid:((te=t[4])==null?void 0:te.email)!==void 0,helperMessage:(ae=(se=t[4])==null?void 0:se.email)==null?void 0:ae.message,novalidate:!0,required:!0};t[2].email!==void 0&&(Z.value=t[2].email),u=new ve({props:Z}),pe.push(()=>$e(u,"value",Ie)),u.$on("input",t[10]);function Se(s){t[13](s)}let ee={type:t[1],name:"password",label:"Password",placeholder:"Password",disabled:t[3],isInvalid:((ne=t[4])==null?void 0:ne.password)!==void 0,helperMessage:(ie=(re=t[4])==null?void 0:re.password)==null?void 0:ie.message,novalidate:!0,required:!0};return t[2].password!==void 0&&(ee.value=t[2].password),o=new ve({props:ee}),pe.push(()=>$e(o,"value",Se)),g=new De({props:{checked:t[0],size:"small",$$slots:{default:[Te]},$$scope:{ctx:t}}}),g.$on("click",t[14]),$=new _e({props:{type:"button",class:"mr-3",color:"alternative",disabled:t[3],$$slots:{default:[Ue]},$$scope:{ctx:t}}}),$.$on("click",t[9]),_=new _e({props:{type:"button",$$slots:{default:[je]},$$scope:{ctx:t}}}),_.$on("click",t[11]),{c(){e=q("h1"),e.textContent=a,n=B(),r=q("div"),f=q("div"),D(u.$$.fragment),J=B(),h=q("div"),D(o.$$.fragment),S=B(),v=q("div"),D(g.$$.fragment),w=B(),m=q("div"),D($.$$.fragment),K=B(),D(_.$$.fragment),L=B(),b=q("div"),l=Q("Already registered? "),d=q("a"),d.textContent=j,this.h()},l(s){e=C(s,"H1",{class:!0,"data-svelte-h":!0}),ce(e)!=="svelte-uy5m8m"&&(e.textContent=a),n=R(s),r=C(s,"DIV",{class:!0});var i=H(r);f=C(i,"DIV",{class:!0});var y=H(f);x(u.$$.fragment,y),y.forEach(c),J=R(i),h=C(i,"DIV",{class:!0});var k=H(h);x(o.$$.fragment,k),k.forEach(c),S=R(i),v=C(i,"DIV",{class:!0});var F=H(v);x(g.$$.fragment,F),F.forEach(c),w=R(i),m=C(i,"DIV",{class:!0});var E=H(m);x($.$$.fragment,E),K=R(E),x(_.$$.fragment,E),E.forEach(c),L=R(i),b=C(i,"DIV",{class:!0});var z=H(b);l=W(z,"Already registered? "),d=C(z,"A",{href:!0,class:!0,"data-svelte-h":!0}),ce(d)!=="svelte-j3f5p7"&&(d.textContent=j),z.forEach(c),i.forEach(c),this.h()},h(){I(e,"class","text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"),I(f,"class","space-y-2"),I(h,"class","space-y-2"),I(v,"class","flex items-start"),I(m,"class","flex justify-end"),I(d,"href","/auth/sign-in"),I(d,"class","text-primary-700 hover:underline dark:text-primary-500"),I(b,"class","text-sm font-medium text-gray-500 dark:text-gray-300"),I(r,"class","space-y-4 md:space-y-6")},m(s,i){G(s,e,i),G(s,n,i),G(s,r,i),p(r,f),V(u,f,null),p(r,J),p(r,h),V(o,h,null),p(r,S),p(r,v),V(g,v,null),p(r,w),p(r,m),V($,m,null),p(m,K),V(_,m,null),p(r,L),p(r,b),p(b,l),p(b,d),N=!0,X||(Y=Ee(d,"click",t[9]),X=!0)},p(s,i){var le,oe,de,ue,fe,me;const y={};i&8&&(y.disabled=s[3]),i&16&&(y.isInvalid=((le=s[4])==null?void 0:le.email)!==void 0),i&16&&(y.helperMessage=(de=(oe=s[4])==null?void 0:oe.email)==null?void 0:de.message),!T&&i&4&&(T=!0,y.value=s[2].email,ge(()=>T=!1)),u.$set(y);const k={};i&2&&(k.type=s[1]),i&8&&(k.disabled=s[3]),i&16&&(k.isInvalid=((ue=s[4])==null?void 0:ue.password)!==void 0),i&16&&(k.helperMessage=(me=(fe=s[4])==null?void 0:fe.password)==null?void 0:me.message),!U&&i&4&&(U=!0,k.value=s[2].password,ge(()=>U=!1)),o.$set(k);const F={};i&1&&(F.checked=s[0]),i&524288&&(F.$$scope={dirty:i,ctx:s}),g.$set(F);const E={};i&8&&(E.disabled=s[3]),i&524288&&(E.$$scope={dirty:i,ctx:s}),$.$set(E);const z={};i&524288&&(z.$$scope={dirty:i,ctx:s}),_.$set(z)},i(s){N||(A(u.$$.fragment,s),A(o.$$.fragment,s),A(g.$$.fragment,s),A($.$$.fragment,s),A(_.$$.fragment,s),N=!0)},o(s){M(u.$$.fragment,s),M(o.$$.fragment,s),M(g.$$.fragment,s),M($.$$.fragment,s),M(_.$$.fragment,s),N=!1},d(s){s&&(c(e),c(n),c(r)),P(u),P(o),P(g),P($),P(_),X=!1,Y()}}}function ze(t){let e,a;return e=new Me({props:{$$slots:{default:[Fe]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,r){V(e,n,r),a=!0},p(n,[r]){const f={};r&524319&&(f.$$scope={dirty:r,ctx:n}),e.$set(f)},i(n){a||(A(e.$$.fragment,n),a=!0)},o(n){M(e.$$.fragment,n),a=!1},d(n){P(e,n)}}}function Be(t,e,a){let n,r,f,u,T;const{actions:{signUp:J},store:{loading:h}}=Ae;O(t,h,l=>a(3,u=l));const o=Ce({email:"",password:""});O(t,o,l=>a(2,r=l));const{errors:U,submitted:S,validate:v,reset:g}=xe(Ve({email:he().required("Email is required").email("Email is not valid"),password:he().required("Password is required")}));O(t,U,l=>a(4,T=l)),O(t,S,l=>a(15,f=l));let w=!1;const m=()=>{o.set({email:"",password:""}),S.set(!1),a(0,w=!1),g()},$=async()=>{if(!f)return;const{email:l,password:d}=r;await v({email:l,password:d})},K=async()=>{try{S.set(!0);const{email:l,password:d}=r;await v({email:l,password:d});const j=await J(l,d);j!=null&&j.success&&(await Pe("/auth/sign-in"),m())}catch(l){console.log("submit failed",l)}};ye(m);function _(l){t.$$.not_equal(r.email,l)&&(r.email=l,o.set(r))}function L(l){t.$$.not_equal(r.password,l)&&(r.password=l,o.set(r))}const b=()=>{a(0,w=!w)};return t.$$.update=()=>{t.$$.dirty&1&&a(1,n=w?"text":"password")},[w,n,r,u,T,h,o,U,S,m,$,K,_,L,b]}class Re extends be{constructor(e){super(),ke(this,e,Be,ze,we,{})}}function He(t){let e,a;return e=new Re({}),{c(){D(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,r){V(e,n,r),a=!0},p:qe,i(n){a||(A(e.$$.fragment,n),a=!0)},o(n){M(e.$$.fragment,n),a=!1},d(n){P(e,n)}}}class Ye extends be{constructor(e){super(),ke(this,e,null,He,we,{})}}export{Ye as component};
