/* 

           0000
         00    00
        00      00
       00   ##   00
      00    ##    00
     00     ##     00
    00      ##      00
   00       ##       00
  00                  00
 00         ##         00
00                      00
00 00 00 00 00 00 00 00 00 

Please note when translating: 
The author uses Simplified Chinese for communication.

我尽量把整个文件注释上，未经注释的部分请谨慎修改

这个文件真的不长，不要被右侧的滑动条惊吓到了，我建议通读一遍注释，有个大概印象

这个文件的目录大致如下：

☆导入区
import...
import...
...

const config: Config = {
  ☆底层基础设置区
  
  ☆多国语言设置
  i18n: ...

  ☆快捷预设区
  presets: ...

  ☆插件区
  plugins: ...

  ☆美观样式区
  stylesheets: ...

  ☆markdown文档专区
  markdown: ...

  ☆添加到主题中的东西
  themes: ...

  ☆主题设置
  themeConfig: ...
};
export default config;

*/

// 加载主题的预设选项支持，不要动
import { themes as prismThemes } from 'prism-react-renderer';
// 加载框架最基础的设置，不要动
import type { Config } from '@docusaurus/types';
// 加载经典主题的设置，当某个选项你没有任何设置的时候就默认使用这个设置，不要动
import type * as Preset from '@docusaurus/preset-classic';

// 因为想要在 footer 中的 Copyright 信息中加入自动的版本号而引入
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

