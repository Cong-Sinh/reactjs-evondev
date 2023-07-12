import "./asset/index.scss";
// import Blog from "./components/Blog";
import DropDown from "./components/DropDown";
import SidebarMenu from "./components/SidebarMenu";
import useCLickOutSide from "./hooks/useClickOutSide";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import StopWatch from "./components/StopWatch";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWhithHook from "./components/news/HackerNewsWhithHook";
// import Timmer from "./components/Timmer";
// import Header from "./components/Header";
// import Counter from "./components/counter/Counter";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
// import CardTaiWind from "./components/card/CardTailWind";
// import Photos from "./components/photo/Photos";
function App() {
  const { show, setShow, nodeRef } = useCLickOutSide("button");
  return (
    <div className="App">
      <button
        onClick={() => setShow(true)}
        className="inline-block  m-3 p-3 rounded-lg text-white bg-green-400"
      >
        buttons
      </button>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
      <DropDown></DropDown>
    </div>
  );
}

export default App;
