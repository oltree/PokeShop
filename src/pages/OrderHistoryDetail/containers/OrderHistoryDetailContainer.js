import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import OrderHistoryDetailLayout from "../components/OrderHistoryDetailLayout";

import { orderDetailsSelector, orderSelector } from "../../Cart/selectors";

import { getOrders } from "../../Cart/thunks";

const OrderHistoryDetailContainers = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const orders = useSelector(orderSelector);

  const orderItems = useSelector((state) => orderDetailsSelector(state, id));

  useEffect(() => {
    if (!orders) {
      dispatch(getOrders());
    }
  }, [orders, dispatch]);

  return <OrderHistoryDetailLayout orderItems={orderItems} />;
};

export default OrderHistoryDetailContainers;
