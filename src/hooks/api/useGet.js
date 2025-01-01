import { useState, useEffect } from "react";
import AxiosInstance from "./axios";

const useGet = (url, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState[null];

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await AxiosInstance.get(url);
        if (isMounted) setData(response.data);
      } catch (error) {
        if (isMounted) setError(err.response ? err.response.data : err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading, error };
};

export default useGet;
