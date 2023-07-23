// import { Fragment, useState } from "react";
// import { CountProvider, useCount } from "./contexts/countContext";
import { useState } from "react";
import "./asset/index.scss";
import Counter from "./components/advanced-react/control-props/Counter";
import FetchingData from "./components/advanced-react/hoc/FetchingData";
import Accordion from "./components/advanced-react/react-composition/Accordion";
import Editable from "./components/advanced-react/react-composition/Editable";
import HandleValue from "./components/advanced-react/render-props/HandleValue";
import Title from "./components/advanced-react/render-props/Title";
// import FetchingDataOder from "./components/advanced-react/hoc/FetchingDataOder";
// import SignUpformHook from "./components/form/SignUpformHook";
// import Modal from "./components/modal/Modal";
// import DropDownPortal from "./components/DropDownPortal";
// import Tooltip from "./components/Tooltip";
// import ModalBase from "./components/modal/ModalBase";
// import ModalAdvanced from "./components/modal/ModalAdvanced";
// import TooltipAdvanced from "./components/tooltip/TooltipAdvanced";
// import CountDisplay from "./components/count/CountDisplay";
// import Counter from "./components/count/Counter";
// import HeaderMain from "./components/HeaderMain";
// import { AuthProvider } from "./contexts/auth-context";
// import { GaleeryProvider } from "./contexts/gallery-context";
// import PhotoList from "./components/gallery/PhotoList";
// import CardList from "./components/gallery/CardList";
// import { Route, Routes } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import BlogPage from "./components/router/BlogPage";
// import ProfilePage from "./components/router/ProfilePage";
// import BlogPageDetail from "./components/router/BlogPageDetail";
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
  // const [openModalBase, setOpenModalBase] = useState(false);
  // const [openModal, setOpenModal] = useState(false);

  const [count, setCount] = useState(5);
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  return (
    <div className="">
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

      {/* <div>
        <button
          className="p-5 m-5 text-center text-white bg-blue-400 rounded-none"
          onClick={() => setOpenModalBase(true)}
        >
          open modal bse
        </button>

        <button
          className="p-5 m-5 text-center text-white bg-blue-400 rounded-none"
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
          bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
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
        <div className="inline-block ml-5">
          <TooltipAdvanced title="Tooltip">This is a tooltip</TooltipAdvanced>
        </div>
      </div> */}

      {/* <div className="flex items-center justify-center p-5 mx-auto">
        <CountProvider>
          <CountDisplay></CountDisplay>
          <Counter></Counter>
        </CountProvider>
      </div> */}

      {/* <Fragment>
        <AuthProvider>
          <GaleeryProvider>
            <HeaderMain></HeaderMain>
            <PhotoList></PhotoList>
            <CardList></CardList>
          </GaleeryProvider>
        </AuthProvider>
      </Fragment> */}

      {/* <Routes>
        <Route path="/" element={<Navigation></Navigation>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>quay ve ngay</>}></Route>
      </Routes> */}

      {/* <div> */}
      {/* <FetchingData></FetchingData> */}
      {/* <Title>{() => <h1>hello from render props </h1>}</Title> */}
      {/* <HandleValue></HandleValue> */}
      {/* </div> */}

      {/* <div>
        <Accordion header="Can I change my plan">sdfgsdfsdfsdfsdsf</Accordion>
        <Editable></Editable>
      </div> */}

      <Counter value={count} onChange={handleCountChange}></Counter>
    </div>
  );
}

export default App;
