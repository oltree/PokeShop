import { memo } from "react";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import PokeShopLogotip from "../../static/icons/PokeShopLogotip.png";

import styles from "./index.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <div className={styles.logotip}>
            <Link className={styles.logoLink} to={ROUTE_NAMES.HOME}>
              <img src={PokeShopLogotip} alt="logotip" />
              <p>PokeShop</p>
            </Link>
          </div>
          <div className={styles.email}>
            Need to get in touch? Just email us at o.melex@bk.ru
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2 className={styles.title}>EXPLORE</h2>
            <div className={styles.linkContainer}>
              <Link className={styles.link} to={ROUTE_NAMES.SHOP}>
                Shop
              </Link>
              <Link className={styles.link} to={ROUTE_NAMES.ABOUT_US}>
                About us
              </Link>
            </div>
          </div>

          <div className={styles.info}>
            <h2 className={styles.title}>HELP</h2>
            <div className={styles.linkContainer}>
              <Link className={styles.link} to={ROUTE_NAMES.CONTACTS}>
                Contacts
              </Link>
            </div>
          </div>
        </div>
        <div>INSTAGRAM</div>
      </div>
      <div className={styles.pokemonshop}>© PokeShop {currentYear}</div>
    </div>
  );
};

export default memo(Footer);
