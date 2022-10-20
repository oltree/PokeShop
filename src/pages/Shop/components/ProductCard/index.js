import { memo } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import ChangeQuantityButton from "../../../../commonComponents/ChangeQuantityButton";

import { useCart } from "../../../../hooks/useCart";

import styles from "./index.module.scss";

const ProductCard = ({
  id,
  name,
  image,
  price,
  quantity,
  onNavigateToPokemonDetail,
}) => {
  const {
    handleAddItem,
    handleDeleteItem,
    handleIncrementItem,
    handleDecrementItem,
  } = useCart();

  return (
    <div className={quantity ? styles.wrapperQuantity : styles.wrapper}>
      <div
        onClick={() => onNavigateToPokemonDetail(id)}
        className={styles.imageContainer}
      >
        <img className={styles.image} src={image} alt="pokemon" />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>${price}</div>

        <div className={styles.buttonContainer}>
          {quantity ? (
            <div className={styles.cart}>
              <ChangeQuantityButton
                id={id}
                quantity={quantity}
                onDecrementItem={handleDecrementItem}
                onIncrementItem={handleIncrementItem}
              />
              <DeleteIcon
                sx={{ cursor: "pointer", fontSize: 27 }}
                onClick={() => handleDeleteItem(id)}
              />
            </div>
          ) : (
            <button
              onClick={() =>
                handleAddItem({ id, name, image, price, quantity: 1 })
              }
              className={styles.button}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
