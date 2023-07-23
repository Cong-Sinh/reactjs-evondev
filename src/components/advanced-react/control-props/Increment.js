import React from "react";
import { useCount } from "./count-context";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <button
      className="flex items-center justify-center p-3 text-3xl font-bold bg-gray-200 cursor-pointer increment"
      onClick={handleIncrement}
    >
      +
    </button>
  );
};

export default Increment;
