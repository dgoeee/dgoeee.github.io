import Link from '@docusaurus/Link';

import styles from './styles.module.css';

function HomepageMain() {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://www.cguardian.com/images/GD-2021-CN006/GD-2021-CN006-008-041/_lastModified1636068179000_/2048/l.jpg)',
        backgroundPosition: '30% 10%',
      }}
    >
      <div className={styles.homepageWrapper}>
        <div className={styles.homepageText}>
          <div>
            <div style={{ textAlign: 'center' }}>
              <h1 className="hero__title">井仪的在线仓库</h1>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p className="hero__subtitle">
                内容可能有点多，下面这个按钮会带你查看介绍和总目录：
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link
                className="button button--outline button--success button--lg"
                to="docs/base"
              >
                返回轨道
              </Link>
            </div>
          </div>
          <hr />
          <div>
            <div style={{ textAlign: 'left' }}>
              <p className="hero__subtitle">然后是一些快速入口：</p>
            </div>
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1/日常思考"
                >
                  日常思考
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1/PC装机笔记"
                >
                  PC装机笔记
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测试2
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测试3
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测4
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测5
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测6
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测7
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测试8
                </Link>
              </div>
              <div
                className="margin-horiz--sm margin-bottom--md"
                style={{ display: 'inline-block' }}
              >
                <Link
                  className="button button--outline button--secondary button--lg"
                  to="docs/book1"
                >
                  测试9
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.homepagePicture}>
          <img
            alt="Logo"
            src={require('@site/static/img/logo.png').default}
            style={{
              width: '100%',
            }}
          />
          🚧装修锚点-928145
        </div>
      </div>
    </div>
  );
}

export default HomepageMain;
