"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59241],{25007:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v10.1.0","label":"v10.1.0","banner":"unmaintained","badge":true,"className":"docs-version-v10.1.0","isLast":false,"docsSidebars":{"version-v10.1.0/docs":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"Introduction to Relay","href":"/docs/v10.1.0/","docId":"introduction-to-relay"},{"type":"link","label":"Prerequisites","href":"/docs/v10.1.0/prerequisites","docId":"prerequisites"},{"type":"link","label":"Installation and Setup","href":"/docs/v10.1.0/installation-and-setup","docId":"installation-and-setup"},{"type":"link","label":"Quick Start Guide","href":"/docs/v10.1.0/quick-start-guide","docId":"quick-start-guide"}],"collapsed":true,"collapsible":true},{"type":"category","label":"API Reference","items":[{"type":"link","label":"GraphQL in Relay","href":"/docs/v10.1.0/graphql-in-relay","docId":"graphql-in-relay"},{"type":"link","label":"Relay Environment","href":"/docs/v10.1.0/relay-environment","docId":"relay-environment"},{"type":"link","label":"Network Layer","href":"/docs/v10.1.0/network-layer","docId":"network-layer"},{"type":"link","label":"QueryRenderer","href":"/docs/v10.1.0/query-renderer","docId":"query-renderer"},{"type":"link","label":"Fragment Container","href":"/docs/v10.1.0/fragment-container","docId":"fragment-container"},{"type":"link","label":"Refetch Container","href":"/docs/v10.1.0/refetch-container","docId":"refetch-container"},{"type":"link","label":"Pagination Container","href":"/docs/v10.1.0/pagination-container","docId":"pagination-container"},{"type":"link","label":"Mutations","href":"/docs/v10.1.0/mutations","docId":"mutations"},{"type":"link","label":"Subscriptions","href":"/docs/v10.1.0/subscriptions","docId":"subscriptions"},{"type":"link","label":"Relay Store","href":"/docs/v10.1.0/relay-store","docId":"relay-store"},{"type":"link","label":"fetchQuery","href":"/docs/v10.1.0/fetch-query","docId":"fetch-query"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Routing","href":"/docs/v10.1.0/routing","docId":"routing"},{"type":"link","label":"Debugging","href":"/docs/v10.1.0/relay-debugging","docId":"relay-debugging"},{"type":"link","label":"GraphQL Server Specification","href":"/docs/v10.1.0/graphql-server-specification","docId":"graphql-server-specification"},{"type":"link","label":"Persisted Queries","href":"/docs/v10.1.0/persisted-queries","docId":"persisted-queries"},{"type":"link","label":"Type Emission","href":"/docs/v10.1.0/type-emission","docId":"type-emission"},{"type":"link","label":"Testing Relay Components","href":"/docs/v10.1.0/testing-relay-components","docId":"testing-relay-components"},{"type":"link","label":"Local State Management","href":"/docs/v10.1.0/local-state-management","docId":"local-state-management"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Principles & Architecture","items":[{"type":"link","label":"Thinking in GraphQL","href":"/docs/v10.1.0/thinking-in-graphql","docId":"thinking-in-graphql"},{"type":"link","label":"Thinking In Relay","href":"/docs/v10.1.0/thinking-in-relay","docId":"thinking-in-relay"},{"type":"link","label":"Architecture Overview","href":"/docs/v10.1.0/architecture-overview","docId":"architecture-overview"},{"type":"link","label":"Compiler Architecture","href":"/docs/v10.1.0/compiler-architecture","docId":"compiler-architecture"},{"type":"link","label":"Runtime Architecture","href":"/docs/v10.1.0/runtime-architecture","docId":"runtime-architecture"},{"type":"link","label":"Videos","href":"/docs/v10.1.0/videos","docId":"videos"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Community","items":[{"type":"link","label":"Community Learning Resources","href":"/docs/v10.1.0/community-learning-resources","docId":"community-learning-resources"}],"collapsed":true,"collapsible":true}]},"docs":{"api-cheatsheet":{"id":"api-cheatsheet","title":"API Cheatsheet","description":"A reference for translating between the Relay Classic and Relay Modern APIs."},"architecture-overview":{"id":"architecture-overview","title":"Architecture Overview","description":"This document, together with Runtime Architecture and Compiler Architecture, describes the high-level architecture of Relay \\"Modern\\". The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about using Relay to build products, the other sections might be more helpful.","sidebar":"version-v10.1.0/docs"},"community-learning-resources":{"id":"community-learning-resources","title":"Community Learning Resources","description":"Relay example projects","sidebar":"version-v10.1.0/docs"},"compatibility-cheatsheet":{"id":"compatibility-cheatsheet","title":"Compatibility Cheatsheet","description":"What works with what? Relay Compat (\'react-relay/compat\') is the most flexible."},"compiler-architecture":{"id":"compiler-architecture","title":"Compiler Architecture","description":"The compiler is a set of modules designed to extract GraphQL documents from across a codebase, transform/optimize them, and generate build artifacts. Examples of common types of artifacts include optimized GraphQL to persist to your server, runtime representations of the queries for use with GraphQL clients such as the Relay runtime, or generated source code for use with GraphQL frameworks for compiled languages (Java/Swift/etc).","sidebar":"version-v10.1.0/docs"},"conversion-playbook":{"id":"conversion-playbook","title":"Conversion Playbook","description":"Incrementally modernize your Relay Classic app in these steps:"},"conversion-scripts":{"id":"conversion-scripts","title":"Conversion Scripts","description":"We built a few scripts to help you with the conversion process. Check them out at github.com/relayjs/relay-codemod."},"converting-mutations":{"id":"converting-mutations","title":"Converting Mutations","description":"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment."},"fetch-query":{"id":"fetch-query","title":"fetchQuery","description":"You can use the fetchQuery function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer.","sidebar":"version-v10.1.0/docs"},"fragment-container":{"id":"fragment-container","title":"Fragment Container","description":"A Fragment Container is a higher-order component that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a specification of the data needed for rendering, and then Relay will guarantee that this data is available before rendering occurs.","sidebar":"version-v10.1.0/docs"},"graphql-in-relay":{"id":"graphql-in-relay","title":"GraphQL in Relay","description":"Table of Contents:","sidebar":"version-v10.1.0/docs"},"graphql-server-specification":{"id":"graphql-server-specification","title":"GraphQL Server Specification","description":"The goal of this document is to specify the assumptions that Relay makes about a GraphQL server and demonstrate them through an example GraphQL schema.","sidebar":"version-v10.1.0/docs"},"installation-and-setup":{"id":"installation-and-setup","title":"Installation and Setup","description":"Installation","sidebar":"version-v10.1.0/docs"},"introduction-to-relay":{"id":"introduction-to-relay","title":"Introduction to Relay","description":"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation.","sidebar":"version-v10.1.0/docs"},"local-state-management":{"id":"local-state-management","title":"Local State Management","description":"Relay can be used to read and write local data, and act as a single source of truth for all data in your client application.","sidebar":"version-v10.1.0/docs"},"migration-setup":{"id":"migration-setup","title":"Migration Setup","description":"Installation"},"mutations":{"id":"mutations","title":"Mutations","description":"Table of Contents:","sidebar":"version-v10.1.0/docs"},"network-layer":{"id":"network-layer","title":"Network Layer","description":"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the NetworkLayer interface when creating an instance of a Relay Environment. The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application\'s network configuration.","sidebar":"version-v10.1.0/docs"},"new-in-relay-modern":{"id":"new-in-relay-modern","title":"New in Relay Modern","description":"A summary of the improvements and new features in Relay Modern."},"pagination-container":{"id":"pagination-container","title":"Pagination Container","description":"Pagination Container is also a higher-order component, similar to a Fragment Container, that is designed to simplify the workflow of loading more items in a list \u2014 in many cases, we don\'t want to fetch all the data at once but lazily load more data. It relies on a GraphQL server exposing connections in a standardized way. For a detailed spec, please check out this page.","sidebar":"version-v10.1.0/docs"},"persisted-queries":{"id":"persisted-queries","title":"Persisted Queries","description":"The relay compiler supports persisted queries which is useful because:","sidebar":"version-v10.1.0/docs"},"prerequisites":{"id":"prerequisites","title":"Prerequisites","description":"React","sidebar":"version-v10.1.0/docs"},"query-renderer":{"id":"query-renderer","title":"QueryRenderer","description":"A QueryRenderer is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the render prop to render the resulting data.","sidebar":"version-v10.1.0/docs"},"quick-start-guide":{"id":"quick-start-guide","title":"Quick Start Guide","description":"In this guide we are going to give a brief overview of how Relay works and how to use it, using as reference an example todo list app. For more thorough documentation, check out our Guides and API sections.","sidebar":"version-v10.1.0/docs"},"refetch-container":{"id":"refetch-container","title":"Refetch Container","description":"A Refetch Container is also a higher-order component that works like a regular Fragment Container, but provides the additional ability to fetch a new GraphQL query with different variables and re-render the component with the new result.","sidebar":"version-v10.1.0/docs"},"relay-compat":{"id":"relay-compat","title":"Compatibility Mode","description":"Migrating a Relay Classic app to Relay Modern doesn\'t require rewriting from"},"relay-debugging":{"id":"relay-debugging","title":"Debugging","description":"If you\'re new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records.","sidebar":"version-v10.1.0/docs"},"relay-environment":{"id":"relay-environment","title":"Relay Environment","description":"The Relay \\"Environment\\" bundles together the configuration, cache storage, and network-handling that Relay needs in order to operate.","sidebar":"version-v10.1.0/docs"},"relay-store":{"id":"relay-store","title":"Relay Store","description":"The Relay Store can be used to programmatically update client-side data inside updater functions. The following is a reference of the Relay Store interface.","sidebar":"version-v10.1.0/docs"},"routing":{"id":"routing","title":"Routing","description":"Historically, Relay started out internally at Facebook as a routing framework. However, Relay no longer makes any assumptions about routing, and works with a variety of routing options.","sidebar":"version-v10.1.0/docs"},"runtime-architecture":{"id":"runtime-architecture","title":"Runtime Architecture","description":"The Relay runtime is a full-featured GraphQL client that is designed for high performance even on low-end mobile devices and is capable of scaling to large, complex apps. The runtime API is not intended to be used directly in product code, but rather to provide a foundation for building higher-level product APIs such as React/Relay. This foundation includes:","sidebar":"version-v10.1.0/docs"},"subscriptions":{"id":"subscriptions","title":"Subscriptions","description":"Relay exposes the following APIs to create subscriptions.","sidebar":"version-v10.1.0/docs"},"testing-relay-components":{"id":"testing-relay-components","title":"Testing Relay Components","description":"The purpose of this document is to cover the Relay APIs for testing Relay components.","sidebar":"version-v10.1.0/docs"},"thinking-in-graphql":{"id":"thinking-in-graphql","title":"Thinking in GraphQL","description":"GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. It provides a way for developers to specify the precise data needed for a view and enables a client to fetch that data in a single network request. Compared to traditional approaches such as REST, GraphQL helps applications to fetch data more efficiently (compared to resource-oriented REST approaches) and avoid duplication of server logic (which can occur with custom endpoints). Furthermore, GraphQL helps developers to decouple product code and server logic. For example, a product can fetch more or less information without requiring a change to every relevant server endpoint. It\'s a great way to fetch data.","sidebar":"version-v10.1.0/docs"},"thinking-in-relay":{"id":"thinking-in-relay","title":"Thinking In Relay","description":"Relay\'s approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable components, allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are declarative: they allow developers to specify what the UI should look like for a given state, and not have to worry about how to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands.","sidebar":"version-v10.1.0/docs"},"type-emission":{"id":"type-emission","title":"Type Emission","description":"As part of its normal work, relay-compiler will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that relay-compiler generates to describe your operations and fragments.","sidebar":"version-v10.1.0/docs"},"upgrading-setvariables":{"id":"upgrading-setvariables","title":"Upgrading setVariables","description":"Examples on how to migrate this.props.setVariables calls from the old API."},"videos":{"id":"videos","title":"Videos","description":"Facebook F8 2017","sidebar":"version-v10.1.0/docs"}}}')}}]);