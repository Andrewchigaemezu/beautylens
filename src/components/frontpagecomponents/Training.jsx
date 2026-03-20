import style from "./Training.module.css";
import H2 from "../../utilities/H2";
import H4 from "../../utilities/H4";
import addIcon from "../../assets/icon/addicon.svg";
import checkIcon from "../../assets/icon/checkp.svg";
import P18, { P18B } from "../../utilities/P18";
import { motion } from "framer-motion";
import { useState } from "react";
function Training() {
  const [who, setWho] = useState(true);
  const [what, setWhat] = useState(false);
  const [skill, setSkill] = useState(false);
  const [duration, setDuration] = useState(false);

  function dropDownHandler(caller) {
    if (caller === "who") {
      setWho((state) => !state);
      setWhat(false);
      setSkill(false);
      setDuration(false);
    }
    if (caller === "what") {
      setWho(false);
      setWhat((state) => !state);
      setSkill(false);
      setDuration(false);
    }
    if (caller === "skill") {
      setWho(false);
      setWhat(false);
      setSkill((state) => !state);
      setDuration(false);
    }
    if (caller === "duration") {
      setWho(false);
      setWhat(false);
      setSkill(false);
      setDuration((state) => !state);
    }
  }
  return (
    <section className={style.training} id="program">
      <header className={style.training_header}>
        <H4>OUR TRAINING PROGRAME</H4>
        <H2>
          Transforming talent <br />
          <span>into thriving careers.</span>
        </H2>
      </header>
      <main className={style.training_main}>
        <motion.ul
          className={style.training_main_list}
          initial={{ opacity: 0, y: 40 }} // start hidden, shifted down
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <li
            className={style.training_main_list_item}
            onClick={() => {
              dropDownHandler("who");
            }}
          >
            <H4>01</H4>
            <P18B>WHO CAN JOIN</P18B>
            <img
              src={addIcon}
              alt="plus icon"
              className={who ? style.training_list_active : ""}
            />

            {who && (
              <ul className={style.training_point_detail_cont}>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Deaf women</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Visually impaired women</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Young women (17-25)</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Women with mobility challenges (wheelchair users)</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Women who cannot afford traditional beauty schools</P18>
                </li>
              </ul>
            )}
          </li>
          <li
            className={style.training_main_list_item}
            onClick={() => {
              dropDownHandler("what");
            }}
          >
            <H4>02</H4>
            <P18B>WHAT THEY LEARN</P18B>
            <img
              src={addIcon}
              alt="plus icon"
              className={what ? style.training_list_active : ""}
            />
            {what && (
              <ul className={style.training_point_detail_cont}>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Professional makeup techniques</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Client service and communication</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Product knowledge</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Business and income skills</P18>
                </li>
              </ul>
            )}
          </li>
          <li
            className={style.training_main_list_item}
            onClick={() => {
              dropDownHandler("duration");
            }}
          >
            <H4>03</H4>
            <P18B>PROGRAM DURATION</P18B>
            <img
              src={addIcon}
              alt="plus icon"
              className={duration ? style.training_list_active : ""}
            />
            {duration && (
              <ul className={style.training_point_detail_cont}>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>1 day / 1 month</P18>
                </li>
              </ul>
            )}
          </li>
          <li
            className={style.training_main_list_item}
            onClick={() => {
              dropDownHandler("skill");
            }}
          >
            <H4>04</H4>
            <P18B>SKILLS TAUGHT</P18B>
            <img
              src={addIcon}
              alt="plus icon"
              className={skill ? style.training_list_active : ""}
            />
            {skill && (
              <ul className={style.training_point_detail_cont}>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Bridal makeup</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Everyday glam</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Gele styling</P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Pefumery </P18>
                </li>
                <li>
                  <img src={checkIcon} alt="check mark icon" />
                  <P18>Lip gloss production </P18>
                </li>
              </ul>
            )}
          </li>
        </motion.ul>
      </main>
      <div className={style.training_cta_cont}>
        <a
          href="https://wa.me/+2348143875001"
          target="blank"
          className={style.training_btn1}
        >
          <P18>Apply for Training</P18>
        </a>
        <a
          href="https://wa.me/+2348143875001"
          target="blank"
          className={style.training_btn2}
        >
          <P18>Book our services</P18>
        </a>
      </div>
    </section>
  );
}

export default Training;
