"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[9530,50390,14367,97299,27824,63995],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){return function(t){var a=s(t.components);return n.createElement(e,r({},t,{components:a}))}},s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=s(a),c=i,f=p["".concat(o,".").concat(c)]||p[c]||u[c]||r;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function x(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(39960),i=a(86341),r=a(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var m=function(){var e=r.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},p=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return r.createElement(l,null,r.createElement(d,null),r.createElement(m,null),r.createElement(p,null))},c=function(){return r.createElement(l,null,r.createElement(m,null),r.createElement(p,null))};const u=function(){return(0,i.fbContent)({internal:r.createElement(s,null),external:r.createElement(c,null)})}},32584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>f});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(68629),l=(a(86341),a(13237)),m=a(91444),d=["components"],p={id:"commit-mutation",title:"commitMutation",slug:"/api-reference/commit-mutation/",description:"API reference for commitMutation, which imperatively executes a mutation",keywords:["mutation"]},s=void 0,c={unversionedId:"api-reference/relay-runtime/commit-mutation",id:"version-v12.0.0/api-reference/relay-runtime/commit-mutation",title:"commitMutation",description:"API reference for commitMutation, which imperatively executes a mutation",source:"@site/versioned_docs/version-v12.0.0/api-reference/relay-runtime/commit-mutation.md",sourceDirName:"api-reference/relay-runtime",slug:"/api-reference/commit-mutation/",permalink:"/docs/v12.0.0/api-reference/commit-mutation/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/relay-runtime/commit-mutation.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1675368339,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"commit-mutation",title:"commitMutation",slug:"/api-reference/commit-mutation/",description:"API reference for commitMutation, which imperatively executes a mutation",keywords:["mutation"]},sidebar:"version-v12.0.0/docs",previous:{title:"Store",permalink:"/docs/v12.0.0/api-reference/store/"},next:{title:"requestSubscription",permalink:"/docs/v12.0.0/api-reference/request-subscription/"}},u={},f=[{value:"<code>commitMutation</code>",id:"commitmutation",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3}],x={toc:f};function v(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.mdx)("wrapper",(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"commitmutation"},(0,r.mdx)("inlineCode",{parentName:"h2"},"commitMutation")),(0,r.mdx)("p",null,"Imperatively execute a mutation."),(0,r.mdx)("p",null,"See also the ",(0,r.mdx)("a",{parentName:"p",href:"../use-mutation/"},(0,r.mdx)("inlineCode",{parentName:"a"},"useMutation"))," API and ",(0,r.mdx)("a",{parentName:"p",href:"../../guided-tour/updating-data/"},"Guide to Updating Data"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FeedbackLikeMutation} from 'FeedbackLikeMutation.graphql';\nconst React = require('React');\n\nconst {graphql, useMutation} = require('react-relay');\n\nfunction likeFeedback(environment: IEnvironment): Disposable {\n  return commitMutation<FeedbackLikeMutation>(environment, {\n    mutation: graphql`\n      mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n        feedback_like(data: $input) {\n          feedback {\n            id\n            viewer_does_like\n            like_count\n          }\n        }\n      }\n    `,\n    variables: {\n      input: {\n        id: '123',\n      },\n    },\n  });\n}\n")),(0,r.mdx)("h3",{id:"arguments"},"Arguments"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"environment"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"IEnvironment"),". A Relay environment."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"config"),": ",(0,r.mdx)("a",{parentName:"li",href:"#type-mutationconfigtmutationconfig-mutationparameters"},(0,r.mdx)("inlineCode",{parentName:"a"},"MutationConfig<TMutation>")),".")),(0,r.mdx)(l.default,{mdxType:"MutationConfig"}),(0,r.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"TMutation"),": Type parameter that should corresponds the Flow type for the mutation query. This type is available to import from the the auto-generated file: ",(0,r.mdx)("inlineCode",{parentName:"li"},"<mutationName>.graphql.js"),".",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Note that this auto-generated type will implement ",(0,r.mdx)("inlineCode",{parentName:"li"},"MutationParameters"),".")))),(0,r.mdx)("admonition",{type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"If you do not ",(0,r.mdx)("strong",{parentName:"p"},"explicitly")," pass this type parameter, the variables, optimistic response and response passed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"onCompleted")," ",(0,r.mdx)("strong",{parentName:"p"},"will not be type-checked"),"!")),(0,r.mdx)("h3",{id:"return-value"},"Return Value"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("a",{parentName:"li",href:"#interface-disposable"},(0,r.mdx)("inlineCode",{parentName:"a"},"Disposable"))," which:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If called while before the request completes, will cancel revert any optimistic updates and prevent the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onComplete")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"onError")," callbacks from being executed. It will not necessarily cancel any network request. Will cause the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onUnsubscribe")," callback to be called."),(0,r.mdx)("li",{parentName:"ul"},"If called after the initial request completes, will do nothing.")))),(0,r.mdx)(m.default,{mdxType:"Disposable"}),(0,r.mdx)(o.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0},8534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=["components"],l={},m=void 0,d={unversionedId:"api-reference/types/CacheConfig",id:"version-v12.0.0/api-reference/types/CacheConfig",title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v12.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/v12.0.0/api-reference/types/CacheConfig",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1675368339,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{}},p={},s=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",level:4}],c={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,r.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. If true, causes a query to be issued unconditionally, regardless of the state of any configured response cache."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," A number. Causes a query to live-update by polling at the specified interval, in milliseconds. (This value will be passed to ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTimeout"),")."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," A string. Causes a query to live-update by calling GraphQLLiveQuery; it represents a configuration of gateway when doing live query."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," An object. User-supplied metadata."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," A string. A user-supplied value, intended for use as a unique id for a given instance of executing an operation.")))))}u.isMDXComponent=!0},91444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=["components"],l={},m=void 0,d={unversionedId:"api-reference/types/Disposable",id:"version-v12.0.0/api-reference/types/Disposable",title:"Disposable",description:"Interface Disposable",source:"@site/versioned_docs/version-v12.0.0/api-reference/types/Disposable.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/Disposable",permalink:"/docs/v12.0.0/api-reference/types/Disposable",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/types/Disposable.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1675368339,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{}},p={},s=[{value:"Interface <code>Disposable</code>",id:"interface-disposable",level:4}],c={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h4",{id:"interface-disposable"},"Interface ",(0,r.mdx)("inlineCode",{parentName:"h4"},"Disposable")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An object with the following key:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dispose"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"() => void"),". Disposes of the resource.")))))}u.isMDXComponent=!0},13237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>f});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(8534),l=a(97621),m=a(6772),d=["components"],p={},s=void 0,c={unversionedId:"api-reference/types/MutationConfig",id:"version-v12.0.0/api-reference/types/MutationConfig",title:"MutationConfig",description:"Type MutationConfig",source:"@site/versioned_docs/version-v12.0.0/api-reference/types/MutationConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/MutationConfig",permalink:"/docs/v12.0.0/api-reference/types/MutationConfig",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/types/MutationConfig.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1675368339,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{}},u={},f=[{value:"Type <code>MutationConfig&lt;TMutationConfig: MutationParameters&gt;</code>",id:"type-mutationconfigtmutationconfig-mutationparameters",level:4},{value:"Type <code>MutationParameters</code>",id:"type-mutationparameters",level:4}],x={toc:f};function v(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.mdx)("wrapper",(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h4",{id:"type-mutationconfigtmutationconfig-mutationparameters"},"Type ",(0,r.mdx)("inlineCode",{parentName:"h4"},"MutationConfig<TMutationConfig: MutationParameters>")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,r.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,r.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"mutation"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A mutation specified using a GraphQL literal"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,r.mdx)("inlineCode",{parentName:"li"},"(Error) => void"),". An optional callback executed if the mutation results in an error."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,r.mdx)("inlineCode",{parentName:"li"},"($ElementType<TMutationConfig, 'response'>) => void"),". An optional callback that is executed when the mutation completes."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"onUnsubscribe"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,r.mdx)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the mutation the mutation is unsubscribed, which occurs when the returned ",(0,r.mdx)("inlineCode",{parentName:"li"},"Disposable")," is disposed."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticResponse"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," An object whose type matches the raw response type of the mutation. Make sure you decorate your mutation with ",(0,r.mdx)("inlineCode",{parentName:"li"},"@raw_response_type")," if you are using this field."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,r.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,r.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". A callback that is executed when ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitMutation")," is called, after the ",(0,r.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," has been normalized into the store."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,r.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,r.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". A callback that is executed when a payload is received, after the payload has been written into the store."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"uploadables"),": ",(0,r.mdx)("em",{parentName:"li"},(0,r.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,r.mdx)("a",{parentName:"li",href:"#type-uploadablemap"},(0,r.mdx)("inlineCode",{parentName:"a"},"UploadableMap")),". An optional uploadable map."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"variables"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"$ElementType<TMutationConfig, 'variables'>"),". The variables to pass to the mutation.")))),(0,r.mdx)(o.default,{mdxType:"CacheConfig"}),(0,r.mdx)(l.default,{mdxType:"SelectorStoreUpdater"}),(0,r.mdx)(m.default,{mdxType:"UploadableMap"}),(0,r.mdx)("h4",{id:"type-mutationparameters"},"Type ",(0,r.mdx)("inlineCode",{parentName:"h4"},"MutationParameters")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"response"),": An object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"variables"),": An object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"rawResponse"),": An optional object")))))}v.isMDXComponent=!0},97621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>m,metadata:()=>p,toc:()=>c});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(44996),l=["components"],m={},d=void 0,p={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v12.0.0/api-reference/types/SelectorStoreUpdater",title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v12.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/v12.0.0/api-reference/types/SelectorStoreUpdater",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1675368339,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{}},s={},c=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",level:4}],u={toc:c};function f(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,r.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A function with signature ",(0,r.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,r.mdx)("li",{parentName:"ul"},"This interface allows you to ",(0,r.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,r.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,r.mdx)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,r.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}f.isMDXComponent=!0},6772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=["components"],l={},m=void 0,d={unversionedId:"api-reference/types/UploadableMap",id:"version-v12.0.0/api-reference/types/UploadableMap",title:"UploadableMap",description:"Type UploadableMap",source:"@site/versioned_docs/version-v12.0.0/api-reference/types/UploadableMap.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/UploadableMap",permalink:"/docs/v12.0.0/api-reference/types/UploadableMap",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/types/UploadableMap.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1675368339,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{}},p={},s=[{value:"Type <code>UploadableMap</code>",id:"type-uploadablemap",level:4}],c={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h4",{id:"type-uploadablemap"},"Type ",(0,r.mdx)("inlineCode",{parentName:"h4"},"UploadableMap")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An object whose values are ",(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},(0,r.mdx)("inlineCode",{parentName:"a"},"File"))," or ",(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},(0,r.mdx)("inlineCode",{parentName:"a"},"Blob")),".")))}u.isMDXComponent=!0}}]);