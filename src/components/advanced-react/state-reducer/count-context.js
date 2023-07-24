import { createContext, useContext } from "react";

const CountContext = createContext(undefined);
function CountProvider({ value, ...props }) {
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useCont must be specified");
  return context;
}

export { CountProvider, useCount };
