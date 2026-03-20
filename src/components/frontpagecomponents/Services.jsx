import style from "./Services.module.css";
import H4 from "../../utilities/H4";
import P18, { P18B } from "../../utilities/P18";

import P16 from "../../utilities/P16";
import brushIcon from "../../assets/icon/servicebrush.svg";
import eventIcon from "../../assets/icon/servicecalender.svg";
import cameraIcon from "../../assets/icon/servicecamera.svg";
import chatIcon from "../../assets/icon/servicechat.svg";
import { motion } from "framer-motion";

function Services() {
  return (
    <section className={style.services} id="services">
      <header className={style.services_header}>
        <H4>OUR BEAUTY SERVICES</H4>
        <P18 classname={style.service_header_text}>
          Our goal is to create a beauty ecosystem where ability is recognized
          over limitation,{" "}
        </P18>
        <a
          href="https://wa.me/+2348143875001"
          target="blank"
          className={style.service_btn}
        >
          <P18>Book a session</P18>
        </a>
      </header>
      <main className={style.servicesmain}>
        <motion.figure
          className={style.service_card}
          initial={{ opacity: 0, y: 40 }} // start hidden, shifted down
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <div className={style.service_card_circle}>
            <img src={brushIcon} alt="brush icon" />
          </div>
          <P18B>Bridal Makeup</P18B>
          <P16>
            Professional bridal makeup tailored to enhance natural beauty and
            ensure a flawless look for your special day.
          </P16>
        </motion.figure>
        <motion.figure
          className={style.service_card}
          initial={{ opacity: 0, y: 40 }} // start hidden, shifted down
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <div className={style.service_card_circle}>
            <img src={eventIcon} alt="event icon" />
          </div>
          <P18B>Event Makeup</P18B>
          <P16>Glam looks for birthdays, parties, and special occasions.</P16>
        </motion.figure>
        <motion.figure
          className={style.service_card}
          initial={{ opacity: 0, y: 40 }} // start hidden, shifted down
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <div className={style.service_card_circle}>
            <img src={cameraIcon} alt="camera icon" />
          </div>
          <P18B>Photoshoot Makeup</P18B>
          <P16>
            Camera-ready makeup for professional shoots and branding sessions.
          </P16>
        </motion.figure>
        <motion.figure
          className={style.service_card}
          initial={{ opacity: 0, y: 40 }} // start hidden, shifted down
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <div className={style.service_card_circle}>
            <img src={chatIcon} alt="chat icon" />
          </div>
          <P18B>Beauty Consultations</P18B>
          <P16>
            Personalized beauty guidance to help clients understand what works
            best for them.
          </P16>
        </motion.figure>
      </main>
    </section>
  );
}

export default Services;
