(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function k_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var pc={exports:{}},Po={},mc={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function B_(){if(Mp)return ct;Mp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function S(I,te,Ue){this.props=I,this.context=te,this.refs=A,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,te){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,te,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=S.prototype;function N(I,te,Ue){this.props=I,this.context=te,this.refs=A,this.updater=Ue||y}var L=N.prototype=new _;L.constructor=N,T(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,X=Object.prototype.hasOwnProperty,B={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function Y(I,te,Ue){var K,ue={},Me=null,ve=null;if(te!=null)for(K in te.ref!==void 0&&(ve=te.ref),te.key!==void 0&&(Me=""+te.key),te)X.call(te,K)&&!F.hasOwnProperty(K)&&(ue[K]=te[K]);var Te=arguments.length-2;if(Te===1)ue.children=Ue;else if(1<Te){for(var Ie=Array(Te),Ze=0;Ze<Te;Ze++)Ie[Ze]=arguments[Ze+2];ue.children=Ie}if(I&&I.defaultProps)for(K in Te=I.defaultProps,Te)ue[K]===void 0&&(ue[K]=Te[K]);return{$$typeof:o,type:I,key:Me,ref:ve,props:ue,_owner:B.current}}function P(I,te){return{$$typeof:o,type:I.type,key:te,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function U(I){var te={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ue){return te[Ue]})}var se=/\/+/g;function Z(I,te){return typeof I=="object"&&I!==null&&I.key!=null?U(""+I.key):te.toString(36)}function fe(I,te,Ue,K,ue){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case o:case e:ve=!0}}if(ve)return ve=I,ue=ue(ve),I=K===""?"."+Z(ve,0):K,C(ue)?(Ue="",I!=null&&(Ue=I.replace(se,"$&/")+"/"),fe(ue,te,Ue,"",function(Ze){return Ze})):ue!=null&&(R(ue)&&(ue=P(ue,Ue+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+I)),te.push(ue)),1;if(ve=0,K=K===""?".":K+":",C(I))for(var Te=0;Te<I.length;Te++){Me=I[Te];var Ie=K+Z(Me,Te);ve+=fe(Me,te,Ue,Ie,ue)}else if(Ie=x(I),typeof Ie=="function")for(I=Ie.call(I),Te=0;!(Me=I.next()).done;)Me=Me.value,Ie=K+Z(Me,Te++),ve+=fe(Me,te,Ue,Ie,ue);else if(Me==="object")throw te=String(I),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(I,te,Ue){if(I==null)return I;var K=[],ue=0;return fe(I,K,"","",function(Me){return te.call(Ue,Me,ue++)}),K}function oe(I){if(I._status===-1){var te=I._result;te=te(),te.then(function(Ue){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ue)},function(Ue){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ue)}),I._status===-1&&(I._status=0,I._result=te)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},z={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:B};function re(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:he,forEach:function(I,te,Ue){he(I,function(){te.apply(this,arguments)},Ue)},count:function(I){var te=0;return he(I,function(){te++}),te},toArray:function(I){return he(I,function(te){return te})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ct.Component=S,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=N,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ct.act=re,ct.cloneElement=function(I,te,Ue){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=T({},I.props),ue=I.key,Me=I.ref,ve=I._owner;if(te!=null){if(te.ref!==void 0&&(Me=te.ref,ve=B.current),te.key!==void 0&&(ue=""+te.key),I.type&&I.type.defaultProps)var Te=I.type.defaultProps;for(Ie in te)X.call(te,Ie)&&!F.hasOwnProperty(Ie)&&(K[Ie]=te[Ie]===void 0&&Te!==void 0?Te[Ie]:te[Ie])}var Ie=arguments.length-2;if(Ie===1)K.children=Ue;else if(1<Ie){Te=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Te[Ze]=arguments[Ze+2];K.children=Te}return{$$typeof:o,type:I.type,key:ue,ref:Me,props:K,_owner:ve}},ct.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ct.createElement=Y,ct.createFactory=function(I){var te=Y.bind(null,I);return te.type=I,te},ct.createRef=function(){return{current:null}},ct.forwardRef=function(I){return{$$typeof:d,render:I}},ct.isValidElement=R,ct.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:oe}},ct.memo=function(I,te){return{$$typeof:m,type:I,compare:te===void 0?null:te}},ct.startTransition=function(I){var te=z.transition;z.transition={};try{I()}finally{z.transition=te}},ct.unstable_act=re,ct.useCallback=function(I,te){return le.current.useCallback(I,te)},ct.useContext=function(I){return le.current.useContext(I)},ct.useDebugValue=function(){},ct.useDeferredValue=function(I){return le.current.useDeferredValue(I)},ct.useEffect=function(I,te){return le.current.useEffect(I,te)},ct.useId=function(){return le.current.useId()},ct.useImperativeHandle=function(I,te,Ue){return le.current.useImperativeHandle(I,te,Ue)},ct.useInsertionEffect=function(I,te){return le.current.useInsertionEffect(I,te)},ct.useLayoutEffect=function(I,te){return le.current.useLayoutEffect(I,te)},ct.useMemo=function(I,te){return le.current.useMemo(I,te)},ct.useReducer=function(I,te,Ue){return le.current.useReducer(I,te,Ue)},ct.useRef=function(I){return le.current.useRef(I)},ct.useState=function(I){return le.current.useState(I)},ct.useSyncExternalStore=function(I,te,Ue){return le.current.useSyncExternalStore(I,te,Ue)},ct.useTransition=function(){return le.current.useTransition()},ct.version="18.3.1",ct}var Ep;function Wf(){return Ep||(Ep=1,mc.exports=B_()),mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function z_(){if(Tp)return Po;Tp=1;var o=Wf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var g,v={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(g in p)r.call(p,g)&&!u.hasOwnProperty(g)&&(v[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)v[g]===void 0&&(v[g]=p[g]);return{$$typeof:e,type:d,key:x,ref:y,props:v,_owner:a.current}}return Po.Fragment=n,Po.jsx=f,Po.jsxs=f,Po}var wp;function H_(){return wp||(wp=1,pc.exports=z_()),pc.exports}var bt=H_(),Zt=Wf(),Ja={},gc={exports:{}},bn={},_c={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function V_(){return Ap||(Ap=1,function(o){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var I=re-1>>>1,te=z[I];if(0<a(te,ae))z[I]=ae,z[re]=te,re=I;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var I=0,te=z.length,Ue=te>>>1;I<Ue;){var K=2*(I+1)-1,ue=z[K],Me=K+1,ve=z[Me];if(0>a(ue,re))Me<te&&0>a(ve,ue)?(z[I]=ve,z[Me]=re,I=Me):(z[I]=ue,z[K]=re,I=K);else if(Me<te&&0>a(ve,re))z[I]=ve,z[Me]=re,I=Me;else break e}}return ae}function a(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,x=3,y=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=z)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(z){if(A=!1,L(z),!T)if(n(p)!==null)T=!0,oe(X);else{var ae=n(m);ae!==null&&le(C,ae.startTime-z)}}function X(z,ae){T=!1,A&&(A=!1,_(Y),Y=-1),y=!0;var re=x;try{for(L(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||z&&!U());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var te=I(v.expirationTime<=ae);ae=o.unstable_now(),typeof te=="function"?v.callback=te:v===n(p)&&r(p),L(ae)}else r(p);v=n(p)}if(v!==null)var Ue=!0;else{var K=n(m);K!==null&&le(C,K.startTime-ae),Ue=!1}return Ue}finally{v=null,x=re,y=!1}}var B=!1,F=null,Y=-1,P=5,R=-1;function U(){return!(o.unstable_now()-R<P)}function se(){if(F!==null){var z=o.unstable_now();R=z;var ae=!0;try{ae=F(!0,z)}finally{ae?Z():(B=!1,F=null)}}else B=!1}var Z;if(typeof N=="function")Z=function(){N(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=se,Z=function(){he.postMessage(null)}}else Z=function(){S(se,0)};function oe(z){F=z,B||(B=!0,Z())}function le(z,ae){Y=S(function(){z(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){T||y||(T=!0,oe(X))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return z()}finally{x=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=x;x=z;try{return ae()}finally{x=re}},o.unstable_scheduleCallback=function(z,ae,re){var I=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,z={id:g++,callback:ae,priorityLevel:z,startTime:re,expirationTime:te,sortIndex:-1},re>I?(z.sortIndex=re,e(m,z),n(p)===null&&z===n(m)&&(A?(_(Y),Y=-1):A=!0,le(C,re-I))):(z.sortIndex=te,e(p,z),T||y||(T=!0,oe(X))),z},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(z){var ae=x;return function(){var re=x;x=ae;try{return z.apply(this,arguments)}finally{x=re}}}}(vc)),vc}var Rp;function G_(){return Rp||(Rp=1,_c.exports=V_()),_c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function W_(){if(Cp)return bn;Cp=1;var o=Wf(),e=G_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(t){return p.call(v,t)?!0:p.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),U=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,I;function te(t){if(I===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ue=!1;function K(t,i){if(!t||Ue)return"";Ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=D);break}}}finally{Ue=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?te(t):""}function ue(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case B:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function gn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function lt(t,i){ft(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,s):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Tt(t,i,s){(i!=="number"||Lt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var We=Array.isArray;function b(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(We(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function at(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){ke.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function je(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Qe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=je(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,de=null;function be(t){if(t=po(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=pa(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?de?de.push(t):de=[t]:ie=t}function it(){if(ie){var t=ie,i=de;if(de=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Ut(t,i){return t(i)}function jt(){}var _t=!1;function Tn(t,i,s){if(_t)return t(i,s);_t=!0;try{return Ut(t,i,s)}finally{_t=!1,(ie!==null||de!==null)&&(jt(),it())}}function _n(t,i){var s=t.stateNode;if(s===null)return null;var l=pa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Jr=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Jr=!1}function xi(t,i,s,l,c,h,M,D,O){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(s,Q)}catch(_e){this.onError(_e)}}var Si=!1,Sr=null,yr=!1,Wi=null,qo={onError:function(t){Si=!0,Sr=t}};function es(t,i,s,l,c,h,M,D,O){Si=!1,Sr=null,xi.apply(qo,arguments)}function jo(t,i,s,l,c,h,M,D,O){if(es.apply(this,arguments),Si){if(Si){var Q=Sr;Si=!1,Sr=null}else throw Error(n(198));yr||(yr=!0,Wi=Q)}}function ui(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function $o(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ko(t){if(ui(t)!==t)throw Error(n(188))}function Ol(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Ko(c),t;if(h===l)return Ko(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===s){M=!0,s=c,l=h;break}if(D===l){M=!0,l=c,s=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===s){M=!0,s=h,l=c;break}if(D===l){M=!0,l=h,s=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Zo(t){return t=Ol(t),t!==null?Qo(t):null}function Qo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qo(t);if(i!==null)return i;t=t.sibling}return null}var w=e.unstable_scheduleCallback,W=e.unstable_cancelCallback,J=e.unstable_shouldYield,ee=e.unstable_requestPaint,H=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,rt=null;function xt(t){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Xe,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:qe,Ft=Math.log,gt=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Ft(t)/gt|0)|0}var zt=64,pt=4194304;function sn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $n(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var D=M&~c;D!==0?l=sn(D):(h&=M,h!==0&&(l=sn(h)))}else M=s&~c,M!==0?l=sn(M):h!==0&&(l=sn(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-St(i),c=1<<s,l|=t[s],i&=~c;return l}function vn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mr(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-St(h),D=1<<M,O=c[M];O===-1?(!(D&s)||D&l)&&(c[M]=vn(D,i)):O<=i&&(t.expiredLanes|=D),h&=~D}}function At(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xn(){var t=zt;return zt<<=1,!(zt&4194240)&&(zt=64),t}function ln(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Vt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-St(i),t[i]=s}function un(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-St(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Er(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-St(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var dt=0;function ed(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var td,kl,nd,id,rd,Bl=!1,Jo=[],Xi=null,Yi=null,qi=null,Zs=new Map,Qs=new Map,ji=[],ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sd(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=po(i),i!==null&&kl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function lg(t,i,s,l,c){switch(i){case"focusin":return Xi=Js(Xi,t,i,s,l,c),!0;case"dragenter":return Yi=Js(Yi,t,i,s,l,c),!0;case"mouseover":return qi=Js(qi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Zs.set(h,Js(Zs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Qs.set(h,Js(Qs.get(h)||null,t,i,s,l,c)),!0}return!1}function od(t){var i=Tr(t.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=$o(s),i!==null){t.blockedOn=i,rd(t.priority,function(){nd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Hl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Et=l,s.target.dispatchEvent(l),Et=null}else return i=po(s),i!==null&&kl(i),t.blockedOn=s,!1;i.shift()}return!0}function ad(t,i,s){ea(t)&&s.delete(i)}function ug(){Bl=!1,Xi!==null&&ea(Xi)&&(Xi=null),Yi!==null&&ea(Yi)&&(Yi=null),qi!==null&&ea(qi)&&(qi=null),Zs.forEach(ad),Qs.forEach(ad)}function eo(t,i){t.blockedOn===i&&(t.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ug)))}function to(t){function i(c){return eo(c,t)}if(0<Jo.length){eo(Jo[0],t);for(var s=1;s<Jo.length;s++){var l=Jo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&eo(Xi,t),Yi!==null&&eo(Yi,t),qi!==null&&eo(qi,t),Zs.forEach(i),Qs.forEach(i),s=0;s<ji.length;s++)l=ji[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(s=ji[0],s.blockedOn===null);)od(s),s.blockedOn===null&&ji.shift()}var ts=C.ReactCurrentBatchConfig,ta=!0;function cg(t,i,s,l){var c=dt,h=ts.transition;ts.transition=null;try{dt=1,zl(t,i,s,l)}finally{dt=c,ts.transition=h}}function fg(t,i,s,l){var c=dt,h=ts.transition;ts.transition=null;try{dt=4,zl(t,i,s,l)}finally{dt=c,ts.transition=h}}function zl(t,i,s,l){if(ta){var c=Hl(t,i,s,l);if(c===null)ru(t,i,l,na,s),sd(t,l);else if(lg(c,t,i,s,l))l.stopPropagation();else if(sd(t,l),i&4&&-1<ag.indexOf(t)){for(;c!==null;){var h=po(c);if(h!==null&&td(h),h=Hl(t,i,s,l),h===null&&ru(t,i,l,na,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else ru(t,i,l,null,s)}}var na=null;function Hl(t,i,s,l){if(na=null,t=G(l),t=Tr(t),t!==null)if(i=ui(t),i===null)t=null;else if(s=i.tag,s===13){if(t=$o(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return na=t,null}function ld(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case De:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var $i=null,Vl=null,ia=null;function ud(){if(ia)return ia;var t,i=Vl,s=i.length,l,c="value"in $i?$i.value:$i.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return ia=c.slice(t,1<l?1-l:void 0)}function ra(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function cd(){return!1}function Un(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?sa:cd,this.isPropagationStopped=cd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=Un(ns),no=re({},ns,{view:0,detail:0}),dg=Un(no),Wl,Xl,io,oa=re({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Wl=t.screenX-io.screenX,Xl=t.screenY-io.screenY):Xl=Wl=0,io=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),fd=Un(oa),hg=re({},oa,{dataTransfer:0}),pg=Un(hg),mg=re({},no,{relatedTarget:0}),Yl=Un(mg),gg=re({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=Un(gg),vg=re({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xg=Un(vg),Sg=re({},ns,{data:0}),dd=Un(Sg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Eg[t])?!!i[t]:!1}function ql(){return Tg}var wg=re({},no,{key:function(t){if(t.key){var i=yg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ag=Un(wg),Rg=re({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=Un(Rg),Cg=re({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),Pg=Un(Cg),bg=re({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=Un(bg),Dg=re({},oa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=Un(Dg),Ig=[9,13,27,32],jl=d&&"CompositionEvent"in window,ro=null;d&&"documentMode"in document&&(ro=document.documentMode);var Ng=d&&"TextEvent"in window&&!ro,pd=d&&(!jl||ro&&8<ro&&11>=ro),md=" ",gd=!1;function _d(t,i){switch(t){case"keyup":return Ig.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Fg(t,i){switch(t){case"compositionend":return vd(i);case"keypress":return i.which!==32?null:(gd=!0,md);case"textInput":return t=i.data,t===md&&gd?null:t;default:return null}}function Og(t,i){if(is)return t==="compositionend"||!jl&&_d(t,i)?(t=ud(),ia=Vl=$i=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pd&&i.locale!=="ko"?null:i.data;default:return null}}var kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!kg[t.type]:i==="textarea"}function Sd(t,i,s,l){Pe(l),i=fa(i,"onChange"),0<i.length&&(s=new Gl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var so=null,oo=null;function Bg(t){kd(t,0)}function aa(t){var i=ls(t);if(ht(i))return t}function zg(t,i){if(t==="change")return i}var yd=!1;if(d){var $l;if(d){var Kl="oninput"in document;if(!Kl){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Kl=typeof Md.oninput=="function"}$l=Kl}else $l=!1;yd=$l&&(!document.documentMode||9<document.documentMode)}function Ed(){so&&(so.detachEvent("onpropertychange",Td),oo=so=null)}function Td(t){if(t.propertyName==="value"&&aa(oo)){var i=[];Sd(i,oo,t,G(t)),Tn(Bg,i)}}function Hg(t,i,s){t==="focusin"?(Ed(),so=i,oo=s,so.attachEvent("onpropertychange",Td)):t==="focusout"&&Ed()}function Vg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return aa(oo)}function Gg(t,i){if(t==="click")return aa(i)}function Wg(t,i){if(t==="input"||t==="change")return aa(i)}function Xg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:Xg;function ao(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!Kn(t[c],i[c]))return!1}return!0}function wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,i){var s=wd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=wd(s)}}function Rd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Cd(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Lt(t.document)}return i}function Zl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Yg(t){var i=Cd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Rd(s.ownerDocument.documentElement,s)){if(l!==null&&Zl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Ad(s,h);var M=Ad(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qg=d&&"documentMode"in document&&11>=document.documentMode,rs=null,Ql=null,lo=null,Jl=!1;function Pd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Jl||rs==null||rs!==Lt(l)||(l=rs,"selectionStart"in l&&Zl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&ao(lo,l)||(lo=l,l=fa(Ql,"onSelect"),0<l.length&&(i=new Gl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=rs)))}function la(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ss={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},eu={},bd={};d&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function ua(t){if(eu[t])return eu[t];if(!ss[t])return t;var i=ss[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in bd)return eu[t]=i[s];return t}var Ld=ua("animationend"),Dd=ua("animationiteration"),Ud=ua("animationstart"),Id=ua("transitionend"),Nd=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Nd.set(t,i),u(i,[t])}for(var tu=0;tu<Fd.length;tu++){var nu=Fd[tu],jg=nu.toLowerCase(),$g=nu[0].toUpperCase()+nu.slice(1);Ki(jg,"on"+$g)}Ki(Ld,"onAnimationEnd"),Ki(Dd,"onAnimationIteration"),Ki(Ud,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Id,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Od(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,jo(l,i,void 0,t),t.currentTarget=null}function kd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],O=D.instance,Q=D.currentTarget;if(D=D.listener,O!==h&&c.isPropagationStopped())break e;Od(c,D,Q),h=O}else for(M=0;M<l.length;M++){if(D=l[M],O=D.instance,Q=D.currentTarget,D=D.listener,O!==h&&c.isPropagationStopped())break e;Od(c,D,Q),h=O}}}if(yr)throw t=Wi,yr=!1,Wi=null,t}function It(t,i){var s=i[cu];s===void 0&&(s=i[cu]=new Set);var l=t+"__bubble";s.has(l)||(Bd(i,t,2,!1),s.add(l))}function iu(t,i,s){var l=0;i&&(l|=4),Bd(s,t,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[ca]){t[ca]=!0,r.forEach(function(s){s!=="selectionchange"&&(Kg.has(s)||iu(s,!1,t),iu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,iu("selectionchange",!1,i))}}function Bd(t,i,s,l){switch(ld(i)){case 1:var c=cg;break;case 4:c=fg;break;default:c=zl}s=c.bind(null,i,s,t),c=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function ru(t,i,s,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Tr(D),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}D=D.parentNode}}l=l.return}Tn(function(){var Q=h,_e=G(s),xe=[];e:{var me=Nd.get(t);if(me!==void 0){var Le=Gl,ze=t;switch(t){case"keypress":if(ra(s)===0)break e;case"keydown":case"keyup":Le=Ag;break;case"focusin":ze="focus",Le=Yl;break;case"focusout":ze="blur",Le=Yl;break;case"beforeblur":case"afterblur":Le=Yl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Pg;break;case Ld:case Dd:case Ud:Le=_g;break;case Id:Le=Lg;break;case"scroll":Le=dg;break;case"wheel":Le=Ug;break;case"copy":case"cut":case"paste":Le=xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=hd}var He=(i&4)!==0,Gt=!He&&t==="scroll",q=He?me!==null?me+"Capture":null:me;He=[];for(var V=Q,j;V!==null;){j=V;var Ee=j.stateNode;if(j.tag===5&&Ee!==null&&(j=Ee,q!==null&&(Ee=_n(V,q),Ee!=null&&He.push(fo(V,Ee,j)))),Gt)break;V=V.return}0<He.length&&(me=new Le(me,ze,null,s,_e),xe.push({event:me,listeners:He}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",me&&s!==Et&&(ze=s.relatedTarget||s.fromElement)&&(Tr(ze)||ze[yi]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ze=s.relatedTarget||s.toElement,Le=Q,ze=ze?Tr(ze):null,ze!==null&&(Gt=ui(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=Q),Le!==ze)){if(He=fd,Ee="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=hd,Ee="onPointerLeave",q="onPointerEnter",V="pointer"),Gt=Le==null?me:ls(Le),j=ze==null?me:ls(ze),me=new He(Ee,V+"leave",Le,s,_e),me.target=Gt,me.relatedTarget=j,Ee=null,Tr(_e)===Q&&(He=new He(q,V+"enter",ze,s,_e),He.target=j,He.relatedTarget=Gt,Ee=He),Gt=Ee,Le&&ze)t:{for(He=Le,q=ze,V=0,j=He;j;j=os(j))V++;for(j=0,Ee=q;Ee;Ee=os(Ee))j++;for(;0<V-j;)He=os(He),V--;for(;0<j-V;)q=os(q),j--;for(;V--;){if(He===q||q!==null&&He===q.alternate)break t;He=os(He),q=os(q)}He=null}else He=null;Le!==null&&zd(xe,me,Le,He,!1),ze!==null&&Gt!==null&&zd(xe,Gt,ze,He,!0)}}e:{if(me=Q?ls(Q):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var Ge=zg;else if(xd(me))if(yd)Ge=Wg;else{Ge=Vg;var $e=Hg}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=Gg);if(Ge&&(Ge=Ge(t,Q))){Sd(xe,Ge,s,_e);break e}$e&&$e(t,me,Q),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&Tt(me,"number",me.value)}switch($e=Q?ls(Q):window,t){case"focusin":(xd($e)||$e.contentEditable==="true")&&(rs=$e,Ql=Q,lo=null);break;case"focusout":lo=Ql=rs=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,Pd(xe,s,_e);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Pd(xe,s,_e)}var Ke;if(jl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else is?_d(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(pd&&s.locale!=="ko"&&(is||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&is&&(Ke=ud()):($i=_e,Vl="value"in $i?$i.value:$i.textContent,is=!0)),$e=fa(Q,tt),0<$e.length&&(tt=new dd(tt,t,null,s,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=vd(s),Ke!==null&&(tt.data=Ke)))),(Ke=Ng?Fg(t,s):Og(t,s))&&(Q=fa(Q,"onBeforeInput"),0<Q.length&&(_e=new dd("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:Q}),_e.data=Ke))}kd(xe,i)})}function fo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function fa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=_n(t,s),h!=null&&l.unshift(fo(t,h,c)),h=_n(t,i),h!=null&&l.push(fo(t,h,c))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var D=s,O=D.alternate,Q=D.stateNode;if(O!==null&&O===l)break;D.tag===5&&Q!==null&&(D=Q,c?(O=_n(s,h),O!=null&&M.unshift(fo(s,O,D))):c||(O=_n(s,h),O!=null&&M.push(fo(s,O,D)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Zg=/\r\n?/g,Qg=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(Zg,`
`).replace(Qg,"")}function da(t,i,s){if(i=Hd(i),Hd(t)!==i&&s)throw Error(n(425))}function ha(){}var su=null,ou=null;function au(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,e_=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(t){return Vd.resolve(null).then(t).catch(t_)}:lu;function t_(t){setTimeout(function(){throw t})}function uu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),to(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);to(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),ci="__reactFiber$"+as,ho="__reactProps$"+as,yi="__reactContainer$"+as,cu="__reactEvents$"+as,n_="__reactListeners$"+as,i_="__reactHandles$"+as;function Tr(t){var i=t[ci];if(i)return i;for(var s=t.parentNode;s;){if(i=s[yi]||s[ci]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Gd(t);t!==null;){if(s=t[ci])return s;t=Gd(t)}return i}t=s,s=t.parentNode}return null}function po(t){return t=t[ci]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function pa(t){return t[ho]||null}var fu=[],us=-1;function Qi(t){return{current:t}}function Nt(t){0>us||(t.current=fu[us],fu[us]=null,us--)}function Dt(t,i){us++,fu[us]=t.current,t.current=i}var Ji={},cn=Qi(Ji),wn=Qi(!1),wr=Ji;function cs(t,i){var s=t.type.contextTypes;if(!s)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function An(t){return t=t.childContextTypes,t!=null}function ma(){Nt(wn),Nt(cn)}function Wd(t,i,s){if(cn.current!==Ji)throw Error(n(168));Dt(cn,i),Dt(wn,s)}function Xd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},s,l)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,wr=cn.current,Dt(cn,t),Dt(wn,wn.current),!0}function Yd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Xd(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,Nt(wn),Nt(cn),Dt(cn,t)):Nt(wn),Dt(wn,s)}var Mi=null,_a=!1,du=!1;function qd(t){Mi===null?Mi=[t]:Mi.push(t)}function r_(t){_a=!0,qd(t)}function er(){if(!du&&Mi!==null){du=!0;var t=0,i=dt;try{var s=Mi;for(dt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Mi=null,_a=!1}catch(c){throw Mi!==null&&(Mi=Mi.slice(t+1)),w(Re,er),c}finally{dt=i,du=!1}}return null}var fs=[],ds=0,va=null,xa=0,zn=[],Hn=0,Ar=null,Ei=1,Ti="";function Rr(t,i){fs[ds++]=xa,fs[ds++]=va,va=t,xa=i}function jd(t,i,s){zn[Hn++]=Ei,zn[Hn++]=Ti,zn[Hn++]=Ar,Ar=t;var l=Ei;t=Ti;var c=32-St(l)-1;l&=~(1<<c),s+=1;var h=32-St(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ei=1<<32-St(i)+c|s<<c|l,Ti=h+t}else Ei=1<<h|s<<c|l,Ti=t}function hu(t){t.return!==null&&(Rr(t,1),jd(t,1,0))}function pu(t){for(;t===va;)va=fs[--ds],fs[ds]=null,xa=fs[--ds],fs[ds]=null;for(;t===Ar;)Ar=zn[--Hn],zn[Hn]=null,Ti=zn[--Hn],zn[Hn]=null,Ei=zn[--Hn],zn[Hn]=null}var In=null,Nn=null,Ot=!1,Zn=null;function $d(t,i){var s=Xn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Kd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ar!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Xn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Nn=null,!0):!1;default:return!1}}function mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gu(t){if(Ot){var i=Nn;if(i){var s=i;if(!Kd(t,i)){if(mu(t))throw Error(n(418));i=Zi(s.nextSibling);var l=In;i&&Kd(t,i)?$d(l,s):(t.flags=t.flags&-4097|2,Ot=!1,In=t)}}else{if(mu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,In=t}}}function Zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Sa(t){if(t!==In)return!1;if(!Ot)return Zd(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!au(t.type,t.memoizedProps)),i&&(i=Nn)){if(mu(t))throw Qd(),Error(n(418));for(;i;)$d(t,i),i=Zi(i.nextSibling)}if(Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Nn=Zi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Zi(t.stateNode.nextSibling):null;return!0}function Qd(){for(var t=Nn;t;)t=Zi(t.nextSibling)}function hs(){Nn=In=null,Ot=!1}function _u(t){Zn===null?Zn=[t]:Zn.push(t)}var s_=C.ReactCurrentBatchConfig;function mo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Jd(t){var i=t._init;return i(t._payload)}function eh(t){function i(q,V){if(t){var j=q.deletions;j===null?(q.deletions=[V],q.flags|=16):j.push(V)}}function s(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function c(q,V){return q=lr(q,V),q.index=0,q.sibling=null,q}function h(q,V,j){return q.index=j,t?(j=q.alternate,j!==null?(j=j.index,j<V?(q.flags|=2,V):j):(q.flags|=2,V)):(q.flags|=1048576,V)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,V,j,Ee){return V===null||V.tag!==6?(V=lc(j,q.mode,Ee),V.return=q,V):(V=c(V,j),V.return=q,V)}function O(q,V,j,Ee){var Ge=j.type;return Ge===F?_e(q,V,j.props.children,Ee,j.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===oe&&Jd(Ge)===V.type)?(Ee=c(V,j.props),Ee.ref=mo(q,V,j),Ee.return=q,Ee):(Ee=Xa(j.type,j.key,j.props,null,q.mode,Ee),Ee.ref=mo(q,V,j),Ee.return=q,Ee)}function Q(q,V,j,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=uc(j,q.mode,Ee),V.return=q,V):(V=c(V,j.children||[]),V.return=q,V)}function _e(q,V,j,Ee,Ge){return V===null||V.tag!==7?(V=Nr(j,q.mode,Ee,Ge),V.return=q,V):(V=c(V,j),V.return=q,V)}function xe(q,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return V=lc(""+V,q.mode,j),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return j=Xa(V.type,V.key,V.props,null,q.mode,j),j.ref=mo(q,null,V),j.return=q,j;case B:return V=uc(V,q.mode,j),V.return=q,V;case oe:var Ee=V._init;return xe(q,Ee(V._payload),j)}if(We(V)||ae(V))return V=Nr(V,q.mode,j,null),V.return=q,V;ya(q,V)}return null}function me(q,V,j,Ee){var Ge=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Ge!==null?null:D(q,V,""+j,Ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case X:return j.key===Ge?O(q,V,j,Ee):null;case B:return j.key===Ge?Q(q,V,j,Ee):null;case oe:return Ge=j._init,me(q,V,Ge(j._payload),Ee)}if(We(j)||ae(j))return Ge!==null?null:_e(q,V,j,Ee,null);ya(q,j)}return null}function Le(q,V,j,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(j)||null,D(V,q,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case X:return q=q.get(Ee.key===null?j:Ee.key)||null,O(V,q,Ee,Ge);case B:return q=q.get(Ee.key===null?j:Ee.key)||null,Q(V,q,Ee,Ge);case oe:var $e=Ee._init;return Le(q,V,j,$e(Ee._payload),Ge)}if(We(Ee)||ae(Ee))return q=q.get(j)||null,_e(V,q,Ee,Ge,null);ya(V,Ee)}return null}function ze(q,V,j,Ee){for(var Ge=null,$e=null,Ke=V,tt=V=0,nn=null;Ke!==null&&tt<j.length;tt++){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var yt=me(q,Ke,j[tt],Ee);if(yt===null){Ke===null&&(Ke=nn);break}t&&Ke&&yt.alternate===null&&i(q,Ke),V=h(yt,V,tt),$e===null?Ge=yt:$e.sibling=yt,$e=yt,Ke=nn}if(tt===j.length)return s(q,Ke),Ot&&Rr(q,tt),Ge;if(Ke===null){for(;tt<j.length;tt++)Ke=xe(q,j[tt],Ee),Ke!==null&&(V=h(Ke,V,tt),$e===null?Ge=Ke:$e.sibling=Ke,$e=Ke);return Ot&&Rr(q,tt),Ge}for(Ke=l(q,Ke);tt<j.length;tt++)nn=Le(Ke,q,tt,j[tt],Ee),nn!==null&&(t&&nn.alternate!==null&&Ke.delete(nn.key===null?tt:nn.key),V=h(nn,V,tt),$e===null?Ge=nn:$e.sibling=nn,$e=nn);return t&&Ke.forEach(function(ur){return i(q,ur)}),Ot&&Rr(q,tt),Ge}function He(q,V,j,Ee){var Ge=ae(j);if(typeof Ge!="function")throw Error(n(150));if(j=Ge.call(j),j==null)throw Error(n(151));for(var $e=Ge=null,Ke=V,tt=V=0,nn=null,yt=j.next();Ke!==null&&!yt.done;tt++,yt=j.next()){Ke.index>tt?(nn=Ke,Ke=null):nn=Ke.sibling;var ur=me(q,Ke,yt.value,Ee);if(ur===null){Ke===null&&(Ke=nn);break}t&&Ke&&ur.alternate===null&&i(q,Ke),V=h(ur,V,tt),$e===null?Ge=ur:$e.sibling=ur,$e=ur,Ke=nn}if(yt.done)return s(q,Ke),Ot&&Rr(q,tt),Ge;if(Ke===null){for(;!yt.done;tt++,yt=j.next())yt=xe(q,yt.value,Ee),yt!==null&&(V=h(yt,V,tt),$e===null?Ge=yt:$e.sibling=yt,$e=yt);return Ot&&Rr(q,tt),Ge}for(Ke=l(q,Ke);!yt.done;tt++,yt=j.next())yt=Le(Ke,q,tt,yt.value,Ee),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?tt:yt.key),V=h(yt,V,tt),$e===null?Ge=yt:$e.sibling=yt,$e=yt);return t&&Ke.forEach(function(O_){return i(q,O_)}),Ot&&Rr(q,tt),Ge}function Gt(q,V,j,Ee){if(typeof j=="object"&&j!==null&&j.type===F&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case X:e:{for(var Ge=j.key,$e=V;$e!==null;){if($e.key===Ge){if(Ge=j.type,Ge===F){if($e.tag===7){s(q,$e.sibling),V=c($e,j.props.children),V.return=q,q=V;break e}}else if($e.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===oe&&Jd(Ge)===$e.type){s(q,$e.sibling),V=c($e,j.props),V.ref=mo(q,$e,j),V.return=q,q=V;break e}s(q,$e);break}else i(q,$e);$e=$e.sibling}j.type===F?(V=Nr(j.props.children,q.mode,Ee,j.key),V.return=q,q=V):(Ee=Xa(j.type,j.key,j.props,null,q.mode,Ee),Ee.ref=mo(q,V,j),Ee.return=q,q=Ee)}return M(q);case B:e:{for($e=j.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){s(q,V.sibling),V=c(V,j.children||[]),V.return=q,q=V;break e}else{s(q,V);break}else i(q,V);V=V.sibling}V=uc(j,q.mode,Ee),V.return=q,q=V}return M(q);case oe:return $e=j._init,Gt(q,V,$e(j._payload),Ee)}if(We(j))return ze(q,V,j,Ee);if(ae(j))return He(q,V,j,Ee);ya(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,V!==null&&V.tag===6?(s(q,V.sibling),V=c(V,j),V.return=q,q=V):(s(q,V),V=lc(j,q.mode,Ee),V.return=q,q=V),M(q)):s(q,V)}return Gt}var ps=eh(!0),th=eh(!1),Ma=Qi(null),Ea=null,ms=null,vu=null;function xu(){vu=ms=Ea=null}function Su(t){var i=Ma.current;Nt(Ma),t._currentValue=i}function yu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function gs(t,i){Ea=t,vu=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Rn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:i,next:null},ms===null){if(Ea===null)throw Error(n(308));ms=t,Ea.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return i}var Cr=null;function Mu(t){Cr===null?Cr=[t]:Cr.push(t)}function nh(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,Mu(i)):(s.next=c.next,c.next=s),i.interleaved=s,wi(t,l)}function wi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var tr=!1;function Eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,vt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,wi(t,s)}return c=l.interleaved,c===null?(i.next=i,Mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,wi(t,s)}function Ta(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Er(t,s)}}function rh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function wa(t,i,s,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var O=D,Q=O.next;O.next=null,M===null?h=Q:M.next=Q,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=Q:D.next=Q,_e.lastBaseUpdate=O))}if(h!==null){var xe=c.baseState;M=0,_e=Q=O=null,D=h;do{var me=D.lane,Le=D.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,He=D;switch(me=i,Le=s,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){xe=ze.call(Le,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,me=typeof ze=="function"?ze.call(Le,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else Le={eventTime:Le,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(Q=_e=Le,O=xe):_e=_e.next=Le,M|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(O=xe),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=xe}}function sh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var go={},fi=Qi(go),_o=Qi(go),vo=Qi(go);function Pr(t){if(t===go)throw Error(n(174));return t}function Tu(t,i){switch(Dt(vo,i),Dt(_o,t),Dt(fi,go),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Nt(fi),Dt(fi,i)}function _s(){Nt(fi),Nt(_o),Nt(vo)}function oh(t){Pr(vo.current);var i=Pr(fi.current),s=Ve(i,t.type);i!==s&&(Dt(_o,t),Dt(fi,s))}function wu(t){_o.current===t&&(Nt(fi),Nt(_o))}var kt=Qi(0);function Aa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Au=[];function Ru(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var Ra=C.ReactCurrentDispatcher,Cu=C.ReactCurrentBatchConfig,br=0,Bt=null,$t=null,en=null,Ca=!1,xo=!1,So=0,o_=0;function fn(){throw Error(n(321))}function Pu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function bu(t,i,s,l,c,h){if(br=h,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=t===null||t.memoizedState===null?c_:f_,t=s(l,c),xo){h=0;do{if(xo=!1,So=0,25<=h)throw Error(n(301));h+=1,en=$t=null,i.updateQueue=null,Ra.current=d_,t=s(l,c)}while(xo)}if(Ra.current=La,i=$t!==null&&$t.next!==null,br=0,en=$t=Bt=null,Ca=!1,i)throw Error(n(300));return t}function Lu(){var t=So!==0;return So=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Bt.memoizedState=en=t:en=en.next=t,en}function Gn(){if($t===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=en===null?Bt.memoizedState:en.next;if(i!==null)en=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},en===null?Bt.memoizedState=en=t:en=en.next=t}return en}function yo(t,i){return typeof i=="function"?i(t):i}function Du(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=$t,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,O=null,Q=h;do{var _e=Q.lane;if((br&_e)===_e)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var xe={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(D=O=xe,M=l):O=O.next=xe,Bt.lanes|=_e,Lr|=_e}Q=Q.next}while(Q!==null&&Q!==h);O===null?M=l:O.next=D,Kn(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Bt.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Uu(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Kn(h,i.memoizedState)||(Rn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function ah(){}function lh(t,i){var s=Bt,l=Gn(),c=i(),h=!Kn(l.memoizedState,c);if(h&&(l.memoizedState=c,Rn=!0),l=l.queue,Iu(fh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Mo(9,ch.bind(null,s,l,c,i),void 0,null),tn===null)throw Error(n(349));br&30||uh(s,i,c)}return c}function uh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function ch(t,i,s,l){i.value=s,i.getSnapshot=l,dh(i)&&hh(t)}function fh(t,i,s){return s(function(){dh(i)&&hh(t)})}function dh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function hh(t){var i=wi(t,1);i!==null&&ti(i,t,1,-1)}function ph(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},i.queue=t,t=t.dispatch=u_.bind(null,Bt,t),[i.memoizedState,t]}function Mo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function mh(){return Gn().memoizedState}function Pa(t,i,s,l){var c=di();Bt.flags|=t,c.memoizedState=Mo(1|i,s,void 0,l===void 0?null:l)}function ba(t,i,s,l){var c=Gn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&Pu(l,M.deps)){c.memoizedState=Mo(i,s,h,l);return}}Bt.flags|=t,c.memoizedState=Mo(1|i,s,h,l)}function gh(t,i){return Pa(8390656,8,t,i)}function Iu(t,i){return ba(2048,8,t,i)}function _h(t,i){return ba(4,2,t,i)}function vh(t,i){return ba(4,4,t,i)}function xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Sh(t,i,s){return s=s!=null?s.concat([t]):null,ba(4,4,xh.bind(null,i,t),s)}function Nu(){}function yh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Pu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Mh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Pu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Eh(t,i,s){return br&21?(Kn(s,i)||(s=xn(),Bt.lanes|=s,Lr|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=s)}function a_(t,i){var s=dt;dt=s!==0&&4>s?s:4,t(!0);var l=Cu.transition;Cu.transition={};try{t(!1),i()}finally{dt=s,Cu.transition=l}}function Th(){return Gn().memoizedState}function l_(t,i,s){var l=or(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},wh(t))Ah(i,s);else if(s=nh(t,i,s,l),s!==null){var c=yn();ti(s,t,l,c),Rh(s,i,l)}}function u_(t,i,s){var l=or(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(wh(t))Ah(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,s);if(c.hasEagerState=!0,c.eagerState=D,Kn(D,M)){var O=i.interleaved;O===null?(c.next=c,Mu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}s=nh(t,i,c,l),s!==null&&(c=yn(),ti(s,t,l,c),Rh(s,i,l))}}function wh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Ah(t,i){xo=Ca=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Rh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Er(t,s)}}var La={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},c_={readContext:Vn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:gh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Pa(4194308,4,xh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Pa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Pa(4,2,t,i)},useMemo:function(t,i){var s=di();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=di();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=l_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:ph,useDebugValue:Nu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=ph(!1),i=t[0];return t=a_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Bt,c=di();if(Ot){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),tn===null)throw Error(n(349));br&30||uh(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,gh(fh.bind(null,l,h,t),[t]),l.flags|=2048,Mo(9,ch.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=di(),i=tn.identifierPrefix;if(Ot){var s=Ti,l=Ei;s=(l&~(1<<32-St(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=So++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=o_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},f_={readContext:Vn,useCallback:yh,useContext:Vn,useEffect:Iu,useImperativeHandle:Sh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Du,useRef:mh,useState:function(){return Du(yo)},useDebugValue:Nu,useDeferredValue:function(t){var i=Gn();return Eh(i,$t.memoizedState,t)},useTransition:function(){var t=Du(yo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1},d_={readContext:Vn,useCallback:yh,useContext:Vn,useEffect:Iu,useImperativeHandle:Sh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Uu,useRef:mh,useState:function(){return Uu(yo)},useDebugValue:Nu,useDeferredValue:function(t){var i=Gn();return $t===null?i.memoizedState=t:Eh(i,$t.memoizedState,t)},useTransition:function(){var t=Uu(yo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1};function Qn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Fu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Da={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),c=or(t),h=Ai(l,c);h.payload=i,s!=null&&(h.callback=s),i=nr(t,h,c),i!==null&&(ti(i,t,c,l),Ta(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),c=or(t),h=Ai(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=nr(t,h,c),i!==null&&(ti(i,t,c,l),Ta(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=or(t),c=Ai(s,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ti(i,t,l,s),Ta(i,t,l))}};function Ch(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!ao(s,l)||!ao(c,h):!0}function Ph(t,i,s){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=An(i)?wr:cn.current,l=i.contextTypes,h=(l=l!=null)?cs(t,c):Ji),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function bh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Da.enqueueReplaceState(i,i.state,null)}function Ou(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Eu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=An(i)?wr:cn.current,c.context=cs(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Fu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Da.enqueueReplaceState(c,c.state,null),wa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var s="",l=i;do s+=ue(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function ku(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Bu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var h_=typeof WeakMap=="function"?WeakMap:Map;function Lh(t,i,s){s=Ai(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ba||(Ba=!0,ec=l),Bu(t,i)},s}function Dh(t,i,s){s=Ai(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Bu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Bu(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Uh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new h_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=R_.bind(null,t,i,s),i.then(t,t))}function Ih(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Nh(t,i,s,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ai(-1,1),i.tag=2,nr(s,i,1))),s.lanes|=1),t)}var p_=C.ReactCurrentOwner,Rn=!1;function Sn(t,i,s,l){i.child=t===null?th(i,null,s,l):ps(i,t.child,s,l)}function Fh(t,i,s,l,c){s=s.render;var h=i.ref;return gs(i,c),l=bu(t,i,s,l,h,c),s=Lu(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(Ot&&s&&hu(i),i.flags|=1,Sn(t,i,l,c),i.child)}function Oh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ac(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,kh(t,i,h,l,c)):(t=Xa(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(M,l)&&t.ref===i.ref)return Ri(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function kh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(ao(h,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(Rn=!0);else return i.lanes=t.lanes,Ri(t,i,c)}return zu(t,i,s,l,c)}function Bh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ss,Fn),Fn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Ss,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Dt(Ss,Fn),Fn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Dt(Ss,Fn),Fn|=l;return Sn(t,i,c,s),i.child}function zh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function zu(t,i,s,l,c){var h=An(s)?wr:cn.current;return h=cs(i,h),gs(i,c),s=bu(t,i,s,l,h,c),l=Lu(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(Ot&&l&&hu(i),i.flags|=1,Sn(t,i,s,c),i.child)}function Hh(t,i,s,l,c){if(An(s)){var h=!0;ga(i)}else h=!1;if(gs(i,c),i.stateNode===null)Ia(t,i),Ph(i,s,l),Ou(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var O=M.context,Q=s.contextType;typeof Q=="object"&&Q!==null?Q=Vn(Q):(Q=An(s)?wr:cn.current,Q=cs(i,Q));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||O!==Q)&&bh(i,M,l,Q),tr=!1;var me=i.memoizedState;M.state=me,wa(i,l,M,c),O=i.memoizedState,D!==l||me!==O||wn.current||tr?(typeof _e=="function"&&(Fu(i,s,_e,l),O=i.memoizedState),(D=tr||Ch(i,s,D,l,me,O,Q))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=Q,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ih(t,i),D=i.memoizedProps,Q=i.type===i.elementType?D:Qn(i.type,D),M.props=Q,xe=i.pendingProps,me=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Vn(O):(O=An(s)?wr:cn.current,O=cs(i,O));var Le=s.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||me!==O)&&bh(i,M,l,O),tr=!1,me=i.memoizedState,M.state=me,wa(i,l,M,c);var ze=i.memoizedState;D!==xe||me!==ze||wn.current||tr?(typeof Le=="function"&&(Fu(i,s,Le,l),ze=i.memoizedState),(Q=tr||Ch(i,s,Q,l,me,ze,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=O,l=Q):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Hu(t,i,s,l,h,c)}function Hu(t,i,s,l,c,h){zh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Yd(i,s,!1),Ri(t,i,h);l=i.stateNode,p_.current=i;var D=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ps(i,t.child,null,h),i.child=ps(i,null,D,h)):Sn(t,i,D,h),i.memoizedState=l.state,c&&Yd(i,s,!0),i.child}function Vh(t){var i=t.stateNode;i.pendingContext?Wd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Wd(t,i.context,!1),Tu(t,i.containerInfo)}function Gh(t,i,s,l,c){return hs(),_u(c),i.flags|=256,Sn(t,i,s,l),i.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wh(t,i,s){var l=i.pendingProps,c=kt.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(kt,c&1),t===null)return gu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ya(M,l,0,null),t=Nr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Gu(s),i.memoizedState=Vu,t):Wu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return m_(t,i,M,l,D,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var O={mode:"hidden",children:l.children};return!(M&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=lr(c,O),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=lr(D,h):(h=Nr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Gu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Vu,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Wu(t,i){return i=Ya({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ua(t,i,s,l){return l!==null&&_u(l),ps(i,t.child,null,s),t=Wu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function m_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=ku(Error(n(422))),Ua(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ya({mode:"visible",children:l.children},c,0,null),h=Nr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&ps(i,t.child,null,M),i.child.memoizedState=Gu(M),i.memoizedState=Vu,h);if(!(i.mode&1))return Ua(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=ku(h,l,void 0),Ua(t,i,M,l)}if(D=(M&t.childLanes)!==0,Rn||D){if(l=tn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|M)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,wi(t,c),ti(l,t,c,-1))}return oc(),l=ku(Error(n(421))),Ua(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=C_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Zi(c.nextSibling),In=i,Ot=!0,Zn=null,t!==null&&(zn[Hn++]=Ei,zn[Hn++]=Ti,zn[Hn++]=Ar,Ei=t.id,Ti=t.overflow,Ar=i),i=Wu(i,l.children),i.flags|=4096,i)}function Xh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),yu(t.return,i,s)}function Xu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Yh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,s),l=kt.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,s,i);else if(t.tag===19)Xh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Aa(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Xu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Aa(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Xu(i,!0,s,null,h);break;case"together":Xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ri(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=lr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=lr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function g_(t,i,s){switch(i.tag){case 3:Vh(i),hs();break;case 5:oh(i);break;case 1:An(i.type)&&ga(i);break;case 4:Tu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(Ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):s&i.child.childLanes?Wh(t,i,s):(Dt(kt,kt.current&1),t=Ri(t,i,s),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return Yh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Bh(t,i,s)}return Ri(t,i,s)}var qh,Yu,jh,$h;qh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Yu=function(){},jh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Pr(fi.current);var h=null;switch(s){case"input":c=k(t,c),l=k(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ha)}ut(s,l);var M;s=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var D=c[Q];for(M in D)D.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var O=l[Q];if(D=c!=null?c[Q]:void 0,l.hasOwnProperty(Q)&&O!==D&&(O!=null||D!=null))if(Q==="style")if(D){for(M in D)!D.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&D[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(h||(h=[]),h.push(Q,s)),s=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(h=h||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&It("scroll",t),h||D===O||(h=[])):(h=h||[]).push(Q,O))}s&&(h=h||[]).push("style",s);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},$h=function(t,i,s,l){s!==l&&(i.flags|=4)};function Eo(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function __(t,i,s){var l=i.pendingProps;switch(pu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return An(i.type)&&ma(),dn(i),null;case 3:return l=i.stateNode,_s(),Nt(wn),Nt(cn),Ru(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Zn!==null&&(ic(Zn),Zn=null))),Yu(t,i),dn(i),null;case 5:wu(i);var c=Pr(vo.current);if(s=i.type,t!==null&&i.stateNode!=null)jh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Pr(fi.current),Sa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[ho]=h,t=(i.mode&1)!==0,s){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(c=0;c<uo.length;c++)It(uo[c],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":gn(l,h),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},It("invalid",l);break;case"textarea":$(l,h),It("invalid",l)}ut(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&da(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&da(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&It("scroll",l)}switch(s){case"input":wt(l),Ye(l,h,!0);break;case"textarea":wt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ha)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[ci]=i,t[ho]=l,qh(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":It("cancel",t),It("close",t),c=l;break;case"iframe":case"object":case"embed":It("load",t),c=l;break;case"video":case"audio":for(c=0;c<uo.length;c++)It(uo[c],t);c=l;break;case"source":It("error",t),c=l;break;case"img":case"image":case"link":It("error",t),It("load",t),c=l;break;case"details":It("toggle",t),c=l;break;case"input":gn(t,l),c=k(t,l),It("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),It("invalid",t);break;case"textarea":$(t,l),c=E(t,l),It("invalid",t);break;default:c=l}ut(s,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var O=D[h];h==="style"?Qe(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&at(t,O):typeof O=="number"&&at(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&It("scroll",t):O!=null&&L(t,h,O,M))}switch(s){case"input":wt(t),Ye(t,l,!1);break;case"textarea":wt(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ha)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)$h(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Pr(vo.current),Pr(fi.current),Sa(i)){if(l=i.stateNode,s=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:da(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return dn(i),null;case 13:if(Nt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Nn!==null&&i.mode&1&&!(i.flags&128))Qd(),hs(),i.flags|=98560,h=!1;else if(h=Sa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else hs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Zn!==null&&(ic(Zn),Zn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||kt.current&1?Kt===0&&(Kt=3):oc())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return _s(),Yu(t,i),t===null&&co(i.stateNode.containerInfo),dn(i),null;case 10:return Su(i.type._context),dn(i),null;case 17:return An(i.type)&&ma(),dn(i),null;case 19:if(Nt(kt),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Eo(h,!1);else{if(Kt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=Aa(t),M!==null){for(i.flags|=128,Eo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&H()>ys&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Aa(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ot)return dn(i),null}else 2*H()-h.renderingStartTime>ys&&s!==1073741824&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=H(),i.sibling=null,s=kt.current,Dt(kt,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return sc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Fn&1073741824&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function v_(t,i){switch(pu(i),i.tag){case 1:return An(i.type)&&ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Nt(wn),Nt(cn),Ru(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return wu(i),null;case 13:if(Nt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return _s(),null;case 10:return Su(i.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Na=!1,hn=!1,x_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function xs(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ht(t,i,l)}else s.current=null}function qu(t,i,s){try{s()}catch(l){Ht(t,i,l)}}var Kh=!1;function S_(t,i){if(su=ta,t=Cd(),Zl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,D=-1,O=-1,Q=0,_e=0,xe=t,me=null;t:for(;;){for(var Le;xe!==s||c!==0&&xe.nodeType!==3||(D=M+c),xe!==h||l!==0&&xe.nodeType!==3||(O=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===t)break t;if(me===s&&++Q===c&&(D=M),me===h&&++_e===l&&(O=M),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}s=D===-1||O===-1?null:{start:D,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(ou={focusedElem:t,selectionRange:s},ta=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Gt=ze.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:Qn(i.type,He),Gt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ze=Kh,Kh=!1,ze}function To(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&qu(i,s,h)}c=c.next}while(c!==l)}}function Fa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function ju(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Zh(t){var i=t.alternate;i!==null&&(t.alternate=null,Zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[ho],delete i[cu],delete i[n_],delete i[i_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qh(t){return t.tag===5||t.tag===3||t.tag===4}function Jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(t=t.child,t!==null))for($u(t,i,s),t=t.sibling;t!==null;)$u(t,i,s),t=t.sibling}function Ku(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ku(t,i,s),t=t.sibling;t!==null;)Ku(t,i,s),t=t.sibling}var on=null,Jn=!1;function ir(t,i,s){for(s=s.child;s!==null;)ep(t,i,s),s=s.sibling}function ep(t,i,s){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Xe,s)}catch{}switch(s.tag){case 5:hn||xs(s,i);case 6:var l=on,c=Jn;on=null,ir(t,i,s),on=l,Jn=c,on!==null&&(Jn?(t=on,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(Jn?(t=on,s=s.stateNode,t.nodeType===8?uu(t.parentNode,s):t.nodeType===1&&uu(t,s),to(t)):uu(on,s.stateNode));break;case 4:l=on,c=Jn,on=s.stateNode.containerInfo,Jn=!0,ir(t,i,s),on=l,Jn=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&qu(s,i,M),c=c.next}while(c!==l)}ir(t,i,s);break;case 1:if(!hn&&(xs(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(D){Ht(s,i,D)}ir(t,i,s);break;case 21:ir(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,ir(t,i,s),hn=l):ir(t,i,s);break;default:ir(t,i,s)}}function tp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new x_),i.forEach(function(l){var c=P_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ei(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:on=D.stateNode,Jn=!1;break e;case 3:on=D.stateNode.containerInfo,Jn=!0;break e;case 4:on=D.stateNode.containerInfo,Jn=!0;break e}D=D.return}if(on===null)throw Error(n(160));ep(h,M,c),on=null,Jn=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(Q){Ht(c,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)np(i,t),i=i.sibling}function np(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),hi(t),l&4){try{To(3,t,t.return),Fa(3,t)}catch(He){Ht(t,t.return,He)}try{To(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:ei(i,t),hi(t),l&512&&s!==null&&xs(s,s.return);break;case 5:if(ei(i,t),hi(t),l&512&&s!==null&&xs(s,s.return),t.flags&32){var c=t.stateNode;try{at(c,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,D=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),nt(D,M);var Q=nt(D,h);for(M=0;M<O.length;M+=2){var _e=O[M],xe=O[M+1];_e==="style"?Qe(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?at(c,xe):L(c,_e,xe,Q)}switch(D){case"input":lt(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(c,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[ho]=h}catch(He){Ht(t,t.return,He)}}break;case 6:if(ei(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Ht(t,t.return,He)}}break;case 3:if(ei(i,t),hi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:ei(i,t),hi(t);break;case 13:ei(i,t),hi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ju=H())),l&4&&tp(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(Q=hn)||_e,ei(i,t),hn=Q):ei(i,t),hi(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!_e&&t.mode&1)for(Oe=t,_e=t.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(me=Oe,Le=me.child,me.tag){case 0:case 11:case 14:case 15:To(4,me,me.return);break;case 1:xs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Ht(l,s,He)}}break;case 5:xs(me,me.return);break;case 22:if(me.memoizedState!==null){sp(xe);continue}}Le!==null?(Le.return=me,Oe=Le):sp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,Q?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,O=xe.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=je("display",M))}catch(He){Ht(t,t.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Q?"":xe.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ei(i,t),hi(t),l&4&&tp(t);break;case 21:break;default:ei(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Qh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(at(c,""),l.flags&=-33);var h=Jh(t);Ku(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Jh(t);$u(t,D,M);break;default:throw Error(n(161))}}catch(O){Ht(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function y_(t,i,s){Oe=t,ip(t)}function ip(t,i,s){for(var l=(t.mode&1)!==0;Oe!==null;){var c=Oe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Na;if(!M){var D=c.alternate,O=D!==null&&D.memoizedState!==null||hn;D=Na;var Q=hn;if(Na=M,(hn=O)&&!Q)for(Oe=c;Oe!==null;)M=Oe,O=M.child,M.tag===22&&M.memoizedState!==null?op(c):O!==null?(O.return=M,Oe=O):op(c);for(;h!==null;)Oe=h,ip(h),h=h.sibling;Oe=c,Na=D,hn=Q}rp(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Oe=h):rp(t)}}function rp(t){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:hn||Fa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Qn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&sh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}sh(i,M,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&to(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&ju(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Oe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Oe=s;break}Oe=i.return}}function sp(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Oe=s;break}Oe=i.return}}function op(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Fa(4,i)}catch(O){Ht(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){Ht(i,c,O)}}var h=i.return;try{ju(i)}catch(O){Ht(i,h,O)}break;case 5:var M=i.return;try{ju(i)}catch(O){Ht(i,M,O)}}}catch(O){Ht(i,i.return,O)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var M_=Math.ceil,Oa=C.ReactCurrentDispatcher,Zu=C.ReactCurrentOwner,Wn=C.ReactCurrentBatchConfig,vt=0,tn=null,Xt=null,an=0,Fn=0,Ss=Qi(0),Kt=0,wo=null,Lr=0,ka=0,Qu=0,Ao=null,Cn=null,Ju=0,ys=1/0,Ci=null,Ba=!1,ec=null,rr=null,za=!1,sr=null,Ha=0,Ro=0,tc=null,Va=-1,Ga=0;function yn(){return vt&6?H():Va!==-1?Va:Va=H()}function or(t){return t.mode&1?vt&2&&an!==0?an&-an:s_.transition!==null?(Ga===0&&(Ga=xn()),Ga):(t=dt,t!==0||(t=window.event,t=t===void 0?16:ld(t.type)),t):1}function ti(t,i,s,l){if(50<Ro)throw Ro=0,tc=null,Error(n(185));Vt(t,s,l),(!(vt&2)||t!==tn)&&(t===tn&&(!(vt&2)&&(ka|=s),Kt===4&&ar(t,an)),Pn(t,l),s===1&&vt===0&&!(i.mode&1)&&(ys=H()+500,_a&&er()))}function Pn(t,i){var s=t.callbackNode;Mr(t,i);var l=$n(t,t===tn?an:0);if(l===0)s!==null&&W(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&W(s),i===1)t.tag===0?r_(lp.bind(null,t)):qd(lp.bind(null,t)),e_(function(){!(vt&6)&&er()}),s=null;else{switch(ed(l)){case 1:s=Re;break;case 4:s=De;break;case 16:s=Fe;break;case 536870912:s=et;break;default:s=Fe}s=gp(s,ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function ap(t,i){if(Va=-1,Ga=0,vt&6)throw Error(n(327));var s=t.callbackNode;if(Ms()&&t.callbackNode!==s)return null;var l=$n(t,t===tn?an:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Wa(t,l);else{i=l;var c=vt;vt|=2;var h=cp();(tn!==t||an!==i)&&(Ci=null,ys=H()+500,Ur(t,i));do try{w_();break}catch(D){up(t,D)}while(!0);xu(),Oa.current=h,vt=c,Xt!==null?i=0:(tn=null,an=0,i=Kt)}if(i!==0){if(i===2&&(c=At(t),c!==0&&(l=c,i=nc(t,c))),i===1)throw s=wo,Ur(t,0),ar(t,l),Pn(t,H()),s;if(i===6)ar(t,l);else{if(c=t.current.alternate,!(l&30)&&!E_(c)&&(i=Wa(t,l),i===2&&(h=At(t),h!==0&&(l=h,i=nc(t,h))),i===1))throw s=wo,Ur(t,0),ar(t,l),Pn(t,H()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,Cn,Ci);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Ju+500-H(),10<i)){if($n(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=lu(Ir.bind(null,t,Cn,Ci),i);break}Ir(t,Cn,Ci);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-St(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=H()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*M_(l/1960))-l,10<l){t.timeoutHandle=lu(Ir.bind(null,t,Cn,Ci),l);break}Ir(t,Cn,Ci);break;case 5:Ir(t,Cn,Ci);break;default:throw Error(n(329))}}}return Pn(t,H()),t.callbackNode===s?ap.bind(null,t):null}function nc(t,i){var s=Ao;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Wa(t,i),t!==2&&(i=Cn,Cn=s,i!==null&&ic(i)),t}function ic(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function E_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!Kn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~Qu,i&=~ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-St(i),l=1<<s;t[s]=-1,i&=~l}}function lp(t){if(vt&6)throw Error(n(327));Ms();var i=$n(t,0);if(!(i&1))return Pn(t,H()),null;var s=Wa(t,i);if(t.tag!==0&&s===2){var l=At(t);l!==0&&(i=l,s=nc(t,l))}if(s===1)throw s=wo,Ur(t,0),ar(t,i),Pn(t,H()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,Cn,Ci),Pn(t,H()),null}function rc(t,i){var s=vt;vt|=1;try{return t(i)}finally{vt=s,vt===0&&(ys=H()+500,_a&&er())}}function Dr(t){sr!==null&&sr.tag===0&&!(vt&6)&&Ms();var i=vt;vt|=1;var s=Wn.transition,l=dt;try{if(Wn.transition=null,dt=1,t)return t()}finally{dt=l,Wn.transition=s,vt=i,!(vt&6)&&er()}}function sc(){Fn=Ss.current,Nt(Ss)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Jg(s)),Xt!==null)for(s=Xt.return;s!==null;){var l=s;switch(pu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ma();break;case 3:_s(),Nt(wn),Nt(cn),Ru();break;case 5:wu(l);break;case 4:_s();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:Su(l.type._context);break;case 22:case 23:sc()}s=s.return}if(tn=t,Xt=t=lr(t.current,null),an=Fn=i,Kt=0,wo=null,Qu=ka=Lr=0,Cn=Ao=null,Cr!==null){for(i=0;i<Cr.length;i++)if(s=Cr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Cr=null}return t}function up(t,i){do{var s=Xt;try{if(xu(),Ra.current=La,Ca){for(var l=Bt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ca=!1}if(br=0,en=$t=Bt=null,xo=!1,So=0,Zu.current=null,s===null||s.return===null){Kt=1,wo=i,Xt=null;break}e:{var h=t,M=s.return,D=s,O=i;if(i=an,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,_e=D,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Ih(M);if(Le!==null){Le.flags&=-257,Nh(Le,M,D,h,i),Le.mode&1&&Uh(h,Q,i),i=Le,O=Q;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(O),i.updateQueue=He}else ze.add(O);break e}else{if(!(i&1)){Uh(h,Q,i),oc();break e}O=Error(n(426))}}else if(Ot&&D.mode&1){var Gt=Ih(M);if(Gt!==null){!(Gt.flags&65536)&&(Gt.flags|=256),Nh(Gt,M,D,h,i),_u(vs(O,D));break e}}h=O=vs(O,D),Kt!==4&&(Kt=2),Ao===null?Ao=[h]:Ao.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Lh(h,O,i);rh(h,q);break e;case 1:D=O;var V=h.type,j=h.stateNode;if(!(h.flags&128)&&(typeof V.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(rr===null||!rr.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Dh(h,D,i);rh(h,Ee);break e}}h=h.return}while(h!==null)}dp(s)}catch(Ge){i=Ge,Xt===s&&s!==null&&(Xt=s=s.return);continue}break}while(!0)}function cp(){var t=Oa.current;return Oa.current=La,t===null?La:t}function oc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),tn===null||!(Lr&268435455)&&!(ka&268435455)||ar(tn,an)}function Wa(t,i){var s=vt;vt|=2;var l=cp();(tn!==t||an!==i)&&(Ci=null,Ur(t,i));do try{T_();break}catch(c){up(t,c)}while(!0);if(xu(),vt=s,Oa.current=l,Xt!==null)throw Error(n(261));return tn=null,an=0,Kt}function T_(){for(;Xt!==null;)fp(Xt)}function w_(){for(;Xt!==null&&!J();)fp(Xt)}function fp(t){var i=mp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?dp(t):Xt=i,Zu.current=null}function dp(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=v_(s,i),s!==null){s.flags&=32767,Xt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}else if(s=__(s,i,Fn),s!==null){Xt=s;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ir(t,i,s){var l=dt,c=Wn.transition;try{Wn.transition=null,dt=1,A_(t,i,s,l)}finally{Wn.transition=c,dt=l}return null}function A_(t,i,s,l){do Ms();while(sr!==null);if(vt&6)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(un(t,h),t===tn&&(Xt=tn=null,an=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||za||(za=!0,gp(Fe,function(){return Ms(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Wn.transition,Wn.transition=null;var M=dt;dt=1;var D=vt;vt|=4,Zu.current=null,S_(t,s),np(s,t),Yg(ou),ta=!!su,ou=su=null,t.current=s,y_(s),ee(),vt=D,dt=M,Wn.transition=h}else t.current=s;if(za&&(za=!1,sr=t,Ha=c),h=t.pendingLanes,h===0&&(rr=null),xt(s.stateNode),Pn(t,H()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ba)throw Ba=!1,t=ec,ec=null,t;return Ha&1&&t.tag!==0&&Ms(),h=t.pendingLanes,h&1?t===tc?Ro++:(Ro=0,tc=t):Ro=0,er(),null}function Ms(){if(sr!==null){var t=ed(Ha),i=Wn.transition,s=dt;try{if(Wn.transition=null,dt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Ha=0,vt&6)throw Error(n(331));var c=vt;for(vt|=4,Oe=t.current;Oe!==null;){var h=Oe,M=h.child;if(Oe.flags&16){var D=h.deletions;if(D!==null){for(var O=0;O<D.length;O++){var Q=D[O];for(Oe=Q;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:To(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,Le=_e.return;if(Zh(_e),_e===Q){Oe=null;break}if(me!==null){me.return=Le,Oe=me;break}Oe=Le}}}var ze=h.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Oe=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Oe=M;else e:for(;Oe!==null;){if(h=Oe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:To(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Oe=q;break e}Oe=h.return}}var V=t.current;for(Oe=V;Oe!==null;){M=Oe;var j=M.child;if(M.subtreeFlags&2064&&j!==null)j.return=M,Oe=j;else e:for(M=V;Oe!==null;){if(D=Oe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Fa(9,D)}}catch(Ge){Ht(D,D.return,Ge)}if(D===M){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(vt=c,er(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Xe,t)}catch{}l=!0}return l}finally{dt=s,Wn.transition=i}}return!1}function hp(t,i,s){i=vs(s,i),i=Lh(t,i,1),t=nr(t,i,1),i=yn(),t!==null&&(Vt(t,1,i),Pn(t,i))}function Ht(t,i,s){if(t.tag===3)hp(t,t,s);else for(;i!==null;){if(i.tag===3){hp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=vs(s,t),t=Dh(i,t,1),i=nr(i,t,1),t=yn(),i!==null&&(Vt(i,1,t),Pn(i,t));break}}i=i.return}}function R_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,tn===t&&(an&s)===s&&(Kt===4||Kt===3&&(an&130023424)===an&&500>H()-Ju?Ur(t,0):Qu|=s),Pn(t,i)}function pp(t,i){i===0&&(t.mode&1?(i=pt,pt<<=1,!(pt&130023424)&&(pt=4194304)):i=1);var s=yn();t=wi(t,i),t!==null&&(Vt(t,i,s),Pn(t,s))}function C_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),pp(t,s)}function P_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),pp(t,s)}var mp;mp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)Rn=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return Rn=!1,g_(t,i,s);Rn=!!(t.flags&131072)}else Rn=!1,Ot&&i.flags&1048576&&jd(i,xa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ia(t,i),t=i.pendingProps;var c=cs(i,cn.current);gs(i,s),c=bu(null,i,l,t,c,s);var h=Lu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(h=!0,ga(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Eu(i),c.updater=Da,i.stateNode=c,c._reactInternals=i,Ou(i,l,t,s),i=Hu(null,i,l,!0,h,s)):(i.tag=0,Ot&&h&&hu(i),Sn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=L_(l),t=Qn(l,t),c){case 0:i=zu(null,i,l,t,s);break e;case 1:i=Hh(null,i,l,t,s);break e;case 11:i=Fh(null,i,l,t,s);break e;case 14:i=Oh(null,i,l,Qn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),zu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Hh(t,i,l,c,s);case 3:e:{if(Vh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,ih(t,i),wa(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=vs(Error(n(423)),i),i=Gh(t,i,l,s,c);break e}else if(l!==c){c=vs(Error(n(424)),i),i=Gh(t,i,l,s,c);break e}else for(Nn=Zi(i.stateNode.containerInfo.firstChild),In=i,Ot=!0,Zn=null,s=th(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(hs(),l===c){i=Ri(t,i,s);break e}Sn(t,i,l,s)}i=i.child}return i;case 5:return oh(i),t===null&&gu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,au(l,c)?M=null:h!==null&&au(l,h)&&(i.flags|=32),zh(t,i),Sn(t,i,M,s),i.child;case 6:return t===null&&gu(i),null;case 13:return Wh(t,i,s);case 4:return Tu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ps(i,null,l,s):Sn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Fh(t,i,l,c,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Dt(Ma,l._currentValue),l._currentValue=M,h!==null)if(Kn(h.value,M)){if(h.children===c.children&&!wn.current){i=Ri(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var O=D.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ai(-1,s&-s),O.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),Q.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),yu(h.return,s,i),D.lanes|=s;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,D=M.alternate,D!==null&&(D.lanes|=s),yu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}Sn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,gs(i,s),c=Vn(c),l=l(c),i.flags|=1,Sn(t,i,l,s),i.child;case 14:return l=i.type,c=Qn(l,i.pendingProps),c=Qn(l.type,c),Oh(t,i,l,c,s);case 15:return kh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Ia(t,i),i.tag=1,An(l)?(t=!0,ga(i)):t=!1,gs(i,s),Ph(i,l,c),Ou(i,l,c,s),Hu(null,i,l,!0,t,s);case 19:return Yh(t,i,s);case 22:return Bh(t,i,s)}throw Error(n(156,i.tag))};function gp(t,i){return w(t,i)}function b_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,s,l){return new b_(t,i,s,l)}function ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function L_(t){if(typeof t=="function")return ac(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===he)return 14}return 2}function lr(t,i){var s=t.alternate;return s===null?(s=Xn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Xa(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")ac(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Nr(s.children,c,h,i);case Y:M=8,c|=8;break;case P:return t=Xn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case Z:return t=Xn(13,s,i,c),t.elementType=Z,t.lanes=h,t;case fe:return t=Xn(19,s,i,c),t.elementType=fe,t.lanes=h,t;case le:return Ya(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case U:M=9;break e;case se:M=11;break e;case he:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Nr(t,i,s,l){return t=Xn(7,t,l,i),t.lanes=s,t}function Ya(t,i,s,l){return t=Xn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function lc(t,i,s){return t=Xn(6,t,null,i),t.lanes=s,t}function uc(t,i,s){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function D_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ln(0),this.expirationTimes=ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function cc(t,i,s,l,c,h,M,D,O){return t=new D_(t,i,s,D,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(h),t}function U_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function _p(t){if(!t)return Ji;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(An(s))return Xd(t,s,i)}return i}function vp(t,i,s,l,c,h,M,D,O){return t=cc(s,l,!0,t,c,h,M,D,O),t.context=_p(null),s=t.current,l=yn(),c=or(s),h=Ai(l,c),h.callback=i??null,nr(s,h,c),t.current.lanes=c,Vt(t,c,l),Pn(t,l),t}function qa(t,i,s,l){var c=i.current,h=yn(),M=or(c);return s=_p(s),i.context===null?i.context=s:i.pendingContext=s,i=Ai(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(ti(t,c,M,h),Ta(t,c,M)),M}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function fc(t,i){xp(t,i),(t=t.alternate)&&xp(t,i)}var Sp=typeof reportError=="function"?reportError:function(t){console.error(t)};function dc(t){this._internalRoot=t}$a.prototype.render=dc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qa(t,i,null,null)},$a.prototype.unmount=dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){qa(null,t,null,null)}),i[yi]=null}};function $a(t){this._internalRoot=t}$a.prototype.unstable_scheduleHydration=function(t){if(t){var i=id();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ji.length&&i!==0&&i<ji[s].priority;s++);ji.splice(s,0,t),s===0&&od(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function I_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Q=ja(M);h.call(Q)}}var M=vp(i,l,t,0,null,!1,!1,"",yp);return t._reactRootContainer=M,t[yi]=M.current,co(t.nodeType===8?t.parentNode:t),Dr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var Q=ja(O);D.call(Q)}}var O=cc(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=O,t[yi]=O.current,co(t.nodeType===8?t.parentNode:t),Dr(function(){qa(i,O,s,l)}),O}function Za(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var O=ja(M);D.call(O)}}qa(i,M,t,c)}else M=I_(s,i,t,c,l);return ja(M)}td=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=sn(i.pendingLanes);s!==0&&(Er(i,s|1),Pn(i,H()),!(vt&6)&&(ys=H()+500,er()))}break;case 13:Dr(function(){var l=wi(t,1);if(l!==null){var c=yn();ti(l,t,1,c)}}),fc(t,1)}},kl=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var s=yn();ti(i,t,134217728,s)}fc(t,134217728)}},nd=function(t){if(t.tag===13){var i=or(t),s=wi(t,i);if(s!==null){var l=yn();ti(s,t,i,l)}fc(t,i)}},id=function(){return dt},rd=function(t,i){var s=dt;try{return dt=t,i()}finally{dt=s}},Ae=function(t,i,s){switch(i){case"input":if(lt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=pa(l);if(!c)throw Error(n(90));ht(l),lt(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&b(t,!!s.multiple,i,!1)}},Ut=rc,jt=Dr;var N_={usingClientEntryPoint:!1,Events:[po,ls,pa,Pe,it,rc]},Co={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F_={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zo(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Xe=Qa.inject(F_),rt=Qa}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,bn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(i))throw Error(n(200));return U_(t,i,null,s)},bn.createRoot=function(t,i){if(!hc(t))throw Error(n(299));var s=!1,l="",c=Sp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=cc(t,1,!1,null,null,s,!1,l,c),t[yi]=i.current,co(t.nodeType===8?t.parentNode:t),new dc(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Zo(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Dr(t)},bn.hydrate=function(t,i,s){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!0,s)},bn.hydrateRoot=function(t,i,s){if(!hc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=Sp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=vp(i,null,t,1,s??null,c,!1,h,M),t[yi]=i.current,co(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new $a(i)},bn.render=function(t,i,s){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!1,s)},bn.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},bn.unstable_batchedUpdates=rc,bn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Ka(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Za(t,i,s,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Pp;function X_(){if(Pp)return gc.exports;Pp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gc.exports=W_(),gc.exports}var bp;function Y_(){if(bp)return Ja;bp=1;var o=X_();return Ja.createRoot=o.createRoot,Ja.hydrateRoot=o.hydrateRoot,Ja}var q_=Y_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xf="171",j_=0,Lp=1,$_=2,Pm=1,K_=2,Ni=3,xr=0,Dn=1,Fi=2,_r=0,Bs=1,Dp=2,Up=3,Ip=4,Z_=5,Xr=100,Q_=101,J_=102,ev=103,tv=104,nv=200,iv=201,rv=202,sv=203,nf=204,rf=205,ov=206,av=207,lv=208,uv=209,cv=210,fv=211,dv=212,hv=213,pv=214,sf=0,of=1,af=2,Vs=3,lf=4,uf=5,cf=6,ff=7,bm=0,mv=1,gv=2,vr=0,_v=1,vv=2,xv=3,Sv=4,yv=5,Mv=6,Ev=7,Lm=300,Gs=301,Ws=302,df=303,hf=304,Ul=306,pf=1e3,qr=1001,mf=1002,li=1003,Tv=1004,el=1005,gi=1006,xc=1007,jr=1008,zi=1009,Dm=1010,Um=1011,ko=1012,Yf=1013,Kr=1014,Oi=1015,Ho=1016,qf=1017,jf=1018,Xs=1020,Im=35902,Nm=1021,Fm=1022,ai=1023,Om=1024,km=1025,zs=1026,Ys=1027,Bm=1028,$f=1029,zm=1030,Kf=1031,Zf=1033,El=33776,Tl=33777,wl=33778,Al=33779,gf=35840,_f=35841,vf=35842,xf=35843,Sf=36196,yf=37492,Mf=37496,Ef=37808,Tf=37809,wf=37810,Af=37811,Rf=37812,Cf=37813,Pf=37814,bf=37815,Lf=37816,Df=37817,Uf=37818,If=37819,Nf=37820,Ff=37821,Rl=36492,Of=36494,kf=36495,Hm=36283,Bf=36284,zf=36285,Hf=36286,wv=3200,Av=3201,Rv=0,Cv=1,gr="",qn="srgb",qs="srgb-linear",bl="linear",Rt="srgb",Es=7680,Np=519,Pv=512,bv=513,Lv=514,Vm=515,Dv=516,Uv=517,Iv=518,Nv=519,Fp=35044,Op="300 es",ki=2e3,Ll=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,Vf=180/Math.PI;function Vo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function mt(o,e,n){return Math.max(e,Math.min(n,o))}function Fv(o,e){return(o%e+e)%e}function yc(o,e,n){return(1-n)*o+n*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],y=r[5],T=r[8],A=a[0],S=a[3],_=a[6],N=a[1],L=a[4],C=a[7],X=a[2],B=a[5],F=a[8];return u[0]=f*A+d*N+p*X,u[3]=f*S+d*L+p*B,u[6]=f*_+d*C+p*F,u[1]=m*A+g*N+v*X,u[4]=m*S+g*L+v*B,u[7]=m*_+g*C+v*F,u[2]=x*A+y*N+T*X,u[5]=x*S+y*L+T*B,u[8]=x*_+y*C+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*u*g+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*f-d*m,x=d*p-g*u,y=m*u-f*p,T=n*v+r*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(a*m-g*r)*A,e[2]=(d*r-a*f)*A,e[3]=x*A,e[4]=(g*n-a*p)*A,e[5]=(a*u-d*n)*A,e[6]=y*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new st;function Gm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ov(){const o=Bo("canvas");return o.style.display="block",o}const kp={};function Os(o){o in kp||(kp[o]=!0,console.warn(o))}function kv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Bv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bp=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){const o={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Rt&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Rt&&(a.r=Hs(a.r),a.g=Hs(a.g),a.b=Hs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gr?bl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[qs]:{primaries:e,whitePoint:r,transfer:bl,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),o}const Mt=Hv();function Bi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ts;class Vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Bo("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Bi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bi(n[r]/255)*255):n[r]=Bi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Ec(a[f].image)):u.push(Ec(a[f]))}else u=Ec(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ec(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Vv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class En extends $s{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,r=qr,a=qr,u=gi,f=jr,d=ai,p=zi,m=En.DEFAULT_ANISOTROPY,g=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Vo(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Lm;En.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],y=p[5],T=p[9],A=p[2],S=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(y+1)/2,X=(_+1)/2,B=(g+x)/4,F=(v+A)/4,Y=(T+S)/4;return L>C&&L>X?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=B/r,u=F/r):C>X?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=B/a,u=Y/a):X<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(X),r=F/u,a=Y/u),this.set(r,a,u,n),this}let N=Math.sqrt((S-T)*(S-T)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(v-A)/N,this.z=(x-g)/N,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new En(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends Xv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Xm extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yv extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const x=u[f+0],y=u[f+1],T=u[f+2],A=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=A;return}if(v!==A||p!==x||m!==y||g!==T){let S=1-d;const _=p*x+m*y+g*T+v*A,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const X=Math.sqrt(L),B=Math.atan2(X,_*N);S=Math.sin(S*B)/X,d=Math.sin(d*B)/X}const C=d*N;if(p=p*S+x*C,m=m*S+y*C,g=g*S+T*C,v=v*S+A*C,S===1-d){const X=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=X,m*=X,g*=X,v*=X}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],g=r[a+3],v=u[f],x=u[f+1],y=u[f+2],T=u[f+3];return e[n]=d*T+g*v+p*y-m*x,e[n+1]=p*T+g*x+m*v-d*y,e[n+2]=m*T+g*y+d*x-p*v,e[n+3]=g*T-d*v-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(a/2),v=d(u/2),x=p(r/2),y=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=x*g*v+m*y*T,this._y=m*y*v-x*g*T,this._z=m*g*T+x*y*v,this._w=m*g*v-x*y*T;break;case"YXZ":this._x=x*g*v+m*y*T,this._y=m*y*v-x*g*T,this._z=m*g*T-x*y*v,this._w=m*g*v+x*y*T;break;case"ZXY":this._x=x*g*v-m*y*T,this._y=m*y*v+x*g*T,this._z=m*g*T+x*y*v,this._w=m*g*v-x*y*T;break;case"ZYX":this._x=x*g*v-m*y*T,this._y=m*y*v+x*g*T,this._z=m*g*T-x*y*v,this._w=m*g*v+x*y*T;break;case"YZX":this._x=x*g*v+m*y*T,this._y=m*y*v+x*g*T,this._z=m*g*T-x*y*v,this._w=m*g*v-x*y*T;break;case"XZY":this._x=x*g*v-m*y*T,this._y=m*y*v-x*g*T,this._z=m*g*T+x*y*v,this._w=m*g*v+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],v=n[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+a*m-u*p,this._y=a*g+f*p+u*d-r*m,this._z=u*g+f*m+r*p-a*d,this._w=f*g-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),g=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*g,this.y=r+p*g+d*m-u*v,this.z=a+p*v+u*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new ne,Hp=new Go;class Wo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ni):ni.fromBufferAttribute(u,f),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),nl.subVectors(this.max,Lo),ws.subVectors(e.a,Lo),As.subVectors(e.b,Lo),Rs.subVectors(e.c,Lo),cr.subVectors(As,ws),fr.subVectors(Rs,As),Fr.subVectors(ws,Rs);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Fr.z,Fr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Fr.z,0,-Fr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Fr.y,Fr.x,0];return!wc(n,ws,As,Rs,nl)||(n=[1,0,0,0,1,0,0,0,1],!wc(n,ws,As,Rs,nl))?!1:(il.crossVectors(cr,fr),n=[il.x,il.y,il.z],wc(n,ws,As,Rs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ni=new ne,tl=new Wo,ws=new ne,As=new ne,Rs=new ne,cr=new ne,fr=new ne,Fr=new ne,Lo=new ne,nl=new ne,il=new ne,Or=new ne;function wc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Or.fromArray(o,u);const d=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),p=e.dot(Or),m=n.dot(Or),g=r.dot(Or);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const qv=new Wo,Do=new ne,Ac=new ne;class Qf{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):qv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Do,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Ac)),this.expandByPoint(Do.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new ne,Rc=new ne,rl=new ne,dr=new ne,Cc=new ne,sl=new ne,Pc=new ne;class jv{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Rc.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Rc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(rl),d=dr.dot(this.direction),p=-dr.dot(rl),m=dr.lengthSq(),g=Math.abs(1-f*f);let v,x,y,T;if(g>0)if(v=f*p-d,x=f*d-p,T=u*g,v>=0)if(x>=-T)if(x<=T){const A=1/g;v*=A,x*=A,y=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-T?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=T?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Rc).addScaledVector(rl,x),y}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),sl.subVectors(r,e),Pc.crossVectors(Cc,sl);let f=this.direction.dot(Pc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(sl.crossVectors(dr,sl));if(p<0)return null;const m=d*this.direction.dot(Cc.cross(dr));if(m<0||p+m>f)return null;const g=-d*dr.dot(Pc);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,a,u,f,d,p,m,g,v,x,y,T,A,S){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,g,v,x,y,T,A,S)}set(e,n,r,a,u,f,d,p,m,g,v,x,y,T,A,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=T,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),u=1/Cs.setFromMatrixColumn(e,1).length(),f=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*v,T=d*g,A=d*v;n[0]=p*g,n[4]=-p*v,n[8]=m,n[1]=y+T*m,n[5]=x-A*m,n[9]=-d*p,n[2]=A-x*m,n[6]=T+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,y=p*v,T=m*g,A=m*v;n[0]=x+A*d,n[4]=T*d-y,n[8]=f*m,n[1]=f*v,n[5]=f*g,n[9]=-d,n[2]=y*d-T,n[6]=A+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,y=p*v,T=m*g,A=m*v;n[0]=x-A*d,n[4]=-f*v,n[8]=T+y*d,n[1]=y+T*d,n[5]=f*g,n[9]=A-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,y=f*v,T=d*g,A=d*v;n[0]=p*g,n[4]=T*m-y,n[8]=x*m+A,n[1]=p*v,n[5]=A*m+x,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,T=d*p,A=d*m;n[0]=p*g,n[4]=A-x*v,n[8]=T*v+y,n[1]=v,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=y*v+T,n[10]=x-A*v}else if(e.order==="XZY"){const x=f*p,y=f*m,T=d*p,A=d*m;n[0]=p*g,n[4]=-v,n[8]=m*g,n[1]=x*v+A,n[5]=f*g,n[9]=y*v-T,n[2]=T*v-y,n[6]=d*g,n[10]=A*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Kv)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(r,On),hr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(r,On)),hr.normalize(),ol.crossVectors(On,hr),a[0]=hr.x,a[4]=ol.x,a[8]=On.x,a[1]=hr.y,a[5]=ol.y,a[9]=On.y,a[2]=hr.z,a[6]=ol.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],y=r[13],T=r[2],A=r[6],S=r[10],_=r[14],N=r[3],L=r[7],C=r[11],X=r[15],B=a[0],F=a[4],Y=a[8],P=a[12],R=a[1],U=a[5],se=a[9],Z=a[13],fe=a[2],he=a[6],oe=a[10],le=a[14],z=a[3],ae=a[7],re=a[11],I=a[15];return u[0]=f*B+d*R+p*fe+m*z,u[4]=f*F+d*U+p*he+m*ae,u[8]=f*Y+d*se+p*oe+m*re,u[12]=f*P+d*Z+p*le+m*I,u[1]=g*B+v*R+x*fe+y*z,u[5]=g*F+v*U+x*he+y*ae,u[9]=g*Y+v*se+x*oe+y*re,u[13]=g*P+v*Z+x*le+y*I,u[2]=T*B+A*R+S*fe+_*z,u[6]=T*F+A*U+S*he+_*ae,u[10]=T*Y+A*se+S*oe+_*re,u[14]=T*P+A*Z+S*le+_*I,u[3]=N*B+L*R+C*fe+X*z,u[7]=N*F+L*U+C*he+X*ae,u[11]=N*Y+L*se+C*oe+X*re,u[15]=N*P+L*Z+C*le+X*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],y=e[14],T=e[3],A=e[7],S=e[11],_=e[15];return T*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*y-r*p*y)+A*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*g-u*p*g)+S*(+n*m*v-n*d*y-u*f*v+r*f*y+u*d*g-r*m*g)+_*(-a*d*g-n*p*v+n*d*x+a*f*v-r*f*x+r*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],y=e[11],T=e[12],A=e[13],S=e[14],_=e[15],N=v*S*m-A*x*m+A*p*y-d*S*y-v*p*_+d*x*_,L=T*x*m-g*S*m-T*p*y+f*S*y+g*p*_-f*x*_,C=g*A*m-T*v*m+T*d*y-f*A*y-g*d*_+f*v*_,X=T*v*p-g*A*p-T*d*x+f*A*x+g*d*S-f*v*S,B=n*N+r*L+a*C+u*X;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=N*F,e[1]=(A*x*u-v*S*u-A*a*y+r*S*y+v*a*_-r*x*_)*F,e[2]=(d*S*u-A*p*u+A*a*m-r*S*m-d*a*_+r*p*_)*F,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*y-r*p*y)*F,e[4]=L*F,e[5]=(g*S*u-T*x*u+T*a*y-n*S*y-g*a*_+n*x*_)*F,e[6]=(T*p*u-f*S*u-T*a*m+n*S*m+f*a*_-n*p*_)*F,e[7]=(f*x*u-g*p*u+g*a*m-n*x*m-f*a*y+n*p*y)*F,e[8]=C*F,e[9]=(T*v*u-g*A*u-T*r*y+n*A*y+g*r*_-n*v*_)*F,e[10]=(f*A*u-T*d*u+T*r*m-n*A*m-f*r*_+n*d*_)*F,e[11]=(g*d*u-f*v*u-g*r*m+n*v*m+f*r*y-n*d*y)*F,e[12]=X*F,e[13]=(g*A*a-T*v*a+T*r*x-n*A*x-g*r*S+n*v*S)*F,e[14]=(T*d*a-f*A*a-T*r*p+n*A*p+f*r*S-n*d*S)*F,e[15]=(f*v*a-g*d*a+g*r*p-n*v*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,g=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,g*d+r,g*p-a*f,0,m*p-a*d,g*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,g=f+f,v=d+d,x=u*m,y=u*g,T=u*v,A=f*g,S=f*v,_=d*v,N=p*m,L=p*g,C=p*v,X=r.x,B=r.y,F=r.z;return a[0]=(1-(A+_))*X,a[1]=(y+C)*X,a[2]=(T-L)*X,a[3]=0,a[4]=(y-C)*B,a[5]=(1-(x+_))*B,a[6]=(S+N)*B,a[7]=0,a[8]=(T+L)*F,a[9]=(S-N)*F,a[10]=(1-(x+A))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Cs.set(a[0],a[1],a[2]).length();const f=Cs.set(a[4],a[5],a[6]).length(),d=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const m=1/u,g=1/f,v=1/d;return ii.elements[0]*=m,ii.elements[1]*=m,ii.elements[2]*=m,ii.elements[4]*=g,ii.elements[5]*=g,ii.elements[6]*=g,ii.elements[8]*=v,ii.elements[9]*=v,ii.elements[10]*=v,n.setFromRotationMatrix(ii),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=ki){const p=this.elements,m=2*u/(n-e),g=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let y,T;if(d===ki)y=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Ll)y=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=ki){const p=this.elements,m=1/(n-e),g=1/(r-a),v=1/(f-u),x=(n+e)*m,y=(r+a)*g;let T,A;if(d===ki)T=(f+u)*v,A=-2*v;else if(d===Ll)T=u*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new ne,ii=new qt,$v=new ne(0,0,0),Kv=new ne(1,1,1),hr=new ne,ol=new ne,On=new ne,Vp=new qt,Gp=new Go;class Hi{constructor(e=0,n=0,r=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],g=a[9],v=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zv=0;const Wp=new ne,Ps=new Go,Li=new qt,al=new ne,Uo=new ne,Qv=new ne,Jv=new Go,Xp=new ne(1,0,0),Yp=new ne(0,1,0),qp=new ne(0,0,1),jp={type:"added"},e0={type:"removed"},bs={type:"childadded",child:null},bc={type:"childremoved",child:null};class Bn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ne,n=new Hi,r=new Go,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new st}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,n){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Uo,al,this.up):Li.lookAt(al,Uo,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Li),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(e0),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,Qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),y=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Bn.DEFAULT_UP=new ne(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new ne,Di=new ne,Lc=new ne,Ui=new ne,Ls=new ne,Ds=new ne,$p=new ne,Dc=new ne,Uc=new ne,Ic=new ne,Nc=new Wt,Fc=new Wt,Oc=new Wt;class oi{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ri.subVectors(e,n),a.cross(ri);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ri.subVectors(a,n),Di.subVectors(r,n),Lc.subVectors(e,n);const f=ri.dot(ri),d=ri.dot(Di),p=ri.dot(Lc),m=Di.dot(Di),g=Di.dot(Lc),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-d*g)*x,T=(f*g-d*p)*x;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ui)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ui.x),p.addScaledVector(f,Ui.y),p.addScaledVector(d,Ui.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Nc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Nc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,r),Oc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Nc,u.x),f.addScaledVector(Fc,u.y),f.addScaledVector(Oc,u.z),f}static isFrontFacing(e,n,r,a){return ri.subVectors(r,n),Di.subVectors(e,n),ri.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ri.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ls.subVectors(a,r),Ds.subVectors(u,r),Dc.subVectors(e,r);const p=Ls.dot(Dc),m=Ds.dot(Dc);if(p<=0&&m<=0)return n.copy(r);Uc.subVectors(e,a);const g=Ls.dot(Uc),v=Ds.dot(Uc);if(g>=0&&v<=g)return n.copy(a);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(Ls,f);Ic.subVectors(e,u);const y=Ls.dot(Ic),T=Ds.dot(Ic);if(T>=0&&y<=T)return n.copy(u);const A=y*m-p*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ds,d);const S=g*T-y*v;if(S<=0&&v-g>=0&&y-T>=0)return $p.subVectors(u,a),d=(v-g)/(v-g+(y-T)),n.copy(a).addScaledVector($p,d);const _=1/(S+A+x);return f=A*_,d=x*_,n.copy(r).addScaledVector(Ls,f).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function kc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Fv(e,1),n=mt(n,0,1),r=mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=kc(f,u,e+1/3),this.g=kc(f,u,e),this.b=kc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(mt(mn.r*255,0,255))*65536+Math.round(mt(mn.g*255,0,255))*256+Math.round(mt(mn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=qn){Mt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(ll);const r=yc(pr.h,ll.h,n),a=yc(pr.s,ll.s,n),u=yc(pr.l,ll.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Ct;Ct.NAMES=qm;let t0=0;class Il extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Bs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=rf,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nf&&(r.blendSrc=this.blendSrc),this.blendDst!==rf&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Np&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jm extends Il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new ne,ul=new Pt;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Fp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array),u=Ln(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}}class $m extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Km extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class $r extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let n0=0;const Yn=new qt,Bc=new Bn,Us=new ne,kn=new Wo,Io=new Wo,rn=new ne;class Qr extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?Km:$m)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new $r(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(kn.min,Io.min),kn.expandByPoint(rn),rn.addVectors(kn.max,Io.max),kn.expandByPoint(rn)):(kn.expandByPoint(Io.min),kn.expandByPoint(Io.max))}kn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)rn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)rn.fromBufferAttribute(d,m),p&&(Us.fromBufferAttribute(e,m),rn.add(Us)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new ne,p[Y]=new ne;const m=new ne,g=new ne,v=new ne,x=new Pt,y=new Pt,T=new Pt,A=new ne,S=new ne;function _(Y,P,R){m.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,Y),y.fromBufferAttribute(u,P),T.fromBufferAttribute(u,R),g.sub(m),v.sub(m),y.sub(x),T.sub(x);const U=1/(y.x*T.y-T.x*y.y);isFinite(U)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(U),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-T.x).multiplyScalar(U),d[Y].add(A),d[P].add(A),d[R].add(A),p[Y].add(S),p[P].add(S),p[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,P=N.length;Y<P;++Y){const R=N[Y],U=R.start,se=R.count;for(let Z=U,fe=U+se;Z<fe;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new ne,C=new ne,X=new ne,B=new ne;function F(Y){X.fromBufferAttribute(a,Y),B.copy(X);const P=d[Y];L.copy(P),L.sub(X.multiplyScalar(X.dot(P))).normalize(),C.crossVectors(B,P);const U=C.dot(p[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,U)}for(let Y=0,P=N.length;Y<P;++Y){const R=N[Y],U=R.start,se=R.count;for(let Z=U,fe=U+se;Z<fe;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,f=new ne,d=new ne,p=new ne,m=new ne,g=new ne,v=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),g.subVectors(f,u),v.subVectors(a,u),g.cross(v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),d.add(g),p.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,u),v.subVectors(a,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let y=0,T=0;for(let A=0,S=p.length;A<S;A++){d.isInterleavedBufferAttribute?y=p[A]*d.data.stride+d.offset:y=p[A]*g;for(let _=0;_<g;_++)x[T++]=m[y++]}return new vi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(a[p]=g,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new qt,kr=new jv,cl=new Qf,Zp=new ne,fl=new ne,dl=new ne,hl=new ne,zc=new ne,pl=new ne,Qp=new ne,ml=new ne;class _i extends Bn{constructor(e=new Qr,n=new jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){pl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(zc.fromBufferAttribute(v,e),f?pl.addScaledVector(zc,g):pl.addScaledVector(zc.sub(n),g))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(u),kr.copy(e.ray).recast(e.near),!(cl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(cl,Zp)===null||kr.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(u).invert(),kr.copy(e.ray).applyMatrix4(Kp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=f[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=N,X=L;C<X;C+=3){const B=d.getX(C),F=d.getX(C+1),Y=d.getX(C+2);a=gl(this,_,e,r,m,g,v,B,F,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=T,_=A;S<_;S+=3){const N=d.getX(S),L=d.getX(S+1),C=d.getX(S+2);a=gl(this,f,e,r,m,g,v,N,L,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=f[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=N,X=L;C<X;C+=3){const B=C,F=C+1,Y=C+2;a=gl(this,_,e,r,m,g,v,B,F,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let S=T,_=A;S<_;S+=3){const N=S,L=S+1,C=S+2;a=gl(this,f,e,r,m,g,v,N,L,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function i0(o,e,n,r,a,u,f,d){let p;if(e.side===Dn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===xr,d),p===null)return null;ml.copy(d),ml.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(ml);return m<n.near||m>n.far?null:{distance:m,point:ml.clone(),object:o}}function gl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,fl),o.getVertexPosition(p,dl),o.getVertexPosition(m,hl);const g=i0(o,e,n,r,fl,dl,hl,Qp);if(g){const v=new ne;oi.getBarycoord(Qp,fl,dl,hl,v),a&&(g.uv=oi.getInterpolatedAttribute(a,d,p,m,v,new Pt)),u&&(g.uv1=oi.getInterpolatedAttribute(u,d,p,m,v,new Pt)),f&&(g.normal=oi.getInterpolatedAttribute(f,d,p,m,v,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ne,materialIndex:0};oi.getNormal(fl,dl,hl,x.normal),g.face=x,g.barycoord=v}return g}class Xo extends Qr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],v=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new $r(m,3)),this.setAttribute("normal",new $r(g,3)),this.setAttribute("uv",new $r(v,2));function T(A,S,_,N,L,C,X,B,F,Y,P){const R=C/F,U=X/Y,se=C/2,Z=X/2,fe=B/2,he=F+1,oe=Y+1;let le=0,z=0;const ae=new ne;for(let re=0;re<oe;re++){const I=re*U-Z;for(let te=0;te<he;te++){const Ue=te*R-se;ae[A]=Ue*N,ae[S]=I*L,ae[_]=fe,m.push(ae.x,ae.y,ae.z),ae[A]=0,ae[S]=0,ae[_]=B>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(te/F),v.push(1-re/Y),le+=1}}for(let re=0;re<Y;re++)for(let I=0;I<F;I++){const te=x+I+he*re,Ue=x+I+he*(re+1),K=x+(I+1)+he*(re+1),ue=x+(I+1)+he*re;p.push(te,Ue,ue),p.push(Ue,K,ue),z+=6}d.addGroup(y,z,P),y+=z,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(o){const e={};for(let n=0;n<o.length;n++){const r=js(o[n]);for(const a in r)e[a]=r[a]}return e}function r0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Zm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const s0={clone:js,merge:Mn};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Qm extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ne,Jp=new Pt,em=new Pt;class jn extends Qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vf*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,em),n.subVectors(em,Jp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Ns=1;class l0 extends Bn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(Is,Ns,e,n);a.layers=this.layers,this.add(a);const u=new jn(Is,Ns,e,n);u.layers=this.layers,this.add(u);const f=new jn(Is,Ns,e,n);f.layers=this.layers,this.add(f);const d=new jn(Is,Ns,e,n);d.layers=this.layers,this.add(d);const p=new jn(Is,Ns,e,n);p.layers=this.layers,this.add(p);const m=new jn(Is,Ns,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(v,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Jm extends En{constructor(e,n,r,a,u,f,d,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,u,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u0 extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Xo(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:_r});u.uniforms.tEquirect.value=n;const f=new _i(a,u),d=n.minFilter;return n.minFilter===jr&&(n.minFilter=gi),new l0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class c0 extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hc=new ne,f0=new ne,d0=new st;class Gr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Hc.subVectors(r,n).cross(f0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Hc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||d0.getNormalMatrix(e),a=this.coplanarPoint(Hc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Qf,_l=new ne;class eg{constructor(e=new Gr,n=new Gr,r=new Gr,a=new Gr,u=new Gr,f=new Gr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],g=a[5],v=a[6],x=a[7],y=a[8],T=a[9],A=a[10],S=a[11],_=a[12],N=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,S-y,C-_).normalize(),r[1].setComponents(p+u,x+m,S+y,C+_).normalize(),r[2].setComponents(p+f,x+g,S+T,C+N).normalize(),r[3].setComponents(p-f,x-g,S-T,C-N).normalize(),r[4].setComponents(p-d,x-v,S-A,C-L).normalize(),n===ki)r[5].setComponents(p+d,x+v,S+A,C+L).normalize();else if(n===Ll)r[5].setComponents(d,v,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vl extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class tg extends En{constructor(e,n,r,a,u,f,d,p,m,g=zs){if(g!==zs&&g!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===zs&&(r=Kr),r===void 0&&g===Ys&&(r=Xs),super(null,a,u,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:li,this.minFilter=p!==void 0?p:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Yo extends Qr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,g=p+1,v=e/d,x=n/p,y=[],T=[],A=[],S=[];for(let _=0;_<g;_++){const N=_*x-f;for(let L=0;L<m;L++){const C=L*v-u;T.push(C,-N,0),A.push(0,0,1),S.push(L/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<d;N++){const L=N+m*_,C=N+m*(_+1),X=N+1+m*(_+1),B=N+1+m*_;y.push(L,C,B),y.push(C,X,B)}this.setIndex(y),this.setAttribute("position",new $r(T,3)),this.setAttribute("normal",new $r(A,3)),this.setAttribute("uv",new $r(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class h0 extends Il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p0 extends Il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dl={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class m0{constructor(e,n,r){const a=this;let u=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){d++,u===!1&&a.onStart!==void 0&&a.onStart(g,f,d),u=!0},this.itemEnd=function(g){f++,a.onProgress!==void 0&&a.onProgress(g,f,d),f===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=m.length;v<x;v+=2){const y=m[v],T=m[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return T}return null}}}const g0=new m0;class Nl{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class _0 extends Error{constructor(e,n){super(e),this.response=n}}class v0 extends Nl{constructor(e){super(e)}load(e,n,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=Dl.get(e);if(u!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(u),this.manager.itemEnd(e)},0),u;if(Ii[e]!==void 0){Ii[e].push({onLoad:n,onProgress:r,onError:a});return}Ii[e]=[],Ii[e].push({onLoad:n,onProgress:r,onError:a});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,p=this.responseType;fetch(f).then(m=>{if(m.status===200||m.status===0){if(m.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||m.body===void 0||m.body.getReader===void 0)return m;const g=Ii[e],v=m.body.getReader(),x=m.headers.get("X-File-Size")||m.headers.get("Content-Length"),y=x?parseInt(x):0,T=y!==0;let A=0;const S=new ReadableStream({start(_){N();function N(){v.read().then(({done:L,value:C})=>{if(L)_.close();else{A+=C.byteLength;const X=new ProgressEvent("progress",{lengthComputable:T,loaded:A,total:y});for(let B=0,F=g.length;B<F;B++){const Y=g[B];Y.onProgress&&Y.onProgress(X)}_.enqueue(C),N()}},L=>{_.error(L)})}}});return new Response(S)}else throw new _0(`fetch for "${m.url}" responded with ${m.status}: ${m.statusText}`,m)}).then(m=>{switch(p){case"arraybuffer":return m.arrayBuffer();case"blob":return m.blob();case"document":return m.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return m.json();default:if(d===void 0)return m.text();{const v=/charset="?([^;"\s]*)"?/i.exec(d),x=v&&v[1]?v[1].toLowerCase():void 0,y=new TextDecoder(x);return m.arrayBuffer().then(T=>y.decode(T))}}}).then(m=>{Dl.add(e,m);const g=Ii[e];delete Ii[e];for(let v=0,x=g.length;v<x;v++){const y=g[v];y.onLoad&&y.onLoad(m)}}).catch(m=>{const g=Ii[e];if(g===void 0)throw this.manager.itemError(e),m;delete Ii[e];for(let v=0,x=g.length;v<x;v++){const y=g[v];y.onError&&y.onError(m)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class x0 extends Nl{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=Dl.get(e);if(f!==void 0)return u.manager.itemStart(e),setTimeout(function(){n&&n(f),u.manager.itemEnd(e)},0),f;const d=Bo("img");function p(){g(),Dl.add(e,this),n&&n(this),u.manager.itemEnd(e)}function m(v){g(),a&&a(v),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class tm extends Nl{constructor(e){super(e)}load(e,n,r,a){const u=new En,f=new x0(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},r,a),u}}class S0 extends Qm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class y0 extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function nm(o,e,n,r){const a=M0(r);switch(n){case Nm:return o*e;case Om:return o*e;case km:return o*e*2;case Bm:return o*e/a.components*a.byteLength;case $f:return o*e/a.components*a.byteLength;case zm:return o*e*2/a.components*a.byteLength;case Kf:return o*e*2/a.components*a.byteLength;case Fm:return o*e*3/a.components*a.byteLength;case ai:return o*e*4/a.components*a.byteLength;case Zf:return o*e*4/a.components*a.byteLength;case El:case Tl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(o,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(o,8)*Math.max(e,8)/2;case Sf:case yf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Df:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Of:case kf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Hm:case Bf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zf:case Hf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function M0(o){switch(o){case zi:case Dm:return{byteLength:1,components:1};case ko:case Um:case Ho:return{byteLength:2,components:1};case qf:case jf:return{byteLength:2,components:4};case Kr:case Yf:case Oi:return{byteLength:4,components:1};case Im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ng(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function E0(o){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,g);else{v.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<v.length;y++){const T=v[x],A=v[y];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,v[x]=A)}v.length=x+1;for(let y=0,T=v.length;y<T;y++){const A=v[y];o.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:T0,alphahash_pars_fragment:w0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:b0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:I0,beginnormal_vertex:N0,bsdfs:F0,iridescence_fragment:O0,bumpmap_pars_fragment:k0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:V0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:Y0,common:q0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:Z0,emissivemap_fragment:Q0,emissivemap_pars_fragment:J0,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:rx,envmap_pars_vertex:sx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:ux,fog_pars_fragment:cx,gradientmap_pars_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:Sx,lights_physical_fragment:yx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:wx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:Px,map_fragment:bx,map_pars_fragment:Lx,map_particle_fragment:Dx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:kx,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Vx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:Qx,premultiplied_alpha_fragment:Jx,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:oS,shadowmap_vertex:aS,shadowmask_pars_fragment:lS,skinbase_vertex:uS,skinning_pars_vertex:cS,skinning_vertex:fS,skinnormal_vertex:dS,specularmap_fragment:hS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:_S,transmission_pars_fragment:vS,uv_pars_fragment:xS,uv_pars_vertex:SS,uv_vertex:yS,worldpos_vertex:MS,background_vert:ES,background_frag:TS,backgroundCube_vert:wS,backgroundCube_frag:AS,cube_vert:RS,cube_frag:CS,depth_vert:PS,depth_frag:bS,distanceRGBA_vert:LS,distanceRGBA_frag:DS,equirect_vert:US,equirect_frag:IS,linedashed_vert:NS,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:kS,meshlambert_vert:BS,meshlambert_frag:zS,meshmatcap_vert:HS,meshmatcap_frag:VS,meshnormal_vert:GS,meshnormal_frag:WS,meshphong_vert:XS,meshphong_frag:YS,meshphysical_vert:qS,meshphysical_frag:jS,meshtoon_vert:$S,meshtoon_frag:KS,points_vert:ZS,points_frag:QS,shadow_vert:JS,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},Ce={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mi={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};mi.physical={uniforms:Mn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const xl={r:0,b:0,g:0},zr=new Hi,iy=new qt;function ry(o,e,n,r,a,u,f){const d=new Ct(0);let p=u===!0?0:1,m,g,v=null,x=0,y=null;function T(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function A(L){let C=!1;const X=T(L);X===null?_(d,p):X&&X.isColor&&(_(X,1),C=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const X=T(C);X&&(X.isCubeTexture||X.mapping===Ul)?(g===void 0&&(g=new _i(new Xo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:js(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),zr.copy(C.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(zr)),g.material.toneMapped=Mt.getTransfer(X.colorSpace)!==Rt,(v!==X||x!==X.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=X,x=X.version,y=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new _i(new Yo(2,2),new Vi({name:"BackgroundMaterial",uniforms:js(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(X.colorSpace)!==Rt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||x!==X.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=X,x=X.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,C){L.getRGB(xl,Zm(o)),r.buffers.color.setClear(xl.r,xl.g,xl.b,C,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),p=C,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:A,addToRenderList:S,dispose:N}}function sy(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(R,U,se,Z,fe){let he=!1;const oe=v(Z,se,U);u!==oe&&(u=oe,m(u.object)),he=y(R,Z,se,fe),he&&T(R,Z,se,fe),fe!==null&&e.update(fe,o.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(R,U,se,Z),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,U,se){const Z=se.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let he=fe[U.id];he===void 0&&(he={},fe[U.id]=he);let oe=he[Z];return oe===void 0&&(oe=x(p()),he[Z]=oe),oe}function x(R){const U=[],se=[],Z=[];for(let fe=0;fe<n;fe++)U[fe]=0,se[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:se,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,U,se,Z){const fe=u.attributes,he=U.attributes;let oe=0;const le=se.getAttributes();for(const z in le)if(le[z].location>=0){const re=fe[z];let I=he[z];if(I===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;oe++}return u.attributesNum!==oe||u.index!==Z}function T(R,U,se,Z){const fe={},he=U.attributes;let oe=0;const le=se.getAttributes();for(const z in le)if(le[z].location>=0){let re=he[z];re===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),fe[z]=I,oe++}u.attributes=fe,u.attributesNum=oe,u.index=Z}function A(){const R=u.newAttributes;for(let U=0,se=R.length;U<se;U++)R[U]=0}function S(R){_(R,0)}function _(R,U){const se=u.newAttributes,Z=u.enabledAttributes,fe=u.attributeDivisors;se[R]=1,Z[R]===0&&(o.enableVertexAttribArray(R),Z[R]=1),fe[R]!==U&&(o.vertexAttribDivisor(R,U),fe[R]=U)}function N(){const R=u.newAttributes,U=u.enabledAttributes;for(let se=0,Z=U.length;se<Z;se++)U[se]!==R[se]&&(o.disableVertexAttribArray(se),U[se]=0)}function L(R,U,se,Z,fe,he,oe){oe===!0?o.vertexAttribIPointer(R,U,se,fe,he):o.vertexAttribPointer(R,U,se,Z,fe,he)}function C(R,U,se,Z){A();const fe=Z.attributes,he=se.getAttributes(),oe=U.defaultAttributeValues;for(const le in he){const z=he[le];if(z.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,I=ae.itemSize,te=e.get(ae);if(te===void 0)continue;const Ue=te.buffer,K=te.type,ue=te.bytesPerElement,Me=K===o.INT||K===o.UNSIGNED_INT||ae.gpuType===Yf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ie=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)_(z.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)S(z.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<z.locationSize;Ze++)L(z.location+Ze,I/z.locationSize,K,re,Te*ue,(Ie+I/z.locationSize*Ze)*ue,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)_(z.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<z.locationSize;ve++)S(z.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let ve=0;ve<z.locationSize;ve++)L(z.location+ve,I/z.locationSize,K,re,I*ue,I/z.locationSize*ve*ue,Me)}}else if(oe!==void 0){const re=oe[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(z.location,re);break;case 3:o.vertexAttrib3fv(z.location,re);break;case 4:o.vertexAttrib4fv(z.location,re);break;default:o.vertexAttrib1fv(z.location,re)}}}}N()}function X(){Y();for(const R in r){const U=r[R];for(const se in U){const Z=U[se];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete U[se]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const U=r[R.id];for(const se in U){const Z=U[se];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete U[se]}delete r[R.id]}function F(R){for(const U in r){const se=r[U];if(se[R.id]===void 0)continue;const Z=se[R.id];for(const fe in Z)g(Z[fe].object),delete Z[fe];delete se[R.id]}}function Y(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:X,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function oy(o,e,n){let r;function a(m){r=m}function u(m,g){o.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,v){v!==0&&(o.drawArraysInstanced(r,m,g,v),n.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let y=0;for(let T=0;T<v;T++)y+=g[T];n.update(y,r,1)}function p(m,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)f(m[T],g[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let T=0;for(let A=0;A<v;A++)T+=g[A]*x[A];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function ay(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==ai&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Y=F===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==zi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Oi&&!Y)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:X,maxSamples:B}}function ly(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Gr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||a;return a=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,y){const T=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=o.get(v);if(!a||T===null||T.length===0||u&&!S)u?g(null):m();else{const N=u?0:r,L=N*4;let C=_.clippingState||null;p.value=C,C=g(T,x,L,y);for(let X=0;X!==L;++X)C[X]=n[X];_.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,T){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=p.value,T!==!0||S===null){const _=y+A*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,C=y;L!==A;++L,C+=4)f.copy(v[L]).applyMatrix4(N,d),f.normal.toArray(S,C),S[C+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function uy(o){let e=new WeakMap;function n(f,d){return d===df?f.mapping=Gs:d===hf&&(f.mapping=Ws),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===df||d===hf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new u0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ks=4,im=[.125,.215,.35,.446,.526,.582],Yr=20,Vc=new S0,rm=new Ct;let Gc=null,Wc=0,Xc=0,Yc=!1;const Wr=(1+Math.sqrt(5))/2,Fs=1/Wr,sm=[new ne(-Wr,Fs,0),new ne(Wr,Fs,0),new ne(-Fs,0,Wr),new ne(Fs,0,Wr),new ne(0,Wr,-Fs),new ne(0,Wr,Fs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Ho,format:ai,colorSpace:qs,depthBuffer:!1},a=am(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(u)),this._blurMaterial=fy(u,e,n)}return a}_compileMaterial(e){const n=new _i(this._lodPlanes[0],e);this._renderer.compile(n,Vc)}_sceneToCubeUV(e,n,r,a){const d=new jn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(rm),g.toneMapping=vr,g.autoClear=!1;const y=new jm({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),T=new _i(new Xo,y);let A=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,A=!0):(y.color.copy(rm),A=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):N===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const L=this._cubeSize;Sl(a,N*L,_>2?L:0,L,L),g.setRenderTarget(a),A&&g.render(T,d),g.render(e,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new _i(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Sl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Vc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=sm[(a-u-1)%sm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new _i(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Yr-1),A=u/T,S=isFinite(u)?1+Math.floor(g*A):Yr;S>Yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Yr}`);const _=[];let N=0;for(let F=0;F<Yr;++F){const Y=F/A,P=Math.exp(-Y*Y/2);_.push(P),F===0?N+=P:F<S&&(N+=2*P)}for(let F=0;F<_.length;F++)_[F]=_[F]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const C=this._sizeLods[a],X=3*C*(a>L-ks?a-L+ks:0),B=4*(this._cubeSize-C);Sl(n,X,B,3*C,2*C),p.setRenderTarget(n),p.render(v,Vc)}}function cy(o){const e=[],n=[],r=[];let a=o;const u=o-ks+1+im.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-ks?p=im[f-o+ks-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,T=6,A=3,S=2,_=1,N=new Float32Array(A*T*y),L=new Float32Array(S*T*y),C=new Float32Array(_*T*y);for(let B=0;B<y;B++){const F=B%3*2/3-1,Y=B>2?0:-1,P=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];N.set(P,A*T*B),L.set(x,S*T*B);const R=[B,B,B,B,B,B];C.set(R,_*T*B)}const X=new Qr;X.setAttribute("position",new vi(N,A)),X.setAttribute("uv",new vi(L,S)),X.setAttribute("faceIndex",new vi(C,_)),e.push(X),a>ks&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function am(o,e,n){const r=new Zr(o,e,n);return r.texture.mapping=Ul,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function fy(o,e,n){const r=new Float32Array(Yr),a=new ne(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function lm(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function um(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Jf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dy(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===df||p===hf,g=p===Gs||p===Ws;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new om(o)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&a(y)?(n===null&&(n=new om(o)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function hy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function py(o,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,T=v.attributes.position;let A=0;if(y!==null){const N=y.array;A=y.version;for(let L=0,C=N.length;L<C;L+=3){const X=N[L+0],B=N[L+1],F=N[L+2];x.push(X,B,B,F,F,X)}}else if(T!==void 0){const N=T.array;A=T.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const X=L+0,B=L+1,F=L+2;x.push(X,B,B,F,F,X)}}else return;const S=new(Gm(x)?Km:$m)(x,1);S.version=A;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function my(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,T){T!==0&&(o.drawElementsInstanced(r,y,u,x*f,T),n.update(y,r,T))}function g(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let S=0;for(let _=0;_<T;_++)S+=y[_];n.update(S,r,1)}function v(x,y,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/f,y[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,A,0,T);let _=0;for(let N=0;N<T;N++)_+=y[N]*A[N];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function gy(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function _y(o,e,n){const r=new WeakMap,a=new Wt;function u(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let X=d.attributes.position.count*C,B=1;X>e.maxTextureSize&&(B=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const F=new Float32Array(X*B*4*v),Y=new Xm(F,X,B,v);Y.type=Oi,Y.needsUpdate=!0;const P=C*4;for(let U=0;U<v;U++){const se=_[U],Z=N[U],fe=L[U],he=X*B*4*U;for(let oe=0;oe<se.count;oe++){const le=oe*P;T===!0&&(a.fromBufferAttribute(se,oe),F[he+le+0]=a.x,F[he+le+1]=a.y,F[he+le+2]=a.z,F[he+le+3]=0),A===!0&&(a.fromBufferAttribute(Z,oe),F[he+le+4]=a.x,F[he+le+5]=a.y,F[he+le+6]=a.z,F[he+le+7]=0),S===!0&&(a.fromBufferAttribute(fe,oe),F[he+le+8]=a.x,F[he+le+9]=a.y,F[he+le+10]=a.z,F[he+le+11]=fe.itemSize===4?a.w:1)}}x={count:v,texture:Y,size:new Pt(X,B)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function vy(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const ig=new En,cm=new tg(1,1),rg=new Xm,sg=new Yv,og=new Jm,fm=[],dm=[],hm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function Ks(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=fm[a];if(u===void 0&&(u=new Float32Array(a),fm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Qt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Jt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Fl(o,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function xy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function Sy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;o.uniform2fv(this.addr,e),Jt(n,e)}}function yy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;o.uniform3fv(this.addr,e),Jt(n,e)}}function My(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;o.uniform4fv(this.addr,e),Jt(n,e)}}function Ey(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;mm.set(r),o.uniformMatrix2fv(this.addr,!1,mm),Jt(n,r)}}function Ty(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;pm.set(r),o.uniformMatrix3fv(this.addr,!1,pm),Jt(n,r)}}function wy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;hm.set(r),o.uniformMatrix4fv(this.addr,!1,hm),Jt(n,r)}}function Ay(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function Ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;o.uniform2iv(this.addr,e),Jt(n,e)}}function Cy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;o.uniform3iv(this.addr,e),Jt(n,e)}}function Py(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;o.uniform4iv(this.addr,e),Jt(n,e)}}function by(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function Ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;o.uniform2uiv(this.addr,e),Jt(n,e)}}function Dy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;o.uniform3uiv(this.addr,e),Jt(n,e)}}function Uy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;o.uniform4uiv(this.addr,e),Jt(n,e)}}function Iy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(cm.compareFunction=Vm,u=cm):u=ig,n.setTexture2D(e||u,a)}function Ny(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||sg,a)}function Fy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||og,a)}function Oy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||rg,a)}function ky(o){switch(o){case 5126:return xy;case 35664:return Sy;case 35665:return yy;case 35666:return My;case 35674:return Ey;case 35675:return Ty;case 35676:return wy;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return by;case 36294:return Ly;case 36295:return Dy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}function By(o,e){o.uniform1fv(this.addr,e)}function zy(o,e){const n=Ks(e,this.size,2);o.uniform2fv(this.addr,n)}function Hy(o,e){const n=Ks(e,this.size,3);o.uniform3fv(this.addr,n)}function Vy(o,e){const n=Ks(e,this.size,4);o.uniform4fv(this.addr,n)}function Gy(o,e){const n=Ks(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Wy(o,e){const n=Ks(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Xy(o,e){const n=Ks(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Yy(o,e){o.uniform1iv(this.addr,e)}function qy(o,e){o.uniform2iv(this.addr,e)}function jy(o,e){o.uniform3iv(this.addr,e)}function $y(o,e){o.uniform4iv(this.addr,e)}function Ky(o,e){o.uniform1uiv(this.addr,e)}function Zy(o,e){o.uniform2uiv(this.addr,e)}function Qy(o,e){o.uniform3uiv(this.addr,e)}function Jy(o,e){o.uniform4uiv(this.addr,e)}function eM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Qt(r,u)||(o.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ig,u[f])}function tM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Qt(r,u)||(o.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||sg,u[f])}function nM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Qt(r,u)||(o.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||og,u[f])}function iM(o,e,n){const r=this.cache,a=e.length,u=Fl(n,a);Qt(r,u)||(o.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||rg,u[f])}function rM(o){switch(o){case 5126:return By;case 35664:return zy;case 35665:return Hy;case 35666:return Vy;case 35674:return Gy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return Yy;case 35667:case 35671:return qy;case 35668:case 35672:return jy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return Zy;case 36295:return Qy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=ky(n.type)}}class oM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rM(n.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function gm(o,e){o.seq.push(e),o.map[e.id]=e}function lM(o,e,n){const r=o.name,a=r.length;for(qc.lastIndex=0;;){const u=qc.exec(r),f=qc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){gm(n,m===void 0?new sM(d,o,e):new oM(d,o,e));break}else{let v=n.map[d];v===void 0&&(v=new aM(d),gm(n,v)),n=v}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);lM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function _m(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const uM=37297;let cM=0;function fM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const vm=new st;function dM(o){Mt._getMatrix(vm,Mt.workingColorSpace,o);const e=`mat3( ${vm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case bl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function xm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+fM(o.getShaderSource(e),f)}else return a}function hM(o,e){const n=dM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pM(o,e){let n;switch(e){case _v:n="Linear";break;case vv:n="Reinhard";break;case xv:n="Cineon";break;case Sv:n="ACESFilmic";break;case Mv:n="AgX";break;case Ev:n="Neutral";break;case yv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new ne;function mM(){Mt.getLuminanceCoefficients(yl);const o=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function _M(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function vM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Oo(o){return o!==""}function Sm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(o){return o.replace(xM,yM)}const SM=new Map;function yM(o,e){let n=ot[e];if(n===void 0){const r=SM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gf(n)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(o){return o.replace(MM,EM)}function EM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Em(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===K_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case bm:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function CM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function PM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=TM(n),m=wM(n),g=AM(n),v=RM(n),x=CM(n),y=gM(n),T=_M(u),A=a.createProgram();let S,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(S=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?ot.tonemapping_pars_fragment:"",n.toneMapping!==vr?pM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,hM("linearToOutputTexel",n.outputColorSpace),mM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=Gf(f),f=Sm(f,n),f=ym(f,n),d=Gf(d),d=Sm(d,n),d=ym(d,n),f=Mm(f),d=Mm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+S+f,C=N+_+d,X=_m(a,a.VERTEX_SHADER,L),B=_m(a,a.FRAGMENT_SHADER,C);a.attachShader(A,X),a.attachShader(A,B),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(U){if(o.debug.checkShaderErrors){const se=a.getProgramInfoLog(A).trim(),Z=a.getShaderInfoLog(X).trim(),fe=a.getShaderInfoLog(B).trim();let he=!0,oe=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,A,X,B);else{const le=xm(a,X,"vertex"),z=xm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+se+`
`+le+`
`+z)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Z===""||fe==="")&&(oe=!1);oe&&(U.diagnostics={runnable:he,programLog:se,vertexShader:{log:Z,prefix:S},fragmentShader:{log:fe,prefix:_}})}a.deleteShader(X),a.deleteShader(B),Y=new Cl(a,A),P=vM(a,A)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,uM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=X,this.fragmentShader=B,this}let bM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new DM(e),n.set(e,r)),r}}class DM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function UM(o,e,n,r,a,u,f){const d=new Ym,p=new LM,m=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,R,U,se,Z){const fe=se.fog,he=Z.geometry,oe=P.isMeshStandardMaterial?se.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),z=le&&le.mapping===Ul?le.image.height:null,ae=T[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=re!==void 0?re.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Ue,K,ue,Me;if(ae){const _t=mi[ae];Ue=_t.vertexShader,K=_t.fragmentShader}else Ue=P.vertexShader,K=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Me=p.getFragmentShaderID(P);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ie=Z.isInstancedMesh===!0,Ze=Z.isBatchedMesh===!0,wt=!!P.map,ht=!!P.matcap,Lt=!!le,k=!!P.aoMap,gn=!!P.lightMap,ft=!!P.bumpMap,lt=!!P.normalMap,Ye=!!P.displacementMap,Tt=!!P.emissiveMap,We=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,$=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ce=P.sheen>0,Ve=P.transmission>0,we=E&&!!P.anisotropyMap,Ne=$&&!!P.clearcoatMap,at=$&&!!P.clearcoatNormalMap,ye=$&&!!P.clearcoatRoughnessMap,ke=ge&&!!P.iridescenceMap,je=ge&&!!P.iridescenceThicknessMap,Qe=ce&&!!P.sheenColorMap,Be=ce&&!!P.sheenRoughnessMap,ut=!!P.specularMap,nt=!!P.specularColorMap,Et=!!P.specularIntensityMap,G=Ve&&!!P.transmissionMap,Ae=Ve&&!!P.thicknessMap,ie=!!P.gradientMap,de=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Ut=vr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=o.toneMapping);const jt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:K,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&Z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Z.instanceColor!==null,instancingMorph:Ie&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qs,alphaToCoverage:!!P.alphaToCoverage,map:wt,matcap:ht,envMap:Lt,envMapMode:Lt&&le.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:gn,bumpMap:ft,normalMap:lt,displacementMap:x&&Ye,emissiveMap:Tt,normalMapObjectSpace:lt&&P.normalMapType===Cv,normalMapTangentSpace:lt&&P.normalMapType===Rv,metalnessMap:We,roughnessMap:b,anisotropy:E,anisotropyMap:we,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:je,sheen:ce,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Et,transmission:Ve,transmissionMap:G,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Bs&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:wt&&A(P.map.channel),aoMapUv:k&&A(P.aoMap.channel),lightMapUv:gn&&A(P.lightMap.channel),bumpMapUv:ft&&A(P.bumpMap.channel),normalMapUv:lt&&A(P.normalMap.channel),displacementMapUv:Ye&&A(P.displacementMap.channel),emissiveMapUv:Tt&&A(P.emissiveMap.channel),metalnessMapUv:We&&A(P.metalnessMap.channel),roughnessMapUv:b&&A(P.roughnessMap.channel),anisotropyMapUv:we&&A(P.anisotropyMap.channel),clearcoatMapUv:Ne&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:je&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(P.sheenRoughnessMap.channel),specularMapUv:ut&&A(P.specularMap.channel),specularColorMapUv:nt&&A(P.specularColorMap.channel),specularIntensityMapUv:Et&&A(P.specularIntensityMap.channel),transmissionMapUv:G&&A(P.transmissionMap.channel),thicknessMapUv:Ae&&A(P.thicknessMap.channel),alphaMapUv:de&&A(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(lt||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!he.attributes.uv&&(wt||de),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:Z.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ut,decodeVideoTexture:wt&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Fi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function _(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const U in P.defines)R.push(U),R.push(P.defines[U]);return P.isRawShaderMaterial===!1&&(N(R,P),L(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function N(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function L(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=T[P.type];let U;if(R){const se=mi[R];U=s0.clone(se.uniforms)}else U=P.uniforms;return U}function X(P,R){let U;for(let se=0,Z=g.length;se<Z;se++){const fe=g[se];if(fe.cacheKey===R){U=fe,++U.usedTimes;break}}return U===void 0&&(U=new PM(o,R,P,u),g.push(U)),U}function B(P){if(--P.usedTimes===0){const R=g.indexOf(P);g[R]=g[g.length-1],g.pop(),P.destroy()}}function F(P){p.remove(P)}function Y(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:X,releaseProgram:B,releaseShaderCache:F,programs:g,dispose:Y}}function IM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function NM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Tm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function wm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,y,T,A,S){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:T,renderOrder:v.renderOrder,z:A,group:S},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=S),e++,_}function d(v,x,y,T,A,S){const _=f(v,x,y,T,A,S);y.transmission>0?r.push(_):y.transparent===!0?a.push(_):n.push(_)}function p(v,x,y,T,A,S){const _=f(v,x,y,T,A,S);y.transmission>0?r.unshift(_):y.transparent===!0?a.unshift(_):n.unshift(_)}function m(v,x){n.length>1&&n.sort(v||NM),r.length>1&&r.sort(x||Tm),a.length>1&&a.sort(x||Tm)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:g,sort:m}}function FM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new wm,o.set(r,[f])):a>=u.length?(f=new wm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function OM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new Ct};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=n,n}}}function kM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let BM=0;function zM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HM(o){const e=new OM,n=kM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new qt,f=new qt;function d(m){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,T=0,A=0,S=0,_=0,N=0,L=0,C=0,X=0,B=0,F=0;m.sort(zM);for(let P=0,R=m.length;P<R;P++){const U=m[P],se=U.color,Z=U.intensity,fe=U.distance,he=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)g+=se.r*Z,v+=se.g*Z,x+=se.b*Z;else if(U.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(U.sh.coefficients[oe],Z);F++}else if(U.isDirectionalLight){const oe=e.get(U);if(oe.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const le=U.shadow,z=n.get(U);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=U.shadow.matrix,N++}r.directional[y]=oe,y++}else if(U.isSpotLight){const oe=e.get(U);oe.position.setFromMatrixPosition(U.matrixWorld),oe.color.copy(se).multiplyScalar(Z),oe.distance=fe,oe.coneCos=Math.cos(U.angle),oe.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),oe.decay=U.decay,r.spot[A]=oe;const le=U.shadow;if(U.map&&(r.spotLightMap[X]=U.map,X++,le.updateMatrices(U),U.castShadow&&B++),r.spotLightMatrix[A]=le.matrix,U.castShadow){const z=n.get(U);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.spotShadow[A]=z,r.spotShadowMap[A]=he,C++}A++}else if(U.isRectAreaLight){const oe=e.get(U);oe.color.copy(se).multiplyScalar(Z),oe.halfWidth.set(U.width*.5,0,0),oe.halfHeight.set(0,U.height*.5,0),r.rectArea[S]=oe,S++}else if(U.isPointLight){const oe=e.get(U);if(oe.color.copy(U.color).multiplyScalar(U.intensity),oe.distance=U.distance,oe.decay=U.decay,U.castShadow){const le=U.shadow,z=n.get(U);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=U.shadow.matrix,L++}r.point[T]=oe,T++}else if(U.isHemisphereLight){const oe=e.get(U);oe.skyColor.copy(U.color).multiplyScalar(Z),oe.groundColor.copy(U.groundColor).multiplyScalar(Z),r.hemi[_]=oe,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==y||Y.pointLength!==T||Y.spotLength!==A||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==N||Y.numPointShadows!==L||Y.numSpotShadows!==C||Y.numSpotMaps!==X||Y.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+X-B,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,Y.directionalLength=y,Y.pointLength=T,Y.spotLength=A,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=N,Y.numPointShadows=L,Y.numSpotShadows=C,Y.numSpotMaps=X,Y.numLightProbes=F,r.version=BM++)}function p(m,g){let v=0,x=0,y=0,T=0,A=0;const S=g.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const L=m[_];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),v++}else if(L.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:d,setupView:p,state:r}}function Am(o){const e=new HM(o),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function VM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Am(o),e.set(a,[d])):u>=f.length?(d=new Am(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(o,e,n){let r=new eg;const a=new Pt,u=new Pt,f=new Wt,d=new h0({depthPacking:Av}),p=new p0,m={},g=n.maxTextureSize,v={[xr]:Dn,[Dn]:xr,[Fi]:Fi},x=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new Qr;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _i(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let _=this.type;this.render=function(B,F,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),se=o.state;se.setBlending(_r),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=_!==Ni&&this.type===Ni,fe=_===Ni&&this.type!==Ni;for(let he=0,oe=B.length;he<oe;he++){const le=B[he],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),u.copy(z.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(u.x=Math.floor(g/ae.x),a.x=u.x*ae.x,z.mapSize.x=u.x),a.y>g&&(u.y=Math.floor(g/ae.y),a.y=u.y*ae.y,z.mapSize.y=u.y)),z.map===null||Z===!0||fe===!0){const I=this.type!==Ni?{minFilter:li,magFilter:li}:{};z.map!==null&&z.map.dispose(),z.map=new Zr(a.x,a.y,I),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const re=z.getViewportCount();for(let I=0;I<re;I++){const te=z.getViewport(I);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),se.viewport(f),z.updateMatrices(le,I),r=z.getFrustum(),C(F,Y,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===Ni&&N(z,Y),z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(P,R,U)};function N(B,F){const Y=e.update(A);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Zr(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(F,null,Y,x,A,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(F,null,Y,y,A,null)}function L(B,F,Y,P){let R=null;const U=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(U!==void 0)R=U;else if(R=Y.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const se=R.uuid,Z=F.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let he=fe[Z];he===void 0&&(he=R.clone(),fe[Z]=he,F.addEventListener("dispose",X)),R=he}if(R.visible=F.visible,R.wireframe=F.wireframe,P===Ni?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=o.properties.get(R);se.light=Y}return R}function C(B,F,Y,P,R){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Ni)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const Z=e.update(B),fe=B.material;if(Array.isArray(fe)){const he=Z.groups;for(let oe=0,le=he.length;oe<le;oe++){const z=he[oe],ae=fe[z.materialIndex];if(ae&&ae.visible){const re=L(B,ae,P,R);B.onBeforeShadow(o,B,F,Y,Z,re,z),o.renderBufferDirect(Y,null,Z,re,B,z),B.onAfterShadow(o,B,F,Y,Z,re,z)}}}else if(fe.visible){const he=L(B,fe,P,R);B.onBeforeShadow(o,B,F,Y,Z,he,null),o.renderBufferDirect(Y,null,Z,he,B,null),B.onAfterShadow(o,B,F,Y,Z,he,null)}}const se=B.children;for(let Z=0,fe=se.length;Z<fe;Z++)C(se[Z],F,Y,P,R)}function X(B){B.target.removeEventListener("dispose",X);for(const Y in m){const P=m[Y],R=B.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const YM={[sf]:of,[af]:cf,[lf]:ff,[Vs]:uf,[of]:sf,[cf]:af,[ff]:lf,[uf]:Vs};function qM(o,e){function n(){let G=!1;const Ae=new Wt;let ie=null;const de=new Wt(0,0,0,0);return{setMask:function(be){ie!==be&&!G&&(o.colorMask(be,be,be,be),ie=be)},setLocked:function(be){G=be},setClear:function(be,Pe,it,Ut,jt){jt===!0&&(be*=Ut,Pe*=Ut,it*=Ut),Ae.set(be,Pe,it,Ut),de.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Ut),de.copy(Ae))},reset:function(){G=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let G=!1,Ae=!1,ie=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Ut=be;be=null,this.setClear(Ut)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!G&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=YM[Pe]),de!==Pe){switch(Pe){case sf:o.depthFunc(o.NEVER);break;case of:o.depthFunc(o.ALWAYS);break;case af:o.depthFunc(o.LESS);break;case Vs:o.depthFunc(o.LEQUAL);break;case lf:o.depthFunc(o.EQUAL);break;case uf:o.depthFunc(o.GEQUAL);break;case cf:o.depthFunc(o.GREATER);break;case ff:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){G=!1,ie=null,de=null,be=null,Ae=!1}}}function a(){let G=!1,Ae=null,ie=null,de=null,be=null,Pe=null,it=null,Ut=null,jt=null;return{setTest:function(_t){G||(_t?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(_t){Ae!==_t&&!G&&(o.stencilMask(_t),Ae=_t)},setFunc:function(_t,Tn,_n){(ie!==_t||de!==Tn||be!==_n)&&(o.stencilFunc(_t,Tn,_n),ie=_t,de=Tn,be=_n)},setOp:function(_t,Tn,_n){(Pe!==_t||it!==Tn||Ut!==_n)&&(o.stencilOp(_t,Tn,_n),Pe=_t,it=Tn,Ut=_n)},setLocked:function(_t){G=_t},setClear:function(_t){jt!==_t&&(o.clearStencil(_t),jt=_t)},reset:function(){G=!1,Ae=null,ie=null,de=null,be=null,Pe=null,it=null,Ut=null,jt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,y=[],T=null,A=!1,S=null,_=null,N=null,L=null,C=null,X=null,B=null,F=new Ct(0,0,0),Y=0,P=!1,R=null,U=null,se=null,Z=null,fe=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),oe=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),oe=le>=2);let ae=null,re={};const I=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),Ue=new Wt().fromArray(I),K=new Wt().fromArray(te);function ue(G,Ae,ie,de){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(G,Pe),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const Me={};Me[o.TEXTURE_2D]=ue(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=ue(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=ue(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=ue(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(Vs),ft(!1),lt(Lp),ve(o.CULL_FACE),k(_r);function ve(G){g[G]!==!0&&(o.enable(G),g[G]=!0)}function Te(G){g[G]!==!1&&(o.disable(G),g[G]=!1)}function Ie(G,Ae){return v[G]!==Ae?(o.bindFramebuffer(G,Ae),v[G]=Ae,G===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ae),G===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(G,Ae){let ie=y,de=!1;if(G){ie=x.get(Ae),ie===void 0&&(ie=[],x.set(Ae,ie));const be=G.textures;if(ie.length!==be.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=be.length,de=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,de=!0);de&&o.drawBuffers(ie)}function wt(G){return T!==G?(o.useProgram(G),T=G,!0):!1}const ht={[Xr]:o.FUNC_ADD,[Q_]:o.FUNC_SUBTRACT,[J_]:o.FUNC_REVERSE_SUBTRACT};ht[ev]=o.MIN,ht[tv]=o.MAX;const Lt={[nv]:o.ZERO,[iv]:o.ONE,[rv]:o.SRC_COLOR,[nf]:o.SRC_ALPHA,[cv]:o.SRC_ALPHA_SATURATE,[lv]:o.DST_COLOR,[ov]:o.DST_ALPHA,[sv]:o.ONE_MINUS_SRC_COLOR,[rf]:o.ONE_MINUS_SRC_ALPHA,[uv]:o.ONE_MINUS_DST_COLOR,[av]:o.ONE_MINUS_DST_ALPHA,[fv]:o.CONSTANT_COLOR,[dv]:o.ONE_MINUS_CONSTANT_COLOR,[hv]:o.CONSTANT_ALPHA,[pv]:o.ONE_MINUS_CONSTANT_ALPHA};function k(G,Ae,ie,de,be,Pe,it,Ut,jt,_t){if(G===_r){A===!0&&(Te(o.BLEND),A=!1);return}if(A===!1&&(ve(o.BLEND),A=!0),G!==Z_){if(G!==S||_t!==P){if((_!==Xr||C!==Xr)&&(o.blendEquation(o.FUNC_ADD),_=Xr,C=Xr),_t)switch(G){case Bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dp:o.blendFunc(o.ONE,o.ONE);break;case Up:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ip:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Dp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Up:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ip:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,L=null,X=null,B=null,F.set(0,0,0),Y=0,S=G,P=_t}return}be=be||Ae,Pe=Pe||ie,it=it||de,(Ae!==_||be!==C)&&(o.blendEquationSeparate(ht[Ae],ht[be]),_=Ae,C=be),(ie!==N||de!==L||Pe!==X||it!==B)&&(o.blendFuncSeparate(Lt[ie],Lt[de],Lt[Pe],Lt[it]),N=ie,L=de,X=Pe,B=it),(Ut.equals(F)===!1||jt!==Y)&&(o.blendColor(Ut.r,Ut.g,Ut.b,jt),F.copy(Ut),Y=jt),S=G,P=!1}function gn(G,Ae){G.side===Fi?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=G.side===Dn;Ae&&(ie=!ie),ft(ie),G.blending===Bs&&G.transparent===!1?k(_r):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),u.setMask(G.colorWrite);const de=G.stencilWrite;d.setTest(de),de&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function lt(G){G!==j_?(ve(o.CULL_FACE),G!==U&&(G===Lp?o.cullFace(o.BACK):G===$_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),U=G}function Ye(G){G!==se&&(oe&&o.lineWidth(G),se=G)}function Tt(G,Ae,ie){G?(ve(o.POLYGON_OFFSET_FILL),(Z!==Ae||fe!==ie)&&(o.polygonOffset(Ae,ie),Z=Ae,fe=ie)):Te(o.POLYGON_OFFSET_FILL)}function We(G){G?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function b(G){G===void 0&&(G=o.TEXTURE0+he-1),ae!==G&&(o.activeTexture(G),ae=G)}function E(G,Ae,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==G||de.texture!==Ae)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(G,Ae||Me[G]),de.type=G,de.texture=Ae)}function $(){const G=re[ae];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(G){Ue.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Be(G){K.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function ut(G,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let de=ie.get(G);de===void 0&&(de=o.getUniformBlockIndex(Ae,G.name),ie.set(G,de))}function nt(G,Ae){const de=m.get(Ae).get(G);p.get(Ae)!==de&&(o.uniformBlockBinding(Ae,de,G.__bindingPointIndex),p.set(Ae,de))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ae=null,re={},v={},x=new WeakMap,y=[],T=null,A=!1,S=null,_=null,N=null,L=null,C=null,X=null,B=null,F=new Ct(0,0,0),Y=0,P=!1,R=null,U=null,se=null,Z=null,fe=null,Ue.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:wt,setBlending:k,setMaterial:gn,setFlipSided:ft,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:We,activeTexture:b,bindTexture:E,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:je,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Qe,viewport:Be,reset:Et}}function jM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return y?new OffscreenCanvas(b,E):Bo("canvas")}function A(b,E,$){let pe=1;const ge=We(b);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);v===void 0&&(v=T(ce,Ve));const we=E?T(ce,Ve):v;return we.width=ce,we.height=Ve,we.getContext("2d").drawImage(b,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ve+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function S(b){return b.generateMipmaps}function _(b){o.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(b,E,$,pe,ge=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=E;if(E===o.RED&&($===o.FLOAT&&(ce=o.R32F),$===o.HALF_FLOAT&&(ce=o.R16F),$===o.UNSIGNED_BYTE&&(ce=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.R8UI),$===o.UNSIGNED_SHORT&&(ce=o.R16UI),$===o.UNSIGNED_INT&&(ce=o.R32UI),$===o.BYTE&&(ce=o.R8I),$===o.SHORT&&(ce=o.R16I),$===o.INT&&(ce=o.R32I)),E===o.RG&&($===o.FLOAT&&(ce=o.RG32F),$===o.HALF_FLOAT&&(ce=o.RG16F),$===o.UNSIGNED_BYTE&&(ce=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.RG8UI),$===o.UNSIGNED_SHORT&&(ce=o.RG16UI),$===o.UNSIGNED_INT&&(ce=o.RG32UI),$===o.BYTE&&(ce=o.RG8I),$===o.SHORT&&(ce=o.RG16I),$===o.INT&&(ce=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),$===o.UNSIGNED_INT&&(ce=o.RGB32UI),$===o.BYTE&&(ce=o.RGB8I),$===o.SHORT&&(ce=o.RGB16I),$===o.INT&&(ce=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),$===o.UNSIGNED_INT&&(ce=o.RGBA32UI),$===o.BYTE&&(ce=o.RGBA8I),$===o.SHORT&&(ce=o.RGBA16I),$===o.INT&&(ce=o.RGBA32I)),E===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),E===o.RGBA){const Ve=ge?bl:Mt.getTransfer(pe);$===o.FLOAT&&(ce=o.RGBA32F),$===o.HALF_FLOAT&&(ce=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ce=Ve===Rt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(b,E){let $;return b?E===null||E===Kr||E===Xs?$=o.DEPTH24_STENCIL8:E===Oi?$=o.DEPTH32F_STENCIL8:E===ko&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kr||E===Xs?$=o.DEPTH_COMPONENT24:E===Oi?$=o.DEPTH_COMPONENT32F:E===ko&&($=o.DEPTH_COMPONENT16),$}function X(b,E){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==li&&b.minFilter!==gi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function B(b){const E=b.target;E.removeEventListener("dispose",B),Y(E),E.isVideoTexture&&g.delete(E)}function F(b){const E=b.target;E.removeEventListener("dispose",F),R(E)}function Y(b){const E=r.get(b);if(E.__webglInit===void 0)return;const $=b.source,pe=x.get($);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete($)}r.remove(b)}function P(b){const E=r.get(b);o.deleteTexture(E.__webglTexture);const $=b.source,pe=x.get($);delete pe[E.__cacheKey],f.memory.textures--}function R(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=b.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ce=r.get($[pe]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove($[pe])}r.remove(b)}let U=0;function se(){U=0}function Z(){const b=U;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),U+=1,b}function fe(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function he(b,E){const $=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,b,E);return}}n.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function oe(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function le(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,E);return}n.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function z(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){ue($,b,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const ae={[pf]:o.REPEAT,[qr]:o.CLAMP_TO_EDGE,[mf]:o.MIRRORED_REPEAT},re={[li]:o.NEAREST,[Tv]:o.NEAREST_MIPMAP_NEAREST,[el]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[xc]:o.LINEAR_MIPMAP_NEAREST,[jr]:o.LINEAR_MIPMAP_LINEAR},I={[Pv]:o.NEVER,[Nv]:o.ALWAYS,[bv]:o.LESS,[Vm]:o.LEQUAL,[Lv]:o.EQUAL,[Iv]:o.GEQUAL,[Dv]:o.GREATER,[Uv]:o.NOTEQUAL};function te(b,E){if(E.type===Oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===gi||E.magFilter===xc||E.magFilter===el||E.magFilter===jr||E.minFilter===gi||E.minFilter===xc||E.minFilter===el||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,ae[E.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,ae[E.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,ae[E.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,re[E.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==el&&E.minFilter!==jr||E.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(b,E){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",B));const pe=E.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ce=fe(E);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ge[ce].usedTimes++;const Ve=ge[b.__cacheKey];Ve!==void 0&&(ge[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(E)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return $}function K(b,E,$){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ue(b,E),ce=E.source;n.bindTexture(pe,b.__webglTexture,o.TEXTURE0+$);const Ve=r.get(ce);if(ce.version!==Ve.__version||ge===!0){n.activeTexture(o.TEXTURE0+$);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===gr?null:Mt.getPrimaries(E.colorSpace),at=E.colorSpace===gr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ye=A(E.image,!1,a.maxTextureSize);ye=Tt(E,ye);const ke=u.convert(E.format,E.colorSpace),je=u.convert(E.type);let Qe=L(E.internalFormat,ke,je,E.colorSpace,E.isVideoTexture);te(pe,E);let Be;const ut=E.mipmaps,nt=E.isVideoTexture!==!0,Et=Ve.__version===void 0||ge===!0,G=ce.dataReady,Ae=X(E,ye);if(E.isDepthTexture)Qe=C(E.format===Ys,E.type),Et&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Qe,ye.width,ye.height):n.texImage2D(o.TEXTURE_2D,0,Qe,ye.width,ye.height,0,ke,je,null));else if(E.isDataTexture)if(ut.length>0){nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ut[0].width,ut[0].height);for(let ie=0,de=ut.length;ie<de;ie++)Be=ut[ie],nt?G&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,ke,je,Be.data);E.generateMipmaps=!1}else nt?(Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ye.width,ye.height),G&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ye.width,ye.height,ke,je,ye.data)):n.texImage2D(o.TEXTURE_2D,0,Qe,ye.width,ye.height,0,ke,je,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Qe,ut[0].width,ut[0].height,ye.depth);for(let ie=0,de=ut.length;ie<de;ie++)if(Be=ut[ie],E.format!==ai)if(ke!==null)if(nt){if(G)if(E.layerUpdates.size>0){const be=nm(Be.width,Be.height,E.format,E.type);for(const Pe of E.layerUpdates){const it=Be.data.subarray(Pe*be/Be.data.BYTES_PER_ELEMENT,(Pe+1)*be/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,Be.width,Be.height,1,ke,it)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,ye.depth,ke,Be.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Qe,Be.width,Be.height,ye.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,ye.depth,ke,je,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ie,Qe,Be.width,Be.height,ye.depth,0,ke,je,Be.data)}else{nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ut[0].width,ut[0].height);for(let ie=0,de=ut.length;ie<de;ie++)Be=ut[ie],E.format!==ai?ke!==null?nt?G&&n.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,ke,je,Be.data)}else if(E.isDataArrayTexture)if(nt){if(Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Qe,ye.width,ye.height,ye.depth),G)if(E.layerUpdates.size>0){const ie=nm(ye.width,ye.height,E.format,E.type);for(const de of E.layerUpdates){const be=ye.data.subarray(de*ie/ye.data.BYTES_PER_ELEMENT,(de+1)*ie/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,ke,je,be)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ke,je,ye.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,ke,je,ye.data);else if(E.isData3DTexture)nt?(Et&&n.texStorage3D(o.TEXTURE_3D,Ae,Qe,ye.width,ye.height,ye.depth),G&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ke,je,ye.data)):n.texImage3D(o.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,ke,je,ye.data);else if(E.isFramebufferTexture){if(Et)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ye.width,ye.height);else{let ie=ye.width,de=ye.height;for(let be=0;be<Ae;be++)n.texImage2D(o.TEXTURE_2D,be,Qe,ie,de,0,ke,je,null),ie>>=1,de>>=1}}else if(ut.length>0){if(nt&&Et){const ie=We(ut[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}for(let ie=0,de=ut.length;ie<de;ie++)Be=ut[ie],nt?G&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke,je,Be):n.texImage2D(o.TEXTURE_2D,ie,Qe,ke,je,Be);E.generateMipmaps=!1}else if(nt){if(Et){const ie=We(ye);n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}G&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,je,ye)}else n.texImage2D(o.TEXTURE_2D,0,Qe,ke,je,ye);S(E)&&_(pe),Ve.__version=ce.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ue(b,E,$){if(E.image.length!==6)return;const pe=Ue(b,E),ge=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+$);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){n.activeTexture(o.TEXTURE0+$);const Ve=Mt.getPrimaries(Mt.workingColorSpace),we=E.colorSpace===gr?null:Mt.getPrimaries(E.colorSpace),Ne=E.colorSpace===gr||Ve===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!at&&!ye?ke[de]=A(E.image[de],!0,a.maxCubemapSize):ke[de]=ye?E.image[de].image:E.image[de],ke[de]=Tt(E,ke[de]);const je=ke[0],Qe=u.convert(E.format,E.colorSpace),Be=u.convert(E.type),ut=L(E.internalFormat,Qe,Be,E.colorSpace),nt=E.isVideoTexture!==!0,Et=ce.__version===void 0||pe===!0,G=ge.dataReady;let Ae=X(E,je);te(o.TEXTURE_CUBE_MAP,E);let ie;if(at){nt&&Et&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,je.width,je.height);for(let de=0;de<6;de++){ie=ke[de].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];E.format!==ai?Qe!==null?nt?G&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Be,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Qe,Be,Pe.data)}}}else{if(ie=E.mipmaps,nt&&Et){ie.length>0&&Ae++;const de=We(ke[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,de.width,de.height)}for(let de=0;de<6;de++)if(ye){nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Qe,Be,ke[de].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,ke[de].width,ke[de].height,0,Qe,Be,ke[de].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[de].image;nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Qe,Be,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,it.width,it.height,0,Qe,Be,it.data)}}else{nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,Be,ke[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Qe,Be,ke[de]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Qe,Be,Pe.image[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,Qe,Be,Pe.image[de])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),ce.__version=ge.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Me(b,E,$,pe,ge,ce){const Ve=u.convert($.format,$.colorSpace),we=u.convert($.type),Ne=L($.internalFormat,Ve,we,$.colorSpace),at=r.get(E),ye=r.get($);if(ye.__renderTarget=E,!at.__hasExternalTextures){const ke=Math.max(1,E.width>>ce),je=Math.max(1,E.height>>ce);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Ne,ke,je,E.depth,0,Ve,we,null):n.texImage2D(ge,ce,Ne,ke,je,0,Ve,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,ft(E)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,ye.__webglTexture,ce),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(b,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,b),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=C(E.stencilBuffer,ge),Ve=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ft(E);lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ce,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ce,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ce,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,b)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Ve=u.convert(ce.format,ce.colorSpace),we=u.convert(ce.type),Ne=L(ce.internalFormat,Ve,we,ce.colorSpace),at=ft(E);$&&lt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Ne,E.width,E.height):lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,Ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ge=pe.__webglTexture,ce=ft(E);if(E.depthTexture.format===zs)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Ys)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const E=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,b)}else if($){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(b,E,$){const pe=r.get(b);E!==void 0&&Me(pe.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ie(b)}function wt(b){const E=b.texture,$=r.get(b),pe=r.get(E);b.addEventListener("dispose",F);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,f.memory.textures++),ce){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)$.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else $.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)$.__webglFramebuffer[we]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let we=0,Ne=ge.length;we<Ne;we++){const at=r.get(ge[we]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),f.memory.textures++)}if(b.samples>0&&lt(b)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];$.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const at=u.convert(Ne.format,Ne.colorSpace),ye=u.convert(Ne.type),ke=L(Ne.internalFormat,at,ye,Ne.colorSpace,b.isXRRenderTarget===!0),je=ft(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,ke,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,$.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),te(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Me($.__webglFramebuffer[we][Ne],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Me($.__webglFramebuffer[we],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let we=0,Ne=ge.length;we<Ne;we++){const at=ge[we],ye=r.get(at);n.bindTexture(o.TEXTURE_2D,ye.__webglTexture),te(o.TEXTURE_2D,at),Me($.__webglFramebuffer,b,at,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(at)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),te(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Me($.__webglFramebuffer[Ne],b,E,o.COLOR_ATTACHMENT0,we,Ne);else Me($.__webglFramebuffer,b,E,o.COLOR_ATTACHMENT0,we,0);S(E)&&_(we),n.unbindTexture()}b.depthBuffer&&Ie(b)}function ht(b){const E=b.textures;for(let $=0,pe=E.length;$<pe;$++){const ge=E[$];if(S(ge)){const ce=N(b),Ve=r.get(ge).__webglTexture;n.bindTexture(ce,Ve),_(ce),n.unbindTexture()}}}const Lt=[],k=[];function gn(b){if(b.samples>0){if(lt(b)===!1){const E=b.textures,$=b.width,pe=b.height;let ge=o.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=r.get(b),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,at,0)}o.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,o.NEAREST),p===!0&&(Lt.length=0,k.length=0,Lt.push(o.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Lt.push(ce),k.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,at,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ft(b){return Math.min(a.maxSamples,b.samples)}function lt(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(b){const E=f.render.frame;g.get(b)!==E&&(g.set(b,E),b.update())}function Tt(b,E){const $=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==qs&&$!==gr&&(Mt.getTransfer($)===Rt?(pe!==ai||ge!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=lt}function $M(o,e){function n(r,a=gr){let u;const f=Mt.getTransfer(a);if(r===zi)return o.UNSIGNED_BYTE;if(r===qf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===jf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Im)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Dm)return o.BYTE;if(r===Um)return o.SHORT;if(r===ko)return o.UNSIGNED_SHORT;if(r===Yf)return o.INT;if(r===Kr)return o.UNSIGNED_INT;if(r===Oi)return o.FLOAT;if(r===Ho)return o.HALF_FLOAT;if(r===Nm)return o.ALPHA;if(r===Fm)return o.RGB;if(r===ai)return o.RGBA;if(r===Om)return o.LUMINANCE;if(r===km)return o.LUMINANCE_ALPHA;if(r===zs)return o.DEPTH_COMPONENT;if(r===Ys)return o.DEPTH_STENCIL;if(r===Bm)return o.RED;if(r===$f)return o.RED_INTEGER;if(r===zm)return o.RG;if(r===Kf)return o.RG_INTEGER;if(r===Zf)return o.RGBA_INTEGER;if(r===El||r===Tl||r===wl||r===Al)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===El)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===El)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gf||r===_f||r===vf||r===xf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===gf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===yf||r===Mf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sf||r===yf)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===If||r===Nf||r===Ff)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Af)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Df)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===If)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ff)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Of||r===kf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Rl)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Of)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hm||r===Bf||r===zf||r===Hf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Rl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Bf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const KM={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),_=this._getHandJoint(m,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new En,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Vi({vertexShader:ZM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new Yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends $s{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,y=null,T=null;const A=new JM,S=n.getContextAttributes();let _=null,N=null;const L=[],C=[],X=new Pt;let B=null;const F=new jn;F.viewport=new Wt;const Y=new jn;Y.viewport=new Wt;const P=[F,Y],R=new y0;let U=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=L[K];return ue===void 0&&(ue=new jc,L[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=L[K];return ue===void 0&&(ue=new jc,L[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=L[K];return ue===void 0&&(ue=new jc,L[K]=ue),ue.getHandSpace()};function Z(K){const ue=C.indexOf(K.inputSource);if(ue===-1)return;const Me=L[ue];Me!==void 0&&(Me.update(K.inputSource,K.frame,m||f),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let K=0;K<L.length;K++){const ue=C[K];ue!==null&&(C[K]=null,L[K].disconnect(ue))}U=null,se=null,A.reset(),e.setRenderTarget(_),y=null,x=null,v=null,a=null,N=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(X),a.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Zr(y.framebufferWidth,y.framebufferHeight,{format:ai,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Me=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=S.stencil?Ys:zs,Me=S.stencil?Xs:Kr);const Te={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Te),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Zr(x.textureWidth,x.textureHeight,{format:ai,type:zi,depthTexture:new tg(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(K){for(let ue=0;ue<K.removed.length;ue++){const Me=K.removed[ue],ve=C.indexOf(Me);ve>=0&&(C[ve]=null,L[ve].disconnect(Me))}for(let ue=0;ue<K.added.length;ue++){const Me=K.added[ue];let ve=C.indexOf(Me);if(ve===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=C.length){C.push(Me),ve=Ie;break}else if(C[Ie]===null){C[Ie]=Me,ve=Ie;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Me)}}const oe=new ne,le=new ne;function z(K,ue,Me){oe.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=oe.distanceTo(le),Te=ue.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),wt=Te[14]/(Te[10]+1),ht=(Te[9]+1)/Te[5],Lt=(Te[9]-1)/Te[5],k=(Te[8]-1)/Te[0],gn=(Ie[8]+1)/Ie[0],ft=Ze*k,lt=Ze*gn,Ye=ve/(-k+gn),Tt=Ye*-k;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Ze+Ye,b=wt+Ye,E=ft-Tt,$=lt+(ve-Tt),pe=ht*wt/b*We,ge=Lt*wt/b*We;K.projectionMatrix.makePerspective(E,$,pe,ge,We,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,Me=K.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(Me=A.depthFar)),R.near=Y.near=F.near=ue,R.far=Y.far=F.far=Me,(U!==R.near||se!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,se=R.far),F.layers.mask=K.layers.mask|2,Y.layers.mask=K.layers.mask|4,R.layers.mask=F.layers.mask|Y.layers.mask;const ve=K.parent,Te=R.cameras;ae(R,ve);for(let Ie=0;Ie<Te.length;Ie++)ae(Te[Ie],ve);Te.length===2?z(R,F,Y):R.projectionMatrix.copy(F.projectionMatrix),re(K,R,ve)};function re(K,ue,Me){Me===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let I=null;function te(K,ue){if(g=ue.getViewerPose(m||f),T=ue,g!==null){const Me=g.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ve=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ie=0;Ie<Me.length;Ie++){const Ze=Me[Ie];let wt=null;if(y!==null)wt=y.getViewport(Ze);else{const Lt=v.getViewSubImage(x,Ze);wt=Lt.viewport,Ie===0&&(e.setRenderTargetTextures(N,Lt.colorTexture,x.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(N))}let ht=P[Ie];ht===void 0&&(ht=new jn,ht.layers.enable(Ie),ht.viewport=new Wt,P[Ie]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(wt.x,wt.y,wt.width,wt.height),Ie===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(ht)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=v.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&A.init(e,Ie,a.renderState)}}for(let Me=0;Me<L.length;Me++){const ve=C[Me],Te=L[Me];ve!==null&&Te!==void 0&&Te.update(ve,ue,m||f)}I&&I(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Ue=new ng;Ue.setAnimationLoop(te),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const Hr=new Hi,tE=new qt;function nE(o,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Zm(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,N,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,C)):_.isMeshMatcapMaterial?(u(S,_),T(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),A(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,N,L):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Dn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Dn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,C=N.envMapRotation;L&&(S.envMap.value=L,Hr.copy(C),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),S.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(Hr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,N,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=L*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function iE(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const C=L.program;r.uniformBlockBinding(N,C)}function m(N,L){let C=a[N.id];C===void 0&&(T(N),C=g(N),a[N.id]=C,N.addEventListener("dispose",S));const X=L.program;r.updateUBOMapping(N,X);const B=e.render.frame;u[N.id]!==B&&(x(N),u[N.id]=B)}function g(N){const L=v();N.__bindingPointIndex=L;const C=o.createBuffer(),X=N.__size,B=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,X,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function v(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=a[N.id],C=N.uniforms,X=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let B=0,F=C.length;B<F;B++){const Y=Array.isArray(C[B])?C[B]:[C[B]];for(let P=0,R=Y.length;P<R;P++){const U=Y[P];if(y(U,B,P,X)===!0){const se=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value];let fe=0;for(let he=0;he<Z.length;he++){const oe=Z[he],le=A(oe);typeof oe=="number"||typeof oe=="boolean"?(U.__data[0]=oe,o.bufferSubData(o.UNIFORM_BUFFER,se+fe,U.__data)):oe.isMatrix3?(U.__data[0]=oe.elements[0],U.__data[1]=oe.elements[1],U.__data[2]=oe.elements[2],U.__data[3]=0,U.__data[4]=oe.elements[3],U.__data[5]=oe.elements[4],U.__data[6]=oe.elements[5],U.__data[7]=0,U.__data[8]=oe.elements[6],U.__data[9]=oe.elements[7],U.__data[10]=oe.elements[8],U.__data[11]=0):(oe.toArray(U.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,L,C,X){const B=N.value,F=L+"_"+C;if(X[F]===void 0)return typeof B=="number"||typeof B=="boolean"?X[F]=B:X[F]=B.clone(),!0;{const Y=X[F];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return X[F]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function T(N){const L=N.uniforms;let C=0;const X=16;for(let F=0,Y=L.length;F<Y;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let R=0,U=P.length;R<U;R++){const se=P[R],Z=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,he=Z.length;fe<he;fe++){const oe=Z[fe],le=A(oe),z=C%X,ae=z%le.boundary,re=z+ae;C+=ae,re!==0&&X-re<le.storage&&(C+=X-re),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=C,C+=le.storage}}}const B=C%X;return B>0&&(C+=X-B),N.__size=C,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function _(){for(const N in a)o.deleteBuffer(a[N]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}class rE{constructor(e={}){const{canvas:n=Ov(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const T=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=vr,this.toneMappingExposure=1;const C=this;let X=!1,B=0,F=0,Y=null,P=-1,R=null;const U=new Wt,se=new Wt;let Z=null;const fe=new Ct(0);let he=0,oe=n.width,le=n.height,z=1,ae=null,re=null;const I=new Wt(0,0,oe,le),te=new Wt(0,0,oe,le);let Ue=!1;const K=new eg;let ue=!1,Me=!1;const ve=new qt,Te=new qt,Ie=new ne,Ze=new Wt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Lt(){return Y===null?z:1}let k=r;function gn(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),k===null){const W="webgl2";if(k=gn(W,w),k===null)throw gn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ft,lt,Ye,Tt,We,b,E,$,pe,ge,ce,Ve,we,Ne,at,ye,ke,je,Qe,Be,ut,nt,Et,G;function Ae(){ft=new hy(k),ft.init(),nt=new $M(k,ft),lt=new ay(k,ft,e,nt),Ye=new qM(k,ft),lt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Tt=new gy(k),We=new IM,b=new jM(k,ft,Ye,We,lt,nt,Tt),E=new uy(C),$=new dy(C),pe=new E0(k),Et=new sy(k,pe),ge=new py(k,pe,Tt,Et),ce=new vy(k,ge,pe,Tt),Qe=new _y(k,lt,b),ye=new ly(We),Ve=new UM(C,E,$,ft,lt,Et,ye),we=new nE(C,We),Ne=new FM,at=new VM(ft),je=new ry(C,E,$,Ye,ce,y,p),ke=new XM(C,ce,lt),G=new iE(k,Tt,lt,Ye),Be=new oy(k,ft,Tt),ut=new my(k,ft,Tt),Tt.programs=Ve.programs,C.capabilities=lt,C.extensions=ft,C.properties=We,C.renderLists=Ne,C.shadowMap=ke,C.state=Ye,C.info=Tt}Ae();const ie=new eE(C,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(oe,le,!1))},this.getSize=function(w){return w.set(oe,le)},this.setSize=function(w,W,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,le=W,n.width=Math.floor(w*z),n.height=Math.floor(W*z),J===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(oe*z,le*z).floor()},this.setDrawingBufferSize=function(w,W,J){oe=w,le=W,z=J,n.width=Math.floor(w*J),n.height=Math.floor(W*J),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,W,J,ee){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,W,J,ee),Ye.viewport(U.copy(I).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,W,J,ee){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,W,J,ee),Ye.scissor(se.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){Ye.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(w=!0,W=!0,J=!0){let ee=0;if(w){let H=!1;if(Y!==null){const Se=Y.texture.format;H=Se===Zf||Se===Kf||Se===$f}if(H){const Se=Y.texture.type,Re=Se===zi||Se===Kr||Se===ko||Se===Xs||Se===qf||Se===jf,De=je.getClearColor(),Fe=je.getClearAlpha(),Je=De.r,et=De.g,Xe=De.b;Re?(T[0]=Je,T[1]=et,T[2]=Xe,T[3]=Fe,k.clearBufferuiv(k.COLOR,0,T)):(A[0]=Je,A[1]=et,A[2]=Xe,A[3]=Fe,k.clearBufferiv(k.COLOR,0,A))}else ee|=k.COLOR_BUFFER_BIT}W&&(ee|=k.DEPTH_BUFFER_BIT),J&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),je.dispose(),Ne.dispose(),at.dispose(),We.dispose(),E.dispose(),$.dispose(),ce.dispose(),Et.dispose(),G.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Jr),ie.removeEventListener("sessionend",Gi),xi.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const w=Tt.autoReset,W=ke.enabled,J=ke.autoUpdate,ee=ke.needsUpdate,H=ke.type;Ae(),Tt.autoReset=w,ke.enabled=W,ke.autoUpdate=J,ke.needsUpdate=ee,ke.type=H}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const W=w.target;W.removeEventListener("dispose",it),Ut(W)}function Ut(w){jt(w),We.remove(w)}function jt(w){const W=We.get(w).programs;W!==void 0&&(W.forEach(function(J){Ve.releaseProgram(J)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,J,ee,H,Se){W===null&&(W=wt);const Re=H.isMesh&&H.matrixWorld.determinant()<0,De=$o(w,W,J,ee,H);Ye.setMaterial(ee,Re);let Fe=J.index,Je=1;if(ee.wireframe===!0){if(Fe=ge.getWireframeAttribute(J),Fe===void 0)return;Je=2}const et=J.drawRange,Xe=J.attributes.position;let rt=et.start*Je,xt=(et.start+et.count)*Je;Se!==null&&(rt=Math.max(rt,Se.start*Je),xt=Math.min(xt,(Se.start+Se.count)*Je)),Fe!==null?(rt=Math.max(rt,0),xt=Math.min(xt,Fe.count)):Xe!=null&&(rt=Math.max(rt,0),xt=Math.min(xt,Xe.count));const St=xt-rt;if(St<0||St===1/0)return;Et.setup(H,ee,De,J,Fe);let Ft,gt=Be;if(Fe!==null&&(Ft=pe.get(Fe),gt=ut,gt.setIndex(Ft)),H.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*Lt()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(H.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Lt()),H.isLineSegments?gt.setMode(k.LINES):H.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else H.isPoints?gt.setMode(k.POINTS):H.isSprite&&gt.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)gt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,zt=H._multiDrawCounts,pt=H._multiDrawCount,sn=Fe?pe.get(Fe).bytesPerElement:1,$n=We.get(ee).currentProgram.getUniforms();for(let vn=0;vn<pt;vn++)$n.setValue(k,"_gl_DrawID",vn),gt.render(qe[vn]/sn,zt[vn])}else if(H.isInstancedMesh)gt.renderInstances(rt,St,H.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,zt=Math.min(J.instanceCount,qe);gt.renderInstances(rt,St,zt)}else gt.render(rt,St)};function _t(w,W,J){w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=Dn,w.needsUpdate=!0,es(w,W,J),w.side=xr,w.needsUpdate=!0,es(w,W,J),w.side=Fi):es(w,W,J)}this.compile=function(w,W,J=null){J===null&&(J=w),_=at.get(J),_.init(W),L.push(_),J.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),w!==J&&w.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),_.setupLights();const ee=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Se=H.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const De=Se[Re];_t(De,J,H),ee.add(De)}else _t(Se,J,H),ee.add(Se)}),L.pop(),_=null,ee},this.compileAsync=function(w,W,J=null){const ee=this.compile(w,W,J);return new Promise(H=>{function Se(){if(ee.forEach(function(Re){We.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){H(w);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tn=null;function _n(w){Tn&&Tn(w)}function Jr(){xi.stop()}function Gi(){xi.start()}const xi=new ng;xi.setAnimationLoop(_n),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(w){Tn=w,ie.setAnimationLoop(w),w===null?xi.stop():xi.start()},ie.addEventListener("sessionstart",Jr),ie.addEventListener("sessionend",Gi),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,W,Y),_=at.get(w,L.length),_.init(W),L.push(_),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Me),S=Ne.get(w,N.length),S.init(),N.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Si(Se,W,-1/0,C.sortObjects)}Si(w,W,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ht&&je.addToRenderList(S,w),this.info.render.frame++,ue===!0&&ye.beginShadows();const J=_.state.shadowsArray;ke.render(J,w,W),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,H=S.transmissive;if(_.setupLights(),W.isArrayCamera){const Se=W.cameras;if(H.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const Fe=Se[Re];yr(ee,H,w,Fe)}ht&&je.render(w);for(let Re=0,De=Se.length;Re<De;Re++){const Fe=Se[Re];Sr(S,w,Fe,Fe.viewport)}}else H.length>0&&yr(ee,H,w,W),ht&&je.render(w),Sr(S,w,W);Y!==null&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),w.isScene===!0&&w.onAfterRender(C,w,W),Et.resetDefaultState(),P=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],ue===!0&&ye.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Si(w,W,J,ee){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){ee&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ce.update(w),De=w.material;De.visible&&S.push(w,Re,De,J,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const Re=ce.update(w),De=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Fe=Re.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],rt=De[Xe.materialIndex];rt&&rt.visible&&S.push(w,Re,rt,J,Ze.z,Xe)}}else De.visible&&S.push(w,Re,De,J,Ze.z,null)}}const Se=w.children;for(let Re=0,De=Se.length;Re<De;Re++)Si(Se[Re],W,J,ee)}function Sr(w,W,J,ee){const H=w.opaque,Se=w.transmissive,Re=w.transparent;_.setupLightsView(J),ue===!0&&ye.setGlobalState(C.clippingPlanes,J),ee&&Ye.viewport(U.copy(ee)),H.length>0&&Wi(H,W,J),Se.length>0&&Wi(Se,W,J),Re.length>0&&Wi(Re,W,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function yr(w,W,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ee.id]===void 0&&(_.state.transmissionRenderTarget[ee.id]=new Zr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Ho:zi,minFilter:jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[ee.id],Re=ee.viewport||U;Se.setSize(Re.z,Re.w);const De=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(fe),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ht&&je.render(J);const Fe=C.toneMapping;C.toneMapping=vr;const Je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),_.setupLightsView(ee),ue===!0&&ye.setGlobalState(C.clippingPlanes,ee),Wi(w,J,ee),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,rt=W.length;Xe<rt;Xe++){const xt=W[Xe],St=xt.object,Ft=xt.geometry,gt=xt.material,qe=xt.group;if(gt.side===Fi&&St.layers.test(ee.layers)){const zt=gt.side;gt.side=Dn,gt.needsUpdate=!0,qo(St,J,ee,Ft,gt,qe),gt.side=zt,gt.needsUpdate=!0,et=!0}}et===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}C.setRenderTarget(De),C.setClearColor(fe,he),Je!==void 0&&(ee.viewport=Je),C.toneMapping=Fe}function Wi(w,W,J){const ee=W.isScene===!0?W.overrideMaterial:null;for(let H=0,Se=w.length;H<Se;H++){const Re=w[H],De=Re.object,Fe=Re.geometry,Je=ee===null?Re.material:ee,et=Re.group;De.layers.test(J.layers)&&qo(De,W,J,Fe,Je,et)}}function qo(w,W,J,ee,H,Se){w.onBeforeRender(C,W,J,ee,H,Se),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(C,W,J,ee,w,Se),H.transparent===!0&&H.side===Fi&&H.forceSinglePass===!1?(H.side=Dn,H.needsUpdate=!0,C.renderBufferDirect(J,W,ee,H,w,Se),H.side=xr,H.needsUpdate=!0,C.renderBufferDirect(J,W,ee,H,w,Se),H.side=Fi):C.renderBufferDirect(J,W,ee,H,w,Se),w.onAfterRender(C,W,J,ee,H,Se)}function es(w,W,J){W.isScene!==!0&&(W=wt);const ee=We.get(w),H=_.state.lights,Se=_.state.shadowsArray,Re=H.state.version,De=Ve.getParameters(w,H.state,Se,W,J),Fe=Ve.getProgramCacheKey(De);let Je=ee.programs;ee.environment=w.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(w.isMeshStandardMaterial?$:E).get(w.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",it),Je=new Map,ee.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Re)return ui(w,De),et}else De.uniforms=Ve.getUniforms(w),w.onBeforeCompile(De,C),et=Ve.acquireProgram(De,Fe),Je.set(Fe,et),ee.uniforms=De.uniforms;const Xe=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=ye.uniform),ui(w,De),ee.needsLights=Ol(w),ee.lightsStateVersion=Re,ee.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),ee.currentProgram=et,ee.uniformsList=null,et}function jo(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Cl.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function ui(w,W){const J=We.get(w);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function $o(w,W,J,ee,H){W.isScene!==!0&&(W=wt),b.resetTextureUnits();const Se=W.fog,Re=ee.isMeshStandardMaterial?W.environment:null,De=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:qs,Fe=(ee.isMeshStandardMaterial?$:E).get(ee.envMap||Re),Je=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,xt=!!J.morphAttributes.color;let St=vr;ee.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(St=C.toneMapping);const Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,gt=Ft!==void 0?Ft.length:0,qe=We.get(ee),zt=_.state.lights;if(ue===!0&&(Me===!0||w!==R)){const Vt=w===R&&ee.id===P;ye.setState(ee,w,Vt)}let pt=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==De||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isBatchedMesh&&qe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Fe||ee.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ye.numPlanes||qe.numIntersection!==ye.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==et||qe.morphTargets!==Xe||qe.morphNormals!==rt||qe.morphColors!==xt||qe.toneMapping!==St||qe.morphTargetsCount!==gt)&&(pt=!0):(pt=!0,qe.__version=ee.version);let sn=qe.currentProgram;pt===!0&&(sn=es(ee,W,H));let $n=!1,vn=!1,Mr=!1;const At=sn.getUniforms(),xn=qe.uniforms;if(Ye.useProgram(sn.program)&&($n=!0,vn=!0,Mr=!0),ee.id!==P&&(P=ee.id,vn=!0),$n||R!==w){Ye.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),Bv(ve),zv(ve),At.setValue(k,"projectionMatrix",ve)):At.setValue(k,"projectionMatrix",w.projectionMatrix),At.setValue(k,"viewMatrix",w.matrixWorldInverse);const un=At.map.cameraPosition;un!==void 0&&un.setValue(k,Ie.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&At.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,vn=!0,Mr=!0)}if(H.isSkinnedMesh){At.setOptional(k,H,"bindMatrix"),At.setOptional(k,H,"bindMatrixInverse");const Vt=H.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),At.setValue(k,"boneTexture",Vt.boneTexture,b))}H.isBatchedMesh&&(At.setOptional(k,H,"batchingTexture"),At.setValue(k,"batchingTexture",H._matricesTexture,b),At.setOptional(k,H,"batchingIdTexture"),At.setValue(k,"batchingIdTexture",H._indirectTexture,b),At.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&At.setValue(k,"batchingColorTexture",H._colorsTexture,b));const ln=J.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qe.update(H,J,sn),(vn||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,At.setValue(k,"receiveShadow",H.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(xn.envMap.value=Fe,xn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(xn.envMapIntensity.value=W.environmentIntensity),vn&&(At.setValue(k,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&Ko(xn,Mr),Se&&ee.fog===!0&&we.refreshFogUniforms(xn,Se),we.refreshMaterialUniforms(xn,ee,z,le,_.state.transmissionRenderTarget[w.id]),Cl.upload(k,jo(qe),xn,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Cl.upload(k,jo(qe),xn,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(k,"center",H.center),At.setValue(k,"modelViewMatrix",H.modelViewMatrix),At.setValue(k,"normalMatrix",H.normalMatrix),At.setValue(k,"modelMatrix",H.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Vt=ee.uniformsGroups;for(let un=0,Er=Vt.length;un<Er;un++){const dt=Vt[un];G.update(dt,sn),G.bind(dt,sn)}}return sn}function Ko(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Ol(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,W,J){We.get(w.texture).__webglTexture=W,We.get(w.depthTexture).__webglTexture=J;const ee=We.get(w);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const J=We.get(w);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,J=0){Y=w,B=W,F=J;let ee=!0,H=null,Se=!1,Re=!1;if(w){const Fe=We.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(k.FRAMEBUFFER,null),ee=!1;else if(Fe.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Fe.__hasExternalTextures)b.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);const et=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[W])?H=et[W][J]:H=et[W],Se=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?H=We.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?H=et[J]:H=et,U.copy(w.viewport),se.copy(w.scissor),Z=w.scissorTest}else U.copy(I).multiplyScalar(z).floor(),se.copy(te).multiplyScalar(z).floor(),Z=Ue;if(Ye.bindFramebuffer(k.FRAMEBUFFER,H)&&ee&&Ye.drawBuffers(w,H),Ye.viewport(U),Ye.scissor(se),Ye.setScissorTest(Z),Se){const Fe=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,J)}else if(Re){const Fe=We.get(w.texture),Je=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.__webglTexture,J||0,Je)}P=-1},this.readRenderTargetPixels=function(w,W,J,ee,H,Se,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Ye.bindFramebuffer(k.FRAMEBUFFER,De);try{const Fe=w.texture,Je=Fe.format,et=Fe.type;if(!lt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-ee&&J>=0&&J<=w.height-H&&k.readPixels(W,J,ee,H,nt.convert(Je),nt.convert(et),Se)}finally{const Fe=Y!==null?We.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,W,J,ee,H,Se,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Fe=w.texture,Je=Fe.format,et=Fe.type;if(!lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-ee&&J>=0&&J<=w.height-H){Ye.bindFramebuffer(k.FRAMEBUFFER,De);const Xe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Xe),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),k.readPixels(W,J,ee,H,nt.convert(Je),nt.convert(et),0);const rt=Y!==null?We.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,rt);const xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await kv(k,xt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Xe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.deleteBuffer(Xe),k.deleteSync(xt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,J=0){w.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const ee=Math.pow(2,-J),H=Math.floor(w.image.width*ee),Se=Math.floor(w.image.height*ee),Re=W!==null?W.x:0,De=W!==null?W.y:0;b.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Re,De,H,Se),Ye.unbindTexture()};const Zo=k.createFramebuffer(),Qo=k.createFramebuffer();this.copyTextureToTexture=function(w,W,J=null,ee=null,H=0,Se=null){w.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,w=arguments[1],W=arguments[2],Se=arguments[3]||0,J=null),Se===null&&(H!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=H,H=0):Se=0);let Re,De,Fe,Je,et,Xe,rt,xt,St;const Ft=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(J!==null)Re=J.max.x-J.min.x,De=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,Je=J.min.x,et=J.min.y,Xe=J.isBox3?J.min.z:0;else{const ln=Math.pow(2,-H);Re=Math.floor(Ft.width*ln),De=Math.floor(Ft.height*ln),w.isDataArrayTexture?Fe=Ft.depth:w.isData3DTexture?Fe=Math.floor(Ft.depth*ln):Fe=1,Je=0,et=0,Xe=0}ee!==null?(rt=ee.x,xt=ee.y,St=ee.z):(rt=0,xt=0,St=0);const gt=nt.convert(W.format),qe=nt.convert(W.type);let zt;W.isData3DTexture?(b.setTexture3D(W,0),zt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),zt=k.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const pt=k.getParameter(k.UNPACK_ROW_LENGTH),sn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),$n=k.getParameter(k.UNPACK_SKIP_PIXELS),vn=k.getParameter(k.UNPACK_SKIP_ROWS),Mr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe);const At=w.isDataArrayTexture||w.isData3DTexture,xn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const ln=We.get(w),Vt=We.get(W),un=We.get(ln.__renderTarget),Er=We.get(Vt.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,un.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let dt=0;dt<Fe;dt++)At&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(w).__webglTexture,H,Xe+dt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Se,St+dt)),k.blitFramebuffer(Je,et,Re,De,rt,xt,Re,De,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||We.has(w)){const ln=We.get(w),Vt=We.get(W);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,Zo),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qo);for(let un=0;un<Fe;un++)At?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ln.__webglTexture,H,Xe+un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ln.__webglTexture,H),xn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vt.__webglTexture,Se,St+un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vt.__webglTexture,Se),H!==0?k.blitFramebuffer(Je,et,Re,De,rt,xt,Re,De,k.COLOR_BUFFER_BIT,k.NEAREST):xn?k.copyTexSubImage3D(zt,Se,rt,xt,St+un,Je,et,Re,De):k.copyTexSubImage2D(zt,Se,rt,xt,Je,et,Re,De);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else xn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(zt,Se,rt,xt,St,Re,De,Fe,gt,qe,Ft.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(zt,Se,rt,xt,St,Re,De,Fe,gt,Ft.data):k.texSubImage3D(zt,Se,rt,xt,St,Re,De,Fe,gt,qe,Ft):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,rt,xt,Re,De,gt,qe,Ft.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,rt,xt,Ft.width,Ft.height,gt,Ft.data):k.texSubImage2D(k.TEXTURE_2D,Se,rt,xt,Re,De,gt,qe,Ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,pt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,sn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$n),k.pixelStorei(k.UNPACK_SKIP_ROWS,vn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Mr),Se===0&&W.generateMipmaps&&k.generateMipmap(zt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(w,W,J=null,ee=null,H=0){return w.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,w=arguments[2],W=arguments[3],H=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,J,ee,H)},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){B=0,F=0,Y=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}var Pl={exports:{}},sE=Pl.exports,Rm;function oE(){return Rm||(Rm=1,function(o,e){(function(n,r){o.exports=r()})(sE,function(){var n=function(){var r=0,a=document.createElement("div");function u(y){return a.appendChild(y.dom),y}function f(y){for(var T=0;T<a.children.length;T++)a.children[T].style.display=T===y?"block":"none";r=y}a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(y){y.preventDefault(),f(++r%a.children.length)},!1);var d=(performance||Date).now(),p=d,m=0,g=u(new n.Panel("FPS","#0ff","#002")),v=u(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var x=u(new n.Panel("MB","#f08","#201"));return f(0),{REVISION:16,dom:a,addPanel:u,showPanel:f,begin:function(){d=(performance||Date).now()},end:function(){m++;var y=(performance||Date).now();if(v.update(y-d,200),p+1e3<=y&&(g.update(1e3*m/(y-p),100),p=y,m=0,x)){var T=performance.memory;x.update(T.usedJSHeapSize/1048576,T.jsHeapSizeLimit/1048576)}return y},update:function(){d=this.end()},domElement:a,setMode:f}};return n.Panel=function(r,a,u){var f=1/0,d=0,p=Math.round,m=p(window.devicePixelRatio||1),g=80*m,v=48*m,x=3*m,y=2*m,T=3*m,A=15*m,S=74*m,_=30*m,N=document.createElement("canvas");N.width=g,N.height=v,N.style.cssText="width:80px;height:48px";var L=N.getContext("2d");return L.font="bold "+9*m+"px Helvetica,Arial,sans-serif",L.textBaseline="top",L.fillStyle=u,L.fillRect(0,0,g,v),L.fillStyle=a,L.fillText(r,x,y),L.fillRect(T,A,S,_),L.fillStyle=u,L.globalAlpha=.9,L.fillRect(T,A,S,_),{dom:N,update:function(C,X){f=Math.min(f,C),d=Math.max(d,C),L.fillStyle=u,L.globalAlpha=1,L.fillRect(0,0,g,A),L.fillStyle=a,L.fillText(p(C)+" "+r+" ("+p(f)+"-"+p(d)+")",x,y),L.drawImage(N,T+m,A,S-m,_,T,A,S-m,_),L.fillRect(T+S-m,A,m,_),L.fillStyle=u,L.globalAlpha=.9,L.fillRect(T+S-m,A,m,p((1-C/X)*_))}}},n})}(Pl)),Pl.exports}var aE=oE();const lE=k_(aE);var No,pi,$c,Kc,Zc,Ml,Vr,Fo,zo,Qc,Jc,ef,tf,Cm=new v0;zo=new lE;zo.showPanel(0);document.body.appendChild(zo.dom);function si(o){return typeof o>"u"}function uE(){const[o,e]=Zt.useState(5772),[n,r]=Zt.useState(85),[a,u]=Zt.useState(!1),[f,d]=Zt.useState(!1),[p,m]=Zt.useState(!1),[g,v]=Zt.useState(!1),[x,y]=Zt.useState(!0),[T,A]=Zt.useState(window.innerWidth),[S,_]=Zt.useState(window.innerHeight),N=Zt.useRef(o),L=Zt.useRef(n),C=Zt.useRef(a),X=Zt.useRef(f),B=Zt.useRef(p),F=Zt.useRef(g),Y=Zt.useRef(x);Zt.useEffect(()=>{const U=()=>{A(window.innerWidth),_(window.innerHeight)};return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)}),Zt.useEffect(()=>{si(No)&&(No=new rE({canvas:document.getElementById("canvas"),antialias:!1})),No.setClearColor(0),No.setSize(T,S),si(Zc)&&(Zc=new jn(10,T/S,.1,10)),si(Ml)&&(Ml=new c0);var U=2;function se(){--U,U==0&&P()}si($c)||si(Kc)?(Cm.load("glsl/fragment.glsl",function(Z){Kc=Z,se()}),Cm.load("glsl/vertex.glsl",function(Z){$c=Z,se()})):P()});function P(){si(Jc)&&(Jc=new Yo(2,2)),si(tf)&&(console.log("loading texture2"),tf=new tm().load("images/image.png")),si(ef)&&(console.log("loading texture1"),ef=new tm().load("images/clouds-gray.jpeg")),si(pi)&&(pi={theta:{value:0},disk_temperature:{value:o},view_angle:{value:n},texture1:{value:ef},textureft:{value:tf},uResolution:{value:new Pt(T,S)},enable_grav_lensing:{value:a},enable_relativistic_beaming:{value:f},enable_doppler_effect:{value:p},enable_gravitational_redshift:{value:g},enable_background:{value:x}}),si(Qc)&&(console.log("creating shader_material"),Qc=new Vi({uniforms:pi,vertexShader:$c,fragmentShader:Kc,transparent:!0})),si(Vr)&&(Vr=new _i(Jc,Qc),Vr.position.z=-1,Ml.add(Vr)),R()}function R(){zo.begin();var U=new Date;Fo=-U.getTime()/1e4%(2*Math.PI),(Math.abs(Fo-Math.PI/2)<.005||Math.abs(Fo-3*Math.PI/2)<.005)&&(Fo+=.01),Vr.material.uniforms.theta.value=Fo,Vr.material.uniforms.disk_temperature.value=o,Vr.material.uniforms.view_angle.value=n==90?89.999:n,pi.uResolution.value.x=T,pi.uResolution.value.y=S,pi.enable_grav_lensing.value=a,pi.enable_relativistic_beaming.value=f,pi.enable_doppler_effect.value=p,pi.enable_gravitational_redshift.value=g,pi.enable_background.value=x,No.render(Ml,Zc),zo.end(),N.current===o&&L.current===n&&C.current===a&&X.current===f&&B.current===p&&F.current===g&&Y.current===x&&requestAnimationFrame(R)}return bt.jsx(bt.Fragment,{children:bt.jsx("div",{children:bt.jsxs("div",{style:{position:"relative",alignItems:"center",backgroundColor:"black"},children:[bt.jsx("canvas",{id:"canvas",style:{marginLeft:"auto",marginRight:"auto",display:"block",width:T}}),bt.jsxs("div",{className:"overlay",children:[bt.jsxs("div",{className:"checkbox-buttons",children:[bt.jsxs("label",{children:[bt.jsx("input",{type:"checkbox",checked:a,onChange:U=>{u(U.target.checked),C.current=U.target.checked}}),"Gravitational Lensing"]}),bt.jsxs("label",{children:[bt.jsx("input",{type:"checkbox",checked:f,onChange:U=>{d(U.target.checked),X.current=U.target.checked}}),"Relativistic Beaming"]}),bt.jsxs("label",{children:[bt.jsx("input",{type:"checkbox",checked:p,onChange:U=>{m(U.target.checked),B.current=U.target.checked}}),"Doppler Effect"]}),bt.jsxs("label",{children:[bt.jsx("input",{type:"checkbox",checked:g,onChange:U=>{v(U.target.checked),F.current=U.target.checked}}),"Gravitational Redshift"]}),bt.jsxs("label",{children:[bt.jsx("input",{type:"checkbox",checked:x,onChange:U=>{y(U.target.checked),Y.current=U.target.checked}}),"Toggle Background"]})]}),bt.jsx("div",{className:"slider",children:bt.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[bt.jsx("input",{type:"range",min:"3500",max:"1e4",value:o,onChange:U=>{e(U.target.value),N.current=U.target.value}}),bt.jsxs("label",{style:{},children:["Temperature: ",o,"K"]})]})}),bt.jsx("div",{className:"slider",children:bt.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[bt.jsx("input",{type:"range",min:"0",max:"180",value:n,onChange:U=>{r(U.target.value),L.current=U.target.value}}),bt.jsxs("label",{style:{},children:["Viewing Angle: ",n,"°"]})]})})]})]})})})}q_.createRoot(document.getElementById("root")).render(bt.jsx(Zt.StrictMode,{children:bt.jsx(uE,{})}));