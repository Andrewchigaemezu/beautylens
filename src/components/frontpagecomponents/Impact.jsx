import style from "./Impact.module.css";
import H4 from "../../utilities/H4";
import P18 from "../../utilities/P18";
import impactImg from "../../assets/img/impact_img.png";
import checkmark from "../../assets/icon/checkp.svg";
import P16 from "../../utilities/P16";
import { motion } from "framer-motion";

function Impact() {
  return (
    <section className={style.impact}>
      <header className={style.impact_header}>
        <H4>WE'RE MISSION DRIVEN</H4>
      </header>
      <main className={style.impact_main}>
        <motion.figure
          className={style.main_problem_card}
          initial={{ opacity: 0, y: 40 }} // start hidden, shifted down
          whileInView={{ opacity: 1, y: 0 }} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <H4>The Problem</H4>
          <P18>
            Access to professional beauty training and opportunities remains
            limited for many young women in Nigeria, particularly persons with
            disabilities. Traditional beauty schools are often expensive,
            inaccessible, and not designed to accommodate individuals with
            hearing or visual impairments. As a result, many talented and
            passionate individuals are excluded from acquiring practical,
            income-generating skills. This gap contributes to higher levels of
            unemployment, low self-confidence, and economic dependence among
            underserved women.
          </P18>
        </motion.figure>
        <figure className={style.main_img_card}>
          <img src={impactImg} alt="blind person learning making skills" />
        </figure>
        <motion.figure
          className={style.main_solutn_card}
          initial={{ opacity: 0, scale: 0.8 }} // start hidden, shifted down
          whileInView={{ opacity: 1, scale: 1 }} // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <H4>Our Solution</H4>
          <ul className={style.main_card_first_cont}>
            <li>
              <img src={checkmark} alt="check mark" />
              <P18>Inclusive beauty training programs</P18>
            </li>
            <li>
              <img src={checkmark} alt="check mark" />
              <P18>
                Accessible learning methods (including interpreters and adapted
                teaching)
              </P18>
            </li>
            <li>
              <img src={checkmark} alt="check mark" />
              <P18>Job creation and career support in the beauty industry</P18>
            </li>
          </ul>
          <ul className={style.solution_numbs}>
            <li>
              <P18 classname={style.soln_numb}>50+</P18>
              <P16>Trainees Empowered</P16>
            </li>
            <li>
              <P18 classname={style.soln_numb}>200+</P18>
              <P16>Clients Served</P16>
            </li>
            <li>
              <P18 classname={style.soln_numb}>80%</P18>
              <P16>Employment Rate</P16>
            </li>
          </ul>
        </motion.figure>
      </main>
    </section>
  );
}

export default Impact;
