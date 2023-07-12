import { useState } from "react";
import "./asset/index.scss";
// import Blog from "./components/Blog";
// import DropDown from "./components/DropDown";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import StopWatch from "./components/StopWatch";
import HackerNews from "./components/news/HackerNews";
// import Timmer from "./components/Timmer";
// import Header from "./components/Header";
// import Counter from "./components/counter/Counter";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import CardTaiWind from "./components/card/CardTailWind";
// import Photos from "./components/photo/Photos";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle Butotn</button>
      {show && <HackerNews></HackerNews>}
    </div>
  );
}

export default App;
