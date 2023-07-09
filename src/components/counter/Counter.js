import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const handleIncrement = () => {
  //     setTimeout(function delay() {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   };

  const [info, setInfo] = useState({
    firstName: "cong",
    LastName: "Sinh",
  });

  useEffect(() => {
    console.log("from input");
  }, [info]);
  return (
    <div className="cursor-pointer p-5 gap-x-4 item-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />

      <span className="text-lg font-bold text-2xl">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        {" "}
        Increment
      </button>
    </div>
  );
};

export default Counter;
