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

        <h5>
          <font size="5">
            流量费用警告：
          </font>
          绘画作品以及风景人物的照片等皆尽力达到壁纸级分辨率，单张大小可达20M<br />
          它们不会影响页面的加载速度<br />
        </h5>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/book1/封面">
            前往井仪的笔记
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;