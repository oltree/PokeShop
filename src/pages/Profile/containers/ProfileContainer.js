import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileLayout from "../components/ProfileLayout";

import { userInfoSelector } from "../../SignIn/selectors";
import { orderSelector } from "../../Cart/selectors";

import { getOrders } from "../../Cart/thunks";

const ProfileContainer = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(userInfoSelector);

  const orders = useSelector(orderSelector);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return <ProfileLayout userInfo={userInfo} orders={orders.data} />;
};

export default ProfileContainer;
