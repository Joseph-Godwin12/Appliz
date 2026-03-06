import { motion } from 'framer-motion';
import { 
  Users, BookOpen, FileText, CreditCard, UserCheck, Globe, Handshake, ShieldCheck
} from 'lucide-react';
import heroImg from '../assets/appliz3.jpg';

const Properties = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const stagger = (i) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#15803d]/10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * { font-family: 'Outfit', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        
        .green-line::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: #15803d;
          margin-top: 16px;
        }
        
        .green-border-card {
          border: 1px solid rgba(21,128,61,0.15);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .green-border-card:hover {
          border-color: rgba(21,128,61,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(21,128,61,0.08);
        }
        
        .section-label {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #15803d;
          font-weight: 600;
        }

        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .hero-gradient {
          background: linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 100%);
        }

        .pill-tag {
          border: 1px solid rgba(21,128,61,0.4);
          background: rgba(21,128,61,0.06);
        }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section id="properties-hero" className="relative min-h-screen md:min-h-[90vh] flex items-center grain-overlay overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})`, transform: 'scale(1.02)' }}
        />
        <div className="hero-gradient absolute inset-0 z-[2]" />

        <div className="relative z-10 px-4 sm:px-6 md:px-20 max-w-7xl w-full mx-auto py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <span className="pill-tag text-[#4ade80] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm inline-flex items-center gap-2">
              <ShieldCheck size={12} />
              Verified · Transparent Process · Real Results
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 max-w-4xl text-white"
          >
            Our Process,<br />
            <em className="text-[#4ade80]">Explained.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-12 font-light"
          >
            A completely transparent, step-by-step approach to verified real estate investment that prioritizes your security and capital preservation.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 1: HOW IT WORKS ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Our Process</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              A Simple, <em className="text-[#15803d]">Transparent</em> Process.
            </h2>
            <p className="text-gray-500 text-sm font-light mt-8 max-w-xl mx-auto leading-relaxed">
              Transparency builds trust faster than persuasion. Here is exactly how we work — no surprises, no hidden steps.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Steps */}
            <motion.div {...fadeInUp} className="space-y-3">
              {[
                { t: "Free Consultation", d: "We understand your investment goals, risk appetite, and timeline before recommending anything.", i: <Users size={18} /> },
                { t: "Investor Education & Property Selection", d: "We educate you on what makes land safe, then guide you to the right verified asset.", i: <BookOpen size={18} /> },
                { t: "Documentation Verification", d: "Every title deed, survey plan, government check, and receipt independently verified.", i: <FileText size={18} /> },
                { t: "Secure Payment & Allocation", d: "Documented, receipted transactions with clear allocation — no ambiguity.", i: <CreditCard size={18} /> },
                { t: "Handover & Post-Purchase Support", d: "Original documents delivered. We remain your support long after the transaction closes.", i: <UserCheck size={18} /> }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  {...stagger(idx)}
                  className="green-border-card bg-[#f9fafb] flex items-center gap-6 p-6 rounded-sm group cursor-default hover:bg-white"
                >
                  <span className="serif text-4xl font-light text-[#15803d]/20 w-8 shrink-0 group-hover:text-[#15803d]/50 transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-[#15803d] shrink-0">{step.i}</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{step.t}</p>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right column */}
            <motion.div {...fadeInUp} className="space-y-8">
              {/* Risk Reduction */}
              <div>
                <p className="section-label mb-5">What We Eliminate</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "100% verified documentation",
                    "Government acquisition checks",
                    "Transparent payment trail",
                    "Physical & remote inspections"
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      {...stagger(i)}
                      className="green-border-card bg-white p-4 rounded-sm text-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#15803d] mx-auto mb-2" />
                      <p className="text-gray-600 text-[10px] uppercase tracking-wider font-medium">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Diaspora Bridge */}
              <div className="relative rounded-sm overflow-hidden p-8 green-border-card bg-white">
                <div className="absolute inset-0 opacity-40" style={{
                  background: 'radial-gradient(ellipse at top right, rgba(21,128,61,0.08) 0%, transparent 70%)'
                }} />
                <div className="relative z-10">
                  <p className="section-label mb-3">Diaspora Investors</p>
                  <h4 className="serif text-2xl font-light mb-4 text-[#15803d] italic">
                    Your Trusted Bridge Home.
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    For Nigerians abroad, investing back home should feel empowering — not risky. APPLIZ eliminates distance anxiety through verified property, structured processes, and institutional transparency. You don't need to be physically present. Your documentation is secure. Your capital is protected.
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
                    <Globe size={14} className="text-[#15803d]" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">Africa · Europe · North America</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: GETTING STARTED ── */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Next Steps</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              Ready to <em className="text-[#15803d]">Get Started?</em>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Book a Consultation",
                description: "Let's discuss your investment goals, timeline, and risk preferences. No pressure — just honest conversation about what you need.",
                action: "Email us"
              },
              {
                number: "02",
                title: "Learn & Explore",
                description: "We'll educate you on what makes property safe, then show you verified assets that match your profile and budget.",
                action: "Explore properties"
              },
              {
                number: "03",
                title: "Complete & Own",
                description: "Once you've made your choice, we handle verification, documentation, and transfer. You own your asset with peace of mind.",
                action: "Own verified property"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="green-border-card bg-white p-8 rounded-sm flex flex-col"
              >
                <span className="serif text-6xl font-light text-[#15803d]/30 mb-4">{item.number}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm font-light mb-6 flex-grow">{item.description}</p>
                <button className="text-[#15803d] text-sm font-semibold uppercase tracking-wider hover:text-[#16a34a] transition-colors">
                  {item.action} →
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            {...fadeInUp}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 text-sm font-light mb-6">
              Questions? Reach out. We're here to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:applizresources@gmail.com">
                <button className="bg-[#15803d] text-white px-8 py-3 rounded-sm font-semibold text-sm tracking-wider uppercase hover:bg-[#16a34a] transition-colors">
                  Send Email
                </button>
              </a>
              <a href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-[#15803d] text-[#15803d] px-8 py-3 rounded-sm font-semibold text-sm tracking-wider uppercase hover:bg-[#15803d] hover:text-white transition-colors">
                  Chat on WhatsApp
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Properties;