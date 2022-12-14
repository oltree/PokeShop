import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import startCase from "lodash/startCase";

import ShopHeader from "../ShopHeader";
import ProductCard from "../ProductCard";
import Spinner from "../../../../commonComponents/Spinner";
import Pagination from "../../../../commonComponents/Pagination";

import { mergedWithCartSelector } from "../../selectors";

import styles from "./index.module.scss";

const ShopLayout = ({
  isLoading,
  error,
  page,
  onPageChange,
  onNavigateToPokemonDetail,
}) => {
  const products = useSelector(mergedWithCartSelector);

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.article}>
        <div className={styles.categories}>CATEGORIES</div>
      </div> */}

      <div className={styles.shopContainer}>
        <ShopHeader />

        <div className={styles.shop}>
          {isLoading ? (
            <Spinner color="yellow" />
          ) : (
            products?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={startCase(product.name)}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                onNavigateToPokemonDetail={onNavigateToPokemonDetail}
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

ShopLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.func,
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onNavigateToPokemonDetail: PropTypes.func.isRequired,
};

ShopLayout.defaultProps = {
  error: null,
};

export default ShopLayout;
