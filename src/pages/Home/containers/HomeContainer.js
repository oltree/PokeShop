import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../components/HomeLayout";

import { isAuthSelector } from "../../../selectors";

import { ROUTE_NAMES } from "../../../routes/routeNames";

const HomeContainer = () => {
  const navigate = useNavigate();

  const isAuth = useSelector(isAuthSelector);

  const handleNavigateToShop = useCallback(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.SHOP);
    } else {
      navigate(ROUTE_NAMES.SIGN_IN);
    }
  }, [isAuth, navigate]);

  return <HomeLayout onNavigateToShop={handleNavigateToShop} />;
};

export default HomeContainer;
