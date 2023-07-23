import React, { useState } from "react";
import useToggle from "./useToggle";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({ header, children }) => {
  //   const [show, shetShow] = useState(false);
  //   const handleToggleShow = () => {
  //     shetShow((previous) => !previous);
  //   };

  const { value: show, handleToggleValue: handleToggleShow } = useToggle();

  return (
    <div>
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show}>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;
