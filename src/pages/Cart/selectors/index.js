import { createSelector } from "reselect";

export const cartSelector = (state) => state.cart;

export const cartItemsListSelector = (state) => state.cart.itemsList;

export const orderSelector = (state) => state.order.data;

export const orderIsLoading = (state) => state.order.isLoading;

export const orderDetailsSelector = createSelector(
  orderSelector,
  (state, id) => id,
  (order, id) => {
    if (order && id) {
      const orderItem = order.find(({ _id: itemId }) => itemId === id);

      return orderItem?.itemsList;
    }
    return null;
  }
);
