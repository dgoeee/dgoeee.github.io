"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1234],{82949:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(85893),i=t(11151);const s={},r=void 0,c={id:"ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe/ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe",title:"ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe",description:"img",source:"@site/docs/book2/04-ORB-SLAM2\u4e34\u65f6/02-ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe/02-ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe.md",sourceDirName:"04-ORB-SLAM2\u4e34\u65f6/02-ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe",slug:"/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe/",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe/",draft:!1,unlisted:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/04-ORB-SLAM2\u4e34\u65f6/02-ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe/02-ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebarsBook2",previous:{title:"ORB-SLAM \u57fa\u672c\u4ecb\u7ecd",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u57fa\u672c\u4ecb\u7ecd/"},next:{title:"ORB-SLAM \u4f18\u7f3a\u70b9",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u4f18\u7f3a\u70b9/"}},l={},d=[];function a(n){const e={admonition:"admonition",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://pic3.zhimg.com/80/v2-b0b335c323b2ff6cd34024f97bbfe266_1440w.webp",alt:"img"})}),"\n",(0,o.jsx)(e.p,{children:"ORB-SLAM \u5b83\u662f\u7531\u4e09\u5927\u5757\u3001\u4e09\u4e2a\u6d41\u7a0b\u540c\u65f6\u8fd0\u884c\u7684\u3002\u7b2c\u4e00\u5757\u662f\u8ddf\u8e2a\uff0c\u7b2c\u4e8c\u5757\u662f\u5efa\u56fe\uff0c\u7b2c\u4e09\u5757\u662f\u95ed\u73af\u68c0\u6d4b\u3002"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u8ddf\u8e2a\uff08Tracking\uff09"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u4e00\u90e8\u5206\u4e3b\u8981\u5de5\u4f5c\u662f\u4ece\u56fe\u50cf\u4e2d\u63d0\u53d6 ORB \u7279\u5f81\uff0c\u6839\u636e\u4e0a\u4e00\u5e27\u8fdb\u884c\u59ff\u6001\u4f30\u8ba1\uff0c\u6216\u8005\u8fdb\u884c\u901a\u8fc7\u5168\u5c40\u91cd\u5b9a\u4f4d\u521d\u59cb\u5316\u4f4d\u59ff\uff0c\u7136\u540e\u8ddf\u8e2a\u5df2\u7ecf\u91cd\u5efa\u7684\u5c40\u90e8\u5730\u56fe\uff0c\u4f18\u5316\u4f4d\u59ff\uff0c\u518d\u6839\u636e\u4e00\u4e9b\u89c4\u5219\u786e\u5b9a\u65b0\u5173\u952e\u5e27\u3002"}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsx)(e.li,{children:"\u5efa\u56fe\uff08LocalMapping\uff09"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u4e00\u90e8\u5206\u4e3b\u8981\u5b8c\u6210\u5c40\u90e8\u5730\u56fe\u6784\u5efa\u3002\u5305\u62ec\u5bf9\u5173\u952e\u5e27\u7684\u63d2\u5165\uff0c\u9a8c\u8bc1\u6700\u8fd1\u751f\u6210\u7684\u5730\u56fe\u70b9\u5e76\u8fdb\u884c\u7b5b\u9009\uff0c\u7136\u540e\u751f\u6210\u65b0\u7684\u5730\u56fe\u70b9\uff0c\u4f7f\u7528\u5c40\u90e8\u6346\u96c6\u8c03\u6574\uff08Local BA\uff09\uff0c\u6700\u540e\u518d\u5bf9\u63d2\u5165\u7684\u5173\u952e\u5e27\u8fdb\u884c\u7b5b\u9009\uff0c\u53bb\u9664\u591a\u4f59\u7684\u5173\u952e\u5e27\u3002"}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsx)(e.li,{children:"\u95ed\u73af\u68c0\u6d4b\uff08LoopClosing\uff09"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u4e00\u90e8\u5206\u4e3b\u8981\u5206\u4e3a\u4e24\u4e2a\u8fc7\u7a0b\uff0c\u5206\u522b\u662f\u95ed\u73af\u63a2\u6d4b\u548c\u95ed\u73af\u6821\u6b63\u3002\u95ed\u73af\u68c0\u6d4b\u5148\u4f7f\u7528 WOB \u8fdb\u884c\u63a2\u6d4b\uff0c\u7136\u540e\u901a\u8fc7 Sim3 \u7b97\u6cd5\u8ba1\u7b97\u76f8\u4f3c\u53d8\u6362\u3002\u95ed\u73af\u6821\u6b63\uff0c\u4e3b\u8981\u662f\u95ed\u73af\u878d\u5408\u548c Essential Graph \u7684\u56fe\u4f18\u5316\u3002"}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Essential Graph"}),"\uff1a\u57fa\u4e8e\u4f4d\u7f6e\u4f18\u5316\u7684\u5b9e\u65f6\u95ed\u73af\u63a7\u5236\u3002\u5b83\u901a\u8fc7\u751f\u6210\u6811\u6784\u5efa\uff0c\u751f\u6210\u6811\u7531\u7cfb\u7edf\u3001\u95ed\u73af\u63a7\u5236\u94fe\u63a5\u548c\u89c6\u56fe\u5185\u5bb9\u5173\u8054\u5f3a\u8fb9\u7f18\u8fdb\u884c\u7ef4\u62a4\u3002"]})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);