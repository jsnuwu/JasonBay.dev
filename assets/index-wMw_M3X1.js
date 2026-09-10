(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function jy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Td={exports:{}},Xo={};var a_;function Wy(){if(a_)return Xo;a_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=e,Xo.jsx=i,Xo.jsxs=i,Xo}var s_;function Yy(){return s_||(s_=1,Td.exports=Wy()),Td.exports}var F=Yy(),Ad={exports:{}},ut={};var r_;function qy(){if(r_)return ut;r_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(P,ne,ge){this.props=P,this.context=ne,this.refs=M,this.updater=ge||E}x.prototype.isReactComponent={},x.prototype.setState=function(P,ne){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ne,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=x.prototype;function U(P,ne,ge){this.props=P,this.context=ne,this.refs=M,this.updater=ge||E}var C=U.prototype=new O;C.constructor=U,T(C,x.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function w(P,ne,ge){var we=ge.ref;return{$$typeof:r,type:P,key:ne,ref:we!==void 0?we:null,props:ge}}function D(P,ne){return w(P.type,ne,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Z(P){var ne={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ge){return ne[ge]})}var ie=/\/+/g;function de(P,ne){return typeof P=="object"&&P!==null&&P.key!=null?Z(""+P.key):ne.toString(36)}function ue(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(ne){P.status==="pending"&&(P.status="fulfilled",P.value=ne)},function(ne){P.status==="pending"&&(P.status="rejected",P.reason=ne)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,ne,ge,we,He){var $=typeof P;($==="undefined"||$==="boolean")&&(P=null);var fe=!1;if(P===null)fe=!0;else switch($){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(P.$$typeof){case r:case e:fe=!0;break;case g:return fe=P._init,L(fe(P._payload),ne,ge,we,He)}}if(fe)return He=He(P),fe=we===""?"."+de(P,0):we,I(He)?(ge="",fe!=null&&(ge=fe.replace(ie,"$&/")+"/"),L(He,ne,ge,"",function(Ge){return Ge})):He!=null&&(H(He)&&(He=D(He,ge+(He.key==null||P&&P.key===He.key?"":(""+He.key).replace(ie,"$&/")+"/")+fe)),ne.push(He)),1;fe=0;var De=we===""?".":we+":";if(I(P))for(var Xe=0;Xe<P.length;Xe++)we=P[Xe],$=De+de(we,Xe),fe+=L(we,ne,ge,$,He);else if(Xe=y(P),typeof Xe=="function")for(P=Xe.call(P),Xe=0;!(we=P.next()).done;)we=we.value,$=De+de(we,Xe++),fe+=L(we,ne,ge,$,He);else if($==="object"){if(typeof P.then=="function")return L(ue(P),ne,ge,we,He);throw ne=String(P),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return fe}function G(P,ne,ge){if(P==null)return P;var we=[],He=0;return L(P,we,"","",function($){return ne.call(ge,$,He++)}),we}function J(P){if(P._status===-1){var ne=P._result;ne=ne(),ne.then(function(ge){(P._status===0||P._status===-1)&&(P._status=1,P._result=ge)},function(ge){(P._status===0||P._status===-1)&&(P._status=2,P._result=ge)}),P._status===-1&&(P._status=0,P._result=ne)}if(P._status===1)return P._result.default;throw P._result}var ve=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ye={map:G,forEach:function(P,ne,ge){G(P,function(){ne.apply(this,arguments)},ge)},count:function(P){var ne=0;return G(P,function(){ne++}),ne},toArray:function(P){return G(P,function(ne){return ne})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ut.Activity=_,ut.Children=ye,ut.Component=x,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=U,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ut.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},ut.cache=function(P){return function(){return P.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(P,ne,ge){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var we=T({},P.props),He=P.key;if(ne!=null)for($ in ne.key!==void 0&&(He=""+ne.key),ne)!K.call(ne,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&ne.ref===void 0||(we[$]=ne[$]);var $=arguments.length-2;if($===1)we.children=ge;else if(1<$){for(var fe=Array($),De=0;De<$;De++)fe[De]=arguments[De+2];we.children=fe}return w(P.type,He,we)},ut.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ut.createElement=function(P,ne,ge){var we,He={},$=null;if(ne!=null)for(we in ne.key!==void 0&&($=""+ne.key),ne)K.call(ne,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(He[we]=ne[we]);var fe=arguments.length-2;if(fe===1)He.children=ge;else if(1<fe){for(var De=Array(fe),Xe=0;Xe<fe;Xe++)De[Xe]=arguments[Xe+2];He.children=De}if(P&&P.defaultProps)for(we in fe=P.defaultProps,fe)He[we]===void 0&&(He[we]=fe[we]);return w(P,$,He)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(P){return{$$typeof:h,render:P}},ut.isValidElement=H,ut.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:J}},ut.memo=function(P,ne){return{$$typeof:p,type:P,compare:ne===void 0?null:ne}},ut.startTransition=function(P){var ne=B.T,ge={};B.T=ge;try{var we=P(),He=B.S;He!==null&&He(ge,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(z,ve)}catch($){ve($)}finally{ne!==null&&ge.types!==null&&(ne.types=ge.types),B.T=ne}},ut.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ut.use=function(P){return B.H.use(P)},ut.useActionState=function(P,ne,ge){return B.H.useActionState(P,ne,ge)},ut.useCallback=function(P,ne){return B.H.useCallback(P,ne)},ut.useContext=function(P){return B.H.useContext(P)},ut.useDebugValue=function(){},ut.useDeferredValue=function(P,ne){return B.H.useDeferredValue(P,ne)},ut.useEffect=function(P,ne){return B.H.useEffect(P,ne)},ut.useEffectEvent=function(P){return B.H.useEffectEvent(P)},ut.useId=function(){return B.H.useId()},ut.useImperativeHandle=function(P,ne,ge){return B.H.useImperativeHandle(P,ne,ge)},ut.useInsertionEffect=function(P,ne){return B.H.useInsertionEffect(P,ne)},ut.useLayoutEffect=function(P,ne){return B.H.useLayoutEffect(P,ne)},ut.useMemo=function(P,ne){return B.H.useMemo(P,ne)},ut.useOptimistic=function(P,ne){return B.H.useOptimistic(P,ne)},ut.useReducer=function(P,ne,ge){return B.H.useReducer(P,ne,ge)},ut.useRef=function(P){return B.H.useRef(P)},ut.useState=function(P){return B.H.useState(P)},ut.useSyncExternalStore=function(P,ne,ge){return B.H.useSyncExternalStore(P,ne,ge)},ut.useTransition=function(){return B.H.useTransition()},ut.version="19.2.5",ut}var o_;function dp(){return o_||(o_=1,Ad.exports=qy()),Ad.exports}var be=dp();const Rd=jy(be);var wd={exports:{}},jo={},Cd={exports:{}},Dd={};var l_;function Ky(){return l_||(l_=1,(function(r){function e(L,G){var J=L.length;L.push(G);e:for(;0<J;){var ve=J-1>>>1,ye=L[ve];if(0<l(ye,G))L[ve]=G,L[J]=ye,J=ve;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var G=L[0],J=L.pop();if(J!==G){L[0]=J;e:for(var ve=0,ye=L.length,P=ye>>>1;ve<P;){var ne=2*(ve+1)-1,ge=L[ne],we=ne+1,He=L[we];if(0>l(ge,J))we<ye&&0>l(He,ge)?(L[ve]=He,L[we]=J,ve=we):(L[ve]=ge,L[ne]=J,ve=ne);else if(we<ye&&0>l(He,J))L[ve]=He,L[we]=J,ve=we;else break e}}return G}function l(L,G){var J=L.sortIndex-G.sortIndex;return J!==0?J:L.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,_=null,v=3,y=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(L){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=L)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function I(L){if(T=!1,C(L),!E)if(i(m)!==null)E=!0,z||(z=!0,Z());else{var G=i(p);G!==null&&ue(I,G.startTime-L)}}var z=!1,B=-1,K=5,w=-1;function D(){return M?!0:!(r.unstable_now()-w<K)}function H(){if(M=!1,z){var L=r.unstable_now();w=L;var G=!0;try{e:{E=!1,T&&(T=!1,O(B),B=-1),y=!0;var J=v;try{t:{for(C(L),_=i(m);_!==null&&!(_.expirationTime>L&&D());){var ve=_.callback;if(typeof ve=="function"){_.callback=null,v=_.priorityLevel;var ye=ve(_.expirationTime<=L);if(L=r.unstable_now(),typeof ye=="function"){_.callback=ye,C(L),G=!0;break t}_===i(m)&&s(m),C(L)}else s(m);_=i(m)}if(_!==null)G=!0;else{var P=i(p);P!==null&&ue(I,P.startTime-L),G=!1}}break e}finally{_=null,v=J,y=!1}G=void 0}}finally{G?Z():z=!1}}}var Z;if(typeof U=="function")Z=function(){U(H)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,de=ie.port2;ie.port1.onmessage=H,Z=function(){de.postMessage(null)}}else Z=function(){x(H,0)};function ue(L,G){B=x(function(){L(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(L){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var J=v;v=G;try{return L()}finally{v=J}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=v;v=L;try{return G()}finally{v=J}},r.unstable_scheduleCallback=function(L,G,J){var ve=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=J+ye,L={id:g++,callback:G,priorityLevel:L,startTime:J,expirationTime:ye,sortIndex:-1},J>ve?(L.sortIndex=J,e(p,L),i(m)===null&&L===i(p)&&(T?(O(B),B=-1):T=!0,ue(I,J-ve))):(L.sortIndex=ye,e(m,L),E||y||(E=!0,z||(z=!0,Z()))),L},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(L){var G=v;return function(){var J=v;v=G;try{return L.apply(this,arguments)}finally{v=J}}}})(Dd)),Dd}var c_;function Zy(){return c_||(c_=1,Cd.exports=Ky()),Cd.exports}var Ld={exports:{}},Un={};var u_;function Jy(){if(u_)return Un;u_=1;var r=dp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Un.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.5",Un}var f_;function zv(){if(f_)return Ld.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=Jy(),Ld.exports}var d_;function Qy(){if(d_)return jo;d_=1;var r=Zy(),e=dp(),i=zv();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ie?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var ue=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ve=[],ye=-1;function P(t){return{current:t}}function ne(t){0>ye||(t.current=ve[ye],ve[ye]=null,ye--)}function ge(t,n){ye++,ve[ye]=t.current,t.current=n}var we=P(null),He=P(null),$=P(null),fe=P(null);function De(t,n){switch(ge($,n),ge(He,t),ge(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?R0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=R0(n),t=w0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(we),ge(we,t)}function Xe(){ne(we),ne(He),ne($)}function Ge(t){t.memoizedState!==null&&ge(fe,t);var n=we.current,a=w0(n,t.type);n!==a&&(ge(He,t),ge(we,a))}function mt(t){He.current===t&&(ne(we),ne(He)),fe.current===t&&(ne(fe),Ho._currentValue=J)}var Jt,gt;function ct(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+gt}var _t=!1;function st(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var re=ce}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ce){re=ce}t.call(_e.prototype)}}else{try{throw Error()}catch(ce){re=ce}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var V=S.split(`
`),te=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===te.length)for(o=V.length-1,u=te.length-1;1<=o&&0<=u&&V[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==te[u]){var pe=`
`+V[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ct(a):""}function Wt(t,n){switch(t.tag){case 26:case 27:case 5:return ct(t.type);case 16:return ct("Lazy");case 13:return t.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return st(t.type,!1);case 11:return st(t.type.render,!1);case 1:return st(t.type,!0);case 31:return ct("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=Wt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xt=Object.prototype.hasOwnProperty,vt=r.unstable_scheduleCallback,je=r.unstable_cancelCallback,Ce=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,he=r.unstable_ImmediatePriority,xe=r.unstable_UserBlockingPriority,oe=r.unstable_NormalPriority,Ve=r.unstable_LowPriority,Ae=r.unstable_IdlePriority,We=r.log,tt=r.unstable_setDisableYieldValue,Ee=null,Te=null;function Ne(t){if(typeof We=="function"&&tt(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,t)}catch{}}var Oe=Math.clz32?Math.clz32:j,Ue=Math.log,ot=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Ue(t)/ot|0)|0}var Pe=256,Re=262144,Be=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Me(o):(S&=A,S!==0?u=Me(S):a||(a=A&~t,a!==0&&(u=Me(a))))):(A=o&~f,A!==0?u=Me(A):S!==0?u=Me(S):a||(a=o&~t,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function rt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function At(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bi(t,n,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,V=t.expirationTimes,te=t.hiddenUpdates;for(a=S&~a;0<a;){var pe=31-Oe(a),_e=1<<pe;A[pe]=0,V[pe]=-1;var re=te[pe];if(re!==null)for(te[pe]=null,pe=0;pe<re.length;pe++){var ce=re[pe];ce!==null&&(ce.lane&=-536870913)}a&=~_e}o!==0&&_l(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function _l(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Oe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Jr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Oe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function zs(t,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Qr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Hs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $r(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:J0(t.type))}function Pi(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var li=Math.random().toString(36).slice(2),ln="__reactFiber$"+li,yn="__reactProps$"+li,Ti="__reactContainer$"+li,Gs="__reactEvents$"+li,Vs="__reactListeners$"+li,vl="__reactHandles$"+li,eo="__reactResources$"+li,os="__reactMarker$"+li;function to(t){delete t[ln],delete t[yn],delete t[Gs],delete t[Vs],delete t[vl]}function Aa(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ti]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=P0(t);t!==null;){if(a=t[ln])return a;t=P0(t)}return n}t=a,a=t.parentNode}return null}function Ra(t){if(t=t[ln]||t[Ti]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ls(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function wa(t){var n=t[eo];return n||(n=t[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[os]=!0}var Y=new Set,le={};function se(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(le[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Fe={};function Ye(t){return Xt.call(Fe,t)?!0:Xt.call(ke,t)?!1:Ie.test(t)?Fe[t]=!0:(ke[t]=!0,!1)}function Ke(t,n,a){if(Ye(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function et(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Yt(t){if(!t._valueTracker){var n=Lt(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function lt(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,o,u,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+nt(n)):t.value!==""+nt(n)&&(t.value=""+nt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?En(t,S,nt(n)):a!=null?En(t,S,nt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+nt(A):t.removeAttribute("name")}function qi(t,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Yt(t);return}a=a!=null?""+nt(a):"",n=n!=null?""+nt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Yt(t)}function En(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ci(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+nt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function It(t,n,a){if(n!=null&&(n=""+nt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+nt(a):""}function bn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ue(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=nt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Yt(t)}function mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ks(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&An(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&An(t,f,n[f])}function Ai(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(t){return Vx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var yu=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xs=null,js=null;function Ap(t){var n=Ra(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[yn]||null;if(!u)throw Error(s(90));Mn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ot(o)}break e;case"textarea":It(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ci(t,!!a.multiple,n,!1)}}}var Eu=!1;function Rp(t,n,a){if(Eu)return t(n,a);Eu=!0;try{var o=t(n);return o}finally{if(Eu=!1,(Xs!==null||js!==null)&&(rc(),Xs&&(n=Xs,t=js,js=Xs=null,Ap(n),t)))for(n=0;n<t.length;n++)Ap(t[n])}}function no(t,n){var a=t.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Zi)try{var io={};Object.defineProperty(io,"passive",{get:function(){bu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{bu=!1}var Ca=null,Tu=null,Sl=null;function wp(){if(Sl)return Sl;var t,n=Tu,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return Sl=u.slice(t,1<o?1-o:void 0)}function yl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Cp(){return!1}function Xn(t){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ml:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Xn(cs),ao=_({},cs,{view:0,detail:0}),kx=Xn(ao),Au,Ru,so,bl=_({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Au=t.screenX-so.screenX,Ru=t.screenY-so.screenY):Ru=Au=0,so=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Dp=Xn(bl),Xx=_({},bl,{dataTransfer:0}),jx=Xn(Xx),Wx=_({},ao,{relatedTarget:0}),wu=Xn(Wx),Yx=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=Xn(Yx),Kx=_({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zx=Xn(Kx),Jx=_({},cs,{data:0}),Lp=Xn(Jx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=eS[t])?!!n[t]:!1}function Cu(){return tS}var nS=_({},ao,{key:function(t){if(t.key){var n=Qx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iS=Xn(nS),aS=_({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Xn(aS),sS=_({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),rS=Xn(sS),oS=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=Xn(oS),cS=_({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uS=Xn(cS),fS=_({},cs,{newState:0,oldState:0}),dS=Xn(fS),hS=[9,13,27,32],Du=Zi&&"CompositionEvent"in window,ro=null;Zi&&"documentMode"in document&&(ro=document.documentMode);var pS=Zi&&"TextEvent"in window&&!ro,Up=Zi&&(!Du||ro&&8<ro&&11>=ro),Op=" ",Pp=!1;function Ip(t,n){switch(t){case"keyup":return hS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function mS(t,n){switch(t){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(Pp=!0,Op);case"textInput":return t=n.data,t===Op&&Pp?null:t;default:return null}}function gS(t,n){if(Ws)return t==="compositionend"||!Du&&Ip(t,n)?(t=wp(),Sl=Tu=Ca=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Up&&n.locale!=="ko"?null:n.data;default:return null}}var _S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_S[t.type]:n==="textarea"}function zp(t,n,a,o){Xs?js?js.push(o):js=[o]:Xs=o,n=hc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var oo=null,lo=null;function vS(t){y0(t,0)}function Tl(t){var n=ls(t);if(Ot(n))return t}function Hp(t,n){if(t==="change")return n}var Gp=!1;if(Zi){var Lu;if(Zi){var Nu="oninput"in document;if(!Nu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Nu=typeof Vp.oninput=="function"}Lu=Nu}else Lu=!1;Gp=Lu&&(!document.documentMode||9<document.documentMode)}function kp(){oo&&(oo.detachEvent("onpropertychange",Xp),lo=oo=null)}function Xp(t){if(t.propertyName==="value"&&Tl(lo)){var n=[];zp(n,lo,t,Mu(t)),Rp(vS,n)}}function xS(t,n,a){t==="focusin"?(kp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Xp)):t==="focusout"&&kp()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(lo)}function yS(t,n){if(t==="click")return Tl(n)}function MS(t,n){if(t==="input"||t==="change")return Tl(n)}function ES(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:ES;function co(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Xt.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,n){var a=jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function Yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bS=Zi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Ou=null,uo=null,Pu=!1;function Kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||Ys==null||Ys!==Qe(o)||(o=Ys,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=hc(Ou,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ys)))}function us(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Iu={},Zp={};Zi&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function fs(t){if(Iu[t])return Iu[t];if(!qs[t])return t;var n=qs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return Iu[t]=n[a];return t}var Jp=fs("animationend"),Qp=fs("animationiteration"),$p=fs("animationstart"),TS=fs("transitionrun"),AS=fs("transitionstart"),RS=fs("transitioncancel"),em=fs("transitionend"),tm=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Ri(t,n){tm.set(t,n),se(n,[t])}var Al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],Ks=0,Fu=0;function Rl(){for(var t=Ks,n=Fu=Ks=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&nm(a,u,f)}}function wl(t,n,a,o){ui[Ks++]=t,ui[Ks++]=n,ui[Ks++]=a,ui[Ks++]=o,Fu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,a,o){return wl(t,n,a,o),Cl(t)}function ds(t,n){return wl(t,null,null,n),Cl(t)}function nm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Oe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Cl(t){if(50<Uo)throw Uo=0,Kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zs={};function wS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new wS(t,n,a,o)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function im(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Dl(t,n,a,o,u,f){var S=0;if(o=t,typeof t=="function")Hu(t)&&(S=1);else if(typeof t=="string")S=Uy(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=$n(31,a,n,u),t.elementType=w,t.lanes=f,t;case T:return hs(a.children,u,f,n);case M:S=8,u|=24;break;case x:return t=$n(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case I:return t=$n(13,a,n,u),t.elementType=I,t.lanes=f,t;case z:return t=$n(19,a,n,u),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case O:S=9;break e;case C:S=11;break e;case B:S=14;break e;case K:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=$n(S,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function hs(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function Gu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function am(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Vu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var sm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},sm.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var Js=[],Qs=0,Ll=null,fo=0,di=[],hi=0,Da=null,Ii=1,Bi="";function Qi(t,n){Js[Qs++]=fo,Js[Qs++]=Ll,Ll=t,fo=n}function rm(t,n,a){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=Da,Da=t;var o=Ii;t=Bi;var u=32-Oe(o)-1;o&=~(1<<u),a+=1;var f=32-Oe(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ii=1<<32-Oe(n)+u|a<<u|o,Bi=f+t}else Ii=1<<f|a<<u|o,Bi=t}function ku(t){t.return!==null&&(Qi(t,1),rm(t,1,0))}function Xu(t){for(;t===Ll;)Ll=Js[--Qs],Js[Qs]=null,fo=Js[--Qs],Js[Qs]=null;for(;t===Da;)Da=di[--hi],di[hi]=null,Bi=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null}function om(t,n){di[hi++]=Ii,di[hi++]=Bi,di[hi++]=Da,Ii=n.id,Bi=n.overflow,Da=t}var Rn=null,qt=null,bt=!1,La=null,pi=!1,ju=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(fi(n,t)),ju}function lm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[yn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)St(Po[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),bn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||T0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Na(t,!0)}function cm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function $s(t){if(t!==Rn)return!1;if(!bt)return cm(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&qt&&Na(t),cm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=O0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=O0(t)}else n===27?(n=qt,Wa(t.type)?(t=md,md=null,qt=t):qt=n):qt=Rn?gi(t.stateNode.nextSibling):null;return!0}function ps(){qt=Rn=null,bt=!1}function Wu(){var t=La;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),La=null),t}function ho(t){La===null?La=[t]:La.push(t)}var Yu=P(null),ms=null,$i=null;function Ua(t,n,a){ge(Yu,n._currentValue),n._currentValue=a}function ea(t){t._currentValue=Yu.current,ne(Yu)}function qu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),qu(f.return,a,t),o||(S=null);break e}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),qu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function er(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Qn(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===fe.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}u=u.return}t!==null&&Ku(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ms=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return um(ms,t)}function Ul(t,n){return ms===null&&gs(t),um(t,n)}function um(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var CS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},DS=r.unstable_scheduleCallback,LS=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new CS,data:new Map,refCount:0}}function po(t){t.refCount--,t.refCount===0&&DS(LS,function(){t.controller.abort()})}var mo=null,Ju=0,tr=0,nr=null;function NS(t,n){if(mo===null){var a=mo=[];Ju=0,tr=td(),nr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ju++,n.then(fm,fm),n}function fm(){if(--Ju===0&&mo!==null){nr!==null&&(nr.status="fulfilled");var t=mo;mo=null,tr=0,nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function US(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=L.S;L.S=function(t,n){Kg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&NS(t,n),dm!==null&&dm(t,n)};var _s=P(null);function Qu(){var t=_s.current;return t!==null?t:jt.pooledCache}function Ol(t,n){n===null?ge(_s,_s.current):ge(_s,n.pool)}function hm(){var t=Qu();return t===null?null:{parent:cn._currentValue,pool:t}}var ir=Error(s(460)),$u=Error(s(474)),Pl=Error(s(542)),Il={then:function(){}};function pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_m(t),t}throw xs=n,ir}}function vs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,ir):a}}var xs=null;function gm(){if(xs===null)throw Error(s(459));var t=xs;return xs=null,t}function _m(t){if(t===ir||t===Pl)throw Error(s(483))}var ar=null,go=0;function Bl(t){var n=go;return go+=1,ar===null&&(ar=[]),mm(ar,t,n)}function _o(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Fl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function vm(t){function n(q,X){if(t){var ee=q.deletions;ee===null?(q.deletions=[X],q.flags|=16):ee.push(X)}}function a(q,X){if(!t)return null;for(;X!==null;)n(q,X),X=X.sibling;return null}function o(q){for(var X=new Map;q!==null;)q.key!==null?X.set(q.key,q):X.set(q.index,q),q=q.sibling;return X}function u(q,X){return q=Ji(q,X),q.index=0,q.sibling=null,q}function f(q,X,ee){return q.index=ee,t?(ee=q.alternate,ee!==null?(ee=ee.index,ee<X?(q.flags|=67108866,X):ee):(q.flags|=67108866,X)):(q.flags|=1048576,X)}function S(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,X,ee,me){return X===null||X.tag!==6?(X=Gu(ee,q.mode,me),X.return=q,X):(X=u(X,ee),X.return=q,X)}function V(q,X,ee,me){var $e=ee.type;return $e===T?pe(q,X,ee.props.children,me,ee.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&vs($e)===X.type)?(X=u(X,ee.props),_o(X,ee),X.return=q,X):(X=Dl(ee.type,ee.key,ee.props,null,q.mode,me),_o(X,ee),X.return=q,X)}function te(q,X,ee,me){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Vu(ee,q.mode,me),X.return=q,X):(X=u(X,ee.children||[]),X.return=q,X)}function pe(q,X,ee,me,$e){return X===null||X.tag!==7?(X=hs(ee,q.mode,me,$e),X.return=q,X):(X=u(X,ee),X.return=q,X)}function _e(q,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Gu(""+X,q.mode,ee),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return ee=Dl(X.type,X.key,X.props,null,q.mode,ee),_o(ee,X),ee.return=q,ee;case E:return X=Vu(X,q.mode,ee),X.return=q,X;case K:return X=vs(X),_e(q,X,ee)}if(ue(X)||Z(X))return X=hs(X,q.mode,ee,null),X.return=q,X;if(typeof X.then=="function")return _e(q,Bl(X),ee);if(X.$$typeof===U)return _e(q,Ul(q,X),ee);Fl(q,X)}return null}function re(q,X,ee,me){var $e=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return $e!==null?null:A(q,X,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===$e?V(q,X,ee,me):null;case E:return ee.key===$e?te(q,X,ee,me):null;case K:return ee=vs(ee),re(q,X,ee,me)}if(ue(ee)||Z(ee))return $e!==null?null:pe(q,X,ee,me,null);if(typeof ee.then=="function")return re(q,X,Bl(ee),me);if(ee.$$typeof===U)return re(q,X,Ul(q,ee),me);Fl(q,ee)}return null}function ce(q,X,ee,me,$e){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return q=q.get(ee)||null,A(X,q,""+me,$e);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case y:return q=q.get(me.key===null?ee:me.key)||null,V(X,q,me,$e);case E:return q=q.get(me.key===null?ee:me.key)||null,te(X,q,me,$e);case K:return me=vs(me),ce(q,X,ee,me,$e)}if(ue(me)||Z(me))return q=q.get(ee)||null,pe(X,q,me,$e,null);if(typeof me.then=="function")return ce(q,X,ee,Bl(me),$e);if(me.$$typeof===U)return ce(q,X,ee,Ul(X,me),$e);Fl(X,me)}return null}function qe(q,X,ee,me){for(var $e=null,Ct=null,Je=X,dt=X=0,Mt=null;Je!==null&&dt<ee.length;dt++){Je.index>dt?(Mt=Je,Je=null):Mt=Je.sibling;var Dt=re(q,Je,ee[dt],me);if(Dt===null){Je===null&&(Je=Mt);break}t&&Je&&Dt.alternate===null&&n(q,Je),X=f(Dt,X,dt),Ct===null?$e=Dt:Ct.sibling=Dt,Ct=Dt,Je=Mt}if(dt===ee.length)return a(q,Je),bt&&Qi(q,dt),$e;if(Je===null){for(;dt<ee.length;dt++)Je=_e(q,ee[dt],me),Je!==null&&(X=f(Je,X,dt),Ct===null?$e=Je:Ct.sibling=Je,Ct=Je);return bt&&Qi(q,dt),$e}for(Je=o(Je);dt<ee.length;dt++)Mt=ce(Je,q,dt,ee[dt],me),Mt!==null&&(t&&Mt.alternate!==null&&Je.delete(Mt.key===null?dt:Mt.key),X=f(Mt,X,dt),Ct===null?$e=Mt:Ct.sibling=Mt,Ct=Mt);return t&&Je.forEach(function(Ja){return n(q,Ja)}),bt&&Qi(q,dt),$e}function it(q,X,ee,me){if(ee==null)throw Error(s(151));for(var $e=null,Ct=null,Je=X,dt=X=0,Mt=null,Dt=ee.next();Je!==null&&!Dt.done;dt++,Dt=ee.next()){Je.index>dt?(Mt=Je,Je=null):Mt=Je.sibling;var Ja=re(q,Je,Dt.value,me);if(Ja===null){Je===null&&(Je=Mt);break}t&&Je&&Ja.alternate===null&&n(q,Je),X=f(Ja,X,dt),Ct===null?$e=Ja:Ct.sibling=Ja,Ct=Ja,Je=Mt}if(Dt.done)return a(q,Je),bt&&Qi(q,dt),$e;if(Je===null){for(;!Dt.done;dt++,Dt=ee.next())Dt=_e(q,Dt.value,me),Dt!==null&&(X=f(Dt,X,dt),Ct===null?$e=Dt:Ct.sibling=Dt,Ct=Dt);return bt&&Qi(q,dt),$e}for(Je=o(Je);!Dt.done;dt++,Dt=ee.next())Dt=ce(Je,q,dt,Dt.value,me),Dt!==null&&(t&&Dt.alternate!==null&&Je.delete(Dt.key===null?dt:Dt.key),X=f(Dt,X,dt),Ct===null?$e=Dt:Ct.sibling=Dt,Ct=Dt);return t&&Je.forEach(function(Xy){return n(q,Xy)}),bt&&Qi(q,dt),$e}function kt(q,X,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var $e=ee.key;X!==null;){if(X.key===$e){if($e=ee.type,$e===T){if(X.tag===7){a(q,X.sibling),me=u(X,ee.props.children),me.return=q,q=me;break e}}else if(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&vs($e)===X.type){a(q,X.sibling),me=u(X,ee.props),_o(me,ee),me.return=q,q=me;break e}a(q,X);break}else n(q,X);X=X.sibling}ee.type===T?(me=hs(ee.props.children,q.mode,me,ee.key),me.return=q,q=me):(me=Dl(ee.type,ee.key,ee.props,null,q.mode,me),_o(me,ee),me.return=q,q=me)}return S(q);case E:e:{for($e=ee.key;X!==null;){if(X.key===$e)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(q,X.sibling),me=u(X,ee.children||[]),me.return=q,q=me;break e}else{a(q,X);break}else n(q,X);X=X.sibling}me=Vu(ee,q.mode,me),me.return=q,q=me}return S(q);case K:return ee=vs(ee),kt(q,X,ee,me)}if(ue(ee))return qe(q,X,ee,me);if(Z(ee)){if($e=Z(ee),typeof $e!="function")throw Error(s(150));return ee=$e.call(ee),it(q,X,ee,me)}if(typeof ee.then=="function")return kt(q,X,Bl(ee),me);if(ee.$$typeof===U)return kt(q,X,Ul(q,ee),me);Fl(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,X!==null&&X.tag===6?(a(q,X.sibling),me=u(X,ee),me.return=q,q=me):(a(q,X),me=Gu(ee,q.mode,me),me.return=q,q=me),S(q)):a(q,X)}return function(q,X,ee,me){try{go=0;var $e=kt(q,X,ee,me);return ar=null,$e}catch(Je){if(Je===ir||Je===Pl)throw Je;var Ct=$n(29,Je,null,q.mode);return Ct.lanes=me,Ct.return=q,Ct}}}var Ss=vm(!0),xm=vm(!1),Oa=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(t),nm(t,null,a),n}return wl(t,o,n,a),Cl(t)}function vo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jr(t,a)}}function nf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var af=!1;function xo(){if(af){var t=nr;if(t!==null)throw t}}function So(t,n,a,o){af=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,te=V.next;V.next=null,S===null?f=te:S.next=te,S=V;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==S&&(A===null?pe.firstBaseUpdate=te:A.next=te,pe.lastBaseUpdate=V))}if(f!==null){var _e=u.baseState;S=0,pe=te=V=null,A=f;do{var re=A.lane&-536870913,ce=re!==A.lane;if(ce?(yt&re)===re:(o&re)===re){re!==0&&re===tr&&(af=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var qe=t,it=A;re=n;var kt=a;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){_e=qe.call(kt,_e,re);break e}_e=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,re=typeof qe=="function"?qe.call(kt,_e,re):qe,re==null)break e;_e=_({},_e,re);break e;case 2:Oa=!0}}re=A.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(te=pe=ce,V=_e):pe=pe.next=ce,S|=re;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ce=A,A=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(V=_e),u.baseState=V,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ga|=S,t.lanes=S,t.memoizedState=_e}}function Sm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ym(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Sm(a[t],n)}var sr=P(null),zl=P(0);function Mm(t,n){t=ca,ge(zl,t),ge(sr,n),ca=t|n.baseLanes}function sf(){ge(zl,ca),ge(sr,sr.current)}function rf(){ca=zl.current,ne(sr),ne(zl)}var ei=P(null),mi=null;function Ba(t){var n=t.alternate;ge(sn,sn.current&1),ge(ei,t),mi===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(mi=t)}function of(t){ge(sn,sn.current),ge(ei,t),mi===null&&(mi=t)}function Em(t){t.tag===22?(ge(sn,sn.current),ge(ei,t),mi===null&&(mi=t)):Fa()}function Fa(){ge(sn,sn.current),ge(ei,ei.current)}function ti(t){ne(ei),mi===t&&(mi=null),ne(sn)}var sn=P(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hd(a)||pd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ft=null,Gt=null,un=null,Gl=!1,rr=!1,ys=!1,Vl=0,yo=0,or=null,OS=0;function nn(){throw Error(s(321))}function lf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function cf(t,n,a,o,u,f){return ta=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?rg:bf,ys=!1,f=a(o,u),ys=!1,rr&&(f=Tm(n,a,o,u)),bm(t),f}function bm(t){L.H=bo;var n=Gt!==null&&Gt.next!==null;if(ta=0,un=Gt=ft=null,Gl=!1,yo=0,or=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Nl(t)&&(fn=!0))}function Tm(t,n,a,o){ft=t;var u=0;do{if(rr&&(or=null),yo=0,rr=!1,25<=u)throw Error(s(301));if(u+=1,un=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=og,f=n(a,o)}while(rr);return f}function PS(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ft.flags|=1024),n}function uf(){var t=Vl!==0;return Vl=0,t}function ff(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function df(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}ta=0,un=Gt=ft=null,rr=!1,yo=Vl=0,or=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ft.memoizedState=un=t:un=un.next=t,un}function rn(){if(Gt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=un===null?ft.memoizedState:un.next;if(n!==null)un=n,Gt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?ft.memoizedState=un=t:un=un.next=t}return un}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=yo;return yo+=1,or===null&&(or=[]),t=mm(or,t,n),n=ft,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?rg:bf),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===U)return wn(t)}throw Error(s(438,String(t)))}function hf(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=kl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function jl(t){var n=rn();return pf(n,Gt,t)}function pf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=S=null,V=null,te=n,pe=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(yt&_e)===_e:(ta&_e)===_e){var re=te.revertLane;if(re===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===tr&&(pe=!0);else if((ta&re)===re){te=te.next,re===tr&&(pe=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},V===null?(A=V=_e,S=f):V=V.next=_e,ft.lanes|=re,Ga|=re;_e=te.action,ys&&a(f,_e),f=te.hasEagerState?te.eagerState:a(f,_e)}else re={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},V===null?(A=V=re,S=f):V=V.next=re,ft.lanes|=_e,Ga|=_e;te=te.next}while(te!==null&&te!==n);if(V===null?S=f:V.next=A,!Qn(f,t.memoizedState)&&(fn=!0,pe&&(a=nr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function mf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Qn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Am(t,n,a){var o=ft,u=rn(),f=bt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Qn((Gt||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,vf(Cm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,lr(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));f||(ta&127)!==0||Rm(o,n,a)}return a}function Rm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=kl(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wm(t,n,a,o){n.value=a,n.getSnapshot=o,Dm(n)&&Lm(t)}function Cm(t,n,a){return a(function(){Dm(n)&&Lm(t)})}function Dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function Lm(t){var n=ds(t,2);n!==null&&Kn(n,t,2)}function gf(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),ys){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function Nm(t,n,a,o){return t.baseState=a,pf(t,Gt,typeof o=="function"?o:na)}function IS(t,n,a,o,u){if(ql(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Um(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=L.T,S={};L.T=S;try{var A=a(u,o),V=L.S;V!==null&&V(S,A),Om(t,n,A)}catch(te){_f(t,n,te)}finally{f!==null&&S.types!==null&&(f.types=S.types),L.T=f}}else try{f=a(u,o),Om(t,n,f)}catch(te){_f(t,n,te)}}function Om(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Pm(t,n,o)},function(o){return _f(t,n,o)}):Pm(t,n,a)}function Pm(t,n,a){n.status="fulfilled",n.value=a,Im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Um(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}t.action=null}function Im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Bm(t,n){return n}function Fm(t,n){if(bt){var a=jt.formState;if(a!==null){e:{var o=ft;if(bt){if(qt){t:{for(var u=qt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qt=gi(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:n},a.queue=o,a=ig.bind(null,ft,o),o.dispatch=a,o=gf(!1),f=Ef.bind(null,ft,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=IS.bind(null,ft,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function zm(t){var n=rn();return Hm(n,Gt,t)}function Hm(t,n,a){if(n=pf(t,n,Bm)[0],t=jl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(S){throw S===ir?Pl:S}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,lr(9,{destroy:void 0},BS.bind(null,u,a),null)),[o,f,t]}function BS(t,n){t.action=n}function Gm(t){var n=rn(),a=Gt;if(a!==null)return Hm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function lr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=kl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Vm(){return rn().memoizedState}function Wl(t,n,a,o){var u=Fn();ft.flags|=t,u.memoizedState=lr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Yl(t,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&lf(o,Gt.memoizedState.deps)?u.memoizedState=lr(n,f,a,o):(ft.flags|=t,u.memoizedState=lr(1|n,f,a,o))}function km(t,n){Wl(8390656,8,t,n)}function vf(t,n){Yl(2048,8,t,n)}function FS(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=kl(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Xm(t){var n=rn().memoizedState;return FS({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return Yl(4,2,t,n)}function Wm(t,n){return Yl(4,4,t,n)}function Ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qm(t,n,a){a=a!=null?a.concat([t]):null,Yl(4,4,Ym.bind(null,n,t),a)}function xf(){}function Km(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&lf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Zm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&lf(n,o[1]))return o[0];if(o=t(),ys){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o}function Sf(t,n,a){return a===void 0||(ta&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Jg(),ft.lanes|=t,Ga|=t,a)}function Jm(t,n,a,o){return Qn(a,n)?a:sr.current!==null?(t=Sf(t,a,o),Qn(t,n)||(fn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(yt&261930)===0?(fn=!0,t.memoizedState=a):(t=Jg(),ft.lanes|=t,Ga|=t,n)}function Qm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var S=L.T,A={};L.T=A,Ef(t,!1,n,a);try{var V=u(),te=L.S;if(te!==null&&te(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pe=US(V,o);Eo(t,n,pe,ai(t))}else Eo(t,n,o,ai(t))}catch(_e){Eo(t,n,{then:function(){},status:"rejected",reason:_e},ai())}finally{G.p=f,S!==null&&A.types!==null&&(S.types=A.types),L.T=S}}function zS(){}function yf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=$m(t).queue;Qm(t,u,n,J,a===null?zS:function(){return eg(t),a(o)})}function $m(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function eg(t){var n=$m(t);n.next===null&&(n=t.alternate.memoizedState),Eo(t,n.next.queue,{},ai())}function Mf(){return wn(Ho)}function tg(){return rn().memoizedState}function ng(){return rn().memoizedState}function HS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Pa(a);var o=Ia(n,t,a);o!==null&&(Kn(o,n,a),vo(o,n,a)),n={cache:Zu()},t.payload=n;return}n=n.return}}function GS(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?ag(n,a):(a=zu(t,n,a,o),a!==null&&(Kn(a,t,o),sg(a,n,o)))}function ig(t,n,a){var o=ai();Eo(t,n,a,o)}function Eo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))ag(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,S))return wl(t,n,u,0),jt===null&&Rl(),!1}catch{}if(a=zu(t,n,u,o),a!==null)return Kn(a,t,o),sg(a,n,o),!0}return!1}function Ef(t,n,a,o){if(o={lane:2,revertLane:td(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(s(479))}else n=zu(t,a,o,2),n!==null&&Kn(n,t,2)}function ql(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function ag(t,n){rr=Gl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function sg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Jr(t,a)}}var bo={readContext:wn,use:Xl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};bo.useEffectEvent=nn;var rg={readContext:wn,use:Xl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:km,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Wl(4194308,4,Ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Wl(4194308,4,t,n)},useInsertionEffect:function(t,n){Wl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(ys){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(ys){Ne(!0);try{a(n)}finally{Ne(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=GS.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=gf(t);var n=t.queue,a=ig.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=Fn();return Sf(a,t,n)},useTransition:function(){var t=gf(!1);return t=Qm.bind(null,ft,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,u=Fn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(yt&127)!==0||Rm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,km(Cm.bind(null,o,f,t),[t]),o.flags|=2048,lr(9,{destroy:void 0},wm.bind(null,o,f,a,n),null),a},useId:function(){var t=Fn(),n=jt.identifierPrefix;if(bt){var a=Bi,o=Ii;a=(o&~(1<<32-Oe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=OS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ef.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:hf,useCacheRefresh:function(){return Fn().memoizedState=HS.bind(null,ft)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},bf={readContext:wn,use:Xl,useCallback:Km,useContext:wn,useEffect:vf,useImperativeHandle:qm,useInsertionEffect:jm,useLayoutEffect:Wm,useMemo:Zm,useReducer:jl,useRef:Vm,useState:function(){return jl(na)},useDebugValue:xf,useDeferredValue:function(t,n){var a=rn();return Jm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=jl(na)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Am,useId:tg,useHostTransitionStatus:Mf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=rn();return Nm(a,Gt,t,n)},useMemoCache:hf,useCacheRefresh:ng};bf.useEffectEvent=Xm;var og={readContext:wn,use:Xl,useCallback:Km,useContext:wn,useEffect:vf,useImperativeHandle:qm,useInsertionEffect:jm,useLayoutEffect:Wm,useMemo:Zm,useReducer:mf,useRef:Vm,useState:function(){return mf(na)},useDebugValue:xf,useDeferredValue:function(t,n){var a=rn();return Gt===null?Sf(a,t,n):Jm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=mf(na)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Am,useId:tg,useHostTransitionStatus:Mf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,n){var a=rn();return Gt!==null?Nm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:ng};og.useEffectEvent=Xm;function Tf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,o),n!==null&&(Kn(n,t,o),vo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,o),n!==null&&(Kn(n,t,o),vo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(t,o,a),n!==null&&(Kn(n,t,a),vo(n,t,a))}};function lg(t,n,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,f):!0}function cg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Af.enqueueReplaceState(n,n.state,null)}function Ms(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function ug(t){Al(t)}function fg(t){console.error(t)}function dg(t){Al(t)}function Kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(t,n)},a}function pg(t){return t=Pa(t),t.tag=3,t}function mg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){hg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){hg(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function VS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?oc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(t,o,u)),!1}throw Error(s(435,a.tag))}return Qf(t,o,u),oc(),!1}if(bt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ju&&(t=Error(s(422),{cause:o}),ho(fi(t,a)))):(o!==ju&&(n=Error(s(423),{cause:o}),ho(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Rf(t.stateNode,o,u),nf(t,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),No===null?No=[f]:No.push(f),an!==4&&(an=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Rf(a.stateNode,o,t),nf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=pg(u),mg(u,t,a,o),nf(a,u),!1}a=a.return}while(a!==null);return!1}var wf=Error(s(461)),fn=!1;function Cn(t,n,a,o){n.child=t===null?xm(n,null,a,o):Ss(n,t.child,a,o)}function gg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return gs(n),o=cf(t,n,a,S,f,u),A=uf(),t!==null&&!fn?(ff(t,n,u),ia(t,n,u)):(bt&&A&&ku(n),n.flags|=1,Cn(t,n,o,u),n.child)}function _g(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,vg(t,n,f,o,u)):(t=Dl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!If(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(S,o)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Ji(f,o),t.ref=n.ref,t.return=n,n.child=t}function vg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(co(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,If(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return Cf(t,n,a,o,u)}function xg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Sg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(n,f!==null?f.cachePool:null),f!==null?Mm(n,f):sf(),Em(n);else return o=n.lanes=536870912,Sg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ol(n,f.cachePool),Mm(n,f),Fa(),n.memoizedState=null):(t!==null&&Ol(n,null),sf(),Fa());return Cn(t,n,u,a),n.child}function To(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Sg(t,n,a,o,u){var f=Qu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ol(n,null),sf(),Em(n),t!==null&&er(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function yg(t,n,a){return Ss(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function kS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,To(null,t);if(of(n),(t=qt)?(t=U0(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=am(t),a.return=n,n.child=a,Rn=n,qt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Zl(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(of(n),u)if(n.flags&256)n.flags&=-257,n=yg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||er(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=jt,o!==null&&(S=zs(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ds(t,S),Kn(o,t,S),wf;oc(),n=yg(t,n,a)}else t=f.treeContext,qt=gi(S.nextSibling),Rn=n,bt=!0,La=null,pi=!1,t!==null&&om(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Cf(t,n,a,o,u){return gs(n),a=cf(t,n,a,o,void 0,u),o=uf(),t!==null&&!fn?(ff(t,n,u),ia(t,n,u)):(bt&&o&&ku(n),n.flags|=1,Cn(t,n,a,u),n.child)}function Mg(t,n,a,o,u,f){return gs(n),n.updateQueue=null,a=Tm(n,o,a,u),bm(t),o=uf(),t!==null&&!fn?(ff(t,n,f),ia(t,n,f)):(bt&&o&&ku(n),n.flags|=1,Cn(t,n,a,f),n.child)}function Eg(t,n,a,o,u){if(gs(n),n.stateNode===null){var f=Zs,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ef(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Zs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Tf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Af.enqueueReplaceState(f,f.state,null),So(n,o,f,u),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,V=Ms(a,A);f.props=V;var te=f.context,pe=a.contextType;S=Zs,typeof pe=="object"&&pe!==null&&(S=wn(pe));var _e=a.getDerivedStateFromProps;pe=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==S)&&cg(n,f,o,S),Oa=!1;var re=n.memoizedState;f.state=re,So(n,o,f,u),xo(),te=n.memoizedState,A||re!==te||Oa?(typeof _e=="function"&&(Tf(n,a,_e,o),te=n.memoizedState),(V=Oa||lg(n,a,V,o,re,te,S))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=S,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,tf(t,n),S=n.memoizedProps,pe=Ms(a,S),f.props=pe,_e=n.pendingProps,re=f.context,te=a.contextType,V=Zs,typeof te=="object"&&te!==null&&(V=wn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_e||re!==V)&&cg(n,f,o,V),Oa=!1,re=n.memoizedState,f.state=re,So(n,o,f,u),xo();var ce=n.memoizedState;S!==_e||re!==ce||Oa||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof A=="function"&&(Tf(n,a,A,o),ce=n.memoizedState),(pe=Oa||lg(n,a,pe,o,re,ce,V)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=V,o=pe):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Jl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ss(n,t.child,null,u),n.child=Ss(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ia(t,n,u),t}function bg(t,n,a,o){return ps(),n.flags|=256,Cn(t,n,a,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:hm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Tg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Ba(n):Fa(),(t=qt)?(t=U0(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=am(t),a.return=n,n.child=a,Rn=n,qt=null)):t=null,t===null)throw Na(n);return pd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Fa(),u=n.mode,A=Ql({mode:"hidden",children:A},u),o=hs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Lf(a),o.childLanes=Nf(t,S,a),n.memoizedState=Df,To(null,o)):(Ba(n),Uf(n,A))}var V=t.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=Of(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),A=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),A=hs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Ss(n,t.child,null,a),o=n.child,o.memoizedState=Lf(a),o.childLanes=Nf(t,S,a),n.memoizedState=Df,n=To(null,o));else if(Ba(n),pd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var te=S.dgst;S=te,o=Error(s(419)),o.stack="",o.digest=S,ho({value:o,source:null,stack:null}),n=Of(t,n,a)}else if(fn||er(t,n,a,!1),S=(a&t.childLanes)!==0,fn||S){if(S=jt,S!==null&&(o=zs(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,ds(t,o),Kn(S,t,o),wf;hd(A)||oc(),n=Of(t,n,a)}else hd(A)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,qt=gi(A.nextSibling),Rn=n,bt=!0,La=null,pi=!1,t!==null&&om(n,t),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Fa(),A=o.fallback,u=n.mode,V=t.child,te=V.sibling,o=Ji(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,te!==null?A=Ji(te,A):(A=hs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,To(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Lf(a):(u=A.cachePool,u!==null?(V=cn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=hm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Nf(t,S,a),n.memoizedState=Df,To(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Uf(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Of(t,n,a){return Ss(n,t.child,null,a),t=Uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ag(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),qu(t.return,n,a)}function Pf(t,n,a,o,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function Rg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ge(sn,S),Cn(t,n,o,a),o=bt?fo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,a,n);else if(t.tag===19)Ag(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Hl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Hl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pf(n,!0,a,null,f,o);break;case"together":Pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(er(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function If(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function XS(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Ua(n,cn,t.memoizedState.cache),ps();break;case 27:case 5:Ge(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tg(t,n,a):(Ba(n),t=ia(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Rg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(sn,sn.current),o)break;return null;case 22:return n.lanes=0,xg(t,n,a,n.pendingProps);case 24:Ua(n,cn,t.memoizedState.cache)}return ia(t,n,a)}function wg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!If(t,a)&&(n.flags&128)===0)return fn=!1,XS(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,bt&&(n.flags&1048576)!==0&&rm(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=vs(n.elementType),n.type=t,typeof t=="function")Hu(t)?(o=Ms(t,o),n.tag=1,n=Eg(null,n,t,o,a)):(n.tag=0,n=Cf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=gg(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=_g(null,n,t,o,a);break e}}throw n=de(t)||t,Error(s(306,n,""))}}return n;case 0:return Cf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ms(o,n.pendingProps),Eg(t,n,o,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,tf(t,n),So(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ua(n,cn,o),o!==f.cache&&Ku(n,[cn],a,!0),xo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bg(t,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),ho(u),n=bg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=gi(t.firstChild),Rn=n,bt=!0,La=null,pi=!0,a=xm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ps(),o===u){n=ia(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Jl(t,n),t===null?(a=z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=pc($.current).createElement(a),o[ln]=n,o[yn]=t,Dn(o,a,t),R(o),n.stateNode=o):n.memoizedState=z0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&bt&&(o=n.stateNode=I0(n.type,n.pendingProps,$.current),Rn=n,pi=!0,u=qt,Wa(n.type)?(md=u,qt=gi(o.firstChild)):qt=u),Cn(t,n,n.pendingProps.children,a),Jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=qt)&&(o=Sy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,qt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Na(n)),Ge(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,ud(u,f)?o=null:S!==null&&ud(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=cf(t,n,PS,null,null,a),Ho._currentValue=u),Jl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=qt)&&(a=yy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,qt=null,t=!0):t=!1),t||Na(n)),null;case 13:return Tg(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ss(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return gg(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gs(n),u=wn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return _g(t,n,n.type,n.pendingProps,a);case 15:return vg(t,n,n.type,n.pendingProps,a);case 19:return Rg(t,n,a);case 31:return kS(t,n,a);case 22:return xg(t,n,a,n.pendingProps);case 24:return gs(n),o=wn(cn),t===null?(u=Qu(),u===null&&(u=jt,f=Zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ef(n),Ua(n,cn,u)):((t.lanes&a)!==0&&(tf(t,n),So(n,null,null,a),xo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,cn,o)):(o=f.cache,Ua(n,cn,o),o!==u.cache&&Ku(n,[cn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function Bf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(t0())t.flags|=8192;else throw xs=Il,$u}else t.flags&=-16777217}function Cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!X0(n))if(t0())t.flags|=8192;else throw xs=Il,$u}function $l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pt():536870912,t.lanes|=n,dr|=n)}function Ao(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function jS(t,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(cn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&($s(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(aa(n),f!==null?(Kt(n),Cg(n,f)):(Kt(n),Bf(n,u,null,o,a))):f?f!==t.memoizedState?(aa(n),Kt(n),Cg(n,f)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&aa(n),Kt(n),Bf(n,u,t,o,a)),null;case 27:if(mt(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=we.current,$s(n)?lm(n):(t=I0(u,o,a),n.stateNode=t,aa(n))}return Kt(n),null;case 5:if(mt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=we.current,$s(n))lm(n);else{var S=pc($.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[ln]=n,f[yn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Kt(n),Bf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=$.current,$s(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||T0(t.nodeValue,a)),t||Na(n,!0)}else t=pc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=$s(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),Kt(n),null);case 4:return Xe(),t===null&&sd(n.stateNode.containerInfo),Kt(n),null;case 10:return ea(n.type),Kt(n),null;case 19:if(ne(sn),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ao(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Hl(t),f!==null){for(n.flags|=128,Ao(o,!1),t=f.updateQueue,n.updateQueue=t,$l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)im(a,t),a=a.sibling;return ge(sn,sn.current&1|2),bt&&Qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>ac&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(t=Hl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,$l(n,t),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Kt(n),null}else 2*b()-o.renderingStartTime>ac&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=sn.current,ge(sn,u?a&1|2:a&1),bt&&Qi(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return ti(n),rf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ne(_s),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(cn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function WS(t,n){switch(Xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ea(cn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(sn),null;case 4:return Xe(),null;case 10:return ea(n.type),null;case 22:case 23:return ti(n),rf(),t!==null&&ne(_s),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ea(cn),null;case 25:return null;default:return null}}function Dg(t,n){switch(Xu(n),n.tag){case 3:ea(cn),Xe();break;case 26:case 27:case 5:mt(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:ne(sn);break;case 10:ea(n.type);break;case 22:case 23:ti(n),rf(),t!==null&&ne(_s);break;case 24:ea(cn)}}function Ro(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Ft(n,n.return,A)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var V=a,te=A;try{te()}catch(pe){Ft(u,V,pe)}}}o=o.next}while(o!==f)}}catch(pe){Ft(n,n.return,pe)}}function Lg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ym(n,a)}catch(o){Ft(t,t.return,o)}}}function Ng(t,n,a){a.props=Ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function wo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function Fi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function Ug(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function Ff(t,n,a){try{var o=t.stateNode;py(o,t.type,a,n),o[yn]=n}catch(u){Ft(t,t.return,u)}}function Og(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Hf(t,n,a),t=t.sibling;t!==null;)Hf(t,n,a),t=t.sibling}function ec(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ec(t,n,a),t=t.sibling;t!==null;)ec(t,n,a),t=t.sibling}function Pg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[ln]=t,n[yn]=a}catch(f){Ft(t,t.return,f)}}var sa=!1,dn=!1,Gf=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,xn=null;function YS(t,n){if(t=t.containerInfo,ld=yc,t=qp(t),Uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,V=-1,te=0,pe=0,_e=t,re=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(A=S+u),_e!==f||o!==0&&_e.nodeType!==3||(V=S+o),_e.nodeType===3&&(S+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)re=_e,_e=ce;for(;;){if(_e===t)break t;if(re===a&&++te===u&&(A=S),re===f&&++pe===o&&(V=S),(ce=_e.nextSibling)!==null)break;_e=re,re=_e.parentNode}_e=ce}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:t,selectionRange:a},yc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qe=Ms(a.type,u);t=o.getSnapshotBeforeUpdate(qe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Ft(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)dd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Bg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),o&4&&Ro(5,a);break;case 1:if(oa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ft(a,a.return,S)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ft(a,a.return,S)}}o&64&&Lg(a),o&512&&wo(a,a.return);break;case 3:if(oa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(t,n)}catch(S){Ft(a,a.return,S)}}break;case 27:n===null&&o&4&&Pg(a);case 26:case 5:oa(t,a),n===null&&o&4&&Ug(a),o&512&&wo(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),o&4&&Hg(t,a);break;case 13:oa(t,a),o&4&&Gg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),My(t,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||dn,u=sa;var f=dn;sa=o,(dn=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),sa=u,dn=f}break;case 30:break;default:oa(t,a)}}function Fg(t){var n=t.alternate;n!==null&&(t.alternate=null,Fg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&to(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,jn=!1;function ra(t,n,a){for(a=a.child;a!==null;)zg(t,n,a),a=a.sibling}function zg(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:dn||Fi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Fi(a,n);var o=$t,u=jn;Wa(a.type)&&($t=a.stateNode,jn=!1),ra(t,n,a),Bo(a.stateNode),$t=o,jn=u;break;case 5:dn||Fi(a,n);case 6:if(o=$t,u=jn,$t=null,ra(t,n,a),$t=o,jn=u,$t!==null)if(jn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:$t!==null&&(jn?(t=$t,L0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Sr(t)):L0($t,a.stateNode));break;case 4:o=$t,u=jn,$t=a.stateNode.containerInfo,jn=!0,ra(t,n,a),$t=o,jn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),dn||za(4,a,n),ra(t,n,a);break;case 1:dn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ng(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ra(t,n,a),dn=o;break;default:ra(t,n,a)}}function Hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Sr(t)}catch(a){Ft(n,n.return,a)}}}function Gg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Sr(t)}catch(a){Ft(n,n.return,a)}}function qS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ig),n;default:throw Error(s(435,t.tag))}}function tc(t,n){var a=qS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=iy.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){$t=A.stateNode,jn=!1;break e}break;case 5:$t=A.stateNode,jn=!1;break e;case 3:case 4:$t=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if($t===null)throw Error(s(160));zg(f,S,u),$t=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Vg(n,t),n=n.sibling}var wi=null;function Vg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),Yn(t),o&4&&(za(3,t,t.return),Ro(3,t),za(5,t,t.return));break;case 1:Wn(n,t),Yn(t),o&512&&(dn||a===null||Fi(a,a.return)),o&64&&sa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Wn(n,t),Yn(t),o&512&&(dn||a===null||Fi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[os]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[ln]=t,R(f),o=f;break e;case"link":var S=V0("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=V0("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=t,R(f),o=f}t.stateNode=o}else k0(u,t.type,t.stateNode);else t.stateNode=G0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?k0(u,t.type,t.stateNode):G0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),Yn(t),o&512&&(dn||a===null||Fi(a,a.return)),a!==null&&o&4&&Ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),Yn(t),o&512&&(dn||a===null||Fi(a,a.return)),t.flags&32){u=t.stateNode;try{mn(u,"")}catch(qe){Ft(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ff(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Gf=!0);break;case 6:if(Wn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Ft(t,t.return,qe)}}break;case 3:if(_c=null,u=wi,wi=mc(n.containerInfo),Wn(n,t),wi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(qe){Ft(t,t.return,qe)}Gf&&(Gf=!1,kg(t));break;case 4:o=wi,wi=mc(t.stateNode.containerInfo),Wn(n,t),Yn(t),wi=o;break;case 12:Wn(n,t),Yn(t);break;case 31:Wn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 13:Wn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,te=sa,pe=dn;if(sa=te||u,dn=pe||V,Wn(n,t),dn=pe,sa=te,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||sa||dn||Es(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=V.stateNode;var _e=V.memoizedProps.style,re=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(qe){Ft(V,V.return,qe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(qe){Ft(V,V.return,qe)}}}else if(n.tag===18){if(a===null){V=n;try{var ce=V.stateNode;u?N0(ce,!0):N0(V.stateNode,!1)}catch(qe){Ft(V,V.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,tc(t,a))));break;case 19:Wn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,tc(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Og(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=zf(t);ec(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var A=zf(t);ec(t,A,S);break;case 3:case 4:var V=a.stateNode.containerInfo,te=zf(t);Hf(t,te,V);break;default:throw Error(s(161))}}catch(pe){Ft(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function kg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;kg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bg(t,n.alternate,n),n=n.sibling}function Es(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Es(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ng(n,n.return,a),Es(n);break;case 27:Bo(n.stateNode);case 26:case 5:Fi(n,n.return),Es(n);break;case 22:n.memoizedState===null&&Es(n);break;case 30:Es(n);break;default:Es(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),Ro(4,f);break;case 1:if(la(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ft(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Sm(V[u],A)}catch(te){Ft(o,o.return,te)}}a&&S&64&&Lg(f),wo(f,f.return);break;case 27:Pg(f);case 26:case 5:la(u,f,a),a&&o===null&&S&4&&Ug(f),wo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&S&4&&Hg(u,f);break;case 13:la(u,f,a),a&&S&4&&Gg(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),wo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&po(a))}function kf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xg(t,n,a,o),n=n.sibling}function Xg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&Ro(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ft(n,n.return,V)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,o):Co(t,n):f._visibility&2?Ci(t,n,a,o):(f._visibility|=2,cr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(S,n);break;case 24:Ci(t,n,a,o),u&2048&&kf(n.alternate,n);break;default:Ci(t,n,a,o)}}function cr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,A=a,V=o,te=S.flags;switch(S.tag){case 0:case 11:case 15:cr(f,S,A,V,u),Ro(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?cr(f,S,A,V,u):Co(f,S):(pe._visibility|=2,cr(f,S,A,V,u)),u&&te&2048&&Vf(S.alternate,S);break;case 24:cr(f,S,A,V,u),u&&te&2048&&kf(S.alternate,S);break;default:cr(f,S,A,V,u)}n=n.sibling}}function Co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Vf(o.alternate,o);break;case 24:Co(a,o),u&2048&&kf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var Do=8192;function ur(t,n,a){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)jg(t,n,a),t=t.sibling}function jg(t,n,a){switch(t.tag){case 26:ur(t,n,a),t.flags&Do&&t.memoizedState!==null&&Oy(a,wi,t.memoizedState,t.memoizedProps);break;case 5:ur(t,n,a);break;case 3:case 4:var o=wi;wi=mc(t.stateNode.containerInfo),ur(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,ur(t,n,a),Do=o):ur(t,n,a));break;default:ur(t,n,a)}}function Wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,qg(o,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&za(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,nc(t)):Lo(t);break;default:Lo(t)}}function nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,qg(o,t)}Wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),nc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,nc(n));break;default:nc(n)}t=t.sibling}}function qg(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(Fg(o),o===a){xn=null;break e}if(u!==null){u.return=f,xn=u;break e}xn=f}}}var KS={getCacheForType:function(t){var n=wn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},ZS=typeof WeakMap=="function"?WeakMap:Map,Ut=0,jt=null,xt=null,yt=0,Bt=0,ni=null,Ha=!1,fr=!1,Xf=!1,ca=0,an=0,Ga=0,bs=0,jf=0,ii=0,dr=0,No=null,qn=null,Wf=!1,ic=0,Kg=0,ac=1/0,sc=null,Va=null,gn=0,ka=null,hr=null,ua=0,Yf=0,qf=null,Zg=null,Uo=0,Kf=null;function ai(){return(Ut&2)!==0&&yt!==0?yt&-yt:L.T!==null?td():$r()}function Jg(){if(ii===0)if((yt&536870912)===0||bt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function Kn(t,n,a){(t===jt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(pr(t,0),Xa(t,yt,ii,!1)),Nn(t,a),((Ut&2)===0||t!==jt)&&(t===jt&&((Ut&2)===0&&(bs|=a),an===4&&Xa(t,yt,ii,!1)),zi(t))}function Qg(t,n,a){if((Ut&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?$S(t,n):Jf(t,n,!0),f=o;do{if(u===0){fr&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!JS(a)){u=Jf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;u=No;var V=A.current.memoizedState.isDehydrated;if(V&&(pr(A,S).flags|=256),S=Jf(A,S,!1),S!==2){if(Xf&&!V){A.errorRecoveryDisabledLanes|=f,bs|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){pr(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ii,!Ha);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ic+300-b(),10<u)){if(Xa(o,n,ii,!Ha),Se(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=C0($g.bind(null,o,a,qn,sc,Wf,n,ii,bs,dr,Ha,f,"Throttled",-0,0),u);break e}$g(o,a,qn,sc,Wf,n,ii,bs,dr,Ha,f,null,-0,0)}}break}while(!0);zi(t)}function $g(t,n,a,o,u,f,S,A,V,te,pe,_e,re,ce){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},jg(n,f,_e);var qe=(f&62914560)===f?ic-b():(f&4194048)===f?Kg-b():0;if(qe=Py(_e,qe),qe!==null){ua=f,t.cancelPendingCommit=qe(o0.bind(null,t,n,f,a,o,u,S,A,V,pe,_e,null,re,ce)),Xa(t,f,S,!te);return}}o0(t,n,f,a,o,u,S,A,V)}function JS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~jf,n&=~bs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Oe(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&_l(t,a,n)}function rc(){return(Ut&6)===0?(Oo(0),!1):!0}function Zf(){if(xt!==null){if(Bt===0)var t=xt.return;else t=xt,$i=ms=null,df(t),ar=null,go=0,t=xt;for(;t!==null;)Dg(t.alternate,t),t=t.return;xt=null}}function pr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_y(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Zf(),jt=t,xt=a=Ji(t.current,null),yt=n,Bt=0,ni=null,Ha=!1,fr=Le(t,n),Xf=!1,dr=ii=jf=bs=Ga=an=0,qn=No=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Oe(o),f=1<<u;n|=t[u],o&=~f}return ca=n,Rl(),a}function e0(t,n){ft=null,L.H=bo,n===ir||n===Pl?(n=gm(),Bt=3):n===$u?(n=gm(),Bt=4):Bt=n===wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xt===null&&(an=1,Kl(t,fi(n,t.current)))}function t0(){var t=ei.current;return t===null?!0:(yt&4194048)===yt?mi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===mi:!1}function n0(){var t=L.H;return L.H=bo,t===null?bo:t}function i0(){var t=L.A;return L.A=KS,t}function oc(){an=4,Ha||(yt&4194048)!==yt&&ei.current!==null||(fr=!0),(Ga&134217727)===0&&(bs&134217727)===0||jt===null||Xa(jt,yt,ii,!1)}function Jf(t,n,a){var o=Ut;Ut|=2;var u=n0(),f=i0();(jt!==t||yt!==n)&&(sc=null,pr(t,n)),n=!1;var S=an;e:do try{if(Bt!==0&&xt!==null){var A=xt,V=ni;switch(Bt){case 8:Zf(),S=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var te=Bt;if(Bt=0,ni=null,mr(t,A,V,te),a&&fr){S=0;break e}break;default:te=Bt,Bt=0,ni=null,mr(t,A,V,te)}}QS(),S=an;break}catch(pe){e0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,$i=ms=null,Ut=o,L.H=u,L.A=f,xt===null&&(jt=null,yt=0,Rl()),S}function QS(){for(;xt!==null;)a0(xt)}function $S(t,n){var a=Ut;Ut|=2;var o=n0(),u=i0();jt!==t||yt!==n?(sc=null,ac=b()+500,pr(t,n)):fr=Le(t,n);e:do try{if(Bt!==0&&xt!==null){n=xt;var f=ni;t:switch(Bt){case 1:Bt=0,ni=null,mr(t,n,f,1);break;case 2:case 9:if(pm(f)){Bt=0,ni=null,s0(n);break}n=function(){Bt!==2&&Bt!==9||jt!==t||(Bt=7),zi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:pm(f)?(Bt=0,ni=null,s0(n)):(Bt=0,ni=null,mr(t,n,f,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var A=xt;if(S?X0(S):A.stateNode.complete){Bt=0,ni=null;var V=A.sibling;if(V!==null)xt=V;else{var te=A.return;te!==null?(xt=te,lc(te)):xt=null}break t}}Bt=0,ni=null,mr(t,n,f,5);break;case 6:Bt=0,ni=null,mr(t,n,f,6);break;case 8:Zf(),an=6;break e;default:throw Error(s(462))}}ey();break}catch(pe){e0(t,pe)}while(!0);return $i=ms=null,L.H=o,L.A=u,Ut=a,xt!==null?0:(jt=null,yt=0,Rl(),an)}function ey(){for(;xt!==null&&!Ce();)a0(xt)}function a0(t){var n=wg(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?lc(t):xt=n}function s0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Mg(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Mg(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:df(n);default:Dg(a,n),n=xt=im(n,ca),n=wg(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?lc(t):xt=n}function mr(t,n,a,o){$i=ms=null,df(n),ar=null,go=0;var u=n.return;try{if(VS(t,u,n,a,yt)){an=1,Kl(t,fi(a,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;an=1,Kl(t,fi(a,t.current)),xt=null;return}n.flags&32768?(bt||o===1?t=!0:fr||(yt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),r0(n,t)):lc(n)}function lc(t){var n=t;do{if((n.flags&32768)!==0){r0(n,Ha);return}t=n.return;var a=jS(n.alternate,n,ca);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);an===0&&(an=5)}function r0(t,n){do{var a=WS(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);an=6,xt=null}function o0(t,n,a,o,u,f,S,A,V){t.cancelPendingCommit=null;do cc();while(gn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Fu,bi(t,a,f,S,A,V),t===jt&&(xt=jt=null,yt=0),hr=n,ka=t,ua=a,Yf=f,qf=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(oe,function(){return d0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=G.p,G.p=2,S=Ut,Ut|=4;try{YS(t,n,a)}finally{Ut=S,G.p=u,L.T=o}}gn=1,l0(),c0(),u0()}}function l0(){if(gn===1){gn=0;var t=ka,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=G.p;G.p=2;var u=Ut;Ut|=4;try{Vg(n,t);var f=cd,S=qp(t.containerInfo),A=f.focusedElem,V=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Yp(A.ownerDocument.documentElement,A)){if(V!==null&&Uu(A)){var te=V.start,pe=V.end;if(pe===void 0&&(pe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(pe,A.value.length);else{var _e=A.ownerDocument||document,re=_e&&_e.defaultView||window;if(re.getSelection){var ce=re.getSelection(),qe=A.textContent.length,it=Math.min(V.start,qe),kt=V.end===void 0?it:Math.min(V.end,qe);!ce.extend&&it>kt&&(S=kt,kt=it,it=S);var q=Wp(A,it),X=Wp(A,kt);if(q&&X&&(ce.rangeCount!==1||ce.anchorNode!==q.node||ce.anchorOffset!==q.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var ee=_e.createRange();ee.setStart(q.node,q.offset),ce.removeAllRanges(),it>kt?(ce.addRange(ee),ce.extend(X.node,X.offset)):(ee.setEnd(X.node,X.offset),ce.addRange(ee))}}}}for(_e=[],ce=A;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_e.length;A++){var me=_e[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}yc=!!ld,cd=ld=null}finally{Ut=u,G.p=o,L.T=a}}t.current=n,gn=2}}function c0(){if(gn===2){gn=0;var t=ka,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=G.p;G.p=2;var u=Ut;Ut|=4;try{Bg(t,n.alternate,n)}finally{Ut=u,G.p=o,L.T=a}}gn=3}}function u0(){if(gn===4||gn===3){gn=0,N();var t=ka,n=hr,a=ua,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,hr=ka=null,f0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Hs(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=G.p,G.p=2,L.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{L.T=n,G.p=u}}(ua&3)!==0&&cc(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Kf?Uo++:(Uo=0,Kf=t):Uo=0,Oo(0)}}function f0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,po(n)))}function cc(){return l0(),c0(),u0(),d0()}function d0(){if(gn!==5)return!1;var t=ka,n=Yf;Yf=0;var a=Hs(ua),o=L.T,u=G.p;try{G.p=32>a?32:a,L.T=null,a=qf,qf=null;var f=ka,S=ua;if(gn=0,hr=ka=null,ua=0,(Ut&6)!==0)throw Error(s(331));var A=Ut;if(Ut|=4,Yg(f.current),Xg(f,f.current,S,a),Ut=A,Oo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{G.p=u,L.T=o,f0(t,n)}}function h0(t,n,a){n=fi(a,n),n=Rf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(Nn(t,2),zi(t))}function Ft(t,n,a){if(t.tag===3)h0(t,t,a);else for(;n!==null;){if(n.tag===3){h0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=fi(a,t),a=pg(2),o=Ia(n,a,2),o!==null&&(mg(a,o,n,t),Nn(o,2),zi(o));break}}n=n.return}}function Qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ZS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(yt&a)===a&&(an===4||an===3&&(yt&62914560)===yt&&300>b()-ic?(Ut&2)===0&&pr(t,0):jf|=a,dr===yt&&(dr=0)),zi(t)}function p0(t,n){n===0&&(n=Pt()),t=ds(t,n),t!==null&&(Nn(t,n),zi(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),p0(t,a)}function iy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),p0(t,a)}function ay(t,n){return vt(t,n)}var uc=null,gr=null,$f=!1,fc=!1,ed=!1,ja=0;function zi(t){t!==gr&&t.next===null&&(gr===null?uc=gr=t:gr=gr.next=t),fc=!0,$f||($f=!0,ry())}function Oo(t,n){if(!ed&&fc){ed=!0;do for(var a=!1,o=uc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Oe(42|t)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,v0(o,f))}else f=yt,f=Se(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Le(o,f)||(a=!0,v0(o,f));o=o.next}while(a);ed=!1}}function sy(){m0()}function m0(){fc=$f=!1;var t=0;ja!==0&&gy()&&(t=ja);for(var n=b(),a=null,o=uc;o!==null;){var u=o.next,f=g0(o,n);f===0?(o.next=null,a===null?uc=u:a.next=u,u===null&&(gr=a)):(a=o,(t!==0||(f&3)!==0)&&(fc=!0)),o=u}gn!==0&&gn!==5||Oo(t),ja!==0&&(ja=0)}function g0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Oe(f),A=1<<S,V=u[S];V===-1?((A&a)===0||(A&o)!==0)&&(u[S]=rt(A,n)):V<=n&&(t.expiredLanes|=A),f&=~A}if(n=jt,a=yt,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&je(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&je(o),Hs(a)){case 2:case 8:a=xe;break;case 32:a=oe;break;case 268435456:a=Ae;break;default:a=oe}return o=_0.bind(null,t),a=vt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&je(o),t.callbackPriority=2,t.callbackNode=null,2}function _0(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(cc()&&t.callbackNode!==a)return null;var o=yt;return o=Se(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Qg(t,o,n),g0(t,b()),t.callbackNode!=null&&t.callbackNode===a?_0.bind(null,t):null)}function v0(t,n){if(cc())return null;Qg(t,n,!0)}function ry(){vy(function(){(Ut&6)!==0?vt(he,sy):m0()})}function td(){if(ja===0){var t=tr;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),ja=t}return ja}function x0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xl(""+t)}function S0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=x0((u[yn]||null).action),S=o.submitter;S&&(n=(n=S[yn]||null)?x0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new El("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var V=S?S0(u,S):new FormData(u);yf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=S?S0(u,S):new FormData(u),yf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var nd=0;nd<Bu.length;nd++){var id=Bu[nd],ly=id.toLowerCase(),cy=id[0].toUpperCase()+id.slice(1);Ri(ly,"on"+cy)}Ri(Jp,"onAnimationEnd"),Ri(Qp,"onAnimationIteration"),Ri($p,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(TS,"onTransitionRun"),Ri(AS,"onTransitionStart"),Ri(RS,"onTransitionCancel"),Ri(em,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function y0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],V=A.instance,te=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){Al(pe)}u.currentTarget=null,f=V}else for(S=0;S<o.length;S++){if(A=o[S],V=A.instance,te=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){Al(pe)}u.currentTarget=null,f=V}}}}function St(t,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var o=t+"__bubble";a.has(o)||(M0(n,t,2,!1),a.add(o))}function ad(t,n,a){var o=0;n&&(o|=4),M0(a,t,o,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function sd(t){if(!t[dc]){t[dc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||ad(a,!1,t),ad(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[dc]||(n[dc]=!0,ad("selectionchange",!1,n))}}function M0(t,n,a,o){switch(J0(n)){case 2:var u=Fy;break;case 8:u=zy;break;default:u=Sd}a=u.bind(null,n,a,t),u=void 0,!bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function rd(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Aa(A),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=f=S;continue e}A=A.parentNode}}o=o.return}Rp(function(){var te=f,pe=Mu(a),_e=[];e:{var re=tm.get(t);if(re!==void 0){var ce=El,qe=t;switch(t){case"keypress":if(yl(a)===0)break e;case"keydown":case"keyup":ce=iS;break;case"focusin":qe="focus",ce=wu;break;case"focusout":qe="blur",ce=wu;break;case"beforeblur":case"afterblur":ce=wu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=rS;break;case Jp:case Qp:case $p:ce=qx;break;case em:ce=lS;break;case"scroll":case"scrollend":ce=kx;break;case"wheel":ce=uS;break;case"copy":case"cut":case"paste":ce=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Np;break;case"toggle":case"beforetoggle":ce=dS}var it=(n&4)!==0,kt=!it&&(t==="scroll"||t==="scrollend"),q=it?re!==null?re+"Capture":null:re;it=[];for(var X=te,ee;X!==null;){var me=X;if(ee=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||ee===null||q===null||(me=no(X,q),me!=null&&it.push(Io(X,me,ee))),kt)break;X=X.return}0<it.length&&(re=new ce(re,qe,null,a,pe),_e.push({event:re,listeners:it}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==yu&&(qe=a.relatedTarget||a.fromElement)&&(Aa(qe)||qe[Ti]))break e;if((ce||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=te,qe=qe?Aa(qe):null,qe!==null&&(kt=c(qe),it=qe.tag,qe!==kt||it!==5&&it!==27&&it!==6)&&(qe=null)):(ce=null,qe=te),ce!==qe)){if(it=Dp,me="onMouseLeave",q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(it=Np,me="onPointerLeave",q="onPointerEnter",X="pointer"),kt=ce==null?re:ls(ce),ee=qe==null?re:ls(qe),re=new it(me,X+"leave",ce,a,pe),re.target=kt,re.relatedTarget=ee,me=null,Aa(pe)===te&&(it=new it(q,X+"enter",qe,a,pe),it.target=ee,it.relatedTarget=kt,me=it),kt=me,ce&&qe)t:{for(it=fy,q=ce,X=qe,ee=0,me=q;me;me=it(me))ee++;me=0;for(var $e=X;$e;$e=it($e))me++;for(;0<ee-me;)q=it(q),ee--;for(;0<me-ee;)X=it(X),me--;for(;ee--;){if(q===X||X!==null&&q===X.alternate){it=q;break t}q=it(q),X=it(X)}it=null}else it=null;ce!==null&&E0(_e,re,ce,it,!1),qe!==null&&kt!==null&&E0(_e,kt,qe,it,!0)}}e:{if(re=te?ls(te):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var Ct=Hp;else if(Fp(re))if(Gp)Ct=MS;else{Ct=SS;var Je=xS}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&Ai(te.elementType)&&(Ct=Hp):Ct=yS;if(Ct&&(Ct=Ct(t,te))){zp(_e,Ct,a,pe);break e}Je&&Je(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&En(re,"number",re.value)}switch(Je=te?ls(te):window,t){case"focusin":(Fp(Je)||Je.contentEditable==="true")&&(Ys=Je,Ou=te,uo=null);break;case"focusout":uo=Ou=Ys=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Kp(_e,a,pe);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":Kp(_e,a,pe)}var dt;if(Du)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Ws?Ip(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Up&&a.locale!=="ko"&&(Ws||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Ws&&(dt=wp()):(Ca=pe,Tu="value"in Ca?Ca.value:Ca.textContent,Ws=!0)),Je=hc(te,Mt),0<Je.length&&(Mt=new Lp(Mt,t,null,a,pe),_e.push({event:Mt,listeners:Je}),dt?Mt.data=dt:(dt=Bp(a),dt!==null&&(Mt.data=dt)))),(dt=pS?mS(t,a):gS(t,a))&&(Mt=hc(te,"onBeforeInput"),0<Mt.length&&(Je=new Lp("onBeforeInput","beforeinput",null,a,pe),_e.push({event:Je,listeners:Mt}),Je.data=dt)),oy(_e,t,te,a,pe)}y0(_e,n)})}function Io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function hc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=no(t,a),u!=null&&o.unshift(Io(t,u,f)),u=no(t,n),u!=null&&o.push(Io(t,u,f))),t.tag===3)return o;t=t.return}return[]}function fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E0(t,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,V=A.alternate,te=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||te===null||(V=te,u?(te=no(a,f),te!=null&&S.unshift(Io(a,te,V))):u||(te=no(a,f),te!=null&&S.push(Io(a,te,V)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var dy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function b0(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(hy,"")}function T0(t,n){return n=b0(n),b0(t)===n}function Vt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(t,""+o);break;case"className":et(t,"class",o);break;case"tabIndex":et(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,a,o);break;case"style":ks(t,o,f);break;case"data":if(n!=="object"){et(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Ke(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gx.get(a)||a,Ke(t,a,o))}}function od(t,n,a,o,u,f){switch(a){case"style":ks(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?mn(t,o):(typeof o=="number"||typeof o=="bigint")&&mn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ke(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,f,S,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var A=f=S=u=null,V=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":S=pe;break;case"checked":V=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Vt(t,n,o,pe,a,null)}}qi(t,f,A,V,te,S,u,!1);return;case"select":St("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Vt(t,n,u,A,a,null)}n=f,a=S,t.multiple=!!o,n!=null?ci(t,!!o,n,!1):a!=null&&ci(t,!!o,a,!0);return;case"textarea":St("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Vt(t,n,S,A,a,null)}bn(t,o,u,f);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,V,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Po.length;o++)St(Po[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,te,o,a,null)}return;default:if(Ai(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&od(t,n,pe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Vt(t,n,A,o,a,null))}function py(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,V=null,te=null,pe=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":V=_e;default:o.hasOwnProperty(ce)||Vt(t,n,ce,null,o,_e)}}for(var re in o){var ce=o[re];if(_e=a[re],o.hasOwnProperty(re)&&(ce!=null||_e!=null))switch(re){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":pe=ce;break;case"value":S=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==_e&&Vt(t,n,re,ce,o,_e)}}Mn(t,S,A,V,te,pe,f,u);return;case"select":ce=S=A=re=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ce=V;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":re=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==V&&Vt(t,n,u,f,o,V)}n=A,a=S,o=ce,re!=null?ci(t,!!a,re,!1):!!o!=!!a&&(n!=null?ci(t,!!a,n,!0):ci(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(t,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(t,n,S,u,o,f)}It(t,re,ce);return;case"option":for(var qe in a)re=a[qe],a.hasOwnProperty(qe)&&re!=null&&!o.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Vt(t,n,qe,null,o,re));for(V in o)re=o[V],ce=a[V],o.hasOwnProperty(V)&&re!==ce&&(re!=null||ce!=null)&&(V==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Vt(t,n,V,re,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)re=a[it],a.hasOwnProperty(it)&&re!=null&&!o.hasOwnProperty(it)&&Vt(t,n,it,null,o,re);for(te in o)if(re=o[te],ce=a[te],o.hasOwnProperty(te)&&re!==ce&&(re!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:Vt(t,n,te,re,o,ce)}return;default:if(Ai(n)){for(var kt in a)re=a[kt],a.hasOwnProperty(kt)&&re!==void 0&&!o.hasOwnProperty(kt)&&od(t,n,kt,void 0,o,re);for(pe in o)re=o[pe],ce=a[pe],!o.hasOwnProperty(pe)||re===ce||re===void 0&&ce===void 0||od(t,n,pe,re,o,ce);return}}for(var q in a)re=a[q],a.hasOwnProperty(q)&&re!=null&&!o.hasOwnProperty(q)&&Vt(t,n,q,null,o,re);for(_e in o)re=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||re===ce||re==null&&ce==null||Vt(t,n,_e,re,o,ce)}function A0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&A0(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],te=V.startTime;if(te>A)break;var pe=V.transferSize,_e=V.initiatorType;pe&&A0(_e)&&(V=V.responseEnd,S+=pe*(V<A?1:(A-te)/(V-te)))}if(--o,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ld=null,cd=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function R0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function gy(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(t){return D0.resolve(null).then(t).catch(xy)}:C0;function xy(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function L0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Sr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[os]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Bo(t.ownerDocument.body);a=u}while(a);Sr(n)}function N0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function dd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dd(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Sy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[os])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function yy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function U0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function hd(t){return t.data==="$?"||t.data==="$~"}function pd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function My(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var md=null;function O0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function P0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function I0(t,n,a){switch(n=pc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);to(t)}var _i=new Map,B0=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=G.d;G.d={f:Ey,r:by,D:Ty,C:Ay,L:Ry,m:wy,X:Dy,S:Cy,M:Ly};function Ey(){var t=fa.f(),n=rc();return t||n}function by(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?eg(n):fa.r(t)}var _r=typeof document>"u"?null:document;function F0(t,n,a){var o=_r;if(o&&typeof n=="string"&&n){var u=lt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),B0.has(u)||(B0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),R(n),o.head.appendChild(n)))}}function Ty(t){fa.D(t),F0("dns-prefetch",t,null)}function Ay(t,n){fa.C(t,n),F0("preconnect",t,n)}function Ry(t,n,a){fa.L(t,n,a);var o=_r;if(o&&t&&n){var u='link[rel="preload"][as="'+lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+lt(a.imageSizes)+'"]')):u+='[href="'+lt(t)+'"]';var f=u;switch(n){case"style":f=vr(t);break;case"script":f=xr(t)}_i.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(zo(f))||(n=o.createElement("link"),Dn(n,"link",t),R(n),o.head.appendChild(n)))}}function wy(t,n){fa.m(t,n);var a=_r;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+lt(o)+'"][href="'+lt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xr(t)}if(!_i.has(f)&&(t=_({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}o=a.createElement("link"),Dn(o,"link",t),R(o),a.head.appendChild(o)}}}function Cy(t,n,a){fa.S(t,n,a);var o=_r;if(o&&t){var u=wa(o).hoistableStyles,f=vr(t);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Fo(f)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&gd(t,a);var V=S=o.createElement("link");R(V),Dn(V,"link",t),V._p=new Promise(function(te,pe){V.onload=te,V.onerror=pe}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function Dy(t,n){fa.X(t,n);var a=_r;if(a&&t){var o=wa(a).hoistableScripts,u=xr(t),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(t=_({src:t,async:!0},n),(n=_i.get(u))&&_d(t,n),f=a.createElement("script"),R(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ly(t,n){fa.M(t,n);var a=_r;if(a&&t){var o=wa(a).hoistableScripts,u=xr(t),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&_d(t,n),f=a.createElement("script"),R(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function z0(t,n,a,o){var u=(u=$.current)?mc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vr(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=vr(a.href);var f=wa(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(Fo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||Ny(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function vr(t){return'href="'+lt(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function H0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Ny(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),R(n),t.head.appendChild(n))}function xr(t){return'[src="'+lt(t)+'"]'}function zo(t){return"script[async]"+t}function G0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+lt(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Dn(o,"style",u),gc(o,a.precedence,t),n.instance=o;case"stylesheet":u=vr(a.href);var f=t.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=H0(a),(u=_i.get(u))&&gd(o,u),f=(t.ownerDocument||t).createElement("link"),R(f);var S=f;return S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Dn(f,"link",o),n.state.loading|=4,gc(f,a.precedence,t),n.instance=f;case"script":return f=xr(a.src),(u=t.querySelector(zo(f)))?(n.instance=u,R(u),u):(o=a,(u=_i.get(f))&&(o=_({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,a.precedence,t));return n.instance}function gc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var _c=null;function V0(t,n,a){if(_c===null){var o=new Map,u=_c=new Map;u.set(a,o)}else u=_c,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[os]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function k0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Uy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function X0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Oy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=vr(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=vc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=H0(o),(u=_i.get(u))&&gd(o,u),f=f.createElement("link"),R(f);var S=f;S._p=new Promise(function(A,V){S.onload=A,S.onerror=V}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=vc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var vd=0;function Py(t,n){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&vd===0&&(vd=62500*my());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>vd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xc=null;function Sc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xc=new Map,n.forEach(Iy,t),xc=null,vc.call(t))}function Iy(t,n){if(!(n.state.loading&4)){var a=xc.get(t);if(a)var o=a.get(null);else{a=new Map,xc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ho={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function By(t,n,a,o,u,f,S,A,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function j0(t,n,a,o,u,f,S,A,V,te,pe,_e){return t=new By(t,n,a,S,V,te,pe,_e,A),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=Zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ef(f),t}function W0(t){return t?(t=Zs,t):Zs}function Y0(t,n,a,o,u,f){u=W0(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ia(t,o,n),a!==null&&(Kn(a,t,n),vo(a,t,n))}function q0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){q0(t,n),(t=t.alternate)&&q0(t,n)}function K0(t){if(t.tag===13||t.tag===31){var n=ds(t,67108864);n!==null&&Kn(n,t,67108864),xd(t,67108864)}}function Z0(t){if(t.tag===13||t.tag===31){var n=ai();n=Qr(n);var a=ds(t,n);a!==null&&Kn(a,t,n),xd(t,n)}}var yc=!0;function Fy(t,n,a,o){var u=L.T;L.T=null;var f=G.p;try{G.p=2,Sd(t,n,a,o)}finally{G.p=f,L.T=u}}function zy(t,n,a,o){var u=L.T;L.T=null;var f=G.p;try{G.p=8,Sd(t,n,a,o)}finally{G.p=f,L.T=u}}function Sd(t,n,a,o){if(yc){var u=yd(o);if(u===null)rd(t,n,o,Mc,a),Q0(t,o);else if(Gy(u,t,n,a,o))o.stopPropagation();else if(Q0(t,o),n&4&&-1<Hy.indexOf(t)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Me(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var V=1<<31-Oe(S);A.entanglements[1]|=V,S&=~V}zi(f),(Ut&6)===0&&(ac=b()+500,Oo(0))}}break;case 31:case 13:A=ds(f,2),A!==null&&Kn(A,f,2),rc(),xd(f,2)}if(f=yd(o),f===null&&rd(t,n,o,Mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else rd(t,n,o,null,a)}}function yd(t){return t=Mu(t),Md(t)}var Mc=null;function Md(t){if(Mc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Mc=t,null}function J0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case he:return 2;case xe:return 8;case oe:case Ve:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var Ed=!1,Ya=null,qa=null,Ka=null,Go=new Map,Vo=new Map,Za=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&K0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Gy(t,n,a,o,u){switch(n){case"focusin":return Ya=ko(Ya,t,n,a,o,u),!0;case"dragenter":return qa=ko(qa,t,n,a,o,u),!0;case"mouseover":return Ka=ko(Ka,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Go.set(f,ko(Go.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Vo.set(f,ko(Vo.get(f)||null,t,n,a,o,u)),!0}return!1}function $0(t){var n=Aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){Z0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){Z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=Ra(a),n!==null&&K0(n),t.blockedOn=a,!1;n.shift()}return!0}function e_(t,n,a){Ec(t)&&a.delete(n)}function Vy(){Ed=!1,Ya!==null&&Ec(Ya)&&(Ya=null),qa!==null&&Ec(qa)&&(qa=null),Ka!==null&&Ec(Ka)&&(Ka=null),Go.forEach(e_),Vo.forEach(e_)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ed||(Ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Vy)))}var Tc=null;function t_(t){Tc!==t&&(Tc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var f=Ra(a);f!==null&&(t.splice(n,3),n-=3,yf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Sr(t){function n(V){return bc(V,t)}Ya!==null&&bc(Ya,t),qa!==null&&bc(qa,t),Ka!==null&&bc(Ka,t),Go.forEach(n),Vo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)$0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[yn]||null;if(typeof f=="function")S||t_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[yn]||null)A=S.formAction;else if(Md(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),t_(a)}}}function n_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function bd(t){this._internalRoot=t}Ac.prototype.render=bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();Y0(a,o,t,n,null,null)},Ac.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Y0(t.current,2,null,t,null,null),rc(),n[Ti]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=$r();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&$0(t)}};var i_=e.version;if(i_!=="19.2.5")throw Error(s(527,i_,"19.2.5"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{Ee=Rc.inject(ky),Te=Rc}catch{}}return jo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=ug,f=fg,S=dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=j0(t,1,!1,null,null,a,o,null,u,f,S,n_),t[Ti]=n.current,sd(t),new bd(n)},jo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=ug,S=fg,A=dg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=j0(t,1,!0,n,a??null,o,u,V,f,S,A,n_),n.context=W0(null),a=n.current,o=ai(),o=Qr(o),u=Pa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,Nn(n,a),zi(n),t[Ti]=n.current,sd(t),new Ac(n)},jo.version="19.2.5",jo}var h_;function $y(){if(h_)return wd.exports;h_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=Qy(),wd.exports}var eM=$y();const tM={de:{header:{home:"Home",about:"Über mich",contact:"Kontakt"},hero:{kicker:"Portfolio",titlePrefix:"Hi, ich bin",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Galerie",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung: React, Angular, Vue.js und moderne Webtechnologien. Nebenbei: Video-Editing & Grafikdesign seit 2020.",ctaPrimary:"Was ich mache",ctaSecondary:"Kontakt",scroll:"Scroll"},aboutSlider:{title:"Nebenbei",categories:[{key:"all",label:"Alles"},{key:"pets",label:"Tiere"},{key:"moto",label:"Motorrad"},{key:"hike",label:"Wandern"},{key:"me",label:"Ich"}],back:"Zurück",next:"Weiter",close:"Schließen"},socialStats:{kicker:"Abseits vom Code",title:"Auch online unterwegs",subtitle:"Ein paar Zahlen von den Kanälen, auf denen ich sonst noch unterwegs bin.",linkedinCta:"Lass uns vernetzen",latestPost:"Neuester Beitrag",tiktokPreviewCaption:"Neuester Post auf TikTok ansehen",instagramPreviewCaption:"Neuester Post auf Instagram ansehen"},projectsPreview:{kicker:"Live Vorschau",title:"Meine Projekte",subtitle:"Ein paar Einblicke in Dinge, die ich gebaut habe · klick dich durch oder öffne sie live.",previousProject:"Vorheriges Projekt",nextProject:"Nächstes Projekt",openLive:"Live öffnen",openLiveAria:r=>`${r} live öffnen`,jumpTo:r=>`Zu ${r} springen`},liveButton:{label:"Live ansehen"},about:{heading:"Über mich",lead:"Junior Software Engineer mit Fokus auf Frontend-Entwicklung.",body:"Ich bin Junior Software Engineer mit Fokus auf moderne Webentwicklung und Frontend-Technologien wie React, Angular und Vue.js · von durchdachten Oberflächen bis zur Backend-Anbindung. Daneben schneide ich seit 2020 Videos für Social Media und gestalte Grafiken; mein eigener TikTok-Kanal hat über 20.000 Follower und 3,5 Mio. Likes. Was ich mitbringe: sauberer Code, ein Auge für Timing und Komposition, und die Bereitschaft, mich kontinuierlich in neue Technologien einzuarbeiten.",spotlight:{kicker:"Nebenbei: Video & Grafikdesign",heading:"TikTok @jsnuwu · eigener Kanal seit 2020",subtitle:"Konzeption, Schnitt und Gestaltung in Eigenregie",statFollowerValue:"20.800",statFollowerLabel:"Follower",statLikesValue:"3,5 Mio.",statLikesLabel:"Likes",statExperienceValue:"5 Jahre",statExperienceLabel:"Schnitt-Praxis",list:["Eigene Edits von Schnitt bis Veröffentlichung auf TikTok, YouTube und Instagram","Gefühl für Bildaufbau, Timing und Reichweite"]}},experience:{heading:"Werdegang",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · heute",bullets:["Frontend-Komponenten mit Angular und TypeScript, angebunden an bestehende PHP-Backends","Kundenwebsites mit WordPress und Elementor, erweitert um eigenen PHP- und CSS-Code","Bugfixing und Feature-Erweiterungen im laufenden Betrieb"]},{org:"adesso SE · Ausbildung",role:"Fachinformatiker für Anwendungsentwicklung",period:"09/2023 · 01/2026",bullets:["Frontend mit Angular und TypeScript, Backend mit Java, Spring Boot und PostgreSQL","Profiler (internes Produkt, 05/2025 · 12/2025): Frontend-Komponenten und UI-Bugfixes","Scrum-Team: Git, Code Reviews, JIRA, Confluence","IT-Support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"FSJ · Freiwilliges Soziales Jahr, Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Begleitung und Unterstützung von Menschen mit Behinderungen im Alltag, inklusive Freizeitaktivitäten und Ausflügen","Mitwirkung bei der Alltagsgestaltung: Kochen, Haushaltsaktivitäten und Förderung der Selbstständigkeit"]}]},skills:{heading:"Skills",groups:[{title:"Schwerpunkt Frontend",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Weitere Frameworks",items:"React, Vue.js"},{title:"Backend & Daten",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Arbeitsweise",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video-Schnitt, TikTok, YouTube, Instagram"}],languages:[{name:"Deutsch",level:"Muttersprache"},{name:"Englisch",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projekte",skillsLabel:"Skills:"},contact:{heading:"Kontakt",intro:"Ich freue mich über deine Nachricht! Schreib mir einfach eine E-Mail oder nutze das Formular unten.",send:"send",namePlaceholder:"Dein Name",emailPlaceholder:"Deine E-Mail",messagePlaceholder:"Deine Nachricht",submit:"Absenden"},tiktokShowcase:{kicker:"TikTok",title:"Ein paar Einblicke",subtitle:"Mehr davon auf TikTok ansehen",prev:"Vorheriges Video",next:"Nächstes Video",mute:"Stummschalten",unmute:"Ton an",play:"Abspielen",pause:"Pausieren",volume:"Lautstärke",jumpTo:r=>`Zu Video ${r} springen`}},en:{header:{home:"Home",about:"About",contact:"Contact"},hero:{kicker:"Portfolio",titlePrefix:"Hi, I'm",tags:[{label:"Frontend Dev",target:"projects-preview"},{label:"Gallery",target:"gallery"},{label:"Video Editing",target:"tiktok-showcase"}],subtitle:"Junior Software Engineer focused on frontend development: React, Angular, Vue.js and modern web technologies. On the side: video editing & graphic design since 2020.",ctaPrimary:"What I do",ctaSecondary:"Contact",scroll:"Scroll"},aboutSlider:{title:"On the side",categories:[{key:"all",label:"All"},{key:"pets",label:"Pets"},{key:"moto",label:"Motorcycles"},{key:"hike",label:"Hiking"},{key:"me",label:"Me"}],back:"Back",next:"Next",close:"Close"},socialStats:{kicker:"Beyond the code",title:"Also active online",subtitle:"A few numbers from the channels I'm active on elsewhere.",linkedinCta:"Let's connect",latestPost:"Latest post",tiktokPreviewCaption:"Watch my latest TikTok post",instagramPreviewCaption:"View my latest Instagram post"},projectsPreview:{kicker:"Live Preview",title:"My Projects",subtitle:"A few glimpses of things I've built · click through or open them live.",previousProject:"Previous project",nextProject:"Next project",openLive:"Open live",openLiveAria:r=>`Open ${r} live`,jumpTo:r=>`Jump to ${r}`},liveButton:{label:"View live"},about:{heading:"About me",lead:"Junior Software Engineer focused on frontend development.",body:"I'm a Junior Software Engineer focused on modern web development and frontend technologies like React, Angular and Vue.js · from thoughtful interfaces to backend integration. Alongside that, I've been editing videos for social media and designing graphics since 2020; my own TikTok channel has over 20,000 followers and 3.5M likes. What I bring: clean code, an eye for timing and composition, and a drive to keep learning new technologies.",spotlight:{kicker:"On the side: Video & Graphic Design",heading:"TikTok @jsnuwu · my own channel since 2020",subtitle:"Concept, editing and design, all done myself",statFollowerValue:"20.8K",statFollowerLabel:"Followers",statLikesValue:"3.5M",statLikesLabel:"Likes",statExperienceValue:"5 years",statExperienceLabel:"Editing Experience",list:["My own edits from cut to release on TikTok, YouTube and Instagram","A feel for framing, timing and reach"]}},experience:{heading:"Experience",entries:[{org:"Telution",role:"Junior Software Engineer",period:"06/2026 · present",bullets:["Frontend components with Angular and TypeScript, wired into existing PHP backends","Client websites with WordPress and Elementor, extended with custom PHP and CSS","Bug fixing and feature work in production"]},{org:"adesso SE · Apprenticeship",role:"IT Specialist for Application Development",period:"09/2023 · 01/2026",bullets:["Frontend with Angular and TypeScript, backend with Java, Spring Boot and PostgreSQL","Profiler (internal product, 05/2025 · 12/2025): frontend components and UI bug fixes","Scrum team: Git, code reviews, JIRA, Confluence","IT support"]},{org:"Lebenshilfe Vaihingen-Mühlacker",role:"Voluntary Social Year (FSJ), Wohlfahrtswerk für Baden-Württemberg",period:"09/2022 · 08/2023",bullets:["Supporting and assisting people with disabilities in daily life, including leisure activities and outings","Helping shape everyday life: cooking, household activities, and fostering independence"]}]},skills:{heading:"Skills",groups:[{title:"Frontend focus",items:"HTML5, CSS3, JavaScript, TypeScript, Angular, Tailwind CSS, Responsive Design"},{title:"Design & Web",items:"Figma, WordPress, Elementor"},{title:"Other frameworks",items:"React, Vue.js"},{title:"Backend & Data",items:"PHP, Java, Spring Boot, PostgreSQL, MySQL, MongoDB"},{title:"Tools & Method",items:"Git, Docker, Scrum, Unit Testing, JIRA, Confluence, YouTrack"},{title:"Content & Social",items:"Video editing, TikTok, YouTube, Instagram"}],languages:[{name:"German",level:"Native"},{name:"English",level:"C1"}]},techStack:{heading:"Tech Stack"},projects:{heading:"Projects",skillsLabel:"Skills:"},contact:{heading:"Contact",intro:"I'd love to hear from you! Just send me an email or use the form below.",send:"send",namePlaceholder:"Your name",emailPlaceholder:"Your email",messagePlaceholder:"Your message",submit:"Send"},tiktokShowcase:{kicker:"TikTok",title:"A few glimpses",subtitle:"See more on TikTok",prev:"Previous video",next:"Next video",mute:"Mute",unmute:"Unmute",play:"Play",pause:"Pause",volume:"Volume",jumpTo:r=>`Jump to video ${r}`}}},Hv=be.createContext(null);function nM({children:r}){const[e,i]=be.useState(()=>{const s=localStorage.getItem("lang");return s==="en"||s==="de"?s:"de"});return be.useEffect(()=>{localStorage.setItem("lang",e),document.documentElement.lang=e},[e]),F.jsx(Hv.Provider,{value:{lang:e,setLang:i,t:tM[e]},children:r})}function iM(r,e,i){return Math.max(e,Math.min(r,i))}const Zt={toVector(r,e){return r===void 0&&(r=e),Array.isArray(r)?r:[r,r]},add(r,e){return[r[0]+e[0],r[1]+e[1]]},sub(r,e){return[r[0]-e[0],r[1]-e[1]]},addTo(r,e){r[0]+=e[0],r[1]+=e[1]},subTo(r,e){r[0]-=e[0],r[1]-=e[1]}};function p_(r,e,i){return e===0||Math.abs(e)===1/0?Math.pow(r,i*5):r*e*i/(e+i*r)}function m_(r,e,i,s=.15){return s===0?iM(r,e,i):r<e?-p_(e-r,i-e,s)+e:r>i?+p_(r-i,i-e,s)+i:r}function aM(r,[e,i],[s,l]){const[[c,d],[h,m]]=r;return[m_(e,c,d,s),m_(i,h,m,l)]}function sM(r,e){if(typeof r!="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function rM(r){var e=sM(r,"string");return typeof e=="symbol"?e:String(e)}function pn(r,e,i){return e=rM(e),e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function g_(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),i.push.apply(i,s)}return i}function en(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?g_(Object(i),!0).forEach(function(s){pn(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):g_(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}const Gv={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function __(r){return r?r[0].toUpperCase()+r.slice(1):""}const oM=["enter","leave"];function lM(r=!1,e){return r&&!oM.includes(e)}function cM(r,e="",i=!1){const s=Gv[r],l=s&&s[e]||e;return"on"+__(r)+__(l)+(lM(i,l)?"Capture":"")}const uM=["gotpointercapture","lostpointercapture"];function fM(r){let e=r.substring(2).toLowerCase();const i=!!~e.indexOf("passive");i&&(e=e.replace("passive",""));const s=uM.includes(e)?"capturecapture":"capture",l=!!~e.indexOf(s);return l&&(e=e.replace("capture","")),{device:e,capture:l,passive:i}}function dM(r,e=""){const i=Gv[r],s=i&&i[e]||e;return r+s}function mu(r){return"touches"in r}function Vv(r){return mu(r)?"touch":"pointerType"in r?r.pointerType:"mouse"}function hM(r){return Array.from(r.touches).filter(e=>{var i,s;return e.target===r.currentTarget||((i=r.currentTarget)===null||i===void 0||(s=i.contains)===null||s===void 0?void 0:s.call(i,e.target))})}function pM(r){return r.type==="touchend"||r.type==="touchcancel"?r.changedTouches:r.targetTouches}function kv(r){return mu(r)?pM(r)[0]:r}function ph(r,e){try{const i=e.clientX-r.clientX,s=e.clientY-r.clientY,l=(e.clientX+r.clientX)/2,c=(e.clientY+r.clientY)/2,d=Math.hypot(i,s);return{angle:-(Math.atan2(i,s)*180)/Math.PI,distance:d,origin:[l,c]}}catch{}return null}function mM(r){return hM(r).map(e=>e.identifier)}function v_(r,e){const[i,s]=Array.from(r.touches).filter(l=>e.includes(l.identifier));return ph(i,s)}function Nd(r){const e=kv(r);return mu(r)?e.identifier:e.pointerId}function Gr(r){const e=kv(r);return[e.clientX,e.clientY]}const x_=40,S_=800;function Xv(r){let{deltaX:e,deltaY:i,deltaMode:s}=r;return s===1?(e*=x_,i*=x_):s===2&&(e*=S_,i*=S_),[e,i]}function gM(r){var e,i;const{scrollX:s,scrollY:l,scrollLeft:c,scrollTop:d}=r.currentTarget;return[(e=s??c)!==null&&e!==void 0?e:0,(i=l??d)!==null&&i!==void 0?i:0]}function _M(r){const e={};if("buttons"in r&&(e.buttons=r.buttons),"shiftKey"in r){const{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c}=r;Object.assign(e,{shiftKey:i,altKey:s,metaKey:l,ctrlKey:c})}return e}function lu(r,...e){return typeof r=="function"?r(...e):r}function vM(){}function xM(...r){return r.length===0?vM:r.length===1?r[0]:function(){let e;for(const i of r)e=i.apply(this,arguments)||e;return e}}function y_(r,e){return Object.assign({},e,r||{})}const SM=32;class jv{constructor(e,i,s){this.ctrl=e,this.args=i,this.key=s,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:i,ingKey:s,args:l}=this;i[s]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=l,e.axis=void 0,e.memo=void 0,e.elapsedTime=e.timeDelta=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const i=this.state,s=this.config;i._active||(this.reset(),this.computeInitial(),i._active=!0,i.target=e.target,i.currentTarget=e.currentTarget,i.lastOffset=s.from?lu(s.from,i):i.offset,i.offset=i.lastOffset,i.startTime=i.timeStamp=e.timeStamp)}computeValues(e){const i=this.state;i._values=e,i.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:i,config:s,shared:l}=this;i.args=this.args;let c=0;if(e&&(i.event=e,s.preventDefault&&e.cancelable&&i.event.preventDefault(),i.type=e.type,l.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,l.locked=!!document.pointerLockElement,Object.assign(l,_M(e)),l.down=l.pressed=l.buttons%2===1||l.touches>0,c=e.timeStamp-i.timeStamp,i.timeStamp=e.timeStamp,i.elapsedTime=i.timeStamp-i.startTime),i._active){const z=i._delta.map(Math.abs);Zt.addTo(i._distance,z)}this.axisIntent&&this.axisIntent(e);const[d,h]=i._movement,[m,p]=s.threshold,{_step:g,values:_}=i;if(s.hasCustomTransform?(g[0]===!1&&(g[0]=Math.abs(d)>=m&&_[0]),g[1]===!1&&(g[1]=Math.abs(h)>=p&&_[1])):(g[0]===!1&&(g[0]=Math.abs(d)>=m&&Math.sign(d)*m),g[1]===!1&&(g[1]=Math.abs(h)>=p&&Math.sign(h)*p)),i.intentional=g[0]!==!1||g[1]!==!1,!i.intentional)return;const v=[0,0];if(s.hasCustomTransform){const[z,B]=_;v[0]=g[0]!==!1?z-g[0]:0,v[1]=g[1]!==!1?B-g[1]:0}else v[0]=g[0]!==!1?d-g[0]:0,v[1]=g[1]!==!1?h-g[1]:0;this.restrictToAxis&&!i._blocked&&this.restrictToAxis(v);const y=i.offset,E=i._active&&!i._blocked||i.active;E&&(i.first=i._active&&!i.active,i.last=!i._active&&i.active,i.active=l[this.ingKey]=i._active,e&&(i.first&&("bounds"in s&&(i._bounds=lu(s.bounds,i)),this.setup&&this.setup()),i.movement=v,this.computeOffset()));const[T,M]=i.offset,[[x,O],[U,C]]=i._bounds;i.overflow=[T<x?-1:T>O?1:0,M<U?-1:M>C?1:0],i._movementBound[0]=i.overflow[0]?i._movementBound[0]===!1?i._movement[0]:i._movementBound[0]:!1,i._movementBound[1]=i.overflow[1]?i._movementBound[1]===!1?i._movement[1]:i._movementBound[1]:!1;const I=i._active?s.rubberband||[0,0]:[0,0];if(i.offset=aM(i._bounds,i.offset,I),i.delta=Zt.sub(i.offset,y),this.computeMovement(),E&&(!i.last||c>SM)){i.delta=Zt.sub(i.offset,y);const z=i.delta.map(Math.abs);Zt.addTo(i.distance,z),i.direction=i.delta.map(Math.sign),i._direction=i._delta.map(Math.sign),!i.first&&c>0&&(i.velocity=[z[0]/c,z[1]/c],i.timeDelta=c)}}emit(){const e=this.state,i=this.shared,s=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!s.triggerAllEvents)return;const l=this.handler(en(en(en({},i),e),{},{[this.aliasKey]:e.values}));l!==void 0&&(e.memo=l)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function yM([r,e],i){const s=Math.abs(r),l=Math.abs(e);if(s>l&&s>i)return"x";if(l>s&&l>i)return"y"}class fl extends jv{constructor(...e){super(...e),pn(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=Zt.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=Zt.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const i=this.state,s=this.config;if(!i.axis&&e){const l=typeof s.axisThreshold=="object"?s.axisThreshold[Vv(e)]:s.axisThreshold;i.axis=yM(i._movement,l)}i._blocked=(s.lockDirection||!!s.axis)&&!i.axis||!!s.axis&&s.axis!==i.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const MM=r=>r,M_=.15,Wv={enabled(r=!0){return r},eventOptions(r,e,i){return en(en({},i.shared.eventOptions),r)},preventDefault(r=!1){return r},triggerAllEvents(r=!1){return r},rubberband(r=0){switch(r){case!0:return[M_,M_];case!1:return[0,0];default:return Zt.toVector(r)}},from(r){if(typeof r=="function")return r;if(r!=null)return Zt.toVector(r)},transform(r,e,i){const s=r||i.shared.transform;return this.hasCustomTransform=!!s,s||MM},threshold(r){return Zt.toVector(r,0)}},EM=0,Fs=en(en({},Wv),{},{axis(r,e,{axis:i}){if(this.lockDirection=i==="lock",!this.lockDirection)return i},axisThreshold(r=EM){return r},bounds(r={}){if(typeof r=="function")return c=>Fs.bounds(r(c));if("current"in r)return()=>r.current;if(typeof HTMLElement=="function"&&r instanceof HTMLElement)return r;const{left:e=-1/0,right:i=1/0,top:s=-1/0,bottom:l=1/0}=r;return[[e,i],[s,l]]}}),E_={ArrowRight:(r,e=1)=>[r*e,0],ArrowLeft:(r,e=1)=>[-1*r*e,0],ArrowUp:(r,e=1)=>[0,-1*r*e],ArrowDown:(r,e=1)=>[0,r*e]};class bM extends fl{constructor(...e){super(...e),pn(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const i=e._bounds.getBoundingClientRect(),s=e.currentTarget.getBoundingClientRect(),l={left:i.left-s.left+e.offset[0],right:i.right-s.right+e.offset[0],top:i.top-s.top+e.offset[1],bottom:i.bottom-s.bottom+e.offset[1]};e._bounds=Fs.bounds(l)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const i=this.config,s=this.state;if(e.buttons!=null&&(Array.isArray(i.pointerButtons)?!i.pointerButtons.includes(e.buttons):i.pointerButtons!==-1&&i.pointerButtons!==e.buttons))return;const l=this.ctrl.setEventIds(e);i.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(l&&l.size>1&&s._pointerActive)&&(this.start(e),this.setupPointer(e),s._pointerId=Nd(e),s._pointerActive=!0,this.computeValues(Gr(e)),this.computeInitial(),i.preventScrollAxis&&Vv(e)!=="mouse"?(s._active=!1,this.setupScrollPrevention(e)):i.delay>0?(this.setupDelayTrigger(e),i.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const i=this.state;i._active=!0,i._preventScroll=!0,i._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const i=this.state,s=this.config;if(!i._pointerActive)return;const l=Nd(e);if(i._pointerId!==void 0&&l!==i._pointerId)return;const c=Gr(e);if(document.pointerLockElement===e.target?i._delta=[e.movementX,e.movementY]:(i._delta=Zt.sub(c,i._values),this.computeValues(c)),Zt.addTo(i._movement,i._delta),this.compute(e),i._delayed&&i.intentional){this.timeoutStore.remove("dragDelay"),i.active=!1,this.startPointerDrag(e);return}if(s.preventScrollAxis&&!i._preventScroll)if(i.axis)if(i.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){i._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const i=this.state,s=this.config;if(!i._active||!i._pointerActive)return;const l=Nd(e);if(i._pointerId!==void 0&&l!==i._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[c,d]=i._distance;if(i.tap=c<=s.tapsThreshold&&d<=s.tapsThreshold,i.tap&&s.filterTaps)i._force=!0;else{const[h,m]=i._delta,[p,g]=i._movement,[_,v]=s.swipe.velocity,[y,E]=s.swipe.distance,T=s.swipe.duration;if(i.elapsedTime<T){const M=Math.abs(h/i.timeDelta),x=Math.abs(m/i.timeDelta);M>_&&Math.abs(p)>y&&(i.swipe[0]=Math.sign(h)),x>v&&Math.abs(g)>E&&(i.swipe[1]=Math.sign(m))}}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){const i=this.config,s=i.device;i.pointerLock&&e.currentTarget.requestPointerLock(),i.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,TM(e);const i=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",i),this.eventStore.add(this.sharedConfig.window,"touch","cancel",i),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const i=E_[e.key];if(i){const s=this.state,l=e.shiftKey?10:e.altKey?.1:1;this.start(e),s._delta=i(this.config.keyboardDisplacement,l),s._keyboardActive=!0,Zt.addTo(s._movement,s._delta),this.compute(e),this.emit()}}keyUp(e){e.key in E_&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const i=this.config.device;e(i,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(i,"change",this.pointerMove.bind(this)),e(i,"end",this.pointerUp.bind(this)),e(i,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function TM(r){"persist"in r&&typeof r.persist=="function"&&r.persist()}const dl=typeof window<"u"&&window.document&&window.document.createElement;function Yv(){return dl&&"ontouchstart"in window}function AM(){return Yv()||dl&&window.navigator.maxTouchPoints>1}function RM(){return dl&&"onpointerdown"in window}function wM(){return dl&&"exitPointerLock"in window.document}function CM(){try{return"constructor"in GestureEvent}catch{return!1}}const Si={isBrowser:dl,gesture:CM(),touch:Yv(),touchscreen:AM(),pointer:RM(),pointerLock:wM()},DM=250,LM=180,NM=.5,UM=50,OM=250,PM=10,b_={mouse:0,touch:0,pen:8},IM=en(en({},Fs),{},{device(r,e,{pointer:{touch:i=!1,lock:s=!1,mouse:l=!1}={}}){return this.pointerLock=s&&Si.pointerLock,Si.touch&&i?"touch":this.pointerLock?"mouse":Si.pointer&&!l?"pointer":Si.touch?"touch":"mouse"},preventScrollAxis(r,e,{preventScroll:i}){if(this.preventScrollDelay=typeof i=="number"?i:i||i===void 0&&r?DM:void 0,!(!Si.touchscreen||i===!1))return r||(i!==void 0?"y":void 0)},pointerCapture(r,e,{pointer:{capture:i=!0,buttons:s=1,keys:l=!0}={}}){return this.pointerButtons=s,this.keys=l,!this.pointerLock&&this.device==="pointer"&&i},threshold(r,e,{filterTaps:i=!1,tapsThreshold:s=3,axis:l=void 0}){const c=Zt.toVector(r,i?s:l?1:0);return this.filterTaps=i,this.tapsThreshold=s,c},swipe({velocity:r=NM,distance:e=UM,duration:i=OM}={}){return{velocity:this.transform(Zt.toVector(r)),distance:this.transform(Zt.toVector(e)),duration:i}},delay(r=0){switch(r){case!0:return LM;case!1:return 0;default:return r}},axisThreshold(r){return r?en(en({},b_),r):b_},keyboardDisplacement(r=PM){return r}});function qv(r){const[e,i]=r.overflow,[s,l]=r._delta,[c,d]=r._direction;(e<0&&s>0&&c<0||e>0&&s<0&&c>0)&&(r._movement[0]=r._movementBound[0]),(i<0&&l>0&&d<0||i>0&&l<0&&d>0)&&(r._movement[1]=r._movementBound[1])}const BM=30,FM=100;class zM extends jv{constructor(...e){super(...e),pn(this,"ingKey","pinching"),pn(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const e=this.state;e._touchIds=[],e.canceled=!1,e.cancel=this.cancel.bind(this),e.turns=0}computeOffset(){const{type:e,movement:i,lastOffset:s}=this.state;e==="wheel"?this.state.offset=Zt.add(i,s):this.state.offset=[(1+i[0])*s[0],i[1]+s[1]]}computeMovement(){const{offset:e,lastOffset:i}=this.state;this.state.movement=[e[0]/i[0],e[1]-i[1]]}axisIntent(){const e=this.state,[i,s]=e._movement;if(!e.axis){const l=Math.abs(i)*BM-Math.abs(s);l<0?e.axis="angle":l>0&&(e.axis="scale")}}restrictToAxis(e){this.config.lockDirection&&(this.state.axis==="scale"?e[1]=0:this.state.axis==="angle"&&(e[0]=0))}cancel(){const e=this.state;e.canceled||setTimeout(()=>{e.canceled=!0,e._active=!1,this.compute(),this.emit()},0)}touchStart(e){this.ctrl.setEventIds(e);const i=this.state,s=this.ctrl.touchIds;if(i._active&&i._touchIds.every(c=>s.has(c))||s.size<2)return;this.start(e),i._touchIds=Array.from(s).slice(0,2);const l=v_(e,i._touchIds);l&&this.pinchStart(e,l)}pointerStart(e){if(e.buttons!=null&&e.buttons%2!==1)return;this.ctrl.setEventIds(e),e.target.setPointerCapture(e.pointerId);const i=this.state,s=i._pointerEvents,l=this.ctrl.pointerIds;if(i._active&&Array.from(s.keys()).every(d=>l.has(d))||(s.size<2&&s.set(e.pointerId,e),i._pointerEvents.size<2))return;this.start(e);const c=ph(...Array.from(s.values()));c&&this.pinchStart(e,c)}pinchStart(e,i){const s=this.state;s.origin=i.origin,this.computeValues([i.distance,i.angle]),this.computeInitial(),this.compute(e),this.emit()}touchMove(e){if(!this.state._active)return;const i=v_(e,this.state._touchIds);i&&this.pinchMove(e,i)}pointerMove(e){const i=this.state._pointerEvents;if(i.has(e.pointerId)&&i.set(e.pointerId,e),!this.state._active)return;const s=ph(...Array.from(i.values()));s&&this.pinchMove(e,s)}pinchMove(e,i){const s=this.state,l=s._values[1],c=i.angle-l;let d=0;Math.abs(c)>270&&(d+=Math.sign(c)),this.computeValues([i.distance,i.angle-360*d]),s.origin=i.origin,s.turns=d,s._movement=[s._values[0]/s._initial[0]-1,s._values[1]-s._initial[1]],this.compute(e),this.emit()}touchEnd(e){this.ctrl.setEventIds(e),this.state._active&&this.state._touchIds.some(i=>!this.ctrl.touchIds.has(i))&&(this.state._active=!1,this.compute(e),this.emit())}pointerEnd(e){const i=this.state;this.ctrl.setEventIds(e);try{e.target.releasePointerCapture(e.pointerId)}catch{}i._pointerEvents.has(e.pointerId)&&i._pointerEvents.delete(e.pointerId),i._active&&i._pointerEvents.size<2&&(i._active=!1,this.compute(e),this.emit())}gestureStart(e){e.cancelable&&e.preventDefault();const i=this.state;i._active||(this.start(e),this.computeValues([e.scale,e.rotation]),i.origin=[e.clientX,e.clientY],this.compute(e),this.emit())}gestureMove(e){if(e.cancelable&&e.preventDefault(),!this.state._active)return;const i=this.state;this.computeValues([e.scale,e.rotation]),i.origin=[e.clientX,e.clientY];const s=i._movement;i._movement=[e.scale-1,e.rotation],i._delta=Zt.sub(i._movement,s),this.compute(e),this.emit()}gestureEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}wheel(e){const i=this.config.modifierKey;i&&(Array.isArray(i)?!i.find(s=>e[s]):!e[i])||(this.state._active?this.wheelChange(e):this.wheelStart(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(e){this.start(e),this.wheelChange(e)}wheelChange(e){"uv"in e||e.cancelable&&e.preventDefault();const s=this.state;s._delta=[-Xv(e)[1]/FM*s.offset[0],0],Zt.addTo(s._movement,s._delta),qv(s),this.state.origin=[e.clientX,e.clientY],this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){const i=this.config.device;i&&(e(i,"start",this[i+"Start"].bind(this)),e(i,"change",this[i+"Move"].bind(this)),e(i,"end",this[i+"End"].bind(this)),e(i,"cancel",this[i+"End"].bind(this)),e("lostPointerCapture","",this[i+"End"].bind(this))),this.config.pinchOnWheel&&e("wheel","",this.wheel.bind(this),{passive:!1})}}const HM=en(en({},Wv),{},{device(r,e,{shared:i,pointer:{touch:s=!1}={}}){if(i.target&&!Si.touch&&Si.gesture)return"gesture";if(Si.touch&&s)return"touch";if(Si.touchscreen){if(Si.pointer)return"pointer";if(Si.touch)return"touch"}},bounds(r,e,{scaleBounds:i={},angleBounds:s={}}){const l=d=>{const h=y_(lu(i,d),{min:-1/0,max:1/0});return[h.min,h.max]},c=d=>{const h=y_(lu(s,d),{min:-1/0,max:1/0});return[h.min,h.max]};return typeof i!="function"&&typeof s!="function"?[l(),c()]:d=>[l(d),c(d)]},threshold(r,e,i){return this.lockDirection=i.axis==="lock",Zt.toVector(r,this.lockDirection?[.1,3]:0)},modifierKey(r){return r===void 0?"ctrlKey":r},pinchOnWheel(r=!0){return r}});class GM extends fl{constructor(...e){super(...e),pn(this,"ingKey","moving")}move(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.state._active?this.moveChange(e):this.moveStart(e),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(e){this.start(e),this.computeValues(Gr(e)),this.compute(e),this.computeInitial(),this.emit()}moveChange(e){if(!this.state._active)return;const i=Gr(e),s=this.state;s._delta=Zt.sub(i,s._values),Zt.addTo(s._movement,s._delta),this.computeValues(i),this.compute(e),this.emit()}moveEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}bind(e){e("pointer","change",this.move.bind(this)),e("pointer","leave",this.moveEnd.bind(this))}}const VM=en(en({},Fs),{},{mouseOnly:(r=!0)=>r});class kM extends fl{constructor(...e){super(...e),pn(this,"ingKey","scrolling")}scroll(e){this.state._active||this.start(e),this.scrollChange(e),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(e){e.cancelable&&e.preventDefault();const i=this.state,s=gM(e);i._delta=Zt.sub(s,i._values),Zt.addTo(i._movement,i._delta),this.computeValues(s),this.compute(e),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("scroll","",this.scroll.bind(this))}}const XM=Fs;class jM extends fl{constructor(...e){super(...e),pn(this,"ingKey","wheeling")}wheel(e){this.state._active||this.start(e),this.wheelChange(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(e){const i=this.state;i._delta=Xv(e),Zt.addTo(i._movement,i._delta),qv(i),this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("wheel","",this.wheel.bind(this))}}const WM=Fs;class YM extends fl{constructor(...e){super(...e),pn(this,"ingKey","hovering")}enter(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.start(e),this.computeValues(Gr(e)),this.compute(e),this.emit())}leave(e){if(this.config.mouseOnly&&e.pointerType!=="mouse")return;const i=this.state;if(!i._active)return;i._active=!1;const s=Gr(e);i._movement=i._delta=Zt.sub(s,i._values),this.computeValues(s),this.compute(e),i.delta=i.movement,this.emit()}bind(e){e("pointer","enter",this.enter.bind(this)),e("pointer","leave",this.leave.bind(this))}}const qM=en(en({},Fs),{},{mouseOnly:(r=!0)=>r}),hp=new Map,mh=new Map;function KM(r){hp.set(r.key,r.engine),mh.set(r.key,r.resolver)}const ZM={key:"drag",engine:bM,resolver:IM},JM={key:"hover",engine:YM,resolver:qM},QM={key:"move",engine:GM,resolver:VM},$M={key:"pinch",engine:zM,resolver:HM},eE={key:"scroll",engine:kM,resolver:XM},tE={key:"wheel",engine:jM,resolver:WM};function nE(r,e){if(r==null)return{};var i={},s=Object.keys(r),l,c;for(c=0;c<s.length;c++)l=s[c],!(e.indexOf(l)>=0)&&(i[l]=r[l]);return i}function iE(r,e){if(r==null)return{};var i=nE(r,e),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(l=0;l<c.length;l++)s=c[l],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}const aE={target(r){if(r)return()=>"current"in r?r.current:r},enabled(r=!0){return r},window(r=Si.isBrowser?window:void 0){return r},eventOptions({passive:r=!0,capture:e=!1}={}){return{passive:r,capture:e}},transform(r){return r}},sE=["target","eventOptions","window","enabled","transform"];function eu(r={},e){const i={};for(const[s,l]of Object.entries(e))switch(typeof l){case"function":i[s]=l.call(i,r[s],s,r);break;case"object":i[s]=eu(r[s],l);break;case"boolean":l&&(i[s]=r[s]);break}return i}function rE(r,e,i={}){const s=r,{target:l,eventOptions:c,window:d,enabled:h,transform:m}=s,p=iE(s,sE);if(i.shared=eu({target:l,eventOptions:c,window:d,enabled:h,transform:m},aE),e){const g=mh.get(e);i[e]=eu(en({shared:i.shared},p),g)}else for(const g in p){const _=mh.get(g);_&&(i[g]=eu(en({shared:i.shared},p[g]),_))}return i}class Kv{constructor(e,i){pn(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=i}add(e,i,s,l,c){const d=this._listeners,h=dM(i,s),m=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},p=en(en({},m),c);e.addEventListener(h,l,p);const g=()=>{e.removeEventListener(h,l,p),d.delete(g)};return d.add(g),g}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class oE{constructor(){pn(this,"_timeouts",new Map)}add(e,i,s=140,...l){this.remove(e),this._timeouts.set(e,window.setTimeout(i,s,...l))}remove(e){const i=this._timeouts.get(e);i&&window.clearTimeout(i)}clean(){this._timeouts.forEach(e=>{window.clearTimeout(e)}),this._timeouts.clear()}}class lE{constructor(e){pn(this,"gestures",new Set),pn(this,"_targetEventStore",new Kv(this)),pn(this,"gestureEventStores",{}),pn(this,"gestureTimeoutStores",{}),pn(this,"handlers",{}),pn(this,"config",{}),pn(this,"pointerIds",new Set),pn(this,"touchIds",new Set),pn(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),cE(this,e)}setEventIds(e){if(mu(e))return this.touchIds=new Set(mM(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,i){this.handlers=e,this.nativeHandlers=i}applyConfig(e,i){this.config=rE(e,i,this.config)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const i=this.config.shared,s={};let l;if(!(i.target&&(l=i.target(),!l))){if(i.enabled){for(const d of this.gestures){const h=this.config[d],m=T_(s,h.eventOptions,!!l);if(h.enabled){const p=hp.get(d);new p(this,e,d).bind(m)}}const c=T_(s,i.eventOptions,!!l);for(const d in this.nativeHandlers)c(d,"",h=>this.nativeHandlers[d](en(en({},this.state.shared),{},{event:h,args:e})),void 0,!0)}for(const c in s)s[c]=xM(...s[c]);if(!l)return s;for(const c in s){const{device:d,capture:h,passive:m}=fM(c);this._targetEventStore.add(l,d,"",s[c],{capture:h,passive:m})}}}}function yr(r,e){r.gestures.add(e),r.gestureEventStores[e]=new Kv(r,e),r.gestureTimeoutStores[e]=new oE}function cE(r,e){e.drag&&yr(r,"drag"),e.wheel&&yr(r,"wheel"),e.scroll&&yr(r,"scroll"),e.move&&yr(r,"move"),e.pinch&&yr(r,"pinch"),e.hover&&yr(r,"hover")}const T_=(r,e,i)=>(s,l,c,d={},h=!1)=>{var m,p;const g=(m=d.capture)!==null&&m!==void 0?m:e.capture,_=(p=d.passive)!==null&&p!==void 0?p:e.passive;let v=h?s:cM(s,l,g);i&&_&&(v+="Passive"),r[v]=r[v]||[],r[v].push(c)},uE=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function fE(r){const e={},i={},s=new Set;for(let l in r)uE.test(l)?(s.add(RegExp.lastMatch),i[l]=r[l]):e[l]=r[l];return[i,e,s]}function Mr(r,e,i,s,l,c){if(!r.has(i)||!hp.has(s))return;const d=i+"Start",h=i+"End",m=p=>{let g;return p.first&&d in e&&e[d](p),i in e&&(g=e[i](p)),p.last&&h in e&&e[h](p),g};l[s]=m,c[s]=c[s]||{}}function dE(r,e){const[i,s,l]=fE(r),c={};return Mr(l,i,"onDrag","drag",c,e),Mr(l,i,"onWheel","wheel",c,e),Mr(l,i,"onScroll","scroll",c,e),Mr(l,i,"onPinch","pinch",c,e),Mr(l,i,"onMove","move",c,e),Mr(l,i,"onHover","hover",c,e),{handlers:c,config:e,nativeHandlers:s}}function hE(r,e={},i,s){const l=Rd.useMemo(()=>new lE(r),[]);if(l.applyHandlers(r,s),l.applyConfig(e,i),Rd.useEffect(l.effect.bind(l)),Rd.useEffect(()=>l.clean.bind(l),[]),e.target===void 0)return l.bind.bind(l)}function pE(r){return r.forEach(KM),function(i,s){const{handlers:l,nativeHandlers:c,config:d}=dE(i,s||{});return hE(l,d,void 0,c)}}function mE(r,e){return pE([ZM,$M,eE,tE,QM,JM])(r,e||{})}function Ta(){const r=be.useContext(Hv);if(!r)throw new Error("useLanguage must be used within a LanguageProvider");return r}const pp="182",gE=0,A_=1,_E=2,tu=1,vE=2,tl=3,rs=0,Zn=1,_a=2,xa=0,zr=1,R_=2,w_=3,C_=4,xE=5,Us=100,SE=101,yE=102,ME=103,EE=104,bE=200,TE=201,AE=202,RE=203,gh=204,_h=205,wE=206,CE=207,DE=208,LE=209,NE=210,UE=211,OE=212,PE=213,IE=214,vh=0,xh=1,Sh=2,Vr=3,yh=4,Mh=5,Eh=6,bh=7,Zv=0,BE=1,FE=2,Xi=0,Jv=1,Qv=2,$v=3,ex=4,tx=5,nx=6,ix=7,ax=300,Bs=301,kr=302,Th=303,Ah=304,gu=306,Rh=1e3,va=1001,wh=1002,Ln=1003,zE=1004,wc=1005,Bn=1006,Ud=1007,Ps=1008,Mi=1009,sx=1010,rx=1011,rl=1012,mp=1013,Wi=1014,Vi=1015,ya=1016,gp=1017,_p=1018,ol=1020,ox=35902,lx=35899,cx=1021,ux=1022,Oi=1023,Ma=1026,Is=1027,fx=1028,vp=1029,Xr=1030,xp=1031,Sp=1033,nu=33776,iu=33777,au=33778,su=33779,Ch=35840,Dh=35841,Lh=35842,Nh=35843,Uh=36196,Oh=37492,Ph=37496,Ih=37488,Bh=37489,Fh=37490,zh=37491,Hh=37808,Gh=37809,Vh=37810,kh=37811,Xh=37812,jh=37813,Wh=37814,Yh=37815,qh=37816,Kh=37817,Zh=37818,Jh=37819,Qh=37820,$h=37821,ep=36492,tp=36494,np=36495,ip=36283,ap=36284,sp=36285,rp=36286,HE=3200,GE=0,VE=1,as="",xi="srgb",jr="srgb-linear",cu="linear",zt="srgb",Er=7680,D_=519,kE=512,XE=513,jE=514,yp=515,WE=516,YE=517,Mp=518,qE=519,L_=35044,N_="300 es",ki=2e3,uu=2001;function dx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function KE(){const r=fu("canvas");return r.style.display="block",r}const U_={};function O_(...r){const e="THREE."+r.shift();console.log(e,...r)}function at(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Rt(...r){const e="THREE."+r.shift();console.error(e,...r)}function ll(...r){const e=r.join(" ");e in U_||(U_[e]=!0,at(...r))}function ZE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Yr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let P_=1234567;const il=Math.PI/180,cl=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function Ep(r,e){return(r%e+e)%e}function JE(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function QE(r,e,i){return r!==e?(i-r)/(e-r):0}function al(r,e,i){return(1-i)*r+i*e}function $E(r,e,i,s){return al(r,e,1-Math.exp(-i*s))}function eb(r,e=1){return e-Math.abs(Ep(r,e*2)-e)}function tb(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function nb(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function ib(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ab(r,e){return r+Math.random()*(e-r)}function sb(r){return r*(.5-Math.random())}function rb(r){r!==void 0&&(P_=r);let e=P_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ob(r){return r*il}function lb(r){return r*cl}function cb(r){return(r&r-1)===0&&r!==0}function ub(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function db(r,e,i,s,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((e+s)/2),g=d((e+s)/2),_=c((e-s)/2),v=d((e-s)/2),y=c((s-e)/2),E=d((s-e)/2);switch(l){case"XYX":r.set(h*g,m*_,m*v,h*p);break;case"YZY":r.set(m*v,h*g,m*_,h*p);break;case"ZXZ":r.set(m*_,m*v,h*g,h*p);break;case"XZX":r.set(h*g,m*E,m*y,h*p);break;case"YXY":r.set(m*y,h*g,m*E,h*p);break;case"ZYZ":r.set(m*E,m*y,h*g,h*p);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Br(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Od={DEG2RAD:il,RAD2DEG:cl,generateUUID:qr,clamp:Et,euclideanModulo:Ep,mapLinear:JE,inverseLerp:QE,lerp:al,damp:$E,pingpong:eb,smoothstep:tb,smootherstep:nb,randInt:ib,randFloat:ab,randFloatSpread:sb,seededRandom:rb,degToRad:ob,radToDeg:lb,isPowerOfTwo:cb,ceilPowerOfTwo:ub,floorPowerOfTwo:fb,setQuaternionFromProperEuler:db,normalize:Hn,denormalize:Br};class Ht{constructor(e=0,i=0){Ht.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],v=c[d+0],y=c[d+1],E=c[d+2],T=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(h>=1){e[i+0]=v,e[i+1]=y,e[i+2]=E,e[i+3]=T;return}if(_!==T||m!==v||p!==y||g!==E){let M=m*v+p*y+g*E+_*T;M<0&&(v=-v,y=-y,E=-E,T=-T,M=-M);let x=1-h;if(M<.9995){const O=Math.acos(M),U=Math.sin(O);x=Math.sin(x*O)/U,h=Math.sin(h*O)/U,m=m*x+v*h,p=p*x+y*h,g=g*x+E*h,_=_*x+T*h}else{m=m*x+v*h,p=p*x+y*h,g=g*x+E*h,_=_*x+T*h;const O=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=O,p*=O,g*=O,_*=O}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[d],v=c[d+1],y=c[d+2],E=c[d+3];return e[i]=h*E+g*_+m*y-p*v,e[i+1]=m*E+g*v+p*_-h*y,e[i+2]=p*E+g*y+h*v-m*_,e[i+3]=g*E-h*_-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),v=m(s/2),y=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=s+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-s*p,this._z=c*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,i=0,s=0){ae.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(I_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(I_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),g=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+m*p+d*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pd=new ae,I_=new hl;class ht{constructor(e,i,s,l,c,d,h,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],T=l[0],M=l[3],x=l[6],O=l[1],U=l[4],C=l[7],I=l[2],z=l[5],B=l[8];return c[0]=d*T+h*O+m*I,c[3]=d*M+h*U+m*z,c[6]=d*x+h*C+m*B,c[1]=p*T+g*O+_*I,c[4]=p*M+g*U+_*z,c[7]=p*x+g*C+_*B,c[2]=v*T+y*O+E*I,c[5]=v*M+y*U+E*z,c[8]=v*x+y*C+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-s*c*g+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=g*d-h*p,v=h*m-g*c,y=p*c-d*m,E=i*_+s*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(l*p-g*s)*T,e[2]=(h*s-l*d)*T,e[3]=v*T,e[4]=(g*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=y*T,e[7]=(s*m-p*i)*T,e[8]=(d*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Id.makeScale(e,i)),this}rotate(e){return this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Id=new ht,B_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hb(){const r={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===zt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[jr]:{primaries:e,whitePoint:s,transfer:cu,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:zt,toXYZ:B_,fromXYZ:F_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const wt=hb();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class pb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{br===void 0&&(br=fu("canvas")),br.width=e.width,br.height=e.height;const l=br.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=br}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mb=0;class bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Bd(l[d].image)):c.push(Bd(l[d]))}else c=Bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let gb=0;const Fd=new ae;class Vn extends Yr{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=va,l=va,c=Bn,d=Ps,h=Oi,m=Mi,p=Vn.DEFAULT_ANISOTROPY,g=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=qr(),this.name="",this.source=new bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ax;Vn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(y+1)/2,I=(x+1)/2,z=(g+v)/4,B=(_+T)/4,K=(E+M)/4;return U>C&&U>I?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=z/s,c=B/s):C>I?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=z/l,c=K/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=B/c,l=K/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(_-T)/O,this.z=(v-g)/O,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _b extends Yr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends _b{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class hx extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vb extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cc.copy(s.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Dc.subVectors(this.max,Wo),Tr.subVectors(e.a,Wo),Ar.subVectors(e.b,Wo),Rr.subVectors(e.c,Wo),Qa.subVectors(Ar,Tr),$a.subVectors(Rr,Ar),Ts.subVectors(Tr,Rr);let i=[0,-Qa.z,Qa.y,0,-$a.z,$a.y,0,-Ts.z,Ts.y,Qa.z,0,-Qa.x,$a.z,0,-$a.x,Ts.z,0,-Ts.x,-Qa.y,Qa.x,0,-$a.y,$a.x,0,-Ts.y,Ts.x,0];return!zd(i,Tr,Ar,Rr,Dc)||(i=[1,0,0,0,1,0,0,0,1],!zd(i,Tr,Ar,Rr,Dc))?!1:(Lc.crossVectors(Qa,$a),i=[Lc.x,Lc.y,Lc.z],zd(i,Tr,Ar,Rr,Dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Di=new ae,Cc=new pl,Tr=new ae,Ar=new ae,Rr=new ae,Qa=new ae,$a=new ae,Ts=new ae,Wo=new ae,Dc=new ae,Lc=new ae,As=new ae;function zd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){As.fromArray(r,c);const h=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=e.dot(As),p=i.dot(As),g=s.dot(As);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const xb=new pl,Yo=new ae,Hd=new ae;class ml{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):xb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Hd)),this.expandByPoint(Yo.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new ae,Gd=new ae,Nc=new ae,es=new ae,Vd=new ae,Uc=new ae,kd=new ae;class _u{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Gd.copy(e).add(i).multiplyScalar(.5),Nc.copy(i).sub(e).normalize(),es.copy(this.origin).sub(Gd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Nc),h=es.dot(this.direction),m=-es.dot(Nc),p=es.lengthSq(),g=Math.abs(1-d*d);let _,v,y,E;if(g>0)if(_=d*m-h,v=d*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,y=_*(_+d*v+2*h)+v*(d*_+v+2*m)+p}else v=c,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-d*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(d*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=d>0?-c:c,_=Math.max(0,-(d*v+h)),y=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Gd).addScaledVector(Nc,v),y}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){Vd.subVectors(i,e),Uc.subVectors(s,e),kd.crossVectors(Vd,Uc);let d=this.direction.dot(kd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;es.subVectors(this.origin,e);const m=h*this.direction.dot(Uc.crossVectors(es,Uc));if(m<0)return null;const p=h*this.direction.dot(Vd.cross(es));if(p<0||m+p>d)return null;const g=-h*es.dot(kd);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,c,d,h,m,p,g,_,v,y,E,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,g,_,v,y,E,T,M)}set(e,i,s,l,c,d,h,m,p,g,_,v,y,E,T,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/wr.setFromMatrixColumn(e,0).length(),c=1/wr.setFromMatrixColumn(e,1).length(),d=1/wr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=d*g,y=d*_,E=h*g,T=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=v-T*p,i[9]=-h*m,i[2]=T-v*p,i[6]=E+y*p,i[10]=d*m}else if(e.order==="YXZ"){const v=m*g,y=m*_,E=p*g,T=p*_;i[0]=v+T*h,i[4]=E*h-y,i[8]=d*p,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=y*h-E,i[6]=T+v*h,i[10]=d*m}else if(e.order==="ZXY"){const v=m*g,y=m*_,E=p*g,T=p*_;i[0]=v-T*h,i[4]=-d*_,i[8]=E+y*h,i[1]=y+E*h,i[5]=d*g,i[9]=T-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const v=d*g,y=d*_,E=h*g,T=h*_;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+T,i[1]=m*_,i[5]=T*p+v,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const v=d*m,y=d*p,E=h*m,T=h*p;i[0]=m*g,i[4]=T-v*_,i[8]=E*_+y,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*_+E,i[10]=v-T*_}else if(e.order==="XZY"){const v=d*m,y=d*p,E=h*m,T=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+T,i[5]=d*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=h*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sb,e,yb)}lookAt(e,i,s){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ts.crossVectors(s,si),ts.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ts.crossVectors(s,si)),ts.normalize(),Oc.crossVectors(si,ts),l[0]=ts.x,l[4]=Oc.x,l[8]=si.x,l[1]=ts.y,l[5]=Oc.y,l[9]=si.y,l[2]=ts.z,l[6]=Oc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],T=s[6],M=s[10],x=s[14],O=s[3],U=s[7],C=s[11],I=s[15],z=l[0],B=l[4],K=l[8],w=l[12],D=l[1],H=l[5],Z=l[9],ie=l[13],de=l[2],ue=l[6],L=l[10],G=l[14],J=l[3],ve=l[7],ye=l[11],P=l[15];return c[0]=d*z+h*D+m*de+p*J,c[4]=d*B+h*H+m*ue+p*ve,c[8]=d*K+h*Z+m*L+p*ye,c[12]=d*w+h*ie+m*G+p*P,c[1]=g*z+_*D+v*de+y*J,c[5]=g*B+_*H+v*ue+y*ve,c[9]=g*K+_*Z+v*L+y*ye,c[13]=g*w+_*ie+v*G+y*P,c[2]=E*z+T*D+M*de+x*J,c[6]=E*B+T*H+M*ue+x*ve,c[10]=E*K+T*Z+M*L+x*ye,c[14]=E*w+T*ie+M*G+x*P,c[3]=O*z+U*D+C*de+I*J,c[7]=O*B+U*H+C*ue+I*ve,c[11]=O*K+U*Z+C*L+I*ye,c[15]=O*w+U*ie+C*G+I*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],T=e[7],M=e[11],x=e[15],O=m*y-p*v,U=h*y-p*_,C=h*v-m*_,I=d*y-p*g,z=d*v-m*g,B=d*_-h*g;return i*(T*O-M*U+x*C)-s*(E*O-M*I+x*z)+l*(E*U-T*I+x*B)-c*(E*C-T*z+M*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],T=e[13],M=e[14],x=e[15],O=_*M*p-T*v*p+T*m*y-h*M*y-_*m*x+h*v*x,U=E*v*p-g*M*p-E*m*y+d*M*y+g*m*x-d*v*x,C=g*T*p-E*_*p+E*h*y-d*T*y-g*h*x+d*_*x,I=E*_*m-g*T*m-E*h*v+d*T*v+g*h*M-d*_*M,z=i*O+s*U+l*C+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return e[0]=O*B,e[1]=(T*v*c-_*M*c-T*l*y+s*M*y+_*l*x-s*v*x)*B,e[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*x+s*m*x)*B,e[3]=(_*m*c-h*v*c-_*l*p+s*v*p+h*l*y-s*m*y)*B,e[4]=U*B,e[5]=(g*M*c-E*v*c+E*l*y-i*M*y-g*l*x+i*v*x)*B,e[6]=(E*m*c-d*M*c-E*l*p+i*M*p+d*l*x-i*m*x)*B,e[7]=(d*v*c-g*m*c+g*l*p-i*v*p-d*l*y+i*m*y)*B,e[8]=C*B,e[9]=(E*_*c-g*T*c-E*s*y+i*T*y+g*s*x-i*_*x)*B,e[10]=(d*T*c-E*h*c+E*s*p-i*T*p-d*s*x+i*h*x)*B,e[11]=(g*h*c-d*_*c-g*s*p+i*_*p+d*s*y-i*h*y)*B,e[12]=I*B,e[13]=(g*T*l-E*_*l+E*s*v-i*T*v-g*s*M+i*_*M)*B,e[14]=(E*h*l-d*T*l-E*s*m+i*T*m+d*s*M-i*h*M)*B,e[15]=(d*_*l-g*h*l+g*s*m-i*_*m-d*s*v+i*h*v)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,g=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,_=h+h,v=c*p,y=c*g,E=c*_,T=d*g,M=d*_,x=h*_,O=m*p,U=m*g,C=m*_,I=s.x,z=s.y,B=s.z;return l[0]=(1-(T+x))*I,l[1]=(y+C)*I,l[2]=(E-U)*I,l[3]=0,l[4]=(y-C)*z,l[5]=(1-(v+x))*z,l[6]=(M+O)*z,l[7]=0,l[8]=(E+U)*B,l[9]=(M-O)*B,l[10]=(1-(v+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=wr.set(l[0],l[1],l[2]).length();const d=wr.set(l[4],l[5],l[6]).length(),h=wr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Li.copy(this);const p=1/c,g=1/d,_=1/h;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,i.setFromRotationMatrix(Li),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=ki,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let E,T;if(m)E=c/(d-c),T=d*c/(d-c);else if(h===ki)E=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===uu)E=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=ki,m=!1){const p=this.elements,g=2/(i-e),_=2/(s-l),v=-(i+e)/(i-e),y=-(s+l)/(s-l);let E,T;if(m)E=1/(d-c),T=d/(d-c);else if(h===ki)E=-2/(d-c),T=-(d+c)/(d-c);else if(h===uu)E=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const wr=new ae,Li=new tn,Sb=new ae(0,0,0),yb=new ae(1,1,1),ts=new ae,Oc=new ae,si=new ae,z_=new tn,H_=new hl;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(z_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return H_.setFromEuler(this),this.setFromQuaternion(H_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mb=0;const G_=new ae,Cr=new hl,pa=new tn,Pc=new ae,qo=new ae,Eb=new ae,bb=new hl,V_=new ae(1,0,0),k_=new ae(0,1,0),X_=new ae(0,0,1),j_={type:"added"},Tb={type:"removed"},Dr={type:"childadded",child:null},Xd={type:"childremoved",child:null};class kn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ae,i=new Ea,s=new hl,l=new ae(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ht}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(V_,e)}rotateY(e){return this.rotateOnAxis(k_,e)}rotateZ(e){return this.rotateOnAxis(X_,e)}translateOnAxis(e,i){return G_.copy(e).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(V_,e)}translateY(e){return this.translateOnAxis(k_,e)}translateZ(e){return this.translateOnAxis(X_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Pc.copy(e):Pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(qo,Pc,this.up):pa.lookAt(Pc,qo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(pa),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j_),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Tb),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j_),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),_=d(e.shapes),v=d(e.skeletons),y=d(e.animations),E=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new ae(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new ae,ma=new ae,jd=new ae,ga=new ae,Lr=new ae,Nr=new ae,W_=new ae,Wd=new ae,Yd=new ae,qd=new ae,Kd=new on,Zd=new on,Jd=new on;class Ui{constructor(e=new ae,i=new ae,s=new ae){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ni.subVectors(l,i),ma.subVectors(s,i),jd.subVectors(e,i);const d=Ni.dot(Ni),h=Ni.dot(ma),m=Ni.dot(jd),p=ma.dot(ma),g=ma.dot(jd),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-h*g)*v,E=(d*g-h*m)*v;return c.set(1-y-E,E,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(d,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Kd.setScalar(0),Zd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,s),Jd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Kd,c.x),d.addScaledVector(Zd,c.y),d.addScaledVector(Jd,c.z),d}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),ma.subVectors(e,i),Ni.cross(ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ni.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Lr.subVectors(l,s),Nr.subVectors(c,s),Wd.subVectors(e,s);const m=Lr.dot(Wd),p=Nr.dot(Wd);if(m<=0&&p<=0)return i.copy(s);Yd.subVectors(e,l);const g=Lr.dot(Yd),_=Nr.dot(Yd);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(Lr,d);qd.subVectors(e,c);const y=Lr.dot(qd),E=Nr.dot(qd);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Nr,h);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return W_.subVectors(c,l),h=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(W_,h);const x=1/(M+T+v);return d=T*x,h=v*x,i.copy(s).addScaledVector(Lr,d).addScaledVector(Nr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Qd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Tt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=Ep(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Qd(d,c,e+1/3),this.g=Qd(d,c,e),this.b=Qd(d,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const s=px[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return wt.workingToColorSpace(Pn.copy(this),e),Math.round(Et(Pn.r*255,0,255))*65536+Math.round(Et(Pn.g*255,0,255))*256+Math.round(Et(Pn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=g<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=xi){wt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+i,ns.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ns),e.getHSL(Ic);const s=al(ns.h,Ic.h,i),l=al(ns.s,Ic.s,i),c=al(ns.l,Ic.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Tt;Tt.NAMES=px;let Ab=0;class Kr extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=zr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==_h&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mx extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new ae,Bc=new Ht;let Rb=0;class Ei{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=L_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(e),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Br(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Br(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Br(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Br(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Br(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==L_&&(e.usage=this.usage),e}}class gx extends Ei{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class _x extends Ei{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Jn extends Ei{constructor(e,i,s){super(new Float32Array(e),i,s)}}let wb=0;const vi=new tn,$d=new kn,Ur=new ae,ri=new pl,Ko=new pl,Sn=new ae;class In extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dx(e)?_x:gx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,s){return vi.makeTranslation(e,i,s),this.applyMatrix4(vi),this}scale(e,i,s){return vi.makeScale(e,i,s),this.applyMatrix4(vi),this}lookAt(e){return $d.lookAt(e),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Jn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ri.min,Ko.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,Ko.max),ri.expandByPoint(Sn)):(ri.expandByPoint(Ko.min),ri.expandByPoint(Ko.max))}ri.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Sn.fromBufferAttribute(h,p),m&&(Ur.fromBufferAttribute(e,p),Sn.add(Ur)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<s.count;K++)h[K]=new ae,m[K]=new ae;const p=new ae,g=new ae,_=new ae,v=new Ht,y=new Ht,E=new Ht,T=new ae,M=new ae;function x(K,w,D){p.fromBufferAttribute(s,K),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,D),v.fromBufferAttribute(c,K),y.fromBufferAttribute(c,w),E.fromBufferAttribute(c,D),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(H),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),h[K].add(T),h[w].add(T),h[D].add(T),m[K].add(M),m[w].add(M),m[D].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let K=0,w=O.length;K<w;++K){const D=O[K],H=D.start,Z=D.count;for(let ie=H,de=H+Z;ie<de;ie+=3)x(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const U=new ae,C=new ae,I=new ae,z=new ae;function B(K){I.fromBufferAttribute(l,K),z.copy(I);const w=h[K];U.copy(w),U.sub(I.multiplyScalar(I.dot(w))).normalize(),C.crossVectors(z,w);const H=C.dot(m[K])<0?-1:1;d.setXYZW(K,U.x,U.y,U.z,H)}for(let K=0,w=O.length;K<w;++K){const D=O[K],H=D.start,Z=D.count;for(let ie=H,de=H+Z;ie<de;ie+=3)B(e.getX(ie+0)),B(e.getX(ie+1)),B(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new ae,c=new ae,d=new ae,h=new ae,m=new ae,p=new ae,g=new ae,_=new ae;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),T=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new Ei(v,g,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new In,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=e(v,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y_=new tn,Rs=new _u,Fc=new ml,q_=new ae,zc=new ae,Hc=new ae,Gc=new ae,eh=new ae,Vc=new ae,K_=new ae,kc=new ae;class ba extends kn{constructor(e=new In,i=new mx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(eh.fromBufferAttribute(_,e),d?Vc.addScaledVector(eh,g):Vc.addScaledVector(eh.sub(i),g))}i.add(Vc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(c),Rs.copy(e.ray).recast(e.near),!(Fc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Fc,q_)===null||Rs.origin.distanceToSquared(q_)>(e.far-e.near)**2))&&(Y_.copy(c).invert(),Rs.copy(e.ray).applyMatrix4(Y_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=d[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let C=O,I=U;C<I;C+=3){const z=h.getX(C),B=h.getX(C+1),K=h.getX(C+2);l=Xc(this,x,e,s,p,g,_,z,B,K),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const O=h.getX(M),U=h.getX(M+1),C=h.getX(M+2);l=Xc(this,d,e,s,p,g,_,O,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=d[M.materialIndex],O=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=O,I=U;C<I;C+=3){const z=C,B=C+1,K=C+2;l=Xc(this,x,e,s,p,g,_,z,B,K),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const O=M,U=M+1,C=M+2;l=Xc(this,d,e,s,p,g,_,O,U,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Cb(r,e,i,s,l,c,d,h){let m;if(e.side===Zn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===rs,h),m===null)return null;kc.copy(h),kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:r}}function Xc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,zc),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const g=Cb(r,e,i,s,zc,Hc,Gc,K_);if(g){const _=new ae;Ui.getBarycoord(K_,zc,Hc,Gc,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,m,p,_,new Ht)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,h,m,p,_,new Ht)),d&&(g.normal=Ui.getInterpolatedAttribute(d,h,m,p,_,new ae),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new ae,materialIndex:0};Ui.getNormal(zc,Hc,Gc,v.normal),g.face=v,g.barycoord=_}return g}class gl extends In{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,i,e,d,c,0),E("z","y","x",1,-1,s,i,-e,d,c,1),E("x","z","y",1,1,e,s,i,l,d,2),E("x","z","y",1,-1,e,s,-i,l,d,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(_,2));function E(T,M,x,O,U,C,I,z,B,K,w){const D=C/B,H=I/K,Z=C/2,ie=I/2,de=z/2,ue=B+1,L=K+1;let G=0,J=0;const ve=new ae;for(let ye=0;ye<L;ye++){const P=ye*H-ie;for(let ne=0;ne<ue;ne++){const ge=ne*D-Z;ve[T]=ge*O,ve[M]=P*U,ve[x]=de,p.push(ve.x,ve.y,ve.z),ve[T]=0,ve[M]=0,ve[x]=z>0?1:-1,g.push(ve.x,ve.y,ve.z),_.push(ne/B),_.push(1-ye/K),G+=1}}for(let ye=0;ye<K;ye++)for(let P=0;P<B;P++){const ne=v+P+ue*ye,ge=v+P+ue*(ye+1),we=v+(P+1)+ue*(ye+1),He=v+(P+1)+ue*ye;m.push(ne,ge,He),m.push(ge,we,He),J+=6}h.addGroup(y,J,w),y+=J,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Gn(r){const e={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)e[l]=s[l]}return e}function Db(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function vx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Lb={clone:Wr,merge:Gn};var Nb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nb,this.fragmentShader=Ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xx extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new ae,Z_=new Ht,J_=new Ht;class yi extends xx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,Z_,J_),i.subVectors(J_,Z_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(il*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Or=-90,Pr=1;class Ob extends kn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Or,Pr,e,i);l.layers=this.layers,this.add(l);const c=new yi(Or,Pr,e,i);c.layers=this.layers,this.add(c);const d=new yi(Or,Pr,e,i);d.layers=this.layers,this.add(d);const h=new yi(Or,Pr,e,i);h.layers=this.layers,this.add(h);const m=new yi(Or,Pr,e,i);m.layers=this.layers,this.add(m);const p=new yi(Or,Pr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Sx extends Vn{constructor(e=[],i=Bs,s,l,c,d,h,m,p,g){super(e,i,s,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yx extends ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Sx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:xa});c.uniforms.tEquirect.value=i;const d=new ba(l,c),h=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Bn),new Ob(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class Fr extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pb={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Fr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class du{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=i}clone(){return new du(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ib extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Bb extends Vn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=Ln,g=Ln,_,v){super(null,d,h,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new ae,Fb=new ae,zb=new ht;class Ns{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=nh.subVectors(s,i).cross(Fb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(nh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||zb.getNormalMatrix(e),l=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new ml,Hb=new Ht(.5,.5),jc=new ae;class Mx{constructor(e=new Ns,i=new Ns,s=new Ns,l=new Ns,c=new Ns,d=new Ns){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ki,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],T=c[9],M=c[10],x=c[11],O=c[12],U=c[13],C=c[14],I=c[15];if(l[0].setComponents(p-d,y-g,x-E,I-O).normalize(),l[1].setComponents(p+d,y+g,x+E,I+O).normalize(),l[2].setComponents(p+h,y+_,x+T,I+U).normalize(),l[3].setComponents(p-h,y-_,x-T,I-U).normalize(),s)l[4].setComponents(m,v,M,C).normalize(),l[5].setComponents(p-m,y-v,x-M,I-C).normalize();else if(l[4].setComponents(p-m,y-v,x-M,I-C).normalize(),i===ki)l[5].setComponents(p+m,y+v,x+M,I+C).normalize();else if(i===uu)l[5].setComponents(m,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=Hb.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?e.max.x:e.min.x,jc.y=l.normal.y>0?e.max.y:e.min.y,jc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hu=new ae,pu=new ae,Q_=new tn,Zo=new _u,Wc=new ml,ih=new ae,$_=new ae;class Ex extends kn{constructor(e=new In,i=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)hu.fromBufferAttribute(i,l-1),pu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=hu.distanceTo(pu);e.setAttribute("lineDistance",new Jn(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;Q_.copy(l).invert(),Zo.copy(e.ray).applyMatrix4(Q_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let T=y,M=E-1;T<M;T+=p){const x=g.getX(T),O=g.getX(T+1),U=Yc(this,e,Zo,m,x,O,T);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(y),x=Yc(this,e,Zo,m,T,M,E-1);x&&i.push(x)}}else{const y=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let T=y,M=E-1;T<M;T+=p){const x=Yc(this,e,Zo,m,T,T+1,T);x&&i.push(x)}if(this.isLineLoop){const T=Yc(this,e,Zo,m,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Yc(r,e,i,s,l,c,d){const h=r.geometry.attributes.position;if(hu.fromBufferAttribute(h,l),pu.fromBufferAttribute(h,c),i.distanceSqToSegment(hu,pu,ih,$_)>s)return;ih.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(ih);if(!(p<e.near||p>e.far))return{distance:p,point:$_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const ev=new ae,tv=new ae;class ah extends Ex{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)ev.fromBufferAttribute(i,l),tv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ev.distanceTo(tv);e.setAttribute("lineDistance",new Jn(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class op extends Kr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nv=new tn,lp=new _u,qc=new ml,Kc=new ae;class iv extends kn{constructor(e=new In,i=new op){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,e.ray.intersectsSphere(qc)===!1)return;nv.copy(l).invert(),lp.copy(e.ray).applyMatrix4(nv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const v=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let E=v,T=y;E<T;E++){const M=p.getX(E);Kc.fromBufferAttribute(_,M),av(Kc,M,m,l,e,i,this)}}else{const v=Math.max(0,d.start),y=Math.min(_.count,d.start+d.count);for(let E=v,T=y;E<T;E++)Kc.fromBufferAttribute(_,E),av(Kc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function av(r,e,i,s,l,c,d){const h=lp.distanceSqToPoint(r);if(h<i){const m=new ae;lp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class ul extends Vn{constructor(e,i,s=Wi,l,c,d,h=Ln,m=Ln,p,g=Ma,_=1){if(g!==Ma&&g!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,c,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Gb extends ul{constructor(e,i=Wi,s=Bs,l,c,d=Ln,h=Ln,m,p=Ma){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,c,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bx extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vu extends In{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=e/h,v=i/m,y=[],E=[],T=[],M=[];for(let x=0;x<g;x++){const O=x*v-d;for(let U=0;U<p;U++){const C=U*_-c;E.push(C,-O,0),T.push(0,0,1),M.push(U/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<h;O++){const U=O+p*x,C=O+p*(x+1),I=O+1+p*(x+1),z=O+1+p*x;y.push(U,C,z),y.push(C,I,z)}this.setIndex(y),this.setAttribute("position",new Jn(E,3)),this.setAttribute("normal",new Jn(T,3)),this.setAttribute("uv",new Jn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vb extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kb extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xb extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tx extends xx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jb extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const sv=new tn;class Yb{constructor(e,i,s=0,l=1/0){this.ray=new _u(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Rt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return sv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sv),this}intersectObject(e,i=!0,s=[]){return cp(e,this,s,i),s.sort(rv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)cp(e[l],this,s,i);return s.sort(rv),s}}function rv(r,e){return r.distance-e.distance}function cp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let d=0,h=c.length;d<h;d++)cp(c[d],e,i,!0)}}function ov(r,e,i,s){const l=qb(s);switch(i){case cx:return r*e;case fx:return r*e/l.components*l.byteLength;case vp:return r*e/l.components*l.byteLength;case Xr:return r*e*2/l.components*l.byteLength;case xp:return r*e*2/l.components*l.byteLength;case ux:return r*e*3/l.components*l.byteLength;case Oi:return r*e*4/l.components*l.byteLength;case Sp:return r*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Nh:return Math.max(r,16)*Math.max(e,8)/4;case Ch:case Lh:return Math.max(r,8)*Math.max(e,8)/2;case Uh:case Oh:case Ih:case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ph:case Fh:case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ep:case tp:case np:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ip:case ap:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sp:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qb(r){switch(r){case Mi:case sx:return{byteLength:1,components:1};case rl:case rx:case ya:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case Wi:case mp:case Vi:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);function Ax(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Kb(r){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jb=`#ifdef USE_ALPHAHASH
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
#endif`,Qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nT=`#ifdef USE_AOMAP
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
#endif`,iT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
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
#endif`,sT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cT=`#ifdef USE_IRIDESCENCE
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
#endif`,uT=`#ifdef USE_BUMPMAP
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
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xT=`#define PI 3.141592653589793
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
} // validated`,ST=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yT=`vec3 transformedNormal = objectNormal;
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
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AT="gl_FragColor = linearToOutputTexel( gl_FragColor );",RT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wT=`#ifdef USE_ENVMAP
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
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
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
}`,FT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GT=`uniform bool receiveShadow;
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
#endif`,VT=`#ifdef USE_ENVMAP
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
#endif`,kT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YT=`PhysicalMaterial material;
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
#endif`,qT=`uniform sampler2D dfgLUT;
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
}`,KT=`
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
#endif`,ZT=`#if defined( RE_IndirectDiffuse )
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
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sA=`#if defined( USE_POINTS_UV )
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
#endif`,rA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fA=`#ifdef USE_MORPHTARGETS
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
#endif`,dA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_A=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vA=`#ifdef USE_NORMALMAP
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
#endif`,xA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OA=`float getShadowMask() {
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
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IA=`#ifdef USE_SKINNING
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
#endif`,BA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FA=`#ifdef USE_SKINNING
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
#endif`,zA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kA=`#ifdef USE_TRANSMISSION
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
#endif`,XA=`#ifdef USE_TRANSMISSION
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
#endif`,jA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZA=`uniform sampler2D t2D;
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
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
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
}`,n1=`#if DEPTH_PACKING == 3200
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
}`,i1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,m1=`#define NORMAL
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
}`,g1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,v1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,M1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,w1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Zb,alphahash_pars_fragment:Jb,alphamap_fragment:Qb,alphamap_pars_fragment:$b,alphatest_fragment:eT,alphatest_pars_fragment:tT,aomap_fragment:nT,aomap_pars_fragment:iT,batching_pars_vertex:aT,batching_vertex:sT,begin_vertex:rT,beginnormal_vertex:oT,bsdfs:lT,iridescence_fragment:cT,bumpmap_pars_fragment:uT,clipping_planes_fragment:fT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:pT,color_fragment:mT,color_pars_fragment:gT,color_pars_vertex:_T,color_vertex:vT,common:xT,cube_uv_reflection_fragment:ST,defaultnormal_vertex:yT,displacementmap_pars_vertex:MT,displacementmap_vertex:ET,emissivemap_fragment:bT,emissivemap_pars_fragment:TT,colorspace_fragment:AT,colorspace_pars_fragment:RT,envmap_fragment:wT,envmap_common_pars_fragment:CT,envmap_pars_fragment:DT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:VT,envmap_vertex:NT,fog_vertex:UT,fog_pars_vertex:OT,fog_fragment:PT,fog_pars_fragment:IT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:FT,lights_lambert_fragment:zT,lights_lambert_pars_fragment:HT,lights_pars_begin:GT,lights_toon_fragment:kT,lights_toon_pars_fragment:XT,lights_phong_fragment:jT,lights_phong_pars_fragment:WT,lights_physical_fragment:YT,lights_physical_pars_fragment:qT,lights_fragment_begin:KT,lights_fragment_maps:ZT,lights_fragment_end:JT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:$T,logdepthbuf_pars_vertex:eA,logdepthbuf_vertex:tA,map_fragment:nA,map_pars_fragment:iA,map_particle_fragment:aA,map_particle_pars_fragment:sA,metalnessmap_fragment:rA,metalnessmap_pars_fragment:oA,morphinstance_vertex:lA,morphcolor_vertex:cA,morphnormal_vertex:uA,morphtarget_pars_vertex:fA,morphtarget_vertex:dA,normal_fragment_begin:hA,normal_fragment_maps:pA,normal_pars_fragment:mA,normal_pars_vertex:gA,normal_vertex:_A,normalmap_pars_fragment:vA,clearcoat_normal_fragment_begin:xA,clearcoat_normal_fragment_maps:SA,clearcoat_pars_fragment:yA,iridescence_pars_fragment:MA,opaque_fragment:EA,packing:bA,premultiplied_alpha_fragment:TA,project_vertex:AA,dithering_fragment:RA,dithering_pars_fragment:wA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:DA,shadowmap_pars_fragment:LA,shadowmap_pars_vertex:NA,shadowmap_vertex:UA,shadowmask_pars_fragment:OA,skinbase_vertex:PA,skinning_pars_vertex:IA,skinning_vertex:BA,skinnormal_vertex:FA,specularmap_fragment:zA,specularmap_pars_fragment:HA,tonemapping_fragment:GA,tonemapping_pars_fragment:VA,transmission_fragment:kA,transmission_pars_fragment:XA,uv_pars_fragment:jA,uv_pars_vertex:WA,uv_vertex:YA,worldpos_vertex:qA,background_vert:KA,background_frag:ZA,backgroundCube_vert:JA,backgroundCube_frag:QA,cube_vert:$A,cube_frag:e1,depth_vert:t1,depth_frag:n1,distance_vert:i1,distance_frag:a1,equirect_vert:s1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:c1,meshbasic_frag:u1,meshlambert_vert:f1,meshlambert_frag:d1,meshmatcap_vert:h1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:g1,meshphong_vert:_1,meshphong_frag:v1,meshphysical_vert:x1,meshphysical_frag:S1,meshtoon_vert:y1,meshtoon_frag:M1,points_vert:E1,points_frag:b1,shadow_vert:T1,shadow_frag:A1,sprite_vert:R1,sprite_frag:w1},ze={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Gi={basic:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Gn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Gn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Gn([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Gn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Gn([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Gn([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Gn([ze.common,ze.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Gn([ze.lights,ze.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Gi.physical={uniforms:Gn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Zc={r:0,b:0,g:0},Cs=new Ea,C1=new tn;function D1(r,e,i,s,l,c,d){const h=new Tt(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:e).get(C)),C}function T(U){let C=!1;const I=E(U);I===null?x(h,m):I&&I.isColor&&(x(I,1),C=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,C){const I=E(C);I&&(I.isCubeTexture||I.mapping===gu)?(g===void 0&&(g=new ba(new gl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Wr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cs.copy(C.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Cs)),g.material.toneMapped=wt.getTransfer(I.colorSpace)!==zt,(_!==I||v!==I.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=I,v=I.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new ba(new vu(2,2),new Yi({name:"BackgroundMaterial",uniforms:Wr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(I.colorSpace)!==zt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||v!==I.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,v=I.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,C){U.getRGB(Zc,vx(r)),s.buffers.color.setClear(Zc.r,Zc.g,Zc.b,C,d)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),m=C,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(h,m)},render:T,addToRenderList:M,dispose:O}}function L1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function h(D,H,Z,ie,de){let ue=!1;const L=_(ie,Z,H);c!==L&&(c=L,p(c.object)),ue=y(D,ie,Z,de),ue&&E(D,ie,Z,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,C(D,H,Z,ie),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function _(D,H,Z){const ie=Z.wireframe===!0;let de=s[D.id];de===void 0&&(de={},s[D.id]=de);let ue=de[H.id];ue===void 0&&(ue={},de[H.id]=ue);let L=ue[ie];return L===void 0&&(L=v(m()),ue[ie]=L),L}function v(D){const H=[],Z=[],ie=[];for(let de=0;de<i;de++)H[de]=0,Z[de]=0,ie[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:ie,object:D,attributes:{},index:null}}function y(D,H,Z,ie){const de=c.attributes,ue=H.attributes;let L=0;const G=Z.getAttributes();for(const J in G)if(G[J].location>=0){const ye=de[J];let P=ue[J];if(P===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),ye===void 0||ye.attribute!==P||P&&ye.data!==P.data)return!0;L++}return c.attributesNum!==L||c.index!==ie}function E(D,H,Z,ie){const de={},ue=H.attributes;let L=0;const G=Z.getAttributes();for(const J in G)if(G[J].location>=0){let ye=ue[J];ye===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ye=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ye=D.instanceColor));const P={};P.attribute=ye,ye&&ye.data&&(P.data=ye.data),de[J]=P,L++}c.attributes=de,c.attributesNum=L,c.index=ie}function T(){const D=c.newAttributes;for(let H=0,Z=D.length;H<Z;H++)D[H]=0}function M(D){x(D,0)}function x(D,H){const Z=c.newAttributes,ie=c.enabledAttributes,de=c.attributeDivisors;Z[D]=1,ie[D]===0&&(r.enableVertexAttribArray(D),ie[D]=1),de[D]!==H&&(r.vertexAttribDivisor(D,H),de[D]=H)}function O(){const D=c.newAttributes,H=c.enabledAttributes;for(let Z=0,ie=H.length;Z<ie;Z++)H[Z]!==D[Z]&&(r.disableVertexAttribArray(Z),H[Z]=0)}function U(D,H,Z,ie,de,ue,L){L===!0?r.vertexAttribIPointer(D,H,Z,de,ue):r.vertexAttribPointer(D,H,Z,ie,de,ue)}function C(D,H,Z,ie){T();const de=ie.attributes,ue=Z.getAttributes(),L=H.defaultAttributeValues;for(const G in ue){const J=ue[G];if(J.location>=0){let ve=de[G];if(ve===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),ve!==void 0){const ye=ve.normalized,P=ve.itemSize,ne=e.get(ve);if(ne===void 0)continue;const ge=ne.buffer,we=ne.type,He=ne.bytesPerElement,$=we===r.INT||we===r.UNSIGNED_INT||ve.gpuType===mp;if(ve.isInterleavedBufferAttribute){const fe=ve.data,De=fe.stride,Xe=ve.offset;if(fe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<J.locationSize;Ge++)x(J.location+Ge,fe.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ge=0;Ge<J.locationSize;Ge++)M(J.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let Ge=0;Ge<J.locationSize;Ge++)U(J.location+Ge,P/J.locationSize,we,ye,De*He,(Xe+P/J.locationSize*Ge)*He,$)}else{if(ve.isInstancedBufferAttribute){for(let fe=0;fe<J.locationSize;fe++)x(J.location+fe,ve.meshPerAttribute);D.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let fe=0;fe<J.locationSize;fe++)M(J.location+fe);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let fe=0;fe<J.locationSize;fe++)U(J.location+fe,P/J.locationSize,we,ye,P*He,P/J.locationSize*fe*He,$)}}else if(L!==void 0){const ye=L[G];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(J.location,ye);break;case 3:r.vertexAttrib3fv(J.location,ye);break;case 4:r.vertexAttrib4fv(J.location,ye);break;default:r.vertexAttrib1fv(J.location,ye)}}}}O()}function I(){K();for(const D in s){const H=s[D];for(const Z in H){const ie=H[Z];for(const de in ie)g(ie[de].object),delete ie[de];delete H[Z]}delete s[D]}}function z(D){if(s[D.id]===void 0)return;const H=s[D.id];for(const Z in H){const ie=H[Z];for(const de in ie)g(ie[de].object),delete ie[de];delete H[Z]}delete s[D.id]}function B(D){for(const H in s){const Z=s[H];if(Z[D.id]===void 0)continue;const ie=Z[D.id];for(const de in ie)g(ie[de].object),delete ie[de];delete Z[D.id]}}function K(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function N1(r,e,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(p,g,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)d(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function U1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Oi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const K=B===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Mi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Vi&&!K)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(at("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:C,maxSamples:I,samples:z}}function O1(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ns,h=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const O=c?0:s,U=O*4;let C=x.clippingState||null;m.value=C,C=g(E,v,U,y);for(let I=0;I!==U;++I)C[I]=i[I];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,v,y,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const x=y+T*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,C=y;U!==T;++U,C+=4)d.copy(_[U]).applyMatrix4(O,h),d.normal.toArray(M,C),M[C+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function P1(r){let e=new WeakMap;function i(d,h){return h===Th?d.mapping=Bs:h===Ah&&(d.mapping=kr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Th||h===Ah)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new yx(m.height);return p.fromEquirectangularTexture(r,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ss=4,lv=[.125,.215,.35,.446,.526,.582],Os=20,I1=256,Jo=new Tx,cv=new Tt;let sh=null,rh=0,oh=0,lh=!1;const B1=new ae;class uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=B1}=c;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Bs||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ya,format:Oi,colorSpace:jr,depthBuffer:!1},l=fv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F1(c)),this._blurMaterial=H1(c,e,i),this._ggxMaterial=z1(c,e,i)}return l}_compileMaterial(e){const i=new ba(new In,e);this._renderer.compile(i,Jo)}_sceneToCubeUV(e,i,s,l,c){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(cv),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ba(new gl,new mx({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,x=!0):(M.color.copy(cv),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):C===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const I=this._cubeSize;Ir(l,C*I,U>2?I:0,I,I),_.setRenderTarget(l),x&&_.render(T,m),_.render(e,m)}_.toneMapping=y,_.autoClear=v,e.background=O}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Bs||e.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ir(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Jo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,y=_*v,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-ss?s-E+ss:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-i,Ir(c,M,x,3*T,2*T),l.setRenderTarget(c),l.render(h,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ir(e,M,x,3*T,2*T),l.setRenderTarget(e),l.render(h,Jo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Os-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Os;M>Os&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const x=[];let O=0;for(let B=0;B<Os;++B){const K=B/T,w=Math.exp(-K*K/2);x.push(w),B===0?O+=w:B<M&&(O+=2*w)}for(let B=0;B<x.length;B++)x[B]=x[B]/O;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-s;const C=this._sizeLods[l],I=3*C*(l>U-ss?l-U+ss:0),z=4*(this._cubeSize-C);Ir(i,I,z,3*C,2*C),m.setRenderTarget(i),m.render(_,Jo)}}function F1(r){const e=[],i=[],s=[];let l=r;const c=r-ss+1+lv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-ss?m=lv[d-r+ss-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,M=2,x=1,O=new Float32Array(T*E*y),U=new Float32Array(M*E*y),C=new Float32Array(x*E*y);for(let z=0;z<y;z++){const B=z%3*2/3-1,K=z>2?0:-1,w=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];O.set(w,T*E*z),U.set(v,M*E*z);const D=[z,z,z,z,z,z];C.set(D,x*E*z)}const I=new In;I.setAttribute("position",new Ei(O,T)),I.setAttribute("uv",new Ei(U,M)),I.setAttribute("faceIndex",new Ei(C,x)),s.push(new ba(I,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function fv(r,e,i){const s=new ji(r,e,i);return s.texture.mapping=gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ir(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function z1(r,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function H1(r,e,i){const s=new Float32Array(Os),l=new ae(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function dv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function hv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function G1(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Th||m===Ah,g=m===Bs||m===kr;if(p||g){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new uv(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new uv(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function V1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ll("WebGLRenderer: "+s+" extension not supported."),l}}}function k1(r,e,i,s){const l={},c=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",d),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let U=0,C=O.length;U<C;U+=3){const I=O[U+0],z=O[U+1],B=O[U+2];v.push(I,z,z,B,B,I)}}else if(E!==void 0){const O=E.array;T=E.version;for(let U=0,C=O.length/3-1;U<C;U+=3){const I=U+0,z=U+1,B=U+2;v.push(I,z,z,B,B,I)}}else return;const M=new(dx(v)?_x:gx)(v,1);M.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function X1(r,e,i){let s;function l(v){s=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*d),i.update(y,s,1)}function p(v,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,v*d,E),i.update(y,s,E))}function g(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];i.update(M,s,1)}function _(v,y,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/d,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,T,0,E);let x=0;for(let O=0;O<E;O++)x+=y[O]*T[O];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function j1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function W1(r,e,i){const s=new WeakMap,l=new on;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let D=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var y=D;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),M===!0&&(C=3);let I=h.attributes.position.count*C,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*z*4*_),K=new hx(B,I,z,_);K.type=Vi,K.needsUpdate=!0;const w=C*4;for(let H=0;H<_;H++){const Z=x[H],ie=O[H],de=U[H],ue=I*z*4*H;for(let L=0;L<Z.count;L++){const G=L*w;E===!0&&(l.fromBufferAttribute(Z,L),B[ue+G+0]=l.x,B[ue+G+1]=l.y,B[ue+G+2]=l.z,B[ue+G+3]=0),T===!0&&(l.fromBufferAttribute(ie,L),B[ue+G+4]=l.x,B[ue+G+5]=l.y,B[ue+G+6]=l.z,B[ue+G+7]=0),M===!0&&(l.fromBufferAttribute(de,L),B[ue+G+8]=l.x,B[ue+G+9]=l.y,B[ue+G+10]=l.z,B[ue+G+11]=de.itemSize===4?l.w:1)}}v={count:_,texture:K,size:new Ht(I,z)},s.set(h,v),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Y1(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const q1={[Jv]:"LINEAR_TONE_MAPPING",[Qv]:"REINHARD_TONE_MAPPING",[$v]:"CINEON_TONE_MAPPING",[ex]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[tx]:"CUSTOM_TONE_MAPPING"};function K1(r,e,i,s,l){const c=new ji(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new ji(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),h=new In;h.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const m=new Vb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ba(h,m),g=new Tx(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,T=null,M=[],x=!1;this.setSize=function(O,U){c.setSize(O,U),d.setSize(O,U);for(let C=0;C<M.length;C++){const I=M[C];I.setSize&&I.setSize(O,U)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const U=c.width,C=c.height;for(let I=0;I<M.length;I++){const z=M[I];z.setSize&&z.setSize(U,C)}},this.begin=function(O,U){if(y||O.toneMapping===Xi&&M.length===0)return!1;if(T=U,U!==null){const C=U.width,I=U.height;(c.width!==C||c.height!==I)&&this.setSize(C,I)}return x===!1&&O.setRenderTarget(c),E=O.toneMapping,O.toneMapping=Xi,!0},this.hasRenderPass=function(){return x},this.end=function(O,U){O.toneMapping=E,y=!0;let C=c,I=d;for(let z=0;z<M.length;z++){const B=M[z];if(B.enabled!==!1&&(B.render(O,I,C,U),B.needsSwap!==!1)){const K=C;C=I,I=K}}if(_!==O.outputColorSpace||v!==O.toneMapping){_=O.outputColorSpace,v=O.toneMapping,m.defines={},wt.getTransfer(_)===zt&&(m.defines.SRGB_TRANSFER="");const z=q1[v];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=C.texture,O.setRenderTarget(T),O.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Rx=new Vn,up=new ul(1,1),wx=new hx,Cx=new vb,Dx=new Sx,pv=[],mv=[],gv=new Float32Array(16),_v=new Float32Array(9),vv=new Float32Array(4);function Zr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=pv[l];if(c===void 0&&(c=new Float32Array(l),pv[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function _n(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function vn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Su(r,e){let i=mv[e];i===void 0&&(i=new Int32Array(e),mv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function Z1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function J1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2fv(this.addr,e),vn(i,e)}}function Q1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;r.uniform3fv(this.addr,e),vn(i,e)}}function $1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4fv(this.addr,e),vn(i,e)}}function eR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;vv.set(s),r.uniformMatrix2fv(this.addr,!1,vv),vn(i,s)}}function tR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;_v.set(s),r.uniformMatrix3fv(this.addr,!1,_v),vn(i,s)}}function nR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;gv.set(s),r.uniformMatrix4fv(this.addr,!1,gv),vn(i,s)}}function iR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function aR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2iv(this.addr,e),vn(i,e)}}function sR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;r.uniform3iv(this.addr,e),vn(i,e)}}function rR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4iv(this.addr,e),vn(i,e)}}function oR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function lR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2uiv(this.addr,e),vn(i,e)}}function cR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;r.uniform3uiv(this.addr,e),vn(i,e)}}function uR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4uiv(this.addr,e),vn(i,e)}}function fR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(up.compareFunction=i.isReversedDepthBuffer()?Mp:yp,c=up):c=Rx,i.setTexture2D(e||c,l)}function dR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Cx,l)}function hR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Dx,l)}function pR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||wx,l)}function mR(r){switch(r){case 5126:return Z1;case 35664:return J1;case 35665:return Q1;case 35666:return $1;case 35674:return eR;case 35675:return tR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return sR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return pR}}function gR(r,e){r.uniform1fv(this.addr,e)}function _R(r,e){const i=Zr(e,this.size,2);r.uniform2fv(this.addr,i)}function vR(r,e){const i=Zr(e,this.size,3);r.uniform3fv(this.addr,i)}function xR(r,e){const i=Zr(e,this.size,4);r.uniform4fv(this.addr,i)}function SR(r,e){const i=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function yR(r,e){const i=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function MR(r,e){const i=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function ER(r,e){r.uniform1iv(this.addr,e)}function bR(r,e){r.uniform2iv(this.addr,e)}function TR(r,e){r.uniform3iv(this.addr,e)}function AR(r,e){r.uniform4iv(this.addr,e)}function RR(r,e){r.uniform1uiv(this.addr,e)}function wR(r,e){r.uniform2uiv(this.addr,e)}function CR(r,e){r.uniform3uiv(this.addr,e)}function DR(r,e){r.uniform4uiv(this.addr,e)}function LR(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=up:d=Rx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function NR(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Cx,c[d])}function UR(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Dx,c[d])}function OR(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||wx,c[d])}function PR(r){switch(r){case 5126:return gR;case 35664:return _R;case 35665:return vR;case 35666:return xR;case 35674:return SR;case 35675:return yR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return bR;case 35668:case 35672:return TR;case 35669:case 35673:return AR;case 5125:return RR;case 36294:return wR;case 36295:return CR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return UR;case 36289:case 36303:case 36311:case 36292:return OR}}class IR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mR(i.type)}}class BR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PR(i.type)}}class FR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function xv(r,e){r.seq.push(e),r.map[e.id]=e}function zR(r,e,i){const s=r.name,l=s.length;for(ch.lastIndex=0;;){const c=ch.exec(s),d=ch.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){xv(i,p===void 0?new IR(h,r,e):new BR(h,r,e));break}else{let _=i.map[h];_===void 0&&(_=new FR(h),xv(i,_)),i=_}}}class ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);zR(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Sv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const HR=37297;let GR=0;function VR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const yv=new ht;function kR(r){wt._getMatrix(yv,wt.workingColorSpace,r);const e=`mat3( ${yv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case cu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+VR(r.getShaderSource(e),h)}else return c}function XR(r,e){const i=kR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const jR={[Jv]:"Linear",[Qv]:"Reinhard",[$v]:"Cineon",[ex]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[tx]:"Custom"};function WR(r,e){const i=jR[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new ae;function YR(){wt.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),e=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function KR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function ZR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function nl(r){return r!==""}function Ev(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JR=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(r){return r.replace(JR,$R)}const QR=new Map;function $R(r,e){let i=pt[e];if(i===void 0){const s=QR.get(e);if(s!==void 0)i=pt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return fp(i)}const ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(r){return r.replace(ew,tw)}function tw(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Av(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const nw={[tu]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function iw(r){return nw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aw={[Bs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function sw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const rw={[kr]:"ENVMAP_MODE_REFRACTION"};function ow(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":rw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lw={[Zv]:"ENVMAP_BLENDING_MULTIPLY",[BE]:"ENVMAP_BLENDING_MIX",[FE]:"ENVMAP_BLENDING_ADD"};function cw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lw[r.combine]||"ENVMAP_BLENDING_NONE"}function uw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fw(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=iw(i),p=sw(i),g=ow(i),_=cw(i),v=uw(i),y=qR(i),E=KR(c),T=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(nl).join(`
`),x.length>0&&(x+=`
`)):(M=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),x=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Xi?WR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,XR("linearToOutputTexel",i.outputColorSpace),YR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),d=fp(d),d=Ev(d,i),d=bv(d,i),h=fp(h),h=Ev(h,i),h=bv(h,i),d=Tv(d),h=Tv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===N_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=O+M+d,C=O+x+h,I=Sv(l,l.VERTEX_SHADER,U),z=Sv(l,l.FRAGMENT_SHADER,C);l.attachShader(T,I),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(H){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T)||"",ie=l.getShaderInfoLog(I)||"",de=l.getShaderInfoLog(z)||"",ue=Z.trim(),L=ie.trim(),G=de.trim();let J=!0,ve=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,I,z);else{const ye=Mv(l,I,"vertex"),P=Mv(l,z,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ue+`
`+ye+`
`+P)}else ue!==""?at("WebGLProgram: Program Info Log:",ue):(L===""||G==="")&&(ve=!1);ve&&(H.diagnostics={runnable:J,programLog:ue,vertexShader:{log:L,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(z),K=new ou(l,T),w=ZR(l,T)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,HR)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=z,this}let dw=0;class hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new pw(e),i.set(e,s)),s}}class pw{constructor(e){this.id=dw++,this.code=e,this.usedTimes=0}}function mw(r,e,i,s,l,c,d){const h=new Tp,m=new hw,p=new Set,g=[],_=new Map,v=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,D,H,Z,ie){const de=Z.fog,ue=ie.geometry,L=w.isMeshStandardMaterial?Z.environment:null,G=(w.isMeshStandardMaterial?i:e).get(w.envMap||L),J=G&&G.mapping===gu?G.image.height:null,ve=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&at("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const ye=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,P=ye!==void 0?ye.length:0;let ne=0;ue.morphAttributes.position!==void 0&&(ne=1),ue.morphAttributes.normal!==void 0&&(ne=2),ue.morphAttributes.color!==void 0&&(ne=3);let ge,we,He,$;if(ve){const At=Gi[ve];ge=At.vertexShader,we=At.fragmentShader}else ge=w.vertexShader,we=w.fragmentShader,m.update(w),He=m.getVertexShaderID(w),$=m.getFragmentShaderID(w);const fe=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),Xe=ie.isInstancedMesh===!0,Ge=ie.isBatchedMesh===!0,mt=!!w.map,Jt=!!w.matcap,gt=!!G,ct=!!w.aoMap,_t=!!w.lightMap,st=!!w.bumpMap,Wt=!!w.normalMap,k=!!w.displacementMap,Xt=!!w.emissiveMap,vt=!!w.metalnessMap,je=!!w.roughnessMap,Ce=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,W=w.iridescence>0,he=w.sheen>0,xe=w.transmission>0,oe=Ce&&!!w.anisotropyMap,Ve=N&&!!w.clearcoatMap,Ae=N&&!!w.clearcoatNormalMap,We=N&&!!w.clearcoatRoughnessMap,tt=W&&!!w.iridescenceMap,Ee=W&&!!w.iridescenceThicknessMap,Te=he&&!!w.sheenColorMap,Ne=he&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Ue=!!w.specularColorMap,ot=!!w.specularIntensityMap,j=xe&&!!w.transmissionMap,Pe=xe&&!!w.thicknessMap,Re=!!w.gradientMap,Be=!!w.alphaMap,Me=w.alphaTest>0,Se=!!w.alphaHash,Le=!!w.extensions;let rt=Xi;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=r.toneMapping);const Pt={shaderID:ve,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:we,defines:w.defines,customVertexShaderID:He,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&ie._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ie.instanceColor!==null,instancingMorph:Xe&&ie.morphTexture!==null,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:jr,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:Jt,envMap:gt,envMapMode:gt&&G.mapping,envMapCubeUVHeight:J,aoMap:ct,lightMap:_t,bumpMap:st,normalMap:Wt,displacementMap:k,emissiveMap:Xt,normalMapObjectSpace:Wt&&w.normalMapType===VE,normalMapTangentSpace:Wt&&w.normalMapType===GE,metalnessMap:vt,roughnessMap:je,anisotropy:Ce,anisotropyMap:oe,clearcoat:N,clearcoatMap:Ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:We,dispersion:b,iridescence:W,iridescenceMap:tt,iridescenceThicknessMap:Ee,sheen:he,sheenColorMap:Te,sheenRoughnessMap:Ne,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:ot,transmission:xe,transmissionMap:j,thicknessMap:Pe,gradientMap:Re,opaque:w.transparent===!1&&w.blending===zr&&w.alphaToCoverage===!1,alphaMap:Be,alphaTest:Me,alphaHash:Se,combine:w.combine,mapUv:mt&&T(w.map.channel),aoMapUv:ct&&T(w.aoMap.channel),lightMapUv:_t&&T(w.lightMap.channel),bumpMapUv:st&&T(w.bumpMap.channel),normalMapUv:Wt&&T(w.normalMap.channel),displacementMapUv:k&&T(w.displacementMap.channel),emissiveMapUv:Xt&&T(w.emissiveMap.channel),metalnessMapUv:vt&&T(w.metalnessMap.channel),roughnessMapUv:je&&T(w.roughnessMap.channel),anisotropyMapUv:oe&&T(w.anisotropyMap.channel),clearcoatMapUv:Ve&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&T(w.sheenRoughnessMap.channel),specularMapUv:Oe&&T(w.specularMap.channel),specularColorMapUv:Ue&&T(w.specularColorMap.channel),specularIntensityMapUv:ot&&T(w.specularIntensityMap.channel),transmissionMapUv:j&&T(w.transmissionMap.channel),thicknessMapUv:Pe&&T(w.thicknessMap.channel),alphaMapUv:Be&&T(w.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Wt||Ce),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!ue.attributes.uv&&(mt||Be),fog:!!de,useFog:w.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:De,skinning:ie.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ne,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:Xt&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_a,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)D.push(H),D.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(O(D,w),U(D,w),D.push(r.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function O(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function U(w,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),w.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),w.push(h.mask)}function C(w){const D=E[w.type];let H;if(D){const Z=Gi[D];H=Lb.clone(Z.uniforms)}else H=w.uniforms;return H}function I(w,D){let H=_.get(D);return H!==void 0?++H.usedTimes:(H=new fw(r,D,w,c),g.push(H),_.set(D,H)),H}function z(w){if(--w.usedTimes===0){const D=g.indexOf(w);g[D]=g[g.length-1],g.pop(),_.delete(w.cacheKey),w.destroy()}}function B(w){m.remove(w)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:I,releaseProgram:z,releaseShaderCache:B,programs:g,dispose:K}}function gw(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function _w(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Rv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(_,v,y,E,T,M){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},r[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=M),e++,x}function h(_,v,y,E,T,M){const x=d(_,v,y,E,T,M);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(_,v,y,E,T,M){const x=d(_,v,y,E,T,M);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||_w),s.length>1&&s.sort(v||Rv),l.length>1&&l.sort(v||Rv)}function g(){for(let _=e,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function vw(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new wv,r.set(s,[d])):l>=c.length?(d=new wv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Tt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=i,i}}}function Sw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let yw=0;function Mw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ew(r){const e=new xw,i=Sw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const l=new ae,c=new tn,d=new tn;function h(p){let g=0,_=0,v=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,E=0,T=0,M=0,x=0,O=0,U=0,C=0,I=0,z=0,B=0;p.sort(Mw);for(let w=0,D=p.length;w<D;w++){const H=p[w],Z=H.color,ie=H.intensity,de=H.distance;let ue=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Xr?ue=H.shadow.map.texture:ue=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=Z.r*ie,_+=Z.g*ie,v+=Z.b*ie;else if(H.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(H.sh.coefficients[L],ie);B++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=ue,s.directionalShadowMatrix[y]=H.shadow.matrix,O++}s.directional[y]=L,y++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(Z).multiplyScalar(ie),L.distance=de,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,s.spot[T]=L;const G=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,G.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[T]=G.matrix,H.castShadow){const J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,s.spotShadow[T]=J,s.spotShadowMap[T]=ue,C++}T++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy(Z).multiplyScalar(ie),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=L,M++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const G=H.shadow,J=i.get(H);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,s.pointShadow[E]=J,s.pointShadowMap[E]=ue,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=L,E++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(ie),L.groundColor.copy(H.groundColor).multiplyScalar(ie),s.hemi[x]=L,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ze.LTC_FLOAT_1,s.rectAreaLTC2=ze.LTC_FLOAT_2):(s.rectAreaLTC1=ze.LTC_HALF_1,s.rectAreaLTC2=ze.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const K=s.hash;(K.directionalLength!==y||K.pointLength!==E||K.spotLength!==T||K.rectAreaLength!==M||K.hemiLength!==x||K.numDirectionalShadows!==O||K.numPointShadows!==U||K.numSpotShadows!==C||K.numSpotMaps!==I||K.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=C+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,K.directionalLength=y,K.pointLength=E,K.spotLength=T,K.rectAreaLength=M,K.hemiLength=x,K.numDirectionalShadows=O,K.numPointShadows=U,K.numSpotShadows=C,K.numSpotMaps=I,K.numLightProbes=B,s.version=yw++)}function m(p,g){let _=0,v=0,y=0,E=0,T=0;const M=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const U=p[x];if(U.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),_++}else if(U.isSpotLight){const C=s.spot[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),d.identity(),c.copy(U.matrixWorld),c.premultiply(M),d.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const C=s.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function Cv(r){const e=new Ew(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function d(g){s.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function bw(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Cv(r),e.set(l,[h])):c>=d.length?(h=new Cv(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
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
}`,Rw=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],ww=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Dv=new tn,Qo=new ae,uh=new ae;function Cw(r,e,i){let s=new Mx;const l=new Ht,c=new Ht,d=new on,h=new kb,m=new Xb,p={},g=i.maxTextureSize,_={[rs]:Zn,[Zn]:rs,[_a]:_a},v=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Tw,fragmentShader:Aw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new In;E.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ba(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let x=this.type;this.render=function(z,B,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===vE&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=tu);const w=r.getRenderTarget(),D=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(xa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ie=x!==this.type;ie&&B.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ue=>ue.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ue=z.length;de<ue;de++){const L=z[de],G=L.shadow;if(G===void 0){at("WebGLShadowMap:",L,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const J=G.getFrameExtents();if(l.multiply(J),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/J.x),l.x=c.x*J.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/J.y),l.y=c.y*J.y,G.mapSize.y=c.y)),G.map===null||ie===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===tl){if(L.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ji(l.x,l.y,{format:Xr,type:ya,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),G.map.texture.name=L.name+".shadowMap",G.map.depthTexture=new ul(l.x,l.y,Vi),G.map.depthTexture.name=L.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln}else{L.isPointLight?(G.map=new yx(l.x),G.map.depthTexture=new Gb(l.x,Wi)):(G.map=new ji(l.x,l.y),G.map.depthTexture=new ul(l.x,l.y,Wi)),G.map.depthTexture.name=L.name+".shadowMap",G.map.depthTexture.format=Ma;const ye=r.state.buffers.depth.getReversed();this.type===tu?(G.map.depthTexture.compareFunction=ye?Mp:yp,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln)}G.camera.updateProjectionMatrix()}const ve=G.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<ve;ye++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,ye),r.clear();else{ye===0&&(r.setRenderTarget(G.map),r.clear());const P=G.getViewport(ye);d.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),Z.viewport(d)}if(L.isPointLight){const P=G.camera,ne=G.matrix,ge=L.distance||P.far;ge!==P.far&&(P.far=ge,P.updateProjectionMatrix()),Qo.setFromMatrixPosition(L.matrixWorld),P.position.copy(Qo),uh.copy(P.position),uh.add(Rw[ye]),P.up.copy(ww[ye]),P.lookAt(uh),P.updateMatrixWorld(),ne.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Dv.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Dv,P.coordinateSystem,P.reversedDepth)}else G.updateMatrices(L);s=G.getFrustum(),C(B,K,G.camera,L,this.type)}G.isPointLightShadow!==!0&&this.type===tl&&O(G,K),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(w,D,H)};function O(z,B){const K=e.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ji(l.x,l.y,{format:Xr,type:ya})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,K,v,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,K,y,T,null)}function U(z,B,K,w){let D=null;const H=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)D=H;else if(D=K.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=D.uuid,ie=B.uuid;let de=p[Z];de===void 0&&(de={},p[Z]=de);let ue=de[ie];ue===void 0&&(ue=D.clone(),de[ie]=ue,B.addEventListener("dispose",I)),D=ue}if(D.visible=B.visible,D.wireframe=B.wireframe,w===tl?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:_[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Z=r.properties.get(D);Z.light=K}return D}function C(z,B,K,w,D){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===tl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const ie=e.update(z),de=z.material;if(Array.isArray(de)){const ue=ie.groups;for(let L=0,G=ue.length;L<G;L++){const J=ue[L],ve=de[J.materialIndex];if(ve&&ve.visible){const ye=U(z,ve,w,D);z.onBeforeShadow(r,z,B,K,ie,ye,J),r.renderBufferDirect(K,null,ie,ye,z,J),z.onAfterShadow(r,z,B,K,ie,ye,J)}}}else if(de.visible){const ue=U(z,de,w,D);z.onBeforeShadow(r,z,B,K,ie,ue,null),r.renderBufferDirect(K,null,ie,ue,z,null),z.onAfterShadow(r,z,B,K,ie,ue,null)}}const Z=z.children;for(let ie=0,de=Z.length;ie<de;ie++)C(Z[ie],B,K,w,D)}function I(z){z.target.removeEventListener("dispose",I);for(const K in p){const w=p[K],D=z.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const Dw={[vh]:xh,[Sh]:Eh,[yh]:bh,[Vr]:Mh,[xh]:vh,[Eh]:Sh,[bh]:yh,[Mh]:Vr};function Lw(r,e){function i(){let j=!1;const Pe=new on;let Re=null;const Be=new on(0,0,0,0);return{setMask:function(Me){Re!==Me&&!j&&(r.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){j=Me},setClear:function(Me,Se,Le,rt,Pt){Pt===!0&&(Me*=rt,Se*=rt,Le*=rt),Pe.set(Me,Se,Le,rt),Be.equals(Pe)===!1&&(r.clearColor(Me,Se,Le,rt),Be.copy(Pe))},reset:function(){j=!1,Re=null,Be.set(-1,0,0,0)}}}function s(){let j=!1,Pe=!1,Re=null,Be=null,Me=null;return{setReversed:function(Se){if(Pe!==Se){const Le=e.get("EXT_clip_control");Se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Pe=Se;const rt=Me;Me=null,this.setClear(rt)}},getReversed:function(){return Pe},setTest:function(Se){Se?fe(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(Se){Re!==Se&&!j&&(r.depthMask(Se),Re=Se)},setFunc:function(Se){if(Pe&&(Se=Dw[Se]),Be!==Se){switch(Se){case vh:r.depthFunc(r.NEVER);break;case xh:r.depthFunc(r.ALWAYS);break;case Sh:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Mh:r.depthFunc(r.GEQUAL);break;case Eh:r.depthFunc(r.GREATER);break;case bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=Se}},setLocked:function(Se){j=Se},setClear:function(Se){Me!==Se&&(Pe&&(Se=1-Se),r.clearDepth(Se),Me=Se)},reset:function(){j=!1,Re=null,Be=null,Me=null,Pe=!1}}}function l(){let j=!1,Pe=null,Re=null,Be=null,Me=null,Se=null,Le=null,rt=null,Pt=null;return{setTest:function(At){j||(At?fe(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(At){Pe!==At&&!j&&(r.stencilMask(At),Pe=At)},setFunc:function(At,Nn,bi){(Re!==At||Be!==Nn||Me!==bi)&&(r.stencilFunc(At,Nn,bi),Re=At,Be=Nn,Me=bi)},setOp:function(At,Nn,bi){(Se!==At||Le!==Nn||rt!==bi)&&(r.stencilOp(At,Nn,bi),Se=At,Le=Nn,rt=bi)},setLocked:function(At){j=At},setClear:function(At){Pt!==At&&(r.clearStencil(At),Pt=At)},reset:function(){j=!1,Pe=null,Re=null,Be=null,Me=null,Se=null,Le=null,rt=null,Pt=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,O=null,U=null,C=null,I=null,z=null,B=new Tt(0,0,0),K=0,w=!1,D=null,H=null,Z=null,ie=null,de=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,G=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),L=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),L=G>=2);let ve=null,ye={};const P=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),ge=new on().fromArray(P),we=new on().fromArray(ne);function He(j,Pe,Re,Be){const Me=new Uint8Array(4),Se=r.createTexture();r.bindTexture(j,Se),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Le=0;Le<Re;Le++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Pe+Le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return Se}const $={};$[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(r.DEPTH_TEST),d.setFunc(Vr),st(!1),Wt(A_),fe(r.CULL_FACE),ct(xa);function fe(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function De(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function Xe(j,Pe){return _[j]!==Pe?(r.bindFramebuffer(j,Pe),_[j]=Pe,j===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pe),j===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ge(j,Pe){let Re=y,Be=!1;if(j){Re=v.get(Pe),Re===void 0&&(Re=[],v.set(Pe,Re));const Me=j.textures;if(Re.length!==Me.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,Le=Me.length;Se<Le;Se++)Re[Se]=r.COLOR_ATTACHMENT0+Se;Re.length=Me.length,Be=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Re)}function mt(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const Jt={[Us]:r.FUNC_ADD,[SE]:r.FUNC_SUBTRACT,[yE]:r.FUNC_REVERSE_SUBTRACT};Jt[ME]=r.MIN,Jt[EE]=r.MAX;const gt={[bE]:r.ZERO,[TE]:r.ONE,[AE]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[NE]:r.SRC_ALPHA_SATURATE,[DE]:r.DST_COLOR,[wE]:r.DST_ALPHA,[RE]:r.ONE_MINUS_SRC_COLOR,[_h]:r.ONE_MINUS_SRC_ALPHA,[LE]:r.ONE_MINUS_DST_COLOR,[CE]:r.ONE_MINUS_DST_ALPHA,[UE]:r.CONSTANT_COLOR,[OE]:r.ONE_MINUS_CONSTANT_COLOR,[PE]:r.CONSTANT_ALPHA,[IE]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(j,Pe,Re,Be,Me,Se,Le,rt,Pt,At){if(j===xa){T===!0&&(De(r.BLEND),T=!1);return}if(T===!1&&(fe(r.BLEND),T=!0),j!==xE){if(j!==M||At!==w){if((x!==Us||C!==Us)&&(r.blendEquation(r.FUNC_ADD),x=Us,C=Us),At)switch(j){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFunc(r.ONE,r.ONE);break;case w_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Rt("WebGLState: Invalid blending: ",j);break}else switch(j){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case w_:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",j);break}O=null,U=null,I=null,z=null,B.set(0,0,0),K=0,M=j,w=At}return}Me=Me||Pe,Se=Se||Re,Le=Le||Be,(Pe!==x||Me!==C)&&(r.blendEquationSeparate(Jt[Pe],Jt[Me]),x=Pe,C=Me),(Re!==O||Be!==U||Se!==I||Le!==z)&&(r.blendFuncSeparate(gt[Re],gt[Be],gt[Se],gt[Le]),O=Re,U=Be,I=Se,z=Le),(rt.equals(B)===!1||Pt!==K)&&(r.blendColor(rt.r,rt.g,rt.b,Pt),B.copy(rt),K=Pt),M=j,w=!1}function _t(j,Pe){j.side===_a?De(r.CULL_FACE):fe(r.CULL_FACE);let Re=j.side===Zn;Pe&&(Re=!Re),st(Re),j.blending===zr&&j.transparent===!1?ct(xa):ct(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Be=j.stencilWrite;h.setTest(Be),Be&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Xt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(j){D!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),D=j)}function Wt(j){j!==gE?(fe(r.CULL_FACE),j!==H&&(j===A_?r.cullFace(r.BACK):j===_E?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),H=j}function k(j){j!==Z&&(L&&r.lineWidth(j),Z=j)}function Xt(j,Pe,Re){j?(fe(r.POLYGON_OFFSET_FILL),(ie!==Pe||de!==Re)&&(r.polygonOffset(Pe,Re),ie=Pe,de=Re)):De(r.POLYGON_OFFSET_FILL)}function vt(j){j?fe(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function je(j){j===void 0&&(j=r.TEXTURE0+ue-1),ve!==j&&(r.activeTexture(j),ve=j)}function Ce(j,Pe,Re){Re===void 0&&(ve===null?Re=r.TEXTURE0+ue-1:Re=ve);let Be=ye[Re];Be===void 0&&(Be={type:void 0,texture:void 0},ye[Re]=Be),(Be.type!==j||Be.texture!==Pe)&&(ve!==Re&&(r.activeTexture(Re),ve=Re),r.bindTexture(j,Pe||$[j]),Be.type=j,Be.texture=Pe)}function N(){const j=ye[ve];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function he(){try{r.texSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function xe(){try{r.texSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Ve(){try{r.compressedTexSubImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Ae(){try{r.texStorage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function We(){try{r.texStorage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function tt(){try{r.texImage2D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Ee(){try{r.texImage3D(...arguments)}catch(j){Rt("WebGLState:",j)}}function Te(j){ge.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),ge.copy(j))}function Ne(j){we.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),we.copy(j))}function Oe(j,Pe){let Re=p.get(Pe);Re===void 0&&(Re=new WeakMap,p.set(Pe,Re));let Be=Re.get(j);Be===void 0&&(Be=r.getUniformBlockIndex(Pe,j.name),Re.set(j,Be))}function Ue(j,Pe){const Be=p.get(Pe).get(j);m.get(Pe)!==Be&&(r.uniformBlockBinding(Pe,Be,j.__bindingPointIndex),m.set(Pe,Be))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ve=null,ye={},_={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,O=null,U=null,C=null,I=null,z=null,B=new Tt(0,0,0),K=0,w=!1,D=null,H=null,Z=null,ie=null,de=null,ge.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:fe,disable:De,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:mt,setBlending:ct,setMaterial:_t,setFlipSided:st,setCullFace:Wt,setLineWidth:k,setPolygonOffset:Xt,setScissorTest:vt,activeTexture:je,bindTexture:Ce,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:tt,texImage3D:Ee,updateUBOMapping:Oe,uniformBlockBinding:Ue,texStorage2D:Ae,texStorage3D:We,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ve,scissor:Te,viewport:Ne,reset:ot}}function Nw(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ht,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):fu("canvas")}function T(N,b,W){let he=1;const xe=Ce(N);if((xe.width>W||xe.height>W)&&(he=W/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(he*xe.width),Ve=Math.floor(he*xe.height);_===void 0&&(_=E(oe,Ve));const Ae=b?E(oe,Ve):_;return Ae.width=oe,Ae.height=Ve,Ae.getContext("2d").drawImage(N,0,0,oe,Ve),at("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+oe+"x"+Ve+")."),Ae}else return"data"in N&&at("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,b,W,he,xe=!1){if(N!==null){if(r[N]!==void 0)return r[N];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=b;if(b===r.RED&&(W===r.FLOAT&&(oe=r.R32F),W===r.HALF_FLOAT&&(oe=r.R16F),W===r.UNSIGNED_BYTE&&(oe=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.R8UI),W===r.UNSIGNED_SHORT&&(oe=r.R16UI),W===r.UNSIGNED_INT&&(oe=r.R32UI),W===r.BYTE&&(oe=r.R8I),W===r.SHORT&&(oe=r.R16I),W===r.INT&&(oe=r.R32I)),b===r.RG&&(W===r.FLOAT&&(oe=r.RG32F),W===r.HALF_FLOAT&&(oe=r.RG16F),W===r.UNSIGNED_BYTE&&(oe=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.RG8UI),W===r.UNSIGNED_SHORT&&(oe=r.RG16UI),W===r.UNSIGNED_INT&&(oe=r.RG32UI),W===r.BYTE&&(oe=r.RG8I),W===r.SHORT&&(oe=r.RG16I),W===r.INT&&(oe=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),W===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),W===r.UNSIGNED_INT&&(oe=r.RGB32UI),W===r.BYTE&&(oe=r.RGB8I),W===r.SHORT&&(oe=r.RGB16I),W===r.INT&&(oe=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),W===r.UNSIGNED_INT&&(oe=r.RGBA32UI),W===r.BYTE&&(oe=r.RGBA8I),W===r.SHORT&&(oe=r.RGBA16I),W===r.INT&&(oe=r.RGBA32I)),b===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),b===r.RGBA){const Ve=xe?cu:wt.getTransfer(he);W===r.FLOAT&&(oe=r.RGBA32F),W===r.HALF_FLOAT&&(oe=r.RGBA16F),W===r.UNSIGNED_BYTE&&(oe=Ve===zt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(N,b){let W;return N?b===null||b===Wi||b===ol?W=r.DEPTH24_STENCIL8:b===Vi?W=r.DEPTH32F_STENCIL8:b===rl&&(W=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===ol?W=r.DEPTH_COMPONENT24:b===Vi?W=r.DEPTH_COMPONENT32F:b===rl&&(W=r.DEPTH_COMPONENT16),W}function I(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),K(b),b.isVideoTexture&&g.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),D(b)}function K(N){const b=s.get(N);if(b.__webglInit===void 0)return;const W=N.source,he=v.get(W);if(he){const xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&w(N),Object.keys(he).length===0&&v.delete(W)}s.remove(N)}function w(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const W=N.source,he=v.get(W);delete he[b.__cacheKey],d.memory.textures--}function D(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)r.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else r.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)r.deleteFramebuffer(b.__webglFramebuffer[he]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=N.textures;for(let he=0,xe=W.length;he<xe;he++){const oe=s.get(W[he]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),d.memory.textures--),s.remove(W[he])}s.remove(N)}let H=0;function Z(){H=0}function ie(){const N=H;return N>=l.maxTextures&&at("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function de(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ue(N,b){const W=s.get(N);if(N.isVideoTexture&&vt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const he=N.image;if(he===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,N,b);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function L(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){$(W,N,b);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function G(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){$(W,N,b);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function J(N,b){const W=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){fe(W,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const ve={[Rh]:r.REPEAT,[va]:r.CLAMP_TO_EDGE,[wh]:r.MIRRORED_REPEAT},ye={[Ln]:r.NEAREST,[zE]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Ud]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},P={[kE]:r.NEVER,[qE]:r.ALWAYS,[XE]:r.LESS,[yp]:r.LEQUAL,[jE]:r.EQUAL,[Mp]:r.GEQUAL,[WE]:r.GREATER,[YE]:r.NOTEQUAL};function ne(N,b){if(b.type===Vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Ud||b.magFilter===wc||b.magFilter===Ps||b.minFilter===Bn||b.minFilter===Ud||b.minFilter===wc||b.minFilter===Ps)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,ve[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,ve[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,ve[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,ye[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==wc&&b.minFilter!==Ps||b.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ge(N,b){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const he=b.source;let xe=v.get(he);xe===void 0&&(xe={},v.set(he,xe));const oe=de(b);if(oe!==N.__cacheKey){xe[oe]===void 0&&(xe[oe]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,W=!0),xe[oe].usedTimes++;const Ve=xe[N.__cacheKey];Ve!==void 0&&(xe[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&w(b)),N.__cacheKey=oe,N.__webglTexture=xe[oe].texture}return W}function we(N,b,W){return Math.floor(Math.floor(N/W)/b)}function He(N,b,W,he){const oe=N.updateRanges;if(oe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,W,he,b.data);else{oe.sort((Ee,Te)=>Ee.start-Te.start);let Ve=0;for(let Ee=1;Ee<oe.length;Ee++){const Te=oe[Ve],Ne=oe[Ee],Oe=Te.start+Te.count,Ue=we(Ne.start,b.width,4),ot=we(Te.start,b.width,4);Ne.start<=Oe+1&&Ue===ot&&we(Ne.start+Ne.count-1,b.width,4)===Ue?Te.count=Math.max(Te.count,Ne.start+Ne.count-Te.start):(++Ve,oe[Ve]=Ne)}oe.length=Ve+1;const Ae=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),tt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Te=oe.length;Ee<Te;Ee++){const Ne=oe[Ee],Oe=Math.floor(Ne.start/4),Ue=Math.ceil(Ne.count/4),ot=Oe%b.width,j=Math.floor(Oe/b.width),Pe=Ue,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,ot,j,Pe,Re,W,he,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,tt)}}function $(N,b,W){let he=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=r.TEXTURE_3D);const xe=ge(N,b),oe=b.source;i.bindTexture(he,N.__webglTexture,r.TEXTURE0+W);const Ve=s.get(oe);if(oe.version!==Ve.__version||xe===!0){i.activeTexture(r.TEXTURE0+W);const Ae=wt.getPrimaries(wt.workingColorSpace),We=b.colorSpace===as?null:wt.getPrimaries(b.colorSpace),tt=b.colorSpace===as||Ae===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ee=T(b.image,!1,l.maxTextureSize);Ee=je(b,Ee);const Te=c.convert(b.format,b.colorSpace),Ne=c.convert(b.type);let Oe=U(b.internalFormat,Te,Ne,b.colorSpace,b.isVideoTexture);ne(he,b);let Ue;const ot=b.mipmaps,j=b.isVideoTexture!==!0,Pe=Ve.__version===void 0||xe===!0,Re=oe.dataReady,Be=I(b,Ee);if(b.isDepthTexture)Oe=C(b.format===Is,b.type),Pe&&(j?i.texStorage2D(r.TEXTURE_2D,1,Oe,Ee.width,Ee.height):i.texImage2D(r.TEXTURE_2D,0,Oe,Ee.width,Ee.height,0,Te,Ne,null));else if(b.isDataTexture)if(ot.length>0){j&&Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Oe,ot[0].width,ot[0].height);for(let Me=0,Se=ot.length;Me<Se;Me++)Ue=ot[Me],j?Re&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ne,Ue.data):i.texImage2D(r.TEXTURE_2D,Me,Oe,Ue.width,Ue.height,0,Te,Ne,Ue.data);b.generateMipmaps=!1}else j?(Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Oe,Ee.width,Ee.height),Re&&He(b,Ee,Te,Ne)):i.texImage2D(r.TEXTURE_2D,0,Oe,Ee.width,Ee.height,0,Te,Ne,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Oe,ot[0].width,ot[0].height,Ee.depth);for(let Me=0,Se=ot.length;Me<Se;Me++)if(Ue=ot[Me],b.format!==Oi)if(Te!==null)if(j){if(Re)if(b.layerUpdates.size>0){const Le=ov(Ue.width,Ue.height,b.format,b.type);for(const rt of b.layerUpdates){const Pt=Ue.data.subarray(rt*Le/Ue.data.BYTES_PER_ELEMENT,(rt+1)*Le/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,rt,Ue.width,Ue.height,1,Te,Pt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,Oe,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Re&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ne,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Me,Oe,Ue.width,Ue.height,Ee.depth,0,Te,Ne,Ue.data)}else{j&&Pe&&i.texStorage2D(r.TEXTURE_2D,Be,Oe,ot[0].width,ot[0].height);for(let Me=0,Se=ot.length;Me<Se;Me++)Ue=ot[Me],b.format!==Oi?Te!==null?j?Re&&i.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,Me,Oe,Ue.width,Ue.height,0,Ue.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Re&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ne,Ue.data):i.texImage2D(r.TEXTURE_2D,Me,Oe,Ue.width,Ue.height,0,Te,Ne,Ue.data)}else if(b.isDataArrayTexture)if(j){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Oe,Ee.width,Ee.height,Ee.depth),Re)if(b.layerUpdates.size>0){const Me=ov(Ee.width,Ee.height,b.format,b.type);for(const Se of b.layerUpdates){const Le=Ee.data.subarray(Se*Me/Ee.data.BYTES_PER_ELEMENT,(Se+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Ee.width,Ee.height,1,Te,Ne,Le)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Ne,Ee.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,Ee.width,Ee.height,Ee.depth,0,Te,Ne,Ee.data);else if(b.isData3DTexture)j?(Pe&&i.texStorage3D(r.TEXTURE_3D,Be,Oe,Ee.width,Ee.height,Ee.depth),Re&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Ne,Ee.data)):i.texImage3D(r.TEXTURE_3D,0,Oe,Ee.width,Ee.height,Ee.depth,0,Te,Ne,Ee.data);else if(b.isFramebufferTexture){if(Pe)if(j)i.texStorage2D(r.TEXTURE_2D,Be,Oe,Ee.width,Ee.height);else{let Me=Ee.width,Se=Ee.height;for(let Le=0;Le<Be;Le++)i.texImage2D(r.TEXTURE_2D,Le,Oe,Me,Se,0,Te,Ne,null),Me>>=1,Se>>=1}}else if(ot.length>0){if(j&&Pe){const Me=Ce(ot[0]);i.texStorage2D(r.TEXTURE_2D,Be,Oe,Me.width,Me.height)}for(let Me=0,Se=ot.length;Me<Se;Me++)Ue=ot[Me],j?Re&&i.texSubImage2D(r.TEXTURE_2D,Me,0,0,Te,Ne,Ue):i.texImage2D(r.TEXTURE_2D,Me,Oe,Te,Ne,Ue);b.generateMipmaps=!1}else if(j){if(Pe){const Me=Ce(Ee);i.texStorage2D(r.TEXTURE_2D,Be,Oe,Me.width,Me.height)}Re&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Ne,Ee)}else i.texImage2D(r.TEXTURE_2D,0,Oe,Te,Ne,Ee);M(b)&&x(he),Ve.__version=oe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function fe(N,b,W){if(b.image.length!==6)return;const he=ge(N,b),xe=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const oe=s.get(xe);if(xe.version!==oe.__version||he===!0){i.activeTexture(r.TEXTURE0+W);const Ve=wt.getPrimaries(wt.workingColorSpace),Ae=b.colorSpace===as?null:wt.getPrimaries(b.colorSpace),We=b.colorSpace===as||Ve===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let Se=0;Se<6;Se++)!tt&&!Ee?Te[Se]=T(b.image[Se],!0,l.maxCubemapSize):Te[Se]=Ee?b.image[Se].image:b.image[Se],Te[Se]=je(b,Te[Se]);const Ne=Te[0],Oe=c.convert(b.format,b.colorSpace),Ue=c.convert(b.type),ot=U(b.internalFormat,Oe,Ue,b.colorSpace),j=b.isVideoTexture!==!0,Pe=oe.__version===void 0||he===!0,Re=xe.dataReady;let Be=I(b,Ne);ne(r.TEXTURE_CUBE_MAP,b);let Me;if(tt){j&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ot,Ne.width,Ne.height);for(let Se=0;Se<6;Se++){Me=Te[Se].mipmaps;for(let Le=0;Le<Me.length;Le++){const rt=Me[Le];b.format!==Oi?Oe!==null?j?Re&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,0,0,rt.width,rt.height,Oe,rt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,ot,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,0,0,rt.width,rt.height,Oe,Ue,rt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le,ot,rt.width,rt.height,0,Oe,Ue,rt.data)}}}else{if(Me=b.mipmaps,j&&Pe){Me.length>0&&Be++;const Se=Ce(Te[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ot,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ee){j?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te[Se].width,Te[Se].height,Oe,Ue,Te[Se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,Te[Se].width,Te[Se].height,0,Oe,Ue,Te[Se].data);for(let Le=0;Le<Me.length;Le++){const Pt=Me[Le].image[Se].image;j?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,0,0,Pt.width,Pt.height,Oe,Ue,Pt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,ot,Pt.width,Pt.height,0,Oe,Ue,Pt.data)}}else{j?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Oe,Ue,Te[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,Oe,Ue,Te[Se]);for(let Le=0;Le<Me.length;Le++){const rt=Me[Le];j?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,0,0,Oe,Ue,rt.image[Se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Le+1,ot,Oe,Ue,rt.image[Se])}}}M(b)&&x(r.TEXTURE_CUBE_MAP),oe.__version=xe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function De(N,b,W,he,xe,oe){const Ve=c.convert(W.format,W.colorSpace),Ae=c.convert(W.type),We=U(W.internalFormat,Ve,Ae,W.colorSpace),tt=s.get(b),Ee=s.get(W);if(Ee.__renderTarget=b,!tt.__hasExternalTextures){const Te=Math.max(1,b.width>>oe),Ne=Math.max(1,b.height>>oe);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?i.texImage3D(xe,oe,We,Te,Ne,b.depth,0,Ve,Ae,null):i.texImage2D(xe,oe,We,Te,Ne,0,Ve,Ae,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Xt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,xe,Ee.__webglTexture,0,k(b)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,xe,Ee.__webglTexture,oe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(N,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,oe=C(b.stencilBuffer,xe),Ve=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),oe,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),oe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,oe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ve,r.RENDERBUFFER,N)}else{const he=b.textures;for(let xe=0;xe<he.length;xe++){const oe=he[xe],Ve=c.convert(oe.format,oe.colorSpace),Ae=c.convert(oe.type),We=U(oe.internalFormat,Ve,Ae,oe.colorSpace);Xt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(b),We,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(b),We,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,We,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(N,b,W){const he=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(b.depthTexture);if(xe.__renderTarget=b,(!xe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b.depthTexture);const tt=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Te;b.depthTexture.format===Ma?Te=r.DEPTH_COMPONENT24:b.depthTexture.format===Is&&(Te=r.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Te,b.width,b.height,0,tt,Ee,null)}}else ue(b.depthTexture,0);const oe=xe.__webglTexture,Ve=k(b),Ae=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,We=b.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ma)Xt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Ae,oe,0,Ve):r.framebufferTexture2D(r.FRAMEBUFFER,We,Ae,oe,0);else if(b.depthTexture.format===Is)Xt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,Ae,oe,0,Ve):r.framebufferTexture2D(r.FRAMEBUFFER,We,Ae,oe,0);else throw new Error("Unknown depthTexture format")}function mt(N){const b=s.get(N),W=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ge(b.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?Ge(b.__webglFramebuffer[0],N,0):Ge(b.__webglFramebuffer,N,0)}else if(W){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=r.createRenderbuffer(),Xe(b.__webglDepthbuffer[he],N,!1);else{const xe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,oe)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xe(b.__webglDepthbuffer,N,!1);else{const xe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,oe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(N,b,W){const he=s.get(N);b!==void 0&&De(he.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&mt(N)}function gt(N){const b=N.texture,W=s.get(N),he=s.get(b);N.addEventListener("dispose",B);const xe=N.textures,oe=N.isWebGLCubeRenderTarget===!0,Ve=xe.length>1;if(Ve||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=b.version,d.memory.textures++),oe){W.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Ae]=[];for(let We=0;We<b.mipmaps.length;We++)W.__webglFramebuffer[Ae][We]=r.createFramebuffer()}else W.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)W.__webglFramebuffer[Ae]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Ve)for(let Ae=0,We=xe.length;Ae<We;Ae++){const tt=s.get(xe[Ae]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&Xt(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const We=xe[Ae];W.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ae]);const tt=c.convert(We.format,We.colorSpace),Ee=c.convert(We.type),Te=U(We.internalFormat,tt,Ee,We.colorSpace,N.isXRRenderTarget===!0),Ne=k(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Te,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ne(r.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)De(W.__webglFramebuffer[Ae][We],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,We);else De(W.__webglFramebuffer[Ae],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);M(b)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ve){for(let Ae=0,We=xe.length;Ae<We;Ae++){const tt=xe[Ae],Ee=s.get(tt);let Te=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Te,Ee.__webglTexture),ne(Te,tt),De(W.__webglFramebuffer,N,tt,r.COLOR_ATTACHMENT0+Ae,Te,0),M(tt)&&x(Te)}i.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ae,he.__webglTexture),ne(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)De(W.__webglFramebuffer[We],N,b,r.COLOR_ATTACHMENT0,Ae,We);else De(W.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Ae,0);M(b)&&x(Ae),i.unbindTexture()}N.depthBuffer&&mt(N)}function ct(N){const b=N.textures;for(let W=0,he=b.length;W<he;W++){const xe=b[W];if(M(xe)){const oe=O(N),Ve=s.get(xe).__webglTexture;i.bindTexture(oe,Ve),x(oe),i.unbindTexture()}}}const _t=[],st=[];function Wt(N){if(N.samples>0){if(Xt(N)===!1){const b=N.textures,W=N.width,he=N.height;let xe=r.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ve=s.get(N),Ae=b.length>1;if(Ae)for(let tt=0;tt<b.length;tt++)i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const We=N.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let tt=0;tt<b.length;tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[tt]);const Ee=s.get(b[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,W,he,0,0,W,he,xe,r.NEAREST),m===!0&&(_t.length=0,st.length=0,_t.push(r.COLOR_ATTACHMENT0+tt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(_t.push(oe),st.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let tt=0;tt<b.length;tt++){i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[tt]);const Ee=s.get(b[tt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,Ee,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function k(N){return Math.min(l.maxSamples,N.samples)}function Xt(N){const b=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function vt(N){const b=d.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function je(N,b){const W=N.colorSpace,he=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==jr&&W!==as&&(wt.getTransfer(W)===zt?(he!==Oi||xe!==Mi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",W)),b}function Ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=Z,this.setTexture2D=ue,this.setTexture2DArray=L,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Jt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Uw(r,e){function i(s,l=as){let c;const d=wt.getTransfer(l);if(s===Mi)return r.UNSIGNED_BYTE;if(s===gp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_p)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ox)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===lx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===sx)return r.BYTE;if(s===rx)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===mp)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===ya)return r.HALF_FLOAT;if(s===cx)return r.ALPHA;if(s===ux)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ma)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===fx)return r.RED;if(s===vp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===xp)return r.RG_INTEGER;if(s===Sp)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(d===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===Dh||s===Lh||s===Nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Oh||s===Ph||s===Ih||s===Bh||s===Fh||s===zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Uh||s===Oh)return d===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ph)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ih)return c.COMPRESSED_R11_EAC;if(s===Bh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Fh)return c.COMPRESSED_RG11_EAC;if(s===zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===jh||s===Wh||s===Yh||s===qh||s===Kh||s===Zh||s===Jh||s===Qh||s===$h)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$h)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ep||s===tp||s===np)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===ep)return d===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ip||s===ap||s===sp||s===rp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ip)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pw=`
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

}`;class Iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new bx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Yi({vertexShader:Ow,fragmentShader:Pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ba(new vu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bw extends Yr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new Iw,x={},O=i.getContextAttributes();let U=null,C=null;const I=[],z=[],B=new Ht;let K=null;const w=new yi;w.viewport=new on;const D=new yi;D.viewport=new on;const H=[w,D],Z=new jb;let ie=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=I[$];return fe===void 0&&(fe=new th,I[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=I[$];return fe===void 0&&(fe=new th,I[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=I[$];return fe===void 0&&(fe=new th,I[$]=fe),fe.getHandSpace()};function ue($){const fe=z.indexOf($.inputSource);if(fe===-1)return;const De=I[fe];De!==void 0&&(De.update($.inputSource,$.frame,p||d),De.dispatchEvent({type:$.type,data:$.inputSource}))}function L(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",G);for(let $=0;$<I.length;$++){const fe=z[$];fe!==null&&(z[$]=null,I[$].disconnect(fe))}ie=null,de=null,M.reset();for(const $ in x)delete x[$];e.setRenderTarget(U),y=null,v=null,_=null,l=null,C=null,He.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",L),l.addEventListener("inputsourceschange",G),O.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Xe=null,Ge=null;O.depth&&(Ge=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=O.stencil?Is:Ma,Xe=O.stencil?ol:Wi);const mt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(mt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new ji(v.textureWidth,v.textureHeight,{format:Oi,type:Mi,depthTexture:new ul(v.textureWidth,v.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const De={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new ji(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),He.setContext(l),He.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G($){for(let fe=0;fe<$.removed.length;fe++){const De=$.removed[fe],Xe=z.indexOf(De);Xe>=0&&(z[Xe]=null,I[Xe].disconnect(De))}for(let fe=0;fe<$.added.length;fe++){const De=$.added[fe];let Xe=z.indexOf(De);if(Xe===-1){for(let mt=0;mt<I.length;mt++)if(mt>=z.length){z.push(De),Xe=mt;break}else if(z[mt]===null){z[mt]=De,Xe=mt;break}if(Xe===-1)break}const Ge=I[Xe];Ge&&Ge.connect(De)}}const J=new ae,ve=new ae;function ye($,fe,De){J.setFromMatrixPosition(fe.matrixWorld),ve.setFromMatrixPosition(De.matrixWorld);const Xe=J.distanceTo(ve),Ge=fe.projectionMatrix.elements,mt=De.projectionMatrix.elements,Jt=Ge[14]/(Ge[10]-1),gt=Ge[14]/(Ge[10]+1),ct=(Ge[9]+1)/Ge[5],_t=(Ge[9]-1)/Ge[5],st=(Ge[8]-1)/Ge[0],Wt=(mt[8]+1)/mt[0],k=Jt*st,Xt=Jt*Wt,vt=Xe/(-st+Wt),je=vt*-st;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ge[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ce=Jt+vt,N=gt+vt,b=k-je,W=Xt+(Xe-je),he=ct*gt/N*Ce,xe=_t*gt/N*Ce;$.projectionMatrix.makePerspective(b,W,he,xe,Ce,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function P($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let fe=$.near,De=$.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(De=M.depthFar)),Z.near=D.near=w.near=fe,Z.far=D.far=w.far=De,(ie!==Z.near||de!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ie=Z.near,de=Z.far),Z.layers.mask=$.layers.mask|6,w.layers.mask=Z.layers.mask&3,D.layers.mask=Z.layers.mask&5;const Xe=$.parent,Ge=Z.cameras;P(Z,Xe);for(let mt=0;mt<Ge.length;mt++)P(Ge[mt],Xe);Ge.length===2?ye(Z,w,D):Z.projectionMatrix.copy(w.projectionMatrix),ne($,Z,Xe)};function ne($,fe,De){De===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(De.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=cl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function($){m=$,v!==null&&(v.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function($){return x[$]};let ge=null;function we($,fe){if(g=fe.getViewerPose(p||d),E=fe,g!==null){const De=g.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Xe=!1;De.length!==Z.cameras.length&&(Z.cameras.length=0,Xe=!0);for(let gt=0;gt<De.length;gt++){const ct=De[gt];let _t=null;if(y!==null)_t=y.getViewport(ct);else{const Wt=_.getViewSubImage(v,ct);_t=Wt.viewport,gt===0&&(e.setRenderTargetTextures(C,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(C))}let st=H[gt];st===void 0&&(st=new yi,st.layers.enable(gt),st.viewport=new on,H[gt]=st),st.matrix.fromArray(ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(_t.x,_t.y,_t.width,_t.height),gt===0&&(Z.matrix.copy(st.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Xe===!0&&Z.cameras.push(st)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const gt=_.getDepthInformation(De[0]);gt&&gt.isValid&&gt.texture&&M.init(gt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),_=s.getBinding();for(let gt=0;gt<De.length;gt++){const ct=De[gt].camera;if(ct){let _t=x[ct];_t||(_t=new bx,x[ct]=_t);const st=_.getCameraImage(ct);_t.sourceTexture=st}}}}for(let De=0;De<I.length;De++){const Xe=z[De],Ge=I[De];Xe!==null&&Ge!==void 0&&Ge.update(Xe,fe,p||d)}ge&&ge($,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const He=new Ax;He.setAnimationLoop(we),this.setAnimationLoop=function($){ge=$},this.dispose=function(){}}}const Ds=new Ea,Fw=new tn;function zw(r,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,vx(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,U,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,O,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),U=O.envMap,C=O.envMapRotation;U&&(M.envMap.value=U,Ds.copy(C),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),M.envMapRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(Ds)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Hw(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const C=U.program;s.uniformBlockBinding(O,C)}function p(O,U){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",M));const I=U.program;s.updateUBOMapping(O,I);const z=e.render.frame;c[O.id]!==z&&(v(O),c[O.id]=z)}function g(O){const U=_();O.__bindingPointIndex=U;const C=r.createBuffer(),I=O.__size,z=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,I,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,C),C}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=l[O.id],C=O.uniforms,I=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let z=0,B=C.length;z<B;z++){const K=Array.isArray(C[z])?C[z]:[C[z]];for(let w=0,D=K.length;w<D;w++){const H=K[w];if(y(H,z,w,I)===!0){const Z=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let de=0;for(let ue=0;ue<ie.length;ue++){const L=ie[ue],G=T(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,Z+de,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,de),de+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,U,C,I){const z=O.value,B=U+"_"+C;if(I[B]===void 0)return typeof z=="number"||typeof z=="boolean"?I[B]=z:I[B]=z.clone(),!0;{const K=I[B];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return I[B]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function E(O){const U=O.uniforms;let C=0;const I=16;for(let B=0,K=U.length;B<K;B++){const w=Array.isArray(U[B])?U[B]:[U[B]];for(let D=0,H=w.length;D<H;D++){const Z=w[D],ie=Array.isArray(Z.value)?Z.value:[Z.value];for(let de=0,ue=ie.length;de<ue;de++){const L=ie[de],G=T(L),J=C%I,ve=J%G.boundary,ye=J+ve;C+=ve,ye!==0&&I-ye<G.storage&&(C+=I-ye),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=C,C+=G.storage}}}const z=C%I;return z>0&&(C+=I-z),O.__size=C,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const C=d.indexOf(U.__bindingPointIndex);d.splice(C,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const O in l)r.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const Gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function Vw(){return Hi===null&&(Hi=new Bb(Gw,16,16,Xr,ya),Hi.name="DFG_LUT",Hi.minFilter=Bn,Hi.magFilter=Bn,Hi.wrapS=va,Hi.wrapT=va,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class kw{constructor(e={}){const{canvas:i=KE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Mi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const T=y,M=new Set([Sp,xp,vp]),x=new Set([Mi,Wi,rl,ol,gp,_p]),O=new Uint32Array(4),U=new Int32Array(4);let C=null,I=null;const z=[],B=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let D=!1;this._outputColorSpace=xi;let H=0,Z=0,ie=null,de=-1,ue=null;const L=new on,G=new on;let J=null;const ve=new Tt(0);let ye=0,P=i.width,ne=i.height,ge=1,we=null,He=null;const $=new on(0,0,P,ne),fe=new on(0,0,P,ne);let De=!1;const Xe=new Mx;let Ge=!1,mt=!1;const Jt=new tn,gt=new ae,ct=new on,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Wt(){return ie===null?ge:1}let k=s;function Xt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",rt,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",At,!1),k===null){const Y="webgl2";if(k=Xt(Y,R),k===null)throw Xt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let vt,je,Ce,N,b,W,he,xe,oe,Ve,Ae,We,tt,Ee,Te,Ne,Oe,Ue,ot,j,Pe,Re,Be,Me;function Se(){vt=new V1(k),vt.init(),Re=new Uw(k,vt),je=new U1(k,vt,e,Re),Ce=new Lw(k,vt),je.reversedDepthBuffer&&v&&Ce.buffers.depth.setReversed(!0),N=new j1(k),b=new gw,W=new Nw(k,vt,Ce,b,je,Re,N),he=new P1(w),xe=new G1(w),oe=new Kb(k),Be=new L1(k,oe),Ve=new k1(k,oe,N,Be),Ae=new Y1(k,Ve,oe,N),ot=new W1(k,je,W),Ne=new O1(b),We=new mw(w,he,xe,vt,je,Be,Ne),tt=new zw(w,b),Ee=new vw,Te=new bw(vt),Ue=new D1(w,he,xe,Ce,Ae,E,m),Oe=new Cw(w,Ae,je),Me=new Hw(k,N,je,Ce),j=new N1(k,vt,N),Pe=new X1(k,vt,N),N.programs=We.programs,w.capabilities=je,w.extensions=vt,w.properties=b,w.renderLists=Ee,w.shadowMap=Oe,w.state=Ce,w.info=N}Se(),T!==Mi&&(K=new K1(T,i.width,i.height,l,c));const Le=new Bw(w,k);this.xr=Le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(P,ne,!1))},this.getSize=function(R){return R.set(P,ne)},this.setSize=function(R,Y,le=!0){if(Le.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,ne=Y,i.width=Math.floor(R*ge),i.height=Math.floor(Y*ge),le===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*ge,ne*ge).floor()},this.setDrawingBufferSize=function(R,Y,le){P=R,ne=Y,ge=le,i.width=Math.floor(R*le),i.height=Math.floor(Y*le),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(T===Mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,Y,le,se){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Y,le,se),Ce.viewport(L.copy($).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,Y,le,se){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,Y,le,se),Ce.scissor(G.copy(fe).multiplyScalar(ge).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ce.setScissorTest(De=R)},this.setOpaqueSort=function(R){we=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,le=!0){let se=0;if(R){let Q=!1;if(ie!==null){const Ie=ie.texture.format;Q=M.has(Ie)}if(Q){const Ie=ie.texture.type,ke=x.has(Ie),Fe=Ue.getClearColor(),Ye=Ue.getClearAlpha(),Ke=Fe.r,et=Fe.g,Ze=Fe.b;ke?(O[0]=Ke,O[1]=et,O[2]=Ze,O[3]=Ye,k.clearBufferuiv(k.COLOR,0,O)):(U[0]=Ke,U[1]=et,U[2]=Ze,U[3]=Ye,k.clearBufferiv(k.COLOR,0,U))}else se|=k.COLOR_BUFFER_BIT}Y&&(se|=k.DEPTH_BUFFER_BIT),le&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",rt,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ue.dispose(),Ee.dispose(),Te.dispose(),b.dispose(),he.dispose(),xe.dispose(),Ae.dispose(),Be.dispose(),Me.dispose(),We.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Hs),Le.removeEventListener("sessionend",$r),Pi.stop()};function rt(R){R.preventDefault(),O_("WebGLRenderer: Context Lost."),D=!0}function Pt(){O_("WebGLRenderer: Context Restored."),D=!1;const R=N.autoReset,Y=Oe.enabled,le=Oe.autoUpdate,se=Oe.needsUpdate,Q=Oe.type;Se(),N.autoReset=R,Oe.enabled=Y,Oe.autoUpdate=le,Oe.needsUpdate=se,Oe.type=Q}function At(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){const Y=R.target;Y.removeEventListener("dispose",Nn),bi(Y)}function bi(R){_l(R),b.remove(R)}function _l(R){const Y=b.get(R).programs;Y!==void 0&&(Y.forEach(function(le){We.releaseProgram(le)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,le,se,Q,Ie){Y===null&&(Y=_t);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=os(R,Y,le,se,Q);Ce.setMaterial(se,ke);let Ye=le.index,Ke=1;if(se.wireframe===!0){if(Ye=Ve.getWireframeAttribute(le),Ye===void 0)return;Ke=2}const et=le.drawRange,Ze=le.attributes.position;let nt=et.start*Ke,Lt=(et.start+et.count)*Ke;Ie!==null&&(nt=Math.max(nt,Ie.start*Ke),Lt=Math.min(Lt,(Ie.start+Ie.count)*Ke)),Ye!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,Ye.count)):Ze!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,Ze.count));const Qt=Lt-nt;if(Qt<0||Qt===1/0)return;Be.setup(Q,se,Fe,le,Ye);let Yt,Ot=j;if(Ye!==null&&(Yt=oe.get(Ye),Ot=Pe,Ot.setIndex(Yt)),Q.isMesh)se.wireframe===!0?(Ce.setLineWidth(se.wireframeLinewidth*Wt()),Ot.setMode(k.LINES)):Ot.setMode(k.TRIANGLES);else if(Q.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),Ce.setLineWidth(Qe*Wt()),Q.isLineSegments?Ot.setMode(k.LINES):Q.isLineLoop?Ot.setMode(k.LINE_LOOP):Ot.setMode(k.LINE_STRIP)}else Q.isPoints?Ot.setMode(k.POINTS):Q.isSprite&&Ot.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Nt=Q._multiDrawCounts,lt=Q._multiDrawCount,Mn=Ye?oe.get(Ye).bytesPerElement:1,qi=b.get(se).currentProgram.getUniforms();for(let En=0;En<lt;En++)qi.setValue(k,"_gl_DrawID",En),Ot.render(Qe[En]/Mn,Nt[En])}else if(Q.isInstancedMesh)Ot.renderInstances(nt,Qt,Q.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Nt=Math.min(le.instanceCount,Qe);Ot.renderInstances(nt,Qt,Nt)}else Ot.render(nt,Qt)};function Jr(R,Y,le){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Vs(R,Y,le),R.side=rs,R.needsUpdate=!0,Vs(R,Y,le),R.side=_a):Vs(R,Y,le)}this.compile=function(R,Y,le=null){le===null&&(le=R),I=Te.get(le),I.init(Y),B.push(I),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),R!==le&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const se=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const Fe=Ie[ke];Jr(Fe,le,Q),se.add(Fe)}else Jr(Ie,le,Q),se.add(Ie)}),I=B.pop(),se},this.compileAsync=function(R,Y,le=null){const se=this.compile(R,Y,le);return new Promise(Q=>{function Ie(){if(se.forEach(function(ke){b.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){Q(R);return}setTimeout(Ie,10)}vt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let zs=null;function Qr(R){zs&&zs(R)}function Hs(){Pi.stop()}function $r(){Pi.start()}const Pi=new Ax;Pi.setAnimationLoop(Qr),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){zs=R,Le.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},Le.addEventListener("sessionstart",Hs),Le.addEventListener("sessionend",$r),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const le=Le.enabled===!0&&Le.isPresenting===!0,se=K!==null&&(ie===null||le)&&K.begin(w,ie);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(Y),Y=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,ie),I=Te.get(R,B.length),I.init(Y),B.push(I),Jt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xe.setFromProjectionMatrix(Jt,ki,Y.reversedDepth),mt=this.localClippingEnabled,Ge=Ne.init(this.clippingPlanes,mt),C=Ee.get(R,z.length),C.init(),z.push(C),Le.enabled===!0&&Le.isPresenting===!0){const ke=w.xr.getDepthSensingMesh();ke!==null&&li(ke,Y,-1/0,w.sortObjects)}li(R,Y,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(we,He),st=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,st&&Ue.addToRenderList(C,R),this.info.render.frame++,Ge===!0&&Ne.beginShadows();const Q=I.state.shadowsArray;if(Oe.render(Q,R,Y),Ge===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&K.hasRenderPass())===!1){const ke=C.opaque,Fe=C.transmissive;if(I.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(Fe.length>0)for(let Ke=0,et=Ye.length;Ke<et;Ke++){const Ze=Ye[Ke];yn(ke,Fe,R,Ze)}st&&Ue.render(R);for(let Ke=0,et=Ye.length;Ke<et;Ke++){const Ze=Ye[Ke];ln(C,R,Ze,Ze.viewport)}}else Fe.length>0&&yn(ke,Fe,R,Y),st&&Ue.render(R),ln(C,R,Y)}ie!==null&&Z===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),se&&K.end(w),R.isScene===!0&&R.onAfterRender(w,R,Y),Be.resetDefaultState(),de=-1,ue=null,B.pop(),B.length>0?(I=B[B.length-1],Ge===!0&&Ne.setGlobalState(w.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?C=z[z.length-1]:C=null};function li(R,Y,le,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){se&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Jt);const ke=Ae.update(R),Fe=R.material;Fe.visible&&C.push(R,ke,Fe,le,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const ke=Ae.update(R),Fe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ct.copy(ke.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Jt)),Array.isArray(Fe)){const Ye=ke.groups;for(let Ke=0,et=Ye.length;Ke<et;Ke++){const Ze=Ye[Ke],nt=Fe[Ze.materialIndex];nt&&nt.visible&&C.push(R,ke,nt,le,ct.z,Ze)}}else Fe.visible&&C.push(R,ke,Fe,le,ct.z,null)}}const Ie=R.children;for(let ke=0,Fe=Ie.length;ke<Fe;ke++)li(Ie[ke],Y,le,se)}function ln(R,Y,le,se){const{opaque:Q,transmissive:Ie,transparent:ke}=R;I.setupLightsView(le),Ge===!0&&Ne.setGlobalState(w.clippingPlanes,le),se&&Ce.viewport(L.copy(se)),Q.length>0&&Ti(Q,Y,le),Ie.length>0&&Ti(Ie,Y,le),ke.length>0&&Ti(ke,Y,le),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function yn(R,Y,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const nt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new ji(1,1,{generateMipmaps:!0,type:nt?ya:Mi,minFilter:Ps,samples:je.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ie=I.state.transmissionRenderTarget[se.id],ke=se.viewport||L;Ie.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);const Fe=w.getRenderTarget(),Ye=w.getActiveCubeFace(),Ke=w.getActiveMipmapLevel();w.setRenderTarget(Ie),w.getClearColor(ve),ye=w.getClearAlpha(),ye<1&&w.setClearColor(16777215,.5),w.clear(),st&&Ue.render(le);const et=w.toneMapping;w.toneMapping=Xi;const Ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),Ge===!0&&Ne.setGlobalState(w.clippingPlanes,se),Ti(R,le,se),W.updateMultisampleRenderTarget(Ie),W.updateRenderTargetMipmap(Ie),vt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Lt=0,Qt=Y.length;Lt<Qt;Lt++){const Yt=Y[Lt],{object:Ot,geometry:Qe,material:Nt,group:lt}=Yt;if(Nt.side===_a&&Ot.layers.test(se.layers)){const Mn=Nt.side;Nt.side=Zn,Nt.needsUpdate=!0,Gs(Ot,le,se,Qe,Nt,lt),Nt.side=Mn,Nt.needsUpdate=!0,nt=!0}}nt===!0&&(W.updateMultisampleRenderTarget(Ie),W.updateRenderTargetMipmap(Ie))}w.setRenderTarget(Fe,Ye,Ke),w.setClearColor(ve,ye),Ze!==void 0&&(se.viewport=Ze),w.toneMapping=et}function Ti(R,Y,le){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ie=R.length;Q<Ie;Q++){const ke=R[Q],{object:Fe,geometry:Ye,group:Ke}=ke;let et=ke.material;et.allowOverride===!0&&se!==null&&(et=se),Fe.layers.test(le.layers)&&Gs(Fe,Y,le,Ye,et,Ke)}}function Gs(R,Y,le,se,Q,Ie){R.onBeforeRender(w,Y,le,se,Q,Ie),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Y,le,se,R,Ie),Q.transparent===!0&&Q.side===_a&&Q.forceSinglePass===!1?(Q.side=Zn,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,se,Q,R,Ie),Q.side=rs,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,se,Q,R,Ie),Q.side=_a):w.renderBufferDirect(le,Y,se,Q,R,Ie),R.onAfterRender(w,Y,le,se,Q,Ie)}function Vs(R,Y,le){Y.isScene!==!0&&(Y=_t);const se=b.get(R),Q=I.state.lights,Ie=I.state.shadowsArray,ke=Q.state.version,Fe=We.getParameters(R,Q.state,Ie,Y,le),Ye=We.getProgramCacheKey(Fe);let Ke=se.programs;se.environment=R.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(R.isMeshStandardMaterial?xe:he).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",Nn),Ke=new Map,se.programs=Ke);let et=Ke.get(Ye);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===ke)return eo(R,Fe),et}else Fe.uniforms=We.getUniforms(R),R.onBeforeCompile(Fe,w),et=We.acquireProgram(Fe,Ye),Ke.set(Ye,et),se.uniforms=Fe.uniforms;const Ze=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ne.uniform),eo(R,Fe),se.needsLights=Aa(R),se.lightsStateVersion=ke,se.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=et,se.uniformsList=null,et}function vl(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function eo(R,Y){const le=b.get(R);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function os(R,Y,le,se,Q){Y.isScene!==!0&&(Y=_t),W.resetTextureUnits();const Ie=Y.fog,ke=se.isMeshStandardMaterial?Y.environment:null,Fe=ie===null?w.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:jr,Ye=(se.isMeshStandardMaterial?xe:he).get(se.envMap||ke),Ke=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ze=!!le.morphAttributes.position,nt=!!le.morphAttributes.normal,Lt=!!le.morphAttributes.color;let Qt=Xi;se.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Qt=w.toneMapping);const Yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ot=Yt!==void 0?Yt.length:0,Qe=b.get(se),Nt=I.state.lights;if(Ge===!0&&(mt===!0||R!==ue)){const Tn=R===ue&&se.id===de;Ne.setState(se,R,Tn)}let lt=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Nt.state.version||Qe.outputColorSpace!==Fe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==Ye||se.fog===!0&&Qe.fog!==Ie||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ne.numPlanes||Qe.numIntersection!==Ne.numIntersection)||Qe.vertexAlphas!==Ke||Qe.vertexTangents!==et||Qe.morphTargets!==Ze||Qe.morphNormals!==nt||Qe.morphColors!==Lt||Qe.toneMapping!==Qt||Qe.morphTargetsCount!==Ot)&&(lt=!0):(lt=!0,Qe.__version=se.version);let Mn=Qe.currentProgram;lt===!0&&(Mn=Vs(se,Y,Q));let qi=!1,En=!1,ci=!1;const It=Mn.getUniforms(),bn=Qe.uniforms;if(Ce.useProgram(Mn.program)&&(qi=!0,En=!0,ci=!0),se.id!==de&&(de=se.id,En=!0),qi||ue!==R){Ce.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),It.setValue(k,"projectionMatrix",R.projectionMatrix),It.setValue(k,"viewMatrix",R.matrixWorldInverse);const An=It.map.cameraPosition;An!==void 0&&An.setValue(k,gt.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),ue!==R&&(ue=R,En=!0,ci=!0)}if(Qe.needsLights&&(Nt.state.directionalShadowMap.length>0&&It.setValue(k,"directionalShadowMap",Nt.state.directionalShadowMap,W),Nt.state.spotShadowMap.length>0&&It.setValue(k,"spotShadowMap",Nt.state.spotShadowMap,W),Nt.state.pointShadowMap.length>0&&It.setValue(k,"pointShadowMap",Nt.state.pointShadowMap,W)),Q.isSkinnedMesh){It.setOptional(k,Q,"bindMatrix"),It.setOptional(k,Q,"bindMatrixInverse");const Tn=Q.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),It.setValue(k,"boneTexture",Tn.boneTexture,W))}Q.isBatchedMesh&&(It.setOptional(k,Q,"batchingTexture"),It.setValue(k,"batchingTexture",Q._matricesTexture,W),It.setOptional(k,Q,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",Q._indirectTexture,W),It.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",Q._colorsTexture,W));const mn=le.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ot.update(Q,le,Mn),(En||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,It.setValue(k,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(bn.envMap.value=Ye,bn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=Vw()),En&&(It.setValue(k,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&to(bn,ci),Ie&&se.fog===!0&&tt.refreshFogUniforms(bn,Ie),tt.refreshMaterialUniforms(bn,se,ge,ne,I.state.transmissionRenderTarget[R.id]),ou.upload(k,vl(Qe),bn,W)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ou.upload(k,vl(Qe),bn,W),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(k,"center",Q.center),It.setValue(k,"modelViewMatrix",Q.modelViewMatrix),It.setValue(k,"normalMatrix",Q.normalMatrix),It.setValue(k,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Tn=se.uniformsGroups;for(let An=0,ks=Tn.length;An<ks;An++){const Ai=Tn[An];Me.update(Ai,Mn),Me.bind(Ai,Mn)}}return Mn}function to(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(R,Y,le){const se=b.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Y,b.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const le=b.get(R);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Ra=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,le=0){ie=R,H=Y,Z=le;let se=null,Q=!1,Ie=!1;if(R){const Fe=b.get(R);if(Fe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(k.FRAMEBUFFER,Fe.__webglFramebuffer),L.copy(R.viewport),G.copy(R.scissor),J=R.scissorTest,Ce.viewport(L),Ce.scissor(G),Ce.setScissorTest(J),de=-1;return}else if(Fe.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Fe.__hasExternalTextures)W.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(Fe.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);const Ke=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?se=Ke[Y][le]:se=Ke[Y],Q=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?se=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?se=Ke[le]:se=Ke,L.copy(R.viewport),G.copy(R.scissor),J=R.scissorTest}else L.copy($).multiplyScalar(ge).floor(),G.copy(fe).multiplyScalar(ge).floor(),J=De;if(le!==0&&(se=Ra),Ce.bindFramebuffer(k.FRAMEBUFFER,se)&&Ce.drawBuffers(R,se),Ce.viewport(L),Ce.scissor(G),Ce.setScissorTest(J),Q){const Fe=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,le)}else if(Ie){const Fe=Y;for(let Ye=0;Ye<R.textures.length;Ye++){const Ke=b.get(R.textures[Ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ye,Ke.__webglTexture,le,Fe)}}else if(R!==null&&le!==0){const Fe=b.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fe.__webglTexture,le)}de=-1},this.readRenderTargetPixels=function(R,Y,le,se,Q,Ie,ke,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){Ce.bindFramebuffer(k.FRAMEBUFFER,Ye);try{const Ke=R.textures[Fe],et=Ke.format,Ze=Ke.type;if(!je.textureFormatReadable(et)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ze)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&le>=0&&le<=R.height-Q&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(Y,le,se,Q,Re.convert(et),Re.convert(Ze),Ie))}finally{const Ke=ie!==null?b.get(ie).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,Y,le,se,Q,Ie,ke,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye)if(Y>=0&&Y<=R.width-se&&le>=0&&le<=R.height-Q){Ce.bindFramebuffer(k.FRAMEBUFFER,Ye);const Ke=R.textures[Fe],et=Ke.format,Ze=Ke.type;if(!je.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.bufferData(k.PIXEL_PACK_BUFFER,Ie.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(Y,le,se,Q,Re.convert(et),Re.convert(Ze),0);const Lt=ie!==null?b.get(ie).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Lt);const Qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ZE(k,Qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ie),k.deleteBuffer(nt),k.deleteSync(Qt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,le=0){const se=Math.pow(2,-le),Q=Math.floor(R.image.width*se),Ie=Math.floor(R.image.height*se),ke=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;W.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,le,0,0,ke,Fe,Q,Ie),Ce.unbindTexture()};const ls=k.createFramebuffer(),wa=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,le=null,se=null,Q=0,Ie=null){Ie===null&&(Q!==0?(ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=Q,Q=0):Ie=0);let ke,Fe,Ye,Ke,et,Ze,nt,Lt,Qt;const Yt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(le!==null)ke=le.max.x-le.min.x,Fe=le.max.y-le.min.y,Ye=le.isBox3?le.max.z-le.min.z:1,Ke=le.min.x,et=le.min.y,Ze=le.isBox3?le.min.z:0;else{const mn=Math.pow(2,-Q);ke=Math.floor(Yt.width*mn),Fe=Math.floor(Yt.height*mn),R.isDataArrayTexture?Ye=Yt.depth:R.isData3DTexture?Ye=Math.floor(Yt.depth*mn):Ye=1,Ke=0,et=0,Ze=0}se!==null?(nt=se.x,Lt=se.y,Qt=se.z):(nt=0,Lt=0,Qt=0);const Ot=Re.convert(Y.format),Qe=Re.convert(Y.type);let Nt;Y.isData3DTexture?(W.setTexture3D(Y,0),Nt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Nt=k.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const lt=k.getParameter(k.UNPACK_ROW_LENGTH),Mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qi=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ke),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const It=R.isDataArrayTexture||R.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const mn=b.get(R),Tn=b.get(Y),An=b.get(mn.__renderTarget),ks=b.get(Tn.__renderTarget);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,An.__webglFramebuffer),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let Ai=0;Ai<Ye;Ai++)It&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(R).__webglTexture,Q,Ze+Ai),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Ie,Qt+Ai)),k.blitFramebuffer(Ke,et,ke,Fe,nt,Lt,ke,Fe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||b.has(R)){const mn=b.get(R),Tn=b.get(Y);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,ls),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,wa);for(let An=0;An<Ye;An++)It?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,mn.__webglTexture,Q,Ze+An):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,mn.__webglTexture,Q),bn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Tn.__webglTexture,Ie,Qt+An):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tn.__webglTexture,Ie),Q!==0?k.blitFramebuffer(Ke,et,ke,Fe,nt,Lt,ke,Fe,k.COLOR_BUFFER_BIT,k.NEAREST):bn?k.copyTexSubImage3D(Nt,Ie,nt,Lt,Qt+An,Ke,et,ke,Fe):k.copyTexSubImage2D(Nt,Ie,nt,Lt,Ke,et,ke,Fe);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Nt,Ie,nt,Lt,Qt,ke,Fe,Ye,Ot,Qe,Yt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,Ie,nt,Lt,Qt,ke,Fe,Ye,Ot,Yt.data):k.texSubImage3D(Nt,Ie,nt,Lt,Qt,ke,Fe,Ye,Ot,Qe,Yt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ie,nt,Lt,ke,Fe,Ot,Qe,Yt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ie,nt,Lt,Yt.width,Yt.height,Ot,Yt.data):k.texSubImage2D(k.TEXTURE_2D,Ie,nt,Lt,ke,Fe,Ot,Qe,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,lt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qi),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ci),Ie===0&&Y.generateMipmaps&&k.generateMipmap(Nt),Ce.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),Ce.unbindTexture()},this.resetState=function(){H=0,Z=0,ie=null,Ce.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const fh={main:"#e7e5e1",about:"#080808",portfolio:"#101012"},dh={main:13,about:11,portfolio:15};function zn(r,e,i){return r+(e-r)*i}function Xw({scene:r,anchors:e,pointerRef:i,dragRef:s,zoomRef:l,hoverRef:c,labelEls:d}){const h=be.useRef(null),m=be.useRef(r),p=be.useRef(e);return be.useEffect(()=>{m.current=r},[r]),be.useEffect(()=>{p.current=e},[e]),be.useEffect(()=>{const g=h.current;if(!g)return;const _=new kw({antialias:!0,alpha:!1});_.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),_.setSize(g.clientWidth,g.clientHeight),g.appendChild(_.domElement);const v=new Ib,y=new Tt(fh.main);v.background=y,v.fog=new du(fh.about,.02);const E=new yi(52,g.clientWidth/g.clientHeight,.1,200);E.position.set(0,0,dh.main);const T=new Fr;v.add(T);const M=1600,x=new Float32Array(M*3);for(let je=0;je<M;je++){const Ce=12+Math.random()*46,N=Math.random()*Math.PI*2,b=Math.acos(2*Math.random()-1);x[je*3]=Ce*Math.sin(b)*Math.cos(N),x[je*3+1]=Ce*Math.sin(b)*Math.sin(N),x[je*3+2]=Ce*Math.cos(b)}const O=new In;O.setAttribute("position",new Ei(x,3));const U=new op({color:16777215,size:.05,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1}),C=new iv(O,U);T.add(C);const I=200,z=[];for(let je=0;je<I;je++)z.push(new ae((Math.random()-.5)*26,(Math.random()-.5)*16,(Math.random()-.5)*22));const B=[];for(let je=0;je<I;je++){let Ce=0;for(let N=je+1;N<I&&Ce<3;N++)z[je].distanceTo(z[N])<4.6&&(B.push(z[je].x,z[je].y,z[je].z,z[N].x,z[N].y,z[N].z),Ce++)}const K=new In;K.setAttribute("position",new Jn(B,3));const w=new ru({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),D=new ah(K,w);T.add(D);const H=new In;H.setAttribute("position",new Jn(z.flatMap(je=>[je.x,je.y,je.z]),3));const Z=new op({color:16777215,size:.08,transparent:!0,opacity:0,depthWrite:!1}),ie=new iv(H,Z);T.add(ie);const de=new Fr;T.add(de);const ue=new ru({color:1710618,transparent:!0,opacity:.35});let L=null;const G=()=>{for(let N=de.children.length-1;N>=0;N--){const b=de.children[N];de.remove(b),b instanceof Ex&&b.geometry.dispose()}const je=[];p.current.forEach(N=>{je.push(0,0,0,N.position[0],N.position[1],N.position[2])});const Ce=new In;Ce.setAttribute("position",new Jn(je,3)),L=new ah(Ce,ue),de.add(L)};G();let J=p.current;const ve=new Yb;ve.params.Line={threshold:.4};const ye=new Ht;let P=null,ne=!1;const ge=window.matchMedia("(hover: hover) and (pointer: fine)").matches,we=je=>{je.pointerType==="mouse"&&(ne=!0)};window.addEventListener("pointermove",we,{passive:!0});const He=4,$=new Float32Array(He*2*3),fe=new In;fe.setAttribute("position",new Ei($,3));const De=new ru({color:new Tt("#ffffff"),transparent:!0,opacity:0,depthWrite:!1}),Xe=new ah(fe,De);Xe.frustumCulled=!1,Xe.renderOrder=8,T.add(Xe);let Ge=null;const mt=je=>{const Ce=p.current,N=je?Ce.find(oe=>oe.id===je):void 0;if(!N)return;const[b,W,he]=N.position,xe=Ce.filter(oe=>oe.id!==je).map(oe=>{const Ve=oe.position[0]-b,Ae=oe.position[1]-W,We=oe.position[2]-he;return{a:oe,d:Ve*Ve+Ae*Ae+We*We}}).sort((oe,Ve)=>oe.d-Ve.d).slice(0,He-1).map(oe=>oe.a);$.fill(0),$[3]=b,$[4]=W,$[5]=he,xe.forEach((oe,Ve)=>{const Ae=(Ve+1)*6;$[Ae]=b,$[Ae+1]=W,$[Ae+2]=he,$[Ae+3]=oe.position[0],$[Ae+4]=oe.position[1],$[Ae+5]=oe.position[2]}),fe.attributes.position.needsUpdate=!0,fe.setDrawRange(0,(xe.length+1)*2)},Jt=new Wb;let gt=0;const ct={x:0,y:0},_t=new ae,st=new Tt;let Wt=dh.main,k=1;const Xt=()=>{gt=requestAnimationFrame(Xt);const je=Jt.getElapsedTime(),Ce=m.current;p.current!==J&&(G(),J=p.current),st.set(fh[Ce]),y.lerp(st,.04),v.fog instanceof du&&(v.fog.color.copy(y),v.fog.density=zn(v.fog.density,Ce==="main"?.008:.026,.04)),Wt=zn(Wt,dh[Ce],.04);const N=Ce==="main"?0:.9;U.opacity=zn(U.opacity,N,.045),Z.opacity=zn(Z.opacity,N*.7,.045),w.opacity=zn(w.opacity,Ce==="about"?.12:Ce==="portfolio"?.04:0,.045),ue.opacity=zn(ue.opacity,Ce==="main"?.35:0,.06);const b=i.current;if(P=null,Ce==="main"&&L&&ne&&ge&&!c.current){ye.set(b.x,-b.y),ve.setFromCamera(ye,E);const Ne=ve.intersectObject(L,!1);if(Ne.length&&Ne[0].index!=null){const Oe=Math.floor(Ne[0].index/2);P=p.current[Oe]?.id??null}}const W=c.current??P;W!==Ge&&(Ge=W,W&&mt(W)),De.color.set(Ce==="main"?"#141414":"#ffffff"),De.opacity=zn(De.opacity,W?.9:0,.16),Xe.visible=De.opacity>.02,de.visible=ue.opacity>.02;const he=s.current,xe=Ce==="about"?.05:.25,oe=Ce==="about"?.04:.18;ct.x=zn(ct.x,he.x,.09),ct.y=zn(ct.y,he.y,.09);const Ve=b.x*xe+ct.x,Ae=-b.y*oe+ct.y;T.rotation.y=zn(T.rotation.y,Ve,.08),T.rotation.x=zn(T.rotation.x,Ae,.08),k=zn(k,l.current,.1);const We=Od.clamp(1.05/E.aspect,1,1.35);E.position.z=Wt*k*We,E.position.x=zn(E.position.x,b.x*.6,.05);const tt=Od.clamp(.4+E.aspect*.42,.56,1);T.scale.setScalar(zn(T.scale.x,tt,.1)),E.position.y=zn(E.position.y,-b.y*.4,.05),E.lookAt(0,0,0),C.rotation.y=je*.01,D.rotation.y=je*.014,ie.rotation.y=je*.014;const Ee=_.domElement.clientWidth,Te=_.domElement.clientHeight;p.current.forEach(Ne=>{const Oe=d.current.get(Ne.id);if(!Oe)return;_t.set(Ne.position[0],Ne.position[1],Ne.position[2]),_t.applyMatrix4(T.matrixWorld);const Ue=E.position.distanceTo(_t);_t.project(E);const ot=_t.z>1,j=(_t.x*.5+.5)*Ee,Pe=(-_t.y*.5+.5)*Te,Re=Ne.position[0]<-1.4?"0%":Ne.position[0]>1.4?"-100%":"-50%";Oe.style.transform=`translate(${Re}, -50%) translate(${Math.round(j)}px, ${Math.round(Pe)}px)`;const Be=j<-40||j>Ee+40||Pe<-40||Pe>Te+40,Me=Od.clamp(1-(Ue-6)/22,.12,1);Oe.style.opacity=ot||Be?"0":String(Me),Oe.style.pointerEvents=ot||Be||Me<.3?"none":"auto",Oe.classList.toggle("is-lit",!ot&&!Be&&Ne.id===W)}),_.render(v,E)};Xt();const vt=()=>{const je=g.clientWidth,Ce=g.clientHeight;_.setSize(je,Ce),E.aspect=je/Ce,E.updateProjectionMatrix()};return window.addEventListener("resize",vt),()=>{cancelAnimationFrame(gt),window.removeEventListener("resize",vt),window.removeEventListener("pointermove",we),_.dispose(),O.dispose(),U.dispose(),K.dispose(),w.dispose(),H.dispose(),Z.dispose(),fe.dispose(),De.dispose(),ue.dispose(),_.domElement.parentNode===g&&g.removeChild(_.domElement)}},[i,s,l,c,d]),F.jsx("div",{className:"constellation-canvas",ref:h,"aria-hidden":"true"})}function jw(){const r=be.useRef(null);return be.useEffect(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const i=r.current;if(!i)return;document.body.classList.add("reticle-active");let s=!1,l=null;const c=p=>{if(i.style.transform=`translate3d(${p.clientX}px, ${p.clientY}px, 0) translate(-50%, -50%)`,s||(s=!0,i.classList.add("is-visible")),p.target!==l){l=p.target;const _=!!p.target?.closest('a, button, [role="button"], input, textarea, [data-hover]');i.classList.toggle("is-active",_)}},d=()=>{s=!1,i.classList.remove("is-visible")},h=()=>{i.classList.remove("did-click"),i.classList.add("is-pressed")},m=()=>{i.classList.remove("is-pressed"),i.classList.add("did-click"),window.setTimeout(()=>i.classList.remove("did-click"),420)};return window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("mousedown",h),window.addEventListener("mouseup",m),document.addEventListener("mouseleave",d),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mousedown",h),window.removeEventListener("mouseup",m),document.removeEventListener("mouseleave",d),document.body.classList.remove("reticle-active")}},[]),F.jsxs("div",{className:"reticle",ref:r,"aria-hidden":"true",children:[F.jsxs("span",{className:"reticle-box",children:[F.jsx("span",{className:"reticle-corner tl"}),F.jsx("span",{className:"reticle-corner tr"}),F.jsx("span",{className:"reticle-corner bl"}),F.jsx("span",{className:"reticle-corner br"})]}),F.jsx("span",{className:"reticle-ring"}),F.jsx("span",{className:"reticle-dot"})]})}const Qc=[{name:"League Of Legends @adesso",description:"Ein React Playground in Form einer League of Legends Team-Maker Web-App. Die Anwendung ermöglicht es, zwei Teams zu erstellen, Spieler hinzuzufügen und (ehemals) mithilfe einer KI faire Teams basierend auf Spieler-Daten zu generieren. Das Projekt dient sowohl als Lern- & Experimentierumgebung als auch als Funktions-Prototyp.",descriptionEn:"A React playground in the form of a League of Legends team-maker web app. The app lets you create two teams, add players, and (formerly) uses AI to generate fair teams based on player data. The project serves both as a learning & experimentation environment and as a functional prototype.",tech:"React, Vite, JavaScript, Tailwind CSS",link:"https://jsnuwu.github.io/react-playground/"},{name:"OnlineShopVue.js",description:"Dieses Projekt ist ein moderner, interaktiver Online-Shop für Bekleidung und Accessoires, entwickelt mit Vue 3, Pinia und Tailwind CSS. Es bietet eine benutzerfreundliche Oberfläche, die es Kunden ermöglicht, Produkte detailliert zu konfigurieren, bevor sie sie in den Warenkorb legen.",descriptionEn:"This project is a modern, interactive online shop for clothing and accessories, built with Vue 3, Pinia and Tailwind CSS. It offers a user-friendly interface that lets customers configure products in detail before adding them to the cart.",tech:"Vue.js, Pinia, Tailwind CSS, TypeScript, Vite",link:"https://jsnuwu.github.io/OnlineShopVue.js/"},{name:"Placeholder",description:"Ein React Three Fiber Experiment: eine kleine 3D-Szene mit Himmel, Haus und zufällig platzierten Bäumen, durch die man sich per WASD und Sprung frei bewegen kann · mit Pointer-Lock-Kamera wie in einem Ego-Shooter. Reines Spiel- und Lernprojekt ohne festen Zweck.",descriptionEn:"A React Three Fiber experiment: a small 3D scene with a sky, a house, and randomly placed trees you can walk through freely with WASD and jump · pointer-lock camera, like a first-person game. A pure playground / learning project with no fixed purpose.",tech:"React, Three.js, React Three Fiber, TypeScript",link:"https://jsnuwu.github.io/PLACEHOLDER/"},{name:"Flappy Game",description:"Ein Flappy-Bird-Klon, gebaut mit Angular. Der Vogel wird per Klick/Tastendruck durch eine Reihe von Rohr-Hindernissen gesteuert, während im Hintergrund der Score mitgezählt wird. Erreichte Highscores werden in einem lokalen Leaderboard gespeichert.",descriptionEn:"A Flappy Bird clone built with Angular. The bird is steered through a series of pipe obstacles via click/keypress while the score is tracked in the background. High scores are saved to a local leaderboard.",tech:"Angular, TypeScript, RxJS",link:"https://jsnuwu.github.io/flappy-game/"},{name:"3D Earth",description:"Dieses Projekt ist ein Three.js Playground, in dem ich mit 3D-Grafiken im Web experimentiert habe. Konkret wurde eine 3D-Erdkugel umgesetzt, um Grundlagen von Three.js, Szenen, Kameras und Animationen zu testen. Das Repository ist als Experiment / Lernprojekt gedacht.",descriptionEn:"This project is a Three.js playground where I experimented with 3D graphics on the web. Specifically, I built a 3D globe to test the basics of Three.js, scenes, cameras and animations. The repository is meant as an experiment / learning project.",tech:"Three.js, JavaScript, HTML/CSS",link:"https://jsnuwu.github.io/Earth/"},{name:"Flowers",description:"Ein kleines CSS/JavaScript-Experiment ganz ohne Framework: Ein Klick auf den Button lässt vor einem animierten Sternenhimmel eine leuchtende Blume wachsen und aufblühen. Reine Spielerei mit CSS-Animationen und Timing.",descriptionEn:"A small CSS/JavaScript experiment with no framework at all: clicking the button grows and blooms a glowing flower in front of an animated starry sky. Pure play with CSS animations and timing.",tech:"HTML, CSS, JavaScript",link:"https://jsnuwu.github.io/Flowers/"},{name:"About Me Page (old)",description:"Dieses Repository enthält eine kurze „About Me“-Präsentation, die ich im Rahmen einer internen Vorstellung vor meinen Führungskräften gehalten habe. Ziel war es, einen Überblick über meine Person, meine Arbeitsweise und meine Schwerpunkte zu geben · kompakt und auf den Punkt. Das Projekt dient ausschließlich Dokumentations- und Referenzzwecken.",descriptionEn:"This repository contains a short 'About Me' presentation I gave as part of an internal introduction to my managers. The goal was to give an overview of who I am, how I work and my focus areas · compact and to the point. The project serves purely documentation and reference purposes.",tech:"Angular, TypeScript, HTML/CSS",link:"https://jsnuwu.github.io/AboutMe/"}],Lv=["FRONTEND","BACKEND","DESIGN","CONTENT CREATION","SOCIAL MEDIA","VIDEO EDITING","UI / UX","BRANDING"],Ww=["PHOTOGRAPHY","MOTION","LAYOUT","TYPOGRAPHY","PROTOTYPING","WEB"];function Yw(r){return{name:"JASON BAY",tagline:"Frontend Developer"}}function qw(r){const e=Ww,i=Math.PI*2/Lv.length,s=Lv.map((d,h)=>({label:d,strong:!0,angle:h*i-Math.PI/2+.12,radius:4.6+h%2*.35,depth:Math.sin(h*1.3)*.9})),l=Math.PI*2/e.length,c=e.map((d,h)=>({label:d,strong:!1,angle:h*l-Math.PI/2+l/2,radius:6.6+h%2*.5,depth:(h%2===0?-1:1)*(1.9+h%3*.5)}));return[...s,...c]}function Kw(r){const e=r==="de",i=[{id:"about",label:e?"ÜBER MICH":"ABOUT",scale:1.15},{id:"work",label:"PORTFOLIO",scale:1.35},{id:"skills",label:"SKILLS",scale:.9},{id:"experience",label:e?"WERDEGANG":"EXPERIENCE",scale:1.3},{id:"gallery",label:e?"GALERIE":"GALLERY",scale:.95},{id:"social",label:"SOCIAL MEDIA",scale:1},{id:"languages",label:e?"SPRACHEN":"LANGUAGES",scale:.8},{id:"contact",label:e?"KONTAKT":"CONTACT",scale:1.05}],s=5.4,l=Math.PI*(3-Math.sqrt(5)),c=i.length;return i.map((d,h)=>{const m=1-h/(c-1)*2,p=Math.sqrt(Math.max(0,1-m*m)),g=l*h;return{...d,position:[Math.cos(g)*p*s,m*s*.72,Math.sin(g)*p*s]}})}function Nv(){return[{label:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu"},{label:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu"},{label:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/"},{label:"YouTube",handle:"@jsnuwu",href:"https://www.youtube.com/@jsnuwu"},{label:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/"}]}const Uv="jasonbay05@gmail.com";var Zw=zv();const Jw="/JasonBay.dev/assets/pet1-CJIk-0xw.jpeg",Qw="/JasonBay.dev/assets/pet2-DJUnXQFB.jpeg",$w="/JasonBay.dev/assets/pet3-DuVC4YnI.jpeg",eC="/JasonBay.dev/assets/pet4-CHYLq3zJ.jpeg",tC="/JasonBay.dev/assets/pet5-CXqwbWPQ.jpeg",nC="/JasonBay.dev/assets/pet6-BueucAZG.jpeg",iC="/JasonBay.dev/assets/pet7-sMwNsGXX.jpeg",aC="/JasonBay.dev/assets/pet8-BumEY2lT.jpeg",sC="/JasonBay.dev/assets/pet9-kBF7FpHN.jpeg",rC="/JasonBay.dev/assets/pet10-CvKpPrae.jpeg",oC="/JasonBay.dev/assets/pet12-CisWE0fr.jpeg",lC="/JasonBay.dev/assets/pet13-DhrBnIH-.jpeg",cC="/JasonBay.dev/assets/pet14-DlldvXUI.jpeg",uC="/JasonBay.dev/assets/motorcycle4-DGuskHns.jpeg",fC="/JasonBay.dev/assets/motorcycle6-BH0Osdd9.jpeg",dC="/JasonBay.dev/assets/motorcycle7-Bafr5Mxu.jpeg",hC="/JasonBay.dev/assets/motorcycle8-d3KG3SZS.jpeg",pC="/JasonBay.dev/assets/motorcycle9-DUGtGDMJ.jpeg",mC="/JasonBay.dev/assets/motorcycle11-DPgTw-cD.jpeg",gC="/JasonBay.dev/assets/motorcycle12-B8f8esd4.jpeg",_C="/JasonBay.dev/assets/motorcycle13-CFp8o_cV.jpeg",vC="/JasonBay.dev/assets/motorcycle14-DI4wEwVY.jpeg",xC="/JasonBay.dev/assets/motorcycle15-D07o_jxR.jpeg",SC="/JasonBay.dev/assets/motorcycle17-BvWXS7lH.jpeg",yC="/JasonBay.dev/assets/motorcycle18-DWw56N-S.jpeg",MC="/JasonBay.dev/assets/motorcycle19-B2kCryYc.jpeg",EC="/JasonBay.dev/assets/motorcycle20-De6XRn6Y.jpeg",bC="/JasonBay.dev/assets/motorcycle21-DtMrq1gx.jpeg",TC="/JasonBay.dev/assets/me1-8Tr4emsB.jpeg",AC="/JasonBay.dev/assets/me2-CN9YxVa4.jpeg",RC="/JasonBay.dev/assets/me3-DPw3t2BW.jpg",wC="/JasonBay.dev/assets/me5-Bbzvrqvc.jpg",CC="/JasonBay.dev/assets/me6-DqKQgXcy.jpeg",DC="/JasonBay.dev/assets/hike1-DCzYhsBt.jpg",LC="/JasonBay.dev/assets/hike2-CtVO84a1.jpg",NC="/JasonBay.dev/assets/hike3-BBY1Ubv3.jpg",UC="/JasonBay.dev/assets/hike4-BOHadOKi.jpg",OC="/JasonBay.dev/assets/hike5-BzRShkdi.jpg",PC="/JasonBay.dev/assets/hike6-CclUWBBp.jpg",IC="/JasonBay.dev/assets/hike8-BnzcehXs.jpg",BC="/JasonBay.dev/assets/hike9-BuOeSFVN.jpg",FC=[{img:Jw,cat:"pets"},{img:Qw,cat:"pets"},{img:$w,cat:"pets"},{img:eC,cat:"pets"},{img:tC,cat:"pets"},{img:nC,cat:"pets"},{img:iC,cat:"pets"},{img:aC,cat:"pets"},{img:sC,cat:"pets"},{img:rC,cat:"pets"},{img:oC,cat:"pets"},{img:lC,cat:"pets"},{img:cC,cat:"pets"},{img:uC,cat:"moto"},{img:fC,cat:"moto"},{img:dC,cat:"moto"},{img:hC,cat:"moto"},{img:pC,cat:"moto"},{img:mC,cat:"moto"},{img:gC,cat:"moto"},{img:_C,cat:"moto"},{img:vC,cat:"moto"},{img:xC,cat:"moto"},{img:SC,cat:"moto"},{img:yC,cat:"moto"},{img:MC,cat:"moto"},{img:EC,cat:"moto"},{img:bC,cat:"moto"},{img:DC,cat:"hike"},{img:LC,cat:"hike"},{img:NC,cat:"hike"},{img:UC,cat:"hike"},{img:OC,cat:"hike"},{img:PC,cat:"hike"},{img:IC,cat:"hike"},{img:BC,cat:"hike"},{img:TC,cat:"me"},{img:AC,cat:"me"},{img:RC,cat:"me"},{img:wC,cat:"me"},{img:CC,cat:"me"}];function zC(r,e){const i=[...r];let s=e;const l=()=>(s=s*1103515245+12345&2147483647,s/2147483647);for(let c=i.length-1;c>0;c--){const d=Math.floor(l()*(c+1));[i[c],i[d]]=[i[d],i[c]]}return i}const Ov=zC(FC,1337);function HC(){const{t:r,lang:e}=Ta(),i=be.useRef(null),s=be.useRef(!1),[l,c]=be.useState("all"),[d,h]=be.useState(null),m=be.useMemo(()=>l==="all"?Ov:Ov.filter(g=>g.cat===l),[l]);be.useEffect(()=>{const g=i.current;if(!g)return;const _=B=>{const K=g.scrollWidth-g.clientWidth;if(K<=1)return;const w=B.deltaY>0;w&&g.scrollLeft>=K-1||!w&&g.scrollLeft<=0||(B.preventDefault(),g.scrollLeft+=B.deltaY)};g.addEventListener("wheel",_,{passive:!1});let v=!1,y=0,E=0,T=0,M=0,x=0,O=null;const U=()=>{x*=.94,g.scrollLeft-=x*16,Math.abs(x)>.02?O=requestAnimationFrame(U):O=null},C=B=>{O&&cancelAnimationFrame(O),v=!0,s.current=!1,y=B.pageX,E=g.scrollLeft,T=B.pageX,M=performance.now(),x=0,g.classList.add("dragging")},I=B=>{if(!v)return;const K=B.pageX-y;Math.abs(K)>4&&(s.current=!0),g.scrollLeft=E-K;const w=performance.now(),D=w-M;D>0&&(x=(B.pageX-T)/D),T=B.pageX,M=w},z=()=>{v&&(v=!1,g.classList.remove("dragging"),Math.abs(x)>.05&&(O=requestAnimationFrame(U)))};return g.addEventListener("mousedown",C),window.addEventListener("mousemove",I),window.addEventListener("mouseup",z),()=>{O&&cancelAnimationFrame(O),g.removeEventListener("wheel",_),g.removeEventListener("mousedown",C),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",z)}},[l]),be.useEffect(()=>{i.current?.scrollTo({left:0})},[l]),be.useEffect(()=>{if(d===null)return;const g=_=>{_.key==="Escape"&&h(null),_.key==="ArrowRight"&&h(v=>v===null?v:(v+1)%m.length),_.key==="ArrowLeft"&&h(v=>v===null?v:(v-1+m.length)%m.length)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[d,m.length]);const p=e==="de";return F.jsxs("div",{className:"gsec",children:[F.jsxs("div",{className:"gsec-filter",children:[r.aboutSlider.categories.map(g=>F.jsx("button",{className:g.key===l?"active":"",onClick:()=>c(g.key),children:g.label},g.key)),F.jsxs("span",{className:"gsec-count",children:[m.length," ",p?"BILDER":"IMAGES"]})]}),F.jsx("div",{className:"gsec-track",ref:i,children:m.map((g,_)=>F.jsxs("figure",{className:"gsec-shot",onClick:()=>{s.current||h(_)},children:[F.jsx("img",{src:g.img,alt:"",draggable:!1,loading:"lazy"}),F.jsxs("figcaption",{children:[String(_+1).padStart(2,"0")," · ",g.cat.toUpperCase()]})]},`${g.img}-${_}`))}),F.jsx("p",{className:"gsec-hint",children:p?"ZIEHEN ODER SCROLLEN · KLICK ZUM VERGRÖSSERN":"DRAG OR SCROLL · CLICK TO ENLARGE"}),d!==null&&Zw.createPortal(F.jsxs("div",{className:"gsec-lightbox",onClick:()=>h(null),children:[F.jsxs("span",{className:"gsec-lightbox-count",children:[String(d+1).padStart(2,"0")," /"," ",String(m.length).padStart(2,"0")]}),F.jsx("button",{className:"gsec-lb-nav prev","aria-label":p?"Vorheriges Bild":"Previous image",onClick:g=>{g.stopPropagation(),h(_=>_===null?_:(_-1+m.length)%m.length)},children:"‹"}),F.jsx("img",{src:m[d].img,alt:"",onClick:g=>g.stopPropagation()}),F.jsx("button",{className:"gsec-lb-nav next","aria-label":p?"Nächstes Bild":"Next image",onClick:g=>{g.stopPropagation(),h(_=>_===null?_:(_+1)%m.length)},children:"›"})]}),document.body)]})}const Lx="/JasonBay.dev/assets/1-BhbDuOtu.mp4",Nx="/JasonBay.dev/assets/2-Be0iSaCO.mp4",Ux="/JasonBay.dev/assets/3-M1koVpa6.mp4",Ox="/JasonBay.dev/assets/4-DlmwLfDR.mp4",Px="/JasonBay.dev/assets/6-D5kzTYnV.mp4",Ix="/JasonBay.dev/assets/66-XMB0FlDV.mp4",Ls=[Lx,Nx,Ux,Ox,Px,Ix];function GC(){const{t:r}=Ta(),e=r.tiktokShowcase,[i,s]=be.useState(0),[l,c]=be.useState(!0),[d,h]=be.useState(!0),[m,p]=be.useState(.8),[g,_]=be.useState(0),v=be.useRef(null),y=be.useRef(null),E=be.useRef(!1),T=be.useCallback(C=>{E.current||(E.current=!0,s(I=>((I+C)%Ls.length+Ls.length)%Ls.length),c(!0),window.setTimeout(()=>E.current=!1,450))},[]);be.useEffect(()=>{const C=v.current;C&&(C.currentTime=0,C.volume=m,C.muted=d,l?C.play().catch(()=>{}):C.pause())},[i,l,d,m]),be.useEffect(()=>{const C=y.current;if(!C)return;const I=z=>{Math.abs(z.deltaX)>Math.abs(z.deltaY)||(z.preventDefault(),!(Math.abs(z.deltaY)<14)&&T(z.deltaY>0?1:-1))};return C.addEventListener("wheel",I,{passive:!1}),()=>C.removeEventListener("wheel",I)},[T]);const M=()=>{const C=v.current;C&&C.duration&&_(C.currentTime/C.duration*100)},x=C=>{const I=Number(C.target.value);p(I),h(I===0)},O=d||m===0,U=C=>C.stopPropagation();return F.jsxs("div",{className:"tsec",children:[F.jsxs("div",{className:"tsec-dock",children:[F.jsx("div",{className:"tsec-stage",ref:y,children:F.jsxs("div",{className:"tsec-screen",onClick:()=>c(C=>!C),children:[F.jsx("video",{ref:v,className:"tsec-video",src:Ls[i],loop:!0,playsInline:!0,muted:d,autoPlay:!0,onTimeUpdate:M},Ls[i]),!l&&F.jsx("span",{className:"tsec-play-ind","aria-hidden":"true",children:"▶"}),F.jsxs("div",{className:"tsec-bar",onClick:U,children:[F.jsx("button",{className:"tsec-ctl",onClick:()=>c(C=>!C),"aria-label":l?e.pause:e.play,children:l?"❚❚":"▶"}),F.jsx("button",{className:"tsec-ctl",onClick:()=>h(C=>!C),"aria-label":O?e.unmute:e.mute,children:O?"MUTE":"VOL"}),F.jsx("input",{type:"range",className:"tsec-vol-slider",min:0,max:1,step:.01,value:d?0:m,onChange:x,"aria-label":e.volume}),F.jsxs("span",{className:"tsec-counter",children:[String(i+1).padStart(2,"0")," /"," ",String(Ls.length).padStart(2,"0")]}),F.jsxs("span",{className:"tsec-arrows",children:[F.jsx("button",{onClick:()=>T(-1),"aria-label":e.prev,children:"‹"}),F.jsx("button",{onClick:()=>T(1),"aria-label":e.next,children:"›"})]})]}),F.jsx("div",{className:"tsec-progress",children:F.jsx("span",{style:{width:`${g}%`}})})]})}),F.jsx("div",{className:"tsec-dots",children:Ls.map((C,I)=>F.jsx("button",{className:I===i?"active":"",onClick:()=>{s(I),c(!0)},"aria-label":e.jumpTo(I+1),children:String(I+1).padStart(2,"0")},I))})]}),F.jsxs("div",{className:"tsec-side",children:[F.jsxs("div",{className:"tsec-stats",children:[F.jsxs("div",{children:[F.jsx("strong",{children:r.about.spotlight.statFollowerValue}),F.jsx("span",{children:r.about.spotlight.statFollowerLabel})]}),F.jsxs("div",{children:[F.jsx("strong",{children:r.about.spotlight.statLikesValue}),F.jsx("span",{children:r.about.spotlight.statLikesLabel})]}),F.jsxs("div",{children:[F.jsx("strong",{children:r.about.spotlight.statExperienceValue}),F.jsx("span",{children:r.about.spotlight.statExperienceLabel})]})]}),F.jsx("p",{className:"tsec-copy",children:r.about.spotlight.subtitle}),F.jsx("ul",{className:"tsec-list",children:r.about.spotlight.list.map(C=>F.jsx("li",{children:C},C))}),F.jsx("a",{className:"tsec-link",href:"https://www.tiktok.com/@jsnuwu",target:"_blank",rel:"noopener noreferrer",children:"TIKTOK @JSNUWU ↗"})]})]})}function VC({avatarUrl:r}){return F.jsxs("div",{className:"profile-card",children:[F.jsx("div",{className:"card-glow"}),F.jsx("img",{src:r,className:"profile-avatar"})]})}const Bx="/JasonBay.dev/assets/BayJason-CgZ6RBiE.jpg";function Fx(){const r=be.useRef(null);return be.useEffect(()=>{const e=r.current;if(!e)return;const i=new IntersectionObserver(([s])=>{s.isIntersecting&&(e.classList.add("in-view"),i.unobserve(e))},{threshold:0,rootMargin:"0px 0px -10% 0px"});return i.observe(e),()=>i.disconnect()},[]),r}const kC="!<>-_\\/[]{}—=+*^?#$%&";function oi({text:r,radius:e=52,speed:i=190,scrambleChars:s=kC,className:l="",as:c="span"}){const d=Array.from(r),h=be.useRef([]),m=be.useRef([]),p=be.useRef(null),g=be.useRef([]),_=be.useRef(null),v=be.useCallback(()=>{_.current!==null&&(cancelAnimationFrame(_.current),_.current=null);const O=Array.from(r);h.current.forEach((U,C)=>{U&&(U.textContent=O[C],U.classList.remove("is-scrambled"))})},[r]);be.useEffect(()=>(v(),()=>{_.current!==null&&(cancelAnimationFrame(_.current),_.current=null)}),[r,v]);const y=()=>{m.current=h.current.map(O=>{if(!O)return{x:0,y:0};const U=O.getBoundingClientRect();return{x:U.left+U.width/2,y:U.top+U.height/2}}),g.current=new Array(d.length).fill(0)},E=O=>{const U=p.current;U&&h.current.forEach((C,I)=>{if(!C||d[I]===" ")return;const z=m.current[I];Math.hypot(U.x-z.x,U.y-z.y)<e?O-g.current[I]>i&&(g.current[I]=O,C.textContent=s[Math.floor(Math.random()*s.length)],C.classList.add("is-scrambled")):C.textContent!==d[I]&&(C.textContent=d[I],C.classList.remove("is-scrambled"))}),_.current=requestAnimationFrame(E)},T=()=>{y(),_.current===null&&(_.current=requestAnimationFrame(E))},M=O=>{p.current={x:O.clientX,y:O.clientY}},x=()=>{p.current=null,v()};return F.jsx(c,{className:l,onMouseEnter:T,onMouseMove:M,onMouseLeave:x,children:d.map((O,U)=>F.jsx("span",{ref:C=>{h.current[U]=C},children:O},U))})}const zx="/JasonBay.dev/assets/Instagram-n8caggNr.png",Hx="/JasonBay.dev/assets/TikTok-CpvqXkYO.png",XC="/JasonBay.dev/assets/GitHub-Hrqx8hqp.png",jC="/JasonBay.dev/assets/LinkedIn-BloU1de1.png";function WC(){const r=Fx(),{t:e}=Ta(),i=[{name:"GitHub",handle:"@jsnuwu",href:"https://github.com/jsnuwu",icon:XC,stats:[{label:"Repos",value:"12"},{label:"Contributions",value:"143"}],accent:"#0969da"},{name:"TikTok",handle:"@jsnuwu",href:"https://www.tiktok.com/@jsnuwu",icon:Hx,stats:[{label:"Follower",value:"20.8K"},{label:"Likes",value:"3.5M"}],bio:"Random edits by some guy",accent:"#ee1d52",latestPost:{caption:e.socialStats.tiktokPreviewCaption}},{name:"Instagram",handle:"@jsnuwu",href:"https://www.instagram.com/jsnuwu/",icon:zx,stats:[{label:"Follower",value:"196"}],accent:"#d62976",latestPost:{caption:e.socialStats.instagramPreviewCaption}},{name:"LinkedIn",handle:"Jason Bay",href:"https://www.linkedin.com/in/jason-bay-275499398/",icon:jC,stats:[],cta:e.socialStats.linkedinCta,accent:"#0a66c2"}];return F.jsxs("section",{className:"social-stats reveal",ref:r,children:[F.jsx(oi,{as:"h2",className:"social-stats-title",text:e.socialStats.title}),F.jsx("p",{className:"social-stats-subtitle",children:F.jsx(oi,{text:e.socialStats.subtitle})}),F.jsx("div",{className:"social-stats-grid",children:i.map(s=>F.jsxs("div",{className:"social-stat-cell",children:[s.latestPost&&F.jsxs("div",{className:"social-stat-preview",children:[F.jsx("span",{className:"social-stat-preview-label",children:e.socialStats.latestPost}),s.latestPost.image?F.jsx("img",{src:s.latestPost.image,alt:""}):F.jsx("div",{className:"social-stat-preview-placeholder",children:F.jsx("img",{src:s.icon,alt:"",className:"social-stat-preview-icon"})}),F.jsx("span",{className:"social-stat-preview-caption",children:s.latestPost.caption}),F.jsx("span",{className:"social-stat-preview-tail"})]}),F.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"social-stat-card",style:{"--stat-accent":s.accent},children:[F.jsxs("div",{className:"social-stat-header",children:[F.jsx("img",{src:s.icon,alt:"",className:"social-stat-icon"}),F.jsxs("div",{children:[F.jsx(oi,{as:"h3",text:s.name}),F.jsx("span",{className:"social-stat-handle",children:s.handle})]})]}),s.bio&&F.jsx("p",{className:"social-stat-bio",children:F.jsx(oi,{text:s.bio})}),s.stats.length>0?F.jsx("div",{className:"social-stat-numbers",children:s.stats.map(l=>F.jsxs("div",{className:"social-stat-number",children:[F.jsx("strong",{children:l.value}),F.jsx("span",{children:l.label})]},l.label))}):s.cta&&F.jsx("span",{className:"social-stat-cta",children:s.cta})]})]},s.name))})]})}function YC({href:r,onClick:e}){const{t:i}=Ta();return F.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"live-button",onClick:e,children:[F.jsx("span",{className:"live-button-dot"}),F.jsx("span",{className:"live-button-text",children:i.liveButton.label}),F.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"live-button-arrow",children:F.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]})}function qC(r){try{const e=new URL(r);return`${e.hostname}${e.pathname.replace(/\/$/,"")}`}catch{return r}}function KC(){const r=Fx(),e=be.useRef(null),{lang:i,t:s}=Ta(),l=be.useRef(0),c=be.useRef(!1),d=be.useRef(null),h=be.useRef(!1),[m,p]=be.useState(0);be.useEffect(()=>{l.current=m},[m]),be.useEffect(()=>()=>{d.current!==null&&cancelAnimationFrame(d.current)},[]),be.useEffect(()=>{const v=e.current;if(!v)return;const y=()=>{c.current=!0};v.addEventListener("wheel",y,{passive:!0}),v.addEventListener("touchstart",y,{passive:!0}),v.addEventListener("pointerdown",y,{passive:!0});const E=Date.now()+8e3,T=window.setInterval(()=>{if(Date.now()>E){window.clearInterval(T);return}if(c.current||!v.offsetWidth)return;const M=l.current*v.offsetWidth;Math.abs(v.scrollLeft-M)>4&&(v.scrollLeft=M)},120);return()=>{v.removeEventListener("wheel",y),v.removeEventListener("touchstart",y),v.removeEventListener("pointerdown",y),window.clearInterval(T)}},[]);const g=v=>{const y=e.current;if(!y)return;c.current=!0;const E=(v+Qc.length)%Qc.length;p(E),d.current!==null&&cancelAnimationFrame(d.current);const T=y.scrollLeft,M=E*y.offsetWidth,x=M-T,O=420,U=500,C=performance.now();h.current=!0;const I=z=>{const B=z-C;if(B<O){const K=B/O,w=1-Math.pow(1-K,3);y.scrollLeft=T+x*w,d.current=requestAnimationFrame(I)}else B<O+U?(y.scrollLeft=M,d.current=requestAnimationFrame(I)):(d.current=null,h.current=!1)};d.current=requestAnimationFrame(I)},_=()=>{const v=e.current;if(!v||v.offsetWidth===0||h.current)return;const y=Math.round(v.scrollLeft/v.offsetWidth);p(y)};return F.jsxs("section",{id:"projects-preview",className:"projects-preview reveal",ref:r,children:[F.jsx(oi,{as:"h2",className:"projects-preview-title",text:s.projectsPreview.title}),F.jsx("p",{className:"projects-preview-subtitle",children:F.jsx(oi,{text:s.projectsPreview.subtitle})}),F.jsxs("div",{className:"preview-carousel-wrapper",children:[F.jsx("button",{type:"button",className:"preview-arrow left",onClick:()=>g(m-1),"aria-label":s.projectsPreview.previousProject,children:"‹"}),F.jsx("div",{className:"preview-track",ref:e,onScroll:_,children:Qc.map((v,y)=>F.jsxs("div",{className:"preview-card",children:[F.jsxs("div",{className:"preview-browserbar",children:[F.jsx("span",{className:"browser-dot red"}),F.jsx("span",{className:"browser-dot yellow"}),F.jsx("span",{className:"browser-dot green"}),F.jsx("span",{className:"preview-url",children:qC(v.link)})]}),F.jsxs("a",{className:"preview-frame-wrapper",href:v.link,target:"_blank",rel:"noopener noreferrer","aria-label":s.projectsPreview.openLiveAria(v.name),children:[Math.abs(y-m)<=1&&F.jsx("iframe",{src:v.link,title:v.name,loading:y===0?"eager":"lazy",tabIndex:-1}),F.jsx("span",{className:"preview-frame-hint",children:s.projectsPreview.openLive})]}),F.jsxs("div",{className:"preview-card-body",children:[F.jsx(oi,{as:"h3",text:v.name}),F.jsx("p",{children:F.jsx(oi,{text:i==="en"?v.descriptionEn:v.description})}),F.jsx("small",{className:"preview-tech",children:v.tech}),F.jsx(YC,{href:v.link})]})]},v.name))}),F.jsx("button",{type:"button",className:"preview-arrow right",onClick:()=>g(m+1),"aria-label":s.projectsPreview.nextProject,children:"›"})]}),F.jsx("div",{className:"preview-dots",children:Qc.map((v,y)=>F.jsx("button",{type:"button",className:`preview-dot ${y===m?"active":""}`,onClick:()=>g(y),"aria-label":s.projectsPreview.jumpTo(v.name)},v.name))})]})}function ZC(r=.3){const e=be.useRef(null),[i,s]=be.useState(!1);return be.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([d])=>s(d.isIntersecting),{threshold:r,rootMargin:"0px 0px -5% 0px"});return c.observe(l),()=>c.disconnect()},[r]),{ref:e,inView:i}}const sl=[{id:1,src:Lx},{id:2,src:Nx},{id:3,src:Ux},{id:4,src:Ox},{id:6,src:Px},{id:66,src:Ix}],Pv=500,JC=40;function Iv(r){return(r%sl.length+sl.length)%sl.length}function QC(){const{t:r}=Ta(),{ref:e,inView:i}=ZC(),[s,l]=be.useState(0),[c,d]=be.useState(!0),[h,m]=be.useState(1),[p,g]=be.useState(!0),_=be.useRef(null),v=be.useRef(null),y=be.useRef(!1),E=be.useRef(null),T=H=>{y.current||(y.current=!0,l(Z=>Iv(Z+H)),window.setTimeout(()=>{y.current=!1},Pv))},M=H=>{y.current||(y.current=!0,l(Iv(H)),window.setTimeout(()=>{y.current=!1},Pv))},x=()=>T(1),O=()=>T(-1),U=()=>g(H=>!H);be.useEffect(()=>{const H=_.current;H&&(H.currentTime=0,H.volume=h,g(!0))},[s]),be.useEffect(()=>{const H=_.current;H&&(i&&p?H.play().catch(()=>{}):H.pause())},[i,p,s]),be.useEffect(()=>{const H=_.current;H&&(H.volume=h)},[h]),be.useEffect(()=>{const H=v.current;if(!H)return;const Z=de=>{de.preventDefault(),!(Math.abs(de.deltaY)<12)&&T(de.deltaY>0?1:-1)},ie=de=>{de.preventDefault()};return H.addEventListener("wheel",Z,{passive:!1}),H.addEventListener("touchmove",ie,{passive:!1}),()=>{H.removeEventListener("wheel",Z),H.removeEventListener("touchmove",ie)}},[]);const C=H=>H instanceof HTMLElement&&!!H.closest("button, input[type='range']"),I=H=>{if(C(H.target)){E.current=null;return}E.current=H.touches[0].clientY},z=H=>{if(C(H.target))return;const Z=E.current;if(E.current=null,Z===null)return;const ie=Z-H.changedTouches[0].clientY;Math.abs(ie)<JC||(ie>0?x():O())},B=H=>H.stopPropagation(),K=H=>{const Z=Number(H.target.value);m(Z),d(Z===0)},w=sl[s],D=c||h===0;return F.jsxs("section",{id:"tiktok-showcase",className:`tiktok-showcase ${i?"in-view":""}`,ref:e,children:[F.jsx(oi,{as:"h2",className:"tiktok-showcase-title",text:r.tiktokShowcase.title}),F.jsx("a",{className:"tiktok-showcase-subtitle",href:"https://www.tiktok.com/@jsnuwu",target:"_blank",rel:"noopener noreferrer",children:F.jsx(oi,{text:r.tiktokShowcase.subtitle})}),F.jsxs("div",{className:"phone-dock",children:[F.jsxs("div",{className:"phone-frame",children:[F.jsx("span",{className:"phone-camera","aria-hidden":"true"}),F.jsxs("div",{className:"phone-screen",ref:v,onClick:U,onTouchStart:I,onTouchEnd:z,children:[F.jsx("video",{ref:_,className:"phone-video",src:w.src,muted:c,loop:!0,playsInline:!0,preload:"metadata"},w.id),!p&&F.jsx("span",{className:"phone-play-indicator","aria-hidden":"true",children:"▶"}),F.jsx("button",{type:"button",className:"phone-play-btn",onClick:H=>{B(H),U()},"aria-label":p?r.tiktokShowcase.pause:r.tiktokShowcase.play,children:p?"⏸":"▶"}),F.jsxs("div",{className:"phone-volume",onClick:B,children:[F.jsx("button",{type:"button",className:"phone-mute-btn",onClick:H=>{B(H),d(Z=>!Z)},"aria-label":D?r.tiktokShowcase.unmute:r.tiktokShowcase.mute,children:D?"🔇":"🔊"}),F.jsx("div",{className:"phone-volume-track",children:F.jsx("input",{type:"range",className:"phone-volume-slider",min:0,max:1,step:.01,value:c?0:h,onChange:K,"aria-label":r.tiktokShowcase.volume})})]}),F.jsx("button",{type:"button",className:"phone-nav prev",onClick:H=>{B(H),O()},"aria-label":r.tiktokShowcase.prev,children:"▲"}),F.jsx("button",{type:"button",className:"phone-nav next",onClick:H=>{B(H),x()},"aria-label":r.tiktokShowcase.next,children:"▼"})]})]}),F.jsx("div",{className:"phone-dots",children:sl.map((H,Z)=>F.jsx("button",{type:"button",className:`phone-dot ${Z===s?"active":""}`,onClick:()=>M(Z),"aria-label":r.tiktokShowcase.jumpTo(H.id)},H.id))})]})]})}function $C(){const{t:r}=Ta();return be.useEffect(()=>{const e=document.body.classList.contains("dark");return document.body.classList.add("dark"),()=>{e||document.body.classList.remove("dark")}},[]),F.jsxs("div",{className:"old-portfolio",children:[F.jsx("section",{className:"hero",children:F.jsxs("div",{className:"hero-content",children:[F.jsxs("div",{className:"hero-text",children:[F.jsxs("h1",{className:"hero-title",children:[F.jsx(oi,{text:r.hero.titlePrefix})," ",F.jsx("span",{className:"hero-title-highlight",children:F.jsx(oi,{text:"Jason"})})]}),F.jsx("div",{className:"hero-tags",children:r.hero.tags.map(e=>F.jsx("a",{href:`#${e.target}`,className:"hero-tag",onClick:i=>{i.preventDefault(),document.getElementById(e.target)?.scrollIntoView({behavior:"smooth"})},children:e.label},e.target))}),F.jsx("p",{className:"hero-subtitle",children:F.jsx(oi,{text:r.hero.subtitle})})]}),F.jsx("div",{className:"hero-visual",children:F.jsx(VC,{avatarUrl:Bx})})]})}),F.jsx(KC,{}),F.jsx(WC,{}),F.jsx(QC,{})]})}const e3="/JasonBay.dev/assets/Youtube-DcLdsh9q.png",t3="/JasonBay.dev/assets/adessologo2-BkRcKOgx.png",n3="data:image/webp;base64,UklGRooFAABXRUJQVlA4TH0FAAAvKAFKEB8gECAs+A+RZ0MgkESy88ZCAjIlSaYRCBCKRRsRgO6ZLTzJ1h63mbZtp4EWHUFlS0Ng5n3f/avQXWoQOkG6aLCZhSJuDgGTQP+ulIXsiFtDwCQ4hKucwV0XlojzPE7Y7Yj+TwABZmbmlmqY//PXJ3/7jzd3Ot7y5eMvbeXf8+J3X1h6CFyYjt5MDly+svIYWPKzkZ5Fk7eQb1k4rQxMLL7Bewxy/Au4O1ac0X5k1U9gvU7yUN+x8gEpBy12QN+x+sHD5KDHDuZrBjyg5IDAHmTPkO9AeozkIf7AoBuIe5R3CDGg8DXAxLCvAG5xklOLDNyqDUjv1Hqk5JVODN0o7bE6pYDFTiUyeKuyR+tUBrSkERl+pTDhbRQGvKTQ47EXi2ywERstvBK7s5DEggX2Qic22QiNNl4J3dlIQr0N9iKRjTYik5VXIoOVWaS3krxADFa4FTix2UZgb6cTGOzMAsEOu6LMFZksbYpGS13RYCkV9RWJbNrVpC0YbXUF9zUZbKWC3hb7RZGNu5q0i0ZrXa0Ga/Oi3lpaFKyxW5DZ/NWCrb1mwWTv1YJ7e92Cwd68oLeXasL+QuQKupq0F6YaNDV5deG+BusLQ012NUgX+qKjcpBhfyaHkjUp74Tcmchgg9BVTdozU9FsoxFaa+2EujNj0aw1qAx1WAutbcxndkWzjXSmrwP7J6ES7glXJNbiqiYtEW1r0RDRVIuNiZ1UR0Qj3KAxwO2k1jLrmsxGZiLala1rMmv1UuyJ+rK1FUcUXiaRXyJXNWnrssULYg1Nz1lm8a4uI1x8Ju5rMrxI1s/bVm5+3iasuSZJaZRLIvzv/xR6U8VtwfBiuEJhh+Ceoyu8XU36F4MvCKYSVWQuiPxSWNekq9f0QhltbWrSFgwvBleweyYcXK+QvF7yBUGD9GZantnUuiDa6nBmuK2tpmCy1RaMtlzB8Ex0eokKd6ZmqHutriTojFjZVlsQWWfScjXxBZPKK7VEQA1tlbqSQaWl+Hy0Jbua9CpXlJV8QWZVRzmoJCqMWqTTlWzVepVNyaS2U3El9yqJwAa1QWNNpTuVWasr6i21JZlVOyK613AlUW9SmKl0stRhvSKirUJbNOg0RBQVHFarM1Nxr3NFRFnu52VBxxER9WKuKLKd5Iu2Sv7JTqqj4r3OTE8HqaZssJN8Wa/TndkLvSMTk1BbFln3lUZyZVul5kyUeUXle6VW41pgULo6Q0FiJsFeyZ3rJX4ukAPGIJBIMLLuTHKfJCaQ+7LkJQal7sJY9o4kdyDbMieRg1JzIRYdSDKycnshhxInMmq5C1TyE4newwzLkpcJSomEPpFoZuV5wX7RTLKTVrdgXJJ+ITTixCUbEt5pNSKHlVSv1S6g/pIn4cjaTuIzSU9ayS8Zzm1IfNCaaen+zNHJ9VrdounJO5I/sfarRZGZj9cKo1qzKAf+DWneqblF9HD0KgFLeWTtmYD3ah1SUNsAZVZvgPZ6DminloAiq8+EO+l1QHd6DU4Oei3OntWTx9kBEOyJ9TucEWADkwOAg4msnzzMHUBHqDkA/BzmawZsYXoEh7JnwJlQe4QO5ZERW5Q7CAfyyIgzgfYQHciPDLkC6SGSw/iOITuCzAFjAxFvGdNBTIyZPMJjAHlFiHcMeg2QjwyaCPDEqO8AfgwwrV7uGTU5tR9vGbYj9TvGvdYbcBLpf43zCSAHGAdAdygHjxBRWkLMtxjJQdCEsSHMGBDSCoRGhI5QTwHgGob2eh3hnoJWugaiUesVIcdbnbSCopPOhrDztxqHFRjloLAi+Ae5nzweDVIzWfzDtzKHX5igHERWZPTh27LDkczm25L0BRn+8Xi75HD8TLb/GS6l35L5h+NlZw8aAA==",i3="/JasonBay.dev/assets/lebenshilfe.de-removebg-preview-OMT4mOLJ.png",Bv={tiktok:Hx,youtube:e3,instagram:zx};function Fv(r){return r.trim().toLowerCase()}const a3=[["telution",n3],["adesso",t3],["lebenshilfe",i3]];function s3(r){const e=r.toLowerCase();for(const[i,s]of a3)if(e.includes(i))return{logo:s,slug:i};return null}const r3=[[/html/i,"devicon-html5-plain colored"],[/css/i,"devicon-css3-plain colored"],[/typescript/i,"devicon-typescript-plain colored"],[/javascript/i,"devicon-javascript-plain colored"],[/angular/i,"devicon-angularjs-plain colored"],[/tailwind/i,"devicon-tailwindcss-plain colored"],[/react/i,"devicon-react-original colored"],[/vue/i,"devicon-vuejs-plain colored"],[/figma/i,"devicon-figma-plain colored"],[/wordpress/i,"devicon-wordpress-plain colored"],[/spring/i,"devicon-spring-plain colored"],[/php/i,"devicon-php-plain colored"],[/java\b/i,"devicon-java-plain colored"],[/postgres/i,"devicon-postgresql-plain colored"],[/mysql/i,"devicon-mysql-plain colored"],[/mongo/i,"devicon-mongodb-plain colored"],[/docker/i,"devicon-docker-plain colored"],[/\bgit\b/i,"devicon-git-plain colored"],[/jira/i,"devicon-jira-plain colored"],[/confluence/i,"devicon-confluence-plain colored"]];function o3(r){for(const[e,i]of r3)if(e.test(r))return i;return null}const l3={muttersprache:100,native:100,c2:94,c1:82,b2:66,b1:50,a2:34,a1:20};function c3(r){return l3[r.trim().toLowerCase()]??60}function u3(r){const e=r.toLowerCase();return e.startsWith("deutsch")||e.startsWith("german")?"🇩🇪":e.startsWith("englisch")||e.startsWith("english")?"🇬🇧":e.startsWith("franz")||e.startsWith("french")?"🇫🇷":e.startsWith("spanisch")||e.startsWith("spanish")?"🇪🇸":"🌐"}const $o={about:{de:"Über mich",en:"About"},work:{de:"Portfolio",en:"Portfolio"},skills:{de:"Skills",en:"Skills"},experience:{de:"Werdegang",en:"Experience"},gallery:{de:"Galerie",en:"Gallery"},social:{de:"Social Media",en:"Social Media"},languages:{de:"Sprachen",en:"Languages"},contact:{de:"Kontakt",en:"Contact"}},hh={about:{de:"Wer ich bin und wie ich arbeite.",en:"Who I am and how I work."},work:{de:"Meine erste Portfolio-Seite.",en:"My first portfolio site."},skills:{de:"Werkzeuge und Methoden, mit denen ich täglich arbeite.",en:"Tools and methods I work with day to day."},experience:{de:"Stationen von der Ausbildung bis heute.",en:"Stations from apprenticeship to today."},gallery:{de:"Fotografie abseits vom Code · Wandern, Motorrad, Tiere.",en:"Photography beyond the code · hiking, motorcycles, pets."},social:{de:"Instagram, TikTok und YouTube · Konzeption, Schnitt und Gestaltung seit 2020.",en:"Instagram, TikTok and YouTube · concept, editing and design since 2020."},languages:{de:"",en:""},contact:{de:"Schreib mir, ich melde mich zurück.",en:"Drop me a line, I'll get back to you."}};function f3({id:r,onBack:e}){const{t:i,lang:s}=Ta(),l=s==="de",c=be.useRef(null),d=be.useRef(0),h=be.useRef(!1),[m,p]=be.useState(0);be.useEffect(()=>{c.current?.scrollTo({top:0})},[r]),be.useEffect(()=>{const E=c.current;if(!E)return;const T=()=>{h.current||(h.current=!0,E.classList.add("is-leaving"),window.setTimeout(e,420))},M=I=>{if(!h.current){if(E.scrollTop>0){d.current=0,m!==0&&p(0);return}if(I.deltaY<0){d.current+=-I.deltaY;const z=Math.min(1,d.current/320);p(z),d.current>320&&T()}else d.current=0,m!==0&&p(0)}};let x=0;const O=I=>{x=I.touches[0].clientY},U=I=>{if(h.current||E.scrollTop>0)return;const z=I.touches[0].clientY-x;z>0&&(d.current=z,p(Math.min(1,z/200)),z>200&&T())},C=()=>{d.current=0,p(0)};return E.addEventListener("wheel",M,{passive:!0}),E.addEventListener("touchstart",O,{passive:!0}),E.addEventListener("touchmove",U,{passive:!0}),E.addEventListener("touchend",C,{passive:!0}),()=>{E.removeEventListener("wheel",M),E.removeEventListener("touchstart",O),E.removeEventListener("touchmove",U),E.removeEventListener("touchend",C)}},[e,m]);const g=$o[r]?l?$o[r].de:$o[r].en:r,_=hh[r]?l?hh[r].de:hh[r].en:"",v=Object.keys($o).length,y=String(Object.keys($o).indexOf(r)+1).padStart(2,"0")+" / "+String(v).padStart(2,"0");return F.jsxs("div",{className:"section-page",ref:c,style:{transform:m?`translateY(${m*40}px)`:void 0},children:[F.jsx("div",{className:"sp-pull",style:{opacity:m,transform:`scaleX(${.2+m*.8})`},"aria-hidden":"true",children:F.jsx("span",{children:l?"LOSLASSEN FÜR RAUM":"RELEASE FOR SPACE"})}),F.jsxs("div",{className:"sp-topbar",children:[F.jsx("button",{className:"sp-back",onClick:e,children:F.jsx("span",{className:"glow-text",children:l?"↑ ZURÜCK ZUM RAUM":"↑ BACK TO SPACE"})}),F.jsx("span",{className:"sp-num",children:y})]}),F.jsxs("header",{className:"sp-header",children:[F.jsx("h1",{children:g}),_&&F.jsx("p",{className:"sp-intro",children:_})]}),F.jsxs("div",{className:`sp-body ${r==="work"?"sp-body-wide":""}`,children:[r==="gallery"&&F.jsx(HC,{}),r==="social"&&F.jsxs("div",{className:"sp-social",children:[F.jsx(GC,{}),F.jsx("ul",{className:"sp-social-links",children:Nv().filter(E=>["Instagram","TikTok","YouTube"].includes(E.label)).map(E=>F.jsx("li",{children:F.jsxs("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",children:[F.jsx("img",{className:"sp-social-logo",src:Bv[Fv(E.label)],alt:"","aria-hidden":"true",loading:"lazy"}),F.jsx("span",{className:"sp-social-name",children:E.label}),F.jsxs("span",{className:"sp-social-handle",children:[E.handle," ↗"]})]})},E.label))})]}),r==="work"&&F.jsx($C,{}),r==="experience"&&F.jsx("ol",{className:"sp-timeline",children:i.experience.entries.map(E=>{const T=s3(E.org);return F.jsxs("li",{children:[F.jsx("span",{className:`spt-badge${T?" has-logo":""}`,"data-org":T?.slug,"aria-hidden":"true",children:T?F.jsx("img",{src:T.logo,alt:"",loading:"lazy"}):E.org.replace(/[^A-Za-zÄÖÜ]/g,"").slice(0,2).toUpperCase()}),F.jsxs("div",{className:"spt-body",children:[F.jsx("span",{className:"spt-period",children:E.period}),F.jsx("span",{className:"spt-org",children:E.org}),F.jsx("span",{className:"spt-role",children:E.role}),F.jsx("ul",{children:E.bullets.map(M=>F.jsx("li",{children:M},M))})]})]},E.org)})}),r==="skills"&&F.jsx("div",{className:"sp-skills",children:i.skills.groups.map((E,T)=>F.jsxs("div",{className:"skrow",children:[F.jsx("span",{className:"skrow-num",children:String(T+1).padStart(2,"0")}),F.jsx("h3",{className:"skrow-title",children:E.title}),F.jsx("ul",{className:"skrow-tags",children:E.items.split(",").map(M=>{const x=M.trim(),O=Bv[Fv(x)],U=o3(x);return F.jsxs("li",{children:[O?F.jsx("img",{className:"skrow-logo",src:O,alt:"","aria-hidden":"true",loading:"lazy"}):U?F.jsx("i",{className:U,"aria-hidden":"true"}):F.jsx("span",{className:"skrow-mono","aria-hidden":"true",children:x.slice(0,1)}),x]},x)})})]},E.title))}),r==="languages"&&F.jsx("ul",{className:"sp-langs",children:i.skills.languages.map(E=>F.jsxs("li",{children:[F.jsx("span",{className:"sp-lang-flag","aria-hidden":"true",children:u3(E.name)}),F.jsx("span",{className:"sp-lang-name",children:E.name}),F.jsx("span",{className:"sp-lang-level",children:E.level}),F.jsx("span",{className:"sp-lang-bar",children:F.jsx("span",{style:{width:`${c3(E.level)}%`}})})]},E.name))}),r==="about"&&F.jsxs("div",{className:"sp-about",children:[F.jsxs("div",{className:"sp-prose",children:[F.jsx("p",{className:"sp-lead",children:i.about.lead}),F.jsx("p",{children:i.about.body}),F.jsx("p",{children:l?"Vor der Ausbildung ein Freiwilliges Soziales Jahr bei der Lebenshilfe Vaihingen-Mühlacker. Danach die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso, abgeschlossen im Januar 2026 (IHK). Seither Junior Software Engineer bei Telution.":"Before the apprenticeship, a voluntary social year at Lebenshilfe Vaihingen-Mühlacker. Then an apprenticeship as an IT specialist for application development at adesso, completed in January 2026 (IHK). Since then a Junior Software Engineer at Telution."})]}),F.jsxs("figure",{className:"sp-portrait",children:[F.jsx("img",{src:Bx,alt:"Jason Bay"}),F.jsx("figcaption",{children:"Jason Bay · Vaihingen an der Enz"})]})]}),r==="contact"&&F.jsxs("div",{className:"sp-contact",children:[F.jsxs("div",{className:"sp-prose",children:[F.jsx("p",{children:i.contact.intro}),F.jsx("a",{className:"sp-email",href:`mailto:${Uv}`,children:Uv}),F.jsx("ul",{className:"sp-plain",children:Nv().map(E=>F.jsx("li",{children:F.jsxs("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",children:[F.jsx("span",{children:E.label}),F.jsxs("span",{children:[E.handle," ↗"]})]})},E.label))})]}),F.jsxs("form",{className:"sp-form",action:"https://formspree.io/f/mreakbje",method:"POST",children:[F.jsxs("label",{children:[F.jsx("span",{children:"Name"}),F.jsx("input",{name:"name",type:"text",placeholder:i.contact.namePlaceholder,required:!0})]}),F.jsxs("label",{children:[F.jsx("span",{children:l?"E-Mail":"Email"}),F.jsx("input",{name:"email",type:"email",placeholder:i.contact.emailPlaceholder,required:!0})]}),F.jsxs("label",{children:[F.jsx("span",{children:l?"Nachricht":"Message"}),F.jsx("textarea",{name:"message",rows:5,placeholder:i.contact.messagePlaceholder,required:!0})]}),F.jsx("button",{type:"submit",children:i.contact.submit})]})]})]})]})}const el=["main","about"];function d3(){const{lang:r,setLang:e}=Ta(),[i,s]=be.useState("main"),[l,c]=be.useState(null),[d,h]=be.useState(!1),[m,p]=be.useState(!1),g=be.useRef({x:0,y:0}),_=be.useRef({x:0,y:0}),v=be.useRef({x:0,y:0}),y=be.useRef(1),E=be.useRef(null),T=be.useRef(new Map),M=be.useRef(0),x=be.useRef(0),O=be.useMemo(()=>qw(),[r]),U=be.useMemo(()=>Kw(r),[r]),C=be.useMemo(()=>Yw(),[r]),I=be.useMemo(()=>i==="main"?O.map((L,G)=>({id:`kw-${G}`,strong:L.strong,position:[Math.cos(L.angle)*L.radius,Math.sin(L.angle)*L.radius*.78,L.depth]})):i==="about"?U.map(L=>({id:L.id,position:L.position})):[],[i,O,U]),z=be.useCallback(()=>{p(!0),window.clearTimeout(x.current),x.current=window.setTimeout(()=>p(!1),460)},[]),B=be.useCallback(L=>{s(G=>(G!==L&&z(),L)),c(null)},[z]),K=be.useCallback(L=>{s(G=>{const J=el.indexOf(G),ve=el[Math.min(el.length-1,Math.max(0,J+L))];return ve!==G&&z(),ve})},[z]);be.useEffect(()=>{i!=="about"&&(_.current={x:0,y:0},v.current={x:0,y:0},y.current=1)},[i]),be.useEffect(()=>()=>window.clearTimeout(x.current),[]);const w=be.useCallback(()=>{if(d)try{const L=window.AudioContext||window.webkitAudioContext,G=new L,J=G.createOscillator(),ve=G.createGain();J.type="sine",J.frequency.value=520,ve.gain.value=.04,J.connect(ve).connect(G.destination),J.start(),ve.gain.exponentialRampToValueAtTime(1e-4,G.currentTime+.14),J.stop(G.currentTime+.16),J.onended=()=>G.close()}catch{}},[d]),D=be.useCallback(L=>{w(),c(L)},[w]);be.useEffect(()=>{const L=G=>{g.current={x:G.clientX/window.innerWidth*2-1,y:G.clientY/window.innerHeight*2-1}};return window.addEventListener("pointermove",L),()=>window.removeEventListener("pointermove",L)},[]),be.useEffect(()=>{const L=G=>{if(l)return;if(i==="about"){const ve=G.deltaY>0?1:-1,ye=y.current+ve*.09;if(ye>1.8){const P=performance.now();P-M.current>800&&(M.current=P,y.current=1,K(-1));return}y.current=$c(ye,.5,1.8);return}const J=performance.now();J-M.current<900||Math.abs(G.deltaY)<24||(M.current=J,K(G.deltaY>0?1:-1))};return window.addEventListener("wheel",L,{passive:!0}),()=>window.removeEventListener("wheel",L)},[l,i,K]),be.useEffect(()=>{const L=G=>{G.key==="Escape"&&l&&c(null)};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[l]);const H=mE({onDrag:({movement:[L,G],first:J,last:ve,pinching:ye})=>{if(l||ye)return;J&&(v.current={..._.current});const P=i==="about";let ne=v.current.x+L*(P?.008:.005);const ge=$c(v.current.y-G*.004,-.85,.85);P||(ne=$c(ne,-.7,.7)),_.current={x:ne,y:ge},ve&&!P&&(_.current={x:0,y:0})},onPinch:({offset:[L]})=>{l||i!=="about"||(y.current=$c(1/L,.5,1.8))}},{drag:{filterTaps:!0},pinch:{scaleBounds:{min:.55,max:2}}}),Z=r==="de",ie=l||i==="main"?"light":"dark",de="Frontend Developer · Vaihingen an der Enz",ue=i==="main"?Z?"SCROLLEN ZU ÜBER MICH ↓":"SCROLL TO ABOUT ↓":Z?"SCROLLEN ODER ZIEHEN · KNOTEN ANKLICKEN":"SCROLL OR DRAG · CLICK A NODE";return F.jsxs("div",{className:"experience-root","data-scene":i,"data-surface":ie,children:[F.jsx(jw,{}),F.jsxs("div",{className:`experience scene-${i} ${l?"is-dived":""} ${m?"is-warping":""}`,...H(),children:[F.jsx(Xw,{scene:i,anchors:I,pointerRef:g,dragRef:_,zoomRef:y,hoverRef:E,labelEls:T}),i==="main"&&F.jsxs("button",{className:"identity","data-hover":!0,onClick:()=>{w(),B("about")},"aria-label":Z?"Weiter zu Über mich":"Continue to About",children:[F.jsx("span",{className:"identity-name",children:C.name}),F.jsx("span",{className:"identity-node","aria-hidden":"true"})]}),F.jsxs("div",{className:"label-layer",children:[i==="main"&&O.map((L,G)=>F.jsx("span",{ref:J=>{T.current.set(`kw-${G}`,J)},className:`kw-label ${L.strong?"strong":"faint"}`,onMouseEnter:()=>{E.current=`kw-${G}`},onMouseLeave:()=>{E.current=null},children:F.jsx("span",{className:"glow-text",children:L.label})},`kw-${G}`)),i==="about"&&U.map(L=>F.jsx("button",{ref:G=>{T.current.set(L.id,G)},className:"section-label",style:{fontSize:`${.72+L.scale*.5}rem`},onClick:()=>D(L.id),onMouseEnter:()=>{E.current=L.id},onMouseLeave:()=>{E.current=null},children:F.jsx("span",{className:"glow-text",children:L.label})},L.id))]}),F.jsxs("header",{className:"chrome-top",children:[F.jsx("button",{className:"wordmark",onClick:()=>B("main"),children:F.jsx("span",{className:"glow-text",children:"JASON BAY"})}),F.jsxs("nav",{className:"chrome-nav",children:[F.jsx("button",{className:i==="about"&&!l?"active":"",onClick:()=>{w(),B("about")},children:F.jsx("span",{className:"glow-text",children:Z?"ÜBER MICH":"ABOUT ME"})}),F.jsx("button",{className:l==="work"?"active":"",onClick:()=>D("work"),children:F.jsx("span",{className:"glow-text",children:"PORTFOLIO"})})]})]}),F.jsxs("div",{className:"chrome-bottom",children:[F.jsx("span",{className:"role-line",children:de}),F.jsx("span",{className:"hint-line",children:ue}),F.jsxs("span",{className:"scene-index",children:[String(el.indexOf(i)+1).padStart(2,"0")," / 0",el.length]})]})]}),F.jsxs("div",{className:"global-meta",children:[F.jsx("button",{className:l==="contact"?"active":"",onClick:()=>D("contact"),children:F.jsx("span",{className:"glow-text",children:Z?"KONTAKT":"CONTACT"})}),F.jsxs("span",{className:"lang-switch",children:[F.jsx("button",{className:Z?"active":"",onClick:()=>e("de"),children:"DE"}),F.jsx("span",{children:"/"}),F.jsx("button",{className:Z?"":"active",onClick:()=>e("en"),children:"EN"})]}),F.jsxs("button",{className:"sound-toggle",onClick:()=>h(L=>!L),children:["SOUND ",d?"ON":"OFF"]})]}),l&&F.jsx(f3,{id:l,onBack:()=>c(null)})]})}function $c(r,e,i){return Math.min(i,Math.max(e,r))}function h3(){return F.jsx(nM,{children:F.jsx(d3,{})})}eM.createRoot(document.getElementById("root")).render(F.jsx(be.StrictMode,{children:F.jsx(h3,{})}));
