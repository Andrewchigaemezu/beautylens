import style from "./LandingPage.module.css";
import About from "./frontpagecomponents/About";
import Contact from "./frontpagecomponents/Contact";
import Hero from "./frontpagecomponents/Hero";
import Impact from "./frontpagecomponents/Impact";
import Services from "./frontpagecomponents/Services";
import Testimonial from "./frontpagecomponents/Testimonial";
import Training from "./frontpagecomponents/Training";

function LandingPage() {
  return (
    <section className={style.landing_page}>
      <Hero />
      <About />
      <Services />
      <Impact />
      <Training />
      <Testimonial />
      <Contact />
    </section>
  );
}

export default LandingPage;
