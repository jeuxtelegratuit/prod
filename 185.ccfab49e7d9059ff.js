"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[185],{185:(ie,Y,v)=>{v.r(Y),v.d(Y,{ion_popover:()=>oe});var L=v(5861),d=v(1688),R=v(6559),y=v(839),B=v(3830),Z=v(6710),T=v(1647),$=v(2085),b=v(3567),k=v(1651),c=v(1774);v(6225);const S=(t,e,o)=>{const r=e.getBoundingClientRect(),n=r.height;let i=r.width;return"cover"===t&&o&&(i=o.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},G=(t,e,o)=>{var r;let n=[];switch(e){case"hover":let i;n=[{eventName:"mouseenter",callback:function(a){return(r=r||(0,L.Z)(function*(p){p.stopPropagation(),i&&clearTimeout(i),i=setTimeout(()=>{(0,y.r)(()=>{o.presentFromTrigger(p),i=void 0})},100)})).apply(this,arguments)}},{eventName:"mouseleave",callback:s=>{i&&clearTimeout(i);const a=s.relatedTarget;a&&a.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:s=>s.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:s=>o.presentFromTrigger(s,!0)}];break;case"context-menu":n=[{eventName:"contextmenu",callback:s=>{s.preventDefault(),o.presentFromTrigger(s)}},{eventName:"click",callback:s=>s.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:s=>o.presentFromTrigger(s,!0)}];break;default:n=[{eventName:"click",callback:s=>o.presentFromTrigger(s)},{eventName:"ionPopoverActivateTrigger",callback:s=>o.presentFromTrigger(s,!0)}]}return n.forEach(({eventName:i,callback:s})=>t.addEventListener(i,s)),t.setAttribute("data-ion-popover-trigger","true"),()=>{n.forEach(({eventName:i,callback:s})=>t.removeEventListener(i,s)),t.removeAttribute("data-ion-popover-trigger")}},X=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(o=>o===e):-1,V=t=>{const o=(0,y.g)(t).querySelector("button");o&&(0,y.r)(()=>o.focus())},ce=t=>{var e;const o=function(n){return(e=e||(0,L.Z)(function*(i){var s;const a=document.activeElement;let p=[];const f=null===(s=i.target)||void 0===s?void 0:s.tagName;if("ION-POPOVER"===f||"ION-ITEM"===f){try{p=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(i.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":i.preventDefault();const h=((t,e)=>t[X(t,e)+1])(p,a);void 0!==h&&V(h);break;case"ArrowUp":i.preventDefault();const g=((t,e)=>t[X(t,e)-1])(p,a);void 0!==g&&V(g);break;case"Home":i.preventDefault();const u=p[0];void 0!==u&&V(u);break;case"End":i.preventDefault();const m=p[p.length-1];void 0!==m&&V(m);break;case"ArrowRight":case" ":case"Enter":if(a&&(t=>t.hasAttribute("data-ion-popover-trigger"))(a)){const w=new CustomEvent("ionPopoverActivateTrigger");a.dispatchEvent(w)}}}})).apply(this,arguments)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},Q=(t,e,o,r,n,i,s,a,p,f,P)=>{var h;let g={top:0,left:0,width:0,height:0};if("event"===i){if(!P)return p;g={top:P.clientY,left:P.clientX,width:1,height:1}}else{const C=f||(null===(h=null==P?void 0:P.detail)||void 0===h?void 0:h.ionShadowTarget)||(null==P?void 0:P.target);if(!C)return p;const D=C.getBoundingClientRect();g={top:D.top,left:D.left,width:D.width,height:D.height}}const u=fe(s,g,e,o,r,n,t),m=he(a,s,g,e,o),w=u.top+m.top,A=u.left+m.left,{arrowTop:x,arrowLeft:E}=de(s,r,n,w,A,e,o,t),{originX:_,originY:I}=le(s,a,t);return{top:w,left:A,referenceCoordinates:g,arrowTop:x,arrowLeft:E,originX:_,originY:I}},le=(t,e,o)=>{switch(t){case"top":return{originX:ee(e),originY:"bottom"};case"bottom":return{originX:ee(e),originY:"top"};case"left":return{originX:"right",originY:F(e)};case"right":return{originX:"left",originY:F(e)};case"start":return{originX:o?"left":"right",originY:F(e)};case"end":return{originX:o?"right":"left",originY:F(e)}}},ee=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},F=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},de=(t,e,o,r,n,i,s,a)=>{const p={arrowTop:r+s/2-e/2,arrowLeft:n+i-e/2},f={arrowTop:r+s/2-e/2,arrowLeft:n-1.5*e};switch(t){case"top":return{arrowTop:r+s,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:r-o,arrowLeft:n+i/2-e/2};case"left":return p;case"right":return f;case"start":return a?f:p;case"end":return a?p:f;default:return{arrowTop:0,arrowLeft:0}}},fe=(t,e,o,r,n,i,s)=>{const a={top:e.top,left:e.left-o-n},p={top:e.top,left:e.left+e.width+n};switch(t){case"top":return{top:e.top-r-i,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},he=(t,e,o,r,n)=>{switch(t){case"center":return ve(e,o,r,n);case"end":return ue(e,o,r,n);default:return{top:0,left:0}}},ue=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r-e.height),left:0};default:return{top:0,left:-(o-e.width)}}},ve=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r/2-e.height/2),left:0};default:return{top:0,left:-(o/2-e.width/2)}}},te=(t,e,o,r,n,i,s,a,p,f,P,h,g=0,u=0,m=0)=>{let w=g;const A=u;let _,x=o,E=e,I=f,O=P,l=!1,C=!1;const D=h?h.top+h.height:i/2-a/2,M=h?h.height:0;let W=!1;return x<r+p?(x=r,l=!0,I="left"):s+r+x+p>n&&(C=!0,x=n-s-r,I="right"),D+M+a>i&&("top"===t||"bottom"===t)&&(D-a>0?(E=Math.max(12,D-a-M-(m-1)),w=E+a,O="bottom",W=!0):_=r),{top:E,left:x,bottom:_,originX:I,originY:O,checkSafeAreaLeft:l,checkSafeAreaRight:C,arrowTop:w,arrowLeft:A,addPopoverBottomClass:W}},xe=(t,e)=>{var o;const{event:r,size:n,trigger:i,reference:s,side:a,align:p}=e,f=t.ownerDocument,P="rtl"===f.dir,h=f.defaultView.innerWidth,g=f.defaultView.innerHeight,u=(0,y.g)(t),m=u.querySelector(".popover-content"),w=u.querySelector(".popover-arrow"),A=i||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:x,contentHeight:E}=S(n,m,A),{arrowWidth:_,arrowHeight:I}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:o}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:o}})(w),l=Q(P,x,E,_,I,s,a,p,{top:g/2-E/2,left:h/2-x/2,originX:P?"right":"left",originY:"top"},i,r),C="cover"===n?0:5,D="cover"===n?0:25,{originX:M,originY:W,top:N,left:j,bottom:K,checkSafeAreaLeft:q,checkSafeAreaRight:Ae,arrowTop:Ee,arrowLeft:Te,addPopoverBottomClass:Ie}=te(a,l.top,l.left,C,h,g,x,E,D,l.originX,l.originY,l.referenceCoordinates,l.arrowTop,l.arrowLeft,I),Oe=(0,c.c)(),re=(0,c.c)(),ne=(0,c.c)();return re.addElement(u.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),ne.addElement(u.querySelector(".popover-arrow")).addElement(u.querySelector(".popover-content")).fromTo("opacity",.01,1),Oe.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===n&&t.style.setProperty("--width",`${x}px`),Ie&&t.classList.add("popover-bottom"),void 0!==K&&m.style.setProperty("bottom",`${K}px`);let H=`${j}px`;q&&(H=`${j}px + var(--ion-safe-area-left, 0)`),Ae&&(H=`${j}px - var(--ion-safe-area-right, 0)`),m.style.setProperty("top",`calc(${N}px + var(--offset-y, 0))`),m.style.setProperty("left",`calc(${H} + var(--offset-x, 0))`),m.style.setProperty("transform-origin",`${W} ${M}`),null!==w&&(((t,e=!1,o,r)=>!(!o&&!r||"top"!==t&&"bottom"!==t&&e))(a,l.top!==N||l.left!==j,r,i)?(w.style.setProperty("top",`calc(${Ee}px + var(--offset-y, 0))`),w.style.setProperty("left",`calc(${Te}px + var(--offset-x, 0))`)):w.style.setProperty("display","none"))}).addAnimation([re,ne])},be=t=>{const e=(0,y.g)(t),o=e.querySelector(".popover-content"),r=e.querySelector(".popover-arrow"),n=(0,c.c)(),i=(0,c.c)(),s=(0,c.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-arrow")).addElement(e.querySelector(".popover-content")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))}).duration(300).addAnimation([i,s])},ye=(t,e)=>{var o;const{event:r,size:n,trigger:i,reference:s,side:a,align:p}=e,f=t.ownerDocument,P="rtl"===f.dir,h=f.defaultView.innerWidth,g=f.defaultView.innerHeight,u=(0,y.g)(t),m=u.querySelector(".popover-content"),w=i||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:A,contentHeight:x}=S(n,m,w),_=Q(P,A,x,0,0,s,a,p,{top:g/2-x/2,left:h/2-A/2,originX:P?"right":"left",originY:"top"},i,r),I="cover"===n?0:12,{originX:O,originY:l,top:C,left:D,bottom:M}=te(a,_.top,_.left,I,h,g,A,x,0,_.originX,_.originY,_.referenceCoordinates),W=(0,c.c)(),N=(0,c.c)(),j=(0,c.c)(),K=(0,c.c)(),q=(0,c.c)();return N.addElement(u.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),j.addElement(u.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),K.addElement(m).beforeStyles({top:`calc(${C}px + var(--offset-y, 0px))`,left:`calc(${D}px + var(--offset-x, 0px))`,"transform-origin":`${l} ${O}`}).beforeAddWrite(()=>{void 0!==M&&m.style.setProperty("bottom",`${M}px`)}).fromTo("transform","scale(0.8)","scale(1)"),q.addElement(u.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===n&&t.style.setProperty("--width",`${A}px`),"bottom"===l&&t.classList.add("popover-bottom")}).addAnimation([N,j,K,q])},Pe=t=>{const e=(0,y.g)(t),o=e.querySelector(".popover-content"),r=(0,c.c)(),n=(0,c.c)(),i=(0,c.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},oe=class{constructor(t){(0,d.r)(this,t),this.didPresent=(0,d.d)(this,"ionPopoverDidPresent",7),this.willPresent=(0,d.d)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,d.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,d.d)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,d.d)(this,"didPresent",7),this.willPresentShorthand=(0,d.d)(this,"willPresent",7),this.willDismissShorthand=(0,d.d)(this,"willDismiss",7),this.didDismissShorthand=(0,d.d)(this,"didDismiss",7),this.ionMount=(0,d.d)(this,"ionMount",7),this.parentPopover=null,this.coreDelegate=(0,R.C)(),this.lockController=(0,B.c)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.onBackdropTap=()=>{this.dismiss(void 0,T.B)},this.onLifecycle=e=>{const o=this.usersElement,r=De[e.type];if(o&&r){const n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:o,el:r,destroyTriggerInteraction:n}=this;if(n&&n(),void 0===e)return;const i=this.triggerEl=void 0!==e?document.getElementById(e):null;i?this.destroyTriggerInteraction=G(i,o,r):(0,Z.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el)},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:o}=this;e&&e(),this.destroyKeyboardInteraction=ce(o)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:o,triggerAction:r,triggerEl:n,el:i}=this;!o||!n||(e&&e(),this.destroyDismissInteraction=((t,e,o,r)=>{let n=[];const s=(0,y.g)(r).querySelector(".popover-content");return n="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&o.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?o.dismiss(void 0,void 0,!1):a.stopPropagation()}}],n.forEach(({eventName:a,callback:p})=>s.addEventListener(a,p)),()=>{n.forEach(({eventName:a,callback:p})=>s.removeEventListener(a,p))}})(n,r,i,o))},this.presented=!1,this.hasController=!1,this.delegate=void 0,this.overlayIndex=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.component=void 0,this.componentProps=void 0,this.keyboardClose=!0,this.cssClass=void 0,this.backdropDismiss=!0,this.event=void 0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.triggerAction="click",this.trigger=void 0,this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment=void 0,this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,T.j)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){const{el:t}=this,e=(0,T.k)(t);this.parentPopover=t.closest(`ion-popover:not(#${e})`),void 0===this.alignment&&(this.alignment="ios"===(0,$.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,y.r)(()=>this.present()),t&&(0,y.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)})}presentFromTrigger(t,e=!1){var o=this;return(0,L.Z)(function*(){o.focusDescendantOnPresent=e,yield o.present(t),o.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,L.Z)(function*(){const o=yield e.lockController.lock();if(e.presented)return void o();const{el:r}=e,{inline:n,delegate:i}=e.getDelegate(!0);e.ionMount.emit(),e.usersElement=yield(0,R.a)(i,r,e.component,["popover-viewport"],e.componentProps,n),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),(0,y.m)(r)?yield(0,k.e)(e.usersElement):e.keepContentsMounted||(yield(0,k.w)()),yield(0,T.f)(e,"popoverEnter",xe,ye,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),e.focusDescendantOnPresent&&(0,T.o)(e.el,e.el),o()})()}dismiss(t,e,o=!0){var r=this;return(0,L.Z)(function*(){const n=yield r.lockController.lock(),{destroyKeyboardInteraction:i,destroyDismissInteraction:s}=r;o&&r.parentPopover&&r.parentPopover.dismiss(t,e,o);const a=yield(0,T.g)(r,t,e,"popoverLeave",be,Pe,r.event);if(a){i&&(i(),r.destroyKeyboardInteraction=void 0),s&&(s(),r.destroyDismissInteraction=void 0);const{delegate:p}=r.getDelegate();yield(0,R.d)(p,r.usersElement)}return n(),a})()}getParentPopover(){var t=this;return(0,L.Z)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,T.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,T.h)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,$.b)(this),{onLifecycle:e,parentPopover:o,dismissOnSelect:r,side:n,arrow:i,htmlAttributes:s}=this,a=(0,$.a)("desktop"),p=i&&!o;return(0,d.h)(d.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},s,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},(0,b.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":a,[`popover-side-${n}`]:!0,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&(0,d.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,d.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:r?()=>this.dismiss():void 0},p&&(0,d.h)("div",{class:"popover-arrow",part:"arrow"}),(0,d.h)("div",{class:"popover-content",part:"content"},(0,d.h)("slot",null))))}get el(){return(0,d.f)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},De={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};oe.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start):dir(rtl){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end):dir(rtl){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}@supports (inset-inline-start: 0){.popover-arrow::after{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.popover-arrow::after{left:3px}:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}[dir=rtl] .popover-arrow::after{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){.popover-arrow::after:dir(rtl){left:unset;right:unset;right:3px}}}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start) .popover-arrow:dir(rtl){-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end) .popover-arrow:dir(rtl){-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start):dir(rtl){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end):dir(rtl){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}"}},3567:(ie,Y,v)=>{v.d(Y,{c:()=>y,g:()=>Z,h:()=>R,o:()=>$});var d,L=v(5861);const R=(b,k)=>null!==k.closest(b),y=(b,k)=>"string"==typeof b&&b.length>0?Object.assign({"ion-color":!0,[`ion-color-${b}`]:!0},k):k,Z=b=>{const k={};return(b=>void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c):[])(b).forEach(c=>k[c]=!0),k},T=/^[a-z][a-z0-9+\-.]*:/,$=function(k,c,se,J){return(d=d||(0,L.Z)(function*(S,z,G,X){if(null!=S&&"#"!==S[0]&&!T.test(S)){const U=document.querySelector("ion-router");if(U)return null!=z&&z.preventDefault(),U.push(S,G,X)}return!1})).apply(this,arguments)}}}]);