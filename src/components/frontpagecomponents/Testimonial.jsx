import style from "./Testimonial.module.css";
import H4 from "../../utilities/H4.jsx";
import { P16B } from "../../utilities/P16.jsx";
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
            <div
              className={style.card_header_img_circle}
              style={{ backgroundImage: "url(/img/woman_test1.jpg)" }}
            ></div>
            <div>
              <H4>Iruoma Leonord Dike</H4>
              <P16B>Perfumer</P16B>
            </div>
          </header>
          <P18>
            Through BeautyLens, I discovered perfumery. It gave me independence
            and a new way to support myself.
          </P18>
        </figure>
        <figure className={style.testimonial_card}>
          <header className={style.card_header}>
            <div
              className={style.card_header_img_circle}
              style={{ backgroundImage: "url(/img/woman_test2.jpg)" }}
            ></div>
            <div>
              <H4>Nwachukwu Nneamaka</H4>
              <P16B>Makeup artist</P16B>
            </div>
          </header>
          <P18>
            BeautyLens gave me confidence and practical makeup skills. Now I
            earn extra income and feel independent—it truly changed my life.
          </P18>
        </figure>
        <figure className={style.skew_card}>
          <div className={style.skew_card_content}>
            <div
              className={style.card_header_img_circle}
              style={{ backgroundImage: "url(/img/man_test.jpg)" }}
            ></div>
            <P18>
              Thanks to BeautyLens, I feel empowered and supported. It truly
              made a difference in my life.
            </P18>
            <img src={quote} alt="quote" />
          </div>
          <P18 classname={style.skew_card_author}>Chukwujekwu_</P18>
        </figure>
      </main>
    </section>
  );
}

export default Testimonial;
