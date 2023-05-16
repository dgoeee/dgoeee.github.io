"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[4289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var l=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=l.createContext({}),c=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return l.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return t?l.createElement(h,s(s({ref:n},p),{},{components:t})):l.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=t[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=t(7462),o=(t(7294),t(3905));const a={title:"Form elements",description:"Forms are one of the most important types of interaction with a website or app. Since their aim is to enable users to make a purchase, subscribe to a service or sign up to create an account, it's important to make sure they are easy to complete and help increase conversion rates. Use the available elements to create forms which are well-structured and user-friendly.",bootstrapLink:"components/forms/",libs:"nouislider"},s=void 0,r={unversionedId:"\u6458\u6284-tabler/forms/form-elements",id:"\u6458\u6284-tabler/forms/form-elements",title:"Form elements",description:"Forms are one of the most important types of interaction with a website or app. Since their aim is to enable users to make a purchase, subscribe to a service or sign up to create an account, it's important to make sure they are easy to complete and help increase conversion rates. Use the available elements to create forms which are well-structured and user-friendly.",source:"@site/docs/book2/01-\u6458\u6284-tabler/forms/form-elements.mdx",sourceDirName:"01-\u6458\u6284-tabler/forms",slug:"/\u6458\u6284-tabler/forms/form-elements",permalink:"/docs/book2/\u6458\u6284-tabler/forms/form-elements",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/forms/form-elements.mdx",tags:[],version:"current",frontMatter:{title:"Form elements",description:"Forms are one of the most important types of interaction with a website or app. Since their aim is to enable users to make a purchase, subscribe to a service or sign up to create an account, it's important to make sure they are easy to complete and help increase conversion rates. Use the available elements to create forms which are well-structured and user-friendly.",bootstrapLink:"components/forms/",libs:"nouislider"},sidebar:"sidebarsBook2",previous:{title:"Tooltips",permalink:"/docs/book2/\u6458\u6284-tabler/components/tooltips"},next:{title:"Form fieldset",permalink:"/docs/book2/\u6458\u6284-tabler/forms/form-fieldset"}},i={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Classic inputs",id:"classic-inputs",level:2},{value:"Form control rounded",id:"form-control-rounded",level:2},{value:"Form control flush",id:"form-control-flush",level:2},{value:"Input with icon",id:"input-with-icon",level:2},{value:"Separated inputs",id:"separated-inputs",level:2},{value:"Textarea and select",id:"textarea-and-select",level:2},{value:"Input size",id:"input-size",level:2},{value:"Datalists",id:"datalists",level:2},{value:"Toggle switches",id:"toggle-switches",level:2},{value:"Radios",id:"radios",level:2},{value:"Checkboxes",id:"checkboxes",level:2},{value:"Range input",id:"range-input",level:2},{value:"Input group",id:"input-group",level:2},{value:"Input with checkboxes or radios",id:"input-with-checkboxes-or-radios",level:2},{value:"Input with prepended or appended text",id:"input-with-prepended-or-appended-text",level:2},{value:"Input with appended link",id:"input-with-appended-link",level:2},{value:"Input with appended <code>&lt;kbd&gt;</code>",id:"input-with-appended-kbd",level:2},{value:"Input with appended icon links",id:"input-with-appended-icon-links",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h2",{id:"classic-inputs"},"Classic inputs"),(0,o.kt)("p",null,"Use classic, user-friendly inputs, label them appropriately and include input placeholders that will help users avoid confusion when completing a form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="20rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Text</label>\n  <input type="text" class="form-control" name="example-text-input" placeholder="Input placeholder" />\n</div>\n<div class="mb-3">\n  <label class="form-label">Password</label>\n  <input type="text" class="form-control" name="example-password-input" placeholder="Input placeholder" />\n</div>\n')),(0,o.kt)("h2",{id:"form-control-rounded"},"Form control rounded"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"form-control-rounded")," class if you prefer form controls with rounded corners."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns={1} height="20rem"',example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Form control rounded</label>\n  <input type="text" class="form-control form-control-rounded mb-2" name="Form control rounded" placeholder="Text.." />\n  <div class="input-icon">\n    <input type="text" value="" class="form-control form-control-rounded" placeholder="Search\u2026" />\n    <span class="input-icon-addon">\n      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n        <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n        <circle cx="10" cy="10" r="7" />\n        <line x1="21" y1="21" x2="15" y2="15" />\n      </svg>\n    </span>\n  </div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="mb-3">\n  <label class="form-label">Form control rounded</label>\n  <input type="text" class="form-control form-control-rounded mb-2" name="Form control rounded" placeholder="Text.." />\n  <div class="input-icon">\n    <input type="text" value="" class="form-control form-control-rounded" placeholder="Search\u2026" />\n    <span class="input-icon-addon">\n      \x3c!-- SVG icon from http://tabler-icons.io/i/search --\x3e\n      <svg>...</svg>\n    </span>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"form-control-flush"},"Form control flush"),(0,o.kt)("p",null,"You can remove borders from your form control by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"form-control-flush")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="20rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Form control flush</label>\n  <input type="text" class="form-control form-control-flush" name="Form control flush" placeholder="Text.." />\n</div>\n')),(0,o.kt)("h2",{id:"input-with-icon"},"Input with icon"),(0,o.kt)("p",null,"Add icons to your input controls to suggest users what they should enter or inform them of the current state of a form element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={1} height="20rem"',example:!0,code:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Icon input</label>\n  <div class="input-icon mb-3">\n    <input type="text" value="" class="form-control" placeholder="Search\u2026" />\n    <span class="input-icon-addon">\n      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n        <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n        <circle cx="10" cy="10" r="7" />\n        <line x1="21" y1="21" x2="15" y2="15" />\n      </svg>\n    </span>\n  </div>\n  <div class="input-icon mb-3">\n    <span class="input-icon-addon">\n      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n        <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n        <circle cx="12" cy="7" r="4" />\n        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />\n      </svg>\n    </span>\n    <input type="text" value="" class="form-control" placeholder="Username" />\n  </div>\n</div>\n<div class="mb-3">\n  <label class="form-label">Loader input</label>\n  <div class="input-icon mb-3">\n    <input type="text" value="" class="form-control" placeholder="Loading\u2026" />\n    <span class="input-icon-addon">\n      <div class="spinner-border spinner-border-sm text-muted" role="status"></div>\n    </span>\n  </div>\n  <div class="input-icon mb-3">\n    <span class="input-icon-addon">\n      <div class="spinner-border spinner-border-sm text-muted" role="status"></div>\n    </span>\n    <input type="text" value="" class="form-control" placeholder="Loading\u2026" />\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"separated-inputs"},"Separated inputs"),(0,o.kt)("p",null,"Include an additional element in your input section, such as a button which can be used to submit the information enetered in the input control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={1} height="20rem"',example:!0,code:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Separated inputs</label>\n  <div class="row g-2">\n    <div class="col">\n      <input type="text" class="form-control" placeholder="Search for\u2026" />\n    </div>\n    <div class="col-auto">\n      <a href="#" class="btn btn-icon" aria-label="Button">\n\n        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n          <circle cx="10" cy="10" r="7" />\n          <line x1="21" y1="21" x2="15" y2="15" />\n        </svg>\n      </a>\n    </div>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"textarea-and-select"},"Textarea and select"),(0,o.kt)("p",null,"Use a multi-line text input control to enable users to enter longer pieces of text. The control will automatically adjust to the length of the text entered."),(0,o.kt)("p",null,"Add one of the available selects - either a dropdown or a multiple choice select - to let users choose from a predefined set of options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="30rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"30rem"'},'<div class="mb-3">\n  <label class="form-label">Textarea</label>\n  <textarea class="form-control" name="example-textarea" placeholder="Textarea placeholder"></textarea>\n</div>\n<div class="mb-3">\n  <div class="form-label">Select</div>\n  <select class="form-select">\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n  </select>\n</div>\n<div class="mb-3">\n  <div class="form-label">Select multiple</div>\n  <select class="form-select" multiple>\n    <option value="1">One</option>\n    <option value="2">Two</option>\n    <option value="3">Three</option>\n  </select>\n</div>\n')),(0,o.kt)("h2",{id:"input-size"},"Input size"),(0,o.kt)("p",null,"Choose the size of an input control that will go well with your form design. Apart from the default size, you can also use small and large input controls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="20rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Input sizing</label>\n  <input class="form-control form-control-lg mb-2" type="text" placeholder=".form-control-lg" />\n  <input class="form-control mb-2" type="text" placeholder="Default input" />\n  <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" />\n</div>\n')),(0,o.kt)("h2",{id:"datalists"},"Datalists"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"datalist")," element to add an autocomplete feature to your input control. The list of available options will display once a user starts to type and will make it quicker to complete form sections."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns={1} height="20rem"',example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Datalist example</label>\n  <input class="form-control" list="datalistOptions" placeholder="Type to search..." />\n  <datalist id="datalistOptions">\n    <option value="Aruba" />\n    <option value="Afghanistan" />\n    <option value="Angola" />\n    <option value="Anguilla" />\n    <option value="Albania" />\n    <option value="Andorra" />\n    <option value="United Arab Emirates" />\n    <option value="Argentina" />\n    <option value="Armenia" />\n    <option value="American Samoa" />\n  </datalist>\n</div>\n')),(0,o.kt)("h2",{id:"toggle-switches"},"Toggle switches"),(0,o.kt)("p",null,"Use toggle switches for the elements of your form which require choosing between two opposing states."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns={1} height="20rem"',example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <div class="form-label">Toggle switches</div>\n  <label class="form-check form-switch">\n    <input class="form-check-input" type="checkbox" checked />\n    <span class="form-check-label">Option 1</span>\n  </label>\n  <label class="form-check form-switch">\n    <input class="form-check-input" type="checkbox" />\n    <span class="form-check-label">Option 2</span>\n  </label>\n  <label class="form-check form-switch">\n    <input class="form-check-input" type="checkbox" />\n    <span class="form-check-label">Option 3</span>\n  </label>\n</div>\n<div class="mb-3">\n  <div class="form-label">Single switch</div>\n  <label class="form-check form-switch">\n    <input class="form-check-input" type="checkbox" />\n    <span class="form-check-label">I agree with terms and conditions</span>\n  </label>\n</div>\n')),(0,o.kt)("h2",{id:"radios"},"Radios"),(0,o.kt)("p",null,"Use radio buttons for the parts of your form which require users to choose one option from a set of two or more mutually exclusive options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns={1} height="20rem"',example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <div class="form-label">Radios</div>\n  <div>\n    <label class="form-check">\n      <input class="form-check-input" type="radio" name="radios" checked />\n      <span class="form-check-label">Option 1</span>\n    </label>\n    <label class="form-check">\n      <input class="form-check-input" type="radio" name="radios" />\n      <span class="form-check-label">Option 2</span>\n    </label>\n    <label class="form-check">\n      <input class="form-check-input" type="radio" disabled />\n      <span class="form-check-label">Option 3</span>\n    </label>\n    <label class="form-check">\n      <input class="form-check-input" type="radio" checked disabled />\n      <span class="form-check-label">Option 4</span>\n    </label>\n  </div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns={1} height="20rem"',example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <div class="form-label">Inline Radios</div>\n  <div>\n    <label class="form-check form-check-inline">\n      <input class="form-check-input" type="radio" name="radios-inline" checked />\n      <span class="form-check-label">Option 1</span>\n    </label>\n    <label class="form-check form-check-inline">\n      <input class="form-check-input" type="radio" name="radios-inline" />\n      <span class="form-check-label">Option 2</span>\n    </label>\n    <label class="form-check form-check-inline">\n      <input class="form-check-input" type="radio" name="radios-inline" disabled />\n      <span class="form-check-label">Option 3</span>\n    </label>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"checkboxes"},"Checkboxes"),(0,o.kt)("p",null,"Use checkoxes if you want to allow users to select more than one option from a set of predefined options or to turn an option on or off."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns={1} height="20rem"',example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <div class="form-label">Checkboxes</div>\n  <div>\n    <label class="form-check">\n      <input class="form-check-input" type="checkbox" />\n      <span class="form-check-label">Checkbox input</span>\n    </label>\n    <label class="form-check">\n      <input class="form-check-input" type="checkbox" disabled />\n      <span class="form-check-label">Disabled checkbox input</span>\n    </label>\n    <label class="form-check">\n      <input class="form-check-input" type="checkbox" checked />\n      <span class="form-check-label">Checked checkbox input</span>\n    </label>\n  </div>\n</div>\n<div class="mb-3">\n  <div class="form-label">Inline Checkboxes</div>\n  <div>\n    <label class="form-check form-check-inline">\n      <input class="form-check-input" type="checkbox" />\n      <span class="form-check-label">Option 1</span>\n    </label>\n    <label class="form-check form-check-inline">\n      <input class="form-check-input" type="checkbox" disabled />\n      <span class="form-check-label">Option 2</span>\n    </label>\n    <label class="form-check form-check-inline">\n      <input class="form-check-input" type="checkbox" checked />\n      <span class="form-check-label">Option 3</span>\n    </label>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"range-input"},"Range input"),(0,o.kt)("p",null,"Add a range slider to make it possible for users to set a value or range, such as a price range or a time frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered columns={1} height="20rem"',example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Range input</label>\n  <input type="range" class="form-range mb-2" value="40" min="0" max="100" step="10" />\n  <div class="form-range mb-2" id="range-simple"></div>\n  <div class="form-range mb-2" id="range-connect"></div>\n  <div class="form-range mb-2 text-green" id="range-color"></div>\n</div>\n<script>\n  document.addEventListener("DOMContentLoaded", function() {\n    window.noUiSlider && (noUiSlider.create(document.getElementById(\'range-color\'), {\n      start: 40,\n      connect: [true, false],\n      step: 10,\n      range: {\n        min: 0,\n        max: 100\n      }\n    }));\n  });\n<\/script>\n')),(0,o.kt)("h2",{id:"input-group"},"Input group"),(0,o.kt)("p",null,"Create a group of input controls and place add-ons on either side of an input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="20rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Input group</label>\n  <div class="input-group mb-2">\n    <span class="input-group-text">\n      @\n    </span>\n    <input type="text" class="form-control" placeholder="username" autocomplete="off" />\n  </div>\n  <div class="input-group mb-2">\n    <input type="text" class="form-control" placeholder="subdomain" autocomplete="off" />\n    <span class="input-group-text">\n      .tabler.io\n    </span>\n  </div>\n  <div class="input-group">\n    <span class="input-group-text">\n      https://\n    </span>\n    <input type="text" class="form-control" placeholder="subdomain" autocomplete="off" />\n    <span class="input-group-text">\n      .tabler.io\n    </span>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"input-with-checkboxes-or-radios"},"Input with checkboxes or radios"),(0,o.kt)("p",null,"Add checkboxes or radio buttons on either side of your input control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="20rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Input with checkbox or radios</label>\n  <div class="input-group mb-2">\n    <span class="input-group-text">\n      <input class="form-check-input m-0" type="checkbox" checked />\n    </span>\n    <input type="text" class="form-control" autocomplete="off" />\n  </div>\n  <div class="input-group">\n    <input type="text" class="form-control" autocomplete="off" />\n    <span class="input-group-text">\n      <input class="form-check-input m-0" type="radio" checked />\n    </span>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"input-with-prepended-or-appended-text"},"Input with prepended or appended text"),(0,o.kt)("p",null,"Add text to your input control, either before or after the text which is to be entered by a user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="20rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Input with prepended text</label>\n  <div class="input-group input-group-flat mb-2">\n    <span class="input-group-text">\n      https://tabler.io/users/\n    </span>\n    <input type="text" class="form-control ps-0" value="yourfancyusername" autocomplete="off" />\n  </div>\n  <div class="input-group input-group-flat">\n    <input type="text" class="form-control text-end pe-0" value="yourfancydomain" autocomplete="off" />\n    <span class="input-group-text">\n      .tabler.io\n    </span>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"input-with-appended-link"},"Input with appended link"),(0,o.kt)("p",null,"Include a link in your input control to add a clickable element within the control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered columns={1} height="20rem"',code:!0,example:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Input with appended link</label>\n  <div class="input-group input-group-flat">\n    <input type="password" class="form-control" value="ultrastrongpassword" autocomplete="off" />\n    <span class="input-group-text">\n      <a href="#" class="input-group-link">Show password</a>\n    </span>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"input-with-appended-kbd"},"Input with appended ",(0,o.kt)("inlineCode",{parentName:"h2"},"<kbd>")),(0,o.kt)("p",null,"Include a ",(0,o.kt)("inlineCode",{parentName:"p"},"<kbd>")," in your input control to add shortcut to the control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"code example centered columns={1}",code:!0,example:!0,centered:!0,columns:"{1}"},'<div class="mb-3">\n  <label class="form-label">Input with appended link</label>\n  <div class="input-group input-group-flat">\n    <input type="password" class="form-control" value="ultrastrongpassword" autocomplete="off" />\n    <span class="input-group-text">\n      <kbd>ctrl + K</kbd>\n    </span>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"input-with-appended-icon-links"},"Input with appended icon links"),(0,o.kt)("p",null,"Add an icon link which you want to display at the end of your input control to visually represent actions which a user can take."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={1} height="20rem"',example:!0,code:!0,centered:!0,columns:"{1}",height:'"20rem"'},'<div class="mb-3">\n  <label class="form-label">Input with appended icon links</label>\n  <div class="input-group input-group-flat">\n    <input type="text" class="form-control" autocomplete="off" />\n    <span class="input-group-text">\n      <a href="#" class="link-secondary" title="Clear search" data-bs-toggle="tooltip">\n        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n          <line x1="18" y1="6" x2="6" y2="18" />\n          <line x1="6" y1="6" x2="18" y2="18" />\n        </svg>\n      </a>\n      <a href="#" class="link-secondary ms-2" title="Search settings" data-bs-toggle="tooltip">\n        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n          <circle cx="6" cy="10" r="2" />\n          <line x1="6" y1="4" x2="6" y2="8" />\n          <line x1="6" y1="12" x2="6" y2="20" />\n          <circle cx="12" cy="16" r="2" />\n          <line x1="12" y1="4" x2="12" y2="14" />\n          <line x1="12" y1="18" x2="12" y2="20" />\n          <circle cx="18" cy="7" r="2" />\n          <line x1="18" y1="4" x2="18" y2="5" />\n          <line x1="18" y1="9" x2="18" y2="20" />\n        </svg>\n      </a>\n      <a href="#" class="link-secondary ms-2 disabled" title="Add notification" data-bs-toggle="tooltip">\n        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />\n          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />\n        </svg>\n      </a>\n    </span>\n  </div>\n</div>\n')))}m.isMDXComponent=!0}}]);