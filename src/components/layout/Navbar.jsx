import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Plogo3.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border backdrop-blur bg-grey/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-14 md:w-20 rounded-full" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-mono text-lg text-white">
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link to="/explore" className="hover:text-primary transition">
            Explore
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-grey/80 backdrop-blur">
          <div className="flex flex-col items-center gap-6 py-6 font-mono text-lg text-white">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to="/explore"
              onClick={() => setOpen(false)}
              className="hover:text-primary transition"
            >
              Explore
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
