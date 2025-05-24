import { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]); // when the url change useeffect runs again.

  return { data, error, loading };
}
export default useFetch;
