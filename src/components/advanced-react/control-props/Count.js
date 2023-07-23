import React from "react";
import { useCount } from "./count-context";

const Count = () => {
  const { count } = useCount();
  return <span className="">{count}</span>;
};

export default Count;
