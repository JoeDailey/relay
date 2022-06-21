(self.webpackChunk=self.webpackChunk||[]).push([[38481],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29288:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>m});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),s=["components"],o={id:"persisted-queries",title:"Persisted Queries"},p=void 0,l={unversionedId:"persisted-queries",id:"version-v1.5.0/persisted-queries",isDocsHomePage:!1,title:"Persisted Queries",description:"The relay compiler supports persisted queries which is useful because:",source:"@site/versioned_docs/version-v1.5.0/Modern-PersistedQueries.md",sourceDirName:".",slug:"/persisted-queries",permalink:"/docs/v1.5.0/persisted-queries",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.5.0/Modern-PersistedQueries.md",tags:[],version:"v1.5.0",lastUpdatedBy:"Jianfeng Chen",lastUpdatedAt:1655835382,formattedLastUpdatedAt:"6/21/2022",frontMatter:{id:"persisted-queries",title:"Persisted Queries"}},u=[{value:"Usage on the client",id:"usage-on-the-client",children:[{value:"The <code>--persist-output</code> flag",id:"the---persist-output-flag",children:[],level:3},{value:"Network layer changes",id:"network-layer-changes",children:[],level:3}],level:2},{value:"Executing Persisted Queries on the Server",id:"executing-persisted-queries-on-the-server",children:[{value:"Compile time push",id:"compile-time-push",children:[],level:3},{value:"Run time push",id:"run-time-push",children:[],level:3},{value:"Simple server example",id:"simple-server-example",children:[],level:3}],level:2},{value:"Using <code>--persist-output</code> and <code>--watch</code>",id:"using---persist-output-and---watch",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The relay compiler supports persisted queries which is useful because:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"the client operation text becomes just an md5 hash which is usually shorter than the real\nquery string. This saves upload bytes from the client to the server.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"the server can now whitelist queries which improves security by restricting the operations\nthat can be executed by a client."))),(0,i.mdx)("h2",{id:"usage-on-the-client"},"Usage on the client"),(0,i.mdx)("h3",{id:"the---persist-output-flag"},"The ",(0,i.mdx)("inlineCode",{parentName:"h3"},"--persist-output")," flag"),(0,i.mdx)("p",null,"In your ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm")," script in ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json"),", run the relay compiler using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output")," flag:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./path/to/persisted-queries.json"\n}\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-ouput")," flag does 2 things:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"It converts all query and mutation operation texts to md5 hashes."),(0,i.mdx)("p",{parentName:"li"},"For example without ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output"),", a generated ",(0,i.mdx)("inlineCode",{parentName:"p"},"ConcreteRequest")," might look like below:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": null, // NOTE: id is null\n  "text": "query TodoItemRefetchQuery(\\n  $itemID: ID!\\n) {\\n  node(id: $itemID) {\\n    ...TodoItem_item_2FOrhs\\n  }\\n}\\n\\nfragment TodoItem_item_2FOrhs on Todo {\\n    text\\n    isComplete\\n}\\n",\n  //... excluded for brevity\n};\n})();\n\n')),(0,i.mdx)("p",{parentName:"li"},"With ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output <path>")," this becomes:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": "3be4abb81fa595e25eb725b2c6a87508", // NOTE: id is now an md5 hash of the query text\n  "text": null, // NOTE: text is null now\n  //... excluded for brevity\n};\n})();\n\n'))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"It generates a JSON file at the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<path>")," you specify containing a mapping from query ids\nto the corresponding operation texts."))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./src/queryMaps/queryMap.json"\n}\n')),(0,i.mdx)("p",null,"The example above writes the complete query map file to ",(0,i.mdx)("inlineCode",{parentName:"p"},"./src/queryMaps/queryMap.json"),". You need to ensure all the directories\nleading to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryMap.json")," file exist."),(0,i.mdx)("h3",{id:"network-layer-changes"},"Network layer changes"),(0,i.mdx)("p",null,"You'll need to modify your network layer fetch implementation to pass a documentId parameter in the POST body instead of a query parameter:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"function fetchQuery(operation, variables,) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      documentId: operation.id, // NOTE: pass md5 hash to the server\n      // query: operation.text, // this is now obsolete because text is null\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n")),(0,i.mdx)("h2",{id:"executing-persisted-queries-on-the-server"},"Executing Persisted Queries on the Server"),(0,i.mdx)("p",null,"To execute client requests that send persisted queries instead of query text, your server will need to be able\nto lookup the query text corresponding to each id. Typically this will involve saving the output of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output <path>")," JSON file to a database or some other storage mechanism, and retrieving the corresponding text for the ID specified by a client."),(0,i.mdx)("p",null,"For universal applications where the client and server code are in one project, this is not an issue since you can place\nthe query map file in a common location accessible to both the client and the server."),(0,i.mdx)("h3",{id:"compile-time-push"},"Compile time push"),(0,i.mdx)("p",null,"For applications where the client and server projects are separate, one option is to have an additional npm run script\nto push the query map at compile time to a location accessible by your server:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "push-queries": "node ./pushQueries.js",\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-ouput <path> && npm run push-queries"\n}\n')),(0,i.mdx)("p",null,"Some possibilities of what you can do in ",(0,i.mdx)("inlineCode",{parentName:"p"},"./pushQueries.js"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"git push")," to your server repo")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"save the query maps to a database"))),(0,i.mdx)("h3",{id:"run-time-push"},"Run time push"),(0,i.mdx)("p",null,"A second more complex option is to push your query maps to the server at runtime, without the server knowing the query ids at the start.\nThe client optimistically sends a query id to the server, which does not have the query map. The server then in turn requests\nfor the full query text from the client so it can cache the query map for subsequent requests. This is a more complex approach\nrequiring the client and server to interact to exchange the query maps."),(0,i.mdx)("h3",{id:"simple-server-example"},"Simple server example"),(0,i.mdx)("p",null,"Once your server has access to the query map, you can perform the mapping. The solution varies depending on the server and\ndatabase technologies you use, so we'll just cover the most common and basic example here."),(0,i.mdx)("p",null,"If you use ",(0,i.mdx)("inlineCode",{parentName:"p"},"express-graphql")," and have access to the query map file, you can import the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output")," JSON file directly and\nperform the matching using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"matchQueryMiddleware")," from ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/yusinto/relay-compiler-plus"},"relay-compiler-plus"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import Express from 'express';\nimport expressGraphql from 'express-graphql';\nimport {matchQueryMiddleware} from 'relay-compiler-plus';\nimport queryMapJson from './path/to/persisted-queries.json';\n\nconst app = Express();\n\napp.use('/graphql',\n  matchQueryMiddleware(queryMapJson),\n  expressGraphql({schema}));\n")),(0,i.mdx)("h2",{id:"using---persist-output-and---watch"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"--persist-output")," and ",(0,i.mdx)("inlineCode",{parentName:"h2"},"--watch")),(0,i.mdx)("p",null,"It is possible to continuously generate the query map files by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--persist-output")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"--watch")," options simultaneously.\nThis only makes sense for universal applications i.e. if your client and server code are in a single project\nand you run them both together on localhost during development. Furthermore, in order for the server to pick up changes\nto the ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryMap.json"),", you'll need to have server side hot-reloading set up. The details on how to set this up\nis out of the scope of this document."))}m.isMDXComponent=!0}}]);