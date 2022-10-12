import { memo } from "react";

import styles from "./index.module.scss";

const PokemonCard = ({ name, image, price, onNavigateToPokemonDetail }) => {
  return (
    <div onClick={onNavigateToPokemonDetail} className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="pokemon" />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.price}>${price}</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default memo(PokemonCard);
