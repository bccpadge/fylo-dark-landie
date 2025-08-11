import { Form } from "../components/Form";
import { NewsletterData } from "../data/data";

export const Newsletter = () => {
  return (
    <section className="absolute grid w-11/12 px-8 mx-auto text-center rounded-md shadow-md gap-9 max-w-newsletter p-7 md:p-10 left-1/2 -translate-1/2 bg-gradient-to-b from-intro to-intro">
      {NewsletterData.map((data) => (
        <article key={data.id} className="grid gap-4">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <p className="max-w-[78ch] mx-auto">{data.paragraph}</p>
        </article>
      ))}
      <Form />
    </section>
  )
}