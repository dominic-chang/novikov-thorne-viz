(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function G_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xc={exports:{}},No={},Sc={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function W_(){if(Rp)return ct;Rp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function S(U,te,Ue){this.props=U,this.context=te,this.refs=R,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function I(U,te,Ue){this.props=U,this.context=te,this.refs=R,this.updater=Ue||y}var L=I.prototype=new _;L.constructor=I,T(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,Y=Object.prototype.hasOwnProperty,k={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function B(U,te,Ue){var K,ue={},Me=null,ve=null;if(te!=null)for(K in te.ref!==void 0&&(ve=te.ref),te.key!==void 0&&(Me=""+te.key),te)Y.call(te,K)&&!N.hasOwnProperty(K)&&(ue[K]=te[K]);var Te=arguments.length-2;if(Te===1)ue.children=Ue;else if(1<Te){for(var Ie=Array(Te),Ze=0;Ze<Te;Ze++)Ie[Ze]=arguments[Ze+2];ue.children=Ie}if(U&&U.defaultProps)for(K in Te=U.defaultProps,Te)ue[K]===void 0&&(ue[K]=Te[K]);return{$$typeof:o,type:U,key:Me,ref:ve,props:ue,_owner:k.current}}function P(U,te){return{$$typeof:o,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function H(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return te[Ue]})}var oe=/\/+/g;function J(U,te){return typeof U=="object"&&U!==null&&U.key!=null?H(""+U.key):te.toString(36)}function fe(U,te,Ue,K,ue){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case o:case e:ve=!0}}if(ve)return ve=U,ue=ue(ve),U=K===""?"."+J(ve,0):K,C(ue)?(Ue="",U!=null&&(Ue=U.replace(oe,"$&/")+"/"),fe(ue,te,Ue,"",function(Ze){return Ze})):ue!=null&&(w(ue)&&(ue=P(ue,Ue+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+U)),te.push(ue)),1;if(ve=0,K=K===""?".":K+":",C(U))for(var Te=0;Te<U.length;Te++){Me=U[Te];var Ie=K+J(Me,Te);ve+=fe(Me,te,Ue,Ie,ue)}else if(Ie=x(U),typeof Ie=="function")for(U=Ie.call(U),Te=0;!(Me=U.next()).done;)Me=Me.value,Ie=K+J(Me,Te++),ve+=fe(Me,te,Ue,Ie,ue);else if(Me==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(U,te,Ue){if(U==null)return U;var K=[],ue=0;return fe(U,K,"","",function(Me){return te.call(Ue,Me,ue++)}),K}function se(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},z={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:he,forEach:function(U,te,Ue){he(U,function(){te.apply(this,arguments)},Ue)},count:function(U){var te=0;return he(U,function(){te++}),te},toArray:function(U){return he(U,function(te){return te})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ct.Component=S,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=I,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ct.act=re,ct.cloneElement=function(U,te,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var K=T({},U.props),ue=U.key,Me=U.ref,ve=U._owner;if(te!=null){if(te.ref!==void 0&&(Me=te.ref,ve=k.current),te.key!==void 0&&(ue=""+te.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Ie in te)Y.call(te,Ie)&&!N.hasOwnProperty(Ie)&&(K[Ie]=te[Ie]===void 0&&Te!==void 0?Te[Ie]:te[Ie])}var Ie=arguments.length-2;if(Ie===1)K.children=Ue;else if(1<Ie){Te=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Te[Ze]=arguments[Ze+2];K.children=Te}return{$$typeof:o,type:U.type,key:ue,ref:Me,props:K,_owner:ve}},ct.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ct.createElement=B,ct.createFactory=function(U){var te=B.bind(null,U);return te.type=U,te},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:d,render:U}},ct.isValidElement=w,ct.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:se}},ct.memo=function(U,te){return{$$typeof:m,type:U,compare:te===void 0?null:te}},ct.startTransition=function(U){var te=z.transition;z.transition={};try{U()}finally{z.transition=te}},ct.unstable_act=re,ct.useCallback=function(U,te){return le.current.useCallback(U,te)},ct.useContext=function(U){return le.current.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ct.useEffect=function(U,te){return le.current.useEffect(U,te)},ct.useId=function(){return le.current.useId()},ct.useImperativeHandle=function(U,te,Ue){return le.current.useImperativeHandle(U,te,Ue)},ct.useInsertionEffect=function(U,te){return le.current.useInsertionEffect(U,te)},ct.useLayoutEffect=function(U,te){return le.current.useLayoutEffect(U,te)},ct.useMemo=function(U,te){return le.current.useMemo(U,te)},ct.useReducer=function(U,te,Ue){return le.current.useReducer(U,te,Ue)},ct.useRef=function(U){return le.current.useRef(U)},ct.useState=function(U){return le.current.useState(U)},ct.useSyncExternalStore=function(U,te,Ue){return le.current.useSyncExternalStore(U,te,Ue)},ct.useTransition=function(){return le.current.useTransition()},ct.version="18.3.1",ct}var Cp;function $f(){return Cp||(Cp=1,Sc.exports=W_()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function X_(){if(Pp)return No;Pp=1;var o=$f(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var g,v={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(g in p)r.call(p,g)&&!u.hasOwnProperty(g)&&(v[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)v[g]===void 0&&(v[g]=p[g]);return{$$typeof:e,type:d,key:x,ref:y,props:v,_owner:a.current}}return No.Fragment=n,No.jsx=f,No.jsxs=f,No}var bp;function Y_(){return bp||(bp=1,xc.exports=X_()),xc.exports}var Bt=Y_(),an=$f(),rl={},yc={exports:{}},bn={},Mc={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function q_(){return Lp||(Lp=1,function(o){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var U=re-1>>>1,te=z[U];if(0<a(te,ae))z[U]=ae,z[re]=te,re=U;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var U=0,te=z.length,Ue=te>>>1;U<Ue;){var K=2*(U+1)-1,ue=z[K],Me=K+1,ve=z[Me];if(0>a(ue,re))Me<te&&0>a(ve,ue)?(z[U]=ve,z[Me]=re,U=Me):(z[U]=ue,z[K]=re,U=K);else if(Me<te&&0>a(ve,re))z[U]=ve,z[Me]=re,U=Me;else break e}}return ae}function a(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,x=3,y=!1,T=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=z)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(z){if(R=!1,L(z),!T)if(n(p)!==null)T=!0,se(Y);else{var ae=n(m);ae!==null&&le(C,ae.startTime-z)}}function Y(z,ae){T=!1,R&&(R=!1,_(B),B=-1),y=!0;var re=x;try{for(L(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||z&&!H());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var te=U(v.expirationTime<=ae);ae=o.unstable_now(),typeof te=="function"?v.callback=te:v===n(p)&&r(p),L(ae)}else r(p);v=n(p)}if(v!==null)var Ue=!0;else{var K=n(m);K!==null&&le(C,K.startTime-ae),Ue=!1}return Ue}finally{v=null,x=re,y=!1}}var k=!1,N=null,B=-1,P=5,w=-1;function H(){return!(o.unstable_now()-w<P)}function oe(){if(N!==null){var z=o.unstable_now();w=z;var ae=!0;try{ae=N(!0,z)}finally{ae?J():(k=!1,N=null)}}else k=!1}var J;if(typeof I=="function")J=function(){I(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=oe,J=function(){he.postMessage(null)}}else J=function(){S(oe,0)};function se(z){N=z,k||(k=!0,J())}function le(z,ae){B=S(function(){z(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){T||y||(T=!0,se(Y))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return z()}finally{x=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=x;x=z;try{return ae()}finally{x=re}},o.unstable_scheduleCallback=function(z,ae,re){var U=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,z={id:g++,callback:ae,priorityLevel:z,startTime:re,expirationTime:te,sortIndex:-1},re>U?(z.sortIndex=re,e(m,z),n(p)===null&&z===n(m)&&(R?(_(B),B=-1):R=!0,le(C,re-U))):(z.sortIndex=te,e(p,z),T||y||(T=!0,se(Y))),z},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(z){var ae=x;return function(){var re=x;x=ae;try{return z.apply(this,arguments)}finally{x=re}}}}(Ec)),Ec}var Dp;function j_(){return Dp||(Dp=1,Mc.exports=q_()),Mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function $_(){if(Up)return bn;Up=1;var o=$f(),e=j_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(t){return p.call(v,t)?!0:p.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);S[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);S[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);S[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),H=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function te(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ue=!1;function K(t,i){if(!t||Ue)return"";Ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var l=Z}Reflect.construct(t,[],i)}else{try{i.call()}catch(Z){l=Z}t.call(i.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var c=Z.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=D);break}}}finally{Ue=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?te(t):""}function ue(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case k:return"Portal";case P:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case w:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function gn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function lt(t,i){ft(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,s):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Tt(t,i,s){(i!=="number"||bt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var We=Array.isArray;function b(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(We(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function at(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){ke.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function je(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Qe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=je(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,de=null;function be(t){if(t=So(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=xa(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?de?de.push(t):de=[t]:ie=t}function it(){if(ie){var t=ie,i=de;if(de=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function jt(){}var _t=!1;function Tn(t,i,s){if(_t)return t(i,s);_t=!0;try{return Dt(t,i,s)}finally{_t=!1,(ie!==null||de!==null)&&(jt(),it())}}function _n(t,i){var s=t.stateNode;if(s===null)return null;var l=xa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var is=!1;if(d)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){is=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{is=!1}function yi(t,i,s,l,c,h,M,D,F){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(s,Z)}catch(_e){this.onError(_e)}}var Mi=!1,Tr=null,wr=!1,Yi=null,Qo={onError:function(t){Mi=!0,Tr=t}};function rs(t,i,s,l,c,h,M,D,F){Mi=!1,Tr=null,yi.apply(Qo,arguments)}function Jo(t,i,s,l,c,h,M,D,F){if(rs.apply(this,arguments),Mi){if(Mi){var Z=Tr;Mi=!1,Tr=null}else throw Error(n(198));wr||(wr=!0,Yi=Z)}}function fi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(fi(t)!==t)throw Error(n(188))}function Vl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return ta(c),t;if(h===l)return ta(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===s){M=!0,s=c,l=h;break}if(D===l){M=!0,l=c,s=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===s){M=!0,s=h,l=c;break}if(D===l){M=!0,l=h,s=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function na(t){return t=Vl(t),t!==null?ia(t):null}function ia(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ia(t);if(i!==null)return i;t=t.sibling}return null}var A=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,Q=e.unstable_shouldYield,ee=e.unstable_requestPaint,V=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,rt=null;function xt(t){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Xe,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:qe,Nt=Math.log,gt=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Nt(t)/gt|0)|0}var zt=64,pt=4194304;function rn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var D=M&~c;D!==0?l=rn(D):(h&=M,h!==0&&(l=rn(h)))}else M=s&~c,M!==0?l=rn(M):h!==0&&(l=rn(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-St(i),c=1<<s,l|=t[s],i&=~c;return l}function vn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-St(h),D=1<<M,F=c[M];F===-1?(!(D&s)||D&l)&&(c[M]=vn(D,i)):F<=i&&(t.expiredLanes|=D),h&=~D}}function At(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xn(){var t=zt;return zt<<=1,!(zt&4194240)&&(zt=64),t}function ln(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Vt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-St(i),t[i]=s}function un(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-St(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Rr(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-St(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var dt=0;function sd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var od,Gl,ad,ld,ud,Wl=!1,ra=[],qi=null,ji=null,$i=null,io=new Map,ro=new Map,Ki=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=So(i),i!==null&&Gl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function hg(t,i,s,l,c){switch(i){case"focusin":return qi=so(qi,t,i,s,l,c),!0;case"dragenter":return ji=so(ji,t,i,s,l,c),!0;case"mouseover":return $i=so($i,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return io.set(h,so(io.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,ro.set(h,so(ro.get(h)||null,t,i,s,l,c)),!0}return!1}function fd(t){var i=Cr(t.target);if(i!==null){var s=fi(i);if(s!==null){if(i=s.tag,i===13){if(i=ea(s),i!==null){t.blockedOn=i,ud(t.priority,function(){ad(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Yl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Et=l,s.target.dispatchEvent(l),Et=null}else return i=So(s),i!==null&&Gl(i),t.blockedOn=s,!1;i.shift()}return!0}function dd(t,i,s){sa(t)&&s.delete(i)}function pg(){Wl=!1,qi!==null&&sa(qi)&&(qi=null),ji!==null&&sa(ji)&&(ji=null),$i!==null&&sa($i)&&($i=null),io.forEach(dd),ro.forEach(dd)}function oo(t,i){t.blockedOn===i&&(t.blockedOn=null,Wl||(Wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pg)))}function ao(t){function i(c){return oo(c,t)}if(0<ra.length){oo(ra[0],t);for(var s=1;s<ra.length;s++){var l=ra[s];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&oo(qi,t),ji!==null&&oo(ji,t),$i!==null&&oo($i,t),io.forEach(i),ro.forEach(i),s=0;s<Ki.length;s++)l=Ki[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(s=Ki[0],s.blockedOn===null);)fd(s),s.blockedOn===null&&Ki.shift()}var ss=C.ReactCurrentBatchConfig,oa=!0;function mg(t,i,s,l){var c=dt,h=ss.transition;ss.transition=null;try{dt=1,Xl(t,i,s,l)}finally{dt=c,ss.transition=h}}function gg(t,i,s,l){var c=dt,h=ss.transition;ss.transition=null;try{dt=4,Xl(t,i,s,l)}finally{dt=c,ss.transition=h}}function Xl(t,i,s,l){if(oa){var c=Yl(t,i,s,l);if(c===null)uu(t,i,l,aa,s),cd(t,l);else if(hg(c,t,i,s,l))l.stopPropagation();else if(cd(t,l),i&4&&-1<dg.indexOf(t)){for(;c!==null;){var h=So(c);if(h!==null&&od(h),h=Yl(t,i,s,l),h===null&&uu(t,i,l,aa,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else uu(t,i,l,null,s)}}var aa=null;function Yl(t,i,s,l){if(aa=null,t=W(l),t=Cr(t),t!==null)if(i=fi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=ea(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return aa=t,null}function hd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case De:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var Zi=null,ql=null,la=null;function pd(){if(la)return la;var t,i=ql,s=i.length,l,c="value"in Zi?Zi.value:Zi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return la=c.slice(t,1<l?1-l:void 0)}function ua(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function md(){return!1}function Un(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ca:md,this.isPropagationStopped=md,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Un(os),lo=re({},os,{view:0,detail:0}),_g=Un(lo),$l,Kl,uo,fa=re({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?($l=t.screenX-uo.screenX,Kl=t.screenY-uo.screenY):Kl=$l=0,uo=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),gd=Un(fa),vg=re({},fa,{dataTransfer:0}),xg=Un(vg),Sg=re({},lo,{relatedTarget:0}),Zl=Un(Sg),yg=re({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Mg=Un(yg),Eg=re({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tg=Un(Eg),wg=re({},os,{data:0}),_d=Un(wg),Ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Cg[t])?!!i[t]:!1}function Ql(){return Pg}var bg=re({},lo,{key:function(t){if(t.key){var i=Ag[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lg=Un(bg),Dg=re({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Un(Dg),Ug=re({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),Ig=Un(Ug),Ng=re({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=Un(Ng),Og=re({},fa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=Un(Og),Bg=[9,13,27,32],Jl=d&&"CompositionEvent"in window,co=null;d&&"documentMode"in document&&(co=document.documentMode);var zg=d&&"TextEvent"in window&&!co,xd=d&&(!Jl||co&&8<co&&11>=co),Sd=" ",yd=!1;function Md(t,i){switch(t){case"keyup":return Bg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function Hg(t,i){switch(t){case"compositionend":return Ed(i);case"keypress":return i.which!==32?null:(yd=!0,Sd);case"textInput":return t=i.data,t===Sd&&yd?null:t;default:return null}}function Vg(t,i){if(as)return t==="compositionend"||!Jl&&Md(t,i)?(t=pd(),la=ql=Zi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xd&&i.locale!=="ko"?null:i.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Gg[t.type]:i==="textarea"}function wd(t,i,s,l){Pe(l),i=ga(i,"onChange"),0<i.length&&(s=new jl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var fo=null,ho=null;function Wg(t){Gd(t,0)}function da(t){var i=ds(t);if(ht(i))return t}function Xg(t,i){if(t==="change")return i}var Ad=!1;if(d){var eu;if(d){var tu="oninput"in document;if(!tu){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),tu=typeof Rd.oninput=="function"}eu=tu}else eu=!1;Ad=eu&&(!document.documentMode||9<document.documentMode)}function Cd(){fo&&(fo.detachEvent("onpropertychange",Pd),ho=fo=null)}function Pd(t){if(t.propertyName==="value"&&da(ho)){var i=[];wd(i,ho,t,W(t)),Tn(Wg,i)}}function Yg(t,i,s){t==="focusin"?(Cd(),fo=i,ho=s,fo.attachEvent("onpropertychange",Pd)):t==="focusout"&&Cd()}function qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(ho)}function jg(t,i){if(t==="click")return da(i)}function $g(t,i){if(t==="input"||t==="change")return da(i)}function Kg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Kg;function po(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,i){var s=bd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=bd(s)}}function Dd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ud(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=bt(t.document)}return i}function nu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Zg(t){var i=Ud(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Dd(s.ownerDocument.documentElement,s)){if(l!==null&&nu(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Ld(s,h);var M=Ld(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qg=d&&"documentMode"in document&&11>=document.documentMode,ls=null,iu=null,mo=null,ru=!1;function Id(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ru||ls==null||ls!==bt(l)||(l=ls,"selectionStart"in l&&nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),mo&&po(mo,l)||(mo=l,l=ga(iu,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ls)))}function ha(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var us={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},su={},Nd={};d&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function pa(t){if(su[t])return su[t];if(!us[t])return t;var i=us[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Nd)return su[t]=i[s];return t}var Fd=pa("animationend"),Od=pa("animationiteration"),kd=pa("animationstart"),Bd=pa("transitionend"),zd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){zd.set(t,i),u(i,[t])}for(var ou=0;ou<Hd.length;ou++){var au=Hd[ou],Jg=au.toLowerCase(),e_=au[0].toUpperCase()+au.slice(1);Qi(Jg,"on"+e_)}Qi(Fd,"onAnimationEnd"),Qi(Od,"onAnimationIteration"),Qi(kd,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Bd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t_=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Vd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Jo(l,i,void 0,t),t.currentTarget=null}function Gd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],F=D.instance,Z=D.currentTarget;if(D=D.listener,F!==h&&c.isPropagationStopped())break e;Vd(c,D,Z),h=F}else for(M=0;M<l.length;M++){if(D=l[M],F=D.instance,Z=D.currentTarget,D=D.listener,F!==h&&c.isPropagationStopped())break e;Vd(c,D,Z),h=F}}}if(wr)throw t=Yi,wr=!1,Yi=null,t}function Ut(t,i){var s=i[mu];s===void 0&&(s=i[mu]=new Set);var l=t+"__bubble";s.has(l)||(Wd(i,t,2,!1),s.add(l))}function lu(t,i,s){var l=0;i&&(l|=4),Wd(s,t,l,i)}var ma="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[ma]){t[ma]=!0,r.forEach(function(s){s!=="selectionchange"&&(t_.has(s)||lu(s,!1,t),lu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ma]||(i[ma]=!0,lu("selectionchange",!1,i))}}function Wd(t,i,s,l){switch(hd(i)){case 1:var c=mg;break;case 4:c=gg;break;default:c=Xl}s=c.bind(null,i,s,t),c=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function uu(t,i,s,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Cr(D),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}D=D.parentNode}}l=l.return}Tn(function(){var Z=h,_e=W(s),xe=[];e:{var me=zd.get(t);if(me!==void 0){var Le=jl,ze=t;switch(t){case"keypress":if(ua(s)===0)break e;case"keydown":case"keyup":Le=Lg;break;case"focusin":ze="focus",Le=Zl;break;case"focusout":ze="blur",Le=Zl;break;case"beforeblur":case"afterblur":Le=Zl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Ig;break;case Fd:case Od:case kd:Le=Mg;break;case Bd:Le=Fg;break;case"scroll":Le=_g;break;case"wheel":Le=kg;break;case"copy":case"cut":case"paste":Le=Tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=vd}var He=(i&4)!==0,Gt=!He&&t==="scroll",q=He?me!==null?me+"Capture":null:me;He=[];for(var G=Z,j;G!==null;){j=G;var Ee=j.stateNode;if(j.tag===5&&Ee!==null&&(j=Ee,q!==null&&(Ee=_n(G,q),Ee!=null&&He.push(vo(G,Ee,j)))),Gt)break;G=G.return}0<He.length&&(me=new Le(me,ze,null,s,_e),xe.push({event:me,listeners:He}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",me&&s!==Et&&(ze=s.relatedTarget||s.fromElement)&&(Cr(ze)||ze[Ei]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ze=s.relatedTarget||s.toElement,Le=Z,ze=ze?Cr(ze):null,ze!==null&&(Gt=fi(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=Z),Le!==ze)){if(He=gd,Ee="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(He=vd,Ee="onPointerLeave",q="onPointerEnter",G="pointer"),Gt=Le==null?me:ds(Le),j=ze==null?me:ds(ze),me=new He(Ee,G+"leave",Le,s,_e),me.target=Gt,me.relatedTarget=j,Ee=null,Cr(_e)===Z&&(He=new He(q,G+"enter",ze,s,_e),He.target=j,He.relatedTarget=Gt,Ee=He),Gt=Ee,Le&&ze)t:{for(He=Le,q=ze,G=0,j=He;j;j=cs(j))G++;for(j=0,Ee=q;Ee;Ee=cs(Ee))j++;for(;0<G-j;)He=cs(He),G--;for(;0<j-G;)q=cs(q),j--;for(;G--;){if(He===q||q!==null&&He===q.alternate)break t;He=cs(He),q=cs(q)}He=null}else He=null;Le!==null&&Xd(xe,me,Le,He,!1),ze!==null&&Gt!==null&&Xd(xe,Gt,ze,He,!0)}}e:{if(me=Z?ds(Z):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var Ge=Xg;else if(Td(me))if(Ad)Ge=$g;else{Ge=qg;var $e=Yg}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=jg);if(Ge&&(Ge=Ge(t,Z))){wd(xe,Ge,s,_e);break e}$e&&$e(t,me,Z),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&Tt(me,"number",me.value)}switch($e=Z?ds(Z):window,t){case"focusin":(Td($e)||$e.contentEditable==="true")&&(ls=$e,iu=Z,mo=null);break;case"focusout":mo=iu=ls=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Id(xe,s,_e);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":Id(xe,s,_e)}var Ke;if(Jl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else as?Md(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(xd&&s.locale!=="ko"&&(as||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&as&&(Ke=pd()):(Zi=_e,ql="value"in Zi?Zi.value:Zi.textContent,as=!0)),$e=ga(Z,tt),0<$e.length&&(tt=new _d(tt,t,null,s,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=Ed(s),Ke!==null&&(tt.data=Ke)))),(Ke=zg?Hg(t,s):Vg(t,s))&&(Z=ga(Z,"onBeforeInput"),0<Z.length&&(_e=new _d("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:Z}),_e.data=Ke))}Gd(xe,i)})}function vo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ga(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=_n(t,s),h!=null&&l.unshift(vo(t,h,c)),h=_n(t,i),h!=null&&l.push(vo(t,h,c))),t=t.return}return l}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var D=s,F=D.alternate,Z=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&Z!==null&&(D=Z,c?(F=_n(s,h),F!=null&&M.unshift(vo(s,F,D))):c||(F=_n(s,h),F!=null&&M.push(vo(s,F,D)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var n_=/\r\n?/g,i_=/\u0000|\uFFFD/g;function Yd(t){return(typeof t=="string"?t:""+t).replace(n_,`
`).replace(i_,"")}function _a(t,i,s){if(i=Yd(i),Yd(t)!==i&&s)throw Error(n(425))}function va(){}var cu=null,fu=null;function du(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,r_=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,s_=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(t){return qd.resolve(null).then(t).catch(o_)}:hu;function o_(t){setTimeout(function(){throw t})}function pu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),ao(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);ao(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function jd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),di="__reactFiber$"+fs,xo="__reactProps$"+fs,Ei="__reactContainer$"+fs,mu="__reactEvents$"+fs,a_="__reactListeners$"+fs,l_="__reactHandles$"+fs;function Cr(t){var i=t[di];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ei]||s[di]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=jd(t);t!==null;){if(s=t[di])return s;t=jd(t)}return i}t=s,s=t.parentNode}return null}function So(t){return t=t[di]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xa(t){return t[xo]||null}var gu=[],hs=-1;function er(t){return{current:t}}function It(t){0>hs||(t.current=gu[hs],gu[hs]=null,hs--)}function Lt(t,i){hs++,gu[hs]=t.current,t.current=i}var tr={},cn=er(tr),wn=er(!1),Pr=tr;function ps(t,i){var s=t.type.contextTypes;if(!s)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function An(t){return t=t.childContextTypes,t!=null}function Sa(){It(wn),It(cn)}function $d(t,i,s){if(cn.current!==tr)throw Error(n(168));Lt(cn,i),Lt(wn,s)}function Kd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},s,l)}function ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Pr=cn.current,Lt(cn,t),Lt(wn,wn.current),!0}function Zd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Kd(t,i,Pr),l.__reactInternalMemoizedMergedChildContext=t,It(wn),It(cn),Lt(cn,t)):It(wn),Lt(wn,s)}var Ti=null,Ma=!1,_u=!1;function Qd(t){Ti===null?Ti=[t]:Ti.push(t)}function u_(t){Ma=!0,Qd(t)}function nr(){if(!_u&&Ti!==null){_u=!0;var t=0,i=dt;try{var s=Ti;for(dt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ti=null,Ma=!1}catch(c){throw Ti!==null&&(Ti=Ti.slice(t+1)),A(Re,nr),c}finally{dt=i,_u=!1}}return null}var ms=[],gs=0,Ea=null,Ta=0,Hn=[],Vn=0,br=null,wi=1,Ai="";function Lr(t,i){ms[gs++]=Ta,ms[gs++]=Ea,Ea=t,Ta=i}function Jd(t,i,s){Hn[Vn++]=wi,Hn[Vn++]=Ai,Hn[Vn++]=br,br=t;var l=wi;t=Ai;var c=32-St(l)-1;l&=~(1<<c),s+=1;var h=32-St(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,wi=1<<32-St(i)+c|s<<c|l,Ai=h+t}else wi=1<<h|s<<c|l,Ai=t}function vu(t){t.return!==null&&(Lr(t,1),Jd(t,1,0))}function xu(t){for(;t===Ea;)Ea=ms[--gs],ms[gs]=null,Ta=ms[--gs],ms[gs]=null;for(;t===br;)br=Hn[--Vn],Hn[Vn]=null,Ai=Hn[--Vn],Hn[Vn]=null,wi=Hn[--Vn],Hn[Vn]=null}var In=null,Nn=null,Ft=!1,Qn=null;function eh(t,i){var s=Yn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function th(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=br!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Yn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Nn=null,!0):!1;default:return!1}}function Su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Ft){var i=Nn;if(i){var s=i;if(!th(t,i)){if(Su(t))throw Error(n(418));i=Ji(s.nextSibling);var l=In;i&&th(t,i)?eh(l,s):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(Su(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function wa(t){if(t!==In)return!1;if(!Ft)return nh(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!du(t.type,t.memoizedProps)),i&&(i=Nn)){if(Su(t))throw ih(),Error(n(418));for(;i;)eh(t,i),i=Ji(i.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Nn=Ji(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Ji(t.stateNode.nextSibling):null;return!0}function ih(){for(var t=Nn;t;)t=Ji(t.nextSibling)}function _s(){Nn=In=null,Ft=!1}function Mu(t){Qn===null?Qn=[t]:Qn.push(t)}var c_=C.ReactCurrentBatchConfig;function yo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Aa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function rh(t){var i=t._init;return i(t._payload)}function sh(t){function i(q,G){if(t){var j=q.deletions;j===null?(q.deletions=[G],q.flags|=16):j.push(G)}}function s(q,G){if(!t)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function l(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function c(q,G){return q=cr(q,G),q.index=0,q.sibling=null,q}function h(q,G,j){return q.index=j,t?(j=q.alternate,j!==null?(j=j.index,j<G?(q.flags|=2,G):j):(q.flags|=2,G)):(q.flags|=1048576,G)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,G,j,Ee){return G===null||G.tag!==6?(G=hc(j,q.mode,Ee),G.return=q,G):(G=c(G,j),G.return=q,G)}function F(q,G,j,Ee){var Ge=j.type;return Ge===N?_e(q,G,j.props.children,Ee,j.key):G!==null&&(G.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&rh(Ge)===G.type)?(Ee=c(G,j.props),Ee.ref=yo(q,G,j),Ee.return=q,Ee):(Ee=Ka(j.type,j.key,j.props,null,q.mode,Ee),Ee.ref=yo(q,G,j),Ee.return=q,Ee)}function Z(q,G,j,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==j.containerInfo||G.stateNode.implementation!==j.implementation?(G=pc(j,q.mode,Ee),G.return=q,G):(G=c(G,j.children||[]),G.return=q,G)}function _e(q,G,j,Ee,Ge){return G===null||G.tag!==7?(G=Br(j,q.mode,Ee,Ge),G.return=q,G):(G=c(G,j),G.return=q,G)}function xe(q,G,j){if(typeof G=="string"&&G!==""||typeof G=="number")return G=hc(""+G,q.mode,j),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Y:return j=Ka(G.type,G.key,G.props,null,q.mode,j),j.ref=yo(q,null,G),j.return=q,j;case k:return G=pc(G,q.mode,j),G.return=q,G;case se:var Ee=G._init;return xe(q,Ee(G._payload),j)}if(We(G)||ae(G))return G=Br(G,q.mode,j,null),G.return=q,G;Aa(q,G)}return null}function me(q,G,j,Ee){var Ge=G!==null?G.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Ge!==null?null:D(q,G,""+j,Ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Y:return j.key===Ge?F(q,G,j,Ee):null;case k:return j.key===Ge?Z(q,G,j,Ee):null;case se:return Ge=j._init,me(q,G,Ge(j._payload),Ee)}if(We(j)||ae(j))return Ge!==null?null:_e(q,G,j,Ee,null);Aa(q,j)}return null}function Le(q,G,j,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(j)||null,D(G,q,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case Y:return q=q.get(Ee.key===null?j:Ee.key)||null,F(G,q,Ee,Ge);case k:return q=q.get(Ee.key===null?j:Ee.key)||null,Z(G,q,Ee,Ge);case se:var $e=Ee._init;return Le(q,G,j,$e(Ee._payload),Ge)}if(We(Ee)||ae(Ee))return q=q.get(j)||null,_e(G,q,Ee,Ge,null);Aa(G,Ee)}return null}function ze(q,G,j,Ee){for(var Ge=null,$e=null,Ke=G,tt=G=0,tn=null;Ke!==null&&tt<j.length;tt++){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var yt=me(q,Ke,j[tt],Ee);if(yt===null){Ke===null&&(Ke=tn);break}t&&Ke&&yt.alternate===null&&i(q,Ke),G=h(yt,G,tt),$e===null?Ge=yt:$e.sibling=yt,$e=yt,Ke=tn}if(tt===j.length)return s(q,Ke),Ft&&Lr(q,tt),Ge;if(Ke===null){for(;tt<j.length;tt++)Ke=xe(q,j[tt],Ee),Ke!==null&&(G=h(Ke,G,tt),$e===null?Ge=Ke:$e.sibling=Ke,$e=Ke);return Ft&&Lr(q,tt),Ge}for(Ke=l(q,Ke);tt<j.length;tt++)tn=Le(Ke,q,tt,j[tt],Ee),tn!==null&&(t&&tn.alternate!==null&&Ke.delete(tn.key===null?tt:tn.key),G=h(tn,G,tt),$e===null?Ge=tn:$e.sibling=tn,$e=tn);return t&&Ke.forEach(function(fr){return i(q,fr)}),Ft&&Lr(q,tt),Ge}function He(q,G,j,Ee){var Ge=ae(j);if(typeof Ge!="function")throw Error(n(150));if(j=Ge.call(j),j==null)throw Error(n(151));for(var $e=Ge=null,Ke=G,tt=G=0,tn=null,yt=j.next();Ke!==null&&!yt.done;tt++,yt=j.next()){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var fr=me(q,Ke,yt.value,Ee);if(fr===null){Ke===null&&(Ke=tn);break}t&&Ke&&fr.alternate===null&&i(q,Ke),G=h(fr,G,tt),$e===null?Ge=fr:$e.sibling=fr,$e=fr,Ke=tn}if(yt.done)return s(q,Ke),Ft&&Lr(q,tt),Ge;if(Ke===null){for(;!yt.done;tt++,yt=j.next())yt=xe(q,yt.value,Ee),yt!==null&&(G=h(yt,G,tt),$e===null?Ge=yt:$e.sibling=yt,$e=yt);return Ft&&Lr(q,tt),Ge}for(Ke=l(q,Ke);!yt.done;tt++,yt=j.next())yt=Le(Ke,q,tt,yt.value,Ee),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?tt:yt.key),G=h(yt,G,tt),$e===null?Ge=yt:$e.sibling=yt,$e=yt);return t&&Ke.forEach(function(V_){return i(q,V_)}),Ft&&Lr(q,tt),Ge}function Gt(q,G,j,Ee){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Y:e:{for(var Ge=j.key,$e=G;$e!==null;){if($e.key===Ge){if(Ge=j.type,Ge===N){if($e.tag===7){s(q,$e.sibling),G=c($e,j.props.children),G.return=q,q=G;break e}}else if($e.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&rh(Ge)===$e.type){s(q,$e.sibling),G=c($e,j.props),G.ref=yo(q,$e,j),G.return=q,q=G;break e}s(q,$e);break}else i(q,$e);$e=$e.sibling}j.type===N?(G=Br(j.props.children,q.mode,Ee,j.key),G.return=q,q=G):(Ee=Ka(j.type,j.key,j.props,null,q.mode,Ee),Ee.ref=yo(q,G,j),Ee.return=q,q=Ee)}return M(q);case k:e:{for($e=j.key;G!==null;){if(G.key===$e)if(G.tag===4&&G.stateNode.containerInfo===j.containerInfo&&G.stateNode.implementation===j.implementation){s(q,G.sibling),G=c(G,j.children||[]),G.return=q,q=G;break e}else{s(q,G);break}else i(q,G);G=G.sibling}G=pc(j,q.mode,Ee),G.return=q,q=G}return M(q);case se:return $e=j._init,Gt(q,G,$e(j._payload),Ee)}if(We(j))return ze(q,G,j,Ee);if(ae(j))return He(q,G,j,Ee);Aa(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,G!==null&&G.tag===6?(s(q,G.sibling),G=c(G,j),G.return=q,q=G):(s(q,G),G=hc(j,q.mode,Ee),G.return=q,q=G),M(q)):s(q,G)}return Gt}var vs=sh(!0),oh=sh(!1),Ra=er(null),Ca=null,xs=null,Eu=null;function Tu(){Eu=xs=Ca=null}function wu(t){var i=Ra.current;It(Ra),t._currentValue=i}function Au(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ss(t,i){Ca=t,Eu=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Rn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(Eu!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(Ca===null)throw Error(n(308));xs=t,Ca.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Dr=null;function Ru(t){Dr===null?Dr=[t]:Dr.push(t)}function ah(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,Ru(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ri(t,l)}function Ri(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var ir=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,vt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,s)}return c=l.interleaved,c===null?(i.next=i,Ru(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,s)}function Pa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Rr(t,s)}}function uh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function ba(t,i,s,l){var c=t.updateQueue;ir=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var F=D,Z=F.next;F.next=null,M===null?h=Z:M.next=Z,M=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=Z:D.next=Z,_e.lastBaseUpdate=F))}if(h!==null){var xe=c.baseState;M=0,_e=Z=F=null,D=h;do{var me=D.lane,Le=D.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,He=D;switch(me=i,Le=s,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){xe=ze.call(Le,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,me=typeof ze=="function"?ze.call(Le,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:ir=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else Le={eventTime:Le,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(Z=_e=Le,F=xe):_e=_e.next=Le,M|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=Z,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=xe}}function ch(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var Mo={},hi=er(Mo),Eo=er(Mo),To=er(Mo);function Ur(t){if(t===Mo)throw Error(n(174));return t}function Pu(t,i){switch(Lt(To,i),Lt(Eo,t),Lt(hi,Mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}It(hi),Lt(hi,i)}function ys(){It(hi),It(Eo),It(To)}function fh(t){Ur(To.current);var i=Ur(hi.current),s=Ve(i,t.type);i!==s&&(Lt(Eo,t),Lt(hi,s))}function bu(t){Eo.current===t&&(It(hi),It(Eo))}var Ot=er(0);function La(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lu=[];function Du(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var Da=C.ReactCurrentDispatcher,Uu=C.ReactCurrentBatchConfig,Ir=0,kt=null,$t=null,Jt=null,Ua=!1,wo=!1,Ao=0,f_=0;function fn(){throw Error(n(321))}function Iu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Zn(t[s],i[s]))return!1;return!0}function Nu(t,i,s,l,c,h){if(Ir=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Da.current=t===null||t.memoizedState===null?m_:g_,t=s(l,c),wo){h=0;do{if(wo=!1,Ao=0,25<=h)throw Error(n(301));h+=1,Jt=$t=null,i.updateQueue=null,Da.current=__,t=s(l,c)}while(wo)}if(Da.current=Fa,i=$t!==null&&$t.next!==null,Ir=0,Jt=$t=kt=null,Ua=!1,i)throw Error(n(300));return t}function Fu(){var t=Ao!==0;return Ao=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?kt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Wn(){if($t===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Jt===null?kt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?kt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function Ro(t,i){return typeof i=="function"?i(t):i}function Ou(t){var i=Wn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=$t,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,F=null,Z=h;do{var _e=Z.lane;if((Ir&_e)===_e)F!==null&&(F=F.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var xe={lane:_e,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};F===null?(D=F=xe,M=l):F=F.next=xe,kt.lanes|=_e,Nr|=_e}Z=Z.next}while(Z!==null&&Z!==h);F===null?M=l:F.next=D,Zn(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,Nr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function ku(t){var i=Wn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Zn(h,i.memoizedState)||(Rn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function dh(){}function hh(t,i){var s=kt,l=Wn(),c=i(),h=!Zn(l.memoizedState,c);if(h&&(l.memoizedState=c,Rn=!0),l=l.queue,Bu(gh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(s.flags|=2048,Co(9,mh.bind(null,s,l,c,i),void 0,null),en===null)throw Error(n(349));Ir&30||ph(s,i,c)}return c}function ph(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function mh(t,i,s,l){i.value=s,i.getSnapshot=l,_h(i)&&vh(t)}function gh(t,i,s){return s(function(){_h(i)&&vh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Zn(t,s)}catch{return!0}}function vh(t){var i=Ri(t,1);i!==null&&ni(i,t,1,-1)}function xh(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},i.queue=t,t=t.dispatch=p_.bind(null,kt,t),[i.memoizedState,t]}function Co(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Sh(){return Wn().memoizedState}function Ia(t,i,s,l){var c=pi();kt.flags|=t,c.memoizedState=Co(1|i,s,void 0,l===void 0?null:l)}function Na(t,i,s,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&Iu(l,M.deps)){c.memoizedState=Co(i,s,h,l);return}}kt.flags|=t,c.memoizedState=Co(1|i,s,h,l)}function yh(t,i){return Ia(8390656,8,t,i)}function Bu(t,i){return Na(2048,8,t,i)}function Mh(t,i){return Na(4,2,t,i)}function Eh(t,i){return Na(4,4,t,i)}function Th(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wh(t,i,s){return s=s!=null?s.concat([t]):null,Na(4,4,Th.bind(null,i,t),s)}function zu(){}function Ah(t,i){var s=Wn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Iu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Rh(t,i){var s=Wn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Iu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Ch(t,i,s){return Ir&21?(Zn(s,i)||(s=xn(),kt.lanes|=s,Nr|=s,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=s)}function d_(t,i){var s=dt;dt=s!==0&&4>s?s:4,t(!0);var l=Uu.transition;Uu.transition={};try{t(!1),i()}finally{dt=s,Uu.transition=l}}function Ph(){return Wn().memoizedState}function h_(t,i,s){var l=lr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},bh(t))Lh(i,s);else if(s=ah(t,i,s,l),s!==null){var c=yn();ni(s,t,l,c),Dh(s,i,l)}}function p_(t,i,s){var l=lr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(bh(t))Lh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,s);if(c.hasEagerState=!0,c.eagerState=D,Zn(D,M)){var F=i.interleaved;F===null?(c.next=c,Ru(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}s=ah(t,i,c,l),s!==null&&(c=yn(),ni(s,t,l,c),Dh(s,i,l))}}function bh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function Lh(t,i){wo=Ua=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Dh(t,i,s){if(s&4194240){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Rr(t,s)}}var Fa={readContext:Gn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},m_={readContext:Gn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:yh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ia(4194308,4,Th.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ia(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ia(4,2,t,i)},useMemo:function(t,i){var s=pi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=pi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=h_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:zu,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=d_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=kt,c=pi();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),en===null)throw Error(n(349));Ir&30||ph(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,yh(gh.bind(null,l,h,t),[t]),l.flags|=2048,Co(9,mh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=pi(),i=en.identifierPrefix;if(Ft){var s=Ai,l=wi;s=(l&~(1<<32-St(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Ao++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=f_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},g_={readContext:Gn,useCallback:Ah,useContext:Gn,useEffect:Bu,useImperativeHandle:wh,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Rh,useReducer:Ou,useRef:Sh,useState:function(){return Ou(Ro)},useDebugValue:zu,useDeferredValue:function(t){var i=Wn();return Ch(i,$t.memoizedState,t)},useTransition:function(){var t=Ou(Ro)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1},__={readContext:Gn,useCallback:Ah,useContext:Gn,useEffect:Bu,useImperativeHandle:wh,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Rh,useReducer:ku,useRef:Sh,useState:function(){return ku(Ro)},useDebugValue:zu,useDeferredValue:function(t){var i=Wn();return $t===null?i.memoizedState=t:Ch(i,$t.memoizedState,t)},useTransition:function(){var t=ku(Ro)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Hu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Oa={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),c=lr(t),h=Ci(l,c);h.payload=i,s!=null&&(h.callback=s),i=rr(t,h,c),i!==null&&(ni(i,t,c,l),Pa(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),c=lr(t),h=Ci(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=rr(t,h,c),i!==null&&(ni(i,t,c,l),Pa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=lr(t),c=Ci(s,l);c.tag=2,i!=null&&(c.callback=i),i=rr(t,c,l),i!==null&&(ni(i,t,l,s),Pa(i,t,l))}};function Uh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!po(s,l)||!po(c,h):!0}function Ih(t,i,s){var l=!1,c=tr,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=An(i)?Pr:cn.current,l=i.contextTypes,h=(l=l!=null)?ps(t,c):tr),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Nh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Oa.enqueueReplaceState(i,i.state,null)}function Vu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Cu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=An(i)?Pr:cn.current,c.context=ps(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Hu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Oa.enqueueReplaceState(c,c.state,null),ba(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var s="",l=i;do s+=ue(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Gu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Wu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var v_=typeof WeakMap=="function"?WeakMap:Map;function Fh(t,i,s){s=Ci(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Wa||(Wa=!0,sc=l),Wu(t,i)},s}function Oh(t,i,s){s=Ci(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Wu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Wu(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function kh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new v_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=D_.bind(null,t,i,s),i.then(t,t))}function Bh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function zh(t,i,s,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ci(-1,1),i.tag=2,rr(s,i,1))),s.lanes|=1),t)}var x_=C.ReactCurrentOwner,Rn=!1;function Sn(t,i,s,l){i.child=t===null?oh(i,null,s,l):vs(i,t.child,s,l)}function Hh(t,i,s,l,c){s=s.render;var h=i.ref;return Ss(i,c),l=Nu(t,i,s,l,h,c),s=Fu(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&s&&vu(i),i.flags|=1,Sn(t,i,l,c),i.child)}function Vh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!dc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Gh(t,i,h,l,c)):(t=Ka(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:po,s(M,l)&&t.ref===i.ref)return Pi(t,i,c)}return i.flags|=1,t=cr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Gh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(po(h,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(Rn=!0);else return i.lanes=t.lanes,Pi(t,i,c)}return Xu(t,i,s,l,c)}function Wh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ts,Fn),Fn|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ts,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Lt(Ts,Fn),Fn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Lt(Ts,Fn),Fn|=l;return Sn(t,i,c,s),i.child}function Xh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Xu(t,i,s,l,c){var h=An(s)?Pr:cn.current;return h=ps(i,h),Ss(i,c),s=Nu(t,i,s,l,h,c),l=Fu(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&l&&vu(i),i.flags|=1,Sn(t,i,s,c),i.child)}function Yh(t,i,s,l,c){if(An(s)){var h=!0;ya(i)}else h=!1;if(Ss(i,c),i.stateNode===null)Ba(t,i),Ih(i,s,l),Vu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var F=M.context,Z=s.contextType;typeof Z=="object"&&Z!==null?Z=Gn(Z):(Z=An(s)?Pr:cn.current,Z=ps(i,Z));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||F!==Z)&&Nh(i,M,l,Z),ir=!1;var me=i.memoizedState;M.state=me,ba(i,l,M,c),F=i.memoizedState,D!==l||me!==F||wn.current||ir?(typeof _e=="function"&&(Hu(i,s,_e,l),F=i.memoizedState),(D=ir||Uh(i,s,D,l,me,F,Z))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=Z,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,lh(t,i),D=i.memoizedProps,Z=i.type===i.elementType?D:Jn(i.type,D),M.props=Z,xe=i.pendingProps,me=M.context,F=s.contextType,typeof F=="object"&&F!==null?F=Gn(F):(F=An(s)?Pr:cn.current,F=ps(i,F));var Le=s.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||me!==F)&&Nh(i,M,l,F),ir=!1,me=i.memoizedState,M.state=me,ba(i,l,M,c);var ze=i.memoizedState;D!==xe||me!==ze||wn.current||ir?(typeof Le=="function"&&(Hu(i,s,Le,l),ze=i.memoizedState),(Z=ir||Uh(i,s,Z,l,me,ze,F)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=F,l=Z):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Yu(t,i,s,l,h,c)}function Yu(t,i,s,l,c,h){Xh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Zd(i,s,!1),Pi(t,i,h);l=i.stateNode,x_.current=i;var D=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=vs(i,t.child,null,h),i.child=vs(i,null,D,h)):Sn(t,i,D,h),i.memoizedState=l.state,c&&Zd(i,s,!0),i.child}function qh(t){var i=t.stateNode;i.pendingContext?$d(t,i.pendingContext,i.pendingContext!==i.context):i.context&&$d(t,i.context,!1),Pu(t,i.containerInfo)}function jh(t,i,s,l,c){return _s(),Mu(c),i.flags|=256,Sn(t,i,s,l),i.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function $h(t,i,s){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ot,c&1),t===null)return yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Za(M,l,0,null),t=Br(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ju(s),i.memoizedState=qu,t):$u(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return S_(t,i,M,l,D,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var F={mode:"hidden",children:l.children};return!(M&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=cr(c,F),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=cr(D,h):(h=Br(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?ju(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=qu,l}return h=t.child,t=h.sibling,l=cr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function $u(t,i){return i=Za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ka(t,i,s,l){return l!==null&&Mu(l),vs(i,t.child,null,s),t=$u(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function S_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Gu(Error(n(422))),ka(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Za({mode:"visible",children:l.children},c,0,null),h=Br(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&vs(i,t.child,null,M),i.child.memoizedState=ju(M),i.memoizedState=qu,h);if(!(i.mode&1))return ka(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Gu(h,l,void 0),ka(t,i,M,l)}if(D=(M&t.childLanes)!==0,Rn||D){if(l=en,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|M)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),ni(l,t,c,-1))}return fc(),l=Gu(Error(n(421))),ka(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=U_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Ji(c.nextSibling),In=i,Ft=!0,Qn=null,t!==null&&(Hn[Vn++]=wi,Hn[Vn++]=Ai,Hn[Vn++]=br,wi=t.id,Ai=t.overflow,br=i),i=$u(i,l.children),i.flags|=4096,i)}function Kh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Au(t.return,i,s)}function Ku(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Zh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,s),l=Ot.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,s,i);else if(t.tag===19)Kh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&La(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Ku(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&La(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Ku(i,!0,s,null,h);break;case"together":Ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ba(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,!(s&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=cr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=cr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function y_(t,i,s){switch(i.tag){case 3:qh(i),_s();break;case 5:fh(i);break;case 1:An(i.type)&&ya(i);break;case 4:Pu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(Ra,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):s&i.child.childLanes?$h(t,i,s):(Lt(Ot,Ot.current&1),t=Pi(t,i,s),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(s&i.childLanes)!==0,t.flags&128){if(l)return Zh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Wh(t,i,s)}return Pi(t,i,s)}var Qh,Zu,Jh,ep;Qh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Zu=function(){},Jh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Ur(hi.current);var h=null;switch(s){case"input":c=O(t,c),l=O(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=va)}ut(s,l);var M;s=null;for(Z in c)if(!l.hasOwnProperty(Z)&&c.hasOwnProperty(Z)&&c[Z]!=null)if(Z==="style"){var D=c[Z];for(M in D)D.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(a.hasOwnProperty(Z)?h||(h=[]):(h=h||[]).push(Z,null));for(Z in l){var F=l[Z];if(D=c!=null?c[Z]:void 0,l.hasOwnProperty(Z)&&F!==D&&(F!=null||D!=null))if(Z==="style")if(D){for(M in D)!D.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in F)F.hasOwnProperty(M)&&D[M]!==F[M]&&(s||(s={}),s[M]=F[M])}else s||(h||(h=[]),h.push(Z,s)),s=F;else Z==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(h=h||[]).push(Z,F)):Z==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(Z,""+F):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(a.hasOwnProperty(Z)?(F!=null&&Z==="onScroll"&&Ut("scroll",t),h||D===F||(h=[])):(h=h||[]).push(Z,F))}s&&(h=h||[]).push("style",s);var Z=h;(i.updateQueue=Z)&&(i.flags|=4)}},ep=function(t,i,s,l){s!==l&&(i.flags|=4)};function Po(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function M_(t,i,s){var l=i.pendingProps;switch(xu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return An(i.type)&&Sa(),dn(i),null;case 3:return l=i.stateNode,ys(),It(wn),It(cn),Du(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Qn!==null&&(lc(Qn),Qn=null))),Zu(t,i),dn(i),null;case 5:bu(i);var c=Ur(To.current);if(s=i.type,t!==null&&i.stateNode!=null)Jh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Ur(hi.current),wa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[di]=i,l[xo]=h,t=(i.mode&1)!==0,s){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<go.length;c++)Ut(go[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":gn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":$(l,h),Ut("invalid",l)}ut(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&_a(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&_a(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",l)}switch(s){case"input":wt(l),Ye(l,h,!0);break;case"textarea":wt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=va)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[di]=i,t[xo]=l,Qh(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<go.length;c++)Ut(go[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":gn(t,l),c=O(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":$(t,l),c=E(t,l),Ut("invalid",t);break;default:c=l}ut(s,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var F=D[h];h==="style"?Qe(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ne(t,F)):h==="children"?typeof F=="string"?(s!=="textarea"||F!=="")&&at(t,F):typeof F=="number"&&at(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",t):F!=null&&L(t,h,F,M))}switch(s){case"input":wt(t),Ye(t,l,!1);break;case"textarea":wt(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=va)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)ep(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Ur(To.current),Ur(hi.current),wa(i)){if(l=i.stateNode,s=i.memoizedProps,l[di]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:_a(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return dn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Nn!==null&&i.mode&1&&!(i.flags&128))ih(),_s(),i.flags|=98560,h=!1;else if(h=wa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else _s(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else Qn!==null&&(lc(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Ot.current&1?Kt===0&&(Kt=3):fc())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ys(),Zu(t,i),t===null&&_o(i.stateNode.containerInfo),dn(i),null;case 10:return wu(i.type._context),dn(i),null;case 17:return An(i.type)&&Sa(),dn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Po(h,!1);else{if(Kt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=La(t),M!==null){for(i.flags|=128,Po(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&V()>ws&&(i.flags|=128,l=!0,Po(h,!1),i.lanes=4194304)}else{if(!l)if(t=La(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Po(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return dn(i),null}else 2*V()-h.renderingStartTime>ws&&s!==1073741824&&(i.flags|=128,l=!0,Po(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=V(),i.sibling=null,s=Ot.current,Lt(Ot,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return cc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Fn&1073741824&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function E_(t,i){switch(xu(i),i.tag){case 1:return An(i.type)&&Sa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),It(wn),It(cn),Du(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return bu(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));_s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return ys(),null;case 10:return wu(i.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var za=!1,hn=!1,T_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Es(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ht(t,i,l)}else s.current=null}function Qu(t,i,s){try{s()}catch(l){Ht(t,i,l)}}var tp=!1;function w_(t,i){if(cu=oa,t=Ud(),nu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,D=-1,F=-1,Z=0,_e=0,xe=t,me=null;t:for(;;){for(var Le;xe!==s||c!==0&&xe.nodeType!==3||(D=M+c),xe!==h||l!==0&&xe.nodeType!==3||(F=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===t)break t;if(me===s&&++Z===c&&(D=M),me===h&&++_e===l&&(F=M),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}s=D===-1||F===-1?null:{start:D,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(fu={focusedElem:t,selectionRange:s},oa=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Gt=ze.memoizedState,q=i.stateNode,G=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:Jn(i.type,He),Gt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ze=tp,tp=!1,ze}function bo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Qu(i,s,h)}c=c.next}while(c!==l)}}function Ha(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Ju(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function np(t){var i=t.alternate;i!==null&&(t.alternate=null,np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[xo],delete i[mu],delete i[a_],delete i[l_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ec(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=va));else if(l!==4&&(t=t.child,t!==null))for(ec(t,i,s),t=t.sibling;t!==null;)ec(t,i,s),t=t.sibling}function tc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(tc(t,i,s),t=t.sibling;t!==null;)tc(t,i,s),t=t.sibling}var sn=null,ei=!1;function sr(t,i,s){for(s=s.child;s!==null;)sp(t,i,s),s=s.sibling}function sp(t,i,s){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Xe,s)}catch{}switch(s.tag){case 5:hn||Es(s,i);case 6:var l=sn,c=ei;sn=null,sr(t,i,s),sn=l,ei=c,sn!==null&&(ei?(t=sn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):sn.removeChild(s.stateNode));break;case 18:sn!==null&&(ei?(t=sn,s=s.stateNode,t.nodeType===8?pu(t.parentNode,s):t.nodeType===1&&pu(t,s),ao(t)):pu(sn,s.stateNode));break;case 4:l=sn,c=ei,sn=s.stateNode.containerInfo,ei=!0,sr(t,i,s),sn=l,ei=c;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&Qu(s,i,M),c=c.next}while(c!==l)}sr(t,i,s);break;case 1:if(!hn&&(Es(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(D){Ht(s,i,D)}sr(t,i,s);break;case 21:sr(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,sr(t,i,s),hn=l):sr(t,i,s);break;default:sr(t,i,s)}}function op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new T_),i.forEach(function(l){var c=I_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,ei=!1;break e;case 3:sn=D.stateNode.containerInfo,ei=!0;break e;case 4:sn=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(sn===null)throw Error(n(160));sp(h,M,c),sn=null,ei=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(Z){Ht(c,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),mi(t),l&4){try{bo(3,t,t.return),Ha(3,t)}catch(He){Ht(t,t.return,He)}try{bo(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:ti(i,t),mi(t),l&512&&s!==null&&Es(s,s.return);break;case 5:if(ti(i,t),mi(t),l&512&&s!==null&&Es(s,s.return),t.flags&32){var c=t.stateNode;try{at(c,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ft(c,h),nt(D,M);var Z=nt(D,h);for(M=0;M<F.length;M+=2){var _e=F[M],xe=F[M+1];_e==="style"?Qe(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?at(c,xe):L(c,_e,xe,Z)}switch(D){case"input":lt(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(c,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[xo]=h}catch(He){Ht(t,t.return,He)}}break;case 6:if(ti(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Ht(t,t.return,He)}}break;case 3:if(ti(i,t),mi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:ti(i,t),mi(t);break;case 13:ti(i,t),mi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(rc=V())),l&4&&op(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(Z=hn)||_e,ti(i,t),hn=Z):ti(i,t),mi(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!_e&&t.mode&1)for(Oe=t,_e=t.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(me=Oe,Le=me.child,me.tag){case 0:case 11:case 14:case 15:bo(4,me,me.return);break;case 1:Es(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Ht(l,s,He)}}break;case 5:Es(me,me.return);break;case 22:if(me.memoizedState!==null){cp(xe);continue}}Le!==null?(Le.return=me,Oe=Le):cp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,Z?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,F=xe.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=je("display",M))}catch(He){Ht(t,t.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Z?"":xe.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ti(i,t),mi(t),l&4&&op(t);break;case 21:break;default:ti(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(ip(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(at(c,""),l.flags&=-33);var h=rp(t);tc(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=rp(t);ec(t,D,M);break;default:throw Error(n(161))}}catch(F){Ht(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function A_(t,i,s){Oe=t,lp(t)}function lp(t,i,s){for(var l=(t.mode&1)!==0;Oe!==null;){var c=Oe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||za;if(!M){var D=c.alternate,F=D!==null&&D.memoizedState!==null||hn;D=za;var Z=hn;if(za=M,(hn=F)&&!Z)for(Oe=c;Oe!==null;)M=Oe,F=M.child,M.tag===22&&M.memoizedState!==null?fp(c):F!==null?(F.return=M,Oe=F):fp(c);for(;h!==null;)Oe=h,lp(h),h=h.sibling;Oe=c,za=D,hn=Z}up(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Oe=h):up(t)}}function up(t){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:hn||Ha(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Jn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ch(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}ch(i,M,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&s.focus();break;case"img":F.src&&(s.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var _e=Z.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ao(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Ju(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Oe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Oe=s;break}Oe=i.return}}function cp(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Oe=s;break}Oe=i.return}}function fp(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ha(4,i)}catch(F){Ht(i,s,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){Ht(i,c,F)}}var h=i.return;try{Ju(i)}catch(F){Ht(i,h,F)}break;case 5:var M=i.return;try{Ju(i)}catch(F){Ht(i,M,F)}}}catch(F){Ht(i,i.return,F)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var R_=Math.ceil,Va=C.ReactCurrentDispatcher,nc=C.ReactCurrentOwner,Xn=C.ReactCurrentBatchConfig,vt=0,en=null,Xt=null,on=0,Fn=0,Ts=er(0),Kt=0,Lo=null,Nr=0,Ga=0,ic=0,Do=null,Cn=null,rc=0,ws=1/0,bi=null,Wa=!1,sc=null,or=null,Xa=!1,ar=null,Ya=0,Uo=0,oc=null,qa=-1,ja=0;function yn(){return vt&6?V():qa!==-1?qa:qa=V()}function lr(t){return t.mode&1?vt&2&&on!==0?on&-on:c_.transition!==null?(ja===0&&(ja=xn()),ja):(t=dt,t!==0||(t=window.event,t=t===void 0?16:hd(t.type)),t):1}function ni(t,i,s,l){if(50<Uo)throw Uo=0,oc=null,Error(n(185));Vt(t,s,l),(!(vt&2)||t!==en)&&(t===en&&(!(vt&2)&&(Ga|=s),Kt===4&&ur(t,on)),Pn(t,l),s===1&&vt===0&&!(i.mode&1)&&(ws=V()+500,Ma&&nr()))}function Pn(t,i){var s=t.callbackNode;Ar(t,i);var l=Kn(t,t===en?on:0);if(l===0)s!==null&&X(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&X(s),i===1)t.tag===0?u_(hp.bind(null,t)):Qd(hp.bind(null,t)),s_(function(){!(vt&6)&&nr()}),s=null;else{switch(sd(l)){case 1:s=Re;break;case 4:s=De;break;case 16:s=Fe;break;case 536870912:s=et;break;default:s=Fe}s=yp(s,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function dp(t,i){if(qa=-1,ja=0,vt&6)throw Error(n(327));var s=t.callbackNode;if(As()&&t.callbackNode!==s)return null;var l=Kn(t,t===en?on:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=$a(t,l);else{i=l;var c=vt;vt|=2;var h=mp();(en!==t||on!==i)&&(bi=null,ws=V()+500,Or(t,i));do try{b_();break}catch(D){pp(t,D)}while(!0);Tu(),Va.current=h,vt=c,Xt!==null?i=0:(en=null,on=0,i=Kt)}if(i!==0){if(i===2&&(c=At(t),c!==0&&(l=c,i=ac(t,c))),i===1)throw s=Lo,Or(t,0),ur(t,l),Pn(t,V()),s;if(i===6)ur(t,l);else{if(c=t.current.alternate,!(l&30)&&!C_(c)&&(i=$a(t,l),i===2&&(h=At(t),h!==0&&(l=h,i=ac(t,h))),i===1))throw s=Lo,Or(t,0),ur(t,l),Pn(t,V()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Cn,bi);break;case 3:if(ur(t,l),(l&130023424)===l&&(i=rc+500-V(),10<i)){if(Kn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=hu(kr.bind(null,t,Cn,bi),i);break}kr(t,Cn,bi);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-St(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=V()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*R_(l/1960))-l,10<l){t.timeoutHandle=hu(kr.bind(null,t,Cn,bi),l);break}kr(t,Cn,bi);break;case 5:kr(t,Cn,bi);break;default:throw Error(n(329))}}}return Pn(t,V()),t.callbackNode===s?dp.bind(null,t):null}function ac(t,i){var s=Do;return t.current.memoizedState.isDehydrated&&(Or(t,i).flags|=256),t=$a(t,i),t!==2&&(i=Cn,Cn=s,i!==null&&lc(i)),t}function lc(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function C_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~ic,i&=~Ga,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-St(i),l=1<<s;t[s]=-1,i&=~l}}function hp(t){if(vt&6)throw Error(n(327));As();var i=Kn(t,0);if(!(i&1))return Pn(t,V()),null;var s=$a(t,i);if(t.tag!==0&&s===2){var l=At(t);l!==0&&(i=l,s=ac(t,l))}if(s===1)throw s=Lo,Or(t,0),ur(t,i),Pn(t,V()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Cn,bi),Pn(t,V()),null}function uc(t,i){var s=vt;vt|=1;try{return t(i)}finally{vt=s,vt===0&&(ws=V()+500,Ma&&nr())}}function Fr(t){ar!==null&&ar.tag===0&&!(vt&6)&&As();var i=vt;vt|=1;var s=Xn.transition,l=dt;try{if(Xn.transition=null,dt=1,t)return t()}finally{dt=l,Xn.transition=s,vt=i,!(vt&6)&&nr()}}function cc(){Fn=Ts.current,It(Ts)}function Or(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,r_(s)),Xt!==null)for(s=Xt.return;s!==null;){var l=s;switch(xu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Sa();break;case 3:ys(),It(wn),It(cn),Du();break;case 5:bu(l);break;case 4:ys();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:wu(l.type._context);break;case 22:case 23:cc()}s=s.return}if(en=t,Xt=t=cr(t.current,null),on=Fn=i,Kt=0,Lo=null,ic=Ga=Nr=0,Cn=Do=null,Dr!==null){for(i=0;i<Dr.length;i++)if(s=Dr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Dr=null}return t}function pp(t,i){do{var s=Xt;try{if(Tu(),Da.current=Fa,Ua){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ua=!1}if(Ir=0,Jt=$t=kt=null,wo=!1,Ao=0,nc.current=null,s===null||s.return===null){Kt=1,Lo=i,Xt=null;break}e:{var h=t,M=s.return,D=s,F=i;if(i=on,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Z=F,_e=D,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Bh(M);if(Le!==null){Le.flags&=-257,zh(Le,M,D,h,i),Le.mode&1&&kh(h,Z,i),i=Le,F=Z;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(F),i.updateQueue=He}else ze.add(F);break e}else{if(!(i&1)){kh(h,Z,i),fc();break e}F=Error(n(426))}}else if(Ft&&D.mode&1){var Gt=Bh(M);if(Gt!==null){!(Gt.flags&65536)&&(Gt.flags|=256),zh(Gt,M,D,h,i),Mu(Ms(F,D));break e}}h=F=Ms(F,D),Kt!==4&&(Kt=2),Do===null?Do=[h]:Do.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Fh(h,F,i);uh(h,q);break e;case 1:D=F;var G=h.type,j=h.stateNode;if(!(h.flags&128)&&(typeof G.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(or===null||!or.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Oh(h,D,i);uh(h,Ee);break e}}h=h.return}while(h!==null)}_p(s)}catch(Ge){i=Ge,Xt===s&&s!==null&&(Xt=s=s.return);continue}break}while(!0)}function mp(){var t=Va.current;return Va.current=Fa,t===null?Fa:t}function fc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||!(Nr&268435455)&&!(Ga&268435455)||ur(en,on)}function $a(t,i){var s=vt;vt|=2;var l=mp();(en!==t||on!==i)&&(bi=null,Or(t,i));do try{P_();break}catch(c){pp(t,c)}while(!0);if(Tu(),vt=s,Va.current=l,Xt!==null)throw Error(n(261));return en=null,on=0,Kt}function P_(){for(;Xt!==null;)gp(Xt)}function b_(){for(;Xt!==null&&!Q();)gp(Xt)}function gp(t){var i=Sp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?_p(t):Xt=i,nc.current=null}function _p(t){var i=t;do{var s=i.alternate;if(t=i.return,i.flags&32768){if(s=E_(s,i),s!==null){s.flags&=32767,Xt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}else if(s=M_(s,i,Fn),s!==null){Xt=s;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function kr(t,i,s){var l=dt,c=Xn.transition;try{Xn.transition=null,dt=1,L_(t,i,s,l)}finally{Xn.transition=c,dt=l}return null}function L_(t,i,s,l){do As();while(ar!==null);if(vt&6)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(un(t,h),t===en&&(Xt=en=null,on=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Xa||(Xa=!0,yp(Fe,function(){return As(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Xn.transition,Xn.transition=null;var M=dt;dt=1;var D=vt;vt|=4,nc.current=null,w_(t,s),ap(s,t),Zg(fu),oa=!!cu,fu=cu=null,t.current=s,A_(s),ee(),vt=D,dt=M,Xn.transition=h}else t.current=s;if(Xa&&(Xa=!1,ar=t,Ya=c),h=t.pendingLanes,h===0&&(or=null),xt(s.stateNode),Pn(t,V()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Wa)throw Wa=!1,t=sc,sc=null,t;return Ya&1&&t.tag!==0&&As(),h=t.pendingLanes,h&1?t===oc?Uo++:(Uo=0,oc=t):Uo=0,nr(),null}function As(){if(ar!==null){var t=sd(Ya),i=Xn.transition,s=dt;try{if(Xn.transition=null,dt=16>t?16:t,ar===null)var l=!1;else{if(t=ar,ar=null,Ya=0,vt&6)throw Error(n(331));var c=vt;for(vt|=4,Oe=t.current;Oe!==null;){var h=Oe,M=h.child;if(Oe.flags&16){var D=h.deletions;if(D!==null){for(var F=0;F<D.length;F++){var Z=D[F];for(Oe=Z;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:bo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,Le=_e.return;if(np(_e),_e===Z){Oe=null;break}if(me!==null){me.return=Le,Oe=me;break}Oe=Le}}}var ze=h.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Oe=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Oe=M;else e:for(;Oe!==null;){if(h=Oe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:bo(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Oe=q;break e}Oe=h.return}}var G=t.current;for(Oe=G;Oe!==null;){M=Oe;var j=M.child;if(M.subtreeFlags&2064&&j!==null)j.return=M,Oe=j;else e:for(M=G;Oe!==null;){if(D=Oe,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Ha(9,D)}}catch(Ge){Ht(D,D.return,Ge)}if(D===M){Oe=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Oe=Ee;break e}Oe=D.return}}if(vt=c,nr(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Xe,t)}catch{}l=!0}return l}finally{dt=s,Xn.transition=i}}return!1}function vp(t,i,s){i=Ms(s,i),i=Fh(t,i,1),t=rr(t,i,1),i=yn(),t!==null&&(Vt(t,1,i),Pn(t,i))}function Ht(t,i,s){if(t.tag===3)vp(t,t,s);else for(;i!==null;){if(i.tag===3){vp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=Ms(s,t),t=Oh(i,t,1),i=rr(i,t,1),t=yn(),i!==null&&(Vt(i,1,t),Pn(i,t));break}}i=i.return}}function D_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,en===t&&(on&s)===s&&(Kt===4||Kt===3&&(on&130023424)===on&&500>V()-rc?Or(t,0):ic|=s),Pn(t,i)}function xp(t,i){i===0&&(t.mode&1?(i=pt,pt<<=1,!(pt&130023424)&&(pt=4194304)):i=1);var s=yn();t=Ri(t,i),t!==null&&(Vt(t,i,s),Pn(t,s))}function U_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),xp(t,s)}function I_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),xp(t,s)}var Sp;Sp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)Rn=!0;else{if(!(t.lanes&s)&&!(i.flags&128))return Rn=!1,y_(t,i,s);Rn=!!(t.flags&131072)}else Rn=!1,Ft&&i.flags&1048576&&Jd(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ba(t,i),t=i.pendingProps;var c=ps(i,cn.current);Ss(i,s),c=Nu(null,i,l,t,c,s);var h=Fu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(h=!0,ya(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Cu(i),c.updater=Oa,i.stateNode=c,c._reactInternals=i,Vu(i,l,t,s),i=Yu(null,i,l,!0,h,s)):(i.tag=0,Ft&&h&&vu(i),Sn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ba(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=F_(l),t=Jn(l,t),c){case 0:i=Xu(null,i,l,t,s);break e;case 1:i=Yh(null,i,l,t,s);break e;case 11:i=Hh(null,i,l,t,s);break e;case 14:i=Vh(null,i,l,Jn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Xu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Yh(t,i,l,c,s);case 3:e:{if(qh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,lh(t,i),ba(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Ms(Error(n(423)),i),i=jh(t,i,l,s,c);break e}else if(l!==c){c=Ms(Error(n(424)),i),i=jh(t,i,l,s,c);break e}else for(Nn=Ji(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,Qn=null,s=oh(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(_s(),l===c){i=Pi(t,i,s);break e}Sn(t,i,l,s)}i=i.child}return i;case 5:return fh(i),t===null&&yu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,du(l,c)?M=null:h!==null&&du(l,h)&&(i.flags|=32),Xh(t,i),Sn(t,i,M,s),i.child;case 6:return t===null&&yu(i),null;case 13:return $h(t,i,s);case 4:return Pu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=vs(i,null,l,s):Sn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Hh(t,i,l,c,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(Ra,l._currentValue),l._currentValue=M,h!==null)if(Zn(h.value,M)){if(h.children===c.children&&!wn.current){i=Pi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ci(-1,s&-s),F.tag=2;var Z=h.updateQueue;if(Z!==null){Z=Z.shared;var _e=Z.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),Z.pending=F}}h.lanes|=s,F=h.alternate,F!==null&&(F.lanes|=s),Au(h.return,s,i),D.lanes|=s;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,D=M.alternate,D!==null&&(D.lanes|=s),Au(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}Sn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,Ss(i,s),c=Gn(c),l=l(c),i.flags|=1,Sn(t,i,l,s),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),Vh(t,i,l,c,s);case 15:return Gh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ba(t,i),i.tag=1,An(l)?(t=!0,ya(i)):t=!1,Ss(i,s),Ih(i,l,c),Vu(i,l,c,s),Yu(null,i,l,!0,t,s);case 19:return Zh(t,i,s);case 22:return Wh(t,i,s)}throw Error(n(156,i.tag))};function yp(t,i){return A(t,i)}function N_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,s,l){return new N_(t,i,s,l)}function dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F_(t){if(typeof t=="function")return dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function cr(t,i){var s=t.alternate;return s===null?(s=Yn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ka(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")dc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Br(s.children,c,h,i);case B:M=8,c|=8;break;case P:return t=Yn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case J:return t=Yn(13,s,i,c),t.elementType=J,t.lanes=h,t;case fe:return t=Yn(19,s,i,c),t.elementType=fe,t.lanes=h,t;case le:return Za(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case H:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Br(t,i,s,l){return t=Yn(7,t,l,i),t.lanes=s,t}function Za(t,i,s,l){return t=Yn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function hc(t,i,s){return t=Yn(6,t,null,i),t.lanes=s,t}function pc(t,i,s){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function O_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ln(0),this.expirationTimes=ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function mc(t,i,s,l,c,h,M,D,F){return t=new O_(t,i,s,D,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(h),t}function k_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function Mp(t){if(!t)return tr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(An(s))return Kd(t,s,i)}return i}function Ep(t,i,s,l,c,h,M,D,F){return t=mc(s,l,!0,t,c,h,M,D,F),t.context=Mp(null),s=t.current,l=yn(),c=lr(s),h=Ci(l,c),h.callback=i??null,rr(s,h,c),t.current.lanes=c,Vt(t,c,l),Pn(t,l),t}function Qa(t,i,s,l){var c=i.current,h=yn(),M=lr(c);return s=Mp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ci(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(c,i,M),t!==null&&(ni(t,c,M,h),Pa(t,c,M)),M}function Ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function gc(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _c(t){this._internalRoot=t}el.prototype.render=_c.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qa(t,i,null,null)},el.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Fr(function(){Qa(null,t,null,null)}),i[Ei]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var i=ld();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Ki.length&&i!==0&&i<Ki[s].priority;s++);Ki.splice(s,0,t),s===0&&fd(t)}};function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function B_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Z=Ja(M);h.call(Z)}}var M=Ep(i,l,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=M,t[Ei]=M.current,_o(t.nodeType===8?t.parentNode:t),Fr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var Z=Ja(F);D.call(Z)}}var F=mc(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=F,t[Ei]=F.current,_o(t.nodeType===8?t.parentNode:t),Fr(function(){Qa(i,F,s,l)}),F}function nl(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var F=Ja(M);D.call(F)}}Qa(i,M,t,c)}else M=B_(s,i,t,c,l);return Ja(M)}od=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=rn(i.pendingLanes);s!==0&&(Rr(i,s|1),Pn(i,V()),!(vt&6)&&(ws=V()+500,nr()))}break;case 13:Fr(function(){var l=Ri(t,1);if(l!==null){var c=yn();ni(l,t,1,c)}}),gc(t,1)}},Gl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var s=yn();ni(i,t,134217728,s)}gc(t,134217728)}},ad=function(t){if(t.tag===13){var i=lr(t),s=Ri(t,i);if(s!==null){var l=yn();ni(s,t,i,l)}gc(t,i)}},ld=function(){return dt},ud=function(t,i){var s=dt;try{return dt=t,i()}finally{dt=s}},Ae=function(t,i,s){switch(i){case"input":if(lt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=xa(l);if(!c)throw Error(n(90));ht(l),lt(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&b(t,!!s.multiple,i,!1)}},Dt=uc,jt=Fr;var z_={usingClientEntryPoint:!1,Events:[So,ds,xa,Pe,it,uc]},Io={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H_={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=na(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Xe=il.inject(H_),rt=il}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z_,bn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(i))throw Error(n(200));return k_(t,i,null,s)},bn.createRoot=function(t,i){if(!vc(t))throw Error(n(299));var s=!1,l="",c=wp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=mc(t,1,!1,null,null,s,!1,l,c),t[Ei]=i.current,_o(t.nodeType===8?t.parentNode:t),new _c(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=na(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Fr(t)},bn.hydrate=function(t,i,s){if(!tl(i))throw Error(n(200));return nl(null,t,i,!0,s)},bn.hydrateRoot=function(t,i,s){if(!vc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=wp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=Ep(i,null,t,1,s??null,c,!1,h,M),t[Ei]=i.current,_o(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new el(i)},bn.render=function(t,i,s){if(!tl(i))throw Error(n(200));return nl(null,t,i,!1,s)},bn.unmountComponentAtNode=function(t){if(!tl(t))throw Error(n(40));return t._reactRootContainer?(Fr(function(){nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},bn.unstable_batchedUpdates=uc,bn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!tl(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return nl(t,i,s,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Ip;function K_(){if(Ip)return yc.exports;Ip=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yc.exports=$_(),yc.exports}var Np;function Z_(){if(Np)return rl;Np=1;var o=K_();return rl.createRoot=o.createRoot,rl.hydrateRoot=o.hydrateRoot,rl}var Q_=Z_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="171",J_=0,Fp=1,ev=2,Im=1,tv=2,Oi=3,Er=0,Dn=1,ki=2,yr=0,Xs=1,Op=2,kp=3,Bp=4,nv=5,$r=100,iv=101,rv=102,sv=103,ov=104,av=200,lv=201,uv=202,cv=203,lf=204,uf=205,fv=206,dv=207,hv=208,pv=209,mv=210,gv=211,_v=212,vv=213,xv=214,cf=0,ff=1,df=2,js=3,hf=4,pf=5,mf=6,gf=7,Nm=0,Sv=1,yv=2,Mr=0,Mv=1,Ev=2,Tv=3,wv=4,Av=5,Rv=6,Cv=7,Fm=300,$s=301,Ks=302,_f=303,vf=304,kl=306,xf=1e3,Zr=1001,Sf=1002,ci=1003,Pv=1004,sl=1005,vi=1006,Tc=1007,Qr=1008,Vi=1009,Om=1010,km=1011,Go=1012,Zf=1013,es=1014,Bi=1015,Yo=1016,Qf=1017,Jf=1018,Zs=1020,Bm=35902,zm=1021,Hm=1022,ui=1023,Vm=1024,Gm=1025,Ys=1026,Qs=1027,Wm=1028,ed=1029,Xm=1030,td=1031,nd=1033,Cl=33776,Pl=33777,bl=33778,Ll=33779,yf=35840,Mf=35841,Ef=35842,Tf=35843,wf=36196,Af=37492,Rf=37496,Cf=37808,Pf=37809,bf=37810,Lf=37811,Df=37812,Uf=37813,If=37814,Nf=37815,Ff=37816,Of=37817,kf=37818,Bf=37819,zf=37820,Hf=37821,Dl=36492,Vf=36494,Gf=36495,Ym=36283,Wf=36284,Xf=36285,Yf=36286,bv=3200,Lv=3201,Dv=0,Uv=1,Sr="",jn="srgb",Js="srgb-linear",Nl="linear",Rt="srgb",Rs=7680,zp=519,Iv=512,Nv=513,Fv=514,qm=515,Ov=516,kv=517,Bv=518,zv=519,Hp=35044,Vp="300 es",zi=2e3,Fl=2001;class to{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,qf=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function mt(o,e,n){return Math.max(e,Math.min(n,o))}function Hv(o,e){return(o%e+e)%e}function Ac(o,e,n){return(1-n)*o+n*e}function Fo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],y=r[5],T=r[8],R=a[0],S=a[3],_=a[6],I=a[1],L=a[4],C=a[7],Y=a[2],k=a[5],N=a[8];return u[0]=f*R+d*I+p*Y,u[3]=f*S+d*L+p*k,u[6]=f*_+d*C+p*N,u[1]=m*R+g*I+v*Y,u[4]=m*S+g*L+v*k,u[7]=m*_+g*C+v*N,u[2]=x*R+y*I+T*Y,u[5]=x*S+y*L+T*k,u[8]=x*_+y*C+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*u*g+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*f-d*m,x=d*p-g*u,y=m*u-f*p,T=n*v+r*x+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(a*m-g*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(g*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=y*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new st;function jm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Wo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vv(){const o=Wo("canvas");return o.style.display="block",o}const Gp={};function Gs(o){o in Gp||(Gp[o]=!0,console.warn(o))}function Gv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Wv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wp=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yv(){const o={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Rt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Rt&&(a.r=qs(a.r),a.g=qs(a.g),a.b=qs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sr?Nl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Js]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),o}const Mt=Yv();function Hi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Cs;class qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=Wo("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Hi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jv=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Cc(a[f].image)):u.push(Cc(a[f]))}else u=Cc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Cc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $v=0;class En extends to{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,r=Zr,a=Zr,u=vi,f=Qr,d=ui,p=Vi,m=En.DEFAULT_ANISOTROPY,g=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=qo(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Fm;En.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],y=p[5],T=p[9],R=p[2],S=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(T+S)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(y+1)/2,Y=(_+1)/2,k=(g+x)/4,N=(v+R)/4,B=(T+S)/4;return L>C&&L>Y?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=k/r,u=N/r):C>Y?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=k/a,u=B/a):Y<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Y),r=N/u,a=B/u),this.set(r,a,u,n),this}let I=Math.sqrt((S-T)*(S-T)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(S-T)/I,this.y=(v-R)/I,this.z=(x-g)/I,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this.w=mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this.w=mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kv extends to{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new En(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $m(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Kv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Km extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zv extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const x=u[f+0],y=u[f+1],T=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=T,e[n+3]=R;return}if(v!==R||p!==x||m!==y||g!==T){let S=1-d;const _=p*x+m*y+g*T+v*R,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const Y=Math.sqrt(L),k=Math.atan2(Y,_*I);S=Math.sin(S*k)/Y,d=Math.sin(d*k)/Y}const C=d*I;if(p=p*S+x*C,m=m*S+y*C,g=g*S+T*C,v=v*S+R*C,S===1-d){const Y=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=Y,m*=Y,g*=Y,v*=Y}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],g=r[a+3],v=u[f],x=u[f+1],y=u[f+2],T=u[f+3];return e[n]=d*T+g*v+p*y-m*x,e[n+1]=p*T+g*x+m*v-d*y,e[n+2]=m*T+g*y+d*x-p*v,e[n+3]=g*T-d*v-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(a/2),v=d(u/2),x=p(r/2),y=p(a/2),T=p(u/2);switch(f){case"XYZ":this._x=x*g*v+m*y*T,this._y=m*y*v-x*g*T,this._z=m*g*T+x*y*v,this._w=m*g*v-x*y*T;break;case"YXZ":this._x=x*g*v+m*y*T,this._y=m*y*v-x*g*T,this._z=m*g*T-x*y*v,this._w=m*g*v+x*y*T;break;case"ZXY":this._x=x*g*v-m*y*T,this._y=m*y*v+x*g*T,this._z=m*g*T+x*y*v,this._w=m*g*v-x*y*T;break;case"ZYX":this._x=x*g*v-m*y*T,this._y=m*y*v+x*g*T,this._z=m*g*T-x*y*v,this._w=m*g*v+x*y*T;break;case"YZX":this._x=x*g*v+m*y*T,this._y=m*y*v+x*g*T,this._z=m*g*T-x*y*v,this._w=m*g*v-x*y*T;break;case"XZY":this._x=x*g*v-m*y*T,this._y=m*y*v-x*g*T,this._z=m*g*T+x*y*v,this._w=m*g*v+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],g=n[6],v=n[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+a*m-u*p,this._y=a*g+f*p+u*d-r*m,this._z=u*g+f*m+r*p-a*d,this._w=f*g-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),g=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*g,this.y=r+p*g+d*m-u*v,this.z=a+p*v+u*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=mt(this.x,e.x,n.x),this.y=mt(this.y,e.y,n.y),this.z=mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=mt(this.x,e,n),this.y=mt(this.y,e,n),this.z=mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new ne,Yp=new jo;class $o{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ii):ii.fromBufferAttribute(u,f),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),al.subVectors(this.max,Oo),Ps.subVectors(e.a,Oo),bs.subVectors(e.b,Oo),Ls.subVectors(e.c,Oo),dr.subVectors(bs,Ps),hr.subVectors(Ls,bs),zr.subVectors(Ps,Ls);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!bc(n,Ps,bs,Ls,al)||(n=[1,0,0,0,1,0,0,0,1],!bc(n,Ps,bs,Ls,al))?!1:(ll.crossVectors(dr,hr),n=[ll.x,ll.y,ll.z],bc(n,Ps,bs,Ls,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ii=new ne,ol=new $o,Ps=new ne,bs=new ne,Ls=new ne,dr=new ne,hr=new ne,zr=new ne,Oo=new ne,al=new ne,ll=new ne,Hr=new ne;function bc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Hr.fromArray(o,u);const d=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),p=e.dot(Hr),m=n.dot(Hr),g=r.dot(Hr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const Qv=new $o,ko=new ne,Lc=new ne;class id{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Qv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(ko,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Lc)),this.expandByPoint(ko.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new ne,Dc=new ne,ul=new ne,pr=new ne,Uc=new ne,cl=new ne,Ic=new ne;class Jv{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Dc.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Dc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(ul),d=pr.dot(this.direction),p=-pr.dot(ul),m=pr.lengthSq(),g=Math.abs(1-f*f);let v,x,y,T;if(g>0)if(v=f*p-d,x=f*d-p,T=u*g,v>=0)if(x>=-T)if(x<=T){const R=1/g;v*=R,x*=R,y=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-T?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=T?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Dc).addScaledVector(ul,x),y}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,u){Uc.subVectors(n,e),cl.subVectors(r,e),Ic.crossVectors(Uc,cl);let f=this.direction.dot(Ic),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;pr.subVectors(this.origin,e);const p=d*this.direction.dot(cl.crossVectors(pr,cl));if(p<0)return null;const m=d*this.direction.dot(Uc.cross(pr));if(m<0||p+m>f)return null;const g=-d*pr.dot(Ic);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,a,u,f,d,p,m,g,v,x,y,T,R,S){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,g,v,x,y,T,R,S)}set(e,n,r,a,u,f,d,p,m,g,v,x,y,T,R,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=T,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),u=1/Ds.setFromMatrixColumn(e,1).length(),f=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*v,T=d*g,R=d*v;n[0]=p*g,n[4]=-p*v,n[8]=m,n[1]=y+T*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=T+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*g,y=p*v,T=m*g,R=m*v;n[0]=x+R*d,n[4]=T*d-y,n[8]=f*m,n[1]=f*v,n[5]=f*g,n[9]=-d,n[2]=y*d-T,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*g,y=p*v,T=m*g,R=m*v;n[0]=x-R*d,n[4]=-f*v,n[8]=T+y*d,n[1]=y+T*d,n[5]=f*g,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*g,y=f*v,T=d*g,R=d*v;n[0]=p*g,n[4]=T*m-y,n[8]=x*m+R,n[1]=p*v,n[5]=R*m+x,n[9]=y*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,T=d*p,R=d*m;n[0]=p*g,n[4]=R-x*v,n[8]=T*v+y,n[1]=v,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=y*v+T,n[10]=x-R*v}else if(e.order==="XZY"){const x=f*p,y=f*m,T=d*p,R=d*m;n[0]=p*g,n[4]=-v,n[8]=m*g,n[1]=x*v+R,n[5]=f*g,n[9]=y*v-T,n[2]=T*v-y,n[6]=d*g,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),mr.crossVectors(r,On),mr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),mr.crossVectors(r,On)),mr.normalize(),fl.crossVectors(On,mr),a[0]=mr.x,a[4]=fl.x,a[8]=On.x,a[1]=mr.y,a[5]=fl.y,a[9]=On.y,a[2]=mr.z,a[6]=fl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],y=r[13],T=r[2],R=r[6],S=r[10],_=r[14],I=r[3],L=r[7],C=r[11],Y=r[15],k=a[0],N=a[4],B=a[8],P=a[12],w=a[1],H=a[5],oe=a[9],J=a[13],fe=a[2],he=a[6],se=a[10],le=a[14],z=a[3],ae=a[7],re=a[11],U=a[15];return u[0]=f*k+d*w+p*fe+m*z,u[4]=f*N+d*H+p*he+m*ae,u[8]=f*B+d*oe+p*se+m*re,u[12]=f*P+d*J+p*le+m*U,u[1]=g*k+v*w+x*fe+y*z,u[5]=g*N+v*H+x*he+y*ae,u[9]=g*B+v*oe+x*se+y*re,u[13]=g*P+v*J+x*le+y*U,u[2]=T*k+R*w+S*fe+_*z,u[6]=T*N+R*H+S*he+_*ae,u[10]=T*B+R*oe+S*se+_*re,u[14]=T*P+R*J+S*le+_*U,u[3]=I*k+L*w+C*fe+Y*z,u[7]=I*N+L*H+C*he+Y*ae,u[11]=I*B+L*oe+C*se+Y*re,u[15]=I*P+L*J+C*le+Y*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],y=e[14],T=e[3],R=e[7],S=e[11],_=e[15];return T*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*y-r*p*y)+R*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*g-u*p*g)+S*(+n*m*v-n*d*y-u*f*v+r*f*y+u*d*g-r*m*g)+_*(-a*d*g-n*p*v+n*d*x+a*f*v-r*f*x+r*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],y=e[11],T=e[12],R=e[13],S=e[14],_=e[15],I=v*S*m-R*x*m+R*p*y-d*S*y-v*p*_+d*x*_,L=T*x*m-g*S*m-T*p*y+f*S*y+g*p*_-f*x*_,C=g*R*m-T*v*m+T*d*y-f*R*y-g*d*_+f*v*_,Y=T*v*p-g*R*p-T*d*x+f*R*x+g*d*S-f*v*S,k=n*I+r*L+a*C+u*Y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=I*N,e[1]=(R*x*u-v*S*u-R*a*y+r*S*y+v*a*_-r*x*_)*N,e[2]=(d*S*u-R*p*u+R*a*m-r*S*m-d*a*_+r*p*_)*N,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*y-r*p*y)*N,e[4]=L*N,e[5]=(g*S*u-T*x*u+T*a*y-n*S*y-g*a*_+n*x*_)*N,e[6]=(T*p*u-f*S*u-T*a*m+n*S*m+f*a*_-n*p*_)*N,e[7]=(f*x*u-g*p*u+g*a*m-n*x*m-f*a*y+n*p*y)*N,e[8]=C*N,e[9]=(T*v*u-g*R*u-T*r*y+n*R*y+g*r*_-n*v*_)*N,e[10]=(f*R*u-T*d*u+T*r*m-n*R*m-f*r*_+n*d*_)*N,e[11]=(g*d*u-f*v*u-g*r*m+n*v*m+f*r*y-n*d*y)*N,e[12]=Y*N,e[13]=(g*R*a-T*v*a+T*r*x-n*R*x-g*r*S+n*v*S)*N,e[14]=(T*d*a-f*R*a-T*r*p+n*R*p+f*r*S-n*d*S)*N,e[15]=(f*v*a-g*d*a+g*r*p-n*v*p-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,g=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,g*d+r,g*p-a*f,0,m*p-a*d,g*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,g=f+f,v=d+d,x=u*m,y=u*g,T=u*v,R=f*g,S=f*v,_=d*v,I=p*m,L=p*g,C=p*v,Y=r.x,k=r.y,N=r.z;return a[0]=(1-(R+_))*Y,a[1]=(y+C)*Y,a[2]=(T-L)*Y,a[3]=0,a[4]=(y-C)*k,a[5]=(1-(x+_))*k,a[6]=(S+I)*k,a[7]=0,a[8]=(T+L)*N,a[9]=(S-I)*N,a[10]=(1-(x+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ds.set(a[0],a[1],a[2]).length();const f=Ds.set(a[4],a[5],a[6]).length(),d=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,g=1/f,v=1/d;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=g,ri.elements[5]*=g,ri.elements[6]*=g,ri.elements[8]*=v,ri.elements[9]*=v,ri.elements[10]*=v,n.setFromRotationMatrix(ri),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=zi){const p=this.elements,m=2*u/(n-e),g=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let y,T;if(d===zi)y=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===Fl)y=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=zi){const p=this.elements,m=1/(n-e),g=1/(r-a),v=1/(f-u),x=(n+e)*m,y=(r+a)*g;let T,R;if(d===zi)T=(f+u)*v,R=-2*v;else if(d===Fl)T=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=R,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new ne,ri=new qt,e0=new ne(0,0,0),t0=new ne(1,1,1),mr=new ne,fl=new ne,On=new ne,qp=new qt,jp=new jo;class Gi{constructor(e=0,n=0,r=0,a=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],g=a[9],v=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n0=0;const $p=new ne,Us=new jo,Ui=new qt,dl=new ne,Bo=new ne,i0=new ne,r0=new jo,Kp=new ne(1,0,0),Zp=new ne(0,1,0),Qp=new ne(0,0,1),Jp={type:"added"},s0={type:"removed"},Is={type:"childadded",child:null},Nc={type:"childremoved",child:null};class zn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ne,n=new Gi,r=new jo,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new st}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Zp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,n){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Zp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Bo,dl,this.up):Ui.lookAt(dl,Bo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(Ui),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jp),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s0),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jp),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),y=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}zn.DEFAULT_UP=new ne(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ne,Ii=new ne,Fc=new ne,Ni=new ne,Ns=new ne,Fs=new ne,em=new ne,Oc=new ne,kc=new ne,Bc=new ne,zc=new Wt,Hc=new Wt,Vc=new Wt;class li{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Ii.subVectors(r,n),Fc.subVectors(e,n);const f=si.dot(si),d=si.dot(Ii),p=si.dot(Fc),m=Ii.dot(Ii),g=Ii.dot(Fc),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-d*g)*x,T=(f*g-d*p)*x;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ni)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ni.x),p.addScaledVector(f,Ni.y),p.addScaledVector(d,Ni.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return zc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),zc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,r),Vc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(zc,u.x),f.addScaledVector(Hc,u.y),f.addScaledVector(Vc,u.z),f}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Ii.subVectors(e,n),si.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ns.subVectors(a,r),Fs.subVectors(u,r),Oc.subVectors(e,r);const p=Ns.dot(Oc),m=Fs.dot(Oc);if(p<=0&&m<=0)return n.copy(r);kc.subVectors(e,a);const g=Ns.dot(kc),v=Fs.dot(kc);if(g>=0&&v<=g)return n.copy(a);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(Ns,f);Bc.subVectors(e,u);const y=Ns.dot(Bc),T=Fs.dot(Bc);if(T>=0&&y<=T)return n.copy(u);const R=y*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Fs,d);const S=g*T-y*v;if(S<=0&&v-g>=0&&y-T>=0)return em.subVectors(u,a),d=(v-g)/(v-g+(y-T)),n.copy(a).addScaledVector(em,d);const _=1/(S+R+x);return f=R*_,d=x*_,n.copy(r).addScaledVector(Ns,f).addScaledVector(Fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Gc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Hv(e,1),n=mt(n,0,1),r=mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Gc(f,u,e+1/3),this.g=Gc(f,u,e),this.b=Gc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=Qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(mt(mn.r*255,0,255))*65536+Math.round(mt(mn.g*255,0,255))*256+Math.round(mt(mn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,u=mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=jn){Mt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(hl);const r=Ac(gr.h,hl.h,n),a=Ac(gr.s,hl.s,n),u=Ac(gr.l,hl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Ct;Ct.NAMES=Qm;let o0=0;class Bl extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Xs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=uf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lf&&(r.blendSrc=this.blendSrc),this.blendDst!==uf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jm extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new ne,pl=new Pt;class Si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Hp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array),u=Ln(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class eg extends Si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class tg extends Si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Jr extends Si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let a0=0;const qn=new qt,Wc=new zn,Os=new ne,kn=new $o,zo=new $o,nn=new ne;class ns extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jm(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Jr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new id);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(kn.min,zo.min),kn.expandByPoint(nn),nn.addVectors(kn.max,zo.max),kn.expandByPoint(nn)):(kn.expandByPoint(zo.min),kn.expandByPoint(zo.max))}kn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)nn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)nn.fromBufferAttribute(d,m),p&&(Os.fromBufferAttribute(e,m),nn.add(Os)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new ne,p[B]=new ne;const m=new ne,g=new ne,v=new ne,x=new Pt,y=new Pt,T=new Pt,R=new ne,S=new ne;function _(B,P,w){m.fromBufferAttribute(r,B),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,B),y.fromBufferAttribute(u,P),T.fromBufferAttribute(u,w),g.sub(m),v.sub(m),y.sub(x),T.sub(x);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(R.copy(g).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(H),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-T.x).multiplyScalar(H),d[B].add(R),d[P].add(R),d[w].add(R),p[B].add(S),p[P].add(S),p[w].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let B=0,P=I.length;B<P;++B){const w=I[B],H=w.start,oe=w.count;for(let J=H,fe=H+oe;J<fe;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new ne,C=new ne,Y=new ne,k=new ne;function N(B){Y.fromBufferAttribute(a,B),k.copy(Y);const P=d[B];L.copy(P),L.sub(Y.multiplyScalar(Y.dot(P))).normalize(),C.crossVectors(k,P);const H=C.dot(p[B])<0?-1:1;f.setXYZW(B,L.x,L.y,L.z,H)}for(let B=0,P=I.length;B<P;++B){const w=I[B],H=w.start,oe=w.count;for(let J=H,fe=H+oe;J<fe;J+=3)N(e.getX(J+0)),N(e.getX(J+1)),N(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,f=new ne,d=new ne,p=new ne,m=new ne,g=new ne,v=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),R=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,S),g.subVectors(f,u),v.subVectors(a,u),g.cross(v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),d.add(g),p.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,u),v.subVectors(a,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let y=0,T=0;for(let R=0,S=p.length;R<S;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*g;for(let _=0;_<g;_++)x[T++]=m[y++]}return new Si(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ns,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(a[p]=g,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tm=new qt,Vr=new Jv,ml=new id,nm=new ne,gl=new ne,_l=new ne,vl=new ne,Xc=new ne,xl=new ne,im=new ne,Sl=new ne;class xi extends zn{constructor(e=new ns,n=new Jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){xl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(Xc.fromBufferAttribute(v,e),f?xl.addScaledVector(Xc,g):xl.addScaledVector(Xc.sub(n),g))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(u),Vr.copy(e.ray).recast(e.near),!(ml.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(ml,nm)===null||Vr.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(u).invert(),Vr.copy(e.ray).applyMatrix4(tm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,R=x.length;T<R;T++){const S=x[T],_=f[S.materialIndex],I=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=I,Y=L;C<Y;C+=3){const k=d.getX(C),N=d.getX(C+1),B=d.getX(C+2);a=yl(this,_,e,r,m,g,v,k,N,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let S=T,_=R;S<_;S+=3){const I=d.getX(S),L=d.getX(S+1),C=d.getX(S+2);a=yl(this,f,e,r,m,g,v,I,L,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,R=x.length;T<R;T++){const S=x[T],_=f[S.materialIndex],I=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=I,Y=L;C<Y;C+=3){const k=C,N=C+1,B=C+2;a=yl(this,_,e,r,m,g,v,k,N,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let S=T,_=R;S<_;S+=3){const I=S,L=S+1,C=S+2;a=yl(this,f,e,r,m,g,v,I,L,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function l0(o,e,n,r,a,u,f,d){let p;if(e.side===Dn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===Er,d),p===null)return null;Sl.copy(d),Sl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(Sl);return m<n.near||m>n.far?null:{distance:m,point:Sl.clone(),object:o}}function yl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,gl),o.getVertexPosition(p,_l),o.getVertexPosition(m,vl);const g=l0(o,e,n,r,gl,_l,vl,im);if(g){const v=new ne;li.getBarycoord(im,gl,_l,vl,v),a&&(g.uv=li.getInterpolatedAttribute(a,d,p,m,v,new Pt)),u&&(g.uv1=li.getInterpolatedAttribute(u,d,p,m,v,new Pt)),f&&(g.normal=li.getInterpolatedAttribute(f,d,p,m,v,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ne,materialIndex:0};li.getNormal(gl,_l,vl,x.normal),g.face=x,g.barycoord=v}return g}class Ko extends ns{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],v=[];let x=0,y=0;T("z","y","x",-1,-1,r,n,e,f,u,0),T("z","y","x",1,-1,r,n,-e,f,u,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Jr(m,3)),this.setAttribute("normal",new Jr(g,3)),this.setAttribute("uv",new Jr(v,2));function T(R,S,_,I,L,C,Y,k,N,B,P){const w=C/N,H=Y/B,oe=C/2,J=Y/2,fe=k/2,he=N+1,se=B+1;let le=0,z=0;const ae=new ne;for(let re=0;re<se;re++){const U=re*H-J;for(let te=0;te<he;te++){const Ue=te*w-oe;ae[R]=Ue*I,ae[S]=U*L,ae[_]=fe,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[S]=0,ae[_]=k>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(te/N),v.push(1-re/B),le+=1}}for(let re=0;re<B;re++)for(let U=0;U<N;U++){const te=x+U+he*re,Ue=x+U+he*(re+1),K=x+(U+1)+he*(re+1),ue=x+(U+1)+he*re;p.push(te,Ue,ue),p.push(Ue,K,ue),z+=6}d.addGroup(y,z,P),y+=z,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(o){const e={};for(let n=0;n<o.length;n++){const r=eo(o[n]);for(const a in r)e[a]=r[a]}return e}function u0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function ng(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const c0={clone:eo,merge:Mn};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=u0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ig extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new ne,rm=new Pt,sm=new Pt;class $n extends ig{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,rm,sm),n.subVectors(sm,rm)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Bs=1;class h0 extends zn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(ks,Bs,e,n);a.layers=this.layers,this.add(a);const u=new $n(ks,Bs,e,n);u.layers=this.layers,this.add(u);const f=new $n(ks,Bs,e,n);f.layers=this.layers,this.add(f);const d=new $n(ks,Bs,e,n);d.layers=this.layers,this.add(d);const p=new $n(ks,Bs,e,n);p.layers=this.layers,this.add(p);const m=new $n(ks,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(v,x,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class rg extends En{constructor(e,n,r,a,u,f,d,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,r,a,u,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p0 extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new rg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ko(5,5,5),u=new Wi({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:yr});u.uniforms.tEquirect.value=n;const f=new xi(a,u),d=n.minFilter;return n.minFilter===Qr&&(n.minFilter=vi),new h0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class m0 extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yc=new ne,g0=new ne,_0=new st;class qr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Yc.subVectors(r,n).cross(g0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Yc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||_0.getNormalMatrix(e),a=this.coplanarPoint(Yc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new id,Ml=new ne;class sg{constructor(e=new qr,n=new qr,r=new qr,a=new qr,u=new qr,f=new qr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],g=a[5],v=a[6],x=a[7],y=a[8],T=a[9],R=a[10],S=a[11],_=a[12],I=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,S-y,C-_).normalize(),r[1].setComponents(p+u,x+m,S+y,C+_).normalize(),r[2].setComponents(p+f,x+g,S+T,C+I).normalize(),r[3].setComponents(p-f,x-g,S-T,C-I).normalize(),r[4].setComponents(p-d,x-v,S-R,C-L).normalize(),n===zi)r[5].setComponents(p+d,x+v,S+R,C+L).normalize();else if(n===Fl)r[5].setComponents(d,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Ml.x=a.normal.x>0?e.max.x:e.min.x,Ml.y=a.normal.y>0?e.max.y:e.min.y,Ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class El extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class og extends En{constructor(e,n,r,a,u,f,d,p,m,g=Ys){if(g!==Ys&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ys&&(r=es),r===void 0&&g===Qs&&(r=Zs),super(null,a,u,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zo extends ns{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,g=p+1,v=e/d,x=n/p,y=[],T=[],R=[],S=[];for(let _=0;_<g;_++){const I=_*x-f;for(let L=0;L<m;L++){const C=L*v-u;T.push(C,-I,0),R.push(0,0,1),S.push(L/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<d;I++){const L=I+m*_,C=I+m*(_+1),Y=I+1+m*(_+1),k=I+1+m*_;y.push(L,C,k),y.push(C,Y,k)}this.setIndex(y),this.setAttribute("position",new Jr(T,3)),this.setAttribute("normal",new Jr(R,3)),this.setAttribute("uv",new Jr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class v0 extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x0 extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ol={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class S0{constructor(e,n,r){const a=this;let u=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){d++,u===!1&&a.onStart!==void 0&&a.onStart(g,f,d),u=!0},this.itemEnd=function(g){f++,a.onProgress!==void 0&&a.onProgress(g,f,d),f===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=m.length;v<x;v+=2){const y=m[v],T=m[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return T}return null}}}const y0=new S0;class zl{constructor(e){this.manager=e!==void 0?e:y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class M0 extends Error{constructor(e,n){super(e),this.response=n}}class E0 extends zl{constructor(e){super(e)}load(e,n,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=Ol.get(e);if(u!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(u),this.manager.itemEnd(e)},0),u;if(Fi[e]!==void 0){Fi[e].push({onLoad:n,onProgress:r,onError:a});return}Fi[e]=[],Fi[e].push({onLoad:n,onProgress:r,onError:a});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,p=this.responseType;fetch(f).then(m=>{if(m.status===200||m.status===0){if(m.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||m.body===void 0||m.body.getReader===void 0)return m;const g=Fi[e],v=m.body.getReader(),x=m.headers.get("X-File-Size")||m.headers.get("Content-Length"),y=x?parseInt(x):0,T=y!==0;let R=0;const S=new ReadableStream({start(_){I();function I(){v.read().then(({done:L,value:C})=>{if(L)_.close();else{R+=C.byteLength;const Y=new ProgressEvent("progress",{lengthComputable:T,loaded:R,total:y});for(let k=0,N=g.length;k<N;k++){const B=g[k];B.onProgress&&B.onProgress(Y)}_.enqueue(C),I()}},L=>{_.error(L)})}}});return new Response(S)}else throw new M0(`fetch for "${m.url}" responded with ${m.status}: ${m.statusText}`,m)}).then(m=>{switch(p){case"arraybuffer":return m.arrayBuffer();case"blob":return m.blob();case"document":return m.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return m.json();default:if(d===void 0)return m.text();{const v=/charset="?([^;"\s]*)"?/i.exec(d),x=v&&v[1]?v[1].toLowerCase():void 0,y=new TextDecoder(x);return m.arrayBuffer().then(T=>y.decode(T))}}}).then(m=>{Ol.add(e,m);const g=Fi[e];delete Fi[e];for(let v=0,x=g.length;v<x;v++){const y=g[v];y.onLoad&&y.onLoad(m)}}).catch(m=>{const g=Fi[e];if(g===void 0)throw this.manager.itemError(e),m;delete Fi[e];for(let v=0,x=g.length;v<x;v++){const y=g[v];y.onError&&y.onError(m)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class T0 extends zl{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=Ol.get(e);if(f!==void 0)return u.manager.itemStart(e),setTimeout(function(){n&&n(f),u.manager.itemEnd(e)},0),f;const d=Wo("img");function p(){g(),Ol.add(e,this),n&&n(this),u.manager.itemEnd(e)}function m(v){g(),a&&a(v),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class om extends zl{constructor(e){super(e)}load(e,n,r,a){const u=new En,f=new T0(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},r,a),u}}class w0 extends ig{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class A0 extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function am(o,e,n,r){const a=R0(r);switch(n){case zm:return o*e;case Vm:return o*e;case Gm:return o*e*2;case Wm:return o*e/a.components*a.byteLength;case ed:return o*e/a.components*a.byteLength;case Xm:return o*e*2/a.components*a.byteLength;case td:return o*e*2/a.components*a.byteLength;case Hm:return o*e*3/a.components*a.byteLength;case ui:return o*e*4/a.components*a.byteLength;case nd:return o*e*4/a.components*a.byteLength;case Cl:case Pl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bl:case Ll:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mf:case Tf:return Math.max(o,16)*Math.max(e,8)/4;case yf:case Ef:return Math.max(o,8)*Math.max(e,8)/2;case wf:case Af:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Vf:case Gf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ym:case Wf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xf:case Yf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function R0(o){switch(o){case Vi:case Om:return{byteLength:1,components:1};case Go:case km:case Yo:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case es:case Zf:case Bi:return{byteLength:4,components:1};case Bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ag(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function C0(o){const e=new WeakMap;function n(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,g);else{v.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<v.length;y++){const T=v[x],R=v[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,T=v.length;y<T;y++){const R=v[y];o.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Rx=`struct PhysicalMaterial {
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
}`,Cx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#ifdef USE_TRANSMISSION
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
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
}`,NS=`#if DEPTH_PACKING == 3200
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
}`,FS=`#define DISTANCE
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
}`,OS=`#define DISTANCE
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
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
}`,HS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,GS=`uniform vec3 diffuse;
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
}`,WS=`#define LAMBERT
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
}`,XS=`#define LAMBERT
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
}`,YS=`#define MATCAP
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
}`,qS=`#define MATCAP
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
}`,jS=`#define NORMAL
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
}`,$S=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,ZS=`#define PHONG
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
}`,QS=`#define STANDARD
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
}`,JS=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,sy=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:P0,alphahash_pars_fragment:b0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:U0,alphatest_pars_fragment:I0,aomap_fragment:N0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:k0,begin_vertex:B0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:q0,color_fragment:j0,color_pars_fragment:$0,color_pars_vertex:K0,color_vertex:Z0,common:Q0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:ux,envmap_pars_vertex:cx,envmap_physical_pars_fragment:yx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:hx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:_x,lights_lambert_fragment:vx,lights_lambert_pars_fragment:xx,lights_pars_begin:Sx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:bx,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Ix,map_fragment:Nx,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:kx,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Hx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:Yx,normal_fragment_maps:qx,normal_pars_fragment:jx,normal_pars_vertex:$x,normal_vertex:Kx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:oS,dithering_pars_fragment:aS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:uS,shadowmap_pars_fragment:cS,shadowmap_pars_vertex:fS,shadowmap_vertex:dS,shadowmask_pars_fragment:hS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:_S,specularmap_fragment:vS,specularmap_pars_fragment:xS,tonemapping_fragment:SS,tonemapping_pars_fragment:yS,transmission_fragment:MS,transmission_pars_fragment:ES,uv_pars_fragment:TS,uv_pars_vertex:wS,uv_vertex:AS,worldpos_vertex:RS,background_vert:CS,background_frag:PS,backgroundCube_vert:bS,backgroundCube_frag:LS,cube_vert:DS,cube_frag:US,depth_vert:IS,depth_frag:NS,distanceRGBA_vert:FS,distanceRGBA_frag:OS,equirect_vert:kS,equirect_frag:BS,linedashed_vert:zS,linedashed_frag:HS,meshbasic_vert:VS,meshbasic_frag:GS,meshlambert_vert:WS,meshlambert_frag:XS,meshmatcap_vert:YS,meshmatcap_frag:qS,meshnormal_vert:jS,meshnormal_frag:$S,meshphong_vert:KS,meshphong_frag:ZS,meshphysical_vert:QS,meshphysical_frag:JS,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:ry,shadow_frag:sy,sprite_vert:oy,sprite_frag:ay},Ce={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},_i={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};_i.physical={uniforms:Mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Tl={r:0,b:0,g:0},Wr=new Gi,ly=new qt;function uy(o,e,n,r,a,u,f){const d=new Ct(0);let p=u===!0?0:1,m,g,v=null,x=0,y=null;function T(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function R(L){let C=!1;const Y=T(L);Y===null?_(d,p):Y&&Y.isColor&&(_(Y,1),C=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,C){const Y=T(C);Y&&(Y.isCubeTexture||Y.mapping===kl)?(g===void 0&&(g=new xi(new Ko(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:eo(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Wr.copy(C.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=Y,g.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler(Wr)),g.material.toneMapped=Mt.getTransfer(Y.colorSpace)!==Rt,(v!==Y||x!==Y.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=Y,x=Y.version,y=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):Y&&Y.isTexture&&(m===void 0&&(m=new xi(new Zo(2,2),new Wi({name:"BackgroundMaterial",uniforms:eo(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=Y,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(Y.colorSpace)!==Rt,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),m.material.uniforms.uvTransform.value.copy(Y.matrix),(v!==Y||x!==Y.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=Y,x=Y.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,C){L.getRGB(Tl,ng(o)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,C,f)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),p=C,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:R,addToRenderList:S,dispose:I}}function cy(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(w,H,oe,J,fe){let he=!1;const se=v(J,oe,H);u!==se&&(u=se,m(u.object)),he=y(w,J,oe,fe),he&&T(w,J,oe,fe),fe!==null&&e.update(fe,o.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(w,H,oe,J),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function g(w){return o.deleteVertexArray(w)}function v(w,H,oe){const J=oe.wireframe===!0;let fe=r[w.id];fe===void 0&&(fe={},r[w.id]=fe);let he=fe[H.id];he===void 0&&(he={},fe[H.id]=he);let se=he[J];return se===void 0&&(se=x(p()),he[J]=se),se}function x(w){const H=[],oe=[],J=[];for(let fe=0;fe<n;fe++)H[fe]=0,oe[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:J,object:w,attributes:{},index:null}}function y(w,H,oe,J){const fe=u.attributes,he=H.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){const re=fe[z];let U=he[z];if(U===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==J}function T(w,H,oe,J){const fe={},he=H.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){let re=he[z];re===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(re=w.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[z]=U,se++}u.attributes=fe,u.attributesNum=se,u.index=J}function R(){const w=u.newAttributes;for(let H=0,oe=w.length;H<oe;H++)w[H]=0}function S(w){_(w,0)}function _(w,H){const oe=u.newAttributes,J=u.enabledAttributes,fe=u.attributeDivisors;oe[w]=1,J[w]===0&&(o.enableVertexAttribArray(w),J[w]=1),fe[w]!==H&&(o.vertexAttribDivisor(w,H),fe[w]=H)}function I(){const w=u.newAttributes,H=u.enabledAttributes;for(let oe=0,J=H.length;oe<J;oe++)H[oe]!==w[oe]&&(o.disableVertexAttribArray(oe),H[oe]=0)}function L(w,H,oe,J,fe,he,se){se===!0?o.vertexAttribIPointer(w,H,oe,fe,he):o.vertexAttribPointer(w,H,oe,J,fe,he)}function C(w,H,oe,J){R();const fe=J.attributes,he=oe.getAttributes(),se=H.defaultAttributeValues;for(const le in he){const z=he[le];if(z.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),le==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,te=e.get(ae);if(te===void 0)continue;const Ue=te.buffer,K=te.type,ue=te.bytesPerElement,Me=K===o.INT||K===o.UNSIGNED_INT||ae.gpuType===Zf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ie=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)_(z.location+Ze,ve.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)S(z.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<z.locationSize;Ze++)L(z.location+Ze,U/z.locationSize,K,re,Te*ue,(Ie+U/z.locationSize*Ze)*ue,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)_(z.location+ve,ae.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<z.locationSize;ve++)S(z.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let ve=0;ve<z.locationSize;ve++)L(z.location+ve,U/z.locationSize,K,re,U*ue,U/z.locationSize*ve*ue,Me)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(z.location,re);break;case 3:o.vertexAttrib3fv(z.location,re);break;case 4:o.vertexAttrib4fv(z.location,re);break;default:o.vertexAttrib1fv(z.location,re)}}}}I()}function Y(){B();for(const w in r){const H=r[w];for(const oe in H){const J=H[oe];for(const fe in J)g(J[fe].object),delete J[fe];delete H[oe]}delete r[w]}}function k(w){if(r[w.id]===void 0)return;const H=r[w.id];for(const oe in H){const J=H[oe];for(const fe in J)g(J[fe].object),delete J[fe];delete H[oe]}delete r[w.id]}function N(w){for(const H in r){const oe=r[H];if(oe[w.id]===void 0)continue;const J=oe[w.id];for(const fe in J)g(J[fe].object),delete J[fe];delete oe[w.id]}}function B(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:B,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:k,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:S,disableUnusedAttributes:I}}function fy(o,e,n){let r;function a(m){r=m}function u(m,g){o.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,v){v!==0&&(o.drawArraysInstanced(r,m,g,v),n.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let y=0;for(let T=0;T<v;T++)y+=g[T];n.update(y,r,1)}function p(m,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)f(m[T],g[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let T=0;for(let R=0;R<v;R++)T+=g[R]*x[R];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function dy(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ui&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const B=N===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Vi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Bi&&!B)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:Y,maxSamples:k}}function hy(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new qr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||a;return a=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,y){const T=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,_=o.get(v);if(!a||T===null||T.length===0||u&&!S)u?g(null):m();else{const I=u?0:r,L=I*4;let C=_.clippingState||null;p.value=C,C=g(T,x,L,y);for(let Y=0;Y!==L;++Y)C[Y]=n[Y];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,y,T){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=p.value,T!==!0||S===null){const _=y+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,C=y;L!==R;++L,C+=4)f.copy(v[L]).applyMatrix4(I,d),f.normal.toArray(S,C),S[C+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function py(o){let e=new WeakMap;function n(f,d){return d===_f?f.mapping=$s:d===vf&&(f.mapping=Ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===_f||d===vf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new p0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ws=4,lm=[.125,.215,.35,.446,.526,.582],Kr=20,qc=new w0,um=new Ct;let jc=null,$c=0,Kc=0,Zc=!1;const jr=(1+Math.sqrt(5))/2,zs=1/jr,cm=[new ne(-jr,zs,0),new ne(jr,zs,0),new ne(-zs,0,jr),new ne(zs,0,jr),new ne(0,jr,-zs),new ne(0,jr,zs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,$c,Kc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Yo,format:ui,colorSpace:Js,depthBuffer:!1},a=dm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=my(u)),this._blurMaterial=gy(u,e,n)}return a}_compileMaterial(e){const n=new xi(this._lodPlanes[0],e);this._renderer.compile(n,qc)}_sceneToCubeUV(e,n,r,a){const d=new $n(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(um),g.toneMapping=Mr,g.autoClear=!1;const y=new Jm({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),T=new xi(new Ko,y);let R=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,R=!0):(y.color.copy(um),R=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):I===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const L=this._cubeSize;wl(a,I*L,_>2?L:0,L,L),g.setRenderTarget(a),R&&g.render(T,d),g.render(e,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===$s||e.mapping===Ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new xi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;wl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,qc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=cm[(a-u-1)%cm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new xi(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Kr-1),R=u/T,S=isFinite(u)?1+Math.floor(g*R):Kr;S>Kr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Kr}`);const _=[];let I=0;for(let N=0;N<Kr;++N){const B=N/R,P=Math.exp(-B*B/2);_.push(P),N===0?I+=P:N<S&&(I+=2*P)}for(let N=0;N<_.length;N++)_[N]=_[N]/I;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const C=this._sizeLods[a],Y=3*C*(a>L-Ws?a-L+Ws:0),k=4*(this._cubeSize-C);wl(n,Y,k,3*C,2*C),p.setRenderTarget(n),p.render(v,qc)}}function my(o){const e=[],n=[],r=[];let a=o;const u=o-Ws+1+lm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ws?p=lm[f-o+Ws-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,T=6,R=3,S=2,_=1,I=new Float32Array(R*T*y),L=new Float32Array(S*T*y),C=new Float32Array(_*T*y);for(let k=0;k<y;k++){const N=k%3*2/3-1,B=k>2?0:-1,P=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];I.set(P,R*T*k),L.set(x,S*T*k);const w=[k,k,k,k,k,k];C.set(w,_*T*k)}const Y=new ns;Y.setAttribute("position",new Si(I,R)),Y.setAttribute("uv",new Si(L,S)),Y.setAttribute("faceIndex",new Si(C,_)),e.push(Y),a>Ws&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function dm(o,e,n){const r=new ts(o,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function gy(o,e,n){const r=new Float32Array(Kr),a=new ne(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rd(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function hm(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function pm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function _y(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===_f||p===vf,g=p===$s||p===Ks;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new fm(o)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&a(y)?(n===null&&(n=new fm(o)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function vy(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Gs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function xy(o,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,T=v.attributes.position;let R=0;if(y!==null){const I=y.array;R=y.version;for(let L=0,C=I.length;L<C;L+=3){const Y=I[L+0],k=I[L+1],N=I[L+2];x.push(Y,k,k,N,N,Y)}}else if(T!==void 0){const I=T.array;R=T.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const Y=L+0,k=L+1,N=L+2;x.push(Y,k,k,N,N,Y)}}else return;const S=new(jm(x)?tg:eg)(x,1);S.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function Sy(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,T){T!==0&&(o.drawElementsInstanced(r,y,u,x*f,T),n.update(y,r,T))}function g(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let S=0;for(let _=0;_<T;_++)S+=y[_];n.update(S,r,1)}function v(x,y,T,R){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/f,y[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,T);let _=0;for(let I=0;I<T;I++)_+=y[I]*R[I];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function yy(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function My(o,e,n){const r=new WeakMap,a=new Wt;function u(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),S===!0&&(C=3);let Y=d.attributes.position.count*C,k=1;Y>e.maxTextureSize&&(k=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const N=new Float32Array(Y*k*4*v),B=new Km(N,Y,k,v);B.type=Bi,B.needsUpdate=!0;const P=C*4;for(let H=0;H<v;H++){const oe=_[H],J=I[H],fe=L[H],he=Y*k*4*H;for(let se=0;se<oe.count;se++){const le=se*P;T===!0&&(a.fromBufferAttribute(oe,se),N[he+le+0]=a.x,N[he+le+1]=a.y,N[he+le+2]=a.z,N[he+le+3]=0),R===!0&&(a.fromBufferAttribute(J,se),N[he+le+4]=a.x,N[he+le+5]=a.y,N[he+le+6]=a.z,N[he+le+7]=0),S===!0&&(a.fromBufferAttribute(fe,se),N[he+le+8]=a.x,N[he+le+9]=a.y,N[he+le+10]=a.z,N[he+le+11]=fe.itemSize===4?a.w:1)}}x={count:v,texture:B,size:new Pt(Y,k)},r.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function Ey(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const lg=new En,mm=new og(1,1),ug=new Km,cg=new Zv,fg=new rg,gm=[],_m=[],vm=new Float32Array(16),xm=new Float32Array(9),Sm=new Float32Array(4);function no(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=gm[a];if(u===void 0&&(u=new Float32Array(a),gm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Zt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Qt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Hl(o,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function Ty(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function wy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2fv(this.addr,e),Qt(n,e)}}function Ay(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;o.uniform3fv(this.addr,e),Qt(n,e)}}function Ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4fv(this.addr,e),Qt(n,e)}}function Cy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Sm.set(r),o.uniformMatrix2fv(this.addr,!1,Sm),Qt(n,r)}}function Py(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;xm.set(r),o.uniformMatrix3fv(this.addr,!1,xm),Qt(n,r)}}function by(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;vm.set(r),o.uniformMatrix4fv(this.addr,!1,vm),Qt(n,r)}}function Ly(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function Dy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2iv(this.addr,e),Qt(n,e)}}function Uy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3iv(this.addr,e),Qt(n,e)}}function Iy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4iv(this.addr,e),Qt(n,e)}}function Ny(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function Fy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2uiv(this.addr,e),Qt(n,e)}}function Oy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3uiv(this.addr,e),Qt(n,e)}}function ky(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4uiv(this.addr,e),Qt(n,e)}}function By(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(mm.compareFunction=qm,u=mm):u=lg,n.setTexture2D(e||u,a)}function zy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||cg,a)}function Hy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||fg,a)}function Vy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ug,a)}function Gy(o){switch(o){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return by;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Uy;case 35669:case 35673:return Iy;case 5125:return Ny;case 36294:return Fy;case 36295:return Oy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}function Wy(o,e){o.uniform1fv(this.addr,e)}function Xy(o,e){const n=no(e,this.size,2);o.uniform2fv(this.addr,n)}function Yy(o,e){const n=no(e,this.size,3);o.uniform3fv(this.addr,n)}function qy(o,e){const n=no(e,this.size,4);o.uniform4fv(this.addr,n)}function jy(o,e){const n=no(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function $y(o,e){const n=no(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Ky(o,e){const n=no(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Zy(o,e){o.uniform1iv(this.addr,e)}function Qy(o,e){o.uniform2iv(this.addr,e)}function Jy(o,e){o.uniform3iv(this.addr,e)}function eM(o,e){o.uniform4iv(this.addr,e)}function tM(o,e){o.uniform1uiv(this.addr,e)}function nM(o,e){o.uniform2uiv(this.addr,e)}function iM(o,e){o.uniform3uiv(this.addr,e)}function rM(o,e){o.uniform4uiv(this.addr,e)}function sM(o,e,n){const r=this.cache,a=e.length,u=Hl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||lg,u[f])}function oM(o,e,n){const r=this.cache,a=e.length,u=Hl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||cg,u[f])}function aM(o,e,n){const r=this.cache,a=e.length,u=Hl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||fg,u[f])}function lM(o,e,n){const r=this.cache,a=e.length,u=Hl(n,a);Zt(r,u)||(o.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||ug,u[f])}function uM(o){switch(o){case 5126:return Wy;case 35664:return Xy;case 35665:return Yy;case 35666:return qy;case 35674:return jy;case 35675:return $y;case 35676:return Ky;case 5124:case 35670:return Zy;case 35667:case 35671:return Qy;case 35668:case 35672:return Jy;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class cM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Gy(n.type)}}class fM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uM(n.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function ym(o,e){o.seq.push(e),o.map[e.id]=e}function hM(o,e,n){const r=o.name,a=r.length;for(Qc.lastIndex=0;;){const u=Qc.exec(r),f=Qc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){ym(n,m===void 0?new cM(d,o,e):new fM(d,o,e));break}else{let v=n.map[d];v===void 0&&(v=new dM(d),ym(n,v)),n=v}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);hM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Mm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const pM=37297;let mM=0;function gM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Em=new st;function _M(o){Mt._getMatrix(Em,Mt.workingColorSpace,o);const e=`mat3( ${Em.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case Nl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Tm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+gM(o.getShaderSource(e),f)}else return a}function vM(o,e){const n=_M(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xM(o,e){let n;switch(e){case Mv:n="Linear";break;case Ev:n="Reinhard";break;case Tv:n="Cineon";break;case wv:n="ACESFilmic";break;case Rv:n="AgX";break;case Cv:n="Neutral";break;case Av:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new ne;function SM(){Mt.getLuminanceCoefficients(Al);const o=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function MM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Vo(o){return o!==""}function wm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(o){return o.replace(TM,AM)}const wM=new Map;function AM(o,e){let n=ot[e];if(n===void 0){const r=wM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jf(n)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(o){return o.replace(RM,CM)}function CM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Cm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function PM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Im?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function bM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Nm:e="ENVMAP_BLENDING_MULTIPLY";break;case Sv:e="ENVMAP_BLENDING_MIX";break;case yv:e="ENVMAP_BLENDING_ADD";break}return e}function UM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function IM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=PM(n),m=bM(n),g=LM(n),v=DM(n),x=UM(n),y=yM(n),T=MM(u),R=a.createProgram();let S,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Vo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(S=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ot.tonemapping_pars_fragment:"",n.toneMapping!==Mr?xM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,vM("linearToOutputTexel",n.outputColorSpace),SM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),f=jf(f),f=wm(f,n),f=Am(f,n),d=jf(d),d=wm(d,n),d=Am(d,n),f=Rm(f),d=Rm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+S+f,C=I+_+d,Y=Mm(a,a.VERTEX_SHADER,L),k=Mm(a,a.FRAGMENT_SHADER,C);a.attachShader(R,Y),a.attachShader(R,k),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(H){if(o.debug.checkShaderErrors){const oe=a.getProgramInfoLog(R).trim(),J=a.getShaderInfoLog(Y).trim(),fe=a.getShaderInfoLog(k).trim();let he=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,Y,k);else{const le=Tm(a,Y,"vertex"),z=Tm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+le+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(J===""||fe==="")&&(se=!1);se&&(H.diagnostics={runnable:he,programLog:oe,vertexShader:{log:J,prefix:S},fragmentShader:{log:fe,prefix:_}})}a.deleteShader(Y),a.deleteShader(k),B=new Ul(a,R),P=EM(a,R)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(R,pM)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=k,this}let NM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new OM(e),n.set(e,r)),r}}class OM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function kM(o,e,n,r,a,u,f){const d=new Zm,p=new FM,m=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,w,H,oe,J){const fe=oe.fog,he=J.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),z=le&&le.mapping===kl?le.image.height:null,ae=T[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=re!==void 0?re.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Ue,K,ue,Me;if(ae){const _t=_i[ae];Ue=_t.vertexShader,K=_t.fragmentShader}else Ue=P.vertexShader,K=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Me=p.getFragmentShaderID(P);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ie=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,wt=!!P.map,ht=!!P.matcap,bt=!!le,O=!!P.aoMap,gn=!!P.lightMap,ft=!!P.bumpMap,lt=!!P.normalMap,Ye=!!P.displacementMap,Tt=!!P.emissiveMap,We=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,$=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ce=P.sheen>0,Ve=P.transmission>0,we=E&&!!P.anisotropyMap,Ne=$&&!!P.clearcoatMap,at=$&&!!P.clearcoatNormalMap,ye=$&&!!P.clearcoatRoughnessMap,ke=ge&&!!P.iridescenceMap,je=ge&&!!P.iridescenceThicknessMap,Qe=ce&&!!P.sheenColorMap,Be=ce&&!!P.sheenRoughnessMap,ut=!!P.specularMap,nt=!!P.specularColorMap,Et=!!P.specularIntensityMap,W=Ve&&!!P.transmissionMap,Ae=Ve&&!!P.thicknessMap,ie=!!P.gradientMap,de=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Dt=Mr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=o.toneMapping);const jt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:K,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&J.instanceColor!==null,instancingMorph:Ie&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Js,alphaToCoverage:!!P.alphaToCoverage,map:wt,matcap:ht,envMap:bt,envMapMode:bt&&le.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:gn,bumpMap:ft,normalMap:lt,displacementMap:x&&Ye,emissiveMap:Tt,normalMapObjectSpace:lt&&P.normalMapType===Uv,normalMapTangentSpace:lt&&P.normalMapType===Dv,metalnessMap:We,roughnessMap:b,anisotropy:E,anisotropyMap:we,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:je,sheen:ce,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Et,transmission:Ve,transmissionMap:W,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Xs&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:wt&&R(P.map.channel),aoMapUv:O&&R(P.aoMap.channel),lightMapUv:gn&&R(P.lightMap.channel),bumpMapUv:ft&&R(P.bumpMap.channel),normalMapUv:lt&&R(P.normalMap.channel),displacementMapUv:Ye&&R(P.displacementMap.channel),emissiveMapUv:Tt&&R(P.emissiveMap.channel),metalnessMapUv:We&&R(P.metalnessMap.channel),roughnessMapUv:b&&R(P.roughnessMap.channel),anisotropyMapUv:we&&R(P.anisotropyMap.channel),clearcoatMapUv:Ne&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:at&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:je&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(P.sheenRoughnessMap.channel),specularMapUv:ut&&R(P.specularMap.channel),specularColorMapUv:nt&&R(P.specularColorMap.channel),specularIntensityMapUv:Et&&R(P.specularIntensityMap.channel),transmissionMapUv:W&&R(P.transmissionMap.channel),thicknessMapUv:Ae&&R(P.thicknessMap.channel),alphaMapUv:de&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(lt||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(wt||de),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Dt,decodeVideoTexture:wt&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ki,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function _(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)w.push(H),w.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(I(w,P),L(w,P),w.push(o.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function I(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function L(P,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const w=T[P.type];let H;if(w){const oe=_i[w];H=c0.clone(oe.uniforms)}else H=P.uniforms;return H}function Y(P,w){let H;for(let oe=0,J=g.length;oe<J;oe++){const fe=g[oe];if(fe.cacheKey===w){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new IM(o,w,P,u),g.push(H)),H}function k(P){if(--P.usedTimes===0){const w=g.indexOf(P);g[w]=g[g.length-1],g.pop(),P.destroy()}}function N(P){p.remove(P)}function B(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:Y,releaseProgram:k,releaseShaderCache:N,programs:g,dispose:B}}function BM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function zM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Pm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function bm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,y,T,R,S){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:T,renderOrder:v.renderOrder,z:R,group:S},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=R,_.group=S),e++,_}function d(v,x,y,T,R,S){const _=f(v,x,y,T,R,S);y.transmission>0?r.push(_):y.transparent===!0?a.push(_):n.push(_)}function p(v,x,y,T,R,S){const _=f(v,x,y,T,R,S);y.transmission>0?r.unshift(_):y.transparent===!0?a.unshift(_):n.unshift(_)}function m(v,x){n.length>1&&n.sort(v||zM),r.length>1&&r.sort(x||Pm),a.length>1&&a.sort(x||Pm)}function g(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:g,sort:m}}function HM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new bm,o.set(r,[f])):a>=u.length?(f=new bm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function VM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new Ct};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=n,n}}}function GM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let WM=0;function XM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function YM(o){const e=new VM,n=GM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new qt,f=new qt;function d(m){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,T=0,R=0,S=0,_=0,I=0,L=0,C=0,Y=0,k=0,N=0;m.sort(XM);for(let P=0,w=m.length;P<w;P++){const H=m[P],oe=H.color,J=H.intensity,fe=H.distance,he=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=oe.r*J,v+=oe.g*J,x+=oe.b*J;else if(H.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(H.sh.coefficients[se],J);N++}else if(H.isDirectionalLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,z=n.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=H.shadow.matrix,I++}r.directional[y]=se,y++}else if(H.isSpotLight){const se=e.get(H);se.position.setFromMatrixPosition(H.matrixWorld),se.color.copy(oe).multiplyScalar(J),se.distance=fe,se.coneCos=Math.cos(H.angle),se.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),se.decay=H.decay,r.spot[R]=se;const le=H.shadow;if(H.map&&(r.spotLightMap[Y]=H.map,Y++,le.updateMatrices(H),H.castShadow&&k++),r.spotLightMatrix[R]=le.matrix,H.castShadow){const z=n.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,r.spotShadow[R]=z,r.spotShadowMap[R]=he,C++}R++}else if(H.isRectAreaLight){const se=e.get(H);se.color.copy(oe).multiplyScalar(J),se.halfWidth.set(H.width*.5,0,0),se.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=se,S++}else if(H.isPointLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),se.distance=H.distance,se.decay=H.decay,H.castShadow){const le=H.shadow,z=n.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=H.shadow.matrix,L++}r.point[T]=se,T++}else if(H.isHemisphereLight){const se=e.get(H);se.skyColor.copy(H.color).multiplyScalar(J),se.groundColor.copy(H.groundColor).multiplyScalar(J),r.hemi[_]=se,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==y||B.pointLength!==T||B.spotLength!==R||B.rectAreaLength!==S||B.hemiLength!==_||B.numDirectionalShadows!==I||B.numPointShadows!==L||B.numSpotShadows!==C||B.numSpotMaps!==Y||B.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+Y-k,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=N,B.directionalLength=y,B.pointLength=T,B.spotLength=R,B.rectAreaLength=S,B.hemiLength=_,B.numDirectionalShadows=I,B.numPointShadows=L,B.numSpotShadows=C,B.numSpotMaps=Y,B.numLightProbes=N,r.version=WM++)}function p(m,g){let v=0,x=0,y=0,T=0,R=0;const S=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const L=m[_];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),v++}else if(L.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),R++}}}return{setup:d,setupView:p,state:r}}function Lm(o){const e=new YM(o),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function qM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Lm(o),e.set(a,[d])):u>=f.length?(d=new Lm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`;function KM(o,e,n){let r=new sg;const a=new Pt,u=new Pt,f=new Wt,d=new v0({depthPacking:Lv}),p=new x0,m={},g=n.maxTextureSize,v={[Er]:Dn,[Dn]:Er,[ki]:ki},x=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:jM,fragmentShader:$M}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new ns;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new xi(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Im;let _=this.type;this.render=function(k,N,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const P=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(yr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const J=_!==Oi&&this.type===Oi,fe=_===Oi&&this.type!==Oi;for(let he=0,se=k.length;he<se;he++){const le=k[he],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),u.copy(z.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(u.x=Math.floor(g/ae.x),a.x=u.x*ae.x,z.mapSize.x=u.x),a.y>g&&(u.y=Math.floor(g/ae.y),a.y=u.y*ae.y,z.mapSize.y=u.y)),z.map===null||J===!0||fe===!0){const U=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};z.map!==null&&z.map.dispose(),z.map=new ts(a.x,a.y,U),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const re=z.getViewportCount();for(let U=0;U<re;U++){const te=z.getViewport(U);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),oe.viewport(f),z.updateMatrices(le,U),r=z.getFrustum(),C(N,B,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&I(z,B),z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(P,w,H)};function I(k,N){const B=e.update(R);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ts(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(N,null,B,x,R,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(N,null,B,y,R,null)}function L(k,N,B,P){let w=null;const H=B.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(H!==void 0)w=H;else if(w=B.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=w.uuid,J=N.uuid;let fe=m[oe];fe===void 0&&(fe={},m[oe]=fe);let he=fe[J];he===void 0&&(he=w.clone(),fe[J]=he,N.addEventListener("dispose",Y)),w=he}if(w.visible=N.visible,w.wireframe=N.wireframe,P===Oi?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:v[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const oe=o.properties.get(w);oe.light=B}return w}function C(k,N,B,P,w){if(k.visible===!1)return;if(k.layers.test(N.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===Oi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,k.matrixWorld);const J=e.update(k),fe=k.material;if(Array.isArray(fe)){const he=J.groups;for(let se=0,le=he.length;se<le;se++){const z=he[se],ae=fe[z.materialIndex];if(ae&&ae.visible){const re=L(k,ae,P,w);k.onBeforeShadow(o,k,N,B,J,re,z),o.renderBufferDirect(B,null,J,re,k,z),k.onAfterShadow(o,k,N,B,J,re,z)}}}else if(fe.visible){const he=L(k,fe,P,w);k.onBeforeShadow(o,k,N,B,J,he,null),o.renderBufferDirect(B,null,J,he,k,null),k.onAfterShadow(o,k,N,B,J,he,null)}}const oe=k.children;for(let J=0,fe=oe.length;J<fe;J++)C(oe[J],N,B,P,w)}function Y(k){k.target.removeEventListener("dispose",Y);for(const B in m){const P=m[B],w=k.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const ZM={[cf]:ff,[df]:mf,[hf]:gf,[js]:pf,[ff]:cf,[mf]:df,[gf]:hf,[pf]:js};function QM(o,e){function n(){let W=!1;const Ae=new Wt;let ie=null;const de=new Wt(0,0,0,0);return{setMask:function(be){ie!==be&&!W&&(o.colorMask(be,be,be,be),ie=be)},setLocked:function(be){W=be},setClear:function(be,Pe,it,Dt,jt){jt===!0&&(be*=Dt,Pe*=Dt,it*=Dt),Ae.set(be,Pe,it,Dt),de.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Dt),de.copy(Ae))},reset:function(){W=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,ie=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!W&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=ZM[Pe]),de!==Pe){switch(Pe){case cf:o.depthFunc(o.NEVER);break;case ff:o.depthFunc(o.ALWAYS);break;case df:o.depthFunc(o.LESS);break;case js:o.depthFunc(o.LEQUAL);break;case hf:o.depthFunc(o.EQUAL);break;case pf:o.depthFunc(o.GEQUAL);break;case mf:o.depthFunc(o.GREATER);break;case gf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){W=!1,ie=null,de=null,be=null,Ae=!1}}}function a(){let W=!1,Ae=null,ie=null,de=null,be=null,Pe=null,it=null,Dt=null,jt=null;return{setTest:function(_t){W||(_t?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(_t){Ae!==_t&&!W&&(o.stencilMask(_t),Ae=_t)},setFunc:function(_t,Tn,_n){(ie!==_t||de!==Tn||be!==_n)&&(o.stencilFunc(_t,Tn,_n),ie=_t,de=Tn,be=_n)},setOp:function(_t,Tn,_n){(Pe!==_t||it!==Tn||Dt!==_n)&&(o.stencilOp(_t,Tn,_n),Pe=_t,it=Tn,Dt=_n)},setLocked:function(_t){W=_t},setClear:function(_t){jt!==_t&&(o.clearStencil(_t),jt=_t)},reset:function(){W=!1,Ae=null,ie=null,de=null,be=null,Pe=null,it=null,Dt=null,jt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,y=[],T=null,R=!1,S=null,_=null,I=null,L=null,C=null,Y=null,k=null,N=new Ct(0,0,0),B=0,P=!1,w=null,H=null,oe=null,J=null,fe=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),se=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),se=le>=2);let ae=null,re={};const U=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),Ue=new Wt().fromArray(U),K=new Wt().fromArray(te);function ue(W,Ae,ie,de){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(W,Pe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const Me={};Me[o.TEXTURE_2D]=ue(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=ue(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=ue(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=ue(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(js),ft(!1),lt(Fp),ve(o.CULL_FACE),O(yr);function ve(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Te(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Ie(W,Ae){return v[W]!==Ae?(o.bindFramebuffer(W,Ae),v[W]=Ae,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ae),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(W,Ae){let ie=y,de=!1;if(W){ie=x.get(Ae),ie===void 0&&(ie=[],x.set(Ae,ie));const be=W.textures;if(ie.length!==be.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=be.length,de=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,de=!0);de&&o.drawBuffers(ie)}function wt(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const ht={[$r]:o.FUNC_ADD,[iv]:o.FUNC_SUBTRACT,[rv]:o.FUNC_REVERSE_SUBTRACT};ht[sv]=o.MIN,ht[ov]=o.MAX;const bt={[av]:o.ZERO,[lv]:o.ONE,[uv]:o.SRC_COLOR,[lf]:o.SRC_ALPHA,[mv]:o.SRC_ALPHA_SATURATE,[hv]:o.DST_COLOR,[fv]:o.DST_ALPHA,[cv]:o.ONE_MINUS_SRC_COLOR,[uf]:o.ONE_MINUS_SRC_ALPHA,[pv]:o.ONE_MINUS_DST_COLOR,[dv]:o.ONE_MINUS_DST_ALPHA,[gv]:o.CONSTANT_COLOR,[_v]:o.ONE_MINUS_CONSTANT_COLOR,[vv]:o.CONSTANT_ALPHA,[xv]:o.ONE_MINUS_CONSTANT_ALPHA};function O(W,Ae,ie,de,be,Pe,it,Dt,jt,_t){if(W===yr){R===!0&&(Te(o.BLEND),R=!1);return}if(R===!1&&(ve(o.BLEND),R=!0),W!==nv){if(W!==S||_t!==P){if((_!==$r||C!==$r)&&(o.blendEquation(o.FUNC_ADD),_=$r,C=$r),_t)switch(W){case Xs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Op:o.blendFunc(o.ONE,o.ONE);break;case kp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Bp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Xs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Op:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case kp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Bp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,L=null,Y=null,k=null,N.set(0,0,0),B=0,S=W,P=_t}return}be=be||Ae,Pe=Pe||ie,it=it||de,(Ae!==_||be!==C)&&(o.blendEquationSeparate(ht[Ae],ht[be]),_=Ae,C=be),(ie!==I||de!==L||Pe!==Y||it!==k)&&(o.blendFuncSeparate(bt[ie],bt[de],bt[Pe],bt[it]),I=ie,L=de,Y=Pe,k=it),(Dt.equals(N)===!1||jt!==B)&&(o.blendColor(Dt.r,Dt.g,Dt.b,jt),N.copy(Dt),B=jt),S=W,P=!1}function gn(W,Ae){W.side===ki?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=W.side===Dn;Ae&&(ie=!ie),ft(ie),W.blending===Xs&&W.transparent===!1?O(yr):O(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const de=W.stencilWrite;d.setTest(de),de&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Tt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(W){w!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),w=W)}function lt(W){W!==J_?(ve(o.CULL_FACE),W!==H&&(W===Fp?o.cullFace(o.BACK):W===ev?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),H=W}function Ye(W){W!==oe&&(se&&o.lineWidth(W),oe=W)}function Tt(W,Ae,ie){W?(ve(o.POLYGON_OFFSET_FILL),(J!==Ae||fe!==ie)&&(o.polygonOffset(Ae,ie),J=Ae,fe=ie)):Te(o.POLYGON_OFFSET_FILL)}function We(W){W?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function b(W){W===void 0&&(W=o.TEXTURE0+he-1),ae!==W&&(o.activeTexture(W),ae=W)}function E(W,Ae,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==W||de.texture!==Ae)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(W,Ae||Me[W]),de.type=W,de.texture=Ae)}function $(){const W=re[ae];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(W){Ue.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Ue.copy(W))}function Be(W){K.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),K.copy(W))}function ut(W,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let de=ie.get(W);de===void 0&&(de=o.getUniformBlockIndex(Ae,W.name),ie.set(W,de))}function nt(W,Ae){const de=m.get(Ae).get(W);p.get(Ae)!==de&&(o.uniformBlockBinding(Ae,de,W.__bindingPointIndex),p.set(Ae,de))}function Et(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ae=null,re={},v={},x=new WeakMap,y=[],T=null,R=!1,S=null,_=null,I=null,L=null,C=null,Y=null,k=null,N=new Ct(0,0,0),B=0,P=!1,w=null,H=null,oe=null,J=null,fe=null,Ue.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:wt,setBlending:O,setMaterial:gn,setFlipSided:ft,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:We,activeTexture:b,bindTexture:E,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:je,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Qe,viewport:Be,reset:Et}}function JM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return y?new OffscreenCanvas(b,E):Wo("canvas")}function R(b,E,$){let pe=1;const ge=We(b);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);v===void 0&&(v=T(ce,Ve));const we=E?T(ce,Ve):v;return we.width=ce,we.height=Ve,we.getContext("2d").drawImage(b,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ve+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function S(b){return b.generateMipmaps}function _(b){o.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(b,E,$,pe,ge=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=E;if(E===o.RED&&($===o.FLOAT&&(ce=o.R32F),$===o.HALF_FLOAT&&(ce=o.R16F),$===o.UNSIGNED_BYTE&&(ce=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.R8UI),$===o.UNSIGNED_SHORT&&(ce=o.R16UI),$===o.UNSIGNED_INT&&(ce=o.R32UI),$===o.BYTE&&(ce=o.R8I),$===o.SHORT&&(ce=o.R16I),$===o.INT&&(ce=o.R32I)),E===o.RG&&($===o.FLOAT&&(ce=o.RG32F),$===o.HALF_FLOAT&&(ce=o.RG16F),$===o.UNSIGNED_BYTE&&(ce=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.RG8UI),$===o.UNSIGNED_SHORT&&(ce=o.RG16UI),$===o.UNSIGNED_INT&&(ce=o.RG32UI),$===o.BYTE&&(ce=o.RG8I),$===o.SHORT&&(ce=o.RG16I),$===o.INT&&(ce=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),$===o.UNSIGNED_INT&&(ce=o.RGB32UI),$===o.BYTE&&(ce=o.RGB8I),$===o.SHORT&&(ce=o.RGB16I),$===o.INT&&(ce=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),$===o.UNSIGNED_INT&&(ce=o.RGBA32UI),$===o.BYTE&&(ce=o.RGBA8I),$===o.SHORT&&(ce=o.RGBA16I),$===o.INT&&(ce=o.RGBA32I)),E===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),E===o.RGBA){const Ve=ge?Nl:Mt.getTransfer(pe);$===o.FLOAT&&(ce=o.RGBA32F),$===o.HALF_FLOAT&&(ce=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ce=Ve===Rt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(b,E){let $;return b?E===null||E===es||E===Zs?$=o.DEPTH24_STENCIL8:E===Bi?$=o.DEPTH32F_STENCIL8:E===Go&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===es||E===Zs?$=o.DEPTH_COMPONENT24:E===Bi?$=o.DEPTH_COMPONENT32F:E===Go&&($=o.DEPTH_COMPONENT16),$}function Y(b,E){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==vi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function k(b){const E=b.target;E.removeEventListener("dispose",k),B(E),E.isVideoTexture&&g.delete(E)}function N(b){const E=b.target;E.removeEventListener("dispose",N),w(E)}function B(b){const E=r.get(b);if(E.__webglInit===void 0)return;const $=b.source,pe=x.get($);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete($)}r.remove(b)}function P(b){const E=r.get(b);o.deleteTexture(E.__webglTexture);const $=b.source,pe=x.get($);delete pe[E.__cacheKey],f.memory.textures--}function w(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=b.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ce=r.get($[pe]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove($[pe])}r.remove(b)}let H=0;function oe(){H=0}function J(){const b=H;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),H+=1,b}function fe(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function he(b,E){const $=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,b,E);return}}n.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function se(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function le(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,E);return}n.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function z(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){ue($,b,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const ae={[xf]:o.REPEAT,[Zr]:o.CLAMP_TO_EDGE,[Sf]:o.MIRRORED_REPEAT},re={[ci]:o.NEAREST,[Pv]:o.NEAREST_MIPMAP_NEAREST,[sl]:o.NEAREST_MIPMAP_LINEAR,[vi]:o.LINEAR,[Tc]:o.LINEAR_MIPMAP_NEAREST,[Qr]:o.LINEAR_MIPMAP_LINEAR},U={[Iv]:o.NEVER,[zv]:o.ALWAYS,[Nv]:o.LESS,[qm]:o.LEQUAL,[Fv]:o.EQUAL,[Bv]:o.GEQUAL,[Ov]:o.GREATER,[kv]:o.NOTEQUAL};function te(b,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vi||E.magFilter===Tc||E.magFilter===sl||E.magFilter===Qr||E.minFilter===vi||E.minFilter===Tc||E.minFilter===sl||E.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,ae[E.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,ae[E.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,ae[E.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,re[E.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==sl&&E.minFilter!==Qr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(b,E){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",k));const pe=E.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ce=fe(E);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ge[ce].usedTimes++;const Ve=ge[b.__cacheKey];Ve!==void 0&&(ge[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(E)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return $}function K(b,E,$){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ue(b,E),ce=E.source;n.bindTexture(pe,b.__webglTexture,o.TEXTURE0+$);const Ve=r.get(ce);if(ce.version!==Ve.__version||ge===!0){n.activeTexture(o.TEXTURE0+$);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===Sr?null:Mt.getPrimaries(E.colorSpace),at=E.colorSpace===Sr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ye=R(E.image,!1,a.maxTextureSize);ye=Tt(E,ye);const ke=u.convert(E.format,E.colorSpace),je=u.convert(E.type);let Qe=L(E.internalFormat,ke,je,E.colorSpace,E.isVideoTexture);te(pe,E);let Be;const ut=E.mipmaps,nt=E.isVideoTexture!==!0,Et=Ve.__version===void 0||ge===!0,W=ce.dataReady,Ae=Y(E,ye);if(E.isDepthTexture)Qe=C(E.format===Qs,E.type),Et&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Qe,ye.width,ye.height):n.texImage2D(o.TEXTURE_2D,0,Qe,ye.width,ye.height,0,ke,je,null));else if(E.isDataTexture)if(ut.length>0){nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ut[0].width,ut[0].height);for(let ie=0,de=ut.length;ie<de;ie++)Be=ut[ie],nt?W&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,ke,je,Be.data);E.generateMipmaps=!1}else nt?(Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ye.width,ye.height),W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ye.width,ye.height,ke,je,ye.data)):n.texImage2D(o.TEXTURE_2D,0,Qe,ye.width,ye.height,0,ke,je,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Qe,ut[0].width,ut[0].height,ye.depth);for(let ie=0,de=ut.length;ie<de;ie++)if(Be=ut[ie],E.format!==ui)if(ke!==null)if(nt){if(W)if(E.layerUpdates.size>0){const be=am(Be.width,Be.height,E.format,E.type);for(const Pe of E.layerUpdates){const it=Be.data.subarray(Pe*be/Be.data.BYTES_PER_ELEMENT,(Pe+1)*be/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,Be.width,Be.height,1,ke,it)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,ye.depth,ke,Be.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Qe,Be.width,Be.height,ye.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,ye.depth,ke,je,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ie,Qe,Be.width,Be.height,ye.depth,0,ke,je,Be.data)}else{nt&&Et&&n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ut[0].width,ut[0].height);for(let ie=0,de=ut.length;ie<de;ie++)Be=ut[ie],E.format!==ui?ke!==null?nt?W&&n.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,je,Be.data):n.texImage2D(o.TEXTURE_2D,ie,Qe,Be.width,Be.height,0,ke,je,Be.data)}else if(E.isDataArrayTexture)if(nt){if(Et&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Qe,ye.width,ye.height,ye.depth),W)if(E.layerUpdates.size>0){const ie=am(ye.width,ye.height,E.format,E.type);for(const de of E.layerUpdates){const be=ye.data.subarray(de*ie/ye.data.BYTES_PER_ELEMENT,(de+1)*ie/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,ke,je,be)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ke,je,ye.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,ke,je,ye.data);else if(E.isData3DTexture)nt?(Et&&n.texStorage3D(o.TEXTURE_3D,Ae,Qe,ye.width,ye.height,ye.depth),W&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ke,je,ye.data)):n.texImage3D(o.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,ke,je,ye.data);else if(E.isFramebufferTexture){if(Et)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ye.width,ye.height);else{let ie=ye.width,de=ye.height;for(let be=0;be<Ae;be++)n.texImage2D(o.TEXTURE_2D,be,Qe,ie,de,0,ke,je,null),ie>>=1,de>>=1}}else if(ut.length>0){if(nt&&Et){const ie=We(ut[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}for(let ie=0,de=ut.length;ie<de;ie++)Be=ut[ie],nt?W&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke,je,Be):n.texImage2D(o.TEXTURE_2D,ie,Qe,ke,je,Be);E.generateMipmaps=!1}else if(nt){if(Et){const ie=We(ye);n.texStorage2D(o.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,je,ye)}else n.texImage2D(o.TEXTURE_2D,0,Qe,ke,je,ye);S(E)&&_(pe),Ve.__version=ce.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ue(b,E,$){if(E.image.length!==6)return;const pe=Ue(b,E),ge=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+$);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){n.activeTexture(o.TEXTURE0+$);const Ve=Mt.getPrimaries(Mt.workingColorSpace),we=E.colorSpace===Sr?null:Mt.getPrimaries(E.colorSpace),Ne=E.colorSpace===Sr||Ve===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!at&&!ye?ke[de]=R(E.image[de],!0,a.maxCubemapSize):ke[de]=ye?E.image[de].image:E.image[de],ke[de]=Tt(E,ke[de]);const je=ke[0],Qe=u.convert(E.format,E.colorSpace),Be=u.convert(E.type),ut=L(E.internalFormat,Qe,Be,E.colorSpace),nt=E.isVideoTexture!==!0,Et=ce.__version===void 0||pe===!0,W=ge.dataReady;let Ae=Y(E,je);te(o.TEXTURE_CUBE_MAP,E);let ie;if(at){nt&&Et&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,je.width,je.height);for(let de=0;de<6;de++){ie=ke[de].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];E.format!==ui?Qe!==null?nt?W&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Be,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ut,Pe.width,Pe.height,0,Qe,Be,Pe.data)}}}else{if(ie=E.mipmaps,nt&&Et){ie.length>0&&Ae++;const de=We(ke[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ut,de.width,de.height)}for(let de=0;de<6;de++)if(ye){nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Qe,Be,ke[de].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,ke[de].width,ke[de].height,0,Qe,Be,ke[de].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[de].image;nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Qe,Be,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,it.width,it.height,0,Qe,Be,it.data)}}else{nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,Be,ke[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Qe,Be,ke[de]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Qe,Be,Pe.image[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ut,Qe,Be,Pe.image[de])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),ce.__version=ge.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Me(b,E,$,pe,ge,ce){const Ve=u.convert($.format,$.colorSpace),we=u.convert($.type),Ne=L($.internalFormat,Ve,we,$.colorSpace),at=r.get(E),ye=r.get($);if(ye.__renderTarget=E,!at.__hasExternalTextures){const ke=Math.max(1,E.width>>ce),je=Math.max(1,E.height>>ce);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Ne,ke,je,E.depth,0,Ve,we,null):n.texImage2D(ge,ce,Ne,ke,je,0,Ve,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,ft(E)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,ye.__webglTexture,ce),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(b,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,b),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=C(E.stencilBuffer,ge),Ve=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=ft(E);lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ce,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ce,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ce,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,b)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Ve=u.convert(ce.format,ce.colorSpace),we=u.convert(ce.type),Ne=L(ce.internalFormat,Ve,we,ce.colorSpace),at=ft(E);$&&lt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Ne,E.width,E.height):lt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,Ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ge=pe.__webglTexture,ce=ft(E);if(E.depthTexture.format===Ys)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Qs)lt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const E=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,b)}else if($){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(b,E,$){const pe=r.get(b);E!==void 0&&Me(pe.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ie(b)}function wt(b){const E=b.texture,$=r.get(b),pe=r.get(E);b.addEventListener("dispose",N);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,f.memory.textures++),ce){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)$.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else $.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)$.__webglFramebuffer[we]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let we=0,Ne=ge.length;we<Ne;we++){const at=r.get(ge[we]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),f.memory.textures++)}if(b.samples>0&&lt(b)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];$.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const at=u.convert(Ne.format,Ne.colorSpace),ye=u.convert(Ne.type),ke=L(Ne.internalFormat,at,ye,Ne.colorSpace,b.isXRRenderTarget===!0),je=ft(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,ke,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,$.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),te(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Me($.__webglFramebuffer[we][Ne],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Me($.__webglFramebuffer[we],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let we=0,Ne=ge.length;we<Ne;we++){const at=ge[we],ye=r.get(at);n.bindTexture(o.TEXTURE_2D,ye.__webglTexture),te(o.TEXTURE_2D,at),Me($.__webglFramebuffer,b,at,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(at)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),te(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Me($.__webglFramebuffer[Ne],b,E,o.COLOR_ATTACHMENT0,we,Ne);else Me($.__webglFramebuffer,b,E,o.COLOR_ATTACHMENT0,we,0);S(E)&&_(we),n.unbindTexture()}b.depthBuffer&&Ie(b)}function ht(b){const E=b.textures;for(let $=0,pe=E.length;$<pe;$++){const ge=E[$];if(S(ge)){const ce=I(b),Ve=r.get(ge).__webglTexture;n.bindTexture(ce,Ve),_(ce),n.unbindTexture()}}}const bt=[],O=[];function gn(b){if(b.samples>0){if(lt(b)===!1){const E=b.textures,$=b.width,pe=b.height;let ge=o.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=r.get(b),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,at,0)}o.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,o.NEAREST),p===!0&&(bt.length=0,O.length=0,bt.push(o.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(ce),O.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,O)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,at,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ft(b){return Math.min(a.maxSamples,b.samples)}function lt(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(b){const E=f.render.frame;g.get(b)!==E&&(g.set(b,E),b.update())}function Tt(b,E){const $=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Js&&$!==Sr&&(Mt.getTransfer($)===Rt?(pe!==ui||ge!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=lt}function eE(o,e){function n(r,a=Sr){let u;const f=Mt.getTransfer(a);if(r===Vi)return o.UNSIGNED_BYTE;if(r===Qf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Jf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Bm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Om)return o.BYTE;if(r===km)return o.SHORT;if(r===Go)return o.UNSIGNED_SHORT;if(r===Zf)return o.INT;if(r===es)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===Yo)return o.HALF_FLOAT;if(r===zm)return o.ALPHA;if(r===Hm)return o.RGB;if(r===ui)return o.RGBA;if(r===Vm)return o.LUMINANCE;if(r===Gm)return o.LUMINANCE_ALPHA;if(r===Ys)return o.DEPTH_COMPONENT;if(r===Qs)return o.DEPTH_STENCIL;if(r===Wm)return o.RED;if(r===ed)return o.RED_INTEGER;if(r===Xm)return o.RG;if(r===td)return o.RG_INTEGER;if(r===nd)return o.RGBA_INTEGER;if(r===Cl||r===Pl||r===bl||r===Ll)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Cl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Cl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===Mf||r===Ef||r===Tf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===yf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ef)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wf||r===Af||r===Rf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===wf||r===Af)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===If||r===Nf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Hf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ff)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Of)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl||r===Vf||r===Gf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Dl)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ym||r===Wf||r===Xf||r===Yf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Dl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const tE={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,r),_=this._getHandJoint(m,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,T=.005;m.inputState.pinching&&x>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new En,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Wi({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new Zo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends to{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,y=null,T=null;const R=new rE,S=n.getContextAttributes();let _=null,I=null;const L=[],C=[],Y=new Pt;let k=null;const N=new $n;N.viewport=new Wt;const B=new $n;B.viewport=new Wt;const P=[N,B],w=new A0;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=L[K];return ue===void 0&&(ue=new Jc,L[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=L[K];return ue===void 0&&(ue=new Jc,L[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=L[K];return ue===void 0&&(ue=new Jc,L[K]=ue),ue.getHandSpace()};function J(K){const ue=C.indexOf(K.inputSource);if(ue===-1)return;const Me=L[ue];Me!==void 0&&(Me.update(K.inputSource,K.frame,m||f),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let K=0;K<L.length;K++){const ue=C[K];ue!==null&&(C[K]=null,L[K].disconnect(ue))}H=null,oe=null,R.reset(),e.setRenderTarget(_),y=null,x=null,v=null,a=null,I=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new ts(y.framebufferWidth,y.framebufferHeight,{format:ui,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Me=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=S.stencil?Qs:Ys,Me=S.stencil?Zs:es);const Te={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Te),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new ts(x.textureWidth,x.textureHeight,{format:ui,type:Vi,depthTexture:new og(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(K){for(let ue=0;ue<K.removed.length;ue++){const Me=K.removed[ue],ve=C.indexOf(Me);ve>=0&&(C[ve]=null,L[ve].disconnect(Me))}for(let ue=0;ue<K.added.length;ue++){const Me=K.added[ue];let ve=C.indexOf(Me);if(ve===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=C.length){C.push(Me),ve=Ie;break}else if(C[Ie]===null){C[Ie]=Me,ve=Ie;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Me)}}const se=new ne,le=new ne;function z(K,ue,Me){se.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(le),Te=ue.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),wt=Te[14]/(Te[10]+1),ht=(Te[9]+1)/Te[5],bt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],gn=(Ie[8]+1)/Ie[0],ft=Ze*O,lt=Ze*gn,Ye=ve/(-O+gn),Tt=Ye*-O;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Ze+Ye,b=wt+Ye,E=ft-Tt,$=lt+(ve-Tt),pe=ht*wt/b*We,ge=bt*wt/b*We;K.projectionMatrix.makePerspective(E,$,pe,ge,We,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,Me=K.far;R.texture!==null&&(R.depthNear>0&&(ue=R.depthNear),R.depthFar>0&&(Me=R.depthFar)),w.near=B.near=N.near=ue,w.far=B.far=N.far=Me,(H!==w.near||oe!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,oe=w.far),N.layers.mask=K.layers.mask|2,B.layers.mask=K.layers.mask|4,w.layers.mask=N.layers.mask|B.layers.mask;const ve=K.parent,Te=w.cameras;ae(w,ve);for(let Ie=0;Ie<Te.length;Ie++)ae(Te[Ie],ve);Te.length===2?z(w,N,B):w.projectionMatrix.copy(N.projectionMatrix),re(K,w,ve)};function re(K,ue,Me){Me===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=qf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let U=null;function te(K,ue){if(g=ue.getViewerPose(m||f),T=ue,g!==null){const Me=g.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ve=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Ie=0;Ie<Me.length;Ie++){const Ze=Me[Ie];let wt=null;if(y!==null)wt=y.getViewport(Ze);else{const bt=v.getViewSubImage(x,Ze);wt=bt.viewport,Ie===0&&(e.setRenderTargetTextures(I,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(I))}let ht=P[Ie];ht===void 0&&(ht=new $n,ht.layers.enable(Ie),ht.viewport=new Wt,P[Ie]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(wt.x,wt.y,wt.width,wt.height),Ie===0&&(w.matrix.copy(ht.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(ht)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=v.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&R.init(e,Ie,a.renderState)}}for(let Me=0;Me<L.length;Me++){const ve=C[Me],Te=L[Me];ve!==null&&Te!==void 0&&Te.update(ve,ue,m||f)}U&&U(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Ue=new ag;Ue.setAnimationLoop(te),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}const Xr=new Gi,oE=new qt;function aE(o,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,ng(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,I,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,C)):_.isMeshMatcapMaterial?(u(S,_),T(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),R(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,I,L):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Dn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Dn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),L=I.envMap,C=I.envMapRotation;L&&(S.envMap.value=L,Xr.copy(C),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),S.envMapRotation.value.setFromMatrix4(oE.makeRotationFromEuler(Xr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,I,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=L*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function lE(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,L){const C=L.program;r.uniformBlockBinding(I,C)}function m(I,L){let C=a[I.id];C===void 0&&(T(I),C=g(I),a[I.id]=C,I.addEventListener("dispose",S));const Y=L.program;r.updateUBOMapping(I,Y);const k=e.render.frame;u[I.id]!==k&&(x(I),u[I.id]=k)}function g(I){const L=v();I.__bindingPointIndex=L;const C=o.createBuffer(),Y=I.__size,k=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,Y,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function v(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=a[I.id],C=I.uniforms,Y=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let k=0,N=C.length;k<N;k++){const B=Array.isArray(C[k])?C[k]:[C[k]];for(let P=0,w=B.length;P<w;P++){const H=B[P];if(y(H,k,P,Y)===!0){const oe=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let he=0;he<J.length;he++){const se=J[he],le=R(se);typeof se=="number"||typeof se=="boolean"?(H.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+fe,H.__data)):se.isMatrix3?(H.__data[0]=se.elements[0],H.__data[1]=se.elements[1],H.__data[2]=se.elements[2],H.__data[3]=0,H.__data[4]=se.elements[3],H.__data[5]=se.elements[4],H.__data[6]=se.elements[5],H.__data[7]=0,H.__data[8]=se.elements[6],H.__data[9]=se.elements[7],H.__data[10]=se.elements[8],H.__data[11]=0):(se.toArray(H.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,L,C,Y){const k=I.value,N=L+"_"+C;if(Y[N]===void 0)return typeof k=="number"||typeof k=="boolean"?Y[N]=k:Y[N]=k.clone(),!0;{const B=Y[N];if(typeof k=="number"||typeof k=="boolean"){if(B!==k)return Y[N]=k,!0}else if(B.equals(k)===!1)return B.copy(k),!0}return!1}function T(I){const L=I.uniforms;let C=0;const Y=16;for(let N=0,B=L.length;N<B;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let w=0,H=P.length;w<H;w++){const oe=P[w],J=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,he=J.length;fe<he;fe++){const se=J[fe],le=R(se),z=C%Y,ae=z%le.boundary,re=z+ae;C+=ae,re!==0&&Y-re<le.storage&&(C+=Y-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const k=C%Y;return k>0&&(C+=Y-k),I.__size=C,I.__cache={},this}function R(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),o.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function _(){for(const I in a)o.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}class uE{constructor(e={}){const{canvas:n=Vv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const T=new Uint32Array(4),R=new Int32Array(4);let S=null,_=null;const I=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Mr,this.toneMappingExposure=1;const C=this;let Y=!1,k=0,N=0,B=null,P=-1,w=null;const H=new Wt,oe=new Wt;let J=null;const fe=new Ct(0);let he=0,se=n.width,le=n.height,z=1,ae=null,re=null;const U=new Wt(0,0,se,le),te=new Wt(0,0,se,le);let Ue=!1;const K=new sg;let ue=!1,Me=!1;const ve=new qt,Te=new qt,Ie=new ne,Ze=new Wt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function bt(){return B===null?z:1}let O=r;function gn(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const X="webgl2";if(O=gn(X,A),O===null)throw gn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,lt,Ye,Tt,We,b,E,$,pe,ge,ce,Ve,we,Ne,at,ye,ke,je,Qe,Be,ut,nt,Et,W;function Ae(){ft=new vy(O),ft.init(),nt=new eE(O,ft),lt=new dy(O,ft,e,nt),Ye=new QM(O,ft),lt.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Tt=new yy(O),We=new BM,b=new JM(O,ft,Ye,We,lt,nt,Tt),E=new py(C),$=new _y(C),pe=new C0(O),Et=new cy(O,pe),ge=new xy(O,pe,Tt,Et),ce=new Ey(O,ge,pe,Tt),Qe=new My(O,lt,b),ye=new hy(We),Ve=new kM(C,E,$,ft,lt,Et,ye),we=new aE(C,We),Ne=new HM,at=new qM(ft),je=new uy(C,E,$,Ye,ce,y,p),ke=new KM(C,ce,lt),W=new lE(O,Tt,lt,Ye),Be=new fy(O,ft,Tt),ut=new Sy(O,ft,Tt),Tt.programs=Ve.programs,C.capabilities=lt,C.extensions=ft,C.properties=We,C.renderLists=Ne,C.shadowMap=ke,C.state=Ye,C.info=Tt}Ae();const ie=new sE(C,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(se,le,!1))},this.getSize=function(A){return A.set(se,le)},this.setSize=function(A,X,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,le=X,n.width=Math.floor(A*z),n.height=Math.floor(X*z),Q===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*z,le*z).floor()},this.setDrawingBufferSize=function(A,X,Q){se=A,le=X,z=Q,n.width=Math.floor(A*Q),n.height=Math.floor(X*Q),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,X,Q,ee){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,Q,ee),Ye.viewport(H.copy(U).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,X,Q,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,X,Q,ee),Ye.scissor(oe.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ye.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(A=!0,X=!0,Q=!0){let ee=0;if(A){let V=!1;if(B!==null){const Se=B.texture.format;V=Se===nd||Se===td||Se===ed}if(V){const Se=B.texture.type,Re=Se===Vi||Se===es||Se===Go||Se===Zs||Se===Qf||Se===Jf,De=je.getClearColor(),Fe=je.getClearAlpha(),Je=De.r,et=De.g,Xe=De.b;Re?(T[0]=Je,T[1]=et,T[2]=Xe,T[3]=Fe,O.clearBufferuiv(O.COLOR,0,T)):(R[0]=Je,R[1]=et,R[2]=Xe,R[3]=Fe,O.clearBufferiv(O.COLOR,0,R))}else ee|=O.COLOR_BUFFER_BIT}X&&(ee|=O.DEPTH_BUFFER_BIT),Q&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),je.dispose(),Ne.dispose(),at.dispose(),We.dispose(),E.dispose(),$.dispose(),ce.dispose(),Et.dispose(),W.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",is),ie.removeEventListener("sessionend",Xi),yi.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=Tt.autoReset,X=ke.enabled,Q=ke.autoUpdate,ee=ke.needsUpdate,V=ke.type;Ae(),Tt.autoReset=A,ke.enabled=X,ke.autoUpdate=Q,ke.needsUpdate=ee,ke.type=V}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){const X=A.target;X.removeEventListener("dispose",it),Dt(X)}function Dt(A){jt(A),We.remove(A)}function jt(A){const X=We.get(A).programs;X!==void 0&&(X.forEach(function(Q){Ve.releaseProgram(Q)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,Q,ee,V,Se){X===null&&(X=wt);const Re=V.isMesh&&V.matrixWorld.determinant()<0,De=ea(A,X,Q,ee,V);Ye.setMaterial(ee,Re);let Fe=Q.index,Je=1;if(ee.wireframe===!0){if(Fe=ge.getWireframeAttribute(Q),Fe===void 0)return;Je=2}const et=Q.drawRange,Xe=Q.attributes.position;let rt=et.start*Je,xt=(et.start+et.count)*Je;Se!==null&&(rt=Math.max(rt,Se.start*Je),xt=Math.min(xt,(Se.start+Se.count)*Je)),Fe!==null?(rt=Math.max(rt,0),xt=Math.min(xt,Fe.count)):Xe!=null&&(rt=Math.max(rt,0),xt=Math.min(xt,Xe.count));const St=xt-rt;if(St<0||St===1/0)return;Et.setup(V,ee,De,Q,Fe);let Nt,gt=Be;if(Fe!==null&&(Nt=pe.get(Fe),gt=ut,gt.setIndex(Nt)),V.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*bt()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(V.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*bt()),V.isLineSegments?gt.setMode(O.LINES):V.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else V.isPoints?gt.setMode(O.POINTS):V.isSprite&&gt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)gt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qe=V._multiDrawStarts,zt=V._multiDrawCounts,pt=V._multiDrawCount,rn=Fe?pe.get(Fe).bytesPerElement:1,Kn=We.get(ee).currentProgram.getUniforms();for(let vn=0;vn<pt;vn++)Kn.setValue(O,"_gl_DrawID",vn),gt.render(qe[vn]/rn,zt[vn])}else if(V.isInstancedMesh)gt.renderInstances(rt,St,V.count);else if(Q.isInstancedBufferGeometry){const qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,zt=Math.min(Q.instanceCount,qe);gt.renderInstances(rt,St,zt)}else gt.render(rt,St)};function _t(A,X,Q){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,rs(A,X,Q),A.side=Er,A.needsUpdate=!0,rs(A,X,Q),A.side=ki):rs(A,X,Q)}this.compile=function(A,X,Q=null){Q===null&&(Q=A),_=at.get(Q),_.init(X),L.push(_),Q.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),A!==Q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights();const ee=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const De=Se[Re];_t(De,Q,V),ee.add(De)}else _t(Se,Q,V),ee.add(Se)}),L.pop(),_=null,ee},this.compileAsync=function(A,X,Q=null){const ee=this.compile(A,X,Q);return new Promise(V=>{function Se(){if(ee.forEach(function(Re){We.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){V(A);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tn=null;function _n(A){Tn&&Tn(A)}function is(){yi.stop()}function Xi(){yi.start()}const yi=new ag;yi.setAnimationLoop(_n),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){Tn=A,ie.setAnimationLoop(A),A===null?yi.stop():yi.start()},ie.addEventListener("sessionstart",is),ie.addEventListener("sessionend",Xi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,B),_=at.get(A,L.length),_.init(X),L.push(_),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Me),S=Ne.get(A,I.length),S.init(),I.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Mi(Se,X,-1/0,C.sortObjects)}Mi(A,X,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ht&&je.addToRenderList(S,A),this.info.render.frame++,ue===!0&&ye.beginShadows();const Q=_.state.shadowsArray;ke.render(Q,A,X),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,V=S.transmissive;if(_.setupLights(),X.isArrayCamera){const Se=X.cameras;if(V.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const Fe=Se[Re];wr(ee,V,A,Fe)}ht&&je.render(A);for(let Re=0,De=Se.length;Re<De;Re++){const Fe=Se[Re];Tr(S,A,Fe,Fe.viewport)}}else V.length>0&&wr(ee,V,A,X),ht&&je.render(A),Tr(S,A,X);B!==null&&(b.updateMultisampleRenderTarget(B),b.updateRenderTargetMipmap(B)),A.isScene===!0&&A.onAfterRender(C,A,X),Et.resetDefaultState(),P=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],ue===!0&&ye.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Mi(A,X,Q,ee){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){ee&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=ce.update(A),De=A.material;De.visible&&S.push(A,Re,De,Q,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Re=ce.update(A),De=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Fe=Re.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],rt=De[Xe.materialIndex];rt&&rt.visible&&S.push(A,Re,rt,Q,Ze.z,Xe)}}else De.visible&&S.push(A,Re,De,Q,Ze.z,null)}}const Se=A.children;for(let Re=0,De=Se.length;Re<De;Re++)Mi(Se[Re],X,Q,ee)}function Tr(A,X,Q,ee){const V=A.opaque,Se=A.transmissive,Re=A.transparent;_.setupLightsView(Q),ue===!0&&ye.setGlobalState(C.clippingPlanes,Q),ee&&Ye.viewport(H.copy(ee)),V.length>0&&Yi(V,X,Q),Se.length>0&&Yi(Se,X,Q),Re.length>0&&Yi(Re,X,Q),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function wr(A,X,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ee.id]===void 0&&(_.state.transmissionRenderTarget[ee.id]=new ts(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Yo:Vi,minFilter:Qr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[ee.id],Re=ee.viewport||H;Se.setSize(Re.z,Re.w);const De=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(fe),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ht&&je.render(Q);const Fe=C.toneMapping;C.toneMapping=Mr;const Je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),_.setupLightsView(ee),ue===!0&&ye.setGlobalState(C.clippingPlanes,ee),Yi(A,Q,ee),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,rt=X.length;Xe<rt;Xe++){const xt=X[Xe],St=xt.object,Nt=xt.geometry,gt=xt.material,qe=xt.group;if(gt.side===ki&&St.layers.test(ee.layers)){const zt=gt.side;gt.side=Dn,gt.needsUpdate=!0,Qo(St,Q,ee,Nt,gt,qe),gt.side=zt,gt.needsUpdate=!0,et=!0}}et===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}C.setRenderTarget(De),C.setClearColor(fe,he),Je!==void 0&&(ee.viewport=Je),C.toneMapping=Fe}function Yi(A,X,Q){const ee=X.isScene===!0?X.overrideMaterial:null;for(let V=0,Se=A.length;V<Se;V++){const Re=A[V],De=Re.object,Fe=Re.geometry,Je=ee===null?Re.material:ee,et=Re.group;De.layers.test(Q.layers)&&Qo(De,X,Q,Fe,Je,et)}}function Qo(A,X,Q,ee,V,Se){A.onBeforeRender(C,X,Q,ee,V,Se),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(C,X,Q,ee,A,Se),V.transparent===!0&&V.side===ki&&V.forceSinglePass===!1?(V.side=Dn,V.needsUpdate=!0,C.renderBufferDirect(Q,X,ee,V,A,Se),V.side=Er,V.needsUpdate=!0,C.renderBufferDirect(Q,X,ee,V,A,Se),V.side=ki):C.renderBufferDirect(Q,X,ee,V,A,Se),A.onAfterRender(C,X,Q,ee,V,Se)}function rs(A,X,Q){X.isScene!==!0&&(X=wt);const ee=We.get(A),V=_.state.lights,Se=_.state.shadowsArray,Re=V.state.version,De=Ve.getParameters(A,V.state,Se,X,Q),Fe=Ve.getProgramCacheKey(De);let Je=ee.programs;ee.environment=A.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(A.isMeshStandardMaterial?$:E).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",it),Je=new Map,ee.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Re)return fi(A,De),et}else De.uniforms=Ve.getUniforms(A),A.onBeforeCompile(De,C),et=Ve.acquireProgram(De,Fe),Je.set(Fe,et),ee.uniforms=De.uniforms;const Xe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=ye.uniform),fi(A,De),ee.needsLights=Vl(A),ee.lightsStateVersion=Re,ee.needsLights&&(Xe.ambientLightColor.value=V.state.ambient,Xe.lightProbe.value=V.state.probe,Xe.directionalLights.value=V.state.directional,Xe.directionalLightShadows.value=V.state.directionalShadow,Xe.spotLights.value=V.state.spot,Xe.spotLightShadows.value=V.state.spotShadow,Xe.rectAreaLights.value=V.state.rectArea,Xe.ltc_1.value=V.state.rectAreaLTC1,Xe.ltc_2.value=V.state.rectAreaLTC2,Xe.pointLights.value=V.state.point,Xe.pointLightShadows.value=V.state.pointShadow,Xe.hemisphereLights.value=V.state.hemi,Xe.directionalShadowMap.value=V.state.directionalShadowMap,Xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xe.spotShadowMap.value=V.state.spotShadowMap,Xe.spotLightMatrix.value=V.state.spotLightMatrix,Xe.spotLightMap.value=V.state.spotLightMap,Xe.pointShadowMap.value=V.state.pointShadowMap,Xe.pointShadowMatrix.value=V.state.pointShadowMatrix),ee.currentProgram=et,ee.uniformsList=null,et}function Jo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Ul.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function fi(A,X){const Q=We.get(A);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function ea(A,X,Q,ee,V){X.isScene!==!0&&(X=wt),b.resetTextureUnits();const Se=X.fog,Re=ee.isMeshStandardMaterial?X.environment:null,De=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Js,Fe=(ee.isMeshStandardMaterial?$:E).get(ee.envMap||Re),Je=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,et=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!Q.morphAttributes.position,rt=!!Q.morphAttributes.normal,xt=!!Q.morphAttributes.color;let St=Mr;ee.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(St=C.toneMapping);const Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,qe=We.get(ee),zt=_.state.lights;if(ue===!0&&(Me===!0||A!==w)){const Vt=A===w&&ee.id===P;ye.setState(ee,A,Vt)}let pt=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==De||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==Fe||ee.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ye.numPlanes||qe.numIntersection!==ye.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==et||qe.morphTargets!==Xe||qe.morphNormals!==rt||qe.morphColors!==xt||qe.toneMapping!==St||qe.morphTargetsCount!==gt)&&(pt=!0):(pt=!0,qe.__version=ee.version);let rn=qe.currentProgram;pt===!0&&(rn=rs(ee,X,V));let Kn=!1,vn=!1,Ar=!1;const At=rn.getUniforms(),xn=qe.uniforms;if(Ye.useProgram(rn.program)&&(Kn=!0,vn=!0,Ar=!0),ee.id!==P&&(P=ee.id,vn=!0),Kn||w!==A){Ye.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),Wv(ve),Xv(ve),At.setValue(O,"projectionMatrix",ve)):At.setValue(O,"projectionMatrix",A.projectionMatrix),At.setValue(O,"viewMatrix",A.matrixWorldInverse);const un=At.map.cameraPosition;un!==void 0&&un.setValue(O,Ie.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&At.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,vn=!0,Ar=!0)}if(V.isSkinnedMesh){At.setOptional(O,V,"bindMatrix"),At.setOptional(O,V,"bindMatrixInverse");const Vt=V.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),At.setValue(O,"boneTexture",Vt.boneTexture,b))}V.isBatchedMesh&&(At.setOptional(O,V,"batchingTexture"),At.setValue(O,"batchingTexture",V._matricesTexture,b),At.setOptional(O,V,"batchingIdTexture"),At.setValue(O,"batchingIdTexture",V._indirectTexture,b),At.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&At.setValue(O,"batchingColorTexture",V._colorsTexture,b));const ln=Q.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qe.update(V,Q,rn),(vn||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,At.setValue(O,"receiveShadow",V.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(xn.envMap.value=Fe,xn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(xn.envMapIntensity.value=X.environmentIntensity),vn&&(At.setValue(O,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&ta(xn,Ar),Se&&ee.fog===!0&&we.refreshFogUniforms(xn,Se),we.refreshMaterialUniforms(xn,ee,z,le,_.state.transmissionRenderTarget[A.id]),Ul.upload(O,Jo(qe),xn,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ul.upload(O,Jo(qe),xn,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(O,"center",V.center),At.setValue(O,"modelViewMatrix",V.modelViewMatrix),At.setValue(O,"normalMatrix",V.normalMatrix),At.setValue(O,"modelMatrix",V.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Vt=ee.uniformsGroups;for(let un=0,Rr=Vt.length;un<Rr;un++){const dt=Vt[un];W.update(dt,rn),W.bind(dt,rn)}}return rn}function ta(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Vl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,X,Q){We.get(A.texture).__webglTexture=X,We.get(A.depthTexture).__webglTexture=Q;const ee=We.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const Q=We.get(A);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,Q=0){B=A,k=X,N=Q;let ee=!0,V=null,Se=!1,Re=!1;if(A){const Fe=We.get(A);if(Fe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Fe.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Fe.__hasExternalTextures)b.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);const et=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[X])?V=et[X][Q]:V=et[X],Se=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?V=We.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?V=et[Q]:V=et,H.copy(A.viewport),oe.copy(A.scissor),J=A.scissorTest}else H.copy(U).multiplyScalar(z).floor(),oe.copy(te).multiplyScalar(z).floor(),J=Ue;if(Ye.bindFramebuffer(O.FRAMEBUFFER,V)&&ee&&Ye.drawBuffers(A,V),Ye.viewport(H),Ye.scissor(oe),Ye.setScissorTest(J),Se){const Fe=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,Q)}else if(Re){const Fe=We.get(A.texture),Je=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,Q||0,Je)}P=-1},this.readRenderTargetPixels=function(A,X,Q,ee,V,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Ye.bindFramebuffer(O.FRAMEBUFFER,De);try{const Fe=A.texture,Je=Fe.format,et=Fe.type;if(!lt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ee&&Q>=0&&Q<=A.height-V&&O.readPixels(X,Q,ee,V,nt.convert(Je),nt.convert(et),Se)}finally{const Fe=B!==null?We.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,X,Q,ee,V,Se,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Fe=A.texture,Je=Fe.format,et=Fe.type;if(!lt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ee&&Q>=0&&Q<=A.height-V){Ye.bindFramebuffer(O.FRAMEBUFFER,De);const Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(X,Q,ee,V,nt.convert(Je),nt.convert(et),0);const rt=B!==null?We.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,rt);const xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Gv(O,xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(Xe),O.deleteSync(xt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,Q=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-Q),V=Math.floor(A.image.width*ee),Se=Math.floor(A.image.height*ee),Re=X!==null?X.x:0,De=X!==null?X.y:0;b.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Re,De,V,Se),Ye.unbindTexture()};const na=O.createFramebuffer(),ia=O.createFramebuffer();this.copyTextureToTexture=function(A,X,Q=null,ee=null,V=0,Se=null){A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],X=arguments[2],Se=arguments[3]||0,Q=null),Se===null&&(V!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=V,V=0):Se=0);let Re,De,Fe,Je,et,Xe,rt,xt,St;const Nt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Q!==null)Re=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Fe=Q.isBox3?Q.max.z-Q.min.z:1,Je=Q.min.x,et=Q.min.y,Xe=Q.isBox3?Q.min.z:0;else{const ln=Math.pow(2,-V);Re=Math.floor(Nt.width*ln),De=Math.floor(Nt.height*ln),A.isDataArrayTexture?Fe=Nt.depth:A.isData3DTexture?Fe=Math.floor(Nt.depth*ln):Fe=1,Je=0,et=0,Xe=0}ee!==null?(rt=ee.x,xt=ee.y,St=ee.z):(rt=0,xt=0,St=0);const gt=nt.convert(X.format),qe=nt.convert(X.type);let zt;X.isData3DTexture?(b.setTexture3D(X,0),zt=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),zt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),zt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=O.getParameter(O.UNPACK_ROW_LENGTH),rn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Kn=O.getParameter(O.UNPACK_SKIP_PIXELS),vn=O.getParameter(O.UNPACK_SKIP_ROWS),Ar=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const At=A.isDataArrayTexture||A.isData3DTexture,xn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const ln=We.get(A),Vt=We.get(X),un=We.get(ln.__renderTarget),Rr=We.get(Vt.__renderTarget);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,un.__webglFramebuffer),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let dt=0;dt<Fe;dt++)At&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(A).__webglTexture,V,Xe+dt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Se,St+dt)),O.blitFramebuffer(Je,et,Re,De,rt,xt,Re,De,O.DEPTH_BUFFER_BIT,O.NEAREST);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||We.has(A)){const ln=We.get(A),Vt=We.get(X);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,na),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,ia);for(let un=0;un<Fe;un++)At?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,V,Xe+un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,V),xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vt.__webglTexture,Se,St+un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Vt.__webglTexture,Se),V!==0?O.blitFramebuffer(Je,et,Re,De,rt,xt,Re,De,O.COLOR_BUFFER_BIT,O.NEAREST):xn?O.copyTexSubImage3D(zt,Se,rt,xt,St+un,Je,et,Re,De):O.copyTexSubImage2D(zt,Se,rt,xt,Je,et,Re,De);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(zt,Se,rt,xt,St,Re,De,Fe,gt,qe,Nt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(zt,Se,rt,xt,St,Re,De,Fe,gt,Nt.data):O.texSubImage3D(zt,Se,rt,xt,St,Re,De,Fe,gt,qe,Nt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,rt,xt,Re,De,gt,qe,Nt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,rt,xt,Nt.width,Nt.height,gt,Nt.data):O.texSubImage2D(O.TEXTURE_2D,Se,rt,xt,Re,De,gt,qe,Nt);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kn),O.pixelStorei(O.UNPACK_SKIP_ROWS,vn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ar),Se===0&&X.generateMipmaps&&O.generateMipmap(zt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,X,Q=null,ee=null,V=0){return A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],X=arguments[3],V=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,Q,ee,V)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){k=0,N=0,B=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}var Il={exports:{}},cE=Il.exports,Dm;function fE(){return Dm||(Dm=1,function(o,e){(function(n,r){o.exports=r()})(cE,function(){var n=function(){var r=0,a=document.createElement("div");function u(y){return a.appendChild(y.dom),y}function f(y){for(var T=0;T<a.children.length;T++)a.children[T].style.display=T===y?"block":"none";r=y}a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(y){y.preventDefault(),f(++r%a.children.length)},!1);var d=(performance||Date).now(),p=d,m=0,g=u(new n.Panel("FPS","#0ff","#002")),v=u(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var x=u(new n.Panel("MB","#f08","#201"));return f(0),{REVISION:16,dom:a,addPanel:u,showPanel:f,begin:function(){d=(performance||Date).now()},end:function(){m++;var y=(performance||Date).now();if(v.update(y-d,200),p+1e3<=y&&(g.update(1e3*m/(y-p),100),p=y,m=0,x)){var T=performance.memory;x.update(T.usedJSHeapSize/1048576,T.jsHeapSizeLimit/1048576)}return y},update:function(){d=this.end()},domElement:a,setMode:f}};return n.Panel=function(r,a,u){var f=1/0,d=0,p=Math.round,m=p(window.devicePixelRatio||1),g=80*m,v=48*m,x=3*m,y=2*m,T=3*m,R=15*m,S=74*m,_=30*m,I=document.createElement("canvas");I.width=g,I.height=v,I.style.cssText="width:80px;height:48px";var L=I.getContext("2d");return L.font="bold "+9*m+"px Helvetica,Arial,sans-serif",L.textBaseline="top",L.fillStyle=u,L.fillRect(0,0,g,v),L.fillStyle=a,L.fillText(r,x,y),L.fillRect(T,R,S,_),L.fillStyle=u,L.globalAlpha=.9,L.fillRect(T,R,S,_),{dom:I,update:function(C,Y){f=Math.min(f,C),d=Math.max(d,C),L.fillStyle=u,L.globalAlpha=1,L.fillRect(0,0,g,R),L.fillStyle=a,L.fillText(p(C)+" "+r+" ("+p(f)+"-"+p(d)+")",x,y),L.drawImage(I,T+m,R,S-m,_,T,R,S-m,_),L.fillRect(T+S-m,R,m,_),L.fillStyle=u,L.globalAlpha=.9,L.fillRect(T+S-m,R,m,p((1-C/Y)*_))}}},n})}(Il)),Il.exports}var dE=fE();const hE=G_(dE);var Bn,gi,ef,tf,nf,Rl,vr,Ho,Xo,rf,sf,of,af,Um=new E0,oi=0,Yr=-Math.PI/15,xr=!1,Hs=0,Vs=0;Xo=new hE;Xo.showPanel(0);document.body.appendChild(Xo.dom);function ai(o){return typeof o>"u"}function pE(){const[o,e]=an.useState(5772),[n,r]=an.useState(!1),[a,u]=an.useState(!1),[f,d]=an.useState(!1),[p,m]=an.useState(!1),[g,v]=an.useState(!0),[x,y]=an.useState(window.innerWidth),[T,R]=an.useState(window.innerHeight),S=an.useRef(o),_=an.useRef(n),I=an.useRef(a),L=an.useRef(f),C=an.useRef(p),Y=an.useRef(g);an.useEffect(()=>{const B=()=>{y(window.innerWidth),R(window.innerHeight)};return window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)}),an.useEffect(()=>{ai(Bn)&&(Bn=new uE({canvas:document.getElementById("canvas"),antialias:!1}),Bn.domElement.addEventListener("touchstart",w=>{w.preventDefault(),xr=!0,Hs=w.changedTouches[0].pageX,Vs=w.changedTouches[0].pageY}),Bn.domElement.addEventListener("touchend",w=>{w.preventDefault(),xr=!1}),Bn.domElement.addEventListener("touchcancel",w=>{w.preventDefault(),xr=!1}),Bn.domElement.addEventListener("touchmove",w=>{w.preventDefault(),xr&&(oi+=(Hs-w.changedTouches[0].pageX)/100,oi=oi%(2*Math.PI),oi<0&&(oi+=2*Math.PI),Yr+=(Vs-w.changedTouches[0].pageY)/100,Yr=Yr%Math.PI,Hs=w.changedTouches[0].pageX,Vs=w.changedTouches[0].pageY)}),Bn.domElement.addEventListener("mousedown",w=>{w.preventDefault(),xr=!0,Hs=w.offsetX,Vs=w.offsetY}),Bn.domElement.addEventListener("mouseup",w=>{w.preventDefault(),xr=!1}),Bn.domElement.addEventListener("mouseleave",w=>{w.preventDefault(),xr=!1}),Bn.domElement.addEventListener("mousemove",w=>{w.preventDefault(),xr&&(oi+=(Hs-w.offsetX)/100,oi=oi%(2*Math.PI),oi<0&&(oi+=2*Math.PI),Yr+=(Vs-w.offsetY)/100,Yr=Yr%Math.PI,Hs=w.offsetX,Vs=w.offsetY)})),Bn.setClearColor(0),Bn.setSize(x,T),ai(nf)&&(nf=new $n(1,x/T,.1,10)),ai(Rl)&&(Rl=new m0);var B=2;function P(){--B,B==0&&k()}ai(ef)||ai(tf)?(Um.load("glsl/fragment.glsl",function(w){tf=w,P()}),Um.load("glsl/vertex.glsl",function(w){ef=w,P()})):k()});function k(){ai(sf)&&(sf=new Zo(2,2)),ai(af)&&(console.log("loading texture2"),af=new om().load("images/image.png")),ai(of)&&(console.log("loading texture1"),of=new om().load("images/clouds-gray.jpeg")),ai(gi)&&(gi={theta:{value:0},hor_rot:{value:0},vert_rot:{value:0},disk_temperature:{value:o},texture1:{value:of},textureft:{value:af},uResolution:{value:new Pt(x,T)},enable_grav_lensing:{value:n},enable_doppler_beaming:{value:a},enable_doppler_shift:{value:f},enable_gravitational_redshift:{value:p},enable_background:{value:g}}),ai(rf)&&(console.log("creating shaderMaterial"),rf=new Wi({uniforms:gi,vertexShader:ef,fragmentShader:tf,transparent:!0})),ai(vr)&&(vr=new xi(sf,rf),vr.position.z=-1,Rl.add(vr)),N()}function N(){Xo.begin();var B=new Date;Ho=-B.getTime()/1e4%(2*Math.PI),(Math.abs(Ho-Math.PI/2)<.005||Math.abs(Ho-3*Math.PI/2)<.005)&&(Ho+=.01),vr.material.uniforms.theta.value=Ho,vr.material.uniforms.hor_rot.value=oi,vr.material.uniforms.vert_rot.value=Yr,vr.material.uniforms.disk_temperature.value=o,gi.uResolution.value.x=x,gi.uResolution.value.y=T,gi.enable_grav_lensing.value=n,gi.enable_doppler_beaming.value=a,gi.enable_doppler_shift.value=f,gi.enable_gravitational_redshift.value=p,gi.enable_background.value=g,Bn.render(Rl,nf),Xo.end(),S.current===o&&_.current===n&&I.current===a&&L.current===f&&C.current===p&&Y.current===g&&requestAnimationFrame(N)}return Bt.jsx(Bt.Fragment,{children:Bt.jsx("div",{children:Bt.jsxs("div",{style:{position:"relative",alignItems:"center",backgroundColor:"black"},children:[Bt.jsx("canvas",{id:"canvas",style:{marginLeft:"auto",marginRight:"auto",display:"block",width:x}}),Bt.jsxs("div",{className:"overlay",children:[Bt.jsxs("div",{className:"checkbox-buttons",children:[Bt.jsxs("label",{children:[Bt.jsx("input",{type:"checkbox",checked:n,onChange:B=>{r(B.target.checked),_.current=B.target.checked}}),"Gravitational Lensing"]}),Bt.jsxs("label",{children:[Bt.jsx("input",{type:"checkbox",checked:a,onChange:B=>{u(B.target.checked),I.current=B.target.checked}}),"Doppler Beaming"]}),Bt.jsxs("label",{children:[Bt.jsx("input",{type:"checkbox",checked:f,onChange:B=>{d(B.target.checked),L.current=B.target.checked}}),"Doppler Shift"]}),Bt.jsxs("label",{children:[Bt.jsx("input",{type:"checkbox",checked:p,onChange:B=>{m(B.target.checked),C.current=B.target.checked}}),"Gravitational Redshift"]}),Bt.jsxs("label",{children:[Bt.jsx("input",{type:"checkbox",checked:g,onChange:B=>{v(B.target.checked),Y.current=B.target.checked}}),"Toggle Background"]})]}),Bt.jsx("div",{className:"slider",children:Bt.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[Bt.jsx("input",{type:"range",min:"3500",max:"1e4",value:o,onChange:B=>{e(B.target.value),S.current=B.target.value}}),Bt.jsxs("label",{style:{},children:["Temperature: ",o,"K"]})]})})]})]})})})}Q_.createRoot(document.getElementById("root")).render(Bt.jsx(an.StrictMode,{children:Bt.jsx(pE,{})}));