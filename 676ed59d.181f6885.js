(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{1167:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=d(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),u=t,m=s["".concat(o,".").concat(u)]||s[u]||b[u]||i;return n?a.a.createElement(m,l(l({ref:r},p),{},{components:n})):a.a.createElement(m,l({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},534:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return d}));var t=n(3),a=n(7),i=(n(0),n(1167)),o={id:"query-renderer",title:"QueryRenderer",original_id:"query-renderer"},l={unversionedId:"query-renderer",id:"version-v9.1.0/query-renderer",isDocsHomePage:!1,title:"QueryRenderer",description:"A QueryRenderer is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the render prop to render the resulting data.",source:"@site/versioned_docs/version-v9.1.0/Modern-QueryRenderer.md",slug:"/query-renderer",permalink:"/docs/v9.1.0/query-renderer",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v9.1.0/Modern-QueryRenderer.md",version:"v9.1.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1615305570,sidebar:"version-v9.1.0/docs",previous:{title:"Network Layer",permalink:"/docs/v9.1.0/network-layer"},next:{title:"Fragment Container",permalink:"/docs/v9.1.0/fragment-container"}},c=[{value:"Props",id:"props",children:[]},{value:"Example",id:"example",children:[]}],p={toc:c};function d(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"QueryRenderer")," is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the ",Object(i.b)("inlineCode",{parentName:"p"},"render")," prop to render the resulting data."),Object(i.b)("p",null,"As React components, ",Object(i.b)("inlineCode",{parentName:"p"},"QueryRenderer"),"s can be rendered anywhere that a React component can be rendered, i.e. not just at the top level but ",Object(i.b)("em",{parentName:"p"},"within")," other components or containers; for example, to lazily fetch additional data for a popover."),Object(i.b)("p",null,"However, a ",Object(i.b)("inlineCode",{parentName:"p"},"QueryRenderer")," will not start loading its data until it is mounted, so nested ",Object(i.b)("inlineCode",{parentName:"p"},"QueryRenderer")," components can lead to request waterfalls if used unnecessarily."),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment"),": The ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"query"),": The ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",Object(i.b)("strong",{parentName:"li"},"Note:")," ",Object(i.b)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",Object(i.b)("inlineCode",{parentName:"li"},"<FileName>Query"),". Optional, if not provided, an empty ",Object(i.b)("inlineCode",{parentName:"li"},"props")," object is passed to the ",Object(i.b)("inlineCode",{parentName:"li"},"render")," callback."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cacheConfig?"),": Optional object containing a set of cache configuration options, i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"force: true")," requires the fetch to be issued regardless of the state of any configured response cache."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy?"),": Optional prop to indicate if data already present in the store should be used to render immediately and updated from the network afterwards using the ",Object(i.b)("inlineCode",{parentName:"li"},"store-and-network")," key. Using the ",Object(i.b)("inlineCode",{parentName:"li"},"network-only")," key, which is the default behavior, ignores data already present in the store and waits for the network results to come back."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value. ",Object(i.b)("strong",{parentName:"li"},"Note:")," If a new set of variables is passed, the ",Object(i.b)("inlineCode",{parentName:"li"},"QueryRenderer")," will re-fetch the query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"render"),": Function of type ",Object(i.b)("inlineCode",{parentName:"li"},"({error, props, retry}) => React.Node"),". The output of this function will be rendered by the ",Object(i.b)("inlineCode",{parentName:"li"},"QueryRenderer"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"props"),": Object containing data obtained from the query; the shape of this object will match the shape of the query. If this object is not defined, it means that the data is still being fetched."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"error"),": Error will be defined if an error has occurred while fetching the query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"retry"),": Reload the data. It is null if ",Object(i.b)("inlineCode",{parentName:"li"},"query")," was not provided.")))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"\n// Example.js\nimport React from 'react';\nimport { QueryRenderer, graphql } from 'react-relay';\n\nconst renderQuery = ({error, props}) => {\n  if (error) {\n    return <div>{error.message}</div>;\n  } else if (props) {\n    return <div>{props.page.name} is great!</div>;\n  }\n  return <div>Loading</div>;\n}\n\nconst Example = (props) => {\n  return (\n    <QueryRenderer\n      environment={environment}\n      query={graphql`\n        query ExampleQuery($pageID: ID!) {\n          page(id: $pageID) {\n            name\n          }\n        }\n      `}\n      variables={{\n        pageID: '110798995619330',\n      }}\n      render={renderQuery}\n    />\n  );\n}\n\n")))}d.isMDXComponent=!0}}]);