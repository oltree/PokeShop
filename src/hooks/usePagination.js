import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangePage = useCallback(
    (_, page) => {
      setSearchParams({ page });
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (searchParams.get("page") === null) {
      setSearchParams({ page: 1 });
    }
  }, [searchParams, setSearchParams]);

  return [Number(searchParams.get("page")), handleChangePage];
};
