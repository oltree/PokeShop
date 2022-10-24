import { memo } from "react";

import Banner from "../../../../commonComponents/Banner";

import styles from "./index.module.scss";

const HomeLayout = ({ onNavigateToShop }) => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.contentContainer}>
        <h2 className={styles.subtitle}>ALL COLLECTIONS</h2>
        <h1 className={styles.title}>Here You Will Find Your Pokemon</h1>
        <button onClick={onNavigateToShop} className={styles.button}>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default memo(HomeLayout);
