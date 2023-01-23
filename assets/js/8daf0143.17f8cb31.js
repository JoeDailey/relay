"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[20175],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>p});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),p=function(e){return function(t){var r=c(t.components);return o.createElement(e,a({},t,{components:r}))}},c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,n=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(r),u=i,f=p["".concat(n,".").concat(u)]||p[u]||m[u]||a;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var l=2;l<a;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var o=r(83117),i=r(80102),a=(r(67294),r(3905)),n=r(44996),s=["components"],d={id:"editor-support",title:"Editor Support",slug:"/editor-support/",keywords:["LSP","Language Server Protocol","VS Code","VSCode"]},l=void 0,p={unversionedId:"editor-support",id:"version-v14.0.0/editor-support",title:"Editor Support",description:"TL;DR: We have a VS Code Extension",source:"@site/versioned_docs/version-v14.0.0/editor-support.md",sourceDirName:".",slug:"/editor-support/",permalink:"/docs/editor-support/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/editor-support.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1674506374,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{id:"editor-support",title:"Editor Support",slug:"/editor-support/",keywords:["LSP","Language Server Protocol","VS Code","VSCode"]},sidebar:"docs",previous:{title:"Installing in a Project",permalink:"/docs/getting-started/installation-and-setup/"},next:{title:"GraphQL Server Specification",permalink:"/docs/guides/graphql-server-specification/"}},c={},u=[{value:"Relay compiler errors surface as red squiggles directly in your editor",id:"relay-compiler-errors-surface-as-red-squiggles-directly-in-your-editor",level:4},{value:"Autocomplete throughout your GraphQL tagged template literals",id:"autocomplete-throughout-your-graphql-tagged-template-literals",level:4},{value:"Hover to see type information and documentation about Relay-specific features",id:"hover-to-see-type-information-and-documentation-about-relay-specific-features",level:4},{value:"<code>@deprecated</code> fields are rendered using <del>strikethrough</del>",id:"deprecated-fields-are-rendered-using-strikethrough",level:4},{value:"Click-to-definition for fragments, fields and types",id:"click-to-definition-for-fragments-fields-and-types",level:4},{value:"Quick fix suggestions for common errors",id:"quick-fix-suggestions-for-common-errors",level:4},{value:"Language Server",id:"language-server",level:2},{value:"Why Have a Relay-Specific Editor Extension?",id:"why-have-a-relay-specific-editor-extension",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.mdx)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"TL;DR: We have a ",(0,a.mdx)("a",{parentName:"em",href:"https://marketplace.visualstudio.com/items?itemName=meta.relay"},"VS Code Extension"))),(0,a.mdx)("hr",null),(0,a.mdx)("p",null,"The Relay compiler has a rich understanding of the GraphQL embedded in your code. We want to use that understanding to improve the developer experience of writing apps with Relay. So, starting in ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/releases/tag/v14.0.0"},"v14.0.0"),", the new Rust Relay compiler can provide language features directly in your code editor. This means:"),(0,a.mdx)("h4",{id:"relay-compiler-errors-surface-as-red-squiggles-directly-in-your-editor"},"Relay compiler errors surface as red squiggles directly in your editor"),(0,a.mdx)("img",{src:(0,n.default)("img/docs/editor-support/diagnostics.png")}),(0,a.mdx)("h4",{id:"autocomplete-throughout-your-graphql-tagged-template-literals"},"Autocomplete throughout your GraphQL tagged template literals"),(0,a.mdx)("img",{src:(0,n.default)("img/docs/editor-support/autocomplete.png")}),(0,a.mdx)("h4",{id:"hover-to-see-type-information-and-documentation-about-relay-specific-features"},"Hover to see type information and documentation about Relay-specific features"),(0,a.mdx)("img",{src:(0,n.default)("img/docs/editor-support/hover.png")}),(0,a.mdx)("h4",{id:"deprecated-fields-are-rendered-using-strikethrough"},(0,a.mdx)("inlineCode",{parentName:"h4"},"@deprecated")," fields are rendered using ",(0,a.mdx)("del",{parentName:"h4"},"strikethrough")),(0,a.mdx)("img",{src:(0,n.default)("img/docs/editor-support/deprecated.png")}),(0,a.mdx)("h4",{id:"click-to-definition-for-fragments-fields-and-types"},"Click-to-definition for fragments, fields and types"),(0,a.mdx)("img",{src:(0,n.default)("img/docs/editor-support/go-to-def.gif")}),(0,a.mdx)("h4",{id:"quick-fix-suggestions-for-common-errors"},"Quick fix suggestions for common errors"),(0,a.mdx)("img",{src:(0,n.default)("img/docs/editor-support/code-actions.png")}),(0,a.mdx)("h2",{id:"language-server"},"Language Server"),(0,a.mdx)("p",null,"The editor support is implemented using the ",(0,a.mdx)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/"},"Language Server Protocol")," which means it can be used by a variety of editors, but in tandem with this release, ",(0,a.mdx)("a",{parentName:"p",href:"https://twitter.com/b_ez_man"},"Terence Bezman")," from ",(0,a.mdx)("a",{parentName:"p",href:"https://www.coinbase.com/"},"Coinbase")," has contributed an official VS Code extension."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=meta.relay"},(0,a.mdx)("strong",{parentName:"a"},"Find it here!"))),(0,a.mdx)("h2",{id:"why-have-a-relay-specific-editor-extension"},"Why Have a Relay-Specific Editor Extension?"),(0,a.mdx)("p",null,"The GraphQL foundation has an official language server and ",(0,a.mdx)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql"},"VS Code extension")," which provides editor support for GraphQL generically. This can provide a good baseline experience, but for Relay users, getting this information directly from the Relay compiler offers a number of benefits:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Relay compiler errors can surface directly in the editor as \u201cproblems\u201d, often with suggested quick fixes"),(0,a.mdx)("li",{parentName:"ul"},"Hover information is aware Relay-specific features and directives and can link out to relevant documentation")))}f.isMDXComponent=!0}}]);