"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[3351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Webfont"},l=void 0,i={unversionedId:"\u6458\u6284-tabler/icons/webfont",id:"\u6458\u6284-tabler/icons/webfont",title:"Webfont",description:"Installation",source:"@site/docs/book2/01-\u6458\u6284-tabler/icons/webfont.mdx",sourceDirName:"01-\u6458\u6284-tabler/icons",slug:"/\u6458\u6284-tabler/icons/webfont",permalink:"/docs/book2/\u6458\u6284-tabler/icons/webfont",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/icons/webfont.mdx",tags:[],version:"current",frontMatter:{title:"Webfont"},sidebar:"sidebarsBook2",previous:{title:"Tabler Icons for Vue",permalink:"/docs/book2/\u6458\u6284-tabler/icons/vue"},next:{title:"Page headers",permalink:"/docs/book2/\u6458\u6284-tabler/layout/page-headers"}},c={},s=[{value:"Installation",id:"installation",level:2},{value:"CDN",id:"cdn",level:3},{value:"Usage",id:"usage",level:2},{value:"HTML",id:"html",level:3},{value:"CSS",id:"css",level:3},{value:"SCSS",id:"scss",level:3}],p={toc:s},u="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/packages/og-package-webfont.png",alt:null})),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @tabler/icons-webfont\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @tabler/icons-webfont\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm install @tabler/icons-webfont\n")),(0,a.kt)("p",null,"or just ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tabler/tabler-icons/releases"},"download from Github"),"."),(0,a.kt)("h3",{id:"cdn"},"CDN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@$ICONS_VERSION/tabler-icons.min.css">\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"html"},"HTML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<i class="ti ti-brand-tabler"></i>\n')),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"content: 'ec8f';\n")),(0,a.kt)("h3",{id:"scss"},"SCSS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"content: $ti-icon-brand-tabler;\n")))}b.isMDXComponent=!0}}]);