"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[3455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),o=r(86010),i=r(52802),c=r(39960),a=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:c},c))}function u(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},34871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),i=r(52991);const c={date:"2023-05-15T23:52",description:"\u6211\u5728\u8fd9\u91cc\u4ecb\u7ecd\u6211\u662f\u5982\u4f55\u5bf9\u7f51\u7ad9\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u4f18\u5316",authors:["dgoeee"],tags:["\u7f8e\u5316","SVG"],keywords:["\u7f8e\u5316","SVG","\u98ce\u683c"],image:"img/logo.svg"},a=void 0,s={unversionedId:"\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c/\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c",id:"\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c/\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c",title:"\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c",description:"\u6211\u5728\u8fd9\u91cc\u4ecb\u7ecd\u6211\u662f\u5982\u4f55\u5bf9\u7f51\u7ad9\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u4f18\u5316",source:"@site/docs/book1/98-\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/06-\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c/06-\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c.md",sourceDirName:"98-\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/06-\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c",slug:"/\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c/",permalink:"/docs/book1/\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c/",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book1/98-\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/06-\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c/06-\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c.md",tags:[{label:"\u7f8e\u5316",permalink:"/docs/book1/tags/\u7f8e\u5316"},{label:"SVG",permalink:"/docs/book1/tags/svg"}],version:"current",sidebarPosition:6,frontMatter:{date:"2023-05-15T23:52",description:"\u6211\u5728\u8fd9\u91cc\u4ecb\u7ecd\u6211\u662f\u5982\u4f55\u5bf9\u7f51\u7ad9\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u4f18\u5316",authors:["dgoeee"],tags:["\u7f8e\u5316","SVG"],keywords:["\u7f8e\u5316","SVG","\u98ce\u683c"],image:"img/logo.svg"},sidebar:"sidebarsBook1",previous:{title:"\u56fe\u5e8a",permalink:"/docs/book1/\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/\u56fe\u5e8a/"},next:{title:"\u5236\u4f5c\u4e00\u5957\u81ea\u5df1\u7684svg\u77e2\u91cf\u56fe",permalink:"/docs/book1/\u672c\u7f51\u9875\u642d\u5efa\u8fc7\u7a0b/\u505a\u51fa\u81ea\u5df1\u7684\u98ce\u683c/\u5236\u4f5c\u4e00\u5957\u81ea\u5df1\u7684svg\u77e2\u91cf\u56fe/"}},l={},d=[],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);