import { useState, useContext, createContext } from "react";

const CountContext = createContext();

function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];

  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}

function CountDisplay() {
  const [count, setCount] = useCount();
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 ml-5 font-semibold text-white bg-purple-500 rounded-lg"
    >
      click vao day
    </button>
  );
}

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("UseCount must be used a CountProvider");
  return context;
}

function App() {
  return (
    <div className="flex items-center justify-center p-5 mx-auto">
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
}

export default App;
