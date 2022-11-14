import { PropTypes } from "prop-types";
import lowerCase from "lodash/lowerCase";
import startCase from "lodash/startCase";

import DeleteIcon from "@mui/icons-material/Delete";
import Spinner from "../../../../commonComponents/Spinner";
import ChangeQuantityButton from "../ChangeQuantityButton";

import { useCart } from "../../../../hooks/useCart";

import HP from "../../../../static/icons/HP.png";
import ATTACK from "../../../../static/icons/ATTACK.png";
import DEFENCE from "../../../../static/icons/DEFENCE.png";
import SPECIAL_ATTACK from "../../../../static/icons/SPECIAL_ATTACK.png";
import SPECIAL_DEFENCE from "../../../../static/icons/SPECIAL_DEFENCE.png";
import SPEED from "../../../../static/icons/SPEED.png";

import styles from "./index.module.scss";

const favicon = [HP, ATTACK, DEFENCE, SPECIAL_ATTACK, SPECIAL_DEFENCE, SPEED];

const ProductDetailsLayout = ({ product, isLoading, error }) => {
  const {
    cart,
    handleAddItem,
    handleDeleteItem,
    handleIncrementItem,
    handleDecrementItem,
  } = useCart();

  const productStatsWithIcons = product.stats?.map((stat, index) => ({
    ...stat,
    icon: favicon[index],
  }));

  const price = `Price: $ ${product.price}`;

  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };

  return (
    <>
      {isLoading ? (
        <Spinner color="yellow" />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.name}>{startCase(product.name)}</div>

            <div className={styles.statsContainer}>
              <div className={styles.title}>Stats:</div>

              {productStatsWithIcons?.map((stat) => (
                <div key={stat.title} className={styles.stats}>
                  <img height={20} src={stat.icon} alt="icon" />
                  <p className={styles.stat}>{stat.title}</p>
                  <p>-</p>
                  <p className={styles.stat}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.abilities}>
              <div className={styles.title}>Abilities:</div>
              {product.abilities?.map((ability) => (
                <div key={ability.title} className={styles.ability}>
                  <p style={{ width: "15%" }}>{startCase(ability.title)}</p>
                  <p>-</p>
                  <p style={{ width: "85%" }}>
                    {lowerCase(ability.description)}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.price}>{price}</div>

            {cart.itemsList[product.id]?.quantity ? (
              <div className={styles.changeQuantityButton}>
                <ChangeQuantityButton
                  id={product.id}
                  quantity={cart.itemsList[product.id]?.quantity}
                  onDecrementItem={handleDecrementItem}
                  onIncrementItem={handleIncrementItem}
                />

                <DeleteIcon
                  sx={{ cursor: "pointer", fontSize: 40 }}
                  onClick={() => handleDeleteItem(product.id)}
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
      )}

      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};

ProductDetailsLayout.propTypes = {
  product: PropTypes.shape({
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.number,
      })
    ),
  }).isRequired,

  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.func,
};

ProductDetailsLayout.defaultProps = {
  error: null,
};

export default ProductDetailsLayout;
