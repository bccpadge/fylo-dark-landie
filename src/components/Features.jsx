import { FeaturesList } from "../data/data";
export const Features = () => {
  return (
    <section className=" px-8 mx-auto max-w-features py-list" aria-labelledby="features-title">
      <h2 className="sr-only" id="features-title">Features Card List</h2>
      <ul className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] ">
        {FeaturesList.map((feature) => (
          <li key={feature.id}>
            <article className="grid gap-4 text-center">
              <img className="mx-auto" src={feature.icon} width={feature.width} height={feature.height} loading="lazy" alt="" aria-hidden="true" />
              <h3 className="text-[1.3rem]">
                <a href="#" className="font-bold">{feature.title}</a>
              </h3>
              <p>{feature.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}