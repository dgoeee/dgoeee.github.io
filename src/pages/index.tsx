import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

//'@site/src/components/'里面的组件内容
import HomepageMain from '@site/src/components/HomepageMain';

export default function Home(): JSX.Element {
  const { siteConfig, siteMetadata } = useDocusaurusContext();
  return (
    <Layout
      /* 主页的网页标签栏标题，title调用了docusaurus.config.ts当中的设定 */
      title={`${siteConfig.title}'s Cyber Legacy`}
      // title={`DGoeee's Cyber Legacy`}
      description="Here are DGoeee's Cyber Legacy. 井仪的赛博遗产（dgoeee.github.io)是静态资料网站，这里有经验为主的各类说明。"
    >
      <main>
        <HomepageMain />
      </main>
    </Layout>
  );
}
