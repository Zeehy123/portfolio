import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/Plogo3.png";
import { socials } from "../../data/socials";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/explore", label: "Projects" },
  { to: "/about", label: "About" },
];

const linkClass = ({ isActive }) =>
  `transition-colors ${
    isActive ? "text-white" : "text-muted hover:text-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main"
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Zainab Yusuf, home">
          <img src={logo} alt="" className="h-9 w-auto" />
          <span className="hidden font-heading text-lg font-bold sm:block">
            Zainab Yusuf
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={`mailto:${socials.email}`}
            className="rounded-full bg-primary px-5 py-2 text-white transition hover:bg-primaryLight hover:text-background"
          >
            Hire me
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-5 px-5 py-6 text-lg font-medium">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {l.label}
              </NavLink>
            ))}
            <a href={`mailto:${socials.email}`} className="text-primaryLight">
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
