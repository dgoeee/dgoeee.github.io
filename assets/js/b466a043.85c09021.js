"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[7412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Tabler Icons for Vue"},l=void 0,i={unversionedId:"\u6458\u6284-tabler/icons/vue",id:"\u6458\u6284-tabler/icons/vue",title:"Tabler Icons for Vue",description:"Installation",source:"@site/docs/book2/01-\u6458\u6284-tabler/icons/vue.mdx",sourceDirName:"01-\u6458\u6284-tabler/icons",slug:"/\u6458\u6284-tabler/icons/vue",permalink:"/docs/book2/\u6458\u6284-tabler/icons/vue",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/icons/vue.mdx",tags:[],version:"current",frontMatter:{title:"Tabler Icons for Vue"},sidebar:"sidebarsBook2",previous:{title:"SVG version",permalink:"/docs/book2/\u6458\u6284-tabler/icons/svg"},next:{title:"Webfont",permalink:"/docs/book2/\u6458\u6284-tabler/icons/webfont"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Props",id:"props",level:3}],s=(u="TabsPackage",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const m={toc:c},d="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/packages/og-package-vue.png",alt:null})),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(s,{name:"@tabler/icons-vue",mdxType:"TabsPackage"}),(0,a.kt)("p",null,"or just ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tabler/tabler-icons/releases"},"download from Github"),"."),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"All icons are Vue components that contain SVG elements. So any icon can be imported and used as a component. It also helps to use threeshaking, so you only import the icons you use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},"<template>\n  <IconHome />\n</template>\n\n<script>\n// Returns Vue component\nimport { IconHome } from '@tabler/icons-vue';\n\nexport default {\n  components: { IconHome }\n};\n<\/script>\n")),(0,a.kt)("p",null,"You can pass additional props to adjust the icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<IconHome color="red" :size="48" stroke-width="1" />\n')),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"24")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"color")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"currentColor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"stroke")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"2")))))}b.isMDXComponent=!0}}]);