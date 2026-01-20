import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-50">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-950 flex items-center justify-center rounded-lg">
            <Home className="text-white" size={24} />
          </div>
          <div>
            <h1 className="font-bold text-xl leading-tight">
              APPLIZ PROPERTIES
            </h1>
            <p className="text-[10px] tracking-widest text-gray-500">
              RC812094
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium text-sm">
          <Link
            to="/"
            className={
              isActive("/")
                ? "text-green-950 border-b-2 border-green-950"
                : "hover:text-green-800"
            }
          >
            Home
          </Link>

          <Link
            to="/about"
            className={
              isActive("/about")
                ? "text-green-950 border-b-2 border-green-950"
                : "hover:text-green-800"
            }
          >
            About Us
          </Link>

          <Link to="/properties" className="hover:text-green-800">
            Services
          </Link>

          <Link to="/testimonials" className="hover:text-green-800">
            Testimonials
          </Link>

          <Link to="/contact" className="hover:text-green-800">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col space-y-6 font-medium text-sm">
          
          <button
            className="self-end"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/properties" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
