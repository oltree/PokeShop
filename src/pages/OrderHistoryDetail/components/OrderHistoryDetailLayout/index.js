import startCase from "lodash/startCase";
import { PropTypes } from "prop-types";

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
                <div className={styles.info}>
                  <p>Quantity:</p>
                  <p>{item.quantity}</p>
                </div>
                <div className={styles.info}>
                  <p>Unit price: </p>
                  <p>{item.price}</p>
                </div>
                <div className={styles.info}>
                  <p>Total price: </p>
                  <p>{item.quantity * item.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.totalPrice}>
            Total price: $
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

OrderHistoryDetailLayout.propTypes = {
  orderItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      _id: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};

OrderHistoryDetailLayout.defaultProps = {
  orderItems: null,
};

export default OrderHistoryDetailLayout;
