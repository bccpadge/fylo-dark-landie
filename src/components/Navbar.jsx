const navbarLinks = [
  {
    id: 1,
    href: "#",
    name: "Features",
  },
  {
    id: 2,
    href: "#",
    name: "Team",
  },
  {
    id: 3,
    href: "#",
    name: "Sign In",
  },
]




export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-8 ">
        {navbarLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="link">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}