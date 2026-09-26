const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GallerySection-D9PFS5qT.js","assets/hike9-BpV9f2t9.js","assets/TikTokSection-DyY-iuZw.js","assets/66-CBBDpe9f.js","assets/OldPortfolio-CyB0h5Mf.js","assets/OldPortfolio-BJd3HmYL.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var fw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ny(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var bh={exports:{}},Wo={};var s_;function Oy(){if(s_)return Wo;s_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=i,Wo.jsxs=i,Wo}var r_;function Py(){return r_||(r_=1,bh.exports=Oy()),bh.exports}var Y=Py(),Th={exports:{}},le={};var o_;function Iy(){if(o_)return le;o_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function x(D,W,ut){this.props=D,this.context=W,this.refs=y,this.updater=ut||b}x.prototype.isReactComponent={},x.prototype.setState=function(D,W){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,W,"setState")},x.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=x.prototype;function N(D,W,ut){this.props=D,this.context=W,this.refs=y,this.updater=ut||b}var O=N.prototype=new P;O.constructor=N,A(O,x.prototype),O.isPureReactComponent=!0;var B=Array.isArray;function I(){}var F={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function w(D,W,ut){var Ct=ut.ref;return{$$typeof:r,type:D,key:W,ref:Ct!==void 0?Ct:null,props:ut}}function T(D,W){return w(D.type,W,D.props)}function z(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function K(D){var W={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ut){return W[ut]})}var Q=/\/+/g;function it(D,W){return typeof D=="object"&&D!==null&&D.key!=null?K(""+D.key):W.toString(36)}function lt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(W){D.status==="pending"&&(D.status="fulfilled",D.value=W)},function(W){D.status==="pending"&&(D.status="rejected",D.reason=W)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function U(D,W,ut,Ct,Ft){var tt=typeof D;(tt==="undefined"||tt==="boolean")&&(D=null);var dt=!1;if(D===null)dt=!0;else switch(tt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(D.$$typeof){case r:case t:dt=!0;break;case g:return dt=D._init,U(dt(D._payload),W,ut,Ct,Ft)}}if(dt)return Ft=Ft(D),dt=Ct===""?"."+it(D,0):Ct,B(Ft)?(ut="",dt!=null&&(ut=dt.replace(Q,"$&/")+"/"),U(Ft,W,ut,"",function(zt){return zt})):Ft!=null&&(z(Ft)&&(Ft=T(Ft,ut+(Ft.key==null||D&&D.key===Ft.key?"":(""+Ft.key).replace(Q,"$&/")+"/")+dt)),W.push(Ft)),1;dt=0;var Ut=Ct===""?".":Ct+":";if(B(D))for(var Ht=0;Ht<D.length;Ht++)Ct=D[Ht],tt=Ut+it(Ct,Ht),dt+=U(Ct,W,ut,tt,Ft);else if(Ht=M(D),typeof Ht=="function")for(D=Ht.call(D),Ht=0;!(Ct=D.next()).done;)Ct=Ct.value,tt=Ut+it(Ct,Ht++),dt+=U(Ct,W,ut,tt,Ft);else if(tt==="object"){if(typeof D.then=="function")return U(lt(D),W,ut,Ct,Ft);throw W=String(D),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return dt}function H(D,W,ut){if(D==null)return D;var Ct=[],Ft=0;return U(D,Ct,"","",function(tt){return W.call(ut,tt,Ft++)}),Ct}function at(D){if(D._status===-1){var W=D._result;W=W(),W.then(function(ut){(D._status===0||D._status===-1)&&(D._status=1,D._result=ut)},function(ut){(D._status===0||D._status===-1)&&(D._status=2,D._result=ut)}),D._status===-1&&(D._status=0,D._result=W)}if(D._status===1)return D._result.default;throw D._result}var At=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},bt={map:H,forEach:function(D,W,ut){H(D,function(){W.apply(this,arguments)},ut)},count:function(D){var W=0;return H(D,function(){W++}),W},toArray:function(D){return H(D,function(W){return W})||[]},only:function(D){if(!z(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return le.Activity=_,le.Children=bt,le.Component=x,le.Fragment=i,le.Profiler=l,le.PureComponent=N,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,le.__COMPILER_RUNTIME={__proto__:null,c:function(D){return F.H.useMemoCache(D)}},le.cache=function(D){return function(){return D.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(D,W,ut){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Ct=A({},D.props),Ft=D.key;if(W!=null)for(tt in W.key!==void 0&&(Ft=""+W.key),W)!$.call(W,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&W.ref===void 0||(Ct[tt]=W[tt]);var tt=arguments.length-2;if(tt===1)Ct.children=ut;else if(1<tt){for(var dt=Array(tt),Ut=0;Ut<tt;Ut++)dt[Ut]=arguments[Ut+2];Ct.children=dt}return w(D.type,Ft,Ct)},le.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},le.createElement=function(D,W,ut){var Ct,Ft={},tt=null;if(W!=null)for(Ct in W.key!==void 0&&(tt=""+W.key),W)$.call(W,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Ft[Ct]=W[Ct]);var dt=arguments.length-2;if(dt===1)Ft.children=ut;else if(1<dt){for(var Ut=Array(dt),Ht=0;Ht<dt;Ht++)Ut[Ht]=arguments[Ht+2];Ft.children=Ut}if(D&&D.defaultProps)for(Ct in dt=D.defaultProps,dt)Ft[Ct]===void 0&&(Ft[Ct]=dt[Ct]);return w(D,tt,Ft)},le.createRef=function(){return{current:null}},le.forwardRef=function(D){return{$$typeof:d,render:D}},le.isValidElement=z,le.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:at}},le.memo=function(D,W){return{$$typeof:p,type:D,compare:W===void 0?null:W}},le.startTransition=function(D){var W=F.T,ut={};F.T=ut;try{var Ct=D(),Ft=F.S;Ft!==null&&Ft(ut,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(I,At)}catch(tt){At(tt)}finally{W!==null&&ut.types!==null&&(W.types=ut.types),F.T=W}},le.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},le.use=function(D){return F.H.use(D)},le.useActionState=function(D,W,ut){return F.H.useActionState(D,W,ut)},le.useCallback=function(D,W){return F.H.useCallback(D,W)},le.useContext=function(D){return F.H.useContext(D)},le.useDebugValue=function(){},le.useDeferredValue=function(D,W){return F.H.useDeferredValue(D,W)},le.useEffect=function(D,W){return F.H.useEffect(D,W)},le.useEffectEvent=function(D){return F.H.useEffectEvent(D)},le.useId=function(){return F.H.useId()},le.useImperativeHandle=function(D,W,ut){return F.H.useImperativeHandle(D,W,ut)},le.useInsertionEffect=function(D,W){return F.H.useInsertionEffect(D,W)},le.useLayoutEffect=function(D,W){return F.H.useLayoutEffect(D,W)},le.useMemo=function(D,W){return F.H.useMemo(D,W)},le.useOptimistic=function(D,W){return F.H.useOptimistic(D,W)},le.useReducer=function(D,W,ut){return F.H.useReducer(D,W,ut)},le.useRef=function(D){return F.H.useRef(D)},le.useState=function(D){return F.H.useState(D)},le.useSyncExternalStore=function(D,W,ut){return F.H.useSyncExternalStore(D,W,ut)},le.useTransition=function(){return F.H.useTransition()},le.version="19.2.5",le}var l_;function dp(){return l_||(l_=1,Th.exports=Iy()),Th.exports}var Zt=dp();const Ah=Ny(Zt);var Rh={exports:{}},Yo={},Ch={exports:{}},wh={};var c_;function Fy(){return c_||(c_=1,(function(r){function t(U,H){var at=U.length;U.push(H);t:for(;0<at;){var At=at-1>>>1,bt=U[At];if(0<l(bt,H))U[At]=H,U[at]=bt,at=At;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var H=U[0],at=U.pop();if(at!==H){U[0]=at;t:for(var At=0,bt=U.length,D=bt>>>1;At<D;){var W=2*(At+1)-1,ut=U[W],Ct=W+1,Ft=U[Ct];if(0>l(ut,at))Ct<bt&&0>l(Ft,ut)?(U[At]=Ft,U[Ct]=at,At=Ct):(U[At]=ut,U[W]=at,At=W);else if(Ct<bt&&0>l(Ft,at))U[At]=Ft,U[Ct]=at,At=Ct;else break t}}return H}function l(U,H){var at=U.sortIndex-H.sortIndex;return at!==0?at:U.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,b=!1,A=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(U){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=U)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function B(U){if(A=!1,O(U),!b)if(i(m)!==null)b=!0,I||(I=!0,K());else{var H=i(p);H!==null&&lt(B,H.startTime-U)}}var I=!1,F=-1,$=5,w=-1;function T(){return y?!0:!(r.unstable_now()-w<$)}function z(){if(y=!1,I){var U=r.unstable_now();w=U;var H=!0;try{t:{b=!1,A&&(A=!1,P(F),F=-1),M=!0;var at=S;try{e:{for(O(U),_=i(m);_!==null&&!(_.expirationTime>U&&T());){var At=_.callback;if(typeof At=="function"){_.callback=null,S=_.priorityLevel;var bt=At(_.expirationTime<=U);if(U=r.unstable_now(),typeof bt=="function"){_.callback=bt,O(U),H=!0;break e}_===i(m)&&s(m),O(U)}else s(m);_=i(m)}if(_!==null)H=!0;else{var D=i(p);D!==null&&lt(B,D.startTime-U),H=!1}}break t}finally{_=null,S=at,M=!1}H=void 0}}finally{H?K():I=!1}}}var K;if(typeof N=="function")K=function(){N(z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,it=Q.port2;Q.port1.onmessage=z,K=function(){it.postMessage(null)}}else K=function(){x(z,0)};function lt(U,H){F=x(function(){U(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(U){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var at=S;S=H;try{return U()}finally{S=at}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var at=S;S=U;try{return H()}finally{S=at}},r.unstable_scheduleCallback=function(U,H,at){var At=r.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?At+at:At):at=At,U){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=at+bt,U={id:g++,callback:H,priorityLevel:U,startTime:at,expirationTime:bt,sortIndex:-1},at>At?(U.sortIndex=at,t(p,U),i(m)===null&&U===i(p)&&(A?(P(F),F=-1):A=!0,lt(B,at-At))):(U.sortIndex=bt,t(m,U),b||M||(b=!0,I||(I=!0,K()))),U},r.unstable_shouldYield=T,r.unstable_wrapCallback=function(U){var H=S;return function(){var at=S;S=H;try{return U.apply(this,arguments)}finally{S=at}}}})(wh)),wh}var u_;function By(){return u_||(u_=1,Ch.exports=Fy()),Ch.exports}var Dh={exports:{}},zn={};var f_;function zy(){if(f_)return zn;f_=1;var r=dp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},zn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},zn.useFormStatus=function(){return h.H.useHostTransitionStatus()},zn.version="19.2.5",zn}var h_;function Hy(){if(h_)return Dh.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dh.exports=zy(),Dh.exports}var d_;function Gy(){if(d_)return Yo;d_=1;var r=By(),t=dp(),i=Hy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:it(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return it(e(n))}catch{}}return null}var lt=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},At=[],bt=-1;function D(e){return{current:e}}function W(e){0>bt||(e.current=At[bt],At[bt]=null,bt--)}function ut(e,n){bt++,At[bt]=e.current,e.current=n}var Ct=D(null),Ft=D(null),tt=D(null),dt=D(null);function Ut(e,n){switch(ut(tt,n),ut(Ft,e),ut(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=C0(n),e=w0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(Ct),ut(Ct,e)}function Ht(){W(Ct),W(Ft),W(tt)}function zt(e){e.memoizedState!==null&&ut(dt,e);var n=Ct.current,a=w0(n,e.type);n!==a&&(ut(Ft,e),ut(Ct,a))}function ce(e){Ft.current===e&&(W(Ct),W(Ft)),dt.current===e&&(W(dt),Go._currentValue=at)}var Ze,me;function fe(e){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+me}var Ae=!1;function se(e,n){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ft){var ot=ft}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ft){ot=ft}e.call(yt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var G=v.split(`
`),nt=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===nt.length)for(o=G.length-1,u=nt.length-1;1<=o&&0<=u&&G[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==nt[u]){var _t=`
`+G[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fe(a):""}function Pe(e,n){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==n&&n!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return fe("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Pe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,Se=r.unstable_scheduleCallback,ye=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Et=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Vt=r.unstable_LowPriority,Ot=r.unstable_IdlePriority,kt=r.log,te=r.unstable_setDisableYieldValue,Rt=null,Dt=null;function mt(e){if(typeof kt=="function"&&te(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Rt,e)}catch{}}var wt=Math.clz32?Math.clz32:k,gt=Math.log,Kt=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(gt(e)/Kt|0)|0}var Nt=256,Tt=262144,St=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Mt(o):(v&=R,v!==0?u=Mt(v):a||(a=R&~e,a!==0&&(u=Mt(a))))):(R=o&~f,R!==0?u=Mt(R):v!==0?u=Mt(v):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var e=St;return St<<=1,(St&62914560)===0&&(St=4194304),e}function ge(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function fn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function In(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=v&~a;0<a;){var _t=31-wt(a),yt=1<<_t;R[_t]=0,G[_t]=-1;var ot=nt[_t];if(ot!==null)for(nt[_t]=null,_t=0;_t<ot.length;_t++){var ft=ot[_t];ft!==null&&(ft.lane&=-536870913)}a&=~yt}o!==0&&Ui(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Ui(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Fe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function hn(e,n){var a=n&-n;return a=(a&42)!==0?1:Zn(a),(a&(e.suspendedLanes|n))!==0?0:a}function Zn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kn(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:J0(e.type))}function Qn(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Bn=Math.random().toString(36).slice(2),an="__reactFiber$"+Bn,on="__reactProps$"+Bn,Jn="__reactContainer$"+Bn,$i="__reactEvents$"+Bn,ks="__reactListeners$"+Bn,gl="__reactHandles$"+Bn,eo="__reactResources$"+Bn,hs="__reactMarker$"+Bn;function no(e){delete e[an],delete e[on],delete e[$i],delete e[ks],delete e[gl]}function Ua(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Jn]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=I0(e);e!==null;){if(a=e[an])return a;e=I0(e)}return n}e=a,a=e.parentNode}return null}function La(e){if(e=e[an]||e[Jn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ds(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Na(e){var n=e[eo];return n||(n=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[hs]=!0}var q=new Set,ct={};function rt(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(ct[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},It={};function Xt(e){return je.call(It,e)?!0:je.call(Gt,e)?!1:Pt.test(e)?It[e]=!0:(Gt[e]=!0,!1)}function jt(e,n,a){if(Xt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=Le(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function Ie(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function oe(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?An(e,v,ie(n)):a!=null?An(e,v,ie(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function ta(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),qe(e)}function An(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _i(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),qe(e)}function xn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Cn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&wn(e,f,n[f])}function Li(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(e){return Dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Su=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,Ys=null;function Rp(e){var n=La(e);if(n&&(e=n.stateNode)){var a=e[on]||null;t:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[on]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ie(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&_i(e,!!a.multiple,n,!1)}}}var Mu=!1;function Cp(e,n,a){if(Mu)return e(n,a);Mu=!0;try{var o=e(n);return o}finally{if(Mu=!1,(Ws!==null||Ys!==null)&&(ac(),Ws&&(n=Ws,e=Ys,Ys=Ws=null,Rp(n),e)))for(n=0;n<e.length;n++)Rp(e[n])}}function io(e,n){var a=e.stateNode;if(a===null)return null;var o=a[on]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(na)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Eu=!1}var Oa=null,bu=null,vl=null;function wp(){if(vl)return vl;var e,n=bu,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return vl=u.slice(e,1<o?1-o:void 0)}function xl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Sl(){return!0}function Dp(){return!1}function $n(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sl:Dp,this.isPropagationStopped=Dp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=$n(ps),so=_({},ps,{view:0,detail:0}),Ux=$n(so),Tu,Au,ro,Ml=_({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(Tu=e.screenX-ro.screenX,Au=e.screenY-ro.screenY):Au=Tu=0,ro=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),Up=$n(Ml),Lx=_({},Ml,{dataTransfer:0}),Nx=$n(Lx),Ox=_({},so,{relatedTarget:0}),Ru=$n(Ox),Px=_({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=$n(Px),Fx=_({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bx=$n(Fx),zx=_({},ps,{data:0}),Lp=$n(zx),Hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vx[e])?!!n[e]:!1}function Cu(){return kx}var Xx=_({},so,{key:function(e){if(e.key){var n=Hx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wx=$n(Xx),Yx=_({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=$n(Yx),jx=_({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),qx=$n(jx),Zx=_({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=$n(Zx),Qx=_({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=$n(Qx),$x=_({},ps,{newState:0,oldState:0}),tS=$n($x),eS=[9,13,27,32],wu=na&&"CompositionEvent"in window,oo=null;na&&"documentMode"in document&&(oo=document.documentMode);var nS=na&&"TextEvent"in window&&!oo,Op=na&&(!wu||oo&&8<oo&&11>=oo),Pp=" ",Ip=!1;function Fp(e,n){switch(e){case"keyup":return eS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function iS(e,n){switch(e){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(Ip=!0,Pp);case"textInput":return e=n.data,e===Pp&&Ip?null:e;default:return null}}function aS(e,n){if(js)return e==="compositionend"||!wu&&Fp(e,n)?(e=wp(),vl=bu=Oa=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sS[e.type]:n==="textarea"}function Hp(e,n,a,o){Ws?Ys?Ys.push(o):Ys=[o]:Ws=o,n=fc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var lo=null,co=null;function rS(e){M0(e,0)}function El(e){var n=ds(e);if(Ie(n))return e}function Gp(e,n){if(e==="change")return n}var Vp=!1;if(na){var Du;if(na){var Uu="oninput"in document;if(!Uu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Uu=typeof kp.oninput=="function"}Du=Uu}else Du=!1;Vp=Du&&(!document.documentMode||9<document.documentMode)}function Xp(){lo&&(lo.detachEvent("onpropertychange",Wp),co=lo=null)}function Wp(e){if(e.propertyName==="value"&&El(co)){var n=[];Hp(n,co,e,yu(e)),Cp(rS,n)}}function oS(e,n,a){e==="focusin"?(Xp(),lo=n,co=a,lo.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function lS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(co)}function cS(e,n){if(e==="click")return El(n)}function uS(e,n){if(e==="input"||e==="change")return El(n)}function fS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:fS;function uo(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!je.call(n,u)||!li(e[u],n[u]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jp(e,n){var a=Yp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yp(a)}}function qp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hS=na&&"documentMode"in document&&11>=document.documentMode,qs=null,Nu=null,fo=null,Ou=!1;function Kp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||qs==null||qs!==Jt(o)||(o=qs,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=fc(Nu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=qs)))}function ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Pu={},Qp={};na&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function gs(e){if(Pu[e])return Pu[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return Pu[e]=n[a];return e}var Jp=gs("animationend"),$p=gs("animationiteration"),tm=gs("animationstart"),dS=gs("transitionrun"),pS=gs("transitionstart"),mS=gs("transitioncancel"),em=gs("transitionend"),nm=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Ni(e,n){nm.set(e,n),rt(n,[e])}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vi=[],Ks=0,Fu=0;function Tl(){for(var e=Ks,n=Fu=Ks=0;n<e;){var a=vi[n];vi[n++]=null;var o=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var f=vi[n];if(vi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&im(a,u,f)}}function Al(e,n,a,o){vi[Ks++]=e,vi[Ks++]=n,vi[Ks++]=a,vi[Ks++]=o,Fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Bu(e,n,a,o){return Al(e,n,a,o),Rl(e)}function _s(e,n){return Al(e,null,null,n),Rl(e)}function im(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-wt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Rl(e){if(50<Oo)throw Oo=0,qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function gS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,n,a,o){return new gS(e,n,a,o)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ci(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")zu(e)&&(v=1);else if(typeof e=="string")v=yy(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=ci(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return vs(a.children,u,f,n);case y:v=8,u|=24;break;case x:return e=ci(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case B:return e=ci(13,a,n,u),e.elementType=B,e.lanes=f,e;case I:return e=ci(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case P:v=9;break t;case O:v=11;break t;case F:v=14;break t;case $:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ci(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function vs(e,n,a,o){return e=ci(7,e,o,n),e.lanes=a,e}function Hu(e,n,a){return e=ci(6,e,null,n),e.lanes=a,e}function sm(e){var n=ci(18,null,null,0);return n.stateNode=e,n}function Gu(e,n,a){return n=ci(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rm=new WeakMap;function xi(e,n){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},rm.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Js=[],$s=0,wl=null,ho=0,Si=[],yi=0,Pa=null,Gi=1,Vi="";function aa(e,n){Js[$s++]=ho,Js[$s++]=wl,wl=e,ho=n}function om(e,n,a){Si[yi++]=Gi,Si[yi++]=Vi,Si[yi++]=Pa,Pa=e;var o=Gi;e=Vi;var u=32-wt(o)-1;o&=~(1<<u),a+=1;var f=32-wt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Gi=1<<32-wt(n)+u|a<<u|o,Vi=f+e}else Gi=1<<f|a<<u|o,Vi=e}function Vu(e){e.return!==null&&(aa(e,1),om(e,1,0))}function ku(e){for(;e===wl;)wl=Js[--$s],Js[$s]=null,ho=Js[--$s],Js[$s]=null;for(;e===Pa;)Pa=Si[--yi],Si[yi]=null,Vi=Si[--yi],Si[yi]=null,Gi=Si[--yi],Si[yi]=null}function lm(e,n){Si[yi++]=Gi,Si[yi++]=Vi,Si[yi++]=Pa,Gi=n.id,Vi=n.overflow,Pa=e}var Dn=null,Ke=null,Te=!1,Ia=null,Mi=!1,Xu=Error(s(519));function Fa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(xi(n,e)),Xu}function cm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[on]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)ve(Io[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||A0(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Fa(e,!0)}function um(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Dn=Dn.return}}function tr(e){if(e!==Dn)return!1;if(!Te)return um(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ch(e.type,e.memoizedProps)),a=!a),a&&Ke&&Fa(e),um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=P0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=P0(e)}else n===27?(n=Ke,Qa(e.type)?(e=ph,ph=null,Ke=e):Ke=n):Ke=Dn?bi(e.stateNode.nextSibling):null;return!0}function xs(){Ke=Dn=null,Te=!1}function Wu(){var e=Ia;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Ia=null),e}function po(e){Ia===null?Ia=[e]:Ia.push(e)}var Yu=D(null),Ss=null,sa=null;function Ba(e,n,a){ut(Yu,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=Yu.current,W(Yu)}function ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ju(f.return,a,e),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),ju(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function er(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;li(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===dt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&qu(n,e,a,o),n.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ys(e){Ss=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return fm(Ss,e)}function Ul(e,n){return Ss===null&&ys(e),fm(e,n)}function fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var _S=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vS=r.unstable_scheduleCallback,xS=r.unstable_NormalPriority,dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new _S,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&vS(xS,function(){e.controller.abort()})}var go=null,Ku=0,nr=0,ir=null;function SS(e,n){if(go===null){var a=go=[];Ku=0,nr=th(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ku++,n.then(hm,hm),n}function hm(){if(--Ku===0&&go!==null){ir!==null&&(ir.status="fulfilled");var e=go;go=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=U.S;U.S=function(e,n){Kg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SS(e,n),dm!==null&&dm(e,n)};var Ms=D(null);function Qu(){var e=Ms.current;return e!==null?e:Ye.pooledCache}function Ll(e,n){n===null?ut(Ms,Ms.current):ut(Ms,n.pool)}function pm(){var e=Qu();return e===null?null:{parent:dn._currentValue,pool:e}}var ar=Error(s(460)),Ju=Error(s(474)),Nl=Error(s(542)),Ol={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vm(e),e}throw bs=n,ar}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bs=a,ar):a}}var bs=null;function _m(){if(bs===null)throw Error(s(459));var e=bs;return bs=null,e}function vm(e){if(e===ar||e===Nl)throw Error(s(483))}var sr=null,_o=0;function Pl(e){var n=_o;return _o+=1,sr===null&&(sr=[]),gm(sr,e,n)}function vo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xm(e){function n(Z,X){if(e){var et=Z.deletions;et===null?(Z.deletions=[X],Z.flags|=16):et.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ia(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<X?(Z.flags|=67108866,X):et):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,et,xt){return X===null||X.tag!==6?(X=Hu(et,Z.mode,xt),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function G(Z,X,et,xt){var $t=et.type;return $t===A?_t(Z,X,et.props.children,xt,et.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===$&&Es($t)===X.type)?(X=u(X,et.props),vo(X,et),X.return=Z,X):(X=Cl(et.type,et.key,et.props,null,Z.mode,xt),vo(X,et),X.return=Z,X)}function nt(Z,X,et,xt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Gu(et,Z.mode,xt),X.return=Z,X):(X=u(X,et.children||[]),X.return=Z,X)}function _t(Z,X,et,xt,$t){return X===null||X.tag!==7?(X=vs(et,Z.mode,xt,$t),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function yt(Z,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Hu(""+X,Z.mode,et),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return et=Cl(X.type,X.key,X.props,null,Z.mode,et),vo(et,X),et.return=Z,et;case b:return X=Gu(X,Z.mode,et),X.return=Z,X;case $:return X=Es(X),yt(Z,X,et)}if(lt(X)||K(X))return X=vs(X,Z.mode,et,null),X.return=Z,X;if(typeof X.then=="function")return yt(Z,Pl(X),et);if(X.$$typeof===N)return yt(Z,Ul(Z,X),et);Il(Z,X)}return null}function ot(Z,X,et,xt){var $t=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return $t!==null?null:R(Z,X,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===$t?G(Z,X,et,xt):null;case b:return et.key===$t?nt(Z,X,et,xt):null;case $:return et=Es(et),ot(Z,X,et,xt)}if(lt(et)||K(et))return $t!==null?null:_t(Z,X,et,xt,null);if(typeof et.then=="function")return ot(Z,X,Pl(et),xt);if(et.$$typeof===N)return ot(Z,X,Ul(Z,et),xt);Il(Z,et)}return null}function ft(Z,X,et,xt,$t){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Z=Z.get(et)||null,R(X,Z,""+xt,$t);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case M:return Z=Z.get(xt.key===null?et:xt.key)||null,G(X,Z,xt,$t);case b:return Z=Z.get(xt.key===null?et:xt.key)||null,nt(X,Z,xt,$t);case $:return xt=Es(xt),ft(Z,X,et,xt,$t)}if(lt(xt)||K(xt))return Z=Z.get(et)||null,_t(X,Z,xt,$t,null);if(typeof xt.then=="function")return ft(Z,X,et,Pl(xt),$t);if(xt.$$typeof===N)return ft(Z,X,et,Ul(X,xt),$t);Il(X,xt)}return null}function Wt(Z,X,et,xt){for(var $t=null,De=null,Qt=X,he=X=0,Ee=null;Qt!==null&&he<et.length;he++){Qt.index>he?(Ee=Qt,Qt=null):Ee=Qt.sibling;var Ue=ot(Z,Qt,et[he],xt);if(Ue===null){Qt===null&&(Qt=Ee);break}e&&Qt&&Ue.alternate===null&&n(Z,Qt),X=f(Ue,X,he),De===null?$t=Ue:De.sibling=Ue,De=Ue,Qt=Ee}if(he===et.length)return a(Z,Qt),Te&&aa(Z,he),$t;if(Qt===null){for(;he<et.length;he++)Qt=yt(Z,et[he],xt),Qt!==null&&(X=f(Qt,X,he),De===null?$t=Qt:De.sibling=Qt,De=Qt);return Te&&aa(Z,he),$t}for(Qt=o(Qt);he<et.length;he++)Ee=ft(Qt,Z,he,et[he],xt),Ee!==null&&(e&&Ee.alternate!==null&&Qt.delete(Ee.key===null?he:Ee.key),X=f(Ee,X,he),De===null?$t=Ee:De.sibling=Ee,De=Ee);return e&&Qt.forEach(function(ns){return n(Z,ns)}),Te&&aa(Z,he),$t}function ae(Z,X,et,xt){if(et==null)throw Error(s(151));for(var $t=null,De=null,Qt=X,he=X=0,Ee=null,Ue=et.next();Qt!==null&&!Ue.done;he++,Ue=et.next()){Qt.index>he?(Ee=Qt,Qt=null):Ee=Qt.sibling;var ns=ot(Z,Qt,Ue.value,xt);if(ns===null){Qt===null&&(Qt=Ee);break}e&&Qt&&ns.alternate===null&&n(Z,Qt),X=f(ns,X,he),De===null?$t=ns:De.sibling=ns,De=ns,Qt=Ee}if(Ue.done)return a(Z,Qt),Te&&aa(Z,he),$t;if(Qt===null){for(;!Ue.done;he++,Ue=et.next())Ue=yt(Z,Ue.value,xt),Ue!==null&&(X=f(Ue,X,he),De===null?$t=Ue:De.sibling=Ue,De=Ue);return Te&&aa(Z,he),$t}for(Qt=o(Qt);!Ue.done;he++,Ue=et.next())Ue=ft(Qt,Z,he,Ue.value,xt),Ue!==null&&(e&&Ue.alternate!==null&&Qt.delete(Ue.key===null?he:Ue.key),X=f(Ue,X,he),De===null?$t=Ue:De.sibling=Ue,De=Ue);return e&&Qt.forEach(function(Ly){return n(Z,Ly)}),Te&&aa(Z,he),$t}function We(Z,X,et,xt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var $t=et.key;X!==null;){if(X.key===$t){if($t=et.type,$t===A){if(X.tag===7){a(Z,X.sibling),xt=u(X,et.props.children),xt.return=Z,Z=xt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===$&&Es($t)===X.type){a(Z,X.sibling),xt=u(X,et.props),vo(xt,et),xt.return=Z,Z=xt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}et.type===A?(xt=vs(et.props.children,Z.mode,xt,et.key),xt.return=Z,Z=xt):(xt=Cl(et.type,et.key,et.props,null,Z.mode,xt),vo(xt,et),xt.return=Z,Z=xt)}return v(Z);case b:t:{for($t=et.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Z,X.sibling),xt=u(X,et.children||[]),xt.return=Z,Z=xt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}xt=Gu(et,Z.mode,xt),xt.return=Z,Z=xt}return v(Z);case $:return et=Es(et),We(Z,X,et,xt)}if(lt(et))return Wt(Z,X,et,xt);if(K(et)){if($t=K(et),typeof $t!="function")throw Error(s(150));return et=$t.call(et),ae(Z,X,et,xt)}if(typeof et.then=="function")return We(Z,X,Pl(et),xt);if(et.$$typeof===N)return We(Z,X,Ul(Z,et),xt);Il(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Z,X.sibling),xt=u(X,et),xt.return=Z,Z=xt):(a(Z,X),xt=Hu(et,Z.mode,xt),xt.return=Z,Z=xt),v(Z)):a(Z,X)}return function(Z,X,et,xt){try{_o=0;var $t=We(Z,X,et,xt);return sr=null,$t}catch(Qt){if(Qt===ar||Qt===Nl)throw Qt;var De=ci(29,Qt,null,Z.mode);return De.lanes=xt,De.return=Z,De}}}var Ts=xm(!0),Sm=xm(!1),za=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(e),im(e,null,a),n}return Al(e,o,n,a),Rl(e)}function xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fe(e,a)}}function ef(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nf=!1;function So(){if(nf){var e=ir;if(e!==null)throw e}}function yo(e,n,a,o){nf=!1;var u=e.updateQueue;za=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,nt=G.next;G.next=null,v===null?f=nt:v.next=nt,v=G;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,R=_t.lastBaseUpdate,R!==v&&(R===null?_t.firstBaseUpdate=nt:R.next=nt,_t.lastBaseUpdate=G))}if(f!==null){var yt=u.baseState;v=0,_t=nt=G=null,R=f;do{var ot=R.lane&-536870913,ft=ot!==R.lane;if(ft?(Me&ot)===ot:(o&ot)===ot){ot!==0&&ot===nr&&(nf=!0),_t!==null&&(_t=_t.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,ae=R;ot=n;var We=a;switch(ae.tag){case 1:if(Wt=ae.payload,typeof Wt=="function"){yt=Wt.call(We,yt,ot);break t}yt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ae.payload,ot=typeof Wt=="function"?Wt.call(We,yt,ot):Wt,ot==null)break t;yt=_({},yt,ot);break t;case 2:za=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_t===null?(nt=_t=ft,G=yt):_t=_t.next=ft,v|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);_t===null&&(G=yt),u.baseState=G,u.firstBaseUpdate=nt,u.lastBaseUpdate=_t,f===null&&(u.shared.lanes=0),Ya|=v,e.lanes=v,e.memoizedState=yt}}function ym(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],n)}var rr=D(null),Fl=D(0);function Em(e,n){e=ma,ut(Fl,e),ut(rr,n),ma=e|n.baseLanes}function af(){ut(Fl,ma),ut(rr,rr.current)}function sf(){ma=Fl.current,W(rr),W(Fl)}var ui=D(null),Ei=null;function Va(e){var n=e.alternate;ut(ln,ln.current&1),ut(ui,e),Ei===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(Ei=e)}function rf(e){ut(ln,ln.current),ut(ui,e),Ei===null&&(Ei=e)}function bm(e){e.tag===22?(ut(ln,ln.current),ut(ui,e),Ei===null&&(Ei=e)):ka()}function ka(){ut(ln,ln.current),ut(ui,ui.current)}function fi(e){W(ui),Ei===e&&(Ei=null),W(ln)}var ln=D(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hh(a)||dh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,ue=null,ke=null,pn=null,zl=!1,or=!1,As=!1,Hl=0,Mo=0,lr=null,MS=0;function sn(){throw Error(s(321))}function of(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function lf(e,n,a,o,u,f){return oa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?og:Ef,As=!1,f=a(o,u),As=!1,or&&(f=Am(n,a,o,u)),Tm(e),f}function Tm(e){U.H=To;var n=ke!==null&&ke.next!==null;if(oa=0,pn=ke=ue=null,zl=!1,Mo=0,lr=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&Dl(e)&&(mn=!0))}function Am(e,n,a,o){ue=e;var u=0;do{if(or&&(lr=null),Mo=0,or=!1,25<=u)throw Error(s(301));if(u+=1,pn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=lg,f=n(a,o)}while(or);return f}function ES(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ue.flags|=1024),n}function cf(){var e=Hl!==0;return Hl=0,e}function uf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ff(e){if(zl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zl=!1}oa=0,pn=ke=ue=null,or=!1,Mo=Hl=0,lr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ue.memoizedState=pn=e:pn=pn.next=e,pn}function cn(){if(ke===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=pn===null?ue.memoizedState:pn.next;if(n!==null)pn=n,ke=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},pn===null?ue.memoizedState=pn=e:pn=pn.next=e}return pn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=Mo;return Mo+=1,lr===null&&(lr=[]),e=gm(lr,e,n),n=ue,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?og:Ef),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===N)return Un(e)}throw Error(s(438,String(e)))}function hf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=T;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function kl(e){var n=cn();return df(n,ke,e)}function df(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,G=null,nt=n,_t=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Me&yt)===yt:(oa&yt)===yt){var ot=nt.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===nr&&(_t=!0);else if((oa&ot)===ot){nt=nt.next,ot===nr&&(_t=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=yt,v=f):G=G.next=yt,ue.lanes|=ot,Ya|=ot;yt=nt.action,As&&a(f,yt),f=nt.hasEagerState?nt.eagerState:a(f,yt)}else ot={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=ot,v=f):G=G.next=ot,ue.lanes|=yt,Ya|=yt;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?v=f:G.next=R,!li(f,e.memoizedState)&&(mn=!0,_t&&(a=ir,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function pf(e){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);li(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Rm(e,n,a){var o=ue,u=cn(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!li((ke||u).memoizedState,a);if(v&&(u.memoizedState=a,mn=!0),u=u.queue,_f(Dm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));f||(oa&127)!==0||Cm(o,n,a)}return a}function Cm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Gl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wm(e,n,a,o){n.value=a,n.getSnapshot=o,Um(n)&&Lm(e)}function Dm(e,n,a){return a(function(){Um(n)&&Lm(e)})}function Um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function Lm(e){var n=_s(e,2);n!==null&&ai(n,e,2)}function mf(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),As){mt(!0);try{a()}finally{mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function Nm(e,n,a,o){return e.baseState=a,df(e,ke,typeof o=="function"?o:la)}function bS(e,n,a,o,u){if(Yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Om(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=U.T,v={};U.T=v;try{var R=a(u,o),G=U.S;G!==null&&G(v,R),Pm(e,n,R)}catch(nt){gf(e,n,nt)}finally{f!==null&&v.types!==null&&(f.types=v.types),U.T=f}}else try{f=a(u,o),Pm(e,n,f)}catch(nt){gf(e,n,nt)}}function Pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Im(e,n,o)},function(o){return gf(e,n,o)}):Im(e,n,a)}function Im(e,n,a){n.status="fulfilled",n.value=a,Fm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Om(e,a)))}function gf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Fm(n),n=n.next;while(n!==o)}e.action=null}function Fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Bm(e,n){return n}function zm(e,n){if(Te){var a=Ye.formState;if(a!==null){t:{var o=ue;if(Te){if(Ke){e:{for(var u=Ke,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=bi(u.nextSibling),o=u.data==="F!";break t}}Fa(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:n},a.queue=o,a=ag.bind(null,ue,o),o.dispatch=a,o=mf(!1),f=Mf.bind(null,ue,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=bS.bind(null,ue,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Hm(e){var n=cn();return Gm(n,ke,e)}function Gm(e,n,a){if(n=df(e,n,Bm)[0],e=kl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(v){throw v===ar?Nl:v}else o=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,cr(9,{destroy:void 0},TS.bind(null,u,a),null)),[o,f,e]}function TS(e,n){e.action=n}function Vm(e){var n=cn(),a=ke;if(a!==null)return Gm(n,a,e);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Gl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function km(){return cn().memoizedState}function Xl(e,n,a,o){var u=kn();ue.flags|=e,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(e,n,a,o){var u=cn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&of(o,ke.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(ue.flags|=e,u.memoizedState=cr(1|n,f,a,o))}function Xm(e,n){Xl(8390656,8,e,n)}function _f(e,n){Wl(2048,8,e,n)}function AS(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Gl(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wm(e){var n=cn().memoizedState;return AS({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ym(e,n){return Wl(4,2,e,n)}function jm(e,n){return Wl(4,4,e,n)}function qm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zm(e,n,a){a=a!=null?a.concat([e]):null,Wl(4,4,qm.bind(null,n,e),a)}function vf(){}function Km(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Qm(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=e(),As){mt(!0);try{e()}finally{mt(!1)}}return a.memoizedState=[o,n],o}function xf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Jg(),ue.lanes|=e,Ya|=e,a)}function Jm(e,n,a,o){return li(a,n)?a:rr.current!==null?(e=xf(e,a,o),li(e,n)||(mn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Me&261930)===0?(mn=!0,e.memoizedState=a):(e=Jg(),ue.lanes|=e,Ya|=e,n)}function $m(e,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=U.T,R={};U.T=R,Mf(e,!1,n,a);try{var G=u(),nt=U.S;if(nt!==null&&nt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _t=yS(G,o);bo(e,n,_t,pi(e))}else bo(e,n,o,pi(e))}catch(yt){bo(e,n,{then:function(){},status:"rejected",reason:yt},pi())}finally{H.p=f,v!==null&&R.types!==null&&(v.types=R.types),U.T=v}}function RS(){}function Sf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=tg(e).queue;$m(e,u,n,at,a===null?RS:function(){return eg(e),a(o)})}function tg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function eg(e){var n=tg(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},pi())}function yf(){return Un(Go)}function ng(){return cn().memoizedState}function ig(){return cn().memoizedState}function CS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=Ha(a);var o=Ga(n,e,a);o!==null&&(ai(o,n,a),xo(o,n,a)),n={cache:Zu()},e.payload=n;return}n=n.return}}function wS(e,n,a){var o=pi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(e)?sg(n,a):(a=Bu(e,n,a,o),a!==null&&(ai(a,e,o),rg(a,n,o)))}function ag(e,n,a){var o=pi();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))sg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,li(R,v))return Al(e,n,u,0),Ye===null&&Tl(),!1}catch{}if(a=Bu(e,n,u,o),a!==null)return ai(a,e,o),rg(a,n,o),!0}return!1}function Mf(e,n,a,o){if(o={lane:2,revertLane:th(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(n)throw Error(s(479))}else n=Bu(e,a,o,2),n!==null&&ai(n,e,2)}function Yl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function sg(e,n){or=zl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function rg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Fe(e,a)}}var To={readContext:Un,use:Vl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};To.useEffectEvent=sn;var og={readContext:Un,use:Vl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Xl(4194308,4,qm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Xl(4194308,4,e,n)},useInsertionEffect:function(e,n){Xl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var o=e();if(As){mt(!0);try{e()}finally{mt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=kn();if(a!==void 0){var u=a(n);if(As){mt(!0);try{a(n)}finally{mt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=wS.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=mf(e);var n=e.queue,a=ag.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(e,n){var a=kn();return xf(a,e,n)},useTransition:function(){var e=mf(!1);return e=$m.bind(null,ue,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=kn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Me&127)!==0||Cm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Xm(Dm.bind(null,o,f,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},wm.bind(null,o,f,a,n),null),a},useId:function(){var e=kn(),n=Ye.identifierPrefix;if(Te){var a=Vi,o=Gi;a=(o&~(1<<32-wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=MS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yf,useFormState:zm,useActionState:zm,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:hf,useCacheRefresh:function(){return kn().memoizedState=CS.bind(null,ue)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ef={readContext:Un,use:Vl,useCallback:Km,useContext:Un,useEffect:_f,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:jm,useMemo:Qm,useReducer:kl,useRef:km,useState:function(){return kl(la)},useDebugValue:vf,useDeferredValue:function(e,n){var a=cn();return Jm(a,ke.memoizedState,e,n)},useTransition:function(){var e=kl(la)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:yf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=cn();return Nm(a,ke,e,n)},useMemoCache:hf,useCacheRefresh:ig};Ef.useEffectEvent=Wm;var lg={readContext:Un,use:Vl,useCallback:Km,useContext:Un,useEffect:_f,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:jm,useMemo:Qm,useReducer:pf,useRef:km,useState:function(){return pf(la)},useDebugValue:vf,useDeferredValue:function(e,n){var a=cn();return ke===null?xf(a,e,n):Jm(a,ke.memoizedState,e,n)},useTransition:function(){var e=pf(la)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:yf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=cn();return ke!==null?Nm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:ig};lg.useEffectEvent=Wm;function bf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(ai(n,e,o),xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(ai(n,e,o),xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(e,o,a),n!==null&&(ai(n,e,a),xo(n,e,a))}};function cg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function ug(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Tf.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function fg(e){bl(e)}function hg(e){console.error(e)}function dg(e){bl(e)}function jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Af(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,n)},a}function mg(e){return e=Ha(e),e.tag=3,e}function gg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){pg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){pg(n,a,o),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function DS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 31:case 13:return Ei===null?sc():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(e,o,u)),!1}throw Error(s(435,a.tag))}return Qf(e,o,u),sc(),!1}if(Te)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xu&&(e=Error(s(422),{cause:o}),po(xi(e,a)))):(o!==Xu&&(n=Error(s(423),{cause:o}),po(xi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=xi(o,a),u=Af(e.stateNode,o,u),ef(e,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:o});if(f=xi(f,a),No===null?No=[f]:No.push(f),rn!==4&&(rn=2),n===null)return!0;o=xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Af(a.stateNode,o,e),ef(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ja===null||!ja.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mg(u),gg(u,e,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Rf=Error(s(461)),mn=!1;function Ln(e,n,a,o){n.child=e===null?Sm(n,null,a,o):Ts(n,e.child,a,o)}function _g(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return ys(n),o=lf(e,n,a,v,f,u),R=cf(),e!==null&&!mn?(uf(e,n,u),ca(e,n,u)):(Te&&R&&Vu(n),n.flags|=1,Ln(e,n,o,u),n.child)}function vg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xg(e,n,f,o,u)):(e=Cl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Pf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(v,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(f,o),e.ref=n.ref,e.return=n,n.child=e}function xg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(uo(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Pf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Cf(e,n,a,o,u)}function Sg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return yg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?Em(n,f):af(),bm(n);else return o=n.lanes=536870912,yg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ll(n,f.cachePool),Em(n,f),ka(),n.memoizedState=null):(e!==null&&Ll(n,null),af(),ka());return Ln(e,n,u,a),n.child}function Ao(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function yg(e,n,a,o,u){var f=Qu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ll(n,null),af(),bm(n),e!==null&&er(e,n,o,!0),n.childLanes=u,null}function ql(e,n){return n=Kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Mg(e,n,a){return Ts(n,e.child,null,a),e=ql(n,n.pendingProps),e.flags|=2,fi(n),n.memoizedState=null,e}function US(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=ql(n,o),n.lanes=536870912,Ao(null,e);if(rf(n),(e=Ke)?(e=O0(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Dn=n,Ke=null)):e=null,e===null)throw Fa(n);return n.lanes=536870912,null}return ql(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=Mg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||er(e,n,a,!1),u=(a&e.childLanes)!==0,mn||u){if(o=Ye,o!==null&&(v=hn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,_s(e,v),ai(o,e,v),Rf;sc(),n=Mg(e,n,a)}else e=f.treeContext,Ke=bi(v.nextSibling),Dn=n,Te=!0,Ia=null,Mi=!1,e!==null&&lm(n,e),n=ql(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Cf(e,n,a,o,u){return ys(n),a=lf(e,n,a,o,void 0,u),o=cf(),e!==null&&!mn?(uf(e,n,u),ca(e,n,u)):(Te&&o&&Vu(n),n.flags|=1,Ln(e,n,a,u),n.child)}function Eg(e,n,a,o,u,f){return ys(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(e),o=cf(),e!==null&&!mn?(uf(e,n,f),ca(e,n,f)):(Te&&o&&Vu(n),n.flags|=1,Ln(e,n,a,f),n.child)}function bg(e,n,a,o,u){if(ys(n),n.stateNode===null){var f=Qs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Un(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},$u(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Un(v):Qs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(bf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Tf.enqueueReplaceState(f,f.state,null),yo(n,o,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Rs(a,R);f.props=G;var nt=f.context,_t=a.contextType;v=Qs,typeof _t=="object"&&_t!==null&&(v=Un(_t));var yt=a.getDerivedStateFromProps;_t=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==v)&&ug(n,f,o,v),za=!1;var ot=n.memoizedState;f.state=ot,yo(n,o,f,u),So(),nt=n.memoizedState,R||ot!==nt||za?(typeof yt=="function"&&(bf(n,a,yt,o),nt=n.memoizedState),(G=za||cg(n,a,G,o,ot,nt,v))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,tf(e,n),v=n.memoizedProps,_t=Rs(a,v),f.props=_t,yt=n.pendingProps,ot=f.context,nt=a.contextType,G=Qs,typeof nt=="object"&&nt!==null&&(G=Un(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==yt||ot!==G)&&ug(n,f,o,G),za=!1,ot=n.memoizedState,f.state=ot,yo(n,o,f,u),So();var ft=n.memoizedState;v!==yt||ot!==ft||za||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof R=="function"&&(bf(n,a,R,o),ft=n.memoizedState),(_t=za||cg(n,a,_t,o,ot,ft,G)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ft,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ft,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=G,o=_t):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ts(n,e.child,null,u),n.child=Ts(n,null,a,u)):Ln(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ca(e,n,u),e}function Tg(e,n,a,o){return xs(),n.flags|=256,Ln(e,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(e){return{baseLanes:e,cachePool:pm()}}function Uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function Ag(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Va(n):ka(),(e=Ke)?(e=O0(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Dn=n,Ke=null)):e=null,e===null)throw Fa(n);return dh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ka(),u=n.mode,R=Kl({mode:"hidden",children:R},u),o=vs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,v,a),n.memoizedState=wf,Ao(null,o)):(Va(n),Lf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=Nf(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),R=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),R=vs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ts(n,e.child,null,a),o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,v,a),n.memoizedState=wf,n=Ao(null,o));else if(Va(n),dh(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var nt=v.dgst;v=nt,o=Error(s(419)),o.stack="",o.digest=v,po({value:o,source:null,stack:null}),n=Nf(e,n,a)}else if(mn||er(e,n,a,!1),v=(a&e.childLanes)!==0,mn||v){if(v=Ye,v!==null&&(o=hn(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,_s(e,o),ai(v,e,o),Rf;hh(R)||sc(),n=Nf(e,n,a)}else hh(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ke=bi(R.nextSibling),Dn=n,Te=!0,Ia=null,Mi=!1,e!==null&&lm(n,e),n=Lf(n,o.children),n.flags|=4096);return n}return u?(ka(),R=o.fallback,u=n.mode,G=e.child,nt=G.sibling,o=ia(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,nt!==null?R=ia(nt,R):(R=vs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Df(a):(u=R.cachePool,u!==null?(G=dn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=pm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Uf(e,v,a),n.memoizedState=wf,Ao(e.child,o)):(Va(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Lf(e,n){return n=Kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Kl(e,n){return e=ci(22,e,null,n),e.lanes=0,e}function Nf(e,n,a){return Ts(n,e.child,null,a),e=Lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ju(e.return,n,a)}function Of(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Cg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=ln.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,ut(ln,v),Ln(e,n,o,a),o=Te?ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,a,n);else if(e.tag===19)Rg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Of(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Of(n,!0,a,null,f,o);break;case"together":Of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function LS(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Ba(n,dn,e.memoizedState.cache),xs();break;case 27:case 5:zt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ag(e,n,a):(Va(n),e=ca(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Cg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ut(ln,ln.current),o)break;return null;case 22:return n.lanes=0,Sg(e,n,a,n.pendingProps);case 24:Ba(n,dn,e.memoizedState.cache)}return ca(e,n,a)}function wg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Pf(e,a)&&(n.flags&128)===0)return mn=!1,LS(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Te&&(n.flags&1048576)!==0&&om(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")zu(e)?(o=Rs(e,o),n.tag=1,n=bg(null,n,e,o,a)):(n.tag=0,n=Cf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===O){n.tag=11,n=_g(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=vg(null,n,e,o,a);break t}}throw n=it(e)||e,Error(s(306,n,""))}}return n;case 0:return Cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),bg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,tf(e,n),yo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ba(n,dn,o),o!==f.cache&&qu(n,[dn],a,!0),So(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Tg(e,n,o,a);break t}else if(o!==u){u=xi(Error(s(424)),n),po(u),n=Tg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=bi(e.firstChild),Dn=n,Te=!0,Ia=null,Mi=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),o===u){n=ca(e,n,a);break t}Ln(e,n,o,a)}n=n.child}return n;case 26:return Zl(e,n),e===null?(a=H0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=hc(tt.current).createElement(a),o[an]=n,o[on]=e,Nn(o,a,e),C(o),n.stateNode=o):n.memoizedState=H0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return zt(n),e===null&&Te&&(o=n.stateNode=F0(n.type,n.pendingProps,tt.current),Dn=n,Mi=!0,u=Ke,Qa(n.type)?(ph=u,Ke=bi(o.firstChild)):Ke=u),Ln(e,n,n.pendingProps.children,a),Zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Ke)&&(o=ly(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Dn=n,Ke=bi(o.firstChild),Mi=!1,u=!0):u=!1),u||Fa(n)),zt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,ch(u,f)?o=null:v!==null&&ch(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=lf(e,n,ES,null,null,a),Go._currentValue=u),Zl(e,n),Ln(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Ke)&&(a=cy(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,Ke=null,e=!0):e=!1),e||Fa(n)),null;case 13:return Ag(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ts(n,null,o,a):Ln(e,n,o,a),n.child;case 11:return _g(e,n,n.type,n.pendingProps,a);case 7:return Ln(e,n,n.pendingProps,a),n.child;case 8:return Ln(e,n,n.pendingProps.children,a),n.child;case 12:return Ln(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),Ln(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=Un(u),o=o(u),n.flags|=1,Ln(e,n,o,a),n.child;case 14:return vg(e,n,n.type,n.pendingProps,a);case 15:return xg(e,n,n.type,n.pendingProps,a);case 19:return Cg(e,n,a);case 31:return US(e,n,a);case 22:return Sg(e,n,a,n.pendingProps);case 24:return ys(n),o=Un(dn),e===null?(u=Qu(),u===null&&(u=Ye,f=Zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},$u(n),Ba(n,dn,u)):((e.lanes&a)!==0&&(tf(e,n),yo(n,null,null,a),So()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,dn,o)):(o=f.cache,Ba(n,dn,o),o!==u.cache&&qu(n,[dn],a,!0))),Ln(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function If(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(n0())e.flags|=8192;else throw bs=Ol,Ju}else e.flags&=-16777217}function Dg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W0(n))if(n0())e.flags|=8192;else throw bs=Ol,Ju}function Ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Re():536870912,e.lanes|=n,dr|=n)}function Ro(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function NS(e,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ua(n),f!==null?(Qe(n),Dg(n,f)):(Qe(n),If(n,u,null,o,a))):f?f!==e.memoizedState?(ua(n),Qe(n),Dg(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Qe(n),If(n,u,e,o,a)),null;case 27:if(ce(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=Ct.current,tr(n)?cm(n):(e=F0(u,o,a),n.stateNode=e,ua(n))}return Qe(n),null;case 5:if(ce(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(f=Ct.current,tr(n))cm(n);else{var v=hc(tt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[an]=n,f[on]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return Qe(n),If(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=tt.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||A0(e.nodeValue,a)),e||Fa(n,!0)}else e=hc(e).createTextNode(o),e[an]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=tr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[an]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),Qe(n),null);case 4:return Ht(),e===null&&ah(n.stateNode.containerInfo),Qe(n),null;case 10:return ra(n.type),Qe(n),null;case 19:if(W(ln),o=n.memoizedState,o===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ro(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Bl(e),f!==null){for(n.flags|=128,Ro(o,!1),e=f.updateQueue,n.updateQueue=e,Ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return ut(ln,ln.current&1|2),Te&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>nc&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(e=Bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ql(n,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Qe(n),null}else 2*E()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=ln.current,ut(ln,u?a&1|2:a&1),Te&&aa(n,o.treeForkCount),e):(Qe(n),null);case 22:case 23:return fi(n),sf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&W(Ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function OS(e,n){switch(ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(dn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(ln),null;case 4:return Ht(),null;case 10:return ra(n.type),null;case 22:case 23:return fi(n),sf(),e!==null&&W(Ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function Ug(e,n){switch(ku(n),n.tag){case 3:ra(dn),Ht();break;case 26:case 27:case 5:ce(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:W(ln);break;case 10:ra(n.type);break;case 22:case 23:fi(n),sf(),e!==null&&W(Ms);break;case 24:ra(dn)}}function Co(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){He(n,n.return,R)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var G=a,nt=R;try{nt()}catch(_t){He(u,G,_t)}}}o=o.next}while(o!==f)}}catch(_t){He(n,n.return,_t)}}function Lg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Mm(n,a)}catch(o){He(e,e.return,o)}}}function Ng(e,n,a){a.props=Rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function wo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){He(e,n,u)}}function ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function Og(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function Ff(e,n,a){try{var o=e.stateNode;ny(o,e.type,a,n),o[on]=n}catch(u){He(e,e.return,u)}}function Pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function Bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(zf(e,n,a),e=e.sibling;e!==null;)zf(e,n,a),e=e.sibling}function Jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Jl(e,n,a),e=e.sibling;e!==null;)Jl(e,n,a),e=e.sibling}function Ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[an]=e,n[on]=a}catch(f){He(e,e.return,f)}}var fa=!1,gn=!1,Hf=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,En=null;function PS(e,n){if(e=e.containerInfo,oh=xc,e=Zp(e),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,G=-1,nt=0,_t=0,yt=e,ot=null;e:for(;;){for(var ft;yt!==a||u!==0&&yt.nodeType!==3||(R=v+u),yt!==f||o!==0&&yt.nodeType!==3||(G=v+o),yt.nodeType===3&&(v+=yt.nodeValue.length),(ft=yt.firstChild)!==null;)ot=yt,yt=ft;for(;;){if(yt===e)break e;if(ot===a&&++nt===u&&(R=v),ot===f&&++_t===o&&(G=v),(ft=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ft}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(lh={focusedElem:e,selectionRange:a},xc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=Rs(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){He(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)fh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Bg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),o&4&&Co(5,a);break;case 1:if(da(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){He(a,a.return,v)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){He(a,a.return,v)}}o&64&&Lg(a),o&512&&wo(a,a.return);break;case 3:if(da(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(e,n)}catch(v){He(a,a.return,v)}}break;case 27:n===null&&o&4&&Ig(a);case 26:case 5:da(e,a),n===null&&o&4&&Og(a),o&512&&wo(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),o&4&&Gg(e,a);break;case 13:da(e,a),o&4&&Vg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XS.bind(null,a),uy(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||gn,u=fa;var f=gn;fa=o,(gn=n)&&!f?pa(e,a,(a.subtreeFlags&8772)!==0):da(e,a),fa=u,gn=f}break;case 30:break;default:da(e,a)}}function zg(e){var n=e.alternate;n!==null&&(e.alternate=null,zg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&no(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,ti=!1;function ha(e,n,a){for(a=a.child;a!==null;)Hg(e,n,a),a=a.sibling}function Hg(e,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:gn||ki(a,n),ha(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||ki(a,n);var o=tn,u=ti;Qa(a.type)&&(tn=a.stateNode,ti=!1),ha(e,n,a),Bo(a.stateNode),tn=o,ti=u;break;case 5:gn||ki(a,n);case 6:if(o=tn,u=ti,tn=null,ha(e,n,a),tn=o,ti=u,tn!==null)if(ti)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:tn!==null&&(ti?(e=tn,L0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):L0(tn,a.stateNode));break;case 4:o=tn,u=ti,tn=a.stateNode.containerInfo,ti=!0,ha(e,n,a),tn=o,ti=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),gn||Xa(4,a,n),ha(e,n,a);break;case 1:gn||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ng(a,n,o)),ha(e,n,a);break;case 21:ha(e,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ha(e,n,a),gn=o;break;default:ha(e,n,a)}}function Gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){He(n,n.return,a)}}}function Vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){He(n,n.return,a)}}function IS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fg),n;default:throw Error(s(435,e.tag))}}function $l(e,n){var a=IS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=WS.bind(null,e,o);o.then(u,u)}})}function ei(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){tn=R.stateNode,ti=!1;break t}break;case 5:tn=R.stateNode,ti=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,ti=!0;break t}R=R.return}if(tn===null)throw Error(s(160));Hg(f,v,u),tn=null,ti=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)kg(n,e),n=n.sibling}var Oi=null;function kg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(n,e),ni(e),o&4&&(Xa(3,e,e.return),Co(3,e),Xa(5,e,e.return));break;case 1:ei(n,e),ni(e),o&512&&(gn||a===null||ki(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Oi;if(ei(n,e),ni(e),o&512&&(gn||a===null||ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[hs]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Nn(f,o,a),f[an]=e,C(f),o=f;break t;case"link":var v=k0("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=k0("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[an]=e,C(f),o=f}e.stateNode=o}else X0(u,e.type,e.stateNode);else e.stateNode=V0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?X0(u,e.type,e.stateNode):V0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:ei(n,e),ni(e),o&512&&(gn||a===null||ki(a,a.return)),a!==null&&o&4&&Ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,e),ni(e),o&512&&(gn||a===null||ki(a,a.return)),e.flags&32){u=e.stateNode;try{xn(u,"")}catch(Wt){He(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Ff(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Hf=!0);break;case 6:if(ei(n,e),ni(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){He(e,e.return,Wt)}}break;case 3:if(mc=null,u=Oi,Oi=dc(n.containerInfo),ei(n,e),Oi=u,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Wt){He(e,e.return,Wt)}Hf&&(Hf=!1,Xg(e));break;case 4:o=Oi,Oi=dc(e.stateNode.containerInfo),ei(n,e),ni(e),Oi=o;break;case 12:ei(n,e),ni(e);break;case 31:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 13:ei(n,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ec=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=fa,_t=gn;if(fa=nt||u,gn=_t||G,ei(n,e),gn=_t,fa=nt,ni(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||fa||gn||Cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=G.stateNode;var yt=G.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){He(G,G.return,Wt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){He(G,G.return,Wt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?N0(ft,!0):N0(G.stateNode,!1)}catch(Wt){He(G,G.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(e,a))));break;case 19:ei(n,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,$l(e,o)));break;case 30:break;case 21:break;default:ei(n,e),ni(e)}}function ni(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Bf(e);Jl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(xn(v,""),a.flags&=-33);var R=Bf(e);Jl(e,R,v);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=Bf(e);zf(e,nt,G);break;default:throw Error(s(161))}}catch(_t){He(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bg(e,n.alternate,n),n=n.sibling}function Cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Cs(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ng(n,n.return,a),Cs(n);break;case 27:Bo(n.stateNode);case 26:case 5:ki(n,n.return),Cs(n);break;case 22:n.memoizedState===null&&Cs(n);break;case 30:Cs(n);break;default:Cs(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),Co(4,f);break;case 1:if(pa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){He(o,o.return,nt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)ym(G[u],R)}catch(nt){He(o,o.return,nt)}}a&&v&64&&Lg(f),wo(f,f.return);break;case 27:Ig(f);case 26:case 5:pa(u,f,a),a&&o===null&&v&4&&Og(f),wo(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&v&4&&Gg(u,f);break;case 13:pa(u,f,a),a&&v&4&&Vg(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),wo(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function Gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mo(a))}function Vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e))}function Pi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wg(e,n,a,o),n=n.sibling}function Wg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(e,n,a,o),u&2048&&Co(9,n);break;case 1:Pi(e,n,a,o);break;case 3:Pi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e)));break;case 12:if(u&2048){Pi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){He(n,n.return,G)}}else Pi(e,n,a,o);break;case 31:Pi(e,n,a,o);break;case 13:Pi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Pi(e,n,a,o):Do(e,n):f._visibility&2?Pi(e,n,a,o):(f._visibility|=2,ur(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Gf(v,n);break;case 24:Pi(e,n,a,o),u&2048&&Vf(n.alternate,n);break;default:Pi(e,n,a,o)}}function ur(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,G=o,nt=v.flags;switch(v.tag){case 0:case 11:case 15:ur(f,v,R,G,u),Co(8,v);break;case 23:break;case 22:var _t=v.stateNode;v.memoizedState!==null?_t._visibility&2?ur(f,v,R,G,u):Do(f,v):(_t._visibility|=2,ur(f,v,R,G,u)),u&&nt&2048&&Gf(v.alternate,v);break;case 24:ur(f,v,R,G,u),u&&nt&2048&&Vf(v.alternate,v);break;default:ur(f,v,R,G,u)}n=n.sibling}}function Do(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Gf(o.alternate,o);break;case 24:Do(a,o),u&2048&&Vf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function fr(e,n,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)Yg(e,n,a),e=e.sibling}function Yg(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&Uo&&e.memoizedState!==null&&My(a,Oi,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var o=Oi;Oi=dc(e.stateNode.containerInfo),fr(e,n,a),Oi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,fr(e,n,a),Uo=o):fr(e,n,a));break;default:fr(e,n,a)}}function jg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Zg(o,e)}jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qg(e),e=e.sibling}function qg(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,tc(e)):Lo(e);break;default:Lo(e)}}function tc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Zg(o,e)}jg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}e=e.sibling}}function Zg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,f=o.return;if(zg(o),o===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var FS={getCacheForType:function(e){var n=Un(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(dn).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,_e=null,Me=0,ze=0,hi=null,Wa=!1,hr=!1,kf=!1,ma=0,rn=0,Ya=0,ws=0,Xf=0,di=0,dr=0,No=null,ii=null,Wf=!1,ec=0,Kg=0,nc=1/0,ic=null,ja=null,Sn=0,qa=null,pr=null,ga=0,Yf=0,jf=null,Qg=null,Oo=0,qf=null;function pi(){return(Oe&2)!==0&&Me!==0?Me&-Me:U.T!==null?th():Kn()}function Jg(){if(di===0)if((Me&536870912)===0||Te){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),di=e}else di=536870912;return e=ui.current,e!==null&&(e.flags|=32),di}function ai(e,n,a){(e===Ye&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Za(e,Me,di,!1)),fn(e,a),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(ws|=a),rn===4&&Za(e,Me,di,!1)),Xi(e))}function $g(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?GS(e,n):Kf(e,n,!0),f=o;do{if(u===0){hr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!zS(a)){u=Kf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=No;var G=R.current.memoizedState.isDehydrated;if(G&&(mr(R,v).flags|=256),v=Kf(R,v,!1),v!==2){if(kf&&!G){R.errorRecoveryDisabledLanes|=f,ws|=f,u=4;break t}f=ii,ii=u,f!==null&&(ii===null?ii=f:ii.push.apply(ii,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){mr(e,0),Za(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,di,!Wa);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ec+300-E(),10<u)){if(Za(o,n,di,!Wa),pt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=D0(t0.bind(null,o,a,ii,ic,Wf,n,di,ws,dr,Wa,f,"Throttled",-0,0),u);break t}t0(o,a,ii,ic,Wf,n,di,ws,dr,Wa,f,null,-0,0)}}break}while(!0);Xi(e)}function t0(e,n,a,o,u,f,v,R,G,nt,_t,yt,ot,ft){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Yg(n,f,yt);var Wt=(f&62914560)===f?ec-E():(f&4194048)===f?Kg-E():0;if(Wt=Ey(yt,Wt),Wt!==null){ga=f,e.cancelPendingCommit=Wt(l0.bind(null,e,n,f,a,o,u,v,R,G,_t,yt,null,ot,ft)),Za(e,f,v,!nt);return}}l0(e,n,f,a,o,u,v,R,G)}function zS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!li(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~Xf,n&=~ws,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-wt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Ui(e,a,n)}function ac(){return(Oe&6)===0?(Po(0),!1):!0}function Zf(){if(_e!==null){if(ze===0)var e=_e.return;else e=_e,sa=Ss=null,ff(e),sr=null,_o=0,e=_e;for(;e!==null;)Ug(e.alternate,e),e=e.return;_e=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,Zf(),Ye=e,_e=a=ia(e.current,null),Me=n,ze=0,hi=null,Wa=!1,hr=Lt(e,n),kf=!1,dr=di=Xf=ws=Ya=rn=0,ii=No=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-wt(o),f=1<<u;n|=e[u],o&=~f}return ma=n,Tl(),a}function e0(e,n){ue=null,U.H=To,n===ar||n===Nl?(n=_m(),ze=3):n===Ju?(n=_m(),ze=4):ze=n===Rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,_e===null&&(rn=1,jl(e,xi(n,e.current)))}function n0(){var e=ui.current;return e===null?!0:(Me&4194048)===Me?Ei===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Ei:!1}function i0(){var e=U.H;return U.H=To,e===null?To:e}function a0(){var e=U.A;return U.A=FS,e}function sc(){rn=4,Wa||(Me&4194048)!==Me&&ui.current!==null||(hr=!0),(Ya&134217727)===0&&(ws&134217727)===0||Ye===null||Za(Ye,Me,di,!1)}function Kf(e,n,a){var o=Oe;Oe|=2;var u=i0(),f=a0();(Ye!==e||Me!==n)&&(ic=null,mr(e,n)),n=!1;var v=rn;t:do try{if(ze!==0&&_e!==null){var R=_e,G=hi;switch(ze){case 8:Zf(),v=6;break t;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var nt=ze;if(ze=0,hi=null,gr(e,R,G,nt),a&&hr){v=0;break t}break;default:nt=ze,ze=0,hi=null,gr(e,R,G,nt)}}HS(),v=rn;break}catch(_t){e0(e,_t)}while(!0);return n&&e.shellSuspendCounter++,sa=Ss=null,Oe=o,U.H=u,U.A=f,_e===null&&(Ye=null,Me=0,Tl()),v}function HS(){for(;_e!==null;)s0(_e)}function GS(e,n){var a=Oe;Oe|=2;var o=i0(),u=a0();Ye!==e||Me!==n?(ic=null,nc=E()+500,mr(e,n)):hr=Lt(e,n);t:do try{if(ze!==0&&_e!==null){n=_e;var f=hi;e:switch(ze){case 1:ze=0,hi=null,gr(e,n,f,1);break;case 2:case 9:if(mm(f)){ze=0,hi=null,r0(n);break}n=function(){ze!==2&&ze!==9||Ye!==e||(ze=7),Xi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:mm(f)?(ze=0,hi=null,r0(n)):(ze=0,hi=null,gr(e,n,f,7));break;case 5:var v=null;switch(_e.tag){case 26:v=_e.memoizedState;case 5:case 27:var R=_e;if(v?W0(v):R.stateNode.complete){ze=0,hi=null;var G=R.sibling;if(G!==null)_e=G;else{var nt=R.return;nt!==null?(_e=nt,rc(nt)):_e=null}break e}}ze=0,hi=null,gr(e,n,f,5);break;case 6:ze=0,hi=null,gr(e,n,f,6);break;case 8:Zf(),rn=6;break t;default:throw Error(s(462))}}VS();break}catch(_t){e0(e,_t)}while(!0);return sa=Ss=null,U.H=o,U.A=u,Oe=a,_e!==null?0:(Ye=null,Me=0,Tl(),rn)}function VS(){for(;_e!==null&&!Yt();)s0(_e)}function s0(e){var n=wg(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?rc(e):_e=n}function r0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Eg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Eg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:ff(n);default:Ug(a,n),n=_e=am(n,ma),n=wg(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?rc(e):_e=n}function gr(e,n,a,o){sa=Ss=null,ff(n),sr=null,_o=0;var u=n.return;try{if(DS(e,u,n,a,Me)){rn=1,jl(e,xi(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;rn=1,jl(e,xi(a,e.current)),_e=null;return}n.flags&32768?(Te||o===1?e=!0:hr||(Me&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),o0(n,e)):rc(n)}function rc(e){var n=e;do{if((n.flags&32768)!==0){o0(n,Wa);return}e=n.return;var a=NS(n.alternate,n,ma);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);rn===0&&(rn=5)}function o0(e,n){do{var a=OS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);rn=6,_e=null}function l0(e,n,a,o,u,f,v,R,G){e.cancelPendingCommit=null;do oc();while(Sn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Fu,In(e,a,f,v,R,G),e===Ye&&(_e=Ye=null,Me=0),pr=n,qa=e,ga=a,Yf=f,jf=u,Qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,YS(ht,function(){return d0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=H.p,H.p=2,v=Oe,Oe|=4;try{PS(e,n,a)}finally{Oe=v,H.p=u,U.T=o}}Sn=1,c0(),u0(),f0()}}function c0(){if(Sn===1){Sn=0;var e=qa,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=H.p;H.p=2;var u=Oe;Oe|=4;try{kg(n,e);var f=lh,v=Zp(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&qp(R.ownerDocument.documentElement,R)){if(G!==null&&Lu(R)){var nt=G.start,_t=G.end;if(_t===void 0&&(_t=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(_t,R.value.length);else{var yt=R.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Wt=R.textContent.length,ae=Math.min(G.start,Wt),We=G.end===void 0?ae:Math.min(G.end,Wt);!ft.extend&&ae>We&&(v=We,We=ae,ae=v);var Z=jp(R,ae),X=jp(R,We);if(Z&&X&&(ft.rangeCount!==1||ft.anchorNode!==Z.node||ft.anchorOffset!==Z.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var et=yt.createRange();et.setStart(Z.node,Z.offset),ft.removeAllRanges(),ae>We?(ft.addRange(et),ft.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ft.addRange(et))}}}}for(yt=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&yt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<yt.length;R++){var xt=yt[R];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}xc=!!oh,lh=oh=null}finally{Oe=u,H.p=o,U.T=a}}e.current=n,Sn=2}}function u0(){if(Sn===2){Sn=0;var e=qa,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=H.p;H.p=2;var u=Oe;Oe|=4;try{Bg(e,n.alternate,n)}finally{Oe=u,H.p=o,U.T=a}}Sn=3}}function f0(){if(Sn===4||Sn===3){Sn=0,L();var e=qa,n=pr,a=ga,o=Qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,pr=qa=null,h0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ja=null),Fn(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=H.p,H.p=2,U.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{U.T=n,H.p=u}}(ga&3)!==0&&oc(),Xi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?Oo++:(Oo=0,qf=e):Oo=0,Po(0)}}function h0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,mo(n)))}function oc(){return c0(),u0(),f0(),d0()}function d0(){if(Sn!==5)return!1;var e=qa,n=Yf;Yf=0;var a=Fn(ga),o=U.T,u=H.p;try{H.p=32>a?32:a,U.T=null,a=jf,jf=null;var f=qa,v=ga;if(Sn=0,pr=qa=null,ga=0,(Oe&6)!==0)throw Error(s(331));var R=Oe;if(Oe|=4,qg(f.current),Wg(f,f.current,v,a),Oe=R,Po(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{H.p=u,U.T=o,h0(e,n)}}function p0(e,n,a){n=xi(a,n),n=Af(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(fn(e,2),Xi(e))}function He(e,n,a){if(e.tag===3)p0(e,e,a);else for(;n!==null;){if(n.tag===3){p0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){e=xi(a,e),a=mg(2),o=Ga(n,a,2),o!==null&&(gg(a,o,n,e),fn(o,2),Xi(o));break}}n=n.return}}function Qf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new BS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kf=!0,u.add(a),e=kS.bind(null,e,n,a),n.then(e,e))}function kS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Me&a)===a&&(rn===4||rn===3&&(Me&62914560)===Me&&300>E()-ec?(Oe&2)===0&&mr(e,0):Xf|=a,dr===Me&&(dr=0)),Xi(e)}function m0(e,n){n===0&&(n=Re()),e=_s(e,n),e!==null&&(fn(e,n),Xi(e))}function XS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),m0(e,a)}function WS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),m0(e,a)}function YS(e,n){return Se(e,n)}var lc=null,_r=null,Jf=!1,cc=!1,$f=!1,Ka=0;function Xi(e){e!==_r&&e.next===null&&(_r===null?lc=_r=e:_r=_r.next=e),cc=!0,Jf||(Jf=!0,qS())}function Po(e,n){if(!$f&&cc){$f=!0;do for(var a=!1,o=lc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-wt(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,x0(o,f))}else f=Me,f=pt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Lt(o,f)||(a=!0,x0(o,f));o=o.next}while(a);$f=!1}}function jS(){g0()}function g0(){cc=Jf=!1;var e=0;Ka!==0&&ay()&&(e=Ka);for(var n=E(),a=null,o=lc;o!==null;){var u=o.next,f=_0(o,n);f===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(_r=a)):(a=o,(e!==0||(f&3)!==0)&&(cc=!0)),o=u}Sn!==0&&Sn!==5||Po(e),Ka!==0&&(Ka=0)}function _0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-wt(f),R=1<<v,G=u[v];G===-1?((R&a)===0||(R&o)!==0)&&(u[v]=ne(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=Ye,a=Me,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ye(o),Fn(a)){case 2:case 8:a=Et;break;case 32:a=ht;break;case 268435456:a=Ot;break;default:a=ht}return o=v0.bind(null,e),a=Se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ye(o),e.callbackPriority=2,e.callbackNode=null,2}function v0(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(oc()&&e.callbackNode!==a)return null;var o=Me;return o=pt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($g(e,o,n),_0(e,E()),e.callbackNode!=null&&e.callbackNode===a?v0.bind(null,e):null)}function x0(e,n){if(oc())return null;$g(e,n,!0)}function qS(){ry(function(){(Oe&6)!==0?Se(vt,jS):g0()})}function th(){if(Ka===0){var e=nr;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Ka=e}return Ka}function S0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_l(""+e)}function y0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ZS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=S0((u[on]||null).action),v=o.submitter;v&&(n=(n=v[on]||null)?S0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new yl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var G=v?y0(u,v):new FormData(u);Sf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=v?y0(u,v):new FormData(u),Sf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var eh=0;eh<Iu.length;eh++){var nh=Iu[eh],KS=nh.toLowerCase(),QS=nh[0].toUpperCase()+nh.slice(1);Ni(KS,"on"+QS)}Ni(Jp,"onAnimationEnd"),Ni($p,"onAnimationIteration"),Ni(tm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(dS,"onTransitionRun"),Ni(pS,"onTransitionStart"),Ni(mS,"onTransitionCancel"),Ni(em,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function M0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],G=R.instance,nt=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(_t){bl(_t)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(R=o[v],G=R.instance,nt=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(_t){bl(_t)}u.currentTarget=null,f=G}}}}function ve(e,n){var a=n[$i];a===void 0&&(a=n[$i]=new Set);var o=e+"__bubble";a.has(o)||(E0(n,e,2,!1),a.add(o))}function ih(e,n,a){var o=0;n&&(o|=4),E0(a,e,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function ah(e){if(!e[uc]){e[uc]=!0,q.forEach(function(a){a!=="selectionchange"&&(JS.has(a)||ih(a,!1,e),ih(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uc]||(n[uc]=!0,ih("selectionchange",!1,n))}}function E0(e,n,a,o){switch(J0(n)){case 2:var u=Ay;break;case 8:u=Ry;break;default:u=xh}a=u.bind(null,n,a,e),u=void 0,!Eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function sh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Ua(R),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}R=R.parentNode}}o=o.return}Cp(function(){var nt=f,_t=yu(a),yt=[];t:{var ot=nm.get(e);if(ot!==void 0){var ft=yl,Wt=e;switch(e){case"keypress":if(xl(a)===0)break t;case"keydown":case"keyup":ft=Wx;break;case"focusin":Wt="focus",ft=Ru;break;case"focusout":Wt="blur",ft=Ru;break;case"beforeblur":case"afterblur":ft=Ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=qx;break;case Jp:case $p:case tm:ft=Ix;break;case em:ft=Kx;break;case"scroll":case"scrollend":ft=Ux;break;case"wheel":ft=Jx;break;case"copy":case"cut":case"paste":ft=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Np;break;case"toggle":case"beforetoggle":ft=tS}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),Z=ae?ot!==null?ot+"Capture":null:ot;ae=[];for(var X=nt,et;X!==null;){var xt=X;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||Z===null||(xt=io(X,Z),xt!=null&&ae.push(Fo(X,xt,et))),We)break;X=X.return}0<ae.length&&(ot=new ft(ot,Wt,null,a,_t),yt.push({event:ot,listeners:ae}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==Su&&(Wt=a.relatedTarget||a.fromElement)&&(Ua(Wt)||Wt[Jn]))break t;if((ft||ot)&&(ot=_t.window===_t?_t:(ot=_t.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Wt=a.relatedTarget||a.toElement,ft=nt,Wt=Wt?Ua(Wt):null,Wt!==null&&(We=c(Wt),ae=Wt.tag,Wt!==We||ae!==5&&ae!==27&&ae!==6)&&(Wt=null)):(ft=null,Wt=nt),ft!==Wt)){if(ae=Up,xt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Np,xt="onPointerLeave",Z="onPointerEnter",X="pointer"),We=ft==null?ot:ds(ft),et=Wt==null?ot:ds(Wt),ot=new ae(xt,X+"leave",ft,a,_t),ot.target=We,ot.relatedTarget=et,xt=null,Ua(_t)===nt&&(ae=new ae(Z,X+"enter",Wt,a,_t),ae.target=et,ae.relatedTarget=We,xt=ae),We=xt,ft&&Wt)e:{for(ae=$S,Z=ft,X=Wt,et=0,xt=Z;xt;xt=ae(xt))et++;xt=0;for(var $t=X;$t;$t=ae($t))xt++;for(;0<et-xt;)Z=ae(Z),et--;for(;0<xt-et;)X=ae(X),xt--;for(;et--;){if(Z===X||X!==null&&Z===X.alternate){ae=Z;break e}Z=ae(Z),X=ae(X)}ae=null}else ae=null;ft!==null&&b0(yt,ot,ft,ae,!1),Wt!==null&&We!==null&&b0(yt,We,Wt,ae,!0)}}t:{if(ot=nt?ds(nt):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var De=Gp;else if(zp(ot))if(Vp)De=uS;else{De=lS;var Qt=oS}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&Li(nt.elementType)&&(De=Gp):De=cS;if(De&&(De=De(e,nt))){Hp(yt,De,a,_t);break t}Qt&&Qt(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&An(ot,"number",ot.value)}switch(Qt=nt?ds(nt):window,e){case"focusin":(zp(Qt)||Qt.contentEditable==="true")&&(qs=Qt,Nu=nt,fo=null);break;case"focusout":fo=Nu=qs=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Kp(yt,a,_t);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":Kp(yt,a,_t)}var he;if(wu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else js?Fp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Op&&a.locale!=="ko"&&(js||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&js&&(he=wp()):(Oa=_t,bu="value"in Oa?Oa.value:Oa.textContent,js=!0)),Qt=fc(nt,Ee),0<Qt.length&&(Ee=new Lp(Ee,e,null,a,_t),yt.push({event:Ee,listeners:Qt}),he?Ee.data=he:(he=Bp(a),he!==null&&(Ee.data=he)))),(he=nS?iS(e,a):aS(e,a))&&(Ee=fc(nt,"onBeforeInput"),0<Ee.length&&(Qt=new Lp("onBeforeInput","beforeinput",null,a,_t),yt.push({event:Qt,listeners:Ee}),Qt.data=he)),ZS(yt,e,nt,a,_t)}M0(yt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function fc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(e,a),u!=null&&o.unshift(Fo(e,u,f)),u=io(e,n),u!=null&&o.push(Fo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function $S(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,G=R.alternate,nt=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||nt===null||(G=nt,u?(nt=io(a,f),nt!=null&&v.unshift(Fo(a,nt,G))):u||(nt=io(a,f),nt!=null&&v.push(Fo(a,nt,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var ty=/\r\n?/g,ey=/\u0000|\uFFFD/g;function T0(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(ey,"")}function A0(e,n){return n=T0(n),T0(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":Xs(e,o,f);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_l(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_l(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=_l(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),jt(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wx.get(a)||a,jt(e,a,o))}}function rh(e,n,a,o,u,f){switch(a){case"style":Xs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xn(e,o):(typeof o=="number"||typeof o=="bigint")&&xn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[on]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):jt(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,v,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var R=f=v=u=null,G=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":v=_t;break;case"checked":G=_t;break;case"defaultChecked":nt=_t;break;case"value":f=_t;break;case"defaultValue":R=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:Xe(e,n,o,_t,a,null)}}ta(e,f,R,G,nt,v,u,!1);return;case"select":ve("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Xe(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?_i(e,!!o,n,!1):a!=null&&_i(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,n,v,R,a,null)}Rn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Xe(e,n,G,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)ve(Io[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,nt,o,a,null)}return;default:if(Li(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&rh(e,n,_t,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,n,R,o,a,null))}function ny(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,G=null,nt=null,_t=null;for(ft in a){var yt=a[ft];if(a.hasOwnProperty(ft)&&yt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=yt;default:o.hasOwnProperty(ft)||Xe(e,n,ft,null,o,yt)}}for(var ot in o){var ft=o[ot];if(yt=a[ot],o.hasOwnProperty(ot)&&(ft!=null||yt!=null))switch(ot){case"type":f=ft;break;case"name":u=ft;break;case"checked":nt=ft;break;case"defaultChecked":_t=ft;break;case"value":v=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==yt&&Xe(e,n,ot,ft,o,yt)}}Tn(e,v,R,G,nt,_t,f,u);return;case"select":ft=v=R=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==G&&Xe(e,n,u,f,o,G)}n=R,a=v,o=ft,ot!=null?_i(e,!!a,ot,!1):!!o!=!!a&&(n!=null?_i(e,!!a,n,!0):_i(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,v,u,o,f)}Be(e,ot,ft);return;case"option":for(var Wt in a)ot=a[Wt],a.hasOwnProperty(Wt)&&ot!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Xe(e,n,Wt,null,o,ot));for(G in o)ot=o[G],ft=a[G],o.hasOwnProperty(G)&&ot!==ft&&(ot!=null||ft!=null)&&(G==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Xe(e,n,G,ot,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)ot=a[ae],a.hasOwnProperty(ae)&&ot!=null&&!o.hasOwnProperty(ae)&&Xe(e,n,ae,null,o,ot);for(nt in o)if(ot=o[nt],ft=a[nt],o.hasOwnProperty(nt)&&ot!==ft&&(ot!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Xe(e,n,nt,ot,o,ft)}return;default:if(Li(n)){for(var We in a)ot=a[We],a.hasOwnProperty(We)&&ot!==void 0&&!o.hasOwnProperty(We)&&rh(e,n,We,void 0,o,ot);for(_t in o)ot=o[_t],ft=a[_t],!o.hasOwnProperty(_t)||ot===ft||ot===void 0&&ft===void 0||rh(e,n,_t,ot,o,ft);return}}for(var Z in a)ot=a[Z],a.hasOwnProperty(Z)&&ot!=null&&!o.hasOwnProperty(Z)&&Xe(e,n,Z,null,o,ot);for(yt in o)ot=o[yt],ft=a[yt],!o.hasOwnProperty(yt)||ot===ft||ot==null&&ft==null||Xe(e,n,yt,ot,o,ft)}function R0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&R0(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],nt=G.startTime;if(nt>R)break;var _t=G.transferSize,yt=G.initiatorType;_t&&R0(yt)&&(G=G.responseEnd,v+=_t*(G<R?1:(R-nt)/(G-nt)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var oh=null,lh=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ch(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uh=null;function ay(){var e=window.event;return e&&e.type==="popstate"?e===uh?!1:(uh=e,!0):(uh=null,!1)}var D0=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,U0=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof U0<"u"?function(e){return U0.resolve(null).then(e).catch(oy)}:D0;function oy(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function L0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[hs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);yr(n)}function N0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function fh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fh(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ly(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[hs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function cy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function O0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function hh(e){return e.data==="$?"||e.data==="$~"}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ph=null;function P0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function I0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function F0(e,n,a){switch(n=hc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);no(e)}var Ti=new Map,B0=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=H.d;H.d={f:fy,r:hy,D:dy,C:py,L:my,m:gy,X:vy,S:_y,M:xy};function fy(){var e=_a.f(),n=ac();return e||n}function hy(e){var n=La(e);n!==null&&n.tag===5&&n.type==="form"?eg(n):_a.r(e)}var vr=typeof document>"u"?null:document;function z0(e,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=oe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),B0.has(u)||(B0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function dy(e){_a.D(e),z0("dns-prefetch",e,null)}function py(e,n){_a.C(e,n),z0("preconnect",e,n)}function my(e,n,a){_a.L(e,n,a);var o=vr;if(o&&e&&n){var u='link[rel="preload"][as="'+oe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+oe(a.imageSizes)+'"]')):u+='[href="'+oe(e)+'"]';var f=u;switch(n){case"style":f=xr(e);break;case"script":f=Sr(e)}Ti.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ti.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function gy(e,n){_a.m(e,n);var a=vr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+oe(o)+'"][href="'+oe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!Ti.has(f)&&(e=_({rel:"modulepreload",href:e},n),Ti.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(f)))return}o=a.createElement("link"),Nn(o,"link",e),C(o),a.head.appendChild(o)}}}function _y(e,n,a){_a.S(e,n,a);var o=vr;if(o&&e){var u=Na(o).hoistableStyles,f=xr(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(zo(f)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ti.get(f))&&mh(e,a);var G=v=o.createElement("link");C(G),Nn(G,"link",e),G._p=new Promise(function(nt,_t){G.onload=nt,G.onerror=_t}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function vy(e,n){_a.X(e,n);var a=vr;if(a&&e){var o=Na(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(e=_({src:e,async:!0},n),(n=Ti.get(u))&&gh(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xy(e,n){_a.M(e,n);var a=vr;if(a&&e){var o=Na(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Ti.get(u))&&gh(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function H0(e,n,a,o){var u=(u=tt.current)?dc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Na(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var f=Na(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(zo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Ti.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(e,a),f||Sy(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Na(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+oe(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function G0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Sy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),C(n),e.head.appendChild(n))}function Sr(e){return'[src="'+oe(e)+'"]'}function Ho(e){return"script[async]"+e}function V0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+oe(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Nn(o,"style",u),pc(o,a.precedence,e),n.instance=o;case"stylesheet":u=xr(a.href);var f=e.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=G0(a),(u=Ti.get(u))&&mh(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var v=f;return v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),Nn(f,"link",o),n.state.loading|=4,pc(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Ho(f)))?(n.instance=u,C(u),u):(o=a,(u=Ti.get(f))&&(o=_({},a),gh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,e));return n.instance}function pc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mc=null;function k0(e,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[hs]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function X0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function My(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=gc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=G0(o),(u=Ti.get(u))&&mh(o,u),f=f.createElement("link"),C(f);var v=f;v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),Nn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var _h=0;function Ey(e,n){return e.stylesheets&&e.count===0&&vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&_h===0&&(_h=62500*iy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>_h?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _c=null;function vc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_c=new Map,n.forEach(by,e),_c=null,gc.call(e))}function by(e,n){if(!(n.state.loading&4)){var a=_c.get(e);if(a)var o=a.get(null);else{a=new Map,_c.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Go={$$typeof:N,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function Ty(e,n,a,o,u,f,v,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ge(0),this.hiddenUpdates=ge(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Y0(e,n,a,o,u,f,v,R,G,nt,_t,yt){return e=new Ty(e,n,a,v,G,nt,_t,yt,R),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),e.current=f,f.stateNode=e,n=Zu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},$u(f),e}function j0(e){return e?(e=Qs,e):Qs}function q0(e,n,a,o,u,f){u=j0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ga(e,o,n),a!==null&&(ai(a,e,n),xo(a,e,n))}function Z0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vh(e,n){Z0(e,n),(e=e.alternate)&&Z0(e,n)}function K0(e){if(e.tag===13||e.tag===31){var n=_s(e,67108864);n!==null&&ai(n,e,67108864),vh(e,67108864)}}function Q0(e){if(e.tag===13||e.tag===31){var n=pi();n=Zn(n);var a=_s(e,n);a!==null&&ai(a,e,n),vh(e,n)}}var xc=!0;function Ay(e,n,a,o){var u=U.T;U.T=null;var f=H.p;try{H.p=2,xh(e,n,a,o)}finally{H.p=f,U.T=u}}function Ry(e,n,a,o){var u=U.T;U.T=null;var f=H.p;try{H.p=8,xh(e,n,a,o)}finally{H.p=f,U.T=u}}function xh(e,n,a,o){if(xc){var u=Sh(o);if(u===null)sh(e,n,o,Sc,a),$0(e,o);else if(wy(u,e,n,a,o))o.stopPropagation();else if($0(e,o),n&4&&-1<Cy.indexOf(e)){for(;u!==null;){var f=La(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var G=1<<31-wt(v);R.entanglements[1]|=G,v&=~G}Xi(f),(Oe&6)===0&&(nc=E()+500,Po(0))}}break;case 31:case 13:R=_s(f,2),R!==null&&ai(R,f,2),ac(),vh(f,2)}if(f=Sh(o),f===null&&sh(e,n,o,Sc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else sh(e,n,o,null,a)}}function Sh(e){return e=yu(e),yh(e)}var Sc=null;function yh(e){if(Sc=null,e=Ua(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Sc=e,null}function J0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case vt:return 2;case Et:return 8;case ht:case Vt:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var Mh=!1,Ja=null,$a=null,ts=null,Vo=new Map,ko=new Map,es=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(e,n){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=La(n),n!==null&&K0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wy(e,n,a,o,u){switch(n){case"focusin":return Ja=Xo(Ja,e,n,a,o,u),!0;case"dragenter":return $a=Xo($a,e,n,a,o,u),!0;case"mouseover":return ts=Xo(ts,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Xo(ko.get(f)||null,e,n,a,o,u)),!0}return!1}function t_(e){var n=Ua(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Qn(e.priority,function(){Q0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Qn(e.priority,function(){Q0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Sh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Su=o,a.target.dispatchEvent(o),Su=null}else return n=La(a),n!==null&&K0(n),e.blockedOn=a,!1;n.shift()}return!0}function e_(e,n,a){yc(e)&&a.delete(n)}function Dy(){Mh=!1,Ja!==null&&yc(Ja)&&(Ja=null),$a!==null&&yc($a)&&($a=null),ts!==null&&yc(ts)&&(ts=null),Vo.forEach(e_),ko.forEach(e_)}function Mc(e,n){e.blockedOn===n&&(e.blockedOn=null,Mh||(Mh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Dy)))}var Ec=null;function n_(e){Ec!==e&&(Ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(yh(o||a)===null)continue;break}var f=La(a);f!==null&&(e.splice(n,3),n-=3,Sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(G){return Mc(G,e)}Ja!==null&&Mc(Ja,e),$a!==null&&Mc($a,e),ts!==null&&Mc(ts,e),Vo.forEach(n),ko.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[on]||null;if(typeof f=="function")v||n_(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[on]||null)R=v.formAction;else if(yh(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),n_(a)}}}function i_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Eh(e){this._internalRoot=e}bc.prototype.render=Eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=pi();q0(a,o,e,n,null,null)},bc.prototype.unmount=Eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;q0(e.current,2,null,e,null,null),ac(),n[Jn]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,e),a===0&&t_(e)}};var a_=t.version;if(a_!=="19.2.5")throw Error(s(527,a_,"19.2.5"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Uy={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Rt=Tc.inject(Uy),Dt=Tc}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=fg,f=hg,v=dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Y0(e,1,!1,null,null,a,o,null,u,f,v,i_),e[Jn]=n.current,ah(e),new Eh(n)},Yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=fg,v=hg,R=dg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Y0(e,1,!0,n,a??null,o,u,G,f,v,R,i_),n.context=j0(null),a=n.current,o=pi(),o=Zn(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,fn(n,a),Xi(n),e[Jn]=n.current,ah(e),new bc(n)},Yo.version="19.2.5",Yo}var p_;function Vy(){if(p_)return Rh.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rh.exports=Gy(),Rh.exports}var ky=Vy();const Xy={de:{header:{home:"Home",about:"Über mich",contact:"Kontakt"},hero:{kicker:"Portfolio",titlePrefix:"Hi, ich bin",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Galerie",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung: React, Angular, Vue.js und moderne Webtechnologien. Nebenbei: Video-Editing & Grafikdesign seit 2020.",ctaPrimary:"Was ich mache",ctaSecondary:"Kontakt",scroll:"Scroll"},aboutSlider:{title:"Nebenbei",categories:[{key:"all",label:"Alles"},{key:"pets",label:"Tiere"},{key:"moto",label:"Motorrad"},{key:"hike",label:"Wandern"},{key:"me",label:"Ich"}],back:"Zurück",next:"Weiter",close:"Schließen"},socialStats:{kicker:"Abseits vom Code",title:"Auch online unterwegs",subtitle:"Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs bin.",linkedinCta:"Lass uns vernetzen",latestPost:"Neuester Beitrag",tiktokPreviewCaption:"Neuester Post auf TikTok ansehen",instagramPreviewCaption:"Neuester Post auf Instagram ansehen"},projectsPreview:{kicker:"Live Vorschau",title:"Meine Projekte",subtitle:"Ein paar Einblicke in Dinge, die ich gebaut habe · klick dich durch oder öffne sie live.",previousProject:"Vorheriges Projekt",nextProject:"Nächstes Projekt",openLive:"Live öffnen",openLiveAria:r=>`${r} live öffnen`,jumpTo:r=>`Zu ${r} springen`},liveButton:{label:"Live ansehen"},about:{heading:"Über mich",lead:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung.",body:"Ich bin Junior Software Engineer und baue meistens Frontends: React, Angular oder Vue, je nachdem was der Job gerade braucht. Ans Backend fasse ich auch gern mit ran. Nebenbei schneide ich seit 2020 Videos für Social Media und designe Grafiken; mein TikTok-Kanal hat inzwischen über 20.000 Follower und 3,5 Mio. Likes gesammelt.",spotlight:{kicker:"Nebenbei: Video & Grafikdesign",heading:"TikTok @jsnuwu · eigener Kanal seit 2020",subtitle:"Konzeption, Schnitt und Gestaltung in Eigenregie",statFollowerValue:"20.800",statFollowerLabel:"Follower",statLikesValue:"3,5 Mio.",statLikesLabel:"Likes",statExperienceValue:"5 Jahre",statExperienceLabel:"Schnitt-Praxis",list:["Eigene Edits von Schnitt bis Veröffentlichung auf TikTok, YouTube und Instagram","Gefühl für Bildaufbau, Timing und Reichweite"]}},experience:{heading:"Werdegang",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · heute",bullets:["Frontend-Komponenten mit Angular und TypeScript, angebunden an bestehende PHP-Backends","Kundenwebsites mit WordPress und Elementor, erweitert um eigenen PHP- und CSS-Code","Bugfixing und Feature-Erweiterungen im laufenden Betrieb"]},{org:"adesso SE · Ausbildung",role:"Fachinformatiker für Anwendungsentwicklung",period:"09/2023 · 01/2026",bullets:["Frontend mit Angular und TypeScript, Backend mit Java, Spring Boot und PostgreSQL","Profiler (internes Produkt, 05/2025 · 12/2025): Frontend-Komponenten und UI-Bugfixes","Scrum-Team: Git, Code Reviews, JIRA, Confluence","IT-Support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"FSJ · Freiwilliges Soziales Jahr, Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Begleitung und Unterstützung von Menschen mit Behinderungen im Alltag, inklusive Freizeitaktivitäten und Ausflügen","Mitwirkung bei der Alltagsgestaltung: Kochen, Haushaltsaktivitäten und Förderung der Selbstständigkeit"]}]},skills:{heading:"Skills",groups:[{title:"Schwerpunkt Frontend",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, React, Vue.js, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, Canva, Photoshop, WordPress, Elementor"},{title:"Backend & Daten",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Arbeitsweise",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack, Microsoft 365"},{title:"Content & Social",items:"Video-Schnitt, CapCut, TikTok, YouTube, Instagram"}],languages:[{name:"Deutsch",level:"Muttersprache"},{name:"Englisch",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projekte",skillsLabel:"Skills:"},contact:{heading:"Kontakt",intro:"Ich freue mich über deine Nachricht! Schreib mir einfach eine E-Mail oder nutze das Formular unten.",send:"send",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",messagePlaceholder:"Deine Nachricht",submit:"Absenden"},tiktokShowcase:{kicker:"TikTok",title:"Ein paar Einblicke",subtitle:"Mehr davon auf TikTok ansehen",prev:"Vorheriges Video",next:"Nächstes Video",mute:"Stummschalten",unmute:"Ton an",play:"Abspielen",pause:"Pausieren",volume:"Lautstärke",jumpTo:r=>`Zu Video ${r} springen`}},en:{header:{home:"Home",about:"About",contact:"Contact"},hero:{kicker:"Portfolio",titlePrefix:"Hi, I'm",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Gallery",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer focused on frontend development: React, Angular, Vue.js and modern web technologies. On the side: video editing & graphic design since 2020.",ctaPrimary:"What I do",ctaSecondary:"Contact",scroll:"Scroll"},aboutSlider:{title:"On the side",categories:[{key:"all",label:"All"},{key:"pets",label:"Pets"},{key:"moto",label:"Motorcycles"},{key:"hike",label:"Hiking"},{key:"me",label:"Me"}],back:"Back",next:"Next",close:"Close"},socialStats:{kicker:"Beyond the code",title:"Also active online",subtitle:"A few numbers from the channels I'm active on elsewhere.",linkedinCta:"Let's connect",latestPost:"Latest post",tiktokPreviewCaption:"Watch my latest TikTok post",instagramPreviewCaption:"View my latest Instagram post"},projectsPreview:{kicker:"Live Preview",title:"My Projects",subtitle:"A few glimpses of things I've built · click through or open them live.",previousProject:"Previous project",nextProject:"Next project",openLive:"Open live",openLiveAria:r=>`Open ${r} live`,jumpTo:r=>`Jump to ${r}`},liveButton:{label:"View live"},about:{heading:"About me",lead:"Junior Software Engineer focused on frontend development.",body:"I'm a Junior Software Engineer and I mostly build frontends: React, Angular or Vue, depending on what the job needs. I'm happy to dig into the backend too. Since 2020 I've also been editing videos for social media and designing graphics on the side; my TikTok channel has grown to over 20,000 followers and 3.5M likes.",spotlight:{kicker:"On the side: Video & Graphic Design",heading:"TikTok @jsnuwu · my own channel since 2020",subtitle:"Concept, editing and design, all done myself",statFollowerValue:"20.8K",statFollowerLabel:"Followers",statLikesValue:"3.5M",statLikesLabel:"Likes",statExperienceValue:"5 years",statExperienceLabel:"Editing Experience",list:["My own edits from cut to release on TikTok, YouTube and Instagram","A feel for framing, timing and reach"]}},experience:{heading:"Experience",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · present",bullets:["Frontend components with Angular and TypeScript, wired into existing PHP backends","Client websites with WordPress and Elementor, extended with custom PHP and CSS","Bug fixing and feature work in production"]},{org:"adesso SE · Apprenticeship",role:"IT Specialist for Application Development",period:"09/2023 · 01/2026",bullets:["Frontend with Angular and TypeScript, backend with Java, Spring Boot and PostgreSQL","Profiler (internal product, 05/2025 · 12/2025): frontend components and UI bug fixes","Scrum team: Git, code reviews, JIRA, Confluence","IT support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"Voluntary Social Year (FSJ), Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Supporting and assisting people with disabilities in daily life, including leisure activities and outings","Helping shape everyday life: cooking, household activities, and fostering independence"]}]},skills:{heading:"Skills",groups:[{title:"Frontend focus",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, React, Vue.js, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, Canva, Photoshop, WordPress, Elementor"},{title:"Backend & Data",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Method",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack, Microsoft 365"},{title:"Content & Social",items:"Video editing, CapCut, TikTok, YouTube, Instagram"}],languages:[{name:"German",level:"Native"},{name:"English",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projects",skillsLabel:"Skills:"},contact:{heading:"Contact",intro:"I'd love to hear from you! Just send me an email or use the form below.",send:"send",namePlaceholder:"Your name",emailPlaceholder:"Your email",messagePlaceholder:"Your message",submit:"Send"},tiktokShowcase:{kicker:"TikTok",title:"A few glimpses",subtitle:"See more on TikTok",prev:"Previous video",next:"Next video",mute:"Mute",unmute:"Unmute",play:"Play",pause:"Pause",volume:"Volume",jumpTo:r=>`Jump to video ${r}`}}},Iv=Zt.createContext(null);function Wy({children:r}){const[t,i]=Zt.useState(()=>{const s=localStorage.getItem("lang");return s==="en"||s==="de"?s:"de"});return Zt.useEffect(()=>{localStorage.setItem("lang",t),document.documentElement.lang=t},[t]),Y.jsx(Iv.Provider,{value:{lang:t,setLang:i,t:Xy[t]},children:r})}function Yy(r,t,i){return Math.max(t,Math.min(r,i))}const Je={toVector(r,t){return r===void 0&&(r=t),Array.isArray(r)?r:[r,r]},add(r,t){return[r[0]+t[0],r[1]+t[1]]},sub(r,t){return[r[0]-t[0],r[1]-t[1]]},addTo(r,t){r[0]+=t[0],r[1]+=t[1]},subTo(r,t){r[0]-=t[0],r[1]-=t[1]}};function m_(r,t,i){return t===0||Math.abs(t)===1/0?Math.pow(r,i*5):r*t*i/(t+i*r)}function g_(r,t,i,s=.15){return s===0?Yy(r,t,i):r<t?-m_(t-r,i-t,s)+t:r>i?+m_(r-i,i-t,s)+i:r}function jy(r,[t,i],[s,l]){const[[c,h],[d,m]]=r;return[g_(t,c,h,s),g_(i,d,m,l)]}function qy(r,t){if(typeof r!="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Zy(r){var t=qy(r,"string");return typeof t=="symbol"?t:String(t)}function vn(r,t,i){return t=Zy(t),t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i,r}function __(r,t){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function en(r){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?__(Object(i),!0).forEach(function(s){vn(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):__(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}const Fv={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function v_(r){return r?r[0].toUpperCase()+r.slice(1):""}const Ky=["enter","leave"];function Qy(r=!1,t){return r&&!Ky.includes(t)}function Jy(r,t="",i=!1){const s=Fv[r],l=s&&s[t]||t;return"on"+v_(r)+v_(l)+(Qy(i,l)?"Capture":"")}const $y=["gotpointercapture","lostpointercapture"];function tM(r){let t=r.substring(2).toLowerCase();const i=!!~t.indexOf("passive");i&&(t=t.replace("passive",""));const s=$y.includes(t)?"capturecapture":"capture",l=!!~t.indexOf(s);return l&&(t=t.replace("capture","")),{device:t,capture:l,passive:i}}function eM(r,t=""){const i=Fv[r],s=i&&i[t]||t;return r+s}function du(r){return"touches"in r}function Bv(r){return du(r)?"touch":"pointerType"in r?r.pointerType:"mouse"}function nM(r){return Array.from(r.touches).filter(t=>{var i,s;return t.target===r.currentTarget||((i=r.currentTarget)===null||i===void 0||(s=i.contains)===null||s===void 0?void 0:s.call(i,t.target))})}function iM(r){return r.type==="touchend"||r.type==="touchcancel"?r.changedTouches:r.targetTouches}function zv(r){return du(r)?iM(r)[0]:r}function gd(r,t){try{const i=t.clientX-r.clientX,s=t.clientY-r.clientY,l=(t.clientX+r.clientX)/2,c=(t.clientY+r.clientY)/2,h=Math.hypot(i,s);return{angle:-(Math.atan2(i,s)*180)/Math.PI,distance:h,origin:[l,c]}}catch{}return null}function aM(r){return nM(r).map(t=>t.identifier)}function x_(r,t){const[i,s]=Array.from(r.touches).filter(l=>t.includes(l.identifier));return gd(i,s)}function Uh(r){const t=zv(r);return du(r)?t.identifier:t.pointerId}function Wr(r){const t=zv(r);return[t.clientX,t.clientY]}const S_=40,y_=800;function Hv(r){let{deltaX:t,deltaY:i,deltaMode:s}=r;return s===1?(t*=S_,i*=S_):s===2&&(t*=y_,i*=y_),[t,i]}function sM(r){var t,i;const{scrollX:s,scrollY:l,scrollLeft:c,scrollTop:h}=r.currentTarget;return[(t=s??c)!==null&&t!==void 0?t:0,(i=l??h)!==null&&i!==void 0?i:0]}function rM(r){const t={};if("buttons"in r&&(t.buttons=r.buttons),"shiftKey"in r){const{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c}=r;Object.assign(t,{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c})}return t}function ru(r,...t){return typeof r=="function"?r(...t):r}function oM(){}function lM(...r){return r.length===0?oM:r.length===1?r[0]:function(){let t;for(const i of r)t=i.apply(this,arguments)||t;return t}}function M_(r,t){return Object.assign({},t,r||{})}const cM=32;class Gv{constructor(t,i,s){this.ctrl=t,this.args=i,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:i,ingKey:s,args:l}=this;i[s]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=l,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const i=this.state,s=this.config;i._active||(this.reset(),this.computeInitial(),i._active=!0,i.target=t.target,i.currentTarget=t.currentTarget,i.lastOffset=s.from?ru(s.from,i):i.offset,i.offset=i.lastOffset,i.startTime=i.timeStamp=t.timeStamp)}computeValues(t){const i=this.state;i._values=t,i.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:i,config:s,shared:l}=this;i.args=this.args;let c=0;if(t&&(i.event=t,s.preventDefault&&t.cancelable&&i.event.preventDefault(),i.type=t.type,l.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,l.locked=!!document.pointerLockElement,Object.assign(l,rM(t)),l.down=l.pressed=l.buttons%2===1||l.touches>0,c=t.timeStamp-i.timeStamp,i.timeStamp=t.timeStamp,i.elapsedTime=i.timeStamp-i.startTime),i._active){const I=i._delta.map(Math.abs);Je.addTo(i._distance,I)}this.axisIntent&&this.axisIntent(t);const[h,d]=i._movement,[m,p]=s.threshold,{_step:g,values:_}=i;if(s.hasCustomTransform?(g[0]===!1&&(g[0]=Math.abs(h)>=m&&_[0]),g[1]===!1&&(g[1]=Math.abs(d)>=p&&_[1])):(g[0]===!1&&(g[0]=Math.abs(h)>=m&&Math.sign(h)*m),g[1]===!1&&(g[1]=Math.abs(d)>=p&&Math.sign(d)*p)),i.intentional=g[0]!==!1||g[1]!==!1,!i.intentional)return;const S=[0,0];if(s.hasCustomTransform){const[I,F]=_;S[0]=g[0]!==!1?I-g[0]:0,S[1]=g[1]!==!1?F-g[1]:0}else S[0]=g[0]!==!1?h-g[0]:0,S[1]=g[1]!==!1?d-g[1]:0;this.restrictToAxis&&!i._blocked&&this.restrictToAxis(S);const M=i.offset,b=i._active&&!i._blocked||i.active;b&&(i.first=i._active&&!i.active,i.last=!i._active&&i.active,i.active=l[this.ingKey]=i._active,t&&(i.first&&("bounds"in s&&(i._bounds=ru(s.bounds,i)),this.setup&&this.setup()),i.movement=S,this.computeOffset()));const[A,y]=i.offset,[[x,P],[N,O]]=i._bounds;i.overflow=[A<x?-1:A>P?1:0,y<N?-1:y>O?1:0],i._movementBound[0]=i.overflow[0]?i._movementBound[0]===!1?i._movement[0]:i._movementBound[0]:!1,i._movementBound[1]=i.overflow[1]?i._movementBound[1]===!1?i._movement[1]:i._movementBound[1]:!1;const B=i._active?s.rubberband||[0,0]:[0,0];if(i.offset=jy(i._bounds,i.offset,B),i.delta=Je.sub(i.offset,M),this.computeMovement(),b&&(!i.last||c>cM)){i.delta=Je.sub(i.offset,M);const I=i.delta.map(Math.abs);Je.addTo(i.distance,I),i.direction=i.delta.map(Math.sign),i._direction=i._delta.map(Math.sign),!i.first&&c>0&&(i.velocity=[I[0]/c,I[1]/c],i.timeDelta=c)}}emit(){const t=this.state,i=this.shared,s=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!s.triggerAllEvents)return;const l=this.handler(en(en(en({},i),t),{},{[this.aliasKey]:t.values}));l!==void 0&&(t.memo=l)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function uM([r,t],i){const s=Math.abs(r),l=Math.abs(t);if(s>l&&s>i)return"x";if(l>s&&l>i)return"y"}class ul extends Gv{constructor(...t){super(...t),vn(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Je.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Je.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const i=this.state,s=this.config;if(!i.axis&&t){const l=typeof s.axisThreshold=="object"?s.axisThreshold[Bv(t)]:s.axisThreshold;i.axis=uM(i._movement,l)}i._blocked=(s.lockDirection||!!s.axis)&&!i.axis||!!s.axis&&s.axis!==i.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const fM=r=>r,E_=.15,Vv={enabled(r=!0){return r},eventOptions(r,t,i){return en(en({},i.shared.eventOptions),r)},preventDefault(r=!1){return r},triggerAllEvents(r=!1){return r},rubberband(r=0){switch(r){case!0:return[E_,E_];case!1:return[0,0];default:return Je.toVector(r)}},from(r){if(typeof r=="function")return r;if(r!=null)return Je.toVector(r)},transform(r,t,i){const s=r||i.shared.transform;return this.hasCustomTransform=!!s,s||fM},threshold(r){return Je.toVector(r,0)}},hM=0,Vs=en(en({},Vv),{},{axis(r,t,{axis:i}){if(this.lockDirection=i==="lock",!this.lockDirection)return i},axisThreshold(r=hM){return r},bounds(r={}){if(typeof r=="function")return c=>Vs.bounds(r(c));if("current"in r)return()=>r.current;if(typeof HTMLElement=="function"&&r instanceof HTMLElement)return r;const{left:t=-1/0,right:i=1/0,top:s=-1/0,bottom:l=1/0}=r;return[[t,i],[s,l]]}}),b_={ArrowRight:(r,t=1)=>[r*t,0],ArrowLeft:(r,t=1)=>[-1*r*t,0],ArrowUp:(r,t=1)=>[0,-1*r*t],ArrowDown:(r,t=1)=>[0,r*t]};class dM extends ul{constructor(...t){super(...t),vn(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const i=t._bounds.getBoundingClientRect(),s=t.currentTarget.getBoundingClientRect(),l={left:i.left-s.left+t.offset[0],right:i.right-s.right+t.offset[0],top:i.top-s.top+t.offset[1],bottom:i.bottom-s.bottom+t.offset[1]};t._bounds=Vs.bounds(l)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const i=this.config,s=this.state;if(t.buttons!=null&&(Array.isArray(i.pointerButtons)?!i.pointerButtons.includes(t.buttons):i.pointerButtons!==-1&&i.pointerButtons!==t.buttons))return;const l=this.ctrl.setEventIds(t);i.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(l&&l.size>1&&s._pointerActive)&&(this.start(t),this.setupPointer(t),s._pointerId=Uh(t),s._pointerActive=!0,this.computeValues(Wr(t)),this.computeInitial(),i.preventScrollAxis&&Bv(t)!=="mouse"?(s._active=!1,this.setupScrollPrevention(t)):i.delay>0?(this.setupDelayTrigger(t),i.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const i=this.state;i._active=!0,i._preventScroll=!0,i._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const i=this.state,s=this.config;if(!i._pointerActive)return;const l=Uh(t);if(i._pointerId!==void 0&&l!==i._pointerId)return;const c=Wr(t);if(document.pointerLockElement===t.target?i._delta=[t.movementX,t.movementY]:(i._delta=Je.sub(c,i._values),this.computeValues(c)),Je.addTo(i._movement,i._delta),this.compute(t),i._delayed&&i.intentional){this.timeoutStore.remove("dragDelay"),i.active=!1,this.startPointerDrag(t);return}if(s.preventScrollAxis&&!i._preventScroll)if(i.axis)if(i.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){i._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const i=this.state,s=this.config;if(!i._active||!i._pointerActive)return;const l=Uh(t);if(i._pointerId!==void 0&&l!==i._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[c,h]=i._distance;if(i.tap=c<=s.tapsThreshold&&h<=s.tapsThreshold,i.tap&&s.filterTaps)i._force=!0;else{const[d,m]=i._delta,[p,g]=i._movement,[_,S]=s.swipe.velocity,[M,b]=s.swipe.distance,A=s.swipe.duration;if(i.elapsedTime<A){const y=Math.abs(d/i.timeDelta),x=Math.abs(m/i.timeDelta);y>_&&Math.abs(p)>M&&(i.swipe[0]=Math.sign(d)),x>S&&Math.abs(g)>b&&(i.swipe[1]=Math.sign(m))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const i=this.config,s=i.device;i.pointerLock&&t.currentTarget.requestPointerLock(),i.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,pM(t);const i=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",i),this.eventStore.add(this.sharedConfig.window,"touch","cancel",i),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const i=b_[t.key];if(i){const s=this.state,l=t.shiftKey?10:t.altKey?.1:1;this.start(t),s._delta=i(this.config.keyboardDisplacement,l),s._keyboardActive=!0,Je.addTo(s._movement,s._delta),this.compute(t),this.emit()}}keyUp(t){t.key in b_&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const i=this.config.device;t(i,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(i,"change",this.pointerMove.bind(this)),t(i,"end",this.pointerUp.bind(this)),t(i,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function pM(r){"persist"in r&&typeof r.persist=="function"&&r.persist()}const fl=typeof window<"u"&&window.document&&window.document.createElement;function kv(){return fl&&"ontouchstart"in window}function mM(){return kv()||fl&&window.navigator.maxTouchPoints>1}function gM(){return fl&&"onpointerdown"in window}function _M(){return fl&&"exitPointerLock"in window.document}function vM(){try{return"constructor"in GestureEvent}catch{return!1}}const Ci={isBrowser:fl,gesture:vM(),touch:kv(),touchscreen:mM(),pointer:gM(),pointerLock:_M()},xM=250,SM=180,yM=.5,MM=50,EM=250,bM=10,T_={mouse:0,touch:0,pen:8},TM=en(en({},Vs),{},{device(r,t,{pointer:{touch:i=!1,lock:s=!1,mouse:l=!1}={}}){return this.pointerLock=s&&Ci.pointerLock,Ci.touch&&i?"touch":this.pointerLock?"mouse":Ci.pointer&&!l?"pointer":Ci.touch?"touch":"mouse"},preventScrollAxis(r,t,{preventScroll:i}){if(this.preventScrollDelay=typeof i=="number"?i:i||i===void 0&&r?xM:void 0,!(!Ci.touchscreen||i===!1))return r||(i!==void 0?"y":void 0)},pointerCapture(r,t,{pointer:{capture:i=!0,buttons:s=1,keys:l=!0}={}}){return this.pointerButtons=s,this.keys=l,!this.pointerLock&&this.device==="pointer"&&i},threshold(r,t,{filterTaps:i=!1,tapsThreshold:s=3,axis:l=void 0}){const c=Je.toVector(r,i?s:l?1:0);return this.filterTaps=i,this.tapsThreshold=s,c},swipe({velocity:r=yM,distance:t=MM,duration:i=EM}={}){return{velocity:this.transform(Je.toVector(r)),distance:this.transform(Je.toVector(t)),duration:i}},delay(r=0){switch(r){case!0:return SM;case!1:return 0;default:return r}},axisThreshold(r){return r?en(en({},T_),r):T_},keyboardDisplacement(r=bM){return r}});function Xv(r){const[t,i]=r.overflow,[s,l]=r._delta,[c,h]=r._direction;(t<0&&s>0&&c<0||t>0&&s<0&&c>0)&&(r._movement[0]=r._movementBound[0]),(i<0&&l>0&&h<0||i>0&&l<0&&h>0)&&(r._movement[1]=r._movementBound[1])}const AM=30,RM=100;class CM extends Gv{constructor(...t){super(...t),vn(this,"ingKey","pinching"),vn(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:i,lastOffset:s}=this.state;t==="wheel"?this.state.offset=Je.add(i,s):this.state.offset=[(1+i[0])*s[0],i[1]+s[1]]}computeMovement(){const{offset:t,lastOffset:i}=this.state;this.state.movement=[t[0]/i[0],t[1]-i[1]]}axisIntent(){const t=this.state,[i,s]=t._movement;if(!t.axis){const l=Math.abs(i)*AM-Math.abs(s);l<0?t.axis="angle":l>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const i=this.state,s=this.ctrl.touchIds;if(i._active&&i._touchIds.every(c=>s.has(c))||s.size<2)return;this.start(t),i._touchIds=Array.from(s).slice(0,2);const l=x_(t,i._touchIds);l&&this.pinchStart(t,l)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const i=this.state,s=i._pointerEvents,l=this.ctrl.pointerIds;if(i._active&&Array.from(s.keys()).every(h=>l.has(h))||(s.size<2&&s.set(t.pointerId,t),i._pointerEvents.size<2))return;this.start(t);const c=gd(...Array.from(s.values()));c&&this.pinchStart(t,c)}pinchStart(t,i){const s=this.state;s.origin=i.origin,this.computeValues([i.distance,i.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const i=x_(t,this.state._touchIds);i&&this.pinchMove(t,i)}pointerMove(t){const i=this.state._pointerEvents;if(i.has(t.pointerId)&&i.set(t.pointerId,t),!this.state._active)return;const s=gd(...Array.from(i.values()));s&&this.pinchMove(t,s)}pinchMove(t,i){const s=this.state,l=s._values[1],c=i.angle-l;let h=0;Math.abs(c)>270&&(h+=Math.sign(c)),this.computeValues([i.distance,i.angle-360*h]),s.origin=i.origin,s.turns=h,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some(i=>!this.ctrl.touchIds.has(i))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const i=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch{}i._pointerEvents.has(t.pointerId)&&i._pointerEvents.delete(t.pointerId),i._active&&i._pointerEvents.size<2&&(i._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const i=this.state;i._active||(this.start(t),this.computeValues([t.scale,t.rotation]),i.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const i=this.state;this.computeValues([t.scale,t.rotation]),i.origin=[t.clientX,t.clientY];const s=i._movement;i._movement=[t.scale-1,t.rotation],i._delta=Je.sub(i._movement,s),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const i=this.config.modifierKey;i&&(Array.isArray(i)?!i.find(s=>t[s]):!t[i])||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||t.cancelable&&t.preventDefault();const s=this.state;s._delta=[-Hv(t)[1]/RM*s.offset[0],0],Je.addTo(s._movement,s._delta),Xv(s),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const i=this.config.device;i&&(t(i,"start",this[i+"Start"].bind(this)),t(i,"change",this[i+"Move"].bind(this)),t(i,"end",this[i+"End"].bind(this)),t(i,"cancel",this[i+"End"].bind(this)),t("lostPointerCapture","",this[i+"End"].bind(this))),this.config.pinchOnWheel&&t("wheel","",this.wheel.bind(this),{passive:!1})}}const wM=en(en({},Vv),{},{device(r,t,{shared:i,pointer:{touch:s=!1}={}}){if(i.target&&!Ci.touch&&Ci.gesture)return"gesture";if(Ci.touch&&s)return"touch";if(Ci.touchscreen){if(Ci.pointer)return"pointer";if(Ci.touch)return"touch"}},bounds(r,t,{scaleBounds:i={},angleBounds:s={}}){const l=h=>{const d=M_(ru(i,h),{min:-1/0,max:1/0});return[d.min,d.max]},c=h=>{const d=M_(ru(s,h),{min:-1/0,max:1/0});return[d.min,d.max]};return typeof i!="function"&&typeof s!="function"?[l(),c()]:h=>[l(h),c(h)]},threshold(r,t,i){return this.lockDirection=i.axis==="lock",Je.toVector(r,this.lockDirection?[.1,3]:0)},modifierKey(r){return r===void 0?"ctrlKey":r},pinchOnWheel(r=!0){return r}});class DM extends ul{constructor(...t){super(...t),vn(this,"ingKey","moving")}move(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(Wr(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const i=Wr(t),s=this.state;s._delta=Je.sub(i,s._values),Je.addTo(s._movement,s._delta),this.computeValues(i),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}}const UM=en(en({},Vs),{},{mouseOnly:(r=!0)=>r});class LM extends ul{constructor(...t){super(...t),vn(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const i=this.state,s=sM(t);i._delta=Je.sub(s,i._values),Je.addTo(i._movement,i._delta),this.computeValues(s),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}}const NM=Vs;class OM extends ul{constructor(...t){super(...t),vn(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const i=this.state;i._delta=Hv(t),Je.addTo(i._movement,i._delta),Xv(i),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const PM=Vs;class IM extends ul{constructor(...t){super(...t),vn(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.start(t),this.computeValues(Wr(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&t.pointerType!=="mouse")return;const i=this.state;if(!i._active)return;i._active=!1;const s=Wr(t);i._movement=i._delta=Je.sub(s,i._values),this.computeValues(s),this.compute(t),i.delta=i.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}}const FM=en(en({},Vs),{},{mouseOnly:(r=!0)=>r}),pp=new Map,_d=new Map;function BM(r){pp.set(r.key,r.engine),_d.set(r.key,r.resolver)}const zM={key:"drag",engine:dM,resolver:TM},HM={key:"hover",engine:IM,resolver:FM},GM={key:"move",engine:DM,resolver:UM},VM={key:"pinch",engine:CM,resolver:wM},kM={key:"scroll",engine:LM,resolver:NM},XM={key:"wheel",engine:OM,resolver:PM};function WM(r,t){if(r==null)return{};var i={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(t.indexOf(l)>=0)&&(i[l]=r[l]);return i}function YM(r,t){if(r==null)return{};var i=WM(r,t),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}const jM={target(r){if(r)return()=>"current"in r?r.current:r},enabled(r=!0){return r},window(r=Ci.isBrowser?window:void 0){return r},eventOptions({passive:r=!0,capture:t=!1}={}){return{passive:r,capture:t}},transform(r){return r}},qM=["target","eventOptions","window","enabled","transform"];function Qc(r={},t){const i={};for(const[s,l]of Object.entries(t))switch(typeof l){case"function":i[s]=l.call(i,r[s],s,r);break;case"object":i[s]=Qc(r[s],l);break;case"boolean":l&&(i[s]=r[s]);break}return i}function ZM(r,t,i={}){const s=r,{target:l,eventOptions:c,window:h,enabled:d,transform:m}=s,p=YM(s,qM);if(i.shared=Qc({target:l,eventOptions:c,window:h,enabled:d,transform:m},jM),t){const g=_d.get(t);i[t]=Qc(en({shared:i.shared},p),g)}else for(const g in p){const _=_d.get(g);_&&(i[g]=Qc(en({shared:i.shared},p[g]),_))}return i}class Wv{constructor(t,i){vn(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=i}add(t,i,s,l,c){const h=this._listeners,d=eM(i,s),m=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},p=en(en({},m),c);t.addEventListener(d,l,p);const g=()=>{t.removeEventListener(d,l,p),h.delete(g)};return h.add(g),g}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class KM{constructor(){vn(this,"_timeouts",new Map)}add(t,i,s=140,...l){this.remove(t),this._timeouts.set(t,window.setTimeout(i,s,...l))}remove(t){const i=this._timeouts.get(t);i&&window.clearTimeout(i)}clean(){this._timeouts.forEach(t=>{window.clearTimeout(t)}),this._timeouts.clear()}}class QM{constructor(t){vn(this,"gestures",new Set),vn(this,"_targetEventStore",new Wv(this)),vn(this,"gestureEventStores",{}),vn(this,"gestureTimeoutStores",{}),vn(this,"handlers",{}),vn(this,"config",{}),vn(this,"pointerIds",new Set),vn(this,"touchIds",new Set),vn(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),JM(this,t)}setEventIds(t){if(du(t))return this.touchIds=new Set(aM(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,i){this.handlers=t,this.nativeHandlers=i}applyConfig(t,i){this.config=ZM(t,i,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const i=this.config.shared,s={};let l;if(!(i.target&&(l=i.target(),!l))){if(i.enabled){for(const h of this.gestures){const d=this.config[h],m=A_(s,d.eventOptions,!!l);if(d.enabled){const p=pp.get(h);new p(this,t,h).bind(m)}}const c=A_(s,i.eventOptions,!!l);for(const h in this.nativeHandlers)c(h,"",d=>this.nativeHandlers[h](en(en({},this.state.shared),{},{event:d,args:t})),void 0,!0)}for(const c in s)s[c]=lM(...s[c]);if(!l)return s;for(const c in s){const{device:h,capture:d,passive:m}=tM(c);this._targetEventStore.add(l,h,"",s[c],{capture:d,passive:m})}}}}function Mr(r,t){r.gestures.add(t),r.gestureEventStores[t]=new Wv(r,t),r.gestureTimeoutStores[t]=new KM}function JM(r,t){t.drag&&Mr(r,"drag"),t.wheel&&Mr(r,"wheel"),t.scroll&&Mr(r,"scroll"),t.move&&Mr(r,"move"),t.pinch&&Mr(r,"pinch"),t.hover&&Mr(r,"hover")}const A_=(r,t,i)=>(s,l,c,h={},d=!1)=>{var m,p;const g=(m=h.capture)!==null&&m!==void 0?m:t.capture,_=(p=h.passive)!==null&&p!==void 0?p:t.passive;let S=d?s:Jy(s,l,g);i&&_&&(S+="Passive"),r[S]=r[S]||[],r[S].push(c)},$M=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function tE(r){const t={},i={},s=new Set;for(let l in r)$M.test(l)?(s.add(RegExp.lastMatch),i[l]=r[l]):t[l]=r[l];return[i,t,s]}function Er(r,t,i,s,l,c){if(!r.has(i)||!pp.has(s))return;const h=i+"Start",d=i+"End",m=p=>{let g;return p.first&&h in t&&t[h](p),i in t&&(g=t[i](p)),p.last&&d in t&&t[d](p),g};l[s]=m,c[s]=c[s]||{}}function eE(r,t){const[i,s,l]=tE(r),c={};return Er(l,i,"onDrag","drag",c,t),Er(l,i,"onWheel","wheel",c,t),Er(l,i,"onScroll","scroll",c,t),Er(l,i,"onPinch","pinch",c,t),Er(l,i,"onMove","move",c,t),Er(l,i,"onHover","hover",c,t),{handlers:c,config:t,nativeHandlers:s}}function nE(r,t={},i,s){const l=Ah.useMemo(()=>new QM(r),[]);if(l.applyHandlers(r,s),l.applyConfig(t,i),Ah.useEffect(l.effect.bind(l)),Ah.useEffect(()=>l.clean.bind(l),[]),t.target===void 0)return l.bind.bind(l)}function iE(r){return r.forEach(BM),function(i,s){const{handlers:l,nativeHandlers:c,config:h}=eE(i,s||{});return nE(l,h,void 0,c)}}function aE(r,t){return iE([zM,VM,kM,XM,GM,HM])(r,t||{})}function Yv(){const r=Zt.useContext(Iv);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r}const mp="182",sE=0,R_=1,rE=2,Jc=1,oE=2,el=3,fs=0,ri=1,Ea=2,Ta=0,kr=1,C_=2,w_=3,D_=4,lE=5,Fs=100,cE=101,uE=102,fE=103,hE=104,dE=200,pE=201,mE=202,gE=203,vd=204,xd=205,_E=206,vE=207,xE=208,SE=209,yE=210,ME=211,EE=212,bE=213,TE=214,Sd=0,yd=1,Md=2,Yr=3,Ed=4,bd=5,Td=6,Ad=7,jv=0,AE=1,RE=2,Zi=0,qv=1,Zv=2,Kv=3,Qv=4,Jv=5,$v=6,tx=7,ex=300,Gs=301,jr=302,Rd=303,Cd=304,pu=306,wd=1e3,ba=1001,Dd=1002,Pn=1003,CE=1004,Ac=1005,Vn=1006,Lh=1007,zs=1008,Di=1009,nx=1010,ix=1011,sl=1012,gp=1013,Qi=1014,ji=1015,Ra=1016,_p=1017,vp=1018,rl=1020,ax=35902,sx=35899,rx=1021,ox=1022,Hi=1023,Ca=1026,Hs=1027,lx=1028,xp=1029,qr=1030,Sp=1031,yp=1033,$c=33776,tu=33777,eu=33778,nu=33779,Ud=35840,Ld=35841,Nd=35842,Od=35843,Pd=36196,Id=37492,Fd=37496,Bd=37488,zd=37489,Hd=37490,Gd=37491,Vd=37808,kd=37809,Xd=37810,Wd=37811,Yd=37812,jd=37813,qd=37814,Zd=37815,Kd=37816,Qd=37817,Jd=37818,$d=37819,tp=37820,ep=37821,np=36492,ip=36494,ap=36495,sp=36283,rp=36284,op=36285,lp=36286,wE=3200,DE=0,UE=1,cs="",Ri="srgb",Zr="srgb-linear",ou="linear",Ge="srgb",br=7680,U_=519,LE=512,NE=513,OE=514,Mp=515,PE=516,IE=517,Ep=518,FE=519,L_=35044,N_="300 es",qi=2e3,lu=2001;function cx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function BE(){const r=cu("canvas");return r.style.display="block",r}const O_={};function P_(...r){const t="THREE."+r.shift();console.log(t,...r)}function re(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ce(...r){const t="THREE."+r.shift();console.error(t,...r)}function ol(...r){const t=r.join(" ");t in O_||(O_[t]=!0,re(...r))}function zE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Qr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let I_=1234567;const il=Math.PI/180,ll=180/Math.PI;function Jr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function be(r,t,i){return Math.max(t,Math.min(i,r))}function bp(r,t){return(r%t+t)%t}function HE(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function GE(r,t,i){return r!==t?(i-r)/(t-r):0}function al(r,t,i){return(1-i)*r+i*t}function VE(r,t,i,s){return al(r,t,1-Math.exp(-i*s))}function kE(r,t=1){return t-Math.abs(bp(r,t*2)-t)}function XE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function WE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function YE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function jE(r,t){return r+Math.random()*(t-r)}function qE(r){return r*(.5-Math.random())}function ZE(r){r!==void 0&&(I_=r);let t=I_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function KE(r){return r*il}function QE(r){return r*ll}function JE(r){return(r&r-1)===0&&r!==0}function $E(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function eb(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),g=h((t+s)/2),_=c((t-s)/2),S=h((t-s)/2),M=c((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*S,d*p);break;case"YZY":r.set(m*S,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*S,d*g,d*p);break;case"XZX":r.set(d*g,m*b,m*M,d*p);break;case"YXY":r.set(m*M,d*g,m*b,d*p);break;case"ZYZ":r.set(m*b,m*M,d*g,d*p);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Gr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nh={DEG2RAD:il,RAD2DEG:ll,generateUUID:Jr,clamp:be,euclideanModulo:bp,mapLinear:HE,inverseLerp:GE,lerp:al,damp:VE,pingpong:kE,smoothstep:XE,smootherstep:WE,randInt:YE,randFloat:jE,randFloatSpread:qE,seededRandom:ZE,degToRad:KE,radToDeg:QE,isPowerOfTwo:JE,ceilPowerOfTwo:$E,floorPowerOfTwo:tb,setQuaternionFromProperEuler:eb,normalize:Wn,denormalize:Gr};class Ve{constructor(t=0,i=0){Ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],S=c[h+0],M=c[h+1],b=c[h+2],A=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=A;return}if(_!==A||m!==S||p!==M||g!==b){let y=m*S+p*M+g*b+_*A;y<0&&(S=-S,M=-M,b=-b,A=-A,y=-y);let x=1-d;if(y<.9995){const P=Math.acos(y),N=Math.sin(P);x=Math.sin(x*P)/N,d=Math.sin(d*P)/N,m=m*x+S*d,p=p*x+M*d,g=g*x+b*d,_=_*x+A*d}else{m=m*x+S*d,p=p*x+M*d,g=g*x+b*d,_=_*x+A*d;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],S=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*M-p*S,t[i+1]=m*b+g*S+p*_-d*M,t[i+2]=p*b+g*M+d*S-m*_,t[i+3]=g*b-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),S=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"YXZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"ZXY":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"ZYX":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"YZX":this._x=S*g*_+p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_-S*M*b;break;case"XZY":this._x=S*g*_-p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_+S*M*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=s+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,i=0,s=0){st.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(F_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(F_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Oh.copy(this).projectOnVector(t),this.sub(Oh)}reflect(t){return this.sub(Oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new st,F_=new hl;class de{constructor(t,i,s,l,c,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],S=s[2],M=s[5],b=s[8],A=l[0],y=l[3],x=l[6],P=l[1],N=l[4],O=l[7],B=l[2],I=l[5],F=l[8];return c[0]=h*A+d*P+m*B,c[3]=h*y+d*N+m*I,c[6]=h*x+d*O+m*F,c[1]=p*A+g*P+_*B,c[4]=p*y+g*N+_*I,c[7]=p*x+g*O+_*F,c[2]=S*A+M*P+b*B,c[5]=S*y+M*N+b*I,c[8]=S*x+M*O+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,S=d*m-g*c,M=p*c-h*m,b=i*_+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=_*A,t[1]=(l*p-g*s)*A,t[2]=(d*s-l*h)*A,t[3]=S*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ph.makeScale(t,i)),this}rotate(t){return this.premultiply(Ph.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ph.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ph=new de,B_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nb(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:B_,fromXYZ:z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:t,whitePoint:s,transfer:Ge,toXYZ:B_,fromXYZ:z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),r}const we=nb();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class ib{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=cu("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Aa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ab=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Ih(l[h].image)):c.push(Ih(l[h]))}else c=Ih(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ih(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ib.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let sb=0;const Fh=new st;class jn extends Qr{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=ba,l=ba,c=Vn,h=zs,d=Hi,m=Di,p=jn.DEFAULT_ANISOTROPY,g=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Jr(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ex)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wd:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case Dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wd:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case Dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=ex;jn.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,i=0,s=0,l=1){un.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],b=m[9],A=m[2],y=m[6],x=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+A)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,B=(x+1)/2,I=(g+S)/4,F=(_+A)/4,$=(b+y)/4;return N>O&&N>B?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=I/s,c=F/s):O>B?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=I/l,c=$/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=F/c,l=$/c),this.set(s,l,c,i),this}let P=Math.sqrt((y-b)*(y-b)+(_-A)*(_-A)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(_-A)/P,this.z=(S-g)/P,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rb extends Qr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,t,i),this.scissorTest=!1,this.viewport=new un(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new jn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends rb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ux extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ob extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(t=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ii):Ii.fromBufferAttribute(c,h),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Cc.subVectors(this.max,jo),Ar.subVectors(t.a,jo),Rr.subVectors(t.b,jo),Cr.subVectors(t.c,jo),is.subVectors(Rr,Ar),as.subVectors(Cr,Rr),Ds.subVectors(Ar,Cr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ds.z,Ds.y,is.z,0,-is.x,as.z,0,-as.x,Ds.z,0,-Ds.x,-is.y,is.x,0,-as.y,as.x,0,-Ds.y,Ds.x,0];return!Bh(i,Ar,Rr,Cr,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Bh(i,Ar,Rr,Cr,Cc))?!1:(wc.crossVectors(is,as),i=[wc.x,wc.y,wc.z],Bh(i,Ar,Rr,Cr,Cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new st,new st,new st,new st,new st,new st,new st,new st],Ii=new st,Rc=new dl,Ar=new st,Rr=new st,Cr=new st,is=new st,as=new st,Ds=new st,jo=new st,Cc=new st,wc=new st,Us=new st;function Bh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Us.fromArray(r,c);const d=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),p=i.dot(Us),g=s.dot(Us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const lb=new dl,qo=new st,zh=new st;class pl{constructor(t=new st,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):lb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(zh)),this.expandByPoint(qo.copy(t.center).sub(zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const xa=new st,Hh=new st,Dc=new st,ss=new st,Gh=new st,Uc=new st,Vh=new st;class mu{constructor(t=new st,i=new st(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Hh.copy(t).add(i).multiplyScalar(.5),Dc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(Hh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Dc),d=ss.dot(this.direction),m=-ss.dot(Dc),p=ss.lengthSq(),g=Math.abs(1-h*h);let _,S,M,b;if(g>0)if(_=h*m-d,S=h*d-m,b=c*g,_>=0)if(S>=-b)if(S<=b){const A=1/g;_*=A,S*=A,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Hh).addScaledVector(Dc,S),M}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,s,l,c){Gh.subVectors(i,t),Uc.subVectors(s,t),Vh.crossVectors(Gh,Uc);let h=this.direction.dot(Vh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ss.subVectors(this.origin,t);const m=d*this.direction.dot(Uc.crossVectors(ss,Uc));if(m<0)return null;const p=d*this.direction.dot(Gh.cross(ss));if(p<0||m+p>h)return null;const g=-d*ss.dot(Vh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,s,l,c,h,d,m,p,g,_,S,M,b,A,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,S,M,b,A,y)}set(t,i,s,l,c,h,d,m,p,g,_,S,M,b,A,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=S,x[3]=M,x[7]=b,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),h=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*g,M=h*_,b=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,M=m*_,b=p*g,A=p*_;i[0]=S+A*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=A+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,M=m*_,b=p*g,A=p*_;i[0]=S-A*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=A-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,M=h*_,b=d*g,A=d*_;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+A,i[1]=m*_,i[5]=A*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=A-S*_,i[8]=b*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+b,i[10]=S-A*_}else if(t.order==="XZY"){const S=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+A,i[5]=h*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=A*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cb,t,ub)}lookAt(t,i,s){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),rs.crossVectors(s,mi),rs.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),rs.crossVectors(s,mi)),rs.normalize(),Lc.crossVectors(mi,rs),l[0]=rs.x,l[4]=Lc.x,l[8]=mi.x,l[1]=rs.y,l[5]=Lc.y,l[9]=mi.y,l[2]=rs.z,l[6]=Lc.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],S=s[9],M=s[13],b=s[2],A=s[6],y=s[10],x=s[14],P=s[3],N=s[7],O=s[11],B=s[15],I=l[0],F=l[4],$=l[8],w=l[12],T=l[1],z=l[5],K=l[9],Q=l[13],it=l[2],lt=l[6],U=l[10],H=l[14],at=l[3],At=l[7],bt=l[11],D=l[15];return c[0]=h*I+d*T+m*it+p*at,c[4]=h*F+d*z+m*lt+p*At,c[8]=h*$+d*K+m*U+p*bt,c[12]=h*w+d*Q+m*H+p*D,c[1]=g*I+_*T+S*it+M*at,c[5]=g*F+_*z+S*lt+M*At,c[9]=g*$+_*K+S*U+M*bt,c[13]=g*w+_*Q+S*H+M*D,c[2]=b*I+A*T+y*it+x*at,c[6]=b*F+A*z+y*lt+x*At,c[10]=b*$+A*K+y*U+x*bt,c[14]=b*w+A*Q+y*H+x*D,c[3]=P*I+N*T+O*it+B*at,c[7]=P*F+N*z+O*lt+B*At,c[11]=P*$+N*K+O*U+B*bt,c[15]=P*w+N*Q+O*H+B*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],M=t[14],b=t[3],A=t[7],y=t[11],x=t[15],P=m*M-p*S,N=d*M-p*_,O=d*S-m*_,B=h*M-p*g,I=h*S-m*g,F=h*_-d*g;return i*(A*P-y*N+x*O)-s*(b*P-y*B+x*I)+l*(b*N-A*B+x*F)-c*(b*O-A*I+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],M=t[11],b=t[12],A=t[13],y=t[14],x=t[15],P=_*y*p-A*S*p+A*m*M-d*y*M-_*m*x+d*S*x,N=b*S*p-g*y*p-b*m*M+h*y*M+g*m*x-h*S*x,O=g*A*p-b*_*p+b*d*M-h*A*M-g*d*x+h*_*x,B=b*_*m-g*A*m-b*d*S+h*A*S+g*d*y-h*_*y,I=i*P+s*N+l*O+c*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return t[0]=P*F,t[1]=(A*S*c-_*y*c-A*l*M+s*y*M+_*l*x-s*S*x)*F,t[2]=(d*y*c-A*m*c+A*l*p-s*y*p-d*l*x+s*m*x)*F,t[3]=(_*m*c-d*S*c-_*l*p+s*S*p+d*l*M-s*m*M)*F,t[4]=N*F,t[5]=(g*y*c-b*S*c+b*l*M-i*y*M-g*l*x+i*S*x)*F,t[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*x-i*m*x)*F,t[7]=(h*S*c-g*m*c+g*l*p-i*S*p-h*l*M+i*m*M)*F,t[8]=O*F,t[9]=(b*_*c-g*A*c-b*s*M+i*A*M+g*s*x-i*_*x)*F,t[10]=(h*A*c-b*d*c+b*s*p-i*A*p-h*s*x+i*d*x)*F,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*M-i*d*M)*F,t[12]=B*F,t[13]=(g*A*l-b*_*l+b*s*S-i*A*S-g*s*y+i*_*y)*F,t[14]=(b*d*l-h*A*l-b*s*m+i*A*m+h*s*y-i*d*y)*F,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*S+i*d*S)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,S=c*p,M=c*g,b=c*_,A=h*g,y=h*_,x=d*_,P=m*p,N=m*g,O=m*_,B=s.x,I=s.y,F=s.z;return l[0]=(1-(A+x))*B,l[1]=(M+O)*B,l[2]=(b-N)*B,l[3]=0,l[4]=(M-O)*I,l[5]=(1-(S+x))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(b+N)*F,l[9]=(y-P)*F,l[10]=(1-(S+A))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=wr.set(l[0],l[1],l[2]).length();const h=wr.set(l[4],l[5],l[6]).length(),d=wr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Fi.copy(this);const p=1/c,g=1/h,_=1/d;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=qi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(d===qi)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===lu)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=qi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(d===qi)b=-2/(h-c),A=-(h+c)/(h-c);else if(d===lu)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const wr=new st,Fi=new nn,cb=new st(0,0,0),ub=new st(1,1,1),rs=new st,Lc=new st,mi=new st,H_=new nn,G_=new hl;class wa{constructor(t=0,i=0,s=0,l=wa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return H_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return G_.setFromEuler(this),this.setFromQuaternion(G_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wa.DEFAULT_ORDER="XYZ";class Ap{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fb=0;const V_=new st,Dr=new hl,Sa=new nn,Nc=new st,Zo=new st,hb=new st,db=new hl,k_=new st(1,0,0),X_=new st(0,1,0),W_=new st(0,0,1),Y_={type:"added"},pb={type:"removed"},Ur={type:"childadded",child:null},kh={type:"childremoved",child:null};class qn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new st,i=new wa,s=new hl,l=new st(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new de}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(k_,t)}rotateY(t){return this.rotateOnAxis(X_,t)}rotateZ(t){return this.rotateOnAxis(W_,t)}translateOnAxis(t,i){return V_.copy(t).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(k_,t)}translateY(t){return this.translateOnAxis(X_,t)}translateZ(t){return this.translateOnAxis(W_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Nc.copy(t):Nc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(Zo,Nc,this.up):Sa.lookAt(Nc,Zo,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Dr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pb),kh.child=t,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,hb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,db,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new st(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new st,ya=new st,Xh=new st,Ma=new st,Lr=new st,Nr=new st,j_=new st,Wh=new st,Yh=new st,jh=new st,qh=new un,Zh=new un,Kh=new un;class zi{constructor(t=new st,i=new st,s=new st){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Bi.subVectors(l,i),ya.subVectors(s,i),Xh.subVectors(t,i);const h=Bi.dot(Bi),d=Bi.dot(ya),m=Bi.dot(Xh),p=ya.dot(ya),g=ya.dot(Xh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(h,Ma.y),m.addScaledVector(d,Ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return qh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),qh.fromBufferAttribute(t,i),Zh.fromBufferAttribute(t,s),Kh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(qh,c.x),h.addScaledVector(Zh,c.y),h.addScaledVector(Kh,c.z),h}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),ya.subVectors(t,i),Bi.cross(ya).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Bi.cross(ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return zi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Lr.subVectors(l,s),Nr.subVectors(c,s),Wh.subVectors(t,s);const m=Lr.dot(Wh),p=Nr.dot(Wh);if(m<=0&&p<=0)return i.copy(s);Yh.subVectors(t,l);const g=Lr.dot(Yh),_=Nr.dot(Yh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Lr,h);jh.subVectors(t,c);const M=Lr.dot(jh),b=Nr.dot(jh);if(b>=0&&M<=b)return i.copy(c);const A=M*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Nr,d);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return j_.subVectors(c,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(j_,d);const x=1/(y+A+S);return h=A*x,d=S*x,i.copy(s).addScaledVector(Lr,h).addScaledVector(Nr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Qh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=bp(t,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Qh(h,c,t+1/3),this.g=Qh(h,c,t),this.b=Qh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=Ri){function s(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ri){const s=fx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ri){return we.workingToColorSpace(Gn.copy(this),t),Math.round(be(Gn.r*255,0,255))*65536+Math.round(be(Gn.g*255,0,255))*256+Math.round(be(Gn.b*255,0,255))}getHexString(t=Ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Ri){we.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==Ri?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(Oc);const s=al(os.h,Oc.h,i),l=al(os.s,Oc.s,i),c=al(os.l,Oc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new xe;xe.NAMES=fx;let mb=0;class $r extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=kr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==vd&&(s.blendSrc=this.blendSrc),this.blendDst!==xd&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hx extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _n=new st,Pc=new Ve;let gb=0;class si{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=L_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(t),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Gr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==L_&&(t.usage=this.usage),t}}class dx extends si{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class px extends si{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class oi extends si{constructor(t,i,s){super(new Float32Array(t),i,s)}}let _b=0;const Ai=new nn,Jh=new qn,Or=new st,gi=new dl,Ko=new dl,bn=new st;class On extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cx(t)?px:dx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,i,s){return Ai.makeTranslation(t,i,s),this.applyMatrix4(Ai),this}scale(t,i,s){return Ai.makeScale(t,i,s),this.applyMatrix4(Ai),this}lookAt(t){return Jh.lookAt(t),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new oi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(gi.min,Ko.min),gi.expandByPoint(bn),bn.addVectors(gi.max,Ko.max),gi.expandByPoint(bn)):(gi.expandByPoint(Ko.min),gi.expandByPoint(Ko.max))}gi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)bn.fromBufferAttribute(d,p),m&&(Or.fromBufferAttribute(t,p),bn.add(Or)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let $=0;$<s.count;$++)d[$]=new st,m[$]=new st;const p=new st,g=new st,_=new st,S=new Ve,M=new Ve,b=new Ve,A=new st,y=new st;function x($,w,T){p.fromBufferAttribute(s,$),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,T),S.fromBufferAttribute(c,$),M.fromBufferAttribute(c,w),b.fromBufferAttribute(c,T),g.sub(p),_.sub(p),M.sub(S),b.sub(S);const z=1/(M.x*b.y-b.x*M.y);isFinite(z)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(z),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(z),d[$].add(A),d[w].add(A),d[T].add(A),m[$].add(y),m[w].add(y),m[T].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let $=0,w=P.length;$<w;++$){const T=P[$],z=T.start,K=T.count;for(let Q=z,it=z+K;Q<it;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const N=new st,O=new st,B=new st,I=new st;function F($){B.fromBufferAttribute(l,$),I.copy(B);const w=d[$];N.copy(w),N.sub(B.multiplyScalar(B.dot(w))).normalize(),O.crossVectors(I,w);const z=O.dot(m[$])<0?-1:1;h.setXYZW($,N.x,N.y,N.z,z)}for(let $=0,w=P.length;$<w;++$){const T=P[$],z=T.start,K=T.count;for(let Q=z,it=z+K;Q<it;Q+=3)F(t.getX(Q+0)),F(t.getX(Q+1)),F(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new st,c=new st,h=new st,d=new st,m=new st,p=new st,g=new st,_=new st;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),A=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let x=0;x<g;x++)S[b++]=p[M++]}return new si(S,g,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new On,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const q_=new nn,Ls=new mu,Ic=new pl,Z_=new st,Fc=new st,Bc=new st,zc=new st,$h=new st,Hc=new st,K_=new st,Gc=new st;class Da extends qn{constructor(t=new On,i=new hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&($h.fromBufferAttribute(_,t),h?Hc.addScaledVector($h,g):Hc.addScaledVector($h.sub(i),g))}i.add(Hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(Ic.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ic,Z_)===null||Ls.origin.distanceToSquared(Z_)>(t.far-t.near)**2))&&(q_.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(q_),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let O=P,B=N;O<B;O+=3){const I=d.getX(O),F=d.getX(O+1),$=d.getX(O+2);l=Vc(this,x,t,s,p,g,_,I,F,$),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=b,x=A;y<x;y+=3){const P=d.getX(y),N=d.getX(y+1),O=d.getX(y+2);l=Vc(this,h,t,s,p,g,_,P,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=P,B=N;O<B;O+=3){const I=O,F=O+1,$=O+2;l=Vc(this,x,t,s,p,g,_,I,F,$),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=b,x=A;y<x;y+=3){const P=y,N=y+1,O=y+2;l=Vc(this,h,t,s,p,g,_,P,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vb(r,t,i,s,l,c,h,d){let m;if(t.side===ri?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===fs,d),m===null)return null;Gc.copy(d),Gc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Gc);return p<i.near||p>i.far?null:{distance:p,point:Gc.clone(),object:r}}function Vc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Fc),r.getVertexPosition(m,Bc),r.getVertexPosition(p,zc);const g=vb(r,t,i,s,Fc,Bc,zc,K_);if(g){const _=new st;zi.getBarycoord(K_,Fc,Bc,zc,_),l&&(g.uv=zi.getInterpolatedAttribute(l,d,m,p,_,new Ve)),c&&(g.uv1=zi.getInterpolatedAttribute(c,d,m,p,_,new Ve)),h&&(g.normal=zi.getInterpolatedAttribute(h,d,m,p,_,new st),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new st,materialIndex:0};zi.getNormal(Fc,Bc,zc,S.normal),g.face=S,g.barycoord=_}return g}class ml extends On{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(p,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(_,2));function b(A,y,x,P,N,O,B,I,F,$,w){const T=O/F,z=B/$,K=O/2,Q=B/2,it=I/2,lt=F+1,U=$+1;let H=0,at=0;const At=new st;for(let bt=0;bt<U;bt++){const D=bt*z-Q;for(let W=0;W<lt;W++){const ut=W*T-K;At[A]=ut*P,At[y]=D*N,At[x]=it,p.push(At.x,At.y,At.z),At[A]=0,At[y]=0,At[x]=I>0?1:-1,g.push(At.x,At.y,At.z),_.push(W/F),_.push(1-bt/$),H+=1}}for(let bt=0;bt<$;bt++)for(let D=0;D<F;D++){const W=S+D+lt*bt,ut=S+D+lt*(bt+1),Ct=S+(D+1)+lt*(bt+1),Ft=S+(D+1)+lt*bt;m.push(W,ut,Ft),m.push(ut,Ct,Ft),at+=6}d.addGroup(M,at,w),M+=at,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Yn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function xb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function mx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Sb={clone:Kr,merge:Yn};var yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=xb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class gx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new st,Q_=new Ve,J_=new Ve;class wi extends gx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ll*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,Q_,J_),i.subVectors(J_,Q_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(il*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Pr=-90,Ir=1;class Eb extends qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new wi(Pr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new wi(Pr,Ir,t,i);c.layers=this.layers,this.add(c);const h=new wi(Pr,Ir,t,i);h.layers=this.layers,this.add(h);const d=new wi(Pr,Ir,t,i);d.layers=this.layers,this.add(d);const m=new wi(Pr,Ir,t,i);m.layers=this.layers,this.add(m);const p=new wi(Pr,Ir,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class _x extends jn{constructor(t=[],i=Gs,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vx extends Ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _x(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ml(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ri,blending:Ta});c.uniforms.tEquirect.value=i;const h=new Da(l,c),d=i.minFilter;return i.minFilter===zs&&(i.minFilter=Vn),new Eb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Vr extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,s),x=this._getHandJoint(p,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Vr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class uu{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(t),this.density=i}clone(){return new uu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wa,this.environmentIntensity=1,this.environmentRotation=new wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ab extends jn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Pn,g=Pn,_,S){super(null,h,d,m,p,g,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ed=new st,Rb=new st,Cb=new de;class Is{constructor(t=new st(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ed.subVectors(s,i).cross(Rb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(ed),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Cb.getNormalMatrix(t),l=this.coplanarPoint(ed).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new pl,wb=new Ve(.5,.5),kc=new st;class xx{constructor(t=new Is,i=new Is,s=new Is,l=new Is,c=new Is,h=new Is){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],M=c[7],b=c[8],A=c[9],y=c[10],x=c[11],P=c[12],N=c[13],O=c[14],B=c[15];if(l[0].setComponents(p-h,M-g,x-b,B-P).normalize(),l[1].setComponents(p+h,M+g,x+b,B+P).normalize(),l[2].setComponents(p+d,M+_,x+A,B+N).normalize(),l[3].setComponents(p-d,M-_,x-A,B-N).normalize(),s)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,M-S,x-y,B-O).normalize();else if(l[4].setComponents(p-m,M-S,x-y,B-O).normalize(),i===qi)l[5].setComponents(p+m,M+S,x+y,B+O).normalize();else if(i===lu)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);const i=wb.distanceTo(t.center);return Ns.radius=.7071067811865476+i,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?t.max.x:t.min.x,kc.y=l.normal.y>0?t.max.y:t.min.y,kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends $r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new st,hu=new st,$_=new nn,Qo=new mu,Xc=new pl,nd=new st,tv=new st;class Sx extends qn{constructor(t=new On,i=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)fu.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=fu.distanceTo(hu);t.setAttribute("lineDistance",new oi(s,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;$_.copy(l).invert(),Qo.copy(t.ray).applyMatrix4($_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,S=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=p){const x=g.getX(A),P=g.getX(A+1),N=Wc(this,t,Qo,m,x,P,A);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(b-1),y=g.getX(M),x=Wc(this,t,Qo,m,A,y,b-1);x&&i.push(x)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=p){const x=Wc(this,t,Qo,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=Wc(this,t,Qo,m,b-1,M,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Wc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(fu.fromBufferAttribute(d,l),hu.fromBufferAttribute(d,c),i.distanceSqToSegment(fu,hu,nd,tv)>s)return;nd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(nd);if(!(p<t.near||p>t.far))return{distance:p,point:tv.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const ev=new st,nv=new st;class id extends Sx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)ev.fromBufferAttribute(i,l),nv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ev.distanceTo(nv);t.setAttribute("lineDistance",new oi(s,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class au extends $r{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const iv=new nn,cp=new mu,Yc=new pl,jc=new st;class ad extends qn{constructor(t=new On,i=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,t.ray.intersectsSphere(Yc)===!1)return;iv.copy(l).invert(),cp.copy(t.ray).applyMatrix4(iv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,A=M;b<A;b++){const y=p.getX(b);jc.fromBufferAttribute(_,y),av(jc,y,m,l,t,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let b=S,A=M;b<A;b++)jc.fromBufferAttribute(_,b),av(jc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function av(r,t,i,s,l,c,h){const d=cp.distanceSqToPoint(r);if(d<i){const m=new st;cp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class cl extends jn{constructor(t,i,s=Qi,l,c,h,d=Pn,m=Pn,p,g=Ca,_=1){if(g!==Ca&&g!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Db extends cl{constructor(t,i=Qi,s=Gs,l,c,h=Pn,d=Pn,m,p=Ca){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yx extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gu extends On{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,M=[],b=[],A=[],y=[];for(let x=0;x<g;x++){const P=x*S-h;for(let N=0;N<p;N++){const O=N*_-c;b.push(O,-P,0),A.push(0,0,1),y.push(N/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const N=P+p*x,O=P+p*(x+1),B=P+1+p*(x+1),I=P+1+p*x;M.push(N,O,I),M.push(O,B,I)}this.setIndex(M),this.setAttribute("position",new oi(b,3)),this.setAttribute("normal",new oi(A,3)),this.setAttribute("uv",new oi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ub extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lb extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nb extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mx extends gx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ob extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Pb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const sv=new nn;class Ib{constructor(t,i,s=0,l=1/0){this.ray=new mu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ce("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return sv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sv),this}intersectObject(t,i=!0,s=[]){return up(t,this,s,i),s.sort(rv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)up(t[l],this,s,i);return s.sort(rv),s}}function rv(r,t){return r.distance-t.distance}function up(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)up(c[h],t,i,!0)}}function ov(r,t,i,s){const l=Fb(s);switch(i){case rx:return r*t;case lx:return r*t/l.components*l.byteLength;case xp:return r*t/l.components*l.byteLength;case qr:return r*t*2/l.components*l.byteLength;case Sp:return r*t*2/l.components*l.byteLength;case ox:return r*t*3/l.components*l.byteLength;case Hi:return r*t*4/l.components*l.byteLength;case yp:return r*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:case Od:return Math.max(r,16)*Math.max(t,8)/4;case Ud:case Nd:return Math.max(r,8)*Math.max(t,8)/2;case Pd:case Id:case Bd:case zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fd:case Hd:case Gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case $d:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ep:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case np:case ip:case ap:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sp:case rp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case op:case lp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Fb(r){switch(r){case Di:case nx:return{byteLength:1,components:1};case sl:case ix:case Ra:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Qi:case gp:case ji:return{byteLength:4,components:1};case ax:case sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);function Ex(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Bb(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],A=_[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++S,_[S]=A)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const A=_[M];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hb=`#ifdef USE_ALPHAHASH
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
#endif`,Gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wb=`#ifdef USE_AOMAP
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
#endif`,Yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jb=`#ifdef USE_BATCHING
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
#endif`,Zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
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
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IT=`PhysicalMaterial material;
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
#endif`,FT=`uniform sampler2D dfgLUT;
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tA=`#ifdef USE_MORPHTARGETS
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
#endif`,eA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oA=`#ifdef USE_NORMALMAP
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
#endif`,lA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EA=`float getShadowMask() {
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
}`,bA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TA=`#ifdef USE_SKINNING
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
#endif`,AA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,CA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LA=`#ifdef USE_TRANSMISSION
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
#endif`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,zA=`uniform sampler2D t2D;
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
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
}`,WA=`#if DEPTH_PACKING == 3200
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
}`,YA=`#define DISTANCE
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
}`,jA=`#define DISTANCE
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
}`,ZA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`uniform float scale;
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
}`,QA=`uniform vec3 diffuse;
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
}`,JA=`#include <common>
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
}`,$A=`uniform vec3 diffuse;
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
}`,t1=`#define LAMBERT
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
}`,e1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,s1=`#define NORMAL
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
}`,r1=`#define PHONG
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
}`,o1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,c1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,f1=`#define TOON
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
}`,h1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,_1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:zb,alphahash_pars_fragment:Hb,alphamap_fragment:Gb,alphamap_pars_fragment:Vb,alphatest_fragment:kb,alphatest_pars_fragment:Xb,aomap_fragment:Wb,aomap_pars_fragment:Yb,batching_pars_vertex:jb,batching_vertex:qb,begin_vertex:Zb,beginnormal_vertex:Kb,bsdfs:Qb,iridescence_fragment:Jb,bumpmap_pars_fragment:$b,clipping_planes_fragment:tT,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:aT,color_pars_fragment:sT,color_pars_vertex:rT,color_vertex:oT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:dT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:ST,envmap_physical_pars_fragment:UT,envmap_vertex:yT,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:bT,fog_pars_fragment:TT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:RT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:wT,lights_pars_begin:DT,lights_toon_fragment:LT,lights_toon_pars_fragment:NT,lights_phong_fragment:OT,lights_phong_pars_fragment:PT,lights_physical_fragment:IT,lights_physical_pars_fragment:FT,lights_fragment_begin:BT,lights_fragment_maps:zT,lights_fragment_end:HT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:XT,map_fragment:WT,map_pars_fragment:YT,map_particle_fragment:jT,map_particle_pars_fragment:qT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:KT,morphinstance_vertex:QT,morphcolor_vertex:JT,morphnormal_vertex:$T,morphtarget_pars_vertex:tA,morphtarget_vertex:eA,normal_fragment_begin:nA,normal_fragment_maps:iA,normal_pars_fragment:aA,normal_pars_vertex:sA,normal_vertex:rA,normalmap_pars_fragment:oA,clearcoat_normal_fragment_begin:lA,clearcoat_normal_fragment_maps:cA,clearcoat_pars_fragment:uA,iridescence_pars_fragment:fA,opaque_fragment:hA,packing:dA,premultiplied_alpha_fragment:pA,project_vertex:mA,dithering_fragment:gA,dithering_pars_fragment:_A,roughnessmap_fragment:vA,roughnessmap_pars_fragment:xA,shadowmap_pars_fragment:SA,shadowmap_pars_vertex:yA,shadowmap_vertex:MA,shadowmask_pars_fragment:EA,skinbase_vertex:bA,skinning_pars_vertex:TA,skinning_vertex:AA,skinnormal_vertex:RA,specularmap_fragment:CA,specularmap_pars_fragment:wA,tonemapping_fragment:DA,tonemapping_pars_fragment:UA,transmission_fragment:LA,transmission_pars_fragment:NA,uv_pars_fragment:OA,uv_pars_vertex:PA,uv_vertex:IA,worldpos_vertex:FA,background_vert:BA,background_frag:zA,backgroundCube_vert:HA,backgroundCube_frag:GA,cube_vert:VA,cube_frag:kA,depth_vert:XA,depth_frag:WA,distance_vert:YA,distance_frag:jA,equirect_vert:qA,equirect_frag:ZA,linedashed_vert:KA,linedashed_frag:QA,meshbasic_vert:JA,meshbasic_frag:$A,meshlambert_vert:t1,meshlambert_frag:e1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:a1,meshnormal_frag:s1,meshphong_vert:r1,meshphong_frag:o1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:u1,meshtoon_frag:f1,points_vert:h1,points_frag:d1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:_1},Bt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Yi={basic:{uniforms:Yn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Yn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Yn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Yn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Yn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Yn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Yn([Bt.points,Bt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Yn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Yn([Bt.common,Bt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Yn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Yn([Bt.sprite,Bt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Yn([Bt.common,Bt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Yn([Bt.lights,Bt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Yi.physical={uniforms:Yn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const qc={r:0,b:0,g:0},Os=new wa,v1=new nn;function x1(r,t,i,s,l,c,h){const d=new xe(0);let m=c===!0?0:1,p,g,_=null,S=0,M=null;function b(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:t).get(O)),O}function A(N){let O=!1;const B=b(N);B===null?x(d,m):B&&B.isColor&&(x(B,1),O=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,O){const B=b(O);B&&(B.isCubeTexture||B.mapping===pu)?(g===void 0&&(g=new Da(new ml(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Kr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,F,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Os.copy(O.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(Os)),g.material.toneMapped=we.getTransfer(B.colorSpace)!==Ge,(_!==B||S!==B.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=B,S=B.version,M=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Da(new gu(2,2),new Ji({name:"BackgroundMaterial",uniforms:Kr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=we.getTransfer(B.colorSpace)!==Ge,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||S!==B.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=B,S=B.version,M=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,O){N.getRGB(qc,mx(r)),s.buffers.color.setClear(qc.r,qc.g,qc.b,O,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,O=1){d.set(N),m=O,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:A,addToRenderList:y,dispose:P}}function S1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(T,z,K,Q,it){let lt=!1;const U=_(Q,K,z);c!==U&&(c=U,p(c.object)),lt=M(T,Q,K,it),lt&&b(T,Q,K,it),it!==null&&t.update(it,r.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,O(T,z,K,Q),it!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function m(){return r.createVertexArray()}function p(T){return r.bindVertexArray(T)}function g(T){return r.deleteVertexArray(T)}function _(T,z,K){const Q=K.wireframe===!0;let it=s[T.id];it===void 0&&(it={},s[T.id]=it);let lt=it[z.id];lt===void 0&&(lt={},it[z.id]=lt);let U=lt[Q];return U===void 0&&(U=S(m()),lt[Q]=U),U}function S(T){const z=[],K=[],Q=[];for(let it=0;it<i;it++)z[it]=0,K[it]=0,Q[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:K,attributeDivisors:Q,object:T,attributes:{},index:null}}function M(T,z,K,Q){const it=c.attributes,lt=z.attributes;let U=0;const H=K.getAttributes();for(const at in H)if(H[at].location>=0){const bt=it[at];let D=lt[at];if(D===void 0&&(at==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),at==="instanceColor"&&T.instanceColor&&(D=T.instanceColor)),bt===void 0||bt.attribute!==D||D&&bt.data!==D.data)return!0;U++}return c.attributesNum!==U||c.index!==Q}function b(T,z,K,Q){const it={},lt=z.attributes;let U=0;const H=K.getAttributes();for(const at in H)if(H[at].location>=0){let bt=lt[at];bt===void 0&&(at==="instanceMatrix"&&T.instanceMatrix&&(bt=T.instanceMatrix),at==="instanceColor"&&T.instanceColor&&(bt=T.instanceColor));const D={};D.attribute=bt,bt&&bt.data&&(D.data=bt.data),it[at]=D,U++}c.attributes=it,c.attributesNum=U,c.index=Q}function A(){const T=c.newAttributes;for(let z=0,K=T.length;z<K;z++)T[z]=0}function y(T){x(T,0)}function x(T,z){const K=c.newAttributes,Q=c.enabledAttributes,it=c.attributeDivisors;K[T]=1,Q[T]===0&&(r.enableVertexAttribArray(T),Q[T]=1),it[T]!==z&&(r.vertexAttribDivisor(T,z),it[T]=z)}function P(){const T=c.newAttributes,z=c.enabledAttributes;for(let K=0,Q=z.length;K<Q;K++)z[K]!==T[K]&&(r.disableVertexAttribArray(K),z[K]=0)}function N(T,z,K,Q,it,lt,U){U===!0?r.vertexAttribIPointer(T,z,K,it,lt):r.vertexAttribPointer(T,z,K,Q,it,lt)}function O(T,z,K,Q){A();const it=Q.attributes,lt=K.getAttributes(),U=z.defaultAttributeValues;for(const H in lt){const at=lt[H];if(at.location>=0){let At=it[H];if(At===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(At=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(At=T.instanceColor)),At!==void 0){const bt=At.normalized,D=At.itemSize,W=t.get(At);if(W===void 0)continue;const ut=W.buffer,Ct=W.type,Ft=W.bytesPerElement,tt=Ct===r.INT||Ct===r.UNSIGNED_INT||At.gpuType===gp;if(At.isInterleavedBufferAttribute){const dt=At.data,Ut=dt.stride,Ht=At.offset;if(dt.isInstancedInterleavedBuffer){for(let zt=0;zt<at.locationSize;zt++)x(at.location+zt,dt.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let zt=0;zt<at.locationSize;zt++)y(at.location+zt);r.bindBuffer(r.ARRAY_BUFFER,ut);for(let zt=0;zt<at.locationSize;zt++)N(at.location+zt,D/at.locationSize,Ct,bt,Ut*Ft,(Ht+D/at.locationSize*zt)*Ft,tt)}else{if(At.isInstancedBufferAttribute){for(let dt=0;dt<at.locationSize;dt++)x(at.location+dt,At.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let dt=0;dt<at.locationSize;dt++)y(at.location+dt);r.bindBuffer(r.ARRAY_BUFFER,ut);for(let dt=0;dt<at.locationSize;dt++)N(at.location+dt,D/at.locationSize,Ct,bt,D*Ft,D/at.locationSize*dt*Ft,tt)}}else if(U!==void 0){const bt=U[H];if(bt!==void 0)switch(bt.length){case 2:r.vertexAttrib2fv(at.location,bt);break;case 3:r.vertexAttrib3fv(at.location,bt);break;case 4:r.vertexAttrib4fv(at.location,bt);break;default:r.vertexAttrib1fv(at.location,bt)}}}}P()}function B(){$();for(const T in s){const z=s[T];for(const K in z){const Q=z[K];for(const it in Q)g(Q[it].object),delete Q[it];delete z[K]}delete s[T]}}function I(T){if(s[T.id]===void 0)return;const z=s[T.id];for(const K in z){const Q=z[K];for(const it in Q)g(Q[it].object),delete Q[it];delete z[K]}delete s[T.id]}function F(T){for(const z in s){const K=s[z];if(K[T.id]===void 0)continue;const Q=K[T.id];for(const it in Q)g(Q[it].object),delete Q[it];delete K[T.id]}}function $(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:P}}function y1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,s,1)}function m(p,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,_);let b=0;for(let A=0;A<_;A++)b+=g[A]*S[A];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function M1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Hi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const $=F===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Di&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ji&&!$)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(re("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:O,maxSamples:B,samples:I}}function E1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Is,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||l;return l=S,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):p();else{const P=c?0:s,N=P*4;let O=x.clippingState||null;m.value=O,O=g(b,S,N,M);for(let B=0;B!==N;++B)O[B]=i[B];x.clippingState=O,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,S,M,b){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=m.value,b!==!0||y===null){const x=M+A*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let N=0,O=M;N!==A;++N,O+=4)h.copy(_[N]).applyMatrix4(P,d),h.normal.toArray(y,O),y[O+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function b1(r){let t=new WeakMap;function i(h,d){return d===Rd?h.mapping=Gs:d===Cd&&(h.mapping=jr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Rd||d===Cd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new vx(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const us=4,lv=[.125,.215,.35,.446,.526,.582],Bs=20,T1=256,Jo=new Mx,cv=new xe;let sd=null,rd=0,od=0,ld=!1;const A1=new st;class uv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=A1}=c;sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,rd,od),this._renderer.xr.enabled=ld,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Ra,format:Hi,colorSpace:Zr,depthBuffer:!1},l=fv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=R1(c)),this._blurMaterial=w1(c,t,i),this._ggxMaterial=C1(c,t,i)}return l}_compileMaterial(t){const i=new Da(new On,t);this._renderer.compile(i,Jo)}_sceneToCubeUV(t,i,s,l,c){const m=new wi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(cv),_.toneMapping=Zi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Da(new ml,new hx({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,x=!0):(y.color.copy(cv),x=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const B=this._cubeSize;Fr(l,O*B,N>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(A,m),_.render(t,m)}_.toneMapping=M,_.autoClear=S,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Gs||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),S=0+p*1.25,M=_*S,{_lodMax:b}=this,A=this._sizeLods[s],y=3*A*(s>b-us?s-b+us:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Fr(c,y,x,3*A,2*A),l.setRenderTarget(c),l.render(d,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Fr(t,y,x,3*A,2*A),l.setRenderTarget(t),l.render(d,Jo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Bs-1),A=c/b,y=isFinite(c)?1+Math.floor(g*A):Bs;y>Bs&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bs}`);const x=[];let P=0;for(let F=0;F<Bs;++F){const $=F/A,w=Math.exp(-$*$/2);x.push(w),F===0?P+=w:F<y&&(P+=2*w)}for(let F=0;F<x.length;F++)x[F]=x[F]/P;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const O=this._sizeLods[l],B=3*O*(l>N-us?l-N+us:0),I=4*(this._cubeSize-O);Fr(i,B,I,3*O,2*O),m.setRenderTarget(i),m.render(_,Jo)}}function R1(r){const t=[],i=[],s=[];let l=r;const c=r-us+1+lv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-us?m=lv[h-r+us-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,A=3,y=2,x=1,P=new Float32Array(A*b*M),N=new Float32Array(y*b*M),O=new Float32Array(x*b*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,$=I>2?0:-1,w=[F,$,0,F+2/3,$,0,F+2/3,$+1,0,F,$,0,F+2/3,$+1,0,F,$+1,0];P.set(w,A*b*I),N.set(S,y*b*I);const T=[I,I,I,I,I,I];O.set(T,x*b*I)}const B=new On;B.setAttribute("position",new si(P,A)),B.setAttribute("uv",new si(N,y)),B.setAttribute("faceIndex",new si(O,x)),s.push(new Da(B,null)),l>us&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function fv(r,t,i){const s=new Ki(r,t,i);return s.texture.mapping=pu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function C1(r,t,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function w1(r,t,i){const s=new Float32Array(Bs),l=new st(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function hv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function dv(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function D1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Rd||m===Cd,g=m===Gs||m===jr;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new uv(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new uv(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function U1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ol("WebGLRenderer: "+s+" extension not supported."),l}}}function L1(r,t,i,s){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],r.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,b=_.attributes.position;let A=0;if(M!==null){const P=M.array;A=M.version;for(let N=0,O=P.length;N<O;N+=3){const B=P[N+0],I=P[N+1],F=P[N+2];S.push(B,I,I,F,F,B)}}else if(b!==void 0){const P=b.array;A=b.version;for(let N=0,O=P.length/3-1;N<O;N+=3){const B=N+0,I=N+1,F=N+2;S.push(B,I,I,F,F,B)}}else return;const y=new(cx(S)?px:dx)(S,1);y.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function g(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function N1(r,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,M){r.drawElements(s,M,c,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,S*h,b),i.update(M,s,b))}function g(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];i.update(y,s,1)}function _(S,M,b,A){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,M[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,A,0,b);let x=0;for(let P=0;P<b;P++)x+=M[P]*A[P];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function O1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function P1(r,t,i){const s=new WeakMap,l=new un;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let w=function(){F.dispose(),s.delete(d),d.removeEventListener("dispose",w)};S!==void 0&&S.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;M===!0&&(N=1),b===!0&&(N=2),A===!0&&(N=3);let O=d.attributes.position.count*N,B=1;O>t.maxTextureSize&&(B=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const I=new Float32Array(O*B*4*_),F=new ux(I,O,B,_);F.type=ji,F.needsUpdate=!0;const $=N*4;for(let T=0;T<_;T++){const z=y[T],K=x[T],Q=P[T],it=O*B*4*T;for(let lt=0;lt<z.count;lt++){const U=lt*$;M===!0&&(l.fromBufferAttribute(z,lt),I[it+U+0]=l.x,I[it+U+1]=l.y,I[it+U+2]=l.z,I[it+U+3]=0),b===!0&&(l.fromBufferAttribute(K,lt),I[it+U+4]=l.x,I[it+U+5]=l.y,I[it+U+6]=l.z,I[it+U+7]=0),A===!0&&(l.fromBufferAttribute(Q,lt),I[it+U+8]=l.x,I[it+U+9]=l.y,I[it+U+10]=l.z,I[it+U+11]=Q.itemSize===4?l.w:1)}}S={count:_,texture:F,size:new Ve(O,B)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let M=0;for(let A=0;A<p.length;A++)M+=p[A];const b=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function I1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const F1={[qv]:"LINEAR_TONE_MAPPING",[Zv]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Qv]:"ACES_FILMIC_TONE_MAPPING",[$v]:"AGX_TONE_MAPPING",[tx]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function B1(r,t,i,s,l){const c=new Ki(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Ki(t,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),d=new On;d.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new oi([0,2,0,0,2,0],2));const m=new Ub({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Da(d,m),g=new Mx(-1,1,1,-1,0,1);let _=null,S=null,M=!1,b,A=null,y=[],x=!1;this.setSize=function(P,N){c.setSize(P,N),h.setSize(P,N);for(let O=0;O<y.length;O++){const B=y[O];B.setSize&&B.setSize(P,N)}},this.setEffects=function(P){y=P,x=y.length>0&&y[0].isRenderPass===!0;const N=c.width,O=c.height;for(let B=0;B<y.length;B++){const I=y[B];I.setSize&&I.setSize(N,O)}},this.begin=function(P,N){if(M||P.toneMapping===Zi&&y.length===0)return!1;if(A=N,N!==null){const O=N.width,B=N.height;(c.width!==O||c.height!==B)&&this.setSize(O,B)}return x===!1&&P.setRenderTarget(c),b=P.toneMapping,P.toneMapping=Zi,!0},this.hasRenderPass=function(){return x},this.end=function(P,N){P.toneMapping=b,M=!0;let O=c,B=h;for(let I=0;I<y.length;I++){const F=y[I];if(F.enabled!==!1&&(F.render(P,B,O,N),F.needsSwap!==!1)){const $=O;O=B,B=$}}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,m.defines={},we.getTransfer(_)===Ge&&(m.defines.SRGB_TRANSFER="");const I=F1[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,P.setRenderTarget(A),P.render(p,g),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const bx=new jn,fp=new cl(1,1),Tx=new ux,Ax=new ob,Rx=new _x,pv=[],mv=[],gv=new Float32Array(16),_v=new Float32Array(9),vv=new Float32Array(4);function to(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=pv[l];if(c===void 0&&(c=new Float32Array(l),pv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function vu(r,t){let i=mv[t];i===void 0&&(i=new Int32Array(t),mv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function z1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function H1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Mn(i,t)}}function G1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Mn(i,t)}}function V1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Mn(i,t)}}function k1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;vv.set(s),r.uniformMatrix2fv(this.addr,!1,vv),Mn(i,s)}}function X1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;_v.set(s),r.uniformMatrix3fv(this.addr,!1,_v),Mn(i,s)}}function W1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;gv.set(s),r.uniformMatrix4fv(this.addr,!1,gv),Mn(i,s)}}function Y1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function j1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Mn(i,t)}}function q1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Mn(i,t)}}function Z1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Mn(i,t)}}function K1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Q1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Mn(i,t)}}function J1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Mn(i,t)}}function $1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Mn(i,t)}}function tR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(fp.compareFunction=i.isReversedDepthBuffer()?Ep:Mp,c=fp):c=bx,i.setTexture2D(t||c,l)}function eR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ax,l)}function nR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Rx,l)}function iR(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Tx,l)}function aR(r){switch(r){case 5126:return z1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return k1;case 35675:return X1;case 35676:return W1;case 5124:case 35670:return Y1;case 35667:case 35671:return j1;case 35668:case 35672:return q1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return Q1;case 36295:return J1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}function sR(r,t){r.uniform1fv(this.addr,t)}function rR(r,t){const i=to(t,this.size,2);r.uniform2fv(this.addr,i)}function oR(r,t){const i=to(t,this.size,3);r.uniform3fv(this.addr,i)}function lR(r,t){const i=to(t,this.size,4);r.uniform4fv(this.addr,i)}function cR(r,t){const i=to(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function uR(r,t){const i=to(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function fR(r,t){const i=to(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function hR(r,t){r.uniform1iv(this.addr,t)}function dR(r,t){r.uniform2iv(this.addr,t)}function pR(r,t){r.uniform3iv(this.addr,t)}function mR(r,t){r.uniform4iv(this.addr,t)}function gR(r,t){r.uniform1uiv(this.addr,t)}function _R(r,t){r.uniform2uiv(this.addr,t)}function vR(r,t){r.uniform3uiv(this.addr,t)}function xR(r,t){r.uniform4uiv(this.addr,t)}function SR(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=fp:h=bx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function yR(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ax,c[h])}function MR(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Rx,c[h])}function ER(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Tx,c[h])}function bR(r){switch(r){case 5126:return sR;case 35664:return rR;case 35665:return oR;case 35666:return lR;case 35674:return cR;case 35675:return uR;case 35676:return fR;case 5124:case 35670:return hR;case 35667:case 35671:return dR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return _R;case 36295:return vR;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}class TR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=aR(i.type)}}class AR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bR(i.type)}}class RR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function xv(r,t){r.seq.push(t),r.map[t.id]=t}function CR(r,t,i){const s=r.name,l=s.length;for(cd.lastIndex=0;;){const c=cd.exec(s),h=cd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){xv(i,p===void 0?new TR(d,r,t):new AR(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new RR(d),xv(i,_)),i=_}}}class su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);CR(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Sv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const wR=37297;let DR=0;function UR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const yv=new de;function LR(r){we._getMatrix(yv,we.workingColorSpace,r);const t=`mat3( ${yv.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Mv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+UR(r.getShaderSource(t),d)}else return c}function NR(r,t){const i=LR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const OR={[qv]:"Linear",[Zv]:"Reinhard",[Kv]:"Cineon",[Qv]:"ACESFilmic",[$v]:"AgX",[tx]:"Neutral",[Jv]:"Custom"};function PR(r,t){const i=OR[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new st;function IR(){we.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function BR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function zR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function nl(r){return r!==""}function Ev(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(r){return r.replace(HR,VR)}const GR=new Map;function VR(r,t){let i=pe[t];if(i===void 0){const s=GR.get(t);if(s!==void 0)i=pe[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hp(i)}const kR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(r){return r.replace(kR,XR)}function XR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Av(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const WR={[Jc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function YR(r){return WR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jR={[Gs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function qR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":jR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZR={[jr]:"ENVMAP_MODE_REFRACTION"};function KR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ZR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QR={[jv]:"ENVMAP_BLENDING_MULTIPLY",[AE]:"ENVMAP_BLENDING_MIX",[RE]:"ENVMAP_BLENDING_ADD"};function JR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":QR[r.combine]||"ENVMAP_BLENDING_NONE"}function $R(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tC(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=YR(i),p=qR(i),g=KR(i),_=JR(i),S=$R(i),M=FR(i),b=BR(c),A=l.createProgram();let y,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(nl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(nl).join(`
`),x.length>0&&(x+=`
`)):(y=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),x=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Zi?PR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,NR("linearToOutputTexel",i.outputColorSpace),IR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),h=hp(h),h=Ev(h,i),h=bv(h,i),d=hp(d),d=Ev(d,i),d=bv(d,i),h=Tv(h),d=Tv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===N_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+y+h,O=P+x+d,B=Sv(l,l.VERTEX_SHADER,N),I=Sv(l,l.FRAGMENT_SHADER,O);l.attachShader(A,B),l.attachShader(A,I),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(z){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(A)||"",Q=l.getShaderInfoLog(B)||"",it=l.getShaderInfoLog(I)||"",lt=K.trim(),U=Q.trim(),H=it.trim();let at=!0,At=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(at=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,B,I);else{const bt=Mv(l,B,"vertex"),D=Mv(l,I,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+lt+`
`+bt+`
`+D)}else lt!==""?re("WebGLProgram: Program Info Log:",lt):(U===""||H==="")&&(At=!1);At&&(z.diagnostics={runnable:at,programLog:lt,vertexShader:{log:U,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(B),l.deleteShader(I),$=new su(l,A),w=zR(l,A)}let $;this.getUniforms=function(){return $===void 0&&F(this),$};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(A,wR)),T},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DR++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=I,this}let eC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iC(t),i.set(t,s)),s}}class iC{constructor(t){this.id=eC++,this.code=t,this.usedTimes=0}}function aC(r,t,i,s,l,c,h){const d=new Ap,m=new nC,p=new Set,g=[],_=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,T,z,K,Q){const it=K.fog,lt=Q.geometry,U=w.isMeshStandardMaterial?K.environment:null,H=(w.isMeshStandardMaterial?i:t).get(w.envMap||U),at=H&&H.mapping===pu?H.image.height:null,At=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&re("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const bt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,D=bt!==void 0?bt.length:0;let W=0;lt.morphAttributes.position!==void 0&&(W=1),lt.morphAttributes.normal!==void 0&&(W=2),lt.morphAttributes.color!==void 0&&(W=3);let ut,Ct,Ft,tt;if(At){const ge=Yi[At];ut=ge.vertexShader,Ct=ge.fragmentShader}else ut=w.vertexShader,Ct=w.fragmentShader,m.update(w),Ft=m.getVertexShaderID(w),tt=m.getFragmentShaderID(w);const dt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),Ht=Q.isInstancedMesh===!0,zt=Q.isBatchedMesh===!0,ce=!!w.map,Ze=!!w.matcap,me=!!H,fe=!!w.aoMap,Ae=!!w.lightMap,se=!!w.bumpMap,Pe=!!w.normalMap,V=!!w.displacementMap,je=!!w.emissiveMap,Se=!!w.metalnessMap,ye=!!w.roughnessMap,Yt=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,j=w.iridescence>0,vt=w.sheen>0,Et=w.transmission>0,ht=Yt&&!!w.anisotropyMap,Vt=L&&!!w.clearcoatMap,Ot=L&&!!w.clearcoatNormalMap,kt=L&&!!w.clearcoatRoughnessMap,te=j&&!!w.iridescenceMap,Rt=j&&!!w.iridescenceThicknessMap,Dt=vt&&!!w.sheenColorMap,mt=vt&&!!w.sheenRoughnessMap,wt=!!w.specularMap,gt=!!w.specularColorMap,Kt=!!w.specularIntensityMap,k=Et&&!!w.transmissionMap,Nt=Et&&!!w.thicknessMap,Tt=!!w.gradientMap,St=!!w.alphaMap,Mt=w.alphaTest>0,pt=!!w.alphaHash,Lt=!!w.extensions;let ne=Zi;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ne=r.toneMapping);const Re={shaderID:At,shaderType:w.type,shaderName:w.name,vertexShader:ut,fragmentShader:Ct,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:zt,batchingColor:zt&&Q._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&Q.instanceColor!==null,instancingMorph:Ht&&Q.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Zr,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:Ze,envMap:me,envMapMode:me&&H.mapping,envMapCubeUVHeight:at,aoMap:fe,lightMap:Ae,bumpMap:se,normalMap:Pe,displacementMap:V,emissiveMap:je,normalMapObjectSpace:Pe&&w.normalMapType===UE,normalMapTangentSpace:Pe&&w.normalMapType===DE,metalnessMap:Se,roughnessMap:ye,anisotropy:Yt,anisotropyMap:ht,clearcoat:L,clearcoatMap:Vt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:kt,dispersion:E,iridescence:j,iridescenceMap:te,iridescenceThicknessMap:Rt,sheen:vt,sheenColorMap:Dt,sheenRoughnessMap:mt,specularMap:wt,specularColorMap:gt,specularIntensityMap:Kt,transmission:Et,transmissionMap:k,thicknessMap:Nt,gradientMap:Tt,opaque:w.transparent===!1&&w.blending===kr&&w.alphaToCoverage===!1,alphaMap:St,alphaTest:Mt,alphaHash:pt,combine:w.combine,mapUv:ce&&A(w.map.channel),aoMapUv:fe&&A(w.aoMap.channel),lightMapUv:Ae&&A(w.lightMap.channel),bumpMapUv:se&&A(w.bumpMap.channel),normalMapUv:Pe&&A(w.normalMap.channel),displacementMapUv:V&&A(w.displacementMap.channel),emissiveMapUv:je&&A(w.emissiveMap.channel),metalnessMapUv:Se&&A(w.metalnessMap.channel),roughnessMapUv:ye&&A(w.roughnessMap.channel),anisotropyMapUv:ht&&A(w.anisotropyMap.channel),clearcoatMapUv:Vt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&A(w.sheenRoughnessMap.channel),specularMapUv:wt&&A(w.specularMap.channel),specularColorMapUv:gt&&A(w.specularColorMap.channel),specularIntensityMapUv:Kt&&A(w.specularIntensityMap.channel),transmissionMapUv:k&&A(w.transmissionMap.channel),thicknessMapUv:Nt&&A(w.thicknessMap.channel),alphaMapUv:St&&A(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Pe||Yt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!lt.attributes.uv&&(ce||St),fog:!!it,useFog:w.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ut,skinning:Q.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:W,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Ge,decodeVideoTextureEmissive:je&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Ge,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ea,flipSided:w.side===ri,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&w.extensions.multiDraw===!0||zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Re.vertexUv1s=p.has(1),Re.vertexUv2s=p.has(2),Re.vertexUv3s=p.has(3),p.clear(),Re}function x(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)T.push(z),T.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(P(T,w),N(T,w),T.push(r.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function P(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function N(w,T){d.disableAll(),T.instancing&&d.enable(0),T.instancingColor&&d.enable(1),T.instancingMorph&&d.enable(2),T.matcap&&d.enable(3),T.envMap&&d.enable(4),T.normalMapObjectSpace&&d.enable(5),T.normalMapTangentSpace&&d.enable(6),T.clearcoat&&d.enable(7),T.iridescence&&d.enable(8),T.alphaTest&&d.enable(9),T.vertexColors&&d.enable(10),T.vertexAlphas&&d.enable(11),T.vertexUv1s&&d.enable(12),T.vertexUv2s&&d.enable(13),T.vertexUv3s&&d.enable(14),T.vertexTangents&&d.enable(15),T.anisotropy&&d.enable(16),T.alphaHash&&d.enable(17),T.batching&&d.enable(18),T.dispersion&&d.enable(19),T.batchingColor&&d.enable(20),T.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reversedDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),w.push(d.mask)}function O(w){const T=b[w.type];let z;if(T){const K=Yi[T];z=Sb.clone(K.uniforms)}else z=w.uniforms;return z}function B(w,T){let z=_.get(T);return z!==void 0?++z.usedTimes:(z=new tC(r,T,w,c),g.push(z),_.set(T,z)),z}function I(w){if(--w.usedTimes===0){const T=g.indexOf(w);g[T]=g[g.length-1],g.pop(),_.delete(w.cacheKey),w.destroy()}}function F(w){m.remove(w)}function $(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:O,acquireProgram:B,releaseProgram:I,releaseShaderCache:F,programs:g,dispose:$}}function sC(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function rC(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Rv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Cv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,M,b,A,y){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:A,group:y},r[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=A,x.group=y),t++,x}function d(_,S,M,b,A,y){const x=h(_,S,M,b,A,y);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,b,A,y){const x=h(_,S,M,b,A,y);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||rC),s.length>1&&s.sort(S||Rv),l.length>1&&l.sort(S||Rv)}function g(){for(let _=t,S=r.length;_<S;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function oC(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Cv,r.set(s,[h])):l>=c.length?(h=new Cv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function lC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new st,color:new xe};break;case"SpotLight":i={position:new st,direction:new st,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new st,halfWidth:new st,halfHeight:new st};break}return r[t.id]=i,i}}}function cC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let uC=0;function fC(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function hC(r){const t=new lC,i=cC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new st);const l=new st,c=new nn,h=new nn;function d(p){let g=0,_=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,A=0,y=0,x=0,P=0,N=0,O=0,B=0,I=0,F=0;p.sort(fC);for(let w=0,T=p.length;w<T;w++){const z=p[w],K=z.color,Q=z.intensity,it=z.distance;let lt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===qr?lt=z.shadow.map.texture:lt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=K.r*Q,_+=K.g*Q,S+=K.b*Q;else if(z.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(z.sh.coefficients[U],Q);F++}else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const H=z.shadow,at=i.get(z);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,s.directionalShadow[M]=at,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=z.shadow.matrix,P++}s.directional[M]=U,M++}else if(z.isSpotLight){const U=t.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(K).multiplyScalar(Q),U.distance=it,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,s.spot[A]=U;const H=z.shadow;if(z.map&&(s.spotLightMap[B]=z.map,B++,H.updateMatrices(z),z.castShadow&&I++),s.spotLightMatrix[A]=H.matrix,z.castShadow){const at=i.get(z);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,s.spotShadow[A]=at,s.spotShadowMap[A]=lt,O++}A++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(K).multiplyScalar(Q),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=U,y++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),U.distance=z.distance,U.decay=z.decay,z.castShadow){const H=z.shadow,at=i.get(z);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,s.pointShadow[b]=at,s.pointShadowMap[b]=lt,s.pointShadowMatrix[b]=z.shadow.matrix,N++}s.point[b]=U,b++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(Q),U.groundColor.copy(z.groundColor).multiplyScalar(Q),s.hemi[x]=U,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=S;const $=s.hash;($.directionalLength!==M||$.pointLength!==b||$.spotLength!==A||$.rectAreaLength!==y||$.hemiLength!==x||$.numDirectionalShadows!==P||$.numPointShadows!==N||$.numSpotShadows!==O||$.numSpotMaps!==B||$.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=O+B-I,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,$.directionalLength=M,$.pointLength=b,$.spotLength=A,$.rectAreaLength=y,$.hemiLength=x,$.numDirectionalShadows=P,$.numPointShadows=N,$.numSpotShadows=O,$.numSpotMaps=B,$.numLightProbes=F,s.version=uC++)}function m(p,g){let _=0,S=0,M=0,b=0,A=0;const y=g.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const N=p[x];if(N.isDirectionalLight){const O=s.directional[_];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),_++}else if(N.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const O=s.rectArea[b];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),h.identity(),c.copy(N.matrixWorld),c.premultiply(y),h.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const O=s.hemi[A];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:s}}function wv(r){const t=new hC(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function dC(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new wv(r),t.set(l,[d])):c>=h.length?(d=new wv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const pC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mC=`uniform sampler2D shadow_pass;
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
}`,gC=[new st(1,0,0),new st(-1,0,0),new st(0,1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1)],_C=[new st(0,-1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1),new st(0,-1,0),new st(0,-1,0)],Dv=new nn,$o=new st,ud=new st;function vC(r,t,i){let s=new xx;const l=new Ve,c=new Ve,h=new un,d=new Lb,m=new Nb,p={},g=i.maxTextureSize,_={[fs]:ri,[ri]:fs,[Ea]:Ea},S=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:pC,fragmentShader:mC}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new On;b.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Da(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let x=this.type;this.render=function(I,F,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===oE&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Jc);const w=r.getRenderTarget(),T=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ta),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=x!==this.type;Q&&F.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(lt=>lt.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,lt=I.length;it<lt;it++){const U=I[it],H=U.shadow;if(H===void 0){re("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const at=H.getFrameExtents();if(l.multiply(at),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/at.x),l.x=c.x*at.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/at.y),l.y=c.y*at.y,H.mapSize.y=c.y)),H.map===null||Q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===el){if(U.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ki(l.x,l.y,{format:qr,type:Ra,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new cl(l.x,l.y,ji),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=Ca,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else{U.isPointLight?(H.map=new vx(l.x),H.map.depthTexture=new Db(l.x,Qi)):(H.map=new Ki(l.x,l.y),H.map.depthTexture=new cl(l.x,l.y,Qi)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=Ca;const bt=r.state.buffers.depth.getReversed();this.type===Jc?(H.map.depthTexture.compareFunction=bt?Ep:Mp,H.map.depthTexture.minFilter=Vn,H.map.depthTexture.magFilter=Vn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn)}H.camera.updateProjectionMatrix()}const At=H.map.isWebGLCubeRenderTarget?6:1;for(let bt=0;bt<At;bt++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,bt),r.clear();else{bt===0&&(r.setRenderTarget(H.map),r.clear());const D=H.getViewport(bt);h.set(c.x*D.x,c.y*D.y,c.x*D.z,c.y*D.w),K.viewport(h)}if(U.isPointLight){const D=H.camera,W=H.matrix,ut=U.distance||D.far;ut!==D.far&&(D.far=ut,D.updateProjectionMatrix()),$o.setFromMatrixPosition(U.matrixWorld),D.position.copy($o),ud.copy(D.position),ud.add(gC[bt]),D.up.copy(_C[bt]),D.lookAt(ud),D.updateMatrixWorld(),W.makeTranslation(-$o.x,-$o.y,-$o.z),Dv.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Dv,D.coordinateSystem,D.reversedDepth)}else H.updateMatrices(U);s=H.getFrustum(),O(F,$,H.camera,U,this.type)}H.isPointLightShadow!==!0&&this.type===el&&P(H,$),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(w,T,z)};function P(I,F){const $=t.update(A);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ki(l.x,l.y,{format:qr,type:Ra})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(F,null,$,S,A,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(F,null,$,M,A,null)}function N(I,F,$,w){let T=null;const z=$.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)T=z;else if(T=$.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=T.uuid,Q=F.uuid;let it=p[K];it===void 0&&(it={},p[K]=it);let lt=it[Q];lt===void 0&&(lt=T.clone(),it[Q]=lt,F.addEventListener("dispose",B)),T=lt}if(T.visible=F.visible,T.wireframe=F.wireframe,w===el?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:_[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,$.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=r.properties.get(T);K.light=$}return T}function O(I,F,$,w,T){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===el)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld);const Q=t.update(I),it=I.material;if(Array.isArray(it)){const lt=Q.groups;for(let U=0,H=lt.length;U<H;U++){const at=lt[U],At=it[at.materialIndex];if(At&&At.visible){const bt=N(I,At,w,T);I.onBeforeShadow(r,I,F,$,Q,bt,at),r.renderBufferDirect($,null,Q,bt,I,at),I.onAfterShadow(r,I,F,$,Q,bt,at)}}}else if(it.visible){const lt=N(I,it,w,T);I.onBeforeShadow(r,I,F,$,Q,lt,null),r.renderBufferDirect($,null,Q,lt,I,null),I.onAfterShadow(r,I,F,$,Q,lt,null)}}const K=I.children;for(let Q=0,it=K.length;Q<it;Q++)O(K[Q],F,$,w,T)}function B(I){I.target.removeEventListener("dispose",B);for(const $ in p){const w=p[$],T=I.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const xC={[Sd]:yd,[Md]:Td,[Ed]:Ad,[Yr]:bd,[yd]:Sd,[Td]:Md,[Ad]:Ed,[bd]:Yr};function SC(r,t){function i(){let k=!1;const Nt=new un;let Tt=null;const St=new un(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!k&&(r.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,pt,Lt,ne,Re){Re===!0&&(Mt*=ne,pt*=ne,Lt*=ne),Nt.set(Mt,pt,Lt,ne),St.equals(Nt)===!1&&(r.clearColor(Mt,pt,Lt,ne),St.copy(Nt))},reset:function(){k=!1,Tt=null,St.set(-1,0,0,0)}}}function s(){let k=!1,Nt=!1,Tt=null,St=null,Mt=null;return{setReversed:function(pt){if(Nt!==pt){const Lt=t.get("EXT_clip_control");pt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Nt=pt;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(pt){pt?dt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(pt){Tt!==pt&&!k&&(r.depthMask(pt),Tt=pt)},setFunc:function(pt){if(Nt&&(pt=xC[pt]),St!==pt){switch(pt){case Sd:r.depthFunc(r.NEVER);break;case yd:r.depthFunc(r.ALWAYS);break;case Md:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case Ed:r.depthFunc(r.EQUAL);break;case bd:r.depthFunc(r.GEQUAL);break;case Td:r.depthFunc(r.GREATER);break;case Ad:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}St=pt}},setLocked:function(pt){k=pt},setClear:function(pt){Mt!==pt&&(Nt&&(pt=1-pt),r.clearDepth(pt),Mt=pt)},reset:function(){k=!1,Tt=null,St=null,Mt=null,Nt=!1}}}function l(){let k=!1,Nt=null,Tt=null,St=null,Mt=null,pt=null,Lt=null,ne=null,Re=null;return{setTest:function(ge){k||(ge?dt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(ge){Nt!==ge&&!k&&(r.stencilMask(ge),Nt=ge)},setFunc:function(ge,fn,In){(Tt!==ge||St!==fn||Mt!==In)&&(r.stencilFunc(ge,fn,In),Tt=ge,St=fn,Mt=In)},setOp:function(ge,fn,In){(pt!==ge||Lt!==fn||ne!==In)&&(r.stencilOp(ge,fn,In),pt=ge,Lt=fn,ne=In)},setLocked:function(ge){k=ge},setClear:function(ge){Re!==ge&&(r.clearStencil(ge),Re=ge)},reset:function(){k=!1,Nt=null,Tt=null,St=null,Mt=null,pt=null,Lt=null,ne=null,Re=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,M=[],b=null,A=!1,y=null,x=null,P=null,N=null,O=null,B=null,I=null,F=new xe(0,0,0),$=0,w=!1,T=null,z=null,K=null,Q=null,it=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const at=r.getParameter(r.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),U=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),U=H>=2);let At=null,bt={};const D=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),ut=new un().fromArray(D),Ct=new un().fromArray(W);function Ft(k,Nt,Tt,St){const Mt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(k,pt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Lt=0;Lt<Tt;Lt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Nt+Lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return pt}const tt={};tt[r.TEXTURE_2D]=Ft(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(r.DEPTH_TEST),h.setFunc(Yr),se(!1),Pe(R_),dt(r.CULL_FACE),fe(Ta);function dt(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Ut(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function Ht(k,Nt){return _[k]!==Nt?(r.bindFramebuffer(k,Nt),_[k]=Nt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function zt(k,Nt){let Tt=M,St=!1;if(k){Tt=S.get(Nt),Tt===void 0&&(Tt=[],S.set(Nt,Tt));const Mt=k.textures;if(Tt.length!==Mt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Lt=Mt.length;pt<Lt;pt++)Tt[pt]=r.COLOR_ATTACHMENT0+pt;Tt.length=Mt.length,St=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,St=!0);St&&r.drawBuffers(Tt)}function ce(k){return b!==k?(r.useProgram(k),b=k,!0):!1}const Ze={[Fs]:r.FUNC_ADD,[cE]:r.FUNC_SUBTRACT,[uE]:r.FUNC_REVERSE_SUBTRACT};Ze[fE]=r.MIN,Ze[hE]=r.MAX;const me={[dE]:r.ZERO,[pE]:r.ONE,[mE]:r.SRC_COLOR,[vd]:r.SRC_ALPHA,[yE]:r.SRC_ALPHA_SATURATE,[xE]:r.DST_COLOR,[_E]:r.DST_ALPHA,[gE]:r.ONE_MINUS_SRC_COLOR,[xd]:r.ONE_MINUS_SRC_ALPHA,[SE]:r.ONE_MINUS_DST_COLOR,[vE]:r.ONE_MINUS_DST_ALPHA,[ME]:r.CONSTANT_COLOR,[EE]:r.ONE_MINUS_CONSTANT_COLOR,[bE]:r.CONSTANT_ALPHA,[TE]:r.ONE_MINUS_CONSTANT_ALPHA};function fe(k,Nt,Tt,St,Mt,pt,Lt,ne,Re,ge){if(k===Ta){A===!0&&(Ut(r.BLEND),A=!1);return}if(A===!1&&(dt(r.BLEND),A=!0),k!==lE){if(k!==y||ge!==w){if((x!==Fs||O!==Fs)&&(r.blendEquation(r.FUNC_ADD),x=Fs,O=Fs),ge)switch(k){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case C_:r.blendFunc(r.ONE,r.ONE);break;case w_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case D_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",k);break}else switch(k){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case C_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case w_:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case D_:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",k);break}P=null,N=null,B=null,I=null,F.set(0,0,0),$=0,y=k,w=ge}return}Mt=Mt||Nt,pt=pt||Tt,Lt=Lt||St,(Nt!==x||Mt!==O)&&(r.blendEquationSeparate(Ze[Nt],Ze[Mt]),x=Nt,O=Mt),(Tt!==P||St!==N||pt!==B||Lt!==I)&&(r.blendFuncSeparate(me[Tt],me[St],me[pt],me[Lt]),P=Tt,N=St,B=pt,I=Lt),(ne.equals(F)===!1||Re!==$)&&(r.blendColor(ne.r,ne.g,ne.b,Re),F.copy(ne),$=Re),y=k,w=!1}function Ae(k,Nt){k.side===Ea?Ut(r.CULL_FACE):dt(r.CULL_FACE);let Tt=k.side===ri;Nt&&(Tt=!Tt),se(Tt),k.blending===kr&&k.transparent===!1?fe(Ta):fe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const St=k.stencilWrite;d.setTest(St),St&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){T!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),T=k)}function Pe(k){k!==sE?(dt(r.CULL_FACE),k!==z&&(k===R_?r.cullFace(r.BACK):k===rE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),z=k}function V(k){k!==K&&(U&&r.lineWidth(k),K=k)}function je(k,Nt,Tt){k?(dt(r.POLYGON_OFFSET_FILL),(Q!==Nt||it!==Tt)&&(r.polygonOffset(Nt,Tt),Q=Nt,it=Tt)):Ut(r.POLYGON_OFFSET_FILL)}function Se(k){k?dt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function ye(k){k===void 0&&(k=r.TEXTURE0+lt-1),At!==k&&(r.activeTexture(k),At=k)}function Yt(k,Nt,Tt){Tt===void 0&&(At===null?Tt=r.TEXTURE0+lt-1:Tt=At);let St=bt[Tt];St===void 0&&(St={type:void 0,texture:void 0},bt[Tt]=St),(St.type!==k||St.texture!==Nt)&&(At!==Tt&&(r.activeTexture(Tt),At=Tt),r.bindTexture(k,Nt||tt[k]),St.type=k,St.texture=Nt)}function L(){const k=bt[At];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function vt(){try{r.texSubImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Et(){try{r.texSubImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Vt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Ot(){try{r.texStorage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function kt(){try{r.texStorage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function te(){try{r.texImage2D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Rt(){try{r.texImage3D(...arguments)}catch(k){Ce("WebGLState:",k)}}function Dt(k){ut.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ut.copy(k))}function mt(k){Ct.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ct.copy(k))}function wt(k,Nt){let Tt=p.get(Nt);Tt===void 0&&(Tt=new WeakMap,p.set(Nt,Tt));let St=Tt.get(k);St===void 0&&(St=r.getUniformBlockIndex(Nt,k.name),Tt.set(k,St))}function gt(k,Nt){const St=p.get(Nt).get(k);m.get(Nt)!==St&&(r.uniformBlockBinding(Nt,St,k.__bindingPointIndex),m.set(Nt,St))}function Kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},At=null,bt={},_={},S=new WeakMap,M=[],b=null,A=!1,y=null,x=null,P=null,N=null,O=null,B=null,I=null,F=new xe(0,0,0),$=0,w=!1,T=null,z=null,K=null,Q=null,it=null,ut.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:dt,disable:Ut,bindFramebuffer:Ht,drawBuffers:zt,useProgram:ce,setBlending:fe,setMaterial:Ae,setFlipSided:se,setCullFace:Pe,setLineWidth:V,setPolygonOffset:je,setScissorTest:Se,activeTexture:ye,bindTexture:Yt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:te,texImage3D:Rt,updateUBOMapping:wt,uniformBlockBinding:gt,texStorage2D:Ot,texStorage3D:kt,texSubImage2D:vt,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:Vt,scissor:Dt,viewport:mt,reset:Kt}}function yC(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):cu("canvas")}function A(L,E,j){let vt=1;const Et=Yt(L);if((Et.width>j||Et.height>j)&&(vt=j/Math.max(Et.width,Et.height)),vt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(vt*Et.width),Vt=Math.floor(vt*Et.height);_===void 0&&(_=b(ht,Vt));const Ot=E?b(ht,Vt):_;return Ot.width=ht,Ot.height=Vt,Ot.getContext("2d").drawImage(L,0,0,ht,Vt),re("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ht+"x"+Vt+")."),Ot}else return"data"in L&&re("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function y(L){return L.generateMipmaps}function x(L){r.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(L,E,j,vt,Et=!1){if(L!==null){if(r[L]!==void 0)return r[L];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=E;if(E===r.RED&&(j===r.FLOAT&&(ht=r.R32F),j===r.HALF_FLOAT&&(ht=r.R16F),j===r.UNSIGNED_BYTE&&(ht=r.R8)),E===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.R8UI),j===r.UNSIGNED_SHORT&&(ht=r.R16UI),j===r.UNSIGNED_INT&&(ht=r.R32UI),j===r.BYTE&&(ht=r.R8I),j===r.SHORT&&(ht=r.R16I),j===r.INT&&(ht=r.R32I)),E===r.RG&&(j===r.FLOAT&&(ht=r.RG32F),j===r.HALF_FLOAT&&(ht=r.RG16F),j===r.UNSIGNED_BYTE&&(ht=r.RG8)),E===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RG8UI),j===r.UNSIGNED_SHORT&&(ht=r.RG16UI),j===r.UNSIGNED_INT&&(ht=r.RG32UI),j===r.BYTE&&(ht=r.RG8I),j===r.SHORT&&(ht=r.RG16I),j===r.INT&&(ht=r.RG32I)),E===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),j===r.UNSIGNED_INT&&(ht=r.RGB32UI),j===r.BYTE&&(ht=r.RGB8I),j===r.SHORT&&(ht=r.RGB16I),j===r.INT&&(ht=r.RGB32I)),E===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),j===r.UNSIGNED_INT&&(ht=r.RGBA32UI),j===r.BYTE&&(ht=r.RGBA8I),j===r.SHORT&&(ht=r.RGBA16I),j===r.INT&&(ht=r.RGBA32I)),E===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),E===r.RGBA){const Vt=Et?ou:we.getTransfer(vt);j===r.FLOAT&&(ht=r.RGBA32F),j===r.HALF_FLOAT&&(ht=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ht=Vt===Ge?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function O(L,E){let j;return L?E===null||E===Qi||E===rl?j=r.DEPTH24_STENCIL8:E===ji?j=r.DEPTH32F_STENCIL8:E===sl&&(j=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qi||E===rl?j=r.DEPTH_COMPONENT24:E===ji?j=r.DEPTH_COMPONENT32F:E===sl&&(j=r.DEPTH_COMPONENT16),j}function B(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),$(E),E.isVideoTexture&&g.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),T(E)}function $(L){const E=s.get(L);if(E.__webglInit===void 0)return;const j=L.source,vt=S.get(j);if(vt){const Et=vt[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(L),Object.keys(vt).length===0&&S.delete(j)}s.remove(L)}function w(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const j=L.source,vt=S.get(j);delete vt[E.__cacheKey],h.memory.textures--}function T(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(E.__webglFramebuffer[vt]))for(let Et=0;Et<E.__webglFramebuffer[vt].length;Et++)r.deleteFramebuffer(E.__webglFramebuffer[vt][Et]);else r.deleteFramebuffer(E.__webglFramebuffer[vt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[vt])}else{if(Array.isArray(E.__webglFramebuffer))for(let vt=0;vt<E.__webglFramebuffer.length;vt++)r.deleteFramebuffer(E.__webglFramebuffer[vt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let vt=0;vt<E.__webglColorRenderbuffer.length;vt++)E.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[vt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=L.textures;for(let vt=0,Et=j.length;vt<Et;vt++){const ht=s.get(j[vt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(j[vt])}s.remove(L)}let z=0;function K(){z=0}function Q(){const L=z;return L>=l.maxTextures&&re("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),z+=1,L}function it(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function lt(L,E){const j=s.get(L);if(L.isVideoTexture&&Se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const vt=L.image;if(vt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(j,L,E);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+E)}function U(L,E){const j=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){tt(j,L,E);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+E)}function H(L,E){const j=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){tt(j,L,E);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+E)}function at(L,E){const j=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){dt(j,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+E)}const At={[wd]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Dd]:r.MIRRORED_REPEAT},bt={[Pn]:r.NEAREST,[CE]:r.NEAREST_MIPMAP_NEAREST,[Ac]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Lh]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},D={[LE]:r.NEVER,[FE]:r.ALWAYS,[NE]:r.LESS,[Mp]:r.LEQUAL,[OE]:r.EQUAL,[Ep]:r.GEQUAL,[PE]:r.GREATER,[IE]:r.NOTEQUAL};function W(L,E){if(E.type===ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Lh||E.magFilter===Ac||E.magFilter===zs||E.minFilter===Vn||E.minFilter===Lh||E.minFilter===Ac||E.minFilter===zs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,At[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,At[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,At[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,bt[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,bt[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Ac&&E.minFilter!==zs||E.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ut(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const vt=E.source;let Et=S.get(vt);Et===void 0&&(Et={},S.set(vt,Et));const ht=it(E);if(ht!==L.__cacheKey){Et[ht]===void 0&&(Et[ht]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,j=!0),Et[ht].usedTimes++;const Vt=Et[L.__cacheKey];Vt!==void 0&&(Et[L.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(E)),L.__cacheKey=ht,L.__webglTexture=Et[ht].texture}return j}function Ct(L,E,j){return Math.floor(Math.floor(L/j)/E)}function Ft(L,E,j,vt){const ht=L.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,j,vt,E.data);else{ht.sort((Rt,Dt)=>Rt.start-Dt.start);let Vt=0;for(let Rt=1;Rt<ht.length;Rt++){const Dt=ht[Vt],mt=ht[Rt],wt=Dt.start+Dt.count,gt=Ct(mt.start,E.width,4),Kt=Ct(Dt.start,E.width,4);mt.start<=wt+1&&gt===Kt&&Ct(mt.start+mt.count-1,E.width,4)===gt?Dt.count=Math.max(Dt.count,mt.start+mt.count-Dt.start):(++Vt,ht[Vt]=mt)}ht.length=Vt+1;const Ot=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Dt=ht.length;Rt<Dt;Rt++){const mt=ht[Rt],wt=Math.floor(mt.start/4),gt=Math.ceil(mt.count/4),Kt=wt%E.width,k=Math.floor(wt/E.width),Nt=gt,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,Kt,k,Nt,Tt,j,vt,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function tt(L,E,j){let vt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=r.TEXTURE_3D);const Et=ut(L,E),ht=E.source;i.bindTexture(vt,L.__webglTexture,r.TEXTURE0+j);const Vt=s.get(ht);if(ht.version!==Vt.__version||Et===!0){i.activeTexture(r.TEXTURE0+j);const Ot=we.getPrimaries(we.workingColorSpace),kt=E.colorSpace===cs?null:we.getPrimaries(E.colorSpace),te=E.colorSpace===cs||Ot===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Rt=A(E.image,!1,l.maxTextureSize);Rt=ye(E,Rt);const Dt=c.convert(E.format,E.colorSpace),mt=c.convert(E.type);let wt=N(E.internalFormat,Dt,mt,E.colorSpace,E.isVideoTexture);W(vt,E);let gt;const Kt=E.mipmaps,k=E.isVideoTexture!==!0,Nt=Vt.__version===void 0||Et===!0,Tt=ht.dataReady,St=B(E,Rt);if(E.isDepthTexture)wt=O(E.format===Hs,E.type),Nt&&(k?i.texStorage2D(r.TEXTURE_2D,1,wt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,wt,Rt.width,Rt.height,0,Dt,mt,null));else if(E.isDataTexture)if(Kt.length>0){k&&Nt&&i.texStorage2D(r.TEXTURE_2D,St,wt,Kt[0].width,Kt[0].height);for(let Mt=0,pt=Kt.length;Mt<pt;Mt++)gt=Kt[Mt],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,gt.width,gt.height,Dt,mt,gt.data):i.texImage2D(r.TEXTURE_2D,Mt,wt,gt.width,gt.height,0,Dt,mt,gt.data);E.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(r.TEXTURE_2D,St,wt,Rt.width,Rt.height),Tt&&Ft(E,Rt,Dt,mt)):i.texImage2D(r.TEXTURE_2D,0,wt,Rt.width,Rt.height,0,Dt,mt,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,St,wt,Kt[0].width,Kt[0].height,Rt.depth);for(let Mt=0,pt=Kt.length;Mt<pt;Mt++)if(gt=Kt[Mt],E.format!==Hi)if(Dt!==null)if(k){if(Tt)if(E.layerUpdates.size>0){const Lt=ov(gt.width,gt.height,E.format,E.type);for(const ne of E.layerUpdates){const Re=gt.data.subarray(ne*Lt/gt.data.BYTES_PER_ELEMENT,(ne+1)*Lt/gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ne,gt.width,gt.height,1,Dt,Re)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,gt.width,gt.height,Rt.depth,Dt,gt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,wt,gt.width,gt.height,Rt.depth,0,gt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,gt.width,gt.height,Rt.depth,Dt,mt,gt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,wt,gt.width,gt.height,Rt.depth,0,Dt,mt,gt.data)}else{k&&Nt&&i.texStorage2D(r.TEXTURE_2D,St,wt,Kt[0].width,Kt[0].height);for(let Mt=0,pt=Kt.length;Mt<pt;Mt++)gt=Kt[Mt],E.format!==Hi?Dt!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,gt.width,gt.height,Dt,gt.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,wt,gt.width,gt.height,0,gt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,gt.width,gt.height,Dt,mt,gt.data):i.texImage2D(r.TEXTURE_2D,Mt,wt,gt.width,gt.height,0,Dt,mt,gt.data)}else if(E.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,St,wt,Rt.width,Rt.height,Rt.depth),Tt)if(E.layerUpdates.size>0){const Mt=ov(Rt.width,Rt.height,E.format,E.type);for(const pt of E.layerUpdates){const Lt=Rt.data.subarray(pt*Mt/Rt.data.BYTES_PER_ELEMENT,(pt+1)*Mt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,Rt.width,Rt.height,1,Dt,mt,Lt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Dt,mt,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,wt,Rt.width,Rt.height,Rt.depth,0,Dt,mt,Rt.data);else if(E.isData3DTexture)k?(Nt&&i.texStorage3D(r.TEXTURE_3D,St,wt,Rt.width,Rt.height,Rt.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Dt,mt,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,wt,Rt.width,Rt.height,Rt.depth,0,Dt,mt,Rt.data);else if(E.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(r.TEXTURE_2D,St,wt,Rt.width,Rt.height);else{let Mt=Rt.width,pt=Rt.height;for(let Lt=0;Lt<St;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,wt,Mt,pt,0,Dt,mt,null),Mt>>=1,pt>>=1}}else if(Kt.length>0){if(k&&Nt){const Mt=Yt(Kt[0]);i.texStorage2D(r.TEXTURE_2D,St,wt,Mt.width,Mt.height)}for(let Mt=0,pt=Kt.length;Mt<pt;Mt++)gt=Kt[Mt],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Dt,mt,gt):i.texImage2D(r.TEXTURE_2D,Mt,wt,Dt,mt,gt);E.generateMipmaps=!1}else if(k){if(Nt){const Mt=Yt(Rt);i.texStorage2D(r.TEXTURE_2D,St,wt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,mt,Rt)}else i.texImage2D(r.TEXTURE_2D,0,wt,Dt,mt,Rt);y(E)&&x(vt),Vt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function dt(L,E,j){if(E.image.length!==6)return;const vt=ut(L,E),Et=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+j);const ht=s.get(Et);if(Et.version!==ht.__version||vt===!0){i.activeTexture(r.TEXTURE0+j);const Vt=we.getPrimaries(we.workingColorSpace),Ot=E.colorSpace===cs?null:we.getPrimaries(E.colorSpace),kt=E.colorSpace===cs||Vt===Ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let pt=0;pt<6;pt++)!te&&!Rt?Dt[pt]=A(E.image[pt],!0,l.maxCubemapSize):Dt[pt]=Rt?E.image[pt].image:E.image[pt],Dt[pt]=ye(E,Dt[pt]);const mt=Dt[0],wt=c.convert(E.format,E.colorSpace),gt=c.convert(E.type),Kt=N(E.internalFormat,wt,gt,E.colorSpace),k=E.isVideoTexture!==!0,Nt=ht.__version===void 0||vt===!0,Tt=Et.dataReady;let St=B(E,mt);W(r.TEXTURE_CUBE_MAP,E);let Mt;if(te){k&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,St,Kt,mt.width,mt.height);for(let pt=0;pt<6;pt++){Mt=Dt[pt].mipmaps;for(let Lt=0;Lt<Mt.length;Lt++){const ne=Mt[Lt];E.format!==Hi?wt!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,0,0,ne.width,ne.height,wt,ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,Kt,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,0,0,ne.width,ne.height,wt,gt,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt,Kt,ne.width,ne.height,0,wt,gt,ne.data)}}}else{if(Mt=E.mipmaps,k&&Nt){Mt.length>0&&St++;const pt=Yt(Dt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,St,Kt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Rt){k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Dt[pt].width,Dt[pt].height,wt,gt,Dt[pt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Dt[pt].width,Dt[pt].height,0,wt,gt,Dt[pt].data);for(let Lt=0;Lt<Mt.length;Lt++){const Re=Mt[Lt].image[pt].image;k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,0,0,Re.width,Re.height,wt,gt,Re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,Kt,Re.width,Re.height,0,wt,gt,Re.data)}}else{k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,wt,gt,Dt[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,wt,gt,Dt[pt]);for(let Lt=0;Lt<Mt.length;Lt++){const ne=Mt[Lt];k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,0,0,wt,gt,ne.image[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Lt+1,Kt,wt,gt,ne.image[pt])}}}y(E)&&x(r.TEXTURE_CUBE_MAP),ht.__version=Et.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ut(L,E,j,vt,Et,ht){const Vt=c.convert(j.format,j.colorSpace),Ot=c.convert(j.type),kt=N(j.internalFormat,Vt,Ot,j.colorSpace),te=s.get(E),Rt=s.get(j);if(Rt.__renderTarget=E,!te.__hasExternalTextures){const Dt=Math.max(1,E.width>>ht),mt=Math.max(1,E.height>>ht);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,ht,kt,Dt,mt,E.depth,0,Vt,Ot,null):i.texImage2D(Et,ht,kt,Dt,mt,0,Vt,Ot,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Et,Rt.__webglTexture,0,V(E)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Et,Rt.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(L,E,j){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const vt=E.depthTexture,Et=vt&&vt.isDepthTexture?vt.type:null,ht=O(E.stencilBuffer,Et),Vt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),ht,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Vt,r.RENDERBUFFER,L)}else{const vt=E.textures;for(let Et=0;Et<vt.length;Et++){const ht=vt[Et],Vt=c.convert(ht.format,ht.colorSpace),Ot=c.convert(ht.type),kt=N(ht.internalFormat,Vt,Ot,ht.colorSpace);je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),kt,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),kt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,kt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(L,E,j){const vt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(E.depthTexture);if(Et.__renderTarget=E,(!Et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),W(r.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),Rt=c.convert(E.depthTexture.type);let Dt;E.depthTexture.format===Ca?Dt=r.DEPTH_COMPONENT24:E.depthTexture.format===Hs&&(Dt=r.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Dt,E.width,E.height,0,te,Rt,null)}}else lt(E.depthTexture,0);const ht=Et.__webglTexture,Vt=V(E),Ot=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,kt=E.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ca)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Ot,ht,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Ot,ht,0);else if(E.depthTexture.format===Hs)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Ot,ht,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Ot,ht,0);else throw new Error("Unknown depthTexture format")}function ce(L){const E=s.get(L),j=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const vt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),vt){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,vt.removeEventListener("dispose",Et)};vt.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=vt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let vt=0;vt<6;vt++)zt(E.__webglFramebuffer[vt],L,vt);else{const vt=L.texture.mipmaps;vt&&vt.length>0?zt(E.__webglFramebuffer[0],L,0):zt(E.__webglFramebuffer,L,0)}else if(j){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]===void 0)E.__webglDepthbuffer[vt]=r.createRenderbuffer(),Ht(E.__webglDepthbuffer[vt],L,!1);else{const Et=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,ht)}}else{const vt=L.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ht(E.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(L,E,j){const vt=s.get(L);E!==void 0&&Ut(vt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&ce(L)}function me(L){const E=L.texture,j=s.get(L),vt=s.get(E);L.addEventListener("dispose",F);const Et=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Vt=Et.length>1;if(Vt||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=E.version,h.memory.textures++),ht){j.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Ot]=[];for(let kt=0;kt<E.mipmaps.length;kt++)j.__webglFramebuffer[Ot][kt]=r.createFramebuffer()}else j.__webglFramebuffer[Ot]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ot=0;Ot<E.mipmaps.length;Ot++)j.__webglFramebuffer[Ot]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Vt)for(let Ot=0,kt=Et.length;Ot<kt;Ot++){const te=s.get(Et[Ot]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&je(L)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ot=0;Ot<Et.length;Ot++){const kt=Et[Ot];j.__webglColorRenderbuffer[Ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Ot]);const te=c.convert(kt.format,kt.colorSpace),Rt=c.convert(kt.type),Dt=N(kt.internalFormat,te,Rt,kt.colorSpace,L.isXRRenderTarget===!0),mt=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,Dt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,j.__webglColorRenderbuffer[Ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(j.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),W(r.TEXTURE_CUBE_MAP,E);for(let Ot=0;Ot<6;Ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ut(j.__webglFramebuffer[Ot][kt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,kt);else Ut(j.__webglFramebuffer[Ot],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);y(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ot=0,kt=Et.length;Ot<kt;Ot++){const te=Et[Ot],Rt=s.get(te);let Dt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Rt.__webglTexture),W(Dt,te),Ut(j.__webglFramebuffer,L,te,r.COLOR_ATTACHMENT0+Ot,Dt,0),y(te)&&x(Dt)}i.unbindTexture()}else{let Ot=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ot=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ot,vt.__webglTexture),W(Ot,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ut(j.__webglFramebuffer[kt],L,E,r.COLOR_ATTACHMENT0,Ot,kt);else Ut(j.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Ot,0);y(E)&&x(Ot),i.unbindTexture()}L.depthBuffer&&ce(L)}function fe(L){const E=L.textures;for(let j=0,vt=E.length;j<vt;j++){const Et=E[j];if(y(Et)){const ht=P(L),Vt=s.get(Et).__webglTexture;i.bindTexture(ht,Vt),x(ht),i.unbindTexture()}}}const Ae=[],se=[];function Pe(L){if(L.samples>0){if(je(L)===!1){const E=L.textures,j=L.width,vt=L.height;let Et=r.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Vt=s.get(L),Ot=E.length>1;if(Ot)for(let te=0;te<E.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[te]);const Rt=s.get(E[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,j,vt,0,0,j,vt,Et,r.NEAREST),m===!0&&(Ae.length=0,se.length=0,Ae.push(r.COLOR_ATTACHMENT0+te),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ae.push(ht),se.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ot)for(let te=0;te<E.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[te]);const Rt=s.get(E[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function je(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function ye(L,E){const j=L.colorSpace,vt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Zr&&j!==cs&&(we.getTransfer(j)===Ge?(vt!==Hi||Et!==Di)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",j)),E}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=lt,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=Ze,this.setupRenderTarget=me,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function MC(r,t){function i(s,l=cs){let c;const h=we.getTransfer(l);if(s===Di)return r.UNSIGNED_BYTE;if(s===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ax)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===sx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===nx)return r.BYTE;if(s===ix)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===gp)return r.INT;if(s===Qi)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===rx)return r.ALPHA;if(s===ox)return r.RGB;if(s===Hi)return r.RGBA;if(s===Ca)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===lx)return r.RED;if(s===xp)return r.RED_INTEGER;if(s===qr)return r.RG;if(s===Sp)return r.RG_INTEGER;if(s===yp)return r.RGBA_INTEGER;if(s===$c||s===tu||s===eu||s===nu)if(h===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ud||s===Ld||s===Nd||s===Od)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd||s===Id||s===Fd||s===Bd||s===zd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Pd||s===Id)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Fd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Bd)return c.COMPRESSED_R11_EAC;if(s===zd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Hd)return c.COMPRESSED_RG11_EAC;if(s===Gd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===jd||s===qd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===tp||s===ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Vd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$d)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tp)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ep)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===np||s===ip||s===ap)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===np)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sp||s===rp||s===op||s===lp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===sp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===op)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const EC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bC=`
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

}`;class TC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new yx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ji({vertexShader:EC,fragmentShader:bC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Da(new gu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AC extends Qr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",y=new TC,x={},P=i.getContextAttributes();let N=null,O=null;const B=[],I=[],F=new Ve;let $=null;const w=new wi;w.viewport=new un;const T=new wi;T.viewport=new un;const z=[w,T],K=new Ob;let Q=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let dt=B[tt];return dt===void 0&&(dt=new td,B[tt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(tt){let dt=B[tt];return dt===void 0&&(dt=new td,B[tt]=dt),dt.getGripSpace()},this.getHand=function(tt){let dt=B[tt];return dt===void 0&&(dt=new td,B[tt]=dt),dt.getHandSpace()};function lt(tt){const dt=I.indexOf(tt.inputSource);if(dt===-1)return;const Ut=B[dt];Ut!==void 0&&(Ut.update(tt.inputSource,tt.frame,p||h),Ut.dispatchEvent({type:tt.type,data:tt.inputSource}))}function U(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",H);for(let tt=0;tt<B.length;tt++){const dt=I[tt];dt!==null&&(I[tt]=null,B[tt].disconnect(dt))}Q=null,it=null,y.reset();for(const tt in x)delete x[tt];t.setRenderTarget(N),M=null,S=null,_=null,l=null,O=null,Ft.stop(),s.isPresenting=!1,t.setPixelRatio($),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",U),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Ht=null,zt=null;P.depth&&(zt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=P.stencil?Hs:Ca,Ht=P.stencil?rl:Qi);const ce={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(ce),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Ki(S.textureWidth,S.textureHeight,{format:Hi,type:Di,depthTexture:new cl(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ut={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Ki(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(tt){for(let dt=0;dt<tt.removed.length;dt++){const Ut=tt.removed[dt],Ht=I.indexOf(Ut);Ht>=0&&(I[Ht]=null,B[Ht].disconnect(Ut))}for(let dt=0;dt<tt.added.length;dt++){const Ut=tt.added[dt];let Ht=I.indexOf(Ut);if(Ht===-1){for(let ce=0;ce<B.length;ce++)if(ce>=I.length){I.push(Ut),Ht=ce;break}else if(I[ce]===null){I[ce]=Ut,Ht=ce;break}if(Ht===-1)break}const zt=B[Ht];zt&&zt.connect(Ut)}}const at=new st,At=new st;function bt(tt,dt,Ut){at.setFromMatrixPosition(dt.matrixWorld),At.setFromMatrixPosition(Ut.matrixWorld);const Ht=at.distanceTo(At),zt=dt.projectionMatrix.elements,ce=Ut.projectionMatrix.elements,Ze=zt[14]/(zt[10]-1),me=zt[14]/(zt[10]+1),fe=(zt[9]+1)/zt[5],Ae=(zt[9]-1)/zt[5],se=(zt[8]-1)/zt[0],Pe=(ce[8]+1)/ce[0],V=Ze*se,je=Ze*Pe,Se=Ht/(-se+Pe),ye=Se*-se;if(dt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ye),tt.translateZ(Se),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),zt[10]===-1)tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Yt=Ze+Se,L=me+Se,E=V-ye,j=je+(Ht-ye),vt=fe*me/L*Yt,Et=Ae*me/L*Yt;tt.projectionMatrix.makePerspective(E,j,vt,Et,Yt,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function D(tt,dt){dt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(dt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let dt=tt.near,Ut=tt.far;y.texture!==null&&(y.depthNear>0&&(dt=y.depthNear),y.depthFar>0&&(Ut=y.depthFar)),K.near=T.near=w.near=dt,K.far=T.far=w.far=Ut,(Q!==K.near||it!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),Q=K.near,it=K.far),K.layers.mask=tt.layers.mask|6,w.layers.mask=K.layers.mask&3,T.layers.mask=K.layers.mask&5;const Ht=tt.parent,zt=K.cameras;D(K,Ht);for(let ce=0;ce<zt.length;ce++)D(zt[ce],Ht);zt.length===2?bt(K,w,T):K.projectionMatrix.copy(w.projectionMatrix),W(tt,K,Ht)};function W(tt,dt,Ut){Ut===null?tt.matrix.copy(dt.matrixWorld):(tt.matrix.copy(Ut.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(dt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(dt.projectionMatrix),tt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ll*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(tt){return x[tt]};let ut=null;function Ct(tt,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const Ut=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let Ht=!1;Ut.length!==K.cameras.length&&(K.cameras.length=0,Ht=!0);for(let me=0;me<Ut.length;me++){const fe=Ut[me];let Ae=null;if(M!==null)Ae=M.getViewport(fe);else{const Pe=_.getViewSubImage(S,fe);Ae=Pe.viewport,me===0&&(t.setRenderTargetTextures(O,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(O))}let se=z[me];se===void 0&&(se=new wi,se.layers.enable(me),se.viewport=new un,z[me]=se),se.matrix.fromArray(fe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(fe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),me===0&&(K.matrix.copy(se.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ht===!0&&K.cameras.push(se)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const me=_.getDepthInformation(Ut[0]);me&&me.isValid&&me.texture&&y.init(me,l.renderState)}if(zt&&zt.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let me=0;me<Ut.length;me++){const fe=Ut[me].camera;if(fe){let Ae=x[fe];Ae||(Ae=new yx,x[fe]=Ae);const se=_.getCameraImage(fe);Ae.sourceTexture=se}}}}for(let Ut=0;Ut<B.length;Ut++){const Ht=I[Ut],zt=B[Ut];Ht!==null&&zt!==void 0&&zt.update(Ht,dt,p||h)}ut&&ut(tt,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),b=null}const Ft=new Ex;Ft.setAnimationLoop(Ct),this.setAnimationLoop=function(tt){ut=tt},this.dispose=function(){}}}const Ps=new wa,RC=new nn;function CC(r,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,mx(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,P,N,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,O)):x.isMeshMatcapMaterial?(c(y,x),b(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),A(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,P,N):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ri&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ri&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=t.get(x),N=P.envMap,O=P.envMapRotation;N&&(y.envMap.value=N,Ps.copy(O),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),y.envMapRotation.value.setFromMatrix4(RC.makeRotationFromEuler(Ps)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,N){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=N*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ri&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const P=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function wC(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const O=N.program;s.uniformBlockBinding(P,O)}function p(P,N){let O=l[P.id];O===void 0&&(b(P),O=g(P),l[P.id]=O,P.addEventListener("dispose",y));const B=N.program;s.updateUBOMapping(P,B);const I=t.render.frame;c[P.id]!==I&&(S(P),c[P.id]=I)}function g(P){const N=_();P.__bindingPointIndex=N;const O=r.createBuffer(),B=P.__size,I=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,B,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,O),O}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const N=l[P.id],O=P.uniforms,B=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let I=0,F=O.length;I<F;I++){const $=Array.isArray(O[I])?O[I]:[O[I]];for(let w=0,T=$.length;w<T;w++){const z=$[w];if(M(z,I,w,B)===!0){const K=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let it=0;for(let lt=0;lt<Q.length;lt++){const U=Q[lt],H=A(U);typeof U=="number"||typeof U=="boolean"?(z.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,K+it,z.__data)):U.isMatrix3?(z.__data[0]=U.elements[0],z.__data[1]=U.elements[1],z.__data[2]=U.elements[2],z.__data[3]=0,z.__data[4]=U.elements[3],z.__data[5]=U.elements[4],z.__data[6]=U.elements[5],z.__data[7]=0,z.__data[8]=U.elements[6],z.__data[9]=U.elements[7],z.__data[10]=U.elements[8],z.__data[11]=0):(U.toArray(z.__data,it),it+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,N,O,B){const I=P.value,F=N+"_"+O;if(B[F]===void 0)return typeof I=="number"||typeof I=="boolean"?B[F]=I:B[F]=I.clone(),!0;{const $=B[F];if(typeof I=="number"||typeof I=="boolean"){if($!==I)return B[F]=I,!0}else if($.equals(I)===!1)return $.copy(I),!0}return!1}function b(P){const N=P.uniforms;let O=0;const B=16;for(let F=0,$=N.length;F<$;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let T=0,z=w.length;T<z;T++){const K=w[T],Q=Array.isArray(K.value)?K.value:[K.value];for(let it=0,lt=Q.length;it<lt;it++){const U=Q[it],H=A(U),at=O%B,At=at%H.boundary,bt=at+At;O+=At,bt!==0&&B-bt<H.storage&&(O+=B-bt),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=O,O+=H.storage}}}const I=O%B;return I>0&&(O+=B-I),P.__size=O,P.__cache={},this}function A(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",P),N}function y(P){const N=P.target;N.removeEventListener("dispose",y);const O=h.indexOf(N.__bindingPointIndex);h.splice(O,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const DC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function UC(){return Wi===null&&(Wi=new Ab(DC,16,16,qr,Ra),Wi.name="DFG_LUT",Wi.minFilter=Vn,Wi.magFilter=Vn,Wi.wrapS=ba,Wi.wrapT=ba,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class LC{constructor(t={}){const{canvas:i=BE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=Di}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const A=M,y=new Set([yp,Sp,xp]),x=new Set([Di,Qi,sl,rl,_p,vp]),P=new Uint32Array(4),N=new Int32Array(4);let O=null,B=null;const I=[],F=[];let $=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let T=!1;this._outputColorSpace=Ri;let z=0,K=0,Q=null,it=-1,lt=null;const U=new un,H=new un;let at=null;const At=new xe(0);let bt=0,D=i.width,W=i.height,ut=1,Ct=null,Ft=null;const tt=new un(0,0,D,W),dt=new un(0,0,D,W);let Ut=!1;const Ht=new xx;let zt=!1,ce=!1;const Ze=new nn,me=new st,fe=new un,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Pe(){return Q===null?ut:1}let V=s;function je(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Re,!1),i.addEventListener("webglcontextcreationerror",ge,!1),V===null){const q="webgl2";if(V=je(q,C),V===null)throw je(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ce("WebGLRenderer: "+C.message),C}let Se,ye,Yt,L,E,j,vt,Et,ht,Vt,Ot,kt,te,Rt,Dt,mt,wt,gt,Kt,k,Nt,Tt,St,Mt;function pt(){Se=new U1(V),Se.init(),Tt=new MC(V,Se),ye=new M1(V,Se,t,Tt),Yt=new SC(V,Se),ye.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),L=new O1(V),E=new sC,j=new yC(V,Se,Yt,E,ye,Tt,L),vt=new b1(w),Et=new D1(w),ht=new Bb(V),St=new S1(V,ht),Vt=new L1(V,ht,L,St),Ot=new I1(V,Vt,ht,L),Kt=new P1(V,ye,j),mt=new E1(E),kt=new aC(w,vt,Et,Se,ye,St,mt),te=new CC(w,E),Rt=new oC,Dt=new dC(Se),gt=new x1(w,vt,Et,Yt,Ot,b,m),wt=new vC(w,Ot,ye),Mt=new wC(V,L,ye,Yt),k=new y1(V,Se,L),Nt=new N1(V,Se,L),L.programs=kt.programs,w.capabilities=ye,w.extensions=Se,w.properties=E,w.renderLists=Rt,w.shadowMap=wt,w.state=Yt,w.info=L}pt(),A!==Di&&($=new B1(A,i.width,i.height,l,c));const Lt=new AC(w,V);this.xr=Lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(C){C!==void 0&&(ut=C,this.setSize(D,W,!1))},this.getSize=function(C){return C.set(D,W)},this.setSize=function(C,q,ct=!0){if(Lt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,W=q,i.width=Math.floor(C*ut),i.height=Math.floor(q*ut),ct===!0&&(i.style.width=C+"px",i.style.height=q+"px"),$!==null&&$.setSize(i.width,i.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(D*ut,W*ut).floor()},this.setDrawingBufferSize=function(C,q,ct){D=C,W=q,ut=ct,i.width=Math.floor(C*ct),i.height=Math.floor(q*ct),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(A===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,q,ct,rt){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,q,ct,rt),Yt.viewport(U.copy(tt).multiplyScalar(ut).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,q,ct,rt){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,q,ct,rt),Yt.scissor(H.copy(dt).multiplyScalar(ut).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(C){Yt.setScissorTest(Ut=C)},this.setOpaqueSort=function(C){Ct=C},this.setTransparentSort=function(C){Ft=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ct=!0){let rt=0;if(C){let J=!1;if(Q!==null){const Pt=Q.texture.format;J=y.has(Pt)}if(J){const Pt=Q.texture.type,Gt=x.has(Pt),It=gt.getClearColor(),Xt=gt.getClearAlpha(),jt=It.r,ee=It.g,qt=It.b;Gt?(P[0]=jt,P[1]=ee,P[2]=qt,P[3]=Xt,V.clearBufferuiv(V.COLOR,0,P)):(N[0]=jt,N[1]=ee,N[2]=qt,N[3]=Xt,V.clearBufferiv(V.COLOR,0,N))}else rt|=V.COLOR_BUFFER_BIT}q&&(rt|=V.DEPTH_BUFFER_BIT),ct&&(rt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Re,!1),i.removeEventListener("webglcontextcreationerror",ge,!1),gt.dispose(),Rt.dispose(),Dt.dispose(),E.dispose(),vt.dispose(),Et.dispose(),Ot.dispose(),St.dispose(),Mt.dispose(),kt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Fn),Lt.removeEventListener("sessionend",Kn),Qn.stop()};function ne(C){C.preventDefault(),P_("WebGLRenderer: Context Lost."),T=!0}function Re(){P_("WebGLRenderer: Context Restored."),T=!1;const C=L.autoReset,q=wt.enabled,ct=wt.autoUpdate,rt=wt.needsUpdate,J=wt.type;pt(),L.autoReset=C,wt.enabled=q,wt.autoUpdate=ct,wt.needsUpdate=rt,wt.type=J}function ge(C){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function fn(C){const q=C.target;q.removeEventListener("dispose",fn),In(q)}function In(C){Ui(C),E.remove(C)}function Ui(C){const q=E.get(C).programs;q!==void 0&&(q.forEach(function(ct){kt.releaseProgram(ct)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ct,rt,J,Pt){q===null&&(q=Ae);const Gt=J.isMesh&&J.matrixWorld.determinant()<0,It=hs(C,q,ct,rt,J);Yt.setMaterial(rt,Gt);let Xt=ct.index,jt=1;if(rt.wireframe===!0){if(Xt=Vt.getWireframeAttribute(ct),Xt===void 0)return;jt=2}const ee=ct.drawRange,qt=ct.attributes.position;let ie=ee.start*jt,Le=(ee.start+ee.count)*jt;Pt!==null&&(ie=Math.max(ie,Pt.start*jt),Le=Math.min(Le,(Pt.start+Pt.count)*jt)),Xt!==null?(ie=Math.max(ie,0),Le=Math.min(Le,Xt.count)):qt!=null&&(ie=Math.max(ie,0),Le=Math.min(Le,qt.count));const $e=Le-ie;if($e<0||$e===1/0)return;St.setup(J,rt,It,ct,Xt);let qe,Ie=k;if(Xt!==null&&(qe=ht.get(Xt),Ie=Nt,Ie.setIndex(qe)),J.isMesh)rt.wireframe===!0?(Yt.setLineWidth(rt.wireframeLinewidth*Pe()),Ie.setMode(V.LINES)):Ie.setMode(V.TRIANGLES);else if(J.isLine){let Jt=rt.linewidth;Jt===void 0&&(Jt=1),Yt.setLineWidth(Jt*Pe()),J.isLineSegments?Ie.setMode(V.LINES):J.isLineLoop?Ie.setMode(V.LINE_LOOP):Ie.setMode(V.LINE_STRIP)}else J.isPoints?Ie.setMode(V.POINTS):J.isSprite&&Ie.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Ie.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Jt=J._multiDrawStarts,Ne=J._multiDrawCounts,oe=J._multiDrawCount,Tn=Xt?ht.get(Xt).bytesPerElement:1,ta=E.get(rt).currentProgram.getUniforms();for(let An=0;An<oe;An++)ta.setValue(V,"_gl_DrawID",An),Ie.render(Jt[An]/Tn,Ne[An])}else if(J.isInstancedMesh)Ie.renderInstances(ie,$e,J.count);else if(ct.isInstancedBufferGeometry){const Jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ne=Math.min(ct.instanceCount,Jt);Ie.renderInstances(ie,$e,Ne)}else Ie.render(ie,$e)};function Fe(C,q,ct){C.transparent===!0&&C.side===Ea&&C.forceSinglePass===!1?(C.side=ri,C.needsUpdate=!0,ks(C,q,ct),C.side=fs,C.needsUpdate=!0,ks(C,q,ct),C.side=Ea):ks(C,q,ct)}this.compile=function(C,q,ct=null){ct===null&&(ct=C),B=Dt.get(ct),B.init(q),F.push(B),ct.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),C!==ct&&C.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(B.pushLight(J),J.castShadow&&B.pushShadow(J))}),B.setupLights();const rt=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pt=J.material;if(Pt)if(Array.isArray(Pt))for(let Gt=0;Gt<Pt.length;Gt++){const It=Pt[Gt];Fe(It,ct,J),rt.add(It)}else Fe(Pt,ct,J),rt.add(Pt)}),B=F.pop(),rt},this.compileAsync=function(C,q,ct=null){const rt=this.compile(C,q,ct);return new Promise(J=>{function Pt(){if(rt.forEach(function(Gt){E.get(Gt).currentProgram.isReady()&&rt.delete(Gt)}),rt.size===0){J(C);return}setTimeout(Pt,10)}Se.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let hn=null;function Zn(C){hn&&hn(C)}function Fn(){Qn.stop()}function Kn(){Qn.start()}const Qn=new Ex;Qn.setAnimationLoop(Zn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(C){hn=C,Lt.setAnimationLoop(C),C===null?Qn.stop():Qn.start()},Lt.addEventListener("sessionstart",Fn),Lt.addEventListener("sessionend",Kn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const ct=Lt.enabled===!0&&Lt.isPresenting===!0,rt=$!==null&&(Q===null||ct)&&$.begin(w,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(q),q=Lt.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,Q),B=Dt.get(C,F.length),B.init(q),F.push(B),Ze.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ht.setFromProjectionMatrix(Ze,qi,q.reversedDepth),ce=this.localClippingEnabled,zt=mt.init(this.clippingPlanes,ce),O=Rt.get(C,I.length),O.init(),I.push(O),Lt.enabled===!0&&Lt.isPresenting===!0){const Gt=w.xr.getDepthSensingMesh();Gt!==null&&Bn(Gt,q,-1/0,w.sortObjects)}Bn(C,q,0,w.sortObjects),O.finish(),w.sortObjects===!0&&O.sort(Ct,Ft),se=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,se&&gt.addToRenderList(O,C),this.info.render.frame++,zt===!0&&mt.beginShadows();const J=B.state.shadowsArray;if(wt.render(J,C,q),zt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&$.hasRenderPass())===!1){const Gt=O.opaque,It=O.transmissive;if(B.setupLights(),q.isArrayCamera){const Xt=q.cameras;if(It.length>0)for(let jt=0,ee=Xt.length;jt<ee;jt++){const qt=Xt[jt];on(Gt,It,C,qt)}se&&gt.render(C);for(let jt=0,ee=Xt.length;jt<ee;jt++){const qt=Xt[jt];an(O,C,qt,qt.viewport)}}else It.length>0&&on(Gt,It,C,q),se&&gt.render(C),an(O,C,q)}Q!==null&&K===0&&(j.updateMultisampleRenderTarget(Q),j.updateRenderTargetMipmap(Q)),rt&&$.end(w),C.isScene===!0&&C.onAfterRender(w,C,q),St.resetDefaultState(),it=-1,lt=null,F.pop(),F.length>0?(B=F[F.length-1],zt===!0&&mt.setGlobalState(w.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?O=I[I.length-1]:O=null};function Bn(C,q,ct,rt){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)B.pushLight(C),C.castShadow&&B.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ht.intersectsSprite(C)){rt&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ze);const Gt=Ot.update(C),It=C.material;It.visible&&O.push(C,Gt,It,ct,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ht.intersectsObject(C))){const Gt=Ot.update(C),It=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),fe.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),fe.copy(Gt.boundingSphere.center)),fe.applyMatrix4(C.matrixWorld).applyMatrix4(Ze)),Array.isArray(It)){const Xt=Gt.groups;for(let jt=0,ee=Xt.length;jt<ee;jt++){const qt=Xt[jt],ie=It[qt.materialIndex];ie&&ie.visible&&O.push(C,Gt,ie,ct,fe.z,qt)}}else It.visible&&O.push(C,Gt,It,ct,fe.z,null)}}const Pt=C.children;for(let Gt=0,It=Pt.length;Gt<It;Gt++)Bn(Pt[Gt],q,ct,rt)}function an(C,q,ct,rt){const{opaque:J,transmissive:Pt,transparent:Gt}=C;B.setupLightsView(ct),zt===!0&&mt.setGlobalState(w.clippingPlanes,ct),rt&&Yt.viewport(U.copy(rt)),J.length>0&&Jn(J,q,ct),Pt.length>0&&Jn(Pt,q,ct),Gt.length>0&&Jn(Gt,q,ct),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function on(C,q,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[rt.id]===void 0){const ie=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[rt.id]=new Ki(1,1,{generateMipmaps:!0,type:ie?Ra:Di,minFilter:zs,samples:ye.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Pt=B.state.transmissionRenderTarget[rt.id],Gt=rt.viewport||U;Pt.setSize(Gt.z*w.transmissionResolutionScale,Gt.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Xt=w.getActiveCubeFace(),jt=w.getActiveMipmapLevel();w.setRenderTarget(Pt),w.getClearColor(At),bt=w.getClearAlpha(),bt<1&&w.setClearColor(16777215,.5),w.clear(),se&&gt.render(ct);const ee=w.toneMapping;w.toneMapping=Zi;const qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),B.setupLightsView(rt),zt===!0&&mt.setGlobalState(w.clippingPlanes,rt),Jn(C,ct,rt),j.updateMultisampleRenderTarget(Pt),j.updateRenderTargetMipmap(Pt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Le=0,$e=q.length;Le<$e;Le++){const qe=q[Le],{object:Ie,geometry:Jt,material:Ne,group:oe}=qe;if(Ne.side===Ea&&Ie.layers.test(rt.layers)){const Tn=Ne.side;Ne.side=ri,Ne.needsUpdate=!0,$i(Ie,ct,rt,Jt,Ne,oe),Ne.side=Tn,Ne.needsUpdate=!0,ie=!0}}ie===!0&&(j.updateMultisampleRenderTarget(Pt),j.updateRenderTargetMipmap(Pt))}w.setRenderTarget(It,Xt,jt),w.setClearColor(At,bt),qt!==void 0&&(rt.viewport=qt),w.toneMapping=ee}function Jn(C,q,ct){const rt=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Pt=C.length;J<Pt;J++){const Gt=C[J],{object:It,geometry:Xt,group:jt}=Gt;let ee=Gt.material;ee.allowOverride===!0&&rt!==null&&(ee=rt),It.layers.test(ct.layers)&&$i(It,q,ct,Xt,ee,jt)}}function $i(C,q,ct,rt,J,Pt){C.onBeforeRender(w,q,ct,rt,J,Pt),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(w,q,ct,rt,C,Pt),J.transparent===!0&&J.side===Ea&&J.forceSinglePass===!1?(J.side=ri,J.needsUpdate=!0,w.renderBufferDirect(ct,q,rt,J,C,Pt),J.side=fs,J.needsUpdate=!0,w.renderBufferDirect(ct,q,rt,J,C,Pt),J.side=Ea):w.renderBufferDirect(ct,q,rt,J,C,Pt),C.onAfterRender(w,q,ct,rt,J,Pt)}function ks(C,q,ct){q.isScene!==!0&&(q=Ae);const rt=E.get(C),J=B.state.lights,Pt=B.state.shadowsArray,Gt=J.state.version,It=kt.getParameters(C,J.state,Pt,q,ct),Xt=kt.getProgramCacheKey(It);let jt=rt.programs;rt.environment=C.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(C.isMeshStandardMaterial?Et:vt).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",fn),jt=new Map,rt.programs=jt);let ee=jt.get(Xt);if(ee!==void 0){if(rt.currentProgram===ee&&rt.lightsStateVersion===Gt)return eo(C,It),ee}else It.uniforms=kt.getUniforms(C),C.onBeforeCompile(It,w),ee=kt.acquireProgram(It,Xt),jt.set(Xt,ee),rt.uniforms=It.uniforms;const qt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=mt.uniform),eo(C,It),rt.needsLights=Ua(C),rt.lightsStateVersion=Gt,rt.needsLights&&(qt.ambientLightColor.value=J.state.ambient,qt.lightProbe.value=J.state.probe,qt.directionalLights.value=J.state.directional,qt.directionalLightShadows.value=J.state.directionalShadow,qt.spotLights.value=J.state.spot,qt.spotLightShadows.value=J.state.spotShadow,qt.rectAreaLights.value=J.state.rectArea,qt.ltc_1.value=J.state.rectAreaLTC1,qt.ltc_2.value=J.state.rectAreaLTC2,qt.pointLights.value=J.state.point,qt.pointLightShadows.value=J.state.pointShadow,qt.hemisphereLights.value=J.state.hemi,qt.directionalShadowMap.value=J.state.directionalShadowMap,qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qt.spotShadowMap.value=J.state.spotShadowMap,qt.spotLightMatrix.value=J.state.spotLightMatrix,qt.spotLightMap.value=J.state.spotLightMap,qt.pointShadowMap.value=J.state.pointShadowMap,qt.pointShadowMatrix.value=J.state.pointShadowMatrix),rt.currentProgram=ee,rt.uniformsList=null,ee}function gl(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=su.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function eo(C,q){const ct=E.get(C);ct.outputColorSpace=q.outputColorSpace,ct.batching=q.batching,ct.batchingColor=q.batchingColor,ct.instancing=q.instancing,ct.instancingColor=q.instancingColor,ct.instancingMorph=q.instancingMorph,ct.skinning=q.skinning,ct.morphTargets=q.morphTargets,ct.morphNormals=q.morphNormals,ct.morphColors=q.morphColors,ct.morphTargetsCount=q.morphTargetsCount,ct.numClippingPlanes=q.numClippingPlanes,ct.numIntersection=q.numClipIntersection,ct.vertexAlphas=q.vertexAlphas,ct.vertexTangents=q.vertexTangents,ct.toneMapping=q.toneMapping}function hs(C,q,ct,rt,J){q.isScene!==!0&&(q=Ae),j.resetTextureUnits();const Pt=q.fog,Gt=rt.isMeshStandardMaterial?q.environment:null,It=Q===null?w.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zr,Xt=(rt.isMeshStandardMaterial?Et:vt).get(rt.envMap||Gt),jt=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ee=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!ct.morphAttributes.position,ie=!!ct.morphAttributes.normal,Le=!!ct.morphAttributes.color;let $e=Zi;rt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&($e=w.toneMapping);const qe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ie=qe!==void 0?qe.length:0,Jt=E.get(rt),Ne=B.state.lights;if(zt===!0&&(ce===!0||C!==lt)){const Cn=C===lt&&rt.id===it;mt.setState(rt,C,Cn)}let oe=!1;rt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ne.state.version||Jt.outputColorSpace!==It||J.isBatchedMesh&&Jt.batching===!1||!J.isBatchedMesh&&Jt.batching===!0||J.isBatchedMesh&&Jt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Jt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Jt.instancing===!1||!J.isInstancedMesh&&Jt.instancing===!0||J.isSkinnedMesh&&Jt.skinning===!1||!J.isSkinnedMesh&&Jt.skinning===!0||J.isInstancedMesh&&Jt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Jt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Jt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Jt.instancingMorph===!1&&J.morphTexture!==null||Jt.envMap!==Xt||rt.fog===!0&&Jt.fog!==Pt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==mt.numPlanes||Jt.numIntersection!==mt.numIntersection)||Jt.vertexAlphas!==jt||Jt.vertexTangents!==ee||Jt.morphTargets!==qt||Jt.morphNormals!==ie||Jt.morphColors!==Le||Jt.toneMapping!==$e||Jt.morphTargetsCount!==Ie)&&(oe=!0):(oe=!0,Jt.__version=rt.version);let Tn=Jt.currentProgram;oe===!0&&(Tn=ks(rt,q,J));let ta=!1,An=!1,_i=!1;const Be=Tn.getUniforms(),Rn=Jt.uniforms;if(Yt.useProgram(Tn.program)&&(ta=!0,An=!0,_i=!0),rt.id!==it&&(it=rt.id,An=!0),ta||lt!==C){Yt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(V,"projectionMatrix",C.projectionMatrix),Be.setValue(V,"viewMatrix",C.matrixWorldInverse);const wn=Be.map.cameraPosition;wn!==void 0&&wn.setValue(V,me.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&Be.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),lt!==C&&(lt=C,An=!0,_i=!0)}if(Jt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Be.setValue(V,"directionalShadowMap",Ne.state.directionalShadowMap,j),Ne.state.spotShadowMap.length>0&&Be.setValue(V,"spotShadowMap",Ne.state.spotShadowMap,j),Ne.state.pointShadowMap.length>0&&Be.setValue(V,"pointShadowMap",Ne.state.pointShadowMap,j)),J.isSkinnedMesh){Be.setOptional(V,J,"bindMatrix"),Be.setOptional(V,J,"bindMatrixInverse");const Cn=J.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Be.setValue(V,"boneTexture",Cn.boneTexture,j))}J.isBatchedMesh&&(Be.setOptional(V,J,"batchingTexture"),Be.setValue(V,"batchingTexture",J._matricesTexture,j),Be.setOptional(V,J,"batchingIdTexture"),Be.setValue(V,"batchingIdTexture",J._indirectTexture,j),Be.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Be.setValue(V,"batchingColorTexture",J._colorsTexture,j));const xn=ct.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Kt.update(J,ct,Tn),(An||Jt.receiveShadow!==J.receiveShadow)&&(Jt.receiveShadow=J.receiveShadow,Be.setValue(V,"receiveShadow",J.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Rn.envMap.value=Xt,Rn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=UC()),An&&(Be.setValue(V,"toneMappingExposure",w.toneMappingExposure),Jt.needsLights&&no(Rn,_i),Pt&&rt.fog===!0&&te.refreshFogUniforms(Rn,Pt),te.refreshMaterialUniforms(Rn,rt,ut,W,B.state.transmissionRenderTarget[C.id]),su.upload(V,gl(Jt),Rn,j)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(su.upload(V,gl(Jt),Rn,j),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(V,"center",J.center),Be.setValue(V,"modelViewMatrix",J.modelViewMatrix),Be.setValue(V,"normalMatrix",J.normalMatrix),Be.setValue(V,"modelMatrix",J.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Cn=rt.uniformsGroups;for(let wn=0,Xs=Cn.length;wn<Xs;wn++){const Li=Cn[wn];Mt.update(Li,Tn),Mt.bind(Li,Tn)}}return Tn}function no(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Ua(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,q,ct){const rt=E.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=q,E.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ct=E.get(C);ct.__webglFramebuffer=q,ct.__useDefaultFramebuffer=q===void 0};const La=V.createFramebuffer();this.setRenderTarget=function(C,q=0,ct=0){Q=C,z=q,K=ct;let rt=null,J=!1,Pt=!1;if(C){const It=E.get(C);if(It.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,It.__webglFramebuffer),U.copy(C.viewport),H.copy(C.scissor),at=C.scissorTest,Yt.viewport(U),Yt.scissor(H),Yt.setScissorTest(at),it=-1;return}else if(It.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(It.__hasExternalTextures)j.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(It.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const jt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?rt=jt[q][ct]:rt=jt[q],J=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?rt=E.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?rt=jt[ct]:rt=jt,U.copy(C.viewport),H.copy(C.scissor),at=C.scissorTest}else U.copy(tt).multiplyScalar(ut).floor(),H.copy(dt).multiplyScalar(ut).floor(),at=Ut;if(ct!==0&&(rt=La),Yt.bindFramebuffer(V.FRAMEBUFFER,rt)&&Yt.drawBuffers(C,rt),Yt.viewport(U),Yt.scissor(H),Yt.setScissorTest(at),J){const It=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,ct)}else if(Pt){const It=q;for(let Xt=0;Xt<C.textures.length;Xt++){const jt=E.get(C.textures[Xt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xt,jt.__webglTexture,ct,It)}}else if(C!==null&&ct!==0){const It=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,It.__webglTexture,ct)}it=-1},this.readRenderTargetPixels=function(C,q,ct,rt,J,Pt,Gt,It=0){if(!(C&&C.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){Yt.bindFramebuffer(V.FRAMEBUFFER,Xt);try{const jt=C.textures[It],ee=jt.format,qt=jt.type;if(!ye.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-rt&&ct>=0&&ct<=C.height-J&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),V.readPixels(q,ct,rt,J,Tt.convert(ee),Tt.convert(qt),Pt))}finally{const jt=Q!==null?E.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,q,ct,rt,J,Pt,Gt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(q>=0&&q<=C.width-rt&&ct>=0&&ct<=C.height-J){Yt.bindFramebuffer(V.FRAMEBUFFER,Xt);const jt=C.textures[It],ee=jt.format,qt=jt.type;if(!ye.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ie),V.bufferData(V.PIXEL_PACK_BUFFER,Pt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),V.readPixels(q,ct,rt,J,Tt.convert(ee),Tt.convert(qt),0);const Le=Q!==null?E.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Le);const $e=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await zE(V,$e,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ie),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pt),V.deleteBuffer(ie),V.deleteSync($e),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ct=0){const rt=Math.pow(2,-ct),J=Math.floor(C.image.width*rt),Pt=Math.floor(C.image.height*rt),Gt=q!==null?q.x:0,It=q!==null?q.y:0;j.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Gt,It,J,Pt),Yt.unbindTexture()};const ds=V.createFramebuffer(),Na=V.createFramebuffer();this.copyTextureToTexture=function(C,q,ct=null,rt=null,J=0,Pt=null){Pt===null&&(J!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=J,J=0):Pt=0);let Gt,It,Xt,jt,ee,qt,ie,Le,$e;const qe=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(ct!==null)Gt=ct.max.x-ct.min.x,It=ct.max.y-ct.min.y,Xt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,ee=ct.min.y,qt=ct.isBox3?ct.min.z:0;else{const xn=Math.pow(2,-J);Gt=Math.floor(qe.width*xn),It=Math.floor(qe.height*xn),C.isDataArrayTexture?Xt=qe.depth:C.isData3DTexture?Xt=Math.floor(qe.depth*xn):Xt=1,jt=0,ee=0,qt=0}rt!==null?(ie=rt.x,Le=rt.y,$e=rt.z):(ie=0,Le=0,$e=0);const Ie=Tt.convert(q.format),Jt=Tt.convert(q.type);let Ne;q.isData3DTexture?(j.setTexture3D(q,0),Ne=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),Ne=V.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const oe=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ta=V.getParameter(V.UNPACK_SKIP_PIXELS),An=V.getParameter(V.UNPACK_SKIP_ROWS),_i=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const Be=C.isDataArrayTexture||C.isData3DTexture,Rn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const xn=E.get(C),Cn=E.get(q),wn=E.get(xn.__renderTarget),Xs=E.get(Cn.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,wn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Li=0;Li<Xt;Li++)Be&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(C).__webglTexture,J,qt+Li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Pt,$e+Li)),V.blitFramebuffer(jt,ee,Gt,It,ie,Le,Gt,It,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||E.has(C)){const xn=E.get(C),Cn=E.get(q);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,ds),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Na);for(let wn=0;wn<Xt;wn++)Be?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xn.__webglTexture,J,qt+wn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xn.__webglTexture,J),Rn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Cn.__webglTexture,Pt,$e+wn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Cn.__webglTexture,Pt),J!==0?V.blitFramebuffer(jt,ee,Gt,It,ie,Le,Gt,It,V.COLOR_BUFFER_BIT,V.NEAREST):Rn?V.copyTexSubImage3D(Ne,Pt,ie,Le,$e+wn,jt,ee,Gt,It):V.copyTexSubImage2D(Ne,Pt,ie,Le,jt,ee,Gt,It);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ne,Pt,ie,Le,$e,Gt,It,Xt,Ie,Jt,qe.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,Pt,ie,Le,$e,Gt,It,Xt,Ie,qe.data):V.texSubImage3D(Ne,Pt,ie,Le,$e,Gt,It,Xt,Ie,Jt,qe):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pt,ie,Le,Gt,It,Ie,Jt,qe.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pt,ie,Le,qe.width,qe.height,Ie,qe.data):V.texSubImage2D(V.TEXTURE_2D,Pt,ie,Le,Gt,It,Ie,Jt,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,oe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ta),V.pixelStorei(V.UNPACK_SKIP_ROWS,An),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_i),Pt===0&&q.generateMipmaps&&V.generateMipmap(Ne),Yt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){z=0,K=0,Q=null,Yt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const fd={main:"#e7e5e1",about:"#080808",portfolio:"#101012"},hd={main:13,about:11,portfolio:15};function Xn(r,t,i){return r+(t-r)*i}function dd(r){const t=Math.min(1,Math.max(0,r));return 1-Math.pow(1-t,4)}function NC(r){return r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2}function OC({scene:r,anchors:t,pointerRef:i,dragRef:s,zoomRef:l,hoverRef:c,labelEls:h}){const d=Zt.useRef(null),m=Zt.useRef(r),p=Zt.useRef(t);return Zt.useEffect(()=>{m.current=r},[r]),Zt.useEffect(()=>{p.current=t},[t]),Zt.useEffect(()=>{const g=d.current;if(!g)return;const _=new LC({antialias:!0,alpha:!1});_.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),_.setSize(g.clientWidth,g.clientHeight),g.appendChild(_.domElement);const S=new Tb,M=new xe(fd.main);S.background=M,S.fog=new uu(fd.about,.02);const b=new wi(52,g.clientWidth/g.clientHeight,.1,200);b.position.set(0,0,hd.main);const A=new Vr;S.add(A);const y=1600,x=new Float32Array(y*3);for(let mt=0;mt<y;mt++){const wt=12+Math.random()*46,gt=Math.random()*Math.PI*2,Kt=Math.acos(2*Math.random()-1);x[mt*3]=wt*Math.sin(Kt)*Math.cos(gt),x[mt*3+1]=wt*Math.sin(Kt)*Math.sin(gt),x[mt*3+2]=wt*Math.cos(Kt)}const P=new On;P.setAttribute("position",new si(x,3));const N=new au({color:16777215,size:.05,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1}),O=new ad(P,N);A.add(O);const B=200,I=[];for(let mt=0;mt<B;mt++)I.push(new st((Math.random()-.5)*26,(Math.random()-.5)*16,(Math.random()-.5)*22));const F=[];for(let mt=0;mt<B;mt++){let wt=0;for(let gt=mt+1;gt<B&&wt<3;gt++)I[mt].distanceTo(I[gt])<4.6&&(F.push(I[mt].x,I[mt].y,I[mt].z,I[gt].x,I[gt].y,I[gt].z),wt++)}const $=new On;$.setAttribute("position",new oi(F,3));const w=new iu({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),T=new id($,w);A.add(T);const z=new On;z.setAttribute("position",new oi(I.flatMap(mt=>[mt.x,mt.y,mt.z]),3));const K=new au({color:16777215,size:.08,transparent:!0,opacity:0,depthWrite:!1}),Q=new ad(z,K);A.add(Q);const it=new Vr;A.add(it);const lt=new iu({color:1710618,transparent:!0,opacity:.35});let U=null,H=[],at=!1;const At=()=>{for(let gt=it.children.length-1;gt>=0;gt--){const Kt=it.children[gt];it.remove(Kt),Kt instanceof Sx&&Kt.geometry.dispose()}const mt=[];H=[],p.current.forEach(gt=>{mt.push(0,0,0,gt.position[0],gt.position[1],gt.position[2]),H.push(gt.position[0],gt.position[1],gt.position[2])}),at=!1;const wt=new On;wt.setAttribute("position",new oi(mt,3)),U=new id(wt,lt),it.add(U)};At();let bt=p.current;const D=new Ib;D.params.Line={threshold:.4};const W=new Ve;let ut=null,Ct=!1;const Ft=window.matchMedia("(hover: hover) and (pointer: fine)").matches,tt=mt=>{mt.pointerType==="mouse"&&(Ct=!0)};window.addEventListener("pointermove",tt,{passive:!0});const dt=4,Ut=new Float32Array(dt*2*3),Ht=new On;Ht.setAttribute("position",new si(Ut,3));const zt=new iu({color:new xe("#ffffff"),transparent:!0,opacity:0,depthWrite:!1}),ce=new id(Ht,zt);ce.frustumCulled=!1,ce.renderOrder=8,A.add(ce);let Ze=null;const me=mt=>{const wt=p.current,gt=mt?wt.find(St=>St.id===mt):void 0;if(!gt)return;const[Kt,k,Nt]=gt.position,Tt=wt.filter(St=>St.id!==mt).map(St=>{const Mt=St.position[0]-Kt,pt=St.position[1]-k,Lt=St.position[2]-Nt;return{a:St,d:Mt*Mt+pt*pt+Lt*Lt}}).sort((St,Mt)=>St.d-Mt.d).slice(0,dt-1).map(St=>St.a);Ut.fill(0),Ut[3]=Kt,Ut[4]=k,Ut[5]=Nt,Tt.forEach((St,Mt)=>{const pt=(Mt+1)*6;Ut[pt]=Kt,Ut[pt+1]=k,Ut[pt+2]=Nt,Ut[pt+3]=St.position[0],Ut[pt+4]=St.position[1],Ut[pt+5]=St.position[2]}),Ht.attributes.position.needsUpdate=!0,Ht.setDrawRange(0,(Tt.length+1)*2)},fe=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ae=(mt,wt)=>{const gt=new Float32Array(mt*3),Kt=new Float32Array(mt*3),k=new On;k.setAttribute("position",new si(gt,3)),k.setAttribute("color",new si(Kt,3));const Nt=new au({size:wt,sizeAttenuation:!0,vertexColors:!0,depthWrite:!1}),Tt=new ad(k,Nt);Tt.frustumCulled=!1,Tt.renderOrder=6;const St=Array.from({length:mt},()=>({lane:0,t:0,dur:1,wait:Math.random()*3,dir:1}));return{arr:gt,col:Kt,geo:k,mat:Nt,pts:Tt,pulses:St}},se=Ae(12,.15);A.add(se.pts);const Pe=Ae(40,.13);A.add(Pe.pts);const V=F.length/6,je=new xe("#141414"),Se=new xe("#ffffff"),ye=new xe,Yt=(mt,wt,gt,Kt,k,Nt,Tt)=>{mt.pulses.forEach((St,Mt)=>{const pt=Mt*3;if(ye.copy(M),St.wait>0)St.wait-=wt,St.wait<=0&&(St.lane=Math.floor(Math.random()*gt),St.t=0,St.dur=Tt[0]+Math.random()*(Tt[1]-Tt[0]),St.dir=Math.random()<.5?1:-1);else if(St.t+=wt/St.dur,St.t>=1||St.lane>=gt)St.wait=.4+Math.random()*2.6;else{const[Lt,ne,Re,ge,fn,In]=Nt(St.lane),Ui=NC(St.dir===1?St.t:1-St.t);mt.arr[pt]=Lt+(ge-Lt)*Ui,mt.arr[pt+1]=ne+(fn-ne)*Ui,mt.arr[pt+2]=Re+(In-Re)*Ui,ye.lerp(Kt,Math.sin(Math.PI*St.t)*k)}mt.col[pt]=ye.r,mt.col[pt+1]=ye.g,mt.col[pt+2]=ye.b}),mt.geo.attributes.position.needsUpdate=!0,mt.geo.attributes.color.needsUpdate=!0};let L=0,E=null,j=0;const vt=new Pb;let Et=0;const ht={x:0,y:0},Vt=new st,Ot=new xe;let kt=hd.main,te=1;const Rt=()=>{Et=requestAnimationFrame(Rt);const mt=vt.getElapsedTime(),wt=Math.min(.05,mt-j);j=mt;const gt=m.current;p.current!==bt&&(At(),bt=p.current),gt!==E&&(E=gt,L=mt,at=!1);const Kt=fe?99:mt-L,k=Fe=>dd(gt==="main"?(Kt-.2-Fe*.05)/1.1:(Kt-.35-Fe*.09)/.8);if(U&&!at){const Fe=U.geometry.attributes.position,hn=H.length/3;let Zn=!0;for(let Fn=0;Fn<hn;Fn++){const Kn=gt==="main"?k(Fn):1;Kn<1&&(Zn=!1),Fe.setXYZ(Fn*2+1,H[Fn*3]*Kn,H[Fn*3+1]*Kn,H[Fn*3+2]*Kn)}Fe.needsUpdate=!0,U.geometry.boundingSphere=null,at=Zn}Ot.set(fd[gt]),M.lerp(Ot,.04),S.fog instanceof uu&&(S.fog.color.copy(M),S.fog.density=Xn(S.fog.density,gt==="main"?.008:.026,.04)),kt=Xn(kt,hd[gt],.04);const Nt=gt==="main"?0:.9;N.opacity=Xn(N.opacity,Nt,.045),K.opacity=Xn(K.opacity,Nt*.7,.045),w.opacity=Xn(w.opacity,gt==="about"?.12:gt==="portfolio"?.04:0,.045),lt.opacity=Xn(lt.opacity,gt==="main"?.35:0,.06);const Tt=i.current;if(ut=null,gt==="main"&&U&&Ct&&Ft&&!c.current){W.set(Tt.x,-Tt.y),D.setFromCamera(W,b);const Fe=D.intersectObject(U,!1);if(Fe.length&&Fe[0].index!=null){const hn=Math.floor(Fe[0].index/2);ut=p.current[hn]?.id??null}}const St=c.current??ut;St!==Ze&&(Ze=St,St&&me(St)),zt.color.set(gt==="main"?"#141414":"#ffffff"),zt.opacity=Xn(zt.opacity,St?.9:0,.16),ce.visible=zt.opacity>.02,it.visible=lt.opacity>.02;const Mt=s.current,pt=gt==="about"?.05:.25,Lt=gt==="about"?.04:.18;ht.x=Xn(ht.x,Mt.x,.09),ht.y=Xn(ht.y,Mt.y,.09);const ne=Tt.x*pt+ht.x,Re=-Tt.y*Lt+ht.y;A.rotation.y=Xn(A.rotation.y,ne,.08),A.rotation.x=Xn(A.rotation.x,Re,.08),te=Xn(te,l.current,.1);const ge=Nh.clamp(1.05/b.aspect,1,1.35);b.position.z=kt*te*ge,b.position.x=Xn(b.position.x,Tt.x*.6,.05);const fn=Nh.clamp(.4+b.aspect*.42,.56,1);A.scale.setScalar(Xn(A.scale.x,fn,.1)),b.position.y=Xn(b.position.y,-Tt.y*.4,.05),b.lookAt(0,0,0),O.rotation.y=mt*.01,T.rotation.y=mt*.014,Q.rotation.y=mt*.014,Pe.pts.rotation.y=mt*.014,se.pts.visible=!fe&&lt.opacity>.02,se.pts.visible&&Yt(se,wt,H.length/3,je,at?Math.min(1,lt.opacity/.35):0,Fe=>[0,0,0,H[Fe*3],H[Fe*3+1],H[Fe*3+2]],[1.6,2.8]),Pe.pts.visible=!fe&&V>0&&w.opacity>.01,Pe.pts.visible&&Yt(Pe,wt,V,Se,Math.min(1,w.opacity/.12)*.95,Fe=>{const hn=Fe*6;return[F[hn],F[hn+1],F[hn+2],F[hn+3],F[hn+4],F[hn+5]]},[1.2,2.4]);const In=_.domElement.clientWidth,Ui=_.domElement.clientHeight;p.current.forEach((Fe,hn)=>{const Zn=h.current.get(Fe.id);if(!Zn)return;Vt.set(Fe.position[0],Fe.position[1],Fe.position[2]),Vt.applyMatrix4(A.matrixWorld);const Fn=b.position.distanceTo(Vt);Vt.project(b);const Kn=Vt.z>1,Qn=(Vt.x*.5+.5)*In,Bn=(-Vt.y*.5+.5)*Ui,an=Fe.position[0]<-1.4?"0%":Fe.position[0]>1.4?"-100%":"-50%";Zn.style.transform=`translate(${an}, -50%) translate(${Math.round(Qn)}px, ${Math.round(Bn)}px)`;const on=Qn<-40||Qn>In+40||Bn<-40||Bn>Ui+40,Jn=Nh.clamp(1-(Fn-6)/22,.12,1),$i=gt==="main"?dd((k(hn)-.88)/.12):k(hn);Zn.style.opacity=Kn||on?"0":String(Jn*$i),Zn.style.pointerEvents=Kn||on||Jn<.3||$i<.5?"none":"auto",Zn.classList.toggle("is-lit",!Kn&&!on&&Fe.id===St)}),_.render(S,b)};Rt();const Dt=()=>{const mt=g.clientWidth,wt=g.clientHeight;_.setSize(mt,wt),b.aspect=mt/wt,b.updateProjectionMatrix()};return window.addEventListener("resize",Dt),()=>{cancelAnimationFrame(Et),window.removeEventListener("resize",Dt),window.removeEventListener("pointermove",tt),_.dispose(),P.dispose(),N.dispose(),$.dispose(),w.dispose(),z.dispose(),K.dispose(),Ht.dispose(),zt.dispose(),se.geo.dispose(),se.mat.dispose(),Pe.geo.dispose(),Pe.mat.dispose(),lt.dispose(),_.domElement.parentNode===g&&g.removeChild(_.domElement)}},[i,s,l,c,h]),Y.jsx("div",{className:"constellation-canvas",ref:d,"aria-hidden":"true"})}function PC(){const r=Zt.useRef(null);return Zt.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const i=r.current;if(!i)return;document.body.classList.add("reticle-active");let s=!1,l=null;const c=p=>{if(i.style.transform=`translate3d(${p.clientX}px, ${p.clientY}px, 0) translate(-50%, -50%)`,s||(s=!0,i.classList.add("is-visible")),p.target!==l){l=p.target;const _=!!p.target?.closest('a, button, [role="button"], input, textarea, [data-hover]');i.classList.toggle("is-active",_)}},h=()=>{s=!1,i.classList.remove("is-visible")},d=()=>{i.classList.remove("did-click"),i.classList.add("is-pressed")},m=()=>{i.classList.remove("is-pressed"),i.classList.add("did-click"),window.setTimeout(()=>i.classList.remove("did-click"),420)};return window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("mousedown",d),window.addEventListener("mouseup",m),document.addEventListener("mouseleave",h),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mousedown",d),window.removeEventListener("mouseup",m),document.removeEventListener("mouseleave",h),document.body.classList.remove("reticle-active")}},[]),Y.jsxs("div",{className:"reticle",ref:r,"aria-hidden":"true",children:[Y.jsxs("span",{className:"reticle-box",children:[Y.jsx("span",{className:"reticle-corner tl"}),Y.jsx("span",{className:"reticle-corner tr"}),Y.jsx("span",{className:"reticle-corner bl"}),Y.jsx("span",{className:"reticle-corner br"})]}),Y.jsx("span",{className:"reticle-ring"}),Y.jsx("span",{className:"reticle-dot"})]})}const IC="modulepreload",FC=function(r){return"/JasonBay.dev/"+r},Uv={},xu=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=m(i.map(p=>{if(p=FC(p),p in Uv)return;Uv[p]=!0;const g=p.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":IC,g||(S.as="script"),S.crossOrigin="",S.href=p,d&&S.setAttribute("nonce",d),document.head.appendChild(S),g)return new Promise((M,b)=>{S.addEventListener("load",M),S.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})},Lv=["FRONTEND","BACKEND","DESIGN","CONTENT CREATION","SOCIAL MEDIA","VIDEO EDITING","UI / UX","BRANDING"],BC=["PHOTOGRAPHY","MOTION","LAYOUT","TYPOGRAPHY","PROTOTYPING","WEB"];function zC(r){return{name:"JASON BAY",tagline:"Frontend Developer"}}function HC(r){const t=BC,i=Math.PI*2/Lv.length,s=Lv.map((h,d)=>({label:h,strong:!0,angle:d*i-Math.PI/2+.12,radius:4.6+d%2*.35,depth:Math.sin(d*1.3)*.9})),l=Math.PI*2/t.length,c=t.map((h,d)=>({label:h,strong:!1,angle:d*l-Math.PI/2+l/2,radius:6.6+d%2*.5,depth:(d%2===0?-1:1)*(1.9+d%3*.5)}));return[...s,...c]}function GC(r){const t=r==="de",i=[{id:"about",label:t?"ÜBER MICH":"ABOUT",scale:1.15},{id:"skills-experience",label:t?"PROFIL":"PROFILE",scale:1.2},{id:"work",label:"PORTFOLIO",scale:1.35},{id:"social",label:"SOCIAL MEDIA",scale:1},{id:"contact",label:t?"KONTAKT":"CONTACT",scale:1.05}],s=5.4,l=Math.PI*(3-Math.sqrt(5)),c=i.length;return i.map((h,d)=>{const m=1-(d+.5)/c*2,p=Math.sqrt(Math.max(0,1-m*m)),g=l*d;return{...h,position:[Math.cos(g)*p*s,m*s*.72,Math.sin(g)*p*s]}})}function Nv(){return[{label:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu"},{label:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu"},{label:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/"},{label:"YouTube",handle:"@jsnuwu",href:"https://www.youtube.com/@jsnuwu"},{label:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/"}]}const Ov="jasonbay05@gmail.com",VC="/JasonBay.dev/assets/BayJason-CgZ6RBiE.jpg",kC="/JasonBay.dev/assets/TikTok-CpvqXkYO.png",XC="/JasonBay.dev/assets/Youtube-DcLdsh9q.png",WC="/JasonBay.dev/assets/Instagram-n8caggNr.png",YC="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2023%2023'%3e%3cpath%20fill='%23f25022'%20d='M1%201h10v10H1z'/%3e%3cpath%20fill='%237fba00'%20d='M12%201h10v10H12z'/%3e%3cpath%20fill='%2300a4ef'%20d='M1%2012h10v10H1z'/%3e%3cpath%20fill='%23ffb900'%20d='M12%2012h10v10H12z'/%3e%3c/svg%3e",jC="/JasonBay.dev/assets/adessologo2-BkRcKOgx.png",qC="data:image/webp;base64,UklGRooFAABXRUJQVlA4TH0FAAAvKAFKEB8gECAs+A+RZ0MgkESy88ZCAjIlSaYRCBCKRRsRgO6ZLTzJ1h63mbZtp4EWHUFlS0Ng5n3f/avQXWoQOkG6aLCZhSJuDgGTQP+ulIXsiFtDwCQ4hKucwV0XlojzPE7Y7Yj+TwABZmbmlmqY//PXJ3/7jzd3Ot7y5eMvbeXf8+J3X1h6CFyYjt5MDly+svIYWPKzkZ5Fk7eQb1k4rQxMLL7Bewxy/Au4O1ac0X5k1U9gvU7yUN+x8gEpBy12QN+x+sHD5KDHDuZrBjyg5IDAHmTPkO9AeozkIf7AoBuIe5R3CDGg8DXAxLCvAG5xklOLDNyqDUjv1Hqk5JVODN0o7bE6pYDFTiUyeKuyR+tUBrSkERl+pTDhbRQGvKTQ47EXi2ywERstvBK7s5DEggX2Qic22QiNNl4J3dlIQr0N9iKRjTYik5VXIoOVWaS3krxADFa4FTix2UZgb6cTGOzMAsEOu6LMFZksbYpGS13RYCkV9RWJbNrVpC0YbXUF9zUZbKWC3hb7RZGNu5q0i0ZrXa0Ga/Oi3lpaFKyxW5DZ/NWCrb1mwWTv1YJ7e92Cwd68oLeXasL+QuQKupq0F6YaNDV5deG+BusLQ012NUgX+qKjcpBhfyaHkjUp74Tcmchgg9BVTdozU9FsoxFaa+2EujNj0aw1qAx1WAutbcxndkWzjXSmrwP7J6ES7glXJNbiqiYtEW1r0RDRVIuNiZ1UR0Qj3KAxwO2k1jLrmsxGZiLala1rMmv1UuyJ+rK1FUcUXiaRXyJXNWnrssULYg1Nz1lm8a4uI1x8Ju5rMrxI1s/bVm5+3iasuSZJaZRLIvzv/xR6U8VtwfBiuEJhh+Ceoyu8XU36F4MvCKYSVWQuiPxSWNekq9f0QhltbWrSFgwvBleweyYcXK+QvF7yBUGD9GZantnUuiDa6nBmuK2tpmCy1RaMtlzB8Ex0eokKd6ZmqHutriTojFjZVlsQWWfScjXxBZPKK7VEQA1tlbqSQaWl+Hy0Jbua9CpXlJV8QWZVRzmoJCqMWqTTlWzVepVNyaS2U3El9yqJwAa1QWNNpTuVWasr6i21JZlVOyK613AlUW9SmKl0stRhvSKirUJbNOg0RBQVHFarM1Nxr3NFRFnu52VBxxER9WKuKLKd5Iu2Sv7JTqqj4r3OTE8HqaZssJN8Wa/TndkLvSMTk1BbFln3lUZyZVul5kyUeUXle6VW41pgULo6Q0FiJsFeyZ3rJX4ukAPGIJBIMLLuTHKfJCaQ+7LkJQal7sJY9o4kdyDbMieRg1JzIRYdSDKycnshhxInMmq5C1TyE4newwzLkpcJSomEPpFoZuV5wX7RTLKTVrdgXJJ+ITTixCUbEt5pNSKHlVSv1S6g/pIn4cjaTuIzSU9ayS8Zzm1IfNCaaen+zNHJ9VrdounJO5I/sfarRZGZj9cKo1qzKAf+DWneqblF9HD0KgFLeWTtmYD3ah1SUNsAZVZvgPZ6DminloAiq8+EO+l1QHd6DU4Oei3OntWTx9kBEOyJ9TucEWADkwOAg4msnzzMHUBHqDkA/BzmawZsYXoEh7JnwJlQe4QO5ZERW5Q7CAfyyIgzgfYQHciPDLkC6SGSw/iOITuCzAFjAxFvGdNBTIyZPMJjAHlFiHcMeg2QjwyaCPDEqO8AfgwwrV7uGTU5tR9vGbYj9TvGvdYbcBLpf43zCSAHGAdAdygHjxBRWkLMtxjJQdCEsSHMGBDSCoRGhI5QTwHgGob2eh3hnoJWugaiUesVIcdbnbSCopPOhrDztxqHFRjloLAi+Ae5nzweDVIzWfzDtzKHX5igHERWZPTh27LDkczm25L0BRn+8Xi75HD8TLb/GS6l35L5h+NlZw8aAA==",ZC="/JasonBay.dev/assets/lebenshilfe.de-removebg-preview-OMT4mOLJ.png",KC=Zt.lazy(()=>xu(()=>import("./GallerySection-D9PFS5qT.js"),__vite__mapDeps([0,1]))),QC=Zt.lazy(()=>xu(()=>import("./TikTokSection-DyY-iuZw.js"),__vite__mapDeps([2,3]))),JC=Zt.lazy(()=>xu(()=>import("./OldPortfolio-CyB0h5Mf.js"),__vite__mapDeps([4,1,3,5])));function pd(){return Y.jsx("div",{className:"sp-loading","aria-hidden":"true"})}const Cx={tiktok:kC,youtube:XC,instagram:WC},$C={...Cx,"microsoft 365":YC};function Pv(r){return r.trim().toLowerCase()}const tw=[["telution",qC],["adesso",jC],["lebenshilfe",ZC]];function ew(r){const t=r.toLowerCase();for(const[i,s]of tw)if(t.includes(i))return{logo:s,slug:i};return null}function nw({text:r}){return Y.jsx("h1",{"aria-label":r,children:r.split(" ").map((t,i)=>Y.jsxs(Zt.Fragment,{children:[i>0&&" ",Y.jsx("span",{className:"sp-word","aria-hidden":"true",children:Array.from(t).map((s,l)=>Y.jsx("span",{className:"sp-char",style:{"--ci":i*3+l},children:s},l))})]},i))})}const iw=[[/html/i,"devicon-html5-plain colored"],[/css/i,"devicon-css3-plain colored"],[/typescript/i,"devicon-typescript-plain colored"],[/javascript/i,"devicon-javascript-plain colored"],[/angular/i,"devicon-angularjs-plain colored"],[/tailwind/i,"devicon-tailwindcss-plain colored"],[/react/i,"devicon-react-original colored"],[/vue/i,"devicon-vuejs-plain colored"],[/figma/i,"devicon-figma-plain colored"],[/canva/i,"devicon-canva-original colored"],[/photoshop/i,"devicon-photoshop-plain colored"],[/wordpress/i,"devicon-wordpress-plain colored"],[/spring/i,"devicon-spring-plain colored"],[/php/i,"devicon-php-plain colored"],[/java\b/i,"devicon-java-plain colored"],[/postgres/i,"devicon-postgresql-plain colored"],[/mysql/i,"devicon-mysql-plain colored"],[/mongo/i,"devicon-mongodb-plain colored"],[/docker/i,"devicon-docker-plain colored"],[/\bgit\b/i,"devicon-git-plain colored"],[/jira/i,"devicon-jira-plain colored"],[/confluence/i,"devicon-confluence-plain colored"]];function aw(r){for(const[t,i]of iw)if(t.test(r))return i;return null}const sw={muttersprache:100,native:100,c2:94,c1:82,b2:66,b1:50,a2:34,a1:20};function rw(r){return sw[r.trim().toLowerCase()]??60}function ow(r){const t=r.toLowerCase();return t.startsWith("deutsch")||t.startsWith("german")?"🇩🇪":t.startsWith("englisch")||t.startsWith("english")?"EN":t.startsWith("franz")||t.startsWith("french")?"🇫🇷":t.startsWith("spanisch")||t.startsWith("spanish")?"🇪🇸":"🌐"}const Br={about:{de:"Über mich",en:"About"},work:{de:"Portfolio",en:"Portfolio"},"skills-experience":{de:"Profil",en:"Profile"},social:{de:"Social Media",en:"Social Media"},contact:{de:"Kontakt",en:"Contact"}},md={about:{de:"Wer ich bin und wie ich arbeite.",en:"Who I am and how I work."},work:{de:"Meine erste Portfolio-Seite.",en:"My first portfolio site."},"skills-experience":{de:"Was ich kann, und wie ich dahin gekommen bin.",en:"What I can do, and how I got here."},social:{de:"Instagram, TikTok und YouTube · Konzeption, Schnitt und Gestaltung seit 2020.",en:"Instagram, TikTok and YouTube · concept, editing and design since 2020."},contact:{de:"Schreib mir, ich melde mich zurück.",en:"Drop me a line, I'll get back to you."}},zr={skills:{de:"Skills",en:"Skills"},experience:{de:"Werdegang",en:"Experience"},gallery:{de:"Galerie",en:"Gallery"}},Hr={skills:{de:"Die Tools, mit denen ich täglich arbeite.",en:"The tools I use day to day."},experience:{de:"Von der Ausbildung bis heute.",en:"From my apprenticeship to today."},gallery:{de:"Fotografie abseits vom Code · Wandern, Motorrad, Tiere.",en:"Photography beyond the code · hiking, motorcycles, pets."}};function lw({id:r,origin:t,onBack:i,onOpen:s}){const{t:l,lang:c}=Yv(),h=c==="de",d=Zt.useRef(null),m=Zt.useRef(null),p=Zt.useRef(null),g=Zt.useRef(0),_=Zt.useRef(!1),[S,M]=Zt.useState(0),[b,A]=Zt.useState("idle"),y=Zt.useCallback(()=>{const T=d.current;_.current||(_.current=!0,T?.classList.add("is-leaving"),window.setTimeout(i,480))},[i]);Zt.useEffect(()=>{d.current?.scrollTo({top:0})},[r]),Zt.useEffect(()=>{const T=d.current;if(!T)return;let z=0;const K=()=>{z=0;const it=T.scrollHeight-T.clientHeight,lt=it>0?T.scrollTop/it:0;p.current&&(p.current.style.transform=`scaleX(${lt})`),m.current?.classList.toggle("is-scrolled",T.scrollTop>12)},Q=()=>{z||(z=requestAnimationFrame(K))};return K(),T.addEventListener("scroll",Q,{passive:!0}),()=>{T.removeEventListener("scroll",Q),cancelAnimationFrame(z)}},[r]),Zt.useEffect(()=>{const T=d.current;if(!T)return;const z=new WeakSet,K=new IntersectionObserver(lt=>{lt.forEach(U=>{U.isIntersecting&&(U.target.setAttribute("data-shown",""),K.unobserve(U.target))})},{root:T,rootMargin:"0px 0px -8% 0px",threshold:.05}),Q=()=>{T.querySelectorAll("[data-reveal]").forEach(lt=>{z.has(lt)||(z.add(lt),K.observe(lt))})};Q();const it=new MutationObserver(Q);return it.observe(T,{childList:!0,subtree:!0}),()=>{K.disconnect(),it.disconnect()}},[r]),Zt.useEffect(()=>{const T=d.current;if(!T)return;const z=U=>{if(!_.current){if(T.scrollTop>0){g.current=0,S!==0&&M(0);return}if(U.deltaY<0){g.current+=-U.deltaY;const H=Math.min(1,g.current/320);M(H),g.current>320&&y()}else g.current=0,S!==0&&M(0)}};let K=0;const Q=U=>{K=U.touches[0].clientY},it=U=>{if(_.current||T.scrollTop>0)return;const H=U.touches[0].clientY-K;H>0&&(g.current=H,M(Math.min(1,H/200)),H>200&&y())},lt=()=>{g.current=0,M(0)};return T.addEventListener("wheel",z,{passive:!0}),T.addEventListener("touchstart",Q,{passive:!0}),T.addEventListener("touchmove",it,{passive:!0}),T.addEventListener("touchend",lt,{passive:!0}),()=>{T.removeEventListener("wheel",z),T.removeEventListener("touchstart",Q),T.removeEventListener("touchmove",it),T.removeEventListener("touchend",lt)}},[y,S]);const x=async T=>{T.preventDefault();const z=T.currentTarget;A("sending");try{const K=await fetch(z.action,{method:"POST",body:new FormData(z),headers:{Accept:"application/json"}});if(!K.ok)throw new Error(String(K.status));z.reset(),A("sent")}catch{A("error")}},P=Object.keys(Br),N=Br[r]?h?Br[r].de:Br[r].en:r,O=md[r]?h?md[r].de:md[r].en:"",B=P.length,I=String(P.indexOf(r)+1).padStart(2,"0")+" / "+String(B).padStart(2,"0"),F=P[(P.indexOf(r)+1)%B],$=h?Br[F].de:Br[F].en,w=P.indexOf(r)===B-1;return Y.jsxs("div",{className:`section-page ${r==="work"?"section-page-dark":""}`,ref:d,style:{"--ox":`${(t.x*100).toFixed(1)}%`,"--oy":`${(t.y*100).toFixed(1)}%`,transform:S?`translateY(${S*40}px)`:void 0},children:[Y.jsx("div",{className:"sp-pull",style:{opacity:S,transform:`scaleX(${.2+S*.8})`},"aria-hidden":"true",children:Y.jsx("span",{children:h?"LOSLASSEN FÜR RAUM":"RELEASE FOR SPACE"})}),Y.jsxs("div",{className:"sp-topbar",ref:m,children:[Y.jsxs("button",{className:"sp-back",onClick:y,children:[Y.jsx("span",{className:"sp-back-arrow","aria-hidden":"true",children:"↑"}),Y.jsx("span",{className:"glow-text",children:h?"ZURÜCK ZUM RAUM":"BACK TO SPACE"})]}),Y.jsx("span",{className:"sp-num",children:I}),Y.jsx("span",{className:"sp-progress","aria-hidden":"true",children:Y.jsx("span",{ref:p})})]}),r!=="work"&&Y.jsxs("header",{className:"sp-header",children:[Y.jsx(nw,{text:N}),O&&Y.jsx("p",{className:"sp-intro",children:O}),r==="skills-experience"&&Y.jsx("button",{className:"sp-cv-download sp-fill-btn",onClick:()=>xu(async()=>{const{downloadCv:T}=await import("./generateCv-D0N-m8ua.js").then(z=>z.g);return{downloadCv:T}},[]).then(({downloadCv:T})=>T(c,l)),children:Y.jsx("span",{className:"glow-text",children:h?"↓ Lebenslauf (PDF)":"↓ Résumé (PDF)"})})]}),Y.jsxs("div",{className:`sp-body ${r==="work"?"sp-body-wide":""}`,children:[r==="social"&&Y.jsxs("div",{className:"sp-social",children:[Y.jsx(Zt.Suspense,{fallback:Y.jsx(pd,{}),children:Y.jsx(QC,{})}),Y.jsx("ul",{className:"sp-social-links",children:Nv().filter(T=>["Instagram","TikTok","YouTube"].includes(T.label)).map((T,z)=>Y.jsx("li",{"data-reveal":!0,style:{"--i":z},children:Y.jsxs("a",{href:T.href,target:"_blank",rel:"noopener noreferrer",children:[Y.jsx("img",{className:"sp-social-logo",src:Cx[Pv(T.label)],alt:"","aria-hidden":"true",loading:"lazy"}),Y.jsx("span",{className:"sp-social-name",children:T.label}),Y.jsxs("span",{className:"sp-social-handle",children:[T.handle," ↗"]})]})},T.label))})]}),r==="work"&&Y.jsx(Zt.Suspense,{fallback:Y.jsx(pd,{}),children:Y.jsx(JC,{})}),r==="skills-experience"&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("section",{className:"sp-subsection",children:[Y.jsxs("div",{className:"sp-sub-head","data-reveal":!0,children:[Y.jsx("h2",{children:h?zr.experience.de:zr.experience.en}),Y.jsx("p",{className:"sp-sub-intro",children:h?Hr.experience.de:Hr.experience.en})]}),Y.jsx("ol",{className:"sp-timeline",children:l.experience.entries.map(T=>{const z=ew(T.org);return Y.jsxs("li",{"data-reveal":!0,children:[Y.jsx("span",{className:`spt-badge${z?" has-logo":""}`,"data-org":z?.slug,"aria-hidden":"true",children:z?Y.jsx("img",{src:z.logo,alt:"",loading:"lazy"}):T.org.replace(/[^A-Za-zÄÖÜ]/g,"").slice(0,2).toUpperCase()}),Y.jsxs("div",{className:"spt-body",children:[Y.jsx("span",{className:"spt-period",children:T.period}),Y.jsx("span",{className:"spt-org",children:T.org}),Y.jsx("span",{className:"spt-role",children:T.role}),Y.jsx("ul",{children:T.bullets.map((K,Q)=>Y.jsx("li",{style:{"--i":Q},children:K},K))})]})]},T.org)})})]}),Y.jsxs("section",{className:"sp-subsection",children:[Y.jsxs("div",{className:"sp-sub-head","data-reveal":!0,children:[Y.jsx("h2",{children:h?zr.skills.de:zr.skills.en}),Y.jsx("p",{className:"sp-sub-intro",children:h?Hr.skills.de:Hr.skills.en})]}),Y.jsxs("div",{className:"sp-skills",children:[l.skills.groups.map((T,z)=>Y.jsxs("div",{className:"skrow","data-reveal":!0,children:[Y.jsx("span",{className:"skrow-num",children:String(z+1).padStart(2,"0")}),Y.jsx("h3",{className:"skrow-title",children:T.title}),Y.jsx("ul",{className:"skrow-tags",children:T.items.split(",").map((K,Q)=>{const it=K.trim(),lt=$C[Pv(it)],U=aw(it);return Y.jsxs("li",{style:{"--i":Q},children:[lt?Y.jsx("img",{className:"skrow-logo",src:lt,alt:"","aria-hidden":"true",loading:"lazy"}):U?Y.jsx("i",{className:U,"aria-hidden":"true"}):Y.jsx("span",{className:"skrow-mono","aria-hidden":"true",children:it.slice(0,1)}),it]},it)})})]},T.title)),Y.jsxs("div",{className:"skrow","data-reveal":!0,children:[Y.jsx("span",{className:"skrow-num",children:String(l.skills.groups.length+1).padStart(2,"0")}),Y.jsx("h3",{className:"skrow-title",children:h?"Sprachen":"Languages"}),Y.jsx("ul",{className:"sp-langs sp-langs-inline",children:l.skills.languages.map(T=>Y.jsxs("li",{children:[Y.jsx("span",{className:"sp-lang-flag","aria-hidden":"true",children:ow(T.name)}),Y.jsx("span",{className:"sp-lang-name",children:T.name}),Y.jsx("span",{className:"sp-lang-level",children:T.level}),Y.jsx("span",{className:"sp-lang-bar",children:Y.jsx("span",{style:{width:`${rw(T.level)}%`}})})]},T.name))})]})]})]})]}),r==="about"&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"sp-about",children:[Y.jsxs("div",{className:"sp-prose","data-reveal":!0,children:[Y.jsx("p",{className:"sp-lead",children:l.about.lead}),Y.jsxs("ul",{className:"sp-facts",children:[Y.jsxs("li",{style:{"--i":0},children:[Y.jsx("span",{"aria-hidden":"true",children:"🎂"}),h?"Jahrgang 2005":"Born 2005"]}),Y.jsxs("li",{style:{"--i":1},children:[Y.jsx("span",{"aria-hidden":"true",children:"📍"}),"Vaihingen an der Enz"]}),Y.jsxs("li",{style:{"--i":2},children:[Y.jsx("span",{"aria-hidden":"true",children:"🚗"}),h?"Führerschein Klasse B & A2":"Driver's license class B & A2"]}),Y.jsxs("li",{style:{"--i":3},children:[Y.jsx("span",{"aria-hidden":"true",children:"🗣️"}),h?"Deutsch (Muttersprache)":"German (native)"]}),Y.jsxs("li",{style:{"--i":4},children:[Y.jsx("span",{"aria-hidden":"true",children:"🏍️"}),h?"Hobbys: Motorrad, Wandern, Tiere":"Hobbies: motorcycles, hiking, animals"]})]}),Y.jsx("p",{children:l.about.body}),Y.jsx("p",{children:h?"Vor der Ausbildung habe ich ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker gemacht. Danach kam die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso, die ich im Januar 2026 (IHK) abgeschlossen habe. Seitdem arbeite ich als Junior Software Engineer bei Telution.":"Before the apprenticeship I did a voluntary social year at Lebenshilfe Vaihingen-Mühlacker. Then came the apprenticeship as an IT specialist for application development at adesso, which I completed in January 2026 (IHK). Since then I've been working as a Junior Software Engineer at Telution."})]}),Y.jsxs("figure",{className:"sp-portrait","data-reveal":!0,children:[Y.jsx("img",{src:VC,alt:"Jason Bay"}),Y.jsx("figcaption",{children:"Jason Bay · Vaihingen an der Enz"})]})]}),Y.jsxs("section",{className:"sp-subsection",children:[Y.jsxs("div",{className:"sp-sub-head","data-reveal":!0,children:[Y.jsx("h2",{children:h?zr.gallery.de:zr.gallery.en}),Y.jsx("p",{className:"sp-sub-intro",children:h?Hr.gallery.de:Hr.gallery.en})]}),Y.jsx(Zt.Suspense,{fallback:Y.jsx(pd,{}),children:Y.jsx(KC,{})})]})]}),r==="contact"&&Y.jsxs("div",{className:"sp-contact",children:[Y.jsxs("div",{className:"sp-prose","data-reveal":!0,children:[Y.jsx("p",{children:l.contact.intro}),Y.jsx("a",{className:"sp-email",href:`mailto:${Ov}`,children:Ov}),Y.jsx("ul",{className:"sp-plain",children:Nv().map((T,z)=>Y.jsx("li",{style:{"--i":z},children:Y.jsxs("a",{href:T.href,target:"_blank",rel:"noopener noreferrer",children:[Y.jsx("span",{children:T.label}),Y.jsxs("span",{className:"sp-plain-handle",children:[T.handle,Y.jsx("span",{className:"sp-arrow","aria-hidden":"true",children:"↗"})]})]})},T.label))})]}),Y.jsxs("form",{className:`sp-form is-${b}`,action:"https://formspree.io/f/mreakbje",method:"POST",onSubmit:x,"data-reveal":!0,children:[Y.jsxs("label",{children:[Y.jsx("span",{children:"Name"}),Y.jsx("input",{name:"name",type:"text",placeholder:l.contact.namePlaceholder,required:!0})]}),Y.jsxs("label",{children:[Y.jsx("span",{children:h?"E-Mail":"Email"}),Y.jsx("input",{name:"email",type:"email",placeholder:l.contact.emailPlaceholder,required:!0})]}),Y.jsxs("label",{children:[Y.jsx("span",{children:h?"Nachricht":"Message"}),Y.jsx("textarea",{name:"message",rows:5,placeholder:l.contact.messagePlaceholder,required:!0})]}),Y.jsx("button",{type:"submit",className:"sp-fill-btn",disabled:b==="sending",children:Y.jsx("span",{className:"glow-text",children:b==="sending"?h?"Wird gesendet …":"Sending …":l.contact.submit})}),Y.jsxs("p",{className:"sp-form-status",role:"status","aria-live":"polite",children:[b==="sent"&&(h?"Danke! Deine Nachricht ist angekommen, ich melde mich bald.":"Thanks! Your message arrived, I'll get back to you soon."),b==="error"&&(h?"Das hat leider nicht geklappt. Schreib mir gern direkt per E-Mail.":"That didn't work, sorry. Feel free to email me directly.")]})]})]}),r!=="contact"&&r!=="work"&&Y.jsx("section",{className:"sp-subsection sp-cta",children:Y.jsxs("div",{className:"sp-cta-inner","data-reveal":!0,children:[Y.jsx("h2",{children:h?"Sag Hallo.":"Say hi."}),Y.jsx("p",{children:h?"Ob Projekt, Frage oder einfach nur so, ich antworte gern.":"Whether it's a project, a question, or just to say hi, I'll write back."}),Y.jsx("button",{type:"button",className:"sp-cta-btn sp-fill-btn",onClick:()=>s("contact"),children:Y.jsx("span",{className:"glow-text",children:h?"Kontakt aufnehmen ↗":"Get in touch ↗"})})]})}),Y.jsxs("button",{type:"button",className:"sp-next",onClick:()=>s(F),"data-reveal":!0,children:[Y.jsx("span",{className:"sp-next-label",children:w?h?"Zurück zum Anfang":"Back to start":h?"Nächste Seite":"Next page"}),Y.jsxs("span",{className:"sp-next-title",children:[Y.jsx("span",{className:"sp-next-text",children:$}),Y.jsx("span",{className:"sp-next-arrow","aria-hidden":"true",children:"→"})]})]})]})]})}const tl=["main","about"];function cw(){const{lang:r,setLang:t}=Yv(),[i,s]=Zt.useState("main"),[l,c]=Zt.useState(null),[h,d]=Zt.useState(!1),[m,p]=Zt.useState(!1),[g,_]=Zt.useState(!1),[S,M]=Zt.useState({x:.5,y:.5}),b=Zt.useRef({x:0,y:0}),A=Zt.useRef({x:0,y:0}),y=Zt.useRef({x:0,y:0}),x=Zt.useRef(1),P=Zt.useRef(null),N=Zt.useRef(new Map),O=Zt.useRef(0),B=Zt.useRef({x:.5,y:.5,at:0}),I=Zt.useRef(0),F=Zt.useMemo(()=>HC(),[r]),$=Zt.useMemo(()=>GC(r),[r]),w=Zt.useMemo(()=>zC(),[r]),T=Zt.useMemo(()=>i==="main"?F.map((D,W)=>({id:`kw-${W}`,strong:D.strong,position:[Math.cos(D.angle)*D.radius,Math.sin(D.angle)*D.radius*.78,D.depth]})):i==="about"?$.map(D=>({id:D.id,position:D.position})):[],[i,F,$]),z=Zt.useCallback(()=>{p(!0),window.clearTimeout(I.current),I.current=window.setTimeout(()=>p(!1),460)},[]),K=Zt.useCallback(D=>{s(W=>(W!==D&&z(),D)),c(null)},[z]),Q=Zt.useCallback(D=>{s(W=>{const ut=tl.indexOf(W),Ct=tl[Math.min(tl.length-1,Math.max(0,ut+D))];return Ct!==W&&z(),Ct})},[z]);Zt.useEffect(()=>{i!=="about"&&(A.current={x:0,y:0},y.current={x:0,y:0},x.current=1)},[i]),Zt.useEffect(()=>()=>window.clearTimeout(I.current),[]);const it=Zt.useCallback(()=>{if(h)try{const D=window.AudioContext||window.webkitAudioContext,W=new D,ut=W.createOscillator(),Ct=W.createGain();ut.type="sine",ut.frequency.value=520,Ct.gain.value=.04,ut.connect(Ct).connect(W.destination),ut.start(),Ct.gain.exponentialRampToValueAtTime(1e-4,W.currentTime+.14),ut.stop(W.currentTime+.16),ut.onended=()=>W.close()}catch{}},[h]),lt=Zt.useCallback(D=>{it();const W=B.current;M(performance.now()-W.at<1200?{x:W.x,y:W.y}:{x:.5,y:.5}),c(D),_(!1)},[it]);Zt.useEffect(()=>{const D=ut=>{b.current={x:ut.clientX/window.innerWidth*2-1,y:ut.clientY/window.innerHeight*2-1}},W=ut=>{B.current={x:ut.clientX/window.innerWidth,y:ut.clientY/window.innerHeight,at:performance.now()}};return window.addEventListener("pointermove",D),window.addEventListener("pointerdown",W,!0),()=>{window.removeEventListener("pointermove",D),window.removeEventListener("pointerdown",W,!0)}},[]),Zt.useEffect(()=>{const D=W=>{if(l)return;if(i==="about"){const Ct=W.deltaY>0?1:-1,Ft=x.current+Ct*.09;if(Ft>1.8){const tt=performance.now();tt-O.current>800&&(O.current=tt,x.current=1,Q(-1));return}x.current=Kc(Ft,.5,1.8);return}const ut=performance.now();ut-O.current<900||Math.abs(W.deltaY)<24||(O.current=ut,Q(W.deltaY>0?1:-1))};return window.addEventListener("wheel",D,{passive:!0}),()=>window.removeEventListener("wheel",D)},[l,i,Q]),Zt.useEffect(()=>{const D=W=>{if(W.key==="Escape"&&l){c(null);return}if(l)return;const ut=W.target?.tagName;ut==="INPUT"||ut==="TEXTAREA"||((W.key==="ArrowDown"||W.key==="PageDown")&&Q(1),(W.key==="ArrowUp"||W.key==="PageUp")&&Q(-1))};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[l,Q]);const U=aE({onDrag:({movement:[D,W],first:ut,last:Ct,pinching:Ft})=>{if(l||Ft)return;ut&&(y.current={...A.current});const tt=i==="about";let dt=y.current.x+D*(tt?.008:.005);const Ut=Kc(y.current.y+W*(tt?.004:-.004),-.85,.85);tt||(dt=Kc(dt,-.7,.7)),A.current={x:dt,y:Ut},Ct&&!tt&&(A.current={x:0,y:0})},onPinch:({offset:[D]})=>{l||i!=="about"||(x.current=Kc(1/D,.5,1.8))}},{drag:{filterTaps:!0},pinch:{scaleBounds:{min:.55,max:2}}}),H=r==="de",at=l==="work"?"dark":l||i==="main"?"light":"dark",At="Frontend Developer · Vaihingen an der Enz",bt=i==="main"?H?"SCROLLEN ZU ÜBER MICH ↓":"SCROLL TO ABOUT ↓":H?"SCROLLEN ODER ZIEHEN · KNOTEN ANKLICKEN":"SCROLL OR DRAG · CLICK A NODE";return Y.jsxs("div",{className:"experience-root","data-scene":i,"data-surface":at,"data-page":l?"open":"closed",children:[Y.jsx(PC,{}),Y.jsxs("div",{className:`experience scene-${i} ${l?"is-dived":""} ${m?"is-warping":""}`,...U(),children:[Y.jsx(OC,{scene:i,anchors:T,pointerRef:b,dragRef:A,zoomRef:x,hoverRef:P,labelEls:N}),i==="main"&&Y.jsxs("button",{className:"identity","data-hover":!0,onClick:()=>{it(),K("about")},"aria-label":H?"Weiter zu Über mich":"Continue to About",children:[Y.jsx("span",{className:"identity-name",children:w.name}),Y.jsx("span",{className:"identity-node","aria-hidden":"true"})]}),Y.jsxs("div",{className:"label-layer",children:[i==="main"&&F.map((D,W)=>Y.jsx("span",{ref:ut=>{N.current.set(`kw-${W}`,ut)},className:`kw-label ${D.strong?"strong":"faint"}`,onMouseEnter:()=>{P.current=`kw-${W}`},onMouseLeave:()=>{P.current=null},children:Y.jsx("span",{className:"glow-text",children:D.label})},`kw-${W}`)),i==="about"&&$.map(D=>Y.jsx("button",{ref:W=>{N.current.set(D.id,W)},className:"section-label",style:{fontSize:`${.72+D.scale*.5}rem`},onClick:()=>lt(D.id),onMouseEnter:()=>{P.current=D.id},onMouseLeave:()=>{P.current=null},children:Y.jsx("span",{className:"glow-text",children:D.label})},D.id))]}),Y.jsxs("header",{className:"chrome-top",children:[Y.jsx("button",{className:"wordmark",onClick:()=>K("main"),children:Y.jsx("span",{className:"glow-text",children:"JASON BAY"})}),Y.jsxs("nav",{className:"chrome-nav",children:[Y.jsx("button",{className:i==="about"&&!l?"active":"",onClick:()=>{it(),K("about")},children:Y.jsx("span",{className:"glow-text",children:H?"ÜBER MICH":"ABOUT ME"})}),Y.jsx("button",{className:l==="work"?"active":"",onClick:()=>lt("work"),children:Y.jsx("span",{className:"glow-text",children:"PORTFOLIO"})})]})]}),Y.jsxs("div",{className:"chrome-bottom",children:[Y.jsx("span",{className:"role-line",children:At}),i==="main"?Y.jsx("button",{className:"hint-line hint-line-action",onClick:()=>{it(),K("about")},children:bt}):Y.jsx("span",{className:"hint-line",children:bt}),Y.jsxs("span",{className:"scene-index",children:[String(tl.indexOf(i)+1).padStart(2,"0")," / 0",tl.length]})]}),i==="about"&&!l&&Y.jsx("button",{className:"mobile-nav-toggle","aria-expanded":g,onClick:()=>_(D=>!D),children:Y.jsx("span",{className:"glow-text",children:g?"✕":H?"MENÜ":"MENU"})}),i==="about"&&!l&&g&&Y.jsx("nav",{className:"mobile-nav-list",children:$.map(D=>Y.jsx("button",{onClick:()=>lt(D.id),children:Y.jsx("span",{className:"glow-text",children:D.label})},D.id))})]}),Y.jsxs("div",{className:"global-meta",children:[Y.jsx("button",{className:l==="contact"?"active":"",onClick:()=>lt("contact"),children:Y.jsx("span",{className:"glow-text",children:H?"KONTAKT":"CONTACT"})}),Y.jsxs("span",{className:"lang-switch",children:[Y.jsx("button",{className:H?"active":"",onClick:()=>t("de"),children:"DE"}),Y.jsx("span",{children:"/"}),Y.jsx("button",{className:H?"":"active",onClick:()=>t("en"),children:"EN"})]}),Y.jsxs("button",{className:"sound-toggle",onClick:()=>d(D=>!D),children:["SOUND ",h?"ON":"OFF"]})]}),l&&Y.jsx(lw,{id:l,origin:S,onBack:()=>c(null),onOpen:lt},l)]})}function Kc(r,t,i){return Math.min(i,Math.max(t,r))}function uw(){return Y.jsx(Wy,{children:Y.jsx(cw,{})})}ky.createRoot(document.getElementById("root")).render(Y.jsx(Zt.StrictMode,{children:Y.jsx(uw,{})}));export{Ov as E,WC as I,kC as T,xu as _,VC as a,Hy as b,fw as c,Ny as g,Y as j,Zt as r,Yv as u};
