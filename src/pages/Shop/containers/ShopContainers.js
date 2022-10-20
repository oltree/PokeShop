import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ShopLayout from "../components/ShopLayout";

import { usePagination } from "../../../hooks/usePagination";

import { shopSelector } from "../selectors";

import { loadProducts } from "../reducers";
import { ROUTE_NAMES } from "../../../routes/routeNames";

const ShopContainers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector(shopSelector);
  const [page, handlePageChange] = usePagination();

  const handleNavigateToPokemonDetail = useCallback(
    (id) => {
      navigate(`${ROUTE_NAMES.SHOP}/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (page > 0) {
      dispatch(loadProducts(page));
    }
  }, [dispatch, page, handlePageChange]);

  return (
    <ShopLayout
      error={error}
      isLoading={isLoading}
      onNavigateToPokemonDetail={handleNavigateToPokemonDetail}
      page={page}
      onPageChange={handlePageChange}
    />
  );
};

export default ShopContainers;
