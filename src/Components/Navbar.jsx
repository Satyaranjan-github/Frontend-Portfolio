import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container d-flex justify-content-between align-items-center h4 fw-bold nav_bar p-3">
      {/* Logo */}
      <div className="left fs-1">Satya</div>

      {/* Mobile Menu Toggle */}
      <button
        className="d-block d-md-none btn border-0"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="bi bi-list fs-2">Satya</i> {/* Bootstrap Icons */}
      </button>

      {/* Navigation Links */}
      <div className={`right d-flex gap-4 ${isMenuOpen ? 'd-flex flex-column align-items-center' : 'd-none d-md-flex'}`}>
        <a href="#" className="nav_items">Home</a>
        <a href="#skill" className="nav_items">Skill</a>
        <a href="#project" className="nav_items">Projects</a>
        <a href="#contact" className="nav_items">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
