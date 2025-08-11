import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = ({ navbarLinks }) => {
  return (
    <header className="flex items-center gap-8  px-8 mx-auto max-w-desktop pt-mobile flex-flow wrapper font-raleway">
      <a href="#main" className="absolute top-0 left-0 z-50 transition -translate-y-full focus:translate-y-0">Skip to main content</a>
      <Logo />
      <Navbar navbarLinks={navbarLinks} />
    </header>
  )
}