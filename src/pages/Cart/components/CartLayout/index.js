import DeleteIcon from "@mui/icons-material/Delete";

import ChangeQuantityButton from "../../../../commonComponents/ChangeQuantityButton";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

import styles from "./index.module.scss";

const CartLayout = ({
  cart,
  onDeleteItem,
  onIncrementItem,
  onDecrementItem,
  onCreateOrder,
  order,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <h1 className={styles.title}>My Cart</h1>

          {!cart.quantity ? (
            <div className={styles.titleCart}>
              Your shopping cart is empty. If you see something you would like
              to add to your shopping cart when shopping, click Add to Cart.
            </div>
          ) : (
            Object.entries(cart?.itemsList).map(([id, item]) => (
              <div key={item.id} className={styles.cardContainer}>
                <div className={styles.card}>
                  <img height={100} src={item.image} alt="pokemon" />

                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>Price: $ {item.price}</div>
                  </div>
                </div>

                <div className={styles.buttonsContainer}>
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => onDeleteItem(id)}
                  />

                  <ChangeQuantityButton
                    onDecrementItem={onDecrementItem}
                    quantity={item.quantity}
                    onIncrementItem={onIncrementItem}
                    id={item.id}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.totalPriceContainer}>
          <h2 className={styles.titleTotalPrice}>Total price</h2>
          <div className={styles.subTotal}>
            <div>SubTotal</div>
            <div>$ {cart?.totalPrice}</div>
          </div>
          <div className={styles.total}>
            <div>Total</div>
            <div>$ {cart?.totalPrice}</div>
          </div>
          <button
            disabled={!cart.quantity}
            onClick={onCreateOrder}
            className={styles.buttonOrder}
          >
            Order
          </button>
        </div>
      </div>

      {order.isLoading && (
        <SnackbarWithAlert
          timeAlert={3000}
          textAlert="Your order is accepted!"
          severity="success"
        />
      )}
    </div>
  );
};

export default CartLayout;
