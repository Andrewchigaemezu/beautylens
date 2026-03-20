import { Outlet } from "react-router-dom";
import TopInfo from "../components/frontpagecomponents/TopInfo";
import NavBar from "../components/frontpagecomponents/NavBar";
import Modal from "../components/frontpagecomponents/Modal";
import { useSelector } from "react-redux";

function RootLayer() {
  const modalIsOpen = useSelector((state) => state.isOpen);
  return (
    <>
      <TopInfo />
      <NavBar />
      {modalIsOpen && <Modal />}
      {/* <br /> */}
      <Outlet />
    </>
  );
}

export default RootLayer;
