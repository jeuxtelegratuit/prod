"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(re,N,h)=>{h.r(N),h.d(N,{startInputShims:()=>oe});var W,F,M=h(5861),x=h(8360),m=h(839),U=h(7484);h(4874),h(6225);const p=new WeakMap,B=(e,t,s,o=0,r=!1)=>{p.has(e)!==s&&(s?z(e,t,o,r):V(e,t))},z=(e,t,s,o=!1)=>{const r=t.parentNode,a=t.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),r.appendChild(a),p.set(e,a);const n="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${n}px,${s}px,0) scale(0)`},V=(e,t)=>{const s=p.get(e);s&&(p.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},O="input, textarea, [no-blur], [contenteditable]",k="$ionPaddingTimer",K=(e,t,s)=>{const o=e[k];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[k]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},Z=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&K(t,0,s)},{once:!0})};let P=0;const R="data-ionic-skip-scroll-assist",ee=(e,t,s,o,r,a,c,n=!1)=>{var i;const d=a&&(void 0===c||c.mode===U.a.None),l=function(){return(i=i||(0,M.Z)(function*(){t.hasAttribute(R)?t.removeAttribute(R):te(e,t,s,o,r,d,n)})).apply(this,arguments)};return e.addEventListener("focusin",l,!0),()=>{e.removeEventListener("focusin",l,!0)}},j=e=>{document.activeElement!==e&&(e.setAttribute(R,"true"),e.focus())},te=function(t,s,o,r,a,c){return(W=W||(0,M.Z)(function*(n,i,d,l,y,g,D=!1){if(!d&&!l)return;const f=((e,t,s)=>{var o;return((e,t,s,o)=>{const r=e.top,a=e.bottom,c=t.top,i=c+15,l=Math.min(t.bottom,o-s)-50-a,y=i-r,g=Math.round(l<0?-l:y>0?-y:0),D=Math.min(g,r-c),v=Math.abs(D)/.3;return{scrollAmount:D,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(n,d||l,y);if(d&&Math.abs(f.scrollAmount)<4)return j(i),void(g&&null!==d&&(K(d,P),Z(i,d,()=>P=0)));if(B(n,i,!0,f.inputSafeY,D),j(i),(0,m.r)(()=>n.click()),g&&d&&(P=f.scrollPadding,K(d,P)),typeof window<"u"){var v;let S;const b=function L(){return(v=v||(0,M.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",A),window.removeEventListener("ionKeyboardDidShow",L),d&&(yield(0,x.c)(d,0,f.scrollAmount,f.scrollDuration)),B(n,i,!1,f.inputSafeY),j(i),g&&Z(i,d,()=>P=0)})).apply(this,arguments)},A=()=>{window.removeEventListener("ionKeyboardDidShow",A),window.addEventListener("ionKeyboardDidShow",b)};if(d){const L=yield(0,x.g)(d);if(f.scrollAmount>L.scrollHeight-L.clientHeight-L.scrollTop)return"password"===i.type?(f.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",A)):window.addEventListener("ionKeyboardDidShow",b),void(S=setTimeout(b,1e3))}b()}})).apply(this,arguments)},oe=function(t,s){return(F=F||(0,M.Z)(function*(o,r){var a;const c=document,n="ios"===r,i="android"===r,d=o.getNumber("keyboardHeight",290),l=o.getBoolean("scrollAssist",!0),y=o.getBoolean("hideCaretOnScroll",n),g=o.getBoolean("inputBlurring",n),D=o.getBoolean("scrollPadding",!0),f=Array.from(c.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,S=new WeakMap,b=yield U.K.getResizeMode(),A=function(I){return(a=a||(0,M.Z)(function*(_){yield new Promise(w=>(0,m.c)(_,w));const G=_.shadowRoot||_,T=G.querySelector("input")||G.querySelector("textarea"),C=(0,x.f)(_),Y=C?null:_.closest("ion-footer");if(T){if(C&&y&&!v.has(_)){const w=((e,t,s)=>{if(!s||!t)return()=>{};const o=n=>{(e=>e===e.getRootNode().activeElement)(t)&&B(e,t,n)},r=()=>B(e,t,!1),a=()=>o(!0),c=()=>o(!1);return(0,m.a)(s,"ionScrollStart",a),(0,m.a)(s,"ionScrollEnd",c),t.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",a),(0,m.b)(s,"ionScrollEnd",c),t.removeEventListener("blur",r)}})(_,T,C);v.set(_,w)}if("date"!==T.type&&"datetime-local"!==T.type&&(C||Y)&&l&&!S.has(_)){const w=ee(_,T,C,Y,d,D,b,i);S.set(_,w)}}})).apply(this,arguments)};g&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",c=>{if(t)return void(t=!1);const n=s.activeElement;if(!n||n.matches(O))return;const i=c.target;i!==n&&(i.matches(O)||i.closest(O)||(e=!1,setTimeout(()=>{e||n.blur()},50)))},!1)})();for(const u of f)A(u);c.addEventListener("ionInputDidLoad",u=>{A(u.detail)}),c.addEventListener("ionInputDidUnload",u=>{(u=>{if(y){const I=v.get(u);I&&I(),v.delete(u)}if(l){const I=S.get(u);I&&I(),S.delete(u)}})(u.detail)})})).apply(this,arguments)}}}]);