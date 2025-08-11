import { Testimonial } from "../components/Testimonial";
import { testimonials } from "../data/testimonials";

export const Testimonials = () => {



  return (
    <section className="px-8 mx-auto max-w-desktop pb-[15rem]" aria-labelledby="testimonials-title">
      <h2 className="sr-only" id="testimonials-title">Testimonial Cards</h2>
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 lg:flex-row">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}