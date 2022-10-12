import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authSlice from "../pages/SignIn/reducers";
import shopSlice from "../pages/Shop/reducers";
import productDetailsSlice from "../pages/ProductDetails/reducers";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["data", "isAuth"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  shop: shopSlice,
  productDetails: productDetailsSlice,
});
