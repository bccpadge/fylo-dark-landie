import logo from "../assets/images/logo.svg";
export const Logo = () => {
  return (
    <a href="#">
      <img className="h-auto w-28 lg:size-auto" src={logo} width="126" height="52" loading="lazy" alt="Fylo logo" />
    </a>
  )
}