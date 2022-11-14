import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartLayout from "../components/CartLayout";

import { useCart } from "../../../hooks/useCart";

import { createNewOrder } from "../thunks";
import { handleUpdateState } from "../reducers/orderReducer";

const CartContainer = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order);

  const { cart, handleDeleteItem, handleIncrementItem, handleDecrementItem } =
    useCart();

  const handleCreateOrder = useCallback(() => {
    const { quntity, error, isLoading, ...otherCartFields } = cart;

    const { customerId, totalPrice, itemsList } = otherCartFields;

    const customItemsList = Array.from(Object.values(itemsList));

    dispatch(
      createNewOrder({ customerId, totalPrice, itemsList: customItemsList })
    );
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(handleUpdateState());
  }, [dispatch]);

  return (
    <CartLayout
      cart={cart}
      success={order.success}
      isLoading={cart.isLoading}
      onDeleteItem={handleDeleteItem}
      onIncrementItem={handleIncrementItem}
      onDecrementItem={handleDecrementItem}
      onCreateOrder={handleCreateOrder}
    />
  );
};

export default CartContainer;
