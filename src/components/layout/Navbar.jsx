import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-sm tacking-wide text-text">
          zainab.dev
        </span>

        {/* Links */}
        <div className="flex gap-8 font-mono text-lg text-white">
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary transition">
            About
          </Link>
          <a className="hover:text-primary transition">Explore</a>
        </div>
      </div>
    </nav>
  );
}
