import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

import DeleteIcon from "@mui/icons-material/Delete";

import ChangeQuantityButton from "../../../../commonComponents/ChangeQuantityButton";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";
import Spinner from "../../../../commonComponents/Spinner";

import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "./index.module.scss";

const CartLayout = ({
  cart,
  isLoading,
  onDeleteItem,
  onIncrementItem,
  onDecrementItem,
  onCreateOrder,
  order,
}) => (
  <div className={styles.wrapper}>
    {isLoading ? (
      <Spinner color="yellow" />
    ) : (
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <h1 className={styles.title}>My Cart</h1>

          {!cart.quantity ? (
            <div className={styles.titleCart}>
              <p>
                Your shopping cart is empty. If you see something you would like
                to add to your shopping cart when shopping, click Add to Cart.
              </p>
              <NavLink className={styles.linkShop} to={ROUTE_NAMES.SHOP}>
                Follow the link?
              </NavLink>
            </div>
          ) : (
            Object.entries(cart?.itemsList).map(([id, item]) => (
              <div key={item.id} className={styles.cardContainer}>
                <div className={styles.card}>
                  <img height={100} src={item.image} alt="pokemon" />

                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>
                      <p>Price: $ </p>
                      <p>{item.price}</p>
                    </div>
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
            <div className={styles.price}>
              <p>$</p>
              <p>{cart?.totalPrice}</p>
            </div>
          </div>
          <div className={styles.total}>
            <div>Total</div>
            <div className={styles.price}>
              <p>$</p>
              <p>{cart?.totalPrice}</p>
            </div>
          </div>
          <button
            type="submit"
            disabled={!cart.quantity}
            onClick={onCreateOrder}
            className={styles.buttonOrder}
          >
            Order
          </button>
        </div>
      </div>
    )}

    {order.isLoading && (
      <SnackbarWithAlert
        timeAlert={3000}
        textAlert="Your order is accepted!"
        severity="success"
      />
    )}
  </div>
);

CartLayout.propTypes = {
  cart: PropTypes.shape.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onIncrementItem: PropTypes.func.isRequired,
  onDecrementItem: PropTypes.func.isRequired,
  onCreateOrder: PropTypes.func.isRequired,
  order: PropTypes.shape.isRequired,
};

export default CartLayout;
