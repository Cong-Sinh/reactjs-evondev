import React from "react";
import { useCount } from "../../contexts/countContext";

const Counter = () => {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 ml-5 font-semibold text-white bg-purple-500 rounded-lg"
    >
      click vao day
    </button>
  );
};

export default Counter;
