import style from "./Hero.module.css";
import H1 from "../../utilities/H1";
import P22 from "../../utilities/P22";
import P18 from "../../utilities/P18";
import checkmark_sec_color from "../../assets/icon/checksec.svg";
import checkmark_sec_color_dark from "../../assets/icon/checksecd.svg";
import checkmark_prim_color from "../../assets/icon/checkp.svg";
import locationwhite from "../../assets/icon/locationwhite.svg";
import timerwhite from "../../assets/icon/timerwhite.svg";
import phonebookwhite from "../../assets/icon/phonebookwhite.svg";
import { P16B } from "../../utilities/P16";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero_cont}>
        <motion.div
          className={style.hero_text_cont}
          initial={{ opacity: 0, y: 40 }} // start hidden, shifted down
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <H1>
            Beauty Without <span>Barriers</span>
          </H1>
          <P22 classname={style.hero_subtext}>
            Professional makeup services and inclusive beauty training designed
            to empower women, build confidence, and create sustainable careers
            in the beauty industry.
          </P22>
          <div className={style.hero_card}>
            <ul className={style.hero_card_first_cont}>
              <li>
                <img src={checkmark_sec_color_dark} alt="check mark" />
                <P18>Makeup Services</P18>
              </li>
              <li>
                <img src={checkmark_prim_color} alt="check mark" />
                <P18>Home Service</P18>
              </li>
              <li>
                <img src={checkmark_sec_color} alt="check mark" />
                <P18>Makeup Tutorial</P18>
              </li>
              <li>
                <a
                  href="https://wa.me/+2348143875001"
                  target="blank"
                  className={style.hero_btn}
                >
                  <P18>Book a session</P18>
                </a>
              </li>
            </ul>
            <ul className={style.hero_card_sec_cont}>
              <li>
                <div className={style.circle_1}>
                  <img src={locationwhite} alt="location icon" />
                </div>
                <div className={style.text_cont}>
                  <P16B>Location</P16B>
                  <P18>Onitsha, Nigeria</P18>
                </div>
              </li>
              <li>
                <div className={style.circle_2}>
                  <img src={timerwhite} alt="timer icon" />
                </div>
                <div className={style.text_cont}>
                  <P16B>Active Hours</P16B>
                  <P18>8 AM - 6 PM</P18>
                </div>
              </li>
              <li>
                <div className={style.circle_3}>
                  <img src={phonebookwhite} alt="phonebook icon" />
                </div>
                <div className={style.text_cont}>
                  <P16B>Booking</P16B>
                  <P18>+234 8143875001</P18>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
        <div className={style.hero_img_cont}></div>
      </div>
    </section>
  );
}

export default Hero;
