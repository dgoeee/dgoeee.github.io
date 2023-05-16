"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[2833],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),o=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=o(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,s=t.originalType,i=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),p=o(n),h=l,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||s;return n?a.createElement(m,r(r({ref:e},c),{},{components:n})):a.createElement(m,r({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var s=n.length,r=new Array(s);r[0]=h;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d[p]="string"==typeof t?t:l,r[1]=d;for(var o=2;o<s;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9240:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const s={title:"Tables",description:"Tables are a useful interface element that allows to visualise data and arrange it in a clear way. Thanks to that, users can browse a lot of information at once and a good table design will help you take care of its clarity.",bootstrapLink:"content/tables/"},r=void 0,d={unversionedId:"\u6458\u6284-tabler/components/tables",id:"\u6458\u6284-tabler/components/tables",title:"Tables",description:"Tables are a useful interface element that allows to visualise data and arrange it in a clear way. Thanks to that, users can browse a lot of information at once and a good table design will help you take care of its clarity.",source:"@site/docs/book2/01-\u6458\u6284-tabler/components/tables.mdx",sourceDirName:"01-\u6458\u6284-tabler/components",slug:"/\u6458\u6284-tabler/components/tables",permalink:"/docs/book2/\u6458\u6284-tabler/components/tables",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/components/tables.mdx",tags:[],version:"current",frontMatter:{title:"Tables",description:"Tables are a useful interface element that allows to visualise data and arrange it in a clear way. Thanks to that, users can browse a lot of information at once and a good table design will help you take care of its clarity.",bootstrapLink:"content/tables/"},sidebar:"sidebarsBook2",previous:{title:"Switch icon",permalink:"/docs/book2/\u6458\u6284-tabler/components/switch-icon"},next:{title:"Tabs",permalink:"/docs/book2/\u6458\u6284-tabler/components/tabs"}},i={},o=[{value:"Basic Table",id:"basic-table",level:2},{value:"Responsive tables",id:"responsive-tables",level:2},{value:"No wrap",id:"no-wrap",level:2},{value:"Table Variants",id:"table-variants",level:2},{value:"Table with sticky header",id:"table-with-sticky-header",level:2}],c={toc:o},p="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"basic-table"},"Basic Table"),(0,l.kt)("p",null,"The basic table design has light padding and the presented data is separated wih horizontal dividers. It helps provide users with all the necessary information, without overwheling them with visuals."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".table")," class adds basic styling to a table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<div class="table-responsive">\n  <table class="table table-vcenter">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Title</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th class="w-1"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Pawe\u0142 Kuna</td>\n        <td class="text-muted">\n          UI Designer, Training\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">paweluna@howstuffworks.com</a></td>\n        <td class="text-muted">\n          User\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Jeffie Lewzey</td>\n        <td class="text-muted">\n          Chemical Engineer, Support\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">jlewzey1@seesaa.net</a></td>\n        <td class="text-muted">\n          Admin\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Mallory Hulme</td>\n        <td class="text-muted">\n          Geologist IV, Support\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>\n        <td class="text-muted">\n          User\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Dunn Slane</td>\n        <td class="text-muted">\n          Research Nurse, Sales\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">dslane3@epa.gov</a></td>\n        <td class="text-muted">\n          Owner\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Emmy Levet</td>\n        <td class="text-muted">\n          VP Product Management, Accounting\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">elevet4@senate.gov</a></td>\n        <td class="text-muted">\n          Admin\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n')),(0,l.kt)("h2",{id:"responsive-tables"},"Responsive tables"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},".table-responsive")," class across each breakpoint for horizontal scrolling tables. If you want to create responsive tables up to a specific breakpoint, use ",(0,l.kt)("inlineCode",{parentName:"p"},".table-responsive{-sm|-md|-lg|-xl}"),". From that breakpoint and up, the table will behave normally, rather than scroll horizontally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<table class="table table-responsive">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th class="text-nowrap">Heading 1</th>\n      <th class="text-nowrap">Heading 2</th>\n      <th class="text-nowrap">Heading 3</th>\n      <th class="text-nowrap">Heading 4</th>\n      <th class="text-nowrap">Heading 5</th>\n      <th class="text-nowrap">Heading 6</th>\n      <th class="text-nowrap">Heading 7</th>\n      <th class="text-nowrap">Heading 8</th>\n      <th class="text-nowrap">Heading 9</th>\n      <th class="text-nowrap">Heading 10</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>1</th>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n  </tbody>\n</table>\n')),(0,l.kt)("h2",{id:"no-wrap"},"No wrap"),(0,l.kt)("p",null,"If you don't want the table cell content to wrap to another line, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"table-nowrap")," class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"example",example:!0},'<div class="table-responsive">\n  <table class="table table-vcenter table-nowrap">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Title</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th></th>\n        <th class="w-1"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Pawe\u0142 Kuna</td>\n        <td class="text-muted">UI Designer, Training</td>\n        <td class="text-muted">\n          <a href="#" class="text-reset">paweluna@howstuffworks.com</a>\n        </td>\n        <td class="text-muted">User</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi cupiditate debitis deserunt\n          expedita hic incidunt iste modi molestiae nesciunt non nostrum perferendis perspiciatis placeat praesentium\n          quaerat quo repellendus, voluptates.</td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="table-responsive">\n  <table\n        class="table table-vcenter table-nowrap">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Title</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th></th>\n        <th class="w-1"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Pawe\u0142 Kuna</td>\n        <td class="text-muted">\n          UI Designer, Training\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">paweluna@howstuffworks.com</a></td>\n        <td class="text-muted">\n          User\n        </td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi cupiditate debitis deserunt\n          expedita hic incidunt iste modi molestiae nesciunt non nostrum perferendis perspiciatis placeat praesentium\n          quaerat quo repellendus, voluptates.\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Jeffie Lewzey</td>\n        <td class="text-muted">\n          Chemical Engineer, Support\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">jlewzey1@seesaa.net</a></td>\n        <td class="text-muted">\n          Admin\n        </td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi cupiditate debitis deserunt\n          expedita hic incidunt iste modi molestiae nesciunt non nostrum perferendis perspiciatis placeat praesentium\n          quaerat quo repellendus, voluptates.\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Mallory Hulme</td>\n        <td class="text-muted">\n          Geologist IV, Support\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">mhulme2@domainmarket.com</a></td>\n        <td class="text-muted">\n          User\n        </td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi cupiditate debitis deserunt\n          expedita hic incidunt iste modi molestiae nesciunt non nostrum perferendis perspiciatis placeat praesentium\n          quaerat quo repellendus, voluptates.\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Dunn Slane</td>\n        <td class="text-muted">\n          Research Nurse, Sales\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">dslane3@epa.gov</a></td>\n        <td class="text-muted">\n          Owner\n        </td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi cupiditate debitis deserunt\n          expedita hic incidunt iste modi molestiae nesciunt non nostrum perferendis perspiciatis placeat praesentium\n          quaerat quo repellendus, voluptates.\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n      <tr>\n        <td>Emmy Levet</td>\n        <td class="text-muted">\n          VP Product Management, Accounting\n        </td>\n        <td class="text-muted"><a href="#" class="text-reset">elevet4@senate.gov</a></td>\n        <td class="text-muted">\n          Admin\n        </td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi cupiditate debitis deserunt\n          expedita hic incidunt iste modi molestiae nesciunt non nostrum perferendis perspiciatis placeat praesentium\n          quaerat quo repellendus, voluptates.\n        </td>\n        <td>\n          <a href="#">Edit</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n')),(0,l.kt)("h2",{id:"table-variants"},"Table Variants"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example",code:!0,example:!0},'<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">Class</th>\n      <th scope="col">Heading</th>\n      <th scope="col">Heading</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Default</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-primary">\n      <th scope="row">Primary</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-secondary">\n      <th scope="row">Secondary</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-success">\n      <th scope="row">Success</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-danger">\n      <th scope="row">Danger</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-warning">\n      <th scope="row">Warning</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-info">\n      <th scope="row">Info</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-light">\n      <th scope="row">Light</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-dark">\n      <th scope="row">Dark</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n  </tbody>\n</table>\n')),(0,l.kt)("h2",{id:"table-with-sticky-header"},"Table with sticky header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"example code scrollable",example:!0,code:!0,scrollable:!0},'<table class="table">\n  <thead class="sticky-top">\n    <tr>\n      <th scope="col">Class</th>\n      <th scope="col">Heading</th>\n      <th scope="col">Heading</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Default</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th scope="row">Primary</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th scope="row">Secondary</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th scope="row">Success</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th scope="row">Danger</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th scope="row">Warning</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th scope="row">Info</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr>\n      <th scope="row">Light</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n    <tr class="table-dark">\n      <th scope="row">Dark</th>\n      <td>Cell</td>\n      <td>Cell</td>\n    </tr>\n  </tbody>\n</table>\n')))}u.isMDXComponent=!0}}]);