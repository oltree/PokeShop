import startCase from "lodash/startCase";

import ShopHeader from "../ShopHeader";
import Spinner from "../../../../commonComponents/Spinner";
import PokemonCard from "../PomemonCard";
import Pagination from "../../../../commonComponents/Pagination";

import styles from "./index.module.scss";

const ShopLayout = ({
  products,
  isLoading,
  error,
  onNavigateToPokemonDetail,
  page,
  onPageChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.article}>
        <div className={styles.categories}>CATEGORIES</div>
        <div>content</div>
      </div>
      <div className={styles.shopContainer}>
        <ShopHeader />

        <div className={styles.shop}>
          {isLoading ? (
            <Spinner />
          ) : (
            products?.map(({ id, name, image, price }) => (
              <PokemonCard
                key={id}
                id={id}
                name={startCase(name)}
                image={image}
                price={price}
                onNavigateToPokemonDetail={() => onNavigateToPokemonDetail(id)}
              />
            ))
          )}
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>

        <div className={styles.pagination}>
          <Pagination
            isDisabled={isLoading}
            currentPage={page}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
