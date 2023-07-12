import React from "react";
import useHackerNewsAPI from "./useHackerNewAPI";
const HackerNewsWhithHook = () => {
  const { query, handleUpdateQuery, loading, errorMessage, hits } =
    useHackerNewsAPI();

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

export default HackerNewsWhithHook;
