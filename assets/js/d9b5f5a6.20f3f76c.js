"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43681],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(39960),a=n(44256),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var c=function(){var e=o.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(c,null),o.createElement(u,null))},m=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(u,null))};const p=function(){return(0,a.fbContent)({internal:o.createElement(s,null),external:o.createElement(m,null)})}},27210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(68629),l=(n(44256),["components"]),c={id:"load-query",title:"loadQuery",slug:"/api-reference/load-query/"},d=void 0,u={unversionedId:"api-reference/hooks/load-query",id:"version-v11.0.0/api-reference/hooks/load-query",title:"loadQuery",description:"loadQuery",source:"@site/versioned_docs/version-v11.0.0/api-reference/hooks/load-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/load-query/",permalink:"/docs/v11.0.0/api-reference/load-query/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/hooks/load-query.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Anton Kastritskiy",lastUpdatedAt:1657634987,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"load-query",title:"loadQuery",slug:"/api-reference/load-query/"},sidebar:"version-v11.0.0/docs",previous:{title:"useQueryLoader",permalink:"/docs/v11.0.0/api-reference/use-query-loader/"},next:{title:"useLazyLoadQuery",permalink:"/docs/v11.0.0/api-reference/use-lazy-load-query/"}},s={},m=[{value:"<code>loadQuery</code>",id:"loadquery",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Behavior",id:"behavior",level:3}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"loadquery"},(0,o.mdx)("inlineCode",{parentName:"h2"},"loadQuery")),(0,o.mdx)("p",null,"This function is designed to be used with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery()"),' hook to implement the "render-as-you-fetch".'),(0,o.mdx)("p",null,"Query references returned from ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadQuery")," will leak data into the Relay store if ",(0,o.mdx)("inlineCode",{parentName:"p"},".dispose()")," is not called on them once they are no longer referenced. As such, prefer calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"useQueryLoader")," when possible, which ensures that query references are disposed for you."),(0,o.mdx)("p",null,"See the ",(0,o.mdx)("a",{parentName:"p",href:"../use-preloaded-query"},(0,o.mdx)("inlineCode",{parentName:"a"},"usePreloadedQuery"))," docs for a more complete example."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const MyEnvironment = require('MyEnvironment');\nconst {loadQuery} = require('react-relay');\n\nconst query = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\n// Note: you should generally not call loadQuery at the top level.\n// Instead, it should be called in response to an event (such a route navigation,\n// click, etc.).\nconst queryReference = loadQuery(\n  MyEnvironment,\n  query,\n  {id: '4'},\n  {fetchPolicy: 'store-or-network'},\n);\n\n// later: pass queryReference to usePreloadedQuery()\n// Note that query reference should have .dispose() called on them,\n// which is missing in this example.\n")),(0,o.mdx)("h3",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environment"),": A Relay Environment instance on which to execute the request. If you're starting this request somewhere within a React component, you probably want to use the environment you obtain from using ",(0,o.mdx)("a",{parentName:"li",href:"#userelayenvironment"},(0,o.mdx)("inlineCode",{parentName:"a"},"useRelayEnvironment")),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query to fetch, specified using a ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal, or a preloadable concrete request, which can be acquired by requiring the file ",(0,o.mdx)("inlineCode",{parentName:"li"},"<name-of-query>$Parameters.graphql"),". Relay will only generate the ",(0,o.mdx)("inlineCode",{parentName:"li"},"$Parameters")," file if the query is annotated with ",(0,o.mdx)("inlineCode",{parentName:"li"},"@preloadable"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and whether to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies"},"Fetch Policies")," and ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/availability-of-data"},"Garbage Collection")," guides):",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,o.mdx)("strong",{parentName:"li"},"(default)")," ",(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,o.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",(0,o.mdx)("em",{parentName:"li"},"not")," be made."),(0,o.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,o.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),(0,o.mdx)("li",{parentName:"ul"},'"network-only": ',(0,o.mdx)("em",{parentName:"li"},"will not")," reuse locally cached data, and will ",(0,o.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,o.mdx)("em",{parentName:"li"},(0,o.mdx)("em",{parentName:"em"},"[Optional]"))," Default value: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",(0,o.mdx)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",(0,o.mdx)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",(0,o.mdx)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environmentProviderOptions"),": ",(0,o.mdx)("em",{parentName:"li"},"[Optional]")," options object",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Options passed to an ",(0,o.mdx)("inlineCode",{parentName:"li"},"environmentProvider")," used in ",(0,o.mdx)("inlineCode",{parentName:"li"},"prepareSurfaceEntryPoint.js"),".")))),(0,o.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"TEnvironmentProviderOptions"),": The type of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"environmentProviderOptions")," parameter.")),(0,o.mdx)("h3",{id:"return-value"},"Return Value"),(0,o.mdx)("p",null,"A query reference with the following properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"dispose"),": a method that will release the query reference from being retained by the store. This can cause the data referenced by the query reference to be garbage collected.")),(0,o.mdx)("p",null,"The exact format of the return value is ",(0,o.mdx)("em",{parentName:"p"},"unstable and highly likely to change"),". We strongly recommend not using any other properties of the return value, as such code would be highly likely to break when upgrading to future versions of Relay. Instead, pass the result of ",(0,o.mdx)("inlineCode",{parentName:"p"},"loadQuery()")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery()"),"."),(0,o.mdx)("h3",{id:"behavior"},"Behavior"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery()")," will fetch data if passed a query, or data and the query if passed a preloadable concrete request. Once both the query and data are available, the data from the query will be written to the store. This differs from the behavior of ",(0,o.mdx)("inlineCode",{parentName:"li"},"preloadQuery_DEPRECATED"),", which would only write data to the store if the query was passed to ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,o.mdx)("li",{parentName:"ul"},"the query reference returned from ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery")," will be retained by the relay store, preventing it the data from being garbage collected. Once you call ",(0,o.mdx)("inlineCode",{parentName:"li"},".dispose()")," on the query reference, it can be garbage collected."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery()")," will throw an error if it is called during React's render phase.")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0},47596:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(11737);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,a=0;const o={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=a++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),i={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,l),n}))}},24855:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const a=n(11737);t.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(r){}}))}},44256:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=o(n(47596)),t.uidocs=o(n(17483)),t.feedback=o(n(24855)),t.inpageeditor=o(n(27312));const i=["internal","external"];function l(e){return d(e),u()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function s(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=l,t.fbInternalOnly=function(e){return l({internal:e})},t.validateFbContentArgs=d,t.isInternal=u,t.hasEphemeralDiffNumber=function(){return Boolean(s())},t.getEphemeralDiffNumber=s,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}},27312:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const a=n(11737);t.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:r,diff_number:o}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:r,diff_number:o}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const a=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:r}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:r}})}))}}}]);