import { Fragment, useState } from "react";
import "./asset/index.scss";
// import SignUpformHook from "./components/form/SignUpformHook";
// import Modal from "./components/modal/Modal";
// import DropDownPortal from "./components/DropDownPortal";
// import Tooltip from "./components/Tooltip";
import Modal from "./components/modal/Modal";
import Portal from "./components/Portal";
import ModalBase from "./components/modal/ModalBase";
import ModalAdvanced from "./components/modal/ModalAdvanced";
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
  // const [showModal, setShowModal] = useState(false);
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      {/* <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      <div
        className="w-[200px] text-center p-4  max-w-[482px]  text-white bg-blue-500 rounded-lg cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </div> */}
      {/* 
      <div className="relative z-30">
        Lorem ipsum dolor sit am id, consectetur adipiscing elit sed diam nonumy
        eirmod tempor incididunt ut labore et dolore magna aliquyam erat
        voluptate velit esse cillum dolore magna al
      </div> */}
      {/* <div className="p-5 overflow-hidden">
         <DropDownPortal></DropDownPortal>
        <div className="p-10">
          <Tooltip text="Click vao day">This is a tolltip</Tooltip>
        </div>
      </div> */}
      {/* <Modal></Modal> */}

      <button
        className="p-5 text-center text-white bg-blue-400 rounded-none"
        onClick={() => setOpenModalBase(true)}
      >
        open modal bse
      </button>

      <button
        className="p-5 text-center text-white bg-blue-400 rounded-none"
        onClick={() => setOpenModal(true)}
      >
        open modal
      </button>

      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="mx-auto flex  bg-white w-[500px]">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem
        </div>
      </ModalBase>
      <ModalAdvanced
        visible={openModal}
        onClose={() => setOpenModal(false)}
        heading="Welcome Back!"
        bodyClassName="w-full max-w-[400px]"
      >
        <div className="flex flex-col gap-5 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="text"
            className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4"
            placeholder="Enter your password"
          />
          <button className="w-full p-4 text-base font-semibold text-white bg-[#316Bff] rounded-lg ">
            Sign In
          </button>
        </div>
      </ModalAdvanced>
    </Fragment>
  );
}

export default App;
