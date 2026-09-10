(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function wy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sd={exports:{}},Go={};var K0;function Cy(){if(K0)return Go;K0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var J0;function Dy(){return J0||(J0=1,Sd.exports=Cy()),Sd.exports}var z=Dy(),yd={exports:{}},ft={};var Q0;function Ly(){if(Q0)return ft;Q0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(P,te,ve){this.props=P,this.context=te,this.refs=M,this.updater=ve||E}x.prototype.isReactComponent={},x.prototype.setState=function(P,te){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,te,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=x.prototype;function U(P,te,ve){this.props=P,this.context=te,this.refs=M,this.updater=ve||E}var C=U.prototype=new O;C.constructor=U,T(C,x.prototype),C.isPureReactComponent=!0;var B=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(P,te,ve){var Re=ve.ref;return{$$typeof:r,type:P,key:te,ref:Re!==void 0?Re:null,props:ve}}function D(P,te){return w(P.type,te,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var te={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ve){return te[ve]})}var ne=/\/+/g;function fe(P,te){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):te.toString(36)}function ce(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(te){P.status==="pending"&&(P.status="fulfilled",P.value=te)},function(te){P.status==="pending"&&(P.status="rejected",P.reason=te)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,te,ve,Re,He){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var ue=!1;if(P===null)ue=!0;else switch(ie){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(P.$$typeof){case r:case e:ue=!0;break;case g:return ue=P._init,L(ue(P._payload),te,ve,Re,He)}}if(ue)return He=He(P),ue=Re===""?"."+fe(P,0):Re,B(He)?(ve="",ue!=null&&(ve=ue.replace(ne,"$&/")+"/"),L(He,te,ve,"",function(Ge){return Ge})):He!=null&&(H(He)&&(He=D(He,ve+(He.key==null||P&&P.key===He.key?"":(""+He.key).replace(ne,"$&/")+"/")+ue)),te.push(He)),1;ue=0;var we=Re===""?".":Re+":";if(B(P))for(var Xe=0;Xe<P.length;Xe++)Re=P[Xe],ie=we+fe(Re,Xe),ue+=L(Re,te,ve,ie,He);else if(Xe=y(P),typeof Xe=="function")for(P=Xe.call(P),Xe=0;!(Re=P.next()).done;)Re=Re.value,ie=we+fe(Re,Xe++),ue+=L(Re,te,ve,ie,He);else if(ie==="object"){if(typeof P.then=="function")return L(ce(P),te,ve,Re,He);throw te=String(P),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ue}function G(P,te,ve){if(P==null)return P;var Re=[],He=0;return L(P,Re,"","",function(ie){return te.call(ve,ie,He++)}),Re}function J(P){if(P._status===-1){var te=P._result;te=te(),te.then(function(ve){(P._status===0||P._status===-1)&&(P._status=1,P._result=ve)},function(ve){(P._status===0||P._status===-1)&&(P._status=2,P._result=ve)}),P._status===-1&&(P._status=0,P._result=te)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},_e={map:G,forEach:function(P,te,ve){G(P,function(){te.apply(this,arguments)},ve)},count:function(P){var te=0;return G(P,function(){te++}),te},toArray:function(P){return G(P,function(te){return te})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ft.Activity=_,ft.Children=_e,ft.Component=x,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=U,ft.StrictMode=s,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ft.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},ft.cache=function(P){return function(){return P.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(P,te,ve){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=T({},P.props),He=P.key;if(te!=null)for(ie in te.key!==void 0&&(He=""+te.key),te)!Z.call(te,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&te.ref===void 0||(Re[ie]=te[ie]);var ie=arguments.length-2;if(ie===1)Re.children=ve;else if(1<ie){for(var ue=Array(ie),we=0;we<ie;we++)ue[we]=arguments[we+2];Re.children=ue}return w(P.type,He,Re)},ft.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ft.createElement=function(P,te,ve){var Re,He={},ie=null;if(te!=null)for(Re in te.key!==void 0&&(ie=""+te.key),te)Z.call(te,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(He[Re]=te[Re]);var ue=arguments.length-2;if(ue===1)He.children=ve;else if(1<ue){for(var we=Array(ue),Xe=0;Xe<ue;Xe++)we[Xe]=arguments[Xe+2];He.children=we}if(P&&P.defaultProps)for(Re in ue=P.defaultProps,ue)He[Re]===void 0&&(He[Re]=ue[Re]);return w(P,ie,He)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(P){return{$$typeof:h,render:P}},ft.isValidElement=H,ft.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:J}},ft.memo=function(P,te){return{$$typeof:p,type:P,compare:te===void 0?null:te}},ft.startTransition=function(P){var te=I.T,ve={};I.T=ve;try{var Re=P(),He=I.S;He!==null&&He(ve,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(F,me)}catch(ie){me(ie)}finally{te!==null&&ve.types!==null&&(te.types=ve.types),I.T=te}},ft.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ft.use=function(P){return I.H.use(P)},ft.useActionState=function(P,te,ve){return I.H.useActionState(P,te,ve)},ft.useCallback=function(P,te){return I.H.useCallback(P,te)},ft.useContext=function(P){return I.H.useContext(P)},ft.useDebugValue=function(){},ft.useDeferredValue=function(P,te){return I.H.useDeferredValue(P,te)},ft.useEffect=function(P,te){return I.H.useEffect(P,te)},ft.useEffectEvent=function(P){return I.H.useEffectEvent(P)},ft.useId=function(){return I.H.useId()},ft.useImperativeHandle=function(P,te,ve){return I.H.useImperativeHandle(P,te,ve)},ft.useInsertionEffect=function(P,te){return I.H.useInsertionEffect(P,te)},ft.useLayoutEffect=function(P,te){return I.H.useLayoutEffect(P,te)},ft.useMemo=function(P,te){return I.H.useMemo(P,te)},ft.useOptimistic=function(P,te){return I.H.useOptimistic(P,te)},ft.useReducer=function(P,te,ve){return I.H.useReducer(P,te,ve)},ft.useRef=function(P){return I.H.useRef(P)},ft.useState=function(P){return I.H.useState(P)},ft.useSyncExternalStore=function(P,te,ve){return I.H.useSyncExternalStore(P,te,ve)},ft.useTransition=function(){return I.H.useTransition()},ft.version="19.2.5",ft}var $0;function sp(){return $0||($0=1,yd.exports=Ly()),yd.exports}var Ee=sp();const Md=wy(Ee);var Ed={exports:{}},Vo={},bd={exports:{}},Td={};var e_;function Uy(){return e_||(e_=1,(function(r){function e(L,G){var J=L.length;L.push(G);e:for(;0<J;){var me=J-1>>>1,_e=L[me];if(0<l(_e,G))L[me]=G,L[J]=_e,J=me;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var G=L[0],J=L.pop();if(J!==G){L[0]=J;e:for(var me=0,_e=L.length,P=_e>>>1;me<P;){var te=2*(me+1)-1,ve=L[te],Re=te+1,He=L[Re];if(0>l(ve,J))Re<_e&&0>l(He,ve)?(L[me]=He,L[Re]=J,me=Re):(L[me]=ve,L[te]=J,me=te);else if(Re<_e&&0>l(He,J))L[me]=He,L[Re]=J,me=Re;else break e}}return G}function l(L,G){var J=L.sortIndex-G.sortIndex;return J!==0?J:L.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,_=null,v=3,y=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(L){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=L)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function B(L){if(T=!1,C(L),!E)if(i(m)!==null)E=!0,F||(F=!0,K());else{var G=i(p);G!==null&&ce(B,G.startTime-L)}}var F=!1,I=-1,Z=5,w=-1;function D(){return M?!0:!(r.unstable_now()-w<Z)}function H(){if(M=!1,F){var L=r.unstable_now();w=L;var G=!0;try{e:{E=!1,T&&(T=!1,O(I),I=-1),y=!0;var J=v;try{t:{for(C(L),_=i(m);_!==null&&!(_.expirationTime>L&&D());){var me=_.callback;if(typeof me=="function"){_.callback=null,v=_.priorityLevel;var _e=me(_.expirationTime<=L);if(L=r.unstable_now(),typeof _e=="function"){_.callback=_e,C(L),G=!0;break t}_===i(m)&&s(m),C(L)}else s(m);_=i(m)}if(_!==null)G=!0;else{var P=i(p);P!==null&&ce(B,P.startTime-L),G=!1}}break e}finally{_=null,v=J,y=!1}G=void 0}}finally{G?K():F=!1}}}var K;if(typeof U=="function")K=function(){U(H)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,fe=ne.port2;ne.port1.onmessage=H,K=function(){fe.postMessage(null)}}else K=function(){x(H,0)};function ce(L,G){I=x(function(){L(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(L){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var J=v;v=G;try{return L()}finally{v=J}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=v;v=L;try{return G()}finally{v=J}},r.unstable_scheduleCallback=function(L,G,J){var me=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,L){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=J+_e,L={id:g++,callback:G,priorityLevel:L,startTime:J,expirationTime:_e,sortIndex:-1},J>me?(L.sortIndex=J,e(p,L),i(m)===null&&L===i(p)&&(T?(O(I),I=-1):T=!0,ce(B,J-me))):(L.sortIndex=_e,e(m,L),E||y||(E=!0,F||(F=!0,K()))),L},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(L){var G=v;return function(){var J=v;v=G;try{return L.apply(this,arguments)}finally{v=J}}}})(Td)),Td}var t_;function Ny(){return t_||(t_=1,bd.exports=Uy()),bd.exports}var Ad={exports:{}},Ln={};var n_;function Oy(){if(n_)return Ln;n_=1;var r=sp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.5",Ln}var i_;function Tv(){if(i_)return Ad.exports;i_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ad.exports=Oy(),Ad.exports}var a_;function Py(){if(a_)return Vo;a_=1;var r=Ny(),e=sp(),i=Tv();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var ce=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},me=[],_e=-1;function P(t){return{current:t}}function te(t){0>_e||(t.current=me[_e],me[_e]=null,_e--)}function ve(t,n){_e++,me[_e]=t.current,t.current=n}var Re=P(null),He=P(null),ie=P(null),ue=P(null);function we(t,n){switch(ve(ie,n),ve(He,t),ve(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?x0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=x0(n),t=S0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Re),ve(Re,t)}function Xe(){te(Re),te(He),te(ie)}function Ge(t){t.memoizedState!==null&&ve(ue,t);var n=Re.current,a=S0(n,t.type);n!==a&&(ve(He,t),ve(Re,a))}function ht(t){He.current===t&&(te(Re),te(He)),ue.current===t&&(te(ue),Io._currentValue=J)}var qt,vt;function Fe(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+vt}var $e=!1;function Je(t,n){if(!t||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var re=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){re=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){re=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var V=S.split(`
`),ee=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ee.length)for(o=V.length-1,u=ee.length-1;1<=o&&0<=u&&V[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ee[u]){var pe=`
`+V[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Fe(a):""}function ut(t,n){switch(t.tag){case 26:case 27:case 5:return Fe(t.type);case 16:return Fe("Lazy");case 13:return t.child!==n&&n!==null?Fe("Suspense Fallback"):Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 15:return Je(t.type,!1);case 11:return Je(t.type.render,!1);case 1:return Je(t.type,!0);case 31:return Fe("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=ut(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ut=Object.prototype.hasOwnProperty,xt=r.unstable_scheduleCallback,rt=r.unstable_cancelCallback,Ve=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,he=r.unstable_ImmediatePriority,Se=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,qe=r.unstable_LowPriority,De=r.unstable_IdlePriority,Ye=r.log,it=r.unstable_setDisableYieldValue,be=null,Te=null;function ze(t){if(typeof Ye=="function"&&it(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(be,t)}catch{}}var Be=Math.clz32?Math.clz32:j,Le=Math.log,pt=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Le(t)/pt|0)|0}var Ne=256,Ae=262144,Ie=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Me(o):(S&=A,S!==0?u=Me(S):a||(a=A&~t,a!==0&&(u=Me(a))))):(A=o&~f,A!==0?u=Me(A):S!==0?u=Me(S):a||(a=o&~t,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Rt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bi(t,n,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,V=t.expirationTimes,ee=t.hiddenUpdates;for(a=S&~a;0<a;){var pe=31-Be(a),xe=1<<pe;A[pe]=0,V[pe]=-1;var re=ee[pe];if(re!==null)for(ee[pe]=null,pe=0;pe<re.length;pe++){var le=re[pe];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&pl(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function pl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function qr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Fs(t,n){var a=n&-n;return a=(a&42)!==0?1:Zr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Zr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Kr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:k0(t.type))}function Pi(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var li=Math.random().toString(36).slice(2),on="__reactFiber$"+li,xn="__reactProps$"+li,Ti="__reactContainer$"+li,Hs="__reactEvents$"+li,Gs="__reactListeners$"+li,ml="__reactHandles$"+li,Jr="__reactResources$"+li,os="__reactMarker$"+li;function Qr(t){delete t[on],delete t[xn],delete t[Hs],delete t[Gs],delete t[ml]}function Aa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ti]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=R0(t);t!==null;){if(a=t[on])return a;t=R0(t)}return n}t=a,a=t.parentNode}return null}function Ra(t){if(t=t[on]||t[Ti]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ls(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function wa(t){var n=t[Jr];return n||(n=t[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[os]=!0}var Y=new Set,oe={};function se(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(oe[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Oe={};function je(t){return Ut.call(Oe,t)?!0:Ut.call(ke,t)?!1:Ue.test(t)?Oe[t]=!0:(ke[t]=!0,!1)}function Ze(t,n,a){if(je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yt(t){if(!t._valueTracker){var n=Nt(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function Bt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Nt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function ct(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,o,u,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?yn(t,S,at(n)):a!=null?yn(t,S,at(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+at(A):t.removeAttribute("name")}function qi(t,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Yt(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Yt(t)}function yn(t,n,a){n==="number"&&et(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ci(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ce(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Yt(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vs(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&bn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&bn(t,f,n[f])}function Ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(t){return Tx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var gu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ks=null,Xs=null;function vp(t){var n=Ra(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ct(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));Sn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Bt(o)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ci(t,!!a.multiple,n,!1)}}}var vu=!1;function xp(t,n,a){if(vu)return t(n,a);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,(ks!==null||Xs!==null)&&(ic(),ks&&(n=ks,t=Xs,Xs=ks=null,vp(n),t)))for(n=0;n<t.length;n++)vp(t[n])}}function $r(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Ki)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){xu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{xu=!1}var Ca=null,Su=null,_l=null;function Sp(){if(_l)return _l;var t,n=Su,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return _l=u.slice(t,1<o?1-o:void 0)}function vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function yp(){return!1}function Vn(t){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?xl:yp,this.isPropagationStopped=yp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Vn(cs),to=_({},cs,{view:0,detail:0}),Ax=Vn(to),yu,Mu,no,yl=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(yu=t.screenX-no.screenX,Mu=t.screenY-no.screenY):Mu=yu=0,no=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Mp=Vn(yl),Rx=_({},yl,{dataTransfer:0}),wx=Vn(Rx),Cx=_({},to,{relatedTarget:0}),Eu=Vn(Cx),Dx=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Vn(Dx),Ux=_({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nx=Vn(Ux),Ox=_({},cs,{data:0}),Ep=Vn(Ox),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ix[t])?!!n[t]:!1}function bu(){return Fx}var zx=_({},to,{key:function(t){if(t.key){var n=Px[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hx=Vn(zx),Gx=_({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Vn(Gx),Vx=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),kx=Vn(Vx),Xx=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=Vn(Xx),Wx=_({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Vn(Wx),qx=_({},cs,{newState:0,oldState:0}),Zx=Vn(qx),Kx=[9,13,27,32],Tu=Ki&&"CompositionEvent"in window,io=null;Ki&&"documentMode"in document&&(io=document.documentMode);var Jx=Ki&&"TextEvent"in window&&!io,Tp=Ki&&(!Tu||io&&8<io&&11>=io),Ap=" ",Rp=!1;function wp(t,n){switch(t){case"keyup":return Kx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function Qx(t,n){switch(t){case"compositionend":return Cp(n);case"keypress":return n.which!==32?null:(Rp=!0,Ap);case"textInput":return t=n.data,t===Ap&&Rp?null:t;default:return null}}function $x(t,n){if(js)return t==="compositionend"||!Tu&&wp(t,n)?(t=Sp(),_l=Su=Ca=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tp&&n.locale!=="ko"?null:n.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!eS[t.type]:n==="textarea"}function Lp(t,n,a,o){ks?Xs?Xs.push(o):Xs=[o]:ks=o,n=uc(n,"onChange"),0<n.length&&(a=new Sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,so=null;function tS(t){h0(t,0)}function Ml(t){var n=ls(t);if(Bt(n))return t}function Up(t,n){if(t==="change")return n}var Np=!1;if(Ki){var Au;if(Ki){var Ru="oninput"in document;if(!Ru){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Ru=typeof Op.oninput=="function"}Au=Ru}else Au=!1;Np=Au&&(!document.documentMode||9<document.documentMode)}function Pp(){ao&&(ao.detachEvent("onpropertychange",Bp),so=ao=null)}function Bp(t){if(t.propertyName==="value"&&Ml(so)){var n=[];Lp(n,so,t,_u(t)),xp(tS,n)}}function nS(t,n,a){t==="focusin"?(Pp(),ao=n,so=a,ao.attachEvent("onpropertychange",Bp)):t==="focusout"&&Pp()}function iS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(so)}function aS(t,n){if(t==="click")return Ml(n)}function sS(t,n){if(t==="input"||t==="change")return Ml(n)}function rS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:rS;function ro(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ut.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function Ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,n){var a=Ip(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ip(a)}}function zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=et(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=et(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var oS=Ki&&"documentMode"in document&&11>=document.documentMode,Ws=null,Cu=null,oo=null,Du=!1;function Gp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||Ws==null||Ws!==et(o)||(o=Ws,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=uc(Cu,"onSelect"),0<o.length&&(n=new Sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ws)))}function us(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ys={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Lu={},Vp={};Ki&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function fs(t){if(Lu[t])return Lu[t];if(!Ys[t])return t;var n=Ys[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vp)return Lu[t]=n[a];return t}var kp=fs("animationend"),Xp=fs("animationiteration"),jp=fs("animationstart"),lS=fs("transitionrun"),cS=fs("transitionstart"),uS=fs("transitioncancel"),Wp=fs("transitionend"),Yp=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Ri(t,n){Yp.set(t,n),se(n,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],qs=0,Nu=0;function bl(){for(var t=qs,n=Nu=qs=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&qp(a,u,f)}}function Tl(t,n,a,o){ui[qs++]=t,ui[qs++]=n,ui[qs++]=a,ui[qs++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,a,o){return Tl(t,n,a,o),Al(t)}function ds(t,n){return Tl(t,null,null,n),Al(t)}function qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Al(t){if(50<Do)throw Do=0,Xf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zs={};function fS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new fS(t,n,a,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Rl(t,n,a,o,u,f){var S=0;if(o=t,typeof t=="function")Pu(t)&&(S=1);else if(typeof t=="string")S=gy(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=$n(31,a,n,u),t.elementType=w,t.lanes=f,t;case T:return hs(a.children,u,f,n);case M:S=8,u|=24;break;case x:return t=$n(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case B:return t=$n(13,a,n,u),t.elementType=B,t.lanes=f,t;case F:return t=$n(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case O:S=9;break e;case C:S=11;break e;case I:S=14;break e;case Z:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=$n(S,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function hs(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function Bu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function Kp(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Iu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Jp=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=Jp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},Jp.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var Ks=[],Js=0,wl=null,lo=0,di=[],hi=0,Da=null,Bi=1,Ii="";function Qi(t,n){Ks[Js++]=lo,Ks[Js++]=wl,wl=t,lo=n}function Qp(t,n,a){di[hi++]=Bi,di[hi++]=Ii,di[hi++]=Da,Da=t;var o=Bi;t=Ii;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Bi=1<<32-Be(n)+u|a<<u|o,Ii=f+t}else Bi=1<<f|a<<u|o,Ii=t}function Fu(t){t.return!==null&&(Qi(t,1),Qp(t,1,0))}function zu(t){for(;t===wl;)wl=Ks[--Js],Ks[Js]=null,lo=Ks[--Js],Ks[Js]=null;for(;t===Da;)Da=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null,Bi=di[--hi],di[hi]=null}function $p(t,n){di[hi++]=Bi,di[hi++]=Ii,di[hi++]=Da,Bi=n.id,Ii=n.overflow,Da=t}var Tn=null,Zt=null,Tt=!1,La=null,pi=!1,Hu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(fi(n,t)),Hu}function em(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)yt(Uo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||_0(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Ua(t,!0)}function tm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Tn=Tn.return}}function Qs(t){if(t!==Tn)return!1;if(!Tt)return tm(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sd(t.type,t.memoizedProps)),a=!a),a&&Zt&&Ua(t),tm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=A0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=A0(t)}else n===27?(n=Zt,Wa(t.type)?(t=ud,ud=null,Zt=t):Zt=n):Zt=Tn?gi(t.stateNode.nextSibling):null;return!0}function ps(){Zt=Tn=null,Tt=!1}function Gu(){var t=La;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),La=null),t}function co(t){La===null?La=[t]:La.push(t)}var Vu=P(null),ms=null,$i=null;function Na(t,n,a){ve(Vu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Vu.current,te(Vu)}function ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Xu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ku(f.return,a,t),o||(S=null);break e}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ku(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function $s(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Qn(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===ue.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}u=u.return}t!==null&&Xu(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ms=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return nm(ms,t)}function Dl(t,n){return ms===null&&gs(t),nm(t,n)}function nm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var dS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hS=r.unstable_scheduleCallback,pS=r.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new dS,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&hS(pS,function(){t.controller.abort()})}var fo=null,Wu=0,er=0,tr=null;function mS(t,n){if(fo===null){var a=fo=[];Wu=0,er=Kf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(im,im),n}function im(){if(--Wu===0&&fo!==null){tr!==null&&(tr.status="fulfilled");var t=fo;fo=null,er=0,tr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function gS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var am=L.S;L.S=function(t,n){Gg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mS(t,n),am!==null&&am(t,n)};var _s=P(null);function Yu(){var t=_s.current;return t!==null?t:Wt.pooledCache}function Ll(t,n){n===null?ve(_s,_s.current):ve(_s,n.pool)}function sm(){var t=Yu();return t===null?null:{parent:ln._currentValue,pool:t}}var nr=Error(s(460)),qu=Error(s(474)),Ul=Error(s(542)),Nl={then:function(){}};function rm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function om(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cm(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cm(t),t}throw xs=n,nr}}function vs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,nr):a}}var xs=null;function lm(){if(xs===null)throw Error(s(459));var t=xs;return xs=null,t}function cm(t){if(t===nr||t===Ul)throw Error(s(483))}var ir=null,ho=0;function Ol(t){var n=ho;return ho+=1,ir===null&&(ir=[]),om(ir,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function um(t){function n(q,X){if(t){var $=q.deletions;$===null?(q.deletions=[X],q.flags|=16):$.push(X)}}function a(q,X){if(!t)return null;for(;X!==null;)n(q,X),X=X.sibling;return null}function o(q){for(var X=new Map;q!==null;)q.key!==null?X.set(q.key,q):X.set(q.index,q),q=q.sibling;return X}function u(q,X){return q=Ji(q,X),q.index=0,q.sibling=null,q}function f(q,X,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<X?(q.flags|=67108866,X):$):(q.flags|=67108866,X)):(q.flags|=1048576,X)}function S(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,X,$,ge){return X===null||X.tag!==6?(X=Bu($,q.mode,ge),X.return=q,X):(X=u(X,$),X.return=q,X)}function V(q,X,$,ge){var tt=$.type;return tt===T?pe(q,X,$.props.children,ge,$.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Z&&vs(tt)===X.type)?(X=u(X,$.props),po(X,$),X.return=q,X):(X=Rl($.type,$.key,$.props,null,q.mode,ge),po(X,$),X.return=q,X)}function ee(q,X,$,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Iu($,q.mode,ge),X.return=q,X):(X=u(X,$.children||[]),X.return=q,X)}function pe(q,X,$,ge,tt){return X===null||X.tag!==7?(X=hs($,q.mode,ge,tt),X.return=q,X):(X=u(X,$),X.return=q,X)}function xe(q,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Bu(""+X,q.mode,$),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return $=Rl(X.type,X.key,X.props,null,q.mode,$),po($,X),$.return=q,$;case E:return X=Iu(X,q.mode,$),X.return=q,X;case Z:return X=vs(X),xe(q,X,$)}if(ce(X)||K(X))return X=hs(X,q.mode,$,null),X.return=q,X;if(typeof X.then=="function")return xe(q,Ol(X),$);if(X.$$typeof===U)return xe(q,Dl(q,X),$);Pl(q,X)}return null}function re(q,X,$,ge){var tt=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return tt!==null?null:A(q,X,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===tt?V(q,X,$,ge):null;case E:return $.key===tt?ee(q,X,$,ge):null;case Z:return $=vs($),re(q,X,$,ge)}if(ce($)||K($))return tt!==null?null:pe(q,X,$,ge,null);if(typeof $.then=="function")return re(q,X,Ol($),ge);if($.$$typeof===U)return re(q,X,Dl(q,$),ge);Pl(q,$)}return null}function le(q,X,$,ge,tt){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return q=q.get($)||null,A(X,q,""+ge,tt);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return q=q.get(ge.key===null?$:ge.key)||null,V(X,q,ge,tt);case E:return q=q.get(ge.key===null?$:ge.key)||null,ee(X,q,ge,tt);case Z:return ge=vs(ge),le(q,X,$,ge,tt)}if(ce(ge)||K(ge))return q=q.get($)||null,pe(X,q,ge,tt,null);if(typeof ge.then=="function")return le(q,X,$,Ol(ge),tt);if(ge.$$typeof===U)return le(q,X,$,Dl(X,ge),tt);Pl(X,ge)}return null}function We(q,X,$,ge){for(var tt=null,Ct=null,Qe=X,mt=X=0,Et=null;Qe!==null&&mt<$.length;mt++){Qe.index>mt?(Et=Qe,Qe=null):Et=Qe.sibling;var Dt=re(q,Qe,$[mt],ge);if(Dt===null){Qe===null&&(Qe=Et);break}t&&Qe&&Dt.alternate===null&&n(q,Qe),X=f(Dt,X,mt),Ct===null?tt=Dt:Ct.sibling=Dt,Ct=Dt,Qe=Et}if(mt===$.length)return a(q,Qe),Tt&&Qi(q,mt),tt;if(Qe===null){for(;mt<$.length;mt++)Qe=xe(q,$[mt],ge),Qe!==null&&(X=f(Qe,X,mt),Ct===null?tt=Qe:Ct.sibling=Qe,Ct=Qe);return Tt&&Qi(q,mt),tt}for(Qe=o(Qe);mt<$.length;mt++)Et=le(Qe,q,mt,$[mt],ge),Et!==null&&(t&&Et.alternate!==null&&Qe.delete(Et.key===null?mt:Et.key),X=f(Et,X,mt),Ct===null?tt=Et:Ct.sibling=Et,Ct=Et);return t&&Qe.forEach(function(Ja){return n(q,Ja)}),Tt&&Qi(q,mt),tt}function st(q,X,$,ge){if($==null)throw Error(s(151));for(var tt=null,Ct=null,Qe=X,mt=X=0,Et=null,Dt=$.next();Qe!==null&&!Dt.done;mt++,Dt=$.next()){Qe.index>mt?(Et=Qe,Qe=null):Et=Qe.sibling;var Ja=re(q,Qe,Dt.value,ge);if(Ja===null){Qe===null&&(Qe=Et);break}t&&Qe&&Ja.alternate===null&&n(q,Qe),X=f(Ja,X,mt),Ct===null?tt=Ja:Ct.sibling=Ja,Ct=Ja,Qe=Et}if(Dt.done)return a(q,Qe),Tt&&Qi(q,mt),tt;if(Qe===null){for(;!Dt.done;mt++,Dt=$.next())Dt=xe(q,Dt.value,ge),Dt!==null&&(X=f(Dt,X,mt),Ct===null?tt=Dt:Ct.sibling=Dt,Ct=Dt);return Tt&&Qi(q,mt),tt}for(Qe=o(Qe);!Dt.done;mt++,Dt=$.next())Dt=le(Qe,q,mt,Dt.value,ge),Dt!==null&&(t&&Dt.alternate!==null&&Qe.delete(Dt.key===null?mt:Dt.key),X=f(Dt,X,mt),Ct===null?tt=Dt:Ct.sibling=Dt,Ct=Dt);return t&&Qe.forEach(function(Ry){return n(q,Ry)}),Tt&&Qi(q,mt),tt}function Xt(q,X,$,ge){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var tt=$.key;X!==null;){if(X.key===tt){if(tt=$.type,tt===T){if(X.tag===7){a(q,X.sibling),ge=u(X,$.props.children),ge.return=q,q=ge;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Z&&vs(tt)===X.type){a(q,X.sibling),ge=u(X,$.props),po(ge,$),ge.return=q,q=ge;break e}a(q,X);break}else n(q,X);X=X.sibling}$.type===T?(ge=hs($.props.children,q.mode,ge,$.key),ge.return=q,q=ge):(ge=Rl($.type,$.key,$.props,null,q.mode,ge),po(ge,$),ge.return=q,q=ge)}return S(q);case E:e:{for(tt=$.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(q,X.sibling),ge=u(X,$.children||[]),ge.return=q,q=ge;break e}else{a(q,X);break}else n(q,X);X=X.sibling}ge=Iu($,q.mode,ge),ge.return=q,q=ge}return S(q);case Z:return $=vs($),Xt(q,X,$,ge)}if(ce($))return We(q,X,$,ge);if(K($)){if(tt=K($),typeof tt!="function")throw Error(s(150));return $=tt.call($),st(q,X,$,ge)}if(typeof $.then=="function")return Xt(q,X,Ol($),ge);if($.$$typeof===U)return Xt(q,X,Dl(q,$),ge);Pl(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(q,X.sibling),ge=u(X,$),ge.return=q,q=ge):(a(q,X),ge=Bu($,q.mode,ge),ge.return=q,q=ge),S(q)):a(q,X)}return function(q,X,$,ge){try{ho=0;var tt=Xt(q,X,$,ge);return ir=null,tt}catch(Qe){if(Qe===nr||Qe===Ul)throw Qe;var Ct=$n(29,Qe,null,q.mode);return Ct.lanes=ge,Ct.return=q,Ct}}}var Ss=um(!0),fm=um(!1),Oa=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Al(t),qp(t,null,a),n}return Tl(t,o,n,a),Al(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,qr(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function go(){if(Qu){var t=tr;if(t!==null)throw t}}function _o(t,n,a,o){Qu=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,ee=V.next;V.next=null,S===null?f=ee:S.next=ee,S=V;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==S&&(A===null?pe.firstBaseUpdate=ee:A.next=ee,pe.lastBaseUpdate=V))}if(f!==null){var xe=u.baseState;S=0,pe=ee=V=null,A=f;do{var re=A.lane&-536870913,le=re!==A.lane;if(le?(Mt&re)===re:(o&re)===re){re!==0&&re===er&&(Qu=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var We=t,st=A;re=n;var Xt=a;switch(st.tag){case 1:if(We=st.payload,typeof We=="function"){xe=We.call(Xt,xe,re);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=st.payload,re=typeof We=="function"?We.call(Xt,xe,re):We,re==null)break e;xe=_({},xe,re);break e;case 2:Oa=!0}}re=A.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[re]:le.push(re))}else le={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(ee=pe=le,V=xe):pe=pe.next=le,S|=re;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;le=A,A=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);pe===null&&(V=xe),u.baseState=V,u.firstBaseUpdate=ee,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ga|=S,t.lanes=S,t.memoizedState=xe}}function dm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function hm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)dm(a[t],n)}var ar=P(null),Bl=P(0);function pm(t,n){t=ca,ve(Bl,t),ve(ar,n),ca=t|n.baseLanes}function $u(){ve(Bl,ca),ve(ar,ar.current)}function ef(){ca=Bl.current,te(ar),te(Bl)}var ei=P(null),mi=null;function Ia(t){var n=t.alternate;ve(an,an.current&1),ve(ei,t),mi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(mi=t)}function tf(t){ve(an,an.current),ve(ei,t),mi===null&&(mi=t)}function mm(t){t.tag===22?(ve(an,an.current),ve(ei,t),mi===null&&(mi=t)):Fa()}function Fa(){ve(an,an.current),ve(ei,ei.current)}function ti(t){te(ei),mi===t&&(mi=null),te(an)}var an=P(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ld(a)||cd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,dt=null,Vt=null,cn=null,Fl=!1,sr=!1,ys=!1,zl=0,vo=0,rr=null,_S=0;function en(){throw Error(s(321))}function nf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function af(t,n,a,o,u,f){return ta=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Qm:xf,ys=!1,f=a(o,u),ys=!1,sr&&(f=_m(n,a,o,u)),gm(t),f}function gm(t){L.H=yo;var n=Vt!==null&&Vt.next!==null;if(ta=0,cn=Vt=dt=null,Fl=!1,vo=0,rr=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&Cl(t)&&(un=!0))}function _m(t,n,a,o){dt=t;var u=0;do{if(sr&&(rr=null),vo=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,cn=Vt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=$m,f=n(a,o)}while(sr);return f}function vS(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(dt.flags|=1024),n}function sf(){var t=zl!==0;return zl=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function of(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}ta=0,cn=Vt=dt=null,sr=!1,vo=zl=0,rr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?dt.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Vt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=cn===null?dt.memoizedState:cn.next;if(n!==null)cn=n,Vt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},cn===null?dt.memoizedState=cn=t:cn=cn.next=t}return cn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=vo;return vo+=1,rr===null&&(rr=[]),t=om(rr,t,n),n=dt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Qm:xf),t}function Gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===U)return An(t)}throw Error(s(438,String(t)))}function lf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Vl(t){var n=sn();return cf(n,Vt,t)}function cf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=S=null,V=null,ee=n,pe=!1;do{var xe=ee.lane&-536870913;if(xe!==ee.lane?(Mt&xe)===xe:(ta&xe)===xe){var re=ee.revertLane;if(re===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),xe===er&&(pe=!0);else if((ta&re)===re){ee=ee.next,re===er&&(pe=!0);continue}else xe={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},V===null?(A=V=xe,S=f):V=V.next=xe,dt.lanes|=re,Ga|=re;xe=ee.action,ys&&a(f,xe),f=ee.hasEagerState?ee.eagerState:a(f,xe)}else re={lane:xe,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},V===null?(A=V=re,S=f):V=V.next=re,dt.lanes|=xe,Ga|=xe;ee=ee.next}while(ee!==null&&ee!==n);if(V===null?S=f:V.next=A,!Qn(f,t.memoizedState)&&(un=!0,pe&&(a=tr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Qn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function vm(t,n,a){var o=dt,u=sn(),f=Tt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Qn((Vt||u).memoizedState,a);if(S&&(u.memoizedState=a,un=!0),u=u.queue,hf(ym.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,or(9,{destroy:void 0},Sm.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));f||(ta&127)!==0||xm(o,n,a)}return a}function xm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Hl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Sm(t,n,a,o){n.value=a,n.getSnapshot=o,Mm(n)&&Em(t)}function ym(t,n,a){return a(function(){Mm(n)&&Em(t)})}function Mm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function Em(t){var n=ds(t,2);n!==null&&Yn(n,t,2)}function ff(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),ys){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function bm(t,n,a,o){return t.baseState=a,cf(t,Vt,typeof o=="function"?o:na)}function xS(t,n,a,o,u){if(jl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Tm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=L.T,S={};L.T=S;try{var A=a(u,o),V=L.S;V!==null&&V(S,A),Am(t,n,A)}catch(ee){df(t,n,ee)}finally{f!==null&&S.types!==null&&(f.types=S.types),L.T=f}}else try{f=a(u,o),Am(t,n,f)}catch(ee){df(t,n,ee)}}function Am(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Rm(t,n,o)},function(o){return df(t,n,o)}):Rm(t,n,a)}function Rm(t,n,a){n.status="fulfilled",n.value=a,wm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Tm(t,a)))}function df(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,wm(n),n=n.next;while(n!==o)}t.action=null}function wm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Cm(t,n){return n}function Dm(t,n){if(Tt){var a=Wt.formState;if(a!==null){e:{var o=dt;if(Tt){if(Zt){t:{for(var u=Zt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=gi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:n},a.queue=o,a=Zm.bind(null,dt,o),o.dispatch=a,o=ff(!1),f=vf.bind(null,dt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=xS.bind(null,dt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Lm(t){var n=sn();return Um(n,Vt,t)}function Um(t,n,a){if(n=cf(t,n,Cm)[0],t=Vl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(S){throw S===nr?Ul:S}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,or(9,{destroy:void 0},SS.bind(null,u,a),null)),[o,f,t]}function SS(t,n){t.action=n}function Nm(t){var n=sn(),a=Vt;if(a!==null)return Um(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function or(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Hl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Om(){return sn().memoizedState}function kl(t,n,a,o){var u=In();dt.flags|=t,u.memoizedState=or(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(t,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Vt!==null&&o!==null&&nf(o,Vt.memoizedState.deps)?u.memoizedState=or(n,f,a,o):(dt.flags|=t,u.memoizedState=or(1|n,f,a,o))}function Pm(t,n){kl(8390656,8,t,n)}function hf(t,n){Xl(2048,8,t,n)}function yS(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Hl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Bm(t){var n=sn().memoizedState;return yS({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Im(t,n){return Xl(4,2,t,n)}function Fm(t,n){return Xl(4,4,t,n)}function zm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Hm(t,n,a){a=a!=null?a.concat([t]):null,Xl(4,4,zm.bind(null,n,t),a)}function pf(){}function Gm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Vm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=t(),ys){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function mf(t,n,a){return a===void 0||(ta&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=kg(),dt.lanes|=t,Ga|=t,a)}function km(t,n,a,o){return Qn(a,n)?a:ar.current!==null?(t=mf(t,a,o),Qn(t,n)||(un=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(Mt&261930)===0?(un=!0,t.memoizedState=a):(t=kg(),dt.lanes|=t,Ga|=t,n)}function Xm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var S=L.T,A={};L.T=A,vf(t,!1,n,a);try{var V=u(),ee=L.S;if(ee!==null&&ee(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pe=gS(V,o);So(t,n,pe,ai(t))}else So(t,n,o,ai(t))}catch(xe){So(t,n,{then:function(){},status:"rejected",reason:xe},ai())}finally{G.p=f,S!==null&&A.types!==null&&(S.types=A.types),L.T=S}}function MS(){}function gf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=jm(t).queue;Xm(t,u,n,J,a===null?MS:function(){return Wm(t),a(o)})}function jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Wm(t){var n=jm(t);n.next===null&&(n=t.alternate.memoizedState),So(t,n.next.queue,{},ai())}function _f(){return An(Io)}function Ym(){return sn().memoizedState}function qm(){return sn().memoizedState}function ES(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Pa(a);var o=Ba(n,t,a);o!==null&&(Yn(o,n,a),mo(o,n,a)),n={cache:ju()},t.payload=n;return}n=n.return}}function bS(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(t)?Km(n,a):(a=Ou(t,n,a,o),a!==null&&(Yn(a,t,o),Jm(a,n,o)))}function Zm(t,n,a){var o=ai();So(t,n,a,o)}function So(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(t))Km(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,S))return Tl(t,n,u,0),Wt===null&&bl(),!1}catch{}if(a=Ou(t,n,u,o),a!==null)return Yn(a,t,o),Jm(a,n,o),!0}return!1}function vf(t,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(n)throw Error(s(479))}else n=Ou(t,a,o,2),n!==null&&Yn(n,t,2)}function jl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Km(t,n){sr=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Jm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,qr(t,a)}}var yo={readContext:An,use:Gl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};yo.useEffectEvent=en;var Qm={readContext:An,use:Gl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Pm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,kl(4194308,4,zm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return kl(4194308,4,t,n)},useInsertionEffect:function(t,n){kl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(ys){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(ys){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=bS.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,a=Zm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(t,n){var a=In();return mf(a,t,n)},useTransition:function(){var t=ff(!1);return t=Xm.bind(null,dt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=In();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(Mt&127)!==0||xm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Pm(ym.bind(null,o,f,t),[t]),o.flags|=2048,or(9,{destroy:void 0},Sm.bind(null,o,f,a,n),null),a},useId:function(){var t=In(),n=Wt.identifierPrefix;if(Tt){var a=Ii,o=Bi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_S++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Dm,useActionState:Dm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return In().memoizedState=ES.bind(null,dt)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:An,use:Gl,useCallback:Gm,useContext:An,useEffect:hf,useImperativeHandle:Hm,useInsertionEffect:Im,useLayoutEffect:Fm,useMemo:Vm,useReducer:Vl,useRef:Om,useState:function(){return Vl(na)},useDebugValue:pf,useDeferredValue:function(t,n){var a=sn();return km(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Vl(na)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:_f,useFormState:Lm,useActionState:Lm,useOptimistic:function(t,n){var a=sn();return bm(a,Vt,t,n)},useMemoCache:lf,useCacheRefresh:qm};xf.useEffectEvent=Bm;var $m={readContext:An,use:Gl,useCallback:Gm,useContext:An,useEffect:hf,useImperativeHandle:Hm,useInsertionEffect:Im,useLayoutEffect:Fm,useMemo:Vm,useReducer:uf,useRef:Om,useState:function(){return uf(na)},useDebugValue:pf,useDeferredValue:function(t,n){var a=sn();return Vt===null?mf(a,t,n):km(a,Vt.memoizedState,t,n)},useTransition:function(){var t=uf(na)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:_f,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,n){var a=sn();return Vt!==null?bm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:qm};$m.useEffectEvent=Bm;function Sf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Yn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Yn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(Yn(n,t,a),mo(n,t,a))}};function eg(t,n,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,f):!0}function tg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function Ms(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function ng(t){El(t)}function ig(t){console.error(t)}function ag(t){El(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function sg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function rg(t){return t=Pa(t),t.tag=3,t}function og(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){sg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){sg(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function TS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?ac():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(t,o,u)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(t,o,u)),!1}throw Error(s(435,a.tag))}return Yf(t,o,u),ac(),!1}if(Tt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(t=Error(s(422),{cause:o}),co(fi(t,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),co(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Mf(t.stateNode,o,u),Ju(t,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),Co===null?Co=[f]:Co.push(f),tn!==4&&(tn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Mf(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=rg(u),og(u,t,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),un=!1;function Rn(t,n,a,o){n.child=t===null?fm(n,null,a,o):Ss(n,t.child,a,o)}function lg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return gs(n),o=af(t,n,a,S,f,u),A=sf(),t!==null&&!un?(rf(t,n,u),ia(t,n,u)):(Tt&&A&&Fu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function cg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ug(t,n,f,o,u)):(t=Rl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lf(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(S,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Ji(f,o),t.ref=n.ref,t.return=n,n.child=t}function ug(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(ro(f,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=f,Lf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ia(t,n,u)}return bf(t,n,a,o,u)}function fg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return dg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?pm(n,f):$u(),mm(n);else return o=n.lanes=536870912,dg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ll(n,f.cachePool),pm(n,f),Fa(),n.memoizedState=null):(t!==null&&Ll(n,null),$u(),Fa());return Rn(t,n,u,a),n.child}function Mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function dg(t,n,a,o,u){var f=Yu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ll(n,null),$u(),mm(n),t!==null&&$s(t,n,o,!0),n.childLanes=u,null}function Yl(t,n){return n=Zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function hg(t,n,a){return Ss(n,t.child,null,a),t=Yl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function AS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=Yl(n,o),n.lanes=536870912,Mo(null,t);if(tf(n),(t=Zt)?(t=T0(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Kp(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Yl(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(tf(n),u)if(n.flags&256)n.flags&=-257,n=hg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||$s(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=Wt,o!==null&&(S=Fs(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ds(t,S),Yn(o,t,S),Ef;ac(),n=hg(t,n,a)}else t=f.treeContext,Zt=gi(S.nextSibling),Tn=n,Tt=!0,La=null,pi=!1,t!==null&&$p(n,t),n=Yl(n,o),n.flags|=4096;return n}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bf(t,n,a,o,u){return gs(n),a=af(t,n,a,o,void 0,u),o=sf(),t!==null&&!un?(rf(t,n,u),ia(t,n,u)):(Tt&&o&&Fu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function pg(t,n,a,o,u,f){return gs(n),n.updateQueue=null,a=_m(n,o,a,u),gm(t),o=sf(),t!==null&&!un?(rf(t,n,f),ia(t,n,f)):(Tt&&o&&Fu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function mg(t,n,a,o,u){if(gs(n),n.stateNode===null){var f=Zs,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Zu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Zs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Sf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&yf.enqueueReplaceState(f,f.state,null),_o(n,o,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,V=Ms(a,A);f.props=V;var ee=f.context,pe=a.contextType;S=Zs,typeof pe=="object"&&pe!==null&&(S=An(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ee!==S)&&tg(n,f,o,S),Oa=!1;var re=n.memoizedState;f.state=re,_o(n,o,f,u),go(),ee=n.memoizedState,A||re!==ee||Oa?(typeof xe=="function"&&(Sf(n,a,xe,o),ee=n.memoizedState),(V=Oa||eg(n,a,V,o,re,ee,S))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=S,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(t,n),S=n.memoizedProps,pe=Ms(a,S),f.props=pe,xe=n.pendingProps,re=f.context,ee=a.contextType,V=Zs,typeof ee=="object"&&ee!==null&&(V=An(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xe||re!==V)&&tg(n,f,o,V),Oa=!1,re=n.memoizedState,f.state=re,_o(n,o,f,u),go();var le=n.memoizedState;S!==xe||re!==le||Oa||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof A=="function"&&(Sf(n,a,A,o),le=n.memoizedState),(pe=Oa||eg(n,a,pe,o,re,le,V)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=V,o=pe):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,ql(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ss(n,t.child,null,u),n.child=Ss(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ia(t,n,u),t}function gg(t,n,a,o){return ps(),n.flags|=256,Rn(t,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(t){return{baseLanes:t,cachePool:sm()}}function Rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function _g(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?Ia(n):Fa(),(t=Zt)?(t=T0(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Kp(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Ua(n);return cd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Fa(),u=n.mode,A=Zl({mode:"hidden",children:A},u),o=hs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(t,S,a),n.memoizedState=Tf,Mo(null,o)):(Ia(n),wf(n,A))}var V=t.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=Cf(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),A=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),A=hs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Ss(n,t.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(t,S,a),n.memoizedState=Tf,n=Mo(null,o));else if(Ia(n),cd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(s(419)),o.stack="",o.digest=S,co({value:o,source:null,stack:null}),n=Cf(t,n,a)}else if(un||$s(t,n,a,!1),S=(a&t.childLanes)!==0,un||S){if(S=Wt,S!==null&&(o=Fs(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,ds(t,o),Yn(S,t,o),Ef;ld(A)||ac(),n=Cf(t,n,a)}else ld(A)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Zt=gi(A.nextSibling),Tn=n,Tt=!0,La=null,pi=!1,t!==null&&$p(n,t),n=wf(n,o.children),n.flags|=4096);return n}return u?(Fa(),A=o.fallback,u=n.mode,V=t.child,ee=V.sibling,o=Ji(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ee!==null?A=Ji(ee,A):(A=hs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Mo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Af(a):(u=A.cachePool,u!==null?(V=ln._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=sm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Rf(t,S,a),n.memoizedState=Tf,Mo(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wf(t,n){return n=Zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Zl(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Cf(t,n,a){return Ss(n,t.child,null,a),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ku(t.return,n,a)}function Df(t,n,a,o,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function xg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=an.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ve(an,S),Rn(t,n,o,a),o=Tt?lo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,a,n);else if(t.tag===19)vg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Df(n,!0,a,null,f,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($s(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function RS(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),Na(n,ln,t.memoizedState.cache),ps();break;case 27:case 5:Ge(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_g(t,n,a):(Ia(n),t=ia(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return xg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(an,an.current),o)break;return null;case 22:return n.lanes=0,fg(t,n,a,n.pendingProps);case 24:Na(n,ln,t.memoizedState.cache)}return ia(t,n,a)}function Sg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Lf(t,a)&&(n.flags&128)===0)return un=!1,RS(t,n,a);un=(t.flags&131072)!==0}else un=!1,Tt&&(n.flags&1048576)!==0&&Qp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=vs(n.elementType),n.type=t,typeof t=="function")Pu(t)?(o=Ms(t,o),n.tag=1,n=mg(null,n,t,o,a)):(n.tag=0,n=bf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=lg(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=cg(null,n,t,o,a);break e}}throw n=fe(t)||t,Error(s(306,n,""))}}return n;case 0:return bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ms(o,n.pendingProps),mg(t,n,o,u,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(t,n),_o(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Na(n,ln,o),o!==f.cache&&Xu(n,[ln],a,!0),go(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=gg(t,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),co(u),n=gg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Zt=gi(t.firstChild),Tn=n,Tt=!0,La=null,pi=!0,a=fm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),o===u){n=ia(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=L0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,o=fc(ie.current).createElement(a),o[on]=n,o[xn]=t,wn(o,a,t),R(o),n.stateNode=o):n.memoizedState=L0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&Tt&&(o=n.stateNode=w0(n.type,n.pendingProps,ie.current),Tn=n,pi=!0,u=Zt,Wa(n.type)?(ud=u,Zt=gi(o.firstChild)):Zt=u),Rn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Zt)&&(o=iy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Tn=n,Zt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Ua(n)),Ge(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,sd(u,f)?o=null:S!==null&&sd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=af(t,n,vS,null,null,a),Io._currentValue=u),ql(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Tt&&((t=a=Zt)&&(a=ay(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Tn=n,Zt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return _g(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ss(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return lg(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gs(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return cg(t,n,n.type,n.pendingProps,a);case 15:return ug(t,n,n.type,n.pendingProps,a);case 19:return xg(t,n,a);case 31:return AS(t,n,a);case 22:return fg(t,n,a,n.pendingProps);case 24:return gs(n),o=An(ln),t===null?(u=Yu(),u===null&&(u=Wt,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Zu(n),Na(n,ln,u)):((t.lanes&a)!==0&&(Ku(t,n),_o(n,null,null,a),go()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,ln,o)):(o=f.cache,Na(n,ln,o),o!==u.cache&&Xu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function Uf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Yg())t.flags|=8192;else throw xs=Nl,qu}else t.flags&=-16777217}function yg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!B0(n))if(Yg())t.flags|=8192;else throw xs=Nl,qu}function Kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?It():536870912,t.lanes|=n,fr|=n)}function Eo(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function wS(t,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(ln),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qs(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(aa(n),f!==null?(Kt(n),yg(n,f)):(Kt(n),Uf(n,u,null,o,a))):f?f!==t.memoizedState?(aa(n),Kt(n),yg(n,f)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&aa(n),Kt(n),Uf(n,u,t,o,a)),null;case 27:if(ht(n),a=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Re.current,Qs(n)?em(n):(t=w0(u,o,a),n.stateNode=t,aa(n))}return Kt(n),null;case 5:if(ht(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=Re.current,Qs(n))em(n);else{var S=fc(ie.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[on]=n,f[xn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Kt(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,Qs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_0(t.nodeValue,a)),t||Ua(n,!0)}else t=fc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=Gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Kt(n),null);case 4:return Xe(),t===null&&ed(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(te(an),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Eo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Il(t),f!==null){for(n.flags|=128,Eo(o,!1),t=f.updateQueue,n.updateQueue=t,Kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Zp(a,t),a=a.sibling;return ve(an,an.current&1|2),Tt&&Qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>tc&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Kl(n,t),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Tt)return Kt(n),null}else 2*b()-o.renderingStartTime>tc&&a!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=an.current,ve(an,u?a&1|2:a&1),Tt&&Qi(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return ti(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&te(_s),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(ln),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function CS(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(ln),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(an),null;case 4:return Xe(),null;case 10:return ea(n.type),null;case 22:case 23:return ti(n),ef(),t!==null&&te(_s),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(ln),null;case 25:return null;default:return null}}function Mg(t,n){switch(zu(n),n.tag){case 3:ea(ln),Xe();break;case 26:case 27:case 5:ht(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:te(an);break;case 10:ea(n.type);break;case 22:case 23:ti(n),ef(),t!==null&&te(_s);break;case 24:ea(ln)}}function bo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ht(n,n.return,A)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var V=a,ee=A;try{ee()}catch(pe){Ht(u,V,pe)}}}o=o.next}while(o!==f)}}catch(pe){Ht(n,n.return,pe)}}function Eg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{hm(n,a)}catch(o){Ht(t,t.return,o)}}}function bg(t,n,a){a.props=Ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Fi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function Tg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;JS(o,t.type,a,n),o[xn]=n}catch(u){Ht(t,t.return,u)}}function Ag(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pf(t,n,a),t=t.sibling;t!==null;)Pf(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function Rg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[on]=t,n[xn]=a}catch(f){Ht(t,t.return,f)}}var sa=!1,fn=!1,Bf=!1,wg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function DS(t,n){if(t=t.containerInfo,id=vc,t=Hp(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,V=-1,ee=0,pe=0,xe=t,re=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(A=S+u),xe!==f||o!==0&&xe.nodeType!==3||(V=S+o),xe.nodeType===3&&(S+=xe.nodeValue.length),(le=xe.firstChild)!==null;)re=xe,xe=le;for(;;){if(xe===t)break t;if(re===a&&++ee===u&&(A=S),re===f&&++pe===o&&(V=S),(le=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=le}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(ad={focusedElem:t,selectionRange:a},vc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Ms(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(st){Ht(a,a.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)od(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":od(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Cg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),o&4&&bo(5,a);break;case 1:if(oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ht(a,a.return,S)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ht(a,a.return,S)}}o&64&&Eg(a),o&512&&To(a,a.return);break;case 3:if(oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hm(t,n)}catch(S){Ht(a,a.return,S)}}break;case 27:n===null&&o&4&&Rg(a);case 26:case 5:oa(t,a),n===null&&o&4&&Tg(a),o&512&&To(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),o&4&&Ug(t,a);break;case 13:oa(t,a),o&4&&Ng(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=zS.bind(null,a),sy(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||fn,u=sa;var f=fn;sa=o,(fn=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),sa=u,fn=f}break;case 30:break;default:oa(t,a)}}function Dg(t){var n=t.alternate;n!==null&&(t.alternate=null,Dg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,kn=!1;function ra(t,n,a){for(a=a.child;a!==null;)Lg(t,n,a),a=a.sibling}function Lg(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:fn||Fi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Fi(a,n);var o=Qt,u=kn;Wa(a.type)&&(Qt=a.stateNode,kn=!1),ra(t,n,a),Oo(a.stateNode),Qt=o,kn=u;break;case 5:fn||Fi(a,n);case 6:if(o=Qt,u=kn,Qt=null,ra(t,n,a),Qt=o,kn=u,Qt!==null)if(kn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:Qt!==null&&(kn?(t=Qt,E0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xr(t)):E0(Qt,a.stateNode));break;case 4:o=Qt,u=kn,Qt=a.stateNode.containerInfo,kn=!0,ra(t,n,a),Qt=o,kn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),fn||za(4,a,n),ra(t,n,a);break;case 1:fn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&bg(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ra(t,n,a),fn=o;break;default:ra(t,n,a)}}function Ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xr(t)}catch(a){Ht(n,n.return,a)}}}function Ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xr(t)}catch(a){Ht(n,n.return,a)}}function LS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wg),n;default:throw Error(s(435,t.tag))}}function Ql(t,n){var a=LS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=HS.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){Qt=A.stateNode,kn=!1;break e}break;case 5:Qt=A.stateNode,kn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,kn=!0;break e}A=A.return}if(Qt===null)throw Error(s(160));Lg(f,S,u),Qt=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Og(n,t),n=n.sibling}var wi=null;function Og(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),jn(t),o&4&&(za(3,t,t.return),bo(3,t),za(5,t,t.return));break;case 1:Xn(n,t),jn(t),o&512&&(fn||a===null||Fi(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Xn(n,t),jn(t),o&512&&(fn||a===null||Fi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[os]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[on]=t,R(f),o=f;break e;case"link":var S=O0("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=O0("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=t,R(f),o=f}t.stateNode=o}else P0(u,t.type,t.stateNode);else t.stateNode=N0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?P0(u,t.type,t.stateNode):N0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),jn(t),o&512&&(fn||a===null||Fi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),jn(t),o&512&&(fn||a===null||Fi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(We){Ht(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Bf=!0);break;case 6:if(Xn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Ht(t,t.return,We)}}break;case 3:if(pc=null,u=wi,wi=dc(n.containerInfo),Xn(n,t),wi=u,jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(We){Ht(t,t.return,We)}Bf&&(Bf=!1,Pg(t));break;case 4:o=wi,wi=dc(t.stateNode.containerInfo),Xn(n,t),jn(t),wi=o;break;case 12:Xn(n,t),jn(t);break;case 31:Xn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Xn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ec=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ee=sa,pe=fn;if(sa=ee||u,fn=pe||V,Xn(n,t),fn=pe,sa=ee,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||sa||fn||Es(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=V.stateNode;var xe=V.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(We){Ht(V,V.return,We)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(We){Ht(V,V.return,We)}}}else if(n.tag===18){if(a===null){V=n;try{var le=V.stateNode;u?b0(le,!0):b0(V.stateNode,!1)}catch(We){Ht(V,V.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:Xn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Ag(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(t);Jl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(hn(S,""),a.flags&=-33);var A=Of(t);Jl(t,A,S);break;case 3:case 4:var V=a.stateNode.containerInfo,ee=Of(t);Pf(t,ee,V);break;default:throw Error(s(161))}}catch(pe){Ht(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Pg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(t,n.alternate,n),n=n.sibling}function Es(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Es(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bg(n,n.return,a),Es(n);break;case 27:Oo(n.stateNode);case 26:case 5:Fi(n,n.return),Es(n);break;case 22:n.memoizedState===null&&Es(n);break;case 30:Es(n);break;default:Es(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),bo(4,f);break;case 1:if(la(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Ht(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)dm(V[u],A)}catch(ee){Ht(o,o.return,ee)}}a&&S&64&&Eg(f),To(f,f.return);break;case 27:Rg(f);case 26:case 5:la(u,f,a),a&&o===null&&S&4&&Tg(f),To(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&S&4&&Ug(u,f);break;case 13:la(u,f,a),a&&S&4&&Ng(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),To(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function If(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(t,n,a,o),n=n.sibling}function Bg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&bo(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ht(n,n.return,V)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,o):Ao(t,n):f._visibility&2?Ci(t,n,a,o):(f._visibility|=2,lr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(S,n);break;case 24:Ci(t,n,a,o),u&2048&&Ff(n.alternate,n);break;default:Ci(t,n,a,o)}}function lr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,A=a,V=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:lr(f,S,A,V,u),bo(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?lr(f,S,A,V,u):Ao(f,S):(pe._visibility|=2,lr(f,S,A,V,u)),u&&ee&2048&&If(S.alternate,S);break;case 24:lr(f,S,A,V,u),u&&ee&2048&&Ff(S.alternate,S);break;default:lr(f,S,A,V,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&If(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Ff(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function cr(t,n,a){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)Ig(t,n,a),t=t.sibling}function Ig(t,n,a){switch(t.tag){case 26:cr(t,n,a),t.flags&Ro&&t.memoizedState!==null&&_y(a,wi,t.memoizedState,t.memoizedProps);break;case 5:cr(t,n,a);break;case 3:case 4:var o=wi;wi=dc(t.stateNode.containerInfo),cr(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,cr(t,n,a),Ro=o):cr(t,n,a));break;default:cr(t,n,a)}}function Fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Hg(o,t)}Fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zg(t),t=t.sibling}function zg(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&za(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,$l(t)):wo(t);break;default:wo(t)}}function $l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Hg(o,t)}Fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}t=t.sibling}}function Hg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,f=o.return;if(Dg(o),o===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var US={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},NS=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Wt=null,St=null,Mt=0,zt=0,ni=null,Ha=!1,ur=!1,zf=!1,ca=0,tn=0,Ga=0,bs=0,Hf=0,ii=0,fr=0,Co=null,Wn=null,Gf=!1,ec=0,Gg=0,tc=1/0,nc=null,Va=null,pn=0,ka=null,dr=null,ua=0,Vf=0,kf=null,Vg=null,Do=0,Xf=null;function ai(){return(Pt&2)!==0&&Mt!==0?Mt&-Mt:L.T!==null?Kf():Kr()}function kg(){if(ii===0)if((Mt&536870912)===0||Tt){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function Yn(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(hr(t,0),Xa(t,Mt,ii,!1)),Dn(t,a),((Pt&2)===0||t!==Wt)&&(t===Wt&&((Pt&2)===0&&(bs|=a),tn===4&&Xa(t,Mt,ii,!1)),zi(t))}function Xg(t,n,a){if((Pt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?BS(t,n):Wf(t,n,!0),f=o;do{if(u===0){ur&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!OS(a)){u=Wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;u=Co;var V=A.current.memoizedState.isDehydrated;if(V&&(hr(A,S).flags|=256),S=Wf(A,S,!1),S!==2){if(zf&&!V){A.errorRecoveryDisabledLanes|=f,bs|=f,u=4;break e}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){hr(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ii,!Ha);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ec+300-b(),10<u)){if(Xa(o,n,ii,!Ha),ye(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=y0(jg.bind(null,o,a,Wn,nc,Gf,n,ii,bs,fr,Ha,f,"Throttled",-0,0),u);break e}jg(o,a,Wn,nc,Gf,n,ii,bs,fr,Ha,f,null,-0,0)}}break}while(!0);zi(t)}function jg(t,n,a,o,u,f,S,A,V,ee,pe,xe,re,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Ig(n,f,xe);var We=(f&62914560)===f?ec-b():(f&4194048)===f?Gg-b():0;if(We=vy(xe,We),We!==null){ua=f,t.cancelPendingCommit=We($g.bind(null,t,n,f,a,o,u,S,A,V,pe,xe,null,re,le)),Xa(t,f,S,!ee);return}}$g(t,n,f,a,o,u,S,A,V)}function OS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~Hf,n&=~bs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&pl(t,a,n)}function ic(){return(Pt&6)===0?(Lo(0),!1):!0}function jf(){if(St!==null){if(zt===0)var t=St.return;else t=St,$i=ms=null,of(t),ir=null,ho=0,t=St;for(;t!==null;)Mg(t.alternate,t),t=t.return;St=null}}function hr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ey(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,jf(),Wt=t,St=a=Ji(t.current,null),Mt=n,zt=0,ni=null,Ha=!1,ur=Ce(t,n),zf=!1,fr=ii=Hf=bs=Ga=tn=0,Wn=Co=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),f=1<<u;n|=t[u],o&=~f}return ca=n,bl(),a}function Wg(t,n){dt=null,L.H=yo,n===nr||n===Ul?(n=lm(),zt=3):n===qu?(n=lm(),zt=4):zt=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,St===null&&(tn=1,Wl(t,fi(n,t.current)))}function Yg(){var t=ei.current;return t===null?!0:(Mt&4194048)===Mt?mi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===mi:!1}function qg(){var t=L.H;return L.H=yo,t===null?yo:t}function Zg(){var t=L.A;return L.A=US,t}function ac(){tn=4,Ha||(Mt&4194048)!==Mt&&ei.current!==null||(ur=!0),(Ga&134217727)===0&&(bs&134217727)===0||Wt===null||Xa(Wt,Mt,ii,!1)}function Wf(t,n,a){var o=Pt;Pt|=2;var u=qg(),f=Zg();(Wt!==t||Mt!==n)&&(nc=null,hr(t,n)),n=!1;var S=tn;e:do try{if(zt!==0&&St!==null){var A=St,V=ni;switch(zt){case 8:jf(),S=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ee=zt;if(zt=0,ni=null,pr(t,A,V,ee),a&&ur){S=0;break e}break;default:ee=zt,zt=0,ni=null,pr(t,A,V,ee)}}PS(),S=tn;break}catch(pe){Wg(t,pe)}while(!0);return n&&t.shellSuspendCounter++,$i=ms=null,Pt=o,L.H=u,L.A=f,St===null&&(Wt=null,Mt=0,bl()),S}function PS(){for(;St!==null;)Kg(St)}function BS(t,n){var a=Pt;Pt|=2;var o=qg(),u=Zg();Wt!==t||Mt!==n?(nc=null,tc=b()+500,hr(t,n)):ur=Ce(t,n);e:do try{if(zt!==0&&St!==null){n=St;var f=ni;t:switch(zt){case 1:zt=0,ni=null,pr(t,n,f,1);break;case 2:case 9:if(rm(f)){zt=0,ni=null,Jg(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),zi(t)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:rm(f)?(zt=0,ni=null,Jg(n)):(zt=0,ni=null,pr(t,n,f,7));break;case 5:var S=null;switch(St.tag){case 26:S=St.memoizedState;case 5:case 27:var A=St;if(S?B0(S):A.stateNode.complete){zt=0,ni=null;var V=A.sibling;if(V!==null)St=V;else{var ee=A.return;ee!==null?(St=ee,sc(ee)):St=null}break t}}zt=0,ni=null,pr(t,n,f,5);break;case 6:zt=0,ni=null,pr(t,n,f,6);break;case 8:jf(),tn=6;break e;default:throw Error(s(462))}}IS();break}catch(pe){Wg(t,pe)}while(!0);return $i=ms=null,L.H=o,L.A=u,Pt=a,St!==null?0:(Wt=null,Mt=0,bl(),tn)}function IS(){for(;St!==null&&!Ve();)Kg(St)}function Kg(t){var n=Sg(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?sc(t):St=n}function Jg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=pg(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=pg(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:of(n);default:Mg(a,n),n=St=Zp(n,ca),n=Sg(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?sc(t):St=n}function pr(t,n,a,o){$i=ms=null,of(n),ir=null,ho=0;var u=n.return;try{if(TS(t,u,n,a,Mt)){tn=1,Wl(t,fi(a,t.current)),St=null;return}}catch(f){if(u!==null)throw St=u,f;tn=1,Wl(t,fi(a,t.current)),St=null;return}n.flags&32768?(Tt||o===1?t=!0:ur||(Mt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(n,t)):sc(n)}function sc(t){var n=t;do{if((n.flags&32768)!==0){Qg(n,Ha);return}t=n.return;var a=wS(n.alternate,n,ca);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);tn===0&&(tn=5)}function Qg(t,n){do{var a=CS(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);tn=6,St=null}function $g(t,n,a,o,u,f,S,A,V){t.cancelPendingCommit=null;do rc();while(pn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Nu,bi(t,a,f,S,A,V),t===Wt&&(St=Wt=null,Mt=0),dr=n,ka=t,ua=a,Vf=f,kf=u,Vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,GS(de,function(){return a0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=G.p,G.p=2,S=Pt,Pt|=4;try{DS(t,n,a)}finally{Pt=S,G.p=u,L.T=o}}pn=1,e0(),t0(),n0()}}function e0(){if(pn===1){pn=0;var t=ka,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{Og(n,t);var f=ad,S=Hp(t.containerInfo),A=f.focusedElem,V=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&zp(A.ownerDocument.documentElement,A)){if(V!==null&&wu(A)){var ee=V.start,pe=V.end;if(pe===void 0&&(pe=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(pe,A.value.length);else{var xe=A.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var le=re.getSelection(),We=A.textContent.length,st=Math.min(V.start,We),Xt=V.end===void 0?st:Math.min(V.end,We);!le.extend&&st>Xt&&(S=Xt,Xt=st,st=S);var q=Fp(A,st),X=Fp(A,Xt);if(q&&X&&(le.rangeCount!==1||le.anchorNode!==q.node||le.anchorOffset!==q.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var $=xe.createRange();$.setStart(q.node,q.offset),le.removeAllRanges(),st>Xt?(le.addRange($),le.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),le.addRange($))}}}}for(xe=[],le=A;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var ge=xe[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}vc=!!id,ad=id=null}finally{Pt=u,G.p=o,L.T=a}}t.current=n,pn=2}}function t0(){if(pn===2){pn=0;var t=ka,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{Cg(t,n.alternate,n)}finally{Pt=u,G.p=o,L.T=a}}pn=3}}function n0(){if(pn===4||pn===3){pn=0,N();var t=ka,n=dr,a=ua,o=Vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,dr=ka=null,i0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),zs(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=G.p,G.p=2,L.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{L.T=n,G.p=u}}(ua&3)!==0&&rc(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Xf?Do++:(Do=0,Xf=t):Do=0,Lo(0)}}function i0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function rc(){return e0(),t0(),n0(),a0()}function a0(){if(pn!==5)return!1;var t=ka,n=Vf;Vf=0;var a=zs(ua),o=L.T,u=G.p;try{G.p=32>a?32:a,L.T=null,a=kf,kf=null;var f=ka,S=ua;if(pn=0,dr=ka=null,ua=0,(Pt&6)!==0)throw Error(s(331));var A=Pt;if(Pt|=4,zg(f.current),Bg(f,f.current,S,a),Pt=A,Lo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{G.p=u,L.T=o,i0(t,n)}}function s0(t,n,a){n=fi(a,n),n=Mf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Dn(t,2),zi(t))}function Ht(t,n,a){if(t.tag===3)s0(t,t,a);else for(;n!==null;){if(n.tag===3){s0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=fi(a,t),a=rg(2),o=Ba(n,a,2),o!==null&&(og(a,o,n,t),Dn(o,2),zi(o));break}}n=n.return}}function Yf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new NS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),t=FS.bind(null,t,n,a),n.then(t,t))}function FS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(Mt&a)===a&&(tn===4||tn===3&&(Mt&62914560)===Mt&&300>b()-ec?(Pt&2)===0&&hr(t,0):Hf|=a,fr===Mt&&(fr=0)),zi(t)}function r0(t,n){n===0&&(n=It()),t=ds(t,n),t!==null&&(Dn(t,n),zi(t))}function zS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),r0(t,a)}function HS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),r0(t,a)}function GS(t,n){return xt(t,n)}var oc=null,mr=null,qf=!1,lc=!1,Zf=!1,ja=0;function zi(t){t!==mr&&t.next===null&&(mr===null?oc=mr=t:mr=mr.next=t),lc=!0,qf||(qf=!0,kS())}function Lo(t,n){if(!Zf&&lc){Zf=!0;do for(var a=!1,o=oc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,u0(o,f))}else f=Mt,f=ye(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ce(o,f)||(a=!0,u0(o,f));o=o.next}while(a);Zf=!1}}function VS(){o0()}function o0(){lc=qf=!1;var t=0;ja!==0&&$S()&&(t=ja);for(var n=b(),a=null,o=oc;o!==null;){var u=o.next,f=l0(o,n);f===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(mr=a)):(a=o,(t!==0||(f&3)!==0)&&(lc=!0)),o=u}pn!==0&&pn!==5||Lo(t),ja!==0&&(ja=0)}function l0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Be(f),A=1<<S,V=u[S];V===-1?((A&a)===0||(A&o)!==0)&&(u[S]=lt(A,n)):V<=n&&(t.expiredLanes|=A),f&=~A}if(n=Wt,a=Mt,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&rt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&rt(o),zs(a)){case 2:case 8:a=Se;break;case 32:a=de;break;case 268435456:a=De;break;default:a=de}return o=c0.bind(null,t),a=xt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&rt(o),t.callbackPriority=2,t.callbackNode=null,2}function c0(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var o=Mt;return o=ye(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Xg(t,o,n),l0(t,b()),t.callbackNode!=null&&t.callbackNode===a?c0.bind(null,t):null)}function u0(t,n){if(rc())return null;Xg(t,n,!0)}function kS(){ty(function(){(Pt&6)!==0?xt(he,VS):o0()})}function Kf(){if(ja===0){var t=er;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),ja=t}return ja}function f0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gl(""+t)}function d0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function XS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=f0((u[xn]||null).action),S=o.submitter;S&&(n=(n=S[xn]||null)?f0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new Sl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var V=S?d0(u,S):new FormData(u);gf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=S?d0(u,S):new FormData(u),gf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Jf=0;Jf<Uu.length;Jf++){var Qf=Uu[Jf],jS=Qf.toLowerCase(),WS=Qf[0].toUpperCase()+Qf.slice(1);Ri(jS,"on"+WS)}Ri(kp,"onAnimationEnd"),Ri(Xp,"onAnimationIteration"),Ri(jp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(lS,"onTransitionRun"),Ri(cS,"onTransitionStart"),Ri(uS,"onTransitionCancel"),Ri(Wp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function h0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],V=A.instance,ee=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(pe){El(pe)}u.currentTarget=null,f=V}else for(S=0;S<o.length;S++){if(A=o[S],V=A.instance,ee=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(pe){El(pe)}u.currentTarget=null,f=V}}}}function yt(t,n){var a=n[Hs];a===void 0&&(a=n[Hs]=new Set);var o=t+"__bubble";a.has(o)||(p0(n,t,2,!1),a.add(o))}function $f(t,n,a){var o=0;n&&(o|=4),p0(a,t,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function ed(t){if(!t[cc]){t[cc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(YS.has(a)||$f(a,!1,t),$f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[cc]||(n[cc]=!0,$f("selectionchange",!1,n))}}function p0(t,n,a,o){switch(k0(n)){case 2:var u=yy;break;case 8:u=My;break;default:u=md}a=u.bind(null,n,a,t),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function td(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Aa(A),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=f=S;continue e}A=A.parentNode}}o=o.return}xp(function(){var ee=f,pe=_u(a),xe=[];e:{var re=Yp.get(t);if(re!==void 0){var le=Sl,We=t;switch(t){case"keypress":if(vl(a)===0)break e;case"keydown":case"keyup":le=Hx;break;case"focusin":We="focus",le=Eu;break;case"focusout":We="blur",le=Eu;break;case"beforeblur":case"afterblur":le=Eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=kx;break;case kp:case Xp:case jp:le=Lx;break;case Wp:le=jx;break;case"scroll":case"scrollend":le=Ax;break;case"wheel":le=Yx;break;case"copy":case"cut":case"paste":le=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=bp;break;case"toggle":case"beforetoggle":le=Zx}var st=(n&4)!==0,Xt=!st&&(t==="scroll"||t==="scrollend"),q=st?re!==null?re+"Capture":null:re;st=[];for(var X=ee,$;X!==null;){var ge=X;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||q===null||(ge=$r(X,q),ge!=null&&st.push(No(X,ge,$))),Xt)break;X=X.return}0<st.length&&(re=new le(re,We,null,a,pe),xe.push({event:re,listeners:st}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&a!==gu&&(We=a.relatedTarget||a.fromElement)&&(Aa(We)||We[Ti]))break e;if((le||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,le?(We=a.relatedTarget||a.toElement,le=ee,We=We?Aa(We):null,We!==null&&(Xt=c(We),st=We.tag,We!==Xt||st!==5&&st!==27&&st!==6)&&(We=null)):(le=null,We=ee),le!==We)){if(st=Mp,ge="onMouseLeave",q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(st=bp,ge="onPointerLeave",q="onPointerEnter",X="pointer"),Xt=le==null?re:ls(le),$=We==null?re:ls(We),re=new st(ge,X+"leave",le,a,pe),re.target=Xt,re.relatedTarget=$,ge=null,Aa(pe)===ee&&(st=new st(q,X+"enter",We,a,pe),st.target=$,st.relatedTarget=Xt,ge=st),Xt=ge,le&&We)t:{for(st=qS,q=le,X=We,$=0,ge=q;ge;ge=st(ge))$++;ge=0;for(var tt=X;tt;tt=st(tt))ge++;for(;0<$-ge;)q=st(q),$--;for(;0<ge-$;)X=st(X),ge--;for(;$--;){if(q===X||X!==null&&q===X.alternate){st=q;break t}q=st(q),X=st(X)}st=null}else st=null;le!==null&&m0(xe,re,le,st,!1),We!==null&&Xt!==null&&m0(xe,Xt,We,st,!0)}}e:{if(re=ee?ls(ee):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Ct=Up;else if(Dp(re))if(Np)Ct=sS;else{Ct=iS;var Qe=nS}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&Ai(ee.elementType)&&(Ct=Up):Ct=aS;if(Ct&&(Ct=Ct(t,ee))){Lp(xe,Ct,a,pe);break e}Qe&&Qe(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&yn(re,"number",re.value)}switch(Qe=ee?ls(ee):window,t){case"focusin":(Dp(Qe)||Qe.contentEditable==="true")&&(Ws=Qe,Cu=ee,oo=null);break;case"focusout":oo=Cu=Ws=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Gp(xe,a,pe);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Gp(xe,a,pe)}var mt;if(Tu)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else js?wp(t,a)&&(Et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(Tp&&a.locale!=="ko"&&(js||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&js&&(mt=Sp()):(Ca=pe,Su="value"in Ca?Ca.value:Ca.textContent,js=!0)),Qe=uc(ee,Et),0<Qe.length&&(Et=new Ep(Et,t,null,a,pe),xe.push({event:Et,listeners:Qe}),mt?Et.data=mt:(mt=Cp(a),mt!==null&&(Et.data=mt)))),(mt=Jx?Qx(t,a):$x(t,a))&&(Et=uc(ee,"onBeforeInput"),0<Et.length&&(Qe=new Ep("onBeforeInput","beforeinput",null,a,pe),xe.push({event:Qe,listeners:Et}),Qe.data=mt)),XS(xe,t,ee,a,pe)}h0(xe,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function uc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$r(t,a),u!=null&&o.unshift(No(t,u,f)),u=$r(t,n),u!=null&&o.push(No(t,u,f))),t.tag===3)return o;t=t.return}return[]}function qS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function m0(t,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,V=A.alternate,ee=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||ee===null||(V=ee,u?(ee=$r(a,f),ee!=null&&S.unshift(No(a,ee,V))):u||(ee=$r(a,f),ee!=null&&S.push(No(a,ee,V)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var ZS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function g0(t){return(typeof t=="string"?t:""+t).replace(ZS,`
`).replace(KS,"")}function _0(t,n){return n=g0(n),g0(t)===n}function kt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(t,""+o);break;case"className":nt(t,"class",o);break;case"tabIndex":nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(t,a,o);break;case"style":Vs(t,o,f);break;case"data":if(n!=="object"){nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ze(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bx.get(a)||a,Ze(t,a,o))}}function nd(t,n,a,o,u,f){switch(a){case"style":Vs(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ze(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,f,S,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var A=f=S=u=null,V=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":S=pe;break;case"checked":V=pe;break;case"defaultChecked":ee=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:kt(t,n,o,pe,a,null)}}qi(t,f,A,V,ee,S,u,!1);return;case"select":yt("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:kt(t,n,u,A,a,null)}n=f,a=S,t.multiple=!!o,n!=null?ci(t,!!o,n,!1):a!=null&&ci(t,!!o,a,!0);return;case"textarea":yt("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:kt(t,n,S,A,a,null)}Mn(t,o,u,f);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":kt(t,n,V,o,a,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)yt(Uo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,ee,o,a,null)}return;default:if(Ai(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&nd(t,n,pe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&kt(t,n,A,o,a,null))}function JS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,V=null,ee=null,pe=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":V=xe;default:o.hasOwnProperty(le)||kt(t,n,le,null,o,xe)}}for(var re in o){var le=o[re];if(xe=a[re],o.hasOwnProperty(re)&&(le!=null||xe!=null))switch(re){case"type":f=le;break;case"name":u=le;break;case"checked":ee=le;break;case"defaultChecked":pe=le;break;case"value":S=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==xe&&kt(t,n,re,le,o,xe)}}Sn(t,S,A,V,ee,pe,f,u);return;case"select":le=S=A=re=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":le=V;default:o.hasOwnProperty(f)||kt(t,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":re=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==V&&kt(t,n,u,f,o,V)}n=A,a=S,o=le,re!=null?ci(t,!!a,re,!1):!!o!=!!a&&(n!=null?ci(t,!!a,n,!0):ci(t,!!a,a?[]:"",!1));return;case"textarea":le=re=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:kt(t,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":re=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&kt(t,n,S,u,o,f)}Ft(t,re,le);return;case"option":for(var We in a)re=a[We],a.hasOwnProperty(We)&&re!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:kt(t,n,We,null,o,re));for(V in o)re=o[V],le=a[V],o.hasOwnProperty(V)&&re!==le&&(re!=null||le!=null)&&(V==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":kt(t,n,V,re,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)re=a[st],a.hasOwnProperty(st)&&re!=null&&!o.hasOwnProperty(st)&&kt(t,n,st,null,o,re);for(ee in o)if(re=o[ee],le=a[ee],o.hasOwnProperty(ee)&&re!==le&&(re!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:kt(t,n,ee,re,o,le)}return;default:if(Ai(n)){for(var Xt in a)re=a[Xt],a.hasOwnProperty(Xt)&&re!==void 0&&!o.hasOwnProperty(Xt)&&nd(t,n,Xt,void 0,o,re);for(pe in o)re=o[pe],le=a[pe],!o.hasOwnProperty(pe)||re===le||re===void 0&&le===void 0||nd(t,n,pe,re,o,le);return}}for(var q in a)re=a[q],a.hasOwnProperty(q)&&re!=null&&!o.hasOwnProperty(q)&&kt(t,n,q,null,o,re);for(xe in o)re=o[xe],le=a[xe],!o.hasOwnProperty(xe)||re===le||re==null&&le==null||kt(t,n,xe,re,o,le)}function v0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function QS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&v0(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ee=V.startTime;if(ee>A)break;var pe=V.transferSize,xe=V.initiatorType;pe&&v0(xe)&&(V=V.responseEnd,S+=pe*(V<A?1:(A-ee)/(V-ee)))}if(--o,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var id=null,ad=null;function fc(t){return t.nodeType===9?t:t.ownerDocument}function x0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function $S(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var y0=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(t){return M0.resolve(null).then(t).catch(ny)}:y0;function ny(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function E0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[os]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Oo(t.ownerDocument.body);a=u}while(a);xr(n)}function b0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function od(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":od(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function iy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[os])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function ay(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function T0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function ld(t){return t.data==="$?"||t.data==="$~"}function cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ud=null;function A0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function R0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function w0(t,n,a){switch(n=fc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qr(t)}var _i=new Map,C0=new Set;function dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=G.d;G.d={f:ry,r:oy,D:ly,C:cy,L:uy,m:fy,X:hy,S:dy,M:py};function ry(){var t=fa.f(),n=ic();return t||n}function oy(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?Wm(n):fa.r(t)}var gr=typeof document>"u"?null:document;function D0(t,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=ct(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),C0.has(u)||(C0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),R(n),o.head.appendChild(n)))}}function ly(t){fa.D(t),D0("dns-prefetch",t,null)}function cy(t,n){fa.C(t,n),D0("preconnect",t,n)}function uy(t,n,a){fa.L(t,n,a);var o=gr;if(o&&t&&n){var u='link[rel="preload"][as="'+ct(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ct(a.imageSizes)+'"]')):u+='[href="'+ct(t)+'"]';var f=u;switch(n){case"style":f=_r(t);break;case"script":f=vr(t)}_i.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(Bo(f))||(n=o.createElement("link"),wn(n,"link",t),R(n),o.head.appendChild(n)))}}function fy(t,n){fa.m(t,n);var a=gr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ct(o)+'"][href="'+ct(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(t)}if(!_i.has(f)&&(t=_({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(f)))return}o=a.createElement("link"),wn(o,"link",t),R(o),a.head.appendChild(o)}}}function dy(t,n,a){fa.S(t,n,a);var o=gr;if(o&&t){var u=wa(o).hoistableStyles,f=_r(t);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Po(f)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&fd(t,a);var V=S=o.createElement("link");R(V),wn(V,"link",t),V._p=new Promise(function(ee,pe){V.onload=ee,V.onerror=pe}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function hy(t,n){fa.X(t,n);var a=gr;if(a&&t){var o=wa(a).hoistableScripts,u=vr(t),f=o.get(u);f||(f=a.querySelector(Bo(u)),f||(t=_({src:t,async:!0},n),(n=_i.get(u))&&dd(t,n),f=a.createElement("script"),R(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function py(t,n){fa.M(t,n);var a=gr;if(a&&t){var o=wa(a).hoistableScripts,u=vr(t),f=o.get(u);f||(f=a.querySelector(Bo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&dd(t,n),f=a.createElement("script"),R(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function L0(t,n,a,o){var u=(u=ie.current)?dc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_r(a.href);var f=wa(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(Po(t)))&&!f._p&&(S.instance=f,S.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||my(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function _r(t){return'href="'+ct(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function U0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function my(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),R(n),t.head.appendChild(n))}function vr(t){return'[src="'+ct(t)+'"]'}function Bo(t){return"script[async]"+t}function N0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ct(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),wn(o,"style",u),hc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_r(a.href);var f=t.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=U0(a),(u=_i.get(u))&&fd(o,u),f=(t.ownerDocument||t).createElement("link"),R(f);var S=f;return S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),wn(f,"link",o),n.state.loading|=4,hc(f,a.precedence,t),n.instance=f;case"script":return f=vr(a.src),(u=t.querySelector(Bo(f)))?(n.instance=u,R(u),u):(o=a,(u=_i.get(f))&&(o=_({},a),dd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,a.precedence,t));return n.instance}function hc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var pc=null;function O0(t,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[os]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function P0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _y(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(o.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=mc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=U0(o),(u=_i.get(u))&&fd(o,u),f=f.createElement("link"),R(f);var S=f;S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),wn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=mc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var hd=0;function vy(t,n){return t.stylesheets&&t.count===0&&_c(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&hd===0&&(hd=62500*QS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>hd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gc=null;function _c(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gc=new Map,n.forEach(xy,t),gc=null,mc.call(t))}function xy(t,n){if(!(n.state.loading&4)){var a=gc.get(t);if(a)var o=a.get(null);else{a=new Map,gc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Io={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Sy(t,n,a,o,u,f,S,A,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function I0(t,n,a,o,u,f,S,A,V,ee,pe,xe){return t=new Sy(t,n,a,S,V,ee,pe,xe,A),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Zu(f),t}function F0(t){return t?(t=Zs,t):Zs}function z0(t,n,a,o,u,f){u=F0(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(t,o,n),a!==null&&(Yn(a,t,n),mo(a,t,n))}function H0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function pd(t,n){H0(t,n),(t=t.alternate)&&H0(t,n)}function G0(t){if(t.tag===13||t.tag===31){var n=ds(t,67108864);n!==null&&Yn(n,t,67108864),pd(t,67108864)}}function V0(t){if(t.tag===13||t.tag===31){var n=ai();n=Zr(n);var a=ds(t,n);a!==null&&Yn(a,t,n),pd(t,n)}}var vc=!0;function yy(t,n,a,o){var u=L.T;L.T=null;var f=G.p;try{G.p=2,md(t,n,a,o)}finally{G.p=f,L.T=u}}function My(t,n,a,o){var u=L.T;L.T=null;var f=G.p;try{G.p=8,md(t,n,a,o)}finally{G.p=f,L.T=u}}function md(t,n,a,o){if(vc){var u=gd(o);if(u===null)td(t,n,o,xc,a),X0(t,o);else if(by(u,t,n,a,o))o.stopPropagation();else if(X0(t,o),n&4&&-1<Ey.indexOf(t)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Me(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var V=1<<31-Be(S);A.entanglements[1]|=V,S&=~V}zi(f),(Pt&6)===0&&(tc=b()+500,Lo(0))}}break;case 31:case 13:A=ds(f,2),A!==null&&Yn(A,f,2),ic(),pd(f,2)}if(f=gd(o),f===null&&td(t,n,o,xc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else td(t,n,o,null,a)}}function gd(t){return t=_u(t),_d(t)}var xc=null;function _d(t){if(xc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return xc=t,null}function k0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case he:return 2;case Se:return 8;case de:case qe:return 32;case De:return 268435456;default:return 32}default:return 32}}var vd=!1,Ya=null,qa=null,Za=null,Fo=new Map,zo=new Map,Ka=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Ho(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&G0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function by(t,n,a,o,u){switch(n){case"focusin":return Ya=Ho(Ya,t,n,a,o,u),!0;case"dragenter":return qa=Ho(qa,t,n,a,o,u),!0;case"mouseover":return Za=Ho(Za,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Ho(Fo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Ho(zo.get(f)||null,t,n,a,o,u)),!0}return!1}function j0(t){var n=Aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){V0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){V0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=gd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Ra(a),n!==null&&G0(n),t.blockedOn=a,!1;n.shift()}return!0}function W0(t,n,a){Sc(t)&&a.delete(n)}function Ty(){vd=!1,Ya!==null&&Sc(Ya)&&(Ya=null),qa!==null&&Sc(qa)&&(qa=null),Za!==null&&Sc(Za)&&(Za=null),Fo.forEach(W0),zo.forEach(W0)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,vd||(vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ty)))}var Mc=null;function Y0(t){Mc!==t&&(Mc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===t&&(Mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(_d(o||a)===null)continue;break}var f=Ra(a);f!==null&&(t.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xr(t){function n(V){return yc(V,t)}Ya!==null&&yc(Ya,t),qa!==null&&yc(qa,t),Za!==null&&yc(Za,t),Fo.forEach(n),zo.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)j0(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[xn]||null;if(typeof f=="function")S||Y0(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[xn]||null)A=S.formAction;else if(_d(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Y0(a)}}}function q0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xd(t){this._internalRoot=t}Ec.prototype.render=xd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();z0(a,o,t,n,null,null)},Ec.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;z0(t.current,2,null,t,null,null),ic(),n[Ti]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=Kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&j0(t)}};var Z0=e.version;if(Z0!=="19.2.5")throw Error(s(527,Z0,"19.2.5"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Ay={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{be=bc.inject(Ay),Te=bc}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=ng,f=ig,S=ag;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=I0(t,1,!1,null,null,a,o,null,u,f,S,q0),t[Ti]=n.current,ed(t),new xd(n)},Vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=ng,S=ig,A=ag,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=I0(t,1,!0,n,a??null,o,u,V,f,S,A,q0),n.context=F0(null),a=n.current,o=ai(),o=Zr(o),u=Pa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Dn(n,a),zi(n),t[Ti]=n.current,ed(t),new Ec(n)},Vo.version="19.2.5",Vo}var s_;function By(){if(s_)return Ed.exports;s_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ed.exports=Py(),Ed.exports}var Iy=By();const Fy={de:{header:{home:"Home",about:"Über mich",contact:"Kontakt"},hero:{kicker:"Portfolio",titlePrefix:"Hi, ich bin",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Galerie",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung: React, Angular, Vue.js und moderne Webtechnologien. Nebenbei: Video-Editing & Grafikdesign seit 2020.",ctaPrimary:"Was ich mache",ctaSecondary:"Kontakt",scroll:"Scroll"},aboutSlider:{title:"Nebenbei",categories:[{key:"all",label:"Alles"},{key:"pets",label:"Tiere"},{key:"moto",label:"Motorrad"},{key:"hike",label:"Wandern"},{key:"me",label:"Ich"}],back:"Zurück",next:"Weiter",close:"Schließen"},socialStats:{kicker:"Abseits vom Code",title:"Auch online unterwegs",subtitle:"Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs bin.",linkedinCta:"Lass uns vernetzen",latestPost:"Neuester Beitrag",tiktokPreviewCaption:"Neuester Post auf TikTok ansehen",instagramPreviewCaption:"Neuester Post auf Instagram ansehen"},projectsPreview:{kicker:"Live Vorschau",title:"Meine Projekte",subtitle:"Ein paar Einblicke in Dinge, die ich gebaut habe · klick dich durch oder öffne sie live.",previousProject:"Vorheriges Projekt",nextProject:"Nächstes Projekt",openLive:"Live öffnen",openLiveAria:r=>`${r} live öffnen`,jumpTo:r=>`Zu ${r} springen`},liveButton:{label:"Live ansehen"},about:{heading:"Über mich",lead:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung.",body:"Ich bin Junior Software Engineer mit Fokus auf moderne Webentwicklung und Frontend-Technologien wie React, Angular und Vue.js · von durchdachten Oberflächen bis zur Backend-Anbindung. Daneben schneide ich seit 2020 Videos für Social Media und gestalte Grafiken; mein eigener TikTok-Kanal hat über 20.000 Follower und 3,5 Mio. Likes. Was ich mitbringe: sauberer Code, ein Auge für Timing und Komposition, und die Bereitschaft, mich kontinuierlich in neue Technologien einzuarbeiten.",spotlight:{kicker:"Nebenbei: Video & Grafikdesign",heading:"TikTok @jsnuwu · eigener Kanal seit 2020",subtitle:"Konzeption, Schnitt und Gestaltung in Eigenregie",statFollowerValue:"20.800",statFollowerLabel:"Follower",statLikesValue:"3,5 Mio.",statLikesLabel:"Likes",statExperienceValue:"5 Jahre",statExperienceLabel:"Schnitt-Praxis",list:["Eigene Edits von Schnitt bis Veröffentlichung auf TikTok, YouTube und Instagram","Gefühl für Bildaufbau, Timing und Reichweite"]}},experience:{heading:"Werdegang",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · heute",bullets:["Frontend-Komponenten mit Angular und TypeScript, angebunden an bestehende PHP-Backends","Kundenwebsites mit WordPress und Elementor, erweitert um eigenen PHP- und CSS-Code","Bugfixing und Feature-Erweiterungen im laufenden Betrieb"]},{org:"adesso SE · Ausbildung",role:"Fachinformatiker für Anwendungsentwicklung",period:"09/2023 · 01/2026",bullets:["Frontend mit Angular und TypeScript, Backend mit Java, Spring Boot und PostgreSQL","Profiler (internes Produkt, 05/2025 · 12/2025): Frontend-Komponenten und UI-Bugfixes","Scrum-Team: Git, Code Reviews, JIRA, Confluence","IT-Support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"FSJ · Freiwilliges Soziales Jahr, Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Begleitung und Unterstützung von Menschen mit Behinderungen im Alltag, inklusive Freizeitaktivitäten und Ausflügen","Mitwirkung bei der Alltagsgestaltung: Kochen, Haushaltsaktivitäten und Förderung der Selbstständigkeit"]}]},skills:{heading:"Skills",groups:[{title:"Schwerpunkt Frontend",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Weitere Frameworks",items:"React, Vue.js"},{title:"Backend & Daten",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Arbeitsweise",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video-Schnitt, TikTok, YouTube, Instagram"}],languages:[{name:"Deutsch",level:"Muttersprache"},{name:"Englisch",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projekte",skillsLabel:"Skills:"},contact:{heading:"Kontakt",intro:"Ich freue mich über deine Nachricht! Schreib mir einfach eine E-Mail oder nutze das Formular unten.",send:"send",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",messagePlaceholder:"Deine Nachricht",submit:"Absenden"},tiktokShowcase:{kicker:"TikTok",title:"Ein paar Einblicke",subtitle:"Mehr davon auf TikTok ansehen",prev:"Vorheriges Video",next:"Nächstes Video",mute:"Stummschalten",unmute:"Ton an",play:"Abspielen",pause:"Pausieren",volume:"Lautstärke",jumpTo:r=>`Zu Video ${r} springen`}},en:{header:{home:"Home",about:"About",contact:"Contact"},hero:{kicker:"Portfolio",titlePrefix:"Hi, I'm",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Gallery",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer focused on frontend development: React, Angular, Vue.js and modern web technologies. On the side: video editing & graphic design since 2020.",ctaPrimary:"What I do",ctaSecondary:"Contact",scroll:"Scroll"},aboutSlider:{title:"On the side",categories:[{key:"all",label:"All"},{key:"pets",label:"Pets"},{key:"moto",label:"Motorcycles"},{key:"hike",label:"Hiking"},{key:"me",label:"Me"}],back:"Back",next:"Next",close:"Close"},socialStats:{kicker:"Beyond the code",title:"Also active online",subtitle:"A few numbers from the channels I'm active on elsewhere.",linkedinCta:"Let's connect",latestPost:"Latest post",tiktokPreviewCaption:"Watch my latest TikTok post",instagramPreviewCaption:"View my latest Instagram post"},projectsPreview:{kicker:"Live Preview",title:"My Projects",subtitle:"A few glimpses of things I've built · click through or open them live.",previousProject:"Previous project",nextProject:"Next project",openLive:"Open live",openLiveAria:r=>`Open ${r} live`,jumpTo:r=>`Jump to ${r}`},liveButton:{label:"View live"},about:{heading:"About me",lead:"Junior Software Engineer focused on frontend development.",body:"I'm a Junior Software Engineer focused on modern web development and frontend technologies like React, Angular and Vue.js · from thoughtful interfaces to backend integration. Alongside that, I've been editing videos for social media and designing graphics since 2020; my own TikTok channel has over 20,000 followers and 3.5M likes. What I bring: clean code, an eye for timing and composition, and a drive to keep learning new technologies.",spotlight:{kicker:"On the side: Video & Graphic Design",heading:"TikTok @jsnuwu · my own channel since 2020",subtitle:"Concept, editing and design, all done myself",statFollowerValue:"20.8K",statFollowerLabel:"Followers",statLikesValue:"3.5M",statLikesLabel:"Likes",statExperienceValue:"5 years",statExperienceLabel:"Editing Experience",list:["My own edits from cut to release on TikTok, YouTube and Instagram","A feel for framing, timing and reach"]}},experience:{heading:"Experience",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · present",bullets:["Frontend components with Angular and TypeScript, wired into existing PHP backends","Client websites with WordPress and Elementor, extended with custom PHP and CSS","Bug fixing and feature work in production"]},{org:"adesso SE · Apprenticeship",role:"IT Specialist for Application Development",period:"09/2023 · 01/2026",bullets:["Frontend with Angular and TypeScript, backend with Java, Spring Boot and PostgreSQL","Profiler (internal product, 05/2025 · 12/2025): frontend components and UI bug fixes","Scrum team: Git, code reviews, JIRA, Confluence","IT support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"Voluntary Social Year (FSJ), Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Supporting and assisting people with disabilities in daily life, including leisure activities and outings","Helping shape everyday life: cooking, household activities, and fostering independence"]}]},skills:{heading:"Skills",groups:[{title:"Frontend focus",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Other frameworks",items:"React, Vue.js"},{title:"Backend & Data",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Method",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video editing, TikTok, YouTube, Instagram"}],languages:[{name:"German",level:"Native"},{name:"English",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projects",skillsLabel:"Skills:"},contact:{heading:"Contact",intro:"I'd love to hear from you! Just send me an email or use the form below.",send:"send",namePlaceholder:"Your name",emailPlaceholder:"Your email",messagePlaceholder:"Your message",submit:"Send"},tiktokShowcase:{kicker:"TikTok",title:"A few glimpses",subtitle:"See more on TikTok",prev:"Previous video",next:"Next video",mute:"Mute",unmute:"Unmute",play:"Play",pause:"Pause",volume:"Volume",jumpTo:r=>`Jump to video ${r}`}}},Av=Ee.createContext(null);function zy({children:r}){const[e,i]=Ee.useState(()=>{const s=localStorage.getItem("lang");return s==="en"||s==="de"?s:"de"});return Ee.useEffect(()=>{localStorage.setItem("lang",e),document.documentElement.lang=e},[e]),z.jsx(Av.Provider,{value:{lang:e,setLang:i,t:Fy[e]},children:r})}function Hy(r,e,i){return Math.max(e,Math.min(r,i))}const Pn={toVector(r,e){return r===void 0&&(r=e),Array.isArray(r)?r:[r,r]},add(r,e){return[r[0]+e[0],r[1]+e[1]]},sub(r,e){return[r[0]-e[0],r[1]-e[1]]},addTo(r,e){r[0]+=e[0],r[1]+=e[1]},subTo(r,e){r[0]-=e[0],r[1]-=e[1]}};function r_(r,e,i){return e===0||Math.abs(e)===1/0?Math.pow(r,i*5):r*e*i/(e+i*r)}function o_(r,e,i,s=.15){return s===0?Hy(r,e,i):r<e?-r_(e-r,i-e,s)+e:r>i?+r_(r-i,i-e,s)+i:r}function Gy(r,[e,i],[s,l]){const[[c,d],[h,m]]=r;return[o_(e,c,d,s),o_(i,h,m,l)]}function Vy(r,e){if(typeof r!="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function ky(r){var e=Vy(r,"string");return typeof e=="symbol"?e:String(e)}function Zn(r,e,i){return e=ky(e),e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function l_(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function $t(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?l_(Object(i),!0).forEach(function(s){Zn(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):l_(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}const Rv={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function c_(r){return r?r[0].toUpperCase()+r.slice(1):""}const Xy=["enter","leave"];function jy(r=!1,e){return r&&!Xy.includes(e)}function Wy(r,e="",i=!1){const s=Rv[r],l=s&&s[e]||e;return"on"+c_(r)+c_(l)+(jy(i,l)?"Capture":"")}const Yy=["gotpointercapture","lostpointercapture"];function qy(r){let e=r.substring(2).toLowerCase();const i=!!~e.indexOf("passive");i&&(e=e.replace("passive",""));const s=Yy.includes(e)?"capturecapture":"capture",l=!!~e.indexOf(s);return l&&(e=e.replace("capture","")),{device:e,capture:l,passive:i}}function Zy(r,e=""){const i=Rv[r],s=i&&i[e]||e;return r+s}function fu(r){return"touches"in r}function wv(r){return fu(r)?"touch":"pointerType"in r?r.pointerType:"mouse"}function Ky(r){return Array.from(r.touches).filter(e=>{var i,s;return e.target===r.currentTarget||((i=r.currentTarget)===null||i===void 0||(s=i.contains)===null||s===void 0?void 0:s.call(i,e.target))})}function Jy(r){return r.type==="touchend"||r.type==="touchcancel"?r.changedTouches:r.targetTouches}function Cv(r){return fu(r)?Jy(r)[0]:r}function Qy(r){return Ky(r).map(e=>e.identifier)}function Rd(r){const e=Cv(r);return fu(r)?e.identifier:e.pointerId}function u_(r){const e=Cv(r);return[e.clientX,e.clientY]}function $y(r){const e={};if("buttons"in r&&(e.buttons=r.buttons),"shiftKey"in r){const{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c}=r;Object.assign(e,{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c})}return e}function au(r,...e){return typeof r=="function"?r(...e):r}function eM(){}function tM(...r){return r.length===0?eM:r.length===1?r[0]:function(){let e;for(const i of r)e=i.apply(this,arguments)||e;return e}}function f_(r,e){return Object.assign({},e,r||{})}const nM=32;class iM{constructor(e,i,s){this.ctrl=e,this.args=i,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:i,ingKey:s,args:l}=this;i[s]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=l,e.axis=void 0,e.memo=void 0,e.elapsedTime=e.timeDelta=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const i=this.state,s=this.config;i._active||(this.reset(),this.computeInitial(),i._active=!0,i.target=e.target,i.currentTarget=e.currentTarget,i.lastOffset=s.from?au(s.from,i):i.offset,i.offset=i.lastOffset,i.startTime=i.timeStamp=e.timeStamp)}computeValues(e){const i=this.state;i._values=e,i.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:i,config:s,shared:l}=this;i.args=this.args;let c=0;if(e&&(i.event=e,s.preventDefault&&e.cancelable&&i.event.preventDefault(),i.type=e.type,l.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,l.locked=!!document.pointerLockElement,Object.assign(l,$y(e)),l.down=l.pressed=l.buttons%2===1||l.touches>0,c=e.timeStamp-i.timeStamp,i.timeStamp=e.timeStamp,i.elapsedTime=i.timeStamp-i.startTime),i._active){const F=i._delta.map(Math.abs);Pn.addTo(i._distance,F)}this.axisIntent&&this.axisIntent(e);const[d,h]=i._movement,[m,p]=s.threshold,{_step:g,values:_}=i;if(s.hasCustomTransform?(g[0]===!1&&(g[0]=Math.abs(d)>=m&&_[0]),g[1]===!1&&(g[1]=Math.abs(h)>=p&&_[1])):(g[0]===!1&&(g[0]=Math.abs(d)>=m&&Math.sign(d)*m),g[1]===!1&&(g[1]=Math.abs(h)>=p&&Math.sign(h)*p)),i.intentional=g[0]!==!1||g[1]!==!1,!i.intentional)return;const v=[0,0];if(s.hasCustomTransform){const[F,I]=_;v[0]=g[0]!==!1?F-g[0]:0,v[1]=g[1]!==!1?I-g[1]:0}else v[0]=g[0]!==!1?d-g[0]:0,v[1]=g[1]!==!1?h-g[1]:0;this.restrictToAxis&&!i._blocked&&this.restrictToAxis(v);const y=i.offset,E=i._active&&!i._blocked||i.active;E&&(i.first=i._active&&!i.active,i.last=!i._active&&i.active,i.active=l[this.ingKey]=i._active,e&&(i.first&&("bounds"in s&&(i._bounds=au(s.bounds,i)),this.setup&&this.setup()),i.movement=v,this.computeOffset()));const[T,M]=i.offset,[[x,O],[U,C]]=i._bounds;i.overflow=[T<x?-1:T>O?1:0,M<U?-1:M>C?1:0],i._movementBound[0]=i.overflow[0]?i._movementBound[0]===!1?i._movement[0]:i._movementBound[0]:!1,i._movementBound[1]=i.overflow[1]?i._movementBound[1]===!1?i._movement[1]:i._movementBound[1]:!1;const B=i._active?s.rubberband||[0,0]:[0,0];if(i.offset=Gy(i._bounds,i.offset,B),i.delta=Pn.sub(i.offset,y),this.computeMovement(),E&&(!i.last||c>nM)){i.delta=Pn.sub(i.offset,y);const F=i.delta.map(Math.abs);Pn.addTo(i.distance,F),i.direction=i.delta.map(Math.sign),i._direction=i._delta.map(Math.sign),!i.first&&c>0&&(i.velocity=[F[0]/c,F[1]/c],i.timeDelta=c)}}emit(){const e=this.state,i=this.shared,s=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!s.triggerAllEvents)return;const l=this.handler($t($t($t({},i),e),{},{[this.aliasKey]:e.values}));l!==void 0&&(e.memo=l)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function aM([r,e],i){const s=Math.abs(r),l=Math.abs(e);if(s>l&&s>i)return"x";if(l>s&&l>i)return"y"}class sM extends iM{constructor(...e){super(...e),Zn(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Pn.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Pn.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const i=this.state,s=this.config;if(!i.axis&&e){const l=typeof s.axisThreshold=="object"?s.axisThreshold[wv(e)]:s.axisThreshold;i.axis=aM(i._movement,l)}i._blocked=(s.lockDirection||!!s.axis)&&!i.axis||!!s.axis&&s.axis!==i.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const rM=r=>r,d_=.15,Dv={enabled(r=!0){return r},eventOptions(r,e,i){return $t($t({},i.shared.eventOptions),r)},preventDefault(r=!1){return r},triggerAllEvents(r=!1){return r},rubberband(r=0){switch(r){case!0:return[d_,d_];case!1:return[0,0];default:return Pn.toVector(r)}},from(r){if(typeof r=="function")return r;if(r!=null)return Pn.toVector(r)},transform(r,e,i){const s=r||i.shared.transform;return this.hasCustomTransform=!!s,s||rM},threshold(r){return Pn.toVector(r,0)}},oM=0,ll=$t($t({},Dv),{},{axis(r,e,{axis:i}){if(this.lockDirection=i==="lock",!this.lockDirection)return i},axisThreshold(r=oM){return r},bounds(r={}){if(typeof r=="function")return c=>ll.bounds(r(c));if("current"in r)return()=>r.current;if(typeof HTMLElement=="function"&&r instanceof HTMLElement)return r;const{left:e=-1/0,right:i=1/0,top:s=-1/0,bottom:l=1/0}=r;return[[e,i],[s,l]]}}),h_={ArrowRight:(r,e=1)=>[r*e,0],ArrowLeft:(r,e=1)=>[-1*r*e,0],ArrowUp:(r,e=1)=>[0,-1*r*e],ArrowDown:(r,e=1)=>[0,r*e]};class lM extends sM{constructor(...e){super(...e),Zn(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const i=e._bounds.getBoundingClientRect(),s=e.currentTarget.getBoundingClientRect(),l={left:i.left-s.left+e.offset[0],right:i.right-s.right+e.offset[0],top:i.top-s.top+e.offset[1],bottom:i.bottom-s.bottom+e.offset[1]};e._bounds=ll.bounds(l)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const i=this.config,s=this.state;if(e.buttons!=null&&(Array.isArray(i.pointerButtons)?!i.pointerButtons.includes(e.buttons):i.pointerButtons!==-1&&i.pointerButtons!==e.buttons))return;const l=this.ctrl.setEventIds(e);i.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(l&&l.size>1&&s._pointerActive)&&(this.start(e),this.setupPointer(e),s._pointerId=Rd(e),s._pointerActive=!0,this.computeValues(u_(e)),this.computeInitial(),i.preventScrollAxis&&wv(e)!=="mouse"?(s._active=!1,this.setupScrollPrevention(e)):i.delay>0?(this.setupDelayTrigger(e),i.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const i=this.state;i._active=!0,i._preventScroll=!0,i._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const i=this.state,s=this.config;if(!i._pointerActive)return;const l=Rd(e);if(i._pointerId!==void 0&&l!==i._pointerId)return;const c=u_(e);if(document.pointerLockElement===e.target?i._delta=[e.movementX,e.movementY]:(i._delta=Pn.sub(c,i._values),this.computeValues(c)),Pn.addTo(i._movement,i._delta),this.compute(e),i._delayed&&i.intentional){this.timeoutStore.remove("dragDelay"),i.active=!1,this.startPointerDrag(e);return}if(s.preventScrollAxis&&!i._preventScroll)if(i.axis)if(i.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){i._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const i=this.state,s=this.config;if(!i._active||!i._pointerActive)return;const l=Rd(e);if(i._pointerId!==void 0&&l!==i._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[c,d]=i._distance;if(i.tap=c<=s.tapsThreshold&&d<=s.tapsThreshold,i.tap&&s.filterTaps)i._force=!0;else{const[h,m]=i._delta,[p,g]=i._movement,[_,v]=s.swipe.velocity,[y,E]=s.swipe.distance,T=s.swipe.duration;if(i.elapsedTime<T){const M=Math.abs(h/i.timeDelta),x=Math.abs(m/i.timeDelta);M>_&&Math.abs(p)>y&&(i.swipe[0]=Math.sign(h)),x>v&&Math.abs(g)>E&&(i.swipe[1]=Math.sign(m))}}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){const i=this.config,s=i.device;i.pointerLock&&e.currentTarget.requestPointerLock(),i.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,cM(e);const i=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",i),this.eventStore.add(this.sharedConfig.window,"touch","cancel",i),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const i=h_[e.key];if(i){const s=this.state,l=e.shiftKey?10:e.altKey?.1:1;this.start(e),s._delta=i(this.config.keyboardDisplacement,l),s._keyboardActive=!0,Pn.addTo(s._movement,s._delta),this.compute(e),this.emit()}}keyUp(e){e.key in h_&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const i=this.config.device;e(i,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(i,"change",this.pointerMove.bind(this)),e(i,"end",this.pointerUp.bind(this)),e(i,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function cM(r){"persist"in r&&typeof r.persist=="function"&&r.persist()}const cl=typeof window<"u"&&window.document&&window.document.createElement;function Lv(){return cl&&"ontouchstart"in window}function uM(){return Lv()||cl&&window.navigator.maxTouchPoints>1}function fM(){return cl&&"onpointerdown"in window}function dM(){return cl&&"exitPointerLock"in window.document}function hM(){try{return"constructor"in GestureEvent}catch{return!1}}const Si={isBrowser:cl,gesture:hM(),touch:Lv(),touchscreen:uM(),pointer:fM(),pointerLock:dM()},pM=250,mM=180,gM=.5,_M=50,vM=250,xM=10,p_={mouse:0,touch:0,pen:8},SM=$t($t({},ll),{},{device(r,e,{pointer:{touch:i=!1,lock:s=!1,mouse:l=!1}={}}){return this.pointerLock=s&&Si.pointerLock,Si.touch&&i?"touch":this.pointerLock?"mouse":Si.pointer&&!l?"pointer":Si.touch?"touch":"mouse"},preventScrollAxis(r,e,{preventScroll:i}){if(this.preventScrollDelay=typeof i=="number"?i:i||i===void 0&&r?pM:void 0,!(!Si.touchscreen||i===!1))return r||(i!==void 0?"y":void 0)},pointerCapture(r,e,{pointer:{capture:i=!0,buttons:s=1,keys:l=!0}={}}){return this.pointerButtons=s,this.keys=l,!this.pointerLock&&this.device==="pointer"&&i},threshold(r,e,{filterTaps:i=!1,tapsThreshold:s=3,axis:l=void 0}){const c=Pn.toVector(r,i?s:l?1:0);return this.filterTaps=i,this.tapsThreshold=s,c},swipe({velocity:r=gM,distance:e=_M,duration:i=vM}={}){return{velocity:this.transform(Pn.toVector(r)),distance:this.transform(Pn.toVector(e)),duration:i}},delay(r=0){switch(r){case!0:return mM;case!1:return 0;default:return r}},axisThreshold(r){return r?$t($t({},p_),r):p_},keyboardDisplacement(r=xM){return r}});$t($t({},Dv),{},{device(r,e,{shared:i,pointer:{touch:s=!1}={}}){if(i.target&&!Si.touch&&Si.gesture)return"gesture";if(Si.touch&&s)return"touch";if(Si.touchscreen){if(Si.pointer)return"pointer";if(Si.touch)return"touch"}},bounds(r,e,{scaleBounds:i={},angleBounds:s={}}){const l=d=>{const h=f_(au(i,d),{min:-1/0,max:1/0});return[h.min,h.max]},c=d=>{const h=f_(au(s,d),{min:-1/0,max:1/0});return[h.min,h.max]};return typeof i!="function"&&typeof s!="function"?[l(),c()]:d=>[l(d),c(d)]},threshold(r,e,i){return this.lockDirection=i.axis==="lock",Pn.toVector(r,this.lockDirection?[.1,3]:0)},modifierKey(r){return r===void 0?"ctrlKey":r},pinchOnWheel(r=!0){return r}});$t($t({},ll),{},{mouseOnly:(r=!0)=>r});$t($t({},ll),{},{mouseOnly:(r=!0)=>r});const Uv=new Map,ch=new Map;function yM(r){Uv.set(r.key,r.engine),ch.set(r.key,r.resolver)}const MM={key:"drag",engine:lM,resolver:SM};function EM(r,e){if(r==null)return{};var i={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(e.indexOf(l)>=0)&&(i[l]=r[l]);return i}function bM(r,e){if(r==null)return{};var i=EM(r,e),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}const TM={target(r){if(r)return()=>"current"in r?r.current:r},enabled(r=!0){return r},window(r=Si.isBrowser?window:void 0){return r},eventOptions({passive:r=!0,capture:e=!1}={}){return{passive:r,capture:e}},transform(r){return r}},AM=["target","eventOptions","window","enabled","transform"];function Kc(r={},e){const i={};for(const[s,l]of Object.entries(e))switch(typeof l){case"function":i[s]=l.call(i,r[s],s,r);break;case"object":i[s]=Kc(r[s],l);break;case"boolean":l&&(i[s]=r[s]);break}return i}function RM(r,e,i={}){const s=r,{target:l,eventOptions:c,window:d,enabled:h,transform:m}=s,p=bM(s,AM);if(i.shared=Kc({target:l,eventOptions:c,window:d,enabled:h,transform:m},TM),e){const g=ch.get(e);i[e]=Kc($t({shared:i.shared},p),g)}else for(const g in p){const _=ch.get(g);_&&(i[g]=Kc($t({shared:i.shared},p[g]),_))}return i}class Nv{constructor(e,i){Zn(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=i}add(e,i,s,l,c){const d=this._listeners,h=Zy(i,s),m=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},p=$t($t({},m),c);e.addEventListener(h,l,p);const g=()=>{e.removeEventListener(h,l,p),d.delete(g)};return d.add(g),g}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class wM{constructor(){Zn(this,"_timeouts",new Map)}add(e,i,s=140,...l){this.remove(e),this._timeouts.set(e,window.setTimeout(i,s,...l))}remove(e){const i=this._timeouts.get(e);i&&window.clearTimeout(i)}clean(){this._timeouts.forEach(e=>{window.clearTimeout(e)}),this._timeouts.clear()}}class CM{constructor(e){Zn(this,"gestures",new Set),Zn(this,"_targetEventStore",new Nv(this)),Zn(this,"gestureEventStores",{}),Zn(this,"gestureTimeoutStores",{}),Zn(this,"handlers",{}),Zn(this,"config",{}),Zn(this,"pointerIds",new Set),Zn(this,"touchIds",new Set),Zn(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),DM(this,e)}setEventIds(e){if(fu(e))return this.touchIds=new Set(Qy(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,i){this.handlers=e,this.nativeHandlers=i}applyConfig(e,i){this.config=RM(e,i,this.config)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const i=this.config.shared,s={};let l;if(!(i.target&&(l=i.target(),!l))){if(i.enabled){for(const d of this.gestures){const h=this.config[d],m=m_(s,h.eventOptions,!!l);if(h.enabled){const p=Uv.get(d);new p(this,e,d).bind(m)}}const c=m_(s,i.eventOptions,!!l);for(const d in this.nativeHandlers)c(d,"",h=>this.nativeHandlers[d]($t($t({},this.state.shared),{},{event:h,args:e})),void 0,!0)}for(const c in s)s[c]=tM(...s[c]);if(!l)return s;for(const c in s){const{device:d,capture:h,passive:m}=qy(c);this._targetEventStore.add(l,d,"",s[c],{capture:h,passive:m})}}}}function Sr(r,e){r.gestures.add(e),r.gestureEventStores[e]=new Nv(r,e),r.gestureTimeoutStores[e]=new wM}function DM(r,e){e.drag&&Sr(r,"drag"),e.wheel&&Sr(r,"wheel"),e.scroll&&Sr(r,"scroll"),e.move&&Sr(r,"move"),e.pinch&&Sr(r,"pinch"),e.hover&&Sr(r,"hover")}const m_=(r,e,i)=>(s,l,c,d={},h=!1)=>{var m,p;const g=(m=d.capture)!==null&&m!==void 0?m:e.capture,_=(p=d.passive)!==null&&p!==void 0?p:e.passive;let v=h?s:Wy(s,l,g);i&&_&&(v+="Passive"),r[v]=r[v]||[],r[v].push(c)};function LM(r,e={},i,s){const l=Md.useMemo(()=>new CM(r),[]);if(l.applyHandlers(r,s),l.applyConfig(e,i),Md.useEffect(l.effect.bind(l)),Md.useEffect(()=>l.clean.bind(l),[]),e.target===void 0)return l.bind.bind(l)}function UM(r,e){return yM(MM),LM({drag:r},e||{},"drag")}function Ta(){const r=Ee.useContext(Av);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r}const rp="182",NM=0,g_=1,OM=2,Jc=1,PM=2,Qo=3,rs=0,Kn=1,_a=2,xa=0,Ir=1,__=2,v_=3,x_=4,BM=5,Ns=100,IM=101,FM=102,zM=103,HM=104,GM=200,VM=201,kM=202,XM=203,uh=204,fh=205,jM=206,WM=207,YM=208,qM=209,ZM=210,KM=211,JM=212,QM=213,$M=214,dh=0,hh=1,ph=2,zr=3,mh=4,gh=5,_h=6,vh=7,Ov=0,eE=1,tE=2,Xi=0,Pv=1,Bv=2,Iv=3,Fv=4,zv=5,Hv=6,Gv=7,Vv=300,Is=301,Hr=302,xh=303,Sh=304,du=306,yh=1e3,va=1001,Mh=1002,Cn=1003,nE=1004,Tc=1005,Bn=1006,wd=1007,Ps=1008,Mi=1009,kv=1010,Xv=1011,il=1012,op=1013,Wi=1014,Vi=1015,ya=1016,lp=1017,cp=1018,al=1020,jv=35902,Wv=35899,Yv=1021,qv=1022,Oi=1023,Ma=1026,Bs=1027,Zv=1028,up=1029,Gr=1030,fp=1031,dp=1033,Qc=33776,$c=33777,eu=33778,tu=33779,Eh=35840,bh=35841,Th=35842,Ah=35843,Rh=36196,wh=37492,Ch=37496,Dh=37488,Lh=37489,Uh=37490,Nh=37491,Oh=37808,Ph=37809,Bh=37810,Ih=37811,Fh=37812,zh=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Xh=37818,jh=37819,Wh=37820,Yh=37821,qh=36492,Zh=36494,Kh=36495,Jh=36283,Qh=36284,$h=36285,ep=36286,iE=3200,aE=0,sE=1,as="",xi="srgb",Vr="srgb-linear",su="linear",Gt="srgb",yr=7680,S_=519,rE=512,oE=513,lE=514,hp=515,cE=516,uE=517,pp=518,fE=519,y_=35044,M_="300 es",ki=2e3,ru=2001;function Kv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dE(){const r=ou("canvas");return r.style.display="block",r}const E_={};function b_(...r){const e="THREE."+r.shift();console.log(e,...r)}function ot(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Lt(...r){const e="THREE."+r.shift();console.error(e,...r)}function sl(...r){const e=r.join(" ");e in E_||(E_[e]=!0,ot(...r))}function hE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Xr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let T_=1234567;const el=Math.PI/180,rl=180/Math.PI;function jr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function bt(r,e,i){return Math.max(e,Math.min(i,r))}function mp(r,e){return(r%e+e)%e}function pE(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function mE(r,e,i){return r!==e?(i-r)/(e-r):0}function tl(r,e,i){return(1-i)*r+i*e}function gE(r,e,i,s){return tl(r,e,1-Math.exp(-i*s))}function _E(r,e=1){return e-Math.abs(mp(r,e*2)-e)}function vE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function xE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function SE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yE(r,e){return r+Math.random()*(e-r)}function ME(r){return r*(.5-Math.random())}function EE(r){r!==void 0&&(T_=r);let e=T_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bE(r){return r*el}function TE(r){return r*rl}function AE(r){return(r&r-1)===0&&r!==0}function RE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function CE(r,e,i,s,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((e+s)/2),g=d((e+s)/2),_=c((e-s)/2),v=d((e-s)/2),y=c((s-e)/2),E=d((s-e)/2);switch(l){case"XYX":r.set(h*g,m*_,m*v,h*p);break;case"YZY":r.set(m*v,h*g,m*_,h*p);break;case"ZXZ":r.set(m*_,m*v,h*g,h*p);break;case"XZX":r.set(h*g,m*E,m*y,h*p);break;case"YXY":r.set(m*y,h*g,m*E,h*p);break;case"ZYZ":r.set(m*E,m*y,h*g,h*p);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Pr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const DE={DEG2RAD:el,RAD2DEG:rl,generateUUID:jr,clamp:bt,euclideanModulo:mp,mapLinear:pE,inverseLerp:mE,lerp:tl,damp:gE,pingpong:_E,smoothstep:vE,smootherstep:xE,randInt:SE,randFloat:yE,randFloatSpread:ME,seededRandom:EE,degToRad:bE,radToDeg:TE,isPowerOfTwo:AE,ceilPowerOfTwo:RE,floorPowerOfTwo:wE,setQuaternionFromProperEuler:CE,normalize:Fn,denormalize:Pr};class jt{constructor(e=0,i=0){jt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],v=c[d+0],y=c[d+1],E=c[d+2],T=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(h>=1){e[i+0]=v,e[i+1]=y,e[i+2]=E,e[i+3]=T;return}if(_!==T||m!==v||p!==y||g!==E){let M=m*v+p*y+g*E+_*T;M<0&&(v=-v,y=-y,E=-E,T=-T,M=-M);let x=1-h;if(M<.9995){const O=Math.acos(M),U=Math.sin(O);x=Math.sin(x*O)/U,h=Math.sin(h*O)/U,m=m*x+v*h,p=p*x+y*h,g=g*x+E*h,_=_*x+T*h}else{m=m*x+v*h,p=p*x+y*h,g=g*x+E*h,_=_*x+T*h;const O=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=O,p*=O,g*=O,_*=O}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[d],v=c[d+1],y=c[d+2],E=c[d+3];return e[i]=h*E+g*_+m*y-p*v,e[i+1]=m*E+g*v+p*_-h*y,e[i+2]=p*E+g*y+h*v-m*_,e[i+3]=g*E-h*_-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),v=m(s/2),y=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=s+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-s*p,this._z=c*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,i=0,s=0){ae.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(A_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),g=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+m*p+d*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new ae,A_=new ul;class gt{constructor(e,i,s,l,c,d,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],T=l[0],M=l[3],x=l[6],O=l[1],U=l[4],C=l[7],B=l[2],F=l[5],I=l[8];return c[0]=d*T+h*O+m*B,c[3]=d*M+h*U+m*F,c[6]=d*x+h*C+m*I,c[1]=p*T+g*O+_*B,c[4]=p*M+g*U+_*F,c[7]=p*x+g*C+_*I,c[2]=v*T+y*O+E*B,c[5]=v*M+y*U+E*F,c[8]=v*x+y*C+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-s*c*g+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=g*d-h*p,v=h*m-g*c,y=p*c-d*m,E=i*_+s*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(l*p-g*s)*T,e[2]=(h*s-l*d)*T,e[3]=v*T,e[4]=(g*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=y*T,e[7]=(s*m-p*i)*T,e[8]=(d*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new gt,R_=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LE(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Gt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vr]:{primaries:e,whitePoint:s,transfer:su,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const wt=LE();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mr;class UE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Mr===void 0&&(Mr=ou("canvas")),Mr.width=e.width,Mr.height=e.height;const l=Mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ou("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Ld(l[d].image)):c.push(Ld(l[d]))}else c=Ld(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ld(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?UE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let OE=0;const Ud=new ae;class Hn extends Xr{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=va,l=va,c=Bn,d=Ps,h=Oi,m=Mi,p=Hn.DEFAULT_ANISOTROPY,g=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=jr(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case Mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case Mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Vv;Hn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(y+1)/2,B=(x+1)/2,F=(g+v)/4,I=(_+T)/4,Z=(E+M)/4;return U>C&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=F/s,c=I/s):C>B?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=F/l,c=Z/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=I/c,l=Z/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(_-T)/O,this.z=(v-g)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PE extends Xr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Hn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends PE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Jv extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Rc.subVectors(this.max,ko),Er.subVectors(e.a,ko),br.subVectors(e.b,ko),Tr.subVectors(e.c,ko),Qa.subVectors(br,Er),$a.subVectors(Tr,br),Ts.subVectors(Er,Tr);let i=[0,-Qa.z,Qa.y,0,-$a.z,$a.y,0,-Ts.z,Ts.y,Qa.z,0,-Qa.x,$a.z,0,-$a.x,Ts.z,0,-Ts.x,-Qa.y,Qa.x,0,-$a.y,$a.x,0,-Ts.y,Ts.x,0];return!Nd(i,Er,br,Tr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Nd(i,Er,br,Tr,Rc))?!1:(wc.crossVectors(Qa,$a),i=[wc.x,wc.y,wc.z],Nd(i,Er,br,Tr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Di=new ae,Ac=new fl,Er=new ae,br=new ae,Tr=new ae,Qa=new ae,$a=new ae,Ts=new ae,ko=new ae,Rc=new ae,wc=new ae,As=new ae;function Nd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){As.fromArray(r,c);const h=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=e.dot(As),p=i.dot(As),g=s.dot(As);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const IE=new fl,Xo=new ae,Od=new ae;class dl{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):IE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Od)),this.expandByPoint(Xo.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new ae,Pd=new ae,Cc=new ae,es=new ae,Bd=new ae,Dc=new ae,Id=new ae;class _p{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Pd.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),es.copy(this.origin).sub(Pd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Cc),h=es.dot(this.direction),m=-es.dot(Cc),p=es.lengthSq(),g=Math.abs(1-d*d);let _,v,y,E;if(g>0)if(_=d*m-h,v=d*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,y=_*(_+d*v+2*h)+v*(d*_+v+2*m)+p}else v=c,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-d*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(d*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=d>0?-c:c,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Pd).addScaledVector(Cc,v),y}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){Bd.subVectors(i,e),Dc.subVectors(s,e),Id.crossVectors(Bd,Dc);let d=this.direction.dot(Id),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;es.subVectors(this.origin,e);const m=h*this.direction.dot(Dc.crossVectors(es,Dc));if(m<0)return null;const p=h*this.direction.dot(Bd.cross(es));if(p<0||m+p>d)return null;const g=-h*es.dot(Id);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,s,l,c,d,h,m,p,g,_,v,y,E,T,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,g,_,v,y,E,T,M)}set(e,i,s,l,c,d,h,m,p,g,_,v,y,E,T,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ar.setFromMatrixColumn(e,0).length(),c=1/Ar.setFromMatrixColumn(e,1).length(),d=1/Ar.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=d*g,y=d*_,E=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=v-T*p,i[9]=-h*m,i[2]=T-v*p,i[6]=E+y*p,i[10]=d*m}else if(e.order==="YXZ"){const v=m*g,y=m*_,E=p*g,T=p*_;i[0]=v+T*h,i[4]=E*h-y,i[8]=d*p,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=y*h-E,i[6]=T+v*h,i[10]=d*m}else if(e.order==="ZXY"){const v=m*g,y=m*_,E=p*g,T=p*_;i[0]=v-T*h,i[4]=-d*_,i[8]=E+y*h,i[1]=y+E*h,i[5]=d*g,i[9]=T-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const v=d*g,y=d*_,E=h*g,T=h*_;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+T,i[1]=m*_,i[5]=T*p+v,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const v=d*m,y=d*p,E=h*m,T=h*p;i[0]=m*g,i[4]=T-v*_,i[8]=E*_+y,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*_+E,i[10]=v-T*_}else if(e.order==="XZY"){const v=d*m,y=d*p,E=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+T,i[5]=d*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=h*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,zE)}lookAt(e,i,s){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ts.crossVectors(s,si),ts.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ts.crossVectors(s,si)),ts.normalize(),Lc.crossVectors(si,ts),l[0]=ts.x,l[4]=Lc.x,l[8]=si.x,l[1]=ts.y,l[5]=Lc.y,l[9]=si.y,l[2]=ts.z,l[6]=Lc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],T=s[6],M=s[10],x=s[14],O=s[3],U=s[7],C=s[11],B=s[15],F=l[0],I=l[4],Z=l[8],w=l[12],D=l[1],H=l[5],K=l[9],ne=l[13],fe=l[2],ce=l[6],L=l[10],G=l[14],J=l[3],me=l[7],_e=l[11],P=l[15];return c[0]=d*F+h*D+m*fe+p*J,c[4]=d*I+h*H+m*ce+p*me,c[8]=d*Z+h*K+m*L+p*_e,c[12]=d*w+h*ne+m*G+p*P,c[1]=g*F+_*D+v*fe+y*J,c[5]=g*I+_*H+v*ce+y*me,c[9]=g*Z+_*K+v*L+y*_e,c[13]=g*w+_*ne+v*G+y*P,c[2]=E*F+T*D+M*fe+x*J,c[6]=E*I+T*H+M*ce+x*me,c[10]=E*Z+T*K+M*L+x*_e,c[14]=E*w+T*ne+M*G+x*P,c[3]=O*F+U*D+C*fe+B*J,c[7]=O*I+U*H+C*ce+B*me,c[11]=O*Z+U*K+C*L+B*_e,c[15]=O*w+U*ne+C*G+B*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],T=e[7],M=e[11],x=e[15],O=m*y-p*v,U=h*y-p*_,C=h*v-m*_,B=d*y-p*g,F=d*v-m*g,I=d*_-h*g;return i*(T*O-M*U+x*C)-s*(E*O-M*B+x*F)+l*(E*U-T*B+x*I)-c*(E*C-T*F+M*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],T=e[13],M=e[14],x=e[15],O=_*M*p-T*v*p+T*m*y-h*M*y-_*m*x+h*v*x,U=E*v*p-g*M*p-E*m*y+d*M*y+g*m*x-d*v*x,C=g*T*p-E*_*p+E*h*y-d*T*y-g*h*x+d*_*x,B=E*_*m-g*T*m-E*h*v+d*T*v+g*h*M-d*_*M,F=i*O+s*U+l*C+c*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=O*I,e[1]=(T*v*c-_*M*c-T*l*y+s*M*y+_*l*x-s*v*x)*I,e[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*x+s*m*x)*I,e[3]=(_*m*c-h*v*c-_*l*p+s*v*p+h*l*y-s*m*y)*I,e[4]=U*I,e[5]=(g*M*c-E*v*c+E*l*y-i*M*y-g*l*x+i*v*x)*I,e[6]=(E*m*c-d*M*c-E*l*p+i*M*p+d*l*x-i*m*x)*I,e[7]=(d*v*c-g*m*c+g*l*p-i*v*p-d*l*y+i*m*y)*I,e[8]=C*I,e[9]=(E*_*c-g*T*c-E*s*y+i*T*y+g*s*x-i*_*x)*I,e[10]=(d*T*c-E*h*c+E*s*p-i*T*p-d*s*x+i*h*x)*I,e[11]=(g*h*c-d*_*c-g*s*p+i*_*p+d*s*y-i*h*y)*I,e[12]=B*I,e[13]=(g*T*l-E*_*l+E*s*v-i*T*v-g*s*M+i*_*M)*I,e[14]=(E*h*l-d*T*l-E*s*m+i*T*m+d*s*M-i*h*M)*I,e[15]=(d*_*l-g*h*l+g*s*m-i*_*m-d*s*v+i*h*v)*I,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,g=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,_=h+h,v=c*p,y=c*g,E=c*_,T=d*g,M=d*_,x=h*_,O=m*p,U=m*g,C=m*_,B=s.x,F=s.y,I=s.z;return l[0]=(1-(T+x))*B,l[1]=(y+C)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(y-C)*F,l[5]=(1-(v+x))*F,l[6]=(M+O)*F,l[7]=0,l[8]=(E+U)*I,l[9]=(M-O)*I,l[10]=(1-(v+T))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ar.set(l[0],l[1],l[2]).length();const d=Ar.set(l[4],l[5],l[6]).length(),h=Ar.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Li.copy(this);const p=1/c,g=1/d,_=1/h;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,i.setFromRotationMatrix(Li),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=ki,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let E,T;if(m)E=c/(d-c),T=d*c/(d-c);else if(h===ki)E=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===ru)E=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=ki,m=!1){const p=this.elements,g=2/(i-e),_=2/(s-l),v=-(i+e)/(i-e),y=-(s+l)/(s-l);let E,T;if(m)E=1/(d-c),T=d/(d-c);else if(h===ki)E=-2/(d-c),T=-(d+c)/(d-c);else if(h===ru)E=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ar=new ae,Li=new nn,FE=new ae(0,0,0),zE=new ae(1,1,1),ts=new ae,Lc=new ae,si=new ae,C_=new nn,D_=new ul;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return C_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HE=0;const L_=new ae,Rr=new ul,pa=new nn,Uc=new ae,jo=new ae,GE=new ae,VE=new ul,U_=new ae(1,0,0),N_=new ae(0,1,0),O_=new ae(0,0,1),P_={type:"added"},kE={type:"removed"},wr={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Gn extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new ae,i=new Ea,s=new ul,l=new ae(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new gt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,i){return Rr.setFromAxisAngle(e,i),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(N_,e)}rotateZ(e){return this.rotateOnAxis(O_,e)}translateOnAxis(e,i){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(N_,e)}translateZ(e){return this.translateOnAxis(O_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Uc.copy(e):Uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(jo,Uc,this.up):pa.lookAt(Uc,jo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(pa),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P_),wr.child=e,this.dispatchEvent(wr),wr.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kE),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P_),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),_=d(e.shapes),v=d(e.skeletons),y=d(e.animations),E=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new ae(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new ae,ma=new ae,zd=new ae,ga=new ae,Cr=new ae,Dr=new ae,B_=new ae,Hd=new ae,Gd=new ae,Vd=new ae,kd=new rn,Xd=new rn,jd=new rn;class Ni{constructor(e=new ae,i=new ae,s=new ae){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ui.subVectors(l,i),ma.subVectors(s,i),zd.subVectors(e,i);const d=Ui.dot(Ui),h=Ui.dot(ma),m=Ui.dot(zd),p=ma.dot(ma),g=ma.dot(zd),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-h*g)*v,E=(d*g-h*m)*v;return c.set(1-y-E,E,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(d,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return kd.setScalar(0),Xd.setScalar(0),jd.setScalar(0),kd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,s),jd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(kd,c.x),d.addScaledVector(Xd,c.y),d.addScaledVector(jd,c.z),d}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),ma.subVectors(e,i),Ui.cross(ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ui.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Cr.subVectors(l,s),Dr.subVectors(c,s),Hd.subVectors(e,s);const m=Cr.dot(Hd),p=Dr.dot(Hd);if(m<=0&&p<=0)return i.copy(s);Gd.subVectors(e,l);const g=Cr.dot(Gd),_=Dr.dot(Gd);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(Cr,d);Vd.subVectors(e,c);const y=Cr.dot(Vd),E=Dr.dot(Vd);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Dr,h);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return B_.subVectors(c,l),h=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(B_,h);const x=1/(M+T+v);return d=T*x,h=v*x,i.copy(s).addScaledVector(Cr,d).addScaledVector(Dr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Wd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class At{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=mp(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Wd(d,c,e+1/3),this.g=Wd(d,c,e),this.b=Wd(d,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const s=$v[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return wt.workingToColorSpace(Nn.copy(this),e),Math.round(bt(Nn.r*255,0,255))*65536+Math.round(bt(Nn.g*255,0,255))*256+Math.round(bt(Nn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=g<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=xi){wt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+i,ns.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ns),e.getHSL(Nc);const s=tl(ns.h,Nc.h,i),l=tl(ns.s,Nc.s,i),c=tl(ns.l,Nc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new At;At.NAMES=$v;let XE=0;class Wr extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Ir,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==uh&&(s.blendSrc=this.blendSrc),this.blendDst!==fh&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ex extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new ae,Oc=new jt;let jE=0;class Ei{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=y_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Pr(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Pr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Pr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Pr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Pr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y_&&(e.usage=this.usage),e}}class tx extends Ei{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class nx extends Ei{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Jn extends Ei{constructor(e,i,s){super(new Float32Array(e),i,s)}}let WE=0;const vi=new nn,Yd=new Gn,Lr=new ae,ri=new fl,Wo=new fl,vn=new ae;class On extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kv(e)?nx:tx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new gt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,s){return vi.makeTranslation(e,i,s),this.applyMatrix4(vi),this}scale(e,i,s){return vi.makeScale(e,i,s),this.applyMatrix4(vi),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Jn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ri.min,Wo.min),ri.expandByPoint(vn),vn.addVectors(ri.max,Wo.max),ri.expandByPoint(vn)):(ri.expandByPoint(Wo.min),ri.expandByPoint(Wo.max))}ri.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(Lr.fromBufferAttribute(e,p),vn.add(Lr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<s.count;Z++)h[Z]=new ae,m[Z]=new ae;const p=new ae,g=new ae,_=new ae,v=new jt,y=new jt,E=new jt,T=new ae,M=new ae;function x(Z,w,D){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,D),v.fromBufferAttribute(c,Z),y.fromBufferAttribute(c,w),E.fromBufferAttribute(c,D),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(H),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),h[Z].add(T),h[w].add(T),h[D].add(T),m[Z].add(M),m[w].add(M),m[D].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Z=0,w=O.length;Z<w;++Z){const D=O[Z],H=D.start,K=D.count;for(let ne=H,fe=H+K;ne<fe;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const U=new ae,C=new ae,B=new ae,F=new ae;function I(Z){B.fromBufferAttribute(l,Z),F.copy(B);const w=h[Z];U.copy(w),U.sub(B.multiplyScalar(B.dot(w))).normalize(),C.crossVectors(F,w);const H=C.dot(m[Z])<0?-1:1;d.setXYZW(Z,U.x,U.y,U.z,H)}for(let Z=0,w=O.length;Z<w;++Z){const D=O[Z],H=D.start,K=D.count;for(let ne=H,fe=H+K;ne<fe;ne+=3)I(e.getX(ne+0)),I(e.getX(ne+1)),I(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new ae,c=new ae,d=new ae,h=new ae,m=new ae,p=new ae,g=new ae,_=new ae;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new Ei(v,g,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new On,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=e(v,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new nn,Rs=new _p,Pc=new dl,F_=new ae,Bc=new ae,Ic=new ae,Fc=new ae,qd=new ae,zc=new ae,z_=new ae,Hc=new ae;class ba extends Gn{constructor(e=new On,i=new ex){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(qd.fromBufferAttribute(_,e),d?zc.addScaledVector(qd,g):zc.addScaledVector(qd.sub(i),g))}i.add(zc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Rs.copy(e.ray).recast(e.near),!(Pc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Pc,F_)===null||Rs.origin.distanceToSquared(F_)>(e.far-e.near)**2))&&(I_.copy(c).invert(),Rs.copy(e.ray).applyMatrix4(I_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=d[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let C=O,B=U;C<B;C+=3){const F=h.getX(C),I=h.getX(C+1),Z=h.getX(C+2);l=Gc(this,x,e,s,p,g,_,F,I,Z),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const O=h.getX(M),U=h.getX(M+1),C=h.getX(M+2);l=Gc(this,d,e,s,p,g,_,O,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=d[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=O,B=U;C<B;C+=3){const F=C,I=C+1,Z=C+2;l=Gc(this,x,e,s,p,g,_,F,I,Z),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const O=M,U=M+1,C=M+2;l=Gc(this,d,e,s,p,g,_,O,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function YE(r,e,i,s,l,c,d,h){let m;if(e.side===Kn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===rs,h),m===null)return null;Hc.copy(h),Hc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Bc),r.getVertexPosition(m,Ic),r.getVertexPosition(p,Fc);const g=YE(r,e,i,s,Bc,Ic,Fc,z_);if(g){const _=new ae;Ni.getBarycoord(z_,Bc,Ic,Fc,_),l&&(g.uv=Ni.getInterpolatedAttribute(l,h,m,p,_,new jt)),c&&(g.uv1=Ni.getInterpolatedAttribute(c,h,m,p,_,new jt)),d&&(g.normal=Ni.getInterpolatedAttribute(d,h,m,p,_,new ae),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new ae,materialIndex:0};Ni.getNormal(Bc,Ic,Fc,v.normal),g.face=v,g.barycoord=_}return g}class hl extends On{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,i,e,d,c,0),E("z","y","x",1,-1,s,i,-e,d,c,1),E("x","z","y",1,1,e,s,i,l,d,2),E("x","z","y",1,-1,e,s,-i,l,d,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(_,2));function E(T,M,x,O,U,C,B,F,I,Z,w){const D=C/I,H=B/Z,K=C/2,ne=B/2,fe=F/2,ce=I+1,L=Z+1;let G=0,J=0;const me=new ae;for(let _e=0;_e<L;_e++){const P=_e*H-ne;for(let te=0;te<ce;te++){const ve=te*D-K;me[T]=ve*O,me[M]=P*U,me[x]=fe,p.push(me.x,me.y,me.z),me[T]=0,me[M]=0,me[x]=F>0?1:-1,g.push(me.x,me.y,me.z),_.push(te/I),_.push(1-_e/Z),G+=1}}for(let _e=0;_e<Z;_e++)for(let P=0;P<I;P++){const te=v+P+ce*_e,ve=v+P+ce*(_e+1),Re=v+(P+1)+ce*(_e+1),He=v+(P+1)+ce*_e;m.push(te,ve,He),m.push(ve,Re,He),J+=6}h.addGroup(y,J,w),y+=J,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(r){const e={};for(let i=0;i<r.length;i++){const s=kr(r[i]);for(const l in s)e[l]=s[l]}return e}function qE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function ix(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const ZE={clone:kr,merge:zn};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=JE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=qE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ax extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new ae,H_=new jt,G_=new jt;class yi extends ax{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,H_,G_),i.subVectors(G_,H_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(el*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Nr=1;class QE extends Gn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Ur,Nr,e,i);l.layers=this.layers,this.add(l);const c=new yi(Ur,Nr,e,i);c.layers=this.layers,this.add(c);const d=new yi(Ur,Nr,e,i);d.layers=this.layers,this.add(d);const h=new yi(Ur,Nr,e,i);h.layers=this.layers,this.add(h);const m=new yi(Ur,Nr,e,i);m.layers=this.layers,this.add(m);const p=new yi(Ur,Nr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ru)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class sx extends Hn{constructor(e=[],i=Is,s,l,c,d,h,m,p,g){super(e,i,s,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rx extends ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new sx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new hl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:xa});c.uniforms.tEquirect.value=i;const d=new ba(l,c),h=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Bn),new QE(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class Br extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $E={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent($E)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Br;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class lu{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=i}clone(){return new lu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eb extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class tb extends Hn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=Cn,g=Cn,_,v){super(null,d,h,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kd=new ae,nb=new ae,ib=new gt;class Us{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Kd.subVectors(s,i).cross(nb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Kd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ib.getNormalMatrix(e),l=this.coplanarPoint(Kd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new dl,ab=new jt(.5,.5),Vc=new ae;class ox{constructor(e=new Us,i=new Us,s=new Us,l=new Us,c=new Us,d=new Us){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ki,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],T=c[9],M=c[10],x=c[11],O=c[12],U=c[13],C=c[14],B=c[15];if(l[0].setComponents(p-d,y-g,x-E,B-O).normalize(),l[1].setComponents(p+d,y+g,x+E,B+O).normalize(),l[2].setComponents(p+h,y+_,x+T,B+U).normalize(),l[3].setComponents(p-h,y-_,x-T,B-U).normalize(),s)l[4].setComponents(m,v,M,C).normalize(),l[5].setComponents(p-m,y-v,x-M,B-C).normalize();else if(l[4].setComponents(p-m,y-v,x-M,B-C).normalize(),i===ki)l[5].setComponents(p+m,y+v,x+M,B+C).normalize();else if(i===ru)l[5].setComponents(m,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=ab.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nu extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new ae,uu=new ae,V_=new nn,Yo=new _p,kc=new dl,Jd=new ae,k_=new ae;class lx extends Gn{constructor(e=new On,i=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);e.setAttribute("lineDistance",new Jn(s,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;V_.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(V_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let T=y,M=E-1;T<M;T+=p){const x=g.getX(T),O=g.getX(T+1),U=Xc(this,e,Yo,m,x,O,T);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(y),x=Xc(this,e,Yo,m,T,M,E-1);x&&i.push(x)}}else{const y=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let T=y,M=E-1;T<M;T+=p){const x=Xc(this,e,Yo,m,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=Xc(this,e,Yo,m,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Xc(r,e,i,s,l,c,d){const h=r.geometry.attributes.position;if(cu.fromBufferAttribute(h,l),uu.fromBufferAttribute(h,c),i.distanceSqToSegment(cu,uu,Jd,k_)>s)return;Jd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Jd);if(!(p<e.near||p>e.far))return{distance:p,point:k_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const X_=new ae,j_=new ae;class Qd extends lx{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)X_.fromBufferAttribute(i,l),j_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+X_.distanceTo(j_);e.setAttribute("lineDistance",new Jn(s,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tp extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W_=new nn,np=new _p,jc=new dl,Wc=new ae;class Y_ extends Gn{constructor(e=new On,i=new tp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(l),jc.radius+=c,e.ray.intersectsSphere(jc)===!1)return;W_.copy(l).invert(),np.copy(e.ray).applyMatrix4(W_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const v=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let E=v,T=y;E<T;E++){const M=p.getX(E);Wc.fromBufferAttribute(_,M),q_(Wc,M,m,l,e,i,this)}}else{const v=Math.max(0,d.start),y=Math.min(_.count,d.start+d.count);for(let E=v,T=y;E<T;E++)Wc.fromBufferAttribute(_,E),q_(Wc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function q_(r,e,i,s,l,c,d){const h=np.distanceSqToPoint(r);if(h<i){const m=new ae;np.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class ol extends Hn{constructor(e,i,s=Wi,l,c,d,h=Cn,m=Cn,p,g=Ma,_=1){if(g!==Ma&&g!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,c,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class sb extends ol{constructor(e,i=Wi,s=Is,l,c,d=Cn,h=Cn,m,p=Ma){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,c,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hu extends On{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=e/h,v=i/m,y=[],E=[],T=[],M=[];for(let x=0;x<g;x++){const O=x*v-d;for(let U=0;U<p;U++){const C=U*_-c;E.push(C,-O,0),T.push(0,0,1),M.push(U/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<h;O++){const U=O+p*x,C=O+p*(x+1),B=O+1+p*(x+1),F=O+1+p*x;y.push(U,C,F),y.push(C,B,F)}this.setIndex(y),this.setAttribute("position",new Jn(E,3)),this.setAttribute("normal",new Jn(T,3)),this.setAttribute("uv",new Jn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class rb extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ob extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lb extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ux extends ax{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cb extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ub{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Z_(r,e,i,s){const l=fb(s);switch(i){case Yv:return r*e;case Zv:return r*e/l.components*l.byteLength;case up:return r*e/l.components*l.byteLength;case Gr:return r*e*2/l.components*l.byteLength;case fp:return r*e*2/l.components*l.byteLength;case qv:return r*e*3/l.components*l.byteLength;case Oi:return r*e*4/l.components*l.byteLength;case dp:return r*e*4/l.components*l.byteLength;case Qc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bh:case Ah:return Math.max(r,16)*Math.max(e,8)/4;case Eh:case Th:return Math.max(r,8)*Math.max(e,8)/2;case Rh:case wh:case Dh:case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ch:case Uh:case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qh:case Zh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case $h:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fb(r){switch(r){case Mi:case kv:return{byteLength:1,components:1};case il:case Xv:case ya:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Wi:case op:case Vi:return{byteLength:4,components:1};case jv:case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);function fx(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function db(r){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var hb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pb=`#ifdef USE_ALPHAHASH
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
#endif`,mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xb=`#ifdef USE_AOMAP
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
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
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
#endif`,Mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ab=`#ifdef USE_IRIDESCENCE
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
#endif`,Rb=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bb=`#define PI 3.141592653589793
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
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
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
}`,tT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aT=`uniform bool receiveShadow;
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
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
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
#endif`,fT=`uniform sampler2D dfgLUT;
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
}`,dT=`
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
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
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ST=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MT=`#if defined( USE_POINTS_UV )
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
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
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
#endif`,CT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PT=`#ifdef USE_NORMALMAP
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
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JT=`float getShadowMask() {
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
}`,QT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,eA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tA=`#ifdef USE_SKINNING
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
#endif`,nA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rA=`#ifdef USE_TRANSMISSION
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
#endif`,oA=`#ifdef USE_TRANSMISSION
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hA=`uniform sampler2D t2D;
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`#include <common>
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
}`,xA=`#if DEPTH_PACKING == 3200
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
}`,SA=`#define DISTANCE
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
}`,yA=`#define DISTANCE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`uniform float scale;
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
}`,TA=`uniform vec3 diffuse;
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
}`,AA=`#include <common>
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
}`,RA=`uniform vec3 diffuse;
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
}`,wA=`#define LAMBERT
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
}`,CA=`#define LAMBERT
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
}`,DA=`#define MATCAP
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
}`,LA=`#define MATCAP
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
}`,UA=`#define NORMAL
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
}`,NA=`#define NORMAL
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
}`,OA=`#define PHONG
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
}`,PA=`#define PHONG
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
}`,BA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,FA=`#define TOON
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
}`,zA=`#define TOON
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
}`,HA=`uniform float size;
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
}`,GA=`uniform vec3 diffuse;
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
}`,VA=`#include <common>
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
}`,kA=`uniform vec3 color;
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
}`,XA=`uniform float rotation;
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
}`,jA=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:hb,alphahash_pars_fragment:pb,alphamap_fragment:mb,alphamap_pars_fragment:gb,alphatest_fragment:_b,alphatest_pars_fragment:vb,aomap_fragment:xb,aomap_pars_fragment:Sb,batching_pars_vertex:yb,batching_vertex:Mb,begin_vertex:Eb,beginnormal_vertex:bb,bsdfs:Tb,iridescence_fragment:Ab,bumpmap_pars_fragment:Rb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Lb,color_fragment:Ub,color_pars_fragment:Nb,color_pars_vertex:Ob,color_vertex:Pb,common:Bb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Fb,displacementmap_pars_vertex:zb,displacementmap_vertex:Hb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Vb,colorspace_fragment:kb,colorspace_pars_fragment:Xb,envmap_fragment:jb,envmap_common_pars_fragment:Wb,envmap_pars_fragment:Yb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:sT,envmap_vertex:Zb,fog_vertex:Kb,fog_pars_vertex:Jb,fog_fragment:Qb,fog_pars_fragment:$b,gradientmap_pars_fragment:eT,lightmap_pars_fragment:tT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:aT,lights_toon_fragment:rT,lights_toon_pars_fragment:oT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:fT,lights_fragment_begin:dT,lights_fragment_maps:hT,lights_fragment_end:pT,logdepthbuf_fragment:mT,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:vT,map_fragment:xT,map_pars_fragment:ST,map_particle_fragment:yT,map_particle_pars_fragment:MT,metalnessmap_fragment:ET,metalnessmap_pars_fragment:bT,morphinstance_vertex:TT,morphcolor_vertex:AT,morphnormal_vertex:RT,morphtarget_pars_vertex:wT,morphtarget_vertex:CT,normal_fragment_begin:DT,normal_fragment_maps:LT,normal_pars_fragment:UT,normal_pars_vertex:NT,normal_vertex:OT,normalmap_pars_fragment:PT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:FT,iridescence_pars_fragment:zT,opaque_fragment:HT,packing:GT,premultiplied_alpha_fragment:VT,project_vertex:kT,dithering_fragment:XT,dithering_pars_fragment:jT,roughnessmap_fragment:WT,roughnessmap_pars_fragment:YT,shadowmap_pars_fragment:qT,shadowmap_pars_vertex:ZT,shadowmap_vertex:KT,shadowmask_pars_fragment:JT,skinbase_vertex:QT,skinning_pars_vertex:$T,skinning_vertex:eA,skinnormal_vertex:tA,specularmap_fragment:nA,specularmap_pars_fragment:iA,tonemapping_fragment:aA,tonemapping_pars_fragment:sA,transmission_fragment:rA,transmission_pars_fragment:oA,uv_pars_fragment:lA,uv_pars_vertex:cA,uv_vertex:uA,worldpos_vertex:fA,background_vert:dA,background_frag:hA,backgroundCube_vert:pA,backgroundCube_frag:mA,cube_vert:gA,cube_frag:_A,depth_vert:vA,depth_frag:xA,distance_vert:SA,distance_frag:yA,equirect_vert:MA,equirect_frag:EA,linedashed_vert:bA,linedashed_frag:TA,meshbasic_vert:AA,meshbasic_frag:RA,meshlambert_vert:wA,meshlambert_frag:CA,meshmatcap_vert:DA,meshmatcap_frag:LA,meshnormal_vert:UA,meshnormal_frag:NA,meshphong_vert:OA,meshphong_frag:PA,meshphysical_vert:BA,meshphysical_frag:IA,meshtoon_vert:FA,meshtoon_frag:zA,points_vert:HA,points_frag:GA,shadow_vert:VA,shadow_frag:kA,sprite_vert:XA,sprite_frag:jA},Pe={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Gi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new At(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Gi.physical={uniforms:zn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Yc={r:0,b:0,g:0},Cs=new Ea,WA=new nn;function YA(r,e,i,s,l,c,d){const h=new At(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:e).get(C)),C}function T(U){let C=!1;const B=E(U);B===null?x(h,m):B&&B.isColor&&(x(B,1),C=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,C){const B=E(C);B&&(B.isCubeTexture||B.mapping===du)?(g===void 0&&(g=new ba(new hl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:kr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cs.copy(C.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(WA.makeRotationFromEuler(Cs)),g.material.toneMapped=wt.getTransfer(B.colorSpace)!==Gt,(_!==B||v!==B.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=B,v=B.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new ba(new hu(2,2),new Yi({name:"BackgroundMaterial",uniforms:kr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(B.colorSpace)!==Gt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||v!==B.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=B,v=B.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,C){U.getRGB(Yc,ix(r)),s.buffers.color.setClear(Yc.r,Yc.g,Yc.b,C,d)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),m=C,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(h,m)},render:T,addToRenderList:M,dispose:O}}function qA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function h(D,H,K,ne,fe){let ce=!1;const L=_(ne,K,H);c!==L&&(c=L,p(c.object)),ce=y(D,ne,K,fe),ce&&E(D,ne,K,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,C(D,H,K,ne),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function _(D,H,K){const ne=K.wireframe===!0;let fe=s[D.id];fe===void 0&&(fe={},s[D.id]=fe);let ce=fe[H.id];ce===void 0&&(ce={},fe[H.id]=ce);let L=ce[ne];return L===void 0&&(L=v(m()),ce[ne]=L),L}function v(D){const H=[],K=[],ne=[];for(let fe=0;fe<i;fe++)H[fe]=0,K[fe]=0,ne[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ne,object:D,attributes:{},index:null}}function y(D,H,K,ne){const fe=c.attributes,ce=H.attributes;let L=0;const G=K.getAttributes();for(const J in G)if(G[J].location>=0){const _e=fe[J];let P=ce[J];if(P===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),_e===void 0||_e.attribute!==P||P&&_e.data!==P.data)return!0;L++}return c.attributesNum!==L||c.index!==ne}function E(D,H,K,ne){const fe={},ce=H.attributes;let L=0;const G=K.getAttributes();for(const J in G)if(G[J].location>=0){let _e=ce[J];_e===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const P={};P.attribute=_e,_e&&_e.data&&(P.data=_e.data),fe[J]=P,L++}c.attributes=fe,c.attributesNum=L,c.index=ne}function T(){const D=c.newAttributes;for(let H=0,K=D.length;H<K;H++)D[H]=0}function M(D){x(D,0)}function x(D,H){const K=c.newAttributes,ne=c.enabledAttributes,fe=c.attributeDivisors;K[D]=1,ne[D]===0&&(r.enableVertexAttribArray(D),ne[D]=1),fe[D]!==H&&(r.vertexAttribDivisor(D,H),fe[D]=H)}function O(){const D=c.newAttributes,H=c.enabledAttributes;for(let K=0,ne=H.length;K<ne;K++)H[K]!==D[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function U(D,H,K,ne,fe,ce,L){L===!0?r.vertexAttribIPointer(D,H,K,fe,ce):r.vertexAttribPointer(D,H,K,ne,fe,ce)}function C(D,H,K,ne){T();const fe=ne.attributes,ce=K.getAttributes(),L=H.defaultAttributeValues;for(const G in ce){const J=ce[G];if(J.location>=0){let me=fe[G];if(me===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),me!==void 0){const _e=me.normalized,P=me.itemSize,te=e.get(me);if(te===void 0)continue;const ve=te.buffer,Re=te.type,He=te.bytesPerElement,ie=Re===r.INT||Re===r.UNSIGNED_INT||me.gpuType===op;if(me.isInterleavedBufferAttribute){const ue=me.data,we=ue.stride,Xe=me.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<J.locationSize;Ge++)x(J.location+Ge,ue.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<J.locationSize;Ge++)M(J.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Ge=0;Ge<J.locationSize;Ge++)U(J.location+Ge,P/J.locationSize,Re,_e,we*He,(Xe+P/J.locationSize*Ge)*He,ie)}else{if(me.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)x(J.location+ue,me.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ue=0;ue<J.locationSize;ue++)M(J.location+ue);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let ue=0;ue<J.locationSize;ue++)U(J.location+ue,P/J.locationSize,Re,_e,P*He,P/J.locationSize*ue*He,ie)}}else if(L!==void 0){const _e=L[G];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(J.location,_e);break;case 3:r.vertexAttrib3fv(J.location,_e);break;case 4:r.vertexAttrib4fv(J.location,_e);break;default:r.vertexAttrib1fv(J.location,_e)}}}}O()}function B(){Z();for(const D in s){const H=s[D];for(const K in H){const ne=H[K];for(const fe in ne)g(ne[fe].object),delete ne[fe];delete H[K]}delete s[D]}}function F(D){if(s[D.id]===void 0)return;const H=s[D.id];for(const K in H){const ne=H[K];for(const fe in ne)g(ne[fe].object),delete ne[fe];delete H[K]}delete s[D.id]}function I(D){for(const H in s){const K=s[H];if(K[D.id]===void 0)continue;const ne=K[D.id];for(const fe in ne)g(ne[fe].object),delete ne[fe];delete K[D.id]}}function Z(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function ZA(r,e,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(p,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)d(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function KA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Oi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const Z=I===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Mi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vi&&!Z)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ot("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:C,maxSamples:B,samples:F}}function JA(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Us,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,U=O*4;let C=x.clippingState||null;m.value=C,C=g(E,v,U,y);for(let B=0;B!==U;++B)C[B]=i[B];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,v,y,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const x=y+T*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,C=y;U!==T;++U,C+=4)d.copy(_[U]).applyMatrix4(O,h),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function QA(r){let e=new WeakMap;function i(d,h){return h===xh?d.mapping=Is:h===Sh&&(d.mapping=Hr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===xh||h===Sh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new rx(m.height);return p.fromEquirectangularTexture(r,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ss=4,K_=[.125,.215,.35,.446,.526,.582],Os=20,$A=256,qo=new ux,J_=new At;let $d=null,eh=0,th=0,nh=!1;const e1=new ae;class Q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=e1}=c;$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ya,format:Oi,colorSpace:Vr,depthBuffer:!1},l=$_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=t1(c)),this._blurMaterial=i1(c,e,i),this._ggxMaterial=n1(c,e,i)}return l}_compileMaterial(e){const i=new ba(new On,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(J_),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ba(new hl,new ex({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,x=!0):(M.color.copy(J_),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const B=this._cubeSize;Or(l,C*B,U>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(T,m),_.render(e,m)}_.toneMapping=y,_.autoClear=v,e.background=O}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Hr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Or(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,y=_*v,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-ss?s-E+ss:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-i,Or(c,M,x,3*T,2*T),l.setRenderTarget(c),l.render(h,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Or(e,M,x,3*T,2*T),l.setRenderTarget(e),l.render(h,qo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Os-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Os;M>Os&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const x=[];let O=0;for(let I=0;I<Os;++I){const Z=I/T,w=Math.exp(-Z*Z/2);x.push(w),I===0?O+=w:I<M&&(O+=2*w)}for(let I=0;I<x.length;I++)x[I]=x[I]/O;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-s;const C=this._sizeLods[l],B=3*C*(l>U-ss?l-U+ss:0),F=4*(this._cubeSize-C);Or(i,B,F,3*C,2*C),m.setRenderTarget(i),m.render(_,qo)}}function t1(r){const e=[],i=[],s=[];let l=r;const c=r-ss+1+K_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-ss?m=K_[d-r+ss-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,M=2,x=1,O=new Float32Array(T*E*y),U=new Float32Array(M*E*y),C=new Float32Array(x*E*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,Z=F>2?0:-1,w=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];O.set(w,T*E*F),U.set(v,M*E*F);const D=[F,F,F,F,F,F];C.set(D,x*E*F)}const B=new On;B.setAttribute("position",new Ei(O,T)),B.setAttribute("uv",new Ei(U,M)),B.setAttribute("faceIndex",new Ei(C,x)),s.push(new ba(B,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function $_(r,e,i){const s=new ji(r,e,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Or(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function n1(r,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$A,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function i1(r,e,i){const s=new Float32Array(Os),l=new ae(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function ev(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function tv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function a1(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===xh||m===Sh,g=m===Is||m===Hr;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Q_(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function s1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&sl("WebGLRenderer: "+s+" extension not supported."),l}}}function r1(r,e,i,s){const l={},c=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",d),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let U=0,C=O.length;U<C;U+=3){const B=O[U+0],F=O[U+1],I=O[U+2];v.push(B,F,F,I,I,B)}}else if(E!==void 0){const O=E.array;T=E.version;for(let U=0,C=O.length/3-1;U<C;U+=3){const B=U+0,F=U+1,I=U+2;v.push(B,F,F,I,I,B)}}else return;const M=new(Kv(v)?nx:tx)(v,1);M.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function o1(r,e,i){let s;function l(v){s=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*d),i.update(y,s,1)}function p(v,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,v*d,E),i.update(y,s,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];i.update(M,s,1)}function _(v,y,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/d,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,T,0,E);let x=0;for(let O=0;O<E;O++)x+=y[O]*T[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function l1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function c1(r,e,i){const s=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let D=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var y=D;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),M===!0&&(C=3);let B=h.attributes.position.count*C,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const I=new Float32Array(B*F*4*_),Z=new Jv(I,B,F,_);Z.type=Vi,Z.needsUpdate=!0;const w=C*4;for(let H=0;H<_;H++){const K=x[H],ne=O[H],fe=U[H],ce=B*F*4*H;for(let L=0;L<K.count;L++){const G=L*w;E===!0&&(l.fromBufferAttribute(K,L),I[ce+G+0]=l.x,I[ce+G+1]=l.y,I[ce+G+2]=l.z,I[ce+G+3]=0),T===!0&&(l.fromBufferAttribute(ne,L),I[ce+G+4]=l.x,I[ce+G+5]=l.y,I[ce+G+6]=l.z,I[ce+G+7]=0),M===!0&&(l.fromBufferAttribute(fe,L),I[ce+G+8]=l.x,I[ce+G+9]=l.y,I[ce+G+10]=l.z,I[ce+G+11]=fe.itemSize===4?l.w:1)}}v={count:_,texture:Z,size:new jt(B,F)},s.set(h,v),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function u1(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const f1={[Pv]:"LINEAR_TONE_MAPPING",[Bv]:"REINHARD_TONE_MAPPING",[Iv]:"CINEON_TONE_MAPPING",[Fv]:"ACES_FILMIC_TONE_MAPPING",[Hv]:"AGX_TONE_MAPPING",[Gv]:"NEUTRAL_TONE_MAPPING",[zv]:"CUSTOM_TONE_MAPPING"};function d1(r,e,i,s,l){const c=new ji(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new ji(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),h=new On;h.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const m=new rb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ba(h,m),g=new ux(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,T=null,M=[],x=!1;this.setSize=function(O,U){c.setSize(O,U),d.setSize(O,U);for(let C=0;C<M.length;C++){const B=M[C];B.setSize&&B.setSize(O,U)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const U=c.width,C=c.height;for(let B=0;B<M.length;B++){const F=M[B];F.setSize&&F.setSize(U,C)}},this.begin=function(O,U){if(y||O.toneMapping===Xi&&M.length===0)return!1;if(T=U,U!==null){const C=U.width,B=U.height;(c.width!==C||c.height!==B)&&this.setSize(C,B)}return x===!1&&O.setRenderTarget(c),E=O.toneMapping,O.toneMapping=Xi,!0},this.hasRenderPass=function(){return x},this.end=function(O,U){O.toneMapping=E,y=!0;let C=c,B=d;for(let F=0;F<M.length;F++){const I=M[F];if(I.enabled!==!1&&(I.render(O,B,C,U),I.needsSwap!==!1)){const Z=C;C=B,B=Z}}if(_!==O.outputColorSpace||v!==O.toneMapping){_=O.outputColorSpace,v=O.toneMapping,m.defines={},wt.getTransfer(_)===Gt&&(m.defines.SRGB_TRANSFER="");const F=f1[v];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=C.texture,O.setRenderTarget(T),O.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const dx=new Hn,ip=new ol(1,1),hx=new Jv,px=new BE,mx=new sx,nv=[],iv=[],av=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);function Yr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function mn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function gn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function mu(r,e){let i=iv[e];i===void 0&&(i=new Int32Array(e),iv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function h1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function p1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2fv(this.addr,e),gn(i,e)}}function m1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;r.uniform3fv(this.addr,e),gn(i,e)}}function g1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4fv(this.addr,e),gn(i,e)}}function _1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;rv.set(s),r.uniformMatrix2fv(this.addr,!1,rv),gn(i,s)}}function v1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),gn(i,s)}}function x1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;av.set(s),r.uniformMatrix4fv(this.addr,!1,av),gn(i,s)}}function S1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function y1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2iv(this.addr,e),gn(i,e)}}function M1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3iv(this.addr,e),gn(i,e)}}function E1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4iv(this.addr,e),gn(i,e)}}function b1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function T1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;r.uniform2uiv(this.addr,e),gn(i,e)}}function A1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;r.uniform3uiv(this.addr,e),gn(i,e)}}function R1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;r.uniform4uiv(this.addr,e),gn(i,e)}}function w1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ip.compareFunction=i.isReversedDepthBuffer()?pp:hp,c=ip):c=dx,i.setTexture2D(e||c,l)}function C1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||px,l)}function D1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||mx,l)}function L1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||hx,l)}function U1(r){switch(r){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return y1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return b1;case 36294:return T1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return L1}}function N1(r,e){r.uniform1fv(this.addr,e)}function O1(r,e){const i=Yr(e,this.size,2);r.uniform2fv(this.addr,i)}function P1(r,e){const i=Yr(e,this.size,3);r.uniform3fv(this.addr,i)}function B1(r,e){const i=Yr(e,this.size,4);r.uniform4fv(this.addr,i)}function I1(r,e){const i=Yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function F1(r,e){const i=Yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function z1(r,e){const i=Yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function H1(r,e){r.uniform1iv(this.addr,e)}function G1(r,e){r.uniform2iv(this.addr,e)}function V1(r,e){r.uniform3iv(this.addr,e)}function k1(r,e){r.uniform4iv(this.addr,e)}function X1(r,e){r.uniform1uiv(this.addr,e)}function j1(r,e){r.uniform2uiv(this.addr,e)}function W1(r,e){r.uniform3uiv(this.addr,e)}function Y1(r,e){r.uniform4uiv(this.addr,e)}function q1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=ip:d=dx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function Z1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||px,c[d])}function K1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||mx,c[d])}function J1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);mn(s,c)||(r.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||hx,c[d])}function Q1(r){switch(r){case 5126:return N1;case 35664:return O1;case 35665:return P1;case 35666:return B1;case 35674:return I1;case 35675:return F1;case 35676:return z1;case 5124:case 35670:return H1;case 35667:case 35671:return G1;case 35668:case 35672:return V1;case 35669:case 35673:return k1;case 5125:return X1;case 36294:return j1;case 36295:return W1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return J1}}class $1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=U1(i.type)}}class eR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q1(i.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function ov(r,e){r.seq.push(e),r.map[e.id]=e}function nR(r,e,i){const s=r.name,l=s.length;for(ih.lastIndex=0;;){const c=ih.exec(s),d=ih.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){ov(i,p===void 0?new $1(h,r,e):new eR(h,r,e));break}else{let _=i.map[h];_===void 0&&(_=new tR(h),ov(i,_)),i=_}}}class iu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);nR(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function lv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const iR=37297;let aR=0;function sR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const cv=new gt;function rR(r){wt._getMatrix(cv,wt.workingColorSpace,r);const e=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case su:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function uv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+sR(r.getShaderSource(e),h)}else return c}function oR(r,e){const i=rR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lR={[Pv]:"Linear",[Bv]:"Reinhard",[Iv]:"Cineon",[Fv]:"ACESFilmic",[Hv]:"AgX",[Gv]:"Neutral",[zv]:"Custom"};function cR(r,e){const i=lR[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new ae;function uR(){wt.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function dR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function hR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function $o(r){return r!==""}function fv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(r){return r.replace(pR,gR)}const mR=new Map;function gR(r,e){let i=_t[e];if(i===void 0){const s=mR.get(e);if(s!==void 0)i=_t[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ap(i)}const _R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(r){return r.replace(_R,vR)}function vR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const xR={[Jc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function SR(r){return xR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yR={[Is]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function MR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":yR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ER={[Hr]:"ENVMAP_MODE_REFRACTION"};function bR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ER[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TR={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[eE]:"ENVMAP_BLENDING_MIX",[tE]:"ENVMAP_BLENDING_ADD"};function AR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":TR[r.combine]||"ENVMAP_BLENDING_NONE"}function RR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function wR(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=SR(i),p=MR(i),g=bR(i),_=AR(i),v=RR(i),y=fR(i),E=dR(c),T=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),x.length>0&&(x+=`
`)):(M=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?_t.tonemapping_pars_fragment:"",i.toneMapping!==Xi?cR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,oR("linearToOutputTexel",i.outputColorSpace),uR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),d=ap(d),d=fv(d,i),d=dv(d,i),h=ap(h),h=fv(h,i),h=dv(h,i),d=hv(d),h=hv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=O+M+d,C=O+x+h,B=lv(l,l.VERTEX_SHADER,U),F=lv(l,l.FRAGMENT_SHADER,C);l.attachShader(T,B),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(H){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(T)||"",ne=l.getShaderInfoLog(B)||"",fe=l.getShaderInfoLog(F)||"",ce=K.trim(),L=ne.trim(),G=fe.trim();let J=!0,me=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,B,F);else{const _e=uv(l,B,"vertex"),P=uv(l,F,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ce+`
`+_e+`
`+P)}else ce!==""?ot("WebGLProgram: Program Info Log:",ce):(L===""||G==="")&&(me=!1);me&&(H.diagnostics={runnable:J,programLog:ce,vertexShader:{log:L,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(B),l.deleteShader(F),Z=new iu(l,T),w=hR(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,iR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=F,this}let CR=0;class DR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new LR(e),i.set(e,s)),s}}class LR{constructor(e){this.id=CR++,this.code=e,this.usedTimes=0}}function UR(r,e,i,s,l,c,d){const h=new Qv,m=new DR,p=new Set,g=[],_=new Map,v=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,D,H,K,ne){const fe=K.fog,ce=ne.geometry,L=w.isMeshStandardMaterial?K.environment:null,G=(w.isMeshStandardMaterial?i:e).get(w.envMap||L),J=G&&G.mapping===du?G.image.height:null,me=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const _e=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,P=_e!==void 0?_e.length:0;let te=0;ce.morphAttributes.position!==void 0&&(te=1),ce.morphAttributes.normal!==void 0&&(te=2),ce.morphAttributes.color!==void 0&&(te=3);let ve,Re,He,ie;if(me){const Rt=Gi[me];ve=Rt.vertexShader,Re=Rt.fragmentShader}else ve=w.vertexShader,Re=w.fragmentShader,m.update(w),He=m.getVertexShaderID(w),ie=m.getFragmentShaderID(w);const ue=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Xe=ne.isInstancedMesh===!0,Ge=ne.isBatchedMesh===!0,ht=!!w.map,qt=!!w.matcap,vt=!!G,Fe=!!w.aoMap,$e=!!w.lightMap,Je=!!w.bumpMap,ut=!!w.normalMap,k=!!w.displacementMap,Ut=!!w.emissiveMap,xt=!!w.metalnessMap,rt=!!w.roughnessMap,Ve=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,W=w.iridescence>0,he=w.sheen>0,Se=w.transmission>0,de=Ve&&!!w.anisotropyMap,qe=N&&!!w.clearcoatMap,De=N&&!!w.clearcoatNormalMap,Ye=N&&!!w.clearcoatRoughnessMap,it=W&&!!w.iridescenceMap,be=W&&!!w.iridescenceThicknessMap,Te=he&&!!w.sheenColorMap,ze=he&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Le=!!w.specularColorMap,pt=!!w.specularIntensityMap,j=Se&&!!w.transmissionMap,Ne=Se&&!!w.thicknessMap,Ae=!!w.gradientMap,Ie=!!w.alphaMap,Me=w.alphaTest>0,ye=!!w.alphaHash,Ce=!!w.extensions;let lt=Xi;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(lt=r.toneMapping);const It={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:ve,fragmentShader:Re,defines:w.defines,customVertexShaderID:He,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&ne._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ne.instanceColor!==null,instancingMorph:Xe&&ne.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Vr,alphaToCoverage:!!w.alphaToCoverage,map:ht,matcap:qt,envMap:vt,envMapMode:vt&&G.mapping,envMapCubeUVHeight:J,aoMap:Fe,lightMap:$e,bumpMap:Je,normalMap:ut,displacementMap:k,emissiveMap:Ut,normalMapObjectSpace:ut&&w.normalMapType===sE,normalMapTangentSpace:ut&&w.normalMapType===aE,metalnessMap:xt,roughnessMap:rt,anisotropy:Ve,anisotropyMap:de,clearcoat:N,clearcoatMap:qe,clearcoatNormalMap:De,clearcoatRoughnessMap:Ye,dispersion:b,iridescence:W,iridescenceMap:it,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Be,specularColorMap:Le,specularIntensityMap:pt,transmission:Se,transmissionMap:j,thicknessMap:Ne,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===Ir&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:ye,combine:w.combine,mapUv:ht&&T(w.map.channel),aoMapUv:Fe&&T(w.aoMap.channel),lightMapUv:$e&&T(w.lightMap.channel),bumpMapUv:Je&&T(w.bumpMap.channel),normalMapUv:ut&&T(w.normalMap.channel),displacementMapUv:k&&T(w.displacementMap.channel),emissiveMapUv:Ut&&T(w.emissiveMap.channel),metalnessMapUv:xt&&T(w.metalnessMap.channel),roughnessMapUv:rt&&T(w.roughnessMap.channel),anisotropyMapUv:de&&T(w.anisotropyMap.channel),clearcoatMapUv:qe&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(w.sheenRoughnessMap.channel),specularMapUv:Be&&T(w.specularMap.channel),specularColorMapUv:Le&&T(w.specularColorMap.channel),specularIntensityMapUv:pt&&T(w.specularIntensityMap.channel),transmissionMapUv:j&&T(w.transmissionMap.channel),thicknessMapUv:Ne&&T(w.thicknessMap.channel),alphaMapUv:Ie&&T(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ut||Ve),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ce.attributes.uv&&(ht||Ie),fog:!!fe,useFog:w.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:ne.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:te,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:ht&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ut&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_a,flipSided:w.side===Kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function x(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)D.push(H),D.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(O(D,w),U(D,w),D.push(r.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function O(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function U(w,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),w.push(h.mask)}function C(w){const D=E[w.type];let H;if(D){const K=Gi[D];H=ZE.clone(K.uniforms)}else H=w.uniforms;return H}function B(w,D){let H=_.get(D);return H!==void 0?++H.usedTimes:(H=new wR(r,D,w,c),g.push(H),_.set(D,H)),H}function F(w){if(--w.usedTimes===0){const D=g.indexOf(w);g[D]=g[g.length-1],g.pop(),_.delete(w.cacheKey),w.destroy()}}function I(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:B,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:Z}}function NR(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function OR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(_,v,y,E,T,M){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},r[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=M),e++,x}function h(_,v,y,E,T,M){const x=d(_,v,y,E,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(_,v,y,E,T,M){const x=d(_,v,y,E,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||OR),s.length>1&&s.sort(v||mv),l.length>1&&l.sort(v||mv)}function g(){for(let _=e,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function PR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new gv,r.set(s,[d])):l>=c.length?(d=new gv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function BR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new At};break;case"SpotLight":i={position:new ae,direction:new ae,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=i,i}}}function IR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let FR=0;function zR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function HR(r){const e=new BR,i=IR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const l=new ae,c=new nn,d=new nn;function h(p){let g=0,_=0,v=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,E=0,T=0,M=0,x=0,O=0,U=0,C=0,B=0,F=0,I=0;p.sort(zR);for(let w=0,D=p.length;w<D;w++){const H=p[w],K=H.color,ne=H.intensity,fe=H.distance;let ce=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Gr?ce=H.shadow.map.texture:ce=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=K.r*ne,_+=K.g*ne,v+=K.b*ne;else if(H.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(H.sh.coefficients[L],ne);I++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=H.shadow.matrix,O++}s.directional[y]=L,y++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(K).multiplyScalar(ne),L.distance=fe,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,s.spot[T]=L;const G=H.shadow;if(H.map&&(s.spotLightMap[B]=H.map,B++,G.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[T]=G.matrix,H.castShadow){const J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,s.spotShadow[T]=J,s.spotShadowMap[T]=ce,C++}T++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy(K).multiplyScalar(ne),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=L,M++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const G=H.shadow,J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,s.pointShadow[E]=J,s.pointShadowMap[E]=ce,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=L,E++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(ne),L.groundColor.copy(H.groundColor).multiplyScalar(ne),s.hemi[x]=L,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const Z=s.hash;(Z.directionalLength!==y||Z.pointLength!==E||Z.spotLength!==T||Z.rectAreaLength!==M||Z.hemiLength!==x||Z.numDirectionalShadows!==O||Z.numPointShadows!==U||Z.numSpotShadows!==C||Z.numSpotMaps!==B||Z.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+B-F,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,Z.directionalLength=y,Z.pointLength=E,Z.spotLength=T,Z.rectAreaLength=M,Z.hemiLength=x,Z.numDirectionalShadows=O,Z.numPointShadows=U,Z.numSpotShadows=C,Z.numSpotMaps=B,Z.numLightProbes=I,s.version=FR++)}function m(p,g){let _=0,v=0,y=0,E=0,T=0;const M=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const U=p[x];if(U.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),_++}else if(U.isSpotLight){const C=s.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),d.identity(),c.copy(U.matrixWorld),c.premultiply(M),d.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const C=s.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function _v(r){const e=new HR(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function d(g){s.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function GR(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new _v(r),e.set(l,[h])):c>=d.length?(h=new _v(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const VR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kR=`uniform sampler2D shadow_pass;
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
}`,XR=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],jR=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],vv=new nn,Zo=new ae,ah=new ae;function WR(r,e,i){let s=new ox;const l=new jt,c=new jt,d=new rn,h=new ob,m=new lb,p={},g=i.maxTextureSize,_={[rs]:Kn,[Kn]:rs,[_a]:_a},v=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:VR,fragmentShader:kR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new On;E.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ba(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let x=this.type;this.render=function(F,I,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===PM&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Jc);const w=r.getRenderTarget(),D=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(xa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ne=x!==this.type;ne&&I.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(ce=>ce.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,ce=F.length;fe<ce;fe++){const L=F[fe],G=L.shadow;if(G===void 0){ot("WebGLShadowMap:",L,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const J=G.getFrameExtents();if(l.multiply(J),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/J.x),l.x=c.x*J.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/J.y),l.y=c.y*J.y,G.mapSize.y=c.y)),G.map===null||ne===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Qo){if(L.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ji(l.x,l.y,{format:Gr,type:ya,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=L.name+".shadowMap",G.map.depthTexture=new ol(l.x,l.y,Vi),G.map.depthTexture.name=L.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn}else{L.isPointLight?(G.map=new rx(l.x),G.map.depthTexture=new sb(l.x,Wi)):(G.map=new ji(l.x,l.y),G.map.depthTexture=new ol(l.x,l.y,Wi)),G.map.depthTexture.name=L.name+".shadowMap",G.map.depthTexture.format=Ma;const _e=r.state.buffers.depth.getReversed();this.type===Jc?(G.map.depthTexture.compareFunction=_e?pp:hp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn)}G.camera.updateProjectionMatrix()}const me=G.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<me;_e++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,_e),r.clear();else{_e===0&&(r.setRenderTarget(G.map),r.clear());const P=G.getViewport(_e);d.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),K.viewport(d)}if(L.isPointLight){const P=G.camera,te=G.matrix,ve=L.distance||P.far;ve!==P.far&&(P.far=ve,P.updateProjectionMatrix()),Zo.setFromMatrixPosition(L.matrixWorld),P.position.copy(Zo),ah.copy(P.position),ah.add(XR[_e]),P.up.copy(jR[_e]),P.lookAt(ah),P.updateMatrixWorld(),te.makeTranslation(-Zo.x,-Zo.y,-Zo.z),vv.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G._frustum.setFromProjectionMatrix(vv,P.coordinateSystem,P.reversedDepth)}else G.updateMatrices(L);s=G.getFrustum(),C(I,Z,G.camera,L,this.type)}G.isPointLightShadow!==!0&&this.type===Qo&&O(G,Z),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(w,D,H)};function O(F,I){const Z=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ji(l.x,l.y,{format:Gr,type:ya})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,Z,v,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,Z,y,T,null)}function U(F,I,Z,w){let D=null;const H=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)D=H;else if(D=Z.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=D.uuid,ne=I.uuid;let fe=p[K];fe===void 0&&(fe={},p[K]=fe);let ce=fe[ne];ce===void 0&&(ce=D.clone(),fe[ne]=ce,I.addEventListener("dispose",B)),D=ce}if(D.visible=I.visible,D.wireframe=I.wireframe,w===Qo?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:_[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const K=r.properties.get(D);K.light=Z}return D}function C(F,I,Z,w,D){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===Qo)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const ne=e.update(F),fe=F.material;if(Array.isArray(fe)){const ce=ne.groups;for(let L=0,G=ce.length;L<G;L++){const J=ce[L],me=fe[J.materialIndex];if(me&&me.visible){const _e=U(F,me,w,D);F.onBeforeShadow(r,F,I,Z,ne,_e,J),r.renderBufferDirect(Z,null,ne,_e,F,J),F.onAfterShadow(r,F,I,Z,ne,_e,J)}}}else if(fe.visible){const ce=U(F,fe,w,D);F.onBeforeShadow(r,F,I,Z,ne,ce,null),r.renderBufferDirect(Z,null,ne,ce,F,null),F.onAfterShadow(r,F,I,Z,ne,ce,null)}}const K=F.children;for(let ne=0,fe=K.length;ne<fe;ne++)C(K[ne],I,Z,w,D)}function B(F){F.target.removeEventListener("dispose",B);for(const Z in p){const w=p[Z],D=F.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const YR={[dh]:hh,[ph]:_h,[mh]:vh,[zr]:gh,[hh]:dh,[_h]:ph,[vh]:mh,[gh]:zr};function qR(r,e){function i(){let j=!1;const Ne=new rn;let Ae=null;const Ie=new rn(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!j&&(r.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){j=Me},setClear:function(Me,ye,Ce,lt,It){It===!0&&(Me*=lt,ye*=lt,Ce*=lt),Ne.set(Me,ye,Ce,lt),Ie.equals(Ne)===!1&&(r.clearColor(Me,ye,Ce,lt),Ie.copy(Ne))},reset:function(){j=!1,Ae=null,Ie.set(-1,0,0,0)}}}function s(){let j=!1,Ne=!1,Ae=null,Ie=null,Me=null;return{setReversed:function(ye){if(Ne!==ye){const Ce=e.get("EXT_clip_control");ye?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Ne=ye;const lt=Me;Me=null,this.setClear(lt)}},getReversed:function(){return Ne},setTest:function(ye){ye?ue(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(ye){Ae!==ye&&!j&&(r.depthMask(ye),Ae=ye)},setFunc:function(ye){if(Ne&&(ye=YR[ye]),Ie!==ye){switch(ye){case dh:r.depthFunc(r.NEVER);break;case hh:r.depthFunc(r.ALWAYS);break;case ph:r.depthFunc(r.LESS);break;case zr:r.depthFunc(r.LEQUAL);break;case mh:r.depthFunc(r.EQUAL);break;case gh:r.depthFunc(r.GEQUAL);break;case _h:r.depthFunc(r.GREATER);break;case vh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=ye}},setLocked:function(ye){j=ye},setClear:function(ye){Me!==ye&&(Ne&&(ye=1-ye),r.clearDepth(ye),Me=ye)},reset:function(){j=!1,Ae=null,Ie=null,Me=null,Ne=!1}}}function l(){let j=!1,Ne=null,Ae=null,Ie=null,Me=null,ye=null,Ce=null,lt=null,It=null;return{setTest:function(Rt){j||(Rt?ue(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Rt){Ne!==Rt&&!j&&(r.stencilMask(Rt),Ne=Rt)},setFunc:function(Rt,Dn,bi){(Ae!==Rt||Ie!==Dn||Me!==bi)&&(r.stencilFunc(Rt,Dn,bi),Ae=Rt,Ie=Dn,Me=bi)},setOp:function(Rt,Dn,bi){(ye!==Rt||Ce!==Dn||lt!==bi)&&(r.stencilOp(Rt,Dn,bi),ye=Rt,Ce=Dn,lt=bi)},setLocked:function(Rt){j=Rt},setClear:function(Rt){It!==Rt&&(r.clearStencil(Rt),It=Rt)},reset:function(){j=!1,Ne=null,Ae=null,Ie=null,Me=null,ye=null,Ce=null,lt=null,It=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,O=null,U=null,C=null,B=null,F=null,I=new At(0,0,0),Z=0,w=!1,D=null,H=null,K=null,ne=null,fe=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,G=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),L=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),L=G>=2);let me=null,_e={};const P=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),ve=new rn().fromArray(P),Re=new rn().fromArray(te);function He(j,Ne,Ae,Ie){const Me=new Uint8Array(4),ye=r.createTexture();r.bindTexture(j,ye),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<Ae;Ce++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Ne+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return ye}const ie={};ie[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(r.DEPTH_TEST),d.setFunc(zr),Je(!1),ut(g_),ue(r.CULL_FACE),Fe(xa);function ue(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function we(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function Xe(j,Ne){return _[j]!==Ne?(r.bindFramebuffer(j,Ne),_[j]=Ne,j===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ne),j===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ge(j,Ne){let Ae=y,Ie=!1;if(j){Ae=v.get(Ne),Ae===void 0&&(Ae=[],v.set(Ne,Ae));const Me=j.textures;if(Ae.length!==Me.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,Ce=Me.length;ye<Ce;ye++)Ae[ye]=r.COLOR_ATTACHMENT0+ye;Ae.length=Me.length,Ie=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Ae)}function ht(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const qt={[Ns]:r.FUNC_ADD,[IM]:r.FUNC_SUBTRACT,[FM]:r.FUNC_REVERSE_SUBTRACT};qt[zM]=r.MIN,qt[HM]=r.MAX;const vt={[GM]:r.ZERO,[VM]:r.ONE,[kM]:r.SRC_COLOR,[uh]:r.SRC_ALPHA,[ZM]:r.SRC_ALPHA_SATURATE,[YM]:r.DST_COLOR,[jM]:r.DST_ALPHA,[XM]:r.ONE_MINUS_SRC_COLOR,[fh]:r.ONE_MINUS_SRC_ALPHA,[qM]:r.ONE_MINUS_DST_COLOR,[WM]:r.ONE_MINUS_DST_ALPHA,[KM]:r.CONSTANT_COLOR,[JM]:r.ONE_MINUS_CONSTANT_COLOR,[QM]:r.CONSTANT_ALPHA,[$M]:r.ONE_MINUS_CONSTANT_ALPHA};function Fe(j,Ne,Ae,Ie,Me,ye,Ce,lt,It,Rt){if(j===xa){T===!0&&(we(r.BLEND),T=!1);return}if(T===!1&&(ue(r.BLEND),T=!0),j!==BM){if(j!==M||Rt!==w){if((x!==Ns||C!==Ns)&&(r.blendEquation(r.FUNC_ADD),x=Ns,C=Ns),Rt)switch(j){case Ir:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case __:r.blendFunc(r.ONE,r.ONE);break;case v_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case x_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",j);break}else switch(j){case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case __:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case v_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",j);break}O=null,U=null,B=null,F=null,I.set(0,0,0),Z=0,M=j,w=Rt}return}Me=Me||Ne,ye=ye||Ae,Ce=Ce||Ie,(Ne!==x||Me!==C)&&(r.blendEquationSeparate(qt[Ne],qt[Me]),x=Ne,C=Me),(Ae!==O||Ie!==U||ye!==B||Ce!==F)&&(r.blendFuncSeparate(vt[Ae],vt[Ie],vt[ye],vt[Ce]),O=Ae,U=Ie,B=ye,F=Ce),(lt.equals(I)===!1||It!==Z)&&(r.blendColor(lt.r,lt.g,lt.b,It),I.copy(lt),Z=It),M=j,w=!1}function $e(j,Ne){j.side===_a?we(r.CULL_FACE):ue(r.CULL_FACE);let Ae=j.side===Kn;Ne&&(Ae=!Ae),Je(Ae),j.blending===Ir&&j.transparent===!1?Fe(xa):Fe(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ie=j.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ut(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(j){D!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),D=j)}function ut(j){j!==NM?(ue(r.CULL_FACE),j!==H&&(j===g_?r.cullFace(r.BACK):j===OM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),H=j}function k(j){j!==K&&(L&&r.lineWidth(j),K=j)}function Ut(j,Ne,Ae){j?(ue(r.POLYGON_OFFSET_FILL),(ne!==Ne||fe!==Ae)&&(r.polygonOffset(Ne,Ae),ne=Ne,fe=Ae)):we(r.POLYGON_OFFSET_FILL)}function xt(j){j?ue(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function rt(j){j===void 0&&(j=r.TEXTURE0+ce-1),me!==j&&(r.activeTexture(j),me=j)}function Ve(j,Ne,Ae){Ae===void 0&&(me===null?Ae=r.TEXTURE0+ce-1:Ae=me);let Ie=_e[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},_e[Ae]=Ie),(Ie.type!==j||Ie.texture!==Ne)&&(me!==Ae&&(r.activeTexture(Ae),me=Ae),r.bindTexture(j,Ne||ie[j]),Ie.type=j,Ie.texture=Ne)}function N(){const j=_e[me];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function he(){try{r.texSubImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Se(){try{r.texSubImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function De(){try{r.texStorage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Ye(){try{r.texStorage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function it(){try{r.texImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function be(){try{r.texImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Te(j){ve.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),ve.copy(j))}function ze(j){Re.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Re.copy(j))}function Be(j,Ne){let Ae=p.get(Ne);Ae===void 0&&(Ae=new WeakMap,p.set(Ne,Ae));let Ie=Ae.get(j);Ie===void 0&&(Ie=r.getUniformBlockIndex(Ne,j.name),Ae.set(j,Ie))}function Le(j,Ne){const Ie=p.get(Ne).get(j);m.get(Ne)!==Ie&&(r.uniformBlockBinding(Ne,Ie,j.__bindingPointIndex),m.set(Ne,Ie))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},me=null,_e={},_={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,O=null,U=null,C=null,B=null,F=null,I=new At(0,0,0),Z=0,w=!1,D=null,H=null,K=null,ne=null,fe=null,ve.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ue,disable:we,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:ht,setBlending:Fe,setMaterial:$e,setFlipSided:Je,setCullFace:ut,setLineWidth:k,setPolygonOffset:Ut,setScissorTest:xt,activeTexture:rt,bindTexture:Ve,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:it,texImage3D:be,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:De,texStorage3D:Ye,texSubImage2D:he,texSubImage3D:Se,compressedTexSubImage2D:de,compressedTexSubImage3D:qe,scissor:Te,viewport:ze,reset:pt}}function ZR(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new jt,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):ou("canvas")}function T(N,b,W){let he=1;const Se=Ve(N);if((Se.width>W||Se.height>W)&&(he=W/Math.max(Se.width,Se.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(he*Se.width),qe=Math.floor(he*Se.height);_===void 0&&(_=E(de,qe));const De=b?E(de,qe):_;return De.width=de,De.height=qe,De.getContext("2d").drawImage(N,0,0,de,qe),ot("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+de+"x"+qe+")."),De}else return"data"in N&&ot("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,b,W,he,Se=!1){if(N!==null){if(r[N]!==void 0)return r[N];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=b;if(b===r.RED&&(W===r.FLOAT&&(de=r.R32F),W===r.HALF_FLOAT&&(de=r.R16F),W===r.UNSIGNED_BYTE&&(de=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.R8UI),W===r.UNSIGNED_SHORT&&(de=r.R16UI),W===r.UNSIGNED_INT&&(de=r.R32UI),W===r.BYTE&&(de=r.R8I),W===r.SHORT&&(de=r.R16I),W===r.INT&&(de=r.R32I)),b===r.RG&&(W===r.FLOAT&&(de=r.RG32F),W===r.HALF_FLOAT&&(de=r.RG16F),W===r.UNSIGNED_BYTE&&(de=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.RG8UI),W===r.UNSIGNED_SHORT&&(de=r.RG16UI),W===r.UNSIGNED_INT&&(de=r.RG32UI),W===r.BYTE&&(de=r.RG8I),W===r.SHORT&&(de=r.RG16I),W===r.INT&&(de=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.RGB8UI),W===r.UNSIGNED_SHORT&&(de=r.RGB16UI),W===r.UNSIGNED_INT&&(de=r.RGB32UI),W===r.BYTE&&(de=r.RGB8I),W===r.SHORT&&(de=r.RGB16I),W===r.INT&&(de=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),W===r.UNSIGNED_INT&&(de=r.RGBA32UI),W===r.BYTE&&(de=r.RGBA8I),W===r.SHORT&&(de=r.RGBA16I),W===r.INT&&(de=r.RGBA32I)),b===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),b===r.RGBA){const qe=Se?su:wt.getTransfer(he);W===r.FLOAT&&(de=r.RGBA32F),W===r.HALF_FLOAT&&(de=r.RGBA16F),W===r.UNSIGNED_BYTE&&(de=qe===Gt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(N,b){let W;return N?b===null||b===Wi||b===al?W=r.DEPTH24_STENCIL8:b===Vi?W=r.DEPTH32F_STENCIL8:b===il&&(W=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===al?W=r.DEPTH_COMPONENT24:b===Vi?W=r.DEPTH_COMPONENT32F:b===il&&(W=r.DEPTH_COMPONENT16),W}function B(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Cn&&N.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function F(N){const b=N.target;b.removeEventListener("dispose",F),Z(b),b.isVideoTexture&&g.delete(b)}function I(N){const b=N.target;b.removeEventListener("dispose",I),D(b)}function Z(N){const b=s.get(N);if(b.__webglInit===void 0)return;const W=N.source,he=v.get(W);if(he){const Se=he[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(N),Object.keys(he).length===0&&v.delete(W)}s.remove(N)}function w(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const W=N.source,he=v.get(W);delete he[b.__cacheKey],d.memory.textures--}function D(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let Se=0;Se<b.__webglFramebuffer[he].length;Se++)r.deleteFramebuffer(b.__webglFramebuffer[he][Se]);else r.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)r.deleteFramebuffer(b.__webglFramebuffer[he]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=N.textures;for(let he=0,Se=W.length;he<Se;he++){const de=s.get(W[he]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),d.memory.textures--),s.remove(W[he])}s.remove(N)}let H=0;function K(){H=0}function ne(){const N=H;return N>=l.maxTextures&&ot("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function fe(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ce(N,b){const W=s.get(N);if(N.isVideoTexture&&xt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const he=N.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(W,N,b);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function L(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ie(W,N,b);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function G(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ie(W,N,b);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function J(N,b){const W=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ue(W,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const me={[yh]:r.REPEAT,[va]:r.CLAMP_TO_EDGE,[Mh]:r.MIRRORED_REPEAT},_e={[Cn]:r.NEAREST,[nE]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[wd]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},P={[rE]:r.NEVER,[fE]:r.ALWAYS,[oE]:r.LESS,[hp]:r.LEQUAL,[lE]:r.EQUAL,[pp]:r.GEQUAL,[cE]:r.GREATER,[uE]:r.NOTEQUAL};function te(N,b){if(b.type===Vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===wd||b.magFilter===Tc||b.magFilter===Ps||b.minFilter===Bn||b.minFilter===wd||b.minFilter===Tc||b.minFilter===Ps)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,me[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,me[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,me[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,_e[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,_e[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==Tc&&b.minFilter!==Ps||b.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ve(N,b){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const he=b.source;let Se=v.get(he);Se===void 0&&(Se={},v.set(he,Se));const de=fe(b);if(de!==N.__cacheKey){Se[de]===void 0&&(Se[de]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,W=!0),Se[de].usedTimes++;const qe=Se[N.__cacheKey];qe!==void 0&&(Se[N.__cacheKey].usedTimes--,qe.usedTimes===0&&w(b)),N.__cacheKey=de,N.__webglTexture=Se[de].texture}return W}function Re(N,b,W){return Math.floor(Math.floor(N/W)/b)}function He(N,b,W,he){const de=N.updateRanges;if(de.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,W,he,b.data);else{de.sort((be,Te)=>be.start-Te.start);let qe=0;for(let be=1;be<de.length;be++){const Te=de[qe],ze=de[be],Be=Te.start+Te.count,Le=Re(ze.start,b.width,4),pt=Re(Te.start,b.width,4);ze.start<=Be+1&&Le===pt&&Re(ze.start+ze.count-1,b.width,4)===Le?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++qe,de[qe]=ze)}de.length=qe+1;const De=r.getParameter(r.UNPACK_ROW_LENGTH),Ye=r.getParameter(r.UNPACK_SKIP_PIXELS),it=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let be=0,Te=de.length;be<Te;be++){const ze=de[be],Be=Math.floor(ze.start/4),Le=Math.ceil(ze.count/4),pt=Be%b.width,j=Math.floor(Be/b.width),Ne=Le,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,pt,j,Ne,Ae,W,he,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,De),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,it)}}function ie(N,b,W){let he=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=r.TEXTURE_3D);const Se=ve(N,b),de=b.source;i.bindTexture(he,N.__webglTexture,r.TEXTURE0+W);const qe=s.get(de);if(de.version!==qe.__version||Se===!0){i.activeTexture(r.TEXTURE0+W);const De=wt.getPrimaries(wt.workingColorSpace),Ye=b.colorSpace===as?null:wt.getPrimaries(b.colorSpace),it=b.colorSpace===as||De===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let be=T(b.image,!1,l.maxTextureSize);be=rt(b,be);const Te=c.convert(b.format,b.colorSpace),ze=c.convert(b.type);let Be=U(b.internalFormat,Te,ze,b.colorSpace,b.isVideoTexture);te(he,b);let Le;const pt=b.mipmaps,j=b.isVideoTexture!==!0,Ne=qe.__version===void 0||Se===!0,Ae=de.dataReady,Ie=B(b,be);if(b.isDepthTexture)Be=C(b.format===Bs,b.type),Ne&&(j?i.texStorage2D(r.TEXTURE_2D,1,Be,be.width,be.height):i.texImage2D(r.TEXTURE_2D,0,Be,be.width,be.height,0,Te,ze,null));else if(b.isDataTexture)if(pt.length>0){j&&Ne&&i.texStorage2D(r.TEXTURE_2D,Ie,Be,pt[0].width,pt[0].height);for(let Me=0,ye=pt.length;Me<ye;Me++)Le=pt[Me],j?Ae&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,Te,ze,Le.data):i.texImage2D(r.TEXTURE_2D,Me,Be,Le.width,Le.height,0,Te,ze,Le.data);b.generateMipmaps=!1}else j?(Ne&&i.texStorage2D(r.TEXTURE_2D,Ie,Be,be.width,be.height),Ae&&He(b,be,Te,ze)):i.texImage2D(r.TEXTURE_2D,0,Be,be.width,be.height,0,Te,ze,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Be,pt[0].width,pt[0].height,be.depth);for(let Me=0,ye=pt.length;Me<ye;Me++)if(Le=pt[Me],b.format!==Oi)if(Te!==null)if(j){if(Ae)if(b.layerUpdates.size>0){const Ce=Z_(Le.width,Le.height,b.format,b.type);for(const lt of b.layerUpdates){const It=Le.data.subarray(lt*Ce/Le.data.BYTES_PER_ELEMENT,(lt+1)*Ce/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,lt,Le.width,Le.height,1,Te,It)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,be.depth,Te,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Be,Le.width,Le.height,be.depth,0,Le.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ae&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,be.depth,Te,ze,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Be,Le.width,Le.height,be.depth,0,Te,ze,Le.data)}else{j&&Ne&&i.texStorage2D(r.TEXTURE_2D,Ie,Be,pt[0].width,pt[0].height);for(let Me=0,ye=pt.length;Me<ye;Me++)Le=pt[Me],b.format!==Oi?Te!==null?j?Ae&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,Te,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Be,Le.width,Le.height,0,Le.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ae&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Le.width,Le.height,Te,ze,Le.data):i.texImage2D(r.TEXTURE_2D,Me,Be,Le.width,Le.height,0,Te,ze,Le.data)}else if(b.isDataArrayTexture)if(j){if(Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Be,be.width,be.height,be.depth),Ae)if(b.layerUpdates.size>0){const Me=Z_(be.width,be.height,b.format,b.type);for(const ye of b.layerUpdates){const Ce=be.data.subarray(ye*Me/be.data.BYTES_PER_ELEMENT,(ye+1)*Me/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,be.width,be.height,1,Te,ze,Ce)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Te,ze,be.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,be.width,be.height,be.depth,0,Te,ze,be.data);else if(b.isData3DTexture)j?(Ne&&i.texStorage3D(r.TEXTURE_3D,Ie,Be,be.width,be.height,be.depth),Ae&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Te,ze,be.data)):i.texImage3D(r.TEXTURE_3D,0,Be,be.width,be.height,be.depth,0,Te,ze,be.data);else if(b.isFramebufferTexture){if(Ne)if(j)i.texStorage2D(r.TEXTURE_2D,Ie,Be,be.width,be.height);else{let Me=be.width,ye=be.height;for(let Ce=0;Ce<Ie;Ce++)i.texImage2D(r.TEXTURE_2D,Ce,Be,Me,ye,0,Te,ze,null),Me>>=1,ye>>=1}}else if(pt.length>0){if(j&&Ne){const Me=Ve(pt[0]);i.texStorage2D(r.TEXTURE_2D,Ie,Be,Me.width,Me.height)}for(let Me=0,ye=pt.length;Me<ye;Me++)Le=pt[Me],j?Ae&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Te,ze,Le):i.texImage2D(r.TEXTURE_2D,Me,Be,Te,ze,Le);b.generateMipmaps=!1}else if(j){if(Ne){const Me=Ve(be);i.texStorage2D(r.TEXTURE_2D,Ie,Be,Me.width,Me.height)}Ae&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,ze,be)}else i.texImage2D(r.TEXTURE_2D,0,Be,Te,ze,be);M(b)&&x(he),qe.__version=de.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ue(N,b,W){if(b.image.length!==6)return;const he=ve(N,b),Se=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const de=s.get(Se);if(Se.version!==de.__version||he===!0){i.activeTexture(r.TEXTURE0+W);const qe=wt.getPrimaries(wt.workingColorSpace),De=b.colorSpace===as?null:wt.getPrimaries(b.colorSpace),Ye=b.colorSpace===as||qe===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const it=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let ye=0;ye<6;ye++)!it&&!be?Te[ye]=T(b.image[ye],!0,l.maxCubemapSize):Te[ye]=be?b.image[ye].image:b.image[ye],Te[ye]=rt(b,Te[ye]);const ze=Te[0],Be=c.convert(b.format,b.colorSpace),Le=c.convert(b.type),pt=U(b.internalFormat,Be,Le,b.colorSpace),j=b.isVideoTexture!==!0,Ne=de.__version===void 0||he===!0,Ae=Se.dataReady;let Ie=B(b,ze);te(r.TEXTURE_CUBE_MAP,b);let Me;if(it){j&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,ze.width,ze.height);for(let ye=0;ye<6;ye++){Me=Te[ye].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){const lt=Me[Ce];b.format!==Oi?Be!==null?j?Ae&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce,0,0,lt.width,lt.height,Be,lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce,pt,lt.width,lt.height,0,lt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce,0,0,lt.width,lt.height,Be,Le,lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce,pt,lt.width,lt.height,0,Be,Le,lt.data)}}}else{if(Me=b.mipmaps,j&&Ne){Me.length>0&&Ie++;const ye=Ve(Te[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(be){j?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Te[ye].width,Te[ye].height,Be,Le,Te[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,Te[ye].width,Te[ye].height,0,Be,Le,Te[ye].data);for(let Ce=0;Ce<Me.length;Ce++){const It=Me[Ce].image[ye].image;j?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce+1,0,0,It.width,It.height,Be,Le,It.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce+1,pt,It.width,It.height,0,Be,Le,It.data)}}else{j?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Le,Te[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,Be,Le,Te[ye]);for(let Ce=0;Ce<Me.length;Ce++){const lt=Me[Ce];j?Ae&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce+1,0,0,Be,Le,lt.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce+1,pt,Be,Le,lt.image[ye])}}}M(b)&&x(r.TEXTURE_CUBE_MAP),de.__version=Se.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function we(N,b,W,he,Se,de){const qe=c.convert(W.format,W.colorSpace),De=c.convert(W.type),Ye=U(W.internalFormat,qe,De,W.colorSpace),it=s.get(b),be=s.get(W);if(be.__renderTarget=b,!it.__hasExternalTextures){const Te=Math.max(1,b.width>>de),ze=Math.max(1,b.height>>de);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?i.texImage3D(Se,de,Ye,Te,ze,b.depth,0,qe,De,null):i.texImage2D(Se,de,Ye,Te,ze,0,qe,De,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Ut(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,Se,be.__webglTexture,0,k(b)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,Se,be.__webglTexture,de),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(N,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const he=b.depthTexture,Se=he&&he.isDepthTexture?he.type:null,de=C(b.stencilBuffer,Se),qe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ut(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),de,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),de,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,de,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,qe,r.RENDERBUFFER,N)}else{const he=b.textures;for(let Se=0;Se<he.length;Se++){const de=he[Se],qe=c.convert(de.format,de.colorSpace),De=c.convert(de.type),Ye=U(de.internalFormat,qe,De,de.colorSpace);Ut(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),Ye,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),Ye,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(N,b,W){const he=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(b.depthTexture);if(Se.__renderTarget=b,(!Se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),te(r.TEXTURE_CUBE_MAP,b.depthTexture);const it=c.convert(b.depthTexture.format),be=c.convert(b.depthTexture.type);let Te;b.depthTexture.format===Ma?Te=r.DEPTH_COMPONENT24:b.depthTexture.format===Bs&&(Te=r.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Te,b.width,b.height,0,it,be,null)}}else ce(b.depthTexture,0);const de=Se.__webglTexture,qe=k(b),De=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Ye=b.depthTexture.format===Bs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ma)Ut(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,De,de,0,qe):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,De,de,0);else if(b.depthTexture.format===Bs)Ut(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,De,de,0,qe):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,De,de,0);else throw new Error("Unknown depthTexture format")}function ht(N){const b=s.get(N),W=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",Se)};he.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=he}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ge(b.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?Ge(b.__webglFramebuffer[0],N,0):Ge(b.__webglFramebuffer,N,0)}else if(W){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=r.createRenderbuffer(),Xe(b.__webglDepthbuffer[he],N,!1);else{const Se=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,de)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xe(b.__webglDepthbuffer,N,!1);else{const Se=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,de)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(N,b,W){const he=s.get(N);b!==void 0&&we(he.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ht(N)}function vt(N){const b=N.texture,W=s.get(N),he=s.get(b);N.addEventListener("dispose",I);const Se=N.textures,de=N.isWebGLCubeRenderTarget===!0,qe=Se.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=b.version,d.memory.textures++),de){W.__webglFramebuffer=[];for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[De]=[];for(let Ye=0;Ye<b.mipmaps.length;Ye++)W.__webglFramebuffer[De][Ye]=r.createFramebuffer()}else W.__webglFramebuffer[De]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let De=0;De<b.mipmaps.length;De++)W.__webglFramebuffer[De]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(qe)for(let De=0,Ye=Se.length;De<Ye;De++){const it=s.get(Se[De]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&Ut(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let De=0;De<Se.length;De++){const Ye=Se[De];W.__webglColorRenderbuffer[De]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[De]);const it=c.convert(Ye.format,Ye.colorSpace),be=c.convert(Ye.type),Te=U(Ye.internalFormat,it,be,Ye.colorSpace,N.isXRRenderTarget===!0),ze=k(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Te,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,W.__webglColorRenderbuffer[De])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),te(r.TEXTURE_CUBE_MAP,b);for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)we(W.__webglFramebuffer[De][Ye],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ye);else we(W.__webglFramebuffer[De],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(b)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let De=0,Ye=Se.length;De<Ye;De++){const it=Se[De],be=s.get(it);let Te=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Te,be.__webglTexture),te(Te,it),we(W.__webglFramebuffer,N,it,r.COLOR_ATTACHMENT0+De,Te,0),M(it)&&x(Te)}i.unbindTexture()}else{let De=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,he.__webglTexture),te(De,b),b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)we(W.__webglFramebuffer[Ye],N,b,r.COLOR_ATTACHMENT0,De,Ye);else we(W.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,De,0);M(b)&&x(De),i.unbindTexture()}N.depthBuffer&&ht(N)}function Fe(N){const b=N.textures;for(let W=0,he=b.length;W<he;W++){const Se=b[W];if(M(Se)){const de=O(N),qe=s.get(Se).__webglTexture;i.bindTexture(de,qe),x(de),i.unbindTexture()}}}const $e=[],Je=[];function ut(N){if(N.samples>0){if(Ut(N)===!1){const b=N.textures,W=N.width,he=N.height;let Se=r.COLOR_BUFFER_BIT;const de=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,qe=s.get(N),De=b.length>1;if(De)for(let it=0;it<b.length;it++)i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Ye=N.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let it=0;it<b.length;it++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),De){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,qe.__webglColorRenderbuffer[it]);const be=s.get(b[it]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,W,he,0,0,W,he,Se,r.NEAREST),m===!0&&($e.length=0,Je.length=0,$e.push(r.COLOR_ATTACHMENT0+it),N.depthBuffer&&N.resolveDepthBuffer===!1&&($e.push(de),Je.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),De)for(let it=0;it<b.length;it++){i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,qe.__webglColorRenderbuffer[it]);const be=s.get(b[it]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(N){return Math.min(l.maxSamples,N.samples)}function Ut(N){const b=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xt(N){const b=d.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function rt(N,b){const W=N.colorSpace,he=N.format,Se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Vr&&W!==as&&(wt.getTransfer(W)===Gt?(he!==Oi||Se!==Mi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",W)),b}function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=L,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=qt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function KR(r,e){function i(s,l=as){let c;const d=wt.getTransfer(l);if(s===Mi)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Wv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===kv)return r.BYTE;if(s===Xv)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===ya)return r.HALF_FLOAT;if(s===Yv)return r.ALPHA;if(s===qv)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Bs)return r.DEPTH_STENCIL;if(s===Zv)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Gr)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===dp)return r.RGBA_INTEGER;if(s===Qc||s===$c||s===eu||s===tu)if(d===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eh||s===bh||s===Th||s===Ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rh||s===wh||s===Ch||s===Dh||s===Lh||s===Uh||s===Nh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Rh||s===wh)return d===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ch)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Dh)return c.COMPRESSED_R11_EAC;if(s===Lh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Uh)return c.COMPRESSED_RG11_EAC;if(s===Nh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Oh||s===Ph||s===Bh||s===Ih||s===Fh||s===zh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===jh||s===Wh||s===Yh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Oh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ph)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ih)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qh||s===Zh||s===Kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===qh)return d===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jh||s===Qh||s===$h||s===ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Jh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$h)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QR=`
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

}`;class $R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new cx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Yi({vertexShader:JR,fragmentShader:QR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ba(new hu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ew extends Xr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new $R,x={},O=i.getContextAttributes();let U=null,C=null;const B=[],F=[],I=new jt;let Z=null;const w=new yi;w.viewport=new rn;const D=new yi;D.viewport=new rn;const H=[w,D],K=new cb;let ne=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=B[ie];return ue===void 0&&(ue=new Zd,B[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=B[ie];return ue===void 0&&(ue=new Zd,B[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=B[ie];return ue===void 0&&(ue=new Zd,B[ie]=ue),ue.getHandSpace()};function ce(ie){const ue=F.indexOf(ie.inputSource);if(ue===-1)return;const we=B[ue];we!==void 0&&(we.update(ie.inputSource,ie.frame,p||d),we.dispatchEvent({type:ie.type,data:ie.inputSource}))}function L(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",G);for(let ie=0;ie<B.length;ie++){const ue=F[ie];ue!==null&&(F[ie]=null,B[ie].disconnect(ue))}ne=null,fe=null,M.reset();for(const ie in x)delete x[ie];e.setRenderTarget(U),y=null,v=null,_=null,l=null,C=null,He.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",L),l.addEventListener("inputsourceschange",G),O.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Xe=null,Ge=null;O.depth&&(Ge=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=O.stencil?Bs:Ma,Xe=O.stencil?al:Wi);const ht={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ht),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new ji(v.textureWidth,v.textureHeight,{format:Oi,type:Mi,depthTexture:new ol(v.textureWidth,v.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new ji(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),He.setContext(l),He.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(ie){for(let ue=0;ue<ie.removed.length;ue++){const we=ie.removed[ue],Xe=F.indexOf(we);Xe>=0&&(F[Xe]=null,B[Xe].disconnect(we))}for(let ue=0;ue<ie.added.length;ue++){const we=ie.added[ue];let Xe=F.indexOf(we);if(Xe===-1){for(let ht=0;ht<B.length;ht++)if(ht>=F.length){F.push(we),Xe=ht;break}else if(F[ht]===null){F[ht]=we,Xe=ht;break}if(Xe===-1)break}const Ge=B[Xe];Ge&&Ge.connect(we)}}const J=new ae,me=new ae;function _e(ie,ue,we){J.setFromMatrixPosition(ue.matrixWorld),me.setFromMatrixPosition(we.matrixWorld);const Xe=J.distanceTo(me),Ge=ue.projectionMatrix.elements,ht=we.projectionMatrix.elements,qt=Ge[14]/(Ge[10]-1),vt=Ge[14]/(Ge[10]+1),Fe=(Ge[9]+1)/Ge[5],$e=(Ge[9]-1)/Ge[5],Je=(Ge[8]-1)/Ge[0],ut=(ht[8]+1)/ht[0],k=qt*Je,Ut=qt*ut,xt=Xe/(-Je+ut),rt=xt*-Je;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(rt),ie.translateZ(xt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ge[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ve=qt+xt,N=vt+xt,b=k-rt,W=Ut+(Xe-rt),he=Fe*vt/N*Ve,Se=$e*vt/N*Ve;ie.projectionMatrix.makePerspective(b,W,he,Se,Ve,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let ue=ie.near,we=ie.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(we=M.depthFar)),K.near=D.near=w.near=ue,K.far=D.far=w.far=we,(ne!==K.near||fe!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ne=K.near,fe=K.far),K.layers.mask=ie.layers.mask|6,w.layers.mask=K.layers.mask&3,D.layers.mask=K.layers.mask&5;const Xe=ie.parent,Ge=K.cameras;P(K,Xe);for(let ht=0;ht<Ge.length;ht++)P(Ge[ht],Xe);Ge.length===2?_e(K,w,D):K.projectionMatrix.copy(w.projectionMatrix),te(ie,K,Xe)};function te(ie,ue,we){we===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(we.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=rl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(ie){m=ie,v!==null&&(v.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(ie){return x[ie]};let ve=null;function Re(ie,ue){if(g=ue.getViewerPose(p||d),E=ue,g!==null){const we=g.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Xe=!1;we.length!==K.cameras.length&&(K.cameras.length=0,Xe=!0);for(let vt=0;vt<we.length;vt++){const Fe=we[vt];let $e=null;if(y!==null)$e=y.getViewport(Fe);else{const ut=_.getViewSubImage(v,Fe);$e=ut.viewport,vt===0&&(e.setRenderTargetTextures(C,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(C))}let Je=H[vt];Je===void 0&&(Je=new yi,Je.layers.enable(vt),Je.viewport=new rn,H[vt]=Je),Je.matrix.fromArray(Fe.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Fe.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set($e.x,$e.y,$e.width,$e.height),vt===0&&(K.matrix.copy(Je.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Xe===!0&&K.cameras.push(Je)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const vt=_.getDepthInformation(we[0]);vt&&vt.isValid&&vt.texture&&M.init(vt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),_=s.getBinding();for(let vt=0;vt<we.length;vt++){const Fe=we[vt].camera;if(Fe){let $e=x[Fe];$e||($e=new cx,x[Fe]=$e);const Je=_.getCameraImage(Fe);$e.sourceTexture=Je}}}}for(let we=0;we<B.length;we++){const Xe=F[we],Ge=B[we];Xe!==null&&Ge!==void 0&&Ge.update(Xe,ue,p||d)}ve&&ve(ie,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const He=new fx;He.setAnimationLoop(Re),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}}const Ds=new Ea,tw=new nn;function nw(r,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,ix(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,U,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,O,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),U=O.envMap,C=O.envMapRotation;U&&(M.envMap.value=U,Ds.copy(C),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),M.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(Ds)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iw(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const C=U.program;s.uniformBlockBinding(O,C)}function p(O,U){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",M));const B=U.program;s.updateUBOMapping(O,B);const F=e.render.frame;c[O.id]!==F&&(v(O),c[O.id]=F)}function g(O){const U=_();O.__bindingPointIndex=U;const C=r.createBuffer(),B=O.__size,F=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,B,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,C),C}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=l[O.id],C=O.uniforms,B=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let F=0,I=C.length;F<I;F++){const Z=Array.isArray(C[F])?C[F]:[C[F]];for(let w=0,D=Z.length;w<D;w++){const H=Z[w];if(y(H,F,w,B)===!0){const K=H.__offset,ne=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let ce=0;ce<ne.length;ce++){const L=ne[ce],G=T(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,K+fe,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,fe),fe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,U,C,B){const F=O.value,I=U+"_"+C;if(B[I]===void 0)return typeof F=="number"||typeof F=="boolean"?B[I]=F:B[I]=F.clone(),!0;{const Z=B[I];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return B[I]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function E(O){const U=O.uniforms;let C=0;const B=16;for(let I=0,Z=U.length;I<Z;I++){const w=Array.isArray(U[I])?U[I]:[U[I]];for(let D=0,H=w.length;D<H;D++){const K=w[D],ne=Array.isArray(K.value)?K.value:[K.value];for(let fe=0,ce=ne.length;fe<ce;fe++){const L=ne[fe],G=T(L),J=C%B,me=J%G.boundary,_e=J+me;C+=me,_e!==0&&B-_e<G.storage&&(C+=B-_e),K.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=C,C+=G.storage}}}const F=C%B;return F>0&&(C+=B-F),O.__size=C,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const C=d.indexOf(U.__bindingPointIndex);d.splice(C,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const O in l)r.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function sw(){return Hi===null&&(Hi=new tb(aw,16,16,Gr,ya),Hi.name="DFG_LUT",Hi.minFilter=Bn,Hi.magFilter=Bn,Hi.wrapS=va,Hi.wrapT=va,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class rw{constructor(e={}){const{canvas:i=dE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Mi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const T=y,M=new Set([dp,fp,up]),x=new Set([Mi,Wi,il,al,lp,cp]),O=new Uint32Array(4),U=new Int32Array(4);let C=null,B=null;const F=[],I=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1;this._outputColorSpace=xi;let H=0,K=0,ne=null,fe=-1,ce=null;const L=new rn,G=new rn;let J=null;const me=new At(0);let _e=0,P=i.width,te=i.height,ve=1,Re=null,He=null;const ie=new rn(0,0,P,te),ue=new rn(0,0,P,te);let we=!1;const Xe=new ox;let Ge=!1,ht=!1;const qt=new nn,vt=new ae,Fe=new rn,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ut(){return ne===null?ve:1}let k=s;function Ut(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",lt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),k===null){const Y="webgl2";if(k=Ut(Y,R),k===null)throw Ut(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Lt("WebGLRenderer: "+R.message),R}let xt,rt,Ve,N,b,W,he,Se,de,qe,De,Ye,it,be,Te,ze,Be,Le,pt,j,Ne,Ae,Ie,Me;function ye(){xt=new s1(k),xt.init(),Ae=new KR(k,xt),rt=new KA(k,xt,e,Ae),Ve=new qR(k,xt),rt.reversedDepthBuffer&&v&&Ve.buffers.depth.setReversed(!0),N=new l1(k),b=new NR,W=new ZR(k,xt,Ve,b,rt,Ae,N),he=new QA(w),Se=new a1(w),de=new db(k),Ie=new qA(k,de),qe=new r1(k,de,N,Ie),De=new u1(k,qe,de,N),pt=new c1(k,rt,W),ze=new JA(b),Ye=new UR(w,he,Se,xt,rt,Ie,ze),it=new nw(w,b),be=new PR,Te=new GR(xt),Le=new YA(w,he,Se,Ve,De,E,m),Be=new WR(w,De,rt),Me=new iw(k,N,rt,Ve),j=new ZA(k,xt,N),Ne=new o1(k,xt,N),N.programs=Ye.programs,w.capabilities=rt,w.extensions=xt,w.properties=b,w.renderLists=be,w.shadowMap=Be,w.state=Ve,w.info=N}ye(),T!==Mi&&(Z=new d1(T,i.width,i.height,l,c));const Ce=new ew(w,k);this.xr=Ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(P,te,!1))},this.getSize=function(R){return R.set(P,te)},this.setSize=function(R,Y,oe=!0){if(Ce.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,te=Y,i.width=Math.floor(R*ve),i.height=Math.floor(Y*ve),oe===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*ve,te*ve).floor()},this.setDrawingBufferSize=function(R,Y,oe){P=R,te=Y,ve=oe,i.width=Math.floor(R*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(T===Mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,Y,oe,se){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,Y,oe,se),Ve.viewport(L.copy(ie).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,Y,oe,se){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,Y,oe,se),Ve.scissor(G.copy(ue).multiplyScalar(ve).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){Ve.setScissorTest(we=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,oe=!0){let se=0;if(R){let Q=!1;if(ne!==null){const Ue=ne.texture.format;Q=M.has(Ue)}if(Q){const Ue=ne.texture.type,ke=x.has(Ue),Oe=Le.getClearColor(),je=Le.getClearAlpha(),Ze=Oe.r,nt=Oe.g,Ke=Oe.b;ke?(O[0]=Ze,O[1]=nt,O[2]=Ke,O[3]=je,k.clearBufferuiv(k.COLOR,0,O)):(U[0]=Ze,U[1]=nt,U[2]=Ke,U[3]=je,k.clearBufferiv(k.COLOR,0,U))}else se|=k.COLOR_BUFFER_BIT}Y&&(se|=k.DEPTH_BUFFER_BIT),oe&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",lt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Le.dispose(),be.dispose(),Te.dispose(),b.dispose(),he.dispose(),Se.dispose(),De.dispose(),Ie.dispose(),Me.dispose(),Ye.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",zs),Ce.removeEventListener("sessionend",Kr),Pi.stop()};function lt(R){R.preventDefault(),b_("WebGLRenderer: Context Lost."),D=!0}function It(){b_("WebGLRenderer: Context Restored."),D=!1;const R=N.autoReset,Y=Be.enabled,oe=Be.autoUpdate,se=Be.needsUpdate,Q=Be.type;ye(),N.autoReset=R,Be.enabled=Y,Be.autoUpdate=oe,Be.needsUpdate=se,Be.type=Q}function Rt(R){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dn(R){const Y=R.target;Y.removeEventListener("dispose",Dn),bi(Y)}function bi(R){pl(R),b.remove(R)}function pl(R){const Y=b.get(R).programs;Y!==void 0&&(Y.forEach(function(oe){Ye.releaseProgram(oe)}),R.isShaderMaterial&&Ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,oe,se,Q,Ue){Y===null&&(Y=$e);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=os(R,Y,oe,se,Q);Ve.setMaterial(se,ke);let je=oe.index,Ze=1;if(se.wireframe===!0){if(je=qe.getWireframeAttribute(oe),je===void 0)return;Ze=2}const nt=oe.drawRange,Ke=oe.attributes.position;let at=nt.start*Ze,Nt=(nt.start+nt.count)*Ze;Ue!==null&&(at=Math.max(at,Ue.start*Ze),Nt=Math.min(Nt,(Ue.start+Ue.count)*Ze)),je!==null?(at=Math.max(at,0),Nt=Math.min(Nt,je.count)):Ke!=null&&(at=Math.max(at,0),Nt=Math.min(Nt,Ke.count));const Jt=Nt-at;if(Jt<0||Jt===1/0)return;Ie.setup(Q,se,Oe,oe,je);let Yt,Bt=j;if(je!==null&&(Yt=de.get(je),Bt=Ne,Bt.setIndex(Yt)),Q.isMesh)se.wireframe===!0?(Ve.setLineWidth(se.wireframeLinewidth*ut()),Bt.setMode(k.LINES)):Bt.setMode(k.TRIANGLES);else if(Q.isLine){let et=se.linewidth;et===void 0&&(et=1),Ve.setLineWidth(et*ut()),Q.isLineSegments?Bt.setMode(k.LINES):Q.isLineLoop?Bt.setMode(k.LINE_LOOP):Bt.setMode(k.LINE_STRIP)}else Q.isPoints?Bt.setMode(k.POINTS):Q.isSprite&&Bt.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const et=Q._multiDrawStarts,Ot=Q._multiDrawCounts,ct=Q._multiDrawCount,Sn=je?de.get(je).bytesPerElement:1,qi=b.get(se).currentProgram.getUniforms();for(let yn=0;yn<ct;yn++)qi.setValue(k,"_gl_DrawID",yn),Bt.render(et[yn]/Sn,Ot[yn])}else if(Q.isInstancedMesh)Bt.renderInstances(at,Jt,Q.count);else if(oe.isInstancedBufferGeometry){const et=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ot=Math.min(oe.instanceCount,et);Bt.renderInstances(at,Jt,Ot)}else Bt.render(at,Jt)};function qr(R,Y,oe){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Gs(R,Y,oe),R.side=rs,R.needsUpdate=!0,Gs(R,Y,oe),R.side=_a):Gs(R,Y,oe)}this.compile=function(R,Y,oe=null){oe===null&&(oe=R),B=Te.get(oe),B.init(Y),I.push(B),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),R!==oe&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),B.setupLights();const se=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let ke=0;ke<Ue.length;ke++){const Oe=Ue[ke];qr(Oe,oe,Q),se.add(Oe)}else qr(Ue,oe,Q),se.add(Ue)}),B=I.pop(),se},this.compileAsync=function(R,Y,oe=null){const se=this.compile(R,Y,oe);return new Promise(Q=>{function Ue(){if(se.forEach(function(ke){b.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){Q(R);return}setTimeout(Ue,10)}xt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Fs=null;function Zr(R){Fs&&Fs(R)}function zs(){Pi.stop()}function Kr(){Pi.start()}const Pi=new fx;Pi.setAnimationLoop(Zr),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Fs=R,Ce.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},Ce.addEventListener("sessionstart",zs),Ce.addEventListener("sessionend",Kr),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const oe=Ce.enabled===!0&&Ce.isPresenting===!0,se=Z!==null&&(ne===null||oe)&&Z.begin(w,ne);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Y),Y=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,ne),B=Te.get(R,I.length),B.init(Y),I.push(B),qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xe.setFromProjectionMatrix(qt,ki,Y.reversedDepth),ht=this.localClippingEnabled,Ge=ze.init(this.clippingPlanes,ht),C=be.get(R,F.length),C.init(),F.push(C),Ce.enabled===!0&&Ce.isPresenting===!0){const ke=w.xr.getDepthSensingMesh();ke!==null&&li(ke,Y,-1/0,w.sortObjects)}li(R,Y,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(Re,He),Je=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Je&&Le.addToRenderList(C,R),this.info.render.frame++,Ge===!0&&ze.beginShadows();const Q=B.state.shadowsArray;if(Be.render(Q,R,Y),Ge===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&Z.hasRenderPass())===!1){const ke=C.opaque,Oe=C.transmissive;if(B.setupLights(),Y.isArrayCamera){const je=Y.cameras;if(Oe.length>0)for(let Ze=0,nt=je.length;Ze<nt;Ze++){const Ke=je[Ze];xn(ke,Oe,R,Ke)}Je&&Le.render(R);for(let Ze=0,nt=je.length;Ze<nt;Ze++){const Ke=je[Ze];on(C,R,Ke,Ke.viewport)}}else Oe.length>0&&xn(ke,Oe,R,Y),Je&&Le.render(R),on(C,R,Y)}ne!==null&&K===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),se&&Z.end(w),R.isScene===!0&&R.onAfterRender(w,R,Y),Ie.resetDefaultState(),fe=-1,ce=null,I.pop(),I.length>0?(B=I[I.length-1],Ge===!0&&ze.setGlobalState(w.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?C=F[F.length-1]:C=null};function li(R,Y,oe,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){se&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qt);const ke=De.update(R),Oe=R.material;Oe.visible&&C.push(R,ke,Oe,oe,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const ke=De.update(R),Oe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Fe.copy(ke.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(qt)),Array.isArray(Oe)){const je=ke.groups;for(let Ze=0,nt=je.length;Ze<nt;Ze++){const Ke=je[Ze],at=Oe[Ke.materialIndex];at&&at.visible&&C.push(R,ke,at,oe,Fe.z,Ke)}}else Oe.visible&&C.push(R,ke,Oe,oe,Fe.z,null)}}const Ue=R.children;for(let ke=0,Oe=Ue.length;ke<Oe;ke++)li(Ue[ke],Y,oe,se)}function on(R,Y,oe,se){const{opaque:Q,transmissive:Ue,transparent:ke}=R;B.setupLightsView(oe),Ge===!0&&ze.setGlobalState(w.clippingPlanes,oe),se&&Ve.viewport(L.copy(se)),Q.length>0&&Ti(Q,Y,oe),Ue.length>0&&Ti(Ue,Y,oe),ke.length>0&&Ti(ke,Y,oe),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function xn(R,Y,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[se.id]===void 0){const at=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[se.id]=new ji(1,1,{generateMipmaps:!0,type:at?ya:Mi,minFilter:Ps,samples:rt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ue=B.state.transmissionRenderTarget[se.id],ke=se.viewport||L;Ue.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);const Oe=w.getRenderTarget(),je=w.getActiveCubeFace(),Ze=w.getActiveMipmapLevel();w.setRenderTarget(Ue),w.getClearColor(me),_e=w.getClearAlpha(),_e<1&&w.setClearColor(16777215,.5),w.clear(),Je&&Le.render(oe);const nt=w.toneMapping;w.toneMapping=Xi;const Ke=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),B.setupLightsView(se),Ge===!0&&ze.setGlobalState(w.clippingPlanes,se),Ti(R,oe,se),W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue),xt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Nt=0,Jt=Y.length;Nt<Jt;Nt++){const Yt=Y[Nt],{object:Bt,geometry:et,material:Ot,group:ct}=Yt;if(Ot.side===_a&&Bt.layers.test(se.layers)){const Sn=Ot.side;Ot.side=Kn,Ot.needsUpdate=!0,Hs(Bt,oe,se,et,Ot,ct),Ot.side=Sn,Ot.needsUpdate=!0,at=!0}}at===!0&&(W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue))}w.setRenderTarget(Oe,je,Ze),w.setClearColor(me,_e),Ke!==void 0&&(se.viewport=Ke),w.toneMapping=nt}function Ti(R,Y,oe){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ue=R.length;Q<Ue;Q++){const ke=R[Q],{object:Oe,geometry:je,group:Ze}=ke;let nt=ke.material;nt.allowOverride===!0&&se!==null&&(nt=se),Oe.layers.test(oe.layers)&&Hs(Oe,Y,oe,je,nt,Ze)}}function Hs(R,Y,oe,se,Q,Ue){R.onBeforeRender(w,Y,oe,se,Q,Ue),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Y,oe,se,R,Ue),Q.transparent===!0&&Q.side===_a&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,w.renderBufferDirect(oe,Y,se,Q,R,Ue),Q.side=rs,Q.needsUpdate=!0,w.renderBufferDirect(oe,Y,se,Q,R,Ue),Q.side=_a):w.renderBufferDirect(oe,Y,se,Q,R,Ue),R.onAfterRender(w,Y,oe,se,Q,Ue)}function Gs(R,Y,oe){Y.isScene!==!0&&(Y=$e);const se=b.get(R),Q=B.state.lights,Ue=B.state.shadowsArray,ke=Q.state.version,Oe=Ye.getParameters(R,Q.state,Ue,Y,oe),je=Ye.getProgramCacheKey(Oe);let Ze=se.programs;se.environment=R.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(R.isMeshStandardMaterial?Se:he).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",Dn),Ze=new Map,se.programs=Ze);let nt=Ze.get(je);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===ke)return Jr(R,Oe),nt}else Oe.uniforms=Ye.getUniforms(R),R.onBeforeCompile(Oe,w),nt=Ye.acquireProgram(Oe,je),Ze.set(je,nt),se.uniforms=Oe.uniforms;const Ke=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=ze.uniform),Jr(R,Oe),se.needsLights=Aa(R),se.lightsStateVersion=ke,se.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMap.value=Q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotShadowMap.value=Q.state.spotShadowMap,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMap.value=Q.state.pointShadowMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function ml(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=iu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Jr(R,Y){const oe=b.get(R);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function os(R,Y,oe,se,Q){Y.isScene!==!0&&(Y=$e),W.resetTextureUnits();const Ue=Y.fog,ke=se.isMeshStandardMaterial?Y.environment:null,Oe=ne===null?w.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Vr,je=(se.isMeshStandardMaterial?Se:he).get(se.envMap||ke),Ze=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ke=!!oe.morphAttributes.position,at=!!oe.morphAttributes.normal,Nt=!!oe.morphAttributes.color;let Jt=Xi;se.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Jt=w.toneMapping);const Yt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Bt=Yt!==void 0?Yt.length:0,et=b.get(se),Ot=B.state.lights;if(Ge===!0&&(ht===!0||R!==ce)){const En=R===ce&&se.id===fe;ze.setState(se,R,En)}let ct=!1;se.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ot.state.version||et.outputColorSpace!==Oe||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==je||se.fog===!0&&et.fog!==Ue||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ze.numPlanes||et.numIntersection!==ze.numIntersection)||et.vertexAlphas!==Ze||et.vertexTangents!==nt||et.morphTargets!==Ke||et.morphNormals!==at||et.morphColors!==Nt||et.toneMapping!==Jt||et.morphTargetsCount!==Bt)&&(ct=!0):(ct=!0,et.__version=se.version);let Sn=et.currentProgram;ct===!0&&(Sn=Gs(se,Y,Q));let qi=!1,yn=!1,ci=!1;const Ft=Sn.getUniforms(),Mn=et.uniforms;if(Ve.useProgram(Sn.program)&&(qi=!0,yn=!0,ci=!0),se.id!==fe&&(fe=se.id,yn=!0),qi||ce!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(k,"projectionMatrix",R.projectionMatrix),Ft.setValue(k,"viewMatrix",R.matrixWorldInverse);const bn=Ft.map.cameraPosition;bn!==void 0&&bn.setValue(k,vt.setFromMatrixPosition(R.matrixWorld)),rt.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,yn=!0,ci=!0)}if(et.needsLights&&(Ot.state.directionalShadowMap.length>0&&Ft.setValue(k,"directionalShadowMap",Ot.state.directionalShadowMap,W),Ot.state.spotShadowMap.length>0&&Ft.setValue(k,"spotShadowMap",Ot.state.spotShadowMap,W),Ot.state.pointShadowMap.length>0&&Ft.setValue(k,"pointShadowMap",Ot.state.pointShadowMap,W)),Q.isSkinnedMesh){Ft.setOptional(k,Q,"bindMatrix"),Ft.setOptional(k,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ft.setValue(k,"boneTexture",En.boneTexture,W))}Q.isBatchedMesh&&(Ft.setOptional(k,Q,"batchingTexture"),Ft.setValue(k,"batchingTexture",Q._matricesTexture,W),Ft.setOptional(k,Q,"batchingIdTexture"),Ft.setValue(k,"batchingIdTexture",Q._indirectTexture,W),Ft.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(k,"batchingColorTexture",Q._colorsTexture,W));const hn=oe.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&pt.update(Q,oe,Sn),(yn||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,Ft.setValue(k,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Mn.envMap.value=je,Mn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Mn.envMapIntensity.value=Y.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=sw()),yn&&(Ft.setValue(k,"toneMappingExposure",w.toneMappingExposure),et.needsLights&&Qr(Mn,ci),Ue&&se.fog===!0&&it.refreshFogUniforms(Mn,Ue),it.refreshMaterialUniforms(Mn,se,ve,te,B.state.transmissionRenderTarget[R.id]),iu.upload(k,ml(et),Mn,W)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(iu.upload(k,ml(et),Mn,W),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ft.setValue(k,"center",Q.center),Ft.setValue(k,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(k,"normalMatrix",Q.normalMatrix),Ft.setValue(k,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const En=se.uniformsGroups;for(let bn=0,Vs=En.length;bn<Vs;bn++){const Ai=En[bn];Me.update(Ai,Sn),Me.bind(Ai,Sn)}}return Sn}function Qr(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(R,Y,oe){const se=b.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Y,b.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const oe=b.get(R);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Ra=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,oe=0){ne=R,H=Y,K=oe;let se=null,Q=!1,Ue=!1;if(R){const Oe=b.get(R);if(Oe.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(k.FRAMEBUFFER,Oe.__webglFramebuffer),L.copy(R.viewport),G.copy(R.scissor),J=R.scissorTest,Ve.viewport(L),Ve.scissor(G),Ve.setScissorTest(J),fe=-1;return}else if(Oe.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Oe.__hasExternalTextures)W.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const nt=R.depthTexture;if(Oe.__boundDepthTexture!==nt){if(nt!==null&&b.has(nt)&&(R.width!==nt.image.width||R.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ue=!0);const Ze=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[Y])?se=Ze[Y][oe]:se=Ze[Y],Q=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?se=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[oe]:se=Ze,L.copy(R.viewport),G.copy(R.scissor),J=R.scissorTest}else L.copy(ie).multiplyScalar(ve).floor(),G.copy(ue).multiplyScalar(ve).floor(),J=we;if(oe!==0&&(se=Ra),Ve.bindFramebuffer(k.FRAMEBUFFER,se)&&Ve.drawBuffers(R,se),Ve.viewport(L),Ve.scissor(G),Ve.setScissorTest(J),Q){const Oe=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,oe)}else if(Ue){const Oe=Y;for(let je=0;je<R.textures.length;je++){const Ze=b.get(R.textures[je]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+je,Ze.__webglTexture,oe,Oe)}}else if(R!==null&&oe!==0){const Oe=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,oe)}fe=-1},this.readRenderTargetPixels=function(R,Y,oe,se,Q,Ue,ke,Oe=0){if(!(R&&R.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){Ve.bindFramebuffer(k.FRAMEBUFFER,je);try{const Ze=R.textures[Oe],nt=Ze.format,Ke=Ze.type;if(!rt.textureFormatReadable(nt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ke)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&oe>=0&&oe<=R.height-Q&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Y,oe,se,Q,Ae.convert(nt),Ae.convert(Ke),Ue))}finally{const Ze=ne!==null?b.get(ne).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,Y,oe,se,Q,Ue,ke,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je)if(Y>=0&&Y<=R.width-se&&oe>=0&&oe<=R.height-Q){Ve.bindFramebuffer(k.FRAMEBUFFER,je);const Ze=R.textures[Oe],nt=Ze.format,Ke=Ze.type;if(!rt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.bufferData(k.PIXEL_PACK_BUFFER,Ue.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Y,oe,se,Q,Ae.convert(nt),Ae.convert(Ke),0);const Nt=ne!==null?b.get(ne).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,Nt);const Jt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await hE(k,Jt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ue),k.deleteBuffer(at),k.deleteSync(Jt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,oe=0){const se=Math.pow(2,-oe),Q=Math.floor(R.image.width*se),Ue=Math.floor(R.image.height*se),ke=Y!==null?Y.x:0,Oe=Y!==null?Y.y:0;W.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,oe,0,0,ke,Oe,Q,Ue),Ve.unbindTexture()};const ls=k.createFramebuffer(),wa=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,oe=null,se=null,Q=0,Ue=null){Ue===null&&(Q!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let ke,Oe,je,Ze,nt,Ke,at,Nt,Jt;const Yt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(oe!==null)ke=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,je=oe.isBox3?oe.max.z-oe.min.z:1,Ze=oe.min.x,nt=oe.min.y,Ke=oe.isBox3?oe.min.z:0;else{const hn=Math.pow(2,-Q);ke=Math.floor(Yt.width*hn),Oe=Math.floor(Yt.height*hn),R.isDataArrayTexture?je=Yt.depth:R.isData3DTexture?je=Math.floor(Yt.depth*hn):je=1,Ze=0,nt=0,Ke=0}se!==null?(at=se.x,Nt=se.y,Jt=se.z):(at=0,Nt=0,Jt=0);const Bt=Ae.convert(Y.format),et=Ae.convert(Y.type);let Ot;Y.isData3DTexture?(W.setTexture3D(Y,0),Ot=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ot=k.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ot=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const ct=k.getParameter(k.UNPACK_ROW_LENGTH),Sn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qi=k.getParameter(k.UNPACK_SKIP_PIXELS),yn=k.getParameter(k.UNPACK_SKIP_ROWS),ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ke);const Ft=R.isDataArrayTexture||R.isData3DTexture,Mn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const hn=b.get(R),En=b.get(Y),bn=b.get(hn.__renderTarget),Vs=b.get(En.__renderTarget);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let Ai=0;Ai<je;Ai++)Ft&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(R).__webglTexture,Q,Ke+Ai),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Ue,Jt+Ai)),k.blitFramebuffer(Ze,nt,ke,Oe,at,Nt,ke,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||b.has(R)){const hn=b.get(R),En=b.get(Y);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,ls),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,wa);for(let bn=0;bn<je;bn++)Ft?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,hn.__webglTexture,Q,Ke+bn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,hn.__webglTexture,Q),Mn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,En.__webglTexture,Ue,Jt+bn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,En.__webglTexture,Ue),Q!==0?k.blitFramebuffer(Ze,nt,ke,Oe,at,Nt,ke,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):Mn?k.copyTexSubImage3D(Ot,Ue,at,Nt,Jt+bn,Ze,nt,ke,Oe):k.copyTexSubImage2D(Ot,Ue,at,Nt,Ze,nt,ke,Oe);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ot,Ue,at,Nt,Jt,ke,Oe,je,Bt,et,Yt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Ot,Ue,at,Nt,Jt,ke,Oe,je,Bt,Yt.data):k.texSubImage3D(Ot,Ue,at,Nt,Jt,ke,Oe,je,Bt,et,Yt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ue,at,Nt,ke,Oe,Bt,et,Yt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ue,at,Nt,Yt.width,Yt.height,Bt,Yt.data):k.texSubImage2D(k.TEXTURE_2D,Ue,at,Nt,ke,Oe,Bt,et,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ct),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Sn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qi),k.pixelStorei(k.UNPACK_SKIP_ROWS,yn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ci),Ue===0&&Y.generateMipmaps&&k.generateMipmap(Ot),Ve.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){H=0,K=0,ne=null,Ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const sh={main:"#e7e5e1",about:"#080808",portfolio:"#101012"},rh={main:13,about:11,portfolio:15};function qn(r,e,i){return r+(e-r)*i}function ow({scene:r,anchors:e,pointerRef:i,dragRef:s,zoomRef:l,hoverRef:c,labelEls:d}){const h=Ee.useRef(null),m=Ee.useRef(r),p=Ee.useRef(e);return Ee.useEffect(()=>{m.current=r},[r]),Ee.useEffect(()=>{p.current=e},[e]),Ee.useEffect(()=>{const g=h.current;if(!g)return;const _=new rw({antialias:!0,alpha:!1});_.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),_.setSize(g.clientWidth,g.clientHeight),g.appendChild(_.domElement);const v=new eb,y=new At(sh.main);v.background=y,v.fog=new lu(sh.about,.02);const E=new yi(52,g.clientWidth/g.clientHeight,.1,200);E.position.set(0,0,rh.main);const T=new Br;v.add(T);const M=1600,x=new Float32Array(M*3);for(let Fe=0;Fe<M;Fe++){const $e=12+Math.random()*46,Je=Math.random()*Math.PI*2,ut=Math.acos(2*Math.random()-1);x[Fe*3]=$e*Math.sin(ut)*Math.cos(Je),x[Fe*3+1]=$e*Math.sin(ut)*Math.sin(Je),x[Fe*3+2]=$e*Math.cos(ut)}const O=new On;O.setAttribute("position",new Ei(x,3));const U=new tp({color:16777215,size:.05,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1}),C=new Y_(O,U);T.add(C);const B=200,F=[];for(let Fe=0;Fe<B;Fe++)F.push(new ae((Math.random()-.5)*26,(Math.random()-.5)*16,(Math.random()-.5)*22));const I=[];for(let Fe=0;Fe<B;Fe++){let $e=0;for(let Je=Fe+1;Je<B&&$e<3;Je++)F[Fe].distanceTo(F[Je])<4.6&&(I.push(F[Fe].x,F[Fe].y,F[Fe].z,F[Je].x,F[Je].y,F[Je].z),$e++)}const Z=new On;Z.setAttribute("position",new Jn(I,3));const w=new nu({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),D=new Qd(Z,w);T.add(D);const H=new On;H.setAttribute("position",new Jn(F.flatMap(Fe=>[Fe.x,Fe.y,Fe.z]),3));const K=new tp({color:16777215,size:.08,transparent:!0,opacity:0,depthWrite:!1}),ne=new Y_(H,K);T.add(ne);const fe=new Br;T.add(fe);const ce=new nu({color:1710618,transparent:!0,opacity:.35}),L=()=>{for(let ut=fe.children.length-1;ut>=0;ut--){const k=fe.children[ut];fe.remove(k),k instanceof lx&&k.geometry.dispose()}const Fe=[];p.current.forEach(ut=>{Fe.push(0,0,0,ut.position[0],ut.position[1],ut.position[2])});const $e=new On;$e.setAttribute("position",new Jn(Fe,3));const Je=new Qd($e,ce);fe.add(Je)};L();let G=p.current;const J=4,me=new Float32Array(J*2*3),_e=new On;_e.setAttribute("position",new Ei(me,3));const P=new nu({color:new At("#ffffff"),transparent:!0,opacity:0,depthWrite:!1}),te=new Qd(_e,P);te.frustumCulled=!1,te.renderOrder=8,T.add(te);let ve=null;const Re=Fe=>{const $e=p.current,Je=Fe?$e.find(rt=>rt.id===Fe):void 0;if(!Je)return;const[ut,k,Ut]=Je.position,xt=$e.filter(rt=>rt.id!==Fe).map(rt=>{const Ve=rt.position[0]-ut,N=rt.position[1]-k,b=rt.position[2]-Ut;return{a:rt,d:Ve*Ve+N*N+b*b}}).sort((rt,Ve)=>rt.d-Ve.d).slice(0,J-1).map(rt=>rt.a);me.fill(0),me[3]=ut,me[4]=k,me[5]=Ut,xt.forEach((rt,Ve)=>{const N=(Ve+1)*6;me[N]=ut,me[N+1]=k,me[N+2]=Ut,me[N+3]=rt.position[0],me[N+4]=rt.position[1],me[N+5]=rt.position[2]}),_e.attributes.position.needsUpdate=!0,_e.setDrawRange(0,(xt.length+1)*2)},He=new ub;let ie=0;const ue={x:0,y:0},we=new ae,Xe=new At;let Ge=rh.main,ht=1;const qt=()=>{ie=requestAnimationFrame(qt);const Fe=He.getElapsedTime(),$e=m.current;p.current!==G&&(L(),G=p.current),Xe.set(sh[$e]),y.lerp(Xe,.04),v.fog instanceof lu&&(v.fog.color.copy(y),v.fog.density=qn(v.fog.density,$e==="main"?.008:.026,.04)),Ge=qn(Ge,rh[$e],.04);const Je=$e==="main"?0:.9;U.opacity=qn(U.opacity,Je,.045),K.opacity=qn(K.opacity,Je*.7,.045),w.opacity=qn(w.opacity,$e==="about"?.12:$e==="portfolio"?.04:0,.045),ce.opacity=qn(ce.opacity,$e==="main"?.35:0,.06);const ut=c.current;ut!==ve&&(ve=ut,ut&&Re(ut)),P.color.set($e==="main"?"#141414":"#ffffff"),P.opacity=qn(P.opacity,ut?.9:0,.16),te.visible=P.opacity>.02,fe.visible=ce.opacity>.02;const k=i.current,Ut=s.current,xt=$e==="about"?.05:.25,rt=$e==="about"?.04:.18;ue.x=qn(ue.x,Ut.x,.09),ue.y=qn(ue.y,Ut.y,.09);const Ve=k.x*xt+ue.x,N=-k.y*rt+ue.y;T.rotation.y=qn(T.rotation.y,Ve,.08),T.rotation.x=qn(T.rotation.x,N,.08),ht=qn(ht,l.current,.1),E.position.z=Ge*ht,E.position.x=qn(E.position.x,k.x*.6,.05),E.position.y=qn(E.position.y,-k.y*.4,.05),E.lookAt(0,0,0),C.rotation.y=Fe*.01,D.rotation.y=Fe*.014,ne.rotation.y=Fe*.014;const b=_.domElement.clientWidth,W=_.domElement.clientHeight;p.current.forEach(he=>{const Se=d.current.get(he.id);if(!Se)return;we.set(he.position[0],he.position[1],he.position[2]),we.applyMatrix4(T.matrixWorld);const de=E.position.distanceTo(we);we.project(E);const qe=we.z>1,De=(we.x*.5+.5)*b,Ye=(-we.y*.5+.5)*W;Se.style.transform=`translate(-50%, -50%) translate(${De}px, ${Ye}px)`;const it=DE.clamp(1-(de-6)/22,.12,1);Se.style.opacity=qe?"0":String(it),Se.style.pointerEvents=qe||it<.3?"none":"auto"}),_.render(v,E)};qt();const vt=()=>{const Fe=g.clientWidth,$e=g.clientHeight;_.setSize(Fe,$e),E.aspect=Fe/$e,E.updateProjectionMatrix()};return window.addEventListener("resize",vt),()=>{cancelAnimationFrame(ie),window.removeEventListener("resize",vt),_.dispose(),O.dispose(),U.dispose(),Z.dispose(),w.dispose(),H.dispose(),K.dispose(),_e.dispose(),P.dispose(),ce.dispose(),_.domElement.parentNode===g&&g.removeChild(_.domElement)}},[i,s,l,c,d]),z.jsx("div",{className:"constellation-canvas",ref:h,"aria-hidden":"true"})}function lw(){const r=Ee.useRef(null);return Ee.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const i=r.current;if(!i)return;document.body.classList.add("reticle-active");let s=!1,l=null;const c=p=>{if(i.style.transform=`translate3d(${p.clientX}px, ${p.clientY}px, 0) translate(-50%, -50%)`,s||(s=!0,i.classList.add("is-visible")),p.target!==l){l=p.target;const _=!!p.target?.closest('a, button, [role="button"], input, textarea, [data-hover]');i.classList.toggle("is-active",_)}},d=()=>{s=!1,i.classList.remove("is-visible")},h=()=>{i.classList.remove("did-click"),i.classList.add("is-pressed")},m=()=>{i.classList.remove("is-pressed"),i.classList.add("did-click"),window.setTimeout(()=>i.classList.remove("did-click"),420)};return window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("mousedown",h),window.addEventListener("mouseup",m),document.addEventListener("mouseleave",d),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mousedown",h),window.removeEventListener("mouseup",m),document.removeEventListener("mouseleave",d),document.body.classList.remove("reticle-active")}},[]),z.jsxs("div",{className:"reticle",ref:r,"aria-hidden":"true",children:[z.jsxs("span",{className:"reticle-box",children:[z.jsx("span",{className:"reticle-corner tl"}),z.jsx("span",{className:"reticle-corner tr"}),z.jsx("span",{className:"reticle-corner bl"}),z.jsx("span",{className:"reticle-corner br"})]}),z.jsx("span",{className:"reticle-ring"}),z.jsx("span",{className:"reticle-dot"})]})}const Zc=[{name:"League Of Legends @adesso",description:"Ein React Playground in Form einer League of Legends Team-Maker Web-App. Die Anwendung ermöglicht es, zwei Teams zu erstellen, Spieler hinzuzufügen und (ehemals) mithilfe einer KI faire Teams basierend auf Spieler-Daten zu generieren. Das Projekt dient sowohl als Lern- & Experimentierumgebung als auch als Funktions-Prototyp.",descriptionEn:"A React playground in the form of a League of Legends team-maker web app. The app lets you create two teams, add players, and (formerly) uses AI to generate fair teams based on player data. The project serves both as a learning & experimentation environment and as a functional prototype.",tech:"React, Vite, JavaScript, Tailwind CSS",link:"https://jsnuwu.github.io/react-playground/"},{name:"OnlineShopVue.js",description:"Dieses Projekt ist ein moderner, interaktiver Online-Shop für Bekleidung und Accessoires, entwickelt mit Vue 3, Pinia und Tailwind CSS. Es bietet eine benutzerfreundliche Oberfläche, die es Kunden ermöglicht, Produkte detailliert zu konfigurieren, bevor sie sie in den Warenkorb legen.",descriptionEn:"This project is a modern, interactive online shop for clothing and accessories, built with Vue 3, Pinia and Tailwind CSS. It offers a user-friendly interface that lets customers configure products in detail before adding them to the cart.",tech:"Vue.js, Pinia, Tailwind CSS, TypeScript, Vite",link:"https://jsnuwu.github.io/OnlineShopVue.js/"},{name:"Placeholder",description:"Ein React Three Fiber Experiment: eine kleine 3D-Szene mit Himmel, Haus und zufällig platzierten Bäumen, durch die man sich per WASD und Sprung frei bewegen kann · mit Pointer-Lock-Kamera wie in einem Ego-Shooter. Reines Spiel- und Lernprojekt ohne festen Zweck.",descriptionEn:"A React Three Fiber experiment: a small 3D scene with a sky, a house, and randomly placed trees you can walk through freely with WASD and jump · pointer-lock camera, like a first-person game. A pure playground / learning project with no fixed purpose.",tech:"React, Three.js, React Three Fiber, TypeScript",link:"https://jsnuwu.github.io/PLACEHOLDER/"},{name:"Flappy Game",description:"Ein Flappy-Bird-Klon, gebaut mit Angular. Der Vogel wird per Klick/Tastendruck durch eine Reihe von Rohr-Hindernissen gesteuert, während im Hintergrund der Score mitgezählt wird. Erreichte Highscores werden in einem lokalen Leaderboard gespeichert.",descriptionEn:"A Flappy Bird clone built with Angular. The bird is steered through a series of pipe obstacles via click/keypress while the score is tracked in the background. High scores are saved to a local leaderboard.",tech:"Angular, TypeScript, RxJS",link:"https://jsnuwu.github.io/flappy-game/"},{name:"3D Earth",description:"Dieses Projekt ist ein Three.js Playground, in dem ich mit 3D-Grafiken im Web experimentiert habe. Konkret wurde eine 3D-Erdkugel umgesetzt, um Grundlagen von Three.js, Szenen, Kameras und Animationen zu testen. Das Repository ist als Experiment / Lernprojekt gedacht.",descriptionEn:"This project is a Three.js playground where I experimented with 3D graphics on the web. Specifically, I built a 3D globe to test the basics of Three.js, scenes, cameras and animations. The repository is meant as an experiment / learning project.",tech:"Three.js, JavaScript, HTML/CSS",link:"https://jsnuwu.github.io/Earth/"},{name:"Flowers",description:"Ein kleines CSS/JavaScript-Experiment ganz ohne Framework: Ein Klick auf den Button lässt vor einem animierten Sternenhimmel eine leuchtende Blume wachsen und aufblühen. Reine Spielerei mit CSS-Animationen und Timing.",descriptionEn:"A small CSS/JavaScript experiment with no framework at all: clicking the button grows and blooms a glowing flower in front of an animated starry sky. Pure play with CSS animations and timing.",tech:"HTML, CSS, JavaScript",link:"https://jsnuwu.github.io/Flowers/"},{name:"About Me Page (old)",description:"Dieses Repository enthält eine kurze „About Me“-Präsentation, die ich im Rahmen einer internen Vorstellung vor meinen Führungskräften gehalten habe. Ziel war es, einen Überblick über meine Person, meine Arbeitsweise und meine Schwerpunkte zu geben · kompakt und auf den Punkt. Das Projekt dient ausschließlich Dokumentations- und Referenzzwecken.",descriptionEn:"This repository contains a short 'About Me' presentation I gave as part of an internal introduction to my managers. The goal was to give an overview of who I am, how I work and my focus areas · compact and to the point. The project serves purely documentation and reference purposes.",tech:"Angular, TypeScript, HTML/CSS",link:"https://jsnuwu.github.io/AboutMe/"}],xv=["FRONTEND","BACKEND","DESIGN","CONTENT CREATION","SOCIAL MEDIA","VIDEO EDITING","UI / UX","BRANDING"],cw=["PHOTOGRAPHY","MOTION","LAYOUT","TYPOGRAPHY","PROTOTYPING","WEB"];function uw(r){return{name:"JASON BAY",tagline:"Frontend Developer"}}function fw(r){const e=cw,i=Math.PI*2/xv.length,s=xv.map((d,h)=>({label:d,strong:!0,angle:h*i-Math.PI/2+.12,radius:4.6+h%2*.35,depth:Math.sin(h*1.3)*.9})),l=Math.PI*2/e.length,c=e.map((d,h)=>({label:d,strong:!1,angle:h*l-Math.PI/2+l/2,radius:6.6+h%2*.5,depth:(h%2===0?-1:1)*(1.9+h%3*.5)}));return[...s,...c]}function dw(r){const e=r==="de",i=[{id:"about",label:e?"ÜBER MICH":"ABOUT",scale:1.15},{id:"work",label:"PORTFOLIO",scale:1.35},{id:"skills",label:"SKILLS",scale:.9},{id:"experience",label:e?"WERDEGANG":"EXPERIENCE",scale:1.3},{id:"gallery",label:e?"GALERIE":"GALLERY",scale:.95},{id:"social",label:"SOCIAL MEDIA",scale:1},{id:"languages",label:e?"SPRACHEN":"LANGUAGES",scale:.8},{id:"contact",label:e?"KONTAKT":"CONTACT",scale:1.05}],s=5.4,l=Math.PI*(3-Math.sqrt(5)),c=i.length;return i.map((d,h)=>{const m=1-h/(c-1)*2,p=Math.sqrt(Math.max(0,1-m*m)),g=l*h;return{...d,position:[Math.cos(g)*p*s,m*s*.72,Math.sin(g)*p*s]}})}function Sv(){return[{label:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu"},{label:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu"},{label:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/"},{label:"YouTube",handle:"@jsnuwu",href:"https://www.youtube.com/@jsnuwu"},{label:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/"}]}const yv="jasonbay05@gmail.com";var hw=Tv();const pw="/JasonBay.dev/assets/pet1-CJIk-0xw.jpeg",mw="/JasonBay.dev/assets/pet2-DJUnXQFB.jpeg",gw="/JasonBay.dev/assets/pet3-DuVC4YnI.jpeg",_w="/JasonBay.dev/assets/pet4-CHYLq3zJ.jpeg",vw="/JasonBay.dev/assets/pet5-CXqwbWPQ.jpeg",xw="/JasonBay.dev/assets/pet6-BueucAZG.jpeg",Sw="/JasonBay.dev/assets/pet7-sMwNsGXX.jpeg",yw="/JasonBay.dev/assets/pet8-BumEY2lT.jpeg",Mw="/JasonBay.dev/assets/pet9-kBF7FpHN.jpeg",Ew="/JasonBay.dev/assets/pet10-CvKpPrae.jpeg",bw="/JasonBay.dev/assets/pet12-CisWE0fr.jpeg",Tw="/JasonBay.dev/assets/pet13-DhrBnIH-.jpeg",Aw="/JasonBay.dev/assets/pet14-DlldvXUI.jpeg",Rw="/JasonBay.dev/assets/motorcycle4-DGuskHns.jpeg",ww="/JasonBay.dev/assets/motorcycle6-BH0Osdd9.jpeg",Cw="/JasonBay.dev/assets/motorcycle7-Bafr5Mxu.jpeg",Dw="/JasonBay.dev/assets/motorcycle8-d3KG3SZS.jpeg",Lw="/JasonBay.dev/assets/motorcycle9-DUGtGDMJ.jpeg",Uw="/JasonBay.dev/assets/motorcycle11-DPgTw-cD.jpeg",Nw="/JasonBay.dev/assets/motorcycle12-B8f8esd4.jpeg",Ow="/JasonBay.dev/assets/motorcycle13-CFp8o_cV.jpeg",Pw="/JasonBay.dev/assets/motorcycle14-DI4wEwVY.jpeg",Bw="/JasonBay.dev/assets/motorcycle15-D07o_jxR.jpeg",Iw="/JasonBay.dev/assets/motorcycle17-BvWXS7lH.jpeg",Fw="/JasonBay.dev/assets/motorcycle18-DWw56N-S.jpeg",zw="/JasonBay.dev/assets/motorcycle19-B2kCryYc.jpeg",Hw="/JasonBay.dev/assets/motorcycle20-De6XRn6Y.jpeg",Gw="/JasonBay.dev/assets/motorcycle21-DtMrq1gx.jpeg",Vw="/JasonBay.dev/assets/me1-8Tr4emsB.jpeg",kw="/JasonBay.dev/assets/me2-CN9YxVa4.jpeg",Xw="/JasonBay.dev/assets/me3-DPw3t2BW.jpg",jw="/JasonBay.dev/assets/me5-Bbzvrqvc.jpg",Ww="/JasonBay.dev/assets/me6-DqKQgXcy.jpeg",Yw="/JasonBay.dev/assets/hike1-DCzYhsBt.jpg",qw="/JasonBay.dev/assets/hike2-CtVO84a1.jpg",Zw="/JasonBay.dev/assets/hike3-BBY1Ubv3.jpg",Kw="/JasonBay.dev/assets/hike4-BOHadOKi.jpg",Jw="/JasonBay.dev/assets/hike5-BzRShkdi.jpg",Qw="/JasonBay.dev/assets/hike6-CclUWBBp.jpg",$w="/JasonBay.dev/assets/hike8-BnzcehXs.jpg",eC="/JasonBay.dev/assets/hike9-BuOeSFVN.jpg",tC=[{img:pw,cat:"pets"},{img:mw,cat:"pets"},{img:gw,cat:"pets"},{img:_w,cat:"pets"},{img:vw,cat:"pets"},{img:xw,cat:"pets"},{img:Sw,cat:"pets"},{img:yw,cat:"pets"},{img:Mw,cat:"pets"},{img:Ew,cat:"pets"},{img:bw,cat:"pets"},{img:Tw,cat:"pets"},{img:Aw,cat:"pets"},{img:Rw,cat:"moto"},{img:ww,cat:"moto"},{img:Cw,cat:"moto"},{img:Dw,cat:"moto"},{img:Lw,cat:"moto"},{img:Uw,cat:"moto"},{img:Nw,cat:"moto"},{img:Ow,cat:"moto"},{img:Pw,cat:"moto"},{img:Bw,cat:"moto"},{img:Iw,cat:"moto"},{img:Fw,cat:"moto"},{img:zw,cat:"moto"},{img:Hw,cat:"moto"},{img:Gw,cat:"moto"},{img:Yw,cat:"hike"},{img:qw,cat:"hike"},{img:Zw,cat:"hike"},{img:Kw,cat:"hike"},{img:Jw,cat:"hike"},{img:Qw,cat:"hike"},{img:$w,cat:"hike"},{img:eC,cat:"hike"},{img:Vw,cat:"me"},{img:kw,cat:"me"},{img:Xw,cat:"me"},{img:jw,cat:"me"},{img:Ww,cat:"me"}];function nC(r,e){const i=[...r];let s=e;const l=()=>(s=s*1103515245+12345&2147483647,s/2147483647);for(let c=i.length-1;c>0;c--){const d=Math.floor(l()*(c+1));[i[c],i[d]]=[i[d],i[c]]}return i}const Mv=nC(tC,1337);function iC(){const{t:r,lang:e}=Ta(),i=Ee.useRef(null),s=Ee.useRef(!1),[l,c]=Ee.useState("all"),[d,h]=Ee.useState(null),m=Ee.useMemo(()=>l==="all"?Mv:Mv.filter(g=>g.cat===l),[l]);Ee.useEffect(()=>{const g=i.current;if(!g)return;const _=I=>{const Z=g.scrollWidth-g.clientWidth;if(Z<=1)return;const w=I.deltaY>0;w&&g.scrollLeft>=Z-1||!w&&g.scrollLeft<=0||(I.preventDefault(),g.scrollLeft+=I.deltaY)};g.addEventListener("wheel",_,{passive:!1});let v=!1,y=0,E=0,T=0,M=0,x=0,O=null;const U=()=>{x*=.94,g.scrollLeft-=x*16,Math.abs(x)>.02?O=requestAnimationFrame(U):O=null},C=I=>{O&&cancelAnimationFrame(O),v=!0,s.current=!1,y=I.pageX,E=g.scrollLeft,T=I.pageX,M=performance.now(),x=0,g.classList.add("dragging")},B=I=>{if(!v)return;const Z=I.pageX-y;Math.abs(Z)>4&&(s.current=!0),g.scrollLeft=E-Z;const w=performance.now(),D=w-M;D>0&&(x=(I.pageX-T)/D),T=I.pageX,M=w},F=()=>{v&&(v=!1,g.classList.remove("dragging"),Math.abs(x)>.05&&(O=requestAnimationFrame(U)))};return g.addEventListener("mousedown",C),window.addEventListener("mousemove",B),window.addEventListener("mouseup",F),()=>{O&&cancelAnimationFrame(O),g.removeEventListener("wheel",_),g.removeEventListener("mousedown",C),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",F)}},[l]),Ee.useEffect(()=>{i.current?.scrollTo({left:0})},[l]),Ee.useEffect(()=>{if(d===null)return;const g=_=>{_.key==="Escape"&&h(null),_.key==="ArrowRight"&&h(v=>v===null?v:(v+1)%m.length),_.key==="ArrowLeft"&&h(v=>v===null?v:(v-1+m.length)%m.length)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[d,m.length]);const p=e==="de";return z.jsxs("div",{className:"gsec",children:[z.jsxs("div",{className:"gsec-filter",children:[r.aboutSlider.categories.map(g=>z.jsx("button",{className:g.key===l?"active":"",onClick:()=>c(g.key),children:g.label},g.key)),z.jsxs("span",{className:"gsec-count",children:[m.length," ",p?"BILDER":"IMAGES"]})]}),z.jsx("div",{className:"gsec-track",ref:i,children:m.map((g,_)=>z.jsxs("figure",{className:"gsec-shot",onClick:()=>{s.current||h(_)},children:[z.jsx("img",{src:g.img,alt:"",draggable:!1,loading:"lazy"}),z.jsxs("figcaption",{children:[String(_+1).padStart(2,"0")," — ",g.cat.toUpperCase()]})]},`${g.img}-${_}`))}),z.jsx("p",{className:"gsec-hint",children:p?"ZIEHEN ODER SCROLLEN — KLICK ZUM VERGRÖSSERN, ← → ZUM BLÄTTERN":"DRAG OR SCROLL — CLICK TO ENLARGE, ← → TO BROWSE"}),d!==null&&hw.createPortal(z.jsxs("div",{className:"gsec-lightbox",onClick:()=>h(null),children:[z.jsxs("span",{className:"gsec-lightbox-count",children:[String(d+1).padStart(2,"0")," /"," ",String(m.length).padStart(2,"0")]}),z.jsx("img",{src:m[d].img,alt:"",onClick:g=>g.stopPropagation()})]}),document.body)]})}const gx="/JasonBay.dev/assets/1-BhbDuOtu.mp4",_x="/JasonBay.dev/assets/2-Be0iSaCO.mp4",vx="/JasonBay.dev/assets/3-M1koVpa6.mp4",xx="/JasonBay.dev/assets/4-DlmwLfDR.mp4",Sx="/JasonBay.dev/assets/6-D5kzTYnV.mp4",yx="/JasonBay.dev/assets/66-XMB0FlDV.mp4",Ls=[gx,_x,vx,xx,Sx,yx];function aC(){const{t:r}=Ta(),e=r.tiktokShowcase,[i,s]=Ee.useState(0),[l,c]=Ee.useState(!0),[d,h]=Ee.useState(!0),[m,p]=Ee.useState(.8),[g,_]=Ee.useState(0),v=Ee.useRef(null),y=Ee.useRef(null),E=Ee.useRef(!1),T=Ee.useCallback(C=>{E.current||(E.current=!0,s(B=>((B+C)%Ls.length+Ls.length)%Ls.length),c(!0),window.setTimeout(()=>E.current=!1,450))},[]);Ee.useEffect(()=>{const C=v.current;C&&(C.currentTime=0,C.volume=m,C.muted=d,l?C.play().catch(()=>{}):C.pause())},[i,l,d,m]),Ee.useEffect(()=>{const C=y.current;if(!C)return;const B=F=>{Math.abs(F.deltaX)>Math.abs(F.deltaY)||(F.preventDefault(),!(Math.abs(F.deltaY)<14)&&T(F.deltaY>0?1:-1))};return C.addEventListener("wheel",B,{passive:!1}),()=>C.removeEventListener("wheel",B)},[T]);const M=()=>{const C=v.current;C&&C.duration&&_(C.currentTime/C.duration*100)},x=C=>{const B=Number(C.target.value);p(B),h(B===0)},O=d||m===0,U=C=>C.stopPropagation();return z.jsxs("div",{className:"tsec",children:[z.jsxs("div",{className:"tsec-dock",children:[z.jsx("div",{className:"tsec-stage",ref:y,children:z.jsxs("div",{className:"tsec-screen",onClick:()=>c(C=>!C),children:[z.jsx("video",{ref:v,className:"tsec-video",src:Ls[i],loop:!0,playsInline:!0,muted:d,autoPlay:!0,onTimeUpdate:M},Ls[i]),!l&&z.jsx("span",{className:"tsec-play-ind","aria-hidden":"true",children:"▶"}),z.jsxs("div",{className:"tsec-bar",onClick:U,children:[z.jsx("button",{className:"tsec-ctl",onClick:()=>c(C=>!C),"aria-label":l?e.pause:e.play,children:l?"❚❚":"▶"}),z.jsx("button",{className:"tsec-ctl",onClick:()=>h(C=>!C),"aria-label":O?e.unmute:e.mute,children:O?"MUTE":"VOL"}),z.jsx("input",{type:"range",className:"tsec-vol-slider",min:0,max:1,step:.01,value:d?0:m,onChange:x,"aria-label":e.volume}),z.jsxs("span",{className:"tsec-counter",children:[String(i+1).padStart(2,"0")," /"," ",String(Ls.length).padStart(2,"0")]}),z.jsxs("span",{className:"tsec-arrows",children:[z.jsx("button",{onClick:()=>T(-1),"aria-label":e.prev,children:"‹"}),z.jsx("button",{onClick:()=>T(1),"aria-label":e.next,children:"›"})]})]}),z.jsx("div",{className:"tsec-progress",children:z.jsx("span",{style:{width:`${g}%`}})})]})}),z.jsx("div",{className:"tsec-dots",children:Ls.map((C,B)=>z.jsx("button",{className:B===i?"active":"",onClick:()=>{s(B),c(!0)},"aria-label":e.jumpTo(B+1),children:String(B+1).padStart(2,"0")},B))})]}),z.jsxs("div",{className:"tsec-side",children:[z.jsxs("div",{className:"tsec-stats",children:[z.jsxs("div",{children:[z.jsx("strong",{children:r.about.spotlight.statFollowerValue}),z.jsx("span",{children:r.about.spotlight.statFollowerLabel})]}),z.jsxs("div",{children:[z.jsx("strong",{children:r.about.spotlight.statLikesValue}),z.jsx("span",{children:r.about.spotlight.statLikesLabel})]}),z.jsxs("div",{children:[z.jsx("strong",{children:r.about.spotlight.statExperienceValue}),z.jsx("span",{children:r.about.spotlight.statExperienceLabel})]})]}),z.jsx("p",{className:"tsec-copy",children:r.about.spotlight.subtitle}),z.jsx("ul",{className:"tsec-list",children:r.about.spotlight.list.map(C=>z.jsx("li",{children:C},C))}),z.jsx("a",{className:"tsec-link",href:"https://www.tiktok.com/@jsnuwu",target:"_blank",rel:"noopener noreferrer",children:"TIKTOK @JSNUWU ↗"})]})]})}function sC({avatarUrl:r}){return z.jsxs("div",{className:"profile-card",children:[z.jsx("div",{className:"card-glow"}),z.jsx("img",{src:r,className:"profile-avatar"})]})}const Mx="/JasonBay.dev/assets/BayJason-CgZ6RBiE.jpg";function Ex(){const r=Ee.useRef(null);return Ee.useEffect(()=>{const e=r.current;if(!e)return;const i=new IntersectionObserver(([s])=>{s.isIntersecting&&(e.classList.add("in-view"),i.unobserve(e))},{threshold:0,rootMargin:"0px 0px -10% 0px"});return i.observe(e),()=>i.disconnect()},[]),r}const rC="!<>-_\\/[]{}—=+*^?#$%&";function oi({text:r,radius:e=52,speed:i=190,scrambleChars:s=rC,className:l="",as:c="span"}){const d=Array.from(r),h=Ee.useRef([]),m=Ee.useRef([]),p=Ee.useRef(null),g=Ee.useRef([]),_=Ee.useRef(null),v=Ee.useCallback(()=>{_.current!==null&&(cancelAnimationFrame(_.current),_.current=null);const O=Array.from(r);h.current.forEach((U,C)=>{U&&(U.textContent=O[C],U.classList.remove("is-scrambled"))})},[r]);Ee.useEffect(()=>(v(),()=>{_.current!==null&&(cancelAnimationFrame(_.current),_.current=null)}),[r,v]);const y=()=>{m.current=h.current.map(O=>{if(!O)return{x:0,y:0};const U=O.getBoundingClientRect();return{x:U.left+U.width/2,y:U.top+U.height/2}}),g.current=new Array(d.length).fill(0)},E=O=>{const U=p.current;U&&h.current.forEach((C,B)=>{if(!C||d[B]===" ")return;const F=m.current[B];Math.hypot(U.x-F.x,U.y-F.y)<e?O-g.current[B]>i&&(g.current[B]=O,C.textContent=s[Math.floor(Math.random()*s.length)],C.classList.add("is-scrambled")):C.textContent!==d[B]&&(C.textContent=d[B],C.classList.remove("is-scrambled"))}),_.current=requestAnimationFrame(E)},T=()=>{y(),_.current===null&&(_.current=requestAnimationFrame(E))},M=O=>{p.current={x:O.clientX,y:O.clientY}},x=()=>{p.current=null,v()};return z.jsx(c,{className:l,onMouseEnter:T,onMouseMove:M,onMouseLeave:x,children:d.map((O,U)=>z.jsx("span",{ref:C=>{h.current[U]=C},children:O},U))})}const oC="/JasonBay.dev/assets/Instagram-n8caggNr.png",lC="/JasonBay.dev/assets/TikTok-CpvqXkYO.png",cC="/JasonBay.dev/assets/GitHub-Hrqx8hqp.png",uC="/JasonBay.dev/assets/LinkedIn-BloU1de1.png";function fC(){const r=Ex(),{t:e}=Ta(),i=[{name:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu",icon:cC,stats:[{label:"Repos",value:"12"},{label:"Contributions",value:"143"}],accent:"#0969da"},{name:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu",icon:lC,stats:[{label:"Follower",value:"20.8K"},{label:"Likes",value:"3.5M"}],bio:"Random edits by some guy",accent:"#ee1d52",latestPost:{caption:e.socialStats.tiktokPreviewCaption}},{name:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/",icon:oC,stats:[{label:"Follower",value:"196"}],accent:"#d62976",latestPost:{caption:e.socialStats.instagramPreviewCaption}},{name:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/",icon:uC,stats:[],cta:e.socialStats.linkedinCta,accent:"#0a66c2"}];return z.jsxs("section",{className:"social-stats reveal",ref:r,children:[z.jsx(oi,{as:"h2",className:"social-stats-title",text:e.socialStats.title}),z.jsx("p",{className:"social-stats-subtitle",children:z.jsx(oi,{text:e.socialStats.subtitle})}),z.jsx("div",{className:"social-stats-grid",children:i.map(s=>z.jsxs("div",{className:"social-stat-cell",children:[s.latestPost&&z.jsxs("div",{className:"social-stat-preview",children:[z.jsx("span",{className:"social-stat-preview-label",children:e.socialStats.latestPost}),s.latestPost.image?z.jsx("img",{src:s.latestPost.image,alt:""}):z.jsx("div",{className:"social-stat-preview-placeholder",children:z.jsx("img",{src:s.icon,alt:"",className:"social-stat-preview-icon"})}),z.jsx("span",{className:"social-stat-preview-caption",children:s.latestPost.caption}),z.jsx("span",{className:"social-stat-preview-tail"})]}),z.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"social-stat-card",style:{"--stat-accent":s.accent},children:[z.jsxs("div",{className:"social-stat-header",children:[z.jsx("img",{src:s.icon,alt:"",className:"social-stat-icon"}),z.jsxs("div",{children:[z.jsx(oi,{as:"h3",text:s.name}),z.jsx("span",{className:"social-stat-handle",children:s.handle})]})]}),s.bio&&z.jsx("p",{className:"social-stat-bio",children:z.jsx(oi,{text:s.bio})}),s.stats.length>0?z.jsx("div",{className:"social-stat-numbers",children:s.stats.map(l=>z.jsxs("div",{className:"social-stat-number",children:[z.jsx("strong",{children:l.value}),z.jsx("span",{children:l.label})]},l.label))}):s.cta&&z.jsx("span",{className:"social-stat-cta",children:s.cta})]})]},s.name))})]})}function dC({href:r,onClick:e}){const{t:i}=Ta();return z.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"live-button",onClick:e,children:[z.jsx("span",{className:"live-button-dot"}),z.jsx("span",{className:"live-button-text",children:i.liveButton.label}),z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"live-button-arrow",children:z.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]})}function hC(r){try{const e=new URL(r);return`${e.hostname}${e.pathname.replace(/\/$/,"")}`}catch{return r}}function pC(){const r=Ex(),e=Ee.useRef(null),{lang:i,t:s}=Ta(),l=Ee.useRef(0),c=Ee.useRef(!1),d=Ee.useRef(null),h=Ee.useRef(!1),[m,p]=Ee.useState(0);Ee.useEffect(()=>{l.current=m},[m]),Ee.useEffect(()=>()=>{d.current!==null&&cancelAnimationFrame(d.current)},[]),Ee.useEffect(()=>{const v=e.current;if(!v)return;const y=()=>{c.current=!0};v.addEventListener("wheel",y,{passive:!0}),v.addEventListener("touchstart",y,{passive:!0}),v.addEventListener("pointerdown",y,{passive:!0});const E=Date.now()+8e3,T=window.setInterval(()=>{if(Date.now()>E){window.clearInterval(T);return}if(c.current||!v.offsetWidth)return;const M=l.current*v.offsetWidth;Math.abs(v.scrollLeft-M)>4&&(v.scrollLeft=M)},120);return()=>{v.removeEventListener("wheel",y),v.removeEventListener("touchstart",y),v.removeEventListener("pointerdown",y),window.clearInterval(T)}},[]);const g=v=>{const y=e.current;if(!y)return;c.current=!0;const E=(v+Zc.length)%Zc.length;p(E),d.current!==null&&cancelAnimationFrame(d.current);const T=y.scrollLeft,M=E*y.offsetWidth,x=M-T,O=420,U=500,C=performance.now();h.current=!0;const B=F=>{const I=F-C;if(I<O){const Z=I/O,w=1-Math.pow(1-Z,3);y.scrollLeft=T+x*w,d.current=requestAnimationFrame(B)}else I<O+U?(y.scrollLeft=M,d.current=requestAnimationFrame(B)):(d.current=null,h.current=!1)};d.current=requestAnimationFrame(B)},_=()=>{const v=e.current;if(!v||v.offsetWidth===0||h.current)return;const y=Math.round(v.scrollLeft/v.offsetWidth);p(y)};return z.jsxs("section",{id:"projects-preview",className:"projects-preview reveal",ref:r,children:[z.jsx(oi,{as:"h2",className:"projects-preview-title",text:s.projectsPreview.title}),z.jsx("p",{className:"projects-preview-subtitle",children:z.jsx(oi,{text:s.projectsPreview.subtitle})}),z.jsxs("div",{className:"preview-carousel-wrapper",children:[z.jsx("button",{type:"button",className:"preview-arrow left",onClick:()=>g(m-1),"aria-label":s.projectsPreview.previousProject,children:"‹"}),z.jsx("div",{className:"preview-track",ref:e,onScroll:_,children:Zc.map((v,y)=>z.jsxs("div",{className:"preview-card",children:[z.jsxs("div",{className:"preview-browserbar",children:[z.jsx("span",{className:"browser-dot red"}),z.jsx("span",{className:"browser-dot yellow"}),z.jsx("span",{className:"browser-dot green"}),z.jsx("span",{className:"preview-url",children:hC(v.link)})]}),z.jsxs("a",{className:"preview-frame-wrapper",href:v.link,target:"_blank",rel:"noopener noreferrer","aria-label":s.projectsPreview.openLiveAria(v.name),children:[Math.abs(y-m)<=1&&z.jsx("iframe",{src:v.link,title:v.name,loading:y===0?"eager":"lazy",tabIndex:-1}),z.jsx("span",{className:"preview-frame-hint",children:s.projectsPreview.openLive})]}),z.jsxs("div",{className:"preview-card-body",children:[z.jsx(oi,{as:"h3",text:v.name}),z.jsx("p",{children:z.jsx(oi,{text:i==="en"?v.descriptionEn:v.description})}),z.jsx("small",{className:"preview-tech",children:v.tech}),z.jsx(dC,{href:v.link})]})]},v.name))}),z.jsx("button",{type:"button",className:"preview-arrow right",onClick:()=>g(m+1),"aria-label":s.projectsPreview.nextProject,children:"›"})]}),z.jsx("div",{className:"preview-dots",children:Zc.map((v,y)=>z.jsx("button",{type:"button",className:`preview-dot ${y===m?"active":""}`,onClick:()=>g(y),"aria-label":s.projectsPreview.jumpTo(v.name)},v.name))})]})}function mC(r=.3){const e=Ee.useRef(null),[i,s]=Ee.useState(!1);return Ee.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([d])=>s(d.isIntersecting),{threshold:r,rootMargin:"0px 0px -5% 0px"});return c.observe(l),()=>c.disconnect()},[r]),{ref:e,inView:i}}const nl=[{id:1,src:gx},{id:2,src:_x},{id:3,src:vx},{id:4,src:xx},{id:6,src:Sx},{id:66,src:yx}],Ev=500,gC=40;function bv(r){return(r%nl.length+nl.length)%nl.length}function _C(){const{t:r}=Ta(),{ref:e,inView:i}=mC(),[s,l]=Ee.useState(0),[c,d]=Ee.useState(!0),[h,m]=Ee.useState(1),[p,g]=Ee.useState(!0),_=Ee.useRef(null),v=Ee.useRef(null),y=Ee.useRef(!1),E=Ee.useRef(null),T=H=>{y.current||(y.current=!0,l(K=>bv(K+H)),window.setTimeout(()=>{y.current=!1},Ev))},M=H=>{y.current||(y.current=!0,l(bv(H)),window.setTimeout(()=>{y.current=!1},Ev))},x=()=>T(1),O=()=>T(-1),U=()=>g(H=>!H);Ee.useEffect(()=>{const H=_.current;H&&(H.currentTime=0,H.volume=h,g(!0))},[s]),Ee.useEffect(()=>{const H=_.current;H&&(i&&p?H.play().catch(()=>{}):H.pause())},[i,p,s]),Ee.useEffect(()=>{const H=_.current;H&&(H.volume=h)},[h]),Ee.useEffect(()=>{const H=v.current;if(!H)return;const K=fe=>{fe.preventDefault(),!(Math.abs(fe.deltaY)<12)&&T(fe.deltaY>0?1:-1)},ne=fe=>{fe.preventDefault()};return H.addEventListener("wheel",K,{passive:!1}),H.addEventListener("touchmove",ne,{passive:!1}),()=>{H.removeEventListener("wheel",K),H.removeEventListener("touchmove",ne)}},[]);const C=H=>H instanceof HTMLElement&&!!H.closest("button, input[type='range']"),B=H=>{if(C(H.target)){E.current=null;return}E.current=H.touches[0].clientY},F=H=>{if(C(H.target))return;const K=E.current;if(E.current=null,K===null)return;const ne=K-H.changedTouches[0].clientY;Math.abs(ne)<gC||(ne>0?x():O())},I=H=>H.stopPropagation(),Z=H=>{const K=Number(H.target.value);m(K),d(K===0)},w=nl[s],D=c||h===0;return z.jsxs("section",{id:"tiktok-showcase",className:`tiktok-showcase ${i?"in-view":""}`,ref:e,children:[z.jsx(oi,{as:"h2",className:"tiktok-showcase-title",text:r.tiktokShowcase.title}),z.jsx("a",{className:"tiktok-showcase-subtitle",href:"https://www.tiktok.com/@jsnuwu",target:"_blank",rel:"noopener noreferrer",children:z.jsx(oi,{text:r.tiktokShowcase.subtitle})}),z.jsxs("div",{className:"phone-dock",children:[z.jsxs("div",{className:"phone-frame",children:[z.jsx("span",{className:"phone-camera","aria-hidden":"true"}),z.jsxs("div",{className:"phone-screen",ref:v,onClick:U,onTouchStart:B,onTouchEnd:F,children:[z.jsx("video",{ref:_,className:"phone-video",src:w.src,muted:c,loop:!0,playsInline:!0,preload:"metadata"},w.id),!p&&z.jsx("span",{className:"phone-play-indicator","aria-hidden":"true",children:"▶"}),z.jsx("button",{type:"button",className:"phone-play-btn",onClick:H=>{I(H),U()},"aria-label":p?r.tiktokShowcase.pause:r.tiktokShowcase.play,children:p?"⏸":"▶"}),z.jsxs("div",{className:"phone-volume",onClick:I,children:[z.jsx("button",{type:"button",className:"phone-mute-btn",onClick:H=>{I(H),d(K=>!K)},"aria-label":D?r.tiktokShowcase.unmute:r.tiktokShowcase.mute,children:D?"🔇":"🔊"}),z.jsx("div",{className:"phone-volume-track",children:z.jsx("input",{type:"range",className:"phone-volume-slider",min:0,max:1,step:.01,value:c?0:h,onChange:Z,"aria-label":r.tiktokShowcase.volume})})]}),z.jsx("button",{type:"button",className:"phone-nav prev",onClick:H=>{I(H),O()},"aria-label":r.tiktokShowcase.prev,children:"▲"}),z.jsx("button",{type:"button",className:"phone-nav next",onClick:H=>{I(H),x()},"aria-label":r.tiktokShowcase.next,children:"▼"})]})]}),z.jsx("div",{className:"phone-dots",children:nl.map((H,K)=>z.jsx("button",{type:"button",className:`phone-dot ${K===s?"active":""}`,onClick:()=>M(K),"aria-label":r.tiktokShowcase.jumpTo(H.id)},H.id))})]})]})}function vC(){const{t:r}=Ta();return Ee.useEffect(()=>{const e=document.body.classList.contains("dark");return document.body.classList.add("dark"),()=>{e||document.body.classList.remove("dark")}},[]),z.jsxs("div",{className:"old-portfolio",children:[z.jsx("section",{className:"hero",children:z.jsxs("div",{className:"hero-content",children:[z.jsxs("div",{className:"hero-text",children:[z.jsxs("h1",{className:"hero-title",children:[z.jsx(oi,{text:r.hero.titlePrefix})," ",z.jsx("span",{className:"hero-title-highlight",children:z.jsx(oi,{text:"Jason"})})]}),z.jsx("div",{className:"hero-tags",children:r.hero.tags.map(e=>z.jsx("a",{href:`#${e.target}`,className:"hero-tag",onClick:i=>{i.preventDefault(),document.getElementById(e.target)?.scrollIntoView({behavior:"smooth"})},children:e.label},e.target))}),z.jsx("p",{className:"hero-subtitle",children:z.jsx(oi,{text:r.hero.subtitle})})]}),z.jsx("div",{className:"hero-visual",children:z.jsx(sC,{avatarUrl:Mx})})]})}),z.jsx(pC,{}),z.jsx(fC,{}),z.jsx(_C,{})]})}const Ko={about:{de:"Über mich",en:"About"},work:{de:"Portfolio",en:"Portfolio"},skills:{de:"Skills",en:"Skills"},experience:{de:"Werdegang",en:"Experience"},gallery:{de:"Galerie",en:"Gallery"},social:{de:"Social Media",en:"Social Media"},languages:{de:"Sprachen",en:"Languages"},contact:{de:"Kontakt",en:"Contact"}},oh={about:{de:"Wer ich bin und wie ich arbeite.",en:"Who I am and how I work."},work:{de:"Meine erste Portfolio-Seite.",en:"My first portfolio site."},skills:{de:"Werkzeuge und Methoden, mit denen ich täglich arbeite.",en:"Tools and methods I work with day to day."},experience:{de:"Stationen von der Ausbildung bis heute.",en:"Stations from apprenticeship to today."},gallery:{de:"Fotografie abseits vom Code · Wandern, Motorrad, Tiere.",en:"Photography beyond the code · hiking, motorcycles, pets."},social:{de:"Instagram, TikTok und YouTube · Konzeption, Schnitt und Gestaltung seit 2020.",en:"Instagram, TikTok and YouTube · concept, editing and design since 2020."},languages:{de:"",en:""},contact:{de:"Schreib mir, ich melde mich zurück.",en:"Drop me a line, I'll get back to you."}};function xC({id:r,onBack:e}){const{t:i,lang:s}=Ta(),l=s==="de",c=Ee.useRef(null),d=Ee.useRef(0),h=Ee.useRef(!1),[m,p]=Ee.useState(0);Ee.useEffect(()=>{c.current?.scrollTo({top:0})},[r]),Ee.useEffect(()=>{const E=c.current;if(!E)return;const T=()=>{h.current||(h.current=!0,E.classList.add("is-leaving"),window.setTimeout(e,420))},M=B=>{if(!h.current){if(E.scrollTop>0){d.current=0,m!==0&&p(0);return}if(B.deltaY<0){d.current+=-B.deltaY;const F=Math.min(1,d.current/320);p(F),d.current>320&&T()}else d.current=0,m!==0&&p(0)}};let x=0;const O=B=>{x=B.touches[0].clientY},U=B=>{if(h.current||E.scrollTop>0)return;const F=B.touches[0].clientY-x;F>0&&(d.current=F,p(Math.min(1,F/200)),F>200&&T())},C=()=>{d.current=0,p(0)};return E.addEventListener("wheel",M,{passive:!0}),E.addEventListener("touchstart",O,{passive:!0}),E.addEventListener("touchmove",U,{passive:!0}),E.addEventListener("touchend",C,{passive:!0}),()=>{E.removeEventListener("wheel",M),E.removeEventListener("touchstart",O),E.removeEventListener("touchmove",U),E.removeEventListener("touchend",C)}},[e,m]);const g=Ko[r]?l?Ko[r].de:Ko[r].en:r,_=oh[r]?l?oh[r].de:oh[r].en:"",v=Object.keys(Ko).length,y=String(Object.keys(Ko).indexOf(r)+1).padStart(2,"0")+" / "+String(v).padStart(2,"0");return z.jsxs("div",{className:"section-page",ref:c,style:{transform:m?`translateY(${m*40}px)`:void 0},children:[z.jsx("div",{className:"sp-pull",style:{opacity:m,transform:`scaleX(${.2+m*.8})`},"aria-hidden":"true",children:z.jsx("span",{children:l?"LOSLASSEN FÜR RAUM":"RELEASE FOR SPACE"})}),z.jsxs("div",{className:"sp-topbar",children:[z.jsx("button",{className:"sp-back",onClick:e,children:z.jsx("span",{className:"glow-text",children:l?"↑ ZURÜCK ZUM RAUM":"↑ BACK TO SPACE"})}),z.jsx("span",{className:"sp-num",children:y})]}),z.jsxs("header",{className:"sp-header",children:[z.jsx("h1",{children:g}),_&&z.jsx("p",{className:"sp-intro",children:_})]}),z.jsxs("div",{className:`sp-body ${r==="work"?"sp-body-wide":""}`,children:[r==="gallery"&&z.jsx(iC,{}),r==="social"&&z.jsxs("div",{className:"sp-social",children:[z.jsx(aC,{}),z.jsx("ul",{className:"sp-plain sp-social-links",children:Sv().filter(E=>["Instagram","TikTok","YouTube"].includes(E.label)).map(E=>z.jsx("li",{children:z.jsxs("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",children:[z.jsx("span",{children:E.label}),z.jsxs("span",{children:[E.handle," ↗"]})]})},E.label))})]}),r==="work"&&z.jsx(vC,{}),r==="experience"&&z.jsx("ul",{className:"sp-timeline",children:i.experience.entries.map(E=>z.jsxs("li",{children:[z.jsx("span",{className:"spt-period",children:E.period}),z.jsxs("div",{children:[z.jsx("span",{className:"spt-org",children:E.org}),z.jsx("span",{className:"spt-role",children:E.role}),z.jsx("ul",{children:E.bullets.map(T=>z.jsx("li",{children:T},T))})]})]},E.org))}),r==="skills"&&z.jsxs("div",{className:"sp-skills",children:[i.skills.groups.map((E,T)=>z.jsxs("div",{className:"skrow",children:[z.jsx("span",{className:"skrow-num",children:String(T+1).padStart(2,"0")}),z.jsx("h3",{className:"skrow-title",children:E.title}),z.jsx("ul",{className:"skrow-tags",children:E.items.split(",").map(M=>z.jsx("li",{children:M.trim()},M.trim()))})]},E.title)),z.jsxs("div",{className:"skrow skrow-langs",children:[z.jsx("span",{className:"skrow-num",children:String(i.skills.groups.length+1).padStart(2,"0")}),z.jsx("h3",{className:"skrow-title",children:l?"Sprachen":"Languages"}),z.jsx("ul",{className:"skrow-tags",children:i.skills.languages.map(E=>z.jsxs("li",{children:[E.name," · ",E.level]},E.name))})]})]}),r==="languages"&&z.jsx("ul",{className:"sp-plain",children:i.skills.languages.map(E=>z.jsxs("li",{children:[z.jsx("span",{children:E.name}),z.jsx("span",{children:E.level})]},E.name))}),r==="about"&&z.jsxs("div",{className:"sp-about",children:[z.jsxs("div",{className:"sp-prose",children:[z.jsx("p",{className:"sp-lead",children:i.about.lead}),z.jsx("p",{children:i.about.body}),z.jsx("p",{children:l?"Vor der Ausbildung ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker. Danach die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso, abgeschlossen im Januar 2026 (IHK). Seither Junior Software Engineer bei Telution.":"Before the apprenticeship, a voluntary social year at Lebenshilfe Vaihingen-Mühlacker. Then an apprenticeship as an IT specialist for application development at adesso, completed in January 2026 (IHK). Since then a Junior Software Engineer at Telution."})]}),z.jsxs("figure",{className:"sp-portrait",children:[z.jsx("img",{src:Mx,alt:"Jason Bay"}),z.jsx("figcaption",{children:"Jason Bay · Vaihingen an der Enz"})]})]}),r==="contact"&&z.jsxs("div",{className:"sp-contact",children:[z.jsxs("div",{className:"sp-prose",children:[z.jsx("p",{children:i.contact.intro}),z.jsx("a",{className:"sp-email",href:`mailto:${yv}`,children:yv}),z.jsx("ul",{className:"sp-plain",children:Sv().map(E=>z.jsx("li",{children:z.jsxs("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",children:[z.jsx("span",{children:E.label}),z.jsxs("span",{children:[E.handle," ↗"]})]})},E.label))})]}),z.jsxs("form",{className:"sp-form",action:"https://formspree.io/f/mreakbje",method:"POST",children:[z.jsxs("label",{children:[z.jsx("span",{children:"Name"}),z.jsx("input",{name:"name",type:"text",placeholder:i.contact.namePlaceholder,required:!0})]}),z.jsxs("label",{children:[z.jsx("span",{children:l?"E-Mail":"Email"}),z.jsx("input",{name:"email",type:"email",placeholder:i.contact.emailPlaceholder,required:!0})]}),z.jsxs("label",{children:[z.jsx("span",{children:l?"Nachricht":"Message"}),z.jsx("textarea",{name:"message",rows:5,placeholder:i.contact.messagePlaceholder,required:!0})]}),z.jsx("button",{type:"submit",children:i.contact.submit})]})]})]})]})}const Jo=["main","about"];function SC(){const{lang:r,setLang:e}=Ta(),[i,s]=Ee.useState("main"),[l,c]=Ee.useState(null),[d,h]=Ee.useState(!1),[m,p]=Ee.useState(!1),g=Ee.useRef({x:0,y:0}),_=Ee.useRef({x:0,y:0}),v=Ee.useRef({x:0,y:0}),y=Ee.useRef(1),E=Ee.useRef(null),T=Ee.useRef(new Map),M=Ee.useRef(0),x=Ee.useRef(0),O=Ee.useMemo(()=>fw(),[r]),U=Ee.useMemo(()=>dw(r),[r]),C=Ee.useMemo(()=>uw(),[r]),B=Ee.useMemo(()=>i==="main"?O.map((L,G)=>({id:`kw-${G}`,strong:L.strong,position:[Math.cos(L.angle)*L.radius,Math.sin(L.angle)*L.radius*.78,L.depth]})):i==="about"?U.map(L=>({id:L.id,position:L.position})):[],[i,O,U]),F=Ee.useCallback(()=>{p(!0),window.clearTimeout(x.current),x.current=window.setTimeout(()=>p(!1),460)},[]),I=Ee.useCallback(L=>{s(G=>(G!==L&&F(),L)),c(null)},[F]),Z=Ee.useCallback(L=>{s(G=>{const J=Jo.indexOf(G),me=Jo[Math.min(Jo.length-1,Math.max(0,J+L))];return me!==G&&F(),me})},[F]);Ee.useEffect(()=>{i!=="about"&&(_.current={x:0,y:0},v.current={x:0,y:0},y.current=1)},[i]),Ee.useEffect(()=>()=>window.clearTimeout(x.current),[]);const w=Ee.useCallback(()=>{if(d)try{const L=window.AudioContext||window.webkitAudioContext,G=new L,J=G.createOscillator(),me=G.createGain();J.type="sine",J.frequency.value=520,me.gain.value=.04,J.connect(me).connect(G.destination),J.start(),me.gain.exponentialRampToValueAtTime(1e-4,G.currentTime+.14),J.stop(G.currentTime+.16),J.onended=()=>G.close()}catch{}},[d]),D=Ee.useCallback(L=>{w(),c(L)},[w]);Ee.useEffect(()=>{const L=G=>{g.current={x:G.clientX/window.innerWidth*2-1,y:G.clientY/window.innerHeight*2-1}};return window.addEventListener("pointermove",L),()=>window.removeEventListener("pointermove",L)},[]),Ee.useEffect(()=>{const L=G=>{if(l)return;if(i==="about"){const me=G.deltaY>0?1:-1,_e=y.current+me*.09;if(_e>1.8){const P=performance.now();P-M.current>800&&(M.current=P,y.current=1,Z(-1));return}y.current=lh(_e,.5,1.8);return}const J=performance.now();J-M.current<900||Math.abs(G.deltaY)<24||(M.current=J,Z(G.deltaY>0?1:-1))};return window.addEventListener("wheel",L,{passive:!0}),()=>window.removeEventListener("wheel",L)},[l,i,Z]),Ee.useEffect(()=>{const L=G=>{G.key==="Escape"&&l&&c(null)};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[l]);const H=UM(({movement:[L,G],first:J,last:me})=>{if(l)return;J&&(v.current={..._.current});const _e=i==="about";let P=v.current.x+L*(_e?.008:.005);const te=lh(v.current.y-G*.004,-.85,.85);_e||(P=lh(P,-.7,.7)),_.current={x:P,y:te},me&&!_e&&(_.current={x:0,y:0})},{filterTaps:!0}),K=r==="de",ne=l||i==="main"?"light":"dark",fe="Frontend Developer · Vaihingen an der Enz",ce=i==="main"?K?"SCROLLEN ZU ÜBER MICH ↓":"SCROLL TO ABOUT ↓":K?"SCROLLEN ODER ZIEHEN · KNOTEN ANKLICKEN":"SCROLL OR DRAG · CLICK A NODE";return z.jsxs("div",{className:"experience-root","data-scene":i,"data-surface":ne,children:[z.jsx(lw,{}),z.jsxs("div",{className:`experience scene-${i} ${l?"is-dived":""} ${m?"is-warping":""}`,...H(),children:[z.jsx(ow,{scene:i,anchors:B,pointerRef:g,dragRef:_,zoomRef:y,hoverRef:E,labelEls:T}),i==="main"&&z.jsxs("button",{className:"identity","data-hover":!0,onClick:()=>{w(),I("about")},"aria-label":K?"Weiter zu Über mich":"Continue to About",children:[z.jsx("span",{className:"identity-name",children:C.name}),z.jsx("span",{className:"identity-node","aria-hidden":"true"})]}),z.jsxs("div",{className:"label-layer",children:[i==="main"&&O.map((L,G)=>z.jsx("span",{ref:J=>{T.current.set(`kw-${G}`,J)},className:`kw-label ${L.strong?"strong":"faint"}`,onMouseEnter:()=>{E.current=`kw-${G}`},onMouseLeave:()=>{E.current=null},children:z.jsx("span",{className:"glow-text",children:L.label})},`kw-${G}`)),i==="about"&&U.map(L=>z.jsx("button",{ref:G=>{T.current.set(L.id,G)},className:"section-label",style:{fontSize:`${.72+L.scale*.5}rem`},onClick:()=>D(L.id),onMouseEnter:()=>{E.current=L.id},onMouseLeave:()=>{E.current=null},children:z.jsx("span",{className:"glow-text",children:L.label})},L.id))]}),z.jsxs("header",{className:"chrome-top",children:[z.jsx("button",{className:"wordmark",onClick:()=>I("main"),children:z.jsx("span",{className:"glow-text",children:"JASON BAY"})}),z.jsxs("nav",{className:"chrome-nav",children:[z.jsx("button",{className:i==="about"&&!l?"active":"",onClick:()=>{w(),I("about")},children:z.jsx("span",{className:"glow-text",children:K?"ÜBER MICH":"ABOUT ME"})}),z.jsx("button",{className:l==="work"?"active":"",onClick:()=>D("work"),children:z.jsx("span",{className:"glow-text",children:"PORTFOLIO"})})]})]}),z.jsxs("div",{className:"chrome-bottom",children:[z.jsx("span",{className:"role-line",children:fe}),z.jsx("span",{className:"hint-line",children:ce}),z.jsxs("span",{className:"scene-index",children:[String(Jo.indexOf(i)+1).padStart(2,"0")," / 0",Jo.length]})]})]}),z.jsxs("div",{className:"global-meta",children:[z.jsx("button",{className:l==="contact"?"active":"",onClick:()=>D("contact"),children:z.jsx("span",{className:"glow-text",children:K?"KONTAKT":"CONTACT"})}),z.jsxs("span",{className:"lang-switch",children:[z.jsx("button",{className:K?"active":"",onClick:()=>e("de"),children:"DE"}),z.jsx("span",{children:"/"}),z.jsx("button",{className:K?"":"active",onClick:()=>e("en"),children:"EN"})]}),z.jsxs("button",{className:"sound-toggle",onClick:()=>h(L=>!L),children:["SOUND ",d?"ON":"OFF"]})]}),l&&z.jsx(xC,{id:l,onBack:()=>c(null)})]})}function lh(r,e,i){return Math.min(i,Math.max(e,r))}function yC(){return z.jsx(zy,{children:z.jsx(SC,{})})}Iy.createRoot(document.getElementById("root")).render(z.jsx(Ee.StrictMode,{children:z.jsx(yC,{})}));
