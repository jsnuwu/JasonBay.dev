(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function mM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vh={exports:{}},Jo={};var Tv;function gM(){if(Tv)return Jo;Tv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=e,Jo.jsx=n,Jo.jsxs=n,Jo}var Av;function vM(){return Av||(Av=1,Vh.exports=gM()),Vh.exports}var C=vM(),kh={exports:{}},lt={};var wv;function _M(){if(wv)return lt;wv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=_&&P[_]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(P,ee,_e){this.props=P,this.context=ee,this.refs=M,this.updater=_e||b}x.prototype.isReactComponent={},x.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=x.prototype;function U(P,ee,_e){this.props=P,this.context=ee,this.refs=M,this.updater=_e||b}var D=U.prototype=new O;D.constructor=U,T(D,x.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function R(P,ee,_e){var Re=_e.ref;return{$$typeof:r,type:P,key:ee,ref:Re!==void 0?Re:null,props:_e}}function L(P,ee){return R(P.type,ee,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_e){return ee[_e]})}var ie=/\/+/g;function he(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):ee.toString(36)}function ue(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function N(P,ee,_e,Re,Ge){var ae=typeof P;(ae==="undefined"||ae==="boolean")&&(P=null);var fe=!1;if(P===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(P.$$typeof){case r:case e:fe=!0;break;case g:return fe=P._init,N(fe(P._payload),ee,_e,Re,Ge)}}if(fe)return Ge=Ge(P),fe=Re===""?"."+he(P,0):Re,B(Ge)?(_e="",fe!=null&&(_e=fe.replace(ie,"$&/")+"/"),N(Ge,ee,_e,"",function(Ve){return Ve})):Ge!=null&&(G(Ge)&&(Ge=L(Ge,_e+(Ge.key==null||P&&P.key===Ge.key?"":(""+Ge.key).replace(ie,"$&/")+"/")+fe)),ee.push(Ge)),1;fe=0;var Ie=Re===""?".":Re+":";if(B(P))for(var je=0;je<P.length;je++)Re=P[je],ae=Ie+he(Re,je),fe+=N(Re,ee,_e,ae,Ge);else if(je=y(P),typeof je=="function")for(P=je.call(P),je=0;!(Re=P.next()).done;)Re=Re.value,ae=Ie+he(Re,je++),fe+=N(Re,ee,_e,ae,Ge);else if(ae==="object"){if(typeof P.then=="function")return N(ue(P),ee,_e,Re,Ge);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return fe}function H(P,ee,_e){if(P==null)return P;var Re=[],Ge=0;return N(P,Re,"","",function(ae){return ee.call(_e,ae,Ge++)}),Re}function J(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(_e){(P._status===0||P._status===-1)&&(P._status=1,P._result=_e)},function(_e){(P._status===0||P._status===-1)&&(P._status=2,P._result=_e)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var Se=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ee={map:H,forEach:function(P,ee,_e){H(P,function(){ee.apply(this,arguments)},_e)},count:function(P){var ee=0;return H(P,function(){ee++}),ee},toArray:function(P){return H(P,function(ee){return ee})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return lt.Activity=v,lt.Children=Ee,lt.Component=x,lt.Fragment=n,lt.Profiler=l,lt.PureComponent=U,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},lt.cache=function(P){return function(){return P.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(P,ee,_e){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=T({},P.props),Ge=P.key;if(ee!=null)for(ae in ee.key!==void 0&&(Ge=""+ee.key),ee)!Z.call(ee,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ee.ref===void 0||(Re[ae]=ee[ae]);var ae=arguments.length-2;if(ae===1)Re.children=_e;else if(1<ae){for(var fe=Array(ae),Ie=0;Ie<ae;Ie++)fe[Ie]=arguments[Ie+2];Re.children=fe}return R(P.type,Ge,Re)},lt.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},lt.createElement=function(P,ee,_e){var Re,Ge={},ae=null;if(ee!=null)for(Re in ee.key!==void 0&&(ae=""+ee.key),ee)Z.call(ee,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ge[Re]=ee[Re]);var fe=arguments.length-2;if(fe===1)Ge.children=_e;else if(1<fe){for(var Ie=Array(fe),je=0;je<fe;je++)Ie[je]=arguments[je+2];Ge.children=Ie}if(P&&P.defaultProps)for(Re in fe=P.defaultProps,fe)Ge[Re]===void 0&&(Ge[Re]=fe[Re]);return R(P,ae,Ge)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(P){return{$$typeof:d,render:P}},lt.isValidElement=G,lt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:J}},lt.memo=function(P,ee){return{$$typeof:p,type:P,compare:ee===void 0?null:ee}},lt.startTransition=function(P){var ee=z.T,_e={};z.T=_e;try{var Re=P(),Ge=z.S;Ge!==null&&Ge(_e,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(F,Se)}catch(ae){Se(ae)}finally{ee!==null&&_e.types!==null&&(ee.types=_e.types),z.T=ee}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(P){return z.H.use(P)},lt.useActionState=function(P,ee,_e){return z.H.useActionState(P,ee,_e)},lt.useCallback=function(P,ee){return z.H.useCallback(P,ee)},lt.useContext=function(P){return z.H.useContext(P)},lt.useDebugValue=function(){},lt.useDeferredValue=function(P,ee){return z.H.useDeferredValue(P,ee)},lt.useEffect=function(P,ee){return z.H.useEffect(P,ee)},lt.useEffectEvent=function(P){return z.H.useEffectEvent(P)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(P,ee,_e){return z.H.useImperativeHandle(P,ee,_e)},lt.useInsertionEffect=function(P,ee){return z.H.useInsertionEffect(P,ee)},lt.useLayoutEffect=function(P,ee){return z.H.useLayoutEffect(P,ee)},lt.useMemo=function(P,ee){return z.H.useMemo(P,ee)},lt.useOptimistic=function(P,ee){return z.H.useOptimistic(P,ee)},lt.useReducer=function(P,ee,_e){return z.H.useReducer(P,ee,_e)},lt.useRef=function(P){return z.H.useRef(P)},lt.useState=function(P){return z.H.useState(P)},lt.useSyncExternalStore=function(P,ee,_e){return z.H.useSyncExternalStore(P,ee,_e)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.2.5",lt}var Rv;function Up(){return Rv||(Rv=1,kh.exports=_M()),kh.exports}var Te=Up();const jh=mM(Te);var Xh={exports:{}},Qo={},Wh={exports:{}},Yh={};var Cv;function xM(){return Cv||(Cv=1,(function(r){function e(N,H){var J=N.length;N.push(H);e:for(;0<J;){var Se=J-1>>>1,Ee=N[Se];if(0<l(Ee,H))N[Se]=H,N[J]=Ee,J=Se;else break e}}function n(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var H=N[0],J=N.pop();if(J!==H){N[0]=J;e:for(var Se=0,Ee=N.length,P=Ee>>>1;Se<P;){var ee=2*(Se+1)-1,_e=N[ee],Re=ee+1,Ge=N[Re];if(0>l(_e,J))Re<Ee&&0>l(Ge,_e)?(N[Se]=Ge,N[Re]=J,Se=Re):(N[Se]=_e,N[ee]=J,Se=ee);else if(Re<Ee&&0>l(Ge,J))N[Se]=Ge,N[Re]=J,Se=Re;else break e}}return H}function l(N,H){var J=N.sortIndex-H.sortIndex;return J!==0?J:N.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,_=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var H=n(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=N)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=n(p)}}function B(N){if(T=!1,D(N),!b)if(n(m)!==null)b=!0,F||(F=!0,K());else{var H=n(p);H!==null&&ue(B,H.startTime-N)}}var F=!1,z=-1,Z=5,R=-1;function L(){return M?!0:!(r.unstable_now()-R<Z)}function G(){if(M=!1,F){var N=r.unstable_now();R=N;var H=!0;try{e:{b=!1,T&&(T=!1,O(z),z=-1),y=!0;var J=_;try{t:{for(D(N),v=n(m);v!==null&&!(v.expirationTime>N&&L());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,_=v.priorityLevel;var Ee=Se(v.expirationTime<=N);if(N=r.unstable_now(),typeof Ee=="function"){v.callback=Ee,D(N),H=!0;break t}v===n(m)&&s(m),D(N)}else s(m);v=n(m)}if(v!==null)H=!0;else{var P=n(p);P!==null&&ue(B,P.startTime-N),H=!1}}break e}finally{v=null,_=J,y=!1}H=void 0}}finally{H?K():F=!1}}}var K;if(typeof U=="function")K=function(){U(G)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,he=ie.port2;ie.port1.onmessage=G,K=function(){he.postMessage(null)}}else K=function(){x(G,0)};function ue(N,H){z=x(function(){N(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(N){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var J=_;_=H;try{return N()}finally{_=J}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=_;_=N;try{return H()}finally{_=J}},r.unstable_scheduleCallback=function(N,H,J){var Se=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Se+J:Se):J=Se,N){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=J+Ee,N={id:g++,callback:H,priorityLevel:N,startTime:J,expirationTime:Ee,sortIndex:-1},J>Se?(N.sortIndex=J,e(p,N),n(m)===null&&N===n(p)&&(T?(O(z),z=-1):T=!0,ue(B,J-Se))):(N.sortIndex=Ee,e(m,N),b||y||(b=!0,F||(F=!0,K()))),N},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(N){var H=_;return function(){var J=_;_=H;try{return N.apply(this,arguments)}finally{_=J}}}})(Yh)),Yh}var Dv;function SM(){return Dv||(Dv=1,Wh.exports=xM()),Wh.exports}var qh={exports:{}},In={};var Lv;function yM(){if(Lv)return In;Lv=1;var r=Up();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},In.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},In.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},In.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},In.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},In.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},In.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},In.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},In.requestFormReset=function(m){s.d.r(m)},In.unstable_batchedUpdates=function(m,p){return m(p)},In.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},In.useFormStatus=function(){return h.H.useHostTransitionStatus()},In.version="19.2.5",In}var Nv;function ax(){if(Nv)return qh.exports;Nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),qh.exports=yM(),qh.exports}var Uv;function MM(){if(Uv)return Qo;Uv=1;var r=SM(),e=Up(),n=ax();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function h(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,o=i;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),i;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ie?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case Z:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}var ue=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},Se=[],Ee=-1;function P(t){return{current:t}}function ee(t){0>Ee||(t.current=Se[Ee],Se[Ee]=null,Ee--)}function _e(t,i){Ee++,Se[Ee]=t.current,t.current=i}var Re=P(null),Ge=P(null),ae=P(null),fe=P(null);function Ie(t,i){switch(_e(ae,i),_e(Ge,t),_e(Re,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?q0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=q0(i),t=Z0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Re),_e(Re,t)}function je(){ee(Re),ee(Ge),ee(ae)}function Ve(t){t.memoizedState!==null&&_e(fe,t);var i=Re.current,a=Z0(i,t.type);i!==a&&(_e(Ge,t),_e(Re,a))}function ut(t){Ge.current===t&&(ee(Re),ee(Ge)),fe.current===t&&(ee(fe),Yo._currentValue=J)}var Zt,gt;function dt(t){if(Zt===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Zt=i&&i[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+gt}var wt=!1;function tt(t,i){if(!t||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(le){var re=le}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(le){re=le}t.call(Me.prototype)}}else{try{throw Error()}catch(le){re=le}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var V=S.split(`
`),ne=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ne.length)for(o=V.length-1,u=ne.length-1;1<=o&&0<=u&&V[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ne[u]){var pe=`
`+V[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?dt(a):""}function kt(t,i){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return t.child!==i&&i!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return dt("Activity");default:return""}}function k(t){try{var i="",a=null;do i+=kt(t,a),a=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Bt=Object.prototype.hasOwnProperty,vt=r.unstable_scheduleCallback,Dt=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,I=r.unstable_requestPaint,E=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,me=r.unstable_ImmediatePriority,be=r.unstable_UserBlockingPriority,ce=r.unstable_NormalPriority,qe=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,ye=r.log,Oe=r.unstable_setDisableYieldValue,de=null,ge=null;function Ce(t){if(typeof ye=="function"&&Oe(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(de,t)}catch{}}var Pe=Math.clz32?Math.clz32:j,De=Math.log,Ze=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(De(t)/Ze|0)|0}var Le=256,we=262144,Fe=4194304;function Ae(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Ae(o):(S&=A,S!==0?u=Ae(S):a||(a=A&~t,a!==0&&(u=Ae(a))))):(A=o&~f,A!==0?u=Ae(A):S!==0?u=Ae(S):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:i!==0&&i!==u&&(i&f)===0&&(f=u&-u,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:u}function Ne(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Qe(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mt(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function _t(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function cn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vn(t,i,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,V=t.expirationTimes,ne=t.hiddenUpdates;for(a=S&~a;0<a;){var pe=31-Pe(a),Me=1<<pe;A[pe]=0,V[pe]=-1;var re=ne[pe];if(re!==null)for(ne[pe]=null,pe=0;pe<re.length;pe++){var le=re[pe];le!==null&&(le.lane&=-536870913)}a&=~Me}o!==0&&Da(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~i))}function Da(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Pe(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ds(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&i|t[o]&i&&(t[o]|=i),a&=~u}}function Bi(t,i){var a=i&-i;return a=(a&42)!==0?1:La(a),(a&(t.suspendedLanes|i))!==0?0:a}function La(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ro(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:_v(t.type))}function zi(t,i){var a=H.p;try{return H.p=t,i()}finally{H.p=a}}var fi=Math.random().toString(36).slice(2),un="__reactFiber$"+fi,En="__reactProps$"+fi,wi="__reactContainer$"+fi,Ks="__reactEvents$"+fi,Js="__reactListeners$"+fi,Cl="__reactHandles$"+fi,oo="__reactResources$"+fi,ps="__reactMarker$"+fi;function lo(t){delete t[un],delete t[En],delete t[Ks],delete t[Js],delete t[Cl]}function Na(t){var i=t[un];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wi]||a[un]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=nv(t);t!==null;){if(a=t[un])return a;t=nv(t)}return i}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[un]||t[wi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function ms(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function Oa(t){var i=t[oo];return i||(i=t[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function w(t){t[ps]=!0}var Y=new Set,oe={};function se(t,i){Q(t,i),Q(t+"Capture",i)}function Q(t,i){for(oe[t]=i,t=0;t<i.length;t++)Y.add(i[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},ze={};function Xe(t){return Bt.call(ze,t)?!0:Bt.call(ke,t)?!1:Be.test(t)?ze[t]=!0:(ke[t]=!0,!1)}function Ke(t,i,a){if(Xe(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function it(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Je(t,i,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(t,i,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function qt(t){if(!t._valueTracker){var i=Ut(t)?"checked":"value";t._valueTracker=$t(t,i,""+t[i])}}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return t&&(o=Ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(i.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function ot(t){return t.replace(Ot,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(t,i,a,o,u,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+at(i)):t.value!==""+at(i)&&(t.value=""+at(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?An(t,S,at(i)):a!=null?An(t,S,at(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+at(A):t.removeAttribute("name")}function Qi(t,i,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null)){qt(t);return}a=a!=null?""+at(a):"",i=i!=null?""+at(i):a,A||i===t.value||(t.value=i),t.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),qt(t)}function An(t,i,a){i==="number"&&et(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function hi(t,i,a,o){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function zt(t,i,a){if(i!=null&&(i=""+at(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+at(a):""}function wn(t,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(ue(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=at(i),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function vn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(t,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,a):typeof a!="number"||a===0||Rn.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Qs(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Cn(t,u,o)}else for(var f in i)i.hasOwnProperty(f)&&Cn(t,f,i[f])}function Ri(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return hS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var zu=null;function Fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $s=null,er=null;function Yp(t){var i=Ua(t);if(i&&(t=i.stateNode)){var a=t[En]||null;e:switch(t=i.stateNode,i.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(s(90));Tn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===t.form&&It(o)}break e;case"textarea":zt(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&hi(t,!!a.multiple,i,!1)}}}var Hu=!1;function qp(t,i,a){if(Hu)return t(i,a);Hu=!0;try{var o=t(i);return o}finally{if(Hu=!1,($s!==null||er!==null)&&(vc(),$s&&(i=$s,t=er,er=$s=null,Yp(i),t)))for(i=0;i<t.length;i++)Yp(t[i])}}function co(t,i){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(ea)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Gu=!1}var Pa=null,Vu=null,Ll=null;function Zp(){if(Ll)return Ll;var t,i=Vu,a=i.length,o,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&i[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&i[a-o]===u[f-o];o++);return Ll=u.slice(t,1<o?1-o:void 0)}function Nl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function Kp(){return!1}function Yn(t){function i(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ul:Kp,this.isPropagationStopped=Kp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Yn(gs),fo=v({},gs,{view:0,detail:0}),dS=Yn(fo),ku,ju,ho,Pl=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(ku=t.screenX-ho.screenX,ju=t.screenY-ho.screenY):ju=ku=0,ho=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Jp=Yn(Pl),pS=v({},Pl,{dataTransfer:0}),mS=Yn(pS),gS=v({},fo,{relatedTarget:0}),Xu=Yn(gS),vS=v({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=Yn(vS),xS=v({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),SS=Yn(xS),yS=v({},gs,{data:0}),Qp=Yn(yS),MS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ES={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ES[t])?!!i[t]:!1}function Wu(){return TS}var AS=v({},fo,{key:function(t){if(t.key){var i=MS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wS=Yn(AS),RS=v({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Yn(RS),CS=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),DS=Yn(CS),LS=v({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),NS=Yn(LS),US=v({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=Yn(US),PS=v({},gs,{newState:0,oldState:0}),IS=Yn(PS),BS=[9,13,27,32],Yu=ea&&"CompositionEvent"in window,po=null;ea&&"documentMode"in document&&(po=document.documentMode);var zS=ea&&"TextEvent"in window&&!po,em=ea&&(!Yu||po&&8<po&&11>=po),tm=" ",nm=!1;function im(t,i){switch(t){case"keyup":return BS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function FS(t,i){switch(t){case"compositionend":return am(i);case"keypress":return i.which!==32?null:(nm=!0,tm);case"textInput":return t=i.data,t===tm&&nm?null:t;default:return null}}function HS(t,i){if(tr)return t==="compositionend"||!Yu&&im(t,i)?(t=Zp(),Ll=Vu=Pa=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return em&&i.locale!=="ko"?null:i.data;default:return null}}var GS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!GS[t.type]:i==="textarea"}function rm(t,i,a,o){$s?er?er.push(o):er=[o]:$s=o,i=Ec(i,"onChange"),0<i.length&&(a=new Ol("onChange","change",null,a,o),t.push({event:a,listeners:i}))}var mo=null,go=null;function VS(t){V0(t,0)}function Il(t){var i=ms(t);if(It(i))return t}function om(t,i){if(t==="change")return i}var lm=!1;if(ea){var qu;if(ea){var Zu="oninput"in document;if(!Zu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Zu=typeof cm.oninput=="function"}qu=Zu}else qu=!1;lm=qu&&(!document.documentMode||9<document.documentMode)}function um(){mo&&(mo.detachEvent("onpropertychange",fm),go=mo=null)}function fm(t){if(t.propertyName==="value"&&Il(go)){var i=[];rm(i,go,t,Fu(t)),qp(VS,i)}}function kS(t,i,a){t==="focusin"?(um(),mo=i,go=a,mo.attachEvent("onpropertychange",fm)):t==="focusout"&&um()}function jS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(go)}function XS(t,i){if(t==="click")return Il(i)}function WS(t,i){if(t==="input"||t==="change")return Il(i)}function YS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:YS;function vo(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bt.call(i,u)||!ti(t[u],i[u]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,i){var a=hm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=i&&o>=i)return{node:a,offset:i-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hm(a)}}function pm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?pm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=et(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=et(t.document)}return i}function Ku(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var qS=ea&&"documentMode"in document&&11>=document.documentMode,nr=null,Ju=null,_o=null,Qu=!1;function gm(t,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||nr==null||nr!==et(o)||(o=nr,"selectionStart"in o&&Ku(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&vo(_o,o)||(_o=o,o=Ec(Ju,"onSelect"),0<o.length&&(i=new Ol("onSelect","select",null,i,a),t.push({event:i,listeners:o}),i.target=nr)))}function vs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ir={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},$u={},vm={};ea&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function _s(t){if($u[t])return $u[t];if(!ir[t])return t;var i=ir[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in vm)return $u[t]=i[a];return t}var _m=_s("animationend"),xm=_s("animationiteration"),Sm=_s("animationstart"),ZS=_s("transitionrun"),KS=_s("transitionstart"),JS=_s("transitioncancel"),ym=_s("transitionend"),Mm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Ci(t,i){Mm.set(t,i),se(i,[t])}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],ar=0,tf=0;function zl(){for(var t=ar,i=tf=ar=0;i<t;){var a=di[i];di[i++]=null;var o=di[i];di[i++]=null;var u=di[i];di[i++]=null;var f=di[i];if(di[i++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&bm(a,u,f)}}function Fl(t,i,a,o){di[ar++]=t,di[ar++]=i,di[ar++]=a,di[ar++]=o,tf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function nf(t,i,a,o){return Fl(t,i,a,o),Hl(t)}function xs(t,i){return Fl(t,null,null,i),Hl(t)}function bm(t,i,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&i!==null&&(u=31-Pe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[i]:o.push(i),i.lane=a|536870912),f):null}function Hl(t){if(50<Ho)throw Ho=0,hh=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var sr={};function QS(t,i,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,i,a,o){return new QS(t,i,a,o)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,i){var a=t.alternate;return a===null?(a=ni(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Em(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Gl(t,i,a,o,u,f){var S=0;if(o=t,typeof t=="function")af(t)&&(S=1);else if(typeof t=="string")S=iM(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=ni(31,a,i,u),t.elementType=R,t.lanes=f,t;case T:return Ss(a.children,u,f,i);case M:S=8,u|=24;break;case x:return t=ni(12,a,i,u|2),t.elementType=x,t.lanes=f,t;case B:return t=ni(13,a,i,u),t.elementType=B,t.lanes=f,t;case F:return t=ni(19,a,i,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case O:S=9;break e;case D:S=11;break e;case z:S=14;break e;case Z:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return i=ni(S,a,i,u),i.elementType=t,i.type=o,i.lanes=f,i}function Ss(t,i,a,o){return t=ni(7,t,o,i),t.lanes=a,t}function sf(t,i,a){return t=ni(6,t,null,i),t.lanes=a,t}function Tm(t){var i=ni(18,null,null,0);return i.stateNode=t,i}function rf(t,i,a){return i=ni(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Am=new WeakMap;function pi(t,i){if(typeof t=="object"&&t!==null){var a=Am.get(t);return a!==void 0?a:(i={value:t,source:i,stack:k(i)},Am.set(t,i),i)}return{value:t,source:i,stack:k(i)}}var rr=[],or=0,Vl=null,xo=0,mi=[],gi=0,Ia=null,Fi=1,Hi="";function na(t,i){rr[or++]=xo,rr[or++]=Vl,Vl=t,xo=i}function wm(t,i,a){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Ia,Ia=t;var o=Fi;t=Hi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var f=32-Pe(i)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Fi=1<<32-Pe(i)+u|a<<u|o,Hi=f+t}else Fi=1<<f|a<<u|o,Hi=t}function of(t){t.return!==null&&(na(t,1),wm(t,1,0))}function lf(t){for(;t===Vl;)Vl=rr[--or],rr[or]=null,xo=rr[--or],rr[or]=null;for(;t===Ia;)Ia=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function Rm(t,i){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Ia,Fi=i.id,Hi=i.overflow,Ia=t}var Dn=null,Kt=null,Tt=!1,Ba=null,vi=!1,cf=Error(s(519));function za(t){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(pi(i,t)),cf}function Cm(t){var i=t.stateNode,a=t.type,o=t.memoizedProps;switch(i[un]=t,i[En]=o,a){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(a=0;a<Vo.length;a++)St(Vo[a],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":St("invalid",i),Qi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",i);break;case"textarea":St("invalid",i),wn(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||W0(i.textContent,a)?(o.popover!=null&&(St("beforetoggle",i),St("toggle",i)),o.onScroll!=null&&St("scroll",i),o.onScrollEnd!=null&&St("scrollend",i),o.onClick!=null&&(i.onclick=$i),i=!0):i=!1,i||za(t,!0)}function Dm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Dn=Dn.return}}function lr(t){if(t!==Dn)return!1;if(!Tt)return Dm(t),Tt=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||wh(t.type,t.memoizedProps)),a=!a),a&&Kt&&za(t),Dm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=tv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=tv(t)}else i===27?(i=Kt,Qa(t.type)?(t=Nh,Nh=null,Kt=t):Kt=i):Kt=Dn?xi(t.stateNode.nextSibling):null;return!0}function ys(){Kt=Dn=null,Tt=!1}function uf(){var t=Ba;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Ba=null),t}function So(t){Ba===null?Ba=[t]:Ba.push(t)}var ff=P(null),Ms=null,ia=null;function Fa(t,i,a){_e(ff,i._currentValue),i._currentValue=a}function aa(t){t._currentValue=ff.current,ee(ff)}function hf(t,i,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===a)break;t=t.return}}function df(t,i,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var V=0;V<i.length;V++)if(A.context===i[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),hf(f.return,a,t),o||(S=null);break e}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),hf(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function cr(t,i,a,o){t=null;for(var u=i,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;ti(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===fe.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}u=u.return}t!==null&&df(i,t,a,o),i.flags|=262144}function kl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Ms=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Lm(Ms,t)}function jl(t,i){return Ms===null&&bs(t),Lm(t,i)}function Lm(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(s(308));ia=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ia=ia.next=i;return a}var $S=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},ey=r.unstable_scheduleCallback,ty=r.unstable_NormalPriority,fn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new $S,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&ey(ty,function(){t.controller.abort()})}var Mo=null,mf=0,ur=0,fr=null;function ny(t,i){if(Mo===null){var a=Mo=[];mf=0,ur=_h(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mf++,i.then(Nm,Nm),i}function Nm(){if(--mf===0&&Mo!==null){fr!==null&&(fr.status="fulfilled");var t=Mo;Mo=null,ur=0,fr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function iy(t,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Um=N.S;N.S=function(t,i){g0=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ny(t,i),Um!==null&&Um(t,i)};var Es=P(null);function gf(){var t=Es.current;return t!==null?t:Yt.pooledCache}function Xl(t,i){i===null?_e(Es,Es.current):_e(Es,i.pool)}function Om(){var t=gf();return t===null?null:{parent:fn._currentValue,pool:t}}var hr=Error(s(460)),vf=Error(s(474)),Wl=Error(s(542)),Yl={then:function(){}};function Pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Im(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then($i,$i),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zm(t),t;default:if(typeof i.status=="string")i.then($i,$i);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,zm(t),t}throw As=i,hr}}function Ts(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,hr):a}}var As=null;function Bm(){if(As===null)throw Error(s(459));var t=As;return As=null,t}function zm(t){if(t===hr||t===Wl)throw Error(s(483))}var dr=null,bo=0;function ql(t){var i=bo;return bo+=1,dr===null&&(dr=[]),Im(dr,t,i)}function Eo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Zl(t,i){throw i.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Fm(t){function i(q,X){if(t){var te=q.deletions;te===null?(q.deletions=[X],q.flags|=16):te.push(X)}}function a(q,X){if(!t)return null;for(;X!==null;)i(q,X),X=X.sibling;return null}function o(q){for(var X=new Map;q!==null;)q.key!==null?X.set(q.key,q):X.set(q.index,q),q=q.sibling;return X}function u(q,X){return q=ta(q,X),q.index=0,q.sibling=null,q}function f(q,X,te){return q.index=te,t?(te=q.alternate,te!==null?(te=te.index,te<X?(q.flags|=67108866,X):te):(q.flags|=67108866,X)):(q.flags|=1048576,X)}function S(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,X,te,ve){return X===null||X.tag!==6?(X=sf(te,q.mode,ve),X.return=q,X):(X=u(X,te),X.return=q,X)}function V(q,X,te,ve){var nt=te.type;return nt===T?pe(q,X,te.props.children,ve,te.key):X!==null&&(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Z&&Ts(nt)===X.type)?(X=u(X,te.props),Eo(X,te),X.return=q,X):(X=Gl(te.type,te.key,te.props,null,q.mode,ve),Eo(X,te),X.return=q,X)}function ne(q,X,te,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=rf(te,q.mode,ve),X.return=q,X):(X=u(X,te.children||[]),X.return=q,X)}function pe(q,X,te,ve,nt){return X===null||X.tag!==7?(X=Ss(te,q.mode,ve,nt),X.return=q,X):(X=u(X,te),X.return=q,X)}function Me(q,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=sf(""+X,q.mode,te),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return te=Gl(X.type,X.key,X.props,null,q.mode,te),Eo(te,X),te.return=q,te;case b:return X=rf(X,q.mode,te),X.return=q,X;case Z:return X=Ts(X),Me(q,X,te)}if(ue(X)||K(X))return X=Ss(X,q.mode,te,null),X.return=q,X;if(typeof X.then=="function")return Me(q,ql(X),te);if(X.$$typeof===U)return Me(q,jl(q,X),te);Zl(q,X)}return null}function re(q,X,te,ve){var nt=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return nt!==null?null:A(q,X,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case y:return te.key===nt?V(q,X,te,ve):null;case b:return te.key===nt?ne(q,X,te,ve):null;case Z:return te=Ts(te),re(q,X,te,ve)}if(ue(te)||K(te))return nt!==null?null:pe(q,X,te,ve,null);if(typeof te.then=="function")return re(q,X,ql(te),ve);if(te.$$typeof===U)return re(q,X,jl(q,te),ve);Zl(q,te)}return null}function le(q,X,te,ve,nt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return q=q.get(te)||null,A(X,q,""+ve,nt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case y:return q=q.get(ve.key===null?te:ve.key)||null,V(X,q,ve,nt);case b:return q=q.get(ve.key===null?te:ve.key)||null,ne(X,q,ve,nt);case Z:return ve=Ts(ve),le(q,X,te,ve,nt)}if(ue(ve)||K(ve))return q=q.get(te)||null,pe(X,q,ve,nt,null);if(typeof ve.then=="function")return le(q,X,te,ql(ve),nt);if(ve.$$typeof===U)return le(q,X,te,jl(X,ve),nt);Zl(X,ve)}return null}function We(q,X,te,ve){for(var nt=null,Lt=null,$e=X,ft=X=0,Mt=null;$e!==null&&ft<te.length;ft++){$e.index>ft?(Mt=$e,$e=null):Mt=$e.sibling;var Nt=re(q,$e,te[ft],ve);if(Nt===null){$e===null&&($e=Mt);break}t&&$e&&Nt.alternate===null&&i(q,$e),X=f(Nt,X,ft),Lt===null?nt=Nt:Lt.sibling=Nt,Lt=Nt,$e=Mt}if(ft===te.length)return a(q,$e),Tt&&na(q,ft),nt;if($e===null){for(;ft<te.length;ft++)$e=Me(q,te[ft],ve),$e!==null&&(X=f($e,X,ft),Lt===null?nt=$e:Lt.sibling=$e,Lt=$e);return Tt&&na(q,ft),nt}for($e=o($e);ft<te.length;ft++)Mt=le($e,q,ft,te[ft],ve),Mt!==null&&(t&&Mt.alternate!==null&&$e.delete(Mt.key===null?ft:Mt.key),X=f(Mt,X,ft),Lt===null?nt=Mt:Lt.sibling=Mt,Lt=Mt);return t&&$e.forEach(function(is){return i(q,is)}),Tt&&na(q,ft),nt}function st(q,X,te,ve){if(te==null)throw Error(s(151));for(var nt=null,Lt=null,$e=X,ft=X=0,Mt=null,Nt=te.next();$e!==null&&!Nt.done;ft++,Nt=te.next()){$e.index>ft?(Mt=$e,$e=null):Mt=$e.sibling;var is=re(q,$e,Nt.value,ve);if(is===null){$e===null&&($e=Mt);break}t&&$e&&is.alternate===null&&i(q,$e),X=f(is,X,ft),Lt===null?nt=is:Lt.sibling=is,Lt=is,$e=Mt}if(Nt.done)return a(q,$e),Tt&&na(q,ft),nt;if($e===null){for(;!Nt.done;ft++,Nt=te.next())Nt=Me(q,Nt.value,ve),Nt!==null&&(X=f(Nt,X,ft),Lt===null?nt=Nt:Lt.sibling=Nt,Lt=Nt);return Tt&&na(q,ft),nt}for($e=o($e);!Nt.done;ft++,Nt=te.next())Nt=le($e,q,ft,Nt.value,ve),Nt!==null&&(t&&Nt.alternate!==null&&$e.delete(Nt.key===null?ft:Nt.key),X=f(Nt,X,ft),Lt===null?nt=Nt:Lt.sibling=Nt,Lt=Nt);return t&&$e.forEach(function(pM){return i(q,pM)}),Tt&&na(q,ft),nt}function Wt(q,X,te,ve){if(typeof te=="object"&&te!==null&&te.type===T&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case y:e:{for(var nt=te.key;X!==null;){if(X.key===nt){if(nt=te.type,nt===T){if(X.tag===7){a(q,X.sibling),ve=u(X,te.props.children),ve.return=q,q=ve;break e}}else if(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Z&&Ts(nt)===X.type){a(q,X.sibling),ve=u(X,te.props),Eo(ve,te),ve.return=q,q=ve;break e}a(q,X);break}else i(q,X);X=X.sibling}te.type===T?(ve=Ss(te.props.children,q.mode,ve,te.key),ve.return=q,q=ve):(ve=Gl(te.type,te.key,te.props,null,q.mode,ve),Eo(ve,te),ve.return=q,q=ve)}return S(q);case b:e:{for(nt=te.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(q,X.sibling),ve=u(X,te.children||[]),ve.return=q,q=ve;break e}else{a(q,X);break}else i(q,X);X=X.sibling}ve=rf(te,q.mode,ve),ve.return=q,q=ve}return S(q);case Z:return te=Ts(te),Wt(q,X,te,ve)}if(ue(te))return We(q,X,te,ve);if(K(te)){if(nt=K(te),typeof nt!="function")throw Error(s(150));return te=nt.call(te),st(q,X,te,ve)}if(typeof te.then=="function")return Wt(q,X,ql(te),ve);if(te.$$typeof===U)return Wt(q,X,jl(q,te),ve);Zl(q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(q,X.sibling),ve=u(X,te),ve.return=q,q=ve):(a(q,X),ve=sf(te,q.mode,ve),ve.return=q,q=ve),S(q)):a(q,X)}return function(q,X,te,ve){try{bo=0;var nt=Wt(q,X,te,ve);return dr=null,nt}catch($e){if($e===hr||$e===Wl)throw $e;var Lt=ni(29,$e,null,q.mode);return Lt.lanes=ve,Lt.return=q,Lt}}}var ws=Fm(!0),Hm=Fm(!1),Ha=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,i,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Hl(t),bm(t,null,a),i}return Fl(t,o,i,a),Hl(t)}function To(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,ds(t,a)}}function Sf(t,i){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=i:f=f.next=i}else u=f=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var yf=!1;function Ao(){if(yf){var t=fr;if(t!==null)throw t}}function wo(t,i,a,o){yf=!1;var u=t.updateQueue;Ha=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,ne=V.next;V.next=null,S===null?f=ne:S.next=ne,S=V;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==S&&(A===null?pe.firstBaseUpdate=ne:A.next=ne,pe.lastBaseUpdate=V))}if(f!==null){var Me=u.baseState;S=0,pe=ne=V=null,A=f;do{var re=A.lane&-536870913,le=re!==A.lane;if(le?(yt&re)===re:(o&re)===re){re!==0&&re===ur&&(yf=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var We=t,st=A;re=i;var Wt=a;switch(st.tag){case 1:if(We=st.payload,typeof We=="function"){Me=We.call(Wt,Me,re);break e}Me=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=st.payload,re=typeof We=="function"?We.call(Wt,Me,re):We,re==null)break e;Me=v({},Me,re);break e;case 2:Ha=!0}}re=A.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[re]:le.push(re))}else le={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(ne=pe=le,V=Me):pe=pe.next=le,S|=re;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;le=A,A=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);pe===null&&(V=Me),u.baseState=V,u.firstBaseUpdate=ne,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ya|=S,t.lanes=S,t.memoizedState=Me}}function Gm(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Vm(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gm(a[t],i)}var pr=P(null),Kl=P(0);function km(t,i){t=da,_e(Kl,t),_e(pr,i),da=t|i.baseLanes}function Mf(){_e(Kl,da),_e(pr,pr.current)}function bf(){da=Kl.current,ee(pr),ee(Kl)}var ii=P(null),_i=null;function ka(t){var i=t.alternate;_e(rn,rn.current&1),_e(ii,t),_i===null&&(i===null||pr.current!==null||i.memoizedState!==null)&&(_i=t)}function Ef(t){_e(rn,rn.current),_e(ii,t),_i===null&&(_i=t)}function jm(t){t.tag===22?(_e(rn,rn.current),_e(ii,t),_i===null&&(_i=t)):ja()}function ja(){_e(rn,rn.current),_e(ii,ii.current)}function ai(t){ee(ii),_i===t&&(_i=null),ee(rn)}var rn=P(0);function Jl(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Dh(a)||Lh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sa=0,ct=null,jt=null,hn=null,Ql=!1,mr=!1,Rs=!1,$l=0,Ro=0,gr=null,ay=0;function an(){throw Error(s(321))}function Tf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ti(t[a],i[a]))return!1;return!0}function Af(t,i,a,o,u,f){return sa=f,ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=t===null||t.memoizedState===null?wg:Gf,Rs=!1,f=a(o,u),Rs=!1,mr&&(f=Wm(i,a,o,u)),Xm(t),f}function Xm(t){N.H=Lo;var i=jt!==null&&jt.next!==null;if(sa=0,hn=jt=ct=null,Ql=!1,Ro=0,gr=null,i)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&kl(t)&&(dn=!0))}function Wm(t,i,a,o){ct=t;var u=0;do{if(mr&&(gr=null),Ro=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,hn=jt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Rg,f=i(a,o)}while(mr);return f}function sy(){var t=N.H,i=t.useState()[0];return i=typeof i.then=="function"?Co(i):i,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ct.flags|=1024),i}function wf(){var t=$l!==0;return $l=0,t}function Rf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Cf(t){if(Ql){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ql=!1}sa=0,hn=jt=ct=null,mr=!1,Ro=$l=0,gr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ct.memoizedState=hn=t:hn=hn.next=t,hn}function on(){if(jt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=hn===null?ct.memoizedState:hn.next;if(i!==null)hn=i,jt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},hn===null?ct.memoizedState=hn=t:hn=hn.next=t}return hn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var i=Ro;return Ro+=1,gr===null&&(gr=[]),t=Im(gr,t,i),i=ct,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?wg:Gf),t}function tc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===U)return Ln(t)}throw Error(s(438,String(t)))}function Df(t){var i=null,a=ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ec(),ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),o=0;o<t;o++)a[o]=L;return i.index++,a}function ra(t,i){return typeof i=="function"?i(t):i}function nc(t){var i=on();return Lf(i,jt,t)}function Lf(t,i,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}i.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{i=u.next;var A=S=null,V=null,ne=i,pe=!1;do{var Me=ne.lane&-536870913;if(Me!==ne.lane?(yt&Me)===Me:(sa&Me)===Me){var re=ne.revertLane;if(re===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Me===ur&&(pe=!0);else if((sa&re)===re){ne=ne.next,re===ur&&(pe=!0);continue}else Me={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},V===null?(A=V=Me,S=f):V=V.next=Me,ct.lanes|=re,Ya|=re;Me=ne.action,Rs&&a(f,Me),f=ne.hasEagerState?ne.eagerState:a(f,Me)}else re={lane:Me,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},V===null?(A=V=re,S=f):V=V.next=re,ct.lanes|=Me,Ya|=Me;ne=ne.next}while(ne!==null&&ne!==i);if(V===null?S=f:V.next=A,!ti(f,t.memoizedState)&&(dn=!0,pe&&(a=fr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Nf(t){var i=on(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=i.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);ti(f,i.memoizedState)||(dn=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,o]}function Ym(t,i,a){var o=ct,u=on(),f=Tt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=i();var S=!ti((jt||u).memoizedState,a);if(S&&(u.memoizedState=a,dn=!0),u=u.queue,Pf(Km.bind(null,o,u,t),[t]),u.getSnapshot!==i||S||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,vr(9,{destroy:void 0},Zm.bind(null,o,u,a,i),null),Yt===null)throw Error(s(349));f||(sa&127)!==0||qm(o,i,a)}return a}function qm(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=ct.updateQueue,i===null?(i=ec(),ct.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Zm(t,i,a,o){i.value=a,i.getSnapshot=o,Jm(i)&&Qm(t)}function Km(t,i,a){return a(function(){Jm(i)&&Qm(t)})}function Jm(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ti(t,a)}catch{return!0}}function Qm(t){var i=xs(t,2);i!==null&&Qn(i,t,2)}function Uf(t){var i=kn();if(typeof t=="function"){var a=t;if(t=a(),Rs){Ce(!0);try{a()}finally{Ce(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},i}function $m(t,i,a,o){return t.baseState=a,Lf(t,jt,typeof o=="function"?o:ra)}function ry(t,i,a,o,u){if(sc(t))throw Error(s(485));if(t=i.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=i.pending,a===null?(f.next=i.pending=f,eg(i,f)):(f.next=a.next,i.pending=a.next=f)}}function eg(t,i){var a=i.action,o=i.payload,u=t.state;if(i.isTransition){var f=N.T,S={};N.T=S;try{var A=a(u,o),V=N.S;V!==null&&V(S,A),tg(t,i,A)}catch(ne){Of(t,i,ne)}finally{f!==null&&S.types!==null&&(f.types=S.types),N.T=f}}else try{f=a(u,o),tg(t,i,f)}catch(ne){Of(t,i,ne)}}function tg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ng(t,i,o)},function(o){return Of(t,i,o)}):ng(t,i,a)}function ng(t,i,a){i.status="fulfilled",i.value=a,ig(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,eg(t,a)))}function Of(t,i,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,ig(i),i=i.next;while(i!==o)}t.action=null}function ig(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ag(t,i){return i}function sg(t,i){if(Tt){var a=Yt.formState;if(a!==null){e:{var o=ct;if(Tt){if(Kt){t:{for(var u=Kt,f=vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=xi(u.nextSibling),o=u.data==="F!";break e}}za(o)}o=!1}o&&(i=a[0])}}return a=kn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:i},a.queue=o,a=Eg.bind(null,ct,o),o.dispatch=a,o=Uf(!1),f=Hf.bind(null,ct,!1,o.queue),o=kn(),u={state:i,dispatch:null,action:t,pending:null},o.queue=u,a=ry.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[i,a,!1]}function rg(t){var i=on();return og(i,jt,t)}function og(t,i,a){if(i=Lf(t,i,ag)[0],t=nc(ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Co(i)}catch(S){throw S===hr?Wl:S}else o=i;i=on();var u=i.queue,f=u.dispatch;return a!==i.memoizedState&&(ct.flags|=2048,vr(9,{destroy:void 0},oy.bind(null,u,a),null)),[o,f,t]}function oy(t,i){t.action=i}function lg(t){var i=on(),a=jt;if(a!==null)return og(i,a,t);on(),i=i.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=t,[i,o,!1]}function vr(t,i,a,o){return t={tag:t,create:a,deps:o,inst:i,next:null},i=ct.updateQueue,i===null&&(i=ec(),ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,i.lastEffect=t),t}function cg(){return on().memoizedState}function ic(t,i,a,o){var u=kn();ct.flags|=t,u.memoizedState=vr(1|i,{destroy:void 0},a,o===void 0?null:o)}function ac(t,i,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;jt!==null&&o!==null&&Tf(o,jt.memoizedState.deps)?u.memoizedState=vr(i,f,a,o):(ct.flags|=t,u.memoizedState=vr(1|i,f,a,o))}function ug(t,i){ic(8390656,8,t,i)}function Pf(t,i){ac(2048,8,t,i)}function ly(t){ct.flags|=4;var i=ct.updateQueue;if(i===null)i=ec(),ct.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function fg(t){var i=on().memoizedState;return ly({ref:i,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function hg(t,i){return ac(4,2,t,i)}function dg(t,i){return ac(4,4,t,i)}function pg(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function mg(t,i,a){a=a!=null?a.concat([t]):null,ac(4,4,pg.bind(null,i,t),a)}function If(){}function gg(t,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Tf(i,o[1])?o[0]:(a.memoizedState=[t,i],t)}function vg(t,i){var a=on();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Tf(i,o[1]))return o[0];if(o=t(),Rs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,i],o}function Bf(t,i,a){return a===void 0||(sa&1073741824)!==0&&(yt&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=_0(),ct.lanes|=t,Ya|=t,a)}function _g(t,i,a,o){return ti(a,i)?a:pr.current!==null?(t=Bf(t,a,o),ti(t,i)||(dn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(yt&261930)===0?(dn=!0,t.memoizedState=a):(t=_0(),ct.lanes|=t,Ya|=t,i)}function xg(t,i,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var S=N.T,A={};N.T=A,Hf(t,!1,i,a);try{var V=u(),ne=N.S;if(ne!==null&&ne(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pe=iy(V,o);Do(t,i,pe,oi(t))}else Do(t,i,o,oi(t))}catch(Me){Do(t,i,{then:function(){},status:"rejected",reason:Me},oi())}finally{H.p=f,S!==null&&A.types!==null&&(S.types=A.types),N.T=S}}function cy(){}function zf(t,i,a,o){if(t.tag!==5)throw Error(s(476));var u=Sg(t).queue;xg(t,u,i,J,a===null?cy:function(){return yg(t),a(o)})}function Sg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:J},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function yg(t){var i=Sg(t);i.next===null&&(i=t.alternate.memoizedState),Do(t,i.next.queue,{},oi())}function Ff(){return Ln(Yo)}function Mg(){return on().memoizedState}function bg(){return on().memoizedState}function uy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=oi();t=Ga(a);var o=Va(i,t,a);o!==null&&(Qn(o,i,a),To(o,i,a)),i={cache:pf()},t.payload=i;return}i=i.return}}function fy(t,i,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sc(t)?Tg(i,a):(a=nf(t,i,a,o),a!==null&&(Qn(a,t,o),Ag(a,i,o)))}function Eg(t,i,a){var o=oi();Do(t,i,a,o)}function Do(t,i,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sc(t))Tg(i,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var S=i.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,ti(A,S))return Fl(t,i,u,0),Yt===null&&zl(),!1}catch{}if(a=nf(t,i,u,o),a!==null)return Qn(a,t,o),Ag(a,i,o),!0}return!1}function Hf(t,i,a,o){if(o={lane:2,revertLane:_h(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(t)){if(i)throw Error(s(479))}else i=nf(t,a,o,2),i!==null&&Qn(i,t,2)}function sc(t){var i=t.alternate;return t===ct||i!==null&&i===ct}function Tg(t,i){mr=Ql=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ag(t,i,a){if((a&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,ds(t,a)}}var Lo={readContext:Ln,use:tc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Lo.useEffectEvent=an;var wg={readContext:Ln,use:tc,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:ug,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,ic(4194308,4,pg.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ic(4194308,4,t,i)},useInsertionEffect:function(t,i){ic(4,2,t,i)},useMemo:function(t,i){var a=kn();i=i===void 0?null:i;var o=t();if(Rs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,i],o},useReducer:function(t,i,a){var o=kn();if(a!==void 0){var u=a(i);if(Rs){Ce(!0);try{a(i)}finally{Ce(!1)}}}else u=i;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=fy.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Uf(t);var i=t.queue,a=Eg.bind(null,ct,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:If,useDeferredValue:function(t,i){var a=kn();return Bf(a,t,i)},useTransition:function(){var t=Uf(!1);return t=xg.bind(null,ct,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var o=ct,u=kn();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Yt===null)throw Error(s(349));(yt&127)!==0||qm(o,i,a)}u.memoizedState=a;var f={value:a,getSnapshot:i};return u.queue=f,ug(Km.bind(null,o,f,t),[t]),o.flags|=2048,vr(9,{destroy:void 0},Zm.bind(null,o,f,a,i),null),a},useId:function(){var t=kn(),i=Yt.identifierPrefix;if(Tt){var a=Hi,o=Fi;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=$l++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=ay++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Ff,useFormState:sg,useActionState:sg,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Hf.bind(null,ct,!0,a),a.dispatch=i,[t,i]},useMemoCache:Df,useCacheRefresh:function(){return kn().memoizedState=uy.bind(null,ct)},useEffectEvent:function(t){var i=kn(),a={impl:t};return i.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Gf={readContext:Ln,use:tc,useCallback:gg,useContext:Ln,useEffect:Pf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:vg,useReducer:nc,useRef:cg,useState:function(){return nc(ra)},useDebugValue:If,useDeferredValue:function(t,i){var a=on();return _g(a,jt.memoizedState,t,i)},useTransition:function(){var t=nc(ra)[0],i=on().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Ff,useFormState:rg,useActionState:rg,useOptimistic:function(t,i){var a=on();return $m(a,jt,t,i)},useMemoCache:Df,useCacheRefresh:bg};Gf.useEffectEvent=fg;var Rg={readContext:Ln,use:tc,useCallback:gg,useContext:Ln,useEffect:Pf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:vg,useReducer:Nf,useRef:cg,useState:function(){return Nf(ra)},useDebugValue:If,useDeferredValue:function(t,i){var a=on();return jt===null?Bf(a,t,i):_g(a,jt.memoizedState,t,i)},useTransition:function(){var t=Nf(ra)[0],i=on().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Ym,useId:Mg,useHostTransitionStatus:Ff,useFormState:lg,useActionState:lg,useOptimistic:function(t,i){var a=on();return jt!==null?$m(a,jt,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Df,useCacheRefresh:bg};Rg.useEffectEvent=fg;function Vf(t,i,a,o){i=t.memoizedState,a=a(o,i),a=a==null?i:v({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kf={enqueueSetState:function(t,i,a){t=t._reactInternals;var o=oi(),u=Ga(o);u.payload=i,a!=null&&(u.callback=a),i=Va(t,u,o),i!==null&&(Qn(i,t,o),To(i,t,o))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var o=oi(),u=Ga(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Va(t,u,o),i!==null&&(Qn(i,t,o),To(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=oi(),o=Ga(a);o.tag=2,i!=null&&(o.callback=i),i=Va(t,o,a),i!==null&&(Qn(i,t,a),To(i,t,a))}};function Cg(t,i,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):i.prototype&&i.prototype.isPureReactComponent?!vo(a,o)||!vo(u,f):!0}function Dg(t,i,a,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==t&&kf.enqueueReplaceState(i,i.state,null)}function Cs(t,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(t=t.defaultProps){a===i&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Lg(t){Bl(t)}function Ng(t){console.error(t)}function Ug(t){Bl(t)}function rc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Og(t,i,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jf(t,i,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){rc(t,i)},a}function Pg(t){return t=Ga(t),t.tag=3,t}function Ig(t,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Og(i,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Og(i,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function hy(t,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&cr(i,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?_c():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yl?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),mh(t,o,u)),!1;case 22:return a.flags|=65536,o===Yl?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),mh(t,o,u)),!1}throw Error(s(435,a.tag))}return mh(t,o,u),_c(),!1}if(Tt)return i=ii.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==cf&&(t=Error(s(422),{cause:o}),So(pi(t,a)))):(o!==cf&&(i=Error(s(423),{cause:o}),So(pi(i,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,a),u=jf(t.stateNode,o,u),Sf(t,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=pi(f,a),Fo===null?Fo=[f]:Fo.push(f),sn!==4&&(sn=2),i===null)return!0;o=pi(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=jf(a.stateNode,o,t),Sf(a,t),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pg(u),Ig(u,t,a,o),Sf(a,u),!1}a=a.return}while(a!==null);return!1}var Xf=Error(s(461)),dn=!1;function Nn(t,i,a,o){i.child=t===null?Hm(i,null,a,o):ws(i,t.child,a,o)}function Bg(t,i,a,o,u){a=a.render;var f=i.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return bs(i),o=Af(t,i,a,S,f,u),A=wf(),t!==null&&!dn?(Rf(t,i,u),oa(t,i,u)):(Tt&&A&&of(i),i.flags|=1,Nn(t,i,o,u),i.child)}function zg(t,i,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!af(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,Fg(t,i,f,o,u)):(t=Gl(a.type,null,o,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,!$f(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(S,o)&&t.ref===i.ref)return oa(t,i,u)}return i.flags|=1,t=ta(f,o),t.ref=i.ref,t.return=i,i.child=t}function Fg(t,i,a,o,u){if(t!==null){var f=t.memoizedProps;if(vo(f,o)&&t.ref===i.ref)if(dn=!1,i.pendingProps=o=f,$f(t,u))(t.flags&131072)!==0&&(dn=!0);else return i.lanes=t.lanes,oa(t,i,u)}return Wf(t,i,a,o,u)}function Hg(t,i,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=i.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,i.child=null;return Gg(t,i,f,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xl(i,f!==null?f.cachePool:null),f!==null?km(i,f):Mf(),jm(i);else return o=i.lanes=536870912,Gg(t,i,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Xl(i,f.cachePool),km(i,f),ja(),i.memoizedState=null):(t!==null&&Xl(i,null),Mf(),ja());return Nn(t,i,u,a),i.child}function No(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Gg(t,i,a,o,u){var f=gf();return f=f===null?null:{parent:fn._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},t!==null&&Xl(i,null),Mf(),jm(i),t!==null&&cr(t,i,o,!0),i.childLanes=u,null}function oc(t,i){return i=cc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Vg(t,i,a){return ws(i,t.child,null,a),t=oc(i,i.pendingProps),t.flags|=2,ai(i),i.memoizedState=null,t}function dy(t,i,a){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=oc(i,o),i.lanes=536870912,No(null,t);if(Ef(i),(t=Kt)?(t=ev(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Tm(t),a.return=i,i.child=a,Dn=i,Kt=null)):t=null,t===null)throw za(i);return i.lanes=536870912,null}return oc(i,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(Ef(i),u)if(i.flags&256)i.flags&=-257,i=Vg(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(s(558));else if(dn||cr(t,i,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=Yt,o!==null&&(S=Bi(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,xs(t,S),Qn(o,t,S),Xf;_c(),i=Vg(t,i,a)}else t=f.treeContext,Kt=xi(S.nextSibling),Dn=i,Tt=!0,Ba=null,vi=!1,t!==null&&Rm(i,t),i=oc(i,o),i.flags|=4096;return i}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function lc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function Wf(t,i,a,o,u){return bs(i),a=Af(t,i,a,o,void 0,u),o=wf(),t!==null&&!dn?(Rf(t,i,u),oa(t,i,u)):(Tt&&o&&of(i),i.flags|=1,Nn(t,i,a,u),i.child)}function kg(t,i,a,o,u,f){return bs(i),i.updateQueue=null,a=Wm(i,o,a,u),Xm(t),o=wf(),t!==null&&!dn?(Rf(t,i,f),oa(t,i,f)):(Tt&&o&&of(i),i.flags|=1,Nn(t,i,a,f),i.child)}function jg(t,i,a,o,u){if(bs(i),i.stateNode===null){var f=sr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Ln(S)),f=new a(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=kf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},_f(i),S=a.contextType,f.context=typeof S=="object"&&S!==null?Ln(S):sr,f.state=i.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Vf(i,a,S,o),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&kf.enqueueReplaceState(f,f.state,null),wo(i,o,f,u),Ao(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){f=i.stateNode;var A=i.memoizedProps,V=Cs(a,A);f.props=V;var ne=f.context,pe=a.contextType;S=sr,typeof pe=="object"&&pe!==null&&(S=Ln(pe));var Me=a.getDerivedStateFromProps;pe=typeof Me=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ne!==S)&&Dg(i,f,o,S),Ha=!1;var re=i.memoizedState;f.state=re,wo(i,o,f,u),Ao(),ne=i.memoizedState,A||re!==ne||Ha?(typeof Me=="function"&&(Vf(i,a,Me,o),ne=i.memoizedState),(V=Ha||Cg(i,a,V,o,re,ne,S))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ne),f.props=o,f.state=ne,f.context=S,o=V):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,xf(t,i),S=i.memoizedProps,pe=Cs(a,S),f.props=pe,Me=i.pendingProps,re=f.context,ne=a.contextType,V=sr,typeof ne=="object"&&ne!==null&&(V=Ln(ne)),A=a.getDerivedStateFromProps,(ne=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Me||re!==V)&&Dg(i,f,o,V),Ha=!1,re=i.memoizedState,f.state=re,wo(i,o,f,u),Ao();var le=i.memoizedState;S!==Me||re!==le||Ha||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof A=="function"&&(Vf(i,a,A,o),le=i.memoizedState),(pe=Ha||Cg(i,a,pe,o,re,le,V)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,V)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=le),f.props=o,f.state=le,f.context=V,o=pe):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),o=!1)}return f=o,lc(t,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,t!==null&&o?(i.child=ws(i,t.child,null,u),i.child=ws(i,null,a,u)):Nn(t,i,a,u),i.memoizedState=f.state,t=i.child):t=oa(t,i,u),t}function Xg(t,i,a,o){return ys(),i.flags|=256,Nn(t,i,a,o),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:Om()}}function Zf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=ri),t}function Wg(t,i,a){var o=i.pendingProps,u=!1,f=(i.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(u?ka(i):ja(),(t=Kt)?(t=ev(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Tm(t),a.return=i,i.child=a,Dn=i,Kt=null)):t=null,t===null)throw za(i);return Lh(t)?i.lanes=32:i.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(ja(),u=i.mode,A=cc({mode:"hidden",children:A},u),o=Ss(o,u,a,null),A.return=i,o.return=i,A.sibling=o,i.child=A,o=i.child,o.memoizedState=qf(a),o.childLanes=Zf(t,S,a),i.memoizedState=Yf,No(null,o)):(ka(i),Kf(i,A))}var V=t.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(f)i.flags&256?(ka(i),i.flags&=-257,i=Jf(t,i,a)):i.memoizedState!==null?(ja(),i.child=t.child,i.flags|=128,i=null):(ja(),A=o.fallback,u=i.mode,o=cc({mode:"visible",children:o.children},u),A=Ss(A,u,a,null),A.flags|=2,o.return=i,A.return=i,o.sibling=A,i.child=o,ws(i,t.child,null,a),o=i.child,o.memoizedState=qf(a),o.childLanes=Zf(t,S,a),i.memoizedState=Yf,i=No(null,o));else if(ka(i),Lh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ne=S.dgst;S=ne,o=Error(s(419)),o.stack="",o.digest=S,So({value:o,source:null,stack:null}),i=Jf(t,i,a)}else if(dn||cr(t,i,a,!1),S=(a&t.childLanes)!==0,dn||S){if(S=Yt,S!==null&&(o=Bi(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,xs(t,o),Qn(S,t,o),Xf;Dh(A)||_c(),i=Jf(t,i,a)}else Dh(A)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,Kt=xi(A.nextSibling),Dn=i,Tt=!0,Ba=null,vi=!1,t!==null&&Rm(i,t),i=Kf(i,o.children),i.flags|=4096);return i}return u?(ja(),A=o.fallback,u=i.mode,V=t.child,ne=V.sibling,o=ta(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ne!==null?A=ta(ne,A):(A=Ss(A,u,a,null),A.flags|=2),A.return=i,o.return=i,o.sibling=A,i.child=o,No(null,o),o=i.child,A=t.child.memoizedState,A===null?A=qf(a):(u=A.cachePool,u!==null?(V=fn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Om(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Zf(t,S,a),i.memoizedState=Yf,No(t.child,o)):(ka(i),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=a,i.memoizedState=null,a)}function Kf(t,i){return i=cc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function cc(t,i){return t=ni(22,t,null,i),t.lanes=0,t}function Jf(t,i,a){return ws(i,t.child,null,a),t=Kf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Yg(t,i,a){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),hf(t.return,i,a)}function Qf(t,i,a,o,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function qg(t,i,a){var o=i.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,_e(rn,S),Nn(t,i,o,a),o=Tt?xo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yg(t,a,i);else if(t.tag===19)Yg(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&Jl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Qf(i,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Jl(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Qf(i,!0,a,null,f,o);break;case"together":Qf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function oa(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ya|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(cr(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=ta(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function $f(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function py(t,i,a){switch(i.tag){case 3:Ie(i,i.stateNode.containerInfo),Fa(i,fn,t.memoizedState.cache),ys();break;case 27:case 5:Ve(i);break;case 4:Ie(i,i.stateNode.containerInfo);break;case 10:Fa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Ef(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Wg(t,i,a):(ka(i),t=oa(t,i,a),t!==null?t.sibling:null);ka(i);break;case 19:var u=(t.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(cr(t,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return qg(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(rn,rn.current),o)break;return null;case 22:return i.lanes=0,Hg(t,i,a,i.pendingProps);case 24:Fa(i,fn,t.memoizedState.cache)}return oa(t,i,a)}function Zg(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)dn=!0;else{if(!$f(t,a)&&(i.flags&128)===0)return dn=!1,py(t,i,a);dn=(t.flags&131072)!==0}else dn=!1,Tt&&(i.flags&1048576)!==0&&wm(i,xo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=Ts(i.elementType),i.type=t,typeof t=="function")af(t)?(o=Cs(t,o),i.tag=1,i=jg(null,i,t,o,a)):(i.tag=0,i=Wf(null,i,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){i.tag=11,i=Bg(null,i,t,o,a);break e}else if(u===z){i.tag=14,i=zg(null,i,t,o,a);break e}}throw i=he(t)||t,Error(s(306,i,""))}}return i;case 0:return Wf(t,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=Cs(o,i.pendingProps),jg(t,i,o,u,a);case 3:e:{if(Ie(i,i.stateNode.containerInfo),t===null)throw Error(s(387));o=i.pendingProps;var f=i.memoizedState;u=f.element,xf(t,i),wo(i,o,null,a);var S=i.memoizedState;if(o=S.cache,Fa(i,fn,o),o!==f.cache&&df(i,[fn],a,!0),Ao(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=Xg(t,i,o,a);break e}else if(o!==u){u=pi(Error(s(424)),i),So(u),i=Xg(t,i,o,a);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=xi(t.firstChild),Dn=i,Tt=!0,Ba=null,vi=!0,a=Hm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),o===u){i=oa(t,i,a);break e}Nn(t,i,o,a)}i=i.child}return i;case 26:return lc(t,i),t===null?(a=rv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Tt||(a=i.type,t=i.pendingProps,o=Tc(ae.current).createElement(a),o[un]=i,o[En]=t,Un(o,a,t),w(o),i.stateNode=o):i.memoizedState=rv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Tt&&(o=i.stateNode=iv(i.type,i.pendingProps,ae.current),Dn=i,vi=!0,u=Kt,Qa(i.type)?(Nh=u,Kt=xi(o.firstChild)):Kt=u),Nn(t,i,i.pendingProps.children,a),lc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((u=o=Kt)&&(o=jy(o,i.type,i.pendingProps,vi),o!==null?(i.stateNode=o,Dn=i,Kt=xi(o.firstChild),vi=!1,u=!0):u=!1),u||za(i)),Ve(i),u=i.type,f=i.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,wh(u,f)?o=null:S!==null&&wh(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=Af(t,i,sy,null,null,a),Yo._currentValue=u),lc(t,i),Nn(t,i,o,a),i.child;case 6:return t===null&&Tt&&((t=a=Kt)&&(a=Xy(a,i.pendingProps,vi),a!==null?(i.stateNode=a,Dn=i,Kt=null,t=!0):t=!1),t||za(i)),null;case 13:return Wg(t,i,a);case 4:return Ie(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=ws(i,null,o,a):Nn(t,i,o,a),i.child;case 11:return Bg(t,i,i.type,i.pendingProps,a);case 7:return Nn(t,i,i.pendingProps,a),i.child;case 8:return Nn(t,i,i.pendingProps.children,a),i.child;case 12:return Nn(t,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Fa(i,i.type,o.value),Nn(t,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,bs(i),u=Ln(u),o=o(u),i.flags|=1,Nn(t,i,o,a),i.child;case 14:return zg(t,i,i.type,i.pendingProps,a);case 15:return Fg(t,i,i.type,i.pendingProps,a);case 19:return qg(t,i,a);case 31:return dy(t,i,a);case 22:return Hg(t,i,a,i.pendingProps);case 24:return bs(i),o=Ln(fn),t===null?(u=gf(),u===null&&(u=Yt,f=pf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),i.memoizedState={parent:o,cache:u},_f(i),Fa(i,fn,u)):((t.lanes&a)!==0&&(xf(t,i),wo(i,null,null,a),Ao()),u=t.memoizedState,f=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Fa(i,fn,o)):(o=f.cache,Fa(i,fn,o),o!==u.cache&&df(i,[fn],a,!0))),Nn(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function la(t){t.flags|=4}function eh(t,i,a,o,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(M0())t.flags|=8192;else throw As=Yl,vf}else t.flags&=-16777217}function Kg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fv(i))if(M0())t.flags|=8192;else throw As=Yl,vf}function uc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?mt():536870912,t.lanes|=i,yr|=i)}function Uo(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,i}function my(t,i,a){var o=i.pendingProps;switch(lf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return a=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),aa(fn),je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(lr(i)?la(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,uf())),Jt(i),null;case 26:var u=i.type,f=i.memoizedState;return t===null?(la(i),f!==null?(Jt(i),Kg(i,f)):(Jt(i),eh(i,u,null,o,a))):f?f!==t.memoizedState?(la(i),Jt(i),Kg(i,f)):(Jt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(i),Jt(i),eh(i,u,t,o,a)),null;case 27:if(ut(i),a=ae.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&la(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Jt(i),null}t=Re.current,lr(i)?Cm(i):(t=iv(u,o,a),i.stateNode=t,la(i))}return Jt(i),null;case 5:if(ut(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&la(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Jt(i),null}if(f=Re.current,lr(i))Cm(i);else{var S=Tc(ae.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[un]=i,f[En]=o;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=f;e:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(i)}}return Jt(i),eh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&la(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(t=ae.current,lr(i)){if(t=i.stateNode,a=i.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=i,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||W0(t.nodeValue,a)),t||za(i,!0)}else t=Tc(t).createTextNode(o),t[un]=i,i.stateNode=t}return Jt(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(o=lr(i),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[un]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),t=!1}else a=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(ai(i),i):(ai(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Jt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=lr(i),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),u=!1}else u=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ai(i),i):(ai(i),null)}return ai(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),uc(i,i.updateQueue),Jt(i),null);case 4:return je(),t===null&&Mh(i.stateNode.containerInfo),Jt(i),null;case 10:return aa(i.type),Jt(i),null;case 19:if(ee(rn),o=i.memoizedState,o===null)return Jt(i),null;if(u=(i.flags&128)!==0,f=o.rendering,f===null)if(u)Uo(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(f=Jl(t),f!==null){for(i.flags|=128,Uo(o,!1),t=f.updateQueue,i.updateQueue=t,uc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Em(a,t),a=a.sibling;return _e(rn,rn.current&1|2),Tt&&na(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&E()>mc&&(i.flags|=128,u=!0,Uo(o,!1),i.lanes=4194304)}else{if(!u)if(t=Jl(f),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,uc(i,t),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Tt)return Jt(i),null}else 2*E()-o.renderingStartTime>mc&&a!==536870912&&(i.flags|=128,u=!0,Uo(o,!1),i.lanes=4194304);o.isBackwards?(f.sibling=i.child,i.child=f):(t=o.last,t!==null?t.sibling=f:i.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=rn.current,_e(rn,u?a&1|2:a&1),Tt&&na(i,o.treeForkCount),t):(Jt(i),null);case 22:case 23:return ai(i),bf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),a=i.updateQueue,a!==null&&uc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),t!==null&&ee(Es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),aa(fn),Jt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function gy(t,i){switch(lf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return aa(fn),je(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ut(i),null;case 31:if(i.memoizedState!==null){if(ai(i),i.alternate===null)throw Error(s(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ai(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ee(rn),null;case 4:return je(),null;case 10:return aa(i.type),null;case 22:case 23:return ai(i),bf(),t!==null&&ee(Es),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return aa(fn),null;case 25:return null;default:return null}}function Jg(t,i){switch(lf(i),i.tag){case 3:aa(fn),je();break;case 26:case 27:case 5:ut(i);break;case 4:je();break;case 31:i.memoizedState!==null&&ai(i);break;case 13:ai(i);break;case 19:ee(rn);break;case 10:aa(i.type);break;case 22:case 23:ai(i),bf(),t!==null&&ee(Es);break;case 24:aa(fn)}}function Oo(t,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ht(i,i.return,A)}}function Xa(t,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=i;var V=a,ne=A;try{ne()}catch(pe){Ht(u,V,pe)}}}o=o.next}while(o!==f)}}catch(pe){Ht(i,i.return,pe)}}function Qg(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Vm(i,a)}catch(o){Ht(t,t.return,o)}}}function $g(t,i,a){a.props=Cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,i,o)}}function Po(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,i,u)}}function Gi(t,i){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,i,u)}else a.current=null}function e0(t){var i=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function th(t,i,a){try{var o=t.stateNode;zy(o,t.type,a,i),o[En]=i}catch(u){Ht(t,t.return,u)}}function t0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$i));else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(ih(t,i,a),t=t.sibling;t!==null;)ih(t,i,a),t=t.sibling}function fc(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(fc(t,i,a),t=t.sibling;t!==null;)fc(t,i,a),t=t.sibling}function n0(t){var i=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Un(i,o,a),i[un]=t,i[En]=a}catch(f){Ht(t,t.return,f)}}var ca=!1,pn=!1,ah=!1,i0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function vy(t,i){if(t=t.containerInfo,Th=Nc,t=mm(t),Ku(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,V=-1,ne=0,pe=0,Me=t,re=null;t:for(;;){for(var le;Me!==a||u!==0&&Me.nodeType!==3||(A=S+u),Me!==f||o!==0&&Me.nodeType!==3||(V=S+o),Me.nodeType===3&&(S+=Me.nodeValue.length),(le=Me.firstChild)!==null;)re=Me,Me=le;for(;;){if(Me===t)break t;if(re===a&&++ne===u&&(A=S),re===f&&++pe===o&&(V=S),(le=Me.nextSibling)!==null)break;Me=re,re=Me.parentNode}Me=le}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ah={focusedElem:t,selectionRange:a},Nc=!1,yn=i;yn!==null;)if(i=yn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,yn=t;else for(;yn!==null;){switch(i=yn,f=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=i,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Cs(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(st){Ht(a,a.return,st)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Ch(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ch(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,yn=t;break}yn=i.return}}function a0(t,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&Oo(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(S){Ht(a,a.return,S)}else{var u=Cs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ht(a,a.return,S)}}o&64&&Qg(a),o&512&&Po(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Vm(t,i)}catch(S){Ht(a,a.return,S)}}break;case 27:i===null&&o&4&&n0(a);case 26:case 5:fa(t,a),i===null&&o&4&&e0(a),o&512&&Po(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&o0(t,a);break;case 13:fa(t,a),o&4&&l0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ay.bind(null,a),Wy(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){i=i!==null&&i.memoizedState!==null||pn,u=ca;var f=pn;ca=o,(pn=i)&&!f?ha(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,pn=f}break;case 30:break;default:fa(t,a)}}function s0(t){var i=t.alternate;i!==null&&(t.alternate=null,s0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&lo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,qn=!1;function ua(t,i,a){for(a=a.child;a!==null;)r0(t,i,a),a=a.sibling}function r0(t,i,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:pn||Gi(a,i),ua(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Gi(a,i);var o=en,u=qn;Qa(a.type)&&(en=a.stateNode,qn=!1),ua(t,i,a),jo(a.stateNode),en=o,qn=u;break;case 5:pn||Gi(a,i);case 6:if(o=en,u=qn,en=null,ua(t,i,a),en=o,qn=u,en!==null)if(qn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Ht(a,i,f)}else try{en.removeChild(a.stateNode)}catch(f){Ht(a,i,f)}break;case 18:en!==null&&(qn?(t=en,Q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Cr(t)):Q0(en,a.stateNode));break;case 4:o=en,u=qn,en=a.stateNode.containerInfo,qn=!0,ua(t,i,a),en=o,qn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,i),pn||Xa(4,a,i),ua(t,i,a);break;case 1:pn||(Gi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&$g(a,i,o)),ua(t,i,a);break;case 21:ua(t,i,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ua(t,i,a),pn=o;break;default:ua(t,i,a)}}function o0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Cr(t)}catch(a){Ht(i,i.return,a)}}}function l0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Cr(t)}catch(a){Ht(i,i.return,a)}}function _y(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new i0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new i0),i;default:throw Error(s(435,t.tag))}}function hc(t,i){var a=_y(t);i.forEach(function(o){if(!a.has(o)){a.add(o);var u=wy.bind(null,t,o);o.then(u,u)}})}function Zn(t,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,S=i,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Qa(A.type)){en=A.stateNode,qn=!1;break e}break;case 5:en=A.stateNode,qn=!1;break e;case 3:case 4:en=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(en===null)throw Error(s(160));r0(f,S,u),en=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)c0(i,t),i=i.sibling}var Di=null;function c0(t,i){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(i,t),Kn(t),o&4&&(Xa(3,t,t.return),Oo(3,t),Xa(5,t,t.return));break;case 1:Zn(i,t),Kn(t),o&512&&(pn||a===null||Gi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Di;if(Zn(i,t),Kn(t),o&512&&(pn||a===null||Gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ps]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[un]=t,w(f),o=f;break e;case"link":var S=cv("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(S=cv("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[un]=t,w(f),o=f}t.stateNode=o}else uv(u,t.type,t.stateNode);else t.stateNode=lv(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?uv(u,t.type,t.stateNode):lv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&th(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zn(i,t),Kn(t),o&512&&(pn||a===null||Gi(a,a.return)),a!==null&&o&4&&th(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zn(i,t),Kn(t),o&512&&(pn||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{vn(u,"")}catch(We){Ht(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,th(t,u,a!==null?a.memoizedProps:u)),o&1024&&(ah=!0);break;case 6:if(Zn(i,t),Kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Ht(t,t.return,We)}}break;case 3:if(Rc=null,u=Di,Di=Ac(i.containerInfo),Zn(i,t),Di=u,Kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(i.containerInfo)}catch(We){Ht(t,t.return,We)}ah&&(ah=!1,u0(t));break;case 4:o=Di,Di=Ac(t.stateNode.containerInfo),Zn(i,t),Kn(t),Di=o;break;case 12:Zn(i,t),Kn(t);break;case 31:Zn(i,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 13:Zn(i,t),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pc=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ne=ca,pe=pn;if(ca=ne||u,pn=pe||V,Zn(i,t),pn=pe,ca=ne,Kn(t),o&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||V||ca||pn||Ds(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){V=a=i;try{if(f=V.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=V.stateNode;var Me=V.memoizedProps.style,re=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(We){Ht(V,V.return,We)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(We){Ht(V,V.return,We)}}}else if(i.tag===18){if(a===null){V=i;try{var le=V.stateNode;u?$0(le,!0):$0(V.stateNode,!1)}catch(We){Ht(V,V.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hc(t,a))));break;case 19:Zn(i,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 30:break;case 21:break;default:Zn(i,t),Kn(t)}}function Kn(t){var i=t.flags;if(i&2){try{for(var a,o=t.return;o!==null;){if(t0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=nh(t);fc(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(vn(S,""),a.flags&=-33);var A=nh(t);fc(t,A,S);break;case 3:case 4:var V=a.stateNode.containerInfo,ne=nh(t);ih(t,ne,V);break;default:throw Error(s(161))}}catch(pe){Ht(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function u0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;u0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function fa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)a0(t,i.alternate,i),i=i.sibling}function Ds(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Xa(4,i,i.return),Ds(i);break;case 1:Gi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&$g(i,i.return,a),Ds(i);break;case 27:jo(i.stateNode);case 26:case 5:Gi(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}t=t.sibling}}function ha(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=t,f=i,S=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),Oo(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Ht(o,o.return,ne)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Gm(V[u],A)}catch(ne){Ht(o,o.return,ne)}}a&&S&64&&Qg(f),Po(f,f.return);break;case 27:n0(f);case 26:case 5:ha(u,f,a),a&&o===null&&S&4&&e0(f),Po(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&S&4&&o0(u,f);break;case 13:ha(u,f,a),a&&S&4&&l0(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),Po(f,f.return);break;case 30:break;default:ha(u,f,a)}i=i.sibling}}function sh(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&yo(a))}function rh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yo(t))}function Li(t,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)f0(t,i,a,o),i=i.sibling}function f0(t,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Li(t,i,a,o),u&2048&&Oo(9,i);break;case 1:Li(t,i,a,o);break;case 3:Li(t,i,a,o),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yo(t)));break;case 12:if(u&2048){Li(t,i,a,o),t=i.stateNode;try{var f=i.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ht(i,i.return,V)}}else Li(t,i,a,o);break;case 31:Li(t,i,a,o);break;case 13:Li(t,i,a,o);break;case 23:break;case 22:f=i.stateNode,S=i.alternate,i.memoizedState!==null?f._visibility&2?Li(t,i,a,o):Io(t,i):f._visibility&2?Li(t,i,a,o):(f._visibility|=2,_r(t,i,a,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&sh(S,i);break;case 24:Li(t,i,a,o),u&2048&&rh(i.alternate,i);break;default:Li(t,i,a,o)}}function _r(t,i,a,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var f=t,S=i,A=a,V=o,ne=S.flags;switch(S.tag){case 0:case 11:case 15:_r(f,S,A,V,u),Oo(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?_r(f,S,A,V,u):Io(f,S):(pe._visibility|=2,_r(f,S,A,V,u)),u&&ne&2048&&sh(S.alternate,S);break;case 24:_r(f,S,A,V,u),u&&ne&2048&&rh(S.alternate,S);break;default:_r(f,S,A,V,u)}i=i.sibling}}function Io(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,o=i,u=o.flags;switch(o.tag){case 22:Io(a,o),u&2048&&sh(o.alternate,o);break;case 24:Io(a,o),u&2048&&rh(o.alternate,o);break;default:Io(a,o)}i=i.sibling}}var Bo=8192;function xr(t,i,a){if(t.subtreeFlags&Bo)for(t=t.child;t!==null;)h0(t,i,a),t=t.sibling}function h0(t,i,a){switch(t.tag){case 26:xr(t,i,a),t.flags&Bo&&t.memoizedState!==null&&aM(a,Di,t.memoizedState,t.memoizedProps);break;case 5:xr(t,i,a);break;case 3:case 4:var o=Di;Di=Ac(t.stateNode.containerInfo),xr(t,i,a),Di=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,xr(t,i,a),Bo=o):xr(t,i,a));break;default:xr(t,i,a)}}function d0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function zo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,m0(o,t)}d0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p0(t),t=t.sibling}function p0(t){switch(t.tag){case 0:case 11:case 15:zo(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:zo(t);break;case 12:zo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,dc(t)):zo(t);break;default:zo(t)}}function dc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];yn=o,m0(o,t)}d0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Xa(8,i,i.return),dc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,dc(i));break;default:dc(i)}t=t.sibling}}function m0(t,i){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(s0(o),o===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var xy={getCacheForType:function(t){var i=Ln(fn),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return Ln(fn).controller.signal}},Sy=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,xt=null,yt=0,Ft=0,si=null,Wa=!1,Sr=!1,oh=!1,da=0,sn=0,Ya=0,Ls=0,lh=0,ri=0,yr=0,Fo=null,Jn=null,ch=!1,pc=0,g0=0,mc=1/0,gc=null,qa=null,_n=0,Za=null,Mr=null,pa=0,uh=0,fh=null,v0=null,Ho=0,hh=null;function oi(){return(Pt&2)!==0&&yt!==0?yt&-yt:N.T!==null?_h():ro()}function _0(){if(ri===0)if((yt&536870912)===0||Tt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),ri=t}else ri=536870912;return t=ii.current,t!==null&&(t.flags|=32),ri}function Qn(t,i,a){(t===Yt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(br(t,0),Ka(t,yt,ri,!1)),cn(t,a),((Pt&2)===0||t!==Yt)&&(t===Yt&&((Pt&2)===0&&(Ls|=a),sn===4&&Ka(t,yt,ri,!1)),Vi(t))}function x0(t,i,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&t.expiredLanes)===0||Ne(t,i),u=o?by(t,i):ph(t,i,!0),f=o;do{if(u===0){Sr&&!o&&Ka(t,i,0,!1);break}else{if(a=t.current.alternate,f&&!yy(a)){u=ph(t,i,!1),f=!1;continue}if(u===2){if(f=i,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var A=t;u=Fo;var V=A.current.memoizedState.isDehydrated;if(V&&(br(A,S).flags|=256),S=ph(A,S,!1),S!==2){if(oh&&!V){A.errorRecoveryDisabledLanes|=f,Ls|=f,u=4;break e}f=Jn,Jn=u,f!==null&&(Jn===null?Jn=f:Jn.push.apply(Jn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){br(t,0),Ka(t,i,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ka(o,i,ri,!Wa);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=pc+300-E(),10<u)){if(Ka(o,i,ri,!Wa),xe(o,0,!0)!==0)break e;pa=i,o.timeoutHandle=K0(S0.bind(null,o,a,Jn,gc,ch,i,ri,Ls,yr,Wa,f,"Throttled",-0,0),u);break e}S0(o,a,Jn,gc,ch,i,ri,Ls,yr,Wa,f,null,-0,0)}}break}while(!0);Vi(t)}function S0(t,i,a,o,u,f,S,A,V,ne,pe,Me,re,le){if(t.timeoutHandle=-1,Me=i.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},h0(i,f,Me);var We=(f&62914560)===f?pc-E():(f&4194048)===f?g0-E():0;if(We=sM(Me,We),We!==null){pa=f,t.cancelPendingCommit=We(R0.bind(null,t,i,f,a,o,u,S,A,V,pe,Me,null,re,le)),Ka(t,f,S,!ne);return}}R0(t,i,f,a,o,u,S,A,V)}function yy(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ka(t,i,a,o){i&=~lh,i&=~Ls,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var u=i;0<u;){var f=31-Pe(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Da(t,a,i)}function vc(){return(Pt&6)===0?(Go(0),!1):!0}function dh(){if(xt!==null){if(Ft===0)var t=xt.return;else t=xt,ia=Ms=null,Cf(t),dr=null,bo=0,t=xt;for(;t!==null;)Jg(t.alternate,t),t=t.return;xt=null}}function br(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Gy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,dh(),Yt=t,xt=a=ta(t.current,null),yt=i,Ft=0,si=null,Wa=!1,Sr=Ne(t,i),oh=!1,yr=ri=lh=Ls=Ya=sn=0,Jn=Fo=null,ch=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var u=31-Pe(o),f=1<<u;i|=t[u],o&=~f}return da=i,zl(),a}function y0(t,i){ct=null,N.H=Lo,i===hr||i===Wl?(i=Bm(),Ft=3):i===vf?(i=Bm(),Ft=4):Ft=i===Xf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,xt===null&&(sn=1,rc(t,pi(i,t.current)))}function M0(){var t=ii.current;return t===null?!0:(yt&4194048)===yt?_i===null:(yt&62914560)===yt||(yt&536870912)!==0?t===_i:!1}function b0(){var t=N.H;return N.H=Lo,t===null?Lo:t}function E0(){var t=N.A;return N.A=xy,t}function _c(){sn=4,Wa||(yt&4194048)!==yt&&ii.current!==null||(Sr=!0),(Ya&134217727)===0&&(Ls&134217727)===0||Yt===null||Ka(Yt,yt,ri,!1)}function ph(t,i,a){var o=Pt;Pt|=2;var u=b0(),f=E0();(Yt!==t||yt!==i)&&(gc=null,br(t,i)),i=!1;var S=sn;e:do try{if(Ft!==0&&xt!==null){var A=xt,V=si;switch(Ft){case 8:dh(),S=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(i=!0);var ne=Ft;if(Ft=0,si=null,Er(t,A,V,ne),a&&Sr){S=0;break e}break;default:ne=Ft,Ft=0,si=null,Er(t,A,V,ne)}}My(),S=sn;break}catch(pe){y0(t,pe)}while(!0);return i&&t.shellSuspendCounter++,ia=Ms=null,Pt=o,N.H=u,N.A=f,xt===null&&(Yt=null,yt=0,zl()),S}function My(){for(;xt!==null;)T0(xt)}function by(t,i){var a=Pt;Pt|=2;var o=b0(),u=E0();Yt!==t||yt!==i?(gc=null,mc=E()+500,br(t,i)):Sr=Ne(t,i);e:do try{if(Ft!==0&&xt!==null){i=xt;var f=si;t:switch(Ft){case 1:Ft=0,si=null,Er(t,i,f,1);break;case 2:case 9:if(Pm(f)){Ft=0,si=null,A0(i);break}i=function(){Ft!==2&&Ft!==9||Yt!==t||(Ft=7),Vi(t)},f.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Pm(f)?(Ft=0,si=null,A0(i)):(Ft=0,si=null,Er(t,i,f,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var A=xt;if(S?fv(S):A.stateNode.complete){Ft=0,si=null;var V=A.sibling;if(V!==null)xt=V;else{var ne=A.return;ne!==null?(xt=ne,xc(ne)):xt=null}break t}}Ft=0,si=null,Er(t,i,f,5);break;case 6:Ft=0,si=null,Er(t,i,f,6);break;case 8:dh(),sn=6;break e;default:throw Error(s(462))}}Ey();break}catch(pe){y0(t,pe)}while(!0);return ia=Ms=null,N.H=o,N.A=u,Pt=a,xt!==null?0:(Yt=null,yt=0,zl(),sn)}function Ey(){for(;xt!==null&&!Ye();)T0(xt)}function T0(t){var i=Zg(t.alternate,t,da);t.memoizedProps=t.pendingProps,i===null?xc(t):xt=i}function A0(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=kg(a,i,i.pendingProps,i.type,void 0,yt);break;case 11:i=kg(a,i,i.pendingProps,i.type.render,i.ref,yt);break;case 5:Cf(i);default:Jg(a,i),i=xt=Em(i,da),i=Zg(a,i,da)}t.memoizedProps=t.pendingProps,i===null?xc(t):xt=i}function Er(t,i,a,o){ia=Ms=null,Cf(i),dr=null,bo=0;var u=i.return;try{if(hy(t,u,i,a,yt)){sn=1,rc(t,pi(a,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;sn=1,rc(t,pi(a,t.current)),xt=null;return}i.flags&32768?(Tt||o===1?t=!0:Sr||(yt&536870912)!==0?t=!1:(Wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),w0(i,t)):xc(i)}function xc(t){var i=t;do{if((i.flags&32768)!==0){w0(i,Wa);return}t=i.return;var a=my(i.alternate,i,da);if(a!==null){xt=a;return}if(i=i.sibling,i!==null){xt=i;return}xt=i=t}while(i!==null);sn===0&&(sn=5)}function w0(t,i){do{var a=gy(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);sn=6,xt=null}function R0(t,i,a,o,u,f,S,A,V){t.cancelPendingCommit=null;do Sc();while(_n!==0);if((Pt&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(f=i.lanes|i.childLanes,f|=tf,Vn(t,a,f,S,A,V),t===Yt&&(xt=Yt=null,yt=0),Mr=i,Za=t,pa=a,uh=f,fh=u,v0=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ry(ce,function(){return U0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=H.p,H.p=2,S=Pt,Pt|=4;try{vy(t,i,a)}finally{Pt=S,H.p=u,N.T=o}}_n=1,C0(),D0(),L0()}}function C0(){if(_n===1){_n=0;var t=Za,i=Mr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{c0(i,t);var f=Ah,S=mm(t.containerInfo),A=f.focusedElem,V=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&pm(A.ownerDocument.documentElement,A)){if(V!==null&&Ku(A)){var ne=V.start,pe=V.end;if(pe===void 0&&(pe=ne),"selectionStart"in A)A.selectionStart=ne,A.selectionEnd=Math.min(pe,A.value.length);else{var Me=A.ownerDocument||document,re=Me&&Me.defaultView||window;if(re.getSelection){var le=re.getSelection(),We=A.textContent.length,st=Math.min(V.start,We),Wt=V.end===void 0?st:Math.min(V.end,We);!le.extend&&st>Wt&&(S=Wt,Wt=st,st=S);var q=dm(A,st),X=dm(A,Wt);if(q&&X&&(le.rangeCount!==1||le.anchorNode!==q.node||le.anchorOffset!==q.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var te=Me.createRange();te.setStart(q.node,q.offset),le.removeAllRanges(),st>Wt?(le.addRange(te),le.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),le.addRange(te))}}}}for(Me=[],le=A;le=le.parentNode;)le.nodeType===1&&Me.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Me.length;A++){var ve=Me[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Nc=!!Th,Ah=Th=null}finally{Pt=u,H.p=o,N.T=a}}t.current=i,_n=2}}function D0(){if(_n===2){_n=0;var t=Za,i=Mr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=H.p;H.p=2;var u=Pt;Pt|=4;try{a0(t,i.alternate,i)}finally{Pt=u,H.p=o,N.T=a}}_n=3}}function L0(){if(_n===4||_n===3){_n=0,I();var t=Za,i=Mr,a=pa,o=v0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,Mr=Za=null,N0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(qa=null),Zs(a),i=i.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(de,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=N.T,u=H.p,H.p=2,N.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{N.T=i,H.p=u}}(pa&3)!==0&&Sc(),Vi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===hh?Ho++:(Ho=0,hh=t):Ho=0,Go(0)}}function N0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,yo(i)))}function Sc(){return C0(),D0(),L0(),U0()}function U0(){if(_n!==5)return!1;var t=Za,i=uh;uh=0;var a=Zs(pa),o=N.T,u=H.p;try{H.p=32>a?32:a,N.T=null,a=fh,fh=null;var f=Za,S=pa;if(_n=0,Mr=Za=null,pa=0,(Pt&6)!==0)throw Error(s(331));var A=Pt;if(Pt|=4,p0(f.current),f0(f,f.current,S,a),Pt=A,Go(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{H.p=u,N.T=o,N0(t,i)}}function O0(t,i,a){i=pi(a,i),i=jf(t.stateNode,i,2),t=Va(t,i,2),t!==null&&(cn(t,2),Vi(t))}function Ht(t,i,a){if(t.tag===3)O0(t,t,a);else for(;i!==null;){if(i.tag===3){O0(i,t,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){t=pi(a,t),a=Pg(2),o=Va(i,a,2),o!==null&&(Ig(a,o,i,t),cn(o,2),Vi(o));break}}i=i.return}}function mh(t,i,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Sy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(oh=!0,u.add(a),t=Ty.bind(null,t,i,a),i.then(t,t))}function Ty(t,i,a){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(yt&a)===a&&(sn===4||sn===3&&(yt&62914560)===yt&&300>E()-pc?(Pt&2)===0&&br(t,0):lh|=a,yr===yt&&(yr=0)),Vi(t)}function P0(t,i){i===0&&(i=mt()),t=xs(t,i),t!==null&&(cn(t,i),Vi(t))}function Ay(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),P0(t,a)}function wy(t,i){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),P0(t,a)}function Ry(t,i){return vt(t,i)}var yc=null,Tr=null,gh=!1,Mc=!1,vh=!1,Ja=0;function Vi(t){t!==Tr&&t.next===null&&(Tr===null?yc=Tr=t:Tr=Tr.next=t),Mc=!0,gh||(gh=!0,Dy())}function Go(t,i){if(!vh&&Mc){vh=!0;do for(var a=!1,o=yc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,F0(o,f))}else f=yt,f=xe(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ne(o,f)||(a=!0,F0(o,f));o=o.next}while(a);vh=!1}}function Cy(){I0()}function I0(){Mc=gh=!1;var t=0;Ja!==0&&Hy()&&(t=Ja);for(var i=E(),a=null,o=yc;o!==null;){var u=o.next,f=B0(o,i);f===0?(o.next=null,a===null?yc=u:a.next=u,u===null&&(Tr=a)):(a=o,(t!==0||(f&3)!==0)&&(Mc=!0)),o=u}_n!==0&&_n!==5||Go(t),Ja!==0&&(Ja=0)}function B0(t,i){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pe(f),A=1<<S,V=u[S];V===-1?((A&a)===0||(A&o)!==0)&&(u[S]=Qe(A,i)):V<=i&&(t.expiredLanes|=A),f&=~A}if(i=Yt,a=yt,a=xe(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Dt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(o!==null&&Dt(o),Zs(a)){case 2:case 8:a=be;break;case 32:a=ce;break;case 268435456:a=Ue;break;default:a=ce}return o=z0.bind(null,t),a=vt(a,o),t.callbackPriority=i,t.callbackNode=a,i}return o!==null&&o!==null&&Dt(o),t.callbackPriority=2,t.callbackNode=null,2}function z0(t,i){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Sc()&&t.callbackNode!==a)return null;var o=yt;return o=xe(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(x0(t,o,i),B0(t,E()),t.callbackNode!=null&&t.callbackNode===a?z0.bind(null,t):null)}function F0(t,i){if(Sc())return null;x0(t,i,!0)}function Dy(){Vy(function(){(Pt&6)!==0?vt(me,Cy):I0()})}function _h(){if(Ja===0){var t=ur;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ja=t}return Ja}function H0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(""+t)}function G0(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Ly(t,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var f=H0((u[En]||null).action),S=o.submitter;S&&(i=(i=S[En]||null)?H0(i.formAction):S.getAttribute("formAction"),i!==null&&(f=i,S=null));var A=new Ol("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var V=S?G0(u,S):new FormData(u);zf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=S?G0(u,S):new FormData(u),zf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var xh=0;xh<ef.length;xh++){var Sh=ef[xh],Ny=Sh.toLowerCase(),Uy=Sh[0].toUpperCase()+Sh.slice(1);Ci(Ny,"on"+Uy)}Ci(_m,"onAnimationEnd"),Ci(xm,"onAnimationIteration"),Ci(Sm,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(ZS,"onTransitionRun"),Ci(KS,"onTransitionStart"),Ci(JS,"onTransitionCancel"),Ci(ym,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function V0(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(i)for(var S=o.length-1;0<=S;S--){var A=o[S],V=A.instance,ne=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ne;try{f(u)}catch(pe){Bl(pe)}u.currentTarget=null,f=V}else for(S=0;S<o.length;S++){if(A=o[S],V=A.instance,ne=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ne;try{f(u)}catch(pe){Bl(pe)}u.currentTarget=null,f=V}}}}function St(t,i){var a=i[Ks];a===void 0&&(a=i[Ks]=new Set);var o=t+"__bubble";a.has(o)||(k0(i,t,2,!1),a.add(o))}function yh(t,i,a){var o=0;i&&(o|=4),k0(a,t,o,i)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Mh(t){if(!t[bc]){t[bc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Oy.has(a)||yh(a,!1,t),yh(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bc]||(i[bc]=!0,yh("selectionchange",!1,i))}}function k0(t,i,a,o){switch(_v(i)){case 2:var u=lM;break;case 8:u=cM;break;default:u=Bh}a=u.bind(null,i,a,t),u=void 0,!Gu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function bh(t,i,a,o,u){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Na(A),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=f=S;continue e}A=A.parentNode}}o=o.return}qp(function(){var ne=f,pe=Fu(a),Me=[];e:{var re=Mm.get(t);if(re!==void 0){var le=Ol,We=t;switch(t){case"keypress":if(Nl(a)===0)break e;case"keydown":case"keyup":le=wS;break;case"focusin":We="focus",le=Xu;break;case"focusout":We="blur",le=Xu;break;case"beforeblur":case"afterblur":le=Xu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=DS;break;case _m:case xm:case Sm:le=_S;break;case ym:le=NS;break;case"scroll":case"scrollend":le=dS;break;case"wheel":le=OS;break;case"copy":case"cut":case"paste":le=SS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=$p;break;case"toggle":case"beforetoggle":le=IS}var st=(i&4)!==0,Wt=!st&&(t==="scroll"||t==="scrollend"),q=st?re!==null?re+"Capture":null:re;st=[];for(var X=ne,te;X!==null;){var ve=X;if(te=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||te===null||q===null||(ve=co(X,q),ve!=null&&st.push(ko(X,ve,te))),Wt)break;X=X.return}0<st.length&&(re=new le(re,We,null,a,pe),Me.push({event:re,listeners:st}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&a!==zu&&(We=a.relatedTarget||a.fromElement)&&(Na(We)||We[wi]))break e;if((le||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,le?(We=a.relatedTarget||a.toElement,le=ne,We=We?Na(We):null,We!==null&&(Wt=c(We),st=We.tag,We!==Wt||st!==5&&st!==27&&st!==6)&&(We=null)):(le=null,We=ne),le!==We)){if(st=Jp,ve="onMouseLeave",q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=$p,ve="onPointerLeave",q="onPointerEnter",X="pointer"),Wt=le==null?re:ms(le),te=We==null?re:ms(We),re=new st(ve,X+"leave",le,a,pe),re.target=Wt,re.relatedTarget=te,ve=null,Na(pe)===ne&&(st=new st(q,X+"enter",We,a,pe),st.target=te,st.relatedTarget=Wt,ve=st),Wt=ve,le&&We)t:{for(st=Py,q=le,X=We,te=0,ve=q;ve;ve=st(ve))te++;ve=0;for(var nt=X;nt;nt=st(nt))ve++;for(;0<te-ve;)q=st(q),te--;for(;0<ve-te;)X=st(X),ve--;for(;te--;){if(q===X||X!==null&&q===X.alternate){st=q;break t}q=st(q),X=st(X)}st=null}else st=null;le!==null&&j0(Me,re,le,st,!1),We!==null&&Wt!==null&&j0(Me,Wt,We,st,!0)}}e:{if(re=ne?ms(ne):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Lt=om;else if(sm(re))if(lm)Lt=WS;else{Lt=jS;var $e=kS}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Ri(ne.elementType)&&(Lt=om):Lt=XS;if(Lt&&(Lt=Lt(t,ne))){rm(Me,Lt,a,pe);break e}$e&&$e(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&An(re,"number",re.value)}switch($e=ne?ms(ne):window,t){case"focusin":(sm($e)||$e.contentEditable==="true")&&(nr=$e,Ju=ne,_o=null);break;case"focusout":_o=Ju=nr=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,gm(Me,a,pe);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":gm(Me,a,pe)}var ft;if(Yu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else tr?im(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(em&&a.locale!=="ko"&&(tr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&tr&&(ft=Zp()):(Pa=pe,Vu="value"in Pa?Pa.value:Pa.textContent,tr=!0)),$e=Ec(ne,Mt),0<$e.length&&(Mt=new Qp(Mt,t,null,a,pe),Me.push({event:Mt,listeners:$e}),ft?Mt.data=ft:(ft=am(a),ft!==null&&(Mt.data=ft)))),(ft=zS?FS(t,a):HS(t,a))&&(Mt=Ec(ne,"onBeforeInput"),0<Mt.length&&($e=new Qp("onBeforeInput","beforeinput",null,a,pe),Me.push({event:$e,listeners:Mt}),$e.data=ft)),Ly(Me,t,ne,a,pe)}V0(Me,i)})}function ko(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Ec(t,i){for(var a=i+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=co(t,a),u!=null&&o.unshift(ko(t,u,f)),u=co(t,i),u!=null&&o.push(ko(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Py(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j0(t,i,a,o,u){for(var f=i._reactName,S=[];a!==null&&a!==o;){var A=a,V=A.alternate,ne=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||ne===null||(V=ne,u?(ne=co(a,f),ne!=null&&S.unshift(ko(a,ne,V))):u||(ne=co(a,f),ne!=null&&S.push(ko(a,ne,V)))),a=a.return}S.length!==0&&t.push({event:i,listeners:S})}var Iy=/\r\n?/g,By=/\u0000|\uFFFD/g;function X0(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(By,"")}function W0(t,i){return i=X0(i),X0(t)===i}function Xt(t,i,a,o,u,f){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||vn(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&vn(t,""+o);break;case"className":it(t,"class",o);break;case"tabIndex":it(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":it(t,a,o);break;case"style":Qs(t,o,f);break;case"data":if(i!=="object"){it(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Dl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&Xt(t,i,"name",u.name,u,null),Xt(t,i,"formEncType",u.formEncType,u,null),Xt(t,i,"formMethod",u.formMethod,u,null),Xt(t,i,"formTarget",u.formTarget,u,null)):(Xt(t,i,"encType",u.encType,u,null),Xt(t,i,"method",u.method,u,null),Xt(t,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Dl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Dl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ke(t,"popover",o);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fS.get(a)||a,Ke(t,a,o))}}function Eh(t,i,a,o,u,f){switch(a){case"style":Qs(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?vn(t,o):(typeof o=="number"||typeof o=="bigint")&&vn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(i,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ke(t,a,o)}}}function Un(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(t,i,f,S,a,null)}}u&&Xt(t,i,"srcSet",a.srcSet,a,null),o&&Xt(t,i,"src",a.src,a,null);return;case"input":St("invalid",t);var A=f=S=u=null,V=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":S=pe;break;case"checked":V=pe;break;case"defaultChecked":ne=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,i));break;default:Xt(t,i,o,pe,a,null)}}Qi(t,f,A,V,ne,S,u,!1);return;case"select":St("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Xt(t,i,u,A,a,null)}i=f,a=S,t.multiple=!!o,i!=null?hi(t,!!o,i,!1):a!=null&&hi(t,!!o,a,!0);return;case"textarea":St("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xt(t,i,S,A,a,null)}wn(t,o,u,f);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Xt(t,i,V,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Vo.length;o++)St(Vo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(t,i,ne,o,a,null)}return;default:if(Ri(i)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&Eh(t,i,pe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Xt(t,i,A,o,a,null))}function zy(t,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,V=null,ne=null,pe=null;for(le in a){var Me=a[le];if(a.hasOwnProperty(le)&&Me!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":V=Me;default:o.hasOwnProperty(le)||Xt(t,i,le,null,o,Me)}}for(var re in o){var le=o[re];if(Me=a[re],o.hasOwnProperty(re)&&(le!=null||Me!=null))switch(re){case"type":f=le;break;case"name":u=le;break;case"checked":ne=le;break;case"defaultChecked":pe=le;break;case"value":S=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,i));break;default:le!==Me&&Xt(t,i,re,le,o,Me)}}Tn(t,S,A,V,ne,pe,f,u);return;case"select":le=S=A=re=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":le=V;default:o.hasOwnProperty(f)||Xt(t,i,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":re=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==V&&Xt(t,i,u,f,o,V)}i=A,a=S,o=le,re!=null?hi(t,!!a,re,!1):!!o!=!!a&&(i!=null?hi(t,!!a,i,!0):hi(t,!!a,a?[]:"",!1));return;case"textarea":le=re=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,i,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":re=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xt(t,i,S,u,o,f)}zt(t,re,le);return;case"option":for(var We in a)re=a[We],a.hasOwnProperty(We)&&re!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Xt(t,i,We,null,o,re));for(V in o)re=o[V],le=a[V],o.hasOwnProperty(V)&&re!==le&&(re!=null||le!=null)&&(V==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Xt(t,i,V,re,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)re=a[st],a.hasOwnProperty(st)&&re!=null&&!o.hasOwnProperty(st)&&Xt(t,i,st,null,o,re);for(ne in o)if(re=o[ne],le=a[ne],o.hasOwnProperty(ne)&&re!==le&&(re!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,i));break;default:Xt(t,i,ne,re,o,le)}return;default:if(Ri(i)){for(var Wt in a)re=a[Wt],a.hasOwnProperty(Wt)&&re!==void 0&&!o.hasOwnProperty(Wt)&&Eh(t,i,Wt,void 0,o,re);for(pe in o)re=o[pe],le=a[pe],!o.hasOwnProperty(pe)||re===le||re===void 0&&le===void 0||Eh(t,i,pe,re,o,le);return}}for(var q in a)re=a[q],a.hasOwnProperty(q)&&re!=null&&!o.hasOwnProperty(q)&&Xt(t,i,q,null,o,re);for(Me in o)re=o[Me],le=a[Me],!o.hasOwnProperty(Me)||re===le||re==null&&le==null||Xt(t,i,Me,re,o,le)}function Y0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&Y0(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ne=V.startTime;if(ne>A)break;var pe=V.transferSize,Me=V.initiatorType;pe&&Y0(Me)&&(V=V.responseEnd,S+=pe*(V<A?1:(A-ne)/(V-ne)))}if(--o,i+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Th=null,Ah=null;function Tc(t){return t.nodeType===9?t:t.ownerDocument}function q0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function wh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rh=null;function Hy(){var t=window.event;return t&&t.type==="popstate"?t===Rh?!1:(Rh=t,!0):(Rh=null,!1)}var K0=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,J0=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof J0<"u"?function(t){return J0.resolve(null).then(t).catch(ky)}:K0;function ky(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function Q0(t,i){var a=i,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Cr(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")jo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,jo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[ps]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&jo(t.ownerDocument.body);a=u}while(a);Cr(i)}function $0(t,i){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Ch(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ch(a),lo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function jy(t,i,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ps])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function Xy(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function ev(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=xi(t.nextSibling),t===null))return null;return t}function Dh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wy(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function xi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Nh=null;function tv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return xi(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function nv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function iv(t,i,a){switch(i=Tc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function jo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);lo(t)}var Si=new Map,av=new Set;function Ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=H.d;H.d={f:Yy,r:qy,D:Zy,C:Ky,L:Jy,m:Qy,X:eM,S:$y,M:tM};function Yy(){var t=ma.f(),i=vc();return t||i}function qy(t){var i=Ua(t);i!==null&&i.tag===5&&i.type==="form"?yg(i):ma.r(t)}var Ar=typeof document>"u"?null:document;function sv(t,i,a){var o=Ar;if(o&&typeof i=="string"&&i){var u=ot(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),av.has(u)||(av.add(u),t={rel:t,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Un(i,"link",t),w(i),o.head.appendChild(i)))}}function Zy(t){ma.D(t),sv("dns-prefetch",t,null)}function Ky(t,i){ma.C(t,i),sv("preconnect",t,i)}function Jy(t,i,a){ma.L(t,i,a);var o=Ar;if(o&&t&&i){var u='link[rel="preload"][as="'+ot(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ot(a.imageSizes)+'"]')):u+='[href="'+ot(t)+'"]';var f=u;switch(i){case"style":f=wr(t);break;case"script":f=Rr(t)}Si.has(f)||(t=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Si.set(f,t),o.querySelector(u)!==null||i==="style"&&o.querySelector(Xo(f))||i==="script"&&o.querySelector(Wo(f))||(i=o.createElement("link"),Un(i,"link",t),w(i),o.head.appendChild(i)))}}function Qy(t,i){ma.m(t,i);var a=Ar;if(a&&t){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ot(o)+'"][href="'+ot(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Rr(t)}if(!Si.has(f)&&(t=v({rel:"modulepreload",href:t},i),Si.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(f)))return}o=a.createElement("link"),Un(o,"link",t),w(o),a.head.appendChild(o)}}}function $y(t,i,a){ma.S(t,i,a);var o=Ar;if(o&&t){var u=Oa(o).hoistableStyles,f=wr(t);i=i||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Xo(f)))A.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Si.get(f))&&Uh(t,a);var V=S=o.createElement("link");w(V),Un(V,"link",t),V._p=new Promise(function(ne,pe){V.onload=ne,V.onerror=pe}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,wc(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function eM(t,i){ma.X(t,i);var a=Ar;if(a&&t){var o=Oa(a).hoistableScripts,u=Rr(t),f=o.get(u);f||(f=a.querySelector(Wo(u)),f||(t=v({src:t,async:!0},i),(i=Si.get(u))&&Oh(t,i),f=a.createElement("script"),w(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function tM(t,i){ma.M(t,i);var a=Ar;if(a&&t){var o=Oa(a).hoistableScripts,u=Rr(t),f=o.get(u);f||(f=a.querySelector(Wo(u)),f||(t=v({src:t,async:!0,type:"module"},i),(i=Si.get(u))&&Oh(t,i),f=a.createElement("script"),w(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function rv(t,i,a,o){var u=(u=ae.current)?Ac(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=wr(a.href),a=Oa(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=wr(a.href);var f=Oa(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(Xo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),Si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,a),f||nM(u,t,a,S.state))),i&&o===null)throw Error(s(528,""));return S}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Rr(a),a=Oa(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function wr(t){return'href="'+ot(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function ov(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function nM(t,i,a,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Un(i,"link",a),w(i),t.head.appendChild(i))}function Rr(t){return'[src="'+ot(t)+'"]'}function Wo(t){return"script[async]"+t}function lv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+ot(a.href)+'"]');if(o)return i.instance=o,w(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),w(o),Un(o,"style",u),wc(o,a.precedence,t),i.instance=o;case"stylesheet":u=wr(a.href);var f=t.querySelector(Xo(u));if(f)return i.state.loading|=4,i.instance=f,w(f),f;o=ov(a),(u=Si.get(u))&&Uh(o,u),f=(t.ownerDocument||t).createElement("link"),w(f);var S=f;return S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Un(f,"link",o),i.state.loading|=4,wc(f,a.precedence,t),i.instance=f;case"script":return f=Rr(a.src),(u=t.querySelector(Wo(f)))?(i.instance=u,w(u),u):(o=a,(u=Si.get(f))&&(o=v({},a),Oh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),w(u),Un(u,"link",o),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,wc(o,a.precedence,t));return i.instance}function wc(t,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===i)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Uh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Oh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Rc=null;function cv(t,i,a){if(Rc===null){var o=new Map,u=Rc=new Map;u.set(a,o)}else u=Rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ps]||f[un]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(i)||"";S=t+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function uv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function iM(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function fv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function aM(t,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=wr(o.href),f=i.querySelector(Xo(u));if(f){i=f._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Cc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=f,w(f);return}f=i.ownerDocument||i,o=ov(o),(u=Si.get(u))&&Uh(o,u),f=f.createElement("link"),w(f);var S=f;S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Un(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Cc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var Ph=0;function sM(t,i){return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+i);0<t.imgBytes&&Ph===0&&(Ph=62500*Fy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ph?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Dc=null;function Lc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Dc=new Map,i.forEach(rM,t),Dc=null,Cc.call(t))}function rM(t,i){if(!(i.state.loading&4)){var a=Dc.get(t);if(a)var o=a.get(null);else{a=new Map,Dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=i.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=Cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var Yo={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function oM(t,i,a,o,u,f,S,A,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.hiddenUpdates=_t(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function hv(t,i,a,o,u,f,S,A,V,ne,pe,Me){return t=new oM(t,i,a,S,V,ne,pe,Me,A),i=1,f===!0&&(i|=24),f=ni(3,null,null,i),t.current=f,f.stateNode=t,i=pf(),i.refCount++,t.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:i},_f(f),t}function dv(t){return t?(t=sr,t):sr}function pv(t,i,a,o,u,f){u=dv(u),o.context===null?o.context=u:o.pendingContext=u,o=Ga(i),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Va(t,o,i),a!==null&&(Qn(a,t,i),To(a,t,i))}function mv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Ih(t,i){mv(t,i),(t=t.alternate)&&mv(t,i)}function gv(t){if(t.tag===13||t.tag===31){var i=xs(t,67108864);i!==null&&Qn(i,t,67108864),Ih(t,67108864)}}function vv(t){if(t.tag===13||t.tag===31){var i=oi();i=La(i);var a=xs(t,i);a!==null&&Qn(a,t,i),Ih(t,i)}}var Nc=!0;function lM(t,i,a,o){var u=N.T;N.T=null;var f=H.p;try{H.p=2,Bh(t,i,a,o)}finally{H.p=f,N.T=u}}function cM(t,i,a,o){var u=N.T;N.T=null;var f=H.p;try{H.p=8,Bh(t,i,a,o)}finally{H.p=f,N.T=u}}function Bh(t,i,a,o){if(Nc){var u=zh(o);if(u===null)bh(t,i,o,Uc,a),xv(t,o);else if(fM(u,t,i,a,o))o.stopPropagation();else if(xv(t,o),i&4&&-1<uM.indexOf(t)){for(;u!==null;){var f=Ua(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ae(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var V=1<<31-Pe(S);A.entanglements[1]|=V,S&=~V}Vi(f),(Pt&6)===0&&(mc=E()+500,Go(0))}}break;case 31:case 13:A=xs(f,2),A!==null&&Qn(A,f,2),vc(),Ih(f,2)}if(f=zh(o),f===null&&bh(t,i,o,Uc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else bh(t,i,o,null,a)}}function zh(t){return t=Fu(t),Fh(t)}var Uc=null;function Fh(t){if(Uc=null,t=Na(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=h(i),t!==null)return t;t=null}else if(a===31){if(t=d(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Uc=t,null}function _v(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case me:return 2;case be:return 8;case ce:case qe:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Hh=!1,$a=null,es=null,ts=null,qo=new Map,Zo=new Map,ns=[],uM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xv(t,i){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(i.pointerId)}}function Ko(t,i,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},i!==null&&(i=Ua(i),i!==null&&gv(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function fM(t,i,a,o,u){switch(i){case"focusin":return $a=Ko($a,t,i,a,o,u),!0;case"dragenter":return es=Ko(es,t,i,a,o,u),!0;case"mouseover":return ts=Ko(ts,t,i,a,o,u),!0;case"pointerover":var f=u.pointerId;return qo.set(f,Ko(qo.get(f)||null,t,i,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Zo.set(f,Ko(Zo.get(f)||null,t,i,a,o,u)),!0}return!1}function Sv(t){var i=Na(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){t.blockedOn=i,zi(t.priority,function(){vv(a)});return}}else if(i===31){if(i=d(a),i!==null){t.blockedOn=i,zi(t.priority,function(){vv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=zh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);zu=o,a.target.dispatchEvent(o),zu=null}else return i=Ua(a),i!==null&&gv(i),t.blockedOn=a,!1;i.shift()}return!0}function yv(t,i,a){Oc(t)&&a.delete(i)}function hM(){Hh=!1,$a!==null&&Oc($a)&&($a=null),es!==null&&Oc(es)&&(es=null),ts!==null&&Oc(ts)&&(ts=null),qo.forEach(yv),Zo.forEach(yv)}function Pc(t,i){t.blockedOn===i&&(t.blockedOn=null,Hh||(Hh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hM)))}var Ic=null;function Mv(t){Ic!==t&&(Ic=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ic===t&&(Ic=null);for(var i=0;i<t.length;i+=3){var a=t[i],o=t[i+1],u=t[i+2];if(typeof o!="function"){if(Fh(o||a)===null)continue;break}var f=Ua(a);f!==null&&(t.splice(i,3),i-=3,zf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(t){function i(V){return Pc(V,t)}$a!==null&&Pc($a,t),es!==null&&Pc(es,t),ts!==null&&Pc(ts,t),qo.forEach(i),Zo.forEach(i);for(var a=0;a<ns.length;a++){var o=ns[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)Sv(a),a.blockedOn===null&&ns.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[En]||null;if(typeof f=="function")S||Mv(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[En]||null)A=S.formAction;else if(Fh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Mv(a)}}}function bv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Gh(t){this._internalRoot=t}Bc.prototype.render=Gh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=oi();pv(a,o,t,i,null,null)},Bc.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;pv(t.current,2,null,t,null,null),vc(),i[wi]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var i=ro();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ns.length&&i!==0&&i<ns[a].priority;a++);ns.splice(a,0,t),a===0&&Sv(t)}};var Ev=e.version;if(Ev!=="19.2.5")throw Error(s(527,Ev,"19.2.5"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var dM={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{de=zc.inject(dM),ge=zc}catch{}}return Qo.createRoot=function(t,i){if(!l(t))throw Error(s(299));var a=!1,o="",u=Lg,f=Ng,S=Ug;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=hv(t,1,!1,null,null,a,o,null,u,f,S,bv),t[wi]=i.current,Mh(t),new Gh(i)},Qo.hydrateRoot=function(t,i,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Lg,S=Ng,A=Ug,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),i=hv(t,1,!0,i,a??null,o,u,V,f,S,A,bv),i.context=dv(null),a=i.current,o=oi(),o=La(o),u=Ga(o),u.callback=null,Va(a,u,o),a=o,i.current.lanes=a,cn(i,a),Vi(i),t[wi]=i.current,Mh(t),new Bc(i)},Qo.version="19.2.5",Qo}var Ov;function bM(){if(Ov)return Xh.exports;Ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xh.exports=MM(),Xh.exports}var EM=bM();const TM={de:{header:{home:"Home",about:"Über mich",contact:"Kontakt"},hero:{kicker:"Portfolio",titlePrefix:"Hi, ich bin",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Galerie",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung: React, Angular, Vue.js und moderne Webtechnologien. Nebenbei: Video-Editing & Grafikdesign seit 2020.",ctaPrimary:"Was ich mache",ctaSecondary:"Kontakt",scroll:"Scroll"},aboutSlider:{title:"Nebenbei",categories:[{key:"all",label:"Alles"},{key:"pets",label:"Tiere"},{key:"moto",label:"Motorrad"},{key:"hike",label:"Wandern"},{key:"me",label:"Ich"}],back:"Zurück",next:"Weiter",close:"Schließen"},socialStats:{kicker:"Abseits vom Code",title:"Auch online unterwegs",subtitle:"Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs bin.",linkedinCta:"Lass uns vernetzen",latestPost:"Neuester Beitrag",tiktokPreviewCaption:"Neuester Post auf TikTok ansehen",instagramPreviewCaption:"Neuester Post auf Instagram ansehen"},projectsPreview:{kicker:"Live Vorschau",title:"Meine Projekte",subtitle:"Ein paar Einblicke in Dinge, die ich gebaut habe · klick dich durch oder öffne sie live.",previousProject:"Vorheriges Projekt",nextProject:"Nächstes Projekt",openLive:"Live öffnen",openLiveAria:r=>`${r} live öffnen`,jumpTo:r=>`Zu ${r} springen`},liveButton:{label:"Live ansehen"},about:{heading:"Über mich",lead:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung.",body:"Ich bin Junior Software Engineer mit Fokus auf moderne Webentwicklung und Frontend-Technologien wie React, Angular und Vue.js · von durchdachten Oberflächen bis zur Backend-Anbindung. Daneben schneide ich seit 2020 Videos für Social Media und gestalte Grafiken; mein eigener TikTok-Kanal hat über 20.000 Follower und 3,5 Mio. Likes. Was ich mitbringe: sauberer Code, ein Auge für Timing und Komposition, und die Bereitschaft, mich kontinuierlich in neue Technologien einzuarbeiten.",spotlight:{kicker:"Nebenbei: Video & Grafikdesign",heading:"TikTok @jsnuwu · eigener Kanal seit 2020",subtitle:"Konzeption, Schnitt und Gestaltung in Eigenregie",statFollowerValue:"20.800",statFollowerLabel:"Follower",statLikesValue:"3,5 Mio.",statLikesLabel:"Likes",statExperienceValue:"5 Jahre",statExperienceLabel:"Schnitt-Praxis",list:["Eigene Edits von Schnitt bis Veröffentlichung auf TikTok, YouTube und Instagram","Gefühl für Bildaufbau, Timing und Reichweite"]}},experience:{heading:"Werdegang",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · heute",bullets:["Frontend-Komponenten mit Angular und TypeScript, angebunden an bestehende PHP-Backends","Kundenwebsites mit WordPress und Elementor, erweitert um eigenen PHP- und CSS-Code","Bugfixing und Feature-Erweiterungen im laufenden Betrieb"]},{org:"adesso SE · Ausbildung",role:"Fachinformatiker für Anwendungsentwicklung",period:"09/2023 · 01/2026",bullets:["Frontend mit Angular und TypeScript, Backend mit Java, Spring Boot und PostgreSQL","Profiler (internes Produkt, 05/2025 · 12/2025): Frontend-Komponenten und UI-Bugfixes","Scrum-Team: Git, Code Reviews, JIRA, Confluence","IT-Support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"FSJ · Freiwilliges Soziales Jahr, Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Begleitung und Unterstützung von Menschen mit Behinderungen im Alltag, inklusive Freizeitaktivitäten und Ausflügen","Mitwirkung bei der Alltagsgestaltung: Kochen, Haushaltsaktivitäten und Förderung der Selbstständigkeit"]}]},skills:{heading:"Skills",groups:[{title:"Schwerpunkt Frontend",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Weitere Frameworks",items:"React, Vue.js"},{title:"Backend & Daten",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Arbeitsweise",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video-Schnitt, TikTok, YouTube, Instagram"}],languages:[{name:"Deutsch",level:"Muttersprache"},{name:"Englisch",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projekte",skillsLabel:"Skills:"},contact:{heading:"Kontakt",intro:"Ich freue mich über deine Nachricht! Schreib mir einfach eine E-Mail oder nutze das Formular unten.",send:"send",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",messagePlaceholder:"Deine Nachricht",submit:"Absenden"},tiktokShowcase:{kicker:"TikTok",title:"Ein paar Einblicke",subtitle:"Mehr davon auf TikTok ansehen",prev:"Vorheriges Video",next:"Nächstes Video",mute:"Stummschalten",unmute:"Ton an",play:"Abspielen",pause:"Pausieren",volume:"Lautstärke",jumpTo:r=>`Zu Video ${r} springen`}},en:{header:{home:"Home",about:"About",contact:"Contact"},hero:{kicker:"Portfolio",titlePrefix:"Hi, I'm",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Gallery",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer focused on frontend development: React, Angular, Vue.js and modern web technologies. On the side: video editing & graphic design since 2020.",ctaPrimary:"What I do",ctaSecondary:"Contact",scroll:"Scroll"},aboutSlider:{title:"On the side",categories:[{key:"all",label:"All"},{key:"pets",label:"Pets"},{key:"moto",label:"Motorcycles"},{key:"hike",label:"Hiking"},{key:"me",label:"Me"}],back:"Back",next:"Next",close:"Close"},socialStats:{kicker:"Beyond the code",title:"Also active online",subtitle:"A few numbers from the channels I'm active on elsewhere.",linkedinCta:"Let's connect",latestPost:"Latest post",tiktokPreviewCaption:"Watch my latest TikTok post",instagramPreviewCaption:"View my latest Instagram post"},projectsPreview:{kicker:"Live Preview",title:"My Projects",subtitle:"A few glimpses of things I've built · click through or open them live.",previousProject:"Previous project",nextProject:"Next project",openLive:"Open live",openLiveAria:r=>`Open ${r} live`,jumpTo:r=>`Jump to ${r}`},liveButton:{label:"View live"},about:{heading:"About me",lead:"Junior Software Engineer focused on frontend development.",body:"I'm a Junior Software Engineer focused on modern web development and frontend technologies like React, Angular and Vue.js · from thoughtful interfaces to backend integration. Alongside that, I've been editing videos for social media and designing graphics since 2020; my own TikTok channel has over 20,000 followers and 3.5M likes. What I bring: clean code, an eye for timing and composition, and a drive to keep learning new technologies.",spotlight:{kicker:"On the side: Video & Graphic Design",heading:"TikTok @jsnuwu · my own channel since 2020",subtitle:"Concept, editing and design, all done myself",statFollowerValue:"20.8K",statFollowerLabel:"Followers",statLikesValue:"3.5M",statLikesLabel:"Likes",statExperienceValue:"5 years",statExperienceLabel:"Editing Experience",list:["My own edits from cut to release on TikTok, YouTube and Instagram","A feel for framing, timing and reach"]}},experience:{heading:"Experience",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · present",bullets:["Frontend components with Angular and TypeScript, wired into existing PHP backends","Client websites with WordPress and Elementor, extended with custom PHP and CSS","Bug fixing and feature work in production"]},{org:"adesso SE · Apprenticeship",role:"IT Specialist for Application Development",period:"09/2023 · 01/2026",bullets:["Frontend with Angular and TypeScript, backend with Java, Spring Boot and PostgreSQL","Profiler (internal product, 05/2025 · 12/2025): frontend components and UI bug fixes","Scrum team: Git, code reviews, JIRA, Confluence","IT support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"Voluntary Social Year (FSJ), Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Supporting and assisting people with disabilities in daily life, including leisure activities and outings","Helping shape everyday life: cooking, household activities, and fostering independence"]}]},skills:{heading:"Skills",groups:[{title:"Frontend focus",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Other frameworks",items:"React, Vue.js"},{title:"Backend & Data",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Method",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video editing, TikTok, YouTube, Instagram"}],languages:[{name:"German",level:"Native"},{name:"English",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projects",skillsLabel:"Skills:"},contact:{heading:"Contact",intro:"I'd love to hear from you! Just send me an email or use the form below.",send:"send",namePlaceholder:"Your name",emailPlaceholder:"Your email",messagePlaceholder:"Your message",submit:"Send"},tiktokShowcase:{kicker:"TikTok",title:"A few glimpses",subtitle:"See more on TikTok",prev:"Previous video",next:"Next video",mute:"Mute",unmute:"Unmute",play:"Play",pause:"Pause",volume:"Volume",jumpTo:r=>`Jump to video ${r}`}}},sx=Te.createContext(null);function AM({children:r}){const[e,n]=Te.useState(()=>{const s=localStorage.getItem("lang");return s==="en"||s==="de"?s:"de"});return Te.useEffect(()=>{localStorage.setItem("lang",e),document.documentElement.lang=e},[e]),C.jsx(sx.Provider,{value:{lang:e,setLang:n,t:TM[e]},children:r})}function wM(r,e,n){return Math.max(e,Math.min(r,n))}const Qt={toVector(r,e){return r===void 0&&(r=e),Array.isArray(r)?r:[r,r]},add(r,e){return[r[0]+e[0],r[1]+e[1]]},sub(r,e){return[r[0]-e[0],r[1]-e[1]]},addTo(r,e){r[0]+=e[0],r[1]+=e[1]},subTo(r,e){r[0]-=e[0],r[1]-=e[1]}};function Pv(r,e,n){return e===0||Math.abs(e)===1/0?Math.pow(r,n*5):r*e*n/(e+n*r)}function Iv(r,e,n,s=.15){return s===0?wM(r,e,n):r<e?-Pv(e-r,n-e,s)+e:r>n?+Pv(r-n,n-e,s)+n:r}function RM(r,[e,n],[s,l]){const[[c,h],[d,m]]=r;return[Iv(e,c,h,s),Iv(n,d,m,l)]}function CM(r,e){if(typeof r!="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function DM(r){var e=CM(r,"string");return typeof e=="symbol"?e:String(e)}function gn(r,e,n){return e=DM(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function Bv(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),n.push.apply(n,s)}return n}function nn(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bv(Object(n),!0).forEach(function(s){gn(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Bv(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}const rx={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function zv(r){return r?r[0].toUpperCase()+r.slice(1):""}const LM=["enter","leave"];function NM(r=!1,e){return r&&!LM.includes(e)}function UM(r,e="",n=!1){const s=rx[r],l=s&&s[e]||e;return"on"+zv(r)+zv(l)+(NM(n,l)?"Capture":"")}const OM=["gotpointercapture","lostpointercapture"];function PM(r){let e=r.substring(2).toLowerCase();const n=!!~e.indexOf("passive");n&&(e=e.replace("passive",""));const s=OM.includes(e)?"capturecapture":"capture",l=!!~e.indexOf(s);return l&&(e=e.replace("capture","")),{device:e,capture:l,passive:n}}function IM(r,e=""){const n=rx[r],s=n&&n[e]||e;return r+s}function Nu(r){return"touches"in r}function ox(r){return Nu(r)?"touch":"pointerType"in r?r.pointerType:"mouse"}function BM(r){return Array.from(r.touches).filter(e=>{var n,s;return e.target===r.currentTarget||((n=r.currentTarget)===null||n===void 0||(s=n.contains)===null||s===void 0?void 0:s.call(n,e.target))})}function zM(r){return r.type==="touchend"||r.type==="touchcancel"?r.changedTouches:r.targetTouches}function lx(r){return Nu(r)?zM(r)[0]:r}function Od(r,e){try{const n=e.clientX-r.clientX,s=e.clientY-r.clientY,l=(e.clientX+r.clientX)/2,c=(e.clientY+r.clientY)/2,h=Math.hypot(n,s);return{angle:-(Math.atan2(n,s)*180)/Math.PI,distance:h,origin:[l,c]}}catch{}return null}function FM(r){return BM(r).map(e=>e.identifier)}function Fv(r,e){const[n,s]=Array.from(r.touches).filter(l=>e.includes(l.identifier));return Od(n,s)}function Zh(r){const e=lx(r);return Nu(r)?e.identifier:e.pointerId}function Qr(r){const e=lx(r);return[e.clientX,e.clientY]}const Hv=40,Gv=800;function cx(r){let{deltaX:e,deltaY:n,deltaMode:s}=r;return s===1?(e*=Hv,n*=Hv):s===2&&(e*=Gv,n*=Gv),[e,n]}function HM(r){var e,n;const{scrollX:s,scrollY:l,scrollLeft:c,scrollTop:h}=r.currentTarget;return[(e=s??c)!==null&&e!==void 0?e:0,(n=l??h)!==null&&n!==void 0?n:0]}function GM(r){const e={};if("buttons"in r&&(e.buttons=r.buttons),"shiftKey"in r){const{shiftKey:n,altKey:s,metaKey:l,ctrlKey:c}=r;Object.assign(e,{shiftKey:n,altKey:s,metaKey:l,ctrlKey:c})}return e}function bu(r,...e){return typeof r=="function"?r(...e):r}function VM(){}function kM(...r){return r.length===0?VM:r.length===1?r[0]:function(){let e;for(const n of r)e=n.apply(this,arguments)||e;return e}}function Vv(r,e){return Object.assign({},e,r||{})}const jM=32;class ux{constructor(e,n,s){this.ctrl=e,this.args=n,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:n,ingKey:s,args:l}=this;n[s]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=l,e.axis=void 0,e.memo=void 0,e.elapsedTime=e.timeDelta=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const n=this.state,s=this.config;n._active||(this.reset(),this.computeInitial(),n._active=!0,n.target=e.target,n.currentTarget=e.currentTarget,n.lastOffset=s.from?bu(s.from,n):n.offset,n.offset=n.lastOffset,n.startTime=n.timeStamp=e.timeStamp)}computeValues(e){const n=this.state;n._values=e,n.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:n,config:s,shared:l}=this;n.args=this.args;let c=0;if(e&&(n.event=e,s.preventDefault&&e.cancelable&&n.event.preventDefault(),n.type=e.type,l.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,l.locked=!!document.pointerLockElement,Object.assign(l,GM(e)),l.down=l.pressed=l.buttons%2===1||l.touches>0,c=e.timeStamp-n.timeStamp,n.timeStamp=e.timeStamp,n.elapsedTime=n.timeStamp-n.startTime),n._active){const F=n._delta.map(Math.abs);Qt.addTo(n._distance,F)}this.axisIntent&&this.axisIntent(e);const[h,d]=n._movement,[m,p]=s.threshold,{_step:g,values:v}=n;if(s.hasCustomTransform?(g[0]===!1&&(g[0]=Math.abs(h)>=m&&v[0]),g[1]===!1&&(g[1]=Math.abs(d)>=p&&v[1])):(g[0]===!1&&(g[0]=Math.abs(h)>=m&&Math.sign(h)*m),g[1]===!1&&(g[1]=Math.abs(d)>=p&&Math.sign(d)*p)),n.intentional=g[0]!==!1||g[1]!==!1,!n.intentional)return;const _=[0,0];if(s.hasCustomTransform){const[F,z]=v;_[0]=g[0]!==!1?F-g[0]:0,_[1]=g[1]!==!1?z-g[1]:0}else _[0]=g[0]!==!1?h-g[0]:0,_[1]=g[1]!==!1?d-g[1]:0;this.restrictToAxis&&!n._blocked&&this.restrictToAxis(_);const y=n.offset,b=n._active&&!n._blocked||n.active;b&&(n.first=n._active&&!n.active,n.last=!n._active&&n.active,n.active=l[this.ingKey]=n._active,e&&(n.first&&("bounds"in s&&(n._bounds=bu(s.bounds,n)),this.setup&&this.setup()),n.movement=_,this.computeOffset()));const[T,M]=n.offset,[[x,O],[U,D]]=n._bounds;n.overflow=[T<x?-1:T>O?1:0,M<U?-1:M>D?1:0],n._movementBound[0]=n.overflow[0]?n._movementBound[0]===!1?n._movement[0]:n._movementBound[0]:!1,n._movementBound[1]=n.overflow[1]?n._movementBound[1]===!1?n._movement[1]:n._movementBound[1]:!1;const B=n._active?s.rubberband||[0,0]:[0,0];if(n.offset=RM(n._bounds,n.offset,B),n.delta=Qt.sub(n.offset,y),this.computeMovement(),b&&(!n.last||c>jM)){n.delta=Qt.sub(n.offset,y);const F=n.delta.map(Math.abs);Qt.addTo(n.distance,F),n.direction=n.delta.map(Math.sign),n._direction=n._delta.map(Math.sign),!n.first&&c>0&&(n.velocity=[F[0]/c,F[1]/c],n.timeDelta=c)}}emit(){const e=this.state,n=this.shared,s=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!s.triggerAllEvents)return;const l=this.handler(nn(nn(nn({},n),e),{},{[this.aliasKey]:e.values}));l!==void 0&&(e.memo=l)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function XM([r,e],n){const s=Math.abs(r),l=Math.abs(e);if(s>l&&s>n)return"x";if(l>s&&l>n)return"y"}class bl extends ux{constructor(...e){super(...e),gn(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Qt.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Qt.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const n=this.state,s=this.config;if(!n.axis&&e){const l=typeof s.axisThreshold=="object"?s.axisThreshold[ox(e)]:s.axisThreshold;n.axis=XM(n._movement,l)}n._blocked=(s.lockDirection||!!s.axis)&&!n.axis||!!s.axis&&s.axis!==n.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const WM=r=>r,kv=.15,fx={enabled(r=!0){return r},eventOptions(r,e,n){return nn(nn({},n.shared.eventOptions),r)},preventDefault(r=!1){return r},triggerAllEvents(r=!1){return r},rubberband(r=0){switch(r){case!0:return[kv,kv];case!1:return[0,0];default:return Qt.toVector(r)}},from(r){if(typeof r=="function")return r;if(r!=null)return Qt.toVector(r)},transform(r,e,n){const s=r||n.shared.transform;return this.hasCustomTransform=!!s,s||WM},threshold(r){return Qt.toVector(r,0)}},YM=0,Ys=nn(nn({},fx),{},{axis(r,e,{axis:n}){if(this.lockDirection=n==="lock",!this.lockDirection)return n},axisThreshold(r=YM){return r},bounds(r={}){if(typeof r=="function")return c=>Ys.bounds(r(c));if("current"in r)return()=>r.current;if(typeof HTMLElement=="function"&&r instanceof HTMLElement)return r;const{left:e=-1/0,right:n=1/0,top:s=-1/0,bottom:l=1/0}=r;return[[e,n],[s,l]]}}),jv={ArrowRight:(r,e=1)=>[r*e,0],ArrowLeft:(r,e=1)=>[-1*r*e,0],ArrowUp:(r,e=1)=>[0,-1*r*e],ArrowDown:(r,e=1)=>[0,r*e]};class qM extends bl{constructor(...e){super(...e),gn(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const n=e._bounds.getBoundingClientRect(),s=e.currentTarget.getBoundingClientRect(),l={left:n.left-s.left+e.offset[0],right:n.right-s.right+e.offset[0],top:n.top-s.top+e.offset[1],bottom:n.bottom-s.bottom+e.offset[1]};e._bounds=Ys.bounds(l)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const n=this.config,s=this.state;if(e.buttons!=null&&(Array.isArray(n.pointerButtons)?!n.pointerButtons.includes(e.buttons):n.pointerButtons!==-1&&n.pointerButtons!==e.buttons))return;const l=this.ctrl.setEventIds(e);n.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(l&&l.size>1&&s._pointerActive)&&(this.start(e),this.setupPointer(e),s._pointerId=Zh(e),s._pointerActive=!0,this.computeValues(Qr(e)),this.computeInitial(),n.preventScrollAxis&&ox(e)!=="mouse"?(s._active=!1,this.setupScrollPrevention(e)):n.delay>0?(this.setupDelayTrigger(e),n.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const n=this.state;n._active=!0,n._preventScroll=!0,n._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const n=this.state,s=this.config;if(!n._pointerActive)return;const l=Zh(e);if(n._pointerId!==void 0&&l!==n._pointerId)return;const c=Qr(e);if(document.pointerLockElement===e.target?n._delta=[e.movementX,e.movementY]:(n._delta=Qt.sub(c,n._values),this.computeValues(c)),Qt.addTo(n._movement,n._delta),this.compute(e),n._delayed&&n.intentional){this.timeoutStore.remove("dragDelay"),n.active=!1,this.startPointerDrag(e);return}if(s.preventScrollAxis&&!n._preventScroll)if(n.axis)if(n.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){n._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const n=this.state,s=this.config;if(!n._active||!n._pointerActive)return;const l=Zh(e);if(n._pointerId!==void 0&&l!==n._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[c,h]=n._distance;if(n.tap=c<=s.tapsThreshold&&h<=s.tapsThreshold,n.tap&&s.filterTaps)n._force=!0;else{const[d,m]=n._delta,[p,g]=n._movement,[v,_]=s.swipe.velocity,[y,b]=s.swipe.distance,T=s.swipe.duration;if(n.elapsedTime<T){const M=Math.abs(d/n.timeDelta),x=Math.abs(m/n.timeDelta);M>v&&Math.abs(p)>y&&(n.swipe[0]=Math.sign(d)),x>_&&Math.abs(g)>b&&(n.swipe[1]=Math.sign(m))}}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){const n=this.config,s=n.device;n.pointerLock&&e.currentTarget.requestPointerLock(),n.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,ZM(e);const n=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",n),this.eventStore.add(this.sharedConfig.window,"touch","cancel",n),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const n=jv[e.key];if(n){const s=this.state,l=e.shiftKey?10:e.altKey?.1:1;this.start(e),s._delta=n(this.config.keyboardDisplacement,l),s._keyboardActive=!0,Qt.addTo(s._movement,s._delta),this.compute(e),this.emit()}}keyUp(e){e.key in jv&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const n=this.config.device;e(n,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(n,"change",this.pointerMove.bind(this)),e(n,"end",this.pointerUp.bind(this)),e(n,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function ZM(r){"persist"in r&&typeof r.persist=="function"&&r.persist()}const El=typeof window<"u"&&window.document&&window.document.createElement;function hx(){return El&&"ontouchstart"in window}function KM(){return hx()||El&&window.navigator.maxTouchPoints>1}function JM(){return El&&"onpointerdown"in window}function QM(){return El&&"exitPointerLock"in window.document}function $M(){try{return"constructor"in GestureEvent}catch{return!1}}const bi={isBrowser:El,gesture:$M(),touch:hx(),touchscreen:KM(),pointer:JM(),pointerLock:QM()},eb=250,tb=180,nb=.5,ib=50,ab=250,sb=10,Xv={mouse:0,touch:0,pen:8},rb=nn(nn({},Ys),{},{device(r,e,{pointer:{touch:n=!1,lock:s=!1,mouse:l=!1}={}}){return this.pointerLock=s&&bi.pointerLock,bi.touch&&n?"touch":this.pointerLock?"mouse":bi.pointer&&!l?"pointer":bi.touch?"touch":"mouse"},preventScrollAxis(r,e,{preventScroll:n}){if(this.preventScrollDelay=typeof n=="number"?n:n||n===void 0&&r?eb:void 0,!(!bi.touchscreen||n===!1))return r||(n!==void 0?"y":void 0)},pointerCapture(r,e,{pointer:{capture:n=!0,buttons:s=1,keys:l=!0}={}}){return this.pointerButtons=s,this.keys=l,!this.pointerLock&&this.device==="pointer"&&n},threshold(r,e,{filterTaps:n=!1,tapsThreshold:s=3,axis:l=void 0}){const c=Qt.toVector(r,n?s:l?1:0);return this.filterTaps=n,this.tapsThreshold=s,c},swipe({velocity:r=nb,distance:e=ib,duration:n=ab}={}){return{velocity:this.transform(Qt.toVector(r)),distance:this.transform(Qt.toVector(e)),duration:n}},delay(r=0){switch(r){case!0:return tb;case!1:return 0;default:return r}},axisThreshold(r){return r?nn(nn({},Xv),r):Xv},keyboardDisplacement(r=sb){return r}});function dx(r){const[e,n]=r.overflow,[s,l]=r._delta,[c,h]=r._direction;(e<0&&s>0&&c<0||e>0&&s<0&&c>0)&&(r._movement[0]=r._movementBound[0]),(n<0&&l>0&&h<0||n>0&&l<0&&h>0)&&(r._movement[1]=r._movementBound[1])}const ob=30,lb=100;class cb extends ux{constructor(...e){super(...e),gn(this,"ingKey","pinching"),gn(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const e=this.state;e._touchIds=[],e.canceled=!1,e.cancel=this.cancel.bind(this),e.turns=0}computeOffset(){const{type:e,movement:n,lastOffset:s}=this.state;e==="wheel"?this.state.offset=Qt.add(n,s):this.state.offset=[(1+n[0])*s[0],n[1]+s[1]]}computeMovement(){const{offset:e,lastOffset:n}=this.state;this.state.movement=[e[0]/n[0],e[1]-n[1]]}axisIntent(){const e=this.state,[n,s]=e._movement;if(!e.axis){const l=Math.abs(n)*ob-Math.abs(s);l<0?e.axis="angle":l>0&&(e.axis="scale")}}restrictToAxis(e){this.config.lockDirection&&(this.state.axis==="scale"?e[1]=0:this.state.axis==="angle"&&(e[0]=0))}cancel(){const e=this.state;e.canceled||setTimeout(()=>{e.canceled=!0,e._active=!1,this.compute(),this.emit()},0)}touchStart(e){this.ctrl.setEventIds(e);const n=this.state,s=this.ctrl.touchIds;if(n._active&&n._touchIds.every(c=>s.has(c))||s.size<2)return;this.start(e),n._touchIds=Array.from(s).slice(0,2);const l=Fv(e,n._touchIds);l&&this.pinchStart(e,l)}pointerStart(e){if(e.buttons!=null&&e.buttons%2!==1)return;this.ctrl.setEventIds(e),e.target.setPointerCapture(e.pointerId);const n=this.state,s=n._pointerEvents,l=this.ctrl.pointerIds;if(n._active&&Array.from(s.keys()).every(h=>l.has(h))||(s.size<2&&s.set(e.pointerId,e),n._pointerEvents.size<2))return;this.start(e);const c=Od(...Array.from(s.values()));c&&this.pinchStart(e,c)}pinchStart(e,n){const s=this.state;s.origin=n.origin,this.computeValues([n.distance,n.angle]),this.computeInitial(),this.compute(e),this.emit()}touchMove(e){if(!this.state._active)return;const n=Fv(e,this.state._touchIds);n&&this.pinchMove(e,n)}pointerMove(e){const n=this.state._pointerEvents;if(n.has(e.pointerId)&&n.set(e.pointerId,e),!this.state._active)return;const s=Od(...Array.from(n.values()));s&&this.pinchMove(e,s)}pinchMove(e,n){const s=this.state,l=s._values[1],c=n.angle-l;let h=0;Math.abs(c)>270&&(h+=Math.sign(c)),this.computeValues([n.distance,n.angle-360*h]),s.origin=n.origin,s.turns=h,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(e),this.emit()}touchEnd(e){this.ctrl.setEventIds(e),this.state._active&&this.state._touchIds.some(n=>!this.ctrl.touchIds.has(n))&&(this.state._active=!1,this.compute(e),this.emit())}pointerEnd(e){const n=this.state;this.ctrl.setEventIds(e);try{e.target.releasePointerCapture(e.pointerId)}catch{}n._pointerEvents.has(e.pointerId)&&n._pointerEvents.delete(e.pointerId),n._active&&n._pointerEvents.size<2&&(n._active=!1,this.compute(e),this.emit())}gestureStart(e){e.cancelable&&e.preventDefault();const n=this.state;n._active||(this.start(e),this.computeValues([e.scale,e.rotation]),n.origin=[e.clientX,e.clientY],this.compute(e),this.emit())}gestureMove(e){if(e.cancelable&&e.preventDefault(),!this.state._active)return;const n=this.state;this.computeValues([e.scale,e.rotation]),n.origin=[e.clientX,e.clientY];const s=n._movement;n._movement=[e.scale-1,e.rotation],n._delta=Qt.sub(n._movement,s),this.compute(e),this.emit()}gestureEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}wheel(e){const n=this.config.modifierKey;n&&(Array.isArray(n)?!n.find(s=>e[s]):!e[n])||(this.state._active?this.wheelChange(e):this.wheelStart(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(e){this.start(e),this.wheelChange(e)}wheelChange(e){"uv"in e||e.cancelable&&e.preventDefault();const s=this.state;s._delta=[-cx(e)[1]/lb*s.offset[0],0],Qt.addTo(s._movement,s._delta),dx(s),this.state.origin=[e.clientX,e.clientY],this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){const n=this.config.device;n&&(e(n,"start",this[n+"Start"].bind(this)),e(n,"change",this[n+"Move"].bind(this)),e(n,"end",this[n+"End"].bind(this)),e(n,"cancel",this[n+"End"].bind(this)),e("lostPointerCapture","",this[n+"End"].bind(this))),this.config.pinchOnWheel&&e("wheel","",this.wheel.bind(this),{passive:!1})}}const ub=nn(nn({},fx),{},{device(r,e,{shared:n,pointer:{touch:s=!1}={}}){if(n.target&&!bi.touch&&bi.gesture)return"gesture";if(bi.touch&&s)return"touch";if(bi.touchscreen){if(bi.pointer)return"pointer";if(bi.touch)return"touch"}},bounds(r,e,{scaleBounds:n={},angleBounds:s={}}){const l=h=>{const d=Vv(bu(n,h),{min:-1/0,max:1/0});return[d.min,d.max]},c=h=>{const d=Vv(bu(s,h),{min:-1/0,max:1/0});return[d.min,d.max]};return typeof n!="function"&&typeof s!="function"?[l(),c()]:h=>[l(h),c(h)]},threshold(r,e,n){return this.lockDirection=n.axis==="lock",Qt.toVector(r,this.lockDirection?[.1,3]:0)},modifierKey(r){return r===void 0?"ctrlKey":r},pinchOnWheel(r=!0){return r}});class fb extends bl{constructor(...e){super(...e),gn(this,"ingKey","moving")}move(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.state._active?this.moveChange(e):this.moveStart(e),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(e){this.start(e),this.computeValues(Qr(e)),this.compute(e),this.computeInitial(),this.emit()}moveChange(e){if(!this.state._active)return;const n=Qr(e),s=this.state;s._delta=Qt.sub(n,s._values),Qt.addTo(s._movement,s._delta),this.computeValues(n),this.compute(e),this.emit()}moveEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}bind(e){e("pointer","change",this.move.bind(this)),e("pointer","leave",this.moveEnd.bind(this))}}const hb=nn(nn({},Ys),{},{mouseOnly:(r=!0)=>r});class db extends bl{constructor(...e){super(...e),gn(this,"ingKey","scrolling")}scroll(e){this.state._active||this.start(e),this.scrollChange(e),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(e){e.cancelable&&e.preventDefault();const n=this.state,s=HM(e);n._delta=Qt.sub(s,n._values),Qt.addTo(n._movement,n._delta),this.computeValues(s),this.compute(e),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("scroll","",this.scroll.bind(this))}}const pb=Ys;class mb extends bl{constructor(...e){super(...e),gn(this,"ingKey","wheeling")}wheel(e){this.state._active||this.start(e),this.wheelChange(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(e){const n=this.state;n._delta=cx(e),Qt.addTo(n._movement,n._delta),dx(n),this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("wheel","",this.wheel.bind(this))}}const gb=Ys;class vb extends bl{constructor(...e){super(...e),gn(this,"ingKey","hovering")}enter(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.start(e),this.computeValues(Qr(e)),this.compute(e),this.emit())}leave(e){if(this.config.mouseOnly&&e.pointerType!=="mouse")return;const n=this.state;if(!n._active)return;n._active=!1;const s=Qr(e);n._movement=n._delta=Qt.sub(s,n._values),this.computeValues(s),this.compute(e),n.delta=n.movement,this.emit()}bind(e){e("pointer","enter",this.enter.bind(this)),e("pointer","leave",this.leave.bind(this))}}const _b=nn(nn({},Ys),{},{mouseOnly:(r=!0)=>r}),Op=new Map,Pd=new Map;function xb(r){Op.set(r.key,r.engine),Pd.set(r.key,r.resolver)}const Sb={key:"drag",engine:qM,resolver:rb},yb={key:"hover",engine:vb,resolver:_b},Mb={key:"move",engine:fb,resolver:hb},bb={key:"pinch",engine:cb,resolver:ub},Eb={key:"scroll",engine:db,resolver:pb},Tb={key:"wheel",engine:mb,resolver:gb};function Ab(r,e){if(r==null)return{};var n={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(e.indexOf(l)>=0)&&(n[l]=r[l]);return n}function wb(r,e){if(r==null)return{};var n=Ab(r,e),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}const Rb={target(r){if(r)return()=>"current"in r?r.current:r},enabled(r=!0){return r},window(r=bi.isBrowser?window:void 0){return r},eventOptions({passive:r=!0,capture:e=!1}={}){return{passive:r,capture:e}},transform(r){return r}},Cb=["target","eventOptions","window","enabled","transform"];function pu(r={},e){const n={};for(const[s,l]of Object.entries(e))switch(typeof l){case"function":n[s]=l.call(n,r[s],s,r);break;case"object":n[s]=pu(r[s],l);break;case"boolean":l&&(n[s]=r[s]);break}return n}function Db(r,e,n={}){const s=r,{target:l,eventOptions:c,window:h,enabled:d,transform:m}=s,p=wb(s,Cb);if(n.shared=pu({target:l,eventOptions:c,window:h,enabled:d,transform:m},Rb),e){const g=Pd.get(e);n[e]=pu(nn({shared:n.shared},p),g)}else for(const g in p){const v=Pd.get(g);v&&(n[g]=pu(nn({shared:n.shared},p[g]),v))}return n}class px{constructor(e,n){gn(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=n}add(e,n,s,l,c){const h=this._listeners,d=IM(n,s),m=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},p=nn(nn({},m),c);e.addEventListener(d,l,p);const g=()=>{e.removeEventListener(d,l,p),h.delete(g)};return h.add(g),g}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class Lb{constructor(){gn(this,"_timeouts",new Map)}add(e,n,s=140,...l){this.remove(e),this._timeouts.set(e,window.setTimeout(n,s,...l))}remove(e){const n=this._timeouts.get(e);n&&window.clearTimeout(n)}clean(){this._timeouts.forEach(e=>{window.clearTimeout(e)}),this._timeouts.clear()}}class Nb{constructor(e){gn(this,"gestures",new Set),gn(this,"_targetEventStore",new px(this)),gn(this,"gestureEventStores",{}),gn(this,"gestureTimeoutStores",{}),gn(this,"handlers",{}),gn(this,"config",{}),gn(this,"pointerIds",new Set),gn(this,"touchIds",new Set),gn(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Ub(this,e)}setEventIds(e){if(Nu(e))return this.touchIds=new Set(FM(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,n){this.handlers=e,this.nativeHandlers=n}applyConfig(e,n){this.config=Db(e,n,this.config)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const n=this.config.shared,s={};let l;if(!(n.target&&(l=n.target(),!l))){if(n.enabled){for(const h of this.gestures){const d=this.config[h],m=Wv(s,d.eventOptions,!!l);if(d.enabled){const p=Op.get(h);new p(this,e,h).bind(m)}}const c=Wv(s,n.eventOptions,!!l);for(const h in this.nativeHandlers)c(h,"",d=>this.nativeHandlers[h](nn(nn({},this.state.shared),{},{event:d,args:e})),void 0,!0)}for(const c in s)s[c]=kM(...s[c]);if(!l)return s;for(const c in s){const{device:h,capture:d,passive:m}=PM(c);this._targetEventStore.add(l,h,"",s[c],{capture:d,passive:m})}}}}function Dr(r,e){r.gestures.add(e),r.gestureEventStores[e]=new px(r,e),r.gestureTimeoutStores[e]=new Lb}function Ub(r,e){e.drag&&Dr(r,"drag"),e.wheel&&Dr(r,"wheel"),e.scroll&&Dr(r,"scroll"),e.move&&Dr(r,"move"),e.pinch&&Dr(r,"pinch"),e.hover&&Dr(r,"hover")}const Wv=(r,e,n)=>(s,l,c,h={},d=!1)=>{var m,p;const g=(m=h.capture)!==null&&m!==void 0?m:e.capture,v=(p=h.passive)!==null&&p!==void 0?p:e.passive;let _=d?s:UM(s,l,g);n&&v&&(_+="Passive"),r[_]=r[_]||[],r[_].push(c)},Ob=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Pb(r){const e={},n={},s=new Set;for(let l in r)Ob.test(l)?(s.add(RegExp.lastMatch),n[l]=r[l]):e[l]=r[l];return[n,e,s]}function Lr(r,e,n,s,l,c){if(!r.has(n)||!Op.has(s))return;const h=n+"Start",d=n+"End",m=p=>{let g;return p.first&&h in e&&e[h](p),n in e&&(g=e[n](p)),p.last&&d in e&&e[d](p),g};l[s]=m,c[s]=c[s]||{}}function Ib(r,e){const[n,s,l]=Pb(r),c={};return Lr(l,n,"onDrag","drag",c,e),Lr(l,n,"onWheel","wheel",c,e),Lr(l,n,"onScroll","scroll",c,e),Lr(l,n,"onPinch","pinch",c,e),Lr(l,n,"onMove","move",c,e),Lr(l,n,"onHover","hover",c,e),{handlers:c,config:e,nativeHandlers:s}}function Bb(r,e={},n,s){const l=jh.useMemo(()=>new Nb(r),[]);if(l.applyHandlers(r,s),l.applyConfig(e,n),jh.useEffect(l.effect.bind(l)),jh.useEffect(()=>l.clean.bind(l),[]),e.target===void 0)return l.bind.bind(l)}function zb(r){return r.forEach(xb),function(n,s){const{handlers:l,nativeHandlers:c,config:h}=Ib(n,s||{});return Bb(l,h,void 0,c)}}function Fb(r,e){return zb([Sb,bb,Eb,Tb,Mb,yb])(r,e||{})}function Ji(){const r=Te.useContext(sx);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r}const Pp="182",Hb=0,Yv=1,Gb=2,mu=1,Vb=2,hl=3,hs=0,$n=1,ya=2,ba=0,Kr=1,Id=2,qv=3,Zv=4,kb=5,Hs=100,jb=101,Xb=102,Wb=103,Yb=104,qb=200,Zb=201,Kb=202,Jb=203,Bd=204,zd=205,Qb=206,$b=207,eE=208,tE=209,nE=210,iE=211,aE=212,sE=213,rE=214,Fd=0,Hd=1,Gd=2,$r=3,Vd=4,kd=5,jd=6,Xd=7,mx=0,oE=1,lE=2,Yi=0,gx=1,vx=2,_x=3,xx=4,Sx=5,yx=6,Mx=7,bx=300,Ws=301,eo=302,Wd=303,Yd=304,Uu=306,qd=1e3,Ma=1001,Zd=1002,Pn=1003,cE=1004,Fc=1005,Fn=1006,Kh=1007,Vs=1008,Ti=1009,Ex=1010,Tx=1011,_l=1012,Ip=1013,Zi=1014,Xi=1015,Aa=1016,Bp=1017,zp=1018,xl=1020,Ax=35902,wx=35899,Rx=1021,Cx=1022,Ii=1023,wa=1026,ks=1027,Dx=1028,Fp=1029,to=1030,Hp=1031,Gp=1033,gu=33776,vu=33777,_u=33778,xu=33779,Kd=35840,Jd=35841,Qd=35842,$d=35843,ep=36196,tp=37492,np=37496,ip=37488,ap=37489,sp=37490,rp=37491,op=37808,lp=37809,cp=37810,up=37811,fp=37812,hp=37813,dp=37814,pp=37815,mp=37816,gp=37817,vp=37818,_p=37819,xp=37820,Sp=37821,yp=36492,Mp=36494,bp=36495,Ep=36283,Tp=36284,Ap=36285,wp=36286,uE=3200,fE=0,hE=1,us="",Mi="srgb",no="srgb-linear",Eu="linear",Gt="srgb",Nr=7680,Kv=519,dE=512,pE=513,mE=514,Vp=515,gE=516,vE=517,kp=518,_E=519,Rp=35044,Jv="300 es",Wi=2e3,Tu=2001;function Lx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Au(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xE(){const r=Au("canvas");return r.style.display="block",r}const Qv={};function wu(...r){const e="THREE."+r.shift();console.log(e,...r)}function rt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Rt(...r){const e="THREE."+r.shift();console.error(e,...r)}function Sl(...r){const e=r.join(" ");e in Qv||(Qv[e]=!0,rt(...r))}function SE(r,e,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class ao{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $v=1234567;const ml=Math.PI/180,yl=180/Math.PI;function Ea(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function bt(r,e,n){return Math.max(e,Math.min(n,r))}function jp(r,e){return(r%e+e)%e}function yE(r,e,n,s,l){return s+(r-e)*(l-s)/(n-e)}function ME(r,e,n){return r!==e?(n-r)/(e-r):0}function gl(r,e,n){return(1-n)*r+n*e}function bE(r,e,n,s){return gl(r,e,1-Math.exp(-n*s))}function EE(r,e=1){return e-Math.abs(jp(r,e*2)-e)}function TE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function AE(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function wE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function RE(r,e){return r+Math.random()*(e-r)}function CE(r){return r*(.5-Math.random())}function DE(r){r!==void 0&&($v=r);let e=$v+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LE(r){return r*ml}function NE(r){return r*yl}function UE(r){return(r&r-1)===0&&r!==0}function OE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function PE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function IE(r,e,n,s,l){const c=Math.cos,h=Math.sin,d=c(n/2),m=h(n/2),p=c((e+s)/2),g=h((e+s)/2),v=c((e-s)/2),_=h((e-s)/2),y=c((s-e)/2),b=h((s-e)/2);switch(l){case"XYX":r.set(d*g,m*v,m*_,d*p);break;case"YZY":r.set(m*_,d*g,m*v,d*p);break;case"ZXZ":r.set(m*v,m*_,d*g,d*p);break;case"XZX":r.set(d*g,m*b,m*y,d*p);break;case"YXY":r.set(m*y,d*g,m*b,d*p);break;case"ZYZ":r.set(m*b,m*y,d*g,d*p);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Hc={DEG2RAD:ml,RAD2DEG:yl,generateUUID:Ea,clamp:bt,euclideanModulo:jp,mapLinear:yE,inverseLerp:ME,lerp:gl,damp:bE,pingpong:EE,smoothstep:TE,smootherstep:AE,randInt:wE,randFloat:RE,randFloatSpread:CE,seededRandom:DE,degToRad:LE,radToDeg:NE,isPowerOfTwo:UE,ceilPowerOfTwo:OE,floorPowerOfTwo:PE,setQuaternionFromProperEuler:IE,normalize:Vt,denormalize:Pi};class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,l=e.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tl{constructor(e=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=l}static slerpFlat(e,n,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3],_=c[h+0],y=c[h+1],b=c[h+2],T=c[h+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(d>=1){e[n+0]=_,e[n+1]=y,e[n+2]=b,e[n+3]=T;return}if(v!==T||m!==_||p!==y||g!==b){let M=m*_+p*y+g*b+v*T;M<0&&(_=-_,y=-y,b=-b,T=-T,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),U=Math.sin(O);x=Math.sin(x*O)/U,d=Math.sin(d*O)/U,m=m*x+_*d,p=p*x+y*d,g=g*x+b*d,v=v*x+T*d}else{m=m*x+_*d,p=p*x+y*d,g=g*x+b*d,v=v*x+T*d;const O=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=O,p*=O,g*=O,v*=O}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[h],_=c[h+1],y=c[h+2],b=c[h+3];return e[n]=d*b+g*v+m*y-p*_,e[n+1]=m*b+g*_+p*v-d*y,e[n+2]=p*b+g*y+d*_-m*v,e[n+3]=g*b-d*v-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,l){return this._x=e,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),_=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=_*g*v+p*y*b,this._y=p*y*v-_*g*b,this._z=p*g*b+_*y*v,this._w=p*g*v-_*y*b;break;case"YXZ":this._x=_*g*v+p*y*b,this._y=p*y*v-_*g*b,this._z=p*g*b-_*y*v,this._w=p*g*v+_*y*b;break;case"ZXY":this._x=_*g*v-p*y*b,this._y=p*y*v+_*g*b,this._z=p*g*b+_*y*v,this._w=p*g*v-_*y*b;break;case"ZYX":this._x=_*g*v-p*y*b,this._y=p*y*v+_*g*b,this._z=p*g*b-_*y*v,this._w=p*g*v+_*y*b;break;case"YZX":this._x=_*g*v+p*y*b,this._y=p*y*v+_*g*b,this._z=p*g*b-_*y*v,this._w=p*g*v-_*y*b;break;case"XZY":this._x=_*g*v-p*y*b,this._y=p*y*v-_*g*b,this._z=p*g*b+_*y*v,this._w=p*g*v+_*y*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],l=n[4],c=n[8],h=n[1],d=n[5],m=n[9],p=n[2],g=n[6],v=n[10],_=s+d+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,l=e._y,c=e._z,h=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+h*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+h*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(e_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(e_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const n=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*n-c*l),v=2*(c*s-h*n);return this.x=n+m*p+h*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,l=e.y,c=e.z,h=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return n*n+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const l=Math.sin(n)*e;return this.x=l*Math.sin(s),this.y=Math.cos(n)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jh=new $,e_=new Tl;class ht{constructor(e,n,s,l,c,h,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,h,d,m,p)}set(e,n,s,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],_=s[2],y=s[5],b=s[8],T=l[0],M=l[3],x=l[6],O=l[1],U=l[4],D=l[7],B=l[2],F=l[5],z=l[8];return c[0]=h*T+d*O+m*B,c[3]=h*M+d*U+m*F,c[6]=h*x+d*D+m*z,c[1]=p*T+g*O+v*B,c[4]=p*M+g*U+v*F,c[7]=p*x+g*D+v*z,c[2]=_*T+y*O+b*B,c[5]=_*M+y*U+b*F,c[8]=_*x+y*D+b*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*h*g-n*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,_=d*m-g*c,y=p*c-h*m,b=n*v+s*_+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(l*p-g*s)*T,e[2]=(d*s-l*h)*T,e[3]=_*T,e[4]=(g*n-l*m)*T,e[5]=(l*c-d*n)*T,e[6]=y*T,e[7]=(s*m-p*n)*T,e[8]=(h*n-s*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Qh.makeScale(e,n)),this}rotate(e){return this.premultiply(Qh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qh=new ht,t_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const r={enabled:!0,workingColorSpace:no,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Gt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Gt&&(l.r=Jr(l.r),l.g=Jr(l.g),l.b=Jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?Eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[no]:{primaries:e,whitePoint:s,transfer:Eu,toXYZ:t_,fromXYZ:n_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:t_,fromXYZ:n_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const Ct=BE();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ur;class zE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ur===void 0&&(Ur=Au("canvas")),Ur.width=e.width,Ur.height=e.height;const l=Ur.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ur}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Au("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ta(c[h]/255)*255;return s.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ta(n[s]/255)*255):n[s]=Ta(n[s]);return{data:n,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class Xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push($h(l[h].image)):c.push($h(l[h]))}else c=$h(l);s.url=c}return n||(e.images[this.uuid]=s),s}}function $h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let HE=0;const ed=new $;class Hn extends ao{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,s=Ma,l=Ma,c=Fn,h=Vs,d=Ii,m=Ti,p=Hn.DEFAULT_ANISOTROPY,g=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Ea(),this.name="",this.source=new Xp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){rt(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=bx;Hn.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,n=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,l){return this.x=e,this.y=n,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*n+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*n+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*n+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*n+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],_=m[1],y=m[5],b=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,D=(y+1)/2,B=(x+1)/2,F=(g+_)/4,z=(v+T)/4,Z=(b+M)/4;return U>D&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=F/s,c=z/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=Z/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=z/c,l=Z/c),this.set(s,l,c,n),this}let O=Math.sqrt((M-b)*(M-b)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GE extends ao{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new ln(0,0,e,n),this.scissorTest=!1,this.viewport=new ln(0,0,e,n);const l={width:e,height:n,depth:s.depth},c=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new Xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends GE{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class Nx extends Hn{constructor(e=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VE extends Hn{constructor(e=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(Ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(Ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=Ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(c,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Gc.copy(s.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Vc.subVectors(this.max,$o),Or.subVectors(e.a,$o),Pr.subVectors(e.b,$o),Ir.subVectors(e.c,$o),as.subVectors(Pr,Or),ss.subVectors(Ir,Pr),Ns.subVectors(Or,Ir);let n=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Ns.z,Ns.y,as.z,0,-as.x,ss.z,0,-ss.x,Ns.z,0,-Ns.x,-as.y,as.x,0,-ss.y,ss.x,0,-Ns.y,Ns.x,0];return!td(n,Or,Pr,Ir,Vc)||(n=[1,0,0,0,1,0,0,0,1],!td(n,Or,Pr,Ir,Vc))?!1:(kc.crossVectors(as,ss),n=[kc.x,kc.y,kc.z],td(n,Or,Pr,Ir,Vc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new $,new $,new $,new $,new $,new $,new $,new $],Ni=new $,Gc=new Al,Or=new $,Pr=new $,Ir=new $,as=new $,ss=new $,Ns=new $,$o=new $,Vc=new $,kc=new $,Us=new $;function td(r,e,n,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Us.fromArray(r,c);const d=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=e.dot(Us),p=n.dot(Us),g=s.dot(Us);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const kE=new Al,el=new $,nd=new $;class wl{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):kE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const n=el.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(nd)),this.expandByPoint(el.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new $,id=new $,jc=new $,rs=new $,ad=new $,Xc=new $,sd=new $;class Ou{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=va.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,n),va.distanceToSquared(e))}distanceSqToSegment(e,n,s,l){id.copy(e).add(n).multiplyScalar(.5),jc.copy(n).sub(e).normalize(),rs.copy(this.origin).sub(id);const c=e.distanceTo(n)*.5,h=-this.direction.dot(jc),d=rs.dot(this.direction),m=-rs.dot(jc),p=rs.lengthSq(),g=Math.abs(1-h*h);let v,_,y,b;if(g>0)if(v=h*m-d,_=h*d-m,b=c*g,v>=0)if(_>=-b)if(_<=b){const T=1/g;v*=T,_*=T,y=v*(v+h*_+2*d)+_*(h*v+_+2*m)+p}else _=c,v=Math.max(0,-(h*_+d)),y=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(h*_+d)),y=-v*v+_*(_+2*m)+p;else _<=-b?(v=Math.max(0,-(-h*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p):_<=b?(v=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(v=Math.max(0,-(h*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+_*(_+2*m)+p);else _=h>0?-c:c,v=Math.max(0,-(h*_+d)),y=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(id).addScaledVector(jc,_),y}intersectSphere(e,n){va.subVectors(e.center,this.origin);const s=va.dot(this.direction),l=va.dot(va)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,h=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,h=(e.min.y-_.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,n,s,l,c){ad.subVectors(n,e),Xc.subVectors(s,e),sd.crossVectors(ad,Xc);let h=this.direction.dot(sd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;rs.subVectors(this.origin,e);const m=d*this.direction.dot(Xc.crossVectors(rs,Xc));if(m<0)return null;const p=d*this.direction.dot(ad.cross(rs));if(p<0||m+p>h)return null;const g=-d*rs.dot(sd);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,s,l,c,h,d,m,p,g,v,_,y,b,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,l,c,h,d,m,p,g,v,_,y,b,T,M)}set(e,n,s,l,c,h,d,m,p,g,v,_,y,b,T,M){const x=this.elements;return x[0]=e,x[4]=n,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,s=e.elements,l=1/Br.setFromMatrixColumn(e,0).length(),c=1/Br.setFromMatrixColumn(e,1).length(),h=1/Br.setFromMatrixColumn(e,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*h,n[9]=s[9]*h,n[10]=s[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=h*g,y=h*v,b=d*g,T=d*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=y+b*p,n[5]=_-T*p,n[9]=-d*m,n[2]=T-_*p,n[6]=b+y*p,n[10]=h*m}else if(e.order==="YXZ"){const _=m*g,y=m*v,b=p*g,T=p*v;n[0]=_+T*d,n[4]=b*d-y,n[8]=h*p,n[1]=h*v,n[5]=h*g,n[9]=-d,n[2]=y*d-b,n[6]=T+_*d,n[10]=h*m}else if(e.order==="ZXY"){const _=m*g,y=m*v,b=p*g,T=p*v;n[0]=_-T*d,n[4]=-h*v,n[8]=b+y*d,n[1]=y+b*d,n[5]=h*g,n[9]=T-_*d,n[2]=-h*p,n[6]=d,n[10]=h*m}else if(e.order==="ZYX"){const _=h*g,y=h*v,b=d*g,T=d*v;n[0]=m*g,n[4]=b*p-y,n[8]=_*p+T,n[1]=m*v,n[5]=T*p+_,n[9]=y*p-b,n[2]=-p,n[6]=d*m,n[10]=h*m}else if(e.order==="YZX"){const _=h*m,y=h*p,b=d*m,T=d*p;n[0]=m*g,n[4]=T-_*v,n[8]=b*v+y,n[1]=v,n[5]=h*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*v+b,n[10]=_-T*v}else if(e.order==="XZY"){const _=h*m,y=h*p,b=d*m,T=d*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=_*v+T,n[5]=h*g,n[9]=y*v-b,n[2]=b*v-y,n[6]=d*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,XE)}lookAt(e,n,s){const l=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),os.crossVectors(s,li),os.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),os.crossVectors(s,li)),os.normalize(),Wc.crossVectors(li,os),l[0]=os.x,l[4]=Wc.x,l[8]=li.x,l[1]=os.y,l[5]=Wc.y,l[9]=li.y,l[2]=os.z,l[6]=Wc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,l=n.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],_=s[9],y=s[13],b=s[2],T=s[6],M=s[10],x=s[14],O=s[3],U=s[7],D=s[11],B=s[15],F=l[0],z=l[4],Z=l[8],R=l[12],L=l[1],G=l[5],K=l[9],ie=l[13],he=l[2],ue=l[6],N=l[10],H=l[14],J=l[3],Se=l[7],Ee=l[11],P=l[15];return c[0]=h*F+d*L+m*he+p*J,c[4]=h*z+d*G+m*ue+p*Se,c[8]=h*Z+d*K+m*N+p*Ee,c[12]=h*R+d*ie+m*H+p*P,c[1]=g*F+v*L+_*he+y*J,c[5]=g*z+v*G+_*ue+y*Se,c[9]=g*Z+v*K+_*N+y*Ee,c[13]=g*R+v*ie+_*H+y*P,c[2]=b*F+T*L+M*he+x*J,c[6]=b*z+T*G+M*ue+x*Se,c[10]=b*Z+T*K+M*N+x*Ee,c[14]=b*R+T*ie+M*H+x*P,c[3]=O*F+U*L+D*he+B*J,c[7]=O*z+U*G+D*ue+B*Se,c[11]=O*Z+U*K+D*N+B*Ee,c[15]=O*R+U*ie+D*H+B*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],_=e[10],y=e[14],b=e[3],T=e[7],M=e[11],x=e[15],O=m*y-p*_,U=d*y-p*v,D=d*_-m*v,B=h*y-p*g,F=h*_-m*g,z=h*v-d*g;return n*(T*O-M*U+x*D)-s*(b*O-M*B+x*F)+l*(b*U-T*B+x*z)-c*(b*D-T*F+M*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],_=e[10],y=e[11],b=e[12],T=e[13],M=e[14],x=e[15],O=v*M*p-T*_*p+T*m*y-d*M*y-v*m*x+d*_*x,U=b*_*p-g*M*p-b*m*y+h*M*y+g*m*x-h*_*x,D=g*T*p-b*v*p+b*d*y-h*T*y-g*d*x+h*v*x,B=b*v*m-g*T*m-b*d*_+h*T*_+g*d*M-h*v*M,F=n*O+s*U+l*D+c*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=O*z,e[1]=(T*_*c-v*M*c-T*l*y+s*M*y+v*l*x-s*_*x)*z,e[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*x+s*m*x)*z,e[3]=(v*m*c-d*_*c-v*l*p+s*_*p+d*l*y-s*m*y)*z,e[4]=U*z,e[5]=(g*M*c-b*_*c+b*l*y-n*M*y-g*l*x+n*_*x)*z,e[6]=(b*m*c-h*M*c-b*l*p+n*M*p+h*l*x-n*m*x)*z,e[7]=(h*_*c-g*m*c+g*l*p-n*_*p-h*l*y+n*m*y)*z,e[8]=D*z,e[9]=(b*v*c-g*T*c-b*s*y+n*T*y+g*s*x-n*v*x)*z,e[10]=(h*T*c-b*d*c+b*s*p-n*T*p-h*s*x+n*d*x)*z,e[11]=(g*d*c-h*v*c-g*s*p+n*v*p+h*s*y-n*d*y)*z,e[12]=B*z,e[13]=(g*T*l-b*v*l+b*s*_-n*T*_-g*s*M+n*v*M)*z,e[14]=(b*d*l-h*T*l-b*s*m+n*T*m+h*s*M-n*d*M)*z,e[15]=(h*v*l-g*d*l+g*s*m-n*v*m-h*s*_+n*d*_)*z,this}scale(e){const n=this.elements,s=e.x,l=e.y,c=e.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,n,l,1,0,0,0,0,1),this}compose(e,n,s){const l=this.elements,c=n._x,h=n._y,d=n._z,m=n._w,p=c+c,g=h+h,v=d+d,_=c*p,y=c*g,b=c*v,T=h*g,M=h*v,x=d*v,O=m*p,U=m*g,D=m*v,B=s.x,F=s.y,z=s.z;return l[0]=(1-(T+x))*B,l[1]=(y+D)*B,l[2]=(b-U)*B,l[3]=0,l[4]=(y-D)*F,l[5]=(1-(_+x))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(b+U)*z,l[9]=(M-O)*z,l[10]=(1-(_+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Br.set(l[0],l[1],l[2]).length();const h=Br.set(l[4],l[5],l[6]).length(),d=Br.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ui.copy(this);const p=1/c,g=1/h,v=1/d;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,n.setFromRotationMatrix(Ui),s.x=c,s.y=h,s.z=d,this}makePerspective(e,n,s,l,c,h,d=Wi,m=!1){const p=this.elements,g=2*c/(n-e),v=2*c/(s-l),_=(n+e)/(n-e),y=(s+l)/(s-l);let b,T;if(m)b=c/(h-c),T=h*c/(h-c);else if(d===Wi)b=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===Tu)b=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,s,l,c,h,d=Wi,m=!1){const p=this.elements,g=2/(n-e),v=2/(s-l),_=-(n+e)/(n-e),y=-(s+l)/(s-l);let b,T;if(m)b=1/(h-c),T=h/(h-c);else if(d===Wi)b=-2/(h-c),T=-(h+c)/(h-c);else if(d===Tu)b=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const Br=new $,Ui=new tn,jE=new $(0,0,0),XE=new $(1,1,1),os=new $,Wc=new $,li=new $,i_=new tn,a_=new Tl;class Ra{constructor(e=0,n=0,s=0,l=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,l=this._order){return this._x=e,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return i_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i_,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const s_=new $,zr=new Tl,_a=new tn,Yc=new $,tl=new $,YE=new $,qE=new Tl,r_=new $(1,0,0),o_=new $(0,1,0),l_=new $(0,0,1),c_={type:"added"},ZE={type:"removed"},Fr={type:"childadded",child:null},rd={type:"childremoved",child:null};class Gn extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new $,n=new Ra,s=new Tl,l=new $(1,1,1);function c(){s.setFromEuler(n,!1)}function h(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ht}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(o_,e)}rotateZ(e){return this.rotateOnAxis(l_,e)}translateOnAxis(e,n){return s_.copy(e).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(o_,e)}translateZ(e){return this.translateOnAxis(l_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Yc.copy(e):Yc.set(e,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(tl,Yc,this.up):_a.lookAt(Yc,tl,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),zr.setFromRotationMatrix(_a),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c_),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZE),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c_),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,n);if(h!==void 0)return h}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,YE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,qE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(n){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),_=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new $(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new $,xa=new $,od=new $,Sa=new $,Hr=new $,Gr=new $,u_=new $,ld=new $,cd=new $,ud=new $,fd=new ln,hd=new ln,dd=new ln;class Ai{constructor(e=new $,n=new $,s=new $){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,l){l.subVectors(s,n),Oi.subVectors(e,n),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,s,l,c){Oi.subVectors(l,n),xa.subVectors(s,n),od.subVectors(e,n);const h=Oi.dot(Oi),d=Oi.dot(xa),m=Oi.dot(od),p=xa.dot(xa),g=xa.dot(od),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(p*m-d*g)*_,b=(h*g-d*m)*_;return c.set(1-y-b,b,y)}static containsPoint(e,n,s,l){return this.getBarycoord(e,n,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,n,s,l,c,h,d,m){return this.getBarycoord(e,n,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(h,Sa.y),m.addScaledVector(d,Sa.z),m)}static getInterpolatedAttribute(e,n,s,l,c,h){return fd.setScalar(0),hd.setScalar(0),dd.setScalar(0),fd.fromBufferAttribute(e,n),hd.fromBufferAttribute(e,s),dd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(fd,c.x),h.addScaledVector(hd,c.y),h.addScaledVector(dd,c.z),h}static isFrontFacing(e,n,s,l){return Oi.subVectors(s,n),xa.subVectors(e,n),Oi.cross(xa).dot(l)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,l){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,s,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Oi.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,n,s,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,l=this.b,c=this.c;let h,d;Hr.subVectors(l,s),Gr.subVectors(c,s),ld.subVectors(e,s);const m=Hr.dot(ld),p=Gr.dot(ld);if(m<=0&&p<=0)return n.copy(s);cd.subVectors(e,l);const g=Hr.dot(cd),v=Gr.dot(cd);if(g>=0&&v<=g)return n.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),n.copy(s).addScaledVector(Hr,h);ud.subVectors(e,c);const y=Hr.dot(ud),b=Gr.dot(ud);if(b>=0&&y<=b)return n.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),n.copy(s).addScaledVector(Gr,d);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return u_.subVectors(c,l),d=(v-g)/(v-g+(y-b)),n.copy(l).addScaledVector(u_,d);const x=1/(M+T+_);return h=T*x,d=_*x,n.copy(s).addScaledVector(Hr,h).addScaledVector(Gr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},qc={h:0,s:0,l:0};function pd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class At{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,s,l=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,n,s,l=Ct.workingColorSpace){if(e=jp(e,1),n=bt(n,0,1),s=bt(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,h=2*s-c;this.r=pd(h,c,e+1/3),this.g=pd(h,c,e),this.b=pd(h,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,n=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(h===6)return this.setHex(parseInt(c,16),n);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mi){const s=Ux[e.toLowerCase()];return s!==void 0?this.setHex(s,n):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ct.workingToColorSpace(zn.copy(this),e),Math.round(bt(zn.r*255,0,255))*65536+Math.round(bt(zn.g*255,0,255))*256+Math.round(bt(zn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(zn.copy(this),n);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(zn.copy(this),n),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Mi){Ct.workingToColorSpace(zn.copy(this),e);const n=zn.r,s=zn.g,l=zn.b;return e!==Mi?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,n,s){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+n,ls.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(ls),e.getHSL(qc);const s=gl(ls.h,qc.h,n),l=gl(ls.s,qc.s,n),c=gl(ls.l,qc.l,n);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new At;At.NAMES=Ux;let KE=0;class qs extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=Kr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=zd,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){rt(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bd&&(s.blendSrc=this.blendSrc),this.blendDst!==zd&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(n){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ox extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new $,Zc=new Et;let JE=0;class Wn{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=Rp,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Zc.fromBufferAttribute(this,n),Zc.applyMatrix3(e),this.setXY(n,Zc.x,Zc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix3(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Pi(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Vt(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,l){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),s=Vt(s,this.array),l=Vt(l,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,n,s,l,c){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),s=Vt(s,this.array),l=Vt(l,this.array),c=Vt(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),e}}class Px extends Wn{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class Ix extends Wn{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class ei extends Wn{constructor(e,n,s){super(new Float32Array(e),n,s)}}let QE=0;const yi=new tn,md=new Gn,Vr=new $,ci=new Al,nl=new Al,Mn=new $;class bn extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lx(e)?Ix:Px)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,n,s){return yi.makeTranslation(e,n,s),this.applyMatrix4(yi),this}scale(e,n,s){return yi.makeScale(e,n,s),this.applyMatrix4(yi),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ei(s,3))}else{const s=Math.min(e.length,n.count);for(let l=0;l<s;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let c=0,h=n.length;c<h;c++){const d=n[c];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ci.min,nl.min),ci.expandByPoint(Mn),Mn.addVectors(ci.max,nl.max),ci.expandByPoint(Mn)):(ci.expandByPoint(nl.min),ci.expandByPoint(nl.max))}ci.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(n)for(let c=0,h=n.length;c<h;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Mn.fromBufferAttribute(d,p),m&&(Vr.fromBufferAttribute(e,p),Mn.add(Vr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new $,m[Z]=new $;const p=new $,g=new $,v=new $,_=new Et,y=new Et,b=new Et,T=new $,M=new $;function x(Z,R,L){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,R),v.fromBufferAttribute(s,L),_.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,R),b.fromBufferAttribute(c,L),g.sub(p),v.sub(p),y.sub(_),b.sub(_);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(G),d[Z].add(T),d[R].add(T),d[L].add(T),m[Z].add(M),m[R].add(M),m[L].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Z=0,R=O.length;Z<R;++Z){const L=O[Z],G=L.start,K=L.count;for(let ie=G,he=G+K;ie<he;ie+=3)x(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const U=new $,D=new $,B=new $,F=new $;function z(Z){B.fromBufferAttribute(l,Z),F.copy(B);const R=d[Z];U.copy(R),U.sub(B.multiplyScalar(B.dot(R))).normalize(),D.crossVectors(F,R);const G=D.dot(m[Z])<0?-1:1;h.setXYZW(Z,U.x,U.y,U.z,G)}for(let Z=0,R=O.length;Z<R;++Z){const L=O[Z],G=L.start,K=L.count;for(let ie=G,he=G+K;ie<he;ie+=3)z(e.getX(ie+0)),z(e.getX(ie+1)),z(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,g=new $,v=new $;if(e)for(let _=0,y=e.count;_<y;_+=3){const b=e.getX(_+0),T=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,y=n.count;_<y;_+=3)l.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),h.fromBufferAttribute(n,_+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,_=new p.constructor(m.length*g);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let x=0;x<g;x++)_[b++]=p[y++]}return new Wn(_,g,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=e(_,s);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new tn,Os=new Ou,Kc=new wl,h_=new $,Jc=new $,Qc=new $,$c=new $,gd=new $,eu=new $,d_=new $,tu=new $;class Ca extends Gn{constructor(e=new bn,n=new Ox){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;n.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(gd.fromBufferAttribute(v,e),h?eu.addScaledVector(gd,g):eu.addScaledVector(gd.sub(n),g))}n.add(eu)}return n}raycast(e,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Kc.copy(s.boundingSphere),Kc.applyMatrix4(c),Os.copy(e.ray).recast(e.near),!(Kc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Kc,h_)===null||Os.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(f_.copy(c).invert(),Os.copy(e.ray).applyMatrix4(f_),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Os)))}_computeIntersections(e,n,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,T=_.length;b<T;b++){const M=_[b],x=h[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=O,B=U;D<B;D+=3){const F=d.getX(D),z=d.getX(D+1),Z=d.getX(D+2);l=nu(this,x,e,s,p,g,v,F,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=d.getX(M),U=d.getX(M+1),D=d.getX(M+2);l=nu(this,h,e,s,p,g,v,O,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,T=_.length;b<T;b++){const M=_[b],x=h[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=O,B=U;D<B;D+=3){const F=D,z=D+1,Z=D+2;l=nu(this,x,e,s,p,g,v,F,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=M,U=M+1,D=M+2;l=nu(this,h,e,s,p,g,v,O,U,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function $E(r,e,n,s,l,c,h,d){let m;if(e.side===$n?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===hs,d),m===null)return null;tu.copy(d),tu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(tu);return p<n.near||p>n.far?null:{distance:p,point:tu.clone(),object:r}}function nu(r,e,n,s,l,c,h,d,m,p){r.getVertexPosition(d,Jc),r.getVertexPosition(m,Qc),r.getVertexPosition(p,$c);const g=$E(r,e,n,s,Jc,Qc,$c,d_);if(g){const v=new $;Ai.getBarycoord(d_,Jc,Qc,$c,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,m,p,v,new Et)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,d,m,p,v,new Et)),h&&(g.normal=Ai.getInterpolatedAttribute(h,d,m,p,v,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new $,materialIndex:0};Ai.getNormal(Jc,Qc,$c,_.normal),g.face=_,g.barycoord=v}return g}class Rl extends bn{constructor(e=1,n=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let _=0,y=0;b("z","y","x",-1,-1,s,n,e,h,c,0),b("z","y","x",1,-1,s,n,-e,h,c,1),b("x","z","y",1,1,e,s,n,l,h,2),b("x","z","y",1,-1,e,s,-n,l,h,3),b("x","y","z",1,-1,e,n,s,l,c,4),b("x","y","z",-1,-1,e,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ei(p,3)),this.setAttribute("normal",new ei(g,3)),this.setAttribute("uv",new ei(v,2));function b(T,M,x,O,U,D,B,F,z,Z,R){const L=D/z,G=B/Z,K=D/2,ie=B/2,he=F/2,ue=z+1,N=Z+1;let H=0,J=0;const Se=new $;for(let Ee=0;Ee<N;Ee++){const P=Ee*G-ie;for(let ee=0;ee<ue;ee++){const _e=ee*L-K;Se[T]=_e*O,Se[M]=P*U,Se[x]=he,p.push(Se.x,Se.y,Se.z),Se[T]=0,Se[M]=0,Se[x]=F>0?1:-1,g.push(Se.x,Se.y,Se.z),v.push(ee/z),v.push(1-Ee/Z),H+=1}}for(let Ee=0;Ee<Z;Ee++)for(let P=0;P<z;P++){const ee=_+P+ue*Ee,_e=_+P+ue*(Ee+1),Re=_+(P+1)+ue*(Ee+1),Ge=_+(P+1)+ue*Ee;m.push(ee,_e,Ge),m.push(_e,Re,Ge),J+=6}d.addGroup(y,J,R),y+=J,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=l.clone():Array.isArray(l)?e[n][s]=l.slice():e[n][s]=l}}return e}function Xn(r){const e={};for(let n=0;n<r.length;n++){const s=io(r[n]);for(const l in s)e[l]=s[l]}return e}function eT(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function Bx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const tT={clone:io,merge:Xn};var nT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nT,this.fragmentShader=iT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=eT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?n.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?n.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[l]={type:"m4",value:h.toArray()}:n.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class zx extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new $,p_=new Et,m_=new Et;class Ei extends zx{constructor(e=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,n){return this.getViewBounds(e,p_,m_),n.subVectors(m_,p_)}setViewOffset(e,n,s,l,c,h){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ml*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,n-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,jr=1;class aT extends Gn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(kr,jr,e,n);l.layers=this.layers,this.add(l);const c=new Ei(kr,jr,e,n);c.layers=this.layers,this.add(c);const h=new Ei(kr,jr,e,n);h.layers=this.layers,this.add(h);const d=new Ei(kr,jr,e,n);d.layers=this.layers,this.add(d);const m=new Ei(kr,jr,e,n);m.layers=this.layers,this.add(m);const p=new Ei(kr,jr,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,l,c,h,d,m]=n;for(const p of n)this.remove(p);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(n,c),e.setRenderTarget(s,1,l),e.render(n,h),e.setRenderTarget(s,2,l),e.render(n,d),e.setRenderTarget(s,3,l),e.render(n,m),e.setRenderTarget(s,4,l),e.render(n,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(n,g),e.setRenderTarget(v,_,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Fx extends Hn{constructor(e=[],n=Ws,s,l,c,h,d,m,p,g){super(e,n,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hx extends qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Fx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Rl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:ba});c.uniforms.tEquirect.value=n;const h=new Ca(l,c),d=n.minFilter;return n.minFilter===Vs&&(n.minFilter=Fn),new aT(1,10,this).update(e,h),n.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,n=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(n,s,l);e.setRenderTarget(c)}}class js extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sT={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const T of e.hand.values()){const M=n.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&_>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=n.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new js;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class Ru{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=n}clone(){return new Ru(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rT extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class oT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Rp,this.updateRanges=[],this.version=0,this.uuid=Ea()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,s){e*=this.stride,s*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=n.array[s+l];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ea()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ea()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jn=new $;class Cu{constructor(e,n,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,s=this.data.count;n<s;n++)jn.fromBufferAttribute(this,n),jn.applyMatrix4(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)jn.fromBufferAttribute(this,n),jn.applyNormalMatrix(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)jn.fromBufferAttribute(this,n),jn.transformDirection(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}getComponent(e,n){let s=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(s=Pi(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Vt(s,this.array)),this.data.array[e*this.data.stride+this.offset+n]=s,this}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Pi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Pi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Pi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Pi(n,this.array)),n}setXY(e,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),s=Vt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=s,this}setXYZ(e,n,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),s=Vt(s,this.array),l=Vt(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,n,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),s=Vt(s,this.array),l=Vt(l,this.array),c=Vt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){wu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Wn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gx extends qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xr;const il=new $,Wr=new $,Yr=new $,qr=new Et,al=new Et,Vx=new tn,iu=new $,sl=new $,au=new $,g_=new Et,_d=new Et,v_=new Et;class lT extends Gn{constructor(e=new Gx){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new bn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new oT(n,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Cu(s,3,0,!1)),Xr.setAttribute("uv",new Cu(s,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new Et(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),Vx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Yr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;su(iu.set(-.5,-.5,0),Yr,h,Wr,l,c),su(sl.set(.5,-.5,0),Yr,h,Wr,l,c),su(au.set(.5,.5,0),Yr,h,Wr,l,c),g_.set(0,0),_d.set(1,0),v_.set(1,1);let d=e.ray.intersectTriangle(iu,sl,au,!1,il);if(d===null&&(su(sl.set(-.5,.5,0),Yr,h,Wr,l,c),_d.set(0,1),d=e.ray.intersectTriangle(iu,au,sl,!1,il),d===null))return;const m=e.ray.origin.distanceTo(il);m<e.near||m>e.far||n.push({distance:m,point:il.clone(),uv:Ai.getInterpolation(il,iu,sl,au,g_,_d,v_,new Et),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function su(r,e,n,s,l,c){qr.subVectors(r,n).addScalar(.5).multiply(s),l!==void 0?(al.x=c*qr.x-l*qr.y,al.y=l*qr.x+c*qr.y):al.copy(qr),r.copy(e),r.x+=al.x,r.y+=al.y,r.applyMatrix4(Vx)}class cT extends Hn{constructor(e=null,n=1,s=1,l,c,h,d,m,p=Pn,g=Pn,v,_){super(null,h,d,m,p,g,l,c,v,_),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new $,uT=new $,fT=new ht;class Fs{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,l){return this.normal.set(e,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const l=xd.subVectors(s,n).cross(uT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(xd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||fT.getNormalMatrix(e),l=this.coplanarPoint(xd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new wl,hT=new Et(.5,.5),ru=new $;class kx{constructor(e=new Fs,n=new Fs,s=new Fs,l=new Fs,c=new Fs,h=new Fs){this.planes=[e,n,s,l,c,h]}set(e,n,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=Wi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],v=c[5],_=c[6],y=c[7],b=c[8],T=c[9],M=c[10],x=c[11],O=c[12],U=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-h,y-g,x-b,B-O).normalize(),l[1].setComponents(p+h,y+g,x+b,B+O).normalize(),l[2].setComponents(p+d,y+v,x+T,B+U).normalize(),l[3].setComponents(p-d,y-v,x-T,B-U).normalize(),s)l[4].setComponents(m,_,M,D).normalize(),l[5].setComponents(p-m,y-_,x-M,B-D).normalize();else if(l[4].setComponents(p-m,y-_,x-M,B-D).normalize(),n===Wi)l[5].setComponents(p+m,y+_,x+M,B+D).normalize();else if(n===Tu)l[5].setComponents(m,_,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const n=hT.distanceTo(e.center);return Ps.radius=.7071067811865476+n,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const n=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(ru.x=l.normal.x>0?e.max.x:e.min.x,ru.y=l.normal.y>0?e.max.y:e.min.y,ru.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Su extends qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Du=new $,Lu=new $,__=new tn,rl=new Ou,ou=new wl,Sd=new $,x_=new $;class jx extends Gn{constructor(e=new bn,n=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,s=[0];for(let l=1,c=n.count;l<c;l++)Du.fromBufferAttribute(n,l-1),Lu.fromBufferAttribute(n,l),s[l]=s[l-1],s[l]+=Du.distanceTo(Lu);e.setAttribute("lineDistance",new ei(s,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ou.copy(s.boundingSphere),ou.applyMatrix4(l),ou.radius+=c,e.ray.intersectsSphere(ou)===!1)return;__.copy(l).invert(),rl.copy(e.ray).applyMatrix4(__);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const y=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let T=y,M=b-1;T<M;T+=p){const x=g.getX(T),O=g.getX(T+1),U=lu(this,e,rl,m,x,O,T);U&&n.push(U)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(y),x=lu(this,e,rl,m,T,M,b-1);x&&n.push(x)}}else{const y=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let T=y,M=b-1;T<M;T+=p){const x=lu(this,e,rl,m,T,T+1,T);x&&n.push(x)}if(this.isLineLoop){const T=lu(this,e,rl,m,b-1,y,b-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function lu(r,e,n,s,l,c,h){const d=r.geometry.attributes.position;if(Du.fromBufferAttribute(d,l),Lu.fromBufferAttribute(d,c),n.distanceSqToSegment(Du,Lu,Sd,x_)>s)return;Sd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Sd);if(!(p<e.near||p>e.far))return{distance:p,point:x_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const S_=new $,y_=new $;class yd extends jx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,s=[];for(let l=0,c=n.count;l<c;l+=2)S_.fromBufferAttribute(n,l),y_.fromBufferAttribute(n,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+S_.distanceTo(y_);e.setAttribute("lineDistance",new ei(s,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yu extends qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M_=new tn,Cp=new Ou,cu=new wl,uu=new $;class Md extends Gn{constructor(e=new bn,n=new yu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),cu.copy(s.boundingSphere),cu.applyMatrix4(l),cu.radius+=c,e.ray.intersectsSphere(cu)===!1)return;M_.copy(l).invert(),Cp.copy(e.ray).applyMatrix4(M_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=_,T=y;b<T;b++){const M=p.getX(b);uu.fromBufferAttribute(v,M),b_(uu,M,m,l,e,n,this)}}else{const _=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let b=_,T=y;b<T;b++)uu.fromBufferAttribute(v,b),b_(uu,b,m,l,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function b_(r,e,n,s,l,c,h){const d=Cp.distanceSqToPoint(r);if(d<n){const m=new $;Cp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class dT extends Hn{constructor(e,n,s,l,c,h,d,m,p){super(e,n,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ml extends Hn{constructor(e,n,s=Zi,l,c,h,d=Pn,m=Pn,p,g=wa,v=1){if(g!==wa&&g!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:v};super(_,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pT extends Ml{constructor(e,n=Zi,s=Ws,l,c,h=Pn,d=Pn,m,p=wa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,n,s,l,c,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pu extends bn{constructor(e=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:l};const c=e/2,h=n/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=e/d,_=n/m,y=[],b=[],T=[],M=[];for(let x=0;x<g;x++){const O=x*_-h;for(let U=0;U<p;U++){const D=U*v-c;b.push(D,-O,0),T.push(0,0,1),M.push(U/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const U=O+p*x,D=O+p*(x+1),B=O+1+p*(x+1),F=O+1+p*x;y.push(U,D,F),y.push(D,B,F)}this.setIndex(y),this.setAttribute("position",new ei(b,3)),this.setAttribute("normal",new ei(T,3)),this.setAttribute("uv",new ei(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class mT extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gT extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vT extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wx extends zx{constructor(e=-1,n=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _T extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const E_=new tn;class ST{constructor(e,n,s=0,l=1/0){this.ray=new Ou(e,n),this.near=s,this.far=l,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Rt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return E_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(E_),this}intersectObject(e,n=!0,s=[]){return Dp(e,this,s,n),s.sort(T_),s}intersectObjects(e,n=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Dp(e[l],this,s,n);return s.sort(T_),s}}function T_(r,e){return r.distance-e.distance}function Dp(r,e,n,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Dp(c[h],e,n,!0)}}function A_(r,e,n,s){const l=yT(s);switch(n){case Rx:return r*e;case Dx:return r*e/l.components*l.byteLength;case Fp:return r*e/l.components*l.byteLength;case to:return r*e*2/l.components*l.byteLength;case Hp:return r*e*2/l.components*l.byteLength;case Cx:return r*e*3/l.components*l.byteLength;case Ii:return r*e*4/l.components*l.byteLength;case Gp:return r*e*4/l.components*l.byteLength;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _u:case xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jd:case $d:return Math.max(r,16)*Math.max(e,8)/4;case Kd:case Qd:return Math.max(r,8)*Math.max(e,8)/2;case ep:case tp:case ip:case ap:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case np:case sp:case rp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case hp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case xp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yp:case Mp:case bp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ep:case Tp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ap:case wp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yT(r){switch(r){case Ti:case Ex:return{byteLength:1,components:1};case _l:case Tx:case Aa:return{byteLength:2,components:1};case Bp:case zp:return{byteLength:2,components:4};case Zi:case Ip:case Xi:return{byteLength:4,components:1};case Ax:case wx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);function Yx(){let r=null,e=!1,n=null,s=null;function l(c,h){n(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function MT(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let _=0;for(let y=1;y<v.length;y++){const b=v[_],T=v[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++_,v[_]=T)}v.length=_+1;for(let y=0,b=v.length;y<b;y++){const T=v[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var bT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ET=`#ifdef USE_ALPHAHASH
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
#endif`,TT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CT=`#ifdef USE_AOMAP
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
#endif`,DT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LT=`#ifdef USE_BATCHING
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
#endif`,NT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IT=`#ifdef USE_IRIDESCENCE
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
#endif`,BT=`#ifdef USE_BUMPMAP
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
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,WT=`#define PI 3.141592653589793
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
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qT=`vec3 transformedNormal = objectNormal;
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
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",eA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,aA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
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
#endif`,rA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uA=`#ifdef USE_GRADIENTMAP
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
}`,fA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pA=`uniform bool receiveShadow;
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
#endif`,mA=`#ifdef USE_ENVMAP
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
#endif`,gA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SA=`PhysicalMaterial material;
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
#endif`,yA=`uniform sampler2D dfgLUT;
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
}`,MA=`
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
#endif`,bA=`#if defined( RE_IndirectDiffuse )
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
#endif`,EA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NA=`#if defined( USE_POINTS_UV )
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
#endif`,UA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zA=`#ifdef USE_MORPHTARGETS
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
#endif`,FA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XA=`#ifdef USE_NORMALMAP
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
#endif`,WA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,u1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
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
}`,C1=`#if DEPTH_PACKING == 3200
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
}`,D1=`#define DISTANCE
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
}`,L1=`#define DISTANCE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,P1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#define LAMBERT
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
}`,F1=`#define LAMBERT
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
}`,H1=`#define MATCAP
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
}`,G1=`#define MATCAP
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
}`,V1=`#define NORMAL
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
}`,k1=`#define NORMAL
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
}`,j1=`#define PHONG
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
}`,X1=`#define PHONG
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
}`,W1=`#define STANDARD
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
}`,Y1=`#define STANDARD
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
}`,q1=`#define TOON
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
}`,Z1=`#define TOON
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
}`,K1=`uniform float size;
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
}`,J1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,$1=`uniform vec3 color;
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
}`,ew=`uniform float rotation;
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
}`,tw=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:bT,alphahash_pars_fragment:ET,alphamap_fragment:TT,alphamap_pars_fragment:AT,alphatest_fragment:wT,alphatest_pars_fragment:RT,aomap_fragment:CT,aomap_pars_fragment:DT,batching_pars_vertex:LT,batching_vertex:NT,begin_vertex:UT,beginnormal_vertex:OT,bsdfs:PT,iridescence_fragment:IT,bumpmap_pars_fragment:BT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:FT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:GT,color_fragment:VT,color_pars_fragment:kT,color_pars_vertex:jT,color_vertex:XT,common:WT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:qT,displacementmap_pars_vertex:ZT,displacementmap_vertex:KT,emissivemap_fragment:JT,emissivemap_pars_fragment:QT,colorspace_fragment:$T,colorspace_pars_fragment:eA,envmap_fragment:tA,envmap_common_pars_fragment:nA,envmap_pars_fragment:iA,envmap_pars_vertex:aA,envmap_physical_pars_fragment:mA,envmap_vertex:sA,fog_vertex:rA,fog_pars_vertex:oA,fog_fragment:lA,fog_pars_fragment:cA,gradientmap_pars_fragment:uA,lightmap_pars_fragment:fA,lights_lambert_fragment:hA,lights_lambert_pars_fragment:dA,lights_pars_begin:pA,lights_toon_fragment:gA,lights_toon_pars_fragment:vA,lights_phong_fragment:_A,lights_phong_pars_fragment:xA,lights_physical_fragment:SA,lights_physical_pars_fragment:yA,lights_fragment_begin:MA,lights_fragment_maps:bA,lights_fragment_end:EA,logdepthbuf_fragment:TA,logdepthbuf_pars_fragment:AA,logdepthbuf_pars_vertex:wA,logdepthbuf_vertex:RA,map_fragment:CA,map_pars_fragment:DA,map_particle_fragment:LA,map_particle_pars_fragment:NA,metalnessmap_fragment:UA,metalnessmap_pars_fragment:OA,morphinstance_vertex:PA,morphcolor_vertex:IA,morphnormal_vertex:BA,morphtarget_pars_vertex:zA,morphtarget_vertex:FA,normal_fragment_begin:HA,normal_fragment_maps:GA,normal_pars_fragment:VA,normal_pars_vertex:kA,normal_vertex:jA,normalmap_pars_fragment:XA,clearcoat_normal_fragment_begin:WA,clearcoat_normal_fragment_maps:YA,clearcoat_pars_fragment:qA,iridescence_pars_fragment:ZA,opaque_fragment:KA,packing:JA,premultiplied_alpha_fragment:QA,project_vertex:$A,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:u1,skinnormal_vertex:f1,specularmap_fragment:h1,specularmap_pars_fragment:d1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:v1,uv_pars_fragment:_1,uv_pars_vertex:x1,uv_vertex:S1,worldpos_vertex:y1,background_vert:M1,background_frag:b1,backgroundCube_vert:E1,backgroundCube_frag:T1,cube_vert:A1,cube_frag:w1,depth_vert:R1,depth_frag:C1,distance_vert:D1,distance_frag:L1,equirect_vert:N1,equirect_frag:U1,linedashed_vert:O1,linedashed_frag:P1,meshbasic_vert:I1,meshbasic_frag:B1,meshlambert_vert:z1,meshlambert_frag:F1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:V1,meshnormal_frag:k1,meshphong_vert:j1,meshphong_frag:X1,meshphysical_vert:W1,meshphysical_frag:Y1,meshtoon_vert:q1,meshtoon_frag:Z1,points_vert:K1,points_frag:J1,shadow_vert:Q1,shadow_frag:$1,sprite_vert:ew,sprite_frag:tw},He={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ji={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ji.physical={uniforms:Xn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const fu={r:0,b:0,g:0},Is=new Ra,nw=new tn;function iw(r,e,n,s,l,c,h){const d=new At(0);let m=c===!0?0:1,p,g,v=null,_=0,y=null;function b(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:e).get(D)),D}function T(U){let D=!1;const B=b(U);B===null?x(d,m):B&&B.isColor&&(x(B,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const B=b(D);B&&(B.isCubeTexture||B.mapping===Uu)?(g===void 0&&(g=new Ca(new Rl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:io(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Is.copy(D.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(nw.makeRotationFromEuler(Is)),g.material.toneMapped=Ct.getTransfer(B.colorSpace)!==Gt,(v!==B||_!==B.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,v=B,_=B.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Ca(new Pu(2,2),new Ki({name:"BackgroundMaterial",uniforms:io(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(B.colorSpace)!==Gt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||_!==B.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,v=B,_=B.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,D){U.getRGB(fu,Bx(r)),s.buffers.color.setClear(fu.r,fu.g,fu.b,D,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(d,m)},render:T,addToRenderList:M,dispose:O}}function aw(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,h=!1;function d(L,G,K,ie,he){let ue=!1;const N=v(ie,K,G);c!==N&&(c=N,p(c.object)),ue=y(L,ie,K,he),ue&&b(L,ie,K,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(ue||h)&&(h=!1,D(L,G,K,ie),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function m(){return r.createVertexArray()}function p(L){return r.bindVertexArray(L)}function g(L){return r.deleteVertexArray(L)}function v(L,G,K){const ie=K.wireframe===!0;let he=s[L.id];he===void 0&&(he={},s[L.id]=he);let ue=he[G.id];ue===void 0&&(ue={},he[G.id]=ue);let N=ue[ie];return N===void 0&&(N=_(m()),ue[ie]=N),N}function _(L){const G=[],K=[],ie=[];for(let he=0;he<n;he++)G[he]=0,K[he]=0,ie[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:ie,object:L,attributes:{},index:null}}function y(L,G,K,ie){const he=c.attributes,ue=G.attributes;let N=0;const H=K.getAttributes();for(const J in H)if(H[J].location>=0){const Ee=he[J];let P=ue[J];if(P===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),Ee===void 0||Ee.attribute!==P||P&&Ee.data!==P.data)return!0;N++}return c.attributesNum!==N||c.index!==ie}function b(L,G,K,ie){const he={},ue=G.attributes;let N=0;const H=K.getAttributes();for(const J in H)if(H[J].location>=0){let Ee=ue[J];Ee===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor));const P={};P.attribute=Ee,Ee&&Ee.data&&(P.data=Ee.data),he[J]=P,N++}c.attributes=he,c.attributesNum=N,c.index=ie}function T(){const L=c.newAttributes;for(let G=0,K=L.length;G<K;G++)L[G]=0}function M(L){x(L,0)}function x(L,G){const K=c.newAttributes,ie=c.enabledAttributes,he=c.attributeDivisors;K[L]=1,ie[L]===0&&(r.enableVertexAttribArray(L),ie[L]=1),he[L]!==G&&(r.vertexAttribDivisor(L,G),he[L]=G)}function O(){const L=c.newAttributes,G=c.enabledAttributes;for(let K=0,ie=G.length;K<ie;K++)G[K]!==L[K]&&(r.disableVertexAttribArray(K),G[K]=0)}function U(L,G,K,ie,he,ue,N){N===!0?r.vertexAttribIPointer(L,G,K,he,ue):r.vertexAttribPointer(L,G,K,ie,he,ue)}function D(L,G,K,ie){T();const he=ie.attributes,ue=K.getAttributes(),N=G.defaultAttributeValues;for(const H in ue){const J=ue[H];if(J.location>=0){let Se=he[H];if(Se===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),Se!==void 0){const Ee=Se.normalized,P=Se.itemSize,ee=e.get(Se);if(ee===void 0)continue;const _e=ee.buffer,Re=ee.type,Ge=ee.bytesPerElement,ae=Re===r.INT||Re===r.UNSIGNED_INT||Se.gpuType===Ip;if(Se.isInterleavedBufferAttribute){const fe=Se.data,Ie=fe.stride,je=Se.offset;if(fe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<J.locationSize;Ve++)x(J.location+Ve,fe.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ve=0;Ve<J.locationSize;Ve++)M(J.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ve=0;Ve<J.locationSize;Ve++)U(J.location+Ve,P/J.locationSize,Re,Ee,Ie*Ge,(je+P/J.locationSize*Ve)*Ge,ae)}else{if(Se.isInstancedBufferAttribute){for(let fe=0;fe<J.locationSize;fe++)x(J.location+fe,Se.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let fe=0;fe<J.locationSize;fe++)M(J.location+fe);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let fe=0;fe<J.locationSize;fe++)U(J.location+fe,P/J.locationSize,Re,Ee,P*Ge,P/J.locationSize*fe*Ge,ae)}}else if(N!==void 0){const Ee=N[H];if(Ee!==void 0)switch(Ee.length){case 2:r.vertexAttrib2fv(J.location,Ee);break;case 3:r.vertexAttrib3fv(J.location,Ee);break;case 4:r.vertexAttrib4fv(J.location,Ee);break;default:r.vertexAttrib1fv(J.location,Ee)}}}}O()}function B(){Z();for(const L in s){const G=s[L];for(const K in G){const ie=G[K];for(const he in ie)g(ie[he].object),delete ie[he];delete G[K]}delete s[L]}}function F(L){if(s[L.id]===void 0)return;const G=s[L.id];for(const K in G){const ie=G[K];for(const he in ie)g(ie[he].object),delete ie[he];delete G[K]}delete s[L.id]}function z(L){for(const G in s){const K=s[G];if(K[L.id]===void 0)continue;const ie=K[L.id];for(const he in ie)g(ie[he].object),delete ie[he];delete K[L.id]}}function Z(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:R,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function sw(r,e,n){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),n.update(g,s,1)}function h(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),n.update(g,s,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];n.update(y,s,1)}function m(p,g,v,_){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],_[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,v);let b=0;for(let T=0;T<v;T++)b+=g[T]*_[T];n.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function rw(r,e,n,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Z=z===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ti&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!Z)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(rt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,maxSamples:B,samples:F}}function ow(r){const e=this;let n=null,s=0,l=!1,c=!1;const h=new Fs,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||l;return l=_,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const b=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,x=r.get(v);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,U=O*4;let D=x.clippingState||null;m.value=D,D=g(b,_,U,y);for(let B=0;B!==U;++B)D[B]=n[B];x.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,_,y,b){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const x=y+T*4,O=_.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,D=y;U!==T;++U,D+=4)h.copy(v[U]).applyMatrix4(O,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function lw(r){let e=new WeakMap;function n(h,d){return d===Wd?h.mapping=Ws:d===Yd&&(h.mapping=eo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wd||d===Yd)if(e.has(h)){const m=e.get(h).texture;return n(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Hx(m.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),n(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const fs=4,w_=[.125,.215,.35,.446,.526,.582],Gs=20,cw=256,ol=new Wx,R_=new At;let bd=null,Ed=0,Td=0,Ad=!1;const uw=new $;class C_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,l=100,c={}){const{size:h=256,position:d=uw}=c;bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Ed,Td),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Aa,format:Ii,colorSpace:no,depthBuffer:!1},l=D_(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fw(c)),this._blurMaterial=dw(c,e,n),this._ggxMaterial=hw(c,e,n)}return l}_compileMaterial(e){const n=new Ca(new bn,e);this._renderer.compile(n,ol)}_sceneToCubeUV(e,n,s,l,c){const m=new Ei(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(R_),v.toneMapping=Yi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ca(new Rl,new Ox({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,x=!0):(M.color.copy(R_),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const B=this._cubeSize;Zr(l,D*B,U>2?B:0,B,B),v.setRenderTarget(l),x&&v.render(T,m),v.render(e,m)}v.toneMapping=y,v.autoClear=_,e.background=O}_textureToCubeUV(e,n){const s=this._renderer,l=e.mapping===Ws||e.mapping===eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Zr(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(h,ol)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=s}_applyGGXFilter(e,n,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,y=v*_,{_lodMax:b}=this,T=this._sizeLods[s],M=3*T*(s>b-fs?s-b+fs:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-n,Zr(c,M,x,3*T,2*T),l.setRenderTarget(c),l.render(d,ol),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Zr(e,M,x,3*T,2*T),l.setRenderTarget(e),l.render(d,ol)}_blur(e,n,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,n,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,n,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const _=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Gs-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Gs;M>Gs&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Gs}`);const x=[];let O=0;for(let z=0;z<Gs;++z){const Z=z/T,R=Math.exp(-Z*Z/2);x.push(R),z===0?O+=R:z<M&&(O+=2*R)}for(let z=0;z<x.length;z++)x[z]=x[z]/O;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=b,_.mipInt.value=U-s;const D=this._sizeLods[l],B=3*D*(l>U-fs?l-U+fs:0),F=4*(this._cubeSize-D);Zr(n,B,F,3*D,2*D),m.setRenderTarget(n),m.render(v,ol)}}function fw(r){const e=[],n=[],s=[];let l=r;const c=r-fs+1+w_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>r-fs?m=w_[h-r+fs-1]:h===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,T=3,M=2,x=1,O=new Float32Array(T*b*y),U=new Float32Array(M*b*y),D=new Float32Array(x*b*y);for(let F=0;F<y;F++){const z=F%3*2/3-1,Z=F>2?0:-1,R=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];O.set(R,T*b*F),U.set(_,M*b*F);const L=[F,F,F,F,F,F];D.set(L,x*b*F)}const B=new bn;B.setAttribute("position",new Wn(O,T)),B.setAttribute("uv",new Wn(U,M)),B.setAttribute("faceIndex",new Wn(D,x)),s.push(new Ca(B,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function D_(r,e,n){const s=new qi(r,e,n);return s.texture.mapping=Uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Zr(r,e,n,s,l){r.viewport.set(e,n,s,l),r.scissor.set(e,n,s,l)}function hw(r,e,n){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function dw(r,e,n){const s=new Float32Array(Gs),l=new $(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function L_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function N_(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function pw(r){let e=new WeakMap,n=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wd||m===Yd,g=m===Ws||m===eo;if(p||g){let v=e.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new C_(r)),v=p?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new C_(r)),v=p?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function mw(r){const e={};function n(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&Sl("WebGLRenderer: "+s+" extension not supported."),l}}}function gw(r,e,n,s){const l={},c=new WeakMap;function h(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",h),delete l[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(v,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,n.memory.geometries++),_}function m(v){const _=v.attributes;for(const y in _)e.update(_[y],r.ARRAY_BUFFER)}function p(v){const _=[],y=v.index,b=v.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let U=0,D=O.length;U<D;U+=3){const B=O[U+0],F=O[U+1],z=O[U+2];_.push(B,F,F,z,z,B)}}else if(b!==void 0){const O=b.array;T=b.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const B=U+0,F=U+1,z=U+2;_.push(B,F,F,z,z,B)}}else return;const M=new(Lx(_)?Ix:Px)(_,1);M.version=T;const x=c.get(v);x&&e.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function vw(r,e,n){let s;function l(_){s=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,y){r.drawElements(s,y,c,_*h),n.update(y,s,1)}function p(_,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,_*h,b),n.update(y,s,b))}function g(_,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,s,1)}function v(_,y,b,T){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)p(_[x]/h,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,T,0,b);let x=0;for(let O=0;O<b;O++)x+=y[O]*T[O];n.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function _w(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(n.calls++,h){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Rt("WebGLInfo: Unknown draw mode:",h);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:s}}function xw(r,e,n){const s=new WeakMap,l=new ln;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(d);if(_===void 0||_.count!==v){let L=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",L)};var y=L;_!==void 0&&_.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let B=d.attributes.position.count*D,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*F*4*v),Z=new Nx(z,B,F,v);Z.type=Xi,Z.needsUpdate=!0;const R=D*4;for(let G=0;G<v;G++){const K=x[G],ie=O[G],he=U[G],ue=B*F*4*G;for(let N=0;N<K.count;N++){const H=N*R;b===!0&&(l.fromBufferAttribute(K,N),z[ue+H+0]=l.x,z[ue+H+1]=l.y,z[ue+H+2]=l.z,z[ue+H+3]=0),T===!0&&(l.fromBufferAttribute(ie,N),z[ue+H+4]=l.x,z[ue+H+5]=l.y,z[ue+H+6]=l.z,z[ue+H+7]=0),M===!0&&(l.fromBufferAttribute(he,N),z[ue+H+8]=l.x,z[ue+H+9]=l.y,z[ue+H+10]=l.z,z[ue+H+11]=he.itemSize===4?l.w:1)}}_={count:v,texture:Z,size:new Et(B,F)},s.set(d,_),d.addEventListener("dispose",L)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function Sw(r,e,n,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:h}}const yw={[gx]:"LINEAR_TONE_MAPPING",[vx]:"REINHARD_TONE_MAPPING",[_x]:"CINEON_TONE_MAPPING",[xx]:"ACES_FILMIC_TONE_MAPPING",[yx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function Mw(r,e,n,s,l){const c=new qi(e,n,{type:r,depthBuffer:s,stencilBuffer:l}),h=new qi(e,n,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),d=new bn;d.setAttribute("position",new ei([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ei([0,2,0,0,2,0],2));const m=new mT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ca(d,m),g=new Wx(-1,1,1,-1,0,1);let v=null,_=null,y=!1,b,T=null,M=[],x=!1;this.setSize=function(O,U){c.setSize(O,U),h.setSize(O,U);for(let D=0;D<M.length;D++){const B=M[D];B.setSize&&B.setSize(O,U)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let B=0;B<M.length;B++){const F=M[B];F.setSize&&F.setSize(U,D)}},this.begin=function(O,U){if(y||O.toneMapping===Yi&&M.length===0)return!1;if(T=U,U!==null){const D=U.width,B=U.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return x===!1&&O.setRenderTarget(c),b=O.toneMapping,O.toneMapping=Yi,!0},this.hasRenderPass=function(){return x},this.end=function(O,U){O.toneMapping=b,y=!0;let D=c,B=h;for(let F=0;F<M.length;F++){const z=M[F];if(z.enabled!==!1&&(z.render(O,B,D,U),z.needsSwap!==!1)){const Z=D;D=B,B=Z}}if(v!==O.outputColorSpace||_!==O.toneMapping){v=O.outputColorSpace,_=O.toneMapping,m.defines={},Ct.getTransfer(v)===Gt&&(m.defines.SRGB_TRANSFER="");const F=yw[_];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,O.setRenderTarget(T),O.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const qx=new Hn,Lp=new Ml(1,1),Zx=new Nx,Kx=new VE,Jx=new Fx,U_=[],O_=[],P_=new Float32Array(16),I_=new Float32Array(9),B_=new Float32Array(4);function so(r,e,n){const s=r[0];if(s<=0||s>0)return r;const l=e*n;let c=U_[l];if(c===void 0&&(c=new Float32Array(l),U_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=n,r[h].toArray(c,d)}return c}function xn(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function Sn(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Bu(r,e){let n=O_[e];n===void 0&&(n=new Int32Array(e),O_[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function bw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function Ew(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;r.uniform2fv(this.addr,e),Sn(n,e)}}function Tw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;r.uniform3fv(this.addr,e),Sn(n,e)}}function Aw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;r.uniform4fv(this.addr,e),Sn(n,e)}}function ww(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(xn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,s))return;B_.set(s),r.uniformMatrix2fv(this.addr,!1,B_),Sn(n,s)}}function Rw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(xn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,s))return;I_.set(s),r.uniformMatrix3fv(this.addr,!1,I_),Sn(n,s)}}function Cw(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(xn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(n,e)}else{if(xn(n,s))return;P_.set(s),r.uniformMatrix4fv(this.addr,!1,P_),Sn(n,s)}}function Dw(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function Lw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;r.uniform2iv(this.addr,e),Sn(n,e)}}function Nw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;r.uniform3iv(this.addr,e),Sn(n,e)}}function Uw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;r.uniform4iv(this.addr,e),Sn(n,e)}}function Ow(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function Pw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;r.uniform2uiv(this.addr,e),Sn(n,e)}}function Iw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;r.uniform3uiv(this.addr,e),Sn(n,e)}}function Bw(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;r.uniform4uiv(this.addr,e),Sn(n,e)}}function zw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Lp.compareFunction=n.isReversedDepthBuffer()?kp:Vp,c=Lp):c=qx,n.setTexture2D(e||c,l)}function Fw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(e||Kx,l)}function Hw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(e||Jx,l)}function Gw(r,e,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(e||Zx,l)}function Vw(r){switch(r){case 5126:return bw;case 35664:return Ew;case 35665:return Tw;case 35666:return Aw;case 35674:return ww;case 35675:return Rw;case 35676:return Cw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Nw;case 35669:case 35673:return Uw;case 5125:return Ow;case 36294:return Pw;case 36295:return Iw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Gw}}function kw(r,e){r.uniform1fv(this.addr,e)}function jw(r,e){const n=so(e,this.size,2);r.uniform2fv(this.addr,n)}function Xw(r,e){const n=so(e,this.size,3);r.uniform3fv(this.addr,n)}function Ww(r,e){const n=so(e,this.size,4);r.uniform4fv(this.addr,n)}function Yw(r,e){const n=so(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function qw(r,e){const n=so(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function Zw(r,e){const n=so(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function Kw(r,e){r.uniform1iv(this.addr,e)}function Jw(r,e){r.uniform2iv(this.addr,e)}function Qw(r,e){r.uniform3iv(this.addr,e)}function $w(r,e){r.uniform4iv(this.addr,e)}function eR(r,e){r.uniform1uiv(this.addr,e)}function tR(r,e){r.uniform2uiv(this.addr,e)}function nR(r,e){r.uniform3uiv(this.addr,e)}function iR(r,e){r.uniform4uiv(this.addr,e)}function aR(r,e,n){const s=this.cache,l=e.length,c=Bu(n,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Lp:h=qx;for(let d=0;d!==l;++d)n.setTexture2D(e[d]||h,c[d])}function sR(r,e,n){const s=this.cache,l=e.length,c=Bu(n,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)n.setTexture3D(e[h]||Kx,c[h])}function rR(r,e,n){const s=this.cache,l=e.length,c=Bu(n,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)n.setTextureCube(e[h]||Jx,c[h])}function oR(r,e,n){const s=this.cache,l=e.length,c=Bu(n,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)n.setTexture2DArray(e[h]||Zx,c[h])}function lR(r){switch(r){case 5126:return kw;case 35664:return jw;case 35665:return Xw;case 35666:return Ww;case 35674:return Yw;case 35675:return qw;case 35676:return Zw;case 5124:case 35670:return Kw;case 35667:case 35671:return Jw;case 35668:case 35672:return Qw;case 35669:case 35673:return $w;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return oR}}class cR{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=Vw(n.type)}}class uR{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lR(n.type)}}class fR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,n[d.id],s)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function z_(r,e){r.seq.push(e),r.map[e.id]=e}function hR(r,e,n){const s=r.name,l=s.length;for(wd.lastIndex=0;;){const c=wd.exec(s),h=wd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){z_(n,p===void 0?new cR(d,r,e):new uR(d,r,e));break}else{let v=n.map[d];v===void 0&&(v=new fR(d),z_(n,v)),n=v}}}class Mu{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(n,h),m=e.getUniformLocation(n,d.name);hR(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(e,s,l)}setOptional(e,n,s){const l=n[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,n,s,l){for(let c=0,h=n.length;c!==h;++c){const d=n[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,n){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in n&&s.push(h)}return s}}function F_(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const dR=37297;let pR=0;function mR(r,e){const n=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${n[h]}`)}return s.join(`
`)}const H_=new ht;function gR(r){Ct._getMatrix(H_,Ct.workingColorSpace,r);const e=`mat3( ${H_.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(r)){case Eu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function G_(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return n.toUpperCase()+`

`+c+`

`+mR(r.getShaderSource(e),d)}else return c}function vR(r,e){const n=gR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const _R={[gx]:"Linear",[vx]:"Reinhard",[_x]:"Cineon",[xx]:"ACESFilmic",[yx]:"AgX",[Mx]:"Neutral",[Sx]:"Custom"};function xR(r,e){const n=_R[e];return n===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hu=new $;function SR(){Ct.getLuminanceCoefficients(hu);const r=hu.x.toFixed(4),e=hu.y.toFixed(4),n=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function MR(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function bR(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return n}function dl(r){return r!==""}function V_(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ER=/^[ \t]*#include +<([\w\d./]+)>/gm;function Np(r){return r.replace(ER,AR)}const TR=new Map;function AR(r,e){let n=pt[e];if(n===void 0){const s=TR.get(e);if(s!==void 0)n=pt[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Np(n)}const wR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(r){return r.replace(wR,RR)}function RR(r,e,n,s){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function X_(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CR={[mu]:"SHADOWMAP_TYPE_PCF",[hl]:"SHADOWMAP_TYPE_VSM"};function DR(r){return CR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LR={[Ws]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[Uu]:"ENVMAP_TYPE_CUBE_UV"};function NR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":LR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const UR={[eo]:"ENVMAP_MODE_REFRACTION"};function OR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":UR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PR={[mx]:"ENVMAP_BLENDING_MULTIPLY",[oE]:"ENVMAP_BLENDING_MIX",[lE]:"ENVMAP_BLENDING_ADD"};function IR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":PR[r.combine]||"ENVMAP_BLENDING_NONE"}function BR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function zR(r,e,n,s){const l=r.getContext(),c=n.defines;let h=n.vertexShader,d=n.fragmentShader;const m=DR(n),p=NR(n),g=OR(n),v=IR(n),_=BR(n),y=yR(n),b=MR(c),T=l.createProgram();let M,x,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(dl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(dl).join(`
`),x.length>0&&(x+=`
`)):(M=[X_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),x=[X_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?pt.tonemapping_pars_fragment:"",n.toneMapping!==Yi?xR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,vR("linearToOutputTexel",n.outputColorSpace),SR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(dl).join(`
`)),h=Np(h),h=V_(h,n),h=k_(h,n),d=Np(d),d=V_(d,n),d=k_(d,n),h=j_(h),d=j_(d),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=O+M+h,D=O+x+d,B=F_(l,l.VERTEX_SHADER,U),F=F_(l,l.FRAGMENT_SHADER,D);l.attachShader(T,B),l.attachShader(T,F),n.index0AttributeName!==void 0?l.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(G){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(T)||"",ie=l.getShaderInfoLog(B)||"",he=l.getShaderInfoLog(F)||"",ue=K.trim(),N=ie.trim(),H=he.trim();let J=!0,Se=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,B,F);else{const Ee=G_(l,B,"vertex"),P=G_(l,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+Ee+`
`+P)}else ue!==""?rt("WebGLProgram: Program Info Log:",ue):(N===""||H==="")&&(Se=!1);Se&&(G.diagnostics={runnable:J,programLog:ue,vertexShader:{log:N,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(B),l.deleteShader(F),Z=new Mu(l,T),R=bR(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(T,dR)),L},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=F,this}let FR=0;class HR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new GR(e),n.set(e,s)),s}}class GR{constructor(e){this.id=FR++,this.code=e,this.usedTimes=0}}function VR(r,e,n,s,l,c,h){const d=new Wp,m=new HR,p=new Set,g=[],v=new Map,_=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,L,G,K,ie){const he=K.fog,ue=ie.geometry,N=R.isMeshStandardMaterial?K.environment:null,H=(R.isMeshStandardMaterial?n:e).get(R.envMap||N),J=H&&H.mapping===Uu?H.image.height:null,Se=b[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&rt("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const Ee=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,P=Ee!==void 0?Ee.length:0;let ee=0;ue.morphAttributes.position!==void 0&&(ee=1),ue.morphAttributes.normal!==void 0&&(ee=2),ue.morphAttributes.color!==void 0&&(ee=3);let _e,Re,Ge,ae;if(Se){const _t=ji[Se];_e=_t.vertexShader,Re=_t.fragmentShader}else _e=R.vertexShader,Re=R.fragmentShader,m.update(R),Ge=m.getVertexShaderID(R),ae=m.getFragmentShaderID(R);const fe=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),je=ie.isInstancedMesh===!0,Ve=ie.isBatchedMesh===!0,ut=!!R.map,Zt=!!R.matcap,gt=!!H,dt=!!R.aoMap,wt=!!R.lightMap,tt=!!R.bumpMap,kt=!!R.normalMap,k=!!R.displacementMap,Bt=!!R.emissiveMap,vt=!!R.metalnessMap,Dt=!!R.roughnessMap,Ye=R.anisotropy>0,I=R.clearcoat>0,E=R.dispersion>0,W=R.iridescence>0,me=R.sheen>0,be=R.transmission>0,ce=Ye&&!!R.anisotropyMap,qe=I&&!!R.clearcoatMap,Ue=I&&!!R.clearcoatNormalMap,ye=I&&!!R.clearcoatRoughnessMap,Oe=W&&!!R.iridescenceMap,de=W&&!!R.iridescenceThicknessMap,ge=me&&!!R.sheenColorMap,Ce=me&&!!R.sheenRoughnessMap,Pe=!!R.specularMap,De=!!R.specularColorMap,Ze=!!R.specularIntensityMap,j=be&&!!R.transmissionMap,Le=be&&!!R.thicknessMap,we=!!R.gradientMap,Fe=!!R.alphaMap,Ae=R.alphaTest>0,xe=!!R.alphaHash,Ne=!!R.extensions;let Qe=Yi;R.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const mt={shaderID:Se,shaderType:R.type,shaderName:R.name,vertexShader:_e,fragmentShader:Re,defines:R.defines,customVertexShaderID:Ge,customFragmentShaderID:ae,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Ve,batchingColor:Ve&&ie._colorsTexture!==null,instancing:je,instancingColor:je&&ie.instanceColor!==null,instancingMorph:je&&ie.morphTexture!==null,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:no,alphaToCoverage:!!R.alphaToCoverage,map:ut,matcap:Zt,envMap:gt,envMapMode:gt&&H.mapping,envMapCubeUVHeight:J,aoMap:dt,lightMap:wt,bumpMap:tt,normalMap:kt,displacementMap:k,emissiveMap:Bt,normalMapObjectSpace:kt&&R.normalMapType===hE,normalMapTangentSpace:kt&&R.normalMapType===fE,metalnessMap:vt,roughnessMap:Dt,anisotropy:Ye,anisotropyMap:ce,clearcoat:I,clearcoatMap:qe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ye,dispersion:E,iridescence:W,iridescenceMap:Oe,iridescenceThicknessMap:de,sheen:me,sheenColorMap:ge,sheenRoughnessMap:Ce,specularMap:Pe,specularColorMap:De,specularIntensityMap:Ze,transmission:be,transmissionMap:j,thicknessMap:Le,gradientMap:we,opaque:R.transparent===!1&&R.blending===Kr&&R.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ae,alphaHash:xe,combine:R.combine,mapUv:ut&&T(R.map.channel),aoMapUv:dt&&T(R.aoMap.channel),lightMapUv:wt&&T(R.lightMap.channel),bumpMapUv:tt&&T(R.bumpMap.channel),normalMapUv:kt&&T(R.normalMap.channel),displacementMapUv:k&&T(R.displacementMap.channel),emissiveMapUv:Bt&&T(R.emissiveMap.channel),metalnessMapUv:vt&&T(R.metalnessMap.channel),roughnessMapUv:Dt&&T(R.roughnessMap.channel),anisotropyMapUv:ce&&T(R.anisotropyMap.channel),clearcoatMapUv:qe&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&T(R.sheenRoughnessMap.channel),specularMapUv:Pe&&T(R.specularMap.channel),specularColorMapUv:De&&T(R.specularColorMap.channel),specularIntensityMapUv:Ze&&T(R.specularIntensityMap.channel),transmissionMapUv:j&&T(R.transmissionMap.channel),thicknessMapUv:Le&&T(R.thicknessMap.channel),alphaMapUv:Fe&&T(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(kt||Ye),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ue.attributes.uv&&(ut||Fe),fog:!!he,useFog:R.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ie,skinning:ie.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ut&&R.map.isVideoTexture===!0&&Ct.getTransfer(R.map.colorSpace)===Gt,decodeVideoTextureEmissive:Bt&&R.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(R.emissiveMap.colorSpace)===Gt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ya,flipSided:R.side===$n,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ne&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&R.extensions.multiDraw===!0||Ve)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return mt.vertexUv1s=p.has(1),mt.vertexUv2s=p.has(2),mt.vertexUv3s=p.has(3),p.clear(),mt}function x(R){const L=[];if(R.shaderID?L.push(R.shaderID):(L.push(R.customVertexShaderID),L.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)L.push(G),L.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(O(L,R),U(L,R),L.push(r.outputColorSpace)),L.push(R.customProgramCacheKey),L.join()}function O(R,L){R.push(L.precision),R.push(L.outputColorSpace),R.push(L.envMapMode),R.push(L.envMapCubeUVHeight),R.push(L.mapUv),R.push(L.alphaMapUv),R.push(L.lightMapUv),R.push(L.aoMapUv),R.push(L.bumpMapUv),R.push(L.normalMapUv),R.push(L.displacementMapUv),R.push(L.emissiveMapUv),R.push(L.metalnessMapUv),R.push(L.roughnessMapUv),R.push(L.anisotropyMapUv),R.push(L.clearcoatMapUv),R.push(L.clearcoatNormalMapUv),R.push(L.clearcoatRoughnessMapUv),R.push(L.iridescenceMapUv),R.push(L.iridescenceThicknessMapUv),R.push(L.sheenColorMapUv),R.push(L.sheenRoughnessMapUv),R.push(L.specularMapUv),R.push(L.specularColorMapUv),R.push(L.specularIntensityMapUv),R.push(L.transmissionMapUv),R.push(L.thicknessMapUv),R.push(L.combine),R.push(L.fogExp2),R.push(L.sizeAttenuation),R.push(L.morphTargetsCount),R.push(L.morphAttributeCount),R.push(L.numDirLights),R.push(L.numPointLights),R.push(L.numSpotLights),R.push(L.numSpotLightMaps),R.push(L.numHemiLights),R.push(L.numRectAreaLights),R.push(L.numDirLightShadows),R.push(L.numPointLightShadows),R.push(L.numSpotLightShadows),R.push(L.numSpotLightShadowsWithMaps),R.push(L.numLightProbes),R.push(L.shadowMapType),R.push(L.toneMapping),R.push(L.numClippingPlanes),R.push(L.numClipIntersection),R.push(L.depthPacking)}function U(R,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const L=b[R.type];let G;if(L){const K=ji[L];G=tT.clone(K.uniforms)}else G=R.uniforms;return G}function B(R,L){let G=v.get(L);return G!==void 0?++G.usedTimes:(G=new zR(r,L,R,c),g.push(G),v.set(L,G)),G}function F(R){if(--R.usedTimes===0){const L=g.indexOf(R);g[L]=g[g.length-1],g.pop(),v.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:D,acquireProgram:B,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:Z}}function kR(){let r=new WeakMap;function e(h){return r.has(h)}function n(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:s,update:l,dispose:c}}function jR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function W_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Y_(){const r=[];let e=0;const n=[],s=[],l=[];function c(){e=0,n.length=0,s.length=0,l.length=0}function h(v,_,y,b,T,M){let x=r[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:b,renderOrder:v.renderOrder,z:T,group:M},r[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=b,x.renderOrder=v.renderOrder,x.z=T,x.group=M),e++,x}function d(v,_,y,b,T,M){const x=h(v,_,y,b,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):n.push(x)}function m(v,_,y,b,T,M){const x=h(v,_,y,b,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):n.unshift(x)}function p(v,_){n.length>1&&n.sort(v||jR),s.length>1&&s.sort(_||W_),l.length>1&&l.sort(_||W_)}function g(){for(let v=e,_=r.length;v<_;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function XR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new Y_,r.set(s,[h])):l>=c.length?(h=new Y_,c.push(h)):h=c[l],h}function n(){r=new WeakMap}return{get:e,dispose:n}}function WR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new At};break;case"SpotLight":n={position:new $,direction:new $,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=n,n}}}function YR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let qR=0;function ZR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function KR(r){const e=new WR,n=YR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new tn,h=new tn;function d(p){let g=0,v=0,_=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,O=0,U=0,D=0,B=0,F=0,z=0;p.sort(ZR);for(let R=0,L=p.length;R<L;R++){const G=p[R],K=G.color,ie=G.intensity,he=G.distance;let ue=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===to?ue=G.shadow.map.texture:ue=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=K.r*ie,v+=K.g*ie,_+=K.b*ie;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],ie);z++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=ue,s.directionalShadowMatrix[y]=G.shadow.matrix,O++}s.directional[y]=N,y++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(K).multiplyScalar(ie),N.distance=he,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[T]=N;const H=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,H.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[T]=H.matrix,G.castShadow){const J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,s.spotShadow[T]=J,s.spotShadowMap[T]=ue,D++}T++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy(K).multiplyScalar(ie),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=N,M++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const H=G.shadow,J=n.get(G);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,s.pointShadow[b]=J,s.pointShadowMap[b]=ue,s.pointShadowMatrix[b]=G.shadow.matrix,U++}s.point[b]=N,b++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(ie),N.groundColor.copy(G.groundColor).multiplyScalar(ie),s.hemi[x]=N,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const Z=s.hash;(Z.directionalLength!==y||Z.pointLength!==b||Z.spotLength!==T||Z.rectAreaLength!==M||Z.hemiLength!==x||Z.numDirectionalShadows!==O||Z.numPointShadows!==U||Z.numSpotShadows!==D||Z.numSpotMaps!==B||Z.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+B-F,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,Z.directionalLength=y,Z.pointLength=b,Z.spotLength=T,Z.rectAreaLength=M,Z.hemiLength=x,Z.numDirectionalShadows=O,Z.numPointShadows=U,Z.numSpotShadows=D,Z.numSpotMaps=B,Z.numLightProbes=z,s.version=qR++)}function m(p,g){let v=0,_=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const U=p[x];if(U.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(U.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const D=s.point[_];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function q_(r){const e=new KR(r),n=[],s=[];function l(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function h(g){s.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function JR(r){let e=new WeakMap;function n(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new q_(r),e.set(l,[d])):c>=h.length?(d=new q_(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:n,dispose:s}}const QR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$R=`uniform sampler2D shadow_pass;
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
}`,eC=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],tC=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Z_=new tn,ll=new $,Rd=new $;function nC(r,e,n){let s=new kx;const l=new Et,c=new Et,h=new ln,d=new gT,m=new vT,p={},g=n.maxTextureSize,v={[hs]:$n,[$n]:hs,[ya]:ya},_=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:QR,fragmentShader:$R}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new bn;b.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ca(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let x=this.type;this.render=function(F,z,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===Vb&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=mu);const R=r.getRenderTarget(),L=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),K=r.state;K.setBlending(ba),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ie=x!==this.type;ie&&z.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(ue=>ue.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,ue=F.length;he<ue;he++){const N=F[he],H=N.shadow;if(H===void 0){rt("WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const J=H.getFrameExtents();if(l.multiply(J),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/J.x),l.x=c.x*J.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/J.y),l.y=c.y*J.y,H.mapSize.y=c.y)),H.map===null||ie===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===hl){if(N.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qi(l.x,l.y,{format:to,type:Aa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),H.map.texture.name=N.name+".shadowMap",H.map.depthTexture=new Ml(l.x,l.y,Xi),H.map.depthTexture.name=N.name+".shadowMapDepth",H.map.depthTexture.format=wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else{N.isPointLight?(H.map=new Hx(l.x),H.map.depthTexture=new pT(l.x,Zi)):(H.map=new qi(l.x,l.y),H.map.depthTexture=new Ml(l.x,l.y,Zi)),H.map.depthTexture.name=N.name+".shadowMap",H.map.depthTexture.format=wa;const Ee=r.state.buffers.depth.getReversed();this.type===mu?(H.map.depthTexture.compareFunction=Ee?kp:Vp,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn)}H.camera.updateProjectionMatrix()}const Se=H.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<Se;Ee++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Ee),r.clear();else{Ee===0&&(r.setRenderTarget(H.map),r.clear());const P=H.getViewport(Ee);h.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),K.viewport(h)}if(N.isPointLight){const P=H.camera,ee=H.matrix,_e=N.distance||P.far;_e!==P.far&&(P.far=_e,P.updateProjectionMatrix()),ll.setFromMatrixPosition(N.matrixWorld),P.position.copy(ll),Rd.copy(P.position),Rd.add(eC[Ee]),P.up.copy(tC[Ee]),P.lookAt(Rd),P.updateMatrixWorld(),ee.makeTranslation(-ll.x,-ll.y,-ll.z),Z_.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Z_,P.coordinateSystem,P.reversedDepth)}else H.updateMatrices(N);s=H.getFrustum(),D(z,Z,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===hl&&O(H,Z),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(R,L,G)};function O(F,z){const Z=e.update(T);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new qi(l.x,l.y,{format:to,type:Aa})),_.uniforms.shadow_pass.value=F.map.depthTexture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,Z,_,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,Z,y,T,null)}function U(F,z,Z,R){let L=null;const G=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)L=G;else if(L=Z.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=L.uuid,ie=z.uuid;let he=p[K];he===void 0&&(he={},p[K]=he);let ue=he[ie];ue===void 0&&(ue=L.clone(),he[ie]=ue,z.addEventListener("dispose",B)),L=ue}if(L.visible=z.visible,L.wireframe=z.wireframe,R===hl?L.side=z.shadowSide!==null?z.shadowSide:z.side:L.side=z.shadowSide!==null?z.shadowSide:v[z.side],L.alphaMap=z.alphaMap,L.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,L.map=z.map,L.clipShadows=z.clipShadows,L.clippingPlanes=z.clippingPlanes,L.clipIntersection=z.clipIntersection,L.displacementMap=z.displacementMap,L.displacementScale=z.displacementScale,L.displacementBias=z.displacementBias,L.wireframeLinewidth=z.wireframeLinewidth,L.linewidth=z.linewidth,Z.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const K=r.properties.get(L);K.light=Z}return L}function D(F,z,Z,R,L){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&L===hl)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const ie=e.update(F),he=F.material;if(Array.isArray(he)){const ue=ie.groups;for(let N=0,H=ue.length;N<H;N++){const J=ue[N],Se=he[J.materialIndex];if(Se&&Se.visible){const Ee=U(F,Se,R,L);F.onBeforeShadow(r,F,z,Z,ie,Ee,J),r.renderBufferDirect(Z,null,ie,Ee,F,J),F.onAfterShadow(r,F,z,Z,ie,Ee,J)}}}else if(he.visible){const ue=U(F,he,R,L);F.onBeforeShadow(r,F,z,Z,ie,ue,null),r.renderBufferDirect(Z,null,ie,ue,F,null),F.onAfterShadow(r,F,z,Z,ie,ue,null)}}const K=F.children;for(let ie=0,he=K.length;ie<he;ie++)D(K[ie],z,Z,R,L)}function B(F){F.target.removeEventListener("dispose",B);for(const Z in p){const R=p[Z],L=F.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}const iC={[Fd]:Hd,[Gd]:jd,[Vd]:Xd,[$r]:kd,[Hd]:Fd,[jd]:Gd,[Xd]:Vd,[kd]:$r};function aC(r,e){function n(){let j=!1;const Le=new ln;let we=null;const Fe=new ln(0,0,0,0);return{setMask:function(Ae){we!==Ae&&!j&&(r.colorMask(Ae,Ae,Ae,Ae),we=Ae)},setLocked:function(Ae){j=Ae},setClear:function(Ae,xe,Ne,Qe,mt){mt===!0&&(Ae*=Qe,xe*=Qe,Ne*=Qe),Le.set(Ae,xe,Ne,Qe),Fe.equals(Le)===!1&&(r.clearColor(Ae,xe,Ne,Qe),Fe.copy(Le))},reset:function(){j=!1,we=null,Fe.set(-1,0,0,0)}}}function s(){let j=!1,Le=!1,we=null,Fe=null,Ae=null;return{setReversed:function(xe){if(Le!==xe){const Ne=e.get("EXT_clip_control");xe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const Qe=Ae;Ae=null,this.setClear(Qe)}},getReversed:function(){return Le},setTest:function(xe){xe?fe(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(xe){we!==xe&&!j&&(r.depthMask(xe),we=xe)},setFunc:function(xe){if(Le&&(xe=iC[xe]),Fe!==xe){switch(xe){case Fd:r.depthFunc(r.NEVER);break;case Hd:r.depthFunc(r.ALWAYS);break;case Gd:r.depthFunc(r.LESS);break;case $r:r.depthFunc(r.LEQUAL);break;case Vd:r.depthFunc(r.EQUAL);break;case kd:r.depthFunc(r.GEQUAL);break;case jd:r.depthFunc(r.GREATER);break;case Xd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=xe}},setLocked:function(xe){j=xe},setClear:function(xe){Ae!==xe&&(Le&&(xe=1-xe),r.clearDepth(xe),Ae=xe)},reset:function(){j=!1,we=null,Fe=null,Ae=null,Le=!1}}}function l(){let j=!1,Le=null,we=null,Fe=null,Ae=null,xe=null,Ne=null,Qe=null,mt=null;return{setTest:function(_t){j||(_t?fe(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(_t){Le!==_t&&!j&&(r.stencilMask(_t),Le=_t)},setFunc:function(_t,cn,Vn){(we!==_t||Fe!==cn||Ae!==Vn)&&(r.stencilFunc(_t,cn,Vn),we=_t,Fe=cn,Ae=Vn)},setOp:function(_t,cn,Vn){(xe!==_t||Ne!==cn||Qe!==Vn)&&(r.stencilOp(_t,cn,Vn),xe=_t,Ne=cn,Qe=Vn)},setLocked:function(_t){j=_t},setClear:function(_t){mt!==_t&&(r.clearStencil(_t),mt=_t)},reset:function(){j=!1,Le=null,we=null,Fe=null,Ae=null,xe=null,Ne=null,Qe=null,mt=null}}}const c=new n,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,U=null,D=null,B=null,F=null,z=new At(0,0,0),Z=0,R=!1,L=null,G=null,K=null,ie=null,he=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),N=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),N=H>=2);let Se=null,Ee={};const P=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),_e=new ln().fromArray(P),Re=new ln().fromArray(ee);function Ge(j,Le,we,Fe){const Ae=new Uint8Array(4),xe=r.createTexture();r.bindTexture(j,xe),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<we;Ne++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Le+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return xe}const ae={};ae[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),fe(r.DEPTH_TEST),h.setFunc($r),tt(!1),kt(Yv),fe(r.CULL_FACE),dt(ba);function fe(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function Ie(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function je(j,Le){return v[j]!==Le?(r.bindFramebuffer(j,Le),v[j]=Le,j===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Le),j===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ve(j,Le){let we=y,Fe=!1;if(j){we=_.get(Le),we===void 0&&(we=[],_.set(Le,we));const Ae=j.textures;if(we.length!==Ae.length||we[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,Ne=Ae.length;xe<Ne;xe++)we[xe]=r.COLOR_ATTACHMENT0+xe;we.length=Ae.length,Fe=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(we)}function ut(j){return b!==j?(r.useProgram(j),b=j,!0):!1}const Zt={[Hs]:r.FUNC_ADD,[jb]:r.FUNC_SUBTRACT,[Xb]:r.FUNC_REVERSE_SUBTRACT};Zt[Wb]=r.MIN,Zt[Yb]=r.MAX;const gt={[qb]:r.ZERO,[Zb]:r.ONE,[Kb]:r.SRC_COLOR,[Bd]:r.SRC_ALPHA,[nE]:r.SRC_ALPHA_SATURATE,[eE]:r.DST_COLOR,[Qb]:r.DST_ALPHA,[Jb]:r.ONE_MINUS_SRC_COLOR,[zd]:r.ONE_MINUS_SRC_ALPHA,[tE]:r.ONE_MINUS_DST_COLOR,[$b]:r.ONE_MINUS_DST_ALPHA,[iE]:r.CONSTANT_COLOR,[aE]:r.ONE_MINUS_CONSTANT_COLOR,[sE]:r.CONSTANT_ALPHA,[rE]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(j,Le,we,Fe,Ae,xe,Ne,Qe,mt,_t){if(j===ba){T===!0&&(Ie(r.BLEND),T=!1);return}if(T===!1&&(fe(r.BLEND),T=!0),j!==kb){if(j!==M||_t!==R){if((x!==Hs||D!==Hs)&&(r.blendEquation(r.FUNC_ADD),x=Hs,D=Hs),_t)switch(j){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Id:r.blendFunc(r.ONE,r.ONE);break;case qv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",j);break}else switch(j){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Id:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case qv:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zv:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",j);break}O=null,U=null,B=null,F=null,z.set(0,0,0),Z=0,M=j,R=_t}return}Ae=Ae||Le,xe=xe||we,Ne=Ne||Fe,(Le!==x||Ae!==D)&&(r.blendEquationSeparate(Zt[Le],Zt[Ae]),x=Le,D=Ae),(we!==O||Fe!==U||xe!==B||Ne!==F)&&(r.blendFuncSeparate(gt[we],gt[Fe],gt[xe],gt[Ne]),O=we,U=Fe,B=xe,F=Ne),(Qe.equals(z)===!1||mt!==Z)&&(r.blendColor(Qe.r,Qe.g,Qe.b,mt),z.copy(Qe),Z=mt),M=j,R=!1}function wt(j,Le){j.side===ya?Ie(r.CULL_FACE):fe(r.CULL_FACE);let we=j.side===$n;Le&&(we=!we),tt(we),j.blending===Kr&&j.transparent===!1?dt(ba):dt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),h.setFunc(j.depthFunc),h.setTest(j.depthTest),h.setMask(j.depthWrite),c.setMask(j.colorWrite);const Fe=j.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Bt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(j){L!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),L=j)}function kt(j){j!==Hb?(fe(r.CULL_FACE),j!==G&&(j===Yv?r.cullFace(r.BACK):j===Gb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),G=j}function k(j){j!==K&&(N&&r.lineWidth(j),K=j)}function Bt(j,Le,we){j?(fe(r.POLYGON_OFFSET_FILL),(ie!==Le||he!==we)&&(r.polygonOffset(Le,we),ie=Le,he=we)):Ie(r.POLYGON_OFFSET_FILL)}function vt(j){j?fe(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function Dt(j){j===void 0&&(j=r.TEXTURE0+ue-1),Se!==j&&(r.activeTexture(j),Se=j)}function Ye(j,Le,we){we===void 0&&(Se===null?we=r.TEXTURE0+ue-1:we=Se);let Fe=Ee[we];Fe===void 0&&(Fe={type:void 0,texture:void 0},Ee[we]=Fe),(Fe.type!==j||Fe.texture!==Le)&&(Se!==we&&(r.activeTexture(we),Se=we),r.bindTexture(j,Le||ae[j]),Fe.type=j,Fe.texture=Le)}function I(){const j=Ee[Se];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function me(){try{r.texSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function be(){try{r.texSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Ue(){try{r.texStorage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function ye(){try{r.texStorage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Oe(){try{r.texImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function de(){try{r.texImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function ge(j){_e.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),_e.copy(j))}function Ce(j){Re.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Re.copy(j))}function Pe(j,Le){let we=p.get(Le);we===void 0&&(we=new WeakMap,p.set(Le,we));let Fe=we.get(j);Fe===void 0&&(Fe=r.getUniformBlockIndex(Le,j.name),we.set(j,Fe))}function De(j,Le){const Fe=p.get(Le).get(j);m.get(Le)!==Fe&&(r.uniformBlockBinding(Le,Fe,j.__bindingPointIndex),m.set(Le,Fe))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Se=null,Ee={},v={},_=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,U=null,D=null,B=null,F=null,z=new At(0,0,0),Z=0,R=!1,L=null,G=null,K=null,ie=null,he=null,_e.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:fe,disable:Ie,bindFramebuffer:je,drawBuffers:Ve,useProgram:ut,setBlending:dt,setMaterial:wt,setFlipSided:tt,setCullFace:kt,setLineWidth:k,setPolygonOffset:Bt,setScissorTest:vt,activeTexture:Dt,bindTexture:Ye,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Oe,texImage3D:de,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:Ue,texStorage3D:ye,texSubImage2D:me,texSubImage3D:be,compressedTexSubImage2D:ce,compressedTexSubImage3D:qe,scissor:ge,viewport:Ce,reset:Ze}}function sC(r,e,n,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Et,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,E){return y?new OffscreenCanvas(I,E):Au("canvas")}function T(I,E,W){let me=1;const be=Ye(I);if((be.width>W||be.height>W)&&(me=W/Math.max(be.width,be.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ce=Math.floor(me*be.width),qe=Math.floor(me*be.height);v===void 0&&(v=b(ce,qe));const Ue=E?b(ce,qe):v;return Ue.width=ce,Ue.height=qe,Ue.getContext("2d").drawImage(I,0,0,ce,qe),rt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ce+"x"+qe+")."),Ue}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),I;return I}function M(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(I,E,W,me,be=!1){if(I!==null){if(r[I]!==void 0)return r[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=E;if(E===r.RED&&(W===r.FLOAT&&(ce=r.R32F),W===r.HALF_FLOAT&&(ce=r.R16F),W===r.UNSIGNED_BYTE&&(ce=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.R8UI),W===r.UNSIGNED_SHORT&&(ce=r.R16UI),W===r.UNSIGNED_INT&&(ce=r.R32UI),W===r.BYTE&&(ce=r.R8I),W===r.SHORT&&(ce=r.R16I),W===r.INT&&(ce=r.R32I)),E===r.RG&&(W===r.FLOAT&&(ce=r.RG32F),W===r.HALF_FLOAT&&(ce=r.RG16F),W===r.UNSIGNED_BYTE&&(ce=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RG8UI),W===r.UNSIGNED_SHORT&&(ce=r.RG16UI),W===r.UNSIGNED_INT&&(ce=r.RG32UI),W===r.BYTE&&(ce=r.RG8I),W===r.SHORT&&(ce=r.RG16I),W===r.INT&&(ce=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),W===r.UNSIGNED_INT&&(ce=r.RGB32UI),W===r.BYTE&&(ce=r.RGB8I),W===r.SHORT&&(ce=r.RGB16I),W===r.INT&&(ce=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),W===r.UNSIGNED_INT&&(ce=r.RGBA32UI),W===r.BYTE&&(ce=r.RGBA8I),W===r.SHORT&&(ce=r.RGBA16I),W===r.INT&&(ce=r.RGBA32I)),E===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),E===r.RGBA){const qe=be?Eu:Ct.getTransfer(me);W===r.FLOAT&&(ce=r.RGBA32F),W===r.HALF_FLOAT&&(ce=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ce=qe===Gt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function D(I,E){let W;return I?E===null||E===Zi||E===xl?W=r.DEPTH24_STENCIL8:E===Xi?W=r.DEPTH32F_STENCIL8:E===_l&&(W=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===xl?W=r.DEPTH_COMPONENT24:E===Xi?W=r.DEPTH_COMPONENT32F:E===_l&&(W=r.DEPTH_COMPONENT16),W}function B(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Pn&&I.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function F(I){const E=I.target;E.removeEventListener("dispose",F),Z(E),E.isVideoTexture&&g.delete(E)}function z(I){const E=I.target;E.removeEventListener("dispose",z),L(E)}function Z(I){const E=s.get(I);if(E.__webglInit===void 0)return;const W=I.source,me=_.get(W);if(me){const be=me[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&R(I),Object.keys(me).length===0&&_.delete(W)}s.remove(I)}function R(I){const E=s.get(I);r.deleteTexture(E.__webglTexture);const W=I.source,me=_.get(W);delete me[E.__cacheKey],h.memory.textures--}function L(I){const E=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let be=0;be<E.__webglFramebuffer[me].length;be++)r.deleteFramebuffer(E.__webglFramebuffer[me][be]);else r.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)r.deleteFramebuffer(E.__webglFramebuffer[me]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=I.textures;for(let me=0,be=W.length;me<be;me++){const ce=s.get(W[me]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),h.memory.textures--),s.remove(W[me])}s.remove(I)}let G=0;function K(){G=0}function ie(){const I=G;return I>=l.maxTextures&&rt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),G+=1,I}function he(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ue(I,E){const W=s.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const me=I.image;if(me===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(W,I,E);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function N(I,E){const W=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ae(W,I,E);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function H(I,E){const W=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ae(W,I,E);return}n.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function J(I,E){const W=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){fe(W,I,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const Se={[qd]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[Zd]:r.MIRRORED_REPEAT},Ee={[Pn]:r.NEAREST,[cE]:r.NEAREST_MIPMAP_NEAREST,[Fc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Kh]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},P={[dE]:r.NEVER,[_E]:r.ALWAYS,[pE]:r.LESS,[Vp]:r.LEQUAL,[mE]:r.EQUAL,[kp]:r.GEQUAL,[gE]:r.GREATER,[vE]:r.NOTEQUAL};function ee(I,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Kh||E.magFilter===Fc||E.magFilter===Vs||E.minFilter===Fn||E.minFilter===Kh||E.minFilter===Fc||E.minFilter===Vs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Se[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Se[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Se[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Ee[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Fc&&E.minFilter!==Vs||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _e(I,E){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",F));const me=E.source;let be=_.get(me);be===void 0&&(be={},_.set(me,be));const ce=he(E);if(ce!==I.__cacheKey){be[ce]===void 0&&(be[ce]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,W=!0),be[ce].usedTimes++;const qe=be[I.__cacheKey];qe!==void 0&&(be[I.__cacheKey].usedTimes--,qe.usedTimes===0&&R(E)),I.__cacheKey=ce,I.__webglTexture=be[ce].texture}return W}function Re(I,E,W){return Math.floor(Math.floor(I/W)/E)}function Ge(I,E,W,me){const ce=I.updateRanges;if(ce.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,me,E.data);else{ce.sort((de,ge)=>de.start-ge.start);let qe=0;for(let de=1;de<ce.length;de++){const ge=ce[qe],Ce=ce[de],Pe=ge.start+ge.count,De=Re(Ce.start,E.width,4),Ze=Re(ge.start,E.width,4);Ce.start<=Pe+1&&De===Ze&&Re(Ce.start+Ce.count-1,E.width,4)===De?ge.count=Math.max(ge.count,Ce.start+Ce.count-ge.start):(++qe,ce[qe]=Ce)}ce.length=qe+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let de=0,ge=ce.length;de<ge;de++){const Ce=ce[de],Pe=Math.floor(Ce.start/4),De=Math.ceil(Ce.count/4),Ze=Pe%E.width,j=Math.floor(Pe/E.width),Le=De,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),n.texSubImage2D(r.TEXTURE_2D,0,Ze,j,Le,we,W,me,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function ae(I,E,W){let me=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=r.TEXTURE_3D);const be=_e(I,E),ce=E.source;n.bindTexture(me,I.__webglTexture,r.TEXTURE0+W);const qe=s.get(ce);if(ce.version!==qe.__version||be===!0){n.activeTexture(r.TEXTURE0+W);const Ue=Ct.getPrimaries(Ct.workingColorSpace),ye=E.colorSpace===us?null:Ct.getPrimaries(E.colorSpace),Oe=E.colorSpace===us||Ue===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let de=T(E.image,!1,l.maxTextureSize);de=Dt(E,de);const ge=c.convert(E.format,E.colorSpace),Ce=c.convert(E.type);let Pe=U(E.internalFormat,ge,Ce,E.colorSpace,E.isVideoTexture);ee(me,E);let De;const Ze=E.mipmaps,j=E.isVideoTexture!==!0,Le=qe.__version===void 0||be===!0,we=ce.dataReady,Fe=B(E,de);if(E.isDepthTexture)Pe=D(E.format===ks,E.type),Le&&(j?n.texStorage2D(r.TEXTURE_2D,1,Pe,de.width,de.height):n.texImage2D(r.TEXTURE_2D,0,Pe,de.width,de.height,0,ge,Ce,null));else if(E.isDataTexture)if(Ze.length>0){j&&Le&&n.texStorage2D(r.TEXTURE_2D,Fe,Pe,Ze[0].width,Ze[0].height);for(let Ae=0,xe=Ze.length;Ae<xe;Ae++)De=Ze[Ae],j?we&&n.texSubImage2D(r.TEXTURE_2D,Ae,0,0,De.width,De.height,ge,Ce,De.data):n.texImage2D(r.TEXTURE_2D,Ae,Pe,De.width,De.height,0,ge,Ce,De.data);E.generateMipmaps=!1}else j?(Le&&n.texStorage2D(r.TEXTURE_2D,Fe,Pe,de.width,de.height),we&&Ge(E,de,ge,Ce)):n.texImage2D(r.TEXTURE_2D,0,Pe,de.width,de.height,0,ge,Ce,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Pe,Ze[0].width,Ze[0].height,de.depth);for(let Ae=0,xe=Ze.length;Ae<xe;Ae++)if(De=Ze[Ae],E.format!==Ii)if(ge!==null)if(j){if(we)if(E.layerUpdates.size>0){const Ne=A_(De.width,De.height,E.format,E.type);for(const Qe of E.layerUpdates){const mt=De.data.subarray(Qe*Ne/De.data.BYTES_PER_ELEMENT,(Qe+1)*Ne/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,Qe,De.width,De.height,1,ge,mt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,De.width,De.height,de.depth,ge,De.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ae,Pe,De.width,De.height,de.depth,0,De.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?we&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,De.width,De.height,de.depth,ge,Ce,De.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Ae,Pe,De.width,De.height,de.depth,0,ge,Ce,De.data)}else{j&&Le&&n.texStorage2D(r.TEXTURE_2D,Fe,Pe,Ze[0].width,Ze[0].height);for(let Ae=0,xe=Ze.length;Ae<xe;Ae++)De=Ze[Ae],E.format!==Ii?ge!==null?j?we&&n.compressedTexSubImage2D(r.TEXTURE_2D,Ae,0,0,De.width,De.height,ge,De.data):n.compressedTexImage2D(r.TEXTURE_2D,Ae,Pe,De.width,De.height,0,De.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?we&&n.texSubImage2D(r.TEXTURE_2D,Ae,0,0,De.width,De.height,ge,Ce,De.data):n.texImage2D(r.TEXTURE_2D,Ae,Pe,De.width,De.height,0,ge,Ce,De.data)}else if(E.isDataArrayTexture)if(j){if(Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Pe,de.width,de.height,de.depth),we)if(E.layerUpdates.size>0){const Ae=A_(de.width,de.height,E.format,E.type);for(const xe of E.layerUpdates){const Ne=de.data.subarray(xe*Ae/de.data.BYTES_PER_ELEMENT,(xe+1)*Ae/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,de.width,de.height,1,ge,Ce,Ne)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ge,Ce,de.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,ge,Ce,de.data);else if(E.isData3DTexture)j?(Le&&n.texStorage3D(r.TEXTURE_3D,Fe,Pe,de.width,de.height,de.depth),we&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ge,Ce,de.data)):n.texImage3D(r.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,ge,Ce,de.data);else if(E.isFramebufferTexture){if(Le)if(j)n.texStorage2D(r.TEXTURE_2D,Fe,Pe,de.width,de.height);else{let Ae=de.width,xe=de.height;for(let Ne=0;Ne<Fe;Ne++)n.texImage2D(r.TEXTURE_2D,Ne,Pe,Ae,xe,0,ge,Ce,null),Ae>>=1,xe>>=1}}else if(Ze.length>0){if(j&&Le){const Ae=Ye(Ze[0]);n.texStorage2D(r.TEXTURE_2D,Fe,Pe,Ae.width,Ae.height)}for(let Ae=0,xe=Ze.length;Ae<xe;Ae++)De=Ze[Ae],j?we&&n.texSubImage2D(r.TEXTURE_2D,Ae,0,0,ge,Ce,De):n.texImage2D(r.TEXTURE_2D,Ae,Pe,ge,Ce,De);E.generateMipmaps=!1}else if(j){if(Le){const Ae=Ye(de);n.texStorage2D(r.TEXTURE_2D,Fe,Pe,Ae.width,Ae.height)}we&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Ce,de)}else n.texImage2D(r.TEXTURE_2D,0,Pe,ge,Ce,de);M(E)&&x(me),qe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function fe(I,E,W){if(E.image.length!==6)return;const me=_e(I,E),be=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+W);const ce=s.get(be);if(be.version!==ce.__version||me===!0){n.activeTexture(r.TEXTURE0+W);const qe=Ct.getPrimaries(Ct.workingColorSpace),Ue=E.colorSpace===us?null:Ct.getPrimaries(E.colorSpace),ye=E.colorSpace===us||qe===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let xe=0;xe<6;xe++)!Oe&&!de?ge[xe]=T(E.image[xe],!0,l.maxCubemapSize):ge[xe]=de?E.image[xe].image:E.image[xe],ge[xe]=Dt(E,ge[xe]);const Ce=ge[0],Pe=c.convert(E.format,E.colorSpace),De=c.convert(E.type),Ze=U(E.internalFormat,Pe,De,E.colorSpace),j=E.isVideoTexture!==!0,Le=ce.__version===void 0||me===!0,we=be.dataReady;let Fe=B(E,Ce);ee(r.TEXTURE_CUBE_MAP,E);let Ae;if(Oe){j&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,Ze,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){Ae=ge[xe].mipmaps;for(let Ne=0;Ne<Ae.length;Ne++){const Qe=Ae[Ne];E.format!==Ii?Pe!==null?j?we&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne,0,0,Qe.width,Qe.height,Pe,Qe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne,Ze,Qe.width,Qe.height,0,Qe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne,0,0,Qe.width,Qe.height,Pe,De,Qe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne,Ze,Qe.width,Qe.height,0,Pe,De,Qe.data)}}}else{if(Ae=E.mipmaps,j&&Le){Ae.length>0&&Fe++;const xe=Ye(ge[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,Ze,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(de){j?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ge[xe].width,ge[xe].height,Pe,De,ge[xe].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,ge[xe].width,ge[xe].height,0,Pe,De,ge[xe].data);for(let Ne=0;Ne<Ae.length;Ne++){const mt=Ae[Ne].image[xe].image;j?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne+1,0,0,mt.width,mt.height,Pe,De,mt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne+1,Ze,mt.width,mt.height,0,Pe,De,mt.data)}}else{j?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Pe,De,ge[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,Pe,De,ge[xe]);for(let Ne=0;Ne<Ae.length;Ne++){const Qe=Ae[Ne];j?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne+1,0,0,Pe,De,Qe.image[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ne+1,Ze,Pe,De,Qe.image[xe])}}}M(E)&&x(r.TEXTURE_CUBE_MAP),ce.__version=be.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ie(I,E,W,me,be,ce){const qe=c.convert(W.format,W.colorSpace),Ue=c.convert(W.type),ye=U(W.internalFormat,qe,Ue,W.colorSpace),Oe=s.get(E),de=s.get(W);if(de.__renderTarget=E,!Oe.__hasExternalTextures){const ge=Math.max(1,E.width>>ce),Ce=Math.max(1,E.height>>ce);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?n.texImage3D(be,ce,ye,ge,Ce,E.depth,0,qe,Ue,null):n.texImage2D(be,ce,ye,ge,Ce,0,qe,Ue,null)}n.bindFramebuffer(r.FRAMEBUFFER,I),Bt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,be,de.__webglTexture,0,k(E)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,be,de.__webglTexture,ce),n.bindFramebuffer(r.FRAMEBUFFER,null)}function je(I,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const me=E.depthTexture,be=me&&me.isDepthTexture?me.type:null,ce=D(E.stencilBuffer,be),qe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Bt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),ce,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ce,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,I)}else{const me=E.textures;for(let be=0;be<me.length;be++){const ce=me[be],qe=c.convert(ce.format,ce.colorSpace),Ue=c.convert(ce.type),ye=U(ce.internalFormat,qe,Ue,ce.colorSpace);Bt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),ye,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),ye,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ye,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(I,E,W){const me=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=s.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),ee(r.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=c.convert(E.depthTexture.format),de=c.convert(E.depthTexture.type);let ge;E.depthTexture.format===wa?ge=r.DEPTH_COMPONENT24:E.depthTexture.format===ks&&(ge=r.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ge,E.width,E.height,0,Oe,de,null)}}else ue(E.depthTexture,0);const ce=be.__webglTexture,qe=k(E),Ue=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,ye=E.depthTexture.format===ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===wa)Bt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,Ue,ce,0,qe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,Ue,ce,0);else if(E.depthTexture.format===ks)Bt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,Ue,ce,0,qe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,Ue,ce,0);else throw new Error("Unknown depthTexture format")}function ut(I){const E=s.get(I),W=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",be)};me.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=me}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let me=0;me<6;me++)Ve(E.__webglFramebuffer[me],I,me);else{const me=I.texture.mipmaps;me&&me.length>0?Ve(E.__webglFramebuffer[0],I,0):Ve(E.__webglFramebuffer,I,0)}else if(W){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=r.createRenderbuffer(),je(E.__webglDepthbuffer[me],I,!1);else{const be=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,ce)}}else{const me=I.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),je(E.__webglDepthbuffer,I,!1);else{const be=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,ce)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(I,E,W){const me=s.get(I);E!==void 0&&Ie(me.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ut(I)}function gt(I){const E=I.texture,W=s.get(I),me=s.get(E);I.addEventListener("dispose",z);const be=I.textures,ce=I.isWebGLCubeRenderTarget===!0,qe=be.length>1;if(qe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=E.version,h.memory.textures++),ce){W.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ue]=[];for(let ye=0;ye<E.mipmaps.length;ye++)W.__webglFramebuffer[Ue][ye]=r.createFramebuffer()}else W.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)W.__webglFramebuffer[Ue]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(qe)for(let Ue=0,ye=be.length;Ue<ye;Ue++){const Oe=s.get(be[Ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),h.memory.textures++)}if(I.samples>0&&Bt(I)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ue=0;Ue<be.length;Ue++){const ye=be[Ue];W.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ue]);const Oe=c.convert(ye.format,ye.colorSpace),de=c.convert(ye.type),ge=U(ye.internalFormat,Oe,de,ye.colorSpace,I.isXRRenderTarget===!0),Ce=k(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ge,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),je(W.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){n.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ee(r.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ie(W.__webglFramebuffer[Ue][ye],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,ye);else Ie(W.__webglFramebuffer[Ue],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(E)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ue=0,ye=be.length;Ue<ye;Ue++){const Oe=be[Ue],de=s.get(Oe);let ge=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ge,de.__webglTexture),ee(ge,Oe),Ie(W.__webglFramebuffer,I,Oe,r.COLOR_ATTACHMENT0+Ue,ge,0),M(Oe)&&x(ge)}n.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ue,me.__webglTexture),ee(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Ie(W.__webglFramebuffer[ye],I,E,r.COLOR_ATTACHMENT0,Ue,ye);else Ie(W.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,Ue,0);M(E)&&x(Ue),n.unbindTexture()}I.depthBuffer&&ut(I)}function dt(I){const E=I.textures;for(let W=0,me=E.length;W<me;W++){const be=E[W];if(M(be)){const ce=O(I),qe=s.get(be).__webglTexture;n.bindTexture(ce,qe),x(ce),n.unbindTexture()}}}const wt=[],tt=[];function kt(I){if(I.samples>0){if(Bt(I)===!1){const E=I.textures,W=I.width,me=I.height;let be=r.COLOR_BUFFER_BIT;const ce=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=s.get(I),Ue=E.length>1;if(Ue)for(let Oe=0;Oe<E.length;Oe++)n.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const ye=I.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Oe]);const de=s.get(E[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,de,0)}r.blitFramebuffer(0,0,W,me,0,0,W,me,be,r.NEAREST),m===!0&&(wt.length=0,tt.length=0,wt.push(r.COLOR_ATTACHMENT0+Oe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(wt.push(ce),tt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let Oe=0;Oe<E.length;Oe++){n.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,qe.__webglColorRenderbuffer[Oe]);const de=s.get(E[Oe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,de,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function k(I){return Math.min(l.maxSamples,I.samples)}function Bt(I){const E=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(I){const E=h.render.frame;g.get(I)!==E&&(g.set(I,E),I.update())}function Dt(I,E){const W=I.colorSpace,me=I.format,be=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==no&&W!==us&&(Ct.getTransfer(W)===Gt?(me!==Ii||be!==Ti)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",W)),E}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=K,this.setTexture2D=ue,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Zt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function rC(r,e){function n(s,l=us){let c;const h=Ct.getTransfer(l);if(s===Ti)return r.UNSIGNED_BYTE;if(s===Bp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===zp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ax)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===wx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ex)return r.BYTE;if(s===Tx)return r.SHORT;if(s===_l)return r.UNSIGNED_SHORT;if(s===Ip)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===Rx)return r.ALPHA;if(s===Cx)return r.RGB;if(s===Ii)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===ks)return r.DEPTH_STENCIL;if(s===Dx)return r.RED;if(s===Fp)return r.RED_INTEGER;if(s===to)return r.RG;if(s===Hp)return r.RG_INTEGER;if(s===Gp)return r.RGBA_INTEGER;if(s===gu||s===vu||s===_u||s===xu)if(h===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kd||s===Jd||s===Qd||s===$d)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ep||s===tp||s===np||s===ip||s===ap||s===sp||s===rp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ep||s===tp)return h===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===np)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ip)return c.COMPRESSED_R11_EAC;if(s===ap)return c.COMPRESSED_SIGNED_R11_EAC;if(s===sp)return c.COMPRESSED_RG11_EAC;if(s===rp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===op||s===lp||s===cp||s===up||s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===Sp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===op)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===up)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_p)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sp)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yp||s===Mp||s===bp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===yp)return h===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ep||s===Tp||s===Ap||s===wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ep)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const oC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lC=`
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

}`;class cC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new Xx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Ki({vertexShader:oC,fragmentShader:lC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ca(new Pu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uC extends ao{constructor(e,n){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,_=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new cC,x={},O=n.getContextAttributes();let U=null,D=null;const B=[],F=[],z=new Et;let Z=null;const R=new Ei;R.viewport=new ln;const L=new Ei;L.viewport=new ln;const G=[R,L],K=new _T;let ie=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=B[ae];return fe===void 0&&(fe=new vd,B[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=B[ae];return fe===void 0&&(fe=new vd,B[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=B[ae];return fe===void 0&&(fe=new vd,B[ae]=fe),fe.getHandSpace()};function ue(ae){const fe=F.indexOf(ae.inputSource);if(fe===-1)return;const Ie=B[fe];Ie!==void 0&&(Ie.update(ae.inputSource,ae.frame,p||h),Ie.dispatchEvent({type:ae.type,data:ae.inputSource}))}function N(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",H);for(let ae=0;ae<B.length;ae++){const fe=F[ae];fe!==null&&(F[ae]=null,B[ae].disconnect(fe))}ie=null,he=null,M.reset();for(const ae in x)delete x[ae];e.setRenderTarget(U),y=null,_=null,v=null,l=null,D=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",N),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await n.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,je=null,Ve=null;O.depth&&(Ve=O.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ie=O.stencil?ks:wa,je=O.stencil?xl:Zi);const ut={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ut),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new qi(_.textureWidth,_.textureHeight,{format:Ii,type:Ti,depthTexture:new Ml(_.textureWidth,_.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ie={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Ie),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new qi(y.framebufferWidth,y.framebufferHeight,{format:Ii,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ae){for(let fe=0;fe<ae.removed.length;fe++){const Ie=ae.removed[fe],je=F.indexOf(Ie);je>=0&&(F[je]=null,B[je].disconnect(Ie))}for(let fe=0;fe<ae.added.length;fe++){const Ie=ae.added[fe];let je=F.indexOf(Ie);if(je===-1){for(let ut=0;ut<B.length;ut++)if(ut>=F.length){F.push(Ie),je=ut;break}else if(F[ut]===null){F[ut]=Ie,je=ut;break}if(je===-1)break}const Ve=B[je];Ve&&Ve.connect(Ie)}}const J=new $,Se=new $;function Ee(ae,fe,Ie){J.setFromMatrixPosition(fe.matrixWorld),Se.setFromMatrixPosition(Ie.matrixWorld);const je=J.distanceTo(Se),Ve=fe.projectionMatrix.elements,ut=Ie.projectionMatrix.elements,Zt=Ve[14]/(Ve[10]-1),gt=Ve[14]/(Ve[10]+1),dt=(Ve[9]+1)/Ve[5],wt=(Ve[9]-1)/Ve[5],tt=(Ve[8]-1)/Ve[0],kt=(ut[8]+1)/ut[0],k=Zt*tt,Bt=Zt*kt,vt=je/(-tt+kt),Dt=vt*-tt;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Dt),ae.translateZ(vt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ve[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Zt+vt,I=gt+vt,E=k-Dt,W=Bt+(je-Dt),me=dt*gt/I*Ye,be=wt*gt/I*Ye;ae.projectionMatrix.makePerspective(E,W,me,be,Ye,I),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function P(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let fe=ae.near,Ie=ae.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Ie=M.depthFar)),K.near=L.near=R.near=fe,K.far=L.far=R.far=Ie,(ie!==K.near||he!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ie=K.near,he=K.far),K.layers.mask=ae.layers.mask|6,R.layers.mask=K.layers.mask&3,L.layers.mask=K.layers.mask&5;const je=ae.parent,Ve=K.cameras;P(K,je);for(let ut=0;ut<Ve.length;ut++)P(Ve[ut],je);Ve.length===2?Ee(K,R,L):K.projectionMatrix.copy(R.projectionMatrix),ee(ae,K,je)};function ee(ae,fe,Ie){Ie===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(Ie.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=yl*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(ae){return x[ae]};let _e=null;function Re(ae,fe){if(g=fe.getViewerPose(p||h),b=fe,g!==null){const Ie=g.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let je=!1;Ie.length!==K.cameras.length&&(K.cameras.length=0,je=!0);for(let gt=0;gt<Ie.length;gt++){const dt=Ie[gt];let wt=null;if(y!==null)wt=y.getViewport(dt);else{const kt=v.getViewSubImage(_,dt);wt=kt.viewport,gt===0&&(e.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(D))}let tt=G[gt];tt===void 0&&(tt=new Ei,tt.layers.enable(gt),tt.viewport=new ln,G[gt]=tt),tt.matrix.fromArray(dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(wt.x,wt.y,wt.width,wt.height),gt===0&&(K.matrix.copy(tt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),je===!0&&K.cameras.push(tt)}const Ve=l.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=s.getBinding();const gt=v.getDepthInformation(Ie[0]);gt&&gt.isValid&&gt.texture&&M.init(gt,l.renderState)}if(Ve&&Ve.includes("camera-access")&&T){e.state.unbindTexture(),v=s.getBinding();for(let gt=0;gt<Ie.length;gt++){const dt=Ie[gt].camera;if(dt){let wt=x[dt];wt||(wt=new Xx,x[dt]=wt);const tt=v.getCameraImage(dt);wt.sourceTexture=tt}}}}for(let Ie=0;Ie<B.length;Ie++){const je=F[Ie],Ve=B[Ie];je!==null&&Ve!==void 0&&Ve.update(je,fe,p||h)}_e&&_e(ae,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),b=null}const Ge=new Yx;Ge.setAnimationLoop(Re),this.setAnimationLoop=function(ae){_e=ae},this.dispose=function(){}}}const Bs=new Ra,fC=new tn;function hC(r,e){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Bx(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,U,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,D)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===$n&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===$n&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),U=O.envMap,D=O.envMapRotation;U&&(M.envMap.value=U,Bs.copy(D),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),M.envMapRotation.value.setFromMatrix4(fC.makeRotationFromEuler(Bs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=U*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function dC(r,e,n,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const D=U.program;s.uniformBlockBinding(O,D)}function p(O,U){let D=l[O.id];D===void 0&&(b(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",M));const B=U.program;s.updateUBOMapping(O,B);const F=e.render.frame;c[O.id]!==F&&(_(O),c[O.id]=F)}function g(O){const U=v();O.__bindingPointIndex=U;const D=r.createBuffer(),B=O.__size,F=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const U=l[O.id],D=O.uniforms,B=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let F=0,z=D.length;F<z;F++){const Z=Array.isArray(D[F])?D[F]:[D[F]];for(let R=0,L=Z.length;R<L;R++){const G=Z[R];if(y(G,F,R,B)===!0){const K=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let ue=0;ue<ie.length;ue++){const N=ie[ue],H=T(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,K+he,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,he),he+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,U,D,B){const F=O.value,z=U+"_"+D;if(B[z]===void 0)return typeof F=="number"||typeof F=="boolean"?B[z]=F:B[z]=F.clone(),!0;{const Z=B[z];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return B[z]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function b(O){const U=O.uniforms;let D=0;const B=16;for(let z=0,Z=U.length;z<Z;z++){const R=Array.isArray(U[z])?U[z]:[U[z]];for(let L=0,G=R.length;L<G;L++){const K=R[L],ie=Array.isArray(K.value)?K.value:[K.value];for(let he=0,ue=ie.length;he<ue;he++){const N=ie[he],H=T(N),J=D%B,Se=J%H.boundary,Ee=J+Se;D+=Se,Ee!==0&&B-Ee<H.storage&&(D+=B-Ee),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=H.storage}}}const F=D%B;return F>0&&(D+=B-F),O.__size=D,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const pC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function mC(){return ki===null&&(ki=new cT(pC,16,16,to,Aa),ki.name="DFG_LUT",ki.minFilter=Fn,ki.magFilter=Fn,ki.wrapS=Ma,ki.wrapT=Ma,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class gC{constructor(e={}){const{canvas:n=xE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Ti}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const T=y,M=new Set([Gp,Hp,Fp]),x=new Set([Ti,Zi,_l,xl,Bp,zp]),O=new Uint32Array(4),U=new Int32Array(4);let D=null,B=null;const F=[],z=[];let Z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1;this._outputColorSpace=Mi;let G=0,K=0,ie=null,he=-1,ue=null;const N=new ln,H=new ln;let J=null;const Se=new At(0);let Ee=0,P=n.width,ee=n.height,_e=1,Re=null,Ge=null;const ae=new ln(0,0,P,ee),fe=new ln(0,0,P,ee);let Ie=!1;const je=new kx;let Ve=!1,ut=!1;const Zt=new tn,gt=new $,dt=new ln,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function kt(){return ie===null?_e:1}let k=s;function Bt(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pp}`),n.addEventListener("webglcontextlost",Qe,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",_t,!1),k===null){const Y="webgl2";if(k=Bt(Y,w),k===null)throw Bt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Rt("WebGLRenderer: "+w.message),w}let vt,Dt,Ye,I,E,W,me,be,ce,qe,Ue,ye,Oe,de,ge,Ce,Pe,De,Ze,j,Le,we,Fe,Ae;function xe(){vt=new mw(k),vt.init(),we=new rC(k,vt),Dt=new rw(k,vt,e,we),Ye=new aC(k,vt),Dt.reversedDepthBuffer&&_&&Ye.buffers.depth.setReversed(!0),I=new _w(k),E=new kR,W=new sC(k,vt,Ye,E,Dt,we,I),me=new lw(R),be=new pw(R),ce=new MT(k),Fe=new aw(k,ce),qe=new gw(k,ce,I,Fe),Ue=new Sw(k,qe,ce,I),Ze=new xw(k,Dt,W),Ce=new ow(E),ye=new VR(R,me,be,vt,Dt,Fe,Ce),Oe=new hC(R,E),de=new XR,ge=new JR(vt),De=new iw(R,me,be,Ye,Ue,b,m),Pe=new nC(R,Ue,Dt),Ae=new dC(k,I,Dt,Ye),j=new sw(k,vt,I),Le=new vw(k,vt,I),I.programs=ye.programs,R.capabilities=Dt,R.extensions=vt,R.properties=E,R.renderLists=de,R.shadowMap=Pe,R.state=Ye,R.info=I}xe(),T!==Ti&&(Z=new Mw(T,n.width,n.height,l,c));const Ne=new uC(R,k);this.xr=Ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(w){w!==void 0&&(_e=w,this.setSize(P,ee,!1))},this.getSize=function(w){return w.set(P,ee)},this.setSize=function(w,Y,oe=!0){if(Ne.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,ee=Y,n.width=Math.floor(w*_e),n.height=Math.floor(Y*_e),oe===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),Z!==null&&Z.setSize(n.width,n.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(P*_e,ee*_e).floor()},this.setDrawingBufferSize=function(w,Y,oe){P=w,ee=Y,_e=oe,n.width=Math.floor(w*oe),n.height=Math.floor(Y*oe),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(T===Ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,Y,oe,se){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,Y,oe,se),Ye.viewport(N.copy(ae).multiplyScalar(_e).round())},this.getScissor=function(w){return w.copy(fe)},this.setScissor=function(w,Y,oe,se){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,Y,oe,se),Ye.scissor(H.copy(fe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){Ye.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,oe=!0){let se=0;if(w){let Q=!1;if(ie!==null){const Be=ie.texture.format;Q=M.has(Be)}if(Q){const Be=ie.texture.type,ke=x.has(Be),ze=De.getClearColor(),Xe=De.getClearAlpha(),Ke=ze.r,it=ze.g,Je=ze.b;ke?(O[0]=Ke,O[1]=it,O[2]=Je,O[3]=Xe,k.clearBufferuiv(k.COLOR,0,O)):(U[0]=Ke,U[1]=it,U[2]=Je,U[3]=Xe,k.clearBufferiv(k.COLOR,0,U))}else se|=k.COLOR_BUFFER_BIT}Y&&(se|=k.DEPTH_BUFFER_BIT),oe&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Qe,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),De.dispose(),de.dispose(),ge.dispose(),E.dispose(),me.dispose(),be.dispose(),Ue.dispose(),Fe.dispose(),Ae.dispose(),ye.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Zs),Ne.removeEventListener("sessionend",ro),zi.stop()};function Qe(w){w.preventDefault(),wu("WebGLRenderer: Context Lost."),L=!0}function mt(){wu("WebGLRenderer: Context Restored."),L=!1;const w=I.autoReset,Y=Pe.enabled,oe=Pe.autoUpdate,se=Pe.needsUpdate,Q=Pe.type;xe(),I.autoReset=w,Pe.enabled=Y,Pe.autoUpdate=oe,Pe.needsUpdate=se,Pe.type=Q}function _t(w){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function cn(w){const Y=w.target;Y.removeEventListener("dispose",cn),Vn(Y)}function Vn(w){Da(w),E.remove(w)}function Da(w){const Y=E.get(w).programs;Y!==void 0&&(Y.forEach(function(oe){ye.releaseProgram(oe)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,oe,se,Q,Be){Y===null&&(Y=wt);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=ps(w,Y,oe,se,Q);Ye.setMaterial(se,ke);let Xe=oe.index,Ke=1;if(se.wireframe===!0){if(Xe=qe.getWireframeAttribute(oe),Xe===void 0)return;Ke=2}const it=oe.drawRange,Je=oe.attributes.position;let at=it.start*Ke,Ut=(it.start+it.count)*Ke;Be!==null&&(at=Math.max(at,Be.start*Ke),Ut=Math.min(Ut,(Be.start+Be.count)*Ke)),Xe!==null?(at=Math.max(at,0),Ut=Math.min(Ut,Xe.count)):Je!=null&&(at=Math.max(at,0),Ut=Math.min(Ut,Je.count));const $t=Ut-at;if($t<0||$t===1/0)return;Fe.setup(Q,se,ze,oe,Xe);let qt,It=j;if(Xe!==null&&(qt=ce.get(Xe),It=Le,It.setIndex(qt)),Q.isMesh)se.wireframe===!0?(Ye.setLineWidth(se.wireframeLinewidth*kt()),It.setMode(k.LINES)):It.setMode(k.TRIANGLES);else if(Q.isLine){let et=se.linewidth;et===void 0&&(et=1),Ye.setLineWidth(et*kt()),Q.isLineSegments?It.setMode(k.LINES):Q.isLineLoop?It.setMode(k.LINE_LOOP):It.setMode(k.LINE_STRIP)}else Q.isPoints?It.setMode(k.POINTS):Q.isSprite&&It.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))It.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const et=Q._multiDrawStarts,Ot=Q._multiDrawCounts,ot=Q._multiDrawCount,Tn=Xe?ce.get(Xe).bytesPerElement:1,Qi=E.get(se).currentProgram.getUniforms();for(let An=0;An<ot;An++)Qi.setValue(k,"_gl_DrawID",An),It.render(et[An]/Tn,Ot[An])}else if(Q.isInstancedMesh)It.renderInstances(at,$t,Q.count);else if(oe.isInstancedBufferGeometry){const et=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ot=Math.min(oe.instanceCount,et);It.renderInstances(at,$t,Ot)}else It.render(at,$t)};function ds(w,Y,oe){w.transparent===!0&&w.side===ya&&w.forceSinglePass===!1?(w.side=$n,w.needsUpdate=!0,Js(w,Y,oe),w.side=hs,w.needsUpdate=!0,Js(w,Y,oe),w.side=ya):Js(w,Y,oe)}this.compile=function(w,Y,oe=null){oe===null&&(oe=w),B=ge.get(oe),B.init(Y),z.push(B),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),w!==oe&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),B.setupLights();const se=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Be=Q.material;if(Be)if(Array.isArray(Be))for(let ke=0;ke<Be.length;ke++){const ze=Be[ke];ds(ze,oe,Q),se.add(ze)}else ds(Be,oe,Q),se.add(Be)}),B=z.pop(),se},this.compileAsync=function(w,Y,oe=null){const se=this.compile(w,Y,oe);return new Promise(Q=>{function Be(){if(se.forEach(function(ke){E.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){Q(w);return}setTimeout(Be,10)}vt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Bi=null;function La(w){Bi&&Bi(w)}function Zs(){zi.stop()}function ro(){zi.start()}const zi=new Yx;zi.setAnimationLoop(La),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){Bi=w,Ne.setAnimationLoop(w),w===null?zi.stop():zi.start()},Ne.addEventListener("sessionstart",Zs),Ne.addEventListener("sessionend",ro),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const oe=Ne.enabled===!0&&Ne.isPresenting===!0,se=Z!==null&&(ie===null||oe)&&Z.begin(R,ie);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Y),Y=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,Y,ie),B=ge.get(w,z.length),B.init(Y),z.push(B),Zt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),je.setFromProjectionMatrix(Zt,Wi,Y.reversedDepth),ut=this.localClippingEnabled,Ve=Ce.init(this.clippingPlanes,ut),D=de.get(w,F.length),D.init(),F.push(D),Ne.enabled===!0&&Ne.isPresenting===!0){const ke=R.xr.getDepthSensingMesh();ke!==null&&fi(ke,Y,-1/0,R.sortObjects)}fi(w,Y,0,R.sortObjects),D.finish(),R.sortObjects===!0&&D.sort(Re,Ge),tt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,tt&&De.addToRenderList(D,w),this.info.render.frame++,Ve===!0&&Ce.beginShadows();const Q=B.state.shadowsArray;if(Pe.render(Q,w,Y),Ve===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&Z.hasRenderPass())===!1){const ke=D.opaque,ze=D.transmissive;if(B.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(ze.length>0)for(let Ke=0,it=Xe.length;Ke<it;Ke++){const Je=Xe[Ke];En(ke,ze,w,Je)}tt&&De.render(w);for(let Ke=0,it=Xe.length;Ke<it;Ke++){const Je=Xe[Ke];un(D,w,Je,Je.viewport)}}else ze.length>0&&En(ke,ze,w,Y),tt&&De.render(w),un(D,w,Y)}ie!==null&&K===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),se&&Z.end(R),w.isScene===!0&&w.onAfterRender(R,w,Y),Fe.resetDefaultState(),he=-1,ue=null,z.pop(),z.length>0?(B=z[z.length-1],Ve===!0&&Ce.setGlobalState(R.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function fi(w,Y,oe,se){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)B.pushLight(w),w.castShadow&&B.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){se&&dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Zt);const ke=Ue.update(w),ze=w.material;ze.visible&&D.push(w,ke,ze,oe,dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const ke=Ue.update(w),ze=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),dt.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),dt.copy(ke.boundingSphere.center)),dt.applyMatrix4(w.matrixWorld).applyMatrix4(Zt)),Array.isArray(ze)){const Xe=ke.groups;for(let Ke=0,it=Xe.length;Ke<it;Ke++){const Je=Xe[Ke],at=ze[Je.materialIndex];at&&at.visible&&D.push(w,ke,at,oe,dt.z,Je)}}else ze.visible&&D.push(w,ke,ze,oe,dt.z,null)}}const Be=w.children;for(let ke=0,ze=Be.length;ke<ze;ke++)fi(Be[ke],Y,oe,se)}function un(w,Y,oe,se){const{opaque:Q,transmissive:Be,transparent:ke}=w;B.setupLightsView(oe),Ve===!0&&Ce.setGlobalState(R.clippingPlanes,oe),se&&Ye.viewport(N.copy(se)),Q.length>0&&wi(Q,Y,oe),Be.length>0&&wi(Be,Y,oe),ke.length>0&&wi(ke,Y,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function En(w,Y,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[se.id]===void 0){const at=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[se.id]=new qi(1,1,{generateMipmaps:!0,type:at?Aa:Ti,minFilter:Vs,samples:Dt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Be=B.state.transmissionRenderTarget[se.id],ke=se.viewport||N;Be.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);const ze=R.getRenderTarget(),Xe=R.getActiveCubeFace(),Ke=R.getActiveMipmapLevel();R.setRenderTarget(Be),R.getClearColor(Se),Ee=R.getClearAlpha(),Ee<1&&R.setClearColor(16777215,.5),R.clear(),tt&&De.render(oe);const it=R.toneMapping;R.toneMapping=Yi;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),B.setupLightsView(se),Ve===!0&&Ce.setGlobalState(R.clippingPlanes,se),wi(w,oe,se),W.updateMultisampleRenderTarget(Be),W.updateRenderTargetMipmap(Be),vt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ut=0,$t=Y.length;Ut<$t;Ut++){const qt=Y[Ut],{object:It,geometry:et,material:Ot,group:ot}=qt;if(Ot.side===ya&&It.layers.test(se.layers)){const Tn=Ot.side;Ot.side=$n,Ot.needsUpdate=!0,Ks(It,oe,se,et,Ot,ot),Ot.side=Tn,Ot.needsUpdate=!0,at=!0}}at===!0&&(W.updateMultisampleRenderTarget(Be),W.updateRenderTargetMipmap(Be))}R.setRenderTarget(ze,Xe,Ke),R.setClearColor(Se,Ee),Je!==void 0&&(se.viewport=Je),R.toneMapping=it}function wi(w,Y,oe){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Be=w.length;Q<Be;Q++){const ke=w[Q],{object:ze,geometry:Xe,group:Ke}=ke;let it=ke.material;it.allowOverride===!0&&se!==null&&(it=se),ze.layers.test(oe.layers)&&Ks(ze,Y,oe,Xe,it,Ke)}}function Ks(w,Y,oe,se,Q,Be){w.onBeforeRender(R,Y,oe,se,Q,Be),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(R,Y,oe,se,w,Be),Q.transparent===!0&&Q.side===ya&&Q.forceSinglePass===!1?(Q.side=$n,Q.needsUpdate=!0,R.renderBufferDirect(oe,Y,se,Q,w,Be),Q.side=hs,Q.needsUpdate=!0,R.renderBufferDirect(oe,Y,se,Q,w,Be),Q.side=ya):R.renderBufferDirect(oe,Y,se,Q,w,Be),w.onAfterRender(R,Y,oe,se,Q,Be)}function Js(w,Y,oe){Y.isScene!==!0&&(Y=wt);const se=E.get(w),Q=B.state.lights,Be=B.state.shadowsArray,ke=Q.state.version,ze=ye.getParameters(w,Q.state,Be,Y,oe),Xe=ye.getProgramCacheKey(ze);let Ke=se.programs;se.environment=w.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(w.isMeshStandardMaterial?be:me).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",cn),Ke=new Map,se.programs=Ke);let it=Ke.get(Xe);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===ke)return oo(w,ze),it}else ze.uniforms=ye.getUniforms(w),w.onBeforeCompile(ze,R),it=ye.acquireProgram(ze,Xe),Ke.set(Xe,it),se.uniforms=ze.uniforms;const Je=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=Ce.uniform),oo(w,ze),se.needsLights=Na(w),se.lightsStateVersion=ke,se.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.directionalShadowMap.value=Q.state.directionalShadowMap,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotShadowMap.value=Q.state.spotShadowMap,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMap.value=Q.state.pointShadowMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function Cl(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Mu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function oo(w,Y){const oe=E.get(w);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function ps(w,Y,oe,se,Q){Y.isScene!==!0&&(Y=wt),W.resetTextureUnits();const Be=Y.fog,ke=se.isMeshStandardMaterial?Y.environment:null,ze=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:no,Xe=(se.isMeshStandardMaterial?be:me).get(se.envMap||ke),Ke=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!oe.morphAttributes.position,at=!!oe.morphAttributes.normal,Ut=!!oe.morphAttributes.color;let $t=Yi;se.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&($t=R.toneMapping);const qt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,It=qt!==void 0?qt.length:0,et=E.get(se),Ot=B.state.lights;if(Ve===!0&&(ut===!0||w!==ue)){const Rn=w===ue&&se.id===he;Ce.setState(se,w,Rn)}let ot=!1;se.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ot.state.version||et.outputColorSpace!==ze||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==Xe||se.fog===!0&&et.fog!==Be||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ce.numPlanes||et.numIntersection!==Ce.numIntersection)||et.vertexAlphas!==Ke||et.vertexTangents!==it||et.morphTargets!==Je||et.morphNormals!==at||et.morphColors!==Ut||et.toneMapping!==$t||et.morphTargetsCount!==It)&&(ot=!0):(ot=!0,et.__version=se.version);let Tn=et.currentProgram;ot===!0&&(Tn=Js(se,Y,Q));let Qi=!1,An=!1,hi=!1;const zt=Tn.getUniforms(),wn=et.uniforms;if(Ye.useProgram(Tn.program)&&(Qi=!0,An=!0,hi=!0),se.id!==he&&(he=se.id,An=!0),Qi||ue!==w){Ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",w.projectionMatrix),zt.setValue(k,"viewMatrix",w.matrixWorldInverse);const Cn=zt.map.cameraPosition;Cn!==void 0&&Cn.setValue(k,gt.setFromMatrixPosition(w.matrixWorld)),Dt.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&zt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),ue!==w&&(ue=w,An=!0,hi=!0)}if(et.needsLights&&(Ot.state.directionalShadowMap.length>0&&zt.setValue(k,"directionalShadowMap",Ot.state.directionalShadowMap,W),Ot.state.spotShadowMap.length>0&&zt.setValue(k,"spotShadowMap",Ot.state.spotShadowMap,W),Ot.state.pointShadowMap.length>0&&zt.setValue(k,"pointShadowMap",Ot.state.pointShadowMap,W)),Q.isSkinnedMesh){zt.setOptional(k,Q,"bindMatrix"),zt.setOptional(k,Q,"bindMatrixInverse");const Rn=Q.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),zt.setValue(k,"boneTexture",Rn.boneTexture,W))}Q.isBatchedMesh&&(zt.setOptional(k,Q,"batchingTexture"),zt.setValue(k,"batchingTexture",Q._matricesTexture,W),zt.setOptional(k,Q,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",Q._indirectTexture,W),zt.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",Q._colorsTexture,W));const vn=oe.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Ze.update(Q,oe,Tn),(An||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,zt.setValue(k,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(wn.envMap.value=Xe,wn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=mC()),An&&(zt.setValue(k,"toneMappingExposure",R.toneMappingExposure),et.needsLights&&lo(wn,hi),Be&&se.fog===!0&&Oe.refreshFogUniforms(wn,Be),Oe.refreshMaterialUniforms(wn,se,_e,ee,B.state.transmissionRenderTarget[w.id]),Mu.upload(k,Cl(et),wn,W)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Mu.upload(k,Cl(et),wn,W),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&zt.setValue(k,"center",Q.center),zt.setValue(k,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(k,"normalMatrix",Q.normalMatrix),zt.setValue(k,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Rn=se.uniformsGroups;for(let Cn=0,Qs=Rn.length;Cn<Qs;Cn++){const Ri=Rn[Cn];Ae.update(Ri,Tn),Ae.bind(Ri,Tn)}}return Tn}function lo(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function Na(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(w,Y,oe){const se=E.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=Y,E.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const oe=E.get(w);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Ua=k.createFramebuffer();this.setRenderTarget=function(w,Y=0,oe=0){ie=w,G=Y,K=oe;let se=null,Q=!1,Be=!1;if(w){const ze=E.get(w);if(ze.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(k.FRAMEBUFFER,ze.__webglFramebuffer),N.copy(w.viewport),H.copy(w.scissor),J=w.scissorTest,Ye.viewport(N),Ye.scissor(H),Ye.setScissorTest(J),he=-1;return}else if(ze.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(ze.__hasExternalTextures)W.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const it=w.depthTexture;if(ze.__boundDepthTexture!==it){if(it!==null&&E.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const Ke=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?se=Ke[Y][oe]:se=Ke[Y],Q=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?se=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?se=Ke[oe]:se=Ke,N.copy(w.viewport),H.copy(w.scissor),J=w.scissorTest}else N.copy(ae).multiplyScalar(_e).floor(),H.copy(fe).multiplyScalar(_e).floor(),J=Ie;if(oe!==0&&(se=Ua),Ye.bindFramebuffer(k.FRAMEBUFFER,se)&&Ye.drawBuffers(w,se),Ye.viewport(N),Ye.scissor(H),Ye.setScissorTest(J),Q){const ze=E.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,oe)}else if(Be){const ze=Y;for(let Xe=0;Xe<w.textures.length;Xe++){const Ke=E.get(w.textures[Xe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,oe,ze)}}else if(w!==null&&oe!==0){const ze=E.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ze.__webglTexture,oe)}he=-1},this.readRenderTargetPixels=function(w,Y,oe,se,Q,Be,ke,ze=0){if(!(w&&w.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){Ye.bindFramebuffer(k.FRAMEBUFFER,Xe);try{const Ke=w.textures[ze],it=Ke.format,Je=Ke.type;if(!Dt.textureFormatReadable(it)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Je)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-se&&oe>=0&&oe<=w.height-Q&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(Y,oe,se,Q,we.convert(it),we.convert(Je),Be))}finally{const Ke=ie!==null?E.get(ie).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(w,Y,oe,se,Q,Be,ke,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(Y>=0&&Y<=w.width-se&&oe>=0&&oe<=w.height-Q){Ye.bindFramebuffer(k.FRAMEBUFFER,Xe);const Ke=w.textures[ze],it=Ke.format,Je=Ke.type;if(!Dt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.bufferData(k.PIXEL_PACK_BUFFER,Be.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ze),k.readPixels(Y,oe,se,Q,we.convert(it),we.convert(Je),0);const Ut=ie!==null?E.get(ie).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Ut);const $t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await SE(k,$t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Be),k.deleteBuffer(at),k.deleteSync($t),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,oe=0){const se=Math.pow(2,-oe),Q=Math.floor(w.image.width*se),Be=Math.floor(w.image.height*se),ke=Y!==null?Y.x:0,ze=Y!==null?Y.y:0;W.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,ke,ze,Q,Be),Ye.unbindTexture()};const ms=k.createFramebuffer(),Oa=k.createFramebuffer();this.copyTextureToTexture=function(w,Y,oe=null,se=null,Q=0,Be=null){Be===null&&(Q!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Be=Q,Q=0):Be=0);let ke,ze,Xe,Ke,it,Je,at,Ut,$t;const qt=w.isCompressedTexture?w.mipmaps[Be]:w.image;if(oe!==null)ke=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,Ke=oe.min.x,it=oe.min.y,Je=oe.isBox3?oe.min.z:0;else{const vn=Math.pow(2,-Q);ke=Math.floor(qt.width*vn),ze=Math.floor(qt.height*vn),w.isDataArrayTexture?Xe=qt.depth:w.isData3DTexture?Xe=Math.floor(qt.depth*vn):Xe=1,Ke=0,it=0,Je=0}se!==null?(at=se.x,Ut=se.y,$t=se.z):(at=0,Ut=0,$t=0);const It=we.convert(Y.format),et=we.convert(Y.type);let Ot;Y.isData3DTexture?(W.setTexture3D(Y,0),Ot=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ot=k.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ot=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const ot=k.getParameter(k.UNPACK_ROW_LENGTH),Tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qi=k.getParameter(k.UNPACK_SKIP_PIXELS),An=k.getParameter(k.UNPACK_SKIP_ROWS),hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,qt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ke),k.pixelStorei(k.UNPACK_SKIP_ROWS,it),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const zt=w.isDataArrayTexture||w.isData3DTexture,wn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const vn=E.get(w),Rn=E.get(Y),Cn=E.get(vn.__renderTarget),Qs=E.get(Rn.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let Ri=0;Ri<Xe;Ri++)zt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(w).__webglTexture,Q,Je+Ri),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Be,$t+Ri)),k.blitFramebuffer(Ke,it,ke,ze,at,Ut,ke,ze,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||E.has(w)){const vn=E.get(w),Rn=E.get(Y);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,ms),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Oa);for(let Cn=0;Cn<Xe;Cn++)zt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vn.__webglTexture,Q,Je+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vn.__webglTexture,Q),wn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Rn.__webglTexture,Be,$t+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rn.__webglTexture,Be),Q!==0?k.blitFramebuffer(Ke,it,ke,ze,at,Ut,ke,ze,k.COLOR_BUFFER_BIT,k.NEAREST):wn?k.copyTexSubImage3D(Ot,Be,at,Ut,$t+Cn,Ke,it,ke,ze):k.copyTexSubImage2D(Ot,Be,at,Ut,Ke,it,ke,ze);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else wn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ot,Be,at,Ut,$t,ke,ze,Xe,It,et,qt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Ot,Be,at,Ut,$t,ke,ze,Xe,It,qt.data):k.texSubImage3D(Ot,Be,at,Ut,$t,ke,ze,Xe,It,et,qt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Be,at,Ut,ke,ze,It,et,qt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Be,at,Ut,qt.width,qt.height,It,qt.data):k.texSubImage2D(k.TEXTURE_2D,Be,at,Ut,ke,ze,It,et,qt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qi),k.pixelStorei(k.UNPACK_SKIP_ROWS,An),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),Be===0&&Y.generateMipmaps&&k.generateMipmap(Ot),Ye.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){G=0,K=0,ie=null,Ye.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const Cd={main:"#e7e5e1",about:"#080808",portfolio:"#101012"},Dd={main:13,about:11,portfolio:15};function On(r,e,n){return r+(e-r)*n}function vC(r,e,n){const l=document.createElement("canvas");l.width=128,l.height=128;const c=l.getContext("2d");if(c){const d=c.createRadialGradient(64,64,0,64,64,64);d.addColorStop(0,`rgba(${r}, ${e}, ${n}, 0.55)`),d.addColorStop(.5,`rgba(${r}, ${e}, ${n}, 0.16)`),d.addColorStop(1,`rgba(${r}, ${e}, ${n}, 0)`),c.fillStyle=d,c.fillRect(0,0,128,128)}const h=new dT(l);return h.needsUpdate=!0,h}const K_=[[124,92,255],[64,200,220],[255,110,170],[255,180,90]],_C=3.2,J_=1.15;function xC({scene:r,anchors:e,pointerRef:n,dragRef:s,zoomRef:l,hoverRef:c,labelEls:h}){const d=Te.useRef(null),m=Te.useRef(r),p=Te.useRef(e);return Te.useEffect(()=>{m.current=r},[r]),Te.useEffect(()=>{p.current=e},[e]),Te.useEffect(()=>{const g=d.current;if(!g)return;const v=new gC({antialias:!0,alpha:!1});v.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),v.setSize(g.clientWidth,g.clientHeight),g.appendChild(v.domElement);const _=new rT,y=new At(Cd.main);_.background=y,_.fog=new Ru(Cd.about,.02);const b=new Ei(52,g.clientWidth/g.clientHeight,.1,200);b.position.set(0,0,Dd.main);const T=new js;_.add(T);const M=1600,x=new Float32Array(M*3);for(let ye=0;ye<M;ye++){const Oe=12+Math.random()*46,de=Math.random()*Math.PI*2,ge=Math.acos(2*Math.random()-1);x[ye*3]=Oe*Math.sin(ge)*Math.cos(de),x[ye*3+1]=Oe*Math.sin(ge)*Math.sin(de),x[ye*3+2]=Oe*Math.cos(ge)}const O=new bn;O.setAttribute("position",new Wn(x,3));const U=new yu({color:16777215,size:.05,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1}),D=new Md(O,U);T.add(D);const B=200,F=[];for(let ye=0;ye<B;ye++)F.push(new $((Math.random()-.5)*26,(Math.random()-.5)*16,(Math.random()-.5)*22));const z=[];for(let ye=0;ye<B;ye++){let Oe=0;for(let de=ye+1;de<B&&Oe<3;de++)F[ye].distanceTo(F[de])<4.6&&(z.push(F[ye].x,F[ye].y,F[ye].z,F[de].x,F[de].y,F[de].z),Oe++)}const Z=new bn;Z.setAttribute("position",new ei(z,3));const R=new Su({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),L=new yd(Z,R);T.add(L);const G=new bn;G.setAttribute("position",new ei(F.flatMap(ye=>[ye.x,ye.y,ye.z]),3));const K=new yu({color:16777215,size:.08,transparent:!0,opacity:0,depthWrite:!1}),ie=new Md(G,K);T.add(ie);const he=new js;T.add(he);const ue=[],N=[];K_.forEach(([ye,Oe,de],ge)=>{const Ce=vC(ye,Oe,de);ue.push(Ce);const Pe=new Gx({map:Ce,transparent:!0,opacity:0,depthWrite:!1,blending:Id});N.push(Pe);const De=new lT(Pe),Ze=ge/K_.length*Math.PI*2+ge,j=26+ge%2*8;De.position.set(Math.cos(Ze)*j,Math.sin(Ze*.7)*j*.5,-18-ge*6),De.scale.setScalar(34+ge*10),he.add(De)});const H=2200,J=new Float32Array(H*3),Se=new Float32Array(H*3),Ee=[[.72,.62,1],[.55,.85,1],[1,.75,.9],[1,1,1]];for(let ye=0;ye<H;ye++){const Oe=20+Math.random()*60,de=Math.random()*Math.PI*2,ge=Math.acos(2*Math.random()-1);J[ye*3]=Oe*Math.sin(ge)*Math.cos(de),J[ye*3+1]=Oe*Math.sin(ge)*Math.sin(de),J[ye*3+2]=Oe*Math.cos(ge);const Ce=Ee[ye%Ee.length];Se[ye*3]=Ce[0],Se[ye*3+1]=Ce[1],Se[ye*3+2]=Ce[2]}const P=new bn;P.setAttribute("position",new Wn(J,3)),P.setAttribute("color",new Wn(Se,3));const ee=new yu({size:.045,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),_e=new Md(P,ee);T.add(_e);const Re=new js;T.add(Re);const Ge=new Su({color:1710618,transparent:!0,opacity:.35});let ae=null;const fe=()=>{for(let de=Re.children.length-1;de>=0;de--){const ge=Re.children[de];Re.remove(ge),ge instanceof jx&&ge.geometry.dispose()}const ye=[];p.current.forEach(de=>{ye.push(0,0,0,de.position[0],de.position[1],de.position[2])});const Oe=new bn;Oe.setAttribute("position",new ei(ye,3)),ae=new yd(Oe,Ge),Re.add(ae)};fe();let Ie=p.current;const je=new ST;je.params.Line={threshold:.4};const Ve=new Et;let ut=null,Zt=!1;const gt=window.matchMedia("(hover: hover) and (pointer: fine)").matches,dt=ye=>{ye.pointerType==="mouse"&&(Zt=!0)};window.addEventListener("pointermove",dt,{passive:!0});const wt=4,tt=new Float32Array(wt*2*3),kt=new bn;kt.setAttribute("position",new Wn(tt,3));const k=new Su({color:new At("#ffffff"),transparent:!0,opacity:0,depthWrite:!1}),Bt=new yd(kt,k);Bt.frustumCulled=!1,Bt.renderOrder=8,T.add(Bt);let vt=null;const Dt=ye=>{const Oe=p.current,de=ye?Oe.find(Ze=>Ze.id===ye):void 0;if(!de)return;const[ge,Ce,Pe]=de.position,De=Oe.filter(Ze=>Ze.id!==ye).map(Ze=>{const j=Ze.position[0]-ge,Le=Ze.position[1]-Ce,we=Ze.position[2]-Pe;return{a:Ze,d:j*j+Le*Le+we*we}}).sort((Ze,j)=>Ze.d-j.d).slice(0,wt-1).map(Ze=>Ze.a);tt.fill(0),tt[3]=ge,tt[4]=Ce,tt[5]=Pe,De.forEach((Ze,j)=>{const Le=(j+1)*6;tt[Le]=ge,tt[Le+1]=Ce,tt[Le+2]=Pe,tt[Le+3]=Ze.position[0],tt[Le+4]=Ze.position[1],tt[Le+5]=Ze.position[2]}),kt.attributes.position.needsUpdate=!0,kt.setDrawRange(0,(De.length+1)*2)},Ye=new xT;let I=0;const E={x:0,y:0},W=new $,me=new At;let be=Dd.main,ce=1;const qe=()=>{I=requestAnimationFrame(qe);const ye=Ye.getElapsedTime(),Oe=m.current;p.current!==Ie&&(fe(),Ie=p.current),me.set(Cd[Oe]),y.lerp(me,.04),_.fog instanceof Ru&&(_.fog.color.copy(y),_.fog.density=On(_.fog.density,Oe==="main"?.008:.026,.04)),be=On(be,Dd[Oe],.04);const de=Oe==="main"?0:.9;U.opacity=On(U.opacity,de,.045),K.opacity=On(K.opacity,de*.7,.045),R.opacity=On(R.opacity,Oe==="about"?.12:Oe==="portfolio"?.04:0,.045),Ge.opacity=On(Ge.opacity,Oe==="main"?.35:0,.06);const ge=n.current;if(ut=null,Oe==="main"&&ae&&Zt&&gt&&!c.current){Ve.set(ge.x,-ge.y),je.setFromCamera(Ve,b);const Qe=je.intersectObject(ae,!1);if(Qe.length&&Qe[0].index!=null){const mt=Math.floor(Qe[0].index/2);ut=p.current[mt]?.id??null}}const Ce=c.current??ut;Ce!==vt&&(vt=Ce,Ce&&Dt(Ce)),k.color.set(Oe==="main"?"#141414":"#ffffff"),k.opacity=On(k.opacity,Ce?.9:0,.16),Bt.visible=k.opacity>.02,Re.visible=Ge.opacity>.02;const Pe=s.current,De=Oe==="about"?.05:.25,Ze=Oe==="about"?.04:.18;E.x=On(E.x,Pe.x,.09),E.y=On(E.y,Pe.y,.09);const j=ge.x*De+E.x,Le=-ge.y*Ze+E.y;T.rotation.y=On(T.rotation.y,j,.08),T.rotation.x=On(T.rotation.x,Le,.08),ce=On(ce,l.current,.1);const we=Oe==="about"?Hc.clamp((ce-J_)/(_C-J_),0,1):0;N.forEach((Qe,mt)=>{const _t=we*(.5+mt%2*.15);Qe.opacity=On(Qe.opacity,_t,.05)}),ee.opacity=On(ee.opacity,we*.85,.05);const Fe=Hc.clamp(1.05/b.aspect,1,1.35);b.position.z=be*ce*Fe,b.position.x=On(b.position.x,ge.x*.6,.05);const Ae=Hc.clamp(.4+b.aspect*.42,.56,1);T.scale.setScalar(On(T.scale.x,Ae,.1)),b.position.y=On(b.position.y,-ge.y*.4,.05),b.lookAt(0,0,0),D.rotation.y=ye*.01,L.rotation.y=ye*.014,ie.rotation.y=ye*.014;const xe=v.domElement.clientWidth,Ne=v.domElement.clientHeight;p.current.forEach(Qe=>{const mt=h.current.get(Qe.id);if(!mt)return;W.set(Qe.position[0],Qe.position[1],Qe.position[2]),W.applyMatrix4(T.matrixWorld);const _t=b.position.distanceTo(W);W.project(b);const cn=W.z>1,Vn=(W.x*.5+.5)*xe,Da=(-W.y*.5+.5)*Ne,ds=Qe.position[0]<-1.4?"0%":Qe.position[0]>1.4?"-100%":"-50%";mt.style.transform=`translate(${ds}, -50%) translate(${Math.round(Vn)}px, ${Math.round(Da)}px)`;const Bi=Vn<-40||Vn>xe+40||Da<-40||Da>Ne+40,La=Hc.clamp(1-(_t-6)/22,.12,1);mt.style.opacity=cn||Bi?"0":String(La),mt.style.pointerEvents=cn||Bi||La<.3?"none":"auto",mt.classList.toggle("is-lit",!cn&&!Bi&&Qe.id===Ce)}),v.render(_,b)};qe();const Ue=()=>{const ye=g.clientWidth,Oe=g.clientHeight;v.setSize(ye,Oe),b.aspect=ye/Oe,b.updateProjectionMatrix()};return window.addEventListener("resize",Ue),()=>{cancelAnimationFrame(I),window.removeEventListener("resize",Ue),window.removeEventListener("pointermove",dt),v.dispose(),O.dispose(),U.dispose(),Z.dispose(),R.dispose(),G.dispose(),K.dispose(),kt.dispose(),k.dispose(),Ge.dispose(),N.forEach(ye=>ye.dispose()),ue.forEach(ye=>ye.dispose()),P.dispose(),ee.dispose(),v.domElement.parentNode===g&&g.removeChild(v.domElement)}},[n,s,l,c,h]),C.jsx("div",{className:"constellation-canvas",ref:d,"aria-hidden":"true"})}function SC(){const r=Te.useRef(null);return Te.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const n=r.current;if(!n)return;document.body.classList.add("reticle-active");let s=!1,l=null;const c=p=>{if(n.style.transform=`translate3d(${p.clientX}px, ${p.clientY}px, 0) translate(-50%, -50%)`,s||(s=!0,n.classList.add("is-visible")),p.target!==l){l=p.target;const v=!!p.target?.closest('a, button, [role="button"], input, textarea, [data-hover]');n.classList.toggle("is-active",v)}},h=()=>{s=!1,n.classList.remove("is-visible")},d=()=>{n.classList.remove("did-click"),n.classList.add("is-pressed")},m=()=>{n.classList.remove("is-pressed"),n.classList.add("did-click"),window.setTimeout(()=>n.classList.remove("did-click"),420)};return window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("mousedown",d),window.addEventListener("mouseup",m),document.addEventListener("mouseleave",h),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mousedown",d),window.removeEventListener("mouseup",m),document.removeEventListener("mouseleave",h),document.body.classList.remove("reticle-active")}},[]),C.jsxs("div",{className:"reticle",ref:r,"aria-hidden":"true",children:[C.jsxs("span",{className:"reticle-box",children:[C.jsx("span",{className:"reticle-corner tl"}),C.jsx("span",{className:"reticle-corner tr"}),C.jsx("span",{className:"reticle-corner bl"}),C.jsx("span",{className:"reticle-corner br"})]}),C.jsx("span",{className:"reticle-ring"}),C.jsx("span",{className:"reticle-dot"})]})}const pl=[{name:"League Of Legends @adesso",description:"Ein React Playground in Form einer League of Legends Team-Maker Web-App. Die Anwendung ermöglicht es, zwei Teams zu erstellen, Spieler hinzuzufügen und (ehemals) mithilfe einer KI faire Teams basierend auf Spieler-Daten zu generieren. Das Projekt dient sowohl als Lern- & Experimentierumgebung als auch als Funktions-Prototyp.",descriptionEn:"A React playground in the form of a League of Legends team-maker web app. The app lets you create two teams, add players, and (formerly) uses AI to generate fair teams based on player data. The project serves both as a learning & experimentation environment and as a functional prototype.",tech:"React, Vite, JavaScript, Tailwind CSS",link:"https://jsnuwu.github.io/react-playground/"},{name:"OnlineShopVue.js",description:"Dieses Projekt ist ein moderner, interaktiver Online-Shop für Bekleidung und Accessoires, entwickelt mit Vue 3, Pinia und Tailwind CSS. Es bietet eine benutzerfreundliche Oberfläche, die es Kunden ermöglicht, Produkte detailliert zu konfigurieren, bevor sie sie in den Warenkorb legen.",descriptionEn:"This project is a modern, interactive online shop for clothing and accessories, built with Vue 3, Pinia and Tailwind CSS. It offers a user-friendly interface that lets customers configure products in detail before adding them to the cart.",tech:"Vue.js, Pinia, Tailwind CSS, TypeScript, Vite",link:"https://jsnuwu.github.io/OnlineShopVue.js/"},{name:"Placeholder",description:"Ein React Three Fiber Experiment: eine kleine 3D-Szene mit Himmel, Haus und zufällig platzierten Bäumen, durch die man sich per WASD und Sprung frei bewegen kann · mit Pointer-Lock-Kamera wie in einem Ego-Shooter. Reines Spiel- und Lernprojekt ohne festen Zweck.",descriptionEn:"A React Three Fiber experiment: a small 3D scene with a sky, a house, and randomly placed trees you can walk through freely with WASD and jump · pointer-lock camera, like a first-person game. A pure playground / learning project with no fixed purpose.",tech:"React, Three.js, React Three Fiber, TypeScript",link:"https://jsnuwu.github.io/PLACEHOLDER/"},{name:"Flappy Game",description:"Ein Flappy-Bird-Klon, gebaut mit Angular. Der Vogel wird per Klick/Tastendruck durch eine Reihe von Rohr-Hindernissen gesteuert, während im Hintergrund der Score mitgezählt wird. Erreichte Highscores werden in einem lokalen Leaderboard gespeichert.",descriptionEn:"A Flappy Bird clone built with Angular. The bird is steered through a series of pipe obstacles via click/keypress while the score is tracked in the background. High scores are saved to a local leaderboard.",tech:"Angular, TypeScript, RxJS",link:"https://jsnuwu.github.io/flappy-game/"},{name:"3D Earth",description:"Dieses Projekt ist ein Three.js Playground, in dem ich mit 3D-Grafiken im Web experimentiert habe. Konkret wurde eine 3D-Erdkugel umgesetzt, um Grundlagen von Three.js, Szenen, Kameras und Animationen zu testen. Das Repository ist als Experiment / Lernprojekt gedacht.",descriptionEn:"This project is a Three.js playground where I experimented with 3D graphics on the web. Specifically, I built a 3D globe to test the basics of Three.js, scenes, cameras and animations. The repository is meant as an experiment / learning project.",tech:"Three.js, JavaScript, HTML/CSS",link:"https://jsnuwu.github.io/Earth/"},{name:"Flowers",description:"Ein kleines CSS/JavaScript-Experiment ganz ohne Framework: Ein Klick auf den Button lässt vor einem animierten Sternenhimmel eine leuchtende Blume wachsen und aufblühen. Reine Spielerei mit CSS-Animationen und Timing.",descriptionEn:"A small CSS/JavaScript experiment with no framework at all: clicking the button grows and blooms a glowing flower in front of an animated starry sky. Pure play with CSS animations and timing.",tech:"HTML, CSS, JavaScript",link:"https://jsnuwu.github.io/Flowers/"},{name:"About Me Page (old)",description:"Dieses Repository enthält eine kurze „About Me“-Präsentation, die ich im Rahmen einer internen Vorstellung vor meinen Führungskräften gehalten habe. Ziel war es, einen Überblick über meine Person, meine Arbeitsweise und meine Schwerpunkte zu geben · kompakt und auf den Punkt. Das Projekt dient ausschließlich Dokumentations- und Referenzzwecken.",descriptionEn:"This repository contains a short 'About Me' presentation I gave as part of an internal introduction to my managers. The goal was to give an overview of who I am, how I work and my focus areas · compact and to the point. The project serves purely documentation and reference purposes.",tech:"Angular, TypeScript, HTML/CSS",link:"https://jsnuwu.github.io/AboutMe/"}],Q_=["FRONTEND","BACKEND","DESIGN","CONTENT CREATION","SOCIAL MEDIA","VIDEO EDITING","UI / UX","BRANDING"],yC=["PHOTOGRAPHY","MOTION","LAYOUT","TYPOGRAPHY","PROTOTYPING","WEB"];function MC(r){return{name:"JASON BAY",tagline:"Frontend Developer"}}function bC(r){const e=yC,n=Math.PI*2/Q_.length,s=Q_.map((h,d)=>({label:h,strong:!0,angle:d*n-Math.PI/2+.12,radius:4.6+d%2*.35,depth:Math.sin(d*1.3)*.9})),l=Math.PI*2/e.length,c=e.map((h,d)=>({label:h,strong:!1,angle:d*l-Math.PI/2+l/2,radius:6.6+d%2*.5,depth:(d%2===0?-1:1)*(1.9+d%3*.5)}));return[...s,...c]}function EC(r){const e=r==="de",n=[{id:"about",label:e?"ÜBER MICH":"ABOUT",scale:1.15},{id:"work",label:"PORTFOLIO",scale:1.35},{id:"live",label:e?"LIVE PROJEKTE":"LIVE PROJECTS",scale:1.1},{id:"skills",label:"SKILLS",scale:.9},{id:"experience",label:e?"WERDEGANG":"EXPERIENCE",scale:1.3},{id:"gallery",label:e?"GALERIE":"GALLERY",scale:.95},{id:"social",label:"SOCIAL MEDIA",scale:1},{id:"languages",label:e?"SPRACHEN":"LANGUAGES",scale:.8},{id:"contact",label:e?"KONTAKT":"CONTACT",scale:1.05}],s=5.4,l=Math.PI*(3-Math.sqrt(5)),c=n.length;return n.map((h,d)=>{const m=1-d/(c-1)*2,p=Math.sqrt(Math.max(0,1-m*m)),g=l*d;return{...h,position:[Math.cos(g)*p*s,m*s*.72,Math.sin(g)*p*s]}})}function $_(){return[{label:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu"},{label:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu"},{label:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/"},{label:"YouTube",handle:"@jsnuwu",href:"https://www.youtube.com/@jsnuwu"},{label:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/"}]}const TC=[[/html/i,"devicon-html5-plain colored"],[/css/i,"devicon-css3-plain colored"],[/typescript/i,"devicon-typescript-plain colored"],[/javascript/i,"devicon-javascript-plain colored"],[/angular/i,"devicon-angularjs-plain colored"],[/tailwind/i,"devicon-tailwindcss-plain colored"],[/three\.?js/i,"devicon-threejs-original"],[/react/i,"devicon-react-original colored"],[/vue/i,"devicon-vuejs-plain colored"],[/vite/i,"devicon-vitejs-plain colored"],[/rxjs/i,"devicon-rxjs-plain colored"],[/figma/i,"devicon-figma-plain colored"],[/wordpress/i,"devicon-wordpress-plain colored"],[/spring/i,"devicon-spring-plain colored"],[/php/i,"devicon-php-plain colored"],[/java\b/i,"devicon-java-plain colored"],[/postgres/i,"devicon-postgresql-plain colored"],[/mysql/i,"devicon-mysql-plain colored"],[/mongo/i,"devicon-mongodb-plain colored"],[/docker/i,"devicon-docker-plain colored"],[/\bgit\b/i,"devicon-git-plain colored"],[/jira/i,"devicon-jira-plain colored"],[/confluence/i,"devicon-confluence-plain colored"]];function Qx(r){for(const[e,n]of TC)if(e.test(r))return n;return null}function AC(){return pl.map((r,e)=>({index:String(e+1).padStart(2,"0"),name:r.name,description:r.description,descriptionEn:r.descriptionEn,tech:r.tech,link:r.link}))}const ex="jasonbay05@gmail.com";var wC=ax();const RC="/JasonBay.dev/assets/pet1-CJIk-0xw.jpeg",CC="/JasonBay.dev/assets/pet2-DJUnXQFB.jpeg",DC="/JasonBay.dev/assets/pet3-DuVC4YnI.jpeg",LC="/JasonBay.dev/assets/pet4-CHYLq3zJ.jpeg",NC="/JasonBay.dev/assets/pet5-CXqwbWPQ.jpeg",UC="/JasonBay.dev/assets/pet6-BueucAZG.jpeg",OC="/JasonBay.dev/assets/pet7-sMwNsGXX.jpeg",PC="/JasonBay.dev/assets/pet8-BumEY2lT.jpeg",IC="/JasonBay.dev/assets/pet9-kBF7FpHN.jpeg",BC="/JasonBay.dev/assets/pet10-CvKpPrae.jpeg",zC="/JasonBay.dev/assets/pet12-CisWE0fr.jpeg",FC="/JasonBay.dev/assets/pet13-DhrBnIH-.jpeg",HC="/JasonBay.dev/assets/pet14-DlldvXUI.jpeg",GC="/JasonBay.dev/assets/motorcycle4-DGuskHns.jpeg",VC="/JasonBay.dev/assets/motorcycle6-BH0Osdd9.jpeg",kC="/JasonBay.dev/assets/motorcycle7-Bafr5Mxu.jpeg",jC="/JasonBay.dev/assets/motorcycle8-d3KG3SZS.jpeg",XC="/JasonBay.dev/assets/motorcycle9-DUGtGDMJ.jpeg",WC="/JasonBay.dev/assets/motorcycle11-DPgTw-cD.jpeg",YC="/JasonBay.dev/assets/motorcycle12-B8f8esd4.jpeg",qC="/JasonBay.dev/assets/motorcycle13-CFp8o_cV.jpeg",ZC="/JasonBay.dev/assets/motorcycle14-DI4wEwVY.jpeg",KC="/JasonBay.dev/assets/motorcycle15-D07o_jxR.jpeg",JC="/JasonBay.dev/assets/motorcycle17-BvWXS7lH.jpeg",QC="/JasonBay.dev/assets/motorcycle18-DWw56N-S.jpeg",$C="/JasonBay.dev/assets/motorcycle19-B2kCryYc.jpeg",e2="/JasonBay.dev/assets/motorcycle20-De6XRn6Y.jpeg",t2="/JasonBay.dev/assets/motorcycle21-DtMrq1gx.jpeg",n2="/JasonBay.dev/assets/me1-8Tr4emsB.jpeg",i2="/JasonBay.dev/assets/me2-CN9YxVa4.jpeg",a2="/JasonBay.dev/assets/me3-DPw3t2BW.jpg",s2="/JasonBay.dev/assets/me5-Bbzvrqvc.jpg",r2="/JasonBay.dev/assets/me6-DqKQgXcy.jpeg",o2="/JasonBay.dev/assets/hike1-DCzYhsBt.jpg",l2="/JasonBay.dev/assets/hike2-CtVO84a1.jpg",c2="/JasonBay.dev/assets/hike3-BBY1Ubv3.jpg",u2="/JasonBay.dev/assets/hike4-BOHadOKi.jpg",f2="/JasonBay.dev/assets/hike5-BzRShkdi.jpg",h2="/JasonBay.dev/assets/hike6-CclUWBBp.jpg",d2="/JasonBay.dev/assets/hike8-BnzcehXs.jpg",p2="/JasonBay.dev/assets/hike9-BuOeSFVN.jpg",m2=[{img:RC,cat:"pets"},{img:CC,cat:"pets"},{img:DC,cat:"pets"},{img:LC,cat:"pets"},{img:NC,cat:"pets"},{img:UC,cat:"pets"},{img:OC,cat:"pets"},{img:PC,cat:"pets"},{img:IC,cat:"pets"},{img:BC,cat:"pets"},{img:zC,cat:"pets"},{img:FC,cat:"pets"},{img:HC,cat:"pets"},{img:GC,cat:"moto"},{img:VC,cat:"moto"},{img:kC,cat:"moto"},{img:jC,cat:"moto"},{img:XC,cat:"moto"},{img:WC,cat:"moto"},{img:YC,cat:"moto"},{img:qC,cat:"moto"},{img:ZC,cat:"moto"},{img:KC,cat:"moto"},{img:JC,cat:"moto"},{img:QC,cat:"moto"},{img:$C,cat:"moto"},{img:e2,cat:"moto"},{img:t2,cat:"moto"},{img:o2,cat:"hike"},{img:l2,cat:"hike"},{img:c2,cat:"hike"},{img:u2,cat:"hike"},{img:f2,cat:"hike"},{img:h2,cat:"hike"},{img:d2,cat:"hike"},{img:p2,cat:"hike"},{img:n2,cat:"me"},{img:i2,cat:"me"},{img:a2,cat:"me"},{img:s2,cat:"me"},{img:r2,cat:"me"}];function g2(r,e){const n=[...r];let s=e;const l=()=>(s=s*1103515245+12345&2147483647,s/2147483647);for(let c=n.length-1;c>0;c--){const h=Math.floor(l()*(c+1));[n[c],n[h]]=[n[h],n[c]]}return n}const tx=g2(m2,1337);function v2(){const{t:r,lang:e}=Ji(),n=Te.useRef(null),s=Te.useRef(!1),[l,c]=Te.useState("all"),[h,d]=Te.useState(null),m=Te.useMemo(()=>l==="all"?tx:tx.filter(g=>g.cat===l),[l]);Te.useEffect(()=>{const g=n.current;if(!g)return;const v=z=>{const Z=g.scrollWidth-g.clientWidth;if(Z<=1)return;const R=z.deltaY>0;R&&g.scrollLeft>=Z-1||!R&&g.scrollLeft<=0||(z.preventDefault(),g.scrollLeft+=z.deltaY)};g.addEventListener("wheel",v,{passive:!1});let _=!1,y=0,b=0,T=0,M=0,x=0,O=null;const U=()=>{x*=.94,g.scrollLeft-=x*16,Math.abs(x)>.02?O=requestAnimationFrame(U):O=null},D=z=>{O&&cancelAnimationFrame(O),_=!0,s.current=!1,y=z.pageX,b=g.scrollLeft,T=z.pageX,M=performance.now(),x=0,g.classList.add("dragging")},B=z=>{if(!_)return;const Z=z.pageX-y;Math.abs(Z)>4&&(s.current=!0),g.scrollLeft=b-Z;const R=performance.now(),L=R-M;L>0&&(x=(z.pageX-T)/L),T=z.pageX,M=R},F=()=>{_&&(_=!1,g.classList.remove("dragging"),Math.abs(x)>.05&&(O=requestAnimationFrame(U)))};return g.addEventListener("mousedown",D),window.addEventListener("mousemove",B),window.addEventListener("mouseup",F),()=>{O&&cancelAnimationFrame(O),g.removeEventListener("wheel",v),g.removeEventListener("mousedown",D),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",F)}},[l]),Te.useEffect(()=>{n.current?.scrollTo({left:0})},[l]),Te.useEffect(()=>{if(h===null)return;const g=v=>{v.key==="Escape"&&d(null),v.key==="ArrowRight"&&d(_=>_===null?_:(_+1)%m.length),v.key==="ArrowLeft"&&d(_=>_===null?_:(_-1+m.length)%m.length)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[h,m.length]);const p=e==="de";return C.jsxs("div",{className:"gsec",children:[C.jsxs("div",{className:"gsec-filter",children:[r.aboutSlider.categories.map(g=>C.jsx("button",{className:g.key===l?"active":"",onClick:()=>c(g.key),children:g.label},g.key)),C.jsxs("span",{className:"gsec-count",children:[m.length," ",p?"BILDER":"IMAGES"]})]}),C.jsx("div",{className:"gsec-track",ref:n,children:m.map((g,v)=>C.jsxs("figure",{className:"gsec-shot",onClick:()=>{s.current||d(v)},children:[C.jsx("img",{src:g.img,alt:"",draggable:!1,loading:"lazy"}),C.jsxs("figcaption",{children:[String(v+1).padStart(2,"0")," · ",g.cat.toUpperCase()]})]},`${g.img}-${v}`))}),C.jsx("p",{className:"gsec-hint",children:p?"ZIEHEN ODER SCROLLEN · KLICK ZUM VERGRÖSSERN":"DRAG OR SCROLL · CLICK TO ENLARGE"}),h!==null&&wC.createPortal(C.jsxs("div",{className:"gsec-lightbox",onClick:()=>d(null),children:[C.jsxs("span",{className:"gsec-lightbox-count",children:[String(h+1).padStart(2,"0")," /"," ",String(m.length).padStart(2,"0")]}),C.jsx("button",{className:"gsec-lb-nav prev","aria-label":p?"Vorheriges Bild":"Previous image",onClick:g=>{g.stopPropagation(),d(v=>v===null?v:(v-1+m.length)%m.length)},children:"‹"}),C.jsx("img",{src:m[h].img,alt:"",onClick:g=>g.stopPropagation()}),C.jsx("button",{className:"gsec-lb-nav next","aria-label":p?"Nächstes Bild":"Next image",onClick:g=>{g.stopPropagation(),d(v=>v===null?v:(v+1)%m.length)},children:"›"})]}),document.body)]})}const $x="/JasonBay.dev/assets/1-BhbDuOtu.mp4",eS="/JasonBay.dev/assets/2-Be0iSaCO.mp4",tS="/JasonBay.dev/assets/3-M1koVpa6.mp4",nS="/JasonBay.dev/assets/4-DlmwLfDR.mp4",iS="/JasonBay.dev/assets/6-D5kzTYnV.mp4",aS="/JasonBay.dev/assets/66-XMB0FlDV.mp4",zs=[$x,eS,tS,nS,iS,aS];function _2(){const{t:r}=Ji(),e=r.tiktokShowcase,[n,s]=Te.useState(0),[l,c]=Te.useState(!0),[h,d]=Te.useState(!0),[m,p]=Te.useState(.8),[g,v]=Te.useState(0),_=Te.useRef(null),y=Te.useRef(null),b=Te.useRef(!1),T=Te.useCallback(D=>{b.current||(b.current=!0,s(B=>((B+D)%zs.length+zs.length)%zs.length),c(!0),window.setTimeout(()=>b.current=!1,450))},[]);Te.useEffect(()=>{const D=_.current;D&&(D.currentTime=0,D.volume=m,D.muted=h,l?D.play().catch(()=>{}):D.pause())},[n,l,h,m]),Te.useEffect(()=>{const D=y.current;if(!D)return;const B=F=>{Math.abs(F.deltaX)>Math.abs(F.deltaY)||(F.preventDefault(),!(Math.abs(F.deltaY)<14)&&T(F.deltaY>0?1:-1))};return D.addEventListener("wheel",B,{passive:!1}),()=>D.removeEventListener("wheel",B)},[T]);const M=()=>{const D=_.current;D&&D.duration&&v(D.currentTime/D.duration*100)},x=D=>{const B=Number(D.target.value);p(B),d(B===0)},O=h||m===0,U=D=>D.stopPropagation();return C.jsxs("div",{className:"tsec",children:[C.jsxs("div",{className:"tsec-dock",children:[C.jsx("div",{className:"tsec-stage",ref:y,children:C.jsxs("div",{className:"tsec-screen",onClick:()=>c(D=>!D),children:[C.jsx("video",{ref:_,className:"tsec-video",src:zs[n],loop:!0,playsInline:!0,muted:h,autoPlay:!0,onTimeUpdate:M},zs[n]),!l&&C.jsx("span",{className:"tsec-play-ind","aria-hidden":"true",children:"▶"}),C.jsxs("div",{className:"tsec-bar",onClick:U,children:[C.jsx("button",{className:"tsec-ctl",onClick:()=>c(D=>!D),"aria-label":l?e.pause:e.play,children:l?"❚❚":"▶"}),C.jsx("button",{className:"tsec-ctl",onClick:()=>d(D=>!D),"aria-label":O?e.unmute:e.mute,children:O?"MUTE":"VOL"}),C.jsx("input",{type:"range",className:"tsec-vol-slider",min:0,max:1,step:.01,value:h?0:m,onChange:x,"aria-label":e.volume}),C.jsxs("span",{className:"tsec-counter",children:[String(n+1).padStart(2,"0")," /"," ",String(zs.length).padStart(2,"0")]}),C.jsxs("span",{className:"tsec-arrows",children:[C.jsx("button",{onClick:()=>T(-1),"aria-label":e.prev,children:"‹"}),C.jsx("button",{onClick:()=>T(1),"aria-label":e.next,children:"›"})]})]}),C.jsx("div",{className:"tsec-progress",children:C.jsx("span",{style:{width:`${g}%`}})})]})}),C.jsx("div",{className:"tsec-dots",children:zs.map((D,B)=>C.jsx("button",{className:B===n?"active":"",onClick:()=>{s(B),c(!0)},"aria-label":e.jumpTo(B+1),children:String(B+1).padStart(2,"0")},B))})]}),C.jsxs("div",{className:"tsec-side",children:[C.jsxs("div",{className:"tsec-stats",children:[C.jsxs("div",{children:[C.jsx("strong",{children:r.about.spotlight.statFollowerValue}),C.jsx("span",{children:r.about.spotlight.statFollowerLabel})]}),C.jsxs("div",{children:[C.jsx("strong",{children:r.about.spotlight.statLikesValue}),C.jsx("span",{children:r.about.spotlight.statLikesLabel})]}),C.jsxs("div",{children:[C.jsx("strong",{children:r.about.spotlight.statExperienceValue}),C.jsx("span",{children:r.about.spotlight.statExperienceLabel})]})]}),C.jsx("p",{className:"tsec-copy",children:r.about.spotlight.subtitle}),C.jsx("ul",{className:"tsec-list",children:r.about.spotlight.list.map(D=>C.jsx("li",{children:D},D))}),C.jsx("a",{className:"tsec-link",href:"https://www.tiktok.com/@jsnuwu",target:"_blank",rel:"noopener noreferrer",children:"TIKTOK @JSNUWU ↗"})]})]})}function x2(r){try{const e=new URL(r);return`${e.hostname}${e.pathname.replace(/\/$/,"")}`}catch{return r}}function S2(){const{lang:r}=Ji(),e=r==="de",n=AC(),[s,l]=Te.useState(0),[c,h]=Te.useState(!1),d=Te.useCallback(p=>{h(!1),l(g=>(g+p+n.length)%n.length)},[n.length]);Te.useEffect(()=>{const p=g=>{g.key==="ArrowDown"||g.key==="PageDown"?(g.preventDefault(),d(1)):(g.key==="ArrowUp"||g.key==="PageUp")&&(g.preventDefault(),d(-1))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[d]);const m=n[s];return C.jsxs("div",{className:"live-stage",children:[C.jsxs("div",{className:"live-row",children:[C.jsxs("div",{className:"live-frame-wrap",children:[C.jsxs("div",{className:"live-frame-bar",children:[C.jsx("span",{className:"live-dot"}),C.jsx("span",{className:"live-dot"}),C.jsx("span",{className:"live-dot"}),C.jsx("span",{className:"live-frame-url",children:x2(m.link)}),C.jsx("a",{className:"live-open",href:m.link,target:"_blank",rel:"noopener noreferrer",children:e?"NEUER TAB ↗":"NEW TAB ↗"})]}),C.jsxs("div",{className:"live-frame",children:[!c&&C.jsx("span",{className:"live-frame-loading",children:e?"LÄDT …":"LOADING …"}),C.jsx("iframe",{src:m.link,title:m.name,onLoad:()=>h(!0)},m.link)]}),C.jsxs("div",{className:"live-caption",children:[C.jsx("span",{className:"live-caption-index",children:m.index}),C.jsxs("div",{className:"live-caption-body",children:[C.jsx("h3",{children:m.name}),C.jsx("p",{children:e?m.description:m.descriptionEn}),C.jsx("ul",{className:"live-caption-tech",children:m.tech.split(",").map(p=>{const g=p.trim(),v=Qx(g);return C.jsx("li",{title:g,children:v?C.jsx("i",{className:v,"aria-hidden":"true"}):C.jsx("span",{children:g})},g)})})]})]})]}),C.jsxs("div",{className:"live-nav","aria-label":e?"Projekte durchblättern":"Page through projects",children:[C.jsx("button",{className:"live-nav-btn",onClick:()=>d(-1),"aria-label":e?"Vorheriges Projekt":"Previous project",children:C.jsx("span",{className:"glow-text",children:"▲"})}),C.jsxs("span",{className:"live-nav-count",children:[String(s+1).padStart(2,"0")," / ",String(n.length).padStart(2,"0")]}),C.jsx("button",{className:"live-nav-btn",onClick:()=>d(1),"aria-label":e?"Nächstes Projekt":"Next project",children:C.jsx("span",{className:"glow-text",children:"▼"})})]})]}),C.jsx("p",{className:"live-hint",children:e?"▲▼ ODER PFEILTASTEN ZUM BLÄTTERN":"▲▼ OR ARROW KEYS TO PAGE"})]})}function y2({avatarUrl:r}){return C.jsxs("div",{className:"profile-card",children:[C.jsx("div",{className:"card-glow"}),C.jsx("img",{src:r,className:"profile-avatar"})]})}const sS="/JasonBay.dev/assets/BayJason-CgZ6RBiE.jpg";function rS(){const r=Te.useRef(null);return Te.useEffect(()=>{const e=r.current;if(!e)return;const n=new IntersectionObserver(([s])=>{s.isIntersecting&&(e.classList.add("in-view"),n.unobserve(e))},{threshold:0,rootMargin:"0px 0px -10% 0px"});return n.observe(e),()=>n.disconnect()},[]),r}const M2="!<>-_\\/[]{}—=+*^?#$%&";function ui({text:r,radius:e=52,speed:n=190,scrambleChars:s=M2,className:l="",as:c="span"}){const h=Array.from(r),d=Te.useRef([]),m=Te.useRef([]),p=Te.useRef(null),g=Te.useRef([]),v=Te.useRef(null),_=Te.useCallback(()=>{v.current!==null&&(cancelAnimationFrame(v.current),v.current=null);const O=Array.from(r);d.current.forEach((U,D)=>{U&&(U.textContent=O[D],U.classList.remove("is-scrambled"))})},[r]);Te.useEffect(()=>(_(),()=>{v.current!==null&&(cancelAnimationFrame(v.current),v.current=null)}),[r,_]);const y=()=>{m.current=d.current.map(O=>{if(!O)return{x:0,y:0};const U=O.getBoundingClientRect();return{x:U.left+U.width/2,y:U.top+U.height/2}}),g.current=new Array(h.length).fill(0)},b=O=>{const U=p.current;U&&d.current.forEach((D,B)=>{if(!D||h[B]===" ")return;const F=m.current[B];Math.hypot(U.x-F.x,U.y-F.y)<e?O-g.current[B]>n&&(g.current[B]=O,D.textContent=s[Math.floor(Math.random()*s.length)],D.classList.add("is-scrambled")):D.textContent!==h[B]&&(D.textContent=h[B],D.classList.remove("is-scrambled"))}),v.current=requestAnimationFrame(b)},T=()=>{y(),v.current===null&&(v.current=requestAnimationFrame(b))},M=O=>{p.current={x:O.clientX,y:O.clientY}},x=()=>{p.current=null,_()};return C.jsx(c,{className:l,onMouseEnter:T,onMouseMove:M,onMouseLeave:x,children:h.map((O,U)=>C.jsx("span",{ref:D=>{d.current[U]=D},children:O},U))})}const oS="/JasonBay.dev/assets/Instagram-n8caggNr.png",lS="/JasonBay.dev/assets/TikTok-CpvqXkYO.png",cS="/JasonBay.dev/assets/GitHub-Hrqx8hqp.png",uS="/JasonBay.dev/assets/LinkedIn-BloU1de1.png";function b2(){const r=rS(),{t:e}=Ji(),n=[{name:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu",icon:cS,stats:[{label:"Repos",value:"12"},{label:"Contributions",value:"143"}],accent:"#0969da"},{name:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu",icon:lS,stats:[{label:"Follower",value:"20.8K"},{label:"Likes",value:"3.5M"}],bio:"Random edits by some guy",accent:"#ee1d52",latestPost:{caption:e.socialStats.tiktokPreviewCaption}},{name:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/",icon:oS,stats:[{label:"Follower",value:"196"}],accent:"#d62976",latestPost:{caption:e.socialStats.instagramPreviewCaption}},{name:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/",icon:uS,stats:[],cta:e.socialStats.linkedinCta,accent:"#0a66c2"}];return C.jsxs("section",{className:"social-stats reveal",ref:r,children:[C.jsx(ui,{as:"h2",className:"social-stats-title",text:e.socialStats.title}),C.jsx("p",{className:"social-stats-subtitle",children:C.jsx(ui,{text:e.socialStats.subtitle})}),C.jsx("div",{className:"social-stats-grid",children:n.map(s=>C.jsxs("div",{className:"social-stat-cell",children:[s.latestPost&&C.jsxs("div",{className:"social-stat-preview",children:[C.jsx("span",{className:"social-stat-preview-label",children:e.socialStats.latestPost}),s.latestPost.image?C.jsx("img",{src:s.latestPost.image,alt:""}):C.jsx("div",{className:"social-stat-preview-placeholder",children:C.jsx("img",{src:s.icon,alt:"",className:"social-stat-preview-icon"})}),C.jsx("span",{className:"social-stat-preview-caption",children:s.latestPost.caption}),C.jsx("span",{className:"social-stat-preview-tail"})]}),C.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"social-stat-card",style:{"--stat-accent":s.accent},children:[C.jsxs("div",{className:"social-stat-header",children:[C.jsx("img",{src:s.icon,alt:"",className:"social-stat-icon"}),C.jsxs("div",{children:[C.jsx(ui,{as:"h3",text:s.name}),C.jsx("span",{className:"social-stat-handle",children:s.handle})]})]}),s.bio&&C.jsx("p",{className:"social-stat-bio",children:C.jsx(ui,{text:s.bio})}),s.stats.length>0?C.jsx("div",{className:"social-stat-numbers",children:s.stats.map(l=>C.jsxs("div",{className:"social-stat-number",children:[C.jsx("strong",{children:l.value}),C.jsx("span",{children:l.label})]},l.label))}):s.cta&&C.jsx("span",{className:"social-stat-cta",children:s.cta})]})]},s.name))})]})}function E2({href:r,onClick:e}){const{t:n}=Ji();return C.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"live-button",onClick:e,children:[C.jsx("span",{className:"live-button-dot"}),C.jsx("span",{className:"live-button-text",children:n.liveButton.label}),C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"live-button-arrow",children:C.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]})}function T2(r){try{const e=new URL(r);return`${e.hostname}${e.pathname.replace(/\/$/,"")}`}catch{return r}}function A2(){const r=rS(),e=Te.useRef(null),{lang:n,t:s}=Ji(),l=Te.useRef(0),c=Te.useRef(!1),h=Te.useRef(null),d=Te.useRef(!1),[m,p]=Te.useState(0);Te.useEffect(()=>{l.current=m},[m]),Te.useEffect(()=>()=>{h.current!==null&&cancelAnimationFrame(h.current)},[]),Te.useEffect(()=>{const _=e.current;if(!_)return;const y=()=>{c.current=!0};_.addEventListener("wheel",y,{passive:!0}),_.addEventListener("touchstart",y,{passive:!0}),_.addEventListener("pointerdown",y,{passive:!0});const b=Date.now()+8e3,T=window.setInterval(()=>{if(Date.now()>b){window.clearInterval(T);return}if(c.current||!_.offsetWidth)return;const M=l.current*_.offsetWidth;Math.abs(_.scrollLeft-M)>4&&(_.scrollLeft=M)},120);return()=>{_.removeEventListener("wheel",y),_.removeEventListener("touchstart",y),_.removeEventListener("pointerdown",y),window.clearInterval(T)}},[]);const g=_=>{const y=e.current;if(!y)return;c.current=!0;const b=(_+pl.length)%pl.length;p(b),h.current!==null&&cancelAnimationFrame(h.current);const T=y.scrollLeft,M=b*y.offsetWidth,x=M-T,O=420,U=500,D=performance.now();d.current=!0;const B=F=>{const z=F-D;if(z<O){const Z=z/O,R=1-Math.pow(1-Z,3);y.scrollLeft=T+x*R,h.current=requestAnimationFrame(B)}else z<O+U?(y.scrollLeft=M,h.current=requestAnimationFrame(B)):(h.current=null,d.current=!1)};h.current=requestAnimationFrame(B)},v=()=>{const _=e.current;if(!_||_.offsetWidth===0||d.current)return;const y=Math.round(_.scrollLeft/_.offsetWidth);p(y)};return C.jsxs("section",{id:"projects-preview",className:"projects-preview reveal",ref:r,children:[C.jsx(ui,{as:"h2",className:"projects-preview-title",text:s.projectsPreview.title}),C.jsx("p",{className:"projects-preview-subtitle",children:C.jsx(ui,{text:s.projectsPreview.subtitle})}),C.jsxs("div",{className:"preview-carousel-wrapper",children:[C.jsx("button",{type:"button",className:"preview-arrow left",onClick:()=>g(m-1),"aria-label":s.projectsPreview.previousProject,children:"‹"}),C.jsx("div",{className:"preview-track",ref:e,onScroll:v,children:pl.map((_,y)=>C.jsxs("div",{className:"preview-card",children:[C.jsxs("div",{className:"preview-browserbar",children:[C.jsx("span",{className:"browser-dot red"}),C.jsx("span",{className:"browser-dot yellow"}),C.jsx("span",{className:"browser-dot green"}),C.jsx("span",{className:"preview-url",children:T2(_.link)})]}),C.jsxs("a",{className:"preview-frame-wrapper",href:_.link,target:"_blank",rel:"noopener noreferrer","aria-label":s.projectsPreview.openLiveAria(_.name),children:[Math.abs(y-m)<=1&&C.jsx("iframe",{src:_.link,title:_.name,loading:y===0?"eager":"lazy",tabIndex:-1}),C.jsx("span",{className:"preview-frame-hint",children:s.projectsPreview.openLive})]}),C.jsxs("div",{className:"preview-card-body",children:[C.jsx(ui,{as:"h3",text:_.name}),C.jsx("p",{children:C.jsx(ui,{text:n==="en"?_.descriptionEn:_.description})}),C.jsx("small",{className:"preview-tech",children:_.tech}),C.jsx(E2,{href:_.link})]})]},_.name))}),C.jsx("button",{type:"button",className:"preview-arrow right",onClick:()=>g(m+1),"aria-label":s.projectsPreview.nextProject,children:"›"})]}),C.jsx("div",{className:"preview-dots",children:pl.map((_,y)=>C.jsx("button",{type:"button",className:`preview-dot ${y===m?"active":""}`,onClick:()=>g(y),"aria-label":s.projectsPreview.jumpTo(_.name)},_.name))})]})}function w2(r=.3){const e=Te.useRef(null),[n,s]=Te.useState(!1);return Te.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([h])=>s(h.isIntersecting),{threshold:r,rootMargin:"0px 0px -5% 0px"});return c.observe(l),()=>c.disconnect()},[r]),{ref:e,inView:n}}const vl=[{id:1,src:$x},{id:2,src:eS},{id:3,src:tS},{id:4,src:nS},{id:6,src:iS},{id:66,src:aS}],nx=500,R2=40;function ix(r){return(r%vl.length+vl.length)%vl.length}function C2(){const{t:r}=Ji(),{ref:e,inView:n}=w2(),[s,l]=Te.useState(0),[c,h]=Te.useState(!0),[d,m]=Te.useState(1),[p,g]=Te.useState(!0),v=Te.useRef(null),_=Te.useRef(null),y=Te.useRef(!1),b=Te.useRef(null),T=G=>{y.current||(y.current=!0,l(K=>ix(K+G)),window.setTimeout(()=>{y.current=!1},nx))},M=G=>{y.current||(y.current=!0,l(ix(G)),window.setTimeout(()=>{y.current=!1},nx))},x=()=>T(1),O=()=>T(-1),U=()=>g(G=>!G);Te.useEffect(()=>{const G=v.current;G&&(G.currentTime=0,G.volume=d,g(!0))},[s]),Te.useEffect(()=>{const G=v.current;G&&(n&&p?G.play().catch(()=>{}):G.pause())},[n,p,s]),Te.useEffect(()=>{const G=v.current;G&&(G.volume=d)},[d]),Te.useEffect(()=>{const G=_.current;if(!G)return;const K=he=>{he.preventDefault(),!(Math.abs(he.deltaY)<12)&&T(he.deltaY>0?1:-1)},ie=he=>{he.preventDefault()};return G.addEventListener("wheel",K,{passive:!1}),G.addEventListener("touchmove",ie,{passive:!1}),()=>{G.removeEventListener("wheel",K),G.removeEventListener("touchmove",ie)}},[]);const D=G=>G instanceof HTMLElement&&!!G.closest("button, input[type='range']"),B=G=>{if(D(G.target)){b.current=null;return}b.current=G.touches[0].clientY},F=G=>{if(D(G.target))return;const K=b.current;if(b.current=null,K===null)return;const ie=K-G.changedTouches[0].clientY;Math.abs(ie)<R2||(ie>0?x():O())},z=G=>G.stopPropagation(),Z=G=>{const K=Number(G.target.value);m(K),h(K===0)},R=vl[s],L=c||d===0;return C.jsxs("section",{id:"tiktok-showcase",className:`tiktok-showcase ${n?"in-view":""}`,ref:e,children:[C.jsx(ui,{as:"h2",className:"tiktok-showcase-title",text:r.tiktokShowcase.title}),C.jsx("a",{className:"tiktok-showcase-subtitle",href:"https://www.tiktok.com/@jsnuwu",target:"_blank",rel:"noopener noreferrer",children:C.jsx(ui,{text:r.tiktokShowcase.subtitle})}),C.jsxs("div",{className:"phone-dock",children:[C.jsxs("div",{className:"phone-frame",children:[C.jsx("span",{className:"phone-camera","aria-hidden":"true"}),C.jsxs("div",{className:"phone-screen",ref:_,onClick:U,onTouchStart:B,onTouchEnd:F,children:[C.jsx("video",{ref:v,className:"phone-video",src:R.src,muted:c,loop:!0,playsInline:!0,preload:"metadata"},R.id),!p&&C.jsx("span",{className:"phone-play-indicator","aria-hidden":"true",children:"▶"}),C.jsx("button",{type:"button",className:"phone-play-btn",onClick:G=>{z(G),U()},"aria-label":p?r.tiktokShowcase.pause:r.tiktokShowcase.play,children:p?"⏸":"▶"}),C.jsxs("div",{className:"phone-volume",onClick:z,children:[C.jsx("button",{type:"button",className:"phone-mute-btn",onClick:G=>{z(G),h(K=>!K)},"aria-label":L?r.tiktokShowcase.unmute:r.tiktokShowcase.mute,children:L?"🔇":"🔊"}),C.jsx("div",{className:"phone-volume-track",children:C.jsx("input",{type:"range",className:"phone-volume-slider",min:0,max:1,step:.01,value:c?0:d,onChange:Z,"aria-label":r.tiktokShowcase.volume})})]}),C.jsx("button",{type:"button",className:"phone-nav prev",onClick:G=>{z(G),O()},"aria-label":r.tiktokShowcase.prev,children:"▲"}),C.jsx("button",{type:"button",className:"phone-nav next",onClick:G=>{z(G),x()},"aria-label":r.tiktokShowcase.next,children:"▼"})]})]}),C.jsx("div",{className:"phone-dots",children:vl.map((G,K)=>C.jsx("button",{type:"button",className:`phone-dot ${K===s?"active":""}`,onClick:()=>M(K),"aria-label":r.tiktokShowcase.jumpTo(G.id)},G.id))})]})]})}function D2(){const{t:r}=Ji();return Te.useEffect(()=>{const e=document.body.classList.contains("dark");return document.body.classList.add("dark"),()=>{e||document.body.classList.remove("dark")}},[]),C.jsxs("div",{className:"old-portfolio",children:[C.jsx("section",{className:"hero",children:C.jsxs("div",{className:"hero-content",children:[C.jsxs("div",{className:"hero-text",children:[C.jsxs("h1",{className:"hero-title",children:[C.jsx(ui,{text:r.hero.titlePrefix})," ",C.jsx("span",{className:"hero-title-highlight",children:C.jsx(ui,{text:"Jason"})})]}),C.jsx("div",{className:"hero-tags",children:r.hero.tags.map(e=>C.jsx("a",{href:`#${e.target}`,className:"hero-tag",onClick:n=>{n.preventDefault(),document.getElementById(e.target)?.scrollIntoView({behavior:"smooth"})},children:e.label},e.target))}),C.jsx("p",{className:"hero-subtitle",children:C.jsx(ui,{text:r.hero.subtitle})})]}),C.jsx("div",{className:"hero-visual",children:C.jsx(y2,{avatarUrl:sS})})]})}),C.jsx(A2,{}),C.jsx(b2,{}),C.jsx(C2,{})]})}const L2="/JasonBay.dev/assets/Youtube-DcLdsh9q.png",N2="/JasonBay.dev/assets/adessologo2-BkRcKOgx.png",U2="data:image/webp;base64,UklGRooFAABXRUJQVlA4TH0FAAAvKAFKEB8gECAs+A+RZ0MgkESy88ZCAjIlSaYRCBCKRRsRgO6ZLTzJ1h63mbZtp4EWHUFlS0Ng5n3f/avQXWoQOkG6aLCZhSJuDgGTQP+ulIXsiFtDwCQ4hKucwV0XlojzPE7Y7Yj+TwABZmbmlmqY//PXJ3/7jzd3Ot7y5eMvbeXf8+J3X1h6CFyYjt5MDly+svIYWPKzkZ5Fk7eQb1k4rQxMLL7Bewxy/Au4O1ac0X5k1U9gvU7yUN+x8gEpBy12QN+x+sHD5KDHDuZrBjyg5IDAHmTPkO9AeozkIf7AoBuIe5R3CDGg8DXAxLCvAG5xklOLDNyqDUjv1Hqk5JVODN0o7bE6pYDFTiUyeKuyR+tUBrSkERl+pTDhbRQGvKTQ47EXi2ywERstvBK7s5DEggX2Qic22QiNNl4J3dlIQr0N9iKRjTYik5VXIoOVWaS3krxADFa4FTix2UZgb6cTGOzMAsEOu6LMFZksbYpGS13RYCkV9RWJbNrVpC0YbXUF9zUZbKWC3hb7RZGNu5q0i0ZrXa0Ga/Oi3lpaFKyxW5DZ/NWCrb1mwWTv1YJ7e92Cwd68oLeXasL+QuQKupq0F6YaNDV5deG+BusLQ012NUgX+qKjcpBhfyaHkjUp74Tcmchgg9BVTdozU9FsoxFaa+2EujNj0aw1qAx1WAutbcxndkWzjXSmrwP7J6ES7glXJNbiqiYtEW1r0RDRVIuNiZ1UR0Qj3KAxwO2k1jLrmsxGZiLala1rMmv1UuyJ+rK1FUcUXiaRXyJXNWnrssULYg1Nz1lm8a4uI1x8Ju5rMrxI1s/bVm5+3iasuSZJaZRLIvzv/xR6U8VtwfBiuEJhh+Ceoyu8XU36F4MvCKYSVWQuiPxSWNekq9f0QhltbWrSFgwvBleweyYcXK+QvF7yBUGD9GZantnUuiDa6nBmuK2tpmCy1RaMtlzB8Ex0eokKd6ZmqHutriTojFjZVlsQWWfScjXxBZPKK7VEQA1tlbqSQaWl+Hy0Jbua9CpXlJV8QWZVRzmoJCqMWqTTlWzVepVNyaS2U3El9yqJwAa1QWNNpTuVWasr6i21JZlVOyK613AlUW9SmKl0stRhvSKirUJbNOg0RBQVHFarM1Nxr3NFRFnu52VBxxER9WKuKLKd5Iu2Sv7JTqqj4r3OTE8HqaZssJN8Wa/TndkLvSMTk1BbFln3lUZyZVul5kyUeUXle6VW41pgULo6Q0FiJsFeyZ3rJX4ukAPGIJBIMLLuTHKfJCaQ+7LkJQal7sJY9o4kdyDbMieRg1JzIRYdSDKycnshhxInMmq5C1TyE4newwzLkpcJSomEPpFoZuV5wX7RTLKTVrdgXJJ+ITTixCUbEt5pNSKHlVSv1S6g/pIn4cjaTuIzSU9ayS8Zzm1IfNCaaen+zNHJ9VrdounJO5I/sfarRZGZj9cKo1qzKAf+DWneqblF9HD0KgFLeWTtmYD3ah1SUNsAZVZvgPZ6DminloAiq8+EO+l1QHd6DU4Oei3OntWTx9kBEOyJ9TucEWADkwOAg4msnzzMHUBHqDkA/BzmawZsYXoEh7JnwJlQe4QO5ZERW5Q7CAfyyIgzgfYQHciPDLkC6SGSw/iOITuCzAFjAxFvGdNBTIyZPMJjAHlFiHcMeg2QjwyaCPDEqO8AfgwwrV7uGTU5tR9vGbYj9TvGvdYbcBLpf43zCSAHGAdAdygHjxBRWkLMtxjJQdCEsSHMGBDSCoRGhI5QTwHgGob2eh3hnoJWugaiUesVIcdbnbSCopPOhrDztxqHFRjloLAi+Ae5nzweDVIzWfzDtzKHX5igHERWZPTh27LDkczm25L0BRn+8Xi75HD8TLb/GS6l35L5h+NlZw8aAA==",O2="/JasonBay.dev/assets/lebenshilfe.de-removebg-preview-OMT4mOLJ.png",Ld={tiktok:lS,youtube:L2,instagram:oS,github:cS,linkedin:uS};function Nd(r){return r.trim().toLowerCase()}const P2=[["telution",U2],["adesso",N2],["lebenshilfe",O2]];function I2(r){const e=r.toLowerCase();for(const[n,s]of P2)if(e.includes(n))return{logo:s,slug:n};return null}const B2={muttersprache:100,native:100,c2:94,c1:82,b2:66,b1:50,a2:34,a1:20};function z2(r){return B2[r.trim().toLowerCase()]??60}function F2(r){const e=r.toLowerCase();return e.startsWith("deutsch")||e.startsWith("german")?"🇩🇪":e.startsWith("englisch")||e.startsWith("english")?"🇬🇧":e.startsWith("franz")||e.startsWith("french")?"🇫🇷":e.startsWith("spanisch")||e.startsWith("spanish")?"🇪🇸":"🌐"}const cl={about:{de:"Über mich",en:"About"},work:{de:"Portfolio",en:"Portfolio"},live:{de:"Live Projekte",en:"Live Projects"},skills:{de:"Skills",en:"Skills"},experience:{de:"Werdegang",en:"Experience"},gallery:{de:"Galerie",en:"Gallery"},social:{de:"Social Media",en:"Social Media"},languages:{de:"Sprachen",en:"Languages"},contact:{de:"Kontakt",en:"Contact"}},Ud={about:{de:"Wer ich bin und wie ich arbeite.",en:"Who I am and how I work."},work:{de:"Meine erste Portfolio-Seite.",en:"My first portfolio site."},live:{de:"Andere Projekte, live eingebettet · hoch/runter blättern, direkt ausprobieren.",en:"Other projects, embedded live · page up/down, try them directly."},skills:{de:"Werkzeuge und Methoden, mit denen ich täglich arbeite.",en:"Tools and methods I work with day to day."},experience:{de:"Stationen von der Ausbildung bis heute.",en:"Stations from apprenticeship to today."},gallery:{de:"Fotografie abseits vom Code · Wandern, Motorrad, Tiere.",en:"Photography beyond the code · hiking, motorcycles, pets."},social:{de:"Instagram, TikTok und YouTube · Konzeption, Schnitt und Gestaltung seit 2020.",en:"Instagram, TikTok and YouTube · concept, editing and design since 2020."},languages:{de:"",en:""},contact:{de:"Schreib mir, ich melde mich zurück.",en:"Drop me a line, I'll get back to you."}};function H2({id:r,onBack:e}){const{t:n,lang:s}=Ji(),l=s==="de",c=Te.useRef(null),h=Te.useRef(0),d=Te.useRef(!1),[m,p]=Te.useState(0);Te.useEffect(()=>{c.current?.scrollTo({top:0})},[r]),Te.useEffect(()=>{const b=c.current;if(!b)return;const T=()=>{d.current||(d.current=!0,b.classList.add("is-leaving"),window.setTimeout(e,420))},M=B=>{if(!d.current){if(b.scrollTop>0){h.current=0,m!==0&&p(0);return}if(B.deltaY<0){h.current+=-B.deltaY;const F=Math.min(1,h.current/320);p(F),h.current>320&&T()}else h.current=0,m!==0&&p(0)}};let x=0;const O=B=>{x=B.touches[0].clientY},U=B=>{if(d.current||b.scrollTop>0)return;const F=B.touches[0].clientY-x;F>0&&(h.current=F,p(Math.min(1,F/200)),F>200&&T())},D=()=>{h.current=0,p(0)};return b.addEventListener("wheel",M,{passive:!0}),b.addEventListener("touchstart",O,{passive:!0}),b.addEventListener("touchmove",U,{passive:!0}),b.addEventListener("touchend",D,{passive:!0}),()=>{b.removeEventListener("wheel",M),b.removeEventListener("touchstart",O),b.removeEventListener("touchmove",U),b.removeEventListener("touchend",D)}},[e,m]);const g=cl[r]?l?cl[r].de:cl[r].en:r,v=Ud[r]?l?Ud[r].de:Ud[r].en:"",_=Object.keys(cl).length,y=String(Object.keys(cl).indexOf(r)+1).padStart(2,"0")+" / "+String(_).padStart(2,"0");return C.jsxs("div",{className:`section-page ${r==="work"?"section-page-dark":""}`,ref:c,style:{transform:m?`translateY(${m*40}px)`:void 0},children:[C.jsx("div",{className:"sp-pull",style:{opacity:m,transform:`scaleX(${.2+m*.8})`},"aria-hidden":"true",children:C.jsx("span",{children:l?"LOSLASSEN FÜR RAUM":"RELEASE FOR SPACE"})}),C.jsxs("div",{className:"sp-topbar",children:[C.jsx("button",{className:"sp-back",onClick:e,children:C.jsx("span",{className:"glow-text",children:l?"↑ ZURÜCK ZUM RAUM":"↑ BACK TO SPACE"})}),C.jsx("span",{className:"sp-num",children:y})]}),C.jsxs("header",{className:"sp-header",children:[C.jsx("h1",{children:g}),v&&C.jsx("p",{className:"sp-intro",children:v})]}),C.jsxs("div",{className:`sp-body ${r==="work"?"sp-body-wide":""} ${r==="live"?"sp-body-live":""}`,children:[r==="gallery"&&C.jsx(v2,{}),r==="live"&&C.jsx(S2,{}),r==="social"&&C.jsxs("div",{className:"sp-social",children:[C.jsx(_2,{}),C.jsx("ul",{className:"sp-social-links",children:$_().filter(b=>["Instagram","TikTok","YouTube"].includes(b.label)).map(b=>C.jsx("li",{children:C.jsxs("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",children:[C.jsx("img",{className:"sp-social-logo",src:Ld[Nd(b.label)],alt:"","aria-hidden":"true",loading:"lazy"}),C.jsx("span",{className:"sp-social-name",children:b.label}),C.jsxs("span",{className:"sp-social-handle",children:[b.handle," ↗"]})]})},b.label))})]}),r==="work"&&C.jsx(D2,{}),r==="experience"&&C.jsx("ol",{className:"sp-timeline",children:n.experience.entries.map(b=>{const T=I2(b.org);return C.jsxs("li",{children:[C.jsx("span",{className:`spt-badge${T?" has-logo":""}`,"data-org":T?.slug,"aria-hidden":"true",children:T?C.jsx("img",{src:T.logo,alt:"",loading:"lazy"}):b.org.replace(/[^A-Za-zÄÖÜ]/g,"").slice(0,2).toUpperCase()}),C.jsxs("div",{className:"spt-body",children:[C.jsx("span",{className:"spt-period",children:b.period}),C.jsx("span",{className:"spt-org",children:b.org}),C.jsx("span",{className:"spt-role",children:b.role}),C.jsx("ul",{children:b.bullets.map(M=>C.jsx("li",{children:M},M))})]})]},b.org)})}),r==="skills"&&C.jsx("div",{className:"sp-skills",children:n.skills.groups.map((b,T)=>C.jsxs("div",{className:"skrow",children:[C.jsx("span",{className:"skrow-num",children:String(T+1).padStart(2,"0")}),C.jsx("h3",{className:"skrow-title",children:b.title}),C.jsx("ul",{className:"skrow-tags",children:b.items.split(",").map(M=>{const x=M.trim(),O=Ld[Nd(x)],U=Qx(x);return C.jsxs("li",{children:[O?C.jsx("img",{className:"skrow-logo",src:O,alt:"","aria-hidden":"true",loading:"lazy"}):U?C.jsx("i",{className:U,"aria-hidden":"true"}):C.jsx("span",{className:"skrow-mono","aria-hidden":"true",children:x.slice(0,1)}),x]},x)})})]},b.title))}),r==="languages"&&C.jsx("ul",{className:"sp-langs",children:n.skills.languages.map(b=>C.jsxs("li",{children:[C.jsx("span",{className:"sp-lang-flag","aria-hidden":"true",children:F2(b.name)}),C.jsx("span",{className:"sp-lang-name",children:b.name}),C.jsx("span",{className:"sp-lang-level",children:b.level}),C.jsx("span",{className:"sp-lang-bar",children:C.jsx("span",{style:{width:`${z2(b.level)}%`}})})]},b.name))}),r==="about"&&C.jsxs("div",{className:"sp-about",children:[C.jsxs("div",{className:"sp-prose",children:[C.jsx("p",{className:"sp-lead",children:n.about.lead}),C.jsx("p",{children:l?"Ein paar Fakten zu mir:":"A few facts about me:"}),C.jsxs("ul",{className:"sp-facts",children:[C.jsxs("li",{children:[C.jsx("span",{"aria-hidden":"true",children:"🎂"}),l?"Jahrgang 2005":"Born 2005"]}),C.jsxs("li",{children:[C.jsx("span",{"aria-hidden":"true",children:"📍"}),"Vaihingen an der Enz"]}),C.jsxs("li",{children:[C.jsx("span",{"aria-hidden":"true",children:"🚗"}),l?"Führerschein Klasse B & A2":"Driver's license class B & A2"]}),C.jsxs("li",{children:[C.jsx("span",{"aria-hidden":"true",children:"🗣️"}),l?"Deutsch (Muttersprache)":"German (native)"]}),C.jsxs("li",{children:[C.jsx("span",{"aria-hidden":"true",children:"🏍️"}),l?"Hobbys: Motorrad, Wandern, Tiere":"Hobbies: motorcycles, hiking, animals"]})]}),C.jsx("p",{children:l?"Vor der Ausbildung ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker. Danach die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso, abgeschlossen im Januar 2026 (IHK). Seither Junior Software Engineer bei Telution.":"Before the apprenticeship, a voluntary social year at Lebenshilfe Vaihingen-Mühlacker. Then an apprenticeship as an IT specialist for application development at adesso, completed in January 2026 (IHK). Since then a Junior Software Engineer at Telution."})]}),C.jsxs("figure",{className:"sp-portrait",children:[C.jsx("img",{src:sS,alt:"Jason Bay"}),C.jsx("figcaption",{children:"Jason Bay · Vaihingen an der Enz"})]})]}),r==="contact"&&C.jsxs("div",{className:"sp-contact",children:[C.jsxs("div",{className:"sp-prose",children:[C.jsx("p",{children:n.contact.intro}),C.jsx("a",{className:"sp-email",href:`mailto:${ex}`,children:ex}),C.jsx("ul",{className:"sp-social-links sp-contact-links",children:$_().map(b=>C.jsx("li",{children:C.jsxs("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",children:[C.jsx("img",{className:"sp-social-logo",src:Ld[Nd(b.label)],alt:"","aria-hidden":"true",loading:"lazy"}),C.jsx("span",{className:"sp-social-name",children:b.label}),C.jsxs("span",{className:"sp-social-handle",children:[b.handle," ↗"]})]})},b.label))})]}),C.jsxs("form",{className:"sp-form",action:"https://formspree.io/f/mreakbje",method:"POST",children:[C.jsxs("label",{children:[C.jsx("span",{children:"Name"}),C.jsx("input",{name:"name",type:"text",placeholder:n.contact.namePlaceholder,required:!0})]}),C.jsxs("label",{children:[C.jsx("span",{children:l?"E-Mail":"Email"}),C.jsx("input",{name:"email",type:"email",placeholder:n.contact.emailPlaceholder,required:!0})]}),C.jsxs("label",{children:[C.jsx("span",{children:l?"Nachricht":"Message"}),C.jsx("textarea",{name:"message",rows:5,placeholder:n.contact.messagePlaceholder,required:!0})]}),C.jsx("button",{type:"submit",children:n.contact.submit})]})]})]})]})}const ul=["main","about"],du=.45,fl=3.2;function G2(){const{lang:r,setLang:e}=Ji(),[n,s]=Te.useState("main"),[l,c]=Te.useState(null),[h,d]=Te.useState(!1),[m,p]=Te.useState(!1),g=Te.useRef({x:0,y:0}),v=Te.useRef({x:0,y:0}),_=Te.useRef({x:0,y:0}),y=Te.useRef(1),b=Te.useRef(null),T=Te.useRef(new Map),M=Te.useRef(0),x=Te.useRef(0),O=Te.useMemo(()=>bC(),[r]),U=Te.useMemo(()=>EC(r),[r]),D=Te.useMemo(()=>MC(),[r]),B=Te.useMemo(()=>n==="main"?O.map((N,H)=>({id:`kw-${H}`,strong:N.strong,position:[Math.cos(N.angle)*N.radius,Math.sin(N.angle)*N.radius*.78,N.depth]})):n==="about"?U.map(N=>({id:N.id,position:N.position})):[],[n,O,U]),F=Te.useCallback(()=>{p(!0),window.clearTimeout(x.current),x.current=window.setTimeout(()=>p(!1),460)},[]),z=Te.useCallback(N=>{s(H=>(H!==N&&F(),N)),c(null)},[F]),Z=Te.useCallback(N=>{s(H=>{const J=ul.indexOf(H),Se=ul[Math.min(ul.length-1,Math.max(0,J+N))];return Se!==H&&F(),Se})},[F]);Te.useEffect(()=>{n!=="about"&&(v.current={x:0,y:0},_.current={x:0,y:0},y.current=1)},[n]),Te.useEffect(()=>()=>window.clearTimeout(x.current),[]);const R=Te.useCallback(()=>{if(h)try{const N=window.AudioContext||window.webkitAudioContext,H=new N,J=H.createOscillator(),Se=H.createGain();J.type="sine",J.frequency.value=520,Se.gain.value=.04,J.connect(Se).connect(H.destination),J.start(),Se.gain.exponentialRampToValueAtTime(1e-4,H.currentTime+.14),J.stop(H.currentTime+.16),J.onended=()=>H.close()}catch{}},[h]),L=Te.useCallback(N=>{R(),c(N)},[R]);Te.useEffect(()=>{const N=H=>{g.current={x:H.clientX/window.innerWidth*2-1,y:H.clientY/window.innerHeight*2-1}};return window.addEventListener("pointermove",N),()=>window.removeEventListener("pointermove",N)},[]),Te.useEffect(()=>{const N=H=>{if(l)return;if(n==="about"){const Se=H.deltaY>0?1:-1,Ee=y.current+Se*.09;if(Ee>fl){const P=performance.now();P-M.current>800&&(M.current=P,y.current=1,Z(-1));return}y.current=Xs(Ee,du,fl);return}const J=performance.now();J-M.current<900||Math.abs(H.deltaY)<24||(M.current=J,Z(H.deltaY>0?1:-1))};return window.addEventListener("wheel",N,{passive:!0}),()=>window.removeEventListener("wheel",N)},[l,n,Z]),Te.useEffect(()=>{const N=H=>{H.key==="Escape"&&l&&c(null)};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[l]);const G=Fb({onDrag:({movement:[N,H],first:J,last:Se,pinching:Ee})=>{if(l||Ee)return;J&&(_.current={...v.current});const P=n==="about";let ee=_.current.x+N*(P?.008:.005);const _e=Xs(_.current.y-H*.004,-.85,.85);P||(ee=Xs(ee,-.7,.7)),v.current={x:ee,y:_e},Se&&!P&&(v.current={x:0,y:0})},onPinch:({offset:[N]})=>{l||n!=="about"||(y.current=Xs(1/N,du,fl))}},{drag:{filterTaps:!0},pinch:{scaleBounds:{min:1/fl,max:1/du}}}),K=r==="de",ie=l||n==="main"?"light":"dark",he="Frontend Developer · Vaihingen an der Enz",ue=n==="main"?K?"SCROLLEN ZU ÜBER MICH ↓":"SCROLL TO ABOUT ↓":K?"SCROLLEN ODER ZIEHEN · KNOTEN ANKLICKEN":"SCROLL OR DRAG · CLICK A NODE";return C.jsxs("div",{className:"experience-root","data-scene":n,"data-surface":ie,children:[C.jsx(SC,{}),C.jsxs("div",{className:`experience scene-${n} ${l?"is-dived":""} ${m?"is-warping":""}`,...G(),children:[C.jsx(xC,{scene:n,anchors:B,pointerRef:g,dragRef:v,zoomRef:y,hoverRef:b,labelEls:T}),n==="main"&&C.jsxs("button",{className:"identity","data-hover":!0,onClick:()=>{R(),z("about")},"aria-label":K?"Weiter zu Über mich":"Continue to About",children:[C.jsx("span",{className:"identity-name",children:D.name}),C.jsx("span",{className:"identity-node","aria-hidden":"true"})]}),C.jsxs("div",{className:"label-layer",children:[n==="main"&&O.map((N,H)=>C.jsx("span",{ref:J=>{T.current.set(`kw-${H}`,J)},className:`kw-label ${N.strong?"strong":"faint"}`,onMouseEnter:()=>{b.current=`kw-${H}`},onMouseLeave:()=>{b.current=null},children:C.jsx("span",{className:"glow-text",children:N.label})},`kw-${H}`)),n==="about"&&U.map(N=>C.jsx("button",{ref:H=>{T.current.set(N.id,H)},className:"section-label",style:{fontSize:`${.72+N.scale*.5}rem`},onClick:()=>L(N.id),onMouseEnter:()=>{b.current=N.id},onMouseLeave:()=>{b.current=null},children:C.jsx("span",{className:"glow-text",children:N.label})},N.id))]}),C.jsxs("header",{className:"chrome-top",children:[C.jsx("button",{className:"wordmark",onClick:()=>z("main"),children:C.jsx("span",{className:"glow-text",children:"JASON BAY"})}),C.jsxs("nav",{className:"chrome-nav",children:[C.jsx("button",{className:n==="about"&&!l?"active":"",onClick:()=>{R(),z("about")},children:C.jsx("span",{className:"glow-text",children:K?"ÜBER MICH":"ABOUT ME"})}),C.jsx("button",{className:l==="work"?"active":"",onClick:()=>L("work"),children:C.jsx("span",{className:"glow-text",children:"PORTFOLIO"})})]})]}),C.jsxs("div",{className:"chrome-bottom",children:[C.jsx("span",{className:"role-line",children:he}),C.jsx("span",{className:"hint-line",children:ue}),C.jsxs("span",{className:"scene-index",children:[String(ul.indexOf(n)+1).padStart(2,"0")," / 0",ul.length]})]}),n==="about"&&!l&&C.jsx(V2,{zoomRef:y,min:du,max:fl})]}),C.jsxs("div",{className:"global-meta",children:[C.jsx("button",{className:l==="contact"?"active":"",onClick:()=>L("contact"),children:C.jsx("span",{className:"glow-text",children:K?"KONTAKT":"CONTACT"})}),C.jsxs("span",{className:"lang-switch",children:[C.jsx("button",{className:K?"active":"",onClick:()=>e("de"),children:"DE"}),C.jsx("span",{children:"/"}),C.jsx("button",{className:K?"":"active",onClick:()=>e("en"),children:"EN"})]}),C.jsxs("button",{className:"sound-toggle",onClick:()=>d(N=>!N),children:["SOUND ",h?"ON":"OFF"]})]}),l&&C.jsx(H2,{id:l,onBack:()=>c(null)})]})}function Xs(r,e,n){return Math.min(n,Math.max(e,r))}function V2({zoomRef:r,min:e,max:n}){const s=Te.useRef(null),l=Te.useRef(null),c=Te.useRef(!1);Te.useEffect(()=>{let m=0;const p=()=>{const g=s.current,v=l.current;if(g&&v){const _=g.clientHeight,y=Xs((r.current-e)/(n-e),0,1);v.style.top=`${y*Math.max(0,_-14)}px`}m=requestAnimationFrame(p)};return m=requestAnimationFrame(p),()=>cancelAnimationFrame(m)},[r,e,n]);const h=Te.useCallback(m=>{const p=s.current;if(!p)return;const g=p.getBoundingClientRect(),v=Xs((m-g.top)/g.height,0,1);r.current=e+v*(n-e)},[r,e,n]),d=m=>{r.current=Xs(r.current+m*.22,e,n)};return C.jsxs("div",{className:"zoom-control",children:[C.jsx("button",{className:"zoom-btn",type:"button",onClick:()=>d(-1),"aria-label":"Zoom in",children:"+"}),C.jsx("div",{className:"zoom-track",ref:s,onPointerDown:m=>{c.current=!0,m.target.setPointerCapture(m.pointerId),h(m.clientY)},onPointerMove:m=>{c.current&&h(m.clientY)},onPointerUp:m=>{c.current=!1,m.target.releasePointerCapture(m.pointerId)},children:C.jsx("div",{className:"zoom-thumb",ref:l})}),C.jsx("button",{className:"zoom-btn",type:"button",onClick:()=>d(1),"aria-label":"Zoom out",children:"–"})]})}function k2(){return C.jsx(AM,{children:C.jsx(G2,{})})}EM.createRoot(document.getElementById("root")).render(C.jsx(Te.StrictMode,{children:C.jsx(k2,{})}));
