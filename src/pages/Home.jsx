import { Features } from "../components/Features";
import { Header } from "../components/Header";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Newsletter } from "../sections/Newsletter";
import { Productivity } from "../sections/Productivity";
import { Testimonials } from "../sections/Testimonials";

export const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <h1 className="sr-only">Welcome to Fylo Dark Theme Landing Page</h1>
        <Hero />
        <div className="curve-image | relative bg-main">
          <Features />
          <Productivity />
          <Testimonials />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </>
  )
}