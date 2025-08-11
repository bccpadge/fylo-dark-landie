export const CustomButton = ({ isLink, href, text }) => {
  return (
    isLink ? (
      <a href={href} className="button w-button mx-auto">{text}</a>
    ) : (
      <button className="button">{text}</button>
    )
  )
}