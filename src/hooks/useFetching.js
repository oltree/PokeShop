import { useCallback, useEffect, useState } from "react";

export const useFetching = (
  asyncCallback,
  initialValue,
  isLoadOnMount = true
) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataLoad = useCallback(
    async (currentData) => {
      setLoading(true);
      try {
        const response = await asyncCallback(currentData);

        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [asyncCallback]
  );

  useEffect(() => {
    if (isLoadOnMount) {
      handleDataLoad();
    }
  }, [isLoadOnMount, handleDataLoad]);

  return [data, isLoading, error, handleDataLoad];
};
