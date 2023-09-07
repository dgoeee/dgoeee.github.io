"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[4544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),o=r(86010),a=r(52802),i=r(39960),c=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function d(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},66043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const i={date:"2023-05-03T15:42",description:"\u9488\u5bf9\u641c\u7d22\u5f15\u64ce\u7684seo\u4fe1\u606f\uff0c\u6b63\u5e38\u7f51\u9875\u6d4f\u89c8\u4e0d\u4f1a\u770b\u89c1\u8fd9\u4e2a\u4e1c\u897f",authors:["dgoeee"],tags:["\u56fe\u5e8a","\u6d4b\u8bd5"],keywords:["\u56fe\u5e8a","\u6d4b\u8bd5","draft.art"],image:"img/logo.svg"},c=void 0,s={unversionedId:"\u56fe\u5e8a\u6d4b\u8bd5/\u56fe\u5e8a\u6d4b\u8bd5",id:"\u56fe\u5e8a\u6d4b\u8bd5/\u56fe\u5e8a\u6d4b\u8bd5",title:"\u56fe\u5e8a\u6d4b\u8bd5",description:"\u9488\u5bf9\u641c\u7d22\u5f15\u64ce\u7684seo\u4fe1\u606f\uff0c\u6b63\u5e38\u7f51\u9875\u6d4f\u89c8\u4e0d\u4f1a\u770b\u89c1\u8fd9\u4e2a\u4e1c\u897f",source:"@site/docs/book1/97-\u56fe\u5e8a\u6d4b\u8bd5/97-\u56fe\u5e8a\u6d4b\u8bd5.md",sourceDirName:"97-\u56fe\u5e8a\u6d4b\u8bd5",slug:"/\u56fe\u5e8a\u6d4b\u8bd5/",permalink:"/docs/book1/\u56fe\u5e8a\u6d4b\u8bd5/",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book1/97-\u56fe\u5e8a\u6d4b\u8bd5/97-\u56fe\u5e8a\u6d4b\u8bd5.md",tags:[{label:"\u56fe\u5e8a",permalink:"/docs/book1/tags/\u56fe\u5e8a"},{label:"\u6d4b\u8bd5",permalink:"/docs/book1/tags/\u6d4b\u8bd5"}],version:"current",sidebarPosition:97,frontMatter:{date:"2023-05-03T15:42",description:"\u9488\u5bf9\u641c\u7d22\u5f15\u64ce\u7684seo\u4fe1\u606f\uff0c\u6b63\u5e38\u7f51\u9875\u6d4f\u89c8\u4e0d\u4f1a\u770b\u89c1\u8fd9\u4e2a\u4e1c\u897f",authors:["dgoeee"],tags:["\u56fe\u5e8a","\u6d4b\u8bd5"],keywords:["\u56fe\u5e8a","\u6d4b\u8bd5","draft.art"],image:"img/logo.svg"},sidebar:"sidebarsBook1",previous:{title:"Otsu\u7b97\u6cd5\u548c\u6563\u70b9\u56fe",permalink:"/docs/book1/GPT\u95ee\u7b54/\u56fe\u50cf\u5904\u7406/Otsu\u7b97\u6cd5\u548c\u6563\u70b9\u56fe"},next:{title:"\u5f15\u8a00",permalink:"/docs/book1/\u56fe\u5e8a\u6d4b\u8bd5/\u5f15\u8a00/"}},l={},p=[],m={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.ghostoact.com/static/arts/img/splash/abihdv5kywbxlzpvrzcuk3aph9j1je2b.jpg",alt:null})),(0,o.kt)(a.Z,{mdxType:"DocCardList"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u7f51\u9875\u56fe\u7247\u5747\u672a\u538b\u7f29")),(0,o.kt)("p",{parentName:"admonition"},"\u8bf7\u77e5\u6089\u56fe\u50cf\u7684\u5927\u5c0f\uff0c\u53ef\u80fd\u4f1a\u5f88\u5938\u5f20\uff0c\u5927\u90e8\u5206\u57283M-20M\u8303\u56f4\u5185")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20230503230327247",src:r(37310).Z,width:"931",height:"473"})))}u.isMDXComponent=!0},37310:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230503230327247-0468f3ad180d10c6b9f5651f86e0f6ab.png"}}]);