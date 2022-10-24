import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProfileLayout from "../components/ProfileLayout";

import { userInfoSelector } from "../../SignIn/selectors";
import { orderIsLoading, orderSelector } from "../../Cart/selectors";

import { getOrders } from "../../Cart/thunks";

import { ROUTE_NAMES } from "../../../routes/routeNames";

const ProfileContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userInfo = useSelector(userInfoSelector);

  const orders = useSelector(orderSelector);

  const isLoading = useSelector(orderIsLoading);

  const handleNavigateOrderHistoryDetail = useCallback(
    (id) => {
      navigate(`${ROUTE_NAMES.PROFILE}/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <ProfileLayout
      orders={orders}
      userInfo={userInfo}
      isLoading={isLoading}
      onNavigateOrderHistoryDetail={handleNavigateOrderHistoryDetail}
    />
  );
};

export default ProfileContainer;
