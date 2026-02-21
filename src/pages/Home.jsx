import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MessageCircle, Home, MapPin, ShieldCheck, 
  Globe, CheckCircle2, Search, FileText, CreditCard, UserCheck, 
  Lock, Zap, Star, Phone, Award, Map, Users, Video, BookOpen,
  TrendingUp, Eye, Handshake, AlertTriangle, Building2, Landmark
} from 'lucide-react';
import heroImg from '../assets/appliz1.jpg';
import logo from '../assets/applizlogo.jpg';

const LandingPage = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const linkClass = (id) =>
    `text-sm tracking-widest uppercase font-medium transition-all duration-300 ${
      active === id
        ? "text-[#15803d] border-b border-[#15803d] pb-0.5"
        : "text-gray-500 hover:text-[#15803d]"
    }`;

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
        
        .nav-blur {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(21,128,61,0.1);
        }
        
        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
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
        
        .hero-gradient {
          background: linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.35) 100%);
        }
        
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
        
        .pill-tag {
          border: 1px solid rgba(21,128,61,0.4);
          background: rgba(21,128,61,0.06);
        }

        .section-label {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #15803d;
          font-weight: 600;
        }

        .stat-bar-bg {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(21,128,61,0.1);
        }

        .transformation-before {
          background: linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(239,68,68,0.01) 100%);
          border: 1px solid rgba(239,68,68,0.15);
        }
        .transformation-after {
          background: linear-gradient(135deg, rgba(21,128,61,0.06) 0%, rgba(21,128,61,0.01) 100%);
          border: 1px solid rgba(21,128,61,0.2);
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav-blur flex items-center justify-between px-8 sticky top-0 z-50 md:px-20" style={{ height: '52px', overflow: 'hidden' }}>
        <div className="flex items-center" style={{ height: '52px', overflow: 'hidden' }}>
          <img src={logo} alt="Appliz Logo" className="h-44 w-auto" style={{ marginTop: '6px' }} />
        </div>
        <div className="hidden md:flex items-center gap-10">
          {["home","solution","process","about","contact"].map(id => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {id === "home" ? "Home" : id === "solution" ? "Our System" : id === "process" ? "Process" : id === "about" ? "About" : "Contact"}
            </a>
          ))}
        </div>
        <a href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <button className="btn-primary text-white text-xs tracking-widest uppercase font-semibold px-5 py-2 rounded-sm">
            Get Started
          </button>
        </a>
      </nav>

      {/* ── SECTION 1: HERO NARRATIVE — "Real Estate That Protects Your Wealth Before It Grows It." ── */}
      <section id="home" className="relative min-h-screen md:min-h-[92vh] flex items-center grain-overlay overflow-hidden">
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

          {/* Hero Headline from strategic doc */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 max-w-4xl text-white"
          >
            Real Estate That<br />
            <em className="text-[#4ade80]">Protects Your Wealth</em><br />
            Before It Grows It.
          </motion.h1>

          {/* Hero Subtext from strategic doc */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-12 font-light"
          >
            APPLIZ helps investors at home and abroad acquire verified, governance-backed property designed for capital preservation and long-term appreciation — across Southeast and South-South Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-3"
          >
           ` {/* <a href="mailto:applizresources@gmail.com" className="w-full sm:w-auto">
              <button className="btn-primary text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-sm flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <Calendar size={16} />
                Book Free Consultation
              </button>
            </a>` */}
            <a href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="border border-white/20 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-sm flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-medium tracking-wider uppercase hover:border-[#4ade80]/60 hover:text-[#4ade80] transition-all duration-300">
                <MessageCircle size={16} />
                Chat on WhatsApp
              </button>
            </a>
          </motion.div>
        </div>

        {/* Floating stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 z-10 stat-bar-bg"
        >
          <div className="max-w-7xl mx-auto px-8 md:px-20 py-5 grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { label: "Plots Sold", value: "102", icon: <Home size={14}/> },
              { label: "sqm Transacted", value: "47,430+", icon: <MapPin size={14}/> },
              { label: "Clients Served", value: "54", icon: <Users size={14}/> },
              { label: "Repeat Buyers", value: "68%", icon: <Star size={14}/> },
              { label: "Experience", value: "4+ Yrs", icon: <ShieldCheck size={14}/> },
              { label: "Verified Docs", value: "100%", icon: <Globe size={14}/> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-[#15803d] mb-1">{stat.icon}</span>
                <span className="text-gray-900 font-bold text-lg leading-none">{stat.value}</span>
                <span className="text-gray-400 text-[9px] uppercase tracking-widest mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: THE MARKET PROBLEM STORY ── */}
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

      {/* ── SECTION 3: THE APPLIZ SYSTEM — Institutional Process ── */}
      <section id="solution" className="py-32 px-8 md:px-20 bg-[#f9fafb]">
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

      {/* ── SECTION 4: CUSTOMER TRANSFORMATION STORY ── */}
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
            <motion.div {...fadeInUp} className="transformation-before rounded-sm p-10">
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
            <motion.div {...fadeInUp} className="transformation-after rounded-sm p-10">
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

      {/* ── SECTION 5: PROCESS TRANSPARENCY STORY ── */}
      <section id="process" className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">How It Works</p>
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
                  className="green-border-card bg-white flex items-center gap-6 p-6 rounded-sm group cursor-default"
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
                      className="green-border-card bg-[#f8fdf9] p-4 rounded-sm text-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#15803d] mx-auto mb-2" />
                      <p className="text-gray-600 text-[10px] uppercase tracking-wider font-medium">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Diaspora Bridge */}
              <div className="relative rounded-sm overflow-hidden p-8 green-border-card bg-[#f8fdf9]">
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

      {/* ── SECTION 6: VISION & LEGACY — Founder Story & Institution Builder ── */}
      <section id="about" className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Founder Story — The Trust Anchor */}
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
                  className="green-border-card bg-[#f8fdf9] flex items-center gap-4 p-5 rounded-sm"
                >
                  <span className="text-[#15803d]">{item.i}</span>
                  <span className="text-gray-600 text-sm font-light">{item.t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision & Legacy — Institution, not brokerage */}
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
            {/* Tagline — philosophical spine */}
            <div className="green-border-card bg-[#f8fdf9] p-6 rounded-sm text-center">
              <p className="section-label mb-2">Our Philosophy</p>
              <p className="serif text-2xl font-light text-[#15803d] italic">Preserving Wealth. Structuring Growth.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER / CONTACT ── */}
      <footer id="contact" className="bg-gray-900 pt-24 pb-12 px-8 md:px-20">
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
    </div>
  );
};

export default LandingPage;