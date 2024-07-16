"use strict";(self.webpackChunkreact_logs_recorder=self.webpackChunkreact_logs_recorder||[]).push([[130],{130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ne});var r=n(893),o=n(478);var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};const i=function(e){var t=e.id,n=e.type,o=void 0===n?"text":n,i=e.handleChange,s=e.label,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["id","type","handleChange","label"]);return(0,r.jsxs)("div",a({className:"xT2NRf7n"},{children:[s&&(0,r.jsx)("label",a({htmlFor:t},{children:s})),(0,r.jsx)("input",a({type:o,onChange:i},c))]}))};var s=n(294);const c="mOF9odjd",u=e=>"number"==typeof e&&!isNaN(e),l=e=>"string"==typeof e,d=e=>"function"==typeof e,f=e=>(0,s.isValidElement)(e)||l(e)||d(e)||u(e);function p(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:a=300}=e;return function(e){let{children:i,position:c,preventExitTransition:u,done:l,nodeRef:d,isIn:f,playToast:p}=e;const h=r?`${t}--${c}`:t,y=r?`${n}--${c}`:n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((()=>{const e=d.current,t=h.split(" "),n=r=>{r.target===d.current&&(p(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,s.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),o?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,a):l()};f||(u?t():(g.current=1,e.className+=` ${y}`,e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,i)}}const h=new Map;let y=[];const g=new Set,v=()=>h.size>0;function b(e,t){h.forEach((n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}let m=1;const w=()=>""+m++;function O(e){return e&&(l(e.toastId)||u(e.toastId))?e.toastId:w()}function j(e,t){return function(e,t){f(e)&&(v()||y.push({content:e,options:t}),h.forEach((n=>{n.buildToast(e,t)})))}(e,t),t.toastId}function E(e,t){return{...t,type:t&&t.type||e,toastId:O(t)}}function x(e){return(t,n)=>j(t,E(e,n))}function I(e,t){return j(e,E("default",t))}I.loading=(e,t)=>j(e,E("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),I.promise=function(e,t,n){let r,{pending:o,error:a,success:i}=t;o&&(r=l(o)?I.loading(o,n):I.loading(o.render,{...n,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(e,t,o)=>{if(null==t)return void I.dismiss(r);const a={type:e,...s,...n,data:o},i=l(t)?{render:t}:t;return r?I.update(r,{...a,...i}):I(i.render,{...a,...i}),o},u=d(e)?e():e;return u.then((e=>c("success",i,e))).catch((e=>c("error",a,e))),u},I.success=x("success"),I.info=x("info"),I.error=x("error"),I.warning=x("warning"),I.warn=I.warning,I.dark=(e,t)=>j(e,E("default",{theme:"dark",...t})),I.dismiss=function(e){!function(e){var t;if(v()){if(null==e||l(t=e)||u(t))h.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){const t=h.get(e.containerId);t?t.removeToast(e.id):h.forEach((t=>{t.removeToast(e.id)}))}}else y=y.filter((t=>null!=e&&t.options.toastId!==e))}(e)},I.clearWaitingQueue=function(e){void 0===e&&(e={}),h.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},I.isActive=function(e,t){var n;if(t)return!(null==(n=h.get(t))||!n.isToastActive(e));let r=!1;return h.forEach((t=>{t.isToastActive(e)&&(r=!0)})),r},I.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:r}=t;return null==(n=h.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:r,content:o}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:w()};a.toastId!==e&&(a.staleId=e);const i=a.render||o;delete a.render,j(i,a)}},I.done=e=>{I.update(e,{progress:1})},I.onChange=function(e){return g.add(e),()=>{g.delete(e)}},I.play=e=>b(!0,e),I.pause=e=>b(!1,e),"undefined"!=typeof window?s.useLayoutEffect:s.useEffect;const A=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}};p(A("bounce",!0)),p(A("slide",!0)),p(A("zoom")),p(A("flip"));var k,P=n(168),S=(0,P.oM)({name:"core",initialState:{isAuthorized:!1,base64encodedAuthData:"",loading:!1},reducers:{signIn:function(e,t){},setAuthorized:function(e,t){e.isAuthorized=t.payload},setBase64encodedAuthData:function(e,t){e.base64encodedAuthData=t.payload},setLoading:function(e,t){e.loading=t.payload}}}),T=((k=S.actions).signIn,k.setAuthorized,k.setBase64encodedAuthData);k.setLoading,S.actions;var L=n(890),C="persist/FLUSH",N="persist/REHYDRATE",D="persist/PAUSE",R="persist/PERSIST",$="persist/PURGE",_="persist/REGISTER";function z(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G={registry:[],bootstrapped:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return B({},e,{registry:[].concat(z(e.registry),[t.key])});case N:var n=e.registry.indexOf(t.key),r=z(e.registry);return r.splice(n,1),B({},e,{registry:r,bootstrapped:0===r.length});default:return e}},U=n(704);const Q=(0,L.UY)({core:S});var q,W,Y,K,V,J,X=(q=(0,P.xC)({reducer:Q,middleware:function(e){return function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([],e({serializableCheck:{ignoredActions:[C,N,D,R,$,_]},thunk:!1}),!0)}}),W=!1,Y=(0,L.MT)(M,G,void 0),K=function(e){Y.dispatch({type:_,key:e})},V=function(e,t,n){var r={type:N,payload:t,err:n,key:e};q.dispatch(r),Y.dispatch(r),W&&J.getState().bootstrapped&&(W(),W=!1)},(J=B({},Y,{purge:function(){var e=[];return q.dispatch({type:$,result:function(t){e.push(t)}}),Promise.all(e)},flush:function(){var e=[];return q.dispatch({type:C,result:function(t){e.push(t)}}),Promise.all(e)},pause:function(){q.dispatch({type:D})},persist:function(){q.dispatch({type:R,register:K,rehydrate:V})}})).persist(),function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))});const Z=function(){var e=(0,U.I0)();return function(t,n){return X(void 0,void 0,void 0,(function(){var r,o,a;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(i){switch(i.label){case 0:r=btoa("".concat(t,":").concat(n)),i.label=1;case 1:return i.trys.push([1,6,,7]),[4,fetch("".concat("https://traffic-logs-api.kak2c.ru/api/v2/exchange","/apps"),{headers:{Authorization:"Basic ".concat(r)}})];case 2:return o=i.sent(),e(T(r)),o.ok?[4,o.json()]:[3,4];case 3:return(a=i.sent()).success&&console.log(a),[3,5];case 4:throw new Error("Ошибка авторизации");case 5:return[3,7];case 6:return i.sent(),I.error("Ошибка авторизации"),[3,7];case 7:return[2]}}))}))}};var ee=function(){return ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ee.apply(this,arguments)},te=function(){var e=(0,s.useState)(""),t=e[0],n=e[1],o=(0,s.useState)(""),a=o[0],u=o[1],l=(0,s.useState)(!1),d=l[0],f=l[1],p=Z();return(0,r.jsx)("div",ee({className:"hGs8TSwS"},{children:(0,r.jsxs)("div",ee({className:"LIWfSKyy"},{children:[(0,r.jsx)("h3",{children:"Войти"}),(0,r.jsxs)("div",ee({className:"gxB_gbHF"},{children:[(0,r.jsx)(i,{className:c,label:"Логин",type:"email",value:t,handleChange:function(e){return n(e.target.value)}}),(0,r.jsx)(i,{className:c,label:"Пароль",type:"password",value:a,handleChange:function(e){return u(e.target.value)}})]})),(0,r.jsx)("button",ee({className:"Mj3sQR40",onClick:function(){f(!0),p(t,a),f(!1)},disabled:!t&&!a||d,type:"button"},{children:"Войти"}))]}))}))};const ne=function(){return(0,o.$)("main").t,(0,r.jsx)(te,{})}}}]);