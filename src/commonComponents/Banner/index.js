import { memo } from "react";

import MainBackground from "../../static/images/MainBackground.png";

import styles from "./index.module.scss";

const Banner = () => (
  <div className={styles.wrapper}>
    <img className={styles.banner} src={MainBackground} alt="pokemon" />
  </div>
);

export default memo(Banner);
