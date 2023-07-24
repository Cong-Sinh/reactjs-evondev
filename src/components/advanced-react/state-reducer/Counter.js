import React, { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Count from "./Count";
import { CountProvider } from "./count-context";

const Counter = ({
  count = 0,
  handleDecrement = () => {},
  handleIncrement = () => {},
}) => {
  return (
    <CountProvider value={{ count }}>
      <div className="flex items-center rounded-lg justify-between flex-1 w-full max-w-[200px] mx-auto my-5 border border-gray-300">
        <Decrement onClick={handleDecrement} />
        <Count />
        <Increment onClick={handleIncrement} />
      </div>
    </CountProvider>
  );
};

export default Counter;
