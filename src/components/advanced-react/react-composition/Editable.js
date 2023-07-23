import React, { useState } from "react";
import useToggle from "./useToggle";

const Editable = () => {
  // const [edit, setEdit] = useState(false);
  // const handleToggleEdit = () => {
  //   setEdit((edit) => !edit);
  // };

  const { value: edit, handleToggleValue: handleToggleEdit } = useToggle();

  return (
    <div>
      {edit && (
        <input type="text" className="p-3 border border-gray-300 rounded-md" />
      )}
      <button onClick={handleToggleEdit}>Open edit</button>
    </div>
  );
};

export default Editable;
