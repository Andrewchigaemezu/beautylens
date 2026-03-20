import style from "./Contact.module.css";
import H4 from "../../utilities/H4";
import H2 from "../../utilities/H2";
import P18, { P18B } from "../../utilities/P18";
import locationIcon from "../../assets/icon/locationwhite.svg";
import mailIcon from "../../assets/icon/mailwhite.svg";
import phoneIcon from "../../assets/icon/phonewhite.svg";
import whatsAppIcon from "../../assets/icon/whatsapp.svg";
import facebookIcon from "../../assets/icon/facebook.svg";
import tiktokIcon from "../../assets/icon/tiktok.svg";
import instagramIcon from "../../assets/icon/instagram.svg";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className={style.contact} id="contact">
      <header className={style.contact_header}>
        <H4>CONTACT US</H4>
        <H2>
          Contact us for <span>our services</span>
        </H2>
      </header>
      <main className={style.contact_main}>
        <form className={style.form}>
          <div className={style.form_first_cont}>
            <div>
              <label htmlFor="name">
                <P18B>Name*</P18B>
              </label>
              <input placeholder="John Doe" type="text" id="name" />
            </div>
            <div>
              <label htmlFor="number">
                <P18B>Phone*</P18B>
              </label>
              <input
                placeholder="Input mobile number"
                type="number"
                id="number"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">
              <P18B>Email*</P18B>
            </label>
            <input placeholder="Input email address" type="email" id="email" />
          </div>
          <div>
            <label htmlFor="number">
              <P18B>Message*</P18B>
            </label>
            <textarea placeholder="Input message" type="text" id="message" />
          </div>
          <button type="submit" className={style.form_btn}>
            <P18>Send Message</P18>
          </button>
        </form>
        <motion.figure
          className={style.contact_card}
          initial={{ opacity: 0, scale: 0.8 }} // start hidden, shifted down
          whileInView={{ opacity: 1, scale: 1 }} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <div className={style.contact_card_top}>
            <H4>CONNECT WITH US</H4>
            <ul className={style.contact_card_top_list}>
              <li>
                <div className={style.contact_card_circle}>
                  <img src={locationIcon} alt="location icon" />
                </div>
                <P18B>Onitsha, Nigeria</P18B>
              </li>
              <li>
                <div className={style.contact_card_circle}>
                  <img src={mailIcon} alt="mail icon" />
                </div>
                <a
                  href="mailto:beautylensbyjoyspark@gmail.com"
                  className={style.contact_card_btn}
                >
                  <P18B>beautylensbyjoyspark@gmail.com</P18B>
                </a>
              </li>
              <li>
                <div className={style.contact_card_circle}>
                  <img src={phoneIcon} alt="phone icon" />
                </div>
                <a href="tel:+2348143875001" className={style.contact_card_btn}>
                  <P18B>+2348143875001</P18B>
                </a>
              </li>
            </ul>
          </div>
          <ul className={style.contact_card_bottom}>
            <li>
              <img src={whatsAppIcon} alt="whatsapp icon" />
            </li>
            <li>
              <img src={facebookIcon} alt="facebook icon" />
            </li>
            <li>
              <img src={tiktokIcon} alt="tiktok icon" />
            </li>
            <li>
              <img src={instagramIcon} alt="instagram icon" />
            </li>
          </ul>
        </motion.figure>
      </main>
    </section>
  );
}

export default Contact;
