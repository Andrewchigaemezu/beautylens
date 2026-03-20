import style from "./Testimonial.module.css";
import H4 from "../../utilities/H4.jsx";
import { P16B } from "../../utilities/P16.jsx";
import headshot from "../../assets/img/headshot.png";
import quote from "../../assets/icon/quote.svg";
import P18 from "../../utilities/P18.jsx";

function Testimonial() {
  return (
    <section className={style.testimonial}>
      <header className={style.testimonial_header}>
        <H4>OUR TESIMONIAL</H4>
      </header>

      <main className={style.testimonial_main}>
        <figure className={style.testimonial_card}>
          <header className={style.card_header}>
            <img src={headshot} alt="headshot" />
            <div>
              <H4>Peter Pan</H4>
              <P16B>Software Developer</P16B>
            </div>
          </header>
          <P18>
            Our goal is to create a beauty ecosystem where ability is recognized
            over limitation, opportunities are ac
          </P18>
        </figure>
        <figure className={style.testimonial_card}>
          <header className={style.card_header}>
            <img src={headshot} alt="headshot" />
            <div>
              <H4>Peter Pan</H4>
              <P16B>Software Developer</P16B>
            </div>
          </header>
          <P18>
            Our goal is to create a beauty ecosystem where ability is recognized
            over limitation, opportunities are ac
          </P18>
        </figure>
        <figure className={style.skew_card}>
          <div className={style.skew_card_content}>
            <img src={headshot} alt="headshot" />
            <P18>
              Our goal is to create a beauty ecosystem where ability is
              recognized over limitation, opportunities are ac
            </P18>
            <img src={quote} alt="quote" />
          </div>
          <P18 classname={style.skew_card_author}>Gilbert_</P18>
        </figure>
      </main>
    </section>
  );
}

export default Testimonial;
