(self.webpackChunk=self.webpackChunk||[]).push([[60352],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var a=t(44256),r=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var s=function(){var e=r.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return r.createElement(o,null,r.createElement(l,null),r.createElement(s,null))},d=function(){return r.createElement(o,null,r.createElement(s,null))};const u=function(){return(0,a.fbContent)({internal:r.createElement(c,null),external:r.createElement(d,null)})}},46229:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>u,toc:()=>p,default:()=>y});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=t(68629),s=t(44256),l=["components"],c={id:"rendering-connections",title:"Rendering Connections",slug:"/guided-tour/list-data/rendering-connections/"},d=void 0,u={unversionedId:"guided-tour/list-data/rendering-connections",id:"version-v11.0.0/guided-tour/list-data/rendering-connections",isDocsHomePage:!1,title:"Rendering Connections",description:"In Relay, in order to display a list of data that is backed by a GraphQL connection, first you need to declare a fragment that queries for a connection:",source:"@site/versioned_docs/version-v11.0.0/guided-tour/list-data/rendering-connections.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/rendering-connections/",permalink:"/docs/v11.0.0/guided-tour/list-data/rendering-connections/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/list-data/rendering-connections.md",version:"v11.0.0",lastUpdatedBy:"Jordan Gensler",lastUpdatedAt:1637177532,formattedLastUpdatedAt:"11/17/2021",frontMatter:{id:"rendering-connections",title:"Rendering Connections",slug:"/guided-tour/list-data/rendering-connections/"},sidebar:"version-v11.0.0/docs",previous:{title:"Connections",permalink:"/docs/v11.0.0/guided-tour/list-data/connections/"},next:{title:"Pagination",permalink:"/docs/v11.0.0/guided-tour/list-data/pagination/"}},p=[],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},f=m("FbRenderingConnectionsUsingSuspenseList"),g=m("FbSuspenseListAlternative"),h={toc:p};function y(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Relay, in order to display a list of data that is backed by a GraphQL connection, first you need to declare a fragment that queries for a connection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {graphql} = require('RelayModern');\n\nconst userFragment = graphql`\n  fragment UserFragment on User {\n    name\n    friends(after: $cursor, first: $count)\n      @connection(key: \"UserFragment_friends\") {\n      edges {\n        node {\n          ...FriendComponent\n        }\n      }\n    }\n  }\n`;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the example above, we're querying for the ",(0,i.kt)("inlineCode",{parentName:"li"},"friends")," field, which is a connection; in other words, it adheres to the connection spec. Specifically, we can query the ",(0,i.kt)("inlineCode",{parentName:"li"},"edges")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),"s in the connection; the ",(0,i.kt)("inlineCode",{parentName:"li"},"edges")," usually contain information about the relationship between the entities, while the ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),"s are the actual entities at the other end of the relationship; in this case, the ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),"s are objects of type ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," representing the user's friends."),(0,i.kt)("li",{parentName:"ul"},"In order to indicate to Relay that we want to perform pagination over this connection, we need to mark the field with the ",(0,i.kt)("inlineCode",{parentName:"li"},"@connection")," directive. We must also provide a ",(0,i.kt)("em",{parentName:"li"},"static")," unique identifier for this connection, known as the ",(0,i.kt)("inlineCode",{parentName:"li"},"key"),". We recommend the following naming convention for the connection key: ",(0,i.kt)("inlineCode",{parentName:"li"},"<fragment_name>_<field_name>"),"."),(0,i.kt)("li",{parentName:"ul"},"We will go into more detail later as to why it is necessary to mark the field as a ",(0,i.kt)("inlineCode",{parentName:"li"},"@connection")," and give it a unique ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," in our ",(0,i.kt)("a",{parentName:"li",href:"../updating-connections/"},"Updating Connections")," section.")),(0,i.kt)("p",null,"In order to render this fragment which queries for a connection, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"usePaginationFragment")," Hook:"),(0,i.kt)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.kt)(f,{mdxType:"FbRenderingConnectionsUsingSuspenseList"})),(0,i.kt)(s.OssOnly,{mdxType:"OssOnly"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {data} = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              ...FriendComponent\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n\n  return (\n    <>\n      {data.name != null ? <h1>Friends of {data.name}:</h1> : null}\n\n      <div>\n        {/* Extract each friend from the resulting data */}\n        {(data.friends?.edges ?? []).map(edge => {\n          const node = edge.node;\n          return (\n            <Suspense fallback={<Glimmer />}>\n              <FriendComponent user={node} />\n            </Suspense>\n          );\n        })}\n      </div>\n    </>\n  );\n}\n\nmodule.exports = FriendsListComponent;\n")),(0,i.kt)(g,{mdxType:"FbSuspenseListAlternative"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usePaginationFragment")," behaves the same way as a ",(0,i.kt)("inlineCode",{parentName:"li"},"useFragment")," (see the ",(0,i.kt)("a",{parentName:"li",href:"../../rendering/fragments/"},"Fragments")," section), so our list of friends is available under ",(0,i.kt)("inlineCode",{parentName:"li"},"data.friends.edges.node"),", as declared by the fragment. However, it also has a few additions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It expects a fragment that is a connection field annotated with the ",(0,i.kt)("inlineCode",{parentName:"li"},"@connection")," directive"),(0,i.kt)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that  ",(0,i.kt)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',(0,i.kt)("inlineCode",{parentName:"li"},"Viewer"),", on ",(0,i.kt)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",(0,i.kt)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," field), or on a ",(0,i.kt)("inlineCode",{parentName:"li"},"@fetchable")," type. ",(0,i.kt)(s.FbInternalOnly,{mdxType:"FbInternalOnly"}," For more info on ",(0,i.kt)("inlineCode",{parentName:"li"},"@fetchable")," types, see ",(0,i.kt)("a",{parentName:"li",href:"https://fb.workplace.com/groups/graphql.fyi/permalink/1539541276187011/"},"this post"),". ")))),(0,i.kt)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",(0,i.kt)("inlineCode",{parentName:"li"},"FriendsListPaginationQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",(0,i.kt)("inlineCode",{parentName:"li"},"_"),")."))),(0,i.kt)(o.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);