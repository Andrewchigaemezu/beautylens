import style from "./Footer.module.css";
import H3 from "../../utilities/H3";

import packagesec from "../../assets/icon/packagesec.svg";
import whatsappicon from "../../assets/icon/whatsapp.svg";
import facebookicon from "../../assets/icon/facebook.svg";
import tiktokicon from "../../assets/icon/tiktok.svg";
import instagramicon from "../../assets/icon/instagram.svg";

import P18 from "../../utilities/P18";

function Footer() {
  return (
    <section className={style.footer}>
      <main className={style.footer_main}>
        <a href="#" className={style.footer_c_name}>
          <H3>
            <img src={packagesec} alt="package icon" />
            <span>BEAUTYLENS</span>
          </H3>
        </a>
        <ul className={style.footer_main_first_cont}>
          <li>
            <a href="#about" className={style.footer_btn}>
              <P18>About us</P18>
            </a>
          </li>
          <li>
            <a href="#services" className={style.footer_btn}>
              <P18>Services</P18>
            </a>
          </li>
          <li>
            <a href="#gallery" className={style.footer_btn}>
              <P18>Gallery</P18>
            </a>
          </li>
          <li>
            <a href="#contact" className={style.footer_btn}>
              <P18>Contact us</P18>
            </a>
          </li>
        </ul>
        <ul className={style.footer_main_second_cont}>
          <li>
            <img src={whatsappicon} alt="whatsApp icon" />
          </li>
          <li>
            <img src={facebookicon} alt="facebook icon" />
          </li>
          <li>
            <img src={tiktokicon} alt="tiktok icon" />
          </li>
          <li>
            <img src={instagramicon} alt="instagram icon" />
          </li>
        </ul>
        <P18>Beautyleans@2026 all rights reserved</P18>
      </main>
    </section>
  );
}

export default Footer;
