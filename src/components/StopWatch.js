import React, { useRef, useState, useEffect } from "react";

function StopWatch() {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h3>Timmer: {count}</h3>
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
      </div>
    </div>
  );
}
export default StopWatch;
