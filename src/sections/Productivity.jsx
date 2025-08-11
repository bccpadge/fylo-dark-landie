import productiveBanner from "../assets/images/illustration-stay-productive.png";
import { productiveData } from "../data/data";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";


export const Link = () => {
  return (
    <a href="#" className="w-fit text-teal-300  border-b-[1px] border-teal-300 inline-flex items-center gap-2 ">See how Fylo works
      <ArrowRightCircleIcon className="size-4" />
    </a>
  )
}


export const Productivity = () => {
  return (
    <section className="px-8 mx-auto max-w-productive grid gap-14 md:grid-cols-2 pt-productivity pb-[7.5rem]" aria-labelledby="productive-title">
      <img src={productiveBanner} width="615" height="465" loading="lazy" alt="" aria-hidden="true" />
      {productiveData.map((data) => (
        <div key={data.id} className="grid content-center gap-5">
          <h2 className="font-bold text-2xl md:text-[2.5rem] text-balance" id="productive-title">{data.title}</h2>
          <p>{data.paragraph1}</p>
          <p>{data.paragraph2}</p>
          <Link />
        </div>
      ))}
    </section>
  )
}