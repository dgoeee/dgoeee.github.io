"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[2482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Validation states",description:"To inform users whether the entered value is correct or not, use either of the validation states. Thanks to that, users will immediately know which form elements they need to correct and, if the state displays as invalid, why the value is incorrect."},i=void 0,l={unversionedId:"\u6458\u6284-tabler/forms/form-validation",id:"\u6458\u6284-tabler/forms/form-validation",title:"Validation states",description:"To inform users whether the entered value is correct or not, use either of the validation states. Thanks to that, users will immediately know which form elements they need to correct and, if the state displays as invalid, why the value is incorrect.",source:"@site/docs/book2/01-\u6458\u6284-tabler/forms/form-validation.mdx",sourceDirName:"01-\u6458\u6284-tabler/forms",slug:"/\u6458\u6284-tabler/forms/form-validation",permalink:"/docs/book2/\u6458\u6284-tabler/forms/form-validation",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/forms/form-validation.mdx",tags:[],version:"current",frontMatter:{title:"Validation states",description:"To inform users whether the entered value is correct or not, use either of the validation states. Thanks to that, users will immediately know which form elements they need to correct and, if the state displays as invalid, why the value is incorrect."},sidebar:"sidebarsBook2",previous:{title:"Form selectboxes",permalink:"/docs/book2/\u6458\u6284-tabler/forms/form-selectboxes"},next:{title:"Introduction",permalink:"/docs/book2/\u6458\u6284-tabler/getting-started/"}},s={},c=[{value:"Subtle validation states",id:"subtle-validation-states",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns="1" height="20rem"',example:!0,code:!0,centered:!0,columns:'"1"',height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Validation States </label>\n  <input type="text" class="form-control is-valid mb-2" placeholder="Valid State..." />\n  <input type="text" class="form-control is-invalid" placeholder="Invalid State..." />\n  <div class="invalid-feedback">Invalid feedback</div>\n</div>\n')),(0,a.kt)("h2",{id:"subtle-validation-states"},"Subtle validation states"),(0,a.kt)("p",null,"If you prefer a more subtle manner of informing users of the input control validation state, you can use tick and cross symbols and resign from colored control frames and the validation feedback."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns="1" height="20rem"',example:!0,code:!0,centered:!0,columns:'"1"',height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Validation States (lite)</label>\n  <input type="text" class="form-control is-valid is-valid-lite mb-2" placeholder="Valid State..." />\n  <input type="text" class="form-control is-invalid is-invalid-lite" placeholder="Invalid State..." />\n</div>\n')))}u.isMDXComponent=!0}}]);