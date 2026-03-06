import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, FileText, Landmark, Award, BookOpen, Video, 
  Zap, TrendingUp, Lock, Map, Handshake, Eye, AlertTriangle, 
  Building2, CheckCircle2, Globe
} from 'lucide-react';
import heroImg from '../assets/appliz2.jpg';

const About = () => {
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
        
        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(21,128,61,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        
        .section-label {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #15803d;
          font-weight: 600;
        }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section id="about-hero" className="relative min-h-screen md:min-h-[90vh] flex items-center grain-overlay overflow-hidden">
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
              Verified · Governance-Backed · Transparent
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 max-w-4xl text-white"
          >
            Building Trust In<br />
            <em className="text-[#4ade80]">African Real Estate</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-12 font-light"
          >
            Discover how APPLIZ transformed the real estate investment landscape with institutional governance, rigorous verification, and transparent processes designed to protect and grow your wealth.
          </motion.p>
        </div>
      </section>

      {/* ── WHY APPLIZ SECTION ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Our Advantage</p>
            <h2 className="serif text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Why Choose<br /><em className="text-[#15803d]">APPLIZ?</em>
            </h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto mb-8">
              We're not just a real estate company. We're a governance-first institution built to protect your capital and deliver peace of mind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="pill-tag text-[#15803d] text-xs tracking-[0.2em] uppercase font-semibold px-4 py-2 rounded-sm">
                Real Estate Investment & Development
              </span>
              <span className="pill-tag text-[#15803d] text-xs tracking-[0.2em] uppercase font-semibold px-4 py-2 rounded-sm">
                Capital Security. Structured Growth.
              </span>
              <span className="pill-tag text-[#15803d] text-xs tracking-[0.2em] uppercase font-semibold px-4 py-2 rounded-sm font-bold">
                You're Safe Here
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: "Institutional Verification",
                description: "Every property undergoes rigorous title verification against state registries and legal records."
              },
              {
                icon: <FileText size={28} />,
                title: "Complete Documentation",
                description: "All survey plans, allocation letters, and deeds are verified and organized for your ownership certainty."
              },
              {
                icon: <Award size={28} />,
                title: "Expert Due Diligence",
                description: "Third-party legal reviews ensure you own what the documents say you own — no surprises."
              },
              {
                icon: <Eye size={28} />,
                title: "On-Ground Verification",
                description: "Physical site inspections with photographic and video evidence delivered directly to you."
              },
              {
                icon: <Landmark size={28} />,
                title: "Government Screening",
                description: "All assets checked for government acquisition risks, road expansions, and utility corridors."
              },
              {
                icon: <Handshake size={28} />,
                title: "Investor Support",
                description: "We provide ongoing support from purchase through long-term property management."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="green-border-card bg-[#f9fafb] p-8 rounded-sm hover:bg-white transition-colors"
              >
                <span className="text-[#15803d] block mb-4">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats CTA */}
          <motion.div {...fadeInUp} className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#15803d]/5 to-[#16a34a]/5 border border-[#15803d]/20 rounded-sm p-12">
              <p className="text-gray-600 font-light mb-8">
                Our Proven Track Record
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: "100+", label: "Verified Properties Delivered" },
                  { value: "78+", label: "Investors Served" },
                  { value: "4+", label: "Years of Structured Operation" },
                  { value: "100%", label: "Documented Allocations" }
                ].map((stat, i) => (
                  <motion.div key={i} {...stagger(i)} className="text-center">
                    <p className="serif text-4xl font-light text-[#15803d] mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-xs uppercase tracking-widest font-medium leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROBLEM & SOLUTION SECTION ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* The systemic problem */}
            <motion.div {...fadeInUp}>
              <p className="section-label mb-4">The Market Problem</p>
              <h3 className="serif text-4xl md:text-5xl font-light mb-6 leading-tight green-line text-gray-900">
                Too Many Investors<br /><em className="text-[#15803d]">Lose Money.</em>
              </h3>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm font-light">
                Too many investors lose money not because real estate is bad — but because verification is weak. The problem is systemic, not personal. And it is solvable.
              </p>
              <div className="space-y-3">
                {[
                  { text: "Fraudulent and disputed land documents", icon: <AlertTriangle size={13} /> },
                  { text: "Title defects discovered after payment", icon: <FileText size={13} /> },
                  { text: "Government acquisition risks undisclosed", icon: <Landmark size={13} /> },
                  { text: "Developers disappearing after funds received", icon: <Building2 size={13} /> },
                  { text: "Diaspora investors buying blind, without control", icon: <Globe size={13} /> },
                  { text: "Emotional purchases with no due diligence", icon: <Eye size={13} /> }
                ].map((fear, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="flex items-center gap-4 py-4 border-b border-gray-100 group"
                  >
                    <span className="text-red-400 shrink-0">{fear.icon}</span>
                    <span className="text-gray-600 text-sm font-light group-hover:text-gray-900 transition-colors">{fear.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The APPLIZ solution positioning */}
            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <p className="section-label mb-4">The APPLIZ Solution</p>
              <h3 className="serif text-4xl md:text-5xl font-light mb-6 leading-tight green-line text-gray-900">
                We Exist to Solve<br /><em className="text-[#15803d]">A Trust Deficit.</em>
              </h3>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm font-light">
                APPLIZ was built out of a conviction that African real estate needed structure, not speculation. We position ourselves as the solution to systemic risk — an institution that eliminates the problems most investors accept as inevitable.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Title Verification Framework", icon: <ShieldCheck size={16} /> },
                  { title: "Legal Due Diligence", icon: <FileText size={16} /> },
                  { title: "Government Registry Checks", icon: <Landmark size={16} /> },
                  { title: "Documentation Audits", icon: <Award size={16} /> }
                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="green-border-card relative bg-[#f8fdf9] p-5 rounded-sm"
                  >
                    <div className="stat-card absolute inset-0 rounded-sm" />
                    <span className="text-[#15803d] mb-3 block">{pillar.icon}</span>
                    <p className="text-xs font-medium text-gray-700 leading-snug uppercase tracking-wide">{pillar.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE APPLIZ SYSTEM ── */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Our System</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              Preservation Is<br /><em className="text-[#15803d]">Non-Negotiable.</em>
            </h2>
            <p className="text-gray-500 text-sm font-light mt-8 max-w-xl mx-auto leading-relaxed">
              We don't sell plots. We provide institutional-grade property investment backed by governance, verification, and transparency at every step.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Institutional pillars */}
            <motion.div {...fadeInUp}>
              <p className="section-label mb-6">Governance-First Framework</p>
              <div className="space-y-4">
                {[
                  { t: "Title Verification Framework", d: "Every asset is cross-referenced with state land registries and legal records before presentation to any investor.", i: <ShieldCheck size={18} /> },
                  { t: "Independent Legal Due Diligence", d: "Third-party legal review on all property documentation — you own what the documents say you own.", i: <FileText size={18} /> },
                  { t: "Government Acquisition Screening", d: "All assets screened against government acquisition lists, road expansions, and utility corridors.", i: <Landmark size={18} /> },
                  { t: "Physical & Remote Site Inspections", d: "On-the-ground verification with photographic and video evidence delivered to every investor.", i: <Eye size={18} /> },
                  { t: "Full Documentation Audit Trail", d: "Survey plans, allocation letters, receipts, and title deeds — organised and delivered to you.", i: <Award size={18} /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="green-border-card bg-white flex items-start gap-5 p-6 rounded-sm group"
                  >
                    <span className="text-[#15803d] shrink-0 mt-0.5">{item.i}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-900 mb-1">{item.t}</p>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education-led selling */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <p className="section-label mb-4">Our Approach</p>
                <h3 className="serif text-4xl font-light leading-tight mb-6 text-gray-900">
                  We Sell Through<br /><em className="text-[#15803d]">Education.</em>
                </h3>
                <blockquote className="border-l-2 border-[#15803d] pl-6 my-8">
                  <p className="serif text-xl text-gray-600 italic font-light leading-relaxed">
                    "Appreciation is optional.<br />Preservation is non-negotiable."
                  </p>
                </blockquote>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Before we sell you land, we educate you on what makes it safe. Our clients understand what they own, why it's secure, and how to grow their wealth responsibly. Informed investors make better decisions — and better decisions build lasting wealth.
                </p>
              </div>

              {/* Philosophy cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Safety Before Returns", icon: <Lock size={16} /> },
                  { title: "Preservation Before Appreciation", icon: <ShieldCheck size={16} /> },
                  { title: "Control Is Confidence", icon: <Map size={16} /> },
                  { title: "Trust Through Delivery", icon: <Handshake size={16} /> }
                ].map((belief, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="green-border-card relative bg-[#f8fdf9] p-5 rounded-sm"
                  >
                    <div className="stat-card absolute inset-0 rounded-sm" />
                    <span className="text-[#15803d] mb-3 block">{belief.icon}</span>
                    <p className="text-xs font-medium text-gray-700 leading-snug uppercase tracking-wide">{belief.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRANSFORMATION STORY ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Client Outcomes</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              The <em className="text-[#15803d]">APPLIZ Difference.</em>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {/* Before */}
            <motion.div {...fadeInUp} className="transformation-before rounded-sm p-10" style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(239,68,68,0.01) 100%)',
              border: '1px solid rgba(239,68,68,0.15)'
            }}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-red-400 font-semibold mb-6">Before APPLIZ</p>
              <div className="space-y-5">
                {[
                  "Fear — not knowing if the land is legitimate",
                  "Distance anxiety — no trusted eyes on the ground",
                  "Documentation doubt — unclear what you actually own",
                  "Sleepless nights wondering about your capital",
                  "Pressure to trust strangers with your savings"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-300 shrink-0 mt-2" />
                    <span className="text-gray-500 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div {...fadeInUp} className="transformation-after rounded-sm p-10" style={{
              background: 'linear-gradient(135deg, rgba(21,128,61,0.06) 0%, rgba(21,128,61,0.01) 100%)',
              border: '1px solid rgba(21,128,61,0.2)'
            }}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#15803d] font-semibold mb-6">After APPLIZ</p>
              <div className="space-y-5">
                {[
                  "Confidence — every document verified and in your hands",
                  "Remote control — we are your trusted eyes on the ground",
                  "Verified ownership — title clear and legally protected",
                  "Asset security — capital preserved with institutional process",
                  "Peace of mind — the real product we deliver"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={14} className="text-[#15803d] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Track record */}
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="section-label mb-6 text-center">Proven Track Record</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: <CheckCircle2 size={20} />, label: "Repeat Buyers", value: "68% of our clients invest again" },
                { icon: <Globe size={20} />, label: "Global Client Base", value: "Africa, Europe & North America" },
                { icon: <Award size={20} />, label: "Consistent Delivery", value: "4+ Years. 102 Plots. 100% Verified." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...stagger(i)}
                  className="green-border-card relative bg-white flex items-center gap-6 p-6 rounded-sm overflow-hidden"
                >
                  <div className="stat-card absolute inset-0" />
                  <span className="text-[#15803d] shrink-0 relative z-10">{item.icon}</span>
                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                    <p className="text-gray-900 font-semibold text-sm leading-snug">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: FOUNDER & VISION ── */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Founder Story */}
          <motion.div {...fadeInUp}>
            <p className="section-label mb-4">The Founder</p>
            <h3 className="serif text-4xl md:text-5xl font-light mb-3 leading-tight text-gray-900">
              Daniel Ejikeme
            </h3>
            <p className="text-[#15803d] text-sm mb-8 font-light tracking-wider uppercase">Systems Thinker · Institution Builder · Real Estate Educator</p>
            <p className="text-gray-500 text-sm leading-relaxed font-light mb-8">
              Daniel Ejikeme built APPLIZ out of a conviction that African real estate needed structure, not speculation. With a systems-driven background across operations, education, and investment strategy, he set out to build a governance-first property institution designed to protect investors before rewarding them.
            </p>
            <div className="space-y-3">
              {[
                { t: "Nigerian Real Estate Safety Masterclasses", i: <BookOpen size={16} /> },
                { t: "Diaspora training — UK, US, Canada", i: <Video size={16} /> },
                { t: "Education-led investing insights & workshops", i: <Zap size={16} /> },
                { t: "Capital preservation frameworks for African markets", i: <TrendingUp size={16} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...stagger(i)}
                  className="green-border-card bg-white flex items-center gap-4 p-5 rounded-sm"
                >
                  <span className="text-[#15803d]">{item.i}</span>
                  <span className="text-gray-600 text-sm font-light">{item.t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision & Legacy */}
          <motion.div {...fadeInUp} className="flex flex-col justify-center">
            <p className="section-label mb-4">Our Vision</p>
            <h3 className="serif text-4xl md:text-5xl font-light mb-6 leading-tight green-line text-gray-900">
              Africa's Most<br /><em className="text-[#15803d]">Trusted Institution.</em>
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8 font-light text-sm">
              We are building Africa's most trusted real estate investment institution — not just a brokerage. APPLIZ was founded to solve the trust deficit in Nigerian real estate. Many Nigerians lose money not to bad luck, but to bad systems. Our long-term vision is to become the gold standard for verified, secure, governance-backed land assets across Southeast and South-South Nigeria.
            </p>
            <div className="relative p-8 rounded-sm overflow-hidden mb-6" style={{
              background: 'linear-gradient(135deg, rgba(21,128,61,0.05) 0%, rgba(21,128,61,0.01) 100%)',
              border: '1px solid rgba(21,128,61,0.15)'
            }}>
              <div className="absolute top-4 left-6 text-[#15803d] text-5xl serif font-light opacity-20">"</div>
              <p className="serif text-lg text-gray-600 italic font-light leading-relaxed pt-4 relative z-10">
                We are an institution that protects capital first — because appreciation only matters when the asset is secure.
              </p>
            </div>
            {/* Tagline */}
            <div className="green-border-card bg-[#f8fdf9] p-6 rounded-sm text-center">
              <p className="section-label mb-2">Our Philosophy</p>
              <p className="serif text-2xl font-light text-[#15803d] italic">Preserving Wealth. Structuring Growth.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;