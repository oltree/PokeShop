import { memo } from "react";

import styles from "./index.module.scss";

const ChangeQuantityButton = ({
  onDecrementItem,
  quantity,
  onIncrementItem,
  id,
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() =>
          onDecrementItem({
            id,
            quantity,
          })
        }
        className={styles.button}
      >
        -
      </button>

      <div className={styles.quantity}>{quantity}</div>

      <button
        onClick={() =>
          onIncrementItem({
            id,
            quantity,
          })
        }
        className={styles.button}
      >
        +
      </button>
    </div>
  );
};

export default memo(ChangeQuantityButton);
