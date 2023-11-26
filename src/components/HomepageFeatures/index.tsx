import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'book1',
    Svg: require('@site/static/img/103.svg').default,
    description: (
      <>
        它确实是book的形式，不过内容更像一本好好整理过的笔记。可惜依旧比较杂乱，毕竟生活不是什么单一的事情
      </>
    ),
  },
  {
    title: 'book2',
    Svg: require('@site/static/img/421.svg').default,
    description: (
      <>
        为了防止book1过于杂乱，这里准备了book2。它只是用来测试我的网页框架能够健康地容纳多本书
      </>
    ),
  },
  {
    title: '赛博遗物',
    Svg: require('@site/static/img/420.svg').default,
    description: <>感谢墓碑记录一生，时间是我最大的敌人</>,
  },
  {
    title: '营火余音',
    Svg: require('@site/static/img/464.svg').default,
    description: <>记下朋友们的声音，以及我的朋友们</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      <div className='container text--center'>
        <br />
        <h1 className={styles.titleTop}>内容介绍</h1>
      </div>

      <section className={styles.features}>
        <div className='container'>
          <div className='row'>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
