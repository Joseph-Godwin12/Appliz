import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-green-950"
            : "bg-green-950/30 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Appliz</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-950 text-white z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col space-y-6">
          <button
            className="self-end text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/properties" onClick={() => setOpen(false)}>Properties</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
