(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return d}));var a=r(164),n=r(165),o=(r(0),r(166)),c={title:"Generalized Metadata Store (GMS) Docker Image",hide_title:!0,slug:"/docker/datahub-gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms/README.md"},i={unversionedId:"docker/datahub-gms/README",id:"docker/datahub-gms/README",isDocsHomePage:!1,title:"Generalized Metadata Store (GMS) Docker Image",description:"DataHub Generalized Metadata Store (GMS) Docker Image",source:"@site/genDocs/docker/datahub-gms/README.md",slug:"/docker/datahub-gms",permalink:"/docs/docker/datahub-gms",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms/README.md",version:"current"},u=[{value:"Other Database Platforms",id:"other-database-platforms",children:[]}],s={rightToc:u};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"datahub-generalized-metadata-store-gms-docker-image"},"DataHub Generalized Metadata Store (GMS) Docker Image"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/actions?query=workflow%3A%22datahub-gms+docker%22"},Object(o.b)("img",{parentName:"a",src:"https://github.com/linkedin/datahub/workflows/datahub-gms%20docker/badge.svg",alt:"datahub-gms docker"}))),Object(o.b)("p",null,"Refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms"},"DataHub GMS Service")," to have a quick understanding of the architecture and\nresponsibility of this service for the DataHub."),Object(o.b)("h2",{id:"other-database-platforms"},"Other Database Platforms"),Object(o.b)("p",null,"While GMS defaults to using MySQL as its storage backend, it is possible to switch to any of the\n",Object(o.b)("a",{parentName:"p",href:"https://ebean.io/docs/database/"},"database platforms")," supported by Ebean."),Object(o.b)("p",null,"For example, you can run the following command to start a GMS that connects to a PostgreSQL backend."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"(cd docker/ && docker-compose -f docker-compose.yml -f docker-compose.postgre.yml -p datahub up)\n")),Object(o.b)("p",null,"or a MariaDB backend"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"(cd docker/ && docker-compose -f docker-compose.yml -f docker-compose.mariadb.yml -p datahub up)\n")))}d.isMDXComponent=!0},164:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},165:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=d(r),p=a,m=b["".concat(c,".").concat(p)]||b[p]||l[p]||o;return r?n.a.createElement(m,i(i({ref:t},s),{},{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);