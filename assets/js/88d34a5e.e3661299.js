"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2795],{92579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(85893),i=n(11151);const o={},r=void 0,l={id:"ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u4f18\u7f3a\u70b9/ORB-SLAM \u4f18\u7f3a\u70b9",title:"ORB-SLAM \u4f18\u7f3a\u70b9",description:"\u4f18\u70b9\uff1a",source:"@site/docs/book2/04-ORB-SLAM2\u4e34\u65f6/03-ORB-SLAM \u4f18\u7f3a\u70b9/03-ORB-SLAM \u4f18\u7f3a\u70b9.md",sourceDirName:"04-ORB-SLAM2\u4e34\u65f6/03-ORB-SLAM \u4f18\u7f3a\u70b9",slug:"/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u4f18\u7f3a\u70b9/",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u4f18\u7f3a\u70b9/",draft:!1,unlisted:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/04-ORB-SLAM2\u4e34\u65f6/03-ORB-SLAM \u4f18\u7f3a\u70b9/03-ORB-SLAM \u4f18\u7f3a\u70b9.md",tags:[],version:"current",lastUpdatedBy:"dgoeee",lastUpdatedAt:1714854646,formattedLastUpdatedAt:"2024\u5e745\u67084\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"sidebarsBook2",previous:{title:"ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM \u7684\u6574\u4f53\u7cfb\u7edf\u6846\u67b6\u56fe/"},next:{title:"ORB-SLAM2",permalink:"/docs/book2/ORB-SLAM2\u4e34\u65f6/ORB-SLAM2/"}},c={},d=[];function a(e){const t={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u4f18\u70b9\uff1a"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4e00\u4e2a\u4ee3\u7801\u6784\u9020\u4f18\u79c0\u7684\u89c6\u89c9 SLAM \u7cfb\u7edf\uff0c\u975e\u5e38\u9002\u5408\u79fb\u690d\u5230\u5b9e\u9645\u9879\u76ee\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u91c7\u7528 g2o \u4f5c\u4e3a\u540e\u7aef\u4f18\u5316\u5de5\u5177\uff0c\u80fd\u6709\u6548\u5730\u51cf\u5c11\u5bf9\u7279\u5f81\u70b9\u4f4d\u7f6e\u548c\u81ea\u8eab\u4f4d\u59ff\u7684\u4f30\u8ba1\u8bef\u5dee\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u91c7\u7528 DBOW \u51cf\u5c11\u4e86\u5bfb\u627e\u7279\u5f81\u7684\u8ba1\u7b97\u91cf\uff0c\u540c\u65f6\u56de\u73af\u5339\u914d\u548c\u91cd\u5b9a\u4f4d\u6548\u679c\u8f83\u597d\u3002\u91cd\u5b9a\u4f4d\uff1a\u6bd4\u5982\u5f53\u673a\u5668\u4eba\u9047\u5230\u4e00\u4e9b\u610f\u5916\u60c5\u51b5\u4e4b\u540e\uff0c\u5b83\u7684\u6570\u636e\u6d41\u7a81\u7136\u88ab\u6253\u65ad\u4e86\uff0c\u5728 ORB-SLAM \u7b97\u6cd5\u4e0b\uff0c\u53ef\u4ee5\u5728\u77ed\u65f6\u95f4\u5185\u91cd\u65b0\u628a\u673a\u5668\u4eba\u5728\u5730\u56fe\u4e2d\u5b9a\u4f4d\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u4f7f\u7528\u4e86\u7c7b\u4f3c\u300c\u9002\u8005\u751f\u5b58\u300d\u7684\u65b9\u6848\u6765\u8fdb\u884c\u5173\u952e\u5e27\u7684\u5220\u9009\uff0c\u63d0\u9ad8\u7cfb\u7edf\u8ffd\u8e2a\u7684\u9c81\u68d2\u6027\u548c\u7cfb\u7edf\u7684\u53ef\u6301\u7eed\u8fd0\u884c\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u63d0\u4f9b\u6700\u8457\u540d\u7684\u516c\u5171\u6570\u636e\u96c6\uff08 KITTI \u548c TUM \u6570\u636e\u96c6\uff09\u7684\u8be6\u5c3d\u5b9e\u9a8c\u7ed3\u679c\uff0c\u4ee5\u663e\u793a\u5176\u6027\u80fd\u3002"}),"\n",(0,s.jsxs)(t.li,{children:["\u53ef\u4ee5\u4f7f\u7528\u5f00\u6e90\u4ee3\u7801\uff0c\u5e76\u4e14\u8fd8\u652f\u6301\u4f7f\u7528 ROS\u3002 (Github: ",(0,s.jsx)(t.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/slightech/MYNT-EYE-ORB-SLAM2-Sample",children:"slightech/MYNT-EYE-ORB-SLAM2-Sample"}),"\uff09"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u7f3a\u70b9\uff1a"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u6784\u5efa\u51fa\u7684\u5730\u56fe\u662f\u7a00\u758f\u70b9\u4e91\u56fe\u3002\u53ea\u4fdd\u7559\u4e86\u56fe\u50cf\u4e2d\u7279\u5f81\u70b9\u7684\u4e00\u90e8\u5206\u4f5c\u4e3a\u5173\u952e\u70b9\uff0c\u56fa\u5b9a\u5728\u7a7a\u95f4\u4e2d\u8fdb\u884c\u5b9a\u4f4d\uff0c\u5f88\u96be\u63cf\u7ed8\u5730\u56fe\u4e2d\u7684\u969c\u788d\u7269\u7684\u5b58\u5728\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u521d\u59cb\u5316\u65f6\u6700\u597d\u4fdd\u6301\u4f4e\u901f\u8fd0\u52a8\uff0c\u5bf9\u51c6\u7279\u5f81\u548c\u51e0\u4f55\u7eb9\u7406\u4e30\u5bcc\u7684\u7269\u4f53\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u65cb\u8f6c\u65f6\u6bd4\u8f83\u5bb9\u6613\u4e22\u5e27\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u7eaf\u65cb\u8f6c\uff0c\u5bf9\u566a\u58f0\u654f\u611f\uff0c\u4e0d\u5177\u5907\u5c3a\u5ea6\u4e0d\u53d8\u6027\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u5982\u679c\u4f7f\u7528\u7eaf\u89c6\u89c9 slam \u7528\u4e8e\u673a\u5668\u4eba\u5bfc\u822a\uff0c\u53ef\u80fd\u4f1a\u7cbe\u5ea6\u4e0d\u9ad8\uff0c\u6216\u8005\u4ea7\u751f\u7d2f\u79ef\u8bef\u5dee\uff0c\u6f02\u79fb\uff0c\u5c3d\u7ba1\u53ef\u4ee5\u4f7f\u7528 DBoW \u8bcd\u888b\u53ef\u4ee5\u7528\u6765\u56de\u73af\u68c0\u6d4b\u3002\u6700\u597d\u4f7f\u7528 VSLAM+IMU \u8fdb\u884c\u878d\u5408\uff0c\u53ef\u4ee5\u63d0\u9ad8\u7cbe\u5ea6\u4e0a\u53bb\uff0c\u9002\u7528\u4e8e\u5b9e\u9645\u5e94\u7528\u4e2d\u673a\u5668\u4eba\u7684\u5bfc\u822a\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);