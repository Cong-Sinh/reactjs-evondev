import React, { useState } from "react";
import useToggle from "./useToggle";

const Accordion = () => {
  //   const [show, shetShow] = useState(false);
  //   const handleToggleShow = () => {
  //     shetShow((previous) => !previous);
  //   };

  const { value: show, handleToggleValue: handleToggleShow } = useToggle();

  return (
    <div>
      <div>
        <div className="cursor-pointer header" onClick={handleToggleShow}>
          Accordion header
        </div>
        <span>+</span>
      </div>
      {show && <div className="content">Accordion content</div>}
    </div>
  );
};

export default Accordion;
