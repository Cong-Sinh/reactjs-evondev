import React from "react";
import withLoading from "./withLoading";

const FetchingDataOder = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* {news.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

export default withLoading(
  FetchingDataOder,
  "https:/hn.algolia.com/api/v1/search?query=css"
);
