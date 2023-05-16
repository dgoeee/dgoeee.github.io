"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[3282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Empty states",description:"Empty states or blank pages are commonly used as placeholders for first-use, empty data or error screens. Their aim is to engage users when there is no content to display and that is why their design is extremely important from the point of view of the user experience of your website or app."},i=void 0,s={unversionedId:"\u6458\u6284-tabler/components/empty",id:"\u6458\u6284-tabler/components/empty",title:"Empty states",description:"Empty states or blank pages are commonly used as placeholders for first-use, empty data or error screens. Their aim is to engage users when there is no content to display and that is why their design is extremely important from the point of view of the user experience of your website or app.",source:"@site/docs/book2/01-\u6458\u6284-tabler/components/empty.mdx",sourceDirName:"01-\u6458\u6284-tabler/components",slug:"/\u6458\u6284-tabler/components/empty",permalink:"/docs/book2/\u6458\u6284-tabler/components/empty",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/components/empty.mdx",tags:[],version:"current",frontMatter:{title:"Empty states",description:"Empty states or blank pages are commonly used as placeholders for first-use, empty data or error screens. Their aim is to engage users when there is no content to display and that is why their design is extremely important from the point of view of the user experience of your website or app."},sidebar:"sidebarsBook2",previous:{title:"Dropzone",permalink:"/docs/book2/\u6458\u6284-tabler/components/dropzone"},next:{title:"Icons",permalink:"/docs/book2/\u6458\u6284-tabler/components/icons"}},l={},p=[{value:"Default markup",id:"default-markup",level:2},{value:"Empty state with illustration",id:"empty-state-with-illustration",level:2},{value:"Empty state with header",id:"empty-state-with-header",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-markup"},"Default markup"),(0,o.kt)("p",null,"Use the default empty state to engage users in the critical moments of their experience with your website or app. A good empty state screen should let users know what is happening and what they should do next as well as encourage them to take action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<div class="empty">\n  <div class="empty-icon">\n    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n      <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n      <circle cx="12" cy="12" r="9" />\n      <line x1="9" y1="10" x2="9.01" y2="10" />\n      <line x1="15" y1="10" x2="15.01" y2="10" />\n      <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />\n    </svg>\n  </div>\n  <p class="empty-title">No results found</p>\n  <p class="empty-subtitle text-muted">\n    Try adjusting your search or filter to find what you\'re looking for.\n  </p>\n  <div class="empty-action">\n    <a href="#" class="btn btn-primary">\n      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n        <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n        <circle cx="10" cy="10" r="7" />\n        <line x1="21" y1="21" x2="15" y2="15" />\n      </svg>\n      Search again\n    </a>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"empty-state-with-illustration"},"Empty state with illustration"),(0,o.kt)("p",null,"Make your empty state screen more attractive and engaging by adding an illustration. Thanks to a more personalized design, you will improve your brand image and make your website or app more user friendly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<div class="empty">\n  <div class="empty-img"><img src="..." height="128" alt="" />\n  </div>\n  <p class="empty-title">Invoices are managed from here</p>\n  <p class="empty-subtitle text-muted">\n    Try adjusting your search or filter to find what you\'re looking for.\n  </p>\n  <div class="empty-action">\n    <a href="#" class="btn btn-primary">\n      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n        <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n        <line x1="12" y1="5" x2="12" y2="19" />\n        <line x1="5" y1="12" x2="19" y2="12" />\n      </svg>\n      New invoice\n    </a>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"empty-state-with-header"},"Empty state with header"),(0,o.kt)("p",null,"Instead of adding an icon or illustration you can simply give the text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"example",example:!0},'<div class="empty">\n  <div class="empty-header">404</div>\n  <p class="empty-title">Oops\u2026 You just found an error page</p>\n  <p class="empty-subtitle text-muted">\n    Try adjusting your search or filter to find what you\'re looking for.\n  </p>\n  <div class="empty-action">\n    <a href="#" class="btn btn-primary">\n      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n        <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n        <line x1="5" y1="12" x2="19" y2="12" />\n        <line x1="5" y1="12" x2="11" y2="18" />\n        <line x1="5" y1="12" x2="11" y2="6" />\n      </svg>\n      Take me home\n    </a>\n  </div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="empty">\n  <div class="empty-header">404</div>\n  <p class="empty-title">Oops\u2026 You just found an error page</p>\n  <p class="empty-subtitle text-muted">\n    Try adjusting your search or filter to find what you\'re looking for.\n  </p>\n  <div class="empty-action">\n    <a href="#" class="btn btn-primary">\n      \x3c!-- SVG icon from http://tabler-icons.io/i/arrow-left --\x3e\n      <svg>...</svg>\n      Take me home\n    </a>\n  </div>\n</div>\n')))}d.isMDXComponent=!0}}]);