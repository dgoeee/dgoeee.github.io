"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[4895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Download",description:"Download Tabler to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, yarn and more."},l=void 0,i={unversionedId:"\u6458\u6284-tabler/getting-started/download",id:"\u6458\u6284-tabler/getting-started/download",title:"Download",description:"Download Tabler to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, yarn and more.",source:"@site/docs/book2/01-\u6458\u6284-tabler/getting-started/download.mdx",sourceDirName:"01-\u6458\u6284-tabler/getting-started",slug:"/\u6458\u6284-tabler/getting-started/download",permalink:"/docs/book2/\u6458\u6284-tabler/getting-started/download",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/getting-started/download.mdx",tags:[],version:"current",frontMatter:{title:"Download",description:"Download Tabler to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, yarn and more."},sidebar:"sidebarsBook2",previous:{title:"Customize Tabler",permalink:"/docs/book2/\u6458\u6284-tabler/getting-started/customize"},next:{title:"Tabler Icons",permalink:"/docs/book2/\u6458\u6284-tabler/icons/"}},s={},c=[{value:"CDN via jsDelivr",id:"cdn-via-jsdelivr",level:2},{value:"Package managers",id:"package-managers",level:2}],p=(d="TabsPackage",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const u={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cdn-via-jsdelivr"},"CDN via jsDelivr"),(0,n.kt)("p",null,"All files included in ",(0,n.kt)("inlineCode",{parentName:"p"},"@tabler/core")," npm package are available over a jsDelivr CDN. Use it to deliver cached version of Tabler\u2019s compiled CSS and JS to your project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="$TABLER_CDN/dist/js/tabler.min.js"><\/script>\n<link rel="stylesheet" href="$TABLER_CDN/dist/css/tabler.min.css">\n')),(0,n.kt)("p",null,"You can also include additional Tabler plugins:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="$TABLER_CDN/dist/css/tabler-flags.min.css">\n<link rel="stylesheet" href="$TABLER_CDN/dist/css/tabler-payments.min.css">\n<link rel="stylesheet" href="$TABLER_CDN/dist/css/tabler-vendors.min.css">\n')),(0,n.kt)("h2",{id:"package-managers"},"Package managers"),(0,n.kt)("p",null,"Install Tabler in your Node.js powered apps with the npm package:"),(0,n.kt)(p,{name:"@tabler/core",mdxType:"TabsPackage"}),(0,n.kt)("p",null,"Tabler uses other packages to enhance the functionality for example charts and input masks. These are not automatically installed to avoid huge\ndependency trees and need to be installed by using npm install. We support the following packages as of writing."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apexcharts.com/"},"apexcharts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.jacklmoore.com/autosize/"},"autosize")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Choices-js/Choices"},"choices.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://inorganik.github.io/countUp.js/"},"countup.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flatpickr.js.org/"},"flatpickr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://imask.js.org/"},"imask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://litepicker.com/"},"litepicker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refreshless.com/nouislider/"},"nouislider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tom-select.js.org/"},"tom-select"))),(0,n.kt)("p",null,"For the complete list of supported packages you can check the peerDependencies section in our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tabler/tabler/blob/dev/package.json"},"package.json")))}g.isMDXComponent=!0}}]);