import React, { useState } from "react";

const HandleValue = () => {
  return <Input render={(value) => <DisplayValue value={value} />}></Input>;
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="p-3 border border-red-500 rounded-md"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {props.render(value)}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;
