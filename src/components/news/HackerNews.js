import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";
//  https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFectchData = useRef({});
  handleFectchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
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
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="gap-x-5 flex mb-5">
        <input
          type="text "
          className=" text-black p-5  border border-gray-200 block w-full rounded-md focus:border-blue-400 transition-all"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={handleUpdateQuery}
        />
        <button className="bg-blue-500 text-white p-5 rounded-md">
          Fetching
        </button>
      </div>

      {loading && (
        <div className="loading w-8 h-8 rounded-full  border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md ">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
