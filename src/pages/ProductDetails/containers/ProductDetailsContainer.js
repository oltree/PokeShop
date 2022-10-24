import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductDetailsLayout from "../components/ProductDetailsLayout";

import { productDetailsSelector } from "../selectors";

import { loadProductDetails } from "../reducers";

const ProductDetailsContainer = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const productDetails = useSelector(productDetailsSelector);

  useEffect(() => {
    dispatch(loadProductDetails(id));
  }, [id, dispatch]);

  return (
    <ProductDetailsLayout
      error={productDetails.error}
      product={productDetails.data}
      isLoading={productDetails.isLoading}
    />
  );
};

export default ProductDetailsContainer;
