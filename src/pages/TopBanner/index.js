import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function TopBanner() {
  return (
    <>
      <div className={styles.topBanner}>
        <div className={styles.topBannerTitle}>
          <div className={styles.backgroundLight}></div>

          {"🎉\xa0"}
          <span className={styles.topBannerTitleText}>
            {"已经进入内容优化阶段啦!️"}
          </span>
          {"\xa0🥳"}
        </div>
      </div>
    </>
  );
}

export default TopBanner;
