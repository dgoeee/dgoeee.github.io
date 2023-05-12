import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {"🎉\xa0"}
        <Link to="/docs/book1/封面" className={styles.topBannerTitleText}>
          {"已经进入内容优化阶段啦!️"}
        </Link>
        {"\xa0🥳"}
      </div>
    </div>
  );
}

export default TopBanner;
