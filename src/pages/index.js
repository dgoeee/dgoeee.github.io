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
        {/*
         <video className={styles.backgroundVideo} autoplay="autoplay" loop="loop" muted 
          src="https://prod-streaming-video-msn-com.akamaized.net/3710edf5-9f78-4226-bf2a-69f00d17ab84/1fd58391-0614-4d92-ac76-46810e0ed108.mp4"
          poster="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12PAjF.img"
        >
          您的浏览器不支持 video 标签。
        </video>
 */}

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
