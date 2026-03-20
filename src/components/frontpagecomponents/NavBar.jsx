import style from "./NavBar.module.css";
import packageIcon from "../../assets/icon/package.svg";
import menuIcon from "../../assets/icon/menu.svg";
import closeIcon from "../../assets/icon/close.svg";
import H3 from "../../utilities/H3";
import P18 from "../../utilities/P18";
import { modalAction } from "../../store";
import { useSelector, useDispatch } from "react-redux";
function NavBar() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.isOpen);

  return (
    <nav className={style.navbar}>
      <div className={style.navbar_cont}>
        <a
          href="#"
          className={style.nav_root_btn}
          onClick={() => {
            if (modalIsOpen) dispatch(modalAction.openCloseModal());
          }}
        >
          <H3>
            <img src={packageIcon} alt="package icon" />
            <span>BEAUTYLENS</span>
          </H3>
        </a>

        <ul>
          <li>
            <a href="#about">
              <P18>About us</P18>
            </a>
          </li>
          <li>
            <a href="#services">
              <P18>Services</P18>
            </a>
          </li>
          <li>
            <a href="#gallery">
              <P18>Gallery</P18>
            </a>
          </li>
          <li>
            <a href="#contact">
              <P18>Contact us</P18>
            </a>
          </li>
        </ul>
        <a
          href="https://wa.me/+2348143875001"
          target="blank"
          className={style.navbar_btn}
        >
          <P18>Join us now</P18>
        </a>
        {!modalIsOpen ? (
          <img
            src={menuIcon}
            alt="menu icon"
            className={style.mobile_menu}
            onClick={() => {
              dispatch(modalAction.openCloseModal());
            }}
          />
        ) : (
          <img
            src={closeIcon}
            alt="close icon"
            className={style.mobile_menu}
            onClick={() => {
              dispatch(modalAction.openCloseModal());
            }}
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
