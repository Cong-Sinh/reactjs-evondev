import { Fragment, useState } from "react";
import "./asset/index.scss";
import SignUpformHook from "./components/form/SignUpformHook";
import Modal from "./components/modal/Modal";
// import MovieSearchApp from "./components/MovieSearchApp/MovieSearchApp";
// import SignUpform from "./components/form/SignUpform";
// import SignUpformV2 from "./components/form/SignUpformV2";
// import SignUpformV2final from "./components/form/SignUpformV2final";
// import Blog from "./components/Blog";
// import DropDown from "./components/DropDown";
// import SidebarMenu from "./components/SidebarMenu";
// import useCLickOutSide from "./hooks/useClickOutSide";
// import Form from "./components/form/Form";
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
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      <div
        className="w-[200px] text-center p-4  max-w-[482px]  text-white bg-blue-500 rounded-lg cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </div>
      <div className="relative z-30">
        Lorem ipsum dolor sit am id, consectetur adipiscing elit sed diam nonumy
        eirmod tempor incididunt ut labore et dolore magna aliquyam erat
        voluptate velit esse cillum dolore magna al
      </div>
    </Fragment>
  );
}

export default App;
