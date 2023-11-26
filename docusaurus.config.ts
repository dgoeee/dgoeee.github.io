import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

//KaTeX数学方程支持
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '井 仪/DGoeee',
  tagline: '坚定的内心',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dgoeee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dgoeee', // Usually your GitHub org/user name.
  projectName: 'dgoeee.github.io', // Usually your repo name.
  trailingSlash: false, //默认情况下，GitHub Pages 会在 URL 中添加尾部斜杠，这里取消掉了

  onBrokenLinks: 'throw', //在检测到任何断开的链接时的行为。默认情况下，它会抛出错误，以确保您永远不会发送任何断开的链接，但您可以根据需要降低此安全性。
  onBrokenMarkdownLinks: 'warn', //在检测到任何断开的 Markdown 链接时的行为。默认情况下，它会打印一个警告，让您知道损坏的 Markdown 链接，但您可以根据需要更改此安全性。

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is English, you
  // may want to replace "zh-Hans" with "en".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  //以下是上方代码的一个例子
  /*
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: { label: 'English' },
      ja: { label: '日本語' },
    },
  },
   */

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        //base
        docs: {
          id: 'base', // omitted => default instance
          // Path to data on filesystem relative to site dir.
          path: 'docs/base',
          // URL route for the blog section of your site.
          // *DO NOT* include a trailing slash.
          routeBasePath: 'docs/base',
          sidebarPath: './docs/base/sidebarsBase.ts',
          //tags标签
          //tagsBasePath: '/tags',
          sidebarCollapsed: true, //进入页面时，侧边栏是否默认折叠
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          //KaTeX数学方程支持
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },

        //赛博遗物
        blog: {
          id: 'legacy',
          // Path to data on filesystem relative to site dir.
          path: 'blog/legacy',
          // URL route for the blog section of your site.
          // *DO NOT* include a trailing slash.
          routeBasePath: 'blog/legacy',
          //tags标签
          //tagsBasePath: '/blog/legacy/tags',
          //显示阅读时间，时间系数为300且可修改
          showReadingTime: true,
          //“编辑此页”的链接
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        //
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    //book1
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'book1',
        // Path to data on filesystem relative to site dir.
        path: 'docs/book1',
        // URL route for the blog section of your site.
        // *DO NOT* include a trailing slash.
        routeBasePath: 'docs/book1',
        sidebarPath: './docs/book1/sidebarsBook1.js',
        //tags标签
        //tagsBasePath: '/tags',
        sidebarCollapsed: true, //进入页面时，侧边栏是否默认折叠
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        //KaTeX数学方程支持
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],

    //book2
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'book2',
        // Path to data on filesystem relative to site dir.
        path: 'docs/book2',
        // URL route for the blog section of your site.
        // *DO NOT* include a trailing slash.
        routeBasePath: 'docs/book2',
        sidebarPath: './docs/book2/sidebarsBook2.js',
        //tags标签
        //tagsBasePath: '/tags',
        sidebarCollapsed: true, //进入页面时，侧边栏是否默认折叠
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        //KaTeX数学方程支持
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],

    //营火余音
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'campfire',
        // Path to data on filesystem relative to site dir.
        path: 'blog/campfire',
        // URL route for the blog section of your site.
        // *DO NOT* include a trailing slash.
        routeBasePath: 'blog/campfire',
        //tags标签
        //tagsBasePath: '/blog/campfire/tags',
        //显示阅读时间，时间系数为300且可修改
        showReadingTime: true,
        //“编辑此页”的链接
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
  ],

  stylesheets: [
    //KaTeX数学方程支持
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  markdown: {
    //Mermaid图表支持
    mermaid: true,
  },

  themes: [
    //搜索框
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        //When you're using multi-instance of docs, set the docs plugin id which you'd like to check the preferred version with, for the search index.
        docsPluginIdForPreferredVersion: 'base',
        docsRouteBasePath: ['docs/base', 'docs/book1', 'docs/book2'],
        blogRouteBasePath: ['blog/campfire', 'blog/legacy'],
        docsDir: ['docs/base', 'docs/book1', 'docs/book2'],
        blogDir: ['blog/campfire', 'blog/legacy'],
        // For Docs using Chinese, The `language` is recommended to set to:
        // language: ["en", "zh"],
        language: ['en', 'zh'],
      },
    ],

    //Mermaid图表支持
    '@docusaurus/theme-mermaid',
  ],

  themeConfig: {
    // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
    //metadata会直接保存到转译后的网页头部
    metadata: [
      {
        name: 'keywords',
        content:
          'DGoeee，dgoeee，dʒoeee，井仪，井仪的仓库，井仪的理论库，井仪的网站，井仪的个人网站，赛博遗物，赛博遗产，电子遗产，github，教程',
      },
      { name: 'author', content: 'DGoeee 井仪' },
      //让浏览器别自动翻译
      { name: 'google', content: 'notranslate' },
      //让多核浏览器优先使用Chromium内核而不是IE内核渲染页面，以支持Html5和css3
      { name: 'renderer', content: 'webkit' },
      { name: 'force-rendering', content: 'webkit' },
      //不告诉外链网站我是谁，一种防止图床链接失效的办法
      { name: 'referrer', content: 'no-referrer' },
      //谷歌收录网站时的验证信息
      {
        name: 'google-site-verification',
        content: 'Lyg-ncL_T5KpLrGofbM1XS5vQdGENLMHSxo0yt0Etn0',
      },
    ],

    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://example.com',
        },
      },
    ],

    //网页顶部的告示栏
    /*       announcementBar: {
        content:
          '<span style="color:#f0644b">流量费用警告</span>：表达美的图片皆尽力达到<span style="color:#f0644b">壁纸级分辨率</span>，单张可达20M，它们不会影响页面的加载速度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target="_self" rel="noopener noreferrer nofollow" href="/docs/book1/图床测试/draft.art/">让我试试</a>',
        backgroundColor: "#ffff78",
        textColor: "#091E42",
        //是否可以使用“×”按钮关闭此公告
        isCloseable: true,
      },
 */

    //Markdown右上角的目录栏。目录默认只显示 h2 和 h3 标题，这里改为h2-h6
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },

    // Replace with your project's social card★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      //当用户向下滚动时，导航栏是否隐藏
      hideOnScroll: true,
      title: 'DGoeee',
      logo: {
        alt: 'The logo of DGoeee',
        src: 'img/logo.svg',
        href: '/',
      },
      items: [
        //笔记本
        {
          type: 'dropdown',
          position: 'left',
          label: '笔记本',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'sidebarsBase',
              label: 'base',
              docsPluginId: 'base',
            },
            {
              type: 'docSidebar',
              sidebarId: 'sidebarsBook1',
              label: 'book1',
              docsPluginId: 'book1',
            },
            {
              type: 'docSidebar',
              sidebarId: 'sidebarsBook2',
              label: 'book2',
              docsPluginId: 'book2',
            },
          ],
        },

        //思绪
        {
          type: 'dropdown',
          position: 'left',
          label: '思绪',
          items: [
            { to: '/blog/legacy', label: '赛博遗物' },
            { to: '/blog/campfire', label: '营火余音' },
          ],
        },

        //标签分类
        {
          type: 'dropdown',
          position: 'left',
          label: '标签分类',
          items: [
            { to: '/docs/book1/tags', label: 'book1' },
            { to: '/docs/book2/tags', label: 'book2' },
            { to: '/blog/legacy/tags', label: '赛博遗物' },
            { to: '/blog/campfire/tags', label: '营火余音' },
          ],
        },

        //github个人主页
        {
          href: 'https://github.com/dgoeee/dgoeee.github.io',
          label: 'GitHub',
          position: 'right',
        },

        // //搜索框在顶部的位置
        // {
        //   type: 'search',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '笔记本',
          items: [
            {
              label: 'base',
              to: '/docs/base/intro',
            },

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
          title: '外链',
          items: [
            {
              label: 'GitHub个人主页',
              href: 'https://github.com/dgoeee',
            },
            {
              label: 'bilibili个人主页',
              href: 'https://space.bilibili.com/504442712',
            },
            {
              label: 'GitHub部署',
              href: 'https://dgoeee.github.io/',
            },
            {
              label: 'Vercel部署',
              href: 'https://dgoeee.vercel.app/',
            },
            {
              label: 'Cloudflare部署',
              href: 'https://dgoeee.pages.dev/',
            },
          ],
        },

        {
          title: '其他',
          items: [
            {
              label: '赛博遗物',
              to: '/blog/legacy',
            },
            {
              label: '营火余音',
              to: '/blog/campfire',
            },
            {
              label: '友情链接',
              to: '/blog/campfire/9999/99/99/友情链接',
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

      copyright: `Copyright © 2021-${new Date().getFullYear()} DGoeee  |  All rights reserved.  |  v1.1.0-beta1`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
