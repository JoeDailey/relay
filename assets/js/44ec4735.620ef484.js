"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[52897],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>u});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){return function(n){var t=m(n.components);return i.createElement(e,r({},n,{components:t}))}},m=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(t),c=a,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||r;return t?i.createElement(h,o(o({ref:n},s),{},{components:t})):i.createElement(h,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var i=t(39960),a=t(86341),r=t(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var d=function(){var e=r.useState(!1),n=e[0],t=e[1],i=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},u=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(i.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return r.createElement(o,null,r.createElement(s,null),r.createElement(d,null),r.createElement(u,null))},c=function(){return r.createElement(o,null,r.createElement(d,null),r.createElement(u,null))};const p=function(){return(0,a.fbContent)({internal:r.createElement(m,null),external:r.createElement(c,null)})}},65026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var i,a=t(83117),r=t(80102),l=(t(67294),t(3905)),o=(t(68629),["components"]),d={id:"required-directive",title:"@required Directive",slug:"/guides/required-directive/",description:"Relay guide to @required",keywords:["required","directive","optional","nullthrows"]},s=void 0,u={unversionedId:"guides/required-directive",id:"guides/required-directive",title:"@required Directive",description:"Relay guide to @required",source:"@site/docs/guides/required-directive.md",sourceDirName:"guides",slug:"/guides/required-directive/",permalink:"/docs/next/guides/required-directive/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/required-directive.md",tags:[],version:"current",lastUpdatedBy:"Sam Zhou",lastUpdatedAt:1685734345,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{id:"required-directive",title:"@required Directive",slug:"/guides/required-directive/",description:"Relay guide to @required",keywords:["required","directive","optional","nullthrows"]},sidebar:"docs",previous:{title:"Testing Relay with Preloaded Queries",permalink:"/docs/next/guides/testing-relay-with-preloaded-queries/"},next:{title:"Relay Resolvers",permalink:"/docs/next/guides/relay-resolvers/"}},m={},c=[{value:"Action",id:"action",level:2},{value:"<code>NONE</code> (expected)",id:"none-expected",level:3},{value:"<code>LOG</code> (recoverable)",id:"log-recoverable",level:3},{value:"<code>THROW</code> (unrecoverable)",id:"throw-unrecoverable",level:3},{value:"Locality",id:"locality",level:2},{value:"Chaining",id:"chaining",level:2},{value:"Caveats with Connections",id:"caveats-with-connections",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why did @required make a non-nullable field/root nullable?",id:"why-did-required-make-a-non-nullable-fieldroot-nullable",level:3},{value:"What happens if you use <code>@required</code> in a plural field",id:"what-happens-if-you-use-required-in-a-plural-field",level:3},{value:"Why are @required fields in an inline fragment still nullable?",id:"why-are-required-fields-in-an-inline-fragment-still-nullable",level:3},{value:"Why not implement this at the schema/server level?",id:"why-not-implement-this-at-the-schemaserver-level",level:3},{value:"Can <code>(action: NONE)</code> be the default?",id:"can-action-none-be-the-default",level:3},{value:"Does @required change anything about the logger project field?",id:"does-required-change-anything-about-the-logger-project-field",level:3}],p=(i="FbInternalOnly",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),h={toc:c};function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),' directive can be added to fields in your Relay queries to declare how null values should be handled at runtime. You can think of it as saying "if this field is ever null, its parent field is invalid and should be null".'),(0,l.mdx)("p",null,'When you have a GraphQL schema where many fields are nullable, a considerable amount of product code is needed to handle each field\'s potential "nullness" before the underlying data can be used. With ',(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),", Relay can handle some types of null checks before it returns data to your component, which means that ",(0,l.mdx)("strong",{parentName:"p"},"any field you annotate with")," ",(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"strong"},"@required"))," ",(0,l.mdx)("strong",{parentName:"p"},"will become non-nullable in the generated types for your response"),"."),(0,l.mdx)("p",null,"If a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),' field is null at runtime, Relay will "bubble" that nullness up to the field\'s parent. For example, given this query:'),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"query MyQuery {\n  viewer {\n    name @required(action: LOG)\n    age\n  }\n}\n")),(0,l.mdx)("p",null,"If ",(0,l.mdx)("inlineCode",{parentName:"p"},"name")," is null, relay would return ",(0,l.mdx)("inlineCode",{parentName:"p"},"{ viewer: null }"),". You can think of ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),' in this instance as saying "',(0,l.mdx)("inlineCode",{parentName:"p"},"viewer")," is useless without a ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),'".'),(0,l.mdx)("h2",{id:"action"},"Action"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directive has a required ",(0,l.mdx)("inlineCode",{parentName:"p"},"action")," argument which has three possible values:"),(0,l.mdx)("h3",{id:"none-expected"},(0,l.mdx)("inlineCode",{parentName:"h3"},"NONE")," (expected)"),(0,l.mdx)("p",null,"This field is expected to be null sometimes."),(0,l.mdx)("h3",{id:"log-recoverable"},(0,l.mdx)("inlineCode",{parentName:"h3"},"LOG")," (recoverable)"),(0,l.mdx)("p",null,"This value is not expected to ever be null, but the component ",(0,l.mdx)("strong",{parentName:"p"},"can still render")," if it is. If a field with ",(0,l.mdx)("inlineCode",{parentName:"p"},"action: LOG")," is null, the Relay environment logger will receive an event that looks like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: 'read.missing_required_field',\n  owner: string, // MyFragmentOrQueryName\n  fieldPath: string, // path.to.my.field\n};\n")),(0,l.mdx)("h3",{id:"throw-unrecoverable"},(0,l.mdx)("inlineCode",{parentName:"h3"},"THROW")," (unrecoverable)"),(0,l.mdx)("p",null,"This value should not be null, and the component ",(0,l.mdx)("strong",{parentName:"p"},"cannot render without it"),". If a field with ",(0,l.mdx)("inlineCode",{parentName:"p"},"action: THROW")," is null at runtime, the component which reads that field ",(0,l.mdx)("strong",{parentName:"p"},"will throw during render"),". The error message includes both the owner and field path. Only use this option if your component is contained within an ",(0,l.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"error boundary"),"."),(0,l.mdx)("h2",{id:"locality"},"Locality"),(0,l.mdx)("p",null,"A field's ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," status is ",(0,l.mdx)("strong",{parentName:"p"},"local to the fragment where it is specified"),". This allows you to add add/remove the directive without having to think about anything outside the scope of your component."),(0,l.mdx)("p",null,"This choice reflects the fact that some components may be able to recover better from missing data than others. For example, a ",(0,l.mdx)("inlineCode",{parentName:"p"},"<RestaurantInfo />")," component could probably render something sensible even if the restaurant's address is missing, but a ",(0,l.mdx)("inlineCode",{parentName:"p"},"<RestaurantLocationMap />")," component might not."),(0,l.mdx)("p",null,"However, all usages of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directive on the same field in a single fragment must be consistent with their usage. This situation mostly occurs when selecting fields in inline fragments. For example, the following fragment would fail to compile:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment UserInfo on User {\n  job {\n    ... on Actor {\n      certifications\n    }\n    ... on Lawyer {\n      certifications @required(action: LOG)\n    }\n  }\n}\n")),(0,l.mdx)("p",null,"The Relay compiler will give you an error like ",(0,l.mdx)("inlineCode",{parentName:"p"},"All references to a field must have matching @required declarations."),". To fix this, either set the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directive on each of the fields selected in the inline fragment or remove the directive entirely."),(0,l.mdx)("h2",{id:"chaining"},"Chaining"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directives can be chained to make a deeply nested field accessible after just one null check:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const user = useFragment(graphql`\n  fragment MyUser on User {\n    name @required(action: LOG)\n    profile_picture @required(action: LOG) {\n      url @required(action: LOG)\n    }\n  }`, key);\n if(user == null) {\n   return null;\n }\n return <img src={user.profile_picture.url} alt={user.name} />\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note"),": If you use ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," on a top level field of a fragment, the object returned from ",(0,l.mdx)("inlineCode",{parentName:"p"},"useFragment")," itself may become nullable. The generated types will reflect this."),(0,l.mdx)("p",null,"When chaining ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directives, the Relay compiler will help you from unintentionally creating a chain with a more severe action than intended. Consider the following fragment"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment MyUser on User {\n  profile_picture @required(action: THROW) {\n    url @required(action: LOG)\n  }\n}\n")),(0,l.mdx)("p",null,"In this example we want the component to THROW if the ",(0,l.mdx)("inlineCode",{parentName:"p"},"profile_picture")," field is null but we only want to LOG an error if the ",(0,l.mdx)("inlineCode",{parentName:"p"},"url"),' field is null. But recall, Relay will "bubble" nullness up to the parent field, if the ',(0,l.mdx)("inlineCode",{parentName:"p"},"url")," field is null it will then cause the ",(0,l.mdx)("inlineCode",{parentName:"p"},"profile_picture")," field to become null as well. And once that happens, the component will THROW. If you implement a pattern like this, the Relay compiler will give you an error"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"A @required field may not have an `action` less severe than that of its @required parent. This @required directive should probably have `action: LOG` so that it can match its parent\n")),(0,l.mdx)("p",null,"To fix this, either change the ",(0,l.mdx)("inlineCode",{parentName:"p"},"profile_picture")," to use ",(0,l.mdx)("inlineCode",{parentName:"p"},"action: LOG")," or change the ",(0,l.mdx)("inlineCode",{parentName:"p"},"url")," field to use ",(0,l.mdx)("inlineCode",{parentName:"p"},"action: THROW"),"."),(0,l.mdx)("h2",{id:"caveats-with-connections"},"Caveats with Connections"),(0,l.mdx)("p",null,"There are currently some limitations in using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"@connection")," directives together. When you use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@connection")," directive, Relay  automatically inserts some additional fields into the connection, and those fields won't be generated with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directive. This can result in inconsistencies if you use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directive on fields in a Connection type. Consider the following example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment FriendsList on User @refetchable(queryName: "FriendsListQuery") {\n  friends(after: $cursor, first: $count) @connection(key: "FriendsList_friends") {\n    edges {\n      node @required(action: LOG) {\n        job @required(action: LOG) {\n          title @required(action: LOG)\n        }\n      }\n    }\n  }\n}\n')),(0,l.mdx)("p",null,"Any usages of ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," on the ",(0,l.mdx)("inlineCode",{parentName:"p"},"node")," field or any of its direct child fields will cause the Relay compiler to give you an error saying ",(0,l.mdx)("inlineCode",{parentName:"p"},"All references to a field must have matching @required declarations."),". In order to bypass this you'll need to remove the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directives on those fields."),(0,l.mdx)("p",null,"In the above example, we'd need to remove the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required")," directives on both the ",(0,l.mdx)("inlineCode",{parentName:"p"},"node")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"job")," fields, but the usage on the ",(0,l.mdx)("inlineCode",{parentName:"p"},"title")," field would not create an error."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment FriendsList on User @refetchable(queryName: "FriendsListQuery") {\n  friends(after: $cursor, first: $count) @connection(key: "FriendsList_friends") {\n    edges {\n      node {\n        job {\n          title @required(action: LOG)\n        }\n      }\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"faq"},"FAQ"),(0,l.mdx)("h3",{id:"why-did-required-make-a-non-nullable-fieldroot-nullable"},"Why did @required make a non-nullable field/root nullable?"),(0,l.mdx)("p",null,"When using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"LOG")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"NONE"),' actions, Relay will "bubble" a missing field up to its parent field or fragment root. This means that adding ',(0,l.mdx)("inlineCode",{parentName:"p"},"@required(action: LOG)")," (for example) to a child of a non-nullable fragment root will cause the type of the fragment root to become nullable."),(0,l.mdx)("h3",{id:"what-happens-if-you-use-required-in-a-plural-field"},"What happens if you use ",(0,l.mdx)("inlineCode",{parentName:"h3"},"@required")," in a plural field"),(0,l.mdx)("p",null,"If a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required(action: LOG)")," field is missing in a plural field, the ",(0,l.mdx)("em",{parentName:"p"},"item")," in the list will be returned as null. It will ",(0,l.mdx)("em",{parentName:"p"},"not")," cause the entire array to become null.. If you have any question about how it will behave, you can inspect the generated Flow types."),(0,l.mdx)("h3",{id:"why-are-required-fields-in-an-inline-fragment-still-nullable"},"Why are @required fields in an inline fragment still nullable?"),(0,l.mdx)("p",null,"Imagine a fragment like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment MyFrag on Actor {\n  ... on User {\n    name @required(action: THROW)\n  }\n}\n")),(0,l.mdx)("p",null,"It's possible that your ",(0,l.mdx)("inlineCode",{parentName:"p"},"Actor")," will not be a ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," and therefore not include a ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),". To represent that in types, we generate a Flow type that looks like this: ",(0,l.mdx)("inlineCode",{parentName:"p"},"{name?: string}"),"."),(0,l.mdx)("p",null,"If you encounter this issue, you can add a ",(0,l.mdx)("inlineCode",{parentName:"p"},"__typename")," like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment MyFrag on Actor {\n  __typename\n  ... on User {\n    name @required(action: THROW)\n  }\n}\n")),(0,l.mdx)("p",null,"In this situation Relay will generate a union type like: ",(0,l.mdx)("inlineCode",{parentName:"p"},"{__typename: 'User', name: string} | {__typename: '%ignore this%}"),". Now you can check the ",(0,l.mdx)("inlineCode",{parentName:"p"},"__typename")," field to narrow your object's type down to one that has a non-nullable ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),"."),(0,l.mdx)(p,{mdxType:"FbInternalOnly"},"Example diff showing the adoption of this strategy: D24370183"),(0,l.mdx)("h3",{id:"why-not-implement-this-at-the-schemaserver-level"},"Why not implement this at the schema/server level?"),(0,l.mdx)("p",null,'The "requiredness" of a field is actually a product decision and not a schema question. Therefore we need to implement the handling of it at the product level. Individual components need to be able to decide for themselves how to handle a missing value.'),(0,l.mdx)("p",null,"For example, if a notification is trying to show the price for a Marketplace listing, it could probably just omit the price and still render. If payment flow for that same listing is missing the price, it should probably blow up."),(0,l.mdx)("p",null,"Another issue is that changes to the server schema are much more difficult to ship since they affect all existing clients across all platforms."),(0,l.mdx)("p",null,"Basically every value returned by Relay is nullable. This is intentional since we want to be able to handle field-level errors whenever possible. If we lean into KillsParentOnException we would end up wanting to make basically every field use it and our apps would be becomes more brittle since errors which used to be small, become large."),(0,l.mdx)(p,{mdxType:"FbInternalOnly"},(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"Extracted from ",(0,l.mdx)("a",{parentName:"em",href:"https://fb.workplace.com/groups/cometeng/permalink/937671436726844/?comment_id=937681186725869"},"this comment thread"),"."),"\n",(0,l.mdx)("em",{parentName:"p"},"Further discussion in ",(0,l.mdx)("a",{parentName:"em",href:"https://fb.workplace.com/groups/cometeng/permalink/937671436726844/?comment_id=938335873327067"},"this comment thread"),"."))),(0,l.mdx)("h3",{id:"can-action-none-be-the-default"},"Can ",(0,l.mdx)("inlineCode",{parentName:"h3"},"(action: NONE)")," be the default?"),(0,l.mdx)("p",null,"On one hand action: NONE makes the most sense as a default (omitted action == no action). However, we are aware that whichever value we choose as the default will be considered the default action for engineers to choose since it's the path of least resistance."),(0,l.mdx)("p",null,"We actually believe that in most cases LOG is the most ideal choice. It gives the component a chance to gracefully recover while also giving us signal that a part of our app is rendering in a sub-optimal way."),(0,l.mdx)("p",null,"We debated making LOG the default action for that reason, but I think that's confusing as well."),(0,l.mdx)("p",null,"So, for now we are planning to not offer a default argument. After all, it's still much less to write out than the equivalent manual null checks. Once we see how people use it we will consider what value (if any) should be the default."),(0,l.mdx)(p,{mdxType:"FbInternalOnly"},(0,l.mdx)("h3",{id:"does-required-change-anything-about-the-logger-project-field"},"Does @required change anything about the logger project field?"),(0,l.mdx)("p",null,"When using recoverableViolation or unrecoverableViolation, the second argument is the FBLogger project name (",(0,l.mdx)("a",{parentName:"p",href:"https://fburl.com/diffusion/rn99dl4s"},"defined on Comet here"),"):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"recoverableViolation('My error string', 'my_logger_project');\n")),(0,l.mdx)("p",null,"When you switch to using ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),", any ",(0,l.mdx)("inlineCode",{parentName:"p"},"THROW")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"LOG")," actions will log to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay-required")," logger project instead (",(0,l.mdx)("a",{parentName:"p",href:"https://fburl.com/logview/l40t7cjv"},"see here in logview"),")."),(0,l.mdx)("p",null,"For most teams, this shouldn't be an issue; care has been taken to ensure tasks still get routed to the correct owner of the file that is using ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),". However, if your team has any queries that utilize the logger project field, you may want to consider the implications.")))}f.isMDXComponent=!0}}]);