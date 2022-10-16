import CartLayout from "../components/CartLayout";

import { useCart } from "../../../hooks/useCart";

const CartContainer = () => {
  const { cart, handleDeleteItem, handleIncrementItem, handleDecrementItem } =
    useCart();

  return (
    <CartLayout
      cart={cart}
      onDeleteItem={handleDeleteItem}
      onIncrementItem={handleIncrementItem}
      onDecrementItem={handleDecrementItem}
    />
  );
};

export default CartContainer;
