import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-army mb-3">Appliz</h2>
          <p className="text-gray-400 text-sm">
            A modern real estate platform helping you find homes that match
            your lifestyle and investment goals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Buy Property</li>
            <li>Rent Property</li>
            <li>Property Investment</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: info@appliz.com</li>
            <li>Phone: +234 800 000 0000</li>
            <li>Location: Nigeria</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Appliz. All rights reserved.
      </div>

    </footer>
  );
}
