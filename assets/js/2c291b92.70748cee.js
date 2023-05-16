"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[2210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"Inline player",libs:"plyr",description:"A simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player that supports modern browsers."},a=void 0,l={unversionedId:"\u6458\u6284-tabler/components/inline-player",id:"\u6458\u6284-tabler/components/inline-player",title:"Inline player",description:"A simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player that supports modern browsers.",source:"@site/docs/book2/01-\u6458\u6284-tabler/components/inline-player.mdx",sourceDirName:"01-\u6458\u6284-tabler/components",slug:"/\u6458\u6284-tabler/components/inline-player",permalink:"/docs/book2/\u6458\u6284-tabler/components/inline-player",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/components/inline-player.mdx",tags:[],version:"current",frontMatter:{title:"Inline player",libs:"plyr",description:"A simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player that supports modern browsers."},sidebar:"sidebarsBook2",previous:{title:"Icons",permalink:"/docs/book2/\u6458\u6284-tabler/components/icons"},next:{title:"Modals",permalink:"/docs/book2/\u6458\u6284-tabler/components/modals"}},p={},s=[{value:"Sample demo",id:"sample-demo",level:2},{value:"Vimeo file",id:"vimeo-file",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sample-demo"},"Sample demo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"example code vendors",example:!0,code:!0,vendors:!0},'<div id="player-youtube" data-plyr-provider="youtube" data-plyr-embed-id="dQw4w9WgXcQ"></div>\n\n<script src="$TABLER_CDN/dist/libs/plyr/dist/plyr.min.js"><\/script>\n<script>\n  document.addEventListener("DOMContentLoaded", function() {\n    window.Plyr && (new Plyr(\'#player-youtube\'));\n  });\n<\/script>\n')),(0,o.kt)("h2",{id:"vimeo-file"},"Vimeo file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"example code vendors",example:!0,code:!0,vendors:!0},'<div id="player-vimeo" data-plyr-provider="vimeo" data-plyr-embed-id="515937365"></div>\n\n<script src="$TABLER_CDN/dist/libs/plyr/dist/plyr.min.js"><\/script>\n<script>\n  document.addEventListener("DOMContentLoaded", function() {\n    window.Plyr && (new Plyr(\'#player-vimeo\'));\n  });\n<\/script>\n')))}m.isMDXComponent=!0}}]);