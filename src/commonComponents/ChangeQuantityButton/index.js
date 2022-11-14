import { memo } from "react";
import { PropTypes } from "prop-types";

import styles from "./index.module.scss";

const ChangeQuantityButton = ({
  id,
  quantity,
  onIncrementItem,
  onDecrementItem,
}) => (
  <div className={styles.wrapper}>
    <button
      type="submit"
      className={styles.button}
      onClick={() => onDecrementItem({ id, quantity })}
    >
      -
    </button>

    <div className={styles.quantity}>{quantity}</div>

    <button
      type="submit"
      className={styles.button}
      onClick={() => onIncrementItem({ id, quantity })}
    >
      +
    </button>
  </div>
);

ChangeQuantityButton.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onIncrementItem: PropTypes.func.isRequired,
  onDecrementItem: PropTypes.func.isRequired,
};

export default memo(ChangeQuantityButton);
