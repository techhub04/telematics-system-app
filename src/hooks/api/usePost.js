import { useState } from "react";
import AxiosInstance from "./axios";

const usePost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = async (url, body) => {
    setLoading(true);
    setError(null);

    try {      
      const response = await AxiosInstance.post(url, body);
      return response.data;
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error };
};

export default usePost;
