import { useState } from "react";
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
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };

  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>

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
