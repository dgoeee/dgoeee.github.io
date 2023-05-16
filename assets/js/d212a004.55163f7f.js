"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[6152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Countup",description:"A countup element is used to display numerical data in an interesting way and make the interface more interactive.",libs:"countup"},i=void 0,u={unversionedId:"\u6458\u6284-tabler/components/countup",id:"\u6458\u6284-tabler/components/countup",title:"Countup",description:"A countup element is used to display numerical data in an interesting way and make the interface more interactive.",source:"@site/docs/book2/01-\u6458\u6284-tabler/components/countup.mdx",sourceDirName:"01-\u6458\u6284-tabler/components",slug:"/\u6458\u6284-tabler/components/countup",permalink:"/docs/book2/\u6458\u6284-tabler/components/countup",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/components/countup.mdx",tags:[],version:"current",frontMatter:{title:"Countup",description:"A countup element is used to display numerical data in an interesting way and make the interface more interactive.",libs:"countup"},sidebar:"sidebarsBook2",previous:{title:"Charts",permalink:"/docs/book2/\u6458\u6284-tabler/components/charts"},next:{title:"Data grid",permalink:"/docs/book2/\u6458\u6284-tabler/components/datagrid"}},s={},l=[{value:"Default countup",id:"default-countup",level:2},{value:"Duration",id:"duration",level:2},{value:"Starting value",id:"starting-value",level:2},{value:"Decimal places",id:"decimal-places",level:2},{value:"Easing",id:"easing",level:2},{value:"Use grouping",id:"use-grouping",level:2},{value:"Separator",id:"separator",level:2},{value:"Decimal separator",id:"decimal-separator",level:2},{value:"Prefix",id:"prefix",level:2},{value:"Suffix",id:"suffix",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To be able to use the countup in your application you will need to install the countup.js dependency with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install countup.js"),"."),(0,r.kt)("h2",{id:"default-countup"},"Default countup"),(0,r.kt)("p",null,"To create a countup, add ",(0,r.kt)("inlineCode",{parentName:"p"},"data-countup")," to any HTML text tag and specify the number which is to be reached. The animation will be triggered as soon as the number enters the viewport."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup>30000</h1>\n')),(0,r.kt)("h2",{id:"duration"},"Duration"),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," to determine how long the animation should take. By default, the duration is set to 2 seconds, but you can modify it as you wish."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup>30000</h1>\n<h1 data-countup=\'{"duration":4}\'>30000</h1>\n<h1 data-countup=\'{"duration":6}\'>30000</h1>\n')),(0,r.kt)("h2",{id:"starting-value"},"Starting value"),(0,r.kt)("p",null,"By default the countup will start from zero. If you want to set a different start value use ",(0,r.kt)("inlineCode",{parentName:"p"},"startVal"),".\nYou can also set the start value to be greater than the final value, so that it counts down instead of up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup=\'{"startVal":12345}\'>30000</h1>\n<h1 data-countup=\'{"startVal":47655}\'>30000</h1>\n')),(0,r.kt)("h2",{id:"decimal-places"},"Decimal places"),(0,r.kt)("p",null,"Set how many decimal numbers should be displayed using ",(0,r.kt)("inlineCode",{parentName:"p"},"decimalPlaces"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup>3.123</h1>\n<h1 data-countup=\'{"decimalPlaces":1}\'>3.123</h1>\n<h1 data-countup=\'{"decimalPlaces":2}\'>3.123</h1>\n<h1 data-countup=\'{"decimalPlaces":3}\'>3.123</h1>\n')),(0,r.kt)("h2",{id:"easing"},"Easing"),(0,r.kt)("p",null,"Disable easing using ",(0,r.kt)("inlineCode",{parentName:"p"},'"useEasing": false'),". Easing is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default, so that the animation speed changes over the course of its duration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup>30000</h1>\n<h1 data-countup=\'{"useEasing": false}\'>30000</h1>\n')),(0,r.kt)("h2",{id:"use-grouping"},"Use grouping"),(0,r.kt)("p",null,"Disable grouping using ",(0,r.kt)("inlineCode",{parentName:"p"},'"useGrouping": false'),". Grouping is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default and the default group separator is a comma."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup>30000</h1>\n<h1 data-countup=\'{"useGrouping": false}\'>30000</h1>\n')),(0,r.kt)("h2",{id:"separator"},"Separator"),(0,r.kt)("p",null,"You can change the default comma group separator using ",(0,r.kt)("inlineCode",{parentName:"p"},"separator")," and specifying the one you wish to use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup>3000000</h1>\n<h1 data-countup=\'{"separator":" "}\'>3000000</h1>\n<h1 data-countup=\'{"separator":"-"}\'>3000000</h1>\n<h1 data-countup=\'{"separator":":"}\'>3000000</h1>\n')),(0,r.kt)("h2",{id:"decimal-separator"},"Decimal separator"),(0,r.kt)("p",null,"You can also change the decimal separator which is set to a full stop by default. To do it, use ",(0,r.kt)("inlineCode",{parentName:"p"},"decimal")," and specify the decimal separator of your choice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup=\'{"decimalPlaces":2}\'>3.12</h1>\n<h1 data-countup=\'{"decimalPlaces":2,"decimal":".."}\'>3.12</h1>\n<h1 data-countup=\'{"decimalPlaces":2,"decimal":"^"}\'>3.12</h1>\n<h1 data-countup=\'{"decimalPlaces":2,"decimal":":"}\'>3.12</h1>\n')),(0,r.kt)("h2",{id:"prefix"},"Prefix"),(0,r.kt)("p",null,"Set the countup prefix using ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," and specifying the prefix you want to add, for instance a currency symbol."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup=\'{"prefix":"$"}\'>30000</h1>\n<h1 data-countup=\'{"prefix":"\u20ac"}\'>30000</h1>\n<h1 data-countup=\'{"prefix":"\xa3"}\'>30000</h1>\n')),(0,r.kt)("h2",{id:"suffix"},"Suffix"),(0,r.kt)("p",null,"Set the countup suffix using ",(0,r.kt)("inlineCode",{parentName:"p"},"suffix"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup=\'{"suffix":"%"}\'>30</h1>\n<h1 data-countup=\'{"suffix":"\u2030"}\'>30</h1>\n<h1 data-countup=\'{"suffix":"k"}\'>30</h1>\n')),(0,r.kt)("p",null,"Of course you can mix all of these:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<script src="$TABLER_CDN/dist/libs/countup.js/dist/countUp.js"><\/script>\n\n<h1 data-countup=\'{"duration":6,"startVal":12345,"decimalPlaces":2,"separator":" ","prefix":"$"}\'>64547834.76</h1>\n')),(0,r.kt)("p",null,"For more advanced features of countups, click ",(0,r.kt)("a",{parentName:"p",href:"https://inorganik.github.io/countUp.js/"},(0,r.kt)("strong",{parentName:"a"},"here"))," and see what more you can do."))}d.isMDXComponent=!0}}]);