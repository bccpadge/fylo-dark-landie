export const Testimonial = ({ author, position, testimonial, image, index, altText }) => {
  return (
    <figure className="bg-testimonial max-w-sm grid gap-4 rounded-sm p-7 testimonial" key={index}>
      <blockquote>{testimonial}</blockquote>
      <figcaption className="flex gap-3 items-center">
        <img className="rounded-full" src={image} width="30" height="30" loading="lazy" alt={altText} />
        <div >
          <h3 className="font-bold">
            <a href="#">{author}</a>
          </h3>
          <small>{position}</small>
        </div>
      </figcaption>
    </figure>
  )
}