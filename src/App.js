import { useEffect, useRef, useState } from "react";
import "./asset/index.scss";
import StopWatch from "./components/StopWatch";
// import HackerNews from "./components/news/HackerNews";
// import Timmer from "./components/Timmer";
// import Header from "./components/Header";
// import Counter from "./components/counter/Counter";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import CardTaiWind from "./components/card/CardTailWind";
// import Photos from "./components/photo/Photos";
function App() {
  return (
    <div className="App">
      <StopWatch></StopWatch>
    </div>
  );
}

export default App;
