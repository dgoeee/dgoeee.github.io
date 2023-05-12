"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[3972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,h=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Interactions",description:"Utility classes that change how users interact with contents of a website."},o=void 0,s={unversionedId:"\u6458\u6284-tabler/utilities/interactions",id:"\u6458\u6284-tabler/utilities/interactions",title:"Interactions",description:"Utility classes that change how users interact with contents of a website.",source:"@site/docs/book2/01-\u6458\u6284-tabler/utilities/interactions.mdx",sourceDirName:"01-\u6458\u6284-tabler/utilities",slug:"/\u6458\u6284-tabler/utilities/interactions",permalink:"/docs/book2/\u6458\u6284-tabler/utilities/interactions",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/utilities/interactions.mdx",tags:[],version:"current",frontMatter:{title:"Interactions",description:"Utility classes that change how users interact with contents of a website."},sidebar:"sidebarsBook2",previous:{title:"Cursors",permalink:"/docs/book2/\u6458\u6284-tabler/utilities/cursors"},next:{title:"page0",permalink:"/docs/book2/page0"}},l={},c=[{value:"Text selection",id:"text-selection",level:2},{value:"Pointer events",id:"pointer-events",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"text-selection"},"Text selection"),(0,i.kt)("p",null,"Change the way in which the content is selected when the user interacts with it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>\n<p class="user-select-auto">This paragraph has default select behavior.</p>\n<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>\n')),(0,i.kt)("h2",{id:"pointer-events"},"Pointer events"),(0,i.kt)("p",null,"Tabler provides ",(0,i.kt)("inlineCode",{parentName:"p"},".pe-none")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".pe-auto")," classes to prevent or add element interactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>\n<p><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>\n')))}d.isMDXComponent=!0}}]);