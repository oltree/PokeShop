import { memo } from "react";
import { PropTypes } from "prop-types";

import styles from "./index.module.scss";

const ChangeQuantityButton = ({
  id,
  quantity,
  onDecrementItem,
  onIncrementItem,
}) => (
  <div className={styles.wrapper}>
    <button
      type="submit"
      onClick={() => onDecrementItem({ id, quantity })}
      className={styles.button}
    >
      -
    </button>

    <div className={styles.quantity}>{quantity}</div>

    <button
      type="submit"
      onClick={() => onIncrementItem({ id, quantity })}
      className={styles.button}
    >
      +
    </button>
  </div>
);

ChangeQuantityButton.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onDecrementItem: PropTypes.func.isRequired,
  onIncrementItem: PropTypes.func.isRequired,
};

export default memo(ChangeQuantityButton);
