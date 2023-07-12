import axios from "axios";
import { useEffect, useRef, useState } from "react";
import lodash from "lodash";

export default function useHackerNewsAPI() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });

  const handleFectchData = useRef({});
  handleFectchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      if (isMounted.current) {
        setHits(response.data?.hits || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`the error happend ${error}`);
    }
  };

  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  useEffect(() => {
    handleFectchData.current();
  }, [query]);

  return { query, handleUpdateQuery, loading, errorMessage, hits };
}
