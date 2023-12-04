import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        {/* style={{ whiteSpace: 'pre-wrap' }}是为了修复例如\n这样的换行符不生效的问题 */}
        <div style={{ whiteSpace: 'pre-wrap' }}>
          <Heading as='h1' className='hero__title'>
            {siteConfig.title}
          </Heading>

          <p className='hero__subtitle'>{siteConfig.tagline}</p>
        </div>

        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/book1'
          >
            前往book1
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/book1/本网页搭建过程'
          >
            本网页搭建过程
          </Link>
        </div>
      </div>
    </header>
  );
}
