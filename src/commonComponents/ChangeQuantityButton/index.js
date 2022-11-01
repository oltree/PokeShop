import { memo } from "react";
import { PropTypes } from "prop-types";

import styles from "./index.module.scss";

const ChangeQuantityButton = ({
  onDecrementItem,
  onIncrementItem,
  quantity,
  id,
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
  onDecrementItem: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  onIncrementItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ChangeQuantityButton);
