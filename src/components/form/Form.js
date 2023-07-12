import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setFullname(event.target.value);
  // };

  // const [messageEvent, setMessageEvent] = useState("");
  // const handleTextAreaChange = (event) => {
  //   console.log(event.target.value);
  //   setMessageEvent(event.target.value);
  // };

  // const [contry, setContry] = useState("");
  // const handleSelectChange = (event) => {
  //   console.log(event.target.value);
  //   setContry(event.target.value);
  // };

  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log(values);

  return (
    <div className="p-5">
      <div className="flex-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
          placeholder="Enter
        your
        name"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
          placeholder="Enter
        your
        name"
          onChange={handleChange}
        ></input>

        <input type="checkbox" name="hobby" onChange={handleChange}></input>
      </div>
      {/* {fullname}
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
        placeholder="Enter
        your
        name"
        onChange={handleInputChange}
      ></input>
      {messageEvent}
      <textarea
        className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        name="message"
        onChange={handleTextAreaChange}
      ></textarea>
      {contry}
      <select name="contry" onChange={handleSelectChange}>
        <option value="VIET NAM">VN</option>
        <option value="USA">USA</option>
        <option value="JAPAN">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
