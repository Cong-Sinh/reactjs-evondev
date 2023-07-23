import React from "react";
import { useCount } from "./count-context";

const Decrement = () => {
  const { handLeDecrement } = useCount();
  return (
    <button
      className="flex items-center justify-center p-3 text-3xl font-bold bg-gray-200 cursor-pointer decrement"
      onClick={handLeDecrement}
    >
      -
    </button>
  );
};

export default Decrement;
