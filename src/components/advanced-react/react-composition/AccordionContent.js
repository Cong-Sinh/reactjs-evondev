import React from "react";

const AccordionContent = ({ show, children }) => {
  return (
    <div>
      {show && (
        <div className="p-4 mt-5 border border-gray-200 rounded-lg content">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionContent;
