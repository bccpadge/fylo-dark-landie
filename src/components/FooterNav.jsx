const footerLinks = [
  {
    id: 1,
    href: "#",
    name: "About Us"

  },
  {
    id: 2,
    href: "#",
    name: "Jobs"

  },
  {
    id: 3,
    href: "#",
    name: "Press"

  },
  {
    id: 4,
    href: "#",
    name: "Blog"

  },
  {
    id: 5,
    href: "#",
    name: "Contact Us",

  },
  {
    id: 6,
    href: "#",
    name: "Terms"

  },
  {
    id: 7,
    href: "#",
    name: "Privacy",

  },
]


export const FooterNav = () => {
  return (
    <nav aria-label="Footer Navigation">
      <ul className="grid gap-4 md:grid-cols-2 xl:ml-footerNav">
        {footerLinks.map((link, id) => (
          <li key={id}>
            <a href={link.href} className={`link ${link.name === "Blog" ? "mt-5 inline-block md:mt-0" : ""}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}