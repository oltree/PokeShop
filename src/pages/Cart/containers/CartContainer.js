import { useCallback } from "react";
import { useDispatch } from "react-redux";

import CartLayout from "../components/CartLayout";

import { useCart } from "../../../hooks/useCart";

import { createNewOrder } from "../thunks";

const CartContainer = () => {
  const dispatch = useDispatch();

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

  return (
    <CartLayout
      cart={cart}
      onDeleteItem={handleDeleteItem}
      onIncrementItem={handleIncrementItem}
      onDecrementItem={handleDecrementItem}
      onCreateOrder={handleCreateOrder}
    />
  );
};

export default CartContainer;
