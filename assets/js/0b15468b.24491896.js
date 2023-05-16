"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[6247],{3905:(a,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>p});var l=n(7294);function g(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,l)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){g(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,l,g=function(a,e){if(null==a)return{};var n,l,g={},o=Object.keys(a);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(g[n]=a[n]);return g}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(g[n]=a[n])}return g}var t=l.createContext({}),i=function(a){var e=l.useContext(t),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},f=function(a){var e=i(a.components);return l.createElement(t.Provider,{value:e},a.children)},s="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(a,e){var n=a.components,g=a.mdxType,o=a.originalType,t=a.parentName,f=m(a,["components","mdxType","originalType","parentName"]),s=i(n),c=g,p=s["".concat(t,".").concat(c)]||s[c]||u[c]||o;return n?l.createElement(p,r(r({ref:e},f),{},{components:n})):l.createElement(p,r({ref:e},f))}));function p(a,e){var n=arguments,g=e&&e.mdxType;if("string"==typeof a||g){var o=n.length,r=new Array(o);r[0]=c;var m={};for(var t in e)hasOwnProperty.call(e,t)&&(m[t]=e[t]);m.originalType=a,m[s]="string"==typeof a?a:g,r[1]=m;for(var i=2;i<o;i++)r[i]=n[i];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2777:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>f});var l=n(7462),g=(n(7294),n(3905)),o=n(9124);const r={title:"Flags",description:"Thanks to the Tabler flags plugin, you can create flags to visually represent countries or languages. Flags are often used in forms, as an element of a delivery address, phone number dialling code and many more.",plugin:"flags",libs:"tabler-flags"},m=void 0,t={unversionedId:"\u6458\u6284-tabler/plugins/flags",id:"\u6458\u6284-tabler/plugins/flags",title:"Flags",description:"Thanks to the Tabler flags plugin, you can create flags to visually represent countries or languages. Flags are often used in forms, as an element of a delivery address, phone number dialling code and many more.",source:"@site/docs/book2/01-\u6458\u6284-tabler/plugins/flags.mdx",sourceDirName:"01-\u6458\u6284-tabler/plugins",slug:"/\u6458\u6284-tabler/plugins/flags",permalink:"/docs/book2/\u6458\u6284-tabler/plugins/flags",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/plugins/flags.mdx",tags:[],version:"current",frontMatter:{title:"Flags",description:"Thanks to the Tabler flags plugin, you can create flags to visually represent countries or languages. Flags are often used in forms, as an element of a delivery address, phone number dialling code and many more.",plugin:"flags",libs:"tabler-flags"},sidebar:"sidebarsBook2",previous:{title:"Page layouts",permalink:"/docs/book2/\u6458\u6284-tabler/layout/page-layouts"},next:{title:"Payments",permalink:"/docs/book2/\u6458\u6284-tabler/plugins/payments"}},i={},f=[{value:"Installation",id:"installation",level:2},{value:"Flag",id:"flag",level:2},{value:"Flag sizes",id:"flag-sizes",level:2},{value:"Types",id:"types",level:2}],s=(u="FlagsTable",function(a){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,g.kt)("div",a)});var u;const c={toc:f},p="wrapper";function d(a){let{components:e,...n}=a;return(0,g.kt)(p,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,g.kt)("h2",{id:"installation"},"Installation"),(0,g.kt)("p",null,"This part of Tabler is distributed as plugin. To enable it you should include ",(0,g.kt)("inlineCode",{parentName:"p"},"tabler-flags.css")," or ",(0,g.kt)("inlineCode",{parentName:"p"},"tabler-flags.min.css")," file to your page."),(0,g.kt)("p",null,"You can also include plugin via CDN:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="$TABLER_CDN/dist/css/tabler-flags.min.css">\n')),(0,g.kt)("h2",{id:"flag"},"Flag"),(0,g.kt)("p",null,"To create a flag, add the ",(0,g.kt)("inlineCode",{parentName:"p"},"flag")," class to a component and choose the country whose flag you want to use. The full list of countries can be found below."),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-html",metastring:'code example centered separated plugins="flags"',code:!0,example:!0,centered:!0,separated:!0,plugins:'"flags"'},'<span class="flag flag-country-tg"></span>\n<span class="flag flag-country-br"></span>\n<span class="flag flag-country-pt"></span>\n')),(0,g.kt)("h2",{id:"flag-sizes"},"Flag sizes"),(0,g.kt)("p",null,"Using Bootstrap\u2019s typical naming structure, you can create a standard flag, or scale it up or down to different sizes based on what\u2019s needed."),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-html",metastring:'example centered separated plugins="flags"',example:!0,centered:!0,separated:!0,plugins:'"flags"'},'<span class="flag flag-xl flag-country-us"></span>\n<span class="flag flag-lg flag-country-us"></span>\n<span class="flag flag-md flag-country-us"></span>\n<span class="flag flag-sm flag-country-us"></span>\n<span class="flag flag-xs flag-country-us"></span>\n')),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-html"},'<span class="flag flag-xl ..."></span>\n<span class="flag flag-lg ..."></span>\n<span class="flag flag-md ..."></span>\n<span class="flag flag-sm ..."></span>\n<span class="flag flag-xs ..."></span>\n')),(0,g.kt)("h2",{id:"types"},"Types"),(0,g.kt)("p",null,"To use the flag of a particular country, add the ",(0,g.kt)("inlineCode",{parentName:"p"},"flag-country-(country name)")," class. For example, to create a flag of Andorra should use the following class: ",(0,g.kt)("inlineCode",{parentName:"p"},".flag-country-ad"),"."),(0,g.kt)(s,{flags:o.id,mdxType:"FlagsTable"}))}d.isMDXComponent=!0},9124:a=>{a.exports=JSON.parse('{"O9":{"ue":[{"name":"blue","variable":"var(--tblr-blue)","value":"#206bc4"},{"name":"azure","variable":"var(--tblr-azure)","value":"#4299e1"},{"name":"indigo","variable":"var(--tblr-indigo)","value":"#4263eb"},{"name":"purple","variable":"var(--tblr-purple)","value":"#ae3ec9"},{"name":"pink","variable":"var(--tblr-pink)","value":"#d6336c"},{"name":"red","variable":"var(--tblr-red)","value":"#d63939"},{"name":"orange","variable":"var(--tblr-orange)","value":"#f76707"},{"name":"yellow","variable":"var(--tblr-yellow)","value":"#f59f00"},{"name":"lime","variable":"var(--tblr-lime)","value":"#74b816"},{"name":"green","variable":"var(--tblr-green)","value":"#2fb344"},{"name":"teal","variable":"var(--tblr-teal)","value":"#0ca678"},{"name":"cyan","variable":"var(--tblr-cyan)","value":"#17a2b8"}],"c6":[{"name":"gray-50","value":"#f8fafc"},{"name":"gray-100","value":"#f1f5f9"},{"name":"gray-200","value":"#e2e8f0"},{"name":"gray-300","value":"#c8d3e1"},{"name":"gray-400","value":"#9ba9be"},{"name":"gray-500","value":"#6c7a91"},{"name":"gray-600","value":"#49566c"},{"name":"gray-700","value":"#313c52"},{"name":"gray-800","value":"#1d273b"},{"name":"gray-900","value":"#0f172a"}],"R2":[{"name":"blue-lt","value":"#e9f0f9"},{"name":"azure-lt","value":"#ecf5fc"},{"name":"indigo-lt","value":"#eceffd"},{"name":"purple-lt","value":"#f7ecfa"},{"name":"pink-lt","value":"#fbebf0"},{"name":"red-lt","value":"#fbebeb"},{"name":"orange-lt","value":"#fef0e6"},{"name":"yellow-lt","value":"#fef5e6"},{"name":"lime-lt","value":"#f1f8e8"},{"name":"green-lt","value":"#eaf7ec"},{"name":"teal-lt","value":"#e7f6f2"},{"name":"cyan-lt","value":"#e8f6f8"}],"xs":[{"name":"facebook","value":"#1877F2"},{"name":"twitter","value":"#1da1f2"},{"name":"linkedin","value":"#0a66c2"},{"name":"google","value":"#dc4e41"},{"name":"youtube","value":"#ff0000"},{"name":"vimeo","value":"#1ab7ea"},{"name":"dribbble","value":"#ea4c89"},{"name":"github","value":"#181717"},{"name":"instagram","value":"#e4405f"},{"name":"pinterest","value":"#bd081c"},{"name":"vk","value":"#6383a8"},{"name":"rss","value":"#ffa500"},{"name":"flickr","value":"#0063dc"},{"name":"bitbucket","value":"#0052cc"},{"name":"tabler","value":"#206bc4"}]},"id":[{"name":"Andorra","flag":"ad"},{"name":"United Arab Emirates","flag":"ae"},{"name":"Afghanistan","flag":"af"},{"name":"Antigua","flag":"ag"},{"name":"Anguilla","flag":"ai"},{"name":"Armenia","flag":"am"},{"name":"Angolan","flag":"ao"},{"name":"Antarctica","flag":"aq"},{"name":"Argentina","flag":"ar"},{"name":"American Samoa","flag":"as"},{"name":"Austria","flag":"at"},{"name":"Australia","flag":"au"},{"name":"Aruba","flag":"aw"},{"name":"Aslan Islands","flag":"ax"},{"name":"Azerbaijan","flag":"az"},{"name":"Bosnian","flag":"ba"},{"name":"Barbados","flag":"bb"},{"name":"Belgium","flag":"be"},{"name":"Burkina Faso","flag":"bf"},{"name":"Bulgaria","flag":"bg"},{"name":"Bahrain","flag":"bh"},{"name":"Burundi","flag":"bi"},{"name":"Benin","flag":"bj"},{"name":"Saint-Barth\xe9lemy","flag":"bl"},{"name":"Bermuda","flag":"bm"},{"name":"Bruneian","flag":"bn"},{"name":"Bolivia","flag":"bo"},{"name":"Bonaire","flag":"bq"},{"name":"Brazil","flag":"br"},{"name":"Bahamas","flag":"bs"},{"name":"Bhutan","flag":"bt"},{"name":"Bouvet Island","flag":"bv"},{"name":"Batswana","flag":"bw"},{"name":"Belarus","flag":"by"},{"name":"Belize","flag":"bz"},{"name":"Canada","flag":"ca"},{"name":"Cocos Island","flag":"cc"},{"name":"Democratic Republic of Congo","flag":"cd"},{"name":"Central African Republic","flag":"cf"},{"name":"Republic of the Congo","flag":"cg"},{"name":"Switzerland","flag":"ch"},{"name":"Ivory Coast","flag":"ci"},{"name":"Cook Island","flag":"ck"},{"name":"Chile","flag":"cl"},{"name":"Cameroon","flag":"cm"},{"name":"China","flag":"cn"},{"name":"Colombia","flag":"co"},{"name":"Costa Rica","flag":"cr"},{"name":"Cuba","flag":"cu"},{"name":"Cape Verde","flag":"cv"},{"name":"Curacao","flag":"cw"},{"name":"Christmas Island","flag":"cx"},{"name":"Cyprus","flag":"cy"},{"name":"Czech Republic","flag":"cz"},{"name":"Germany","flag":"de"},{"name":"Djibouti","flag":"dj"},{"name":"Denmark","flag":"dk"},{"name":"Dominica","flag":"dm"},{"name":"Dominican Republic","flag":"do"},{"name":"Algeria","flag":"dz"},{"name":"Ecuador","flag":"ec"},{"name":"Estonia","flag":"ee"},{"name":"Egypt","flag":"eg"},{"name":"Sahrawi","flag":"eh"},{"name":"Eritrea","flag":"er"},{"name":"Spain","flag":"es"},{"name":"Catalonia","flag":"es-ct"},{"name":"Ethiopia","flag":"et"},{"name":"European Union","flag":"eu"},{"name":"Finland","flag":"fi"},{"name":"Fiji","flag":"fj"},{"name":"Falkland Islands","flag":"fk"},{"name":"Federate States of Micronesia","flag":"fm"},{"name":"Faroe Islands","flag":"fo"},{"name":"France","flag":"fr"},{"name":"Gabon","flag":"ga"},{"name":"Great Britain","flag":"gb"},{"name":"England","flag":"gb-eng"},{"name":"Nothern Ireland","flag":"gb-nir"},{"name":"Scotland","flag":"gb-sct"},{"name":"Wales","flag":"gb-wls"},{"name":"Grenada","flag":"gd"},{"name":"Georgia","flag":"ge"},{"name":"Guyana","flag":"gf"},{"name":"Guernsey","flag":"gg"},{"name":"Ghana","flag":"gh"},{"name":"Gibraltar","flag":"gi"},{"name":"Greenland","flag":"gl"},{"name":"Gambia","flag":"gm"},{"name":"Guinea","flag":"gn"},{"name":"Guadeloupe","flag":"gp"},{"name":"Equatorial Guinea","flag":"gq"},{"name":"Greece","flag":"gr"},{"name":"South Georgia","flag":"gs"},{"name":"Guatemala","flag":"gt"},{"name":"Guam","flag":"gu"},{"name":"Guinea-Bissau","flag":"gw"},{"name":"Guyana","flag":"gy"},{"name":"Hong Kong","flag":"hk"},{"name":"Heard and McDonald Islands","flag":"hm"},{"name":"Honduras","flag":"hn"},{"name":"Croatia","flag":"hr"},{"name":"Haiti","flag":"ht"},{"name":"Hungary","flag":"hu"},{"name":"Indonesia","flag":"id"},{"name":"Ireland","flag":"ie"},{"name":"Israel","flag":"il"},{"name":"Isle of Man","flag":"im"},{"name":"India","flag":"in"},{"name":"British Indian Ocean Territory","flag":"io"},{"name":"Iraq","flag":"iq"},{"name":"Iran","flag":"ir"},{"name":"Iceland","flag":"is"},{"name":"Italy","flag":"it"},{"name":"Jersey","flag":"je"},{"name":"Jamaica","flag":"jm"},{"name":"Jordan","flag":"jo"},{"name":"Japan","flag":"jp"},{"name":"Kenya","flag":"ke"},{"name":"Kyrgyzstan","flag":"kg"},{"name":"Cambodia","flag":"kh"},{"name":"Kiribati","flag":"ki"},{"name":"Comoros","flag":"km"},{"name":"Saint Kitts and Nevis","flag":"kn"},{"name":"North Korea","flag":"kp"},{"name":"South Korea","flag":"kr"},{"name":"Kuwait","flag":"kw"},{"name":"Cayman Islands","flag":"ky"},{"name":"Kazakhstan","flag":"kz"},{"name":"Laos","flag":"la"},{"name":"Lebanese","flag":"lb"},{"name":"Saint Lucia","flag":"lc"},{"name":"Liechtenstein","flag":"li"},{"name":"Sri Lanka","flag":"lk"},{"name":"Liberia","flag":"lr"},{"name":"Lesotho","flag":"ls"},{"name":"Lithuania","flag":"lt"},{"name":"Luxembourg","flag":"lu"},{"name":"Latvia","flag":"lv"},{"name":"Libya","flag":"ly"},{"name":"Morocco","flag":"ma"},{"name":"Monaco","flag":"mc"},{"name":"Moldova","flag":"md"},{"name":"Montenegro","flag":"me"},{"name":"Saint Martin","flag":"mf"},{"name":"Madagascar","flag":"mg"},{"name":"Marshall Islands","flag":"mh"},{"name":"Macedonia","flag":"mk"},{"name":"Mali","flag":"ml"},{"name":"Myanmar","flag":"mm"},{"name":"Mongolia","flag":"mn"},{"name":"Macao","flag":"mo"},{"name":"Nothern Mariana Islands","flag":"mp"},{"name":"Martinique","flag":"mq"},{"name":"Mauritania","flag":"mr"},{"name":"Montserrat","flag":"ms"},{"name":"Malta","flag":"mt"},{"name":"Mauritius","flag":"mu"},{"name":"Maldives","flag":"mv"},{"name":"Malawi","flag":"mw"},{"name":"Mexico","flag":"mx"},{"name":"Malaysia","flag":"my"},{"name":"Mozambique","flag":"mz"},{"name":"Namibia","flag":"na"},{"name":"New Caledonia","flag":"nc"},{"name":"Niger","flag":"ne"},{"name":"Norfolk Island","flag":"nf"},{"name":"Nigeria","flag":"ng"},{"name":"Nicaragua","flag":"ni"},{"name":"Norway","flag":"no"},{"name":"Nepal","flag":"np"},{"name":"Nauruan","flag":"nr"},{"name":"Niger","flag":"nu"},{"name":"New Zealand","flag":"nz"},{"name":"Oman","flag":"om"},{"name":"Panama","flag":"pa"},{"name":"Peru","flag":"pe"},{"name":"French Polynesia","flag":"pf"},{"name":"Papua New Guinea","flag":"pg"},{"name":"Philippines","flag":"ph"},{"name":"Pakistan","flag":"pk"},{"name":"Poland","flag":"pl"},{"name":"Saint Pierre","flag":"pm"},{"name":"Pitcairn Islands","flag":"pn"},{"name":"Puerto Rico","flag":"pr"},{"name":"Palestine","flag":"ps"},{"name":"Portugal","flag":"pt"},{"name":"Palau","flag":"pw"},{"name":"Paraguay","flag":"py"},{"name":"Qatar","flag":"qa"},{"name":"Reunion Island","flag":"re"},{"name":"Romania","flag":"ro"},{"name":"Serbia","flag":"rs"},{"name":"Russia","flag":"ru"},{"name":"Rwanda","flag":"rw"},{"name":"Saudi Arabia","flag":"sa"},{"name":"Solomon Islands","flag":"sb"},{"name":"Seychelles","flag":"sc"},{"name":"Sudan","flag":"sd"},{"name":"Sweden","flag":"se"},{"name":"Singapore","flag":"sg"},{"name":"Saint Helena","flag":"sh"},{"name":"Slovenia","flag":"si"},{"name":"Svalbard Island","flag":"sj"},{"name":"Slovakia","flag":"sk"},{"name":"Sierra Leone","flag":"sl"},{"name":"San Marino","flag":"sm"},{"name":"Senegal","flag":"sn"},{"name":"Somalia","flag":"so"},{"name":"Suriname","flag":"sr"},{"name":"South Sudan","flag":"ss"},{"name":"Sao Tome","flag":"st"},{"name":"El Salvador","flag":"sv"},{"name":"Sint Maarten","flag":"sx"},{"name":"Syria","flag":"sy"},{"name":"Swaziland","flag":"sz"},{"name":"Turks and Caicos","flag":"tc"},{"name":"Chad","flag":"td"},{"name":"French Southern and Antarctic Lands","flag":"tf"},{"name":"Togo","flag":"tg"},{"name":"Thailand","flag":"th"},{"name":"Tajikistan","flag":"tj"},{"name":"Tokelau","flag":"tk"},{"name":"Timor Leste","flag":"tl"},{"name":"Turkmenistan","flag":"tm"},{"name":"Tunisia","flag":"tn"},{"name":"Tonga","flag":"to"},{"name":"Turkey","flag":"tr"},{"name":"Trinidad and Tobago","flag":"tt"},{"name":"Tuvalu","flag":"tv"},{"name":"Tanzania","flag":"tz"},{"name":"Ukraine","flag":"ua"},{"name":"Uganda","flag":"ug"},{"name":"United States Minor Islands","flag":"um"},{"name":"United Nations","flag":"un"},{"name":"United States of America","flag":"us"},{"name":"Uruguay","flag":"uy"},{"name":"Uzbekistan","flag":"uz"},{"name":"Vatican City","flag":"va"},{"name":"Saint Vincent","flag":"vc"},{"name":"Venezuela","flag":"ve"},{"name":"British Virgin Islands","flag":"vg"},{"name":"Virgiin Islands","flag":"vi"},{"name":"Vietnam","flag":"vn"},{"name":"Vanuatu","flag":"vu"},{"name":"Wallis and Futuna","flag":"wf"},{"name":"Samoa","flag":"ws"},{"name":"Yemen","flag":"ye"},{"name":"South Africa","flag":"za"},{"name":"Zambia","flag":"zm"},{"name":"Zimbabwe","flag":"zw"}],"PP":[{"name":"2checkout","logo":"2checkout"},{"name":"Alipay","logo":"alipay"},{"name":"Amazon","logo":"amazon"},{"name":"Americanexpress","logo":"americanexpress"},{"name":"Applepay","logo":"applepay"},{"name":"Bancontact","logo":"bancontact"},{"name":"Bitcoin","logo":"bitcoin"},{"name":"Bitpay","logo":"bitpay"},{"name":"Blik","logo":"blik"},{"name":"Cirrus","logo":"cirrus"},{"name":"Clickandbuy","logo":"clickandbuy"},{"name":"Coinkite","logo":"coinkite"},{"name":"Dinersclub","logo":"dinersclub"},{"name":"Directdebit","logo":"directdebit"},{"name":"Discover","logo":"discover"},{"name":"Dotpay","logo":"dotpay"},{"name":"Dwolla","logo":"dwolla"},{"name":"Ebay","logo":"ebay"},{"name":"Epayco","logo":"epayco"},{"name":"Eway","logo":"eway"},{"name":"Giropay","logo":"giropay"},{"name":"Googlewallet","logo":"googlewallet"},{"name":"Ingenico","logo":"ingenico"},{"name":"Jcb","logo":"jcb"},{"name":"Klarna","logo":"klarna"},{"name":"Laser","logo":"laser"},{"name":"Maestro","logo":"maestro"},{"name":"Mastercard","logo":"mastercard"},{"name":"Mir","logo":"mir"},{"name":"Monero","logo":"monero"},{"name":"Neteller","logo":"neteller"},{"name":"Ogone","logo":"ogone"},{"name":"Okpay","logo":"okpay"},{"name":"Paybox","logo":"paybox"},{"name":"Paymill","logo":"paymill"},{"name":"Payone","logo":"payone"},{"name":"Payoneer","logo":"payoneer"},{"name":"Paypal","logo":"paypal"},{"name":"Paysafecard","logo":"paysafecard"},{"name":"Payu","logo":"payu"},{"name":"Payza","logo":"payza"},{"name":"Przelewy24","logo":"przelewy24"},{"name":"Ripple","logo":"ripple"},{"name":"Sage","logo":"sage"},{"name":"Sepa","logo":"sepa"},{"name":"Shopify","logo":"shopify"},{"name":"Skrill","logo":"skrill"},{"name":"Solo","logo":"solo"},{"name":"Square","logo":"square"},{"name":"Stripe","logo":"stripe"},{"name":"Switch","logo":"switch"},{"name":"Tpay","logo":"tpay"},{"name":"Ukash","logo":"ukash"},{"name":"Unionpay","logo":"unionpay"},{"name":"Verifone","logo":"verifone"},{"name":"Verisign","logo":"verisign"},{"name":"Visa","logo":"visa"},{"name":"Webmoney","logo":"webmoney"},{"name":"Westernunion","logo":"westernunion"},{"name":"Worldpay","logo":"worldpay"}]}')}}]);