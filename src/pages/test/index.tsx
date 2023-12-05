import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

//'@site/src/components/'里面的组件内容

import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <HomepageHeader />
      <main>
        <div
          style={{
            background: `url(./img/主页背景.svg) center center/cover no-repeat`,
          }}
        >
          <HomepageFeatures />
        </div>
      </main>
    </>
  );
}
