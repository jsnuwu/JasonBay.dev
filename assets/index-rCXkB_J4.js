const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TikTokSection-DkRZx06w.js","assets/66-CBBDpe9f.js","assets/OldPortfolio-WE3GYItv.js","assets/OldPortfolio---hwSG7D.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ly(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Eh={exports:{}},ko={};var i_;function Ny(){if(i_)return ko;i_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var a_;function Oy(){return a_||(a_=1,Eh.exports=Ny()),Eh.exports}var Z=Oy(),bh={exports:{}},ue={};var s_;function Py(){if(s_)return ue;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function x(U,tt,_t){this.props=U,this.context=tt,this.refs=y,this.updater=_t||T}x.prototype.isReactComponent={},x.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=x.prototype;function L(U,tt,_t){this.props=U,this.context=tt,this.refs=y,this.updater=_t||T}var N=L.prototype=new P;N.constructor=L,b(N,x.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function I(){}var B={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function C(U,tt,_t){var Tt=_t.ref;return{$$typeof:r,type:U,key:tt,ref:Tt!==void 0?Tt:null,props:_t}}function D(U,tt){return C(U.type,tt,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function nt(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_t){return tt[_t]})}var rt=/\/+/g;function lt(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?nt(""+U.key):tt.toString(36)}function dt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,tt,_t,Tt,zt){var J=typeof U;(J==="undefined"||J==="boolean")&&(U=null);var ft=!1;if(U===null)ft=!0;else switch(J){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(U.$$typeof){case r:case t:ft=!0;break;case g:return ft=U._init,O(ft(U._payload),tt,_t,Tt,zt)}}if(ft)return zt=zt(U),ft=Tt===""?"."+lt(U,0):Tt,F(zt)?(_t="",ft!=null&&(_t=ft.replace(rt,"$&/")+"/"),O(zt,tt,_t,"",function(Ht){return Ht})):zt!=null&&(X(zt)&&(zt=D(zt,_t+(zt.key==null||U&&U.key===zt.key?"":(""+zt.key).replace(rt,"$&/")+"/")+ft)),tt.push(zt)),1;ft=0;var wt=Tt===""?".":Tt+":";if(F(U))for(var kt=0;kt<U.length;kt++)Tt=U[kt],J=wt+lt(Tt,kt),ft+=O(Tt,tt,_t,J,zt);else if(kt=E(U),typeof kt=="function")for(U=kt.call(U),kt=0;!(Tt=U.next()).done;)Tt=Tt.value,J=wt+lt(Tt,kt++),ft+=O(Tt,tt,_t,J,zt);else if(J==="object"){if(typeof U.then=="function")return O(dt(U),tt,_t,Tt,zt);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function G(U,tt,_t){if(U==null)return U;var Tt=[],zt=0;return O(U,Tt,"","",function(J){return tt.call(_t,J,zt++)}),Tt}function V(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(_t){(U._status===0||U._status===-1)&&(U._status=1,U._result=_t)},function(_t){(U._status===0||U._status===-1)&&(U._status=2,U._result=_t)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var ht=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},gt={map:G,forEach:function(U,tt,_t){G(U,function(){tt.apply(this,arguments)},_t)},count:function(U){var tt=0;return G(U,function(){tt++}),tt},toArray:function(U){return G(U,function(tt){return tt})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ue.Activity=_,ue.Children=gt,ue.Component=x,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=L,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ue.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},ue.cache=function(U){return function(){return U.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(U,tt,_t){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Tt=b({},U.props),zt=U.key;if(tt!=null)for(J in tt.key!==void 0&&(zt=""+tt.key),tt)!Q.call(tt,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&tt.ref===void 0||(Tt[J]=tt[J]);var J=arguments.length-2;if(J===1)Tt.children=_t;else if(1<J){for(var ft=Array(J),wt=0;wt<J;wt++)ft[wt]=arguments[wt+2];Tt.children=ft}return C(U.type,zt,Tt)},ue.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ue.createElement=function(U,tt,_t){var Tt,zt={},J=null;if(tt!=null)for(Tt in tt.key!==void 0&&(J=""+tt.key),tt)Q.call(tt,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(zt[Tt]=tt[Tt]);var ft=arguments.length-2;if(ft===1)zt.children=_t;else if(1<ft){for(var wt=Array(ft),kt=0;kt<ft;kt++)wt[kt]=arguments[kt+2];zt.children=wt}if(U&&U.defaultProps)for(Tt in ft=U.defaultProps,ft)zt[Tt]===void 0&&(zt[Tt]=ft[Tt]);return C(U,J,zt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(U){return{$$typeof:d,render:U}},ue.isValidElement=X,ue.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:V}},ue.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},ue.startTransition=function(U){var tt=B.T,_t={};B.T=_t;try{var Tt=U(),zt=B.S;zt!==null&&zt(_t,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(I,ht)}catch(J){ht(J)}finally{tt!==null&&_t.types!==null&&(tt.types=_t.types),B.T=tt}},ue.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ue.use=function(U){return B.H.use(U)},ue.useActionState=function(U,tt,_t){return B.H.useActionState(U,tt,_t)},ue.useCallback=function(U,tt){return B.H.useCallback(U,tt)},ue.useContext=function(U){return B.H.useContext(U)},ue.useDebugValue=function(){},ue.useDeferredValue=function(U,tt){return B.H.useDeferredValue(U,tt)},ue.useEffect=function(U,tt){return B.H.useEffect(U,tt)},ue.useEffectEvent=function(U){return B.H.useEffectEvent(U)},ue.useId=function(){return B.H.useId()},ue.useImperativeHandle=function(U,tt,_t){return B.H.useImperativeHandle(U,tt,_t)},ue.useInsertionEffect=function(U,tt){return B.H.useInsertionEffect(U,tt)},ue.useLayoutEffect=function(U,tt){return B.H.useLayoutEffect(U,tt)},ue.useMemo=function(U,tt){return B.H.useMemo(U,tt)},ue.useOptimistic=function(U,tt){return B.H.useOptimistic(U,tt)},ue.useReducer=function(U,tt,_t){return B.H.useReducer(U,tt,_t)},ue.useRef=function(U){return B.H.useRef(U)},ue.useState=function(U){return B.H.useState(U)},ue.useSyncExternalStore=function(U,tt,_t){return B.H.useSyncExternalStore(U,tt,_t)},ue.useTransition=function(){return B.H.useTransition()},ue.version="19.2.5",ue}var r_;function fp(){return r_||(r_=1,bh.exports=Py()),bh.exports}var te=fp();const Th=Ly(te);var Ah={exports:{}},Xo={},Rh={exports:{}},Ch={};var o_;function Iy(){return o_||(o_=1,(function(r){function t(O,G){var V=O.length;O.push(G);t:for(;0<V;){var ht=V-1>>>1,gt=O[ht];if(0<l(gt,G))O[ht]=G,O[V]=gt,V=ht;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var G=O[0],V=O.pop();if(V!==G){O[0]=V;t:for(var ht=0,gt=O.length,U=gt>>>1;ht<U;){var tt=2*(ht+1)-1,_t=O[tt],Tt=tt+1,zt=O[Tt];if(0>l(_t,V))Tt<gt&&0>l(zt,_t)?(O[ht]=zt,O[Tt]=V,ht=Tt):(O[ht]=_t,O[tt]=V,ht=tt);else if(Tt<gt&&0>l(zt,V))O[ht]=zt,O[Tt]=V,ht=Tt;else break t}}return G}function l(O,G){var V=O.sortIndex-G.sortIndex;return V!==0?V:O.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,E=!1,T=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=O)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function F(O){if(b=!1,N(O),!T)if(i(m)!==null)T=!0,I||(I=!0,nt());else{var G=i(p);G!==null&&dt(F,G.startTime-O)}}var I=!1,B=-1,Q=5,C=-1;function D(){return y?!0:!(r.unstable_now()-C<Q)}function X(){if(y=!1,I){var O=r.unstable_now();C=O;var G=!0;try{t:{T=!1,b&&(b=!1,P(B),B=-1),E=!0;var V=S;try{e:{for(N(O),_=i(m);_!==null&&!(_.expirationTime>O&&D());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,S=_.priorityLevel;var gt=ht(_.expirationTime<=O);if(O=r.unstable_now(),typeof gt=="function"){_.callback=gt,N(O),G=!0;break e}_===i(m)&&s(m),N(O)}else s(m);_=i(m)}if(_!==null)G=!0;else{var U=i(p);U!==null&&dt(F,U.startTime-O),G=!1}}break t}finally{_=null,S=V,E=!1}G=void 0}}finally{G?nt():I=!1}}}var nt;if(typeof L=="function")nt=function(){L(X)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,lt=rt.port2;rt.port1.onmessage=X,nt=function(){lt.postMessage(null)}}else nt=function(){x(X,0)};function dt(O,G){B=x(function(){O(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(O){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var V=S;S=G;try{return O()}finally{S=V}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=S;S=O;try{return G()}finally{S=V}},r.unstable_scheduleCallback=function(O,G,V){var ht=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ht+V:ht):V=ht,O){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=V+gt,O={id:g++,callback:G,priorityLevel:O,startTime:V,expirationTime:gt,sortIndex:-1},V>ht?(O.sortIndex=V,t(p,O),i(m)===null&&O===i(p)&&(b?(P(B),B=-1):b=!0,dt(F,V-ht))):(O.sortIndex=gt,t(m,O),T||E||(T=!0,I||(I=!0,nt()))),O},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(O){var G=S;return function(){var V=S;S=G;try{return O.apply(this,arguments)}finally{S=V}}}})(Ch)),Ch}var l_;function By(){return l_||(l_=1,Rh.exports=Iy()),Rh.exports}var wh={exports:{}},Nn={};var c_;function Fy(){if(c_)return Nn;c_=1;var r=fp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Nn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.5",Nn}var u_;function zy(){if(u_)return wh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wh.exports=Fy(),wh.exports}var f_;function Hy(){if(f_)return Xo;f_=1;var r=By(),t=fp(),i=zy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,o=f;break}if(A===o){v=!0,o=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,o=u;break}if(A===o){v=!0,o=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var dt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ht=[],gt=-1;function U(e){return{current:e}}function tt(e){0>gt||(e.current=ht[gt],ht[gt]=null,gt--)}function _t(e,n){gt++,ht[gt]=e.current,e.current=n}var Tt=U(null),zt=U(null),J=U(null),ft=U(null);function wt(e,n){switch(_t(J,n),_t(zt,e),_t(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=A0(n),e=R0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Tt),_t(Tt,e)}function kt(){tt(Tt),tt(zt),tt(J)}function Ht(e){e.memoizedState!==null&&_t(ft,e);var n=Tt.current,a=R0(n,e.type);n!==a&&(_t(zt,e),_t(Tt,a))}function me(e){zt.current===e&&(tt(Tt),tt(zt)),ft.current===e&&(tt(ft),zo._currentValue=V)}var Qe,ge;function ce(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+ge}var _e=!1;function se(e,n){if(!e||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var st=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){st=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){st=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var z=v.split(`
`),et=A.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===et.length)for(o=z.length-1,u=et.length-1;1<=o&&0<=u&&z[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==et[u]){var mt=`
`+z[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ce(a):""}function Ye(e,n){switch(e.tag){case 26:case 27:case 5:return ce(e.type);case 16:return ce("Lazy");case 13:return e.child!==n&&n!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return ce("Activity");default:return""}}function H(e){try{var n="",a=null;do n+=Ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xe=Object.prototype.hasOwnProperty,ve=r.unstable_scheduleCallback,Xt=r.unstable_cancelCallback,Ct=r.unstable_shouldYield,w=r.unstable_requestPaint,M=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ot=r.unstable_NormalPriority,Gt=r.unstable_LowPriority,At=r.unstable_IdlePriority,Wt=r.log,ee=r.unstable_setDisableYieldValue,Et=null,bt=null;function Ut(e){if(typeof Wt=="function"&&ee(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,e)}catch{}}var Nt=Math.clz32?Math.clz32:W,Lt=Math.log,oe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Lt(e)/oe|0)|0}var Ot=256,Rt=262144,It=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Mt(o):(v&=A,v!==0?u=Mt(v):a||(a=A&~e,a!==0&&(u=Mt(a))))):(A=o&~f,A!==0?u=Mt(A):v!==0?u=Mt(v):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,et=e.hiddenUpdates;for(a=v&~a;0<a;){var mt=31-Nt(a),xt=1<<mt;A[mt]=0,z[mt]=-1;var st=et[mt];if(st!==null)for(et[mt]=null,mt=0;mt<st.length;mt++){var ut=st[mt];ut!==null&&(ut.lane&=-536870913)}a&=~xt}o!==0&&ml(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function ml(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Is(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:K0(e.type))}function Oi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var oi=Math.random().toString(36).slice(2),ln="__reactFiber$"+oi,yn="__reactProps$"+oi,bi="__reactContainer$"+oi,Fs="__reactEvents$"+oi,zs="__reactListeners$"+oi,gl="__reactHandles$"+oi,$r="__reactResources$"+oi,ss="__reactMarker$"+oi;function to(e){delete e[ln],delete e[yn],delete e[Fs],delete e[zs],delete e[gl]}function ba(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[bi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=O0(e);e!==null;){if(a=e[ln])return a;e=O0(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[ln]||e[bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Aa(e){var n=e[$r];return n||(n=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[ss]=!0}var q=new Set,ct={};function at(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(ct[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Bt={};function Yt(e){return Xe.call(Bt,e)?!0:Xe.call(Vt,e)?!1:Pt.test(e)?Bt[e]=!0:(Vt[e]=!0,!1)}function jt(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $t(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=Ue(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ue(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function le(e){return e.replace(Le,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(e,n,a,o,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?En(e,v,ne(n)):a!=null?En(e,v,ne(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ne(A):e.removeAttribute("name")}function qi(e,n,a,o,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),qe(e)}function En(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function bn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qe(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&An(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&An(e,f,n[f])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(e){return wx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var xu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function Tp(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(s(90));Mn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Oe(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(e,!!a.multiple,n,!1)}}}var yu=!1;function Ap(e,n,a){if(yu)return e(n,a);yu=!0;try{var o=e(n);return o}finally{if(yu=!1,(Gs!==null||Vs!==null)&&(ac(),Gs&&(n=Gs,e=Vs,Vs=Gs=null,Tp(n),e)))for(n=0;n<e.length;n++)Tp(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Zi)try{var no={};Object.defineProperty(no,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Mu=!1}var Ra=null,Eu=null,vl=null;function Rp(){if(vl)return vl;var e,n=Eu,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return vl=u.slice(e,1<o?1-o:void 0)}function xl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function Cp(){return!1}function Xn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sl:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Xn(os),io=_({},os,{view:0,detail:0}),Dx=Xn(io),bu,Tu,ao,Ml=_({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(bu=e.screenX-ao.screenX,Tu=e.screenY-ao.screenY):Tu=bu=0,ao=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),wp=Xn(Ml),Ux=_({},Ml,{dataTransfer:0}),Lx=Xn(Ux),Nx=_({},io,{relatedTarget:0}),Au=Xn(Nx),Ox=_({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Px=Xn(Ox),Ix=_({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bx=Xn(Ix),Fx=_({},os,{data:0}),Dp=Xn(Fx),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gx[e])?!!n[e]:!1}function Ru(){return Vx}var kx=_({},io,{key:function(e){if(e.key){var n=zx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xx=Xn(kx),Wx=_({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Xn(Wx),Yx=_({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),qx=Xn(Yx),jx=_({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=Xn(jx),Kx=_({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Xn(Kx),Jx=_({},os,{newState:0,oldState:0}),$x=Xn(Jx),tS=[9,13,27,32],Cu=Zi&&"CompositionEvent"in window,so=null;Zi&&"documentMode"in document&&(so=document.documentMode);var eS=Zi&&"TextEvent"in window&&!so,Lp=Zi&&(!Cu||so&&8<so&&11>=so),Np=" ",Op=!1;function Pp(e,n){switch(e){case"keyup":return tS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function nS(e,n){switch(e){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Op=!0,Np);case"textInput":return e=n.data,e===Np&&Op?null:e;default:return null}}function iS(e,n){if(ks)return e==="compositionend"||!Cu&&Pp(e,n)?(e=Rp(),vl=Eu=Ra=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!aS[e.type]:n==="textarea"}function Fp(e,n,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,n=fc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function sS(e){S0(e,0)}function El(e){var n=rs(e);if(Oe(n))return e}function zp(e,n){if(e==="change")return n}var Hp=!1;if(Zi){var wu;if(Zi){var Du="oninput"in document;if(!Du){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Du=typeof Gp.oninput=="function"}wu=Du}else wu=!1;Hp=wu&&(!document.documentMode||9<document.documentMode)}function Vp(){ro&&(ro.detachEvent("onpropertychange",kp),oo=ro=null)}function kp(e){if(e.propertyName==="value"&&El(oo)){var n=[];Fp(n,oo,e,Su(e)),Ap(sS,n)}}function rS(e,n,a){e==="focusin"?(Vp(),ro=n,oo=a,ro.attachEvent("onpropertychange",kp)):e==="focusout"&&Vp()}function oS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(oo)}function lS(e,n){if(e==="click")return El(n)}function cS(e,n){if(e==="input"||e==="change")return El(n)}function uS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:uS;function lo(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Xe.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,n){var a=Xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xp(a)}}function Yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fS=Zi&&"documentMode"in document&&11>=document.documentMode,Xs=null,Lu=null,co=null,Nu=!1;function jp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Xs==null||Xs!==Qt(o)||(o=Xs,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=fc(Lu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xs)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ws={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Ou={},Zp={};Zi&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function cs(e){if(Ou[e])return Ou[e];if(!Ws[e])return e;var n=Ws[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return Ou[e]=n[a];return e}var Kp=cs("animationend"),Qp=cs("animationiteration"),Jp=cs("animationstart"),hS=cs("transitionrun"),dS=cs("transitionstart"),pS=cs("transitioncancel"),$p=cs("transitionend"),tm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ai(e,n){tm.set(e,n),at(n,[e])}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Ys=0,Iu=0;function Tl(){for(var e=Ys,n=Iu=Ys=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&em(a,u,f)}}function Al(e,n,a,o){ci[Ys++]=e,ci[Ys++]=n,ci[Ys++]=a,ci[Ys++]=o,Iu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bu(e,n,a,o){return Al(e,n,a,o),Rl(e)}function us(e,n){return Al(e,null,null,n),Rl(e)}function em(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Rl(e){if(50<Lo)throw Lo=0,qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qs={};function mS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new mS(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function nm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Fu(e)&&(v=1);else if(typeof e=="string")v=Sy(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=$n(31,a,n,u),e.elementType=C,e.lanes=f,e;case b:return fs(a.children,u,f,n);case y:v=8,u|=24;break;case x:return e=$n(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case F:return e=$n(13,a,n,u),e.elementType=F,e.lanes=f,e;case I:return e=$n(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case P:v=9;break t;case N:v=11;break t;case B:v=14;break t;case Q:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function fs(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function im(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var am=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=am.get(e);return a!==void 0?a:(n={value:e,source:n,stack:H(n)},am.set(e,n),n)}return{value:e,source:n,stack:H(n)}}var js=[],Zs=0,wl=null,uo=0,fi=[],hi=0,Ca=null,Pi=1,Ii="";function Qi(e,n){js[Zs++]=uo,js[Zs++]=wl,wl=e,uo=n}function sm(e,n,a){fi[hi++]=Pi,fi[hi++]=Ii,fi[hi++]=Ca,Ca=e;var o=Pi;e=Ii;var u=32-Nt(o)-1;o&=~(1<<u),a+=1;var f=32-Nt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Pi=1<<32-Nt(n)+u|a<<u|o,Ii=f+e}else Pi=1<<f|a<<u|o,Ii=e}function Gu(e){e.return!==null&&(Qi(e,1),sm(e,1,0))}function Vu(e){for(;e===wl;)wl=js[--Zs],js[Zs]=null,uo=js[--Zs],js[Zs]=null;for(;e===Ca;)Ca=fi[--hi],fi[hi]=null,Ii=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null}function rm(e,n){fi[hi++]=Pi,fi[hi++]=Ii,fi[hi++]=Ca,Pi=n.id,Ii=n.overflow,Ca=e}var Rn=null,je=null,be=!1,wa=null,di=!1,ku=Error(s(519));function Da(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(ui(n,e)),ku}function om(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[yn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)Se(Oo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||b0(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Da(e,!0)}function lm(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Rn=Rn.return}}function Ks(e){if(e!==Rn)return!1;if(!be)return lm(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lh(e.type,e.memoizedProps)),a=!a),a&&je&&Da(e),lm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=N0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=N0(e)}else n===27?(n=je,Xa(e.type)?(e=dh,dh=null,je=e):je=n):je=Rn?mi(e.stateNode.nextSibling):null;return!0}function hs(){je=Rn=null,be=!1}function Xu(){var e=wa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),wa=null),e}function fo(e){wa===null?wa=[e]:wa.push(e)}var Wu=U(null),ds=null,Ji=null;function Ua(e,n,a){_t(Wu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Wu.current,tt(Wu)}function Yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Yu(f.return,a,e),o||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Yu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Qs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;Jn(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===ft.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}u=u.return}e!==null&&qu(n,e,a,o),n.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){ds=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return cm(ds,e)}function Ul(e,n){return ds===null&&ps(e),cm(e,n)}function cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var gS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},_S=r.unstable_scheduleCallback,vS=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new gS,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&_S(vS,function(){e.controller.abort()})}var po=null,Zu=0,Js=0,$s=null;function xS(e,n){if(po===null){var a=po=[];Zu=0,Js=$f(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(um,um),n}function um(){if(--Zu===0&&po!==null){$s!==null&&($s.status="fulfilled");var e=po;po=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function SS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=O.S;O.S=function(e,n){jg=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xS(e,n),fm!==null&&fm(e,n)};var ms=U(null);function Ku(){var e=ms.current;return e!==null?e:We.pooledCache}function Ll(e,n){n===null?_t(ms,ms.current):_t(ms,n.pool)}function hm(){var e=Ku();return e===null?null:{parent:cn._currentValue,pool:e}}var tr=Error(s(460)),Qu=Error(s(474)),Nl=Error(s(542)),Ol={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gm(e),e}throw _s=n,tr}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,tr):a}}var _s=null;function mm(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function gm(e){if(e===tr||e===Nl)throw Error(s(483))}var er=null,mo=0;function Pl(e){var n=mo;return mo+=1,er===null&&(er=[]),pm(er,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _m(e){function n(j,k){if(e){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Ki(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,$,vt){return k===null||k.tag!==6?(k=zu($,j.mode,vt),k.return=j,k):(k=u(k,$),k.return=j,k)}function z(j,k,$,vt){var Jt=$.type;return Jt===b?mt(j,k,$.props.children,vt,$.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Q&&gs(Jt)===k.type)?(k=u(k,$.props),go(k,$),k.return=j,k):(k=Cl($.type,$.key,$.props,null,j.mode,vt),go(k,$),k.return=j,k)}function et(j,k,$,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Hu($,j.mode,vt),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function mt(j,k,$,vt,Jt){return k===null||k.tag!==7?(k=fs($,j.mode,vt,Jt),k.return=j,k):(k=u(k,$),k.return=j,k)}function xt(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=zu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return $=Cl(k.type,k.key,k.props,null,j.mode,$),go($,k),$.return=j,$;case T:return k=Hu(k,j.mode,$),k.return=j,k;case Q:return k=gs(k),xt(j,k,$)}if(dt(k)||nt(k))return k=fs(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return xt(j,Pl(k),$);if(k.$$typeof===L)return xt(j,Ul(j,k),$);Il(j,k)}return null}function st(j,k,$,vt){var Jt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Jt!==null?null:A(j,k,""+$,vt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Jt?z(j,k,$,vt):null;case T:return $.key===Jt?et(j,k,$,vt):null;case Q:return $=gs($),st(j,k,$,vt)}if(dt($)||nt($))return Jt!==null?null:mt(j,k,$,vt,null);if(typeof $.then=="function")return st(j,k,Pl($),vt);if($.$$typeof===L)return st(j,k,Ul(j,$),vt);Il(j,$)}return null}function ut(j,k,$,vt,Jt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get($)||null,A(k,j,""+vt,Jt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case E:return j=j.get(vt.key===null?$:vt.key)||null,z(k,j,vt,Jt);case T:return j=j.get(vt.key===null?$:vt.key)||null,et(k,j,vt,Jt);case Q:return vt=gs(vt),ut(j,k,$,vt,Jt)}if(dt(vt)||nt(vt))return j=j.get($)||null,mt(k,j,vt,Jt,null);if(typeof vt.then=="function")return ut(j,k,$,Pl(vt),Jt);if(vt.$$typeof===L)return ut(j,k,$,Ul(k,vt),Jt);Il(k,vt)}return null}function qt(j,k,$,vt){for(var Jt=null,we=null,Kt=k,he=k=0,Me=null;Kt!==null&&he<$.length;he++){Kt.index>he?(Me=Kt,Kt=null):Me=Kt.sibling;var De=st(j,Kt,$[he],vt);if(De===null){Kt===null&&(Kt=Me);break}e&&Kt&&De.alternate===null&&n(j,Kt),k=f(De,k,he),we===null?Jt=De:we.sibling=De,we=De,Kt=Me}if(he===$.length)return a(j,Kt),be&&Qi(j,he),Jt;if(Kt===null){for(;he<$.length;he++)Kt=xt(j,$[he],vt),Kt!==null&&(k=f(Kt,k,he),we===null?Jt=Kt:we.sibling=Kt,we=Kt);return be&&Qi(j,he),Jt}for(Kt=o(Kt);he<$.length;he++)Me=ut(Kt,j,he,$[he],vt),Me!==null&&(e&&Me.alternate!==null&&Kt.delete(Me.key===null?he:Me.key),k=f(Me,k,he),we===null?Jt=Me:we.sibling=Me,we=Me);return e&&Kt.forEach(function(Za){return n(j,Za)}),be&&Qi(j,he),Jt}function ie(j,k,$,vt){if($==null)throw Error(s(151));for(var Jt=null,we=null,Kt=k,he=k=0,Me=null,De=$.next();Kt!==null&&!De.done;he++,De=$.next()){Kt.index>he?(Me=Kt,Kt=null):Me=Kt.sibling;var Za=st(j,Kt,De.value,vt);if(Za===null){Kt===null&&(Kt=Me);break}e&&Kt&&Za.alternate===null&&n(j,Kt),k=f(Za,k,he),we===null?Jt=Za:we.sibling=Za,we=Za,Kt=Me}if(De.done)return a(j,Kt),be&&Qi(j,he),Jt;if(Kt===null){for(;!De.done;he++,De=$.next())De=xt(j,De.value,vt),De!==null&&(k=f(De,k,he),we===null?Jt=De:we.sibling=De,we=De);return be&&Qi(j,he),Jt}for(Kt=o(Kt);!De.done;he++,De=$.next())De=ut(Kt,j,he,De.value,vt),De!==null&&(e&&De.alternate!==null&&Kt.delete(De.key===null?he:De.key),k=f(De,k,he),we===null?Jt=De:we.sibling=De,we=De);return e&&Kt.forEach(function(Uy){return n(j,Uy)}),be&&Qi(j,he),Jt}function ke(j,k,$,vt){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Jt=$.key;k!==null;){if(k.key===Jt){if(Jt=$.type,Jt===b){if(k.tag===7){a(j,k.sibling),vt=u(k,$.props.children),vt.return=j,j=vt;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Q&&gs(Jt)===k.type){a(j,k.sibling),vt=u(k,$.props),go(vt,$),vt.return=j,j=vt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===b?(vt=fs($.props.children,j.mode,vt,$.key),vt.return=j,j=vt):(vt=Cl($.type,$.key,$.props,null,j.mode,vt),go(vt,$),vt.return=j,j=vt)}return v(j);case T:t:{for(Jt=$.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),vt=u(k,$.children||[]),vt.return=j,j=vt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}vt=Hu($,j.mode,vt),vt.return=j,j=vt}return v(j);case Q:return $=gs($),ke(j,k,$,vt)}if(dt($))return qt(j,k,$,vt);if(nt($)){if(Jt=nt($),typeof Jt!="function")throw Error(s(150));return $=Jt.call($),ie(j,k,$,vt)}if(typeof $.then=="function")return ke(j,k,Pl($),vt);if($.$$typeof===L)return ke(j,k,Ul(j,$),vt);Il(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),vt=u(k,$),vt.return=j,j=vt):(a(j,k),vt=zu($,j.mode,vt),vt.return=j,j=vt),v(j)):a(j,k)}return function(j,k,$,vt){try{mo=0;var Jt=ke(j,k,$,vt);return er=null,Jt}catch(Kt){if(Kt===tr||Kt===Nl)throw Kt;var we=$n(29,Kt,null,j.mode);return we.lanes=vt,we.return=j,we}}}var vs=_m(!0),vm=_m(!1),La=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(e),em(e,null,a),n}return Al(e,o,n,a),Rl(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function tf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ef=!1;function vo(){if(ef){var e=$s;if(e!==null)throw e}}function xo(e,n,a,o){ef=!1;var u=e.updateQueue;La=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,et=z.next;z.next=null,v===null?f=et:v.next=et,v=z;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,A=mt.lastBaseUpdate,A!==v&&(A===null?mt.firstBaseUpdate=et:A.next=et,mt.lastBaseUpdate=z))}if(f!==null){var xt=u.baseState;v=0,mt=et=z=null,A=f;do{var st=A.lane&-536870913,ut=st!==A.lane;if(ut?(ye&st)===st:(o&st)===st){st!==0&&st===Js&&(ef=!0),mt!==null&&(mt=mt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var qt=e,ie=A;st=n;var ke=a;switch(ie.tag){case 1:if(qt=ie.payload,typeof qt=="function"){xt=qt.call(ke,xt,st);break t}xt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ie.payload,st=typeof qt=="function"?qt.call(ke,xt,st):qt,st==null)break t;xt=_({},xt,st);break t;case 2:La=!0}}st=A.callback,st!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},mt===null?(et=mt=ut,z=xt):mt=mt.next=ut,v|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);mt===null&&(z=xt),u.baseState=z,u.firstBaseUpdate=et,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),za|=v,e.lanes=v,e.memoizedState=xt}}function xm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xm(a[e],n)}var nr=U(null),Bl=U(0);function ym(e,n){e=la,_t(Bl,e),_t(nr,n),la=e|n.baseLanes}function nf(){_t(Bl,la),_t(nr,nr.current)}function af(){la=Bl.current,tt(nr),tt(Bl)}var ti=U(null),pi=null;function Pa(e){var n=e.alternate;_t(sn,sn.current&1),_t(ti,e),pi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(pi=e)}function sf(e){_t(sn,sn.current),_t(ti,e),pi===null&&(pi=e)}function Mm(e){e.tag===22?(_t(sn,sn.current),_t(ti,e),pi===null&&(pi=e)):Ia()}function Ia(){_t(sn,sn.current),_t(ti,ti.current)}function ei(e){tt(ti),pi===e&&(pi=null),tt(sn)}var sn=U(0);function Fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||hh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,fe=null,Ge=null,un=null,zl=!1,ir=!1,xs=!1,Hl=0,So=0,ar=null,yS=0;function nn(){throw Error(s(321))}function rf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function of(e,n,a,o,u,f){return ta=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?sg:Mf,xs=!1,f=a(o,u),xs=!1,ir&&(f=bm(n,a,o,u)),Em(e),f}function Em(e){O.H=Eo;var n=Ge!==null&&Ge.next!==null;if(ta=0,un=Ge=fe=null,zl=!1,So=0,ar=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Dl(e)&&(fn=!0))}function bm(e,n,a,o){fe=e;var u=0;do{if(ir&&(ar=null),So=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=rg,f=n(a,o)}while(ir);return f}function MS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(fe.flags|=1024),n}function lf(){var e=Hl!==0;return Hl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uf(e){if(zl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zl=!1}ta=0,un=Ge=fe=null,ir=!1,So=Hl=0,ar=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?fe.memoizedState=un=e:un=un.next=e,un}function rn(){if(Ge===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?fe.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?fe.memoizedState=un=e:un=un.next=e}return un}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,ar===null&&(ar=[]),e=pm(ar,e,n),n=fe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?sg:Mf),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===L)return Cn(e)}throw Error(s(438,String(e)))}function ff(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function kl(e){var n=rn();return hf(n,Ge,e)}function hf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,z=null,et=n,mt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(ye&xt)===xt:(ta&xt)===xt){var st=et.revertLane;if(st===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Js&&(mt=!0);else if((ta&st)===st){et=et.next,st===Js&&(mt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(A=z=xt,v=f):z=z.next=xt,fe.lanes|=st,za|=st;xt=et.action,xs&&a(f,xt),f=et.hasEagerState?et.eagerState:a(f,xt)}else st={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(A=z=st,v=f):z=z.next=st,fe.lanes|=xt,za|=xt;et=et.next}while(et!==null&&et!==n);if(z===null?v=f:z.next=A,!Jn(f,e.memoizedState)&&(fn=!0,mt&&(a=$s,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function df(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Jn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Tm(e,n,a){var o=fe,u=rn(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Jn((Ge||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,gf(Cm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(ta&127)!==0||Am(o,n,a)}return a}function Am(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Gl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rm(e,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(e)}function Cm(e,n,a){return a(function(){wm(n)&&Dm(e)})}function wm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Dm(e){var n=us(e,2);n!==null&&Zn(n,e,2)}function pf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),xs){Ut(!0);try{a()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function Um(e,n,a,o){return e.baseState=a,hf(e,Ge,typeof o=="function"?o:ea)}function ES(e,n,a,o,u){if(Yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var A=a(u,o),z=O.S;z!==null&&z(v,A),Nm(e,n,A)}catch(et){mf(e,n,et)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),Nm(e,n,f)}catch(et){mf(e,n,et)}}function Nm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(e,n,o)},function(o){return mf(e,n,o)}):Om(e,n,a)}function Om(e,n,a){n.status="fulfilled",n.value=a,Pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lm(e,a)))}function mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}e.action=null}function Pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Im(e,n){return n}function Bm(e,n){if(be){var a=We.formState;if(a!==null){t:{var o=fe;if(be){if(je){e:{for(var u=je,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=mi(u.nextSibling),o=u.data==="F!";break t}}Da(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=ng.bind(null,fe,o),o.dispatch=a,o=pf(!1),f=yf.bind(null,fe,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ES.bind(null,fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Fm(e){var n=rn();return zm(n,Ge,e)}function zm(e,n,a){if(n=hf(e,n,Im)[0],e=kl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(v){throw v===tr?Nl:v}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,sr(9,{destroy:void 0},bS.bind(null,u,a),null)),[o,f,e]}function bS(e,n){e.action=n}function Hm(e){var n=rn(),a=Ge;if(a!==null)return zm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function sr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Gl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Gm(){return rn().memoizedState}function Xl(e,n,a,o){var u=Fn();fe.flags|=e,u.memoizedState=sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&rf(o,Ge.memoizedState.deps)?u.memoizedState=sr(n,f,a,o):(fe.flags|=e,u.memoizedState=sr(1|n,f,a,o))}function Vm(e,n){Xl(8390656,8,e,n)}function gf(e,n){Wl(2048,8,e,n)}function TS(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Gl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function km(e){var n=rn().memoizedState;return TS({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xm(e,n){return Wl(4,2,e,n)}function Wm(e,n){return Wl(4,4,e,n)}function Ym(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qm(e,n,a){a=a!=null?a.concat([e]):null,Wl(4,4,Ym.bind(null,n,e),a)}function _f(){}function jm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Zm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=e(),xs){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o}function vf(e,n,a){return a===void 0||(ta&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Kg(),fe.lanes|=e,za|=e,a)}function Km(e,n,a,o){return Jn(a,n)?a:nr.current!==null?(e=vf(e,a,o),Jn(e,n)||(fn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(ye&261930)===0?(fn=!0,e.memoizedState=a):(e=Kg(),fe.lanes|=e,za|=e,n)}function Qm(e,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=O.T,A={};O.T=A,yf(e,!1,n,a);try{var z=u(),et=O.S;if(et!==null&&et(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var mt=SS(z,o);Mo(e,n,mt,ai(e))}else Mo(e,n,o,ai(e))}catch(xt){Mo(e,n,{then:function(){},status:"rejected",reason:xt},ai())}finally{G.p=f,v!==null&&A.types!==null&&(v.types=A.types),O.T=v}}function AS(){}function xf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Jm(e).queue;Qm(e,u,n,V,a===null?AS:function(){return $m(e),a(o)})}function Jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:V},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $m(e){var n=Jm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},ai())}function Sf(){return Cn(zo)}function tg(){return rn().memoizedState}function eg(){return rn().memoizedState}function RS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Na(a);var o=Oa(n,e,a);o!==null&&(Zn(o,n,a),_o(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function CS(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(e)?ig(n,a):(a=Bu(e,n,a,o),a!==null&&(Zn(a,e,o),ag(a,n,o)))}function ng(e,n,a){var o=ai();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))ig(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,v))return Al(e,n,u,0),We===null&&Tl(),!1}catch{}if(a=Bu(e,n,u,o),a!==null)return Zn(a,e,o),ag(a,n,o),!0}return!1}function yf(e,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(n)throw Error(s(479))}else n=Bu(e,a,o,2),n!==null&&Zn(n,e,2)}function Yl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function ig(e,n){ir=zl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ag(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Eo={readContext:Cn,use:Vl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Eo.useEffectEvent=nn;var sg={readContext:Cn,use:Vl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Vm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Xl(4194308,4,Ym.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Xl(4194308,4,e,n)},useInsertionEffect:function(e,n){Xl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(xs){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(xs){Ut(!0);try{a(n)}finally{Ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=CS.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=ng.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,n){var a=Fn();return vf(a,e,n)},useTransition:function(){var e=pf(!1);return e=Qm.bind(null,fe,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Fn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(ye&127)!==0||Am(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Vm(Cm.bind(null,o,f,e),[e]),o.flags|=2048,sr(9,{destroy:void 0},Rm.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=We.identifierPrefix;if(be){var a=Ii,o=Pi;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ff,useCacheRefresh:function(){return Fn().memoizedState=RS.bind(null,fe)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:Cn,use:Vl,useCallback:jm,useContext:Cn,useEffect:gf,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:kl,useRef:Gm,useState:function(){return kl(ea)},useDebugValue:_f,useDeferredValue:function(e,n){var a=rn();return Km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=kl(ea)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:Sf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,n){var a=rn();return Um(a,Ge,e,n)},useMemoCache:ff,useCacheRefresh:eg};Mf.useEffectEvent=km;var rg={readContext:Cn,use:Vl,useCallback:jm,useContext:Cn,useEffect:gf,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:df,useRef:Gm,useState:function(){return df(ea)},useDebugValue:_f,useDeferredValue:function(e,n){var a=rn();return Ge===null?vf(a,e,n):Km(a,Ge.memoizedState,e,n)},useTransition:function(){var e=df(ea)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:Sf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=rn();return Ge!==null?Um(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:eg};rg.useEffectEvent=km;function Ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,o),n!==null&&(Zn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,o),n!==null&&(Zn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Oa(e,o,a),n!==null&&(Zn(n,e,a),_o(n,e,a))}};function og(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,f):!0}function lg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&bf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function cg(e){bl(e)}function ug(e){console.error(e)}function fg(e){bl(e)}function ql(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,n)},a}function dg(e){return e=Na(e),e.tag=3,e}function pg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){hg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){hg(n,a,o),typeof u!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function wS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?sc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(e,o,u)),!1}throw Error(s(435,a.tag))}return Kf(e,o,u),sc(),!1}if(be)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(e=Error(s(422),{cause:o}),fo(ui(e,a)))):(o!==ku&&(n=Error(s(423),{cause:o}),fo(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=Tf(e.stateNode,o,u),tf(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=ui(f,a),Uo===null?Uo=[f]:Uo.push(f),an!==4&&(an=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Tf(a.stateNode,o,e),tf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ha===null||!Ha.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dg(u),pg(u,e,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),fn=!1;function wn(e,n,a,o){n.child=e===null?vm(n,null,a,o):vs(n,e.child,a,o)}function mg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var A in o)A!=="ref"&&(v[A]=o[A])}else v=o;return ps(n),o=of(e,n,a,v,f,u),A=lf(),e!==null&&!fn?(cf(e,n,u),na(e,n,u)):(be&&A&&Gu(n),n.flags|=1,wn(e,n,o,u),n.child)}function gg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_g(e,n,f,o,u)):(e=Cl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Of(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(v,o)&&e.ref===n.ref)return na(e,n,u)}return n.flags|=1,e=Ki(f,o),e.ref=n.ref,e.return=n,n.child=e}function _g(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(lo(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Of(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,na(e,n,u)}return Rf(e,n,a,o,u)}function vg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return xg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?ym(n,f):nf(),Mm(n);else return o=n.lanes=536870912,xg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ll(n,f.cachePool),ym(n,f),Ia(),n.memoizedState=null):(e!==null&&Ll(n,null),nf(),Ia());return wn(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(e,n,a,o,u){var f=Ku();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ll(n,null),nf(),Mm(n),e!==null&&Qs(e,n,o,!0),n.childLanes=u,null}function jl(e,n){return n=Kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Sg(e,n,a){return vs(n,e.child,null,a),e=jl(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function DS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=jl(n,o),n.lanes=536870912,bo(null,e);if(sf(n),(e=je)?(e=L0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return jl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=Sg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Qs(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=We,o!==null&&(v=Is(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,us(e,v),Zn(o,e,v),Af;sc(),n=Sg(e,n,a)}else e=f.treeContext,je=mi(v.nextSibling),Rn=n,be=!0,wa=null,di=!1,e!==null&&rm(n,e),n=jl(n,o),n.flags|=4096;return n}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rf(e,n,a,o,u){return ps(n),a=of(e,n,a,o,void 0,u),o=lf(),e!==null&&!fn?(cf(e,n,u),na(e,n,u)):(be&&o&&Gu(n),n.flags|=1,wn(e,n,a,u),n.child)}function yg(e,n,a,o,u,f){return ps(n),n.updateQueue=null,a=bm(n,o,a,u),Em(e),o=lf(),e!==null&&!fn?(cf(e,n,f),na(e,n,f)):(be&&o&&Gu(n),n.flags|=1,wn(e,n,a,f),n.child)}function Mg(e,n,a,o,u){if(ps(n),n.stateNode===null){var f=qs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ju(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):qs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ef(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&bf.enqueueReplaceState(f,f.state,null),xo(n,o,f,u),vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=Ss(a,A);f.props=z;var et=f.context,mt=a.contextType;v=qs,typeof mt=="object"&&mt!==null&&(v=Cn(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==v)&&lg(n,f,o,v),La=!1;var st=n.memoizedState;f.state=st,xo(n,o,f,u),vo(),et=n.memoizedState,A||st!==et||La?(typeof xt=="function"&&(Ef(n,a,xt,o),et=n.memoizedState),(z=La||og(n,a,z,o,st,et,v))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),f.props=o,f.state=et,f.context=v,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$u(e,n),v=n.memoizedProps,mt=Ss(a,v),f.props=mt,xt=n.pendingProps,st=f.context,et=a.contextType,z=qs,typeof et=="object"&&et!==null&&(z=Cn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xt||st!==z)&&lg(n,f,o,z),La=!1,st=n.memoizedState,f.state=st,xo(n,o,f,u),vo();var ut=n.memoizedState;v!==xt||st!==ut||La||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof A=="function"&&(Ef(n,a,A,o),ut=n.memoizedState),(mt=La||og(n,a,mt,o,st,ut,z)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=z,o=mt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=na(e,n,u),e}function Eg(e,n,a,o){return hs(),n.flags|=256,wn(e,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:hm()}}function Df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function bg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?Pa(n):Ia(),(e=je)?(e=L0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=im(e),a.return=n,n.child=a,Rn=n,je=null)):e=null,e===null)throw Da(n);return hh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ia(),u=n.mode,A=Kl({mode:"hidden",children:A},u),o=fs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,v,a),n.memoizedState=Cf,bo(null,o)):(Pa(n),Uf(n,A))}var z=e.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=Lf(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),A=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),A=fs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,vs(n,e.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,v,a),n.memoizedState=Cf,n=bo(null,o));else if(Pa(n),hh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var et=v.dgst;v=et,o=Error(s(419)),o.stack="",o.digest=v,fo({value:o,source:null,stack:null}),n=Lf(e,n,a)}else if(fn||Qs(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=We,v!==null&&(o=Is(v,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,us(e,o),Zn(v,e,o),Af;fh(A)||sc(),n=Lf(e,n,a)}else fh(A)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,je=mi(A.nextSibling),Rn=n,be=!0,wa=null,di=!1,e!==null&&rm(n,e),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Ia(),A=o.fallback,u=n.mode,z=e.child,et=z.sibling,o=Ki(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,et!==null?A=Ki(et,A):(A=fs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,bo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=wf(a):(u=A.cachePool,u!==null?(z=cn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=hm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Df(e,v,a),n.memoizedState=Cf,bo(e.child,o)):(Pa(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Uf(e,n){return n=Kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Kl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Lf(e,n,a){return vs(n,e.child,null,a),e=Uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Yu(e.return,n,a)}function Nf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Ag(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=sn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,_t(sn,v),wn(e,n,o,a),o=be?uo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tg(e,a,n);else if(e.tag===19)Tg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Fl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,f,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function US(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ua(n,cn,e.memoizedState.cache),hs();break;case 27:case 5:Ht(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?bg(e,n,a):(Pa(n),e=na(e,n,a),e!==null?e.sibling:null);Pa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(sn,sn.current),o)break;return null;case 22:return n.lanes=0,vg(e,n,a,n.pendingProps);case 24:Ua(n,cn,e.memoizedState.cache)}return na(e,n,a)}function Rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Of(e,a)&&(n.flags&128)===0)return fn=!1,US(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,be&&(n.flags&1048576)!==0&&sm(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=Ss(e,o),n.tag=1,n=Mg(null,n,e,o,a)):(n.tag=0,n=Rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=mg(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=gg(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return Rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),Mg(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$u(e,n),xo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ua(n,cn,o),o!==f.cache&&qu(n,[cn],a,!0),vo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Eg(e,n,o,a);break t}else if(o!==u){u=ui(Error(s(424)),n),fo(u),n=Eg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=mi(e.firstChild),Rn=n,be=!0,wa=null,di=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),o===u){n=na(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Zl(e,n),e===null?(a=F0(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=hc(J.current).createElement(a),o[ln]=n,o[yn]=e,Dn(o,a,e),R(o),n.stateNode=o):n.memoizedState=F0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&be&&(o=n.stateNode=P0(n.type,n.pendingProps,J.current),Rn=n,di=!0,u=je,Xa(n.type)?(dh=u,je=mi(o.firstChild)):je=u),wn(e,n,n.pendingProps.children,a),Zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=o=je)&&(o=oy(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Rn=n,je=mi(o.firstChild),di=!1,u=!0):u=!1),u||Da(n)),Ht(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,lh(u,f)?o=null:v!==null&&lh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=of(e,n,MS,null,null,a),zo._currentValue=u),Zl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=je)&&(a=ly(a,n.pendingProps,di),a!==null?(n.stateNode=a,Rn=n,je=null,e=!0):e=!1),e||Da(n)),null;case 13:return bg(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vs(n,null,o,a):wn(e,n,o,a),n.child;case 11:return mg(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ps(n),u=Cn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return gg(e,n,n.type,n.pendingProps,a);case 15:return _g(e,n,n.type,n.pendingProps,a);case 19:return Ag(e,n,a);case 31:return DS(e,n,a);case 22:return vg(e,n,a,n.pendingProps);case 24:return ps(n),o=Cn(cn),e===null?(u=Ku(),u===null&&(u=We,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ju(n),Ua(n,cn,u)):((e.lanes&a)!==0&&($u(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,cn,o)):(o=f.cache,Ua(n,cn,o),o!==u.cache&&qu(n,[cn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(e){e.flags|=4}function Pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(t0())e.flags|=8192;else throw _s=Ol,Qu}else e.flags&=-16777217}function Cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k0(n))if(t0())e.flags|=8192;else throw _s=Ol,Qu}function Ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,cr|=n)}function To(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function LS(e,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(cn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(Ze(n),Cg(n,f)):(Ze(n),Pf(n,u,null,o,a))):f?f!==e.memoizedState?(ia(n),Ze(n),Cg(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ia(n),Ze(n),Pf(n,u,e,o,a)),null;case 27:if(me(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Tt.current,Ks(n)?om(n):(e=P0(u,o,a),n.stateNode=e,ia(n))}return Ze(n),null;case 5:if(me(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Tt.current,Ks(n))om(n);else{var v=hc(J.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[ln]=n,f[yn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ia(n)}}return Ze(n),Pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||b0(e.nodeValue,a)),e||Da(n,!0)}else e=hc(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),Ze(n),null);case 4:return kt(),e===null&&ih(n.stateNode.containerInfo),Ze(n),null;case 10:return $i(n.type),Ze(n),null;case 19:if(tt(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)To(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Fl(e),f!==null){for(n.flags|=128,To(o,!1),e=f.updateQueue,n.updateQueue=e,Ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)nm(a,e),a=a.sibling;return _t(sn,sn.current&1|2),be&&Qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>nc&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=Fl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ql(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!be)return Ze(n),null}else 2*M()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=sn.current,_t(sn,u?a&1|2:a&1),be&&Qi(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ei(n),af(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&tt(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function NS(e,n){switch(Vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(cn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return me(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(sn),null;case 4:return kt(),null;case 10:return $i(n.type),null;case 22:case 23:return ei(n),af(),e!==null&&tt(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(cn),null;case 25:return null;default:return null}}function wg(e,n){switch(Vu(n),n.tag){case 3:$i(cn),kt();break;case 26:case 27:case 5:me(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:tt(sn);break;case 10:$i(n.type);break;case 22:case 23:ei(n),af(),e!==null&&tt(ms);break;case 24:$i(cn)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(A){Fe(n,n.return,A)}}function Ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var z=a,et=A;try{et()}catch(mt){Fe(u,z,mt)}}}o=o.next}while(o!==f)}}catch(mt){Fe(n,n.return,mt)}}function Dg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Sm(n,a)}catch(o){Fe(e,e.return,o)}}}function Ug(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function If(e,n,a){try{var o=e.stateNode;ey(o,e.type,a,n),o[yn]=n}catch(u){Fe(e,e.return,u)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Xa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function Jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Jl(e,n,a),e=e.sibling;e!==null;)Jl(e,n,a),e=e.sibling}function Og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[ln]=e,n[yn]=a}catch(f){Fe(e,e.return,f)}}var aa=!1,hn=!1,zf=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function OS(e,n){if(e=e.containerInfo,rh=xc,e=qp(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,z=-1,et=0,mt=0,xt=e,st=null;e:for(;;){for(var ut;xt!==a||u!==0&&xt.nodeType!==3||(A=v+u),xt!==f||o!==0&&xt.nodeType!==3||(z=v+o),xt.nodeType===3&&(v+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)st=xt,xt=ut;for(;;){if(xt===e)break e;if(st===a&&++et===u&&(A=v),st===f&&++mt===o&&(z=v),(ut=xt.nextSibling)!==null)break;xt=st,st=xt.parentNode}xt=ut}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:e,selectionRange:a},xc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qt=Ss(a.type,u);e=o.getSnapshotBeforeUpdate(qt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Fe(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)uh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Ig(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),o&4&&Ao(5,a);break;case 1:if(ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}o&64&&Dg(a),o&512&&Ro(a,a.return);break;case 3:if(ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sm(e,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:ra(e,a),n===null&&o&4&&Lg(a),o&512&&Ro(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),o&4&&zg(e,a);break;case 13:ra(e,a),o&4&&Hg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kS.bind(null,a),cy(e,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||hn,u=aa;var f=hn;aa=o,(hn=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),aa=u,hn=f}break;case 30:break;default:ra(e,a)}}function Bg(e){var n=e.alternate;n!==null&&(e.alternate=null,Bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function sa(e,n,a){for(a=a.child;a!==null;)Fg(e,n,a),a=a.sibling}function Fg(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:hn||Bi(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Bi(a,n);var o=$e,u=Wn;Xa(a.type)&&($e=a.stateNode,Wn=!1),sa(e,n,a),Io(a.stateNode),$e=o,Wn=u;break;case 5:hn||Bi(a,n);case 6:if(o=$e,u=Wn,$e=null,sa(e,n,a),$e=o,Wn=u,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:$e!==null&&(Wn?(e=$e,D0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):D0($e,a.stateNode));break;case 4:o=$e,u=Wn,$e=a.stateNode.containerInfo,Wn=!0,sa(e,n,a),$e=o,Wn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),hn||Ba(4,a,n),sa(e,n,a);break;case 1:hn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,n,o)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,sa(e,n,a),hn=o;break;default:sa(e,n,a)}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Fe(n,n.return,a)}}}function Hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Fe(n,n.return,a)}}function PS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Pg),n;default:throw Error(s(435,e.tag))}}function $l(e,n){var a=PS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=XS.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(Xa(A.type)){$e=A.stateNode,Wn=!1;break t}break;case 5:$e=A.stateNode,Wn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if($e===null)throw Error(s(160));Fg(f,v,u),$e=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,e),n=n.sibling}var Ri=null;function Gg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),qn(e),o&4&&(Ba(3,e,e.return),Ao(3,e),Ba(5,e,e.return));break;case 1:Yn(n,e),qn(e),o&512&&(hn||a===null||Bi(a,a.return)),o&64&&aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Yn(n,e),qn(e),o&512&&(hn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ss]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[ln]=e,R(f),o=f;break t;case"link":var v=G0("link","href",u).get(o+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=G0("meta","content",u).get(o+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,R(f),o=f}e.stateNode=o}else V0(u,e.type,e.stateNode);else e.stateNode=H0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?V0(u,e.type,e.stateNode):H0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&If(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),qn(e),o&512&&(hn||a===null||Bi(a,a.return)),a!==null&&o&4&&If(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),qn(e),o&512&&(hn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{mn(u,"")}catch(qt){Fe(e,e.return,qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,If(e,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Yn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(qt){Fe(e,e.return,qt)}}break;case 3:if(mc=null,u=Ri,Ri=dc(n.containerInfo),Yn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(qt){Fe(e,e.return,qt)}zf&&(zf=!1,Vg(e));break;case 4:o=Ri,Ri=dc(e.stateNode.containerInfo),Yn(n,e),qn(e),Ri=o;break;case 12:Yn(n,e),qn(e);break;case 31:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 13:Yn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ec=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,et=aa,mt=hn;if(aa=et||u,hn=mt||z,Yn(n,e),hn=mt,aa=et,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||aa||hn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=z.stateNode;var xt=z.memoizedProps.style,st=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(qt){Fe(z,z.return,qt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(qt){Fe(z,z.return,qt)}}}else if(n.tag===18){if(a===null){z=n;try{var ut=z.stateNode;u?U0(ut,!0):U0(z.stateNode,!1)}catch(qt){Fe(z,z.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(e,a))));break;case 19:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Bf(e);Jl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(mn(v,""),a.flags&=-33);var A=Bf(e);Jl(e,A,v);break;case 3:case 4:var z=a.stateNode.containerInfo,et=Bf(e);Ff(e,et,z);break;default:throw Error(s(161))}}catch(mt){Fe(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ig(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),ys(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ug(n,n.return,a),ys(n);break;case 27:Io(n.stateNode);case 26:case 5:Bi(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),Ao(4,f);break;case 1:if(oa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Fe(o,o.return,et)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)xm(z[u],A)}catch(et){Fe(o,o.return,et)}}a&&v&64&&Dg(f),Ro(f,f.return);break;case 27:Og(f);case 26:case 5:oa(u,f,a),a&&o===null&&v&4&&Lg(f),Ro(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&v&4&&zg(u,f);break;case 13:oa(u,f,a),a&&v&4&&Hg(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),Ro(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function Hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(e,n,a,o),n=n.sibling}function kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):Co(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,rr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(v,n);break;case 24:Ci(e,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Ci(e,n,a,o)}}function rr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,z=o,et=v.flags;switch(v.tag){case 0:case 11:case 15:rr(f,v,A,z,u),Ao(8,v);break;case 23:break;case 22:var mt=v.stateNode;v.memoizedState!==null?mt._visibility&2?rr(f,v,A,z,u):Co(f,v):(mt._visibility|=2,rr(f,v,A,z,u)),u&&et&2048&&Hf(v.alternate,v);break;case 24:rr(f,v,A,z,u),u&&et&2048&&Gf(v.alternate,v);break;default:rr(f,v,A,z,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Co(a,o),u&2048&&Gf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function or(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)Xg(e,n,a),e=e.sibling}function Xg(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&wo&&e.memoizedState!==null&&yy(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var o=Ri;Ri=dc(e.stateNode.containerInfo),or(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,or(e,n,a),wo=o):or(e,n,a));break;default:or(e,n,a)}}function Wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,qg(o,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,tc(e)):Do(e);break;default:Do(e)}}function tc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,qg(o,e)}Wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}e=e.sibling}}function qg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(Bg(o),o===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var IS={getCacheForType:function(e){var n=Cn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,xe=null,ye=0,Be=0,ni=null,Fa=!1,lr=!1,Vf=!1,la=0,an=0,za=0,Ms=0,kf=0,ii=0,cr=0,Uo=null,jn=null,Xf=!1,ec=0,jg=0,nc=1/0,ic=null,Ha=null,gn=0,Ga=null,ur=null,ca=0,Wf=0,Yf=null,Zg=null,Lo=0,qf=null;function ai(){return(Ne&2)!==0&&ye!==0?ye&-ye:O.T!==null?$f():Jr()}function Kg(){if(ii===0)if((ye&536870912)===0||be){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function Zn(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Va(e,ye,ii,!1)),Ln(e,a),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(Ms|=a),an===4&&Va(e,ye,ii,!1)),Fi(e))}function Qg(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?HS(e,n):Zf(e,n,!0),f=o;do{if(u===0){lr&&!o&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!FS(a)){u=Zf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;u=Uo;var z=A.current.memoizedState.isDehydrated;if(z&&(fr(A,v).flags|=256),v=Zf(A,v,!1),v!==2){if(Vf&&!z){A.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){fr(e,0),Va(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,ii,!Fa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ec+300-M(),10<u)){if(Va(o,n,ii,!Fa),yt(o,0,!0)!==0)break t;ca=n,o.timeoutHandle=C0(Jg.bind(null,o,a,jn,ic,Xf,n,ii,Ms,cr,Fa,f,"Throttled",-0,0),u);break t}Jg(o,a,jn,ic,Xf,n,ii,Ms,cr,Fa,f,null,-0,0)}}break}while(!0);Fi(e)}function Jg(e,n,a,o,u,f,v,A,z,et,mt,xt,st,ut){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Xg(n,f,xt);var qt=(f&62914560)===f?ec-M():(f&4194048)===f?jg-M():0;if(qt=My(xt,qt),qt!==null){ca=f,e.cancelPendingCommit=qt(r0.bind(null,e,n,f,a,o,u,v,A,z,mt,xt,null,st,ut)),Va(e,f,v,!et);return}}r0(e,n,f,a,o,u,v,A,z)}function FS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,o){n&=~kf,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Nt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&ml(e,a,n)}function ac(){return(Ne&6)===0?(No(0),!1):!0}function jf(){if(xe!==null){if(Be===0)var e=xe.return;else e=xe,Ji=ds=null,uf(e),er=null,mo=0,e=xe;for(;e!==null;)wg(e.alternate,e),e=e.return;xe=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,jf(),We=e,xe=a=Ki(e.current,null),ye=n,Be=0,ni=null,Fa=!1,lr=Dt(e,n),Vf=!1,cr=ii=kf=Ms=za=an=0,jn=Uo=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Nt(o),f=1<<u;n|=e[u],o&=~f}return la=n,Tl(),a}function $g(e,n){fe=null,O.H=Eo,n===tr||n===Nl?(n=mm(),Be=3):n===Qu?(n=mm(),Be=4):Be=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xe===null&&(an=1,ql(e,ui(n,e.current)))}function t0(){var e=ti.current;return e===null?!0:(ye&4194048)===ye?pi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===pi:!1}function e0(){var e=O.H;return O.H=Eo,e===null?Eo:e}function n0(){var e=O.A;return O.A=IS,e}function sc(){an=4,Fa||(ye&4194048)!==ye&&ti.current!==null||(lr=!0),(za&134217727)===0&&(Ms&134217727)===0||We===null||Va(We,ye,ii,!1)}function Zf(e,n,a){var o=Ne;Ne|=2;var u=e0(),f=n0();(We!==e||ye!==n)&&(ic=null,fr(e,n)),n=!1;var v=an;t:do try{if(Be!==0&&xe!==null){var A=xe,z=ni;switch(Be){case 8:jf(),v=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var et=Be;if(Be=0,ni=null,hr(e,A,z,et),a&&lr){v=0;break t}break;default:et=Be,Be=0,ni=null,hr(e,A,z,et)}}zS(),v=an;break}catch(mt){$g(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Ji=ds=null,Ne=o,O.H=u,O.A=f,xe===null&&(We=null,ye=0,Tl()),v}function zS(){for(;xe!==null;)i0(xe)}function HS(e,n){var a=Ne;Ne|=2;var o=e0(),u=n0();We!==e||ye!==n?(ic=null,nc=M()+500,fr(e,n)):lr=Dt(e,n);t:do try{if(Be!==0&&xe!==null){n=xe;var f=ni;e:switch(Be){case 1:Be=0,ni=null,hr(e,n,f,1);break;case 2:case 9:if(dm(f)){Be=0,ni=null,a0(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Fi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:dm(f)?(Be=0,ni=null,a0(n)):(Be=0,ni=null,hr(e,n,f,7));break;case 5:var v=null;switch(xe.tag){case 26:v=xe.memoizedState;case 5:case 27:var A=xe;if(v?k0(v):A.stateNode.complete){Be=0,ni=null;var z=A.sibling;if(z!==null)xe=z;else{var et=A.return;et!==null?(xe=et,rc(et)):xe=null}break e}}Be=0,ni=null,hr(e,n,f,5);break;case 6:Be=0,ni=null,hr(e,n,f,6);break;case 8:jf(),an=6;break t;default:throw Error(s(462))}}GS();break}catch(mt){$g(e,mt)}while(!0);return Ji=ds=null,O.H=o,O.A=u,Ne=a,xe!==null?0:(We=null,ye=0,Tl(),an)}function GS(){for(;xe!==null&&!Ct();)i0(xe)}function i0(e){var n=Rg(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?rc(e):xe=n}function a0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=yg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=yg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:uf(n);default:wg(a,n),n=xe=nm(n,la),n=Rg(a,n,la)}e.memoizedProps=e.pendingProps,n===null?rc(e):xe=n}function hr(e,n,a,o){Ji=ds=null,uf(n),er=null,mo=0;var u=n.return;try{if(wS(e,u,n,a,ye)){an=1,ql(e,ui(a,e.current)),xe=null;return}}catch(f){if(u!==null)throw xe=u,f;an=1,ql(e,ui(a,e.current)),xe=null;return}n.flags&32768?(be||o===1?e=!0:lr||(ye&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),s0(n,e)):rc(n)}function rc(e){var n=e;do{if((n.flags&32768)!==0){s0(n,Fa);return}e=n.return;var a=LS(n.alternate,n,la);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);an===0&&(an=5)}function s0(e,n){do{var a=NS(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);an=6,xe=null}function r0(e,n,a,o,u,f,v,A,z){e.cancelPendingCommit=null;do oc();while(gn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Iu,Ei(e,a,f,v,A,z),e===We&&(xe=We=null,ye=0),ur=n,Ga=e,ca=a,Wf=f,Yf=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,WS(ot,function(){return f0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=G.p,G.p=2,v=Ne,Ne|=4;try{OS(e,n,a)}finally{Ne=v,G.p=u,O.T=o}}gn=1,o0(),l0(),c0()}}function o0(){if(gn===1){gn=0;var e=Ga,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=G.p;G.p=2;var u=Ne;Ne|=4;try{Gg(n,e);var f=oh,v=qp(e.containerInfo),A=f.focusedElem,z=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Yp(A.ownerDocument.documentElement,A)){if(z!==null&&Uu(A)){var et=z.start,mt=z.end;if(mt===void 0&&(mt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(mt,A.value.length);else{var xt=A.ownerDocument||document,st=xt&&xt.defaultView||window;if(st.getSelection){var ut=st.getSelection(),qt=A.textContent.length,ie=Math.min(z.start,qt),ke=z.end===void 0?ie:Math.min(z.end,qt);!ut.extend&&ie>ke&&(v=ke,ke=ie,ie=v);var j=Wp(A,ie),k=Wp(A,ke);if(j&&k&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var $=xt.createRange();$.setStart(j.node,j.offset),ut.removeAllRanges(),ie>ke?(ut.addRange($),ut.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ut.addRange($))}}}}for(xt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}xc=!!rh,oh=rh=null}finally{Ne=u,G.p=o,O.T=a}}e.current=n,gn=2}}function l0(){if(gn===2){gn=0;var e=Ga,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=G.p;G.p=2;var u=Ne;Ne|=4;try{Ig(e,n.alternate,n)}finally{Ne=u,G.p=o,O.T=a}}gn=3}}function c0(){if(gn===4||gn===3){gn=0,w();var e=Ga,n=ur,a=ca,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,ur=Ga=null,u0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ha=null),Bs(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=G.p,G.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var A=o[v];f(A.value,{componentStack:A.stack})}}finally{O.T=n,G.p=u}}(ca&3)!==0&&oc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?Lo++:(Lo=0,qf=e):Lo=0,No(0)}}function u0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function oc(){return o0(),l0(),c0(),f0()}function f0(){if(gn!==5)return!1;var e=Ga,n=Wf;Wf=0;var a=Bs(ca),o=O.T,u=G.p;try{G.p=32>a?32:a,O.T=null,a=Yf,Yf=null;var f=Ga,v=ca;if(gn=0,ur=Ga=null,ca=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,Yg(f.current),kg(f,f.current,v,a),Ne=A,No(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{G.p=u,O.T=o,u0(e,n)}}function h0(e,n,a){n=ui(a,n),n=Tf(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(Ln(e,2),Fi(e))}function Fe(e,n,a){if(e.tag===3)h0(e,e,a);else for(;n!==null;){if(n.tag===3){h0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ha===null||!Ha.has(o))){e=ui(a,e),a=dg(2),o=Oa(n,a,2),o!==null&&(pg(a,o,n,e),Ln(o,2),Fi(o));break}}n=n.return}}function Kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new BS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),e=VS.bind(null,e,n,a),n.then(e,e))}function VS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(ye&a)===a&&(an===4||an===3&&(ye&62914560)===ye&&300>M()-ec?(Ne&2)===0&&fr(e,0):kf|=a,cr===ye&&(cr=0)),Fi(e)}function d0(e,n){n===0&&(n=Pe()),e=us(e,n),e!==null&&(Ln(e,n),Fi(e))}function kS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),d0(e,a)}function XS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),d0(e,a)}function WS(e,n){return ve(e,n)}var lc=null,dr=null,Qf=!1,cc=!1,Jf=!1,ka=0;function Fi(e){e!==dr&&e.next===null&&(dr===null?lc=dr=e:dr=dr.next=e),cc=!0,Qf||(Qf=!0,qS())}function No(e,n){if(!Jf&&cc){Jf=!0;do for(var a=!1,o=lc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Nt(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_0(o,f))}else f=ye,f=yt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,_0(o,f));o=o.next}while(a);Jf=!1}}function YS(){p0()}function p0(){cc=Qf=!1;var e=0;ka!==0&&iy()&&(e=ka);for(var n=M(),a=null,o=lc;o!==null;){var u=o.next,f=m0(o,n);f===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(dr=a)):(a=o,(e!==0||(f&3)!==0)&&(cc=!0)),o=u}gn!==0&&gn!==5||No(e),ka!==0&&(ka=0)}function m0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Nt(f),A=1<<v,z=u[v];z===-1?((A&a)===0||(A&o)!==0)&&(u[v]=re(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=ye,a=yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Xt(o),Bs(a)){case 2:case 8:a=St;break;case 32:a=ot;break;case 268435456:a=At;break;default:a=ot}return o=g0.bind(null,e),a=ve(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Xt(o),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(oc()&&e.callbackNode!==a)return null;var o=ye;return o=yt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qg(e,o,n),m0(e,M()),e.callbackNode!=null&&e.callbackNode===a?g0.bind(null,e):null)}function _0(e,n){if(oc())return null;Qg(e,n,!0)}function qS(){sy(function(){(Ne&6)!==0?ve(pt,YS):p0()})}function $f(){if(ka===0){var e=Js;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),ka=e}return ka}function v0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_l(""+e)}function x0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function jS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=v0((u[yn]||null).action),v=o.submitter;v&&(n=(n=v[yn]||null)?v0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new yl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ka!==0){var z=v?x0(u,v):new FormData(u);xf(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=v?x0(u,v):new FormData(u),xf(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var th=0;th<Pu.length;th++){var eh=Pu[th],ZS=eh.toLowerCase(),KS=eh[0].toUpperCase()+eh.slice(1);Ai(ZS,"on"+KS)}Ai(Kp,"onAnimationEnd"),Ai(Qp,"onAnimationIteration"),Ai(Jp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(hS,"onTransitionRun"),Ai(dS,"onTransitionStart"),Ai(pS,"onTransitionCancel"),Ai($p,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function S0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var A=o[v],z=A.instance,et=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(mt){bl(mt)}u.currentTarget=null,f=z}else for(v=0;v<o.length;v++){if(A=o[v],z=A.instance,et=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(mt){bl(mt)}u.currentTarget=null,f=z}}}}function Se(e,n){var a=n[Fs];a===void 0&&(a=n[Fs]=new Set);var o=e+"__bubble";a.has(o)||(y0(n,e,2,!1),a.add(o))}function nh(e,n,a){var o=0;n&&(o|=4),y0(a,e,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function ih(e){if(!e[uc]){e[uc]=!0,q.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||nh(a,!1,e),nh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uc]||(n[uc]=!0,nh("selectionchange",!1,n))}}function y0(e,n,a,o){switch(K0(n)){case 2:var u=Ty;break;case 8:u=Ay;break;default:u=vh}a=u.bind(null,n,a,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ah(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var A=o.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=o.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=ba(A),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){o=f=v;continue t}A=A.parentNode}}o=o.return}Ap(function(){var et=f,mt=Su(a),xt=[];t:{var st=tm.get(e);if(st!==void 0){var ut=yl,qt=e;switch(e){case"keypress":if(xl(a)===0)break t;case"keydown":case"keyup":ut=Xx;break;case"focusin":qt="focus",ut=Au;break;case"focusout":qt="blur",ut=Au;break;case"beforeblur":case"afterblur":ut=Au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=qx;break;case Kp:case Qp:case Jp:ut=Px;break;case $p:ut=Zx;break;case"scroll":case"scrollend":ut=Dx;break;case"wheel":ut=Qx;break;case"copy":case"cut":case"paste":ut=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Up;break;case"toggle":case"beforetoggle":ut=$x}var ie=(n&4)!==0,ke=!ie&&(e==="scroll"||e==="scrollend"),j=ie?st!==null?st+"Capture":null:st;ie=[];for(var k=et,$;k!==null;){var vt=k;if($=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||$===null||j===null||(vt=eo(k,j),vt!=null&&ie.push(Po(k,vt,$))),ke)break;k=k.return}0<ie.length&&(st=new ut(st,qt,null,a,mt),xt.push({event:st,listeners:ie}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",st&&a!==xu&&(qt=a.relatedTarget||a.fromElement)&&(ba(qt)||qt[bi]))break t;if((ut||st)&&(st=mt.window===mt?mt:(st=mt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(qt=a.relatedTarget||a.toElement,ut=et,qt=qt?ba(qt):null,qt!==null&&(ke=c(qt),ie=qt.tag,qt!==ke||ie!==5&&ie!==27&&ie!==6)&&(qt=null)):(ut=null,qt=et),ut!==qt)){if(ie=wp,vt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Up,vt="onPointerLeave",j="onPointerEnter",k="pointer"),ke=ut==null?st:rs(ut),$=qt==null?st:rs(qt),st=new ie(vt,k+"leave",ut,a,mt),st.target=ke,st.relatedTarget=$,vt=null,ba(mt)===et&&(ie=new ie(j,k+"enter",qt,a,mt),ie.target=$,ie.relatedTarget=ke,vt=ie),ke=vt,ut&&qt)e:{for(ie=JS,j=ut,k=qt,$=0,vt=j;vt;vt=ie(vt))$++;vt=0;for(var Jt=k;Jt;Jt=ie(Jt))vt++;for(;0<$-vt;)j=ie(j),$--;for(;0<vt-$;)k=ie(k),vt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){ie=j;break e}j=ie(j),k=ie(k)}ie=null}else ie=null;ut!==null&&M0(xt,st,ut,ie,!1),qt!==null&&ke!==null&&M0(xt,ke,qt,ie,!0)}}t:{if(st=et?rs(et):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var we=zp;else if(Bp(st))if(Hp)we=cS;else{we=oS;var Kt=rS}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&Ti(et.elementType)&&(we=zp):we=lS;if(we&&(we=we(e,et))){Fp(xt,we,a,mt);break t}Kt&&Kt(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&En(st,"number",st.value)}switch(Kt=et?rs(et):window,e){case"focusin":(Bp(Kt)||Kt.contentEditable==="true")&&(Xs=Kt,Lu=et,co=null);break;case"focusout":co=Lu=Xs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,jp(xt,a,mt);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":jp(xt,a,mt)}var he;if(Cu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else ks?Pp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Lp&&a.locale!=="ko"&&(ks||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&ks&&(he=Rp()):(Ra=mt,Eu="value"in Ra?Ra.value:Ra.textContent,ks=!0)),Kt=fc(et,Me),0<Kt.length&&(Me=new Dp(Me,e,null,a,mt),xt.push({event:Me,listeners:Kt}),he?Me.data=he:(he=Ip(a),he!==null&&(Me.data=he)))),(he=eS?nS(e,a):iS(e,a))&&(Me=fc(et,"onBeforeInput"),0<Me.length&&(Kt=new Dp("onBeforeInput","beforeinput",null,a,mt),xt.push({event:Kt,listeners:Me}),Kt.data=he)),jS(xt,e,et,a,mt)}S0(xt,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function fc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,f)),u=eo(e,n),u!=null&&o.push(Po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function JS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function M0(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var A=a,z=A.alternate,et=A.stateNode;if(A=A.tag,z!==null&&z===o)break;A!==5&&A!==26&&A!==27||et===null||(z=et,u?(et=eo(a,f),et!=null&&v.unshift(Po(a,et,z))):u||(et=eo(a,f),et!=null&&v.push(Po(a,et,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var $S=/\r\n?/g,ty=/\u0000|\uFFFD/g;function E0(e){return(typeof e=="string"?e:""+e).replace($S,`
`).replace(ty,"")}function b0(e,n){return n=E0(n),E0(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(e,""+o);break;case"className":$t(e,"class",o);break;case"tabIndex":$t(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,a,o);break;case"style":Hs(e,o,f);break;case"data":if(n!=="object"){$t(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_l(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_l(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=_l(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),jt(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cx.get(a)||a,jt(e,a,o))}}function sh(e,n,a,o,u,f){switch(a){case"style":Hs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?mn(e,o):(typeof o=="number"||typeof o=="bigint")&&mn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,v,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var A=f=v=u=null,z=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":v=mt;break;case"checked":z=mt;break;case"defaultChecked":et=mt;break;case"value":f=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,mt,a,null)}}qi(e,f,A,z,et,v,u,!1);return;case"select":Se("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":o=A;default:Ve(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!o,n!=null?li(e,!!o,n,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":Se("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ve(e,n,v,A,a,null)}bn(e,o,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,z,o,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)Se(Oo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,et,o,a,null)}return;default:if(Ti(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&sh(e,n,mt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ve(e,n,A,o,a,null))}function ey(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,z=null,et=null,mt=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":z=xt;default:o.hasOwnProperty(ut)||Ve(e,n,ut,null,o,xt)}}for(var st in o){var ut=o[st];if(xt=a[st],o.hasOwnProperty(st)&&(ut!=null||xt!=null))switch(st){case"type":f=ut;break;case"name":u=ut;break;case"checked":et=ut;break;case"defaultChecked":mt=ut;break;case"value":v=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==xt&&Ve(e,n,st,ut,o,xt)}}Mn(e,v,A,z,et,mt,f,u);return;case"select":ut=v=A=st=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ut=z;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==z&&Ve(e,n,u,f,o,z)}n=A,a=v,o=ut,st!=null?li(e,!!a,st,!1):!!o!=!!a&&(n!=null?li(e,!!a,n,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":ut=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,n,A,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":st=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,v,u,o,f)}Ie(e,st,ut);return;case"option":for(var qt in a)st=a[qt],a.hasOwnProperty(qt)&&st!=null&&!o.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:Ve(e,n,qt,null,o,st));for(z in o)st=o[z],ut=a[z],o.hasOwnProperty(z)&&st!==ut&&(st!=null||ut!=null)&&(z==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":Ve(e,n,z,st,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)st=a[ie],a.hasOwnProperty(ie)&&st!=null&&!o.hasOwnProperty(ie)&&Ve(e,n,ie,null,o,st);for(et in o)if(st=o[et],ut=a[et],o.hasOwnProperty(et)&&st!==ut&&(st!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ve(e,n,et,st,o,ut)}return;default:if(Ti(n)){for(var ke in a)st=a[ke],a.hasOwnProperty(ke)&&st!==void 0&&!o.hasOwnProperty(ke)&&sh(e,n,ke,void 0,o,st);for(mt in o)st=o[mt],ut=a[mt],!o.hasOwnProperty(mt)||st===ut||st===void 0&&ut===void 0||sh(e,n,mt,st,o,ut);return}}for(var j in a)st=a[j],a.hasOwnProperty(j)&&st!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,st);for(xt in o)st=o[xt],ut=a[xt],!o.hasOwnProperty(xt)||st===ut||st==null&&ut==null||Ve(e,n,xt,st,o,ut)}function T0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&T0(v)){for(v=0,A=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],et=z.startTime;if(et>A)break;var mt=z.transferSize,xt=z.initiatorType;mt&&T0(xt)&&(z=z.responseEnd,v+=mt*(z<A?1:(A-et)/(z-et)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rh=null,oh=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function lh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function iy(){var e=window.event;return e&&e.type==="popstate"?e===ch?!1:(ch=e,!0):(ch=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(ry)}:C0;function ry(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function D0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),_r(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Io(e.ownerDocument.body);a=u}while(a);_r(n)}function U0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function uh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function oy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function ly(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function L0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$?"||e.data==="$~"}function hh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dh=null;function N0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function O0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function P0(e,n,a){switch(n=hc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var gi=new Map,I0=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=G.d;G.d={f:uy,r:fy,D:hy,C:dy,L:py,m:my,X:_y,S:gy,M:vy};function uy(){var e=ua.f(),n=ac();return e||n}function fy(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?$m(n):ua.r(e)}var pr=typeof document>"u"?null:document;function B0(e,n,a){var o=pr;if(o&&typeof n=="string"&&n){var u=le(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),I0.has(u)||(I0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),R(n),o.head.appendChild(n)))}}function hy(e){ua.D(e),B0("dns-prefetch",e,null)}function dy(e,n){ua.C(e,n),B0("preconnect",e,n)}function py(e,n,a){ua.L(e,n,a);var o=pr;if(o&&e&&n){var u='link[rel="preload"][as="'+le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(e)+'"]';var f=u;switch(n){case"style":f=mr(e);break;case"script":f=gr(e)}gi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Dn(n,"link",e),R(n),o.head.appendChild(n)))}}function my(e,n){ua.m(e,n);var a=pr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+le(o)+'"][href="'+le(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gr(e)}if(!gi.has(f)&&(e=_({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Dn(o,"link",e),R(o),a.head.appendChild(o)}}}function gy(e,n,a){ua.S(e,n,a);var o=pr;if(o&&e){var u=Aa(o).hoistableStyles,f=mr(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=o.querySelector(Bo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&ph(e,a);var z=v=o.createElement("link");R(z),Dn(z,"link",e),z._p=new Promise(function(et,mt){z.onload=et,z.onerror=mt}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,pc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function _y(e,n){ua.X(e,n);var a=pr;if(a&&e){var o=Aa(a).hoistableScripts,u=gr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0},n),(n=gi.get(u))&&mh(e,n),f=a.createElement("script"),R(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function vy(e,n){ua.M(e,n);var a=pr;if(a&&e){var o=Aa(a).hoistableScripts,u=gr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&mh(e,n),f=a.createElement("script"),R(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function F0(e,n,a,o){var u=(u=J.current)?dc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Aa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var f=Aa(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Bo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||xy(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Aa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+le(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function xy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),R(n),e.head.appendChild(n))}function gr(e){return'[src="'+le(e)+'"]'}function Fo(e){return"script[async]"+e}function H0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+le(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Dn(o,"style",u),pc(o,a.precedence,e),n.instance=o;case"stylesheet":u=mr(a.href);var f=e.querySelector(Bo(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=z0(a),(u=gi.get(u))&&ph(o,u),f=(e.ownerDocument||e).createElement("link"),R(f);var v=f;return v._p=new Promise(function(A,z){v.onload=A,v.onerror=z}),Dn(f,"link",o),n.state.loading|=4,pc(f,a.precedence,e),n.instance=f;case"script":return f=gr(a.src),(u=e.querySelector(Fo(f)))?(n.instance=u,R(u),u):(o=a,(u=gi.get(f))&&(o=_({},a),mh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,e));return n.instance}function pc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var A=o[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mc=null;function G0(e,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ss]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=o.get(v);A?A.push(f):o.set(v,[f])}}return o}function V0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Sy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(o.href),f=n.querySelector(Bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=gc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=z0(o),(u=gi.get(u))&&ph(o,u),f=f.createElement("link"),R(f);var v=f;v._p=new Promise(function(A,z){v.onload=A,v.onerror=z}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var gh=0;function My(e,n){return e.stylesheets&&e.count===0&&vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&gh===0&&(gh=62500*ny());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>gh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _c=null;function vc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_c=new Map,n.forEach(Ey,e),_c=null,gc.call(e))}function Ey(e,n){if(!(n.state.loading&4)){var a=_c.get(e);if(a)var o=a.get(null);else{a=new Map,_c.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:L,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function by(e,n,a,o,u,f,v,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function X0(e,n,a,o,u,f,v,A,z,et,mt,xt){return e=new by(e,n,a,v,z,et,mt,xt,A),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ju(f),e}function W0(e){return e?(e=qs,e):qs}function Y0(e,n,a,o,u,f){u=W0(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Oa(e,o,n),a!==null&&(Zn(a,e,n),_o(a,e,n))}function q0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _h(e,n){q0(e,n),(e=e.alternate)&&q0(e,n)}function j0(e){if(e.tag===13||e.tag===31){var n=us(e,67108864);n!==null&&Zn(n,e,67108864),_h(e,67108864)}}function Z0(e){if(e.tag===13||e.tag===31){var n=ai();n=Qr(n);var a=us(e,n);a!==null&&Zn(a,e,n),_h(e,n)}}var xc=!0;function Ty(e,n,a,o){var u=O.T;O.T=null;var f=G.p;try{G.p=2,vh(e,n,a,o)}finally{G.p=f,O.T=u}}function Ay(e,n,a,o){var u=O.T;O.T=null;var f=G.p;try{G.p=8,vh(e,n,a,o)}finally{G.p=f,O.T=u}}function vh(e,n,a,o){if(xc){var u=xh(o);if(u===null)ah(e,n,o,Sc,a),Q0(e,o);else if(Cy(u,e,n,a,o))o.stopPropagation();else if(Q0(e,o),n&4&&-1<Ry.indexOf(e)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var z=1<<31-Nt(v);A.entanglements[1]|=z,v&=~z}Fi(f),(Ne&6)===0&&(nc=M()+500,No(0))}}break;case 31:case 13:A=us(f,2),A!==null&&Zn(A,f,2),ac(),_h(f,2)}if(f=xh(o),f===null&&ah(e,n,o,Sc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ah(e,n,o,null,a)}}function xh(e){return e=Su(e),Sh(e)}var Sc=null;function Sh(e){if(Sc=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Sc=e,null}function K0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pt:return 2;case St:return 8;case ot:case Gt:return 32;case At:return 268435456;default:return 32}default:return 32}}var yh=!1,Wa=null,Ya=null,qa=null,Ho=new Map,Go=new Map,ja=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(e,n){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&j0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Cy(e,n,a,o,u){switch(n){case"focusin":return Wa=Vo(Wa,e,n,a,o,u),!0;case"dragenter":return Ya=Vo(Ya,e,n,a,o,u),!0;case"mouseover":return qa=Vo(qa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function J0(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){Z0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Oi(e.priority,function(){Z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=xh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);xu=o,a.target.dispatchEvent(o),xu=null}else return n=Ta(a),n!==null&&j0(n),e.blockedOn=a,!1;n.shift()}return!0}function $0(e,n,a){yc(e)&&a.delete(n)}function wy(){yh=!1,Wa!==null&&yc(Wa)&&(Wa=null),Ya!==null&&yc(Ya)&&(Ya=null),qa!==null&&yc(qa)&&(qa=null),Ho.forEach($0),Go.forEach($0)}function Mc(e,n){e.blockedOn===n&&(e.blockedOn=null,yh||(yh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wy)))}var Ec=null;function t_(e){Ec!==e&&(Ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sh(o||a)===null)continue;break}var f=Ta(a);f!==null&&(e.splice(n,3),n-=3,xf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _r(e){function n(z){return Mc(z,e)}Wa!==null&&Mc(Wa,e),Ya!==null&&Mc(Ya,e),qa!==null&&Mc(qa,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)J0(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[yn]||null;if(typeof f=="function")v||t_(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)A=v.formAction;else if(Sh(u)!==null)continue}else A=v.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),t_(a)}}}function e_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Mh(e){this._internalRoot=e}bc.prototype.render=Mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();Y0(a,o,e,n,null,null)},bc.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Y0(e.current,2,null,e,null,null),ac(),n[bi]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&J0(e)}};var n_=t.version;if(n_!=="19.2.5")throw Error(s(527,n_,"19.2.5"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Dy={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Et=Tc.inject(Dy),bt=Tc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=cg,f=ug,v=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=X0(e,1,!1,null,null,a,o,null,u,f,v,e_),e[bi]=n.current,ih(e),new Mh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=cg,v=ug,A=fg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=X0(e,1,!0,n,a??null,o,u,z,f,v,A,e_),n.context=W0(null),a=n.current,o=ai(),o=Qr(o),u=Na(o),u.callback=null,Oa(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Fi(n),e[bi]=n.current,ih(e),new bc(n)},Xo.version="19.2.5",Xo}var h_;function Gy(){if(h_)return Ah.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ah.exports=Hy(),Ah.exports}var Vy=Gy();const ky={de:{header:{home:"Home",about:"Über mich",contact:"Kontakt"},hero:{kicker:"Portfolio",titlePrefix:"Hi, ich bin",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Galerie",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung: React, Angular, Vue.js und moderne Webtechnologien. Nebenbei: Video-Editing & Grafikdesign seit 2020.",ctaPrimary:"Was ich mache",ctaSecondary:"Kontakt",scroll:"Scroll"},aboutSlider:{title:"Nebenbei",categories:[{key:"all",label:"Alles"},{key:"pets",label:"Tiere"},{key:"moto",label:"Motorrad"},{key:"hike",label:"Wandern"},{key:"me",label:"Ich"}],back:"Zurück",next:"Weiter",close:"Schließen"},socialStats:{kicker:"Abseits vom Code",title:"Auch online unterwegs",subtitle:"Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs bin.",linkedinCta:"Lass uns vernetzen",latestPost:"Neuester Beitrag",tiktokPreviewCaption:"Neuester Post auf TikTok ansehen",instagramPreviewCaption:"Neuester Post auf Instagram ansehen"},projectsPreview:{kicker:"Live Vorschau",title:"Meine Projekte",subtitle:"Ein paar Einblicke in Dinge, die ich gebaut habe · klick dich durch oder öffne sie live.",previousProject:"Vorheriges Projekt",nextProject:"Nächstes Projekt",openLive:"Live öffnen",openLiveAria:r=>`${r} live öffnen`,jumpTo:r=>`Zu ${r} springen`},liveButton:{label:"Live ansehen"},about:{heading:"Über mich",lead:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung.",body:"Ich bin Junior Software Engineer und baue meistens Frontends: React, Angular oder Vue, je nachdem was der Job gerade braucht. Ans Backend fasse ich auch gern mit ran. Nebenbei schneide ich seit 2020 Videos für Social Media und designe Grafiken; mein TikTok-Kanal hat inzwischen über 20.000 Follower und 3,5 Mio. Likes gesammelt.",spotlight:{kicker:"Nebenbei: Video & Grafikdesign",heading:"TikTok @jsnuwu · eigener Kanal seit 2020",subtitle:"Konzeption, Schnitt und Gestaltung in Eigenregie",statFollowerValue:"20.800",statFollowerLabel:"Follower",statLikesValue:"3,5 Mio.",statLikesLabel:"Likes",statExperienceValue:"5 Jahre",statExperienceLabel:"Schnitt-Praxis",list:["Eigene Edits von Schnitt bis Veröffentlichung auf TikTok, YouTube und Instagram","Gefühl für Bildaufbau, Timing und Reichweite"]}},experience:{heading:"Werdegang",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · heute",bullets:["Frontend-Komponenten mit Angular und TypeScript, angebunden an bestehende PHP-Backends","Kundenwebsites mit WordPress und Elementor, erweitert um eigenen PHP- und CSS-Code","Bugfixing und Feature-Erweiterungen im laufenden Betrieb"]},{org:"adesso SE · Ausbildung",role:"Fachinformatiker für Anwendungsentwicklung",period:"09/2023 · 01/2026",bullets:["Frontend mit Angular und TypeScript, Backend mit Java, Spring Boot und PostgreSQL","Profiler (internes Produkt, 05/2025 · 12/2025): Frontend-Komponenten und UI-Bugfixes","Scrum-Team: Git, Code Reviews, JIRA, Confluence","IT-Support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"FSJ · Freiwilliges Soziales Jahr, Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Begleitung und Unterstützung von Menschen mit Behinderungen im Alltag, inklusive Freizeitaktivitäten und Ausflügen","Mitwirkung bei der Alltagsgestaltung: Kochen, Haushaltsaktivitäten und Förderung der Selbstständigkeit"]}]},skills:{heading:"Skills",groups:[{title:"Schwerpunkt Frontend",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Weitere Frameworks",items:"React, Vue.js"},{title:"Backend & Daten",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Arbeitsweise",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video-Schnitt, TikTok, YouTube, Instagram"}],languages:[{name:"Deutsch",level:"Muttersprache"},{name:"Englisch",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projekte",skillsLabel:"Skills:"},contact:{heading:"Kontakt",intro:"Ich freue mich über deine Nachricht! Schreib mir einfach eine E-Mail oder nutze das Formular unten.",send:"send",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",messagePlaceholder:"Deine Nachricht",submit:"Absenden"},tiktokShowcase:{kicker:"TikTok",title:"Ein paar Einblicke",subtitle:"Mehr davon auf TikTok ansehen",prev:"Vorheriges Video",next:"Nächstes Video",mute:"Stummschalten",unmute:"Ton an",play:"Abspielen",pause:"Pausieren",volume:"Lautstärke",jumpTo:r=>`Zu Video ${r} springen`}},en:{header:{home:"Home",about:"About",contact:"Contact"},hero:{kicker:"Portfolio",titlePrefix:"Hi, I'm",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Gallery",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer focused on frontend development: React, Angular, Vue.js and modern web technologies. On the side: video editing & graphic design since 2020.",ctaPrimary:"What I do",ctaSecondary:"Contact",scroll:"Scroll"},aboutSlider:{title:"On the side",categories:[{key:"all",label:"All"},{key:"pets",label:"Pets"},{key:"moto",label:"Motorcycles"},{key:"hike",label:"Hiking"},{key:"me",label:"Me"}],back:"Back",next:"Next",close:"Close"},socialStats:{kicker:"Beyond the code",title:"Also active online",subtitle:"A few numbers from the channels I'm active on elsewhere.",linkedinCta:"Let's connect",latestPost:"Latest post",tiktokPreviewCaption:"Watch my latest TikTok post",instagramPreviewCaption:"View my latest Instagram post"},projectsPreview:{kicker:"Live Preview",title:"My Projects",subtitle:"A few glimpses of things I've built · click through or open them live.",previousProject:"Previous project",nextProject:"Next project",openLive:"Open live",openLiveAria:r=>`Open ${r} live`,jumpTo:r=>`Jump to ${r}`},liveButton:{label:"View live"},about:{heading:"About me",lead:"Junior Software Engineer focused on frontend development.",body:"I'm a Junior Software Engineer and I mostly build frontends: React, Angular or Vue, depending on what the job needs. I'm happy to dig into the backend too. Since 2020 I've also been editing videos for social media and designing graphics on the side; my TikTok channel has grown to over 20,000 followers and 3.5M likes.",spotlight:{kicker:"On the side: Video & Graphic Design",heading:"TikTok @jsnuwu · my own channel since 2020",subtitle:"Concept, editing and design, all done myself",statFollowerValue:"20.8K",statFollowerLabel:"Followers",statLikesValue:"3.5M",statLikesLabel:"Likes",statExperienceValue:"5 years",statExperienceLabel:"Editing Experience",list:["My own edits from cut to release on TikTok, YouTube and Instagram","A feel for framing, timing and reach"]}},experience:{heading:"Experience",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · present",bullets:["Frontend components with Angular and TypeScript, wired into existing PHP backends","Client websites with WordPress and Elementor, extended with custom PHP and CSS","Bug fixing and feature work in production"]},{org:"adesso SE · Apprenticeship",role:"IT Specialist for Application Development",period:"09/2023 · 01/2026",bullets:["Frontend with Angular and TypeScript, backend with Java, Spring Boot and PostgreSQL","Profiler (internal product, 05/2025 · 12/2025): frontend components and UI bug fixes","Scrum team: Git, code reviews, JIRA, Confluence","IT support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"Voluntary Social Year (FSJ), Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Supporting and assisting people with disabilities in daily life, including leisure activities and outings","Helping shape everyday life: cooking, household activities, and fostering independence"]}]},skills:{heading:"Skills",groups:[{title:"Frontend focus",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Other frameworks",items:"React, Vue.js"},{title:"Backend & Data",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Method",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video editing, TikTok, YouTube, Instagram"}],languages:[{name:"German",level:"Native"},{name:"English",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projects",skillsLabel:"Skills:"},contact:{heading:"Contact",intro:"I'd love to hear from you! Just send me an email or use the form below.",send:"send",namePlaceholder:"Your name",emailPlaceholder:"Your email",messagePlaceholder:"Your message",submit:"Send"},tiktokShowcase:{kicker:"TikTok",title:"A few glimpses",subtitle:"See more on TikTok",prev:"Previous video",next:"Next video",mute:"Mute",unmute:"Unmute",play:"Play",pause:"Pause",volume:"Volume",jumpTo:r=>`Jump to video ${r}`}}},Iv=te.createContext(null);function Xy({children:r}){const[t,i]=te.useState(()=>{const s=localStorage.getItem("lang");return s==="en"||s==="de"?s:"de"});return te.useEffect(()=>{localStorage.setItem("lang",t),document.documentElement.lang=t},[t]),Z.jsx(Iv.Provider,{value:{lang:t,setLang:i,t:ky[t]},children:r})}function Wy(r,t,i){return Math.max(t,Math.min(r,i))}const Ke={toVector(r,t){return r===void 0&&(r=t),Array.isArray(r)?r:[r,r]},add(r,t){return[r[0]+t[0],r[1]+t[1]]},sub(r,t){return[r[0]-t[0],r[1]-t[1]]},addTo(r,t){r[0]+=t[0],r[1]+=t[1]},subTo(r,t){r[0]-=t[0],r[1]-=t[1]}};function d_(r,t,i){return t===0||Math.abs(t)===1/0?Math.pow(r,i*5):r*t*i/(t+i*r)}function p_(r,t,i,s=.15){return s===0?Wy(r,t,i):r<t?-d_(t-r,i-t,s)+t:r>i?+d_(r-i,i-t,s)+i:r}function Yy(r,[t,i],[s,l]){const[[c,h],[d,m]]=r;return[p_(t,c,h,s),p_(i,d,m,l)]}function qy(r,t){if(typeof r!="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function jy(r){var t=qy(r,"string");return typeof t=="symbol"?t:String(t)}function pn(r,t,i){return t=jy(t),t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i,r}function m_(r,t){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function tn(r){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?m_(Object(i),!0).forEach(function(s){pn(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):m_(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}const Bv={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function g_(r){return r?r[0].toUpperCase()+r.slice(1):""}const Zy=["enter","leave"];function Ky(r=!1,t){return r&&!Zy.includes(t)}function Qy(r,t="",i=!1){const s=Bv[r],l=s&&s[t]||t;return"on"+g_(r)+g_(l)+(Ky(i,l)?"Capture":"")}const Jy=["gotpointercapture","lostpointercapture"];function $y(r){let t=r.substring(2).toLowerCase();const i=!!~t.indexOf("passive");i&&(t=t.replace("passive",""));const s=Jy.includes(t)?"capturecapture":"capture",l=!!~t.indexOf(s);return l&&(t=t.replace("capture","")),{device:t,capture:l,passive:i}}function tM(r,t=""){const i=Bv[r],s=i&&i[t]||t;return r+s}function hu(r){return"touches"in r}function Fv(r){return hu(r)?"touch":"pointerType"in r?r.pointerType:"mouse"}function eM(r){return Array.from(r.touches).filter(t=>{var i,s;return t.target===r.currentTarget||((i=r.currentTarget)===null||i===void 0||(s=i.contains)===null||s===void 0?void 0:s.call(i,t.target))})}function nM(r){return r.type==="touchend"||r.type==="touchcancel"?r.changedTouches:r.targetTouches}function zv(r){return hu(r)?nM(r)[0]:r}function dd(r,t){try{const i=t.clientX-r.clientX,s=t.clientY-r.clientY,l=(t.clientX+r.clientX)/2,c=(t.clientY+r.clientY)/2,h=Math.hypot(i,s);return{angle:-(Math.atan2(i,s)*180)/Math.PI,distance:h,origin:[l,c]}}catch{}return null}function iM(r){return eM(r).map(t=>t.identifier)}function __(r,t){const[i,s]=Array.from(r.touches).filter(l=>t.includes(l.identifier));return dd(i,s)}function Dh(r){const t=zv(r);return hu(r)?t.identifier:t.pointerId}function Hr(r){const t=zv(r);return[t.clientX,t.clientY]}const v_=40,x_=800;function Hv(r){let{deltaX:t,deltaY:i,deltaMode:s}=r;return s===1?(t*=v_,i*=v_):s===2&&(t*=x_,i*=x_),[t,i]}function aM(r){var t,i;const{scrollX:s,scrollY:l,scrollLeft:c,scrollTop:h}=r.currentTarget;return[(t=s??c)!==null&&t!==void 0?t:0,(i=l??h)!==null&&i!==void 0?i:0]}function sM(r){const t={};if("buttons"in r&&(t.buttons=r.buttons),"shiftKey"in r){const{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c}=r;Object.assign(t,{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c})}return t}function su(r,...t){return typeof r=="function"?r(...t):r}function rM(){}function oM(...r){return r.length===0?rM:r.length===1?r[0]:function(){let t;for(const i of r)t=i.apply(this,arguments)||t;return t}}function S_(r,t){return Object.assign({},t,r||{})}const lM=32;class Gv{constructor(t,i,s){this.ctrl=t,this.args=i,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:i,ingKey:s,args:l}=this;i[s]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=l,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const i=this.state,s=this.config;i._active||(this.reset(),this.computeInitial(),i._active=!0,i.target=t.target,i.currentTarget=t.currentTarget,i.lastOffset=s.from?su(s.from,i):i.offset,i.offset=i.lastOffset,i.startTime=i.timeStamp=t.timeStamp)}computeValues(t){const i=this.state;i._values=t,i.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:i,config:s,shared:l}=this;i.args=this.args;let c=0;if(t&&(i.event=t,s.preventDefault&&t.cancelable&&i.event.preventDefault(),i.type=t.type,l.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,l.locked=!!document.pointerLockElement,Object.assign(l,sM(t)),l.down=l.pressed=l.buttons%2===1||l.touches>0,c=t.timeStamp-i.timeStamp,i.timeStamp=t.timeStamp,i.elapsedTime=i.timeStamp-i.startTime),i._active){const I=i._delta.map(Math.abs);Ke.addTo(i._distance,I)}this.axisIntent&&this.axisIntent(t);const[h,d]=i._movement,[m,p]=s.threshold,{_step:g,values:_}=i;if(s.hasCustomTransform?(g[0]===!1&&(g[0]=Math.abs(h)>=m&&_[0]),g[1]===!1&&(g[1]=Math.abs(d)>=p&&_[1])):(g[0]===!1&&(g[0]=Math.abs(h)>=m&&Math.sign(h)*m),g[1]===!1&&(g[1]=Math.abs(d)>=p&&Math.sign(d)*p)),i.intentional=g[0]!==!1||g[1]!==!1,!i.intentional)return;const S=[0,0];if(s.hasCustomTransform){const[I,B]=_;S[0]=g[0]!==!1?I-g[0]:0,S[1]=g[1]!==!1?B-g[1]:0}else S[0]=g[0]!==!1?h-g[0]:0,S[1]=g[1]!==!1?d-g[1]:0;this.restrictToAxis&&!i._blocked&&this.restrictToAxis(S);const E=i.offset,T=i._active&&!i._blocked||i.active;T&&(i.first=i._active&&!i.active,i.last=!i._active&&i.active,i.active=l[this.ingKey]=i._active,t&&(i.first&&("bounds"in s&&(i._bounds=su(s.bounds,i)),this.setup&&this.setup()),i.movement=S,this.computeOffset()));const[b,y]=i.offset,[[x,P],[L,N]]=i._bounds;i.overflow=[b<x?-1:b>P?1:0,y<L?-1:y>N?1:0],i._movementBound[0]=i.overflow[0]?i._movementBound[0]===!1?i._movement[0]:i._movementBound[0]:!1,i._movementBound[1]=i.overflow[1]?i._movementBound[1]===!1?i._movement[1]:i._movementBound[1]:!1;const F=i._active?s.rubberband||[0,0]:[0,0];if(i.offset=Yy(i._bounds,i.offset,F),i.delta=Ke.sub(i.offset,E),this.computeMovement(),T&&(!i.last||c>lM)){i.delta=Ke.sub(i.offset,E);const I=i.delta.map(Math.abs);Ke.addTo(i.distance,I),i.direction=i.delta.map(Math.sign),i._direction=i._delta.map(Math.sign),!i.first&&c>0&&(i.velocity=[I[0]/c,I[1]/c],i.timeDelta=c)}}emit(){const t=this.state,i=this.shared,s=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!s.triggerAllEvents)return;const l=this.handler(tn(tn(tn({},i),t),{},{[this.aliasKey]:t.values}));l!==void 0&&(t.memo=l)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function cM([r,t],i){const s=Math.abs(r),l=Math.abs(t);if(s>l&&s>i)return"x";if(l>s&&l>i)return"y"}class cl extends Gv{constructor(...t){super(...t),pn(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Ke.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Ke.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const i=this.state,s=this.config;if(!i.axis&&t){const l=typeof s.axisThreshold=="object"?s.axisThreshold[Fv(t)]:s.axisThreshold;i.axis=cM(i._movement,l)}i._blocked=(s.lockDirection||!!s.axis)&&!i.axis||!!s.axis&&s.axis!==i.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const uM=r=>r,y_=.15,Vv={enabled(r=!0){return r},eventOptions(r,t,i){return tn(tn({},i.shared.eventOptions),r)},preventDefault(r=!1){return r},triggerAllEvents(r=!1){return r},rubberband(r=0){switch(r){case!0:return[y_,y_];case!1:return[0,0];default:return Ke.toVector(r)}},from(r){if(typeof r=="function")return r;if(r!=null)return Ke.toVector(r)},transform(r,t,i){const s=r||i.shared.transform;return this.hasCustomTransform=!!s,s||uM},threshold(r){return Ke.toVector(r,0)}},fM=0,Ps=tn(tn({},Vv),{},{axis(r,t,{axis:i}){if(this.lockDirection=i==="lock",!this.lockDirection)return i},axisThreshold(r=fM){return r},bounds(r={}){if(typeof r=="function")return c=>Ps.bounds(r(c));if("current"in r)return()=>r.current;if(typeof HTMLElement=="function"&&r instanceof HTMLElement)return r;const{left:t=-1/0,right:i=1/0,top:s=-1/0,bottom:l=1/0}=r;return[[t,i],[s,l]]}}),M_={ArrowRight:(r,t=1)=>[r*t,0],ArrowLeft:(r,t=1)=>[-1*r*t,0],ArrowUp:(r,t=1)=>[0,-1*r*t],ArrowDown:(r,t=1)=>[0,r*t]};class hM extends cl{constructor(...t){super(...t),pn(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const i=t._bounds.getBoundingClientRect(),s=t.currentTarget.getBoundingClientRect(),l={left:i.left-s.left+t.offset[0],right:i.right-s.right+t.offset[0],top:i.top-s.top+t.offset[1],bottom:i.bottom-s.bottom+t.offset[1]};t._bounds=Ps.bounds(l)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const i=this.config,s=this.state;if(t.buttons!=null&&(Array.isArray(i.pointerButtons)?!i.pointerButtons.includes(t.buttons):i.pointerButtons!==-1&&i.pointerButtons!==t.buttons))return;const l=this.ctrl.setEventIds(t);i.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(l&&l.size>1&&s._pointerActive)&&(this.start(t),this.setupPointer(t),s._pointerId=Dh(t),s._pointerActive=!0,this.computeValues(Hr(t)),this.computeInitial(),i.preventScrollAxis&&Fv(t)!=="mouse"?(s._active=!1,this.setupScrollPrevention(t)):i.delay>0?(this.setupDelayTrigger(t),i.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const i=this.state;i._active=!0,i._preventScroll=!0,i._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const i=this.state,s=this.config;if(!i._pointerActive)return;const l=Dh(t);if(i._pointerId!==void 0&&l!==i._pointerId)return;const c=Hr(t);if(document.pointerLockElement===t.target?i._delta=[t.movementX,t.movementY]:(i._delta=Ke.sub(c,i._values),this.computeValues(c)),Ke.addTo(i._movement,i._delta),this.compute(t),i._delayed&&i.intentional){this.timeoutStore.remove("dragDelay"),i.active=!1,this.startPointerDrag(t);return}if(s.preventScrollAxis&&!i._preventScroll)if(i.axis)if(i.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){i._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const i=this.state,s=this.config;if(!i._active||!i._pointerActive)return;const l=Dh(t);if(i._pointerId!==void 0&&l!==i._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[c,h]=i._distance;if(i.tap=c<=s.tapsThreshold&&h<=s.tapsThreshold,i.tap&&s.filterTaps)i._force=!0;else{const[d,m]=i._delta,[p,g]=i._movement,[_,S]=s.swipe.velocity,[E,T]=s.swipe.distance,b=s.swipe.duration;if(i.elapsedTime<b){const y=Math.abs(d/i.timeDelta),x=Math.abs(m/i.timeDelta);y>_&&Math.abs(p)>E&&(i.swipe[0]=Math.sign(d)),x>S&&Math.abs(g)>T&&(i.swipe[1]=Math.sign(m))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const i=this.config,s=i.device;i.pointerLock&&t.currentTarget.requestPointerLock(),i.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,dM(t);const i=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",i),this.eventStore.add(this.sharedConfig.window,"touch","cancel",i),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const i=M_[t.key];if(i){const s=this.state,l=t.shiftKey?10:t.altKey?.1:1;this.start(t),s._delta=i(this.config.keyboardDisplacement,l),s._keyboardActive=!0,Ke.addTo(s._movement,s._delta),this.compute(t),this.emit()}}keyUp(t){t.key in M_&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const i=this.config.device;t(i,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(i,"change",this.pointerMove.bind(this)),t(i,"end",this.pointerUp.bind(this)),t(i,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function dM(r){"persist"in r&&typeof r.persist=="function"&&r.persist()}const ul=typeof window<"u"&&window.document&&window.document.createElement;function kv(){return ul&&"ontouchstart"in window}function pM(){return kv()||ul&&window.navigator.maxTouchPoints>1}function mM(){return ul&&"onpointerdown"in window}function gM(){return ul&&"exitPointerLock"in window.document}function _M(){try{return"constructor"in GestureEvent}catch{return!1}}const xi={isBrowser:ul,gesture:_M(),touch:kv(),touchscreen:pM(),pointer:mM(),pointerLock:gM()},vM=250,xM=180,SM=.5,yM=50,MM=250,EM=10,E_={mouse:0,touch:0,pen:8},bM=tn(tn({},Ps),{},{device(r,t,{pointer:{touch:i=!1,lock:s=!1,mouse:l=!1}={}}){return this.pointerLock=s&&xi.pointerLock,xi.touch&&i?"touch":this.pointerLock?"mouse":xi.pointer&&!l?"pointer":xi.touch?"touch":"mouse"},preventScrollAxis(r,t,{preventScroll:i}){if(this.preventScrollDelay=typeof i=="number"?i:i||i===void 0&&r?vM:void 0,!(!xi.touchscreen||i===!1))return r||(i!==void 0?"y":void 0)},pointerCapture(r,t,{pointer:{capture:i=!0,buttons:s=1,keys:l=!0}={}}){return this.pointerButtons=s,this.keys=l,!this.pointerLock&&this.device==="pointer"&&i},threshold(r,t,{filterTaps:i=!1,tapsThreshold:s=3,axis:l=void 0}){const c=Ke.toVector(r,i?s:l?1:0);return this.filterTaps=i,this.tapsThreshold=s,c},swipe({velocity:r=SM,distance:t=yM,duration:i=MM}={}){return{velocity:this.transform(Ke.toVector(r)),distance:this.transform(Ke.toVector(t)),duration:i}},delay(r=0){switch(r){case!0:return xM;case!1:return 0;default:return r}},axisThreshold(r){return r?tn(tn({},E_),r):E_},keyboardDisplacement(r=EM){return r}});function Xv(r){const[t,i]=r.overflow,[s,l]=r._delta,[c,h]=r._direction;(t<0&&s>0&&c<0||t>0&&s<0&&c>0)&&(r._movement[0]=r._movementBound[0]),(i<0&&l>0&&h<0||i>0&&l<0&&h>0)&&(r._movement[1]=r._movementBound[1])}const TM=30,AM=100;class RM extends Gv{constructor(...t){super(...t),pn(this,"ingKey","pinching"),pn(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:i,lastOffset:s}=this.state;t==="wheel"?this.state.offset=Ke.add(i,s):this.state.offset=[(1+i[0])*s[0],i[1]+s[1]]}computeMovement(){const{offset:t,lastOffset:i}=this.state;this.state.movement=[t[0]/i[0],t[1]-i[1]]}axisIntent(){const t=this.state,[i,s]=t._movement;if(!t.axis){const l=Math.abs(i)*TM-Math.abs(s);l<0?t.axis="angle":l>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const i=this.state,s=this.ctrl.touchIds;if(i._active&&i._touchIds.every(c=>s.has(c))||s.size<2)return;this.start(t),i._touchIds=Array.from(s).slice(0,2);const l=__(t,i._touchIds);l&&this.pinchStart(t,l)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const i=this.state,s=i._pointerEvents,l=this.ctrl.pointerIds;if(i._active&&Array.from(s.keys()).every(h=>l.has(h))||(s.size<2&&s.set(t.pointerId,t),i._pointerEvents.size<2))return;this.start(t);const c=dd(...Array.from(s.values()));c&&this.pinchStart(t,c)}pinchStart(t,i){const s=this.state;s.origin=i.origin,this.computeValues([i.distance,i.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const i=__(t,this.state._touchIds);i&&this.pinchMove(t,i)}pointerMove(t){const i=this.state._pointerEvents;if(i.has(t.pointerId)&&i.set(t.pointerId,t),!this.state._active)return;const s=dd(...Array.from(i.values()));s&&this.pinchMove(t,s)}pinchMove(t,i){const s=this.state,l=s._values[1],c=i.angle-l;let h=0;Math.abs(c)>270&&(h+=Math.sign(c)),this.computeValues([i.distance,i.angle-360*h]),s.origin=i.origin,s.turns=h,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some(i=>!this.ctrl.touchIds.has(i))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const i=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch{}i._pointerEvents.has(t.pointerId)&&i._pointerEvents.delete(t.pointerId),i._active&&i._pointerEvents.size<2&&(i._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const i=this.state;i._active||(this.start(t),this.computeValues([t.scale,t.rotation]),i.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const i=this.state;this.computeValues([t.scale,t.rotation]),i.origin=[t.clientX,t.clientY];const s=i._movement;i._movement=[t.scale-1,t.rotation],i._delta=Ke.sub(i._movement,s),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const i=this.config.modifierKey;i&&(Array.isArray(i)?!i.find(s=>t[s]):!t[i])||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const s=this.state;s._delta=[-Hv(t)[1]/AM*s.offset[0],0],Ke.addTo(s._movement,s._delta),Xv(s),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const i=this.config.device;i&&(t(i,"start",this[i+"Start"].bind(this)),t(i,"change",this[i+"Move"].bind(this)),t(i,"end",this[i+"End"].bind(this)),t(i,"cancel",this[i+"End"].bind(this)),t("lostPointerCapture","",this[i+"End"].bind(this))),this.config.pinchOnWheel&&t("wheel","",this.wheel.bind(this),{passive:!1})}}const CM=tn(tn({},Vv),{},{device(r,t,{shared:i,pointer:{touch:s=!1}={}}){if(i.target&&!xi.touch&&xi.gesture)return"gesture";if(xi.touch&&s)return"touch";if(xi.touchscreen){if(xi.pointer)return"pointer";if(xi.touch)return"touch"}},bounds(r,t,{scaleBounds:i={},angleBounds:s={}}){const l=h=>{const d=S_(su(i,h),{min:-1/0,max:1/0});return[d.min,d.max]},c=h=>{const d=S_(su(s,h),{min:-1/0,max:1/0});return[d.min,d.max]};return typeof i!="function"&&typeof s!="function"?[l(),c()]:h=>[l(h),c(h)]},threshold(r,t,i){return this.lockDirection=i.axis==="lock",Ke.toVector(r,this.lockDirection?[.1,3]:0)},modifierKey(r){return r===void 0?"ctrlKey":r},pinchOnWheel(r=!0){return r}});class wM extends cl{constructor(...t){super(...t),pn(this,"ingKey","moving")}move(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(Hr(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const i=Hr(t),s=this.state;s._delta=Ke.sub(i,s._values),Ke.addTo(s._movement,s._delta),this.computeValues(i),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}}const DM=tn(tn({},Ps),{},{mouseOnly:(r=!0)=>r});class UM extends cl{constructor(...t){super(...t),pn(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const i=this.state,s=aM(t);i._delta=Ke.sub(s,i._values),Ke.addTo(i._movement,i._delta),this.computeValues(s),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}}const LM=Ps;class NM extends cl{constructor(...t){super(...t),pn(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const i=this.state;i._delta=Hv(t),Ke.addTo(i._movement,i._delta),Xv(i),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const OM=Ps;class PM extends cl{constructor(...t){super(...t),pn(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.start(t),this.computeValues(Hr(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&t.pointerType!=="mouse")return;const i=this.state;if(!i._active)return;i._active=!1;const s=Hr(t);i._movement=i._delta=Ke.sub(s,i._values),this.computeValues(s),this.compute(t),i.delta=i.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}}const IM=tn(tn({},Ps),{},{mouseOnly:(r=!0)=>r}),hp=new Map,pd=new Map;function BM(r){hp.set(r.key,r.engine),pd.set(r.key,r.resolver)}const FM={key:"drag",engine:hM,resolver:bM},zM={key:"hover",engine:PM,resolver:IM},HM={key:"move",engine:wM,resolver:DM},GM={key:"pinch",engine:RM,resolver:CM},VM={key:"scroll",engine:UM,resolver:LM},kM={key:"wheel",engine:NM,resolver:OM};function XM(r,t){if(r==null)return{};var i={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(t.indexOf(l)>=0)&&(i[l]=r[l]);return i}function WM(r,t){if(r==null)return{};var i=XM(r,t),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}const YM={target(r){if(r)return()=>"current"in r?r.current:r},enabled(r=!0){return r},window(r=xi.isBrowser?window:void 0){return r},eventOptions({passive:r=!0,capture:t=!1}={}){return{passive:r,capture:t}},transform(r){return r}},qM=["target","eventOptions","window","enabled","transform"];function Qc(r={},t){const i={};for(const[s,l]of Object.entries(t))switch(typeof l){case"function":i[s]=l.call(i,r[s],s,r);break;case"object":i[s]=Qc(r[s],l);break;case"boolean":l&&(i[s]=r[s]);break}return i}function jM(r,t,i={}){const s=r,{target:l,eventOptions:c,window:h,enabled:d,transform:m}=s,p=WM(s,qM);if(i.shared=Qc({target:l,eventOptions:c,window:h,enabled:d,transform:m},YM),t){const g=pd.get(t);i[t]=Qc(tn({shared:i.shared},p),g)}else for(const g in p){const _=pd.get(g);_&&(i[g]=Qc(tn({shared:i.shared},p[g]),_))}return i}class Wv{constructor(t,i){pn(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=i}add(t,i,s,l,c){const h=this._listeners,d=tM(i,s),m=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},p=tn(tn({},m),c);t.addEventListener(d,l,p);const g=()=>{t.removeEventListener(d,l,p),h.delete(g)};return h.add(g),g}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class ZM{constructor(){pn(this,"_timeouts",new Map)}add(t,i,s=140,...l){this.remove(t),this._timeouts.set(t,window.setTimeout(i,s,...l))}remove(t){const i=this._timeouts.get(t);i&&window.clearTimeout(i)}clean(){this._timeouts.forEach(t=>{window.clearTimeout(t)}),this._timeouts.clear()}}class KM{constructor(t){pn(this,"gestures",new Set),pn(this,"_targetEventStore",new Wv(this)),pn(this,"gestureEventStores",{}),pn(this,"gestureTimeoutStores",{}),pn(this,"handlers",{}),pn(this,"config",{}),pn(this,"pointerIds",new Set),pn(this,"touchIds",new Set),pn(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),QM(this,t)}setEventIds(t){if(hu(t))return this.touchIds=new Set(iM(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,i){this.handlers=t,this.nativeHandlers=i}applyConfig(t,i){this.config=jM(t,i,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const i=this.config.shared,s={};let l;if(!(i.target&&(l=i.target(),!l))){if(i.enabled){for(const h of this.gestures){const d=this.config[h],m=b_(s,d.eventOptions,!!l);if(d.enabled){const p=hp.get(h);new p(this,t,h).bind(m)}}const c=b_(s,i.eventOptions,!!l);for(const h in this.nativeHandlers)c(h,"",d=>this.nativeHandlers[h](tn(tn({},this.state.shared),{},{event:d,args:t})),void 0,!0)}for(const c in s)s[c]=oM(...s[c]);if(!l)return s;for(const c in s){const{device:h,capture:d,passive:m}=$y(c);this._targetEventStore.add(l,h,"",s[c],{capture:d,passive:m})}}}}function vr(r,t){r.gestures.add(t),r.gestureEventStores[t]=new Wv(r,t),r.gestureTimeoutStores[t]=new ZM}function QM(r,t){t.drag&&vr(r,"drag"),t.wheel&&vr(r,"wheel"),t.scroll&&vr(r,"scroll"),t.move&&vr(r,"move"),t.pinch&&vr(r,"pinch"),t.hover&&vr(r,"hover")}const b_=(r,t,i)=>(s,l,c,h={},d=!1)=>{var m,p;const g=(m=h.capture)!==null&&m!==void 0?m:t.capture,_=(p=h.passive)!==null&&p!==void 0?p:t.passive;let S=d?s:Qy(s,l,g);i&&_&&(S+="Passive"),r[S]=r[S]||[],r[S].push(c)},JM=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function $M(r){const t={},i={},s=new Set;for(let l in r)JM.test(l)?(s.add(RegExp.lastMatch),i[l]=r[l]):t[l]=r[l];return[i,t,s]}function xr(r,t,i,s,l,c){if(!r.has(i)||!hp.has(s))return;const h=i+"Start",d=i+"End",m=p=>{let g;return p.first&&h in t&&t[h](p),i in t&&(g=t[i](p)),p.last&&d in t&&t[d](p),g};l[s]=m,c[s]=c[s]||{}}function tE(r,t){const[i,s,l]=$M(r),c={};return xr(l,i,"onDrag","drag",c,t),xr(l,i,"onWheel","wheel",c,t),xr(l,i,"onScroll","scroll",c,t),xr(l,i,"onPinch","pinch",c,t),xr(l,i,"onMove","move",c,t),xr(l,i,"onHover","hover",c,t),{handlers:c,config:t,nativeHandlers:s}}function eE(r,t={},i,s){const l=Th.useMemo(()=>new KM(r),[]);if(l.applyHandlers(r,s),l.applyConfig(t,i),Th.useEffect(l.effect.bind(l)),Th.useEffect(()=>l.clean.bind(l),[]),t.target===void 0)return l.bind.bind(l)}function nE(r){return r.forEach(BM),function(i,s){const{handlers:l,nativeHandlers:c,config:h}=tE(i,s||{});return eE(l,h,void 0,c)}}function iE(r,t){return nE([FM,GM,VM,kM,HM,zM])(r,t||{})}function Yv(){const r=te.useContext(Iv);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r}const dp="182",aE=0,T_=1,sE=2,Jc=1,rE=2,tl=3,as=0,Kn=1,ga=2,va=0,Fr=1,A_=2,R_=3,C_=4,oE=5,Ds=100,lE=101,cE=102,uE=103,fE=104,hE=200,dE=201,pE=202,mE=203,md=204,gd=205,gE=206,_E=207,vE=208,xE=209,SE=210,yE=211,ME=212,EE=213,bE=214,_d=0,vd=1,xd=2,Gr=3,Sd=4,yd=5,Md=6,Ed=7,qv=0,TE=1,AE=2,ki=0,jv=1,Zv=2,Kv=3,Qv=4,Jv=5,$v=6,tx=7,ex=300,Os=301,Vr=302,bd=303,Td=304,du=306,Ad=1e3,_a=1001,Rd=1002,Un=1003,RE=1004,Ac=1005,Bn=1006,Uh=1007,Ls=1008,yi=1009,nx=1010,ix=1011,al=1012,pp=1013,Wi=1014,Gi=1015,Sa=1016,mp=1017,gp=1018,sl=1020,ax=35902,sx=35899,rx=1021,ox=1022,Ni=1023,ya=1026,Ns=1027,lx=1028,_p=1029,kr=1030,vp=1031,xp=1033,$c=33776,tu=33777,eu=33778,nu=33779,Cd=35840,wd=35841,Dd=35842,Ud=35843,Ld=36196,Nd=37492,Od=37496,Pd=37488,Id=37489,Bd=37490,Fd=37491,zd=37808,Hd=37809,Gd=37810,Vd=37811,kd=37812,Xd=37813,Wd=37814,Yd=37815,qd=37816,jd=37817,Zd=37818,Kd=37819,Qd=37820,Jd=37821,$d=36492,tp=36494,ep=36495,np=36283,ip=36284,ap=36285,sp=36286,CE=3200,wE=0,DE=1,ns="",vi="srgb",Xr="srgb-linear",ru="linear",ze="srgb",Sr=7680,w_=519,UE=512,LE=513,NE=514,Sp=515,OE=516,PE=517,yp=518,IE=519,D_=35044,U_="300 es",Vi=2e3,ou=2001;function cx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function BE(){const r=lu("canvas");return r.style.display="block",r}const L_={};function N_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ae(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function rl(...r){const t=r.join(" ");t in L_||(L_[t]=!0,ae(...r))}function FE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Yr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let O_=1234567;const nl=Math.PI/180,ol=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function Mp(r,t){return(r%t+t)%t}function zE(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function HE(r,t,i){return r!==t?(i-r)/(t-r):0}function il(r,t,i){return(1-i)*r+i*t}function GE(r,t,i,s){return il(r,t,1-Math.exp(-i*s))}function VE(r,t=1){return t-Math.abs(Mp(r,t*2)-t)}function kE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function XE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function WE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function YE(r,t){return r+Math.random()*(t-r)}function qE(r){return r*(.5-Math.random())}function jE(r){r!==void 0&&(O_=r);let t=O_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ZE(r){return r*nl}function KE(r){return r*ol}function QE(r){return(r&r-1)===0&&r!==0}function JE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $E(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tb(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),g=h((t+s)/2),_=c((t-s)/2),S=h((t-s)/2),E=c((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*S,d*p);break;case"YZY":r.set(m*S,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*S,d*g,d*p);break;case"XZX":r.set(d*g,m*T,m*E,d*p);break;case"YXY":r.set(m*E,d*g,m*T,d*p);break;case"ZYZ":r.set(m*T,m*E,d*g,d*p);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ir(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Lh={DEG2RAD:nl,RAD2DEG:ol,generateUUID:qr,clamp:Ee,euclideanModulo:Mp,mapLinear:zE,inverseLerp:HE,lerp:il,damp:GE,pingpong:VE,smoothstep:kE,smootherstep:XE,randInt:WE,randFloat:YE,randFloatSpread:qE,seededRandom:jE,degToRad:ZE,radToDeg:KE,isPowerOfTwo:QE,ceilPowerOfTwo:JE,floorPowerOfTwo:$E,setQuaternionFromProperEuler:tb,normalize:Hn,denormalize:Ir};class He{constructor(t=0,i=0){He.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=c[h+0],E=c[h+1],T=c[h+2],b=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=E,t[i+2]=T,t[i+3]=b;return}if(_!==b||m!==S||p!==E||g!==T){let y=m*S+p*E+g*T+_*b;y<0&&(S=-S,E=-E,T=-T,b=-b,y=-y);let x=1-d;if(y<.9995){const P=Math.acos(y),L=Math.sin(P);x=Math.sin(x*P)/L,d=Math.sin(d*P)/L,m=m*x+S*d,p=p*x+E*d,g=g*x+T*d,_=_*x+b*d}else{m=m*x+S*d,p=p*x+E*d,g=g*x+T*d,_=_*x+b*d;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],S=c[h+1],E=c[h+2],T=c[h+3];return t[i]=d*T+g*_+m*E-p*S,t[i+1]=m*T+g*S+p*_-d*E,t[i+2]=p*T+g*E+d*S-m*_,t[i+3]=g*T-d*_-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),S=m(s/2),E=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=S*g*_+p*E*T,this._y=p*E*_-S*g*T,this._z=p*g*T+S*E*_,this._w=p*g*_-S*E*T;break;case"YXZ":this._x=S*g*_+p*E*T,this._y=p*E*_-S*g*T,this._z=p*g*T-S*E*_,this._w=p*g*_+S*E*T;break;case"ZXY":this._x=S*g*_-p*E*T,this._y=p*E*_+S*g*T,this._z=p*g*T+S*E*_,this._w=p*g*_-S*E*T;break;case"ZYX":this._x=S*g*_-p*E*T,this._y=p*E*_+S*g*T,this._z=p*g*T-S*E*_,this._w=p*g*_+S*E*T;break;case"YZX":this._x=S*g*_+p*E*T,this._y=p*E*_+S*g*T,this._z=p*g*T-S*E*_,this._w=p*g*_-S*E*T;break;case"XZY":this._x=S*g*_-p*E*T,this._y=p*E*_-S*g*T,this._z=p*g*T+S*E*_,this._w=p*g*_+S*E*T;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=s+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(g-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>_){const E=2*Math.sqrt(1+s-d-_);this._w=(g-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-s-_);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+_-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,s=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(P_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(P_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Nh.copy(this).projectOnVector(t),this.sub(Nh)}reflect(t){return this.sub(Nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nh=new it,P_=new fl;class de{constructor(t,i,s,l,c,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],E=s[5],T=s[8],b=l[0],y=l[3],x=l[6],P=l[1],L=l[4],N=l[7],F=l[2],I=l[5],B=l[8];return c[0]=h*b+d*P+m*F,c[3]=h*y+d*L+m*I,c[6]=h*x+d*N+m*B,c[1]=p*b+g*P+_*F,c[4]=p*y+g*L+_*I,c[7]=p*x+g*N+_*B,c[2]=S*b+E*P+T*F,c[5]=S*y+E*L+T*I,c[8]=S*x+E*N+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,S=d*m-g*c,E=p*c-h*m,T=i*_+s*S+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=_*b,t[1]=(l*p-g*s)*b,t[2]=(d*s-l*h)*b,t[3]=S*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=E*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Oh.makeScale(t,i)),this}rotate(t){return this.premultiply(Oh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new de,I_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eb(){const r={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=zr(l.r),l.g=zr(l.g),l.b=zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xr]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:I_,fromXYZ:B_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:I_,fromXYZ:B_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}const Ce=eb();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yr;class nb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yr===void 0&&(yr=lu("canvas")),yr.width=t.width,yr.height=t.height;const l=yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ib=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Ph(l[h].image)):c.push(Ph(l[h]))}else c=Ph(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ph(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let ab=0;const Ih=new it;class Vn extends Yr{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=_a,l=_a,c=Bn,h=Ls,d=Ni,m=yi,p=Vn.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=qr(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ex)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ad:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case Rd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ad:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case Rd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ex;Vn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],E=m[5],T=m[9],b=m[2],y=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-b)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+b)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(E+1)/2,F=(x+1)/2,I=(g+S)/4,B=(_+b)/4,Q=(T+y)/4;return L>N&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=I/s,c=B/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=I/l,c=Q/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=B/c,l=Q/c),this.set(s,l,c,i),this}let P=Math.sqrt((y-T)*(y-T)+(_-b)*(_-b)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(y-T)/P,this.y=(_-b)/P,this.z=(S-g)/P,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sb extends Yr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends sb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ux extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rb extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Cc.subVectors(this.max,Wo),Mr.subVectors(t.a,Wo),Er.subVectors(t.b,Wo),br.subVectors(t.c,Wo),Ka.subVectors(Er,Mr),Qa.subVectors(br,Er),Es.subVectors(Mr,br);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Es.z,Es.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Es.z,0,-Es.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Es.y,Es.x,0];return!Bh(i,Mr,Er,br,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Bh(i,Mr,Er,br,Cc))?!1:(wc.crossVectors(Ka,Qa),i=[wc.x,wc.y,wc.z],Bh(i,Mr,Er,br,Cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fa=[new it,new it,new it,new it,new it,new it,new it,new it],wi=new it,Rc=new hl,Mr=new it,Er=new it,br=new it,Ka=new it,Qa=new it,Es=new it,Wo=new it,Cc=new it,wc=new it,bs=new it;function Bh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){bs.fromArray(r,c);const d=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),g=s.dot(bs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const ob=new hl,Yo=new it,Fh=new it;class dl{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ob.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Fh)),this.expandByPoint(Yo.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ha=new it,zh=new it,Dc=new it,Ja=new it,Hh=new it,Uc=new it,Gh=new it;class pu{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ha.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){zh.copy(t).add(i).multiplyScalar(.5),Dc.copy(i).sub(t).normalize(),Ja.copy(this.origin).sub(zh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Dc),d=Ja.dot(this.direction),m=-Ja.dot(Dc),p=Ja.lengthSq(),g=Math.abs(1-h*h);let _,S,E,T;if(g>0)if(_=h*m-d,S=h*d-m,T=c*g,_>=0)if(S>=-T)if(S<=T){const b=1/g;_*=b,S*=b,E=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S<=-T?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p):S<=T?(_=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(zh).addScaledVector(Dc,S),E}intersectSphere(t,i){ha.subVectors(t.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,i,s,l,c){Hh.subVectors(i,t),Uc.subVectors(s,t),Gh.crossVectors(Hh,Uc);let h=this.direction.dot(Gh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ja.subVectors(this.origin,t);const m=d*this.direction.dot(Uc.crossVectors(Ja,Uc));if(m<0)return null;const p=d*this.direction.dot(Hh.cross(Ja));if(p<0||m+p>h)return null;const g=-d*Ja.dot(Gh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,c,h,d,m,p,g,_,S,E,T,b,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,S,E,T,b,y)}set(t,i,s,l,c,h,d,m,p,g,_,S,E,T,b,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=E,x[7]=T,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),c=1/Tr.setFromMatrixColumn(t,1).length(),h=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*g,E=h*_,T=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=E+T*p,i[5]=S-b*p,i[9]=-d*m,i[2]=b-S*p,i[6]=T+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,E=m*_,T=p*g,b=p*_;i[0]=S+b*d,i[4]=T*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=E*d-T,i[6]=b+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,E=m*_,T=p*g,b=p*_;i[0]=S-b*d,i[4]=-h*_,i[8]=T+E*d,i[1]=E+T*d,i[5]=h*g,i[9]=b-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,E=h*_,T=d*g,b=d*_;i[0]=m*g,i[4]=T*p-E,i[8]=S*p+b,i[1]=m*_,i[5]=b*p+S,i[9]=E*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,T=d*m,b=d*p;i[0]=m*g,i[4]=b-S*_,i[8]=T*_+E,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*_+T,i[10]=S-b*_}else if(t.order==="XZY"){const S=h*m,E=h*p,T=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+b,i[5]=h*g,i[9]=E*_-T,i[2]=T*_-E,i[6]=d*g,i[10]=b*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lb,t,cb)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),$a.crossVectors(s,si),$a.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),$a.crossVectors(s,si)),$a.normalize(),Lc.crossVectors(si,$a),l[0]=$a.x,l[4]=Lc.x,l[8]=si.x,l[1]=$a.y,l[5]=Lc.y,l[9]=si.y,l[2]=$a.z,l[6]=Lc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],E=s[13],T=s[2],b=s[6],y=s[10],x=s[14],P=s[3],L=s[7],N=s[11],F=s[15],I=l[0],B=l[4],Q=l[8],C=l[12],D=l[1],X=l[5],nt=l[9],rt=l[13],lt=l[2],dt=l[6],O=l[10],G=l[14],V=l[3],ht=l[7],gt=l[11],U=l[15];return c[0]=h*I+d*D+m*lt+p*V,c[4]=h*B+d*X+m*dt+p*ht,c[8]=h*Q+d*nt+m*O+p*gt,c[12]=h*C+d*rt+m*G+p*U,c[1]=g*I+_*D+S*lt+E*V,c[5]=g*B+_*X+S*dt+E*ht,c[9]=g*Q+_*nt+S*O+E*gt,c[13]=g*C+_*rt+S*G+E*U,c[2]=T*I+b*D+y*lt+x*V,c[6]=T*B+b*X+y*dt+x*ht,c[10]=T*Q+b*nt+y*O+x*gt,c[14]=T*C+b*rt+y*G+x*U,c[3]=P*I+L*D+N*lt+F*V,c[7]=P*B+L*X+N*dt+F*ht,c[11]=P*Q+L*nt+N*O+F*gt,c[15]=P*C+L*rt+N*G+F*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],E=t[14],T=t[3],b=t[7],y=t[11],x=t[15],P=m*E-p*S,L=d*E-p*_,N=d*S-m*_,F=h*E-p*g,I=h*S-m*g,B=h*_-d*g;return i*(b*P-y*L+x*N)-s*(T*P-y*F+x*I)+l*(T*L-b*F+x*B)-c*(T*N-b*I+y*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],E=t[11],T=t[12],b=t[13],y=t[14],x=t[15],P=_*y*p-b*S*p+b*m*E-d*y*E-_*m*x+d*S*x,L=T*S*p-g*y*p-T*m*E+h*y*E+g*m*x-h*S*x,N=g*b*p-T*_*p+T*d*E-h*b*E-g*d*x+h*_*x,F=T*_*m-g*b*m-T*d*S+h*b*S+g*d*y-h*_*y,I=i*P+s*L+l*N+c*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=P*B,t[1]=(b*S*c-_*y*c-b*l*E+s*y*E+_*l*x-s*S*x)*B,t[2]=(d*y*c-b*m*c+b*l*p-s*y*p-d*l*x+s*m*x)*B,t[3]=(_*m*c-d*S*c-_*l*p+s*S*p+d*l*E-s*m*E)*B,t[4]=L*B,t[5]=(g*y*c-T*S*c+T*l*E-i*y*E-g*l*x+i*S*x)*B,t[6]=(T*m*c-h*y*c-T*l*p+i*y*p+h*l*x-i*m*x)*B,t[7]=(h*S*c-g*m*c+g*l*p-i*S*p-h*l*E+i*m*E)*B,t[8]=N*B,t[9]=(T*_*c-g*b*c-T*s*E+i*b*E+g*s*x-i*_*x)*B,t[10]=(h*b*c-T*d*c+T*s*p-i*b*p-h*s*x+i*d*x)*B,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*E-i*d*E)*B,t[12]=F*B,t[13]=(g*b*l-T*_*l+T*s*S-i*b*S-g*s*y+i*_*y)*B,t[14]=(T*d*l-h*b*l-T*s*m+i*b*m+h*s*y-i*d*y)*B,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*S+i*d*S)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,S=c*p,E=c*g,T=c*_,b=h*g,y=h*_,x=d*_,P=m*p,L=m*g,N=m*_,F=s.x,I=s.y,B=s.z;return l[0]=(1-(b+x))*F,l[1]=(E+N)*F,l[2]=(T-L)*F,l[3]=0,l[4]=(E-N)*I,l[5]=(1-(S+x))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(T+L)*B,l[9]=(y-P)*B,l[10]=(1-(S+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Tr.set(l[0],l[1],l[2]).length();const h=Tr.set(l[4],l[5],l[6]).length(),d=Tr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,g=1/h,_=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=_,Di.elements[9]*=_,Di.elements[10]*=_,i.setFromRotationMatrix(Di),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let T,b;if(m)T=c/(h-c),b=h*c/(h-c);else if(d===Vi)T=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===ou)T=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Vi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let T,b;if(m)T=1/(h-c),b=h/(h-c);else if(d===Vi)T=-2/(h-c),b=-(h+c)/(h-c);else if(d===ou)T=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Tr=new it,Di=new en,lb=new it(0,0,0),cb=new it(1,1,1),$a=new it,Lc=new it,si=new it,F_=new en,z_=new fl;class Ma{constructor(t=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return F_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(F_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return z_.setFromEuler(this),this.setFromQuaternion(z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ub=0;const H_=new it,Ar=new fl,da=new en,Nc=new it,qo=new it,fb=new it,hb=new fl,G_=new it(1,0,0),V_=new it(0,1,0),k_=new it(0,0,1),X_={type:"added"},db={type:"removed"},Rr={type:"childadded",child:null},Vh={type:"childremoved",child:null};class kn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new it,i=new Ma,s=new fl,l=new it(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new de}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(G_,t)}rotateY(t){return this.rotateOnAxis(V_,t)}rotateZ(t){return this.rotateOnAxis(k_,t)}translateOnAxis(t,i){return H_.copy(t).applyQuaternion(this.quaternion),this.position.add(H_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(G_,t)}translateY(t){return this.translateOnAxis(V_,t)}translateZ(t){return this.translateOnAxis(k_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Nc.copy(t):Nc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(qo,Nc,this.up):da.lookAt(Nc,qo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(da),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(X_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(db),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(X_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,fb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),E=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new it(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new it,pa=new it,kh=new it,ma=new it,Cr=new it,wr=new it,W_=new it,Xh=new it,Wh=new it,Yh=new it,qh=new on,jh=new on,Zh=new on;class Li{constructor(t=new it,i=new it,s=new it){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),pa.subVectors(s,i),kh.subVectors(t,i);const h=Ui.dot(Ui),d=Ui.dot(pa),m=Ui.dot(kh),p=pa.dot(pa),g=pa.dot(kh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,E=(p*m-d*g)*S,T=(h*g-d*m)*S;return c.set(1-E-T,T,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return qh.setScalar(0),jh.setScalar(0),Zh.setScalar(0),qh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,s),Zh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(qh,c.x),h.addScaledVector(jh,c.y),h.addScaledVector(Zh,c.z),h}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),pa.subVectors(t,i),Ui.cross(pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ui.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Cr.subVectors(l,s),wr.subVectors(c,s),Xh.subVectors(t,s);const m=Cr.dot(Xh),p=wr.dot(Xh);if(m<=0&&p<=0)return i.copy(s);Wh.subVectors(t,l);const g=Cr.dot(Wh),_=wr.dot(Wh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Cr,h);Yh.subVectors(t,c);const E=Cr.dot(Yh),T=wr.dot(Yh);if(T>=0&&E<=T)return i.copy(c);const b=E*p-m*T;if(b<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(wr,d);const y=g*T-E*_;if(y<=0&&_-g>=0&&E-T>=0)return W_.subVectors(c,l),d=(_-g)/(_-g+(E-T)),i.copy(l).addScaledVector(W_,d);const x=1/(y+b+S);return h=b*x,d=S*x,i.copy(s).addScaledVector(Cr,h).addScaledVector(wr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Te{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=Mp(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Kh(h,c,t+1/3),this.g=Kh(h,c,t),this.b=Kh(h,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=fx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Ce.workingToColorSpace(Pn.copy(this),t),Math.round(Ee(Pn.r*255,0,255))*65536+Math.round(Ee(Pn.g*255,0,255))*256+Math.round(Ee(Pn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=vi){Ce.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(Oc);const s=il(ts.h,Oc.h,i),l=il(ts.s,Oc.s,i),c=il(ts.l,Oc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Te;Te.NAMES=fx;let pb=0;class jr extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Fr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==md&&(s.blendSrc=this.blendSrc),this.blendDst!==gd&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hx extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new it,Pc=new He;let mb=0;class Mi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=D_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(t),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ir(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ir(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ir(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ir(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ir(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==D_&&(t.usage=this.usage),t}}class dx extends Mi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class px extends Mi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Qn extends Mi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let gb=0;const _i=new en,Qh=new kn,Dr=new it,ri=new hl,jo=new hl,Sn=new it;class In extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cx(t)?px:dx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,s){return _i.makeTranslation(t,i,s),this.applyMatrix4(_i),this}scale(t,i,s){return _i.makeScale(t,i,s),this.applyMatrix4(_i),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Qn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ri.min,jo.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,jo.max),ri.expandByPoint(Sn)):(ri.expandByPoint(jo.min),ri.expandByPoint(jo.max))}ri.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(Dr.fromBufferAttribute(t,p),Sn.add(Dr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<s.count;Q++)d[Q]=new it,m[Q]=new it;const p=new it,g=new it,_=new it,S=new He,E=new He,T=new He,b=new it,y=new it;function x(Q,C,D){p.fromBufferAttribute(s,Q),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,D),S.fromBufferAttribute(c,Q),E.fromBufferAttribute(c,C),T.fromBufferAttribute(c,D),g.sub(p),_.sub(p),E.sub(S),T.sub(S);const X=1/(E.x*T.y-T.x*E.y);isFinite(X)&&(b.copy(g).multiplyScalar(T.y).addScaledVector(_,-E.y).multiplyScalar(X),y.copy(_).multiplyScalar(E.x).addScaledVector(g,-T.x).multiplyScalar(X),d[Q].add(b),d[C].add(b),d[D].add(b),m[Q].add(y),m[C].add(y),m[D].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Q=0,C=P.length;Q<C;++Q){const D=P[Q],X=D.start,nt=D.count;for(let rt=X,lt=X+nt;rt<lt;rt+=3)x(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new it,N=new it,F=new it,I=new it;function B(Q){F.fromBufferAttribute(l,Q),I.copy(F);const C=d[Q];L.copy(C),L.sub(F.multiplyScalar(F.dot(C))).normalize(),N.crossVectors(I,C);const X=N.dot(m[Q])<0?-1:1;h.setXYZW(Q,L.x,L.y,L.z,X)}for(let Q=0,C=P.length;Q<C;++Q){const D=P[Q],X=D.start,nt=D.count;for(let rt=X,lt=X+nt;rt<lt;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new it,c=new it,h=new it,d=new it,m=new it,p=new it,g=new it,_=new it;if(t)for(let S=0,E=t.count;S<E;S+=3){const T=t.getX(S+0),b=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let E=0,T=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?E=m[b]*d.data.stride+d.offset:E=m[b]*g;for(let x=0;x<g;x++)S[T++]=p[E++]}return new Mi(S,g,_)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new In,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];g.push(E.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,E=_.length;S<E;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y_=new en,Ts=new pu,Ic=new dl,q_=new it,Bc=new it,Fc=new it,zc=new it,Jh=new it,Hc=new it,j_=new it,Gc=new it;class Ea extends kn{constructor(t=new In,i=new hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Jh.fromBufferAttribute(_,t),h?Hc.addScaledVector(Jh,g):Hc.addScaledVector(Jh.sub(i),g))}i.add(Hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(c),Ts.copy(t.ray).recast(t.near),!(Ic.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ic,q_)===null||Ts.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(Y_.copy(c).invert(),Ts.copy(t.ray).applyMatrix4(Y_),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ts)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,b=S.length;T<b;T++){const y=S[T],x=h[y.materialIndex],P=Math.max(y.start,E.start),L=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let N=P,F=L;N<F;N+=3){const I=d.getX(N),B=d.getX(N+1),Q=d.getX(N+2);l=Vc(this,x,t,s,p,g,_,I,B,Q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),b=Math.min(d.count,E.start+E.count);for(let y=T,x=b;y<x;y+=3){const P=d.getX(y),L=d.getX(y+1),N=d.getX(y+2);l=Vc(this,h,t,s,p,g,_,P,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,b=S.length;T<b;T++){const y=S[T],x=h[y.materialIndex],P=Math.max(y.start,E.start),L=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let N=P,F=L;N<F;N+=3){const I=N,B=N+1,Q=N+2;l=Vc(this,x,t,s,p,g,_,I,B,Q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),b=Math.min(m.count,E.start+E.count);for(let y=T,x=b;y<x;y+=3){const P=y,L=y+1,N=y+2;l=Vc(this,h,t,s,p,g,_,P,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function _b(r,t,i,s,l,c,h,d){let m;if(t.side===Kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===as,d),m===null)return null;Gc.copy(d),Gc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Gc);return p<i.near||p>i.far?null:{distance:p,point:Gc.clone(),object:r}}function Vc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Bc),r.getVertexPosition(m,Fc),r.getVertexPosition(p,zc);const g=_b(r,t,i,s,Bc,Fc,zc,j_);if(g){const _=new it;Li.getBarycoord(j_,Bc,Fc,zc,_),l&&(g.uv=Li.getInterpolatedAttribute(l,d,m,p,_,new He)),c&&(g.uv1=Li.getInterpolatedAttribute(c,d,m,p,_,new He)),h&&(g.normal=Li.getInterpolatedAttribute(h,d,m,p,_,new it),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new it,materialIndex:0};Li.getNormal(Bc,Fc,zc,S.normal),g.face=S,g.barycoord=_}return g}class pl extends In{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,E=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(_,2));function T(b,y,x,P,L,N,F,I,B,Q,C){const D=N/B,X=F/Q,nt=N/2,rt=F/2,lt=I/2,dt=B+1,O=Q+1;let G=0,V=0;const ht=new it;for(let gt=0;gt<O;gt++){const U=gt*X-rt;for(let tt=0;tt<dt;tt++){const _t=tt*D-nt;ht[b]=_t*P,ht[y]=U*L,ht[x]=lt,p.push(ht.x,ht.y,ht.z),ht[b]=0,ht[y]=0,ht[x]=I>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(tt/B),_.push(1-gt/Q),G+=1}}for(let gt=0;gt<Q;gt++)for(let U=0;U<B;U++){const tt=S+U+dt*gt,_t=S+U+dt*(gt+1),Tt=S+(U+1)+dt*(gt+1),zt=S+(U+1)+dt*gt;m.push(tt,_t,zt),m.push(_t,Tt,zt),V+=6}d.addGroup(E,V,C),E+=V,S+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)t[l]=s[l]}return t}function vb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function mx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const xb={clone:Wr,merge:Gn};var Sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sb,this.fragmentShader=yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=vb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class gx extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new it,Z_=new He,K_=new He;class Si extends gx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,Z_,K_),i.subVectors(K_,Z_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class Mb extends kn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const c=new Si(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const h=new Si(Ur,Lr,t,i);h.layers=this.layers,this.add(h);const d=new Si(Ur,Lr,t,i);d.layers=this.layers,this.add(d);const m=new Si(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new Si(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,S,E),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class _x extends Vn{constructor(t=[],i=Os,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vx extends Xi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _x(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:va});c.uniforms.tEquirect.value=i;const h=new Ea(l,c),d=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Bn),new Mb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Br extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const y=i.getJointPose(b,s),x=this._getHandJoint(p,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),E=.02,T=.005;p.inputState.pinching&&S>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Br;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class cu{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(t),this.density=i}clone(){return new cu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bb extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Tb extends Vn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Un,g=Un,_,S){super(null,h,d,m,p,g,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const td=new it,Ab=new it,Rb=new de;class ws{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=td.subVectors(s,i).cross(Ab.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(td),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Rb.getNormalMatrix(t),l=this.coplanarPoint(td).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new dl,Cb=new He(.5,.5),kc=new it;class xx{constructor(t=new ws,i=new ws,s=new ws,l=new ws,c=new ws,h=new ws){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],E=c[7],T=c[8],b=c[9],y=c[10],x=c[11],P=c[12],L=c[13],N=c[14],F=c[15];if(l[0].setComponents(p-h,E-g,x-T,F-P).normalize(),l[1].setComponents(p+h,E+g,x+T,F+P).normalize(),l[2].setComponents(p+d,E+_,x+b,F+L).normalize(),l[3].setComponents(p-d,E-_,x-b,F-L).normalize(),s)l[4].setComponents(m,S,y,N).normalize(),l[5].setComponents(p-m,E-S,x-y,F-N).normalize();else if(l[4].setComponents(p-m,E-S,x-y,F-N).normalize(),i===Vi)l[5].setComponents(p+m,E+S,x+y,F+N).normalize();else if(i===ou)l[5].setComponents(m,S,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);const i=Cb.distanceTo(t.center);return As.radius=.7071067811865476+i,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?t.max.x:t.min.x,kc.y=l.normal.y>0?t.max.y:t.min.y,kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uu=new it,fu=new it,Q_=new en,Zo=new pu,Xc=new dl,ed=new it,J_=new it;class Sx extends kn{constructor(t=new In,i=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uu.distanceTo(fu);t.setAttribute("lineDistance",new Qn(s,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;Q_.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(Q_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,S=s.attributes.position;if(g!==null){const E=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let b=E,y=T-1;b<y;b+=p){const x=g.getX(b),P=g.getX(b+1),L=Wc(this,t,Zo,m,x,P,b);L&&i.push(L)}if(this.isLineLoop){const b=g.getX(T-1),y=g.getX(E),x=Wc(this,t,Zo,m,b,y,T-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let b=E,y=T-1;b<y;b+=p){const x=Wc(this,t,Zo,m,b,b+1,b);x&&i.push(x)}if(this.isLineLoop){const b=Wc(this,t,Zo,m,T-1,E,T-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Wc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(uu.fromBufferAttribute(d,l),fu.fromBufferAttribute(d,c),i.distanceSqToSegment(uu,fu,ed,J_)>s)return;ed.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(ed);if(!(p<t.near||p>t.far))return{distance:p,point:J_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const $_=new it,tv=new it;class nd extends Sx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)$_.fromBufferAttribute(i,l),tv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+$_.distanceTo(tv);t.setAttribute("lineDistance",new Qn(s,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rp extends jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ev=new en,op=new pu,Yc=new dl,qc=new it;class nv extends kn{constructor(t=new In,i=new rp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,t.ray.intersectsSphere(Yc)===!1)return;ev.copy(l).invert(),op.copy(t.ray).applyMatrix4(ev);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let T=S,b=E;T<b;T++){const y=p.getX(T);qc.fromBufferAttribute(_,y),iv(qc,y,m,l,t,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let T=S,b=E;T<b;T++)qc.fromBufferAttribute(_,T),iv(qc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function iv(r,t,i,s,l,c,h){const d=op.distanceSqToPoint(r);if(d<i){const m=new it;op.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class ll extends Vn{constructor(t,i,s=Wi,l,c,h,d=Un,m=Un,p,g=ya,_=1){if(g!==ya&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wb extends ll{constructor(t,i=Wi,s=Os,l,c,h=Un,d=Un,m,p=ya){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yx extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mu extends In{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,E=[],T=[],b=[],y=[];for(let x=0;x<g;x++){const P=x*S-h;for(let L=0;L<p;L++){const N=L*_-c;T.push(N,-P,0),b.push(0,0,1),y.push(L/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const L=P+p*x,N=P+p*(x+1),F=P+1+p*(x+1),I=P+1+p*x;E.push(L,N,I),E.push(N,F,I)}this.setIndex(E),this.setAttribute("position",new Qn(T,3)),this.setAttribute("normal",new Qn(b,3)),this.setAttribute("uv",new Qn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Db extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ub extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lb extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mx extends gx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Nb extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ob{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const av=new en;class Pb{constructor(t,i,s=0,l=1/0){this.ray=new pu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Re("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return av.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(av),this}intersectObject(t,i=!0,s=[]){return lp(t,this,s,i),s.sort(sv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)lp(t[l],this,s,i);return s.sort(sv),s}}function sv(r,t){return r.distance-t.distance}function lp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)lp(c[h],t,i,!0)}}function rv(r,t,i,s){const l=Ib(s);switch(i){case rx:return r*t;case lx:return r*t/l.components*l.byteLength;case _p:return r*t/l.components*l.byteLength;case kr:return r*t*2/l.components*l.byteLength;case vp:return r*t*2/l.components*l.byteLength;case ox:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case xp:return r*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:case Ud:return Math.max(r,16)*Math.max(t,8)/4;case Cd:case Dd:return Math.max(r,8)*Math.max(t,8)/2;case Ld:case Nd:case Pd:case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Od:case Bd:case Fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case qd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case $d:case tp:case ep:return Math.ceil(r/4)*Math.ceil(t/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ap:case sp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ib(r){switch(r){case yi:case nx:return{byteLength:1,components:1};case al:case ix:case Sa:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case Wi:case pp:case Gi:return{byteLength:4,components:1};case ax:case sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);function Ex(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Bb(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((E,T)=>E.start-T.start);let S=0;for(let E=1;E<_.length;E++){const T=_[S],b=_[E];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++S,_[S]=b)}_.length=S+1;for(let E=0,T=_.length;E<T;E++){const b=_[E];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xb=`#ifdef USE_AOMAP
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
#endif`,Wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yb=`#ifdef USE_BATCHING
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
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
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
#endif`,Jb=`#ifdef USE_BUMPMAP
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
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oT=`#define PI 3.141592653589793
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
} // validated`,lT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pT="gl_FragColor = linearToOutputTexel( gl_FragColor );",mT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ET=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
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
}`,AT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wT=`uniform bool receiveShadow;
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
#endif`,DT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,IT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,FT=`#if defined( RE_IndirectDiffuse )
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qT=`#if defined( USE_POINTS_UV )
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
#endif`,jT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$T=`#ifdef USE_MORPHTARGETS
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
#endif`,tA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rA=`#ifdef USE_NORMALMAP
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
#endif`,oA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,EA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bA=`#ifdef USE_SKINNING
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
#endif`,TA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
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
#endif`,RA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LA=`#ifdef USE_TRANSMISSION
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
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FA=`uniform sampler2D t2D;
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`#include <common>
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
}`,XA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WA=`#define DISTANCE
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
}`,YA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`uniform float scale;
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
}`,KA=`uniform vec3 diffuse;
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
}`,QA=`#include <common>
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
}`,JA=`uniform vec3 diffuse;
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
}`,$A=`#define LAMBERT
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
}`,t1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,e1=`#define MATCAP
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
}`,n1=`#define MATCAP
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
}`,i1=`#define NORMAL
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
}`,a1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s1=`#define PHONG
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
}`,r1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,o1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,c1=`#define TOON
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
}`,u1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,f1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,p1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,m1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:Fb,alphahash_pars_fragment:zb,alphamap_fragment:Hb,alphamap_pars_fragment:Gb,alphatest_fragment:Vb,alphatest_pars_fragment:kb,aomap_fragment:Xb,aomap_pars_fragment:Wb,batching_pars_vertex:Yb,batching_vertex:qb,begin_vertex:jb,beginnormal_vertex:Zb,bsdfs:Kb,iridescence_fragment:Qb,bumpmap_pars_fragment:Jb,clipping_planes_fragment:$b,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:eT,clipping_planes_vertex:nT,color_fragment:iT,color_pars_fragment:aT,color_pars_vertex:sT,color_vertex:rT,common:oT,cube_uv_reflection_fragment:lT,defaultnormal_vertex:cT,displacementmap_pars_vertex:uT,displacementmap_vertex:fT,emissivemap_fragment:hT,emissivemap_pars_fragment:dT,colorspace_fragment:pT,colorspace_pars_fragment:mT,envmap_fragment:gT,envmap_common_pars_fragment:_T,envmap_pars_fragment:vT,envmap_pars_vertex:xT,envmap_physical_pars_fragment:DT,envmap_vertex:ST,fog_vertex:yT,fog_pars_vertex:MT,fog_fragment:ET,fog_pars_fragment:bT,gradientmap_pars_fragment:TT,lightmap_pars_fragment:AT,lights_lambert_fragment:RT,lights_lambert_pars_fragment:CT,lights_pars_begin:wT,lights_toon_fragment:UT,lights_toon_pars_fragment:LT,lights_phong_fragment:NT,lights_phong_pars_fragment:OT,lights_physical_fragment:PT,lights_physical_pars_fragment:IT,lights_fragment_begin:BT,lights_fragment_maps:FT,lights_fragment_end:zT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:VT,logdepthbuf_vertex:kT,map_fragment:XT,map_pars_fragment:WT,map_particle_fragment:YT,map_particle_pars_fragment:qT,metalnessmap_fragment:jT,metalnessmap_pars_fragment:ZT,morphinstance_vertex:KT,morphcolor_vertex:QT,morphnormal_vertex:JT,morphtarget_pars_vertex:$T,morphtarget_vertex:tA,normal_fragment_begin:eA,normal_fragment_maps:nA,normal_pars_fragment:iA,normal_pars_vertex:aA,normal_vertex:sA,normalmap_pars_fragment:rA,clearcoat_normal_fragment_begin:oA,clearcoat_normal_fragment_maps:lA,clearcoat_pars_fragment:cA,iridescence_pars_fragment:uA,opaque_fragment:fA,packing:hA,premultiplied_alpha_fragment:dA,project_vertex:pA,dithering_fragment:mA,dithering_pars_fragment:gA,roughnessmap_fragment:_A,roughnessmap_pars_fragment:vA,shadowmap_pars_fragment:xA,shadowmap_pars_vertex:SA,shadowmap_vertex:yA,shadowmask_pars_fragment:MA,skinbase_vertex:EA,skinning_pars_vertex:bA,skinning_vertex:TA,skinnormal_vertex:AA,specularmap_fragment:RA,specularmap_pars_fragment:CA,tonemapping_fragment:wA,tonemapping_pars_fragment:DA,transmission_fragment:UA,transmission_pars_fragment:LA,uv_pars_fragment:NA,uv_pars_vertex:OA,uv_vertex:PA,worldpos_vertex:IA,background_vert:BA,background_frag:FA,backgroundCube_vert:zA,backgroundCube_frag:HA,cube_vert:GA,cube_frag:VA,depth_vert:kA,depth_frag:XA,distance_vert:WA,distance_frag:YA,equirect_vert:qA,equirect_frag:jA,linedashed_vert:ZA,linedashed_frag:KA,meshbasic_vert:QA,meshbasic_frag:JA,meshlambert_vert:$A,meshlambert_frag:t1,meshmatcap_vert:e1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:a1,meshphong_vert:s1,meshphong_frag:r1,meshphysical_vert:o1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:u1,points_vert:f1,points_frag:h1,shadow_vert:d1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},Ft={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Gn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Gn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Gn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Gn([Ft.points,Ft.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Gn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Gn([Ft.common,Ft.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Gn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Gn([Ft.sprite,Ft.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Gn([Ft.common,Ft.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Gn([Ft.lights,Ft.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const jc={r:0,b:0,g:0},Rs=new Ma,_1=new en;function v1(r,t,i,s,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,g,_=null,S=0,E=null;function T(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:t).get(N)),N}function b(L){let N=!1;const F=T(L);F===null?x(d,m):F&&F.isColor&&(x(F,1),N=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,N){const F=T(N);F&&(F.isCubeTexture||F.mapping===du)?(g===void 0&&(g=new Ea(new pl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Wr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,B,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Rs.copy(N.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(_1.makeRotationFromEuler(Rs)),g.material.toneMapped=Ce.getTransfer(F.colorSpace)!==ze,(_!==F||S!==F.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,S=F.version,E=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ea(new mu(2,2),new Yi({name:"BackgroundMaterial",uniforms:Wr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(F.colorSpace)!==ze,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||E!==r.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,E=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,N){L.getRGB(jc,mx(r)),s.buffers.color.setClear(jc.r,jc.g,jc.b,N,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,N=1){d.set(L),m=N,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:b,addToRenderList:y,dispose:P}}function x1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(D,X,nt,rt,lt){let dt=!1;const O=_(rt,nt,X);c!==O&&(c=O,p(c.object)),dt=E(D,rt,nt,lt),dt&&T(D,rt,nt,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,N(D,X,nt,rt),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function _(D,X,nt){const rt=nt.wireframe===!0;let lt=s[D.id];lt===void 0&&(lt={},s[D.id]=lt);let dt=lt[X.id];dt===void 0&&(dt={},lt[X.id]=dt);let O=dt[rt];return O===void 0&&(O=S(m()),dt[rt]=O),O}function S(D){const X=[],nt=[],rt=[];for(let lt=0;lt<i;lt++)X[lt]=0,nt[lt]=0,rt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:nt,attributeDivisors:rt,object:D,attributes:{},index:null}}function E(D,X,nt,rt){const lt=c.attributes,dt=X.attributes;let O=0;const G=nt.getAttributes();for(const V in G)if(G[V].location>=0){const gt=lt[V];let U=dt[V];if(U===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),gt===void 0||gt.attribute!==U||U&&gt.data!==U.data)return!0;O++}return c.attributesNum!==O||c.index!==rt}function T(D,X,nt,rt){const lt={},dt=X.attributes;let O=0;const G=nt.getAttributes();for(const V in G)if(G[V].location>=0){let gt=dt[V];gt===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor));const U={};U.attribute=gt,gt&&gt.data&&(U.data=gt.data),lt[V]=U,O++}c.attributes=lt,c.attributesNum=O,c.index=rt}function b(){const D=c.newAttributes;for(let X=0,nt=D.length;X<nt;X++)D[X]=0}function y(D){x(D,0)}function x(D,X){const nt=c.newAttributes,rt=c.enabledAttributes,lt=c.attributeDivisors;nt[D]=1,rt[D]===0&&(r.enableVertexAttribArray(D),rt[D]=1),lt[D]!==X&&(r.vertexAttribDivisor(D,X),lt[D]=X)}function P(){const D=c.newAttributes,X=c.enabledAttributes;for(let nt=0,rt=X.length;nt<rt;nt++)X[nt]!==D[nt]&&(r.disableVertexAttribArray(nt),X[nt]=0)}function L(D,X,nt,rt,lt,dt,O){O===!0?r.vertexAttribIPointer(D,X,nt,lt,dt):r.vertexAttribPointer(D,X,nt,rt,lt,dt)}function N(D,X,nt,rt){b();const lt=rt.attributes,dt=nt.getAttributes(),O=X.defaultAttributeValues;for(const G in dt){const V=dt[G];if(V.location>=0){let ht=lt[G];if(ht===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),ht!==void 0){const gt=ht.normalized,U=ht.itemSize,tt=t.get(ht);if(tt===void 0)continue;const _t=tt.buffer,Tt=tt.type,zt=tt.bytesPerElement,J=Tt===r.INT||Tt===r.UNSIGNED_INT||ht.gpuType===pp;if(ht.isInterleavedBufferAttribute){const ft=ht.data,wt=ft.stride,kt=ht.offset;if(ft.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)x(V.location+Ht,ft.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)y(V.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Ht=0;Ht<V.locationSize;Ht++)L(V.location+Ht,U/V.locationSize,Tt,gt,wt*zt,(kt+U/V.locationSize*Ht)*zt,J)}else{if(ht.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)x(V.location+ft,ht.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<V.locationSize;ft++)y(V.location+ft);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let ft=0;ft<V.locationSize;ft++)L(V.location+ft,U/V.locationSize,Tt,gt,U*zt,U/V.locationSize*ft*zt,J)}}else if(O!==void 0){const gt=O[G];if(gt!==void 0)switch(gt.length){case 2:r.vertexAttrib2fv(V.location,gt);break;case 3:r.vertexAttrib3fv(V.location,gt);break;case 4:r.vertexAttrib4fv(V.location,gt);break;default:r.vertexAttrib1fv(V.location,gt)}}}}P()}function F(){Q();for(const D in s){const X=s[D];for(const nt in X){const rt=X[nt];for(const lt in rt)g(rt[lt].object),delete rt[lt];delete X[nt]}delete s[D]}}function I(D){if(s[D.id]===void 0)return;const X=s[D.id];for(const nt in X){const rt=X[nt];for(const lt in rt)g(rt[lt].object),delete rt[lt];delete X[nt]}delete s[D.id]}function B(D){for(const X in s){const nt=s[X];if(nt[D.id]===void 0)continue;const rt=nt[D.id];for(const lt in rt)g(rt[lt].object),delete rt[lt];delete nt[D.id]}}function Q(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:y,disableUnusedAttributes:P}}function S1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T];i.update(E,s,1)}function m(p,g,_,S){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<p.length;T++)h(p[T],g[T],S[T]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let T=0;for(let b=0;b<_;b++)T+=g[b]*S[b];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function y1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ni&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const Q=B===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==yi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Gi&&!Q)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:N,maxSamples:F,samples:I}}function M1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ws,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||s!==0||l;return l=S,s=_.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,E){const T=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||T===null||T.length===0||c&&!y)c?g(null):p();else{const P=c?0:s,L=P*4;let N=x.clippingState||null;m.value=N,N=g(T,S,L,E);for(let F=0;F!==L;++F)N[F]=i[F];x.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,S,E,T){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,T!==!0||y===null){const x=E+b*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,N=E;L!==b;++L,N+=4)h.copy(_[L]).applyMatrix4(P,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function E1(r){let t=new WeakMap;function i(h,d){return d===bd?h.mapping=Os:d===Td&&(h.mapping=Vr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===bd||d===Td)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new vx(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const is=4,ov=[.125,.215,.35,.446,.526,.582],Us=20,b1=256,Ko=new Mx,lv=new Te;let id=null,ad=0,sd=0,rd=!1;const T1=new it;class cv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=T1}=c;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(id,ad,sd),this._renderer.xr.enabled=rd,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Sa,format:Ni,colorSpace:Xr,depthBuffer:!1},l=uv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A1(c)),this._blurMaterial=C1(c,t,i),this._ggxMaterial=R1(c,t,i)}return l}_compileMaterial(t){const i=new Ea(new In,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(lv),_.toneMapping=ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ea(new pl,new hx({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let x=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,x=!0):(y.color.copy(lv),x=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const F=this._cubeSize;Nr(l,N*F,L>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(b,m),_.render(t,m)}_.toneMapping=E,_.autoClear=S,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Os||t.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Nr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=0+p*1.25,E=_*S,{_lodMax:T}=this,b=this._sizeLods[s],y=3*b*(s>T-is?s-T+is:0),x=4*(this._cubeSize-b);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=T-i,Nr(c,y,x,3*b,2*b),l.setRenderTarget(c),l.render(d,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Nr(t,y,x,3*b,2*b),l.setRenderTarget(t),l.render(d,Ko)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Us-1),b=c/T,y=isFinite(c)?1+Math.floor(g*b):Us;y>Us&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const x=[];let P=0;for(let B=0;B<Us;++B){const Q=B/b,C=Math.exp(-Q*Q/2);x.push(C),B===0?P+=C:B<y&&(P+=2*C)}for(let B=0;B<x.length;B++)x[B]=x[B]/P;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=T,S.mipInt.value=L-s;const N=this._sizeLods[l],F=3*N*(l>L-is?l-L+is:0),I=4*(this._cubeSize-N);Nr(i,F,I,3*N,2*N),m.setRenderTarget(i),m.render(_,Ko)}}function A1(r){const t=[],i=[],s=[];let l=r;const c=r-is+1+ov.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-is?m=ov[h-r+is-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,T=6,b=3,y=2,x=1,P=new Float32Array(b*T*E),L=new Float32Array(y*T*E),N=new Float32Array(x*T*E);for(let I=0;I<E;I++){const B=I%3*2/3-1,Q=I>2?0:-1,C=[B,Q,0,B+2/3,Q,0,B+2/3,Q+1,0,B,Q,0,B+2/3,Q+1,0,B,Q+1,0];P.set(C,b*T*I),L.set(S,y*T*I);const D=[I,I,I,I,I,I];N.set(D,x*T*I)}const F=new In;F.setAttribute("position",new Mi(P,b)),F.setAttribute("uv",new Mi(L,y)),F.setAttribute("faceIndex",new Mi(N,x)),s.push(new Ea(F,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function uv(r,t,i){const s=new Xi(r,t,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function R1(r,t,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function C1(r,t,i){const s=new Float32Array(Us),l=new it(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function fv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function hv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function w1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===bd||m===Td,g=m===Os||m===Vr;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new cv(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new cv(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function D1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&rl("WebGLRenderer: "+s+" extension not supported."),l}}}function U1(r,t,i,s){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(t.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)t.update(S[E],r.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,T=_.attributes.position;let b=0;if(E!==null){const P=E.array;b=E.version;for(let L=0,N=P.length;L<N;L+=3){const F=P[L+0],I=P[L+1],B=P[L+2];S.push(F,I,I,B,B,F)}}else if(T!==void 0){const P=T.array;b=T.version;for(let L=0,N=P.length/3-1;L<N;L+=3){const F=L+0,I=L+1,B=L+2;S.push(F,I,I,B,B,F)}}else return;const y=new(cx(S)?px:dx)(S,1);y.version=b;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function g(_){const S=c.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function L1(r,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){r.drawElements(s,E,c,S*h),i.update(E,s,1)}function p(S,E,T){T!==0&&(r.drawElementsInstanced(s,E,c,S*h,T),i.update(E,s,T))}function g(S,E,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,S,0,T);let y=0;for(let x=0;x<T;x++)y+=E[x];i.update(y,s,1)}function _(S,E,T,b){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,c,S,0,b,0,T);let x=0;for(let P=0;P<T;P++)x+=E[P]*b[P];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function N1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Re("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function O1(r,t,i){const s=new WeakMap,l=new on;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let C=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",C)};S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),T===!0&&(L=2),b===!0&&(L=3);let N=d.attributes.position.count*L,F=1;N>t.maxTextureSize&&(F=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const I=new Float32Array(N*F*4*_),B=new ux(I,N,F,_);B.type=Gi,B.needsUpdate=!0;const Q=L*4;for(let D=0;D<_;D++){const X=y[D],nt=x[D],rt=P[D],lt=N*F*4*D;for(let dt=0;dt<X.count;dt++){const O=dt*Q;E===!0&&(l.fromBufferAttribute(X,dt),I[lt+O+0]=l.x,I[lt+O+1]=l.y,I[lt+O+2]=l.z,I[lt+O+3]=0),T===!0&&(l.fromBufferAttribute(nt,dt),I[lt+O+4]=l.x,I[lt+O+5]=l.y,I[lt+O+6]=l.z,I[lt+O+7]=0),b===!0&&(l.fromBufferAttribute(rt,dt),I[lt+O+8]=l.x,I[lt+O+9]=l.y,I[lt+O+10]=l.z,I[lt+O+11]=rt.itemSize===4?l.w:1)}}S={count:_,texture:B,size:new He(N,F)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function P1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const I1={[jv]:"LINEAR_TONE_MAPPING",[Zv]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Qv]:"ACES_FILMIC_TONE_MAPPING",[$v]:"AGX_TONE_MAPPING",[tx]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function B1(r,t,i,s,l){const c=new Xi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Xi(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),d=new In;d.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Qn([0,2,0,0,2,0],2));const m=new Db({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ea(d,m),g=new Mx(-1,1,1,-1,0,1);let _=null,S=null,E=!1,T,b=null,y=[],x=!1;this.setSize=function(P,L){c.setSize(P,L),h.setSize(P,L);for(let N=0;N<y.length;N++){const F=y[N];F.setSize&&F.setSize(P,L)}},this.setEffects=function(P){y=P,x=y.length>0&&y[0].isRenderPass===!0;const L=c.width,N=c.height;for(let F=0;F<y.length;F++){const I=y[F];I.setSize&&I.setSize(L,N)}},this.begin=function(P,L){if(E||P.toneMapping===ki&&y.length===0)return!1;if(b=L,L!==null){const N=L.width,F=L.height;(c.width!==N||c.height!==F)&&this.setSize(N,F)}return x===!1&&P.setRenderTarget(c),T=P.toneMapping,P.toneMapping=ki,!0},this.hasRenderPass=function(){return x},this.end=function(P,L){P.toneMapping=T,E=!0;let N=c,F=h;for(let I=0;I<y.length;I++){const B=y[I];if(B.enabled!==!1&&(B.render(P,F,N,L),B.needsSwap!==!1)){const Q=N;N=F,F=Q}}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,m.defines={},Ce.getTransfer(_)===ze&&(m.defines.SRGB_TRANSFER="");const I=I1[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,P.setRenderTarget(b),P.render(p,g),b=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const bx=new Vn,cp=new ll(1,1),Tx=new ux,Ax=new rb,Rx=new _x,dv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),_v=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=dv[l];if(c===void 0&&(c=new Float32Array(l),dv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function _u(r,t){let i=pv[t];i===void 0&&(i=new Int32Array(t),pv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function F1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function z1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function H1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function G1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function V1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;_v.set(s),r.uniformMatrix2fv(this.addr,!1,_v),vn(i,s)}}function k1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;gv.set(s),r.uniformMatrix3fv(this.addr,!1,gv),vn(i,s)}}function X1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;mv.set(s),r.uniformMatrix4fv(this.addr,!1,mv),vn(i,s)}}function W1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function q1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function j1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function Z1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function K1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function Q1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function J1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function $1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(cp.compareFunction=i.isReversedDepthBuffer()?yp:Sp,c=cp):c=bx,i.setTexture2D(t||c,l)}function tR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ax,l)}function eR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Rx,l)}function nR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Tx,l)}function iR(r){switch(r){case 5126:return F1;case 35664:return z1;case 35665:return H1;case 35666:return G1;case 35674:return V1;case 35675:return k1;case 35676:return X1;case 5124:case 35670:return W1;case 35667:case 35671:return Y1;case 35668:case 35672:return q1;case 35669:case 35673:return j1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return eR;case 36289:case 36303:case 36311:case 36292:return nR}}function aR(r,t){r.uniform1fv(this.addr,t)}function sR(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function rR(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function oR(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function lR(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function cR(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function uR(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function fR(r,t){r.uniform1iv(this.addr,t)}function hR(r,t){r.uniform2iv(this.addr,t)}function dR(r,t){r.uniform3iv(this.addr,t)}function pR(r,t){r.uniform4iv(this.addr,t)}function mR(r,t){r.uniform1uiv(this.addr,t)}function gR(r,t){r.uniform2uiv(this.addr,t)}function _R(r,t){r.uniform3uiv(this.addr,t)}function vR(r,t){r.uniform4uiv(this.addr,t)}function xR(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=cp:h=bx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function SR(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ax,c[h])}function yR(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Rx,c[h])}function MR(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Tx,c[h])}function ER(r){switch(r){case 5126:return aR;case 35664:return sR;case 35665:return rR;case 35666:return oR;case 35674:return lR;case 35675:return cR;case 35676:return uR;case 5124:case 35670:return fR;case 35667:case 35671:return hR;case 35668:case 35672:return dR;case 35669:case 35673:return pR;case 5125:return mR;case 36294:return gR;case 36295:return _R;case 36296:return vR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return yR;case 36289:case 36303:case 36311:case 36292:return MR}}class bR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=iR(i.type)}}class TR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ER(i.type)}}class AR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const od=/(\w+)(\])?(\[|\.)?/g;function vv(r,t){r.seq.push(t),r.map[t.id]=t}function RR(r,t,i){const s=r.name,l=s.length;for(od.lastIndex=0;;){const c=od.exec(s),h=od.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){vv(i,p===void 0?new bR(d,r,t):new TR(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new AR(d),vv(i,_)),i=_}}}class au{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);RR(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function xv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const CR=37297;let wR=0;function DR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Sv=new de;function UR(r){Ce._getMatrix(Sv,Ce.workingColorSpace,r);const t=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function yv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+DR(r.getShaderSource(t),d)}else return c}function LR(r,t){const i=UR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const NR={[jv]:"Linear",[Zv]:"Reinhard",[Kv]:"Cineon",[Qv]:"ACESFilmic",[$v]:"AgX",[tx]:"Neutral",[Jv]:"Custom"};function OR(r,t){const i=NR[t];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new it;function PR(){Ce.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function BR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function FR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function el(r){return r!==""}function Mv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ev(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zR=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(r){return r.replace(zR,GR)}const HR=new Map;function GR(r,t){let i=pe[t];if(i===void 0){const s=HR.get(t);if(s!==void 0)i=pe[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return up(i)}const VR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(r){return r.replace(VR,kR)}function kR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Tv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const XR={[Jc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function WR(r){return XR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YR={[Os]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function qR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":YR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const jR={[Vr]:"ENVMAP_MODE_REFRACTION"};function ZR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":jR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KR={[qv]:"ENVMAP_BLENDING_MULTIPLY",[TE]:"ENVMAP_BLENDING_MIX",[AE]:"ENVMAP_BLENDING_ADD"};function QR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":KR[r.combine]||"ENVMAP_BLENDING_NONE"}function JR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function $R(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=WR(i),p=qR(i),g=ZR(i),_=QR(i),S=JR(i),E=IR(i),T=BR(c),b=l.createProgram();let y,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(el).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(el).join(`
`),x.length>0&&(x+=`
`)):(y=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?pe.tonemapping_pars_fragment:"",i.toneMapping!==ki?OR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,LR("linearToOutputTexel",i.outputColorSpace),PR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),h=up(h),h=Mv(h,i),h=Ev(h,i),d=up(d),d=Mv(d,i),d=Ev(d,i),h=bv(h),d=bv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=P+y+h,N=P+x+d,F=xv(l,l.VERTEX_SHADER,L),I=xv(l,l.FRAGMENT_SHADER,N);l.attachShader(b,F),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(X){if(r.debug.checkShaderErrors){const nt=l.getProgramInfoLog(b)||"",rt=l.getShaderInfoLog(F)||"",lt=l.getShaderInfoLog(I)||"",dt=nt.trim(),O=rt.trim(),G=lt.trim();let V=!0,ht=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,F,I);else{const gt=yv(l,F,"vertex"),U=yv(l,I,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+dt+`
`+gt+`
`+U)}else dt!==""?ae("WebGLProgram: Program Info Log:",dt):(O===""||G==="")&&(ht=!1);ht&&(X.diagnostics={runnable:V,programLog:dt,vertexShader:{log:O,prefix:y},fragmentShader:{log:G,prefix:x}})}l.deleteShader(F),l.deleteShader(I),Q=new au(l,b),C=FR(l,b)}let Q;this.getUniforms=function(){return Q===void 0&&B(this),Q};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,CR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=I,this}let tC=0;class eC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new nC(t),i.set(t,s)),s}}class nC{constructor(t){this.id=tC++,this.code=t,this.usedTimes=0}}function iC(r,t,i,s,l,c,h){const d=new bp,m=new eC,p=new Set,g=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,X,nt,rt){const lt=nt.fog,dt=rt.geometry,O=C.isMeshStandardMaterial?nt.environment:null,G=(C.isMeshStandardMaterial?i:t).get(C.envMap||O),V=G&&G.mapping===du?G.image.height:null,ht=T[C.type];C.precision!==null&&(E=l.getMaxPrecision(C.precision),E!==C.precision&&ae("WebGLProgram.getParameters:",C.precision,"not supported, using",E,"instead."));const gt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,U=gt!==void 0?gt.length:0;let tt=0;dt.morphAttributes.position!==void 0&&(tt=1),dt.morphAttributes.normal!==void 0&&(tt=2),dt.morphAttributes.color!==void 0&&(tt=3);let _t,Tt,zt,J;if(ht){const Ae=Hi[ht];_t=Ae.vertexShader,Tt=Ae.fragmentShader}else _t=C.vertexShader,Tt=C.fragmentShader,m.update(C),zt=m.getVertexShaderID(C),J=m.getFragmentShaderID(C);const ft=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),kt=rt.isInstancedMesh===!0,Ht=rt.isBatchedMesh===!0,me=!!C.map,Qe=!!C.matcap,ge=!!G,ce=!!C.aoMap,_e=!!C.lightMap,se=!!C.bumpMap,Ye=!!C.normalMap,H=!!C.displacementMap,Xe=!!C.emissiveMap,ve=!!C.metalnessMap,Xt=!!C.roughnessMap,Ct=C.anisotropy>0,w=C.clearcoat>0,M=C.dispersion>0,Y=C.iridescence>0,pt=C.sheen>0,St=C.transmission>0,ot=Ct&&!!C.anisotropyMap,Gt=w&&!!C.clearcoatMap,At=w&&!!C.clearcoatNormalMap,Wt=w&&!!C.clearcoatRoughnessMap,ee=Y&&!!C.iridescenceMap,Et=Y&&!!C.iridescenceThicknessMap,bt=pt&&!!C.sheenColorMap,Ut=pt&&!!C.sheenRoughnessMap,Nt=!!C.specularMap,Lt=!!C.specularColorMap,oe=!!C.specularIntensityMap,W=St&&!!C.transmissionMap,Ot=St&&!!C.thicknessMap,Rt=!!C.gradientMap,It=!!C.alphaMap,Mt=C.alphaTest>0,yt=!!C.alphaHash,Dt=!!C.extensions;let re=ki;C.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(re=r.toneMapping);const Pe={shaderID:ht,shaderType:C.type,shaderName:C.name,vertexShader:_t,fragmentShader:Tt,defines:C.defines,customVertexShaderID:zt,customFragmentShaderID:J,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:E,batching:Ht,batchingColor:Ht&&rt._colorsTexture!==null,instancing:kt,instancingColor:kt&&rt.instanceColor!==null,instancingMorph:kt&&rt.morphTexture!==null,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Xr,alphaToCoverage:!!C.alphaToCoverage,map:me,matcap:Qe,envMap:ge,envMapMode:ge&&G.mapping,envMapCubeUVHeight:V,aoMap:ce,lightMap:_e,bumpMap:se,normalMap:Ye,displacementMap:H,emissiveMap:Xe,normalMapObjectSpace:Ye&&C.normalMapType===DE,normalMapTangentSpace:Ye&&C.normalMapType===wE,metalnessMap:ve,roughnessMap:Xt,anisotropy:Ct,anisotropyMap:ot,clearcoat:w,clearcoatMap:Gt,clearcoatNormalMap:At,clearcoatRoughnessMap:Wt,dispersion:M,iridescence:Y,iridescenceMap:ee,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:Ut,specularMap:Nt,specularColorMap:Lt,specularIntensityMap:oe,transmission:St,transmissionMap:W,thicknessMap:Ot,gradientMap:Rt,opaque:C.transparent===!1&&C.blending===Fr&&C.alphaToCoverage===!1,alphaMap:It,alphaTest:Mt,alphaHash:yt,combine:C.combine,mapUv:me&&b(C.map.channel),aoMapUv:ce&&b(C.aoMap.channel),lightMapUv:_e&&b(C.lightMap.channel),bumpMapUv:se&&b(C.bumpMap.channel),normalMapUv:Ye&&b(C.normalMap.channel),displacementMapUv:H&&b(C.displacementMap.channel),emissiveMapUv:Xe&&b(C.emissiveMap.channel),metalnessMapUv:ve&&b(C.metalnessMap.channel),roughnessMapUv:Xt&&b(C.roughnessMap.channel),anisotropyMapUv:ot&&b(C.anisotropyMap.channel),clearcoatMapUv:Gt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&b(C.sheenRoughnessMap.channel),specularMapUv:Nt&&b(C.specularMap.channel),specularColorMapUv:Lt&&b(C.specularColorMap.channel),specularIntensityMapUv:oe&&b(C.specularIntensityMap.channel),transmissionMapUv:W&&b(C.transmissionMap.channel),thicknessMapUv:Ot&&b(C.thicknessMap.channel),alphaMapUv:It&&b(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Ye||Ct),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!dt.attributes.uv&&(me||It),fog:!!lt,useFog:C.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:wt,skinning:rt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:tt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:me&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Xe&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ga,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Dt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&C.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function x(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)D.push(X),D.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(P(D,C),L(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function P(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function L(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function N(C){const D=T[C.type];let X;if(D){const nt=Hi[D];X=xb.clone(nt.uniforms)}else X=C.uniforms;return X}function F(C,D){let X=_.get(D);return X!==void 0?++X.usedTimes:(X=new $R(r,D,C,c),g.push(X),_.set(D,X)),X}function I(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function B(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:F,releaseProgram:I,releaseShaderCache:B,programs:g,dispose:Q}}function aC(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function sC(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Av(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Rv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,E,T,b,y){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:T,renderOrder:_.renderOrder,z:b,group:y},r[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=b,x.group=y),t++,x}function d(_,S,E,T,b,y){const x=h(_,S,E,T,b,y);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,T,b,y){const x=h(_,S,E,T,b,y);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||sC),s.length>1&&s.sort(S||Av),l.length>1&&l.sort(S||Av)}function g(){for(let _=t,S=r.length;_<S;_++){const E=r[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function rC(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Rv,r.set(s,[h])):l>=c.length?(h=new Rv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function oC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new Te};break;case"SpotLight":i={position:new it,direction:new it,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new it,halfWidth:new it,halfHeight:new it};break}return r[t.id]=i,i}}}function lC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let cC=0;function uC(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function fC(r){const t=new oC,i=lC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new it);const l=new it,c=new en,h=new en;function d(p){let g=0,_=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let E=0,T=0,b=0,y=0,x=0,P=0,L=0,N=0,F=0,I=0,B=0;p.sort(uC);for(let C=0,D=p.length;C<D;C++){const X=p[C],nt=X.color,rt=X.intensity,lt=X.distance;let dt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===kr?dt=X.shadow.map.texture:dt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=nt.r*rt,_+=nt.g*rt,S+=nt.b*rt;else if(X.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(X.sh.coefficients[O],rt);B++}else if(X.isDirectionalLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,V=i.get(X);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,s.directionalShadow[E]=V,s.directionalShadowMap[E]=dt,s.directionalShadowMatrix[E]=X.shadow.matrix,P++}s.directional[E]=O,E++}else if(X.isSpotLight){const O=t.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy(nt).multiplyScalar(rt),O.distance=lt,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,s.spot[b]=O;const G=X.shadow;if(X.map&&(s.spotLightMap[F]=X.map,F++,G.updateMatrices(X),X.castShadow&&I++),s.spotLightMatrix[b]=G.matrix,X.castShadow){const V=i.get(X);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,s.spotShadow[b]=V,s.spotShadowMap[b]=dt,N++}b++}else if(X.isRectAreaLight){const O=t.get(X);O.color.copy(nt).multiplyScalar(rt),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),s.rectArea[y]=O,y++}else if(X.isPointLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const G=X.shadow,V=i.get(X);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,s.pointShadow[T]=V,s.pointShadowMap[T]=dt,s.pointShadowMatrix[T]=X.shadow.matrix,L++}s.point[T]=O,T++}else if(X.isHemisphereLight){const O=t.get(X);O.skyColor.copy(X.color).multiplyScalar(rt),O.groundColor.copy(X.groundColor).multiplyScalar(rt),s.hemi[x]=O,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const Q=s.hash;(Q.directionalLength!==E||Q.pointLength!==T||Q.spotLength!==b||Q.rectAreaLength!==y||Q.hemiLength!==x||Q.numDirectionalShadows!==P||Q.numPointShadows!==L||Q.numSpotShadows!==N||Q.numSpotMaps!==F||Q.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=b,s.rectArea.length=y,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+F-I,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=B,Q.directionalLength=E,Q.pointLength=T,Q.spotLength=b,Q.rectAreaLength=y,Q.hemiLength=x,Q.numDirectionalShadows=P,Q.numPointShadows=L,Q.numSpotShadows=N,Q.numSpotMaps=F,Q.numLightProbes=B,s.version=cC++)}function m(p,g){let _=0,S=0,E=0,T=0,b=0;const y=g.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const L=p[x];if(L.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(L.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const N=s.point[S];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const N=s.hemi[b];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:s}}function Cv(r){const t=new fC(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function hC(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Cv(r),t.set(l,[d])):c>=h.length?(d=new Cv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mC=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],gC=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],wv=new en,Qo=new it,ld=new it;function _C(r,t,i){let s=new xx;const l=new He,c=new He,h=new on,d=new Ub,m=new Lb,p={},g=i.maxTextureSize,_={[as]:Kn,[Kn]:as,[ga]:ga},S=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const T=new In;T.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ea(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let x=this.type;this.render=function(I,B,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===rE&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Jc);const C=r.getRenderTarget(),D=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),nt=r.state;nt.setBlending(va),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const rt=x!==this.type;rt&&B.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(dt=>dt.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,dt=I.length;lt<dt;lt++){const O=I[lt],G=O.shadow;if(G===void 0){ae("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const V=G.getFrameExtents();if(l.multiply(V),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/V.x),l.x=c.x*V.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/V.y),l.y=c.y*V.y,G.mapSize.y=c.y)),G.map===null||rt===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===tl){if(O.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Xi(l.x,l.y,{format:kr,type:Sa,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new ll(l.x,l.y,Gi),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=ya,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un}else{O.isPointLight?(G.map=new vx(l.x),G.map.depthTexture=new wb(l.x,Wi)):(G.map=new Xi(l.x,l.y),G.map.depthTexture=new ll(l.x,l.y,Wi)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=ya;const gt=r.state.buffers.depth.getReversed();this.type===Jc?(G.map.depthTexture.compareFunction=gt?yp:Sp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un)}G.camera.updateProjectionMatrix()}const ht=G.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<ht;gt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,gt),r.clear();else{gt===0&&(r.setRenderTarget(G.map),r.clear());const U=G.getViewport(gt);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),nt.viewport(h)}if(O.isPointLight){const U=G.camera,tt=G.matrix,_t=O.distance||U.far;_t!==U.far&&(U.far=_t,U.updateProjectionMatrix()),Qo.setFromMatrixPosition(O.matrixWorld),U.position.copy(Qo),ld.copy(U.position),ld.add(mC[gt]),U.up.copy(gC[gt]),U.lookAt(ld),U.updateMatrixWorld(),tt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),wv.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(wv,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(O);s=G.getFrustum(),N(B,Q,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===tl&&P(G,Q),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(C,D,X)};function P(I,B){const Q=t.update(b);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xi(l.x,l.y,{format:kr,type:Sa})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(B,null,Q,S,b,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(B,null,Q,E,b,null)}function L(I,B,Q,C){let D=null;const X=Q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)D=X;else if(D=Q.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const nt=D.uuid,rt=B.uuid;let lt=p[nt];lt===void 0&&(lt={},p[nt]=lt);let dt=lt[rt];dt===void 0&&(dt=D.clone(),lt[rt]=dt,B.addEventListener("dispose",F)),D=dt}if(D.visible=B.visible,D.wireframe=B.wireframe,C===tl?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:_[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,Q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const nt=r.properties.get(D);nt.light=Q}return D}function N(I,B,Q,C,D){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===tl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld);const rt=t.update(I),lt=I.material;if(Array.isArray(lt)){const dt=rt.groups;for(let O=0,G=dt.length;O<G;O++){const V=dt[O],ht=lt[V.materialIndex];if(ht&&ht.visible){const gt=L(I,ht,C,D);I.onBeforeShadow(r,I,B,Q,rt,gt,V),r.renderBufferDirect(Q,null,rt,gt,I,V),I.onAfterShadow(r,I,B,Q,rt,gt,V)}}}else if(lt.visible){const dt=L(I,lt,C,D);I.onBeforeShadow(r,I,B,Q,rt,dt,null),r.renderBufferDirect(Q,null,rt,dt,I,null),I.onAfterShadow(r,I,B,Q,rt,dt,null)}}const nt=I.children;for(let rt=0,lt=nt.length;rt<lt;rt++)N(nt[rt],B,Q,C,D)}function F(I){I.target.removeEventListener("dispose",F);for(const Q in p){const C=p[Q],D=I.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const vC={[_d]:vd,[xd]:Md,[Sd]:Ed,[Gr]:yd,[vd]:_d,[Md]:xd,[Ed]:Sd,[yd]:Gr};function xC(r,t){function i(){let W=!1;const Ot=new on;let Rt=null;const It=new on(0,0,0,0);return{setMask:function(Mt){Rt!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),Rt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,yt,Dt,re,Pe){Pe===!0&&(Mt*=re,yt*=re,Dt*=re),Ot.set(Mt,yt,Dt,re),It.equals(Ot)===!1&&(r.clearColor(Mt,yt,Dt,re),It.copy(Ot))},reset:function(){W=!1,Rt=null,It.set(-1,0,0,0)}}}function s(){let W=!1,Ot=!1,Rt=null,It=null,Mt=null;return{setReversed:function(yt){if(Ot!==yt){const Dt=t.get("EXT_clip_control");yt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Ot=yt;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return Ot},setTest:function(yt){yt?ft(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(yt){Rt!==yt&&!W&&(r.depthMask(yt),Rt=yt)},setFunc:function(yt){if(Ot&&(yt=vC[yt]),It!==yt){switch(yt){case _d:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case Gr:r.depthFunc(r.LEQUAL);break;case Sd:r.depthFunc(r.EQUAL);break;case yd:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case Ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=yt}},setLocked:function(yt){W=yt},setClear:function(yt){Mt!==yt&&(Ot&&(yt=1-yt),r.clearDepth(yt),Mt=yt)},reset:function(){W=!1,Rt=null,It=null,Mt=null,Ot=!1}}}function l(){let W=!1,Ot=null,Rt=null,It=null,Mt=null,yt=null,Dt=null,re=null,Pe=null;return{setTest:function(Ae){W||(Ae?ft(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Ae){Ot!==Ae&&!W&&(r.stencilMask(Ae),Ot=Ae)},setFunc:function(Ae,Ln,Ei){(Rt!==Ae||It!==Ln||Mt!==Ei)&&(r.stencilFunc(Ae,Ln,Ei),Rt=Ae,It=Ln,Mt=Ei)},setOp:function(Ae,Ln,Ei){(yt!==Ae||Dt!==Ln||re!==Ei)&&(r.stencilOp(Ae,Ln,Ei),yt=Ae,Dt=Ln,re=Ei)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Pe!==Ae&&(r.clearStencil(Ae),Pe=Ae)},reset:function(){W=!1,Ot=null,Rt=null,It=null,Mt=null,yt=null,Dt=null,re=null,Pe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,E=[],T=null,b=!1,y=null,x=null,P=null,L=null,N=null,F=null,I=null,B=new Te(0,0,0),Q=0,C=!1,D=null,X=null,nt=null,rt=null,lt=null;const dt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=G>=2);let ht=null,gt={};const U=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),_t=new on().fromArray(U),Tt=new on().fromArray(tt);function zt(W,Ot,Rt,It){const Mt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(W,yt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<Rt;Dt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Ot+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return yt}const J={};J[r.TEXTURE_2D]=zt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(r.DEPTH_TEST),h.setFunc(Gr),se(!1),Ye(T_),ft(r.CULL_FACE),ce(va);function ft(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function wt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function kt(W,Ot){return _[W]!==Ot?(r.bindFramebuffer(W,Ot),_[W]=Ot,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ot),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Ht(W,Ot){let Rt=E,It=!1;if(W){Rt=S.get(Ot),Rt===void 0&&(Rt=[],S.set(Ot,Rt));const Mt=W.textures;if(Rt.length!==Mt.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Dt=Mt.length;yt<Dt;yt++)Rt[yt]=r.COLOR_ATTACHMENT0+yt;Rt.length=Mt.length,It=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,It=!0);It&&r.drawBuffers(Rt)}function me(W){return T!==W?(r.useProgram(W),T=W,!0):!1}const Qe={[Ds]:r.FUNC_ADD,[lE]:r.FUNC_SUBTRACT,[cE]:r.FUNC_REVERSE_SUBTRACT};Qe[uE]=r.MIN,Qe[fE]=r.MAX;const ge={[hE]:r.ZERO,[dE]:r.ONE,[pE]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[SE]:r.SRC_ALPHA_SATURATE,[vE]:r.DST_COLOR,[gE]:r.DST_ALPHA,[mE]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[xE]:r.ONE_MINUS_DST_COLOR,[_E]:r.ONE_MINUS_DST_ALPHA,[yE]:r.CONSTANT_COLOR,[ME]:r.ONE_MINUS_CONSTANT_COLOR,[EE]:r.CONSTANT_ALPHA,[bE]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(W,Ot,Rt,It,Mt,yt,Dt,re,Pe,Ae){if(W===va){b===!0&&(wt(r.BLEND),b=!1);return}if(b===!1&&(ft(r.BLEND),b=!0),W!==oE){if(W!==y||Ae!==C){if((x!==Ds||N!==Ds)&&(r.blendEquation(r.FUNC_ADD),x=Ds,N=Ds),Ae)switch(W){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFunc(r.ONE,r.ONE);break;case R_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",W);break}else switch(W){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case R_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",W);break}P=null,L=null,F=null,I=null,B.set(0,0,0),Q=0,y=W,C=Ae}return}Mt=Mt||Ot,yt=yt||Rt,Dt=Dt||It,(Ot!==x||Mt!==N)&&(r.blendEquationSeparate(Qe[Ot],Qe[Mt]),x=Ot,N=Mt),(Rt!==P||It!==L||yt!==F||Dt!==I)&&(r.blendFuncSeparate(ge[Rt],ge[It],ge[yt],ge[Dt]),P=Rt,L=It,F=yt,I=Dt),(re.equals(B)===!1||Pe!==Q)&&(r.blendColor(re.r,re.g,re.b,Pe),B.copy(re),Q=Pe),y=W,C=!1}function _e(W,Ot){W.side===ga?wt(r.CULL_FACE):ft(r.CULL_FACE);let Rt=W.side===Kn;Ot&&(Rt=!Rt),se(Rt),W.blending===Fr&&W.transparent===!1?ce(va):ce(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){D!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),D=W)}function Ye(W){W!==aE?(ft(r.CULL_FACE),W!==X&&(W===T_?r.cullFace(r.BACK):W===sE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),X=W}function H(W){W!==nt&&(O&&r.lineWidth(W),nt=W)}function Xe(W,Ot,Rt){W?(ft(r.POLYGON_OFFSET_FILL),(rt!==Ot||lt!==Rt)&&(r.polygonOffset(Ot,Rt),rt=Ot,lt=Rt)):wt(r.POLYGON_OFFSET_FILL)}function ve(W){W?ft(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Xt(W){W===void 0&&(W=r.TEXTURE0+dt-1),ht!==W&&(r.activeTexture(W),ht=W)}function Ct(W,Ot,Rt){Rt===void 0&&(ht===null?Rt=r.TEXTURE0+dt-1:Rt=ht);let It=gt[Rt];It===void 0&&(It={type:void 0,texture:void 0},gt[Rt]=It),(It.type!==W||It.texture!==Ot)&&(ht!==Rt&&(r.activeTexture(Rt),ht=Rt),r.bindTexture(W,Ot||J[W]),It.type=W,It.texture=Ot)}function w(){const W=gt[ht];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function pt(){try{r.texSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ot(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Gt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function At(){try{r.texStorage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Wt(){try{r.texStorage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ee(){try{r.texImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Et(){try{r.texImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function bt(W){_t.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Ut(W){Tt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Tt.copy(W))}function Nt(W,Ot){let Rt=p.get(Ot);Rt===void 0&&(Rt=new WeakMap,p.set(Ot,Rt));let It=Rt.get(W);It===void 0&&(It=r.getUniformBlockIndex(Ot,W.name),Rt.set(W,It))}function Lt(W,Ot){const It=p.get(Ot).get(W);m.get(Ot)!==It&&(r.uniformBlockBinding(Ot,It,W.__bindingPointIndex),m.set(Ot,It))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ht=null,gt={},_={},S=new WeakMap,E=[],T=null,b=!1,y=null,x=null,P=null,L=null,N=null,F=null,I=null,B=new Te(0,0,0),Q=0,C=!1,D=null,X=null,nt=null,rt=null,lt=null,_t.set(0,0,r.canvas.width,r.canvas.height),Tt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:wt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:me,setBlending:ce,setMaterial:_e,setFlipSided:se,setCullFace:Ye,setLineWidth:H,setPolygonOffset:Xe,setScissorTest:ve,activeTexture:Xt,bindTexture:Ct,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:ee,texImage3D:Et,updateUBOMapping:Nt,uniformBlockBinding:Lt,texStorage2D:At,texStorage3D:Wt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ot,compressedTexSubImage3D:Gt,scissor:bt,viewport:Ut,reset:oe}}function SC(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new He,g=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(w,M){return E?new OffscreenCanvas(w,M):lu("canvas")}function b(w,M,Y){let pt=1;const St=Ct(w);if((St.width>Y||St.height>Y)&&(pt=Y/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ot=Math.floor(pt*St.width),Gt=Math.floor(pt*St.height);_===void 0&&(_=T(ot,Gt));const At=M?T(ot,Gt):_;return At.width=ot,At.height=Gt,At.getContext("2d").drawImage(w,0,0,ot,Gt),ae("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ot+"x"+Gt+")."),At}else return"data"in w&&ae("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),w;return w}function y(w){return w.generateMipmaps}function x(w){r.generateMipmap(w)}function P(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(w,M,Y,pt,St=!1){if(w!==null){if(r[w]!==void 0)return r[w];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot=M;if(M===r.RED&&(Y===r.FLOAT&&(ot=r.R32F),Y===r.HALF_FLOAT&&(ot=r.R16F),Y===r.UNSIGNED_BYTE&&(ot=r.R8)),M===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.R8UI),Y===r.UNSIGNED_SHORT&&(ot=r.R16UI),Y===r.UNSIGNED_INT&&(ot=r.R32UI),Y===r.BYTE&&(ot=r.R8I),Y===r.SHORT&&(ot=r.R16I),Y===r.INT&&(ot=r.R32I)),M===r.RG&&(Y===r.FLOAT&&(ot=r.RG32F),Y===r.HALF_FLOAT&&(ot=r.RG16F),Y===r.UNSIGNED_BYTE&&(ot=r.RG8)),M===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RG16UI),Y===r.UNSIGNED_INT&&(ot=r.RG32UI),Y===r.BYTE&&(ot=r.RG8I),Y===r.SHORT&&(ot=r.RG16I),Y===r.INT&&(ot=r.RG32I)),M===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),Y===r.UNSIGNED_INT&&(ot=r.RGB32UI),Y===r.BYTE&&(ot=r.RGB8I),Y===r.SHORT&&(ot=r.RGB16I),Y===r.INT&&(ot=r.RGB32I)),M===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ot=r.RGBA32UI),Y===r.BYTE&&(ot=r.RGBA8I),Y===r.SHORT&&(ot=r.RGBA16I),Y===r.INT&&(ot=r.RGBA32I)),M===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ot=r.R11F_G11F_B10F)),M===r.RGBA){const Gt=St?ru:Ce.getTransfer(pt);Y===r.FLOAT&&(ot=r.RGBA32F),Y===r.HALF_FLOAT&&(ot=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ot=Gt===ze?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function N(w,M){let Y;return w?M===null||M===Wi||M===sl?Y=r.DEPTH24_STENCIL8:M===Gi?Y=r.DEPTH32F_STENCIL8:M===al&&(Y=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===sl?Y=r.DEPTH_COMPONENT24:M===Gi?Y=r.DEPTH_COMPONENT32F:M===al&&(Y=r.DEPTH_COMPONENT16),Y}function F(w,M){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==Un&&w.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function I(w){const M=w.target;M.removeEventListener("dispose",I),Q(M),M.isVideoTexture&&g.delete(M)}function B(w){const M=w.target;M.removeEventListener("dispose",B),D(M)}function Q(w){const M=s.get(w);if(M.__webglInit===void 0)return;const Y=w.source,pt=S.get(Y);if(pt){const St=pt[M.__cacheKey];St.usedTimes--,St.usedTimes===0&&C(w),Object.keys(pt).length===0&&S.delete(Y)}s.remove(w)}function C(w){const M=s.get(w);r.deleteTexture(M.__webglTexture);const Y=w.source,pt=S.get(Y);delete pt[M.__cacheKey],h.memory.textures--}function D(w){const M=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(M.__webglFramebuffer[pt]))for(let St=0;St<M.__webglFramebuffer[pt].length;St++)r.deleteFramebuffer(M.__webglFramebuffer[pt][St]);else r.deleteFramebuffer(M.__webglFramebuffer[pt]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[pt])}else{if(Array.isArray(M.__webglFramebuffer))for(let pt=0;pt<M.__webglFramebuffer.length;pt++)r.deleteFramebuffer(M.__webglFramebuffer[pt]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pt=0;pt<M.__webglColorRenderbuffer.length;pt++)M.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[pt]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=w.textures;for(let pt=0,St=Y.length;pt<St;pt++){const ot=s.get(Y[pt]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),h.memory.textures--),s.remove(Y[pt])}s.remove(w)}let X=0;function nt(){X=0}function rt(){const w=X;return w>=l.maxTextures&&ae("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),X+=1,w}function lt(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function dt(w,M){const Y=s.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&Y.__version!==w.version){const pt=w.image;if(pt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,w,M);return}}else w.isExternalTexture&&(Y.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+M)}function O(w,M){const Y=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){J(Y,w,M);return}else w.isExternalTexture&&(Y.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+M)}function G(w,M){const Y=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){J(Y,w,M);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+M)}function V(w,M){const Y=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&Y.__version!==w.version){ft(Y,w,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+M)}const ht={[Ad]:r.REPEAT,[_a]:r.CLAMP_TO_EDGE,[Rd]:r.MIRRORED_REPEAT},gt={[Un]:r.NEAREST,[RE]:r.NEAREST_MIPMAP_NEAREST,[Ac]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Uh]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},U={[UE]:r.NEVER,[IE]:r.ALWAYS,[LE]:r.LESS,[Sp]:r.LEQUAL,[NE]:r.EQUAL,[yp]:r.GEQUAL,[OE]:r.GREATER,[PE]:r.NOTEQUAL};function tt(w,M){if(M.type===Gi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===Uh||M.magFilter===Ac||M.magFilter===Ls||M.minFilter===Bn||M.minFilter===Uh||M.minFilter===Ac||M.minFilter===Ls)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ht[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ht[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ht[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,gt[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Ac&&M.minFilter!==Ls||M.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function _t(w,M){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",I));const pt=M.source;let St=S.get(pt);St===void 0&&(St={},S.set(pt,St));const ot=lt(M);if(ot!==w.__cacheKey){St[ot]===void 0&&(St[ot]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),St[ot].usedTimes++;const Gt=St[w.__cacheKey];Gt!==void 0&&(St[w.__cacheKey].usedTimes--,Gt.usedTimes===0&&C(M)),w.__cacheKey=ot,w.__webglTexture=St[ot].texture}return Y}function Tt(w,M,Y){return Math.floor(Math.floor(w/Y)/M)}function zt(w,M,Y,pt){const ot=w.updateRanges;if(ot.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Y,pt,M.data);else{ot.sort((Et,bt)=>Et.start-bt.start);let Gt=0;for(let Et=1;Et<ot.length;Et++){const bt=ot[Gt],Ut=ot[Et],Nt=bt.start+bt.count,Lt=Tt(Ut.start,M.width,4),oe=Tt(bt.start,M.width,4);Ut.start<=Nt+1&&Lt===oe&&Tt(Ut.start+Ut.count-1,M.width,4)===Lt?bt.count=Math.max(bt.count,Ut.start+Ut.count-bt.start):(++Gt,ot[Gt]=Ut)}ot.length=Gt+1;const At=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Et=0,bt=ot.length;Et<bt;Et++){const Ut=ot[Et],Nt=Math.floor(Ut.start/4),Lt=Math.ceil(Ut.count/4),oe=Nt%M.width,W=Math.floor(Nt/M.width),Ot=Lt,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,oe,W,Ot,Rt,Y,pt,M.data)}w.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,At),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function J(w,M,Y){let pt=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pt=r.TEXTURE_3D);const St=_t(w,M),ot=M.source;i.bindTexture(pt,w.__webglTexture,r.TEXTURE0+Y);const Gt=s.get(ot);if(ot.version!==Gt.__version||St===!0){i.activeTexture(r.TEXTURE0+Y);const At=Ce.getPrimaries(Ce.workingColorSpace),Wt=M.colorSpace===ns?null:Ce.getPrimaries(M.colorSpace),ee=M.colorSpace===ns||At===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Et=b(M.image,!1,l.maxTextureSize);Et=Xt(M,Et);const bt=c.convert(M.format,M.colorSpace),Ut=c.convert(M.type);let Nt=L(M.internalFormat,bt,Ut,M.colorSpace,M.isVideoTexture);tt(pt,M);let Lt;const oe=M.mipmaps,W=M.isVideoTexture!==!0,Ot=Gt.__version===void 0||St===!0,Rt=ot.dataReady,It=F(M,Et);if(M.isDepthTexture)Nt=N(M.format===Ns,M.type),Ot&&(W?i.texStorage2D(r.TEXTURE_2D,1,Nt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Nt,Et.width,Et.height,0,bt,Ut,null));else if(M.isDataTexture)if(oe.length>0){W&&Ot&&i.texStorage2D(r.TEXTURE_2D,It,Nt,oe[0].width,oe[0].height);for(let Mt=0,yt=oe.length;Mt<yt;Mt++)Lt=oe[Mt],W?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,bt,Ut,Lt.data):i.texImage2D(r.TEXTURE_2D,Mt,Nt,Lt.width,Lt.height,0,bt,Ut,Lt.data);M.generateMipmaps=!1}else W?(Ot&&i.texStorage2D(r.TEXTURE_2D,It,Nt,Et.width,Et.height),Rt&&zt(M,Et,bt,Ut)):i.texImage2D(r.TEXTURE_2D,0,Nt,Et.width,Et.height,0,bt,Ut,Et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,Nt,oe[0].width,oe[0].height,Et.depth);for(let Mt=0,yt=oe.length;Mt<yt;Mt++)if(Lt=oe[Mt],M.format!==Ni)if(bt!==null)if(W){if(Rt)if(M.layerUpdates.size>0){const Dt=rv(Lt.width,Lt.height,M.format,M.type);for(const re of M.layerUpdates){const Pe=Lt.data.subarray(re*Dt/Lt.data.BYTES_PER_ELEMENT,(re+1)*Dt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,re,Lt.width,Lt.height,1,bt,Pe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,Et.depth,bt,Lt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Nt,Lt.width,Lt.height,Et.depth,0,Lt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Lt.width,Lt.height,Et.depth,bt,Ut,Lt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Nt,Lt.width,Lt.height,Et.depth,0,bt,Ut,Lt.data)}else{W&&Ot&&i.texStorage2D(r.TEXTURE_2D,It,Nt,oe[0].width,oe[0].height);for(let Mt=0,yt=oe.length;Mt<yt;Mt++)Lt=oe[Mt],M.format!==Ni?bt!==null?W?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,bt,Lt.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Nt,Lt.width,Lt.height,0,Lt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Lt.width,Lt.height,bt,Ut,Lt.data):i.texImage2D(r.TEXTURE_2D,Mt,Nt,Lt.width,Lt.height,0,bt,Ut,Lt.data)}else if(M.isDataArrayTexture)if(W){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,Nt,Et.width,Et.height,Et.depth),Rt)if(M.layerUpdates.size>0){const Mt=rv(Et.width,Et.height,M.format,M.type);for(const yt of M.layerUpdates){const Dt=Et.data.subarray(yt*Mt/Et.data.BYTES_PER_ELEMENT,(yt+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,Et.width,Et.height,1,bt,Ut,Dt)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ut,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,Et.width,Et.height,Et.depth,0,bt,Ut,Et.data);else if(M.isData3DTexture)W?(Ot&&i.texStorage3D(r.TEXTURE_3D,It,Nt,Et.width,Et.height,Et.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Ut,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Nt,Et.width,Et.height,Et.depth,0,bt,Ut,Et.data);else if(M.isFramebufferTexture){if(Ot)if(W)i.texStorage2D(r.TEXTURE_2D,It,Nt,Et.width,Et.height);else{let Mt=Et.width,yt=Et.height;for(let Dt=0;Dt<It;Dt++)i.texImage2D(r.TEXTURE_2D,Dt,Nt,Mt,yt,0,bt,Ut,null),Mt>>=1,yt>>=1}}else if(oe.length>0){if(W&&Ot){const Mt=Ct(oe[0]);i.texStorage2D(r.TEXTURE_2D,It,Nt,Mt.width,Mt.height)}for(let Mt=0,yt=oe.length;Mt<yt;Mt++)Lt=oe[Mt],W?Rt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,Ut,Lt):i.texImage2D(r.TEXTURE_2D,Mt,Nt,bt,Ut,Lt);M.generateMipmaps=!1}else if(W){if(Ot){const Mt=Ct(Et);i.texStorage2D(r.TEXTURE_2D,It,Nt,Mt.width,Mt.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Ut,Et)}else i.texImage2D(r.TEXTURE_2D,0,Nt,bt,Ut,Et);y(M)&&x(pt),Gt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ft(w,M,Y){if(M.image.length!==6)return;const pt=_t(w,M),St=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+Y);const ot=s.get(St);if(St.version!==ot.__version||pt===!0){i.activeTexture(r.TEXTURE0+Y);const Gt=Ce.getPrimaries(Ce.workingColorSpace),At=M.colorSpace===ns?null:Ce.getPrimaries(M.colorSpace),Wt=M.colorSpace===ns||Gt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Et=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let yt=0;yt<6;yt++)!ee&&!Et?bt[yt]=b(M.image[yt],!0,l.maxCubemapSize):bt[yt]=Et?M.image[yt].image:M.image[yt],bt[yt]=Xt(M,bt[yt]);const Ut=bt[0],Nt=c.convert(M.format,M.colorSpace),Lt=c.convert(M.type),oe=L(M.internalFormat,Nt,Lt,M.colorSpace),W=M.isVideoTexture!==!0,Ot=ot.__version===void 0||pt===!0,Rt=St.dataReady;let It=F(M,Ut);tt(r.TEXTURE_CUBE_MAP,M);let Mt;if(ee){W&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,It,oe,Ut.width,Ut.height);for(let yt=0;yt<6;yt++){Mt=bt[yt].mipmaps;for(let Dt=0;Dt<Mt.length;Dt++){const re=Mt[Dt];M.format!==Ni?Nt!==null?W?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,0,0,re.width,re.height,Nt,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,oe,re.width,re.height,0,re.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,0,0,re.width,re.height,Nt,Lt,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt,oe,re.width,re.height,0,Nt,Lt,re.data)}}}else{if(Mt=M.mipmaps,W&&Ot){Mt.length>0&&It++;const yt=Ct(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,It,oe,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Et){W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,bt[yt].width,bt[yt].height,Nt,Lt,bt[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,oe,bt[yt].width,bt[yt].height,0,Nt,Lt,bt[yt].data);for(let Dt=0;Dt<Mt.length;Dt++){const Pe=Mt[Dt].image[yt].image;W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,0,0,Pe.width,Pe.height,Nt,Lt,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,oe,Pe.width,Pe.height,0,Nt,Lt,Pe.data)}}else{W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Nt,Lt,bt[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,oe,Nt,Lt,bt[yt]);for(let Dt=0;Dt<Mt.length;Dt++){const re=Mt[Dt];W?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,0,0,Nt,Lt,re.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt+1,oe,Nt,Lt,re.image[yt])}}}y(M)&&x(r.TEXTURE_CUBE_MAP),ot.__version=St.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function wt(w,M,Y,pt,St,ot){const Gt=c.convert(Y.format,Y.colorSpace),At=c.convert(Y.type),Wt=L(Y.internalFormat,Gt,At,Y.colorSpace),ee=s.get(M),Et=s.get(Y);if(Et.__renderTarget=M,!ee.__hasExternalTextures){const bt=Math.max(1,M.width>>ot),Ut=Math.max(1,M.height>>ot);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ot,Wt,bt,Ut,M.depth,0,Gt,At,null):i.texImage2D(St,ot,Wt,bt,Ut,0,Gt,At,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),Xe(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,St,Et.__webglTexture,0,H(M)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,St,Et.__webglTexture,ot),i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(w,M,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const pt=M.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ot=N(M.stencilBuffer,St),Gt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xe(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(M),ot,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(M),ot,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ot,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,w)}else{const pt=M.textures;for(let St=0;St<pt.length;St++){const ot=pt[St],Gt=c.convert(ot.format,ot.colorSpace),At=c.convert(ot.type),Wt=L(ot.internalFormat,Gt,At,ot.colorSpace);Xe(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(M),Wt,M.width,M.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(M),Wt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(w,M,Y){const pt=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(M.depthTexture);if(St.__renderTarget=M,(!St.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),tt(r.TEXTURE_CUBE_MAP,M.depthTexture);const ee=c.convert(M.depthTexture.format),Et=c.convert(M.depthTexture.type);let bt;M.depthTexture.format===ya?bt=r.DEPTH_COMPONENT24:M.depthTexture.format===Ns&&(bt=r.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,bt,M.width,M.height,0,ee,Et,null)}}else dt(M.depthTexture,0);const ot=St.__webglTexture,Gt=H(M),At=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,Wt=M.depthTexture.format===Ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ya)Xe(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,At,ot,0,Gt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,At,ot,0);else if(M.depthTexture.format===Ns)Xe(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,At,ot,0,Gt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,At,ot,0);else throw new Error("Unknown depthTexture format")}function me(w){const M=s.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const pt=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pt){const St=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),M.__depthDisposeCallback=St}M.__boundDepthTexture=pt}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let pt=0;pt<6;pt++)Ht(M.__webglFramebuffer[pt],w,pt);else{const pt=w.texture.mipmaps;pt&&pt.length>0?Ht(M.__webglFramebuffer[0],w,0):Ht(M.__webglFramebuffer,w,0)}else if(Y){M.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[pt]),M.__webglDepthbuffer[pt]===void 0)M.__webglDepthbuffer[pt]=r.createRenderbuffer(),kt(M.__webglDepthbuffer[pt],w,!1);else{const St=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ot)}}else{const pt=w.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),kt(M.__webglDepthbuffer,w,!1);else{const St=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ot)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(w,M,Y){const pt=s.get(w);M!==void 0&&wt(pt.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&me(w)}function ge(w){const M=w.texture,Y=s.get(w),pt=s.get(M);w.addEventListener("dispose",B);const St=w.textures,ot=w.isWebGLCubeRenderTarget===!0,Gt=St.length>1;if(Gt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=M.version,h.memory.textures++),ot){Y.__webglFramebuffer=[];for(let At=0;At<6;At++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[At]=[];for(let Wt=0;Wt<M.mipmaps.length;Wt++)Y.__webglFramebuffer[At][Wt]=r.createFramebuffer()}else Y.__webglFramebuffer[At]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let At=0;At<M.mipmaps.length;At++)Y.__webglFramebuffer[At]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let At=0,Wt=St.length;At<Wt;At++){const ee=s.get(St[At]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),h.memory.textures++)}if(w.samples>0&&Xe(w)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let At=0;At<St.length;At++){const Wt=St[At];Y.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[At]);const ee=c.convert(Wt.format,Wt.colorSpace),Et=c.convert(Wt.type),bt=L(Wt.internalFormat,ee,Et,Wt.colorSpace,w.isXRRenderTarget===!0),Ut=H(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,bt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,Y.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(Y.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,M);for(let At=0;At<6;At++)if(M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)wt(Y.__webglFramebuffer[At][Wt],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Wt);else wt(Y.__webglFramebuffer[At],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(M)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let At=0,Wt=St.length;At<Wt;At++){const ee=St[At],Et=s.get(ee);let bt=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,Et.__webglTexture),tt(bt,ee),wt(Y.__webglFramebuffer,w,ee,r.COLOR_ATTACHMENT0+At,bt,0),y(ee)&&x(bt)}i.unbindTexture()}else{let At=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(At=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,pt.__webglTexture),tt(At,M),M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)wt(Y.__webglFramebuffer[Wt],w,M,r.COLOR_ATTACHMENT0,At,Wt);else wt(Y.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,At,0);y(M)&&x(At),i.unbindTexture()}w.depthBuffer&&me(w)}function ce(w){const M=w.textures;for(let Y=0,pt=M.length;Y<pt;Y++){const St=M[Y];if(y(St)){const ot=P(w),Gt=s.get(St).__webglTexture;i.bindTexture(ot,Gt),x(ot),i.unbindTexture()}}}const _e=[],se=[];function Ye(w){if(w.samples>0){if(Xe(w)===!1){const M=w.textures,Y=w.width,pt=w.height;let St=r.COLOR_BUFFER_BIT;const ot=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=s.get(w),At=M.length>1;if(At)for(let ee=0;ee<M.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer);const Wt=w.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let ee=0;ee<M.length;ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[ee]);const Et=s.get(M[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,St,r.NEAREST),m===!0&&(_e.length=0,se.length=0,_e.push(r.COLOR_ATTACHMENT0+ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_e.push(ot),se.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let ee=0;ee<M.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[ee]);const Et=s.get(M[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function H(w){return Math.min(l.maxSamples,w.samples)}function Xe(w){const M=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(w){const M=h.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function Xt(w,M){const Y=w.colorSpace,pt=w.format,St=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Y!==Xr&&Y!==ns&&(Ce.getTransfer(Y)===ze?(pt!==Ni||St!==yi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",Y)),M}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=nt,this.setTexture2D=dt,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=Qe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function yC(r,t){function i(s,l=ns){let c;const h=Ce.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===mp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===gp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ax)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===sx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===nx)return r.BYTE;if(s===ix)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===pp)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===Sa)return r.HALF_FLOAT;if(s===rx)return r.ALPHA;if(s===ox)return r.RGB;if(s===Ni)return r.RGBA;if(s===ya)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===lx)return r.RED;if(s===_p)return r.RED_INTEGER;if(s===kr)return r.RG;if(s===vp)return r.RG_INTEGER;if(s===xp)return r.RGBA_INTEGER;if(s===$c||s===tu||s===eu||s===nu)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cd||s===wd||s===Dd||s===Ud)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld||s===Nd||s===Od||s===Pd||s===Id||s===Bd||s===Fd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ld||s===Nd)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Pd)return c.COMPRESSED_R11_EAC;if(s===Id)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bd)return c.COMPRESSED_RG11_EAC;if(s===Fd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===qd||s===jd||s===Zd||s===Kd||s===Qd||s===Jd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$d||s===tp||s===ep)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===$d)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===np||s===ip||s===ap||s===sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===np)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const MC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EC=`
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

}`;class bC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new yx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Yi({vertexShader:MC,fragmentShader:EC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ea(new mu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends Yr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,E=null,T=null;const b=typeof XRWebGLBinding<"u",y=new bC,x={},P=i.getContextAttributes();let L=null,N=null;const F=[],I=[],B=new He;let Q=null;const C=new Si;C.viewport=new on;const D=new Si;D.viewport=new on;const X=[C,D],nt=new Nb;let rt=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=F[J];return ft===void 0&&(ft=new $h,F[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=F[J];return ft===void 0&&(ft=new $h,F[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=F[J];return ft===void 0&&(ft=new $h,F[J]=ft),ft.getHandSpace()};function dt(J){const ft=I.indexOf(J.inputSource);if(ft===-1)return;const wt=F[ft];wt!==void 0&&(wt.update(J.inputSource,J.frame,p||h),wt.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",G);for(let J=0;J<F.length;J++){const ft=I[J];ft!==null&&(I[J]=null,F[J].disconnect(ft))}rt=null,lt=null,y.reset();for(const J in x)delete x[J];t.setRenderTarget(L),E=null,S=null,_=null,l=null,N=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(Q),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,kt=null,Ht=null;P.depth&&(Ht=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=P.stencil?Ns:ya,kt=P.stencil?sl:Wi);const me={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(me),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),N=new Xi(S.textureWidth,S.textureHeight,{format:Ni,type:yi,depthTexture:new ll(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Xi(E.framebufferWidth,E.framebufferHeight,{format:Ni,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(J){for(let ft=0;ft<J.removed.length;ft++){const wt=J.removed[ft],kt=I.indexOf(wt);kt>=0&&(I[kt]=null,F[kt].disconnect(wt))}for(let ft=0;ft<J.added.length;ft++){const wt=J.added[ft];let kt=I.indexOf(wt);if(kt===-1){for(let me=0;me<F.length;me++)if(me>=I.length){I.push(wt),kt=me;break}else if(I[me]===null){I[me]=wt,kt=me;break}if(kt===-1)break}const Ht=F[kt];Ht&&Ht.connect(wt)}}const V=new it,ht=new it;function gt(J,ft,wt){V.setFromMatrixPosition(ft.matrixWorld),ht.setFromMatrixPosition(wt.matrixWorld);const kt=V.distanceTo(ht),Ht=ft.projectionMatrix.elements,me=wt.projectionMatrix.elements,Qe=Ht[14]/(Ht[10]-1),ge=Ht[14]/(Ht[10]+1),ce=(Ht[9]+1)/Ht[5],_e=(Ht[9]-1)/Ht[5],se=(Ht[8]-1)/Ht[0],Ye=(me[8]+1)/me[0],H=Qe*se,Xe=Qe*Ye,ve=kt/(-se+Ye),Xt=ve*-se;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xt),J.translateZ(ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ht[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Ct=Qe+ve,w=ge+ve,M=H-Xt,Y=Xe+(kt-Xt),pt=ce*ge/w*Ct,St=_e*ge/w*Ct;J.projectionMatrix.makePerspective(M,Y,pt,St,Ct,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ft=J.near,wt=J.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),nt.near=D.near=C.near=ft,nt.far=D.far=C.far=wt,(rt!==nt.near||lt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),rt=nt.near,lt=nt.far),nt.layers.mask=J.layers.mask|6,C.layers.mask=nt.layers.mask&3,D.layers.mask=nt.layers.mask&5;const kt=J.parent,Ht=nt.cameras;U(nt,kt);for(let me=0;me<Ht.length;me++)U(Ht[me],kt);Ht.length===2?gt(nt,C,D):nt.projectionMatrix.copy(C.projectionMatrix),tt(J,nt,kt)};function tt(J,ft,wt){wt===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(wt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ol*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(nt)},this.getCameraTexture=function(J){return x[J]};let _t=null;function Tt(J,ft){if(g=ft.getViewerPose(p||h),T=ft,g!==null){const wt=g.views;E!==null&&(t.setRenderTargetFramebuffer(N,E.framebuffer),t.setRenderTarget(N));let kt=!1;wt.length!==nt.cameras.length&&(nt.cameras.length=0,kt=!0);for(let ge=0;ge<wt.length;ge++){const ce=wt[ge];let _e=null;if(E!==null)_e=E.getViewport(ce);else{const Ye=_.getViewSubImage(S,ce);_e=Ye.viewport,ge===0&&(t.setRenderTargetTextures(N,Ye.colorTexture,Ye.depthStencilTexture),t.setRenderTarget(N))}let se=X[ge];se===void 0&&(se=new Si,se.layers.enable(ge),se.viewport=new on,X[ge]=se),se.matrix.fromArray(ce.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ce.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(_e.x,_e.y,_e.width,_e.height),ge===0&&(nt.matrix.copy(se.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),kt===!0&&nt.cameras.push(se)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){_=s.getBinding();const ge=_.getDepthInformation(wt[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(Ht&&Ht.includes("camera-access")&&b){t.state.unbindTexture(),_=s.getBinding();for(let ge=0;ge<wt.length;ge++){const ce=wt[ge].camera;if(ce){let _e=x[ce];_e||(_e=new yx,x[ce]=_e);const se=_.getCameraImage(ce);_e.sourceTexture=se}}}}for(let wt=0;wt<F.length;wt++){const kt=I[wt],Ht=F[wt];kt!==null&&Ht!==void 0&&Ht.update(kt,ft,p||h)}_t&&_t(J,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),T=null}const zt=new Ex;zt.setAnimationLoop(Tt),this.setAnimationLoop=function(J){_t=J},this.dispose=function(){}}}const Cs=new Ma,AC=new en;function RC(r,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,mx(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,P,L,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,N)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),b(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,P,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=t.get(x),L=P.envMap,N=P.envMapRotation;L&&(y.envMap.value=L,Cs.copy(N),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),y.envMapRotation.value.setFromMatrix4(AC.makeRotationFromEuler(Cs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=L*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const P=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function CC(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,L){const N=L.program;s.uniformBlockBinding(P,N)}function p(P,L){let N=l[P.id];N===void 0&&(T(P),N=g(P),l[P.id]=N,P.addEventListener("dispose",y));const F=L.program;s.updateUBOMapping(P,F);const I=t.render.frame;c[P.id]!==I&&(S(P),c[P.id]=I)}function g(P){const L=_();P.__bindingPointIndex=L;const N=r.createBuffer(),F=P.__size,I=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,F,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const L=l[P.id],N=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,B=N.length;I<B;I++){const Q=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,D=Q.length;C<D;C++){const X=Q[C];if(E(X,I,C,F)===!0){const nt=X.__offset,rt=Array.isArray(X.value)?X.value:[X.value];let lt=0;for(let dt=0;dt<rt.length;dt++){const O=rt[dt],G=b(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,nt+lt,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,lt),lt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,nt,X.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(P,L,N,F){const I=P.value,B=L+"_"+N;if(F[B]===void 0)return typeof I=="number"||typeof I=="boolean"?F[B]=I:F[B]=I.clone(),!0;{const Q=F[B];if(typeof I=="number"||typeof I=="boolean"){if(Q!==I)return F[B]=I,!0}else if(Q.equals(I)===!1)return Q.copy(I),!0}return!1}function T(P){const L=P.uniforms;let N=0;const F=16;for(let B=0,Q=L.length;B<Q;B++){const C=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,X=C.length;D<X;D++){const nt=C[D],rt=Array.isArray(nt.value)?nt.value:[nt.value];for(let lt=0,dt=rt.length;lt<dt;lt++){const O=rt[lt],G=b(O),V=N%F,ht=V%G.boundary,gt=V+ht;N+=ht,gt!==0&&F-gt<G.storage&&(N+=F-gt),nt.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=N,N+=G.storage}}}const I=N%F;return I>0&&(N+=F-I),P.__size=N,P.__cache={},this}function b(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",P),L}function y(P){const L=P.target;L.removeEventListener("dispose",y);const N=h.indexOf(L.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const wC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function DC(){return zi===null&&(zi=new Tb(wC,16,16,kr,Sa),zi.name="DFG_LUT",zi.minFilter=Bn,zi.magFilter=Bn,zi.wrapS=_a,zi.wrapT=_a,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class UC{constructor(t={}){const{canvas:i=BE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=yi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const b=E,y=new Set([xp,vp,_p]),x=new Set([yi,Wi,al,sl,mp,gp]),P=new Uint32Array(4),L=new Int32Array(4);let N=null,F=null;const I=[],B=[];let Q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=vi;let X=0,nt=0,rt=null,lt=-1,dt=null;const O=new on,G=new on;let V=null;const ht=new Te(0);let gt=0,U=i.width,tt=i.height,_t=1,Tt=null,zt=null;const J=new on(0,0,U,tt),ft=new on(0,0,U,tt);let wt=!1;const kt=new xx;let Ht=!1,me=!1;const Qe=new en,ge=new it,ce=new on,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ye(){return rt===null?_t:1}let H=s;function Xe(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dp}`),i.addEventListener("webglcontextlost",re,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),H===null){const q="webgl2";if(H=Xe(q,R),H===null)throw Xe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Re("WebGLRenderer: "+R.message),R}let ve,Xt,Ct,w,M,Y,pt,St,ot,Gt,At,Wt,ee,Et,bt,Ut,Nt,Lt,oe,W,Ot,Rt,It,Mt;function yt(){ve=new D1(H),ve.init(),Rt=new yC(H,ve),Xt=new y1(H,ve,t,Rt),Ct=new xC(H,ve),Xt.reversedDepthBuffer&&S&&Ct.buffers.depth.setReversed(!0),w=new N1(H),M=new aC,Y=new SC(H,ve,Ct,M,Xt,Rt,w),pt=new E1(C),St=new w1(C),ot=new Bb(H),It=new x1(H,ot),Gt=new U1(H,ot,w,It),At=new P1(H,Gt,ot,w),oe=new O1(H,Xt,Y),Ut=new M1(M),Wt=new iC(C,pt,St,ve,Xt,It,Ut),ee=new RC(C,M),Et=new rC,bt=new hC(ve),Lt=new v1(C,pt,St,Ct,At,T,m),Nt=new _C(C,At,Xt),Mt=new CC(H,w,Xt,Ct),W=new S1(H,ve,w),Ot=new L1(H,ve,w),w.programs=Wt.programs,C.capabilities=Xt,C.extensions=ve,C.properties=M,C.renderLists=Et,C.shadowMap=Nt,C.state=Ct,C.info=w}yt(),b!==yi&&(Q=new B1(b,i.width,i.height,l,c));const Dt=new TC(C,H);this.xr=Dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(U,tt,!1))},this.getSize=function(R){return R.set(U,tt)},this.setSize=function(R,q,ct=!0){if(Dt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,tt=q,i.width=Math.floor(R*_t),i.height=Math.floor(q*_t),ct===!0&&(i.style.width=R+"px",i.style.height=q+"px"),Q!==null&&Q.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(U*_t,tt*_t).floor()},this.setDrawingBufferSize=function(R,q,ct){U=R,tt=q,_t=ct,i.width=Math.floor(R*ct),i.height=Math.floor(q*ct),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(b===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,q,ct,at){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,q,ct,at),Ct.viewport(O.copy(J).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,q,ct,at){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,q,ct,at),Ct.scissor(G.copy(ft).multiplyScalar(_t).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){Ct.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){zt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ct=!0){let at=0;if(R){let K=!1;if(rt!==null){const Pt=rt.texture.format;K=y.has(Pt)}if(K){const Pt=rt.texture.type,Vt=x.has(Pt),Bt=Lt.getClearColor(),Yt=Lt.getClearAlpha(),jt=Bt.r,$t=Bt.g,Zt=Bt.b;Vt?(P[0]=jt,P[1]=$t,P[2]=Zt,P[3]=Yt,H.clearBufferuiv(H.COLOR,0,P)):(L[0]=jt,L[1]=$t,L[2]=Zt,L[3]=Yt,H.clearBufferiv(H.COLOR,0,L))}else at|=H.COLOR_BUFFER_BIT}q&&(at|=H.DEPTH_BUFFER_BIT),ct&&(at|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",re,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),Lt.dispose(),Et.dispose(),bt.dispose(),M.dispose(),pt.dispose(),St.dispose(),At.dispose(),It.dispose(),Mt.dispose(),Wt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Bs),Dt.removeEventListener("sessionend",Jr),Oi.stop()};function re(R){R.preventDefault(),N_("WebGLRenderer: Context Lost."),D=!0}function Pe(){N_("WebGLRenderer: Context Restored."),D=!1;const R=w.autoReset,q=Nt.enabled,ct=Nt.autoUpdate,at=Nt.needsUpdate,K=Nt.type;yt(),w.autoReset=R,Nt.enabled=q,Nt.autoUpdate=ct,Nt.needsUpdate=at,Nt.type=K}function Ae(R){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ln(R){const q=R.target;q.removeEventListener("dispose",Ln),Ei(q)}function Ei(R){ml(R),M.remove(R)}function ml(R){const q=M.get(R).programs;q!==void 0&&(q.forEach(function(ct){Wt.releaseProgram(ct)}),R.isShaderMaterial&&Wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ct,at,K,Pt){q===null&&(q=_e);const Vt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=ss(R,q,ct,at,K);Ct.setMaterial(at,Vt);let Yt=ct.index,jt=1;if(at.wireframe===!0){if(Yt=Gt.getWireframeAttribute(ct),Yt===void 0)return;jt=2}const $t=ct.drawRange,Zt=ct.attributes.position;let ne=$t.start*jt,Ue=($t.start+$t.count)*jt;Pt!==null&&(ne=Math.max(ne,Pt.start*jt),Ue=Math.min(Ue,(Pt.start+Pt.count)*jt)),Yt!==null?(ne=Math.max(ne,0),Ue=Math.min(Ue,Yt.count)):Zt!=null&&(ne=Math.max(ne,0),Ue=Math.min(Ue,Zt.count));const Je=Ue-ne;if(Je<0||Je===1/0)return;It.setup(K,at,Bt,ct,Yt);let qe,Oe=W;if(Yt!==null&&(qe=ot.get(Yt),Oe=Ot,Oe.setIndex(qe)),K.isMesh)at.wireframe===!0?(Ct.setLineWidth(at.wireframeLinewidth*Ye()),Oe.setMode(H.LINES)):Oe.setMode(H.TRIANGLES);else if(K.isLine){let Qt=at.linewidth;Qt===void 0&&(Qt=1),Ct.setLineWidth(Qt*Ye()),K.isLineSegments?Oe.setMode(H.LINES):K.isLineLoop?Oe.setMode(H.LINE_LOOP):Oe.setMode(H.LINE_STRIP)}else K.isPoints?Oe.setMode(H.POINTS):K.isSprite&&Oe.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))Oe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qt=K._multiDrawStarts,Le=K._multiDrawCounts,le=K._multiDrawCount,Mn=Yt?ot.get(Yt).bytesPerElement:1,qi=M.get(at).currentProgram.getUniforms();for(let En=0;En<le;En++)qi.setValue(H,"_gl_DrawID",En),Oe.render(Qt[En]/Mn,Le[En])}else if(K.isInstancedMesh)Oe.renderInstances(ne,Je,K.count);else if(ct.isInstancedBufferGeometry){const Qt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Le=Math.min(ct.instanceCount,Qt);Oe.renderInstances(ne,Je,Le)}else Oe.render(ne,Je)};function Kr(R,q,ct){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,zs(R,q,ct),R.side=as,R.needsUpdate=!0,zs(R,q,ct),R.side=ga):zs(R,q,ct)}this.compile=function(R,q,ct=null){ct===null&&(ct=R),F=bt.get(ct),F.init(q),B.push(F),ct.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),R!==ct&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const at=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Pt=K.material;if(Pt)if(Array.isArray(Pt))for(let Vt=0;Vt<Pt.length;Vt++){const Bt=Pt[Vt];Kr(Bt,ct,K),at.add(Bt)}else Kr(Pt,ct,K),at.add(Pt)}),F=B.pop(),at},this.compileAsync=function(R,q,ct=null){const at=this.compile(R,q,ct);return new Promise(K=>{function Pt(){if(at.forEach(function(Vt){M.get(Vt).currentProgram.isReady()&&at.delete(Vt)}),at.size===0){K(R);return}setTimeout(Pt,10)}ve.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Is=null;function Qr(R){Is&&Is(R)}function Bs(){Oi.stop()}function Jr(){Oi.start()}const Oi=new Ex;Oi.setAnimationLoop(Qr),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(R){Is=R,Dt.setAnimationLoop(R),R===null?Oi.stop():Oi.start()},Dt.addEventListener("sessionstart",Bs),Dt.addEventListener("sessionend",Jr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ct=Dt.enabled===!0&&Dt.isPresenting===!0,at=Q!==null&&(rt===null||ct)&&Q.begin(C,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(q),q=Dt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,rt),F=bt.get(R,B.length),F.init(q),B.push(F),Qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),kt.setFromProjectionMatrix(Qe,Vi,q.reversedDepth),me=this.localClippingEnabled,Ht=Ut.init(this.clippingPlanes,me),N=Et.get(R,I.length),N.init(),I.push(N),Dt.enabled===!0&&Dt.isPresenting===!0){const Vt=C.xr.getDepthSensingMesh();Vt!==null&&oi(Vt,q,-1/0,C.sortObjects)}oi(R,q,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(Tt,zt),se=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,se&&Lt.addToRenderList(N,R),this.info.render.frame++,Ht===!0&&Ut.beginShadows();const K=F.state.shadowsArray;if(Nt.render(K,R,q),Ht===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&Q.hasRenderPass())===!1){const Vt=N.opaque,Bt=N.transmissive;if(F.setupLights(),q.isArrayCamera){const Yt=q.cameras;if(Bt.length>0)for(let jt=0,$t=Yt.length;jt<$t;jt++){const Zt=Yt[jt];yn(Vt,Bt,R,Zt)}se&&Lt.render(R);for(let jt=0,$t=Yt.length;jt<$t;jt++){const Zt=Yt[jt];ln(N,R,Zt,Zt.viewport)}}else Bt.length>0&&yn(Vt,Bt,R,q),se&&Lt.render(R),ln(N,R,q)}rt!==null&&nt===0&&(Y.updateMultisampleRenderTarget(rt),Y.updateRenderTargetMipmap(rt)),at&&Q.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),It.resetDefaultState(),lt=-1,dt=null,B.pop(),B.length>0?(F=B[B.length-1],Ht===!0&&Ut.setGlobalState(C.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function oi(R,q,ct,at){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)F.pushLight(R),R.castShadow&&F.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||kt.intersectsSprite(R)){at&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Qe);const Vt=At.update(R),Bt=R.material;Bt.visible&&N.push(R,Vt,Bt,ct,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||kt.intersectsObject(R))){const Vt=At.update(R),Bt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ce.copy(Vt.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Qe)),Array.isArray(Bt)){const Yt=Vt.groups;for(let jt=0,$t=Yt.length;jt<$t;jt++){const Zt=Yt[jt],ne=Bt[Zt.materialIndex];ne&&ne.visible&&N.push(R,Vt,ne,ct,ce.z,Zt)}}else Bt.visible&&N.push(R,Vt,Bt,ct,ce.z,null)}}const Pt=R.children;for(let Vt=0,Bt=Pt.length;Vt<Bt;Vt++)oi(Pt[Vt],q,ct,at)}function ln(R,q,ct,at){const{opaque:K,transmissive:Pt,transparent:Vt}=R;F.setupLightsView(ct),Ht===!0&&Ut.setGlobalState(C.clippingPlanes,ct),at&&Ct.viewport(O.copy(at)),K.length>0&&bi(K,q,ct),Pt.length>0&&bi(Pt,q,ct),Vt.length>0&&bi(Vt,q,ct),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function yn(R,q,ct,at){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[at.id]===void 0){const ne=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[at.id]=new Xi(1,1,{generateMipmaps:!0,type:ne?Sa:yi,minFilter:Ls,samples:Xt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Pt=F.state.transmissionRenderTarget[at.id],Vt=at.viewport||O;Pt.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);const Bt=C.getRenderTarget(),Yt=C.getActiveCubeFace(),jt=C.getActiveMipmapLevel();C.setRenderTarget(Pt),C.getClearColor(ht),gt=C.getClearAlpha(),gt<1&&C.setClearColor(16777215,.5),C.clear(),se&&Lt.render(ct);const $t=C.toneMapping;C.toneMapping=ki;const Zt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),F.setupLightsView(at),Ht===!0&&Ut.setGlobalState(C.clippingPlanes,at),bi(R,ct,at),Y.updateMultisampleRenderTarget(Pt),Y.updateRenderTargetMipmap(Pt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Ue=0,Je=q.length;Ue<Je;Ue++){const qe=q[Ue],{object:Oe,geometry:Qt,material:Le,group:le}=qe;if(Le.side===ga&&Oe.layers.test(at.layers)){const Mn=Le.side;Le.side=Kn,Le.needsUpdate=!0,Fs(Oe,ct,at,Qt,Le,le),Le.side=Mn,Le.needsUpdate=!0,ne=!0}}ne===!0&&(Y.updateMultisampleRenderTarget(Pt),Y.updateRenderTargetMipmap(Pt))}C.setRenderTarget(Bt,Yt,jt),C.setClearColor(ht,gt),Zt!==void 0&&(at.viewport=Zt),C.toneMapping=$t}function bi(R,q,ct){const at=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Pt=R.length;K<Pt;K++){const Vt=R[K],{object:Bt,geometry:Yt,group:jt}=Vt;let $t=Vt.material;$t.allowOverride===!0&&at!==null&&($t=at),Bt.layers.test(ct.layers)&&Fs(Bt,q,ct,Yt,$t,jt)}}function Fs(R,q,ct,at,K,Pt){R.onBeforeRender(C,q,ct,at,K,Pt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,q,ct,at,R,Pt),K.transparent===!0&&K.side===ga&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,C.renderBufferDirect(ct,q,at,K,R,Pt),K.side=as,K.needsUpdate=!0,C.renderBufferDirect(ct,q,at,K,R,Pt),K.side=ga):C.renderBufferDirect(ct,q,at,K,R,Pt),R.onAfterRender(C,q,ct,at,K,Pt)}function zs(R,q,ct){q.isScene!==!0&&(q=_e);const at=M.get(R),K=F.state.lights,Pt=F.state.shadowsArray,Vt=K.state.version,Bt=Wt.getParameters(R,K.state,Pt,q,ct),Yt=Wt.getProgramCacheKey(Bt);let jt=at.programs;at.environment=R.isMeshStandardMaterial?q.environment:null,at.fog=q.fog,at.envMap=(R.isMeshStandardMaterial?St:pt).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Ln),jt=new Map,at.programs=jt);let $t=jt.get(Yt);if($t!==void 0){if(at.currentProgram===$t&&at.lightsStateVersion===Vt)return $r(R,Bt),$t}else Bt.uniforms=Wt.getUniforms(R),R.onBeforeCompile(Bt,C),$t=Wt.acquireProgram(Bt,Yt),jt.set(Yt,$t),at.uniforms=Bt.uniforms;const Zt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Ut.uniform),$r(R,Bt),at.needsLights=ba(R),at.lightsStateVersion=Vt,at.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=$t,at.uniformsList=null,$t}function gl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=au.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function $r(R,q){const ct=M.get(R);ct.outputColorSpace=q.outputColorSpace,ct.batching=q.batching,ct.batchingColor=q.batchingColor,ct.instancing=q.instancing,ct.instancingColor=q.instancingColor,ct.instancingMorph=q.instancingMorph,ct.skinning=q.skinning,ct.morphTargets=q.morphTargets,ct.morphNormals=q.morphNormals,ct.morphColors=q.morphColors,ct.morphTargetsCount=q.morphTargetsCount,ct.numClippingPlanes=q.numClippingPlanes,ct.numIntersection=q.numClipIntersection,ct.vertexAlphas=q.vertexAlphas,ct.vertexTangents=q.vertexTangents,ct.toneMapping=q.toneMapping}function ss(R,q,ct,at,K){q.isScene!==!0&&(q=_e),Y.resetTextureUnits();const Pt=q.fog,Vt=at.isMeshStandardMaterial?q.environment:null,Bt=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xr,Yt=(at.isMeshStandardMaterial?St:pt).get(at.envMap||Vt),jt=at.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,$t=!!ct.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Zt=!!ct.morphAttributes.position,ne=!!ct.morphAttributes.normal,Ue=!!ct.morphAttributes.color;let Je=ki;at.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Je=C.toneMapping);const qe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Oe=qe!==void 0?qe.length:0,Qt=M.get(at),Le=F.state.lights;if(Ht===!0&&(me===!0||R!==dt)){const Tn=R===dt&&at.id===lt;Ut.setState(at,R,Tn)}let le=!1;at.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Le.state.version||Qt.outputColorSpace!==Bt||K.isBatchedMesh&&Qt.batching===!1||!K.isBatchedMesh&&Qt.batching===!0||K.isBatchedMesh&&Qt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qt.instancing===!1||!K.isInstancedMesh&&Qt.instancing===!0||K.isSkinnedMesh&&Qt.skinning===!1||!K.isSkinnedMesh&&Qt.skinning===!0||K.isInstancedMesh&&Qt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qt.instancingMorph===!1&&K.morphTexture!==null||Qt.envMap!==Yt||at.fog===!0&&Qt.fog!==Pt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ut.numPlanes||Qt.numIntersection!==Ut.numIntersection)||Qt.vertexAlphas!==jt||Qt.vertexTangents!==$t||Qt.morphTargets!==Zt||Qt.morphNormals!==ne||Qt.morphColors!==Ue||Qt.toneMapping!==Je||Qt.morphTargetsCount!==Oe)&&(le=!0):(le=!0,Qt.__version=at.version);let Mn=Qt.currentProgram;le===!0&&(Mn=zs(at,q,K));let qi=!1,En=!1,li=!1;const Ie=Mn.getUniforms(),bn=Qt.uniforms;if(Ct.useProgram(Mn.program)&&(qi=!0,En=!0,li=!0),at.id!==lt&&(lt=at.id,En=!0),qi||dt!==R){Ct.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ie.setValue(H,"projectionMatrix",R.projectionMatrix),Ie.setValue(H,"viewMatrix",R.matrixWorldInverse);const An=Ie.map.cameraPosition;An!==void 0&&An.setValue(H,ge.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&Ie.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),dt!==R&&(dt=R,En=!0,li=!0)}if(Qt.needsLights&&(Le.state.directionalShadowMap.length>0&&Ie.setValue(H,"directionalShadowMap",Le.state.directionalShadowMap,Y),Le.state.spotShadowMap.length>0&&Ie.setValue(H,"spotShadowMap",Le.state.spotShadowMap,Y),Le.state.pointShadowMap.length>0&&Ie.setValue(H,"pointShadowMap",Le.state.pointShadowMap,Y)),K.isSkinnedMesh){Ie.setOptional(H,K,"bindMatrix"),Ie.setOptional(H,K,"bindMatrixInverse");const Tn=K.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ie.setValue(H,"boneTexture",Tn.boneTexture,Y))}K.isBatchedMesh&&(Ie.setOptional(H,K,"batchingTexture"),Ie.setValue(H,"batchingTexture",K._matricesTexture,Y),Ie.setOptional(H,K,"batchingIdTexture"),Ie.setValue(H,"batchingIdTexture",K._indirectTexture,Y),Ie.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Ie.setValue(H,"batchingColorTexture",K._colorsTexture,Y));const mn=ct.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&oe.update(K,ct,Mn),(En||Qt.receiveShadow!==K.receiveShadow)&&(Qt.receiveShadow=K.receiveShadow,Ie.setValue(H,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bn.envMap.value=Yt,bn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=DC()),En&&(Ie.setValue(H,"toneMappingExposure",C.toneMappingExposure),Qt.needsLights&&to(bn,li),Pt&&at.fog===!0&&ee.refreshFogUniforms(bn,Pt),ee.refreshMaterialUniforms(bn,at,_t,tt,F.state.transmissionRenderTarget[R.id]),au.upload(H,gl(Qt),bn,Y)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(au.upload(H,gl(Qt),bn,Y),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(H,"center",K.center),Ie.setValue(H,"modelViewMatrix",K.modelViewMatrix),Ie.setValue(H,"normalMatrix",K.normalMatrix),Ie.setValue(H,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Tn=at.uniformsGroups;for(let An=0,Hs=Tn.length;An<Hs;An++){const Ti=Tn[An];Mt.update(Ti,Mn),Mt.bind(Ti,Mn)}}return Mn}function to(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ba(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,q,ct){const at=M.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=q,M.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ct,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ct=M.get(R);ct.__webglFramebuffer=q,ct.__useDefaultFramebuffer=q===void 0};const Ta=H.createFramebuffer();this.setRenderTarget=function(R,q=0,ct=0){rt=R,X=q,nt=ct;let at=null,K=!1,Pt=!1;if(R){const Bt=M.get(R);if(Bt.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(H.FRAMEBUFFER,Bt.__webglFramebuffer),O.copy(R.viewport),G.copy(R.scissor),V=R.scissorTest,Ct.viewport(O),Ct.scissor(G),Ct.setScissorTest(V),lt=-1;return}else if(Bt.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Bt.__hasExternalTextures)Y.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Bt.__boundDepthTexture!==$t){if($t!==null&&M.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Pt=!0);const jt=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?at=jt[q][ct]:at=jt[q],K=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?at=M.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[ct]:at=jt,O.copy(R.viewport),G.copy(R.scissor),V=R.scissorTest}else O.copy(J).multiplyScalar(_t).floor(),G.copy(ft).multiplyScalar(_t).floor(),V=wt;if(ct!==0&&(at=Ta),Ct.bindFramebuffer(H.FRAMEBUFFER,at)&&Ct.drawBuffers(R,at),Ct.viewport(O),Ct.scissor(G),Ct.setScissorTest(V),K){const Bt=M.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Bt.__webglTexture,ct)}else if(Pt){const Bt=q;for(let Yt=0;Yt<R.textures.length;Yt++){const jt=M.get(R.textures[Yt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Yt,jt.__webglTexture,ct,Bt)}}else if(R!==null&&ct!==0){const Bt=M.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,ct)}lt=-1},this.readRenderTargetPixels=function(R,q,ct,at,K,Pt,Vt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Yt=Yt[Vt]),Yt){Ct.bindFramebuffer(H.FRAMEBUFFER,Yt);try{const jt=R.textures[Bt],$t=jt.format,Zt=jt.type;if(!Xt.textureFormatReadable($t)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Zt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-at&&ct>=0&&ct<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt),H.readPixels(q,ct,at,K,Rt.convert($t),Rt.convert(Zt),Pt))}finally{const jt=rt!==null?M.get(rt).__webglFramebuffer:null;Ct.bindFramebuffer(H.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,q,ct,at,K,Pt,Vt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Yt=Yt[Vt]),Yt)if(q>=0&&q<=R.width-at&&ct>=0&&ct<=R.height-K){Ct.bindFramebuffer(H.FRAMEBUFFER,Yt);const jt=R.textures[Bt],$t=jt.format,Zt=jt.type;if(!Xt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.bufferData(H.PIXEL_PACK_BUFFER,Pt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt),H.readPixels(q,ct,at,K,Rt.convert($t),Rt.convert(Zt),0);const Ue=rt!==null?M.get(rt).__webglFramebuffer:null;Ct.bindFramebuffer(H.FRAMEBUFFER,Ue);const Je=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await FE(H,Je,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Pt),H.deleteBuffer(ne),H.deleteSync(Je),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ct=0){const at=Math.pow(2,-ct),K=Math.floor(R.image.width*at),Pt=Math.floor(R.image.height*at),Vt=q!==null?q.x:0,Bt=q!==null?q.y:0;Y.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ct,0,0,Vt,Bt,K,Pt),Ct.unbindTexture()};const rs=H.createFramebuffer(),Aa=H.createFramebuffer();this.copyTextureToTexture=function(R,q,ct=null,at=null,K=0,Pt=null){Pt===null&&(K!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=K,K=0):Pt=0);let Vt,Bt,Yt,jt,$t,Zt,ne,Ue,Je;const qe=R.isCompressedTexture?R.mipmaps[Pt]:R.image;if(ct!==null)Vt=ct.max.x-ct.min.x,Bt=ct.max.y-ct.min.y,Yt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,$t=ct.min.y,Zt=ct.isBox3?ct.min.z:0;else{const mn=Math.pow(2,-K);Vt=Math.floor(qe.width*mn),Bt=Math.floor(qe.height*mn),R.isDataArrayTexture?Yt=qe.depth:R.isData3DTexture?Yt=Math.floor(qe.depth*mn):Yt=1,jt=0,$t=0,Zt=0}at!==null?(ne=at.x,Ue=at.y,Je=at.z):(ne=0,Ue=0,Je=0);const Oe=Rt.convert(q.format),Qt=Rt.convert(q.type);let Le;q.isData3DTexture?(Y.setTexture3D(q,0),Le=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),Le=H.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),Le=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const le=H.getParameter(H.UNPACK_ROW_LENGTH),Mn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),qi=H.getParameter(H.UNPACK_SKIP_PIXELS),En=H.getParameter(H.UNPACK_SKIP_ROWS),li=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,qe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,qe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,$t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt);const Ie=R.isDataArrayTexture||R.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const mn=M.get(R),Tn=M.get(q),An=M.get(mn.__renderTarget),Hs=M.get(Tn.__renderTarget);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Ti=0;Ti<Yt;Ti++)Ie&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,M.get(R).__webglTexture,K,Zt+Ti),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,M.get(q).__webglTexture,Pt,Je+Ti)),H.blitFramebuffer(jt,$t,Vt,Bt,ne,Ue,Vt,Bt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||M.has(R)){const mn=M.get(R),Tn=M.get(q);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,rs),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,Aa);for(let An=0;An<Yt;An++)Ie?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,K,Zt+An):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,K),bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Tn.__webglTexture,Pt,Je+An):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Tn.__webglTexture,Pt),K!==0?H.blitFramebuffer(jt,$t,Vt,Bt,ne,Ue,Vt,Bt,H.COLOR_BUFFER_BIT,H.NEAREST):bn?H.copyTexSubImage3D(Le,Pt,ne,Ue,Je+An,jt,$t,Vt,Bt):H.copyTexSubImage2D(Le,Pt,ne,Ue,jt,$t,Vt,Bt);Ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Le,Pt,ne,Ue,Je,Vt,Bt,Yt,Oe,Qt,qe.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Le,Pt,ne,Ue,Je,Vt,Bt,Yt,Oe,qe.data):H.texSubImage3D(Le,Pt,ne,Ue,Je,Vt,Bt,Yt,Oe,Qt,qe):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Pt,ne,Ue,Vt,Bt,Oe,Qt,qe.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Pt,ne,Ue,qe.width,qe.height,Oe,qe.data):H.texSubImage2D(H.TEXTURE_2D,Pt,ne,Ue,Vt,Bt,Oe,Qt,qe);H.pixelStorei(H.UNPACK_ROW_LENGTH,le),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,qi),H.pixelStorei(H.UNPACK_SKIP_ROWS,En),H.pixelStorei(H.UNPACK_SKIP_IMAGES,li),Pt===0&&q.generateMipmaps&&H.generateMipmap(Le),Ct.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){X=0,nt=0,rt=null,Ct.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const cd={main:"#e7e5e1",about:"#080808",portfolio:"#101012"},ud={main:13,about:11,portfolio:15};function zn(r,t,i){return r+(t-r)*i}function LC({scene:r,anchors:t,pointerRef:i,dragRef:s,zoomRef:l,hoverRef:c,labelEls:h}){const d=te.useRef(null),m=te.useRef(r),p=te.useRef(t);return te.useEffect(()=>{m.current=r},[r]),te.useEffect(()=>{p.current=t},[t]),te.useEffect(()=>{const g=d.current;if(!g)return;const _=new UC({antialias:!0,alpha:!1});_.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),_.setSize(g.clientWidth,g.clientHeight),g.appendChild(_.domElement);const S=new bb,E=new Te(cd.main);S.background=E,S.fog=new cu(cd.about,.02);const T=new Si(52,g.clientWidth/g.clientHeight,.1,200);T.position.set(0,0,ud.main);const b=new Br;S.add(b);const y=1600,x=new Float32Array(y*3);for(let Xt=0;Xt<y;Xt++){const Ct=12+Math.random()*46,w=Math.random()*Math.PI*2,M=Math.acos(2*Math.random()-1);x[Xt*3]=Ct*Math.sin(M)*Math.cos(w),x[Xt*3+1]=Ct*Math.sin(M)*Math.sin(w),x[Xt*3+2]=Ct*Math.cos(M)}const P=new In;P.setAttribute("position",new Mi(x,3));const L=new rp({color:16777215,size:.05,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1}),N=new nv(P,L);b.add(N);const F=200,I=[];for(let Xt=0;Xt<F;Xt++)I.push(new it((Math.random()-.5)*26,(Math.random()-.5)*16,(Math.random()-.5)*22));const B=[];for(let Xt=0;Xt<F;Xt++){let Ct=0;for(let w=Xt+1;w<F&&Ct<3;w++)I[Xt].distanceTo(I[w])<4.6&&(B.push(I[Xt].x,I[Xt].y,I[Xt].z,I[w].x,I[w].y,I[w].z),Ct++)}const Q=new In;Q.setAttribute("position",new Qn(B,3));const C=new iu({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),D=new nd(Q,C);b.add(D);const X=new In;X.setAttribute("position",new Qn(I.flatMap(Xt=>[Xt.x,Xt.y,Xt.z]),3));const nt=new rp({color:16777215,size:.08,transparent:!0,opacity:0,depthWrite:!1}),rt=new nv(X,nt);b.add(rt);const lt=new Br;b.add(lt);const dt=new iu({color:1710618,transparent:!0,opacity:.35});let O=null;const G=()=>{for(let w=lt.children.length-1;w>=0;w--){const M=lt.children[w];lt.remove(M),M instanceof Sx&&M.geometry.dispose()}const Xt=[];p.current.forEach(w=>{Xt.push(0,0,0,w.position[0],w.position[1],w.position[2])});const Ct=new In;Ct.setAttribute("position",new Qn(Xt,3)),O=new nd(Ct,dt),lt.add(O)};G();let V=p.current;const ht=new Pb;ht.params.Line={threshold:.4};const gt=new He;let U=null,tt=!1;const _t=window.matchMedia("(hover: hover) and (pointer: fine)").matches,Tt=Xt=>{Xt.pointerType==="mouse"&&(tt=!0)};window.addEventListener("pointermove",Tt,{passive:!0});const zt=4,J=new Float32Array(zt*2*3),ft=new In;ft.setAttribute("position",new Mi(J,3));const wt=new iu({color:new Te("#ffffff"),transparent:!0,opacity:0,depthWrite:!1}),kt=new nd(ft,wt);kt.frustumCulled=!1,kt.renderOrder=8,b.add(kt);let Ht=null;const me=Xt=>{const Ct=p.current,w=Xt?Ct.find(ot=>ot.id===Xt):void 0;if(!w)return;const[M,Y,pt]=w.position,St=Ct.filter(ot=>ot.id!==Xt).map(ot=>{const Gt=ot.position[0]-M,At=ot.position[1]-Y,Wt=ot.position[2]-pt;return{a:ot,d:Gt*Gt+At*At+Wt*Wt}}).sort((ot,Gt)=>ot.d-Gt.d).slice(0,zt-1).map(ot=>ot.a);J.fill(0),J[3]=M,J[4]=Y,J[5]=pt,St.forEach((ot,Gt)=>{const At=(Gt+1)*6;J[At]=M,J[At+1]=Y,J[At+2]=pt,J[At+3]=ot.position[0],J[At+4]=ot.position[1],J[At+5]=ot.position[2]}),ft.attributes.position.needsUpdate=!0,ft.setDrawRange(0,(St.length+1)*2)},Qe=new Ob;let ge=0;const ce={x:0,y:0},_e=new it,se=new Te;let Ye=ud.main,H=1;const Xe=()=>{ge=requestAnimationFrame(Xe);const Xt=Qe.getElapsedTime(),Ct=m.current;p.current!==V&&(G(),V=p.current),se.set(cd[Ct]),E.lerp(se,.04),S.fog instanceof cu&&(S.fog.color.copy(E),S.fog.density=zn(S.fog.density,Ct==="main"?.008:.026,.04)),Ye=zn(Ye,ud[Ct],.04);const w=Ct==="main"?0:.9;L.opacity=zn(L.opacity,w,.045),nt.opacity=zn(nt.opacity,w*.7,.045),C.opacity=zn(C.opacity,Ct==="about"?.12:Ct==="portfolio"?.04:0,.045),dt.opacity=zn(dt.opacity,Ct==="main"?.35:0,.06);const M=i.current;if(U=null,Ct==="main"&&O&&tt&&_t&&!c.current){gt.set(M.x,-M.y),ht.setFromCamera(gt,T);const Ut=ht.intersectObject(O,!1);if(Ut.length&&Ut[0].index!=null){const Nt=Math.floor(Ut[0].index/2);U=p.current[Nt]?.id??null}}const Y=c.current??U;Y!==Ht&&(Ht=Y,Y&&me(Y)),wt.color.set(Ct==="main"?"#141414":"#ffffff"),wt.opacity=zn(wt.opacity,Y?.9:0,.16),kt.visible=wt.opacity>.02,lt.visible=dt.opacity>.02;const pt=s.current,St=Ct==="about"?.05:.25,ot=Ct==="about"?.04:.18;ce.x=zn(ce.x,pt.x,.09),ce.y=zn(ce.y,pt.y,.09);const Gt=M.x*St+ce.x,At=-M.y*ot+ce.y;b.rotation.y=zn(b.rotation.y,Gt,.08),b.rotation.x=zn(b.rotation.x,At,.08),H=zn(H,l.current,.1);const Wt=Lh.clamp(1.05/T.aspect,1,1.35);T.position.z=Ye*H*Wt,T.position.x=zn(T.position.x,M.x*.6,.05);const ee=Lh.clamp(.4+T.aspect*.42,.56,1);b.scale.setScalar(zn(b.scale.x,ee,.1)),T.position.y=zn(T.position.y,-M.y*.4,.05),T.lookAt(0,0,0),N.rotation.y=Xt*.01,D.rotation.y=Xt*.014,rt.rotation.y=Xt*.014;const Et=_.domElement.clientWidth,bt=_.domElement.clientHeight;p.current.forEach(Ut=>{const Nt=h.current.get(Ut.id);if(!Nt)return;_e.set(Ut.position[0],Ut.position[1],Ut.position[2]),_e.applyMatrix4(b.matrixWorld);const Lt=T.position.distanceTo(_e);_e.project(T);const oe=_e.z>1,W=(_e.x*.5+.5)*Et,Ot=(-_e.y*.5+.5)*bt,Rt=Ut.position[0]<-1.4?"0%":Ut.position[0]>1.4?"-100%":"-50%";Nt.style.transform=`translate(${Rt}, -50%) translate(${Math.round(W)}px, ${Math.round(Ot)}px)`;const It=W<-40||W>Et+40||Ot<-40||Ot>bt+40,Mt=Lh.clamp(1-(Lt-6)/22,.12,1);Nt.style.opacity=oe||It?"0":String(Mt),Nt.style.pointerEvents=oe||It||Mt<.3?"none":"auto",Nt.classList.toggle("is-lit",!oe&&!It&&Ut.id===Y)}),_.render(S,T)};Xe();const ve=()=>{const Xt=g.clientWidth,Ct=g.clientHeight;_.setSize(Xt,Ct),T.aspect=Xt/Ct,T.updateProjectionMatrix()};return window.addEventListener("resize",ve),()=>{cancelAnimationFrame(ge),window.removeEventListener("resize",ve),window.removeEventListener("pointermove",Tt),_.dispose(),P.dispose(),L.dispose(),Q.dispose(),C.dispose(),X.dispose(),nt.dispose(),ft.dispose(),wt.dispose(),dt.dispose(),_.domElement.parentNode===g&&g.removeChild(_.domElement)}},[i,s,l,c,h]),Z.jsx("div",{className:"constellation-canvas",ref:d,"aria-hidden":"true"})}function NC(){const r=te.useRef(null);return te.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const i=r.current;if(!i)return;document.body.classList.add("reticle-active");let s=!1,l=null;const c=p=>{if(i.style.transform=`translate3d(${p.clientX}px, ${p.clientY}px, 0) translate(-50%, -50%)`,s||(s=!0,i.classList.add("is-visible")),p.target!==l){l=p.target;const _=!!p.target?.closest('a, button, [role="button"], input, textarea, [data-hover]');i.classList.toggle("is-active",_)}},h=()=>{s=!1,i.classList.remove("is-visible")},d=()=>{i.classList.remove("did-click"),i.classList.add("is-pressed")},m=()=>{i.classList.remove("is-pressed"),i.classList.add("did-click"),window.setTimeout(()=>i.classList.remove("did-click"),420)};return window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("mousedown",d),window.addEventListener("mouseup",m),document.addEventListener("mouseleave",h),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mousedown",d),window.removeEventListener("mouseup",m),document.removeEventListener("mouseleave",h),document.body.classList.remove("reticle-active")}},[]),Z.jsxs("div",{className:"reticle",ref:r,"aria-hidden":"true",children:[Z.jsxs("span",{className:"reticle-box",children:[Z.jsx("span",{className:"reticle-corner tl"}),Z.jsx("span",{className:"reticle-corner tr"}),Z.jsx("span",{className:"reticle-corner bl"}),Z.jsx("span",{className:"reticle-corner br"})]}),Z.jsx("span",{className:"reticle-ring"}),Z.jsx("span",{className:"reticle-dot"})]})}const OC="modulepreload",PC=function(r){return"/JasonBay.dev/"+r},Dv={},vu=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=m(i.map(p=>{if(p=PC(p),p in Dv)return;Dv[p]=!0;const g=p.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":OC,g||(S.as="script"),S.crossOrigin="",S.href=p,d&&S.setAttribute("nonce",d),document.head.appendChild(S),g)return new Promise((E,T)=>{S.addEventListener("load",E),S.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})},Uv=["FRONTEND","BACKEND","DESIGN","CONTENT CREATION","SOCIAL MEDIA","VIDEO EDITING","UI / UX","BRANDING"],IC=["PHOTOGRAPHY","MOTION","LAYOUT","TYPOGRAPHY","PROTOTYPING","WEB"];function BC(r){return{name:"JASON BAY",tagline:"Frontend Developer"}}function FC(r){const t=IC,i=Math.PI*2/Uv.length,s=Uv.map((h,d)=>({label:h,strong:!0,angle:d*i-Math.PI/2+.12,radius:4.6+d%2*.35,depth:Math.sin(d*1.3)*.9})),l=Math.PI*2/t.length,c=t.map((h,d)=>({label:h,strong:!1,angle:d*l-Math.PI/2+l/2,radius:6.6+d%2*.5,depth:(d%2===0?-1:1)*(1.9+d%3*.5)}));return[...s,...c]}function zC(r){const t=r==="de",i=[{id:"about",label:t?"ÜBER MICH":"ABOUT",scale:1.15},{id:"skills-experience",label:t?"PROFIL":"PROFILE",scale:1.2},{id:"work",label:"PORTFOLIO",scale:1.35},{id:"social",label:"SOCIAL MEDIA",scale:1},{id:"contact",label:t?"KONTAKT":"CONTACT",scale:1.05}],s=5.4,l=Math.PI*(3-Math.sqrt(5)),c=i.length;return i.map((h,d)=>{const m=1-(d+.5)/c*2,p=Math.sqrt(Math.max(0,1-m*m)),g=l*d;return{...h,position:[Math.cos(g)*p*s,m*s*.72,Math.sin(g)*p*s]}})}function Lv(){return[{label:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu"},{label:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu"},{label:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/"},{label:"YouTube",handle:"@jsnuwu",href:"https://www.youtube.com/@jsnuwu"},{label:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/"}]}const Nv="jasonbay05@gmail.com",HC="/JasonBay.dev/assets/BayJason-CgZ6RBiE.jpg",GC="/JasonBay.dev/assets/TikTok-CpvqXkYO.png",VC="/JasonBay.dev/assets/Youtube-DcLdsh9q.png",kC="/JasonBay.dev/assets/Instagram-n8caggNr.png",XC="/JasonBay.dev/assets/adessologo2-BkRcKOgx.png",WC="data:image/webp;base64,UklGRooFAABXRUJQVlA4TH0FAAAvKAFKEB8gECAs+A+RZ0MgkESy88ZCAjIlSaYRCBCKRRsRgO6ZLTzJ1h63mbZtp4EWHUFlS0Ng5n3f/avQXWoQOkG6aLCZhSJuDgGTQP+ulIXsiFtDwCQ4hKucwV0XlojzPE7Y7Yj+TwABZmbmlmqY//PXJ3/7jzd3Ot7y5eMvbeXf8+J3X1h6CFyYjt5MDly+svIYWPKzkZ5Fk7eQb1k4rQxMLL7Bewxy/Au4O1ac0X5k1U9gvU7yUN+x8gEpBy12QN+x+sHD5KDHDuZrBjyg5IDAHmTPkO9AeozkIf7AoBuIe5R3CDGg8DXAxLCvAG5xklOLDNyqDUjv1Hqk5JVODN0o7bE6pYDFTiUyeKuyR+tUBrSkERl+pTDhbRQGvKTQ47EXi2ywERstvBK7s5DEggX2Qic22QiNNl4J3dlIQr0N9iKRjTYik5VXIoOVWaS3krxADFa4FTix2UZgb6cTGOzMAsEOu6LMFZksbYpGS13RYCkV9RWJbNrVpC0YbXUF9zUZbKWC3hb7RZGNu5q0i0ZrXa0Ga/Oi3lpaFKyxW5DZ/NWCrb1mwWTv1YJ7e92Cwd68oLeXasL+QuQKupq0F6YaNDV5deG+BusLQ012NUgX+qKjcpBhfyaHkjUp74Tcmchgg9BVTdozU9FsoxFaa+2EujNj0aw1qAx1WAutbcxndkWzjXSmrwP7J6ES7glXJNbiqiYtEW1r0RDRVIuNiZ1UR0Qj3KAxwO2k1jLrmsxGZiLala1rMmv1UuyJ+rK1FUcUXiaRXyJXNWnrssULYg1Nz1lm8a4uI1x8Ju5rMrxI1s/bVm5+3iasuSZJaZRLIvzv/xR6U8VtwfBiuEJhh+Ceoyu8XU36F4MvCKYSVWQuiPxSWNekq9f0QhltbWrSFgwvBleweyYcXK+QvF7yBUGD9GZantnUuiDa6nBmuK2tpmCy1RaMtlzB8Ex0eokKd6ZmqHutriTojFjZVlsQWWfScjXxBZPKK7VEQA1tlbqSQaWl+Hy0Jbua9CpXlJV8QWZVRzmoJCqMWqTTlWzVepVNyaS2U3El9yqJwAa1QWNNpTuVWasr6i21JZlVOyK613AlUW9SmKl0stRhvSKirUJbNOg0RBQVHFarM1Nxr3NFRFnu52VBxxER9WKuKLKd5Iu2Sv7JTqqj4r3OTE8HqaZssJN8Wa/TndkLvSMTk1BbFln3lUZyZVul5kyUeUXle6VW41pgULo6Q0FiJsFeyZ3rJX4ukAPGIJBIMLLuTHKfJCaQ+7LkJQal7sJY9o4kdyDbMieRg1JzIRYdSDKycnshhxInMmq5C1TyE4newwzLkpcJSomEPpFoZuV5wX7RTLKTVrdgXJJ+ITTixCUbEt5pNSKHlVSv1S6g/pIn4cjaTuIzSU9ayS8Zzm1IfNCaaen+zNHJ9VrdounJO5I/sfarRZGZj9cKo1qzKAf+DWneqblF9HD0KgFLeWTtmYD3ah1SUNsAZVZvgPZ6DminloAiq8+EO+l1QHd6DU4Oei3OntWTx9kBEOyJ9TucEWADkwOAg4msnzzMHUBHqDkA/BzmawZsYXoEh7JnwJlQe4QO5ZERW5Q7CAfyyIgzgfYQHciPDLkC6SGSw/iOITuCzAFjAxFvGdNBTIyZPMJjAHlFiHcMeg2QjwyaCPDEqO8AfgwwrV7uGTU5tR9vGbYj9TvGvdYbcBLpf43zCSAHGAdAdygHjxBRWkLMtxjJQdCEsSHMGBDSCoRGhI5QTwHgGob2eh3hnoJWugaiUesVIcdbnbSCopPOhrDztxqHFRjloLAi+Ae5nzweDVIzWfzDtzKHX5igHERWZPTh27LDkczm25L0BRn+8Xi75HD8TLb/GS6l35L5h+NlZw8aAA==",YC="/JasonBay.dev/assets/lebenshilfe.de-removebg-preview-OMT4mOLJ.png",qC=te.lazy(()=>vu(()=>import("./GallerySection-ycpaozKO.js"),[])),jC=te.lazy(()=>vu(()=>import("./TikTokSection-DkRZx06w.js"),__vite__mapDeps([0,1]))),ZC=te.lazy(()=>vu(()=>import("./OldPortfolio-WE3GYItv.js"),__vite__mapDeps([2,1,3])));function fd(){return Z.jsx("div",{className:"sp-loading","aria-hidden":"true"})}const Ov={tiktok:GC,youtube:VC,instagram:kC};function Pv(r){return r.trim().toLowerCase()}const KC=[["telution",WC],["adesso",XC],["lebenshilfe",YC]];function QC(r){const t=r.toLowerCase();for(const[i,s]of KC)if(t.includes(i))return{logo:s,slug:i};return null}const JC=[[/html/i,"devicon-html5-plain colored"],[/css/i,"devicon-css3-plain colored"],[/typescript/i,"devicon-typescript-plain colored"],[/javascript/i,"devicon-javascript-plain colored"],[/angular/i,"devicon-angularjs-plain colored"],[/tailwind/i,"devicon-tailwindcss-plain colored"],[/react/i,"devicon-react-original colored"],[/vue/i,"devicon-vuejs-plain colored"],[/figma/i,"devicon-figma-plain colored"],[/wordpress/i,"devicon-wordpress-plain colored"],[/spring/i,"devicon-spring-plain colored"],[/php/i,"devicon-php-plain colored"],[/java\b/i,"devicon-java-plain colored"],[/postgres/i,"devicon-postgresql-plain colored"],[/mysql/i,"devicon-mysql-plain colored"],[/mongo/i,"devicon-mongodb-plain colored"],[/docker/i,"devicon-docker-plain colored"],[/\bgit\b/i,"devicon-git-plain colored"],[/jira/i,"devicon-jira-plain colored"],[/confluence/i,"devicon-confluence-plain colored"]];function $C(r){for(const[t,i]of JC)if(t.test(r))return i;return null}const tw={muttersprache:100,native:100,c2:94,c1:82,b2:66,b1:50,a2:34,a1:20};function ew(r){return tw[r.trim().toLowerCase()]??60}function nw(r){const t=r.toLowerCase();return t.startsWith("deutsch")||t.startsWith("german")?"🇩🇪":t.startsWith("englisch")||t.startsWith("english")?"EN":t.startsWith("franz")||t.startsWith("french")?"🇫🇷":t.startsWith("spanisch")||t.startsWith("spanish")?"🇪🇸":"🌐"}const Jo={about:{de:"Über mich",en:"About"},work:{de:"Portfolio",en:"Portfolio"},"skills-experience":{de:"Profil",en:"Profile"},social:{de:"Social Media",en:"Social Media"},contact:{de:"Kontakt",en:"Contact"}},hd={about:{de:"Wer ich bin und wie ich arbeite.",en:"Who I am and how I work."},work:{de:"Meine erste Portfolio-Seite.",en:"My first portfolio site."},"skills-experience":{de:"Was ich kann, und wie ich dahin gekommen bin.",en:"What I can do, and how I got here."},social:{de:"Instagram, TikTok und YouTube · Konzeption, Schnitt und Gestaltung seit 2020.",en:"Instagram, TikTok and YouTube · concept, editing and design since 2020."},contact:{de:"Schreib mir, ich melde mich zurück.",en:"Drop me a line, I'll get back to you."}},Or={skills:{de:"Skills",en:"Skills"},experience:{de:"Werdegang",en:"Experience"},gallery:{de:"Galerie",en:"Gallery"}},Pr={skills:{de:"Die Tools, mit denen ich täglich arbeite.",en:"The tools I use day to day."},experience:{de:"Von der Ausbildung bis heute.",en:"From my apprenticeship to today."},gallery:{de:"Fotografie abseits vom Code · Wandern, Motorrad, Tiere.",en:"Photography beyond the code · hiking, motorcycles, pets."}};function iw({id:r,onBack:t,onOpen:i}){const{t:s,lang:l}=Yv(),c=l==="de",h=te.useRef(null),d=te.useRef(0),m=te.useRef(!1),[p,g]=te.useState(0);te.useEffect(()=>{h.current?.scrollTo({top:0})},[r]),te.useEffect(()=>{const b=h.current;if(!b)return;const y=()=>{m.current||(m.current=!0,b.classList.add("is-leaving"),window.setTimeout(t,420))},x=I=>{if(!m.current){if(b.scrollTop>0){d.current=0,p!==0&&g(0);return}if(I.deltaY<0){d.current+=-I.deltaY;const B=Math.min(1,d.current/320);g(B),d.current>320&&y()}else d.current=0,p!==0&&g(0)}};let P=0;const L=I=>{P=I.touches[0].clientY},N=I=>{if(m.current||b.scrollTop>0)return;const B=I.touches[0].clientY-P;B>0&&(d.current=B,g(Math.min(1,B/200)),B>200&&y())},F=()=>{d.current=0,g(0)};return b.addEventListener("wheel",x,{passive:!0}),b.addEventListener("touchstart",L,{passive:!0}),b.addEventListener("touchmove",N,{passive:!0}),b.addEventListener("touchend",F,{passive:!0}),()=>{b.removeEventListener("wheel",x),b.removeEventListener("touchstart",L),b.removeEventListener("touchmove",N),b.removeEventListener("touchend",F)}},[t,p]);const _=Jo[r]?c?Jo[r].de:Jo[r].en:r,S=hd[r]?c?hd[r].de:hd[r].en:"",E=Object.keys(Jo).length,T=String(Object.keys(Jo).indexOf(r)+1).padStart(2,"0")+" / "+String(E).padStart(2,"0");return Z.jsxs("div",{className:`section-page ${r==="work"?"section-page-dark":""}`,ref:h,style:{transform:p?`translateY(${p*40}px)`:void 0},children:[Z.jsx("div",{className:"sp-pull",style:{opacity:p,transform:`scaleX(${.2+p*.8})`},"aria-hidden":"true",children:Z.jsx("span",{children:c?"LOSLASSEN FÜR RAUM":"RELEASE FOR SPACE"})}),Z.jsxs("div",{className:"sp-topbar",children:[Z.jsx("button",{className:"sp-back",onClick:t,children:Z.jsx("span",{className:"glow-text",children:c?"↑ ZURÜCK ZUM RAUM":"↑ BACK TO SPACE"})}),Z.jsx("span",{className:"sp-num",children:T})]}),r!=="work"&&Z.jsxs("header",{className:"sp-header",children:[Z.jsx("h1",{children:_}),S&&Z.jsx("p",{className:"sp-intro",children:S}),r==="skills-experience"&&Z.jsx("button",{className:"sp-cv-download",onClick:()=>vu(async()=>{const{downloadCv:b}=await import("./generateCv-RlsiO-mJ.js").then(y=>y.g);return{downloadCv:b}},[]).then(({downloadCv:b})=>b(l,s)),children:Z.jsx("span",{className:"glow-text",children:c?"↓ Lebenslauf (PDF)":"↓ Résumé (PDF)"})})]}),Z.jsxs("div",{className:`sp-body ${r==="work"?"sp-body-wide":""}`,children:[r==="social"&&Z.jsxs("div",{className:"sp-social",children:[Z.jsx(te.Suspense,{fallback:Z.jsx(fd,{}),children:Z.jsx(jC,{})}),Z.jsx("ul",{className:"sp-social-links",children:Lv().filter(b=>["Instagram","TikTok","YouTube"].includes(b.label)).map(b=>Z.jsx("li",{children:Z.jsxs("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",children:[Z.jsx("img",{className:"sp-social-logo",src:Ov[Pv(b.label)],alt:"","aria-hidden":"true",loading:"lazy"}),Z.jsx("span",{className:"sp-social-name",children:b.label}),Z.jsxs("span",{className:"sp-social-handle",children:[b.handle," ↗"]})]})},b.label))})]}),r==="work"&&Z.jsx(te.Suspense,{fallback:Z.jsx(fd,{}),children:Z.jsx(ZC,{})}),r==="skills-experience"&&Z.jsxs(Z.Fragment,{children:[Z.jsxs("section",{className:"sp-subsection",children:[Z.jsxs("div",{className:"sp-sub-head",children:[Z.jsx("h2",{children:c?Or.experience.de:Or.experience.en}),Z.jsx("p",{className:"sp-sub-intro",children:c?Pr.experience.de:Pr.experience.en})]}),Z.jsx("ol",{className:"sp-timeline",children:s.experience.entries.map(b=>{const y=QC(b.org);return Z.jsxs("li",{children:[Z.jsx("span",{className:`spt-badge${y?" has-logo":""}`,"data-org":y?.slug,"aria-hidden":"true",children:y?Z.jsx("img",{src:y.logo,alt:"",loading:"lazy"}):b.org.replace(/[^A-Za-zÄÖÜ]/g,"").slice(0,2).toUpperCase()}),Z.jsxs("div",{className:"spt-body",children:[Z.jsx("span",{className:"spt-period",children:b.period}),Z.jsx("span",{className:"spt-org",children:b.org}),Z.jsx("span",{className:"spt-role",children:b.role}),Z.jsx("ul",{children:b.bullets.map(x=>Z.jsx("li",{children:x},x))})]})]},b.org)})})]}),Z.jsxs("section",{className:"sp-subsection",children:[Z.jsxs("div",{className:"sp-sub-head",children:[Z.jsx("h2",{children:c?Or.skills.de:Or.skills.en}),Z.jsx("p",{className:"sp-sub-intro",children:c?Pr.skills.de:Pr.skills.en})]}),Z.jsxs("div",{className:"sp-skills",children:[s.skills.groups.map((b,y)=>Z.jsxs("div",{className:"skrow",children:[Z.jsx("span",{className:"skrow-num",children:String(y+1).padStart(2,"0")}),Z.jsx("h3",{className:"skrow-title",children:b.title}),Z.jsx("ul",{className:"skrow-tags",children:b.items.split(",").map(x=>{const P=x.trim(),L=Ov[Pv(P)],N=$C(P);return Z.jsxs("li",{children:[L?Z.jsx("img",{className:"skrow-logo",src:L,alt:"","aria-hidden":"true",loading:"lazy"}):N?Z.jsx("i",{className:N,"aria-hidden":"true"}):Z.jsx("span",{className:"skrow-mono","aria-hidden":"true",children:P.slice(0,1)}),P]},P)})})]},b.title)),Z.jsxs("div",{className:"skrow",children:[Z.jsx("span",{className:"skrow-num",children:String(s.skills.groups.length+1).padStart(2,"0")}),Z.jsx("h3",{className:"skrow-title",children:c?"Sprachen":"Languages"}),Z.jsx("ul",{className:"sp-langs sp-langs-inline",children:s.skills.languages.map(b=>Z.jsxs("li",{children:[Z.jsx("span",{className:"sp-lang-flag","aria-hidden":"true",children:nw(b.name)}),Z.jsx("span",{className:"sp-lang-name",children:b.name}),Z.jsx("span",{className:"sp-lang-level",children:b.level}),Z.jsx("span",{className:"sp-lang-bar",children:Z.jsx("span",{style:{width:`${ew(b.level)}%`}})})]},b.name))})]})]})]})]}),r==="about"&&Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{className:"sp-about",children:[Z.jsxs("div",{className:"sp-prose",children:[Z.jsx("p",{className:"sp-lead",children:s.about.lead}),Z.jsxs("ul",{className:"sp-facts",children:[Z.jsxs("li",{children:[Z.jsx("span",{"aria-hidden":"true",children:"🎂"}),c?"Jahrgang 2005":"Born 2005"]}),Z.jsxs("li",{children:[Z.jsx("span",{"aria-hidden":"true",children:"📍"}),"Vaihingen an der Enz"]}),Z.jsxs("li",{children:[Z.jsx("span",{"aria-hidden":"true",children:"🚗"}),c?"Führerschein Klasse B & A2":"Driver's license class B & A2"]}),Z.jsxs("li",{children:[Z.jsx("span",{"aria-hidden":"true",children:"🗣️"}),c?"Deutsch (Muttersprache)":"German (native)"]}),Z.jsxs("li",{children:[Z.jsx("span",{"aria-hidden":"true",children:"🏍️"}),c?"Hobbys: Motorrad, Wandern, Tiere":"Hobbies: motorcycles, hiking, animals"]})]}),Z.jsx("p",{children:s.about.body}),Z.jsx("p",{children:c?"Vor der Ausbildung habe ich ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker gemacht. Danach kam die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso, die ich im Januar 2026 (IHK) abgeschlossen habe. Seitdem arbeite ich als Junior Software Engineer bei Telution.":"Before the apprenticeship I did a voluntary social year at Lebenshilfe Vaihingen-Mühlacker. Then came the apprenticeship as an IT specialist for application development at adesso, which I completed in January 2026 (IHK). Since then I've been working as a Junior Software Engineer at Telution."})]}),Z.jsxs("figure",{className:"sp-portrait",children:[Z.jsx("img",{src:HC,alt:"Jason Bay"}),Z.jsx("figcaption",{children:"Jason Bay · Vaihingen an der Enz"})]})]}),Z.jsxs("section",{className:"sp-subsection",children:[Z.jsxs("div",{className:"sp-sub-head",children:[Z.jsx("h2",{children:c?Or.gallery.de:Or.gallery.en}),Z.jsx("p",{className:"sp-sub-intro",children:c?Pr.gallery.de:Pr.gallery.en})]}),Z.jsx(te.Suspense,{fallback:Z.jsx(fd,{}),children:Z.jsx(qC,{})})]})]}),r==="contact"&&Z.jsxs("div",{className:"sp-contact",children:[Z.jsxs("div",{className:"sp-prose",children:[Z.jsx("p",{children:s.contact.intro}),Z.jsx("a",{className:"sp-email",href:`mailto:${Nv}`,children:Nv}),Z.jsx("ul",{className:"sp-plain",children:Lv().map(b=>Z.jsx("li",{children:Z.jsxs("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",children:[Z.jsx("span",{children:b.label}),Z.jsxs("span",{children:[b.handle," ↗"]})]})},b.label))})]}),Z.jsxs("form",{className:"sp-form",action:"https://formspree.io/f/mreakbje",method:"POST",children:[Z.jsxs("label",{children:[Z.jsx("span",{children:"Name"}),Z.jsx("input",{name:"name",type:"text",placeholder:s.contact.namePlaceholder,required:!0})]}),Z.jsxs("label",{children:[Z.jsx("span",{children:c?"E-Mail":"Email"}),Z.jsx("input",{name:"email",type:"email",placeholder:s.contact.emailPlaceholder,required:!0})]}),Z.jsxs("label",{children:[Z.jsx("span",{children:c?"Nachricht":"Message"}),Z.jsx("textarea",{name:"message",rows:5,placeholder:s.contact.messagePlaceholder,required:!0})]}),Z.jsx("button",{type:"submit",children:s.contact.submit})]})]}),r!=="contact"&&r!=="work"&&Z.jsx("section",{className:"sp-subsection sp-cta",children:Z.jsxs("div",{className:"sp-cta-inner",children:[Z.jsx("h2",{children:c?"Sag Hallo.":"Say hi."}),Z.jsx("p",{children:c?"Ob Projekt, Frage oder einfach nur so, ich antworte gern.":"Whether it's a project, a question, or just to say hi, I'll write back."}),Z.jsx("button",{type:"button",className:"sp-cta-btn",onClick:()=>i("contact"),children:Z.jsx("span",{className:"glow-text",children:c?"Kontakt aufnehmen ↗":"Get in touch ↗"})})]})})]})]})}const $o=["main","about"];function aw(){const{lang:r,setLang:t}=Yv(),[i,s]=te.useState("main"),[l,c]=te.useState(null),[h,d]=te.useState(!1),[m,p]=te.useState(!1),[g,_]=te.useState(!1),S=te.useRef({x:0,y:0}),E=te.useRef({x:0,y:0}),T=te.useRef({x:0,y:0}),b=te.useRef(1),y=te.useRef(null),x=te.useRef(new Map),P=te.useRef(0),L=te.useRef(0),N=te.useMemo(()=>FC(),[r]),F=te.useMemo(()=>zC(r),[r]),I=te.useMemo(()=>BC(),[r]),B=te.useMemo(()=>i==="main"?N.map((V,ht)=>({id:`kw-${ht}`,strong:V.strong,position:[Math.cos(V.angle)*V.radius,Math.sin(V.angle)*V.radius*.78,V.depth]})):i==="about"?F.map(V=>({id:V.id,position:V.position})):[],[i,N,F]),Q=te.useCallback(()=>{p(!0),window.clearTimeout(L.current),L.current=window.setTimeout(()=>p(!1),460)},[]),C=te.useCallback(V=>{s(ht=>(ht!==V&&Q(),V)),c(null)},[Q]),D=te.useCallback(V=>{s(ht=>{const gt=$o.indexOf(ht),U=$o[Math.min($o.length-1,Math.max(0,gt+V))];return U!==ht&&Q(),U})},[Q]);te.useEffect(()=>{i!=="about"&&(E.current={x:0,y:0},T.current={x:0,y:0},b.current=1)},[i]),te.useEffect(()=>()=>window.clearTimeout(L.current),[]);const X=te.useCallback(()=>{if(h)try{const V=window.AudioContext||window.webkitAudioContext,ht=new V,gt=ht.createOscillator(),U=ht.createGain();gt.type="sine",gt.frequency.value=520,U.gain.value=.04,gt.connect(U).connect(ht.destination),gt.start(),U.gain.exponentialRampToValueAtTime(1e-4,ht.currentTime+.14),gt.stop(ht.currentTime+.16),gt.onended=()=>ht.close()}catch{}},[h]),nt=te.useCallback(V=>{X(),c(V),_(!1)},[X]);te.useEffect(()=>{const V=ht=>{S.current={x:ht.clientX/window.innerWidth*2-1,y:ht.clientY/window.innerHeight*2-1}};return window.addEventListener("pointermove",V),()=>window.removeEventListener("pointermove",V)},[]),te.useEffect(()=>{const V=ht=>{if(l)return;if(i==="about"){const U=ht.deltaY>0?1:-1,tt=b.current+U*.09;if(tt>1.8){const _t=performance.now();_t-P.current>800&&(P.current=_t,b.current=1,D(-1));return}b.current=Kc(tt,.5,1.8);return}const gt=performance.now();gt-P.current<900||Math.abs(ht.deltaY)<24||(P.current=gt,D(ht.deltaY>0?1:-1))};return window.addEventListener("wheel",V,{passive:!0}),()=>window.removeEventListener("wheel",V)},[l,i,D]),te.useEffect(()=>{const V=ht=>{ht.key==="Escape"&&l&&c(null)};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[l]);const rt=iE({onDrag:({movement:[V,ht],first:gt,last:U,pinching:tt})=>{if(l||tt)return;gt&&(T.current={...E.current});const _t=i==="about";let Tt=T.current.x+V*(_t?.008:.005);const zt=Kc(T.current.y-ht*.004,-.85,.85);_t||(Tt=Kc(Tt,-.7,.7)),E.current={x:Tt,y:zt},U&&!_t&&(E.current={x:0,y:0})},onPinch:({offset:[V]})=>{l||i!=="about"||(b.current=Kc(1/V,.5,1.8))}},{drag:{filterTaps:!0},pinch:{scaleBounds:{min:.55,max:2}}}),lt=r==="de",dt=l||i==="main"?"light":"dark",O="Frontend Developer · Vaihingen an der Enz",G=i==="main"?lt?"SCROLLEN ZU ÜBER MICH ↓":"SCROLL TO ABOUT ↓":lt?"SCROLLEN ODER ZIEHEN · KNOTEN ANKLICKEN":"SCROLL OR DRAG · CLICK A NODE";return Z.jsxs("div",{className:"experience-root","data-scene":i,"data-surface":dt,children:[Z.jsx(NC,{}),Z.jsxs("div",{className:`experience scene-${i} ${l?"is-dived":""} ${m?"is-warping":""}`,...rt(),children:[Z.jsx(LC,{scene:i,anchors:B,pointerRef:S,dragRef:E,zoomRef:b,hoverRef:y,labelEls:x}),i==="main"&&Z.jsxs("button",{className:"identity","data-hover":!0,onClick:()=>{X(),C("about")},"aria-label":lt?"Weiter zu Über mich":"Continue to About",children:[Z.jsx("span",{className:"identity-name",children:I.name}),Z.jsx("span",{className:"identity-node","aria-hidden":"true"})]}),Z.jsxs("div",{className:"label-layer",children:[i==="main"&&N.map((V,ht)=>Z.jsx("span",{ref:gt=>{x.current.set(`kw-${ht}`,gt)},className:`kw-label ${V.strong?"strong":"faint"}`,onMouseEnter:()=>{y.current=`kw-${ht}`},onMouseLeave:()=>{y.current=null},children:Z.jsx("span",{className:"glow-text",children:V.label})},`kw-${ht}`)),i==="about"&&F.map(V=>Z.jsx("button",{ref:ht=>{x.current.set(V.id,ht)},className:"section-label",style:{fontSize:`${.72+V.scale*.5}rem`},onClick:()=>nt(V.id),onMouseEnter:()=>{y.current=V.id},onMouseLeave:()=>{y.current=null},children:Z.jsx("span",{className:"glow-text",children:V.label})},V.id))]}),Z.jsxs("header",{className:"chrome-top",children:[Z.jsx("button",{className:"wordmark",onClick:()=>C("main"),children:Z.jsx("span",{className:"glow-text",children:"JASON BAY"})}),Z.jsxs("nav",{className:"chrome-nav",children:[Z.jsx("button",{className:i==="about"&&!l?"active":"",onClick:()=>{X(),C("about")},children:Z.jsx("span",{className:"glow-text",children:lt?"ÜBER MICH":"ABOUT ME"})}),Z.jsx("button",{className:l==="work"?"active":"",onClick:()=>nt("work"),children:Z.jsx("span",{className:"glow-text",children:"PORTFOLIO"})})]})]}),Z.jsxs("div",{className:"chrome-bottom",children:[Z.jsx("span",{className:"role-line",children:O}),i==="main"?Z.jsx("button",{className:"hint-line hint-line-action",onClick:()=>{X(),C("about")},children:G}):Z.jsx("span",{className:"hint-line",children:G}),Z.jsxs("span",{className:"scene-index",children:[String($o.indexOf(i)+1).padStart(2,"0")," / 0",$o.length]})]}),i==="about"&&!l&&Z.jsx("button",{className:"mobile-nav-toggle","aria-expanded":g,onClick:()=>_(V=>!V),children:Z.jsx("span",{className:"glow-text",children:g?"✕":lt?"MENÜ":"MENU"})}),i==="about"&&!l&&g&&Z.jsx("nav",{className:"mobile-nav-list",children:F.map(V=>Z.jsx("button",{onClick:()=>nt(V.id),children:Z.jsx("span",{className:"glow-text",children:V.label})},V.id))})]}),Z.jsxs("div",{className:"global-meta",children:[Z.jsx("button",{className:l==="contact"?"active":"",onClick:()=>nt("contact"),children:Z.jsx("span",{className:"glow-text",children:lt?"KONTAKT":"CONTACT"})}),Z.jsxs("span",{className:"lang-switch",children:[Z.jsx("button",{className:lt?"active":"",onClick:()=>t("de"),children:"DE"}),Z.jsx("span",{children:"/"}),Z.jsx("button",{className:lt?"":"active",onClick:()=>t("en"),children:"EN"})]}),Z.jsxs("button",{className:"sound-toggle",onClick:()=>d(V=>!V),children:["SOUND ",h?"ON":"OFF"]})]}),l&&Z.jsx(iw,{id:l,onBack:()=>c(null),onOpen:nt})]})}function Kc(r,t,i){return Math.min(i,Math.max(t,r))}function sw(){return Z.jsx(Xy,{children:Z.jsx(aw,{})})}Vy.createRoot(document.getElementById("root")).render(Z.jsx(te.StrictMode,{children:Z.jsx(sw,{})}));export{Nv as E,kC as I,GC as T,vu as _,te as a,HC as b,rw as c,Ly as g,Z as j,zy as r,Yv as u};
