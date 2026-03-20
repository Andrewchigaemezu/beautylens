import style from "./Modal.module.css";
import { Link } from "react-router-dom";
import P18 from "../../utilities/P18";
import { useDispatch } from "react-redux";
import { modalAction } from "../../store";

function Modal() {
  const dispatch = useDispatch();
  function modalHandler() {
    dispatch(modalAction.openCloseModal());
  }
  return (
    <section className={style.modal}>
      <ul>
        <li>
          <a href={"#about"} onClick={modalHandler}>
            <P18>About us</P18>
          </a>
        </li>
        <li>
          <a href={"#services"} onClick={modalHandler}>
            <P18>Services</P18>
          </a>
        </li>
        <li>
          <a href={"#gallery"} onClick={modalHandler}>
            <P18>Gallery</P18>
          </a>
        </li>
        <li>
          <a href={"#program"} onClick={modalHandler}>
            <P18>Our Program</P18>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={modalHandler}>
            <P18>Contact us</P18>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Modal;
