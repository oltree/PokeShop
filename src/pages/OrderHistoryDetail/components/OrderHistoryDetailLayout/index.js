import startCase from "lodash/startCase";

import Spinner from "../../../../commonComponents/Spinner";

import styles from "./index.module.scss";

const OrderHistoryDetailLayout = ({ orderItems, isLoading }) => (
  <div className={styles.wrapper}>
    {isLoading ? (
      <Spinner color="yellow" />
    ) : (
      <>
        <h1 className={styles.title}>Order History Detail</h1>

        <div className={styles.orderContainer}>
          {orderItems?.map((item) => (
            <div key={item.id} className={styles.order}>
              <div>
                <img height={130} src={item.image} alt="pokemon" />
              </div>

              <div className={styles.name}>{startCase(item.name)}</div>

              <div className={styles.orderInfo}>
                <div className={styles.info}>Quantity: {item.quantity}</div>
                <div className={styles.info}>Unit price: {item.price}</div>
                <div className={styles.info}>
                  Total price: {item.quantity * item.price}
                </div>
              </div>
            </div>
          ))}
          <div className={styles.totalPrice}>
            Total price: ${" "}
            {orderItems?.reduce(
              (result, item) => result + item.quantity * item.price,
              0
            )}
          </div>
        </div>
      </>
    )}
  </div>
);

export default OrderHistoryDetailLayout;
