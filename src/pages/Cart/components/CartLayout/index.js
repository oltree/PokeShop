import DeleteIcon from "@mui/icons-material/Delete";

import ChangeQuantityButton from "../../../../commonComponents/ChangeQuantityButton";

import styles from "./index.module.scss";

const CartLayout = ({
  cart,
  onDeleteItem,
  onIncrementItem,
  onDecrementItem,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <h1 className={styles.title}>My Cart</h1>

          {Object.entries(cart?.itemsList).map(([id, item]) => (
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
          ))}
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
          <button className={styles.buttonOrder}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
