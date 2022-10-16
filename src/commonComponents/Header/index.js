import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { ROUTE_NAMES } from "../../routes/routeNames";
import { isAuthSelector } from "../../selectors";

import PokeShopLogotip from "../../static/icons/PokeShopLogotip.png";
import IconCart from "../IconCart";
import IconProfile from "../IconProfile";

import styles from "./index.module.scss";

const Header = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logotip}>
        <NavLink className={styles.logoLink} to={ROUTE_NAMES.HOME}>
          <img src={PokeShopLogotip} alt="logotip" />
          <p>PokéShop</p>
        </NavLink>
      </div>

      <div className={styles.menu}>
        <NavLink className={styles.link} to={ROUTE_NAMES.SHOP}>
          SHOP
        </NavLink>
        <NavLink className={styles.link} to={ROUTE_NAMES.ABOUT_US}>
          ABOUT US
        </NavLink>
      </div>

      <div className={styles.shoppingCart}>
        {isAuth ? (
          <div className={styles.profile}>
            <IconProfile />
          </div>
        ) : (
          <NavLink className={styles.signIn} to={ROUTE_NAMES.SIGN_IN}>
            <AccountCircle color="action" fontSize="large" />
            SIGN IN / REGISTER
          </NavLink>
        )}

        <NavLink to={ROUTE_NAMES.CART}>
          <IconCart />
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Header);
