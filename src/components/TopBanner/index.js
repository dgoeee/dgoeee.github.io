import styles from './styles.module.css';

function TopBanner() {
  return (
    <>
      <div className={styles.topBanner}>
        <div className={styles.topBannerTitle}>
          <div className={styles.backgroundLight}></div>
          {'🎉\xa0'}
          <span className={styles.topBannerTitleText}>{'biubiubiubiu!️'}</span>
          {'\xa0🥳'}
        </div>
      </div>
    </>
  );
}

export default TopBanner;
