"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5609],{4137:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5612:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return h},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],l={title:"datahub-graphql-core",sidebar_label:"datahub-graphql-core",slug:"/datahub-graphql-core",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/README.md"},s="DataHub GraphQL Core",p={unversionedId:"datahub-graphql-core/README",id:"datahub-graphql-core/README",isDocsHomePage:!1,title:"datahub-graphql-core",description:"DataHub GraphQL API is a shared lib module containing a GraphQL API on top of the GMS service layer. It exposes a graph-based representation",source:"@site/genDocs/datahub-graphql-core/README.md",sourceDirName:"datahub-graphql-core",slug:"/datahub-graphql-core",permalink:"/docs/datahub-graphql-core",editUrl:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/README.md",tags:[],version:"current",frontMatter:{title:"datahub-graphql-core",sidebar_label:"datahub-graphql-core",slug:"/datahub-graphql-core",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/README.md"},sidebar:"overviewSidebar",previous:{title:"datahub-frontend",permalink:"/docs/datahub-frontend"},next:{title:"metadata-service",permalink:"/docs/metadata-service"}},h=[{value:"Extending the Graph",id:"extending-the-graph",children:[{value:"Adding an Entity",id:"adding-an-entity",children:[{value:"Enabling Search for a new Entity",id:"enabling-search-for-a-new-entity",children:[],level:4}],level:3}],level:2}],d={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-graphql-core"},"DataHub GraphQL Core"),(0,o.kt)("p",null,"DataHub GraphQL API is a shared lib module containing a GraphQL API on top of the GMS service layer. It exposes a graph-based representation\npermitting reads and writes against the entities and aspects on the Metadata Graph, including Datasets, CorpUsers, & more. "),(0,o.kt)("p",null,"Contained within this module are "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GMS Schema"),": A GQL schema that based on GMS models, located under ",(0,o.kt)("inlineCode",{parentName:"li"},"resources/gms.graphql"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GMS Data Fetchers")," (Resolvers): Components used by the GraphQL engine to resolve individual fields in the GQL schema."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GMS Data Loaders"),": Components used by the GraphQL engine to fetch data from downstream sources efficiently (by batching). "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GraphQLEngine"),": A wrapper on top of the default ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQL")," object provided by ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql-java"),". Provides a way to configure all of the important stuff using a simple ",(0,o.kt)("inlineCode",{parentName:"li"},"Builder API"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GMSGraphQLEngine"),": An engine capable of resolving the GMS schema using the data fetchers + loaders mentioned above (with no additional configuration required). ")),(0,o.kt)("p",null,'We\'ve chosen to place these components in a library module so that GraphQL servers can be deployed in multiple "modes":'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Standalone"),": GraphQL facade, mainly used for programmatic access to the GMS graph from a non-Java environment"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Embedded"),": Leverageable within another Java server to surface an extended GraphQL schema. For example, we use this to extend the GMS GraphQL schema in ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," ")),(0,o.kt)("h2",{id:"extending-the-graph"},"Extending the Graph"),(0,o.kt)("h3",{id:"adding-an-entity"},"Adding an Entity"),(0,o.kt)("p",null,"When adding an entity to the GMS graph, the following steps should be followed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extend ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/resources/entity.graphql"},"entity.graphql")," schema with new ",(0,o.kt)("inlineCode",{parentName:"li"},"types")," (Queries) or ",(0,o.kt)("inlineCode",{parentName:"li"},"inputs")," (Mutations) required for fetching & updating your Entity.")),(0,o.kt)("p",null,"These models should generally mirror the GMS models exactly, with notable exceptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maps"),": the GQL model must instead contain a list of { key, value } objects (e.g. Dataset.pdl 'properties' field)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Foreign-Keys"),": Foreign-key references embedded in GMS models should be resolved if the referenced entity exists in the GQL schema,\nreplacing the key with the actual entity model. (Example: replacing the 'owner' urn field in 'Ownership' with an actual ",(0,o.kt)("inlineCode",{parentName:"li"},"CorpUser")," type)")),(0,o.kt)("p",null,"In GraphQL, the new Entity should extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity")," interface. Additionally, you will need to add a new symbol to the standard\n",(0,o.kt)("inlineCode",{parentName:"p"},"EntityType")," enum. "),(0,o.kt)("p",null,'The convention we follow is to have a top-level Query for each entity that takes a single "urn" parameter. This is for primary key lookups.\nSee all the existing entity Query types ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/resources/entity.graphql#L19"},"here"),"."),(0,o.kt)("p",null,"On rebuilding the module (",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew datahub-graphql-core:build"),") you'll find newly generated classes corresponding to\nthe types you've defined inside the GraphQL schema inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"mainGeneratedGraphQL")," folder. These classes will be used in the next step."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Implement ",(0,o.kt)("inlineCode",{parentName:"li"},"EntityType")," classes for any new entities ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These 'type' classes define how to load entities from GMS, and map them to the GraphQL data model. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/types/dataset/DatasetType.java"},"DatasetType.java")," as an example.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Implement ",(0,o.kt)("inlineCode",{parentName:"li"},"Mappers")," to transform Pegasus model returned by GMS to an auto-generated GQL POJO. (under ",(0,o.kt)("inlineCode",{parentName:"li"},"/mainGeneratedGraphQL"),", generated on ",(0,o.kt)("inlineCode",{parentName:"li"},"./gradlew datahub-graphql-core:build"),") These mappers\nwill be used inside the type class defined in step 2. ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you've followed the guidance above, these mappers should be simple, mainly\nproviding identity mappings for fields that exist in both the GQL + Pegasus POJOs."),(0,o.kt)("li",{parentName:"ul"},"In some cases, you'll need to perform small lambdas (unions, maps) to materialize the GQL object. ")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Wire up your ",(0,o.kt)("inlineCode",{parentName:"li"},"EntityType")," to the GraphQL schema. ")),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/GmsGraphQLEngine.java"},"GmsGraphQLEngine.java"),' to\nconfigure the wiring for the GraphQL schema. This means associating "resolvers" to specific fields present in the GraphQL schema file.'),(0,o.kt)("p",null,"Inside of this file, you need to register your new ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," object to be used in resolving primary-key entity queries.\nTo do so, simply follow the examples for other entities. "),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityType")," test for the new type defined in Step 2. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/test/java/com/linkedin/datahub/graphql/types/container/ContainerTypeTest.java"},"ContainerTypeTest")," as an example.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"Resolver")," tests for any new ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchers")," that you needed to add. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/test/java/com/linkedin/datahub/graphql/resolvers/domain/SetDomainResolverTest.java"},"SetDomainResolverTest")," as an example.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"[Optional]"," Sometimes, your new entity will have relationships to other entities, or fields that require specific business logic\nas opposed to basic mapping from the GMS model. In such cases, we tend to create an entity-specific configuration method in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/GmsGraphQLEngine.java"},"GmsGraphQLEngine.java"),"\nwhich allows you to wire custom resolvers (DataFetchers) to the fields in your Entity type. You also may need to do this, depending\non the complexity of the new entity. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/GmsGraphQLEngine.java#L438"},"here")," for reference. "))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Note: If you want your new Entity to be "browsable" (folder navigation) via the UI, make sure you implement the ',(0,o.kt)("inlineCode",{parentName:"p"},"BrowsableEntityType")," interface.")),(0,o.kt)("h4",{id:"enabling-search-for-a-new-entity"},"Enabling Search for a new Entity"),(0,o.kt)("p",null,"In order to enable searching an Entity, you'll need to modify the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/resolvers/search/SearchAcrossEntitiesResolver.java"},"SearchAcrossEntities.java")," resolver, which enables unified search\nacross all DataHub entities. "),(0,o.kt)("p",null,"Steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add your new Entity type to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/resolvers/search/SearchAcrossEntitiesResolver.java#L32"},"this list"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a new statement to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/datahub-graphql-core/src/main/java/com/linkedin/datahub/graphql/types/common/mappers/UrnToEntityMapper.java#L35"},"UrnToEntityMapper.java"),'. This maps\nan URN to a "placeholder" GraphQL entity which is subsequently resolved by the GraphQL engine.')),(0,o.kt)("p",null,"That should be it! "),(0,o.kt)("p",null,"Now, you can try to issue a search for the new entities you've ingested"))}u.isMDXComponent=!0}}]);