import { Routes, Route } from "react-router-dom";

import HomeContainer from "../pages/Home/containers/HomeContainer";
import ShopContainers from "../pages/Shop/containers/ShopContainers";
import ProductDetailsContainer from "../pages/ProductDetails/containers/ProductDetailsContainer";
import AboutUsContainer from "../pages/AboutUs/containers/AboutUsContainer";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import ContactsContainer from "../pages/Contacts/containers/ContactsContainer";
import ProfileContainer from "../pages/Profile/containers/ProfileContainer";
import CartContainer from "../pages/Cart/containers/CartContainer";
import PrivateRoutes from "./PrivateRoutes";

import { ROUTE_NAMES } from "./routeNames";
import OrderHistoryDetailContainers from "../pages/OrderHistoryDetail/containers/OrderHistoryDetailContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />

      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.SHOP} element={<ShopContainers />} />
        <Route
          path={ROUTE_NAMES.POKEMON_DETAILS}
          element={<ProductDetailsContainer />}
        />
        <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
        <Route
          path={ROUTE_NAMES.ORDER_HISTORY_DETAIL}
          element={<OrderHistoryDetailContainers />}
        />
        <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
      </Route>

      <Route path={ROUTE_NAMES.ABOUT_US} element={<AboutUsContainer />} />
      <Route path={ROUTE_NAMES.CONTACTS} element={<ContactsContainer />} />
    </Routes>
  );
};

export default Router;
