import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import CartContainer from "../pages/Cart/containers/CartContainer";
import HomeContainer from "../pages/Home/containers/HomeContainer";
import ShopContainers from "../pages/Shop/containers/ShopContainers";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import ProfileContainer from "../pages/Profile/containers/ProfileContainer";
import AboutUsContainer from "../pages/AboutUs/containers/AboutUsContainer";
import ContactsContainer from "../pages/Contacts/containers/ContactsContainer";
import ProductDetailsContainer from "../pages/ProductDetails/containers/ProductDetailsContainer";
import OrderHistoryDetailContainers from "../pages/OrderHistoryDetail/containers/OrderHistoryDetailContainer";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => (
  <Routes>
    <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
    <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
    <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
    <Route path={ROUTE_NAMES.ABOUT_US} element={<AboutUsContainer />} />
    <Route path={ROUTE_NAMES.CONTACTS} element={<ContactsContainer />} />

    <Route element={<PrivateRoutes />}>
      <Route path={ROUTE_NAMES.SHOP} element={<ShopContainers />} />
      <Route
        path={ROUTE_NAMES.PRODUCT_DETAILS}
        element={<ProductDetailsContainer />}
      />
      <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
      <Route
        path={ROUTE_NAMES.ORDER_HISTORY_DETAIL}
        element={<OrderHistoryDetailContainers />}
      />
      <Route path={ROUTE_NAMES.CART} element={<CartContainer />} />
    </Route>
  </Routes>
);

export default Router;
