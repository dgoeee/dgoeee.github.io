"use strict";(self.webpackChunkdgoeee=self.webpackChunkdgoeee||[]).push([[3657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={title:"Charts",libs:"apexcharts",description:"Tabler uses ApexCharts - a free and open-source modern charting library that helps developers to create beautiful and interactive visualizations for web pages."},o=void 0,l={unversionedId:"\u6458\u6284-tabler/components/charts",id:"\u6458\u6284-tabler/components/charts",title:"Charts",description:"Tabler uses ApexCharts - a free and open-source modern charting library that helps developers to create beautiful and interactive visualizations for web pages.",source:"@site/docs/book2/01-\u6458\u6284-tabler/components/charts.mdx",sourceDirName:"01-\u6458\u6284-tabler/components",slug:"/\u6458\u6284-tabler/components/charts",permalink:"/docs/book2/\u6458\u6284-tabler/components/charts",draft:!1,editUrl:"https://github.com/dgoeee/dgoeee.github.io/edit/main/docs/book2/01-\u6458\u6284-tabler/components/charts.mdx",tags:[],version:"current",frontMatter:{title:"Charts",libs:"apexcharts",description:"Tabler uses ApexCharts - a free and open-source modern charting library that helps developers to create beautiful and interactive visualizations for web pages."},sidebar:"sidebarsBook2",previous:{title:"Carousel",permalink:"/docs/book2/\u6458\u6284-tabler/components/carousel"},next:{title:"Countup",permalink:"/docs/book2/\u6458\u6284-tabler/components/countup"}},s={},d=[{value:"Line Chart",id:"line-chart",level:2},{value:"Area Chart",id:"area-chart",level:2},{value:"Bar Chart",id:"bar-chart",level:2},{value:"Pie Chart",id:"pie-chart",level:2},{value:"Heatmap Chart",id:"heatmap-chart",level:2},{value:"Advanced example",id:"advanced-example",level:2}],c={toc:d},p="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To be able to use the charts in your application you will need to install the apexcharts dependency with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install apexcharts"),"."),(0,r.kt)("p",null,"See also the ",(0,r.kt)("a",{parentName:"p",href:"https://apexcharts.com/"},"ApexCharts")," documentation."),(0,r.kt)("h2",{id:"line-chart"},"Line Chart"),(0,r.kt)("p",null,"Line charts are a typical pictorial representation that depicts trends and behaviors over time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={2} height="25rem"',example:!0,code:!0,centered:!0,columns:"{2}",height:'"25rem"'},"<div class=\"card\">\n  <div class=\"card-body\">\n    <div id=\"chart-demo-line\" class=\"chart-lg\"></div>\n  </div>\n</div>\n\n<script src=\"$TABLER_CDN/dist/libs/apexcharts/dist/apexcharts.min.js\" defer><\/script>\n<script>\n  document.addEventListener(\"DOMContentLoaded\", function() {\n    window.ApexCharts && (new ApexCharts(document.getElementById('chart-demo-line'), {\n      chart: {\n        type: \"line\",\n        fontFamily: 'inherit',\n        height: 240,\n        parentHeightOffset: 0,\n        toolbar: {\n          show: false,\n        },\n        animations: {\n          enabled: false\n        },\n      },\n      fill: {\n        opacity: 1,\n      },\n      stroke: {\n        width: 2,\n        lineCap: \"round\",\n        curve: \"straight\",\n      },\n      series: [{\n        name: \"Session Duration\",\n        data: [117, 92, 94, 98, 75, 110, 69, 80, 109, 113, 115, 95]\n      }, {\n        name: \"Page Views\",\n        data: [59, 80, 61, 66, 70, 84, 87, 64, 94, 56, 55, 67]\n      }, {\n        name: \"Total Visits\",\n        data: [53, 51, 52, 41, 46, 60, 45, 43, 30, 50, 58, 59]\n      }],\n      tooltip: {\n        theme: 'dark'\n      },\n      grid: {\n        padding: {\n          top: -20,\n          right: 0,\n          left: -4,\n          bottom: -4\n        },\n        strokeDashArray: 4,\n      },\n      xaxis: {\n        labels: {\n          padding: 0,\n        },\n        tooltip: {\n          enabled: false\n        },\n        type: 'datetime',\n      },\n      yaxis: {\n        labels: {\n          padding: 4\n        },\n      },\n      labels: [\n        '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02'\n      ],\n      colors: [tabler.getColor(\"yellow\"), tabler.getColor(\"green\"), tabler.getColor(\"primary\")],\n      legend: {\n        show: true,\n        position: 'bottom',\n        offsetY: 12,\n        markers: {\n          width: 10,\n          height: 10,\n          radius: 100,\n        },\n        itemMargin: {\n          horizontal: 8,\n          vertical: 8\n        },\n      },\n    })).render();\n  });\n<\/script>\n")),(0,r.kt)("h2",{id:"area-chart"},"Area Chart"),(0,r.kt)("p",null,"Area charts are used to represent quantitative variations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={2} height="25rem"',example:!0,code:!0,centered:!0,columns:"{2}",height:'"25rem"'},"<div class=\"card\">\n  <div class=\"card-body\">\n    <div id=\"chart-demo-area\" class=\"chart-lg\"></div>\n  </div>\n</div>\n\n<script src=\"$TABLER_CDN/dist/libs/apexcharts/dist/apexcharts.min.js\" defer><\/script>\n<script>\n  document.addEventListener(\"DOMContentLoaded\", function() {\n    window.ApexCharts && (new ApexCharts(document.getElementById('chart-demo-area'), {\n      chart: {\n        type: \"area\",\n        fontFamily: 'inherit',\n        height: 240,\n        parentHeightOffset: 0,\n        toolbar: {\n          show: false,\n        },\n        animations: {\n          enabled: false\n        },\n      },\n      dataLabels: {\n        enabled: false,\n      },\n      fill: {\n        opacity: .16,\n        type: 'solid'\n      },\n      stroke: {\n        width: 2,\n        lineCap: \"round\",\n        curve: \"smooth\",\n      },\n      series: [{\n        name: \"series1\",\n        data: [56, 40, 39, 47, 34, 48, 44]\n      }, {\n        name: \"series2\",\n        data: [45, 43, 30, 23, 38, 39, 54]\n      }],\n      tooltip: {\n        theme: 'dark'\n      },\n      grid: {\n        padding: {\n          top: -20,\n          right: 0,\n          left: -4,\n          bottom: -4\n        },\n        strokeDashArray: 4,\n      },\n      xaxis: {\n        labels: {\n          padding: 0,\n        },\n        tooltip: {\n          enabled: false\n        },\n        axisBorder: {\n          show: false,\n        },\n        type: 'datetime',\n      },\n      yaxis: {\n        labels: {\n          padding: 4\n        },\n      },\n      labels: [\n        '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27'\n      ],\n      colors: [tabler.getColor(\"primary\"), tabler.getColor(\"purple\")],\n      legend: {\n        show: true,\n        position: 'bottom',\n        offsetY: 12,\n        markers: {\n          width: 10,\n          height: 10,\n          radius: 100,\n        },\n        itemMargin: {\n          horizontal: 8,\n          vertical: 8\n        },\n      },\n    })).render();\n  });\n<\/script>\n")),(0,r.kt)("h2",{id:"bar-chart"},"Bar Chart"),(0,r.kt)("p",null,"A bar chart is the best tool for displaying comparisons between categories of data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={2} height="25rem"',example:!0,code:!0,centered:!0,columns:"{2}",height:'"25rem"'},'<div class="card">\n  <div class="card-body">\n    <div id="chart-demo-bar" class="chart-lg"></div>\n  </div>\n</div>\n\n<script src="$TABLER_CDN/dist/libs/apexcharts/dist/apexcharts.min.js" defer><\/script>\n<script>\n  document.addEventListener("DOMContentLoaded", function() {\n    window.ApexCharts && (new ApexCharts(document.getElementById(\'chart-demo-bar\'), {\n      chart: {\n        type: "bar",\n        fontFamily: \'inherit\',\n        height: 240,\n        parentHeightOffset: 0,\n        toolbar: {\n          show: false,\n        },\n        animations: {\n          enabled: false\n        },\n        stacked: true,\n      },\n      plotOptions: {\n        bar: {\n          barHeight: \'50%\',\n          horizontal: true,\n        }\n      },\n      dataLabels: {\n        enabled: false,\n      },\n      fill: {\n        opacity: 1,\n      },\n      series: [{\n        name: "Container for a Fanta",\n        data: [44, 55, 41, 37, 22, 43, 21]\n      }, {\n        name: "Strange sunglasses",\n        data: [53, 32, 33, 52, 13, 43, 32]\n      }, {\n        name: "Pen Pineapple Apple Pen",\n        data: [12, 17, 11, 9, 15, 11, 20]\n      }, {\n        name: "Binoculars",\n        data: [9, 7, 5, 8, 6, 9, 4]\n      }, {\n        name: "Magical notebook",\n        data: [25, 12, 19, 32, 25, 24, 10]\n      }],\n      tooltip: {\n        theme: \'dark\'\n      },\n      grid: {\n        padding: {\n          top: -20,\n          right: 0,\n          left: -4,\n          bottom: -4\n        },\n        strokeDashArray: 4,\n      },\n      xaxis: {\n        labels: {\n          padding: 0,\n          formatter: function(val) {\n            return val + "K"\n          },\n        },\n        tooltip: {\n          enabled: false\n        },\n        axisBorder: {\n          show: false,\n        },\n        categories: [\'2008\', \'2009\', \'2010\', \'2011\', \'2012\', \'2013\', \'2014\'],\n      },\n      yaxis: {\n        labels: {\n          padding: 4\n        },\n      },\n      colors: [tabler.getColor("purple"), tabler.getColor("green"), tabler.getColor("yellow"), tabler.getColor("red"), tabler.getColor("primary")],\n      legend: {\n        show: true,\n        position: \'bottom\',\n        offsetY: 12,\n        markers: {\n          width: 10,\n          height: 10,\n          radius: 100,\n        },\n        itemMargin: {\n          horizontal: 8,\n          vertical: 8\n        },\n      },\n    })).render();\n  });\n<\/script>\n')),(0,r.kt)("h2",{id:"pie-chart"},"Pie Chart"),(0,r.kt)("p",null,"Pie charts are an instrumental visualization tool useful in expressing data and information in terms of percentages, ratio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={2} height="25rem"',example:!0,code:!0,centered:!0,columns:"{2}",height:'"25rem"'},'<div class="card">\n  <div class="card-body">\n    <div id="chart-demo-pie" class="chart-lg"></div>\n  </div>\n</div>\n\n<script src="$TABLER_CDN/dist/libs/apexcharts/dist/apexcharts.min.js" defer><\/script>\n<script>\n  document.addEventListener("DOMContentLoaded", function() {\n    window.ApexCharts && (new ApexCharts(document.getElementById(\'chart-demo-pie\'), {\n      chart: {\n        type: "donut",\n        fontFamily: \'inherit\',\n        height: 240,\n        sparkline: {\n          enabled: true\n        },\n        animations: {\n          enabled: false\n        },\n      },\n      fill: {\n        opacity: 1,\n      },\n      series: [44, 55, 12, 2],\n      labels: ["Direct", "Affilliate", "E-mail", "Other"],\n      tooltip: {\n        theme: \'dark\'\n      },\n      grid: {\n        strokeDashArray: 4,\n      },\n      colors: [tabler.getColor("primary"), tabler.getColor("primary", 0.8), tabler.getColor("primary", 0.6), tabler.getColor("gray-300")],\n      legend: {\n        show: true,\n        position: \'bottom\',\n        offsetY: 12,\n        markers: {\n          width: 10,\n          height: 10,\n          radius: 100,\n        },\n        itemMargin: {\n          horizontal: 8,\n          vertical: 8\n        },\n      },\n      tooltip: {\n        fillSeriesColor: false\n      },\n    })).render();\n  });\n<\/script>\n')),(0,r.kt)("h2",{id:"heatmap-chart"},"Heatmap Chart"),(0,r.kt)("p",null,"Heatmap is a visualization tool that employs color the way a bar chart employs height and width in representing data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={2} height="25rem"',example:!0,code:!0,centered:!0,columns:"{2}",height:'"25rem"'},'<div class="card">\n  <div class="card-body">\n    <div id="chart-demo-pie" class="chart-lg"></div>\n  </div>\n</div>\n\n<script src="$TABLER_CDN/dist/libs/apexcharts/dist/apexcharts.min.js" defer><\/script>\n<script>\n  document.addEventListener("DOMContentLoaded", function() {\n    window.ApexCharts && (new ApexCharts(document.getElementById(\'chart-demo-pie\'), {\n      chart: {\n        type: "donut",\n        fontFamily: \'inherit\',\n        height: 240,\n        sparkline: {\n          enabled: true\n        },\n        animations: {\n          enabled: false\n        },\n      },\n      fill: {\n        opacity: 1,\n      },\n      series: [44, 55, 12, 2],\n      labels: ["Direct", "Affilliate", "E-mail", "Other"],\n      tooltip: {\n        theme: \'dark\'\n      },\n      grid: {\n        strokeDashArray: 4,\n      },\n      colors: [tabler.getColor("primary"), tabler.getColor("primary", 0.8), tabler.getColor("primary", 0.6), tabler.getColor("gray-300")],\n      legend: {\n        show: true,\n        position: \'bottom\',\n        offsetY: 12,\n        markers: {\n          width: 10,\n          height: 10,\n          radius: 100,\n        },\n        itemMargin: {\n          horizontal: 8,\n          vertical: 8\n        },\n      },\n      tooltip: {\n        fillSeriesColor: false\n      },\n    })).render();\n  });\n<\/script>\n')),(0,r.kt)("h2",{id:"advanced-example"},"Advanced example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'example code centered columns={2} height="25rem"',example:!0,code:!0,centered:!0,columns:"{2}",height:'"25rem"'},"<div class=\"card\">\n  <div class=\"card-body\">\n    <div id=\"chart-social-referrals\" class=\"chart-lg\"></div>\n  </div>\n</div>\n\n<script src=\"$TABLER_CDN/dist/libs/apexcharts/dist/apexcharts.min.js\" defer><\/script>\n<script>\n  document.addEventListener(\"DOMContentLoaded\", function() {\n    window.ApexCharts && (new ApexCharts(document.getElementById('chart-social-referrals'), {\n      chart: {\n        type: \"line\",\n        fontFamily: 'inherit',\n        height: 240,\n        parentHeightOffset: 0,\n        toolbar: {\n          show: false,\n        },\n        animations: {\n          enabled: false\n        },\n      },\n      fill: {\n        opacity: 1,\n      },\n      stroke: {\n        width: 2,\n        lineCap: \"round\",\n        curve: \"smooth\",\n      },\n      series: [{\n        name: \"Facebook\",\n        data: [13281, 8521, 15038, 9983, 15417, 8888, 7052, 14270, 5214, 9587, 5950, 16852, 17836, 12217, 17406, 12262, 9147, 14961, 18292, 15230, 13435, 10649, 5140, 13680, 4508, 13271, 13413, 5543, 18727, 18238, 18175, 6246, 5864, 17847, 9170, 6445, 12945, 8142, 8980, 10422, 15535, 11569, 10114, 17621, 16138, 13046, 6652, 9906, 14100, 16495, 6749]\n      }, {\n        name: \"Twitter\",\n        data: [3680, 1862, 3070, 2252, 5348, 3091, 3000, 3984, 5176, 5325, 2420, 5474, 3098, 1893, 3748, 2879, 4197, 5186, 4213, 4334, 2807, 1594, 4863, 2030, 3752, 4856, 5341, 3954, 3461, 3097, 3404, 4949, 2283, 3227, 3630, 2360, 3477, 4675, 1901, 2252, 3347, 2954, 5029, 2079, 2830, 3292, 4578, 3401, 4104, 3749, 4457, 3734]\n      }, {\n        name: \"Dribbble\",\n        data: [722, 1866, 961, 1108, 1110, 561, 1753, 1815, 1985, 776, 859, 547, 1488, 766, 702, 621, 1599, 1372, 1620, 963, 759, 764, 739, 789, 1696, 1454, 1842, 734, 551, 1689, 1924, 1875, 908, 1675, 1541, 1953, 534, 502, 1524, 1867, 719, 1472, 1608, 1025, 889, 1150, 654, 1695, 1662, 1285, 1787]\n      }],\n      tooltip: {\n        theme: 'dark'\n      },\n      grid: {\n        padding: {\n          top: -20,\n          right: 0,\n          left: -4,\n          bottom: -4\n        },\n        strokeDashArray: 4,\n        xaxis: {\n          lines: {\n            show: true\n          }\n        },\n      },\n      xaxis: {\n        labels: {\n          padding: 0,\n        },\n        tooltip: {\n          enabled: false\n        },\n        type: 'datetime',\n      },\n      yaxis: {\n        labels: {\n          padding: 4\n        },\n      },\n      labels: [\n        '2020-06-21', '2020-06-22', '2020-06-23', '2020-06-24', '2020-06-25', '2020-06-26', '2020-06-27', '2020-06-28', '2020-06-29', '2020-06-30', '2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08', '2020-07-09', '2020-07-10', '2020-07-11', '2020-07-12', '2020-07-13', '2020-07-14', '2020-07-15', '2020-07-16', '2020-07-17', '2020-07-18', '2020-07-19', '2020-07-20', '2020-07-21', '2020-07-22', '2020-07-23', '2020-07-24', '2020-07-25', '2020-07-26', '2020-07-27', '2020-07-28', '2020-07-29', '2020-07-30', '2020-07-31', '2020-08-01', '2020-08-02', '2020-08-03', '2020-08-04', '2020-08-05', '2020-08-06', '2020-08-07', '2020-08-08', '2020-08-09', '2020-08-10'\n      ],\n      colors: [tabler.getColor(\"facebook\"), tabler.getColor(\"twitter\"), tabler.getColor(\"dribbble\")],\n      legend: {\n        show: true,\n        position: 'bottom',\n        offsetY: 12,\n        markers: {\n          width: 10,\n          height: 10,\n          radius: 100,\n        },\n        itemMargin: {\n          horizontal: 8,\n          vertical: 8\n        },\n      },\n    })).render();\n  });\n<\/script>\n")))}h.isMDXComponent=!0}}]);