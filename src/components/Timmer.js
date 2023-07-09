import React, { useEffect, useState } from "react";

const Timmer = () => {
  const [message, setMessage] = useState("Evondev");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    // clear funtion truoc do
    return () => {
      clearInterval(timer);
    };
  }, [message]);
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timmer;
