// !import hero banner image
import heroBanner from "../assets/images/illustration-intro.png";
import { CustomButton } from "../components/CustomButton";


const title = "All your files in one secure location, accessible anywhere";
const paragraph = "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.";

export const Hero = () => {
  return (
    <section className="wrapper grid gap-16 text-center pt-[4.375rem] pb-[9.9375rem]" aria-labelledby="hero-title">
      <img className="mx-auto" src={heroBanner} width="720" height="534" loading="lazy" alt="" aria-hidden="true" />
      <div className="grid gap-hero">
        <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold font-raleway max-w-title mx-auto" id="hero-title">{title}</h2>
        <p className="mx-auto leading-text md:text-lg max-w-paragraph">{paragraph}</p>
        <CustomButton isLink={true} href="#" text="Get Started" />
      </div>
    </section>
  )
}