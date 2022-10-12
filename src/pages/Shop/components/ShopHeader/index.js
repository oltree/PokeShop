import { memo } from "react";

import styles from "./index.module.scss";

const ShopHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>Pokémons</div>
      </div>
      <div className={styles.text}>
        Every good Pokemon trainer knows that, when it comes to Pokemon items,
        you have to catch em all! In our Pokemon shop, we have a wide variety of
        products to suit every Pokefan’s taste. As the Pokemon universe
        continues to expand, so does our selection of merchandise. We carry
        items based on all the latest Pokemon games and releases, so you can
        stay up to date.
      </div>
    </div>
  );
};

export default memo(ShopHeader);
