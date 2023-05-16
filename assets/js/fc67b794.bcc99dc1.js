"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[7662],{3905:(e,a,n)=>{n.d(a,{Zo:()=>i,kt:()=>h});var c=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,c,s=function(e,a){if(null==e)return{};var n,c,s={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=c.createContext({}),t=function(e){var a=c.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},i=function(e){var a=t(e.components);return c.createElement(o.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return c.createElement(c.Fragment,{},a)}},f=c.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),p=t(n),f=s,h=p["".concat(o,".").concat(f)]||p[f]||g[f]||r;return n?c.createElement(h,l(l({ref:a},i),{},{components:n})):c.createElement(h,l({ref:a},i))}));function h(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=f;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m[p]="string"==typeof e?e:s,l[1]=m;for(var t=2;t<r;t++)l[t]=n[t];return c.createElement.apply(null,l)}return c.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3438:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>m,toc:()=>t});var c=n(7462),s=(n(7294),n(3905));const r={title:"Image check"},l=void 0,m={unversionedId:"\u6458\u6284-tabler/forms/form-image-check",id:"\u6458\u6284-tabler/forms/form-image-check",title:"Image check",description:"Add an image check to your form and give users visually attractive options to choose from.",source:"@site/docs/book2/01-\u6458\u6284-tabler/forms/form-image-check.mdx",sourceDirName:"01-\u6458\u6284-tabler/forms",slug:"/\u6458\u6284-tabler/forms/form-image-check",permalink:"/docs/book2/\u6458\u6284-tabler/forms/form-image-check",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/forms/form-image-check.mdx",tags:[],version:"current",frontMatter:{title:"Image check"},sidebar:"sidebarsBook2",previous:{title:"Form helpers",permalink:"/docs/book2/\u6458\u6284-tabler/forms/form-helpers"},next:{title:"Input mask",permalink:"/docs/book2/\u6458\u6284-tabler/forms/form-input-mask"}},o={},t=[],i={toc:t},p="wrapper";function g(e){let{components:a,...n}=e;return(0,s.kt)(p,(0,c.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Add an image check to your form and give users visually attractive options to choose from."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns="2" height="15rem"',example:!0,centered:!0,columns:'"2"',height:'"15rem"'},'<div class="mb-3">\n  <label class="form-label">Image Check</label>\n  <div class="row g-2">\n    <div class="col-3">\n      <label class="form-imagecheck">\n        <input name="form-imagecheck" type="checkbox" value="1" class="form-imagecheck-input" />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/everything-you-need-to-work-from-your-bed-2.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n    <div class="col-3">\n      <label class="form-imagecheck">\n        <input name="form-imagecheck" type="checkbox" value="2" class="form-imagecheck-input" checked />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/color-palette-guide-sample-colors-catalog-.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n    <div class="col-3">\n      <label class="form-imagecheck">\n        <input name="form-imagecheck" type="checkbox" value="3" class="form-imagecheck-input" />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/woman-read-book-and-drink-coffee-2.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n    <div class="col-3">\n      <label class="form-imagecheck">\n        <input name="form-imagecheck" type="checkbox" value="4" class="form-imagecheck-input" checked />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/stylish-workspace-with-macbook-pro-2.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n  </div>\n</div>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<label class="form-imagecheck">\n  <input name="" type="checkbox" value="" class="form-imagecheck-input" checked />\n  <span class="form-imagecheck-figure">\n    <img src="..." alt="" class="form-imagecheck-image" />\n  </span>\n</label>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns="2" height="15rem"',example:!0,centered:!0,columns:'"2"',height:'"15rem"'},'<div class="mb-3">\n  <label class="form-label">Image Check Radio</label>\n  <div class="row g-2">\n    <div class="col-3">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck-radio" type="radio" value="1" class="form-imagecheck-input" />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/woman-drinking-hot-tea-in-her-home-office.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n    <div class="col-3">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck-radio" type="radio" value="2" class="form-imagecheck-input" checked />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/young-woman-sitting-on-the-sofa-and-working-on-her-laptop-3.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n    <div class="col-3">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck-radio" type="radio" value="3" class="form-imagecheck-input" />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/beautiful-blonde-woman-relaxing-with-a-can-of-coke-on-a-tree-stump-by-the-beach.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n    <div class="col-3">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck-radio" type="radio" value="4" class="form-imagecheck-input" checked />\n        <span class="form-imagecheck-figure">\n          <img src="/samples/photos/book-on-the-grass.jpg" alt="" class="form-imagecheck-image" />\n        </span>\n      </label>\n    </div>\n  </div>\n</div>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<label class="form-imagecheck">\n  <input name="form-imagecheck-radio" type="radio" value="1" class="form-imagecheck-input" />\n  <span class="form-imagecheck-figure">\n    <img src="/samples/photos/woman-drinking-hot-tea-in-her-home-office.jpg" alt="" class="form-imagecheck-image" />\n  </span>\n</label>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns="1" height="15rem"',example:!0,centered:!0,columns:'"1"',height:'"15rem"'},'<div class="mb-3">\n  <label class="form-label">Person Check</label>\n  <div class="row g-2">\n    <div class="col-auto">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck" type="checkbox" value="1" class="form-imagecheck-input" />\n        <span class="form-imagecheck-figure">\n          <span class="form-imagecheck-image">\n            <span class="avatar avatar-md" style="background-image: url(/samples/avatars/057f.jpg)"></span>\n          </span>\n        </span>\n      </label>\n    </div>\n    <div class="col-auto">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck" type="checkbox" value="2" class="form-imagecheck-input" checked />\n        <span class="form-imagecheck-figure">\n          <span class="form-imagecheck-image">\n            <span class="avatar avatar-md">HS</span>\n          </span>\n        </span>\n      </label>\n    </div>\n    <div class="col-auto">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck" type="checkbox" value="3" class="form-imagecheck-input" />\n        <span class="form-imagecheck-figure">\n          <span class="form-imagecheck-image">\n            <span class="avatar avatar-md" style="background-image: url(/samples/avatars/062m.jpg)"></span>\n          </span>\n        </span>\n      </label>\n    </div>\n    <div class="col-auto">\n      <label class="form-imagecheck mb-2">\n        <input name="form-imagecheck" type="checkbox" value="4" class="form-imagecheck-input" checked />\n        <span class="form-imagecheck-figure">\n          <span class="form-imagecheck-image">\n            <span class="avatar avatar-md" style="background-image: url(/samples/avatars/070m.jpg)"></span>\n          </span>\n        </span>\n      </label>\n    </div>\n  </div>\n</div>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<label class="form-imagecheck">\n  <input name="" type="checkbox" value="" class="form-imagecheck-input" />\n  <span class="form-imagecheck-figure">\n    <span class="form-imagecheck-image">\n      <span class="avatar avatar-md" style="background-image: url(...)"></span>\n    </span>\n  </span>\n</label>\n')))}g.isMDXComponent=!0}}]);