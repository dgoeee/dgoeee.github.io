"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[7915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>O,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},O=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,O=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},O),{},{components:r})):n.createElement(m,i({ref:t},O))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,c={unversionedId:"ORB-SLAM2\u4e34\u65f6/ORB-SLAM2/ORB-SLAM2",id:"ORB-SLAM2\u4e34\u65f6/ORB-SLAM2/ORB-SLAM2",title:"ORB-SLAM2",description:"ORB-SLAM2 \u5728 ORB-SLAM \u7684\u57fa\u7840\u4e0a\uff0c\u8fd8\u652f\u6301\u6807\u5b9a\u540e\u7684\u53cc\u76ee\u76f8\u673a\u548c RGB-D \u76f8\u673a\u3002\u53cc\u76ee\u5bf9\u4e8e\u7cbe\u5ea6\u548c\u9c81\u68d2\u6027\u90fd\u4f1a\u6709\u4e00\u5b9a\u7684\u63d0\u5347\u3002ORB-SLAM2 \u662f\u57fa\u4e8e\u5355\u76ee\uff0c\u53cc\u76ee\u548c RGB-D \u76f8\u673a\u7684\u4e00\u5957\u5b8c\u6574\u7684 SLAM \u65b9\u6848\u3002\u5b83\u80fd\u591f\u5b9e\u73b0\u5730\u56fe\u91cd\u7528\uff0c\u56de\u73af\u68c0\u6d4b\u548c\u91cd\u65b0\u5b9a\u4f4d\u7684\u529f\u80fd\u3002\u65e0\u8bba\u662f\u5728\u5ba4\u5185\u7684\u5c0f\u578b\u624b\u6301\u8bbe\u5907\uff0c\u8fd8\u662f\u5230\u5de5\u5382\u73af\u5883\u7684\u65e0\u4eba\u673a\u548c\u57ce\u5e02\u91cc\u9a7e\u9a76\u7684\u6c7d\u8f66\uff0cORB-SLAM2 \u90fd\u80fd\u591f\u5728\u6807\u51c6\u7684 CPU \u4e0a\u8fdb\u884c\u5b9e\u65f6\u5de5\u4f5c\u3002ORB-SLAM2 \u5728\u540e\u7aef\u4e0a\u91c7\u7528\u7684\u662f\u57fa\u4e8e\u5355\u76ee\u548c\u53cc\u76ee\u7684\u5149\u675f\u6cd5\u5e73\u5dee\u4f18\u5316\uff08BA\uff09\u7684\u65b9\u5f0f\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5141\u8bb8\u7c73\u5236\u6bd4\u4f8b\u5c3a\u7684\u8f68\u8ff9\u7cbe\u786e\u5ea6\u8bc4\u4f30\u3002\u6b64\u5916\uff0cORB-SLAM2 \u5305\u542b\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5b9a\u4f4d\u6a21\u5f0f\uff0c\u8be5\u6a21\u5f0f\u80fd\u591f\u5728\u5141\u8bb8\u96f6\u70b9\u6f02\u79fb\u7684\u6761\u4ef6\u4e0b\uff0c\u5229\u7528\u89c6\u89c9\u91cc\u7a0b\u8ba1\u6765\u8ffd\u8e2a\u672a\u5efa\u56fe\u7684\u533a\u57df\u5e76\u4e14\u5339\u914d\u7279\u5f81\u70b9\u3002",source:"@site/docs/book2/04-ORB-SLAM2\u4e34\u65f6/04-ORB-SLAM2/04-ORB-SLAM2.md",sourceDirName:"04-ORB-SLAM2\u4e34\u65f6/04-ORB-SLAM2",slug:"/ORB-SLAM2\u4e34\u65f6/ORB-SLAM2/",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM2/",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/04-ORB-SLAM2\u4e34\u65f6/04-ORB-SLAM2/04-ORB-SLAM2.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebarsBook2",previous:{title:"ORB-SLAM \u4f18\u7f3a\u70b9",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u4f18\u7f3a\u70b9/"},next:{title:"ORB-SLAM2",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM2"}},p={},l=[],O={toc:l},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},O,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ORB-SLAM2 \u5728 ORB-SLAM \u7684\u57fa\u7840\u4e0a\uff0c\u8fd8\u652f\u6301\u6807\u5b9a\u540e\u7684\u53cc\u76ee\u76f8\u673a\u548c RGB-D \u76f8\u673a\u3002\u53cc\u76ee\u5bf9\u4e8e\u7cbe\u5ea6\u548c\u9c81\u68d2\u6027\u90fd\u4f1a\u6709\u4e00\u5b9a\u7684\u63d0\u5347\u3002ORB-SLAM2 \u662f\u57fa\u4e8e\u5355\u76ee\uff0c\u53cc\u76ee\u548c RGB-D \u76f8\u673a\u7684\u4e00\u5957\u5b8c\u6574\u7684 SLAM \u65b9\u6848\u3002\u5b83\u80fd\u591f\u5b9e\u73b0\u5730\u56fe\u91cd\u7528\uff0c\u56de\u73af\u68c0\u6d4b\u548c\u91cd\u65b0\u5b9a\u4f4d\u7684\u529f\u80fd\u3002\u65e0\u8bba\u662f\u5728\u5ba4\u5185\u7684\u5c0f\u578b\u624b\u6301\u8bbe\u5907\uff0c\u8fd8\u662f\u5230\u5de5\u5382\u73af\u5883\u7684\u65e0\u4eba\u673a\u548c\u57ce\u5e02\u91cc\u9a7e\u9a76\u7684\u6c7d\u8f66\uff0cORB-SLAM2 \u90fd\u80fd\u591f\u5728\u6807\u51c6\u7684 CPU \u4e0a\u8fdb\u884c\u5b9e\u65f6\u5de5\u4f5c\u3002ORB-SLAM2 \u5728\u540e\u7aef\u4e0a\u91c7\u7528\u7684\u662f\u57fa\u4e8e\u5355\u76ee\u548c\u53cc\u76ee\u7684\u5149\u675f\u6cd5\u5e73\u5dee\u4f18\u5316\uff08BA\uff09\u7684\u65b9\u5f0f\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5141\u8bb8\u7c73\u5236\u6bd4\u4f8b\u5c3a\u7684\u8f68\u8ff9\u7cbe\u786e\u5ea6\u8bc4\u4f30\u3002\u6b64\u5916\uff0cORB-SLAM2 \u5305\u542b\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5b9a\u4f4d\u6a21\u5f0f\uff0c\u8be5\u6a21\u5f0f\u80fd\u591f\u5728\u5141\u8bb8\u96f6\u70b9\u6f02\u79fb\u7684\u6761\u4ef6\u4e0b\uff0c\u5229\u7528\u89c6\u89c9\u91cc\u7a0b\u8ba1\u6765\u8ffd\u8e2a\u672a\u5efa\u56fe\u7684\u533a\u57df\u5e76\u4e14\u5339\u914d\u7279\u5f81\u70b9\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Bundle Adjustment"),"\uff08",(0,o.kt)("strong",{parentName:"p"},"BA"),"\uff09\uff1a\u5149\u675f\u5e73\u5dee\u6cd5\uff0c\u5c31\u662f\u5229\u7528\u975e\u7ebf\u6027\u6700\u5c0f\u4e8c\u4e58\u6cd5\u6765\u6c42\u53d6\u76f8\u673a\u4f4d\u59ff\uff0c\u4e09\u7ef4\u70b9\u5750\u6807\u3002\u5728\u4ec5\u7ed9\u5b9a\u76f8\u673a\u5185\u90e8\u77e9\u9635\u7684\u6761\u4ef6\u4e0b\uff0c\u5bf9\u56db\u5468\u7269\u4f53\u8fdb\u884c\u9ad8\u7cbe\u5ea6\u91cd\u5efa\u3002"),(0,o.kt)("p",{parentName:"admonition"},"Bundle Adjustment \u53ef\u4ee5\u5c06\u6240\u89c2\u6d4b\u7684\u56fe\u50cf\u4f4d\u7f6e\u548c\u9884\u6d4b\u7684\u56fe\u50cf\u4f4d\u7f6e\u70b9\u8fdb\u884c\u6700\u5c0f error \u7684\u6620\u5c04\uff08\u5339\u914d\uff09\uff0c\u7531\u5f88\u591a\u975e\u7ebf\u6027\u51fd\u6570\u7684\u5e73\u65b9\u548c\u8868\u793a\uff08error\uff09\u3002\u56e0\u6b64\uff0c\u6700\u5c0f\u5316 error \u7531\u975e\u7ebf\u6027\u6700\u5c0f\u4e8c\u4e58\u6cd5\u5b9e\u73b0\u3002")))}s.isMDXComponent=!0}}]);