import style from "./Gallery.module.css";
import gallery1 from "../../assets/img/gallery1.jpg";
import gallery2 from "../../assets/img/gallery2.jpg";
import gallery3 from "../../assets/img/gallery3.jpg";
import gallery4 from "../../assets/img/gallery4.jpg";
import gallery5 from "../../assets/img/gallery5.jpg";
import gallery6 from "../../assets/img/gallery6.jpg";
import gallery7 from "../../assets/img/gallery7.jpg";
import gallery8 from "../../assets/img/gallery8.jpg";
import gallery9 from "../../assets/img/gallery9.jpg";
import gallery10 from "../../assets/img/gallery10.jpg";
import gallery11 from "../../assets/img/gallery11.jpg";
import gallery12 from "../../assets/img/gallery12.jpg";
import gallery13 from "../../assets/img/gallery13.jpg";
import gallery14 from "../../assets/img/gallery14.jpg";
import gallery15 from "../../assets/img/gallery15.jpg";
import gallery16 from "../../assets/img/gallery16.jpg";
import gallery17 from "../../assets/img/gallery17.jpg";
import gallery18 from "../../assets/img/gallery18.jpg";
import gallery19 from "../../assets/img/gallery19.jpg";
import gallery20 from "../../assets/img/gallery20.jpg";
import gallery21 from "../../assets/img/gallery21.jpg";
import gallery22 from "../../assets/img/gallery22.jpg";
import gallery23 from "../../assets/img/gallery23.jpg";
import H4 from "../../utilities/H4";
import { useState } from "react";

function Gallery() {
  const [paused, setPaused] = useState(false);
  return (
    <section className={style.gallery} id="gallery">
      <header className={style.gallery_header}>
        <H4>OUR GALLERY</H4>
      </header>
      <main
        className={`${style.gallery_track} ${paused ? style.pause : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <img src={gallery1} alt="gallery image " />
        <img src={gallery2} alt="gallery image " />
        <img src={gallery3} alt="gallery image " />
        <img src={gallery4} alt="gallery image " />
        <img src={gallery5} alt="gallery image " />
        <img src={gallery6} alt="gallery image " />
        <img src={gallery7} alt="gallery image " />
        <img src={gallery8} alt="gallery image " />
        <img src={gallery9} alt="gallery image " />
        <img src={gallery10} alt="gallery image " />
        <img src={gallery11} alt="gallery image " />
        <img src={gallery12} alt="gallery image " />
        <img src={gallery13} alt="gallery image " />
        <img src={gallery14} alt="gallery image " />
        <img src={gallery15} alt="gallery image " />
        <img src={gallery16} alt="gallery image " />
        <img src={gallery17} alt="gallery image " />
        <img src={gallery18} alt="gallery image " />
        <img src={gallery19} alt="gallery image " />
        <img src={gallery20} alt="gallery image " />
        <img src={gallery21} alt="gallery image " />
        <img src={gallery22} alt="gallery image " />
        <img src={gallery23} alt="gallery image " />
      </main>
    </section>
  );
}

export default Gallery;
