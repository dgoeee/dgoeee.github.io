import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

{/*
*        <h4>
*          <font size="5" style={{color: '#ffc8c8'}}>
*            流量费用警告：
*          </font>
*          绘画作品以及风景人物的照片等皆尽力达到<span style={{color: '#ffc8c8'}}>壁纸级分辨率</span>，单张大小可达20M<br />
*          它们不会影响页面的加载速度
*        </h4>
*/}

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/book1/轮滑相关">
            前往book1/轮滑相关
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/book1/GPT问答">
            前往book1/GPT问答
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/book1/图床测试">
            前往book1/图床测试
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/book1/本网页搭建过程">
            前往book1/本网页搭建过程
          </Link>
        </div>

      </div>
    </header>
  );
}

export default HomepageHeader;