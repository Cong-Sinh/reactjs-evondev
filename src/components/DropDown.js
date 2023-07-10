import React, { useEffect, useRef, useState } from "react";

const DropDown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef(null);
  useEffect(() => {
    function handleClickOutDropdown(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDropdown(false);
      } else {
        console.log("click dropdown");
      }
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);
  return (
    <div className="relative w-full p-5 max-w-[400px]" ref={dropDownRef}>
      <div
        className="p-5 border-gray-200 rounded-lg w-full cursor-pointer border"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
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
