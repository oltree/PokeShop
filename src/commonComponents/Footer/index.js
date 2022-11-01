import { memo } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import PokeShopLogotip from "../../static/icons/PokeShopLogotip.png";
import Instagram from "../../static/icons/instagram.png";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./index.module.scss";

const Footer = () => {
  const logoAndCurrentYear = `© PokeShop ${moment().format("YYYY")}`;

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
            <p>Need to get in touch? Just email us at</p>
            <a
              href="https://mail.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              o.melex@bk.ru
            </a>
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

        <div className={styles.instagramContainer}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className={styles.pokemonshop}>{logoAndCurrentYear}</div>
    </div>
  );
};

export default memo(Footer);
