// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DGoeee',
  tagline: 'This is a name, to be precise, it should be DG, Oeee', //比如德芙纵向丝滑的纵向丝滑，这里只是小口号之类的
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dgoeee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
// 这里是你github的名字
  organizationName: 'dgoeee', 
// 这个是你要部署到的github的项目名字
  projectName: 'dgoeee.github.io', 

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dgoeee', // Usually your GitHub org/user name.
  projectName: 'dgoeee', // Usually your repo name.

  onBrokenLinks: 'throw', //在检测到任何断开的链接时的行为。默认情况下，它会抛出错误，以确保您永远不会发送任何断开的链接，但您可以根据需要降低此安全性。
  onBrokenMarkdownLinks: 'warn', //在检测到任何断开的 Markdown 链接时的行为。默认情况下，它会打印一个警告，让您知道损坏的 Markdown 链接，但您可以根据需要更改此安全性。

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

//headtags相关设置，如果输入
  //headTags: [
  //  {tagName: 'link', attributes: {rel: 'icon', href: '/img/docusaurus.png',},},
  //],    
//将会在head里得到
//<link rel="icon" href="img/docusaurus.png" />


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

// This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
//metadata会直接保存到翻译后的网页头部
      metadata: [
        {name: 'keywords', content: 'DGoeee，dgoeee，dʒoeee，井仪，井仪的仓库，井仪的理论库，井仪的网站，井仪的个人网站，赛博遗物，赛博遗产，电子遗产，github，教程'},
        {name: 'author', content: 'DGoeee 井仪'},
//让浏览器别自动翻译
        {name: 'google', content: 'notranslate'},
//让多核浏览器优先使用Chromium内核而不是IE内核渲染页面，以支持Html5和css3
        {name: 'renderer', content: 'webkit'},
        {name: 'force-rendering', content: 'webkit'},
//不告诉外链网站我是谁，一种防止图床链接失效的办法
        {name: 'referrer', content: 'no-referrer'},
//谷歌收录网站时的验证信息
        {name: 'google-site-verification', content: 'Lyg-ncL_T5KpLrGofbM1XS5vQdGENLMHSxo0yt0Etn0'},
      ],


//Markdown右上角的目录栏。目录默认只显示 h2 和 h3 标题，这里改为h2-h6
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },

//流程图和图标相关支持
      mermaid: {
        theme: {light: 'neutral', dark: 'neutral'},
        options: {
          maxTextSize: 99999999,
        },
      },

////图片缩放插件的设置
//      imageZoom: {
//          // CSS selector to apply the plugin to, defaults to '.markdown img'
//          selector: '.markdown :not(em) > img',
//          // Optional medium-zoom options
//          // see: https://www.npmjs.com/package/medium-zoom#options
//          options: {
//              background: '#808080',
//          },
//      },

      // Replace with your project's social card★★★★★★★★★★
      image: 'img/logo.svg',

      docs: {
        sidebar: {
//可隐藏的侧边栏
          hideable: true,
//自动折叠侧边栏类别
          autoCollapseCategories: true,
        },
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        hideOnScroll: true, //当用户向下滚动时，导航栏是否隐藏
        title: 'DGoeee',
          
        logo: {
          alt: 'The logo of dgoeee',
          src: 'img/logo.svg',
          href: '/'
        },

        items: [

            
//笔记本            
          {
            type: 'dropdown',
            position: 'left',
            label: '笔记本',
            items: [
              {
                 docsPluginId: 'book1',
                 type: 'docSidebar',
                 sidebarId: 'sidebarsBook1',
                 label: 'book1',
               },
     
               {
                 docsPluginId: 'book2',
                 type: 'docSidebar',
                 sidebarId: 'sidebarsBook2',
                 label: 'book2',
               },
            ],
          },

//思绪
          {
            type: 'dropdown',
            position: 'left',
            label: '思绪',
            items: [
              {to: '/blog/heritage', label: '赛博遗物'},
              {to: '/blog/campfire', label: '营火余音'},
            ],
          },
            
//标签分类
          {
            type: 'dropdown',
            position: 'left',
            label: '标签分类',
            items: [
              {to: '/docs/book1/tags', label: 'book1'},
              {to: '/docs/book2/tags', label: 'book2'},
              {to: '/blog/heritage/tags', label: '赛博遗物'},
              {to: '/blog/campfire/tags', label: '营火余音'},
            ],
          },       

//github个人主页
          {
            href: 'https://github.com/dgoeee/dgoeee.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },



      footer: {
        style: 'dark',
        links: [
          {
            title: '笔记本',
            items: [
              {
                label: 'book1',
                to: '/docs/book1/封面',
              },
              {
                label: 'book2',
                to: '/docs/book2/page0',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: '赛博遗物',
                to: '/blog/heritage',
              },
              {
                label: '营火余音',
                to: '/blog/campfire',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dgoeee/dgoeee.github.io',
              },
            ],
          },
        ],
        logo: {
          alt: 'The logo of dgoeee',
          src: 'img/logo.svg',
          href: 'https://github.com/dgoeee',
          width: 50,
          height: 50,
        },
        copyright: `Copyright © 2021-${new Date().getFullYear()} DGoeee  |  All rights reserved.  |  v1.0.5-beta10`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },


    }),

//数学公式支持
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

//流程图支持，在 themeConfig:中定义了99999999最大容量，修复了Maximum text size in diagram exceeded报错
  markdown: {
    mermaid: true,
  },
    
  plugins: [

//pages页面设置
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '/',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        mdxPageComponent: '@theme/MDXPage',
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [],
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
      },
    ],
      
