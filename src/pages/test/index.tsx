import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

//'@site/src/components/'里面的组件内容

import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <div style={{ position: 'relative', height: '300px' }}>
        <video
          src={
            'https://cdn.free-stock.video/472021/tunnel-triangle-futuristic-science-abstract-pyramid-night-143232-full.mp4'
          }
          // 如果出现该属性，视频的音频输出为静音
          muted
          // 如果出现该属性，则视频在就绪后马上播放
          autoPlay
          // 预加载视频
          preload='auto'
          // 如果出现该属性，则当媒介文件完成播放后再次开始播放
          loop
          // 宽度拉满到屏幕两边
          width='100%'
          height='100%'
          // style={{ padding: '20px' }}object-fit: cover;
          style={{ position: 'absolute', objectFit: 'cover', zIndex: -1 }}
        ></video>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 255, 0, 0.5)', // 红色半透明背景
            zIndex: 0, // 将图片放在视频之上
          }}
        >
          {/* 其他内容放在这里 */}
        </div>
      </div>

      <div style={{ position: 'relative', height: '300px' }}>
        <video
          src={
            'https://cdn.free-stock.video/622022/futuristic-vj-loop-technology-tunnel-abstract-4k-backgrounds-5469-full.mp4'
          }
          // 如果出现该属性，视频的音频输出为静音
          muted
          // 如果出现该属性，则视频在就绪后马上播放
          autoPlay
          // 预加载视频
          preload='auto'
          // 如果出现该属性，则当媒介文件完成播放后再次开始播放
          loop
          // 宽度拉满到屏幕两边
          width='100%'
          height='100%'
          // style={{ padding: '20px' }}object-fit: cover;
          style={{ position: 'absolute', objectFit: 'cover', zIndex: -1 }}
        ></video>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 0, 0, 0.5)', // 红色半透明背景
            zIndex: 0, // 将图片放在视频之上
          }}
        >
          {/* 其他内容放在这里 */}
        </div>
      </div>

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
