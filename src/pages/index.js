import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import HomepageFeatures from "@site/src/pages/HomepageFeatures";
import HomepageHeader from "@site/src/pages/HomepageHeader";

import styles from "./index.module.css";

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      /* 主页的网页标签栏标题 */
      /* title={`${siteConfig.title}'s Cyber Heritage`} */
      title={`DGoeee's Cyber Heritage`}
      description="Here are DGoeee's Cyber Heritage. 井仪的赛博遗产（dgoeee.github.io)是静态资料网站，这里有经验为主的各类说明。"
    >
      <HomepageHeader />

      <main>
        <div
          className={styles.hero_wrap}
          style={{
            background: `url(./img/主页背景.svg) center center/cover no-repeat`,
          }}
        >
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
