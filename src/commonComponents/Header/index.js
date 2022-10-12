import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";
import { isAuthSelector } from "../../selectors";

import PokeShopLogotip from "../../static/icons/PokeShopLogotip.png";

import styles from "./index.module.scss";

const Header = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logotip}>
        <Link className={styles.logoLink} to={ROUTE_NAMES.HOME}>
          <img src={PokeShopLogotip} alt="logotip" />
          <p>PokéShop</p>
        </Link>
      </div>

      <div className={styles.menu}>
        <Link className={styles.link} to={ROUTE_NAMES.SHOP}>
          SHOP
        </Link>
        <Link className={styles.link} to={ROUTE_NAMES.ABOUT_US}>
          ABOUT US
        </Link>
      </div>

      <div className={styles.shoppingCart}>
        {isAuth ? (
          <Link className={styles.link} to={ROUTE_NAMES.PROFILE}>
            PROFILE
          </Link>
        ) : (
          <Link className={styles.link} to={ROUTE_NAMES.SIGN_IN}>
            SIGN IN / REGISTER
          </Link>
        )}

        <Link className={styles.link} to={ROUTE_NAMES.CART}>
          CART
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