//KaTeX数学方程支持，网站从此可以显示公式了
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  // 这个东西后面会在其他地方调用，这里只是定义了标题是什么
  // 一般来说会出现在浏览器的标签上，或者说是主页的中央的最大号名字上
  title: '井仪/DGoeee',
  // 将用作生成的<title>标记中的标题分隔符
  titleDelimiter: '#', // 默认是`|`，比如“我的第一篇文档 | 井仪/DGoeee”
  // 拿德芙纵向丝滑来举例，德芙就是title，纵向丝滑就是这里的tagline
  tagline: '欲买桂花同载酒，\n终不似，少年游。',
  // 网页的图标，会出现在浏览器的标签页上，收藏夹里
  favicon: 'img/favicon.ico',

  // 这里设置网站最后部署的地址
  url: 'https://dgoeee.github.io',
  // 设置为您的网站提供服务的/<baseUrl>/路径名
  // 对于GitHub页面部署，通常是'/<projectName>/'
  // 如果你不知道它指的是什么，那就不要修改这个东西，严格按照我的步骤来
  baseUrl: '/',

  // 相对于站点目录或绝对路径的路径数组,这些路径下的文件将按原样复制到生成输出中
  staticDirectories: ['static'],

  // GitHub页面部署配置
  // 如果你不使用GitHub页面，你就不需要这些
  organizationName: 'dgoeee', // 通常是github的用户名
  projectName: 'dgoeee.github.io', // 通常是github项目的项目名
  trailingSlash: false, // 默认情况下，GitHub Pages 会在 URL 中添加尾部斜杠，这里取消掉了，不建议乱动这一条，即使影响不大
  // 下面这三条在初创网站时，大量调整文件路径和链接方式的时候会有用处
  // 但是始终，最后都建议要回归到最严格的检查模式中
  // 在检测到任何断开的链接时的行为。默认情况下，它会抛出错误
  // 以确保你永远不会发送任何断开的链接
  // 但你可以根据需要降低此安全性
  onBrokenLinks: 'warn', // 'ignore' | 'log' | 'warn' | 'throw'
  // 在检测到任何断开的 Markdown 链接时的行为。默认情况下，它会打印一个警告
  // 让你知道损坏的 Markdown 链接
  // 但你可以根据需要更改此安全性
  onBrokenMarkdownLinks: 'warn', // 'ignore' | 'log' | 'warn' | 'throw'
  // 检测到任何重复路由时的行为
  // 你可能会意外地创建多个页面，这些页面将在同一路由上访问
  // 会在你运行 start 或 build 时警告你有重复的路由，但网站仍然会成功构建
  // 最后创建的页面将可访问，但它将覆盖其他冲突页面，若要解决此问题，应修改或删除任何冲突的路由
  onDuplicateRoutes: 'warn', // 'ignore' | 'log' | 'warn' | 'throw'

  // 即使不使用国际化，也可以使用此字段设置有用的元数据
  // 例如，如果你的网站是英文的，你可能想用“en”代替“zh-Hans”
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
      '@docusaurus/preset-classic', //这是说针对默认的基础设置进行设置
      {
        //base，也即是最基础的一个文档页面
        docs: {
          id: 'base', // 给基础的文档页面命名
          // 指明在文件夹中的路径
          path: 'docs/base',
          // 基于网站地址的地址栏的路径
          // 写地址的时候不要包含尾部斜线
          routeBasePath: 'docs/base',
          // 侧边栏的地址，指电脑端左侧的那种类似目录一样的那个东西
          // 注意那是一个文件来定义的
          sidebarPath: './docs/base/sidebarsBase.ts',
          // tags标签，文档版本的标签部分的URL路由
          // 将附加到routeBasePath,不要包含尾部斜线
          // 但是这个设置一般不用管，所以我把它注释掉了
          // tagsBasePath: '/tags',
          // 进入页面时，侧边栏是否默认折叠
          sidebarCollapsed: true,
          // 将此更改为你的合适的项目地址，注意这个地址的路径并不短，且最后有斜杠
          // 删除此项可删除“编辑此页面”链接
          editUrl: 'https://github.com/dgoeee/dgoeee.github.io/edit/main/',

          //KaTeX数学方程支持
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },

        //赛博遗物，是我的一个最基础的blog页面
        blog: {
          id: 'legacy', // 给基础的blog页面命名
          // 指明在文件夹中的路径
          path: 'blog/legacy',
          // 基于网站地址的地址栏的路径
          // 写地址的时候不要包含尾部斜线
          routeBasePath: 'blog/legacy',
          // tags标签
          // tagsBasePath: '/blog/legacy/tags',
          // 显示阅读时间，时间系数为300且可修改
          // 但是那一长段并不简单，而且阅读速度这个东西因人而异
          // 所以我没有添加进来徒增复杂度
          showReadingTime: true,
          // “编辑此页”的链接
          editUrl: 'https://github.com/dgoeee/dgoeee.github.io/edit/main/',
          // 用于增进 SEO 的博客页面标题
          blogTitle: '赛博遗物',
          // 用于增进 SEO 的博客页面元描述
          blogDescription: '感谢墓碑记录一生，时间是我最大的敌人',
          // 博客列表 postsPerPage: 'ALL',或者postsPerPage: 5,表示一页显示多少个博客
          postsPerPage: 10,
          // 博客侧边栏 blogSidebarCount: 'ALL',或者blogSidebarCount: 5,表示侧边栏显示多少个博客
          blogSidebarTitle: '赛博遗物',
          blogSidebarCount: 10,
        },
        //这个地方一般是不用动的
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  // 插件区
  plugins: [
    // book1
    // 是的它和presets预设区的形式非常像，基本完全一样
    // 但是注意这里的都算“额外”添加进来的东西，有种类似于嫡庶之分的感觉
    // 不过实际上也仅仅在这里我们设置的时候显得“低人一等”，真正用起来的时候都是一样的
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'book1',
        path: 'docs/book1',
        routeBasePath: 'docs/book1',
        sidebarPath: './docs/book1/sidebarsBook1.ts',
        // tags标签
        // tagsBasePath: '/tags',
        sidebarCollapsed: true, //进入页面时，侧边栏是否默认折叠
        editUrl: 'https://github.com/dgoeee/dgoeee.github.io/edit/main/',

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
        path: 'docs/book2',
        routeBasePath: 'docs/book2',
        sidebarPath: './docs/book2/sidebarsBook2.ts',
        // tags标签
        // tagsBasePath: '/tags',
        sidebarCollapsed: true, //进入页面时，侧边栏是否默认折叠
        editUrl: 'https://github.com/dgoeee/dgoeee.github.io/edit/main/',

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
        path: 'blog/campfire',
        routeBasePath: 'blog/campfire',
        // tags标签
        // tagsBasePath: '/blog/campfire/tags',
        showReadingTime: true,
        editUrl: 'https://github.com/dgoeee/dgoeee.github.io/edit/main/',
        blogTitle: '营火余音',
        blogDescription: '记下朋友们的声音，以及我的朋友们',
        postsPerPage: 10,
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
  // 全局 Markdown 配置
  markdown: {
    // 用于 Markdown 内容的默认分析器格式。使用“detect”将根据文件扩展名自动选择适当的格式： .md 与 .mdx
    format: 'detect', // 'mdx' | 'md' | 'detect'
    //Mermaid图表支持
    mermaid: true, // 允许将 Markdown 代码块的语言渲染为 Mermaid 图
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
      // <link rel="icon" href="img/logo.png" />
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          href: '/img/logo.png',
        },
      },
      // 不返回数据，这个用来应对获取外链图片的时候不要被阻止
      {
        tagName: 'meta',
        attributes: {
          name: 'referrer',
          content: 'no-referrer',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://example.com',
        },
      },
    ],

    // 明亮模式和黑暗模式
    colorMode: {
      // 用户首次访问网站时的颜色模式
      defaultMode: 'light', // 'light' | 'dark'
      // 隐藏导航栏中的开关。如果要支持单色模式，则很有用
      disableSwitch: false,
      // 是否使用 prefers-color-scheme，而不是硬编码的 defaultMode，也就是跟随系统设置
      respectPrefersColorScheme: true,
    },

    //网页顶部的告示栏通知栏通知条
    /*
      announcementBar: {
        id: 'announcement_bar',
        content:
          '<span style="color:#f0644b">流量费用警告</span>：表达美的图片皆尽力达到<span style="color:#f0644b">壁纸级分辨率</span>，单张可达20M，它们不会影响页面的加载速度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target="_self" rel="noopener noreferrer nofollow" href="/docs/book1/图床测试/draft.art/">让我试试</a>',
        backgroundColor: "#ffff78",
        textColor: "#091E42",
        //是否可以使用“×”按钮关闭此公告
        isCloseable: true,
      },
    */

    // Replace with your project's social card★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      // 当用户向下滚动时，导航栏是否隐藏 true or false
      hideOnScroll: true,
      title: 'DGoeee',
      logo: {
        alt: 'The logo of DGoeee',
        src: 'img/logo.svg',
        // 黑暗模式下的logo
        srcDark: 'img/logo_dark.svg',
        href: '/',
      },
      items: [
        // 笔记本
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

    // 文档区左下角的隐藏sidebar按钮，收起侧边栏
    docs: {
      sidebar: {
        hideable: true,
      },
    },

    //Markdown右上角的目录栏。目录默认只显示 h2 和 h3 标题，这里改为h2-h6
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '笔记本',
          items: [
            {
              label: 'base',
              to: '/docs/base',
            },

            {
              label: 'book1',
              to: '/docs/book1',
            },
            {
              label: 'book2',
              to: '/docs/book2',
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
              href: 'https://space.bilibili.com/3546590918740604',
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
            // 这是一种直接用html代码的方式，如果使用，则不能使用别的诸如 label、href 等属性
            {
              html: `
                  <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                  </a>
                `,
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
      // 对此处 copyright 末尾添加版本号的一些疑惑，前往 src/theme/Footer/Copyright/index.js 查看
      // 如果对此处修改 copyright 的效果不够满意，可以去 src/theme/Footer/Copyright/index.js 直接修改源码
      copyright: `Copyright © 2020-${new Date().getFullYear()} DGoeee  |  All rights reserved.  |  Last Modified: ${new Date().toLocaleString(
        'zh-CN',
        { timeZone: 'Asia/Shanghai' }
      )} (Asia/Shanghai, UTC+8)  |  v`,
    },

    // 代码块设置
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,

      //添加代码块的语言支持,armasm是arm的汇编语言，例如tms320c55x可以用
      additionalLanguages: ['powershell', 'armasm'],
    },

    // scripts
    scripts: [
      // 字符串格式
      // 'https://dgoeee.github.io/script.js',
      // 对象格式
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      //   async: true,
      // },
    ],

    // stylesheets
    stylesheets: [
      // 字符串格式
      // 'https://dgoeee.github.io/style.css',
      // 对象格式
      // {
      //   href: 'http://mydomain.com/style.css',
      // },
    ],
    // 要在站点上全局加载的客户端模块数组
    clientModules: [
      // './mySiteGlobalJs.js',
      // './mySiteGlobalCss.css'
    ],

    // 启用后，如果你的网站无法加载其 CSS 或 JavaScript 文件，将显示横幅
    // 这是一个非常常见的问题，通常与站点配置错误有关
    // 此横幅需要内联 CSS / JS，以防所有资产加载因错误的基本 URL 而失败
    // 如果你有严格的内容安全策略，则应将其禁用
    baseUrlIssueBanner: false, // Defaults to `true`
  } satisfies Preset.ThemeConfig,
};

export default config;
