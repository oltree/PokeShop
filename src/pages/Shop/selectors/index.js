import { createSelector } from "reselect";

import { cartItemsListSelector } from "../../Cart/selectors";

export const shopSelector = (state) => state.shop;

export const shopProductsSelector = (state) => state.shop.data;

export const mergedWithCartSelector = createSelector(
  shopProductsSelector,
  cartItemsListSelector,
  (products, cartList) => {
    if (products && cartList) {
      return products.map((product) => {
        const updatedProduct = {
          ...product,
          quantity: cartList[product.id]?.quantity,
        };

        return cartList[product.id] ? updatedProduct : product;
      });
    }
    return null;
  }
);
