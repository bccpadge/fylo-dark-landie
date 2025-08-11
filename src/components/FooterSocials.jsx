import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const FooterSocials = () => {
  return (
    <ul className="flex justify-center gap-4 *:text-lg">
      <li className="grid border border-white rounded-full size-10 place-content-center hover:bg-facebook hover:border-none motion-safe:transition motion-safe:duration-300 motion-reduce:transition-none" >
        <a href="#" aria-label="Facebook profile for Fylo">
          <FaFacebookF title="Facebook" />
        </a>
      </li>
      <li className="grid border border-white rounded-full size-10 place-content-center hover:bg-twitter hover:border-none motion-safe:transition motion-safe:duration-300 motion-reduce:transition-none">
        <a href="#" aria-label="Twitter profile for Fylo">
          <FaTwitter title="Twitter" />
        </a>
      </li>
      <li className="grid border border-white rounded-full size-10 place-content-center instagram motion-safe:transition motion-safe:duration-300 motion-reduce:transition-none">
        <a href="#" aria-label="Instagram profile for Fylo">
          <FaInstagram title="Instagram" />
        </a>
      </li>
    </ul>
  )
}

