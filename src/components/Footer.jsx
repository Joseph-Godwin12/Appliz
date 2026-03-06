//import { Link } from "react-router-dom";
import { MapPin, Phone, Globe, Calendar, MessageCircle } from "lucide-react";
import logo from "../assets/applizlogo.jpg";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 pt-24 pb-12 px-8 md:px-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * { font-family: 'Outfit', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        
        .btn-primary {
          background: linear-gradient(135deg, #15803d 0%, #16a34a 50%, #15803d 100%);
          background-size: 200% 200%;
          transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .btn-primary:hover {
          background-position: right center;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(21,128,61,0.3);
        }

        .section-label {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #15803d;
          font-weight: 600;
        }
      `}</style>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 pb-16 border-b border-white/5">
            {/* Left */}
            <div className="lg:col-span-5">
              <img src={logo} alt="Appliz Logo" className="h-12 w-auto mb-6 opacity-90" />
              <p className="text-gray-500 text-xs mb-2 font-light tracking-widest uppercase">Registered Business</p>
              <p className="text-[#4ade80] font-mono text-sm mb-8">RC812094</p>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3 items-start">
                  <MapPin className="text-[#4ade80] shrink-0 mt-0.5" size={15} />
                  <p className="text-gray-400 font-light leading-relaxed">24 Ekwema Crescent Cafe One Mesky Plaza Ikenegbu Layout, Owerri, Imo State, Nigeria.</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="text-[#4ade80] shrink-0" size={15} />
                  <p className="text-gray-400 font-light">+234 703 097 8492</p>
                </div>
                <div className="flex gap-3 items-center">
                  <Globe className="text-[#4ade80] shrink-0" size={15} />
                  <p className="text-gray-400 font-light">Southeast & South-South Nigeria</p>
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <div className="lg:col-span-7 flex items-center justify-end">
              <div className="w-full max-w-md">
                <p className="section-label mb-3" style={{ color: '#4ade80' }}>Begin Your Journey</p>
                <h4 className="serif text-3xl font-light mb-4 leading-tight text-white">
                  Own Verified Assets.<br /><em className="text-[#4ade80]">Rest in Peace of Mind.</em>
                </h4>
                <p className="text-gray-500 text-xs font-light mb-8 leading-relaxed">
                  Whether you're investing locally or from the diaspora — we are your trusted bridge to verified, governance-backed real estate.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:applizresources@gmail.com?subject=Free%20Consultation%20Request&body=Hello%20Appliz%20Properties,%0A%0AI%20would%20like%20to%20book%20a%20free%20consultation.%0A%0AThank%20you."
                    className="block"
                  >
                    <button className="btn-primary text-white w-full py-4 rounded-sm font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2">
                      <Calendar size={15} />
                      Book a Free Consultation
                    </button>
                  </a>
                  <a href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer" className="block">
                    <button
                      className="w-full py-4 rounded-sm font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 text-gray-300 hover:text-white"
                      style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(74,222,128,0.5)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      <MessageCircle size={15} />
                      Chat on WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-medium">
              © 2026 Appliz Properties
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">
              Preserving Wealth. Structuring Growth.
            </p>
          </div>
        </div>
      </footer>
  );
}
