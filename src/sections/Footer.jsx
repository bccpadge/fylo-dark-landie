import { FooterNav } from "../components/FooterNav";
import { FooterSocials } from "../components/FooterSocials";
import { Logo } from "../components/Logo";



export const Footer = () => {
  return (
    <footer className="pt-[12.375rem] pb-[4.375rem] bg-footer">
      <div className="grid gap-4 px-8 mx-auto max-w-desktop">
        <Logo />
        <div className="grid gap-[1.375rem]  lg:grid-cols-[1fr_1fr_auto] xl:grid-cols-[auto_1fr_auto]">
          <address className="not-italic flex flex-wrap gap-x-[7.5rem] gap-y-4 mb-6 md:mb-0">
            <p className="text max-w-[38ch]  mt-4 md:mt-0 md:flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className="flex flex-col gap-[1.375rem]">
              <a href="tel:+1-543-123-4567" className="phone footer__link">+1-543-123-4567</a>
              <a href="mailto:example@fylo.com" className="email footer__link">example@fylo.com</a>
            </div>
          </address>
          <FooterNav />
          <FooterSocials />
        </div>
      </div>
    </footer>
  )
}