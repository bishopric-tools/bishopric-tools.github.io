import{s as w,e as h,i as _,d as b,I as m,U as G,f as C,g as T,w as P,H as f,a as H,c as I,j as O}from"../chunks/scheduler.eb33ae00.js";import{S,i as v,g as R,t as d,c as U,a as g,b as x,d as L,m as A,e as N}from"../chunks/index.3134e3af.js";import{D,a as y,r as V,b as z,c as B}from"../chunks/types.a79c38c9.js";function E(r){let t,a="No data";return{c(){t=C("p"),t.textContent=a},l(e){t=T(e,"P",{"data-svelte-h":!0}),P(t)!=="svelte-t5me1l"&&(t.textContent=a)},m(e,s){_(e,t,s)},p:f,i:f,o:f,d(e){e&&b(t)}}}function F(r){let t,a;return t=new z({props:{options:r[0],data:r[2],loading:r[3]}}),{c(){x(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),a=!0},p(e,s){const l={};s&1&&(l.options=e[0]),s&4&&(l.data=e[2]),s&8&&(l.loading=e[3]),t.$set(l)},i(e){a||(g(t.$$.fragment,e),a=!0)},o(e){d(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function J(r){let t,a,e,s;const l=[F,E],n=[];function i(o,p){return o[0]&&o[1]&&o[1].length>0?0:1}return t=i(r),a=n[t]=l[t](r),{c(){a.c(),e=h()},l(o){a.l(o),e=h()},m(o,p){n[t].m(o,p),_(o,e,p),s=!0},p(o,[p]){let u=t;t=i(o),t===u?n[t].p(o,p):(R(),d(n[u],1,1,()=>{n[u]=null}),U(),a=n[t],a?a.p(o,p):(a=n[t]=l[t](o),a.c()),g(a,1),a.m(e.parentNode,e))},i(o){s||(g(a),s=!0)},o(o){d(a),s=!1},d(o){o&&b(e),n[t].d(o)}}}function K(r,t,a){let e,s,l,n;const{store:{permissions:i}}=V;m(r,i,c=>a(1,s=c));const{loading:o}=i;m(r,o,c=>a(3,n=c));const p={columnDefs:[{label:"Description",dataProperty:"description",dataType:D.String,viewAlignment:y.Left},{label:"Group",dataProperty:"groupName",dataType:D.String,viewAlignment:y.Left}]},u=B(p),{store:{options:k,data:$},actions:{setRowData:j}}=u;m(r,k,c=>a(0,e=c)),m(r,$,c=>a(2,l=c));const q=i.subscribe(c=>{j(c)});return G(()=>{q()}),[e,s,l,n,i,o,k,$]}class M extends S{constructor(t){super(),v(this,t,K,J,w,{})}}function Q(r){let t,a="Permissions",e,s,l;return s=new M({}),{c(){t=C("p"),t.textContent=a,e=H(),x(s.$$.fragment),this.h()},l(n){t=T(n,"P",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-ku687n"&&(t.textContent=a),e=I(n),L(s.$$.fragment,n),this.h()},h(){O(t,"class","text-base dark:text-white")},m(n,i){_(n,t,i),_(n,e,i),A(s,n,i),l=!0},p:f,i(n){l||(g(s.$$.fragment,n),l=!0)},o(n){d(s.$$.fragment,n),l=!1},d(n){n&&(b(t),b(e)),N(s,n)}}}class Z extends S{constructor(t){super(),v(this,t,null,Q,w,{})}}export{Z as component};
