"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[8784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?o.createElement(f,a(a({ref:t},m),{},{components:n})):o.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={title:"TinyMCE",libs:"tinymce",description:"The WYSIWYG editor that is flexible, customizable, and designed with the user in mind. TinyMCE can handle any challenge, from the most simple implementation through to the most complex use case."},a=void 0,l={unversionedId:"\u6458\u6284-tabler/components/tinymce",id:"\u6458\u6284-tabler/components/tinymce",title:"TinyMCE",description:"The WYSIWYG editor that is flexible, customizable, and designed with the user in mind. TinyMCE can handle any challenge, from the most simple implementation through to the most complex use case.",source:"@site/docs/book2/01-\u6458\u6284-tabler/components/tinymce.mdx",sourceDirName:"01-\u6458\u6284-tabler/components",slug:"/\u6458\u6284-tabler/components/tinymce",permalink:"/docs/book2/\u6458\u6284-tabler/components/tinymce",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/components/tinymce.mdx",tags:[],version:"current",frontMatter:{title:"TinyMCE",libs:"tinymce",description:"The WYSIWYG editor that is flexible, customizable, and designed with the user in mind. TinyMCE can handle any challenge, from the most simple implementation through to the most complex use case."},sidebar:"sidebarsBook2",previous:{title:"Timelines",permalink:"/docs/book2/\u6458\u6284-tabler/components/timelines"},next:{title:"Toasts",permalink:"/docs/book2/\u6458\u6284-tabler/components/toasts"}},c={},s=[{value:"Default text editor",id:"default-text-editor",level:2}],m={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.tiny.cloud/docs/"},"TinyMCE")," documentation."),(0,r.kt)("h2",{id:"default-text-editor"},"Default text editor"),(0,r.kt)("p",null,"Initialize TinyMCE 6 on any element (or elements) on the web page by passing an object containing a selector value to ",(0,r.kt)("inlineCode",{parentName:"p"},"tinymce.init()"),". The selector value can be any valid CSS selector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={2} height="25rem"',example:!0,code:!0,centered:!0,columns:"{2}",height:'"25rem"'},"<form method=\"post\">\n  <textarea id=\"tinymce-default\">Hello, <b>Tabler</b>!</textarea>\n</form>\n\n<script src=\"$TABLER_CDN/dist/libs/tinymce/tinymce.min.js\" defer><\/script>\n<script>\n  document.addEventListener(\"DOMContentLoaded\", function() {\n    let options = {\n      selector: '#tinymce-default',\n      height: 300,\n      menubar: false,\n      statusbar: false,\n      plugins: [\n        'advlist autolink lists link image charmap print preview anchor',\n        'searchreplace visualblocks code fullscreen',\n        'insertdatetime media table paste code help wordcount'\n      ],\n      toolbar: 'undo redo | formatselect | ' +\n        'bold italic backcolor | alignleft aligncenter ' +\n        'alignright alignjustify | bullist numlist outdent indent | ' +\n        'removeformat',\n      content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; -webkit-font-smoothing: antialiased; }'\n    }\n    if (localStorage.getItem(\"tablerTheme\") === 'dark') {\n      options.skin = 'oxide-dark';\n      options.content_css = 'dark';\n    }\n    tinyMCE.init(options);\n  })\n<\/script>\n")))}d.isMDXComponent=!0}}]);