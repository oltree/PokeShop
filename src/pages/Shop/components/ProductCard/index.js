import { memo } from "react";
import { PropTypes } from "prop-types";

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

  const totalPrice = `$ ${price}`;

  const item = { id, name, image, price, quantity: 1 };

  return (
    <div className={quantity ? styles.wrapperQuantity : styles.wrapper}>
      <div
        aria-hidden="true"
        onClick={() => onNavigateToPokemonDetail(id)}
        className={styles.imageContainer}
      >
        <img className={styles.image} src={image} alt="pokemon" />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{totalPrice}</div>

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
              type="submit"
              onClick={() => handleAddItem(item)}
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

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  onNavigateToPokemonDetail: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  quantity: undefined,
};

export default memo(ProductCard);
