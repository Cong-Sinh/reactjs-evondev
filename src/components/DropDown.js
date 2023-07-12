import React from "react";
import useCLickOutSide from "../hooks/useClickOutSide";

const DropDown = () => {
  const { show, setShow, nodeRef } = useCLickOutSide();

  return (
    <div className="relative w-full p-5 max-w-[400px]" ref={nodeRef}>
      <div
        className="p-5 border-gray-200 rounded-lg w-full cursor-pointer border"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="p-5 border  border-gray-200 rounded-lg absolute top-100% left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">Reactjs</div>
          <div className="p-5 cursor-pointer">Vuejs</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
