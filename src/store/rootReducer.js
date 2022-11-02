import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import authSlice from "../pages/SignIn/reducers";
import shopSlice from "../pages/Shop/reducers";
import productDetailsSlice from "../pages/ProductDetails/reducers";
import cartSlice from "../pages/Cart/reducers/cartReducer";
import orderSlice from "../pages/Cart/reducers/orderReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["data", "isAuth"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  shop: shopSlice,
  productDetails: productDetailsSlice,
  cart: cartSlice,
  order: orderSlice,
});
