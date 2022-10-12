import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangePage = useCallback(
    (_, page) => {
      setSearchParams({ page });
    },
    [setSearchParams]
  );

  return [Number(searchParams.get("page")), handleChangePage];
};
