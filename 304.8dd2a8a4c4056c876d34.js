"use strict";(self.webpackChunkreact_logs_recorder=self.webpackChunkreact_logs_recorder||[]).push([[304],{304:(e,t,r)=>{r.r(t),r.d(t,{default:()=>X});var a=r(893),n=r(294);const s={label:"mKFUOiLG"};var c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},o=function(e){var t=e.setResults,r=(0,n.useState)(""),s=r[0],o=r[1];return(0,a.jsx)("div",c({className:"bTzPKTvt"},{children:(0,a.jsx)("input",{placeholder:"Введите первые 2 символа",value:s,onChange:function(e){return r=e.target.value,o(r),void function(e){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(r){var a=r.filter((function(t){return e&&t&&t.name&&t.name.toLowerCase().includes(e)}));t(a)}))}(r);var r}})}))};var i=function(){return i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)},l=function(e){var t=e.result,r=e.addNewCommands;return(0,a.jsx)("button",i({type:"button",className:"vLnrXyGo",onClick:function(){return r(t)}},{children:t}))},d=function(){return d=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},d.apply(this,arguments)},u=function(e){var t=e.results,r=e.addNewCommands;return(0,a.jsx)("div",d({className:"f2VEwxbh"},{children:t.map((function(e,t){return(0,a.jsx)(l,{result:e.name,addNewCommands:r},t)}))}))},p=function(){return p=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},p.apply(this,arguments)},m=function(e){var t=e.addNewCommands,r=(0,n.useState)([]),c=r[0],i=r[1];return(0,a.jsxs)("div",p({className:s.searchBarWrapper},{children:[(0,a.jsx)("p",p({className:s.label},{children:"Выберите команду"})),(0,a.jsx)(o,{setResults:i}),c&&c.length>0&&(0,a.jsx)(u,{addNewCommands:t,results:c})]}))};const h="cgZovlEc",f="Tgw9DkOa";var v=function(){return v=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},v.apply(this,arguments)},x=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,s=t.length;n<s;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},j=function(e){var t=e.register,r=(e.control,e.setValue),s=(0,n.useState)([]),c=s[0],o=s[1];return(0,a.jsxs)("div",v({className:"azGyDxQS"},{children:[(0,a.jsx)("p",v({className:h},{children:"Команда в приложении"})),(0,a.jsx)("div",v({className:f},{children:(0,a.jsx)(m,{addNewCommands:function(e){o(x(x([],c,!0),[e],!1)),r("name",x(x([],c,!0),[e],!1))}})})),(0,a.jsxs)("div",v({className:f},{children:[(0,a.jsx)("p",v({className:h},{children:"Выбранные команды:"})),(0,a.jsx)("p",v({},t("name"),{className:"PdTctFXS"},{children:c.map((function(e,t){return(0,a.jsx)("strong",{children:e},t)}))}))]}))]}))},g=r(536),b=r(59);const y={selectApp:"gPjL8n_X",selectAppLabel:"Pg9SfNS2",innerSelectLabel:"PHY7_D5Y"};var k=function(){return k=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},k.apply(this,arguments)},N=function(e){e.register;var t=e.control,r=(0,n.useState)([{value:"wms-kld",label:"wms-kld"},{value:"wms-ktl",label:"wms-ktl"},{value:"wms-vnk",label:"wms-vnk"},{value:"KAK2C_ALL_APPS",label:"Кактус - все инстансы"},{value:"PODRYGKA_ADAPTER_ALL_APPS",label:"Подружка адаптер - все инстансы"},{value:"WMS_ALL_APPS",label:"WMS - все инстансы"}]),s=r[0];return r[1],(0,a.jsxs)("div",k({className:y.selectApp},{children:[(0,a.jsx)("p",k({className:y.selectAppLabel},{children:"Приложение - источник обмена"})),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",k({className:y.innerSelectLabel},{children:"Выберите приложение"})),(0,a.jsx)(g.Qr,{control:t,name:"appName",render:function(e){var t=e.field;return(0,a.jsx)(b.ZP,{classNamePrefix:"react-select",className:y.select,options:s,placeholder:"Выберите",onChange:function(e){return t.onChange(e)},value:t.value})}})]})]}))};var _=function(){return _=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},_.apply(this,arguments)},O=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,s=t.length;n<s;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const T=function(e){var t=e.values,r=e.onChange,s=(e.color,e.name),c=(0,n.useState)(""),o=c[0],i=c[1],l=(0,n.useState)(t),d=l[0],u=l[1];return(0,a.jsxs)("div",_({className:"twVh0qAa"},{children:[d.map((function(e,t){return(0,a.jsxs)("div",_({className:"enIrpdH9"},{children:[(0,a.jsx)("span",_({className:"Wh_kJyi3"},{children:e})),(0,a.jsx)("button",_({className:"jPVGUoMv",type:"button",onClick:function(){return function(e){u((function(t){var a=t.filter((function(t,r){return r!==e}));return r(s,a),a}))}(t)}},{children:"×"}))]}),t)})),(0,a.jsx)("input",{value:o,onChange:function(e){var t=e.target.value;i(t)},className:"cc8jH3e3",onKeyDown:function(e){var t=e.key,a=o.trim();if(","!==t&&"Enter"!==t&&" "!==t||!a.length||d.includes(a)){if("Backspace"===t&&!a.length&&d.length){e.preventDefault();var n=O([],d,!0),c=n.pop();u(n),r(s,n),i(c)}}else e.preventDefault(),u((function(e){var t=O(O([],e,!0),[a],!1);return r(s,t),t})),i("")}})]}))},C={label:"uTqx2Gq3"};var w=function(){return w=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},w.apply(this,arguments)},P=function(e){var t=e.handleChange,r=e.label,n=(e.value,e.id);return(0,a.jsxs)("div",w({className:C.otherParams__row},{children:[(0,a.jsx)("p",w({className:C.label},{children:r})),(0,a.jsx)(T,{values:[],onChange:t,name:n})]}))};var I=function(){return I=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},I.apply(this,arguments)},A=function(e){e.register,e.control;var t=e.setValue,r=function(e,r){t(e,r)};return(0,a.jsxs)("div",I({className:"wVrG9SsD"},{children:[(0,a.jsx)("p",{children:"Другие параметры поиска"}),(0,a.jsxs)("div",I({className:"NTw1YYgZ"},{children:[(0,a.jsx)(P,{handleChange:r,label:"ID сущностей",id:"externalTrackingId"}),(0,a.jsx)(P,{handleChange:r,label:"Запрос содержит",id:"requestContains"}),(0,a.jsx)(P,{handleChange:r,label:"Ответ содержит",id:"responseContains"})]}))]}))};const D={longDataWrapper:"wc7G_ey1",buttonWrapper:"mKwM5nO0",longData:"R8vPxYzx",btn:"kqjQnPDi"};var S=function(){return S=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},S.apply(this,arguments)},q=function(e){var t=e.title,r=e.copyCode,s=e.data,c=(0,n.useRef)(),o=(0,n.useState)(!1),i=o[0],l=o[1];return(0,a.jsxs)("div",S({className:D.longDataWrapper},{children:[(0,a.jsxs)("div",S({className:D.content},{children:[(0,a.jsxs)("strong",{children:[t,":"]}),(0,a.jsx)("span",S({ref:c,className:i?"":D.longData},{children:s}))]})),(0,a.jsxs)("div",S({className:D.buttonWrapper},{children:[(0,a.jsx)("button",S({className:D.btn,type:"button",onClick:function(e){return l(!i)}},{children:i?"Свернуть":"Раскрыть"})),(0,a.jsx)("button",S({className:D.btn,type:"button",onClick:function(){return r(c)}},{children:"Копировать"}))]}))]}))};const z={row:"Ujt4IRar",dropdownButton:"zhS1YLPn"};var U=function(){return U=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},U.apply(this,arguments)};const V=function(e){var t=e.item,r=(0,n.useState)(!1),s=r[0],c=r[1],o=((0,n.useRef)(),(0,n.useRef)(),function(e){e.current&&navigator.clipboard.writeText(e.current.innerHTML).catch((function(e){console.log(e.message)}))});return(0,a.jsxs)("div",U({className:z.row},{children:[(0,a.jsx)("button",U({className:z.dropdownButton,type:"button",onClick:function(){return c((function(e){return!e}))}},{children:t.id})),s&&(0,a.jsxs)("div",U({className:z.hiddenContent},{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"appName:"})," ",t.appName]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"appUserName:"})," ",t.appUserName]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"name:"})," ",t.name]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"externalDate:"})," ",t.externalDate]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"externalId:"})," ",t.externalId]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"externalTrackingId:"})," ",t.externalTrackingId]}),(0,a.jsx)(q,{title:"request",copyCode:o,data:t.request}),(0,a.jsx)(q,{title:"response",copyCode:o,data:t.response}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"duration:"})," ",t.duration]})]}))]}),t.id)};var L=function(){return L=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},L.apply(this,arguments)},R=function(e){var t=e.table;return(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"Результаты поиска:"}),(0,a.jsx)("div",L({className:"TPnQopZI"},{children:t.exchanges.map((function(e){return(0,a.jsx)(V,{item:e})}))}))]})},B={success:!0,errorList:[],recordsTotal:6,exchanges:[{id:"f19a68c5-a023-3431-21da-a46a2c9f3b72",appName:"kak2c-core-routine",appUserName:"sreztsov@samokat.ru",name:"wms_/order",externalDate:"2024-06-26T13:02:17.795",externalId:"",externalTrackingId:"9696656179893",request:'POST https://wms-prod-vnk.kak2c.ru/merchant-api/orderContent-Type: application/jsonAuthorization: Bearer bA3xmAQhwcq4{"ad_attachments":[],"custom_data":"{\\"dlv_custom_data\\":\\"{\\\\\\"deliveryId\\\\\\":\\\\\\"9696647056521\\\\\\",\\\\\\"address\\\\\\":\\\\\\"Красноярск, улица Апрельская, 5и, кв. 246\\\\\\",\\\\\\"MMOrderType\\\\\\":\\\\\\"Darkstore\\\\\\",\\\\\\"merchantId\\\\\\":\\\\\\"101501\\\\\\",\\\\\\"warehouseId\\\\\\":\\\\\\"CACTUS_1\\\\\\",\\\\\\"merchantName\\\\\\":\\\\\\"Общество с ограниченной ответственностью \\\\\\\\\\\\\\"УМНЫЙ РИТЕЙЛ\\\\\\\\\\\\\\"\\\\\\"}\\"}","date":"2024-06-26T16:02:15.694000","delivery":{"address":{"block":"","building":"","city":"Красноярск","city_fias":"9b968c73-f4d4-4012-8da8-3dacd4d4c1bd","country":"RU","flat":"246","full_address":"Красноярск, улица Апрельская, 5и, кв. 246","house":"5и","region":"Красноярский","region_fias":"db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1","street":"ул Апрельская","zip":"660050"},"contract_code":"CSE_DARKSTORE","delivery_date_plan":"2024-07-03","delivery_services":[],"delivery_time_plan_from":"09:00:00.000000","delivery_time_plan_to":"18:00:00.000000","price_data":{"currency":"RUB","price":0.00,"vat":"NO_VAT"}},"external_id":"9696656179893","files":[],"items":[{"customData":"{\\"marketplace_sku_id\\":\\"1\\"}","insurance":1081.00,"price_data":{"currency":"RUB","price":1081.00,"vat":"VAT_20"},"quantity":1,"sku_human_id":"00-000000043260"}],"packing_type":"MIX_PACKINGS","payment_type":"ONLINE","receiver":{"name":"Даркстор Самокат","phone":"+78005050015"},"shipping_date_plan":"2024-06-26T16:02:15.818000","sku_condition":"GOOD","type":"B2C"}',response:'{"dlv_id":"03ca31da-8e46-4c49-9a99-138793a72d27","errors":[],"id":"O-AED-9696656179893","success":true}',duration:552},{id:"4f0cb3aa-1a67-c386-c773-4f85c0ea4da5",appName:"kak2c-core-routine",appUserName:"sreztsov@samokat.ru",name:"mm_/mcssCore/order/confirm",externalDate:"2024-06-26T13:03:18.213",externalId:"",externalTrackingId:"9696656179893",request:'POST https://apint.megamarket.tech/api/market/v1/mcssCore/order/confirmContent-Type: application/jsonAuthorization: Basic dGVtcG9saW5lOlB1cXVpZXF1dThwZWlo{"data":{"shipments":[{"items":[{"itemIndex":1,"offerId":"00-000000043260"}],"orderCode":"9696656179893","shipmentId":"9696656179893"}]},"meta":{"_source":"kaktus-service"}}',response:'{"success":1,"meta":{"_requestId":"cpu135j59fm9us9hl5qg"},"data":{}}',duration:39},{id:"886cfabf-be4d-dcdd-264e-d00d023f8abd",appName:"kak2c-core-routine",appUserName:"sreztsov@samokat.ru",name:"mm_/mcssCore/order/packing",externalDate:"2024-06-26T13:56:39.460",externalId:"",externalTrackingId:"9696656179893",request:'POST https://apint.megamarket.tech/api/market/v1/mcssCore/order/packingContent-Type: application/jsonAuthorization: Basic dGVtcG9saW5lOlB1cXVpZXF1dThwZWlo{"data":{"finalize":1,"shipments":[{"items":[{"boxes":[{"boxCode":"125201000000010969","boxIndex":1,"params":[{"isKgt":false}]}],"itemIndex":1,"quantity":1}],"orderCode":"9696656179893","shipmentId":"9696656179893"}]},"meta":{"_source":"kaktus-service"}}',response:'{"success":1,"meta":{"_requestId":"cpu1s5rsr8lpjsqbf640"},"data":{}}',duration:65},{id:"359a6fe7-c000-abd7-0aa3-69d0d6185b04",appName:"kak2c-core-routine",appUserName:"sreztsov@samokat.ru",name:"mm_/mcssCore/order/shipping",externalDate:"2024-06-26T17:32:27.897",externalId:"",externalTrackingId:"9696656179893",request:'POST https://apint.megamarket.tech/api/market/v1/mcssCore/order/shippingContent-Type: application/jsonAuthorization: Basic dGVtcG9saW5lOlB1cXVpZXF1dThwZWlo{"data":{"shipments":[{"boxes":[{"boxCode":"125201000000010969","boxIndex":1}],"shipmentId":"9696656179893","shipping":{"shippingDate":"2024-06-26T20:32:03+03:00"}}]},"meta":{"_source":"kaktus-service"}}',response:'{"success":1,"meta":{"_requestId":"cpu51ar59fm9us9iccog"},"data":{}}',duration:40},{id:"ba79c6e8-d550-8458-5c1e-4764374e571c",appName:"kak2c-core-routine",appUserName:"sreztsov@samokat.ru",name:"mm_/tc/v1/tracking",externalDate:"2024-06-27T02:51:46.089",externalId:"",externalTrackingId:"9696656179893",request:'POST https://csm.sblogistica.ru/tc/v1/trackingContent-Type: application/jsonX-AUTH-TOKEN: jDk4q1rzxigxDmopDRAJMbYivOoXFzTm{"eventTime":"2024-06-27T05:50:23+03:00","sla":0,"statusCode":"on_delivery","trackingNumber":"efec2cf7-4339-8db2-651a-6a1c360d8bc7"}',response:'{"statusCode":200}',duration:57},{id:"b7700d26-3938-0da3-73f6-326d20be1dda",appName:"kak2c-core-routine",appUserName:"sreztsov@samokat.ru",name:"mm_/tc/v1/tracking",externalDate:"2024-07-03T06:44:36.695",externalId:"",externalTrackingId:"9696656179893",request:'POST https://csm.sblogistica.ru/tc/v1/trackingContent-Type: application/jsonX-AUTH-TOKEN: jDk4q1rzxigxDmopDRAJMbYivOoXFzTm{"eventTime":"2024-07-03T09:44:03+03:00","sla":0,"statusCode":"delivered","trackingNumber":"efec2cf7-4339-8db2-651a-6a1c360d8bc7"}',response:'{"statusCode":200}',duration:283}]};const G={main:"BNwRZWMg",main__title:"Vyd1ilb4",btn:"qKsUrROH",header:"pmQbvmBx"};var W=function(){return W=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},W.apply(this,arguments)};const X=function(){var e=(0,g.cI)({defaultValues:{appName:"",appUserName:"sreztsov@samokat.ru",name:[],externalTrackingId:[],dateFrom:"",dateTo:"",requestContains:[],responseContains:[]}}),t=e.control,r=e.register,n=e.handleSubmit,s=e.setValue;return(0,a.jsx)("form",W({onSubmit:n((function(e){return console.log(e)}))},{children:(0,a.jsxs)("div",W({className:G.main},{children:[(0,a.jsxs)("header",W({className:G.header},{children:[(0,a.jsx)("h1",W({className:G.main__title},{children:"Поиск логов обмена"})),(0,a.jsxs)("p",W({className:G.selectApp__accountName},{children:["Аккаунт - ",(0,a.jsx)("strong",{children:"Тестовое имя"})]}))]})),(0,a.jsx)(N,{register:r,control:t}),(0,a.jsx)(j,{register:r,control:t,setValue:s}),(0,a.jsx)(A,{register:r,control:t,setValue:s}),(0,a.jsx)("input",{type:"submit",value:"Поиск",className:G.btn}),(0,a.jsx)(R,{table:B})]}))}))}}}]);