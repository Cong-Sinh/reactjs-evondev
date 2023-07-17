import React from "react";
import { useCount } from "../../contexts/countContext";

const CountDisplay = () => {
  const [count, setCount] = useCount();
  return (
    <div>
      <div>The count is: {count}</div>
    </div>
  );
};

export default CountDisplay;
