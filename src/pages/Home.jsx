import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Home as HomeIcon, MapPin, ShieldCheck, Users, Star, Globe,
  FileText, Landmark, Award, BookOpen, Video, Zap, TrendingUp, 
  Lock, Map, Handshake, Eye, AlertTriangle, Building2, CheckCircle2,
  Phone, Mail, Clock, MessageCircle, Calendar, Sprout
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/appliz1.jpg';
import img from '../assets/appliz5.jpg';   // man holding pepper — Testimonial section
import img2 from '../assets/appliz6.jpg';  // map / corridor — Projects section

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:applizresources@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

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

        /* Hero: strong diagonal split — text side very dark, image side vivid */
        .hero-gradient {
          background: linear-gradient(
            108deg,
            rgba(0,0,0,0.93) 0%,
            rgba(0,0,0,0.78) 35%,
            rgba(0,0,0,0.38) 62%,
            rgba(0,0,0,0.08) 100%
          );
        }

        /* Ken Burns on hero bg */
        @keyframes kenburns {
          from { transform: scale(1.0) translateX(0px) translateY(0px); }
          to   { transform: scale(1.08) translateX(-10px) translateY(-6px); }
        }
        .hero-bg-img {
          animation: kenburns 16s ease-in-out infinite alternate;
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

        .stat-bar-bg {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-top: 1px solid rgba(21,128,61,0.12);
          box-shadow: 0 -6px 32px rgba(0,0,0,0.07);
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

        /* ── Pepper image (img) ── */
        .pepper-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .pepper-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }
        .pepper-img-wrap:hover img { transform: scale(1.05); }
        /* Rich bottom gradient — client name / caption can sit here */
        .pepper-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,40,20,0.72) 0%,
            rgba(10,40,20,0.18) 45%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* ── Map / corridor image (img2) ── */
        .map-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .map-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }
        .map-img-wrap:hover img { transform: scale(1.04); }
        /* Subtle green tint overlay */
        .map-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(21,128,61,0.22) 0%,
            transparent 55%,
            rgba(0,0,0,0.55) 100%
          );
          pointer-events: none;
        }

        /* Floating WhatsApp */
        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          background: #25D366;
          color: white;
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 4px 24px rgba(37,211,102,0.4);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }
        .whatsapp-float:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(37,211,102,0.5);
        }
      `}</style>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>

      {/* ═══════════════════════════════════════════
          SECTION 1 · HERO
      ═══════════════════════════════════════════ */}
      {/* Hero + Stats — wrapper allows stats to flow below on mobile, overlap on md+ */}
      <div className="relative">
        <section id="home" className="relative min-h-screen md:min-h-[95vh] flex items-center grain-overlay overflow-hidden">

          {/* Hero background — Ken Burns */}
          <div
            className="absolute inset-0 bg-cover bg-center hero-bg-img"
            style={{ backgroundImage: `url(${heroImg})` }}
          />

          {/* Diagonal gradient */}
          <div className="hero-gradient absolute inset-0 z-[2]" />

          {/* Bottom vignette — only md+ where stats bar overlaps */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 h-40 z-[3]"
            style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.18) 0%, transparent 100%)' }}
          />

          {/* Hero content — extra bottom padding on mobile so nothing hides behind stats */}
          <div className="relative z-10 px-4 sm:px-6 md:px-20 max-w-7xl w-full mx-auto pt-20 sm:pt-24 md:pt-32 pb-14 sm:pb-16 md:pb-44">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-7">
              <span className="pill-tag text-[#4ade80] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-semibold px-4 py-2 rounded-sm inline-flex items-center gap-2">
                <ShieldCheck size={12} />
                Verified · Governance-Backed · Transparent
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1 }}
              className="serif text-4xl sm:text-5xl md:text-[5rem] lg:text-[6rem] font-light leading-[1.06] mb-7 max-w-3xl text-white"
            >
              Secure Strategic<br />Assets <em className="text-[#4ade80]">in Nigeria.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-4 font-light"
            >
              Appliz Homes &amp; Properties Ltd <span className="text-gray-500 text-sm">(RC: 8132094)</span> has helped individuals and diaspora investors acquire verified properties in emerging economic corridors — positioned for long-term growth and generational value.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }}
              className="text-[#4ade80] text-xs font-semibold tracking-[0.28em] uppercase mb-10 sm:mb-14 flex items-center gap-2"
            >
              <ShieldCheck size={12} /> You're Safe Here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
               <a href="https://drive.google.com/file/d/1acgFIeNNq_jaXdCXisFiAglk9oPeshlD/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"> 
                <button className="btn-primary text-white w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  View Current Projects
                </button>
              </a>
              
              <a href="https://wa.me/2347030978492?text=I%20would%20like%20to%20book%20a%20property%20inspection" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="border border-white/25 text-white w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm flex items-center justify-center gap-3 text-xs sm:text-sm font-medium tracking-wider uppercase hover:border-[#4ade80]/70 hover:text-[#4ade80] transition-all duration-300">
                  <Calendar size={14} /> Book an Inspection
                </button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Stats bar
            Mobile (< md):  normal flow, sits below the hero, white bg, no overlap
            Desktop (≥ md): absolute, pinned to hero bottom edge, overlaps as designed  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-10 stat-bar-bg"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 md:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-6 mb-3 md:mb-2">
              {[
                { label: "Plots Successfully Secured", value: "100+", icon: <HomeIcon size={14}/> },
                { label: "Clients Served",              value: "78+",  icon: <Users size={14}/> },
                { label: "Years of Trusted Operations", value: "4+",   icon: <ShieldCheck size={14}/> },
                { label: "Verified Documentation",      value: "100%", icon: <CheckCircle2 size={14}/> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="text-[#15803d] mb-1">{stat.icon}</span>
                  <span className="text-gray-900 font-bold text-xl leading-none">{stat.value}</span>
                  <span className="text-gray-400 text-[9px] uppercase tracking-widest mt-1.5 font-medium leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-[10px] tracking-wider uppercase font-medium pb-0.5">
              Trusted by investors who value security, transparency, and long-term positioning.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 3 · WHY APPLIZ
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">

            <motion.div {...fadeInUp}>
              <p className="section-label mb-4">Why Investors Choose Appliz</p>
              <h3 className="serif text-4xl md:text-5xl font-light mb-6 leading-tight green-line text-gray-900">
                Investors Buy Real Estate<br /><em className="text-[#15803d]">For Different Reasons.</em>
              </h3>
              <div className="space-y-3 mb-10">
                {[
                  { text: "To preserve wealth",                                       icon: <Lock size={13} /> },
                  { text: "To grow their investment portfolio",                        icon: <TrendingUp size={13} /> },
                  { text: "To secure assets for their children",                       icon: <Users size={13} /> },
                  { text: "To diversify and strengthen long-term financial security",  icon: <ShieldCheck size={13} /> },
                ].map((r, i) => (
                  <motion.div key={i} {...stagger(i)} className="flex items-center gap-4 py-4 border-b border-gray-100 group">
                    <span className="text-[#15803d] shrink-0">{r.icon}</span>
                    <span className="text-gray-600 text-sm font-light group-hover:text-gray-900 transition-colors">{r.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                At Appliz, we help investors achieve these goals through strategic property selection and secure acquisition processes.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <p className="section-label mb-4">Our Approach</p>
              <div className="space-y-4">
                {[
                  { title: "Verified Documentation",           desc: "Every property undergoes strict verification to ensure clear ownership and legal security.",                    icon: <FileText size={16} /> },
                  { title: "Strategic Location Research",      desc: "We focus on locations positioned near infrastructure, industry, and future development corridors.",             icon: <Map size={16} /> },
                  { title: "Transparent Acquisition Process",  desc: "From inspection to documentation, every step is structured for clarity and investor confidence.",                icon: <Eye size={16} /> },
                  { title: "Long-Term Investor Relationships", desc: "Many of our clients return to acquire additional properties — a reflection of the trust we build over time.", icon: <Handshake size={16} /> },
                ].map((item, i) => (
                  <motion.div key={i} {...stagger(i)} className="green-border-card bg-[#f8fdf9] flex items-start gap-5 p-6 rounded-sm">
                    <span className="text-[#15803d] shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-900 mb-1">{item.title}</p>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-sm" style={{
                background: 'linear-gradient(135deg, rgba(21,128,61,0.05) 0%, rgba(21,128,61,0.01) 100%)',
                border: '1px solid rgba(21,128,61,0.15)'
              }}>
                <p className="serif text-lg text-gray-700 italic font-light leading-relaxed mb-2">
                  "With Appliz, you are not just buying properties. You are securing a strategic asset for the future."
                </p>
                <p className="text-[#15803d] font-semibold text-xs tracking-wider uppercase">You're Safe Here.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 · CURRENT PROJECTS
          img2 (map / corridor book) — right panel
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="section-label mb-4">Current Investment Opportunities</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              Strategic Growth<br /><em className="text-[#15803d]">Corridors.</em>
            </h2>
            <p className="text-gray-500 text-sm font-light mt-8 max-w-xl mx-auto leading-relaxed">
              Explore our currently available developments located in strategic growth corridors across Southeast Nigeria.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="green-border-card bg-white rounded-sm overflow-hidden max-w-5xl mx-auto shadow-md">

            {/* Card header bar */}
            <div className="bg-[#15803d] px-8 py-4 flex items-center justify-between">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-semibold">Featured Project</span>
              <span className="text-[#4ade80] text-[10px] uppercase tracking-[0.3em] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block animate-pulse" />
                Now Available
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-0">

              {/* Left: project text */}
              <div className="p-10">
                <p className="section-label mb-3">Imo State · Southeast Nigeria</p>
                <h3 className="serif text-3xl md:text-4xl font-light mb-4 text-gray-900 leading-tight">
                  The Flourish City<br /><em className="text-[#15803d]">– Ohoba</em>
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                  A landmark development positioned within the Ohaji–Egbema energy and industrial corridor, near major infrastructure projects including the ANOH Gas Processing Plant and Waltersmith Modular Refinery.
                </p>
                <p className="section-label mb-3">Ideal For Investors Interested In:</p>
                <div className="space-y-2 mb-8">
                  {[
                    "Land banking for Future Resale",
                    "Future residential & commercial development",
                    "Strategic Succession / Family Asset",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={13} className="text-[#15803d] shrink-0" />
                      <span className="text-gray-600 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
                 <a href="https://drive.google.com/file/d/1acgFIeNNq_jaXdCXisFiAglk9oPeshlD/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"> 
                  <button className="btn-primary text-white px-8 py-3 rounded-sm font-semibold text-xs tracking-wider uppercase">
                    View Project
                  </button>
                </a>
              </div>

              {/* Right: img2 — map/corridor image */}
              <div className="map-img-wrap" style={{ minHeight: '420px' }}>
                <img
                  src={img2}
                  alt="ANOH–Waltersmith industrial corridor map showing The Flourish City location in Ohoba"
                />
                {/* Overlay caption at bottom of map */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10 px-6 py-5"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)' }}
                >
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#4ade80] font-semibold mb-1">Infrastructure Corridor</p>
                  <p className="text-white text-xs font-light leading-snug">ANOH Gas Plant · Waltersmith Refinery · Ohaji–Egbema Hub</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 · INVESTMENT PHILOSOPHY
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <p className="section-label mb-4">Our Investment Philosophy</p>
              <h3 className="serif text-4xl md:text-5xl font-light mb-6 leading-tight green-line text-gray-900">
                Position Early.<br /><em className="text-[#15803d]">Position Strategically.</em>
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm font-light">
                Real estate rewards those who position early and strategically.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm font-light">
                At Appliz, we identify locations where infrastructure, industry, and economic activity are expanding. By helping investors secure land in these areas early, we enable them to benefit from long-term appreciation and asset security.
              </p>
              <blockquote className="border-l-2 border-[#15803d] pl-6">
                <p className="serif text-xl text-gray-600 italic font-light leading-relaxed">
                  "Appreciation is optional.<br />Preservation is non-negotiable."
                </p>
              </blockquote>
            </motion.div>
            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Safety Before Returns",            icon: <Lock size={16} /> },
                  { title: "Preservation Before Appreciation", icon: <ShieldCheck size={16} /> },
                  { title: "Control Is Confidence",            icon: <Map size={16} /> },
                  { title: "Trust Through Delivery",           icon: <Handshake size={16} /> }
                ].map((belief, i) => (
                  <motion.div key={i} {...stagger(i)} className="green-border-card relative bg-[#f8fdf9] p-5 rounded-sm">
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

      {/* ═══════════════════════════════════════════
          SECTION 6 · DIASPORA
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Diaspora Investors</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              Buy Property from<br /><em className="text-[#15803d]">Anywhere in the World.</em>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm font-light">
                Many of our clients live outside Nigeria. Our acquisition process allows diaspora investors to purchase land securely and transparently, with full documentation and guided support.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm font-light">
                From inspection to documentation, every step is structured to ensure transparency, clarity, and peace of mind — no matter where you are.
              </p>
              <div className="space-y-4">
                {[
                  { t: "Remote property inspection with video evidence",   i: <Eye size={16} /> },
                  { t: "Full documentation delivered digitally",           i: <FileText size={16} /> },
                  { t: "Dedicated advisor throughout the process",         i: <Users size={16} /> },
                  { t: "Clients across Africa, Europe & North America",    i: <Globe size={16} /> },
                ].map((item, i) => (
                  <motion.div key={i} {...stagger(i)} className="green-border-card bg-white flex items-center gap-4 p-5 rounded-sm">
                    <span className="text-[#15803d]">{item.i}</span>
                    <span className="text-gray-600 text-sm font-light">{item.t}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <Globe size={20} />, label: "Africa",        value: "Nigeria & West Africa" },
                  { icon: <Globe size={20} />, label: "Europe",        value: "UK, Germany & More"    },
                  { icon: <Globe size={20} />, label: "North America", value: "USA & Canada"          },
                ].map((item, i) => (
                  <motion.div key={i} {...stagger(i)}
                    className="green-border-card relative bg-white flex flex-col items-center gap-3 p-6 rounded-sm text-center overflow-hidden"
                  >
                    <div className="stat-card absolute inset-0" />
                    <span className="text-[#15803d] relative z-10">{item.icon}</span>
                    <div className="relative z-10">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-gray-900 font-semibold text-xs leading-snug">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="p-8 rounded-sm" style={{
                background: 'linear-gradient(135deg, rgba(21,128,61,0.06) 0%, rgba(21,128,61,0.01) 100%)',
                border: '1px solid rgba(21,128,61,0.2)'
              }}>
                <p className="section-label mb-3">Our Track Record</p>
                <div className="space-y-3">
                  {[
                    "89% of our clients invest again",
                    "4+ Years. 100+ Plots. 100% Verified.",
                    "Zero disputed transactions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={13} className="text-[#15803d] shrink-0" />
                      <span className="text-gray-700 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 · TESTIMONIALS
          img (man with pepper) — featured card
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Client Stories</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              What Our<br /><em className="text-[#15803d]">Clients Say.</em>
            </h2>
          </motion.div>

          {/* ── Featured client card with pepper image ── */}
          <motion.div {...fadeInUp} className="mb-16 max-w-4xl mx-auto">
            <div
              className="rounded-sm overflow-hidden shadow-md"
              style={{ border: '1px solid rgba(21,128,61,0.2)' }}
            >
              <div className="grid md:grid-cols-5 gap-0">

                {/* LEFT: pepper image — 2/5 width */}
                <div className="md:col-span-2 pepper-img-wrap" style={{ minHeight: '400px' }}>
                  <img
                    src={img}
                    alt="Appliz client holding fresh pepper harvest grown on his Flourish City plot in Ohoba"
                  />
                  {/* Badge pinned top-left over image */}
                  <div className="absolute top-5 left-5 z-20">
                    <span
                      className="text-white text-[9px] uppercase tracking-[0.25em] font-semibold px-3 py-1.5 rounded-sm flex items-center gap-1.5"
                      style={{ background: '#15803d' }}
                    >
                      <Sprout size={10} /> Verified Client
                    </span>
                  </div>
                  {/* Caption over image bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 px-5 py-4"
                  >
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#4ade80] font-semibold mb-0.5">Agricultural Yield</p>
                    <p className="text-white text-xs font-light">Flourish City · Ohoba Plot</p>
                  </div>
                </div>

                {/* RIGHT: quote text — 3/5 width */}
                <div
                  className="md:col-span-3 flex flex-col justify-center p-10 relative"
                  style={{ background: 'linear-gradient(135deg, #f8fdf9 0%, #ffffff 100%)' }}
                >
                  {/* Big decorative quote mark */}
                  <div
                    className="absolute top-5 right-8 serif font-light leading-none select-none pointer-events-none"
                    style={{ fontSize: '9rem', color: '#15803d', opacity: 0.06 }}
                  >"</div>

                  <p className="section-label mb-4">The Flourish City · Ohoba</p>

                  <p className="serif text-2xl md:text-[1.65rem] text-gray-800 italic font-light leading-[1.5] mb-7 relative z-10">
                    "Already enjoying agricultural yields from his property — pictured with a fresh pepper harvest grown right on his Flourish City plot."
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={13} className="text-[#15803d] fill-[#15803d]" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs font-light">Flourish City Land Owner · Ohoba</span>
                  </div>

                  <div className="pt-6 border-t border-[#15803d]/10">
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      This client purchased a plot at The Flourish City and is already generating agricultural income from it — demonstrating the immediate productive value of land in the Ohaji–Egbema corridor, even before long-term infrastructure appreciation kicks in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Placeholder testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Diaspora Investor",    location: "United Kingdom",        text: "Testimonial coming soon — client review in progress.", icon: <Globe size={18} /> },
              { name: "Local Investor",       location: "Lagos, Nigeria",         text: "Testimonial coming soon — client review in progress.", icon: <HomeIcon size={18} /> },
              { name: "Family Asset Buyer",   location: "Port Harcourt, Nigeria", text: "Testimonial coming soon — client review in progress.", icon: <Users size={18} /> },
            ].map((t, i) => (
              <motion.div key={i} {...stagger(i)} className="green-border-card bg-white p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#15803d]/10 flex items-center justify-center">
                    <span className="text-[#15803d]">{t.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs">{t.name}</p>
                    <p className="text-gray-400 text-[10px] tracking-wider uppercase">{t.location}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm font-light italic leading-relaxed">{t.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={10} className="text-[#15803d] fill-[#15803d]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

          <motion.div {...fadeInUp} className="lg:col-span-1 space-y-8">
            <div>
              <p className="section-label mb-4">Reach Out</p>
              <h3 className="serif text-3xl font-light text-gray-900 mb-8">
                Multiple Ways<br /><em className="text-[#15803d]">To Connect</em>
              </h3>
            </div>
            {[
              { icon: <Phone size={20} />, title: "Phone",         content: "+234 703 097 8492",                                                                    delay: 0   },
              { icon: <Mail size={20} />,  title: "Email",         content: "applizresources@gmail.com",                                                            delay: 0.1 },
              { icon: <MapPin size={20} />,title: "Address",       content: "24 Ekwema Crescent Cafe One Mesky Plaza Ikenegbu Layout, Owerri, Imo State, Nigeria.", delay: 0.2 },
              { icon: <Clock size={20} />, title: "Response Time", content: "We typically respond within 24 hours",                                                 delay: 0.3 },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: item.delay }}
                className="green-border-card bg-white p-6 rounded-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#15803d] shrink-0 mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm font-light">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer" className="block"
            >
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-sm font-semibold text-sm tracking-wider uppercase transition-colors">
                Message on WhatsApp
              </button>
            </motion.a>
          </motion.div>

          <motion.div {...fadeInUp} className="lg:col-span-2">
            <div className="mb-8">
              <p className="section-label mb-4">Send A Message</p>
              <h3 className="serif text-3xl font-light text-gray-900">
                We'd Love to <em className="text-[#15803d]">Hear From You</em>
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors"
                  placeholder="Your full name" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors"
                    placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors"
                    placeholder="+234 ..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="Consultation">Book a Consultation</option>
                  <option value="Property Inquiry">Property Inquiry</option>
                  <option value="Book an Inspection">Book an Inspection</option>
                  <option value="Documentation">Documentation Questions</option>
                  <option value="Investment Opportunity">Investment Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="6"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors resize-none"
                  placeholder="Tell us about your investment goals..." />
              </div>
              <button type="submit"
                className="w-full bg-[#15803d] hover:bg-[#16a34a] text-white py-4 rounded-sm font-semibold text-sm tracking-wider uppercase transition-colors"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-500 text-center font-light">
                We take your privacy seriously and will respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="section-label mb-4">Common Questions</p>
            <h2 className="serif text-4xl md:text-5xl font-light text-gray-900">
              Frequently Asked<br /><em className="text-[#15803d]">Questions</em>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "How long does the Documentation & Allocation take?",  a: 5-Working Days. We've done all Due Diligence for you. So we believe in Swift Delivery and Peace of Mind" },
              { q: "Can I invest as a diaspora investor?",          a: "Yes! We specialize in supporting Nigerian diaspora investors. All documentation can be handled remotely and we provide regular updates throughout the process." },
              { q: "What's the minimum investment required?",        a: "There's no fixed minimum. We work with investors of all sizes. Contact us to discuss options that fit your budget and goals." },
              { q: "Are there any hidden costs?",                   a: "No. We believe in complete transparency. All costs are disclosed upfront before you make any commitment." },
              { q: "What happens after I purchase?",                a: "We provide ongoing support including documentation management, property management referrals, and future investment opportunities." },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeInUp} className="green-border-card bg-[#f9fafb] p-6 rounded-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="mt-12 text-center">
            <p className="text-gray-600 font-light mb-4">Didn't find your answer?</p>
            <a href="mailto:applizresources@gmail.com">
              <button className="text-[#15803d] font-semibold text-sm uppercase tracking-wider hover:text-[#16a34a] transition-colors">
                Email us →
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p {...fadeInUp} className="section-label mb-4">Start Your Property Journey</motion.p>
          <motion.h2 {...fadeInUp} className="serif text-4xl md:text-5xl font-light mb-6 text-gray-900">
            Start Your Property Journey<br /><em className="text-[#15803d]">with Appliz.</em>
          </motion.h2>
          <motion.p {...fadeInUp} className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto font-light">
            Whether you are looking to preserve wealth, diversify your investments, or secure land for the future — Appliz Properties is here to guide you.
          </motion.p>
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <button className="btn-primary text-white px-8 py-4 rounded-sm font-semibold text-sm tracking-wider uppercase">
                View Current Projects
              </button>
            </Link>
            <a href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer">
              <button className="border border-[#15803d] text-[#15803d] px-8 py-4 rounded-sm font-semibold text-sm tracking-wider uppercase hover:bg-[#15803d] hover:text-white transition-all duration-300">
                Speak With our Experienced Advisor
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER TRUST LINE ── */}
      <section className="py-12 px-8 md:px-20 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="serif text-2xl font-light text-white mb-2">Appliz Properties</p>
          <p className="text-gray-400 text-sm font-light tracking-wider mb-3">
            Building Assets. Preserving Wealth. Creating Legacy.
          </p>
          <p className="text-[#4ade80] text-xs font-semibold tracking-[0.3em] uppercase">You're Safe Here.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
