import{z as P,A as S,B as O,k as V,C,h as I,D as E,F as H,G as Y,I as q,J as T,t as g,q as A,n as B,y,K as $,L as j,M as z,N as F,O as G,P as J,Q as K,w as Q,R as W,m as b,T as U,c as X}from"./dbt73OxJ.js";import{a as Z}from"./D_RWCFzV.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,D=new Set;function m(r){var R;var e=this,n=e.ownerDocument,c=r.type,o=((R=r.composedPath)==null?void 0:R.call(r))||[],t=o[0]||r.target,u=0,_=r.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;d<=h&&(u=d)}if(t=o[u]||r.target,t!==e){P(r,"currentTarget",{configurable:!0,get(){return t||n}});var w=C,i=I;S(null),O(null);try{for(var a,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(V(l)){var[k,...M]=l;k.apply(t,[r,...M])}else l.call(t,r)}catch(p){a?s.push(p):a=p}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let p of s)queueMicrotask(()=>{throw p});throw a}}finally{r.__root=e,delete r.currentTarget,S(w),O(i)}}}function sr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function tr(r,e){return L(r,e)}function ir(r,e){E(),e.intro=e.intro??!1;const n=e.target,c=b,o=y;try{for(var t=H(n);t&&(t.nodeType!==8||t.data!==Y);)t=q(t);if(!t)throw T;g(!0),A(t),B();const u=L(r,{...e,anchor:t});if(y===null||y.nodeType!==8||y.data!==$)throw j(),T;return g(!1),u}catch(u){if(u===T)return e.recover===!1&&z(),E(),F(n),g(!1),tr(r,e);throw u}finally{g(c),A(o)}}const v=new Map;function L(r,{target:e,anchor:n,props:c={},events:o,context:t,intro:u=!0}){E();var _=new Set,d=i=>{for(var a=0;a<i.length;a++){var s=i[a];if(!_.has(s)){_.add(s);var f=rr(s);e.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};d(G(er)),D.add(d);var h=void 0,w=J(()=>{var i=n??e.appendChild(K());return Q(()=>{if(t){W({});var a=X;a.c=t}o&&(c.$$events=o),b&&Z(i,null),h=r(i,c)||{},b&&(I.nodes_end=y),t&&U()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var s=v.get(a);--s===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,s)}D.delete(d),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return N.set(h,w),h}let N=new WeakMap;function or(r,e){const n=N.get(r);return n?(N.delete(r),n(e)):Promise.resolve()}export{ir as h,tr as m,sr as s,or as u};
