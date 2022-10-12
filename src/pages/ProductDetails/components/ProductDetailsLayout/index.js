import lowerCase from "lodash/lowerCase";
import startCase from "lodash/startCase";

import Spinner from "../../../../commonComponents/Spinner";

import styles from "./index.module.scss";

const ProductDetailsLayout = ({ product, isLoading, error }) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
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
              Stats:
              {product.stats?.map((stat) => (
                <div key={stat.title} className={styles.stats}>
                  <p className={styles.stat}>{stat.title}</p>
                  <p className={styles.stat}>- {stat.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.abilities}>
              Abilities:
              {product.abilities?.map((ability) => (
                <div key={ability.title} className={styles.ability}>
                  {startCase(ability.title)} - {lowerCase(ability.description)}.
                </div>
              ))}
            </div>

            <div className={styles.price}>Price: $ {product.price}</div>

            <button className={styles.button}>Add to cart</button>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      )}
    </>
  );
};

export default ProductDetailsLayout;