//book1
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'book1',
        // URL route for the blog section of your site.
        // *DO NOT* include a trailing slash.
        routeBasePath: '/docs/book1',
        // Path to data on filesystem relative to site dir.
        path: './docs/book1',
//tags标签
//        tagsBasePath: '/tags',
                         
        sidebarPath: require.resolve('./docs/book1/sidebarsBook1.js'),
        sidebarCollapsed: true, //进入页面时，侧边栏是否默认折叠
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/dgoeee/dgoeee.github.io/edit/main/',
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
      
//book2
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'book2',
        // URL route for the blog section of your site.
        // *DO NOT* include a trailing slash.
        routeBasePath: '/docs/book2',
        // Path to data on filesystem relative to site dir.
        path: './docs/book2',
//tags标签
//        tagsBasePath: '/docs/book2/tags',
          
        sidebarPath: require.resolve('./docs/book2/sidebarsBook2.js'),
        sidebarCollapsed: true, //进入页面时，侧边栏是否默认折叠
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/dgoeee/dgoeee.github.io/edit/main/',
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],      
      
//赛博遗物      
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'heritage',
        // URL route for the blog section of your site.
        // *DO NOT* include a trailing slash.
        routeBasePath: '/blog/heritage',
        // Path to data on filesystem relative to site dir.
        path: './blog/heritage',
//tags标签
//        tagsBasePath: '/blog/heritage/tags',
     
//显示阅读时间，时间系数为300
        showReadingTime: true,
        readingTime: ({content, frontMatter, defaultReadingTime}) =>
          frontMatter.hide_reading_time
          ? undefined
          : defaultReadingTime({content, options: {wordsPerMinute: 300}}),
//“编辑此页”的链接
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/dgoeee/dgoeee.github.io/edit/main/',
//用于增进 SEO 的博客页面标题
        blogTitle: '赛博遗物',
//用于增进 SEO 的博客页面元描述
        blogDescription: '感谢墓碑记录一生，时间是我最大的敌人',
//博客列表 postsPerPage: 'ALL',或者postsPerPage: 5,表示一页显示多少个博客
        postsPerPage: 10,
//博客侧边栏 blogSidebarCount: 'ALL',或者blogSidebarCount: 5,表示侧边栏显示多少个博客
        blogSidebarTitle: '赛博遗物',
        blogSidebarCount: 10,
      },
    ],
      
//营火余音    
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'campfire',
        // URL route for the blog section of your site.
        // *DO NOT* include a trailing slash.
        routeBasePath: '/blog/campfire',
        // Path to data on filesystem relative to site dir.
        path: './blog/campfire',
//tags标签
//        tagsBasePath: '/blog/campfire/tags',
          
//显示阅读时间，时间系数为300
        showReadingTime: true,
        readingTime: ({content, frontMatter, defaultReadingTime}) =>
          frontMatter.hide_reading_time
          ? undefined
          : defaultReadingTime({content, options: {wordsPerMinute: 300}}),
//“编辑此页”的链接
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/dgoeee/dgoeee.github.io/edit/main/',
//用于增进 SEO 的博客页面标题
        blogTitle: '营火余音',
//用于增进 SEO 的博客页面元描述
        blogDescription: '记下朋友们的声音，以及我的朋友们',
//博客列表 postsPerPage: 'ALL',或者postsPerPage: 5,表示一页显示多少个博客
        postsPerPage: 10,
//博客侧边栏 blogSidebarCount: 'ALL',或者blogSidebarCount: 5,表示侧边栏显示多少个博客
        blogSidebarTitle: '营火余音',
        blogSidebarCount: 10,
      },
    ],
      
//插件放在这里

//sitemap
    [
      '@docusaurus/plugin-sitemap',
      {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
      },
    ],

//图片缩放插件
//    'plugin-image-zoom'

  ],
    
  themes: [
//默认主题      
    ['@docusaurus/theme-classic', {customCss: [require.resolve('./src/css/custom.css')]}],

//搜索框
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: ['/docs/book1', '/docs/book2'],
        blogRouteBasePath: ['/blog/campfire', '/blog/heritage'],
        docsDir: ['docs/book1', 'docs/book2'],
        blogDir: ['blog/campfire', 'blog/heritage'],
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        language: ["en", "zh"],
      }),
    ],
      
//流程图
    '@docusaurus/theme-mermaid'
        
  ],


};

module.exports = config;
