(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{1171:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var d=o.a.createContext({}),f=function(t){var e=o.a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=f(t.components);return o.a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},l=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=f(r),l=n,m=s["".concat(u,".").concat(l)]||s[l]||p[l]||i;return r?o.a.createElement(m,a(a({ref:e},d),{},{components:r})):o.a.createElement(m,a({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,u=new Array(i);u[0]=l;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:n,u[1]=a;for(var d=2;d<i;d++)u[d]=r[d];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1178:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return u}));var n=r(22),o=r(1179);function i(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,d=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return e+r;var f=r.startsWith(e)?r:e+r.replace(/^\//,"");return d?t+f:f}(i,r,t,e)}}}function u(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},1179:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},1185:function(t,e,r){"use strict";r.r(e);var n=r(11);r.d(e,"MemoryRouter",(function(){return n.d})),r.d(e,"Prompt",(function(){return n.f})),r.d(e,"Redirect",(function(){return n.g})),r.d(e,"Route",(function(){return n.h})),r.d(e,"Router",(function(){return n.i})),r.d(e,"StaticRouter",(function(){return n.j})),r.d(e,"Switch",(function(){return n.k})),r.d(e,"generatePath",(function(){return n.l})),r.d(e,"matchPath",(function(){return n.m})),r.d(e,"useHistory",(function(){return n.n})),r.d(e,"useLocation",(function(){return n.o})),r.d(e,"useParams",(function(){return n.p})),r.d(e,"useRouteMatch",(function(){return n.q})),r.d(e,"withRouter",(function(){return n.r})),r.d(e,"BrowserRouter",(function(){return n.a})),r.d(e,"HashRouter",(function(){return n.b})),r.d(e,"Link",(function(){return n.c})),r.d(e,"NavLink",(function(){return n.e}))},653:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return d})),r.d(e,"toc",(function(){return f})),r.d(e,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(1171)),u=r(1185),a=r(1178),c={id:"step-by-step-guide-redirect",slug:"/migration-and-compatibility/uprading-to-relay-hooks"},d={unversionedId:"migration-and-compatibility/step-by-step-guide-redirect",id:"migration-and-compatibility/step-by-step-guide-redirect",isDocsHomePage:!1,title:"step-by-step-guide-redirect",source:"@site/docs/current/migration-and-compatibility/uprading-to-relay-hooks.md",slug:"/migration-and-compatibility/uprading-to-relay-hooks",permalink:"/docs/next/migration-and-compatibility/uprading-to-relay-hooks",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/current/migration-and-compatibility/uprading-to-relay-hooks.md",version:"current",lastUpdatedBy:"Brad Zacher",lastUpdatedAt:1615331749},f=[],s={toc:f};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)(u.Redirect,{to:Object(a.a)("/docs/migration-and-compatibility/"),mdxType:"Redirect"}))}p.isMDXComponent=!0}}]);