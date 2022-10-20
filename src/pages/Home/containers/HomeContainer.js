import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROUTE_NAMES } from "../../../routes/routeNames";
import { isAuthSelector } from "../../../selectors";

import HomeLayout from "../components/HomeLayout";

const HomeContainer = () => {
  const navigate = useNavigate();

  const isAuth = useSelector(isAuthSelector);

  const handleNavigate = useCallback(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.SHOP);
    } else {
      navigate(ROUTE_NAMES.SIGN_IN);
    }
  }, [isAuth, navigate]);

  return <HomeLayout onNavigate={handleNavigate} />;
};

export default HomeContainer;
