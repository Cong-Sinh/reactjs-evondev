import React from "react";

const Increment = ({ onClick, ...props }) => {
  return (
    <button
      className="flex items-center justify-center p-3 text-3xl font-bold bg-gray-200 cursor-pointer increment"
      onClick={onClick}
    >
      +
    </button>
  );
};

export default Increment;
