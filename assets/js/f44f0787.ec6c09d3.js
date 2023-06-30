"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[3022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),o=r(86010),a=r(52802),i=r(39960),c=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},70286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const i={date:"2023-05-03T15:42",description:"\u9488\u5bf9\u641c\u7d22\u5f15\u64ce\u7684seo\u4fe1\u606f\uff0c\u6b63\u5e38\u7f51\u9875\u6d4f\u89c8\u4e0d\u4f1a\u770b\u89c1\u8fd9\u4e2a\u4e1c\u897f",authors:["dgoeee"],tags:["test","\u6d4b\u8bd5"],keywords:["test","\u6d4b\u8bd5","draft.art"],image:"img/logo.svg"},c=void 0,s={unversionedId:"test/test",id:"test/test",title:"test",description:"\u9488\u5bf9\u641c\u7d22\u5f15\u64ce\u7684seo\u4fe1\u606f\uff0c\u6b63\u5e38\u7f51\u9875\u6d4f\u89c8\u4e0d\u4f1a\u770b\u89c1\u8fd9\u4e2a\u4e1c\u897f",source:"@site/docs/book1/90-test/90-test.md",sourceDirName:"90-test",slug:"/test/",permalink:"/docs/book1/test/",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book1/90-test/90-test.md",tags:[{label:"test",permalink:"/docs/book1/tags/test"},{label:"\u6d4b\u8bd5",permalink:"/docs/book1/tags/\u6d4b\u8bd5"}],version:"current",sidebarPosition:90,frontMatter:{date:"2023-05-03T15:42",description:"\u9488\u5bf9\u641c\u7d22\u5f15\u64ce\u7684seo\u4fe1\u606f\uff0c\u6b63\u5e38\u7f51\u9875\u6d4f\u89c8\u4e0d\u4f1a\u770b\u89c1\u8fd9\u4e2a\u4e1c\u897f",authors:["dgoeee"],tags:["test","\u6d4b\u8bd5"],keywords:["test","\u6d4b\u8bd5","draft.art"],image:"img/logo.svg"},sidebar:"sidebarsBook1",previous:{title:"Cadence Virtuoso Layout\u64cd\u4f5c\u6280\u5de7",permalink:"/docs/book1/Cadence Virtuoso Layout\u64cd\u4f5c\u6280\u5de7/"},next:{title:"page2",permalink:"/docs/book1/test/0/page2"}},l={},d=[],u={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);