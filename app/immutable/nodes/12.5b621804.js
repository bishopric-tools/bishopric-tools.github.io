import{s as z,f as T,l as G,a as y,g as P,h as B,m as I,d as u,c as x,j as D,i as _,x as E,n as H,z as q,e as w,Z as ne,C as re}from"../chunks/scheduler.05098771.js";import{S as M,i as S,b as g,d as b,m as k,a as m,t as h,e as v,g as V,c as N}from"../chunks/index.1afa7b11.js";import{P as Z}from"../chunks/P.6f999832.js";import{r as ee,e as C,u as A,o as F}from"../chunks/rbac.state.f62b17b6.js";import{C as se}from"../chunks/Checkbox.c011db1d.js";import{T as oe,a as ae,b as ie,c as te,d as fe,e as le}from"../chunks/TableHeadCell.8780b8a2.js";function J(c,t,n){const e=c.slice();return e[7]=t[n],e}function K(c,t,n){const e=c.slice();return e[10]=t[n],e}function L(c,t,n){const e=c.slice();return e[10]=t[n],e}function ce(c){let t;return{c(){t=G("Permission")},l(n){t=I(n,"Permission")},m(n,e){_(n,t,e)},d(n){n&&u(t)}}}function ue(c){let t=c[10].name+"",n;return{c(){n=G(t)},l(e){n=I(e,t)},m(e,r){_(e,n,r)},p(e,r){r&2&&t!==(t=e[10].name+"")&&H(n,t)},d(e){e&&u(n)}}}function O(c,t){let n,e,r;return e=new te({props:{$$slots:{default:[ue]},$$scope:{ctx:t}}}),{key:c,first:null,c(){n=w(),g(e.$$.fragment),this.h()},l(l){n=w(),b(e.$$.fragment,l),this.h()},h(){this.first=n},m(l,a){_(l,n,a),k(e,l,a),r=!0},p(l,a){t=l;const s={};a&32770&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(l){r||(m(e.$$.fragment,l),r=!0)},o(l){h(e.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l)}}}function $e(c){let t,n,e=[],r=new Map,l,a;t=new te({props:{$$slots:{default:[ce]},$$scope:{ctx:c}}});let s=C(c[1]);const i=o=>o[10].name;for(let o=0;o<s.length;o+=1){let f=L(c,s,o),$=i(f);r.set($,e[o]=O($,f))}return{c(){g(t.$$.fragment),n=y();for(let o=0;o<e.length;o+=1)e[o].c();l=w()},l(o){b(t.$$.fragment,o),n=x(o);for(let f=0;f<e.length;f+=1)e[f].l(o);l=w()},m(o,f){k(t,o,f),_(o,n,f);for(let $=0;$<e.length;$+=1)e[$]&&e[$].m(o,f);_(o,l,f),a=!0},p(o,f){const $={};f&32768&&($.$$scope={dirty:f,ctx:o}),t.$set($),f&2&&(s=C(o[1]),V(),e=A(e,f,i,1,o,s,r,l.parentNode,F,O,l,L),N())},i(o){if(!a){m(t.$$.fragment,o);for(let f=0;f<s.length;f+=1)m(e[f]);a=!0}},o(o){h(t.$$.fragment,o);for(let f=0;f<e.length;f+=1)h(e[f]);a=!1},d(o){o&&(u(n),u(l)),v(t,o);for(let f=0;f<e.length;f+=1)e[f].d(o)}}}function pe(c){let t=c[7].description+"",n;return{c(){n=G(t)},l(e){n=I(e,t)},m(e,r){_(e,n,r)},p(e,r){r&4&&t!==(t=e[7].description+"")&&H(n,t)},d(e){e&&u(n)}}}function _e(c){let t,n;return t=new se({}),{c(){g(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,r){k(t,e,r),n=!0},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function Q(c,t){let n,e,r;return e=new le({props:{$$slots:{default:[_e]},$$scope:{ctx:t}}}),{key:c,first:null,c(){n=w(),g(e.$$.fragment),this.h()},l(l){n=w(),b(e.$$.fragment,l),this.h()},h(){this.first=n},m(l,a){_(l,n,a),k(e,l,a),r=!0},p(l,a){t=l;const s={};a&32768&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(l){r||(m(e.$$.fragment,l),r=!0)},o(l){h(e.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l)}}}function me(c){let t,n,e=[],r=new Map,l,a;t=new le({props:{$$slots:{default:[pe]},$$scope:{ctx:c}}});let s=C(c[1]);const i=o=>o[10].name;for(let o=0;o<s.length;o+=1){let f=K(c,s,o),$=i(f);r.set($,e[o]=Q($,f))}return{c(){g(t.$$.fragment),n=y();for(let o=0;o<e.length;o+=1)e[o].c();l=y()},l(o){b(t.$$.fragment,o),n=x(o);for(let f=0;f<e.length;f+=1)e[f].l(o);l=x(o)},m(o,f){k(t,o,f),_(o,n,f);for(let $=0;$<e.length;$+=1)e[$]&&e[$].m(o,f);_(o,l,f),a=!0},p(o,f){const $={};f&32772&&($.$$scope={dirty:f,ctx:o}),t.$set($),f&2&&(s=C(o[1]),V(),e=A(e,f,i,1,o,s,r,l.parentNode,F,Q,l,K),N())},i(o){if(!a){m(t.$$.fragment,o);for(let f=0;f<s.length;f+=1)m(e[f]);a=!0}},o(o){h(t.$$.fragment,o);for(let f=0;f<e.length;f+=1)h(e[f]);a=!1},d(o){o&&(u(n),u(l)),v(t,o);for(let f=0;f<e.length;f+=1)e[f].d(o)}}}function U(c,t){let n,e,r;return e=new fe({props:{$$slots:{default:[me]},$$scope:{ctx:t}}}),{key:c,first:null,c(){n=w(),g(e.$$.fragment),this.h()},l(l){n=w(),b(e.$$.fragment,l),this.h()},h(){this.first=n},m(l,a){_(l,n,a),k(e,l,a),r=!0},p(l,a){t=l;const s={};a&32774&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(l){r||(m(e.$$.fragment,l),r=!0)},o(l){h(e.$$.fragment,l),r=!1},d(l){l&&u(n),v(e,l)}}}function he(c){let t=[],n=new Map,e,r,l=C(c[2]);const a=s=>s[7].description;for(let s=0;s<l.length;s+=1){let i=J(c,l,s),o=a(i);n.set(o,t[s]=U(o,i))}return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=w()},l(s){for(let i=0;i<t.length;i+=1)t[i].l(s);e=w()},m(s,i){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(s,i);_(s,e,i),r=!0},p(s,i){i&6&&(l=C(s[2]),V(),t=A(t,i,a,1,s,l,n,e.parentNode,F,U,e,J),N())},i(s){if(!r){for(let i=0;i<l.length;i+=1)m(t[i]);r=!0}},o(s){for(let i=0;i<t.length;i+=1)h(t[i]);r=!1},d(s){s&&u(e);for(let i=0;i<t.length;i+=1)t[i].d(s)}}}function de(c){let t,n,e,r;return t=new ae({props:{$$slots:{default:[$e]},$$scope:{ctx:c}}}),e=new ie({props:{$$slots:{default:[he]},$$scope:{ctx:c}}}),{c(){g(t.$$.fragment),n=y(),g(e.$$.fragment)},l(l){b(t.$$.fragment,l),n=x(l),b(e.$$.fragment,l)},m(l,a){k(t,l,a),_(l,n,a),k(e,l,a),r=!0},p(l,a){const s={};a&32770&&(s.$$scope={dirty:a,ctx:l}),t.$set(s);const i={};a&32774&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){r||(m(t.$$.fragment,l),m(e.$$.fragment,l),r=!0)},o(l){h(t.$$.fragment,l),h(e.$$.fragment,l),r=!1},d(l){l&&u(n),v(t,l),v(e,l)}}}function ge(c){let t,n,e,r,l,a;return l=new oe({props:{$$slots:{default:[de]},$$scope:{ctx:c}}}),{c(){t=T("div"),n=T("p"),e=G(c[0]),r=y(),g(l.$$.fragment),this.h()},l(s){t=P(s,"DIV",{class:!0});var i=B(t);n=P(i,"P",{class:!0});var o=B(n);e=I(o,c[0]),o.forEach(u),r=x(i),b(l.$$.fragment,i),i.forEach(u),this.h()},h(){D(n,"class","dark:text-white text-2xl"),D(t,"class","flex flex-col space-y-3")},m(s,i){_(s,t,i),E(t,n),E(n,e),E(t,r),k(l,t,null),a=!0},p(s,[i]){(!a||i&1)&&H(e,s[0]);const o={};i&32774&&(o.$$scope={dirty:i,ctx:s}),l.$set(o)},i(s){a||(m(l.$$.fragment,s),a=!0)},o(s){h(l.$$.fragment,s),a=!1},d(s){s&&u(t),v(l)}}}function be(c,t,n){let e,r,l;const{store:{roles:a,permissions:s}}=ee;q(c,a,f=>n(6,r=f)),q(c,s,f=>n(2,l=f));let{title:i}=t,{group_id:o}=t;return c.$$set=f=>{"title"in f&&n(0,i=f.title),"group_id"in f&&n(5,o=f.group_id)},c.$$.update=()=>{c.$$.dirty&96&&n(1,e=o?r.filter(f=>f.group_id===o):[]),c.$$.dirty&3&&console.log(`### data ${i}`,e)},[i,e,l,a,s,o,r]}class ke extends M{constructor(t){super(),S(this,t,be,ge,z,{title:0,group_id:5})}}function W(c,t,n){const e=c.slice();return e[2]=t[n],e}function X(c){let t,n,e=C(c[0]),r=[];for(let a=0;a<e.length;a+=1)r[a]=Y(W(c,e,a));const l=a=>h(r[a],1,1,()=>{r[a]=null});return{c(){t=T("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){t=P(a,"DIV",{class:!0});var s=B(t);for(let i=0;i<r.length;i+=1)r[i].l(s);s.forEach(u),this.h()},h(){D(t,"class","flex flex-col space-y-8")},m(a,s){_(a,t,s);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(t,null);n=!0},p(a,s){if(s&1){e=C(a[0]);let i;for(i=0;i<e.length;i+=1){const o=W(a,e,i);r[i]?(r[i].p(o,s),m(r[i],1)):(r[i]=Y(o),r[i].c(),m(r[i],1),r[i].m(t,null))}for(V(),i=e.length;i<r.length;i+=1)l(i);N()}},i(a){if(!n){for(let s=0;s<e.length;s+=1)m(r[s]);n=!0}},o(a){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)h(r[s]);n=!1},d(a){a&&u(t),ne(r,a)}}}function Y(c){let t,n,e,r;return n=new ke({props:{title:c[2].name,group_id:c[2].id}}),{c(){t=T("div"),g(n.$$.fragment),e=y(),this.h()},l(l){t=P(l,"DIV",{class:!0});var a=B(t);b(n.$$.fragment,a),e=x(a),a.forEach(u),this.h()},h(){D(t,"class","flex flex-col space-y-3")},m(l,a){_(l,t,a),k(n,t,null),E(t,e),r=!0},p(l,a){const s={};a&1&&(s.title=l[2].name),a&1&&(s.group_id=l[2].id),n.$set(s)},i(l){r||(m(n.$$.fragment,l),r=!0)},o(l){h(n.$$.fragment,l),r=!1},d(l){l&&u(t),v(n)}}}function ve(c){let t,n,e=c[0]&&c[0].length>0&&X(c);return{c(){e&&e.c(),t=w()},l(r){e&&e.l(r),t=w()},m(r,l){e&&e.m(r,l),_(r,t,l),n=!0},p(r,[l]){r[0]&&r[0].length>0?e?(e.p(r,l),l&1&&m(e,1)):(e=X(r),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(V(),h(e,1,1,()=>{e=null}),N())},i(r){n||(m(e),n=!0)},o(r){h(e),n=!1},d(r){r&&u(t),e&&e.d(r)}}}function we(c,t,n){let e;const{store:{roleGroups:r}}=ee;return q(c,r,l=>n(0,e=l)),[e,r]}class ye extends M{constructor(t){super(),S(this,t,we,ve,z,{})}}function xe(c){let t;return{c(){t=G(`The navbar component can be used to show a list of navigation links positioned on the top side
		of your page based on multiple layouts, sizes, and dropdowns`)},l(n){t=I(n,`The navbar component can be used to show a list of navigation links positioned on the top side
		of your page based on multiple layouts, sizes, and dropdowns`)},m(n,e){_(n,t,e)},d(n){n&&u(t)}}}function Ce(c){let t;return{c(){t=G(`Get started with the responsive navbar component from Flowbite to quickly set up a navigation
		menu for your website and set up the logo, list of pages, CTA button, search input, user profile
		options with a dropdown, and more.`)},l(n){t=I(n,`Get started with the responsive navbar component from Flowbite to quickly set up a navigation
		menu for your website and set up the logo, list of pages, CTA button, search input, user profile
		options with a dropdown, and more.`)},m(n,e){_(n,t,e)},d(n){n&&u(t)}}}function Te(c){let t,n,e="Role Permissions",r,l,a,s,i,o,f,$;return l=new Z({props:{class:"text-lg text-gray-600 dark:text-gray-400",$$slots:{default:[xe]},$$scope:{ctx:c}}}),i=new Z({props:{$$slots:{default:[Ce]},$$scope:{ctx:c}}}),f=new ye({}),{c(){t=T("div"),n=T("h1"),n.textContent=e,r=y(),g(l.$$.fragment),a=y(),s=T("div"),g(i.$$.fragment),o=y(),g(f.$$.fragment),this.h()},l(p){t=P(p,"DIV",{class:!0});var d=B(t);n=P(d,"H1",{class:!0,"data-svelte-h":!0}),re(n)!=="svelte-5lt9pb"&&(n.textContent=e),r=x(d),b(l.$$.fragment,d),d.forEach(u),a=x(p),s=P(p,"DIV",{class:!0});var R=B(s);b(i.$$.fragment,R),R.forEach(u),o=x(p),b(f.$$.fragment,p),this.h()},h(){D(n,"class","text-3xl w-full inline-block mb-2 font-extrabold tracking-tight text-gray-900 dark:text-white"),D(t,"class","pb-8 pt-8"),D(s,"class","pb-8")},m(p,d){_(p,t,d),E(t,n),E(t,r),k(l,t,null),_(p,a,d),_(p,s,d),k(i,s,null),_(p,o,d),k(f,p,d),$=!0},p(p,[d]){const R={};d&1&&(R.$$scope={dirty:d,ctx:p}),l.$set(R);const j={};d&1&&(j.$$scope={dirty:d,ctx:p}),i.$set(j)},i(p){$||(m(l.$$.fragment,p),m(i.$$.fragment,p),m(f.$$.fragment,p),$=!0)},o(p){h(l.$$.fragment,p),h(i.$$.fragment,p),h(f.$$.fragment,p),$=!1},d(p){p&&(u(t),u(a),u(s),u(o)),v(l),v(i),v(f,p)}}}class Re extends M{constructor(t){super(),S(this,t,null,Te,z,{})}}export{Re as component};
