import{s as z,f as T,l as G,a as y,g as P,h as B,m as I,d as u,c as x,j as D,i as _,x as E,n as H,z as q,e as w,Z as ne,C as se}from"../chunks/scheduler.d39a3720.js";import{S as M,i as S,b as g,d as b,m as k,a as m,t as h,e as v,g as V,c as N}from"../chunks/index.07c9debd.js";import{P as Z}from"../chunks/P.64a1acb6.js";import{r as ee,e as C,u as A,o as F}from"../chunks/rbac.state.c59680ed.js";import{C as re}from"../chunks/Checkbox.658a03f4.js";import{T as oe,a as ae,b as ie,c as te,d as fe,e as le}from"../chunks/TableHeadCell.6a3d90ba.js";function J(c,t,n){const e=c.slice();return e[7]=t[n],e}function K(c,t,n){const e=c.slice();return e[10]=t[n],e}function L(c,t,n){const e=c.slice();return e[10]=t[n],e}function ce(c){let t;return{c(){t=G("Permission")},l(n){t=I(n,"Permission")},m(n,e){_(n,t,e)},d(n){n&&u(t)}}}function ue(c){let t=c[10].name+"",n;return{c(){n=G(t)},l(e){n=I(e,t)},m(e,s){_(e,n,s)},p(e,s){s&2&&t!==(t=e[10].name+"")&&H(n,t)},d(e){e&&u(n)}}}function O(c,t){let n,e,s;return e=new te({props:{$$slots:{default:[ue]},$$scope:{ctx:t}}}),{key:c,first:null,c(){n=w(),g(e.$$.fragment),this.h()},l(l){n=w(),b(e.$$.fragment,l),this.h()},h(){this.first=n},m(l,a){_(l,n,a),k(e,l,a),s=!0},p(l,a){t=l;const r={};a&32770&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(l){s||(m(e.$$.fragment,l),s=!0)},o(l){h(e.$$.fragment,l),s=!1},d(l){l&&u(n),v(e,l)}}}function $e(c){let t,n,e=[],s=new Map,l,a;t=new te({props:{$$slots:{default:[ce]},$$scope:{ctx:c}}});let r=C(c[1]);const i=o=>o[10].name;for(let o=0;o<r.length;o+=1){let f=L(c,r,o),$=i(f);s.set($,e[o]=O($,f))}return{c(){g(t.$$.fragment),n=y();for(let o=0;o<e.length;o+=1)e[o].c();l=w()},l(o){b(t.$$.fragment,o),n=x(o);for(let f=0;f<e.length;f+=1)e[f].l(o);l=w()},m(o,f){k(t,o,f),_(o,n,f);for(let $=0;$<e.length;$+=1)e[$]&&e[$].m(o,f);_(o,l,f),a=!0},p(o,f){const $={};f&32768&&($.$$scope={dirty:f,ctx:o}),t.$set($),f&2&&(r=C(o[1]),V(),e=A(e,f,i,1,o,r,s,l.parentNode,F,O,l,L),N())},i(o){if(!a){m(t.$$.fragment,o);for(let f=0;f<r.length;f+=1)m(e[f]);a=!0}},o(o){h(t.$$.fragment,o);for(let f=0;f<e.length;f+=1)h(e[f]);a=!1},d(o){o&&(u(n),u(l)),v(t,o);for(let f=0;f<e.length;f+=1)e[f].d(o)}}}function pe(c){let t=c[7].description+"",n;return{c(){n=G(t)},l(e){n=I(e,t)},m(e,s){_(e,n,s)},p(e,s){s&4&&t!==(t=e[7].description+"")&&H(n,t)},d(e){e&&u(n)}}}function _e(c){let t,n;return t=new re({}),{c(){g(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,s){k(t,e,s),n=!0},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){v(t,e)}}}function Q(c,t){let n,e,s;return e=new le({props:{$$slots:{default:[_e]},$$scope:{ctx:t}}}),{key:c,first:null,c(){n=w(),g(e.$$.fragment),this.h()},l(l){n=w(),b(e.$$.fragment,l),this.h()},h(){this.first=n},m(l,a){_(l,n,a),k(e,l,a),s=!0},p(l,a){t=l;const r={};a&32768&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(l){s||(m(e.$$.fragment,l),s=!0)},o(l){h(e.$$.fragment,l),s=!1},d(l){l&&u(n),v(e,l)}}}function me(c){let t,n,e=[],s=new Map,l,a;t=new le({props:{$$slots:{default:[pe]},$$scope:{ctx:c}}});let r=C(c[1]);const i=o=>o[10].name;for(let o=0;o<r.length;o+=1){let f=K(c,r,o),$=i(f);s.set($,e[o]=Q($,f))}return{c(){g(t.$$.fragment),n=y();for(let o=0;o<e.length;o+=1)e[o].c();l=y()},l(o){b(t.$$.fragment,o),n=x(o);for(let f=0;f<e.length;f+=1)e[f].l(o);l=x(o)},m(o,f){k(t,o,f),_(o,n,f);for(let $=0;$<e.length;$+=1)e[$]&&e[$].m(o,f);_(o,l,f),a=!0},p(o,f){const $={};f&32772&&($.$$scope={dirty:f,ctx:o}),t.$set($),f&2&&(r=C(o[1]),V(),e=A(e,f,i,1,o,r,s,l.parentNode,F,Q,l,K),N())},i(o){if(!a){m(t.$$.fragment,o);for(let f=0;f<r.length;f+=1)m(e[f]);a=!0}},o(o){h(t.$$.fragment,o);for(let f=0;f<e.length;f+=1)h(e[f]);a=!1},d(o){o&&(u(n),u(l)),v(t,o);for(let f=0;f<e.length;f+=1)e[f].d(o)}}}function U(c,t){let n,e,s;return e=new fe({props:{$$slots:{default:[me]},$$scope:{ctx:t}}}),{key:c,first:null,c(){n=w(),g(e.$$.fragment),this.h()},l(l){n=w(),b(e.$$.fragment,l),this.h()},h(){this.first=n},m(l,a){_(l,n,a),k(e,l,a),s=!0},p(l,a){t=l;const r={};a&32774&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(l){s||(m(e.$$.fragment,l),s=!0)},o(l){h(e.$$.fragment,l),s=!1},d(l){l&&u(n),v(e,l)}}}function he(c){let t=[],n=new Map,e,s,l=C(c[2]);const a=r=>r[7].description;for(let r=0;r<l.length;r+=1){let i=J(c,l,r),o=a(i);n.set(o,t[r]=U(o,i))}return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=w()},l(r){for(let i=0;i<t.length;i+=1)t[i].l(r);e=w()},m(r,i){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(r,i);_(r,e,i),s=!0},p(r,i){i&6&&(l=C(r[2]),V(),t=A(t,i,a,1,r,l,n,e.parentNode,F,U,e,J),N())},i(r){if(!s){for(let i=0;i<l.length;i+=1)m(t[i]);s=!0}},o(r){for(let i=0;i<t.length;i+=1)h(t[i]);s=!1},d(r){r&&u(e);for(let i=0;i<t.length;i+=1)t[i].d(r)}}}function de(c){let t,n,e,s;return t=new ae({props:{$$slots:{default:[$e]},$$scope:{ctx:c}}}),e=new ie({props:{$$slots:{default:[he]},$$scope:{ctx:c}}}),{c(){g(t.$$.fragment),n=y(),g(e.$$.fragment)},l(l){b(t.$$.fragment,l),n=x(l),b(e.$$.fragment,l)},m(l,a){k(t,l,a),_(l,n,a),k(e,l,a),s=!0},p(l,a){const r={};a&32770&&(r.$$scope={dirty:a,ctx:l}),t.$set(r);const i={};a&32774&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){s||(m(t.$$.fragment,l),m(e.$$.fragment,l),s=!0)},o(l){h(t.$$.fragment,l),h(e.$$.fragment,l),s=!1},d(l){l&&u(n),v(t,l),v(e,l)}}}function ge(c){let t,n,e,s,l,a;return l=new oe({props:{$$slots:{default:[de]},$$scope:{ctx:c}}}),{c(){t=T("div"),n=T("p"),e=G(c[0]),s=y(),g(l.$$.fragment),this.h()},l(r){t=P(r,"DIV",{class:!0});var i=B(t);n=P(i,"P",{class:!0});var o=B(n);e=I(o,c[0]),o.forEach(u),s=x(i),b(l.$$.fragment,i),i.forEach(u),this.h()},h(){D(n,"class","dark:text-white text-2xl"),D(t,"class","flex flex-col space-y-3")},m(r,i){_(r,t,i),E(t,n),E(n,e),E(t,s),k(l,t,null),a=!0},p(r,[i]){(!a||i&1)&&H(e,r[0]);const o={};i&32774&&(o.$$scope={dirty:i,ctx:r}),l.$set(o)},i(r){a||(m(l.$$.fragment,r),a=!0)},o(r){h(l.$$.fragment,r),a=!1},d(r){r&&u(t),v(l)}}}function be(c,t,n){let e,s,l;const{store:{roles:a,permissions:r}}=ee;q(c,a,f=>n(6,s=f)),q(c,r,f=>n(2,l=f));let{title:i}=t,{group_id:o}=t;return c.$$set=f=>{"title"in f&&n(0,i=f.title),"group_id"in f&&n(5,o=f.group_id)},c.$$.update=()=>{c.$$.dirty&96&&n(1,e=o?s.filter(f=>f.group_id===o):[])},[i,e,l,a,r,o,s]}class ke extends M{constructor(t){super(),S(this,t,be,ge,z,{title:0,group_id:5})}}function W(c,t,n){const e=c.slice();return e[2]=t[n],e}function X(c){let t,n,e=C(c[0]),s=[];for(let a=0;a<e.length;a+=1)s[a]=Y(W(c,e,a));const l=a=>h(s[a],1,1,()=>{s[a]=null});return{c(){t=T("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){t=P(a,"DIV",{class:!0});var r=B(t);for(let i=0;i<s.length;i+=1)s[i].l(r);r.forEach(u),this.h()},h(){D(t,"class","flex flex-col space-y-8")},m(a,r){_(a,t,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(t,null);n=!0},p(a,r){if(r&1){e=C(a[0]);let i;for(i=0;i<e.length;i+=1){const o=W(a,e,i);s[i]?(s[i].p(o,r),m(s[i],1)):(s[i]=Y(o),s[i].c(),m(s[i],1),s[i].m(t,null))}for(V(),i=e.length;i<s.length;i+=1)l(i);N()}},i(a){if(!n){for(let r=0;r<e.length;r+=1)m(s[r]);n=!0}},o(a){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)h(s[r]);n=!1},d(a){a&&u(t),ne(s,a)}}}function Y(c){let t,n,e,s;return n=new ke({props:{title:c[2].name,group_id:c[2].id}}),{c(){t=T("div"),g(n.$$.fragment),e=y(),this.h()},l(l){t=P(l,"DIV",{class:!0});var a=B(t);b(n.$$.fragment,a),e=x(a),a.forEach(u),this.h()},h(){D(t,"class","flex flex-col space-y-3")},m(l,a){_(l,t,a),k(n,t,null),E(t,e),s=!0},p(l,a){const r={};a&1&&(r.title=l[2].name),a&1&&(r.group_id=l[2].id),n.$set(r)},i(l){s||(m(n.$$.fragment,l),s=!0)},o(l){h(n.$$.fragment,l),s=!1},d(l){l&&u(t),v(n)}}}function ve(c){let t,n,e=c[0]&&c[0].length>0&&X(c);return{c(){e&&e.c(),t=w()},l(s){e&&e.l(s),t=w()},m(s,l){e&&e.m(s,l),_(s,t,l),n=!0},p(s,[l]){s[0]&&s[0].length>0?e?(e.p(s,l),l&1&&m(e,1)):(e=X(s),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(V(),h(e,1,1,()=>{e=null}),N())},i(s){n||(m(e),n=!0)},o(s){h(e),n=!1},d(s){s&&u(t),e&&e.d(s)}}}function we(c,t,n){let e;const{store:{roleGroups:s}}=ee;return q(c,s,l=>n(0,e=l)),[e,s]}class ye extends M{constructor(t){super(),S(this,t,we,ve,z,{})}}function xe(c){let t;return{c(){t=G(`The navbar component can be used to show a list of navigation links positioned on the top side
		of your page based on multiple layouts, sizes, and dropdowns`)},l(n){t=I(n,`The navbar component can be used to show a list of navigation links positioned on the top side
		of your page based on multiple layouts, sizes, and dropdowns`)},m(n,e){_(n,t,e)},d(n){n&&u(t)}}}function Ce(c){let t;return{c(){t=G(`Get started with the responsive navbar component from Flowbite to quickly set up a navigation
		menu for your website and set up the logo, list of pages, CTA button, search input, user profile
		options with a dropdown, and more.`)},l(n){t=I(n,`Get started with the responsive navbar component from Flowbite to quickly set up a navigation
		menu for your website and set up the logo, list of pages, CTA button, search input, user profile
		options with a dropdown, and more.`)},m(n,e){_(n,t,e)},d(n){n&&u(t)}}}function Te(c){let t,n,e="Role Permissions",s,l,a,r,i,o,f,$;return l=new Z({props:{class:"text-lg text-gray-600 dark:text-gray-400",$$slots:{default:[xe]},$$scope:{ctx:c}}}),i=new Z({props:{$$slots:{default:[Ce]},$$scope:{ctx:c}}}),f=new ye({}),{c(){t=T("div"),n=T("h1"),n.textContent=e,s=y(),g(l.$$.fragment),a=y(),r=T("div"),g(i.$$.fragment),o=y(),g(f.$$.fragment),this.h()},l(p){t=P(p,"DIV",{class:!0});var d=B(t);n=P(d,"H1",{class:!0,"data-svelte-h":!0}),se(n)!=="svelte-5lt9pb"&&(n.textContent=e),s=x(d),b(l.$$.fragment,d),d.forEach(u),a=x(p),r=P(p,"DIV",{class:!0});var R=B(r);b(i.$$.fragment,R),R.forEach(u),o=x(p),b(f.$$.fragment,p),this.h()},h(){D(n,"class","text-3xl w-full inline-block mb-2 font-extrabold tracking-tight text-gray-900 dark:text-white"),D(t,"class","pb-8 pt-8"),D(r,"class","pb-8")},m(p,d){_(p,t,d),E(t,n),E(t,s),k(l,t,null),_(p,a,d),_(p,r,d),k(i,r,null),_(p,o,d),k(f,p,d),$=!0},p(p,[d]){const R={};d&1&&(R.$$scope={dirty:d,ctx:p}),l.$set(R);const j={};d&1&&(j.$$scope={dirty:d,ctx:p}),i.$set(j)},i(p){$||(m(l.$$.fragment,p),m(i.$$.fragment,p),m(f.$$.fragment,p),$=!0)},o(p){h(l.$$.fragment,p),h(i.$$.fragment,p),h(f.$$.fragment,p),$=!1},d(p){p&&(u(t),u(a),u(r),u(o)),v(l),v(i),v(f,p)}}}class Re extends M{constructor(t){super(),S(this,t,null,Te,z,{})}}export{Re as component};
