import style from "./About.module.css";
import H4 from "../../utilities/H4";
import P18 from "../../utilities/P18";
import H2 from "../../utilities/H2";
import headshot from "../../assets/img/about_card_headshot.png";
import hands from "../../assets/img/about_card_hands.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section className={style.about} id="about">
      <motion.header
        className={style.about_header}
        initial={{ opacity: 0, y: 50 }} // start hidden, shifted down
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
      >
        <H4 classname={style.about_section_title}>ABOUT US</H4>
        <P18 classname={style.about_text}>
          BeautyLens is an inclusive beauty initiative focused on empowering
          women—especially those who are deaf, visually impaired, or financially
          disadvantaged—through professional makeup training and beauty
          services. Our goal is to create a beauty ecosystem where ability is
          recognized over limitation, opportunities are accessible to all and
          confidence becomes a tool for empowerment. Through BeautyLens, beauty
          becomes more than appearance—it becomes a pathway to dignity,
          self-worth, and sustainable livelihood.
        </P18>
        <H2>
          Your journey to <span>effortless beauty</span>
        </H2>
      </motion.header>
      <motion.main
        className={style.about_main}
        initial={{ opacity: 0, y: 50 }} // start hidden, shifted down
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
      >
        <figure className={style.about_main_card}>
          <img src={headshot} alt="head shot of a model" />
          <div>
            <H4>OUR VISION</H4>
            <P18>
              To build an inclusive beauty industry where every woman,
              regardless of physical ability or background, has access to
              quality training, equal opportunities, and the chance to thrive.
            </P18>
            <a
              href="https://wa.me/+2348143875001"
              target="blank"
              className={style.about_card_btn}
            >
              <P18>Book a session</P18>
            </a>
          </div>
        </figure>
        <figure className={style.about_main_card}>
          <img src={hands} alt="hands image" />
          <div>
            <H4>OUR MISSION</H4>
            <P18>
              To empower women—particularly the deaf, visually impaired, and
              underserved—by providing accessible beauty education, practical
              skills, and career opportunities that lead to financial
              independence.
            </P18>
            <a href="#" className={style.about_card_btn_2}>
              <P18 href="https://wa.me/+2348143875001" target="blank">
                Book a session
              </P18>
            </a>
          </div>
        </figure>
      </motion.main>
    </section>
  );
}

export default About;
