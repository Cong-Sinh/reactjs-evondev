import React from "react";

const Decrement = ({ onClick, ...props }) => {
  return (
    <button
      className="flex items-center justify-center p-3 text-3xl font-bold bg-gray-200 cursor-pointer decrement"
      onClick={onClick}
      {...props}
    >
      -
    </button>
  );
};

export default Decrement;
