import React from "react";

const AccordionHeader = ({ show, handleToggleShow, children }) => {
  return (
    <div>
      <div>
        <div
          className="p-4 mt-5 border border-gray-200 rounded-lg cursor-pointer header content"
          onClick={handleToggleShow}
        >
          {children}
          {show ? <span>-</span> : <span>+</span>}
        </div>
        <span>+</span>
      </div>
    </div>
  );
};

export default AccordionHeader;
