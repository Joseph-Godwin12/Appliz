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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

        .stat-bar-bg {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(21,128,61,0.1);
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

        /* Floating WhatsApp Button */
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
          box-shadow: 0 4px 24px rgba(37,211,102,0.35);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }
        .whatsapp-float:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(37,211,102,0.45);
        }
      `}</style>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2347030978492"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>

      {/* ── SECTION 1: HERO ── */}
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 max-w-4xl text-white"
          >
            Secure Strategic Assets<br />
            <em className="text-[#4ade80]">in Southeast Nigeria.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-4 font-light"
          >
            Appliz Homes &amp; Properties Ltd (RC: 8132094) has helped individuals and diaspora investors acquire verified properties in emerging economic corridors — positioned for long-term growth and generational value.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#4ade80] text-sm sm:text-base font-semibold tracking-wider uppercase mb-8 sm:mb-12"
          >
            You're Safe Here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-3"
          >
            <Link to="/properties" className="w-full sm:w-auto">
              <button className="btn-primary text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-sm flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                View Current Projects
              </button>
            </Link>
            <a href="https://wa.me/2347030978492" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="border border-white/20 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-sm flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-medium tracking-wider uppercase hover:border-[#4ade80]/60 hover:text-[#4ade80] transition-all duration-300">
                Speak with our Experienced Advisor
              </button>
            </a>
            <a href="https://wa.me/2347030978492?text=I%20would%20like%20to%20book%20a%20property%20inspection" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="border border-white/20 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-sm flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-medium tracking-wider uppercase hover:border-[#4ade80]/60 hover:text-[#4ade80] transition-all duration-300">
                <Calendar size={14} />
                Book an Inspection
              </button>
            </a>
          </motion.div>
        </div>

        {/* ── SECTION 2: STATS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 z-10 stat-bar-bg"
        >
          <div className="max-w-8xl mx-auto px-8 md:px-20 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-3">
              {[
                { label: "Plots Successfully Secured", value: "100+", icon: <HomeIcon size={14}/> },
                { label: "Clients Served", value: "78+", icon: <Users size={14}/> },
                { label: "Years of Trusted Operations", value: "4+", icon: <ShieldCheck size={14}/> },
                { label: "Verified Documentation", value: "100%", icon: <CheckCircle2 size={14}/> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="text-[#15803d] mb-1">{stat.icon}</span>
                  <span className="text-gray-900 font-bold text-lg leading-none">{stat.value}</span>
                  <span className="text-gray-400 text-[9px] uppercase tracking-widest mt-1 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-[10px] tracking-wider uppercase font-medium pb-1">
              Trusted by investors who value security, transparency, and long-term positioning.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 3: WHY APPLIZ ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Why section – left */}
            <motion.div {...fadeInUp}>
              <p className="section-label mb-4">Why Investors Choose Appliz</p>
              <h3 className="serif text-4xl md:text-5xl font-light mb-6 leading-tight green-line text-gray-900">
                Investors Buy Real Estate<br /><em className="text-[#15803d]">For Different Reasons.</em>
              </h3>
              <div className="space-y-3 mb-10">
                {[
                  { text: "To preserve wealth", icon: <Lock size={13} /> },
                  { text: "To grow their investment portfolio", icon: <TrendingUp size={13} /> },
                  { text: "To secure assets for their children", icon: <Users size={13} /> },
                  { text: "To diversify and strengthen long-term financial security", icon: <ShieldCheck size={13} /> },
                ].map((reason, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="flex items-center gap-4 py-4 border-b border-gray-100 group"
                  >
                    <span className="text-[#15803d] shrink-0">{reason.icon}</span>
                    <span className="text-gray-600 text-sm font-light group-hover:text-gray-900 transition-colors">{reason.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                At Appliz, we help investors achieve these goals through strategic property selection and secure acquisition processes.
              </p>
            </motion.div>

            {/* Our Approach – right */}
            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <p className="section-label mb-4">Our Approach</p>
              <div className="space-y-4">
                {[
                  { title: "Verified Documentation", desc: "Every property undergoes strict verification to ensure clear ownership and legal security.", icon: <FileText size={16} /> },
                  { title: "Strategic Location Research", desc: "We focus on locations positioned near infrastructure, industry, and future development corridors.", icon: <Map size={16} /> },
                  { title: "Transparent Acquisition Process", desc: "From inspection to documentation, every step is structured for clarity and investor confidence.", icon: <Eye size={16} /> },
                  { title: "Long-Term Investor Relationships", desc: "Many of our clients return to acquire additional properties — a reflection of the trust we build over time.", icon: <Handshake size={16} /> },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
                    className="green-border-card bg-[#f8fdf9] flex items-start gap-5 p-6 rounded-sm"
                  >
                    <span className="text-[#15803d] shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-900 mb-1">{item.title}</p>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Closing line */}
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

      {/* ── SECTION 4: CURRENT PROJECTS ── */}
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

          {/* Project Card – The Flourish City */}
          <motion.div {...fadeInUp} className="green-border-card bg-white rounded-sm overflow-hidden max-w-4xl mx-auto">
            {/* Card Header */}
            <div className="bg-[#15803d] px-8 py-4 flex items-center justify-between">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-semibold">Featured Project</span>
              <span className="text-[#4ade80] text-[10px] uppercase tracking-[0.3em] font-semibold flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                Now Available
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Project details */}
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

                <Link to="/properties">
                  <button className="btn-primary text-white px-8 py-3 rounded-sm font-semibold text-xs tracking-wider uppercase">
                    View Project
                  </button>
                </Link>
              </div>

              {/* Infrastructure highlights */}
              <div className="bg-[#f8fdf9] p-10 flex flex-col justify-center" style={{ borderLeft: '1px solid rgba(21,128,61,0.1)' }}>
                <p className="section-label mb-6">Proximity to Major Infrastructure</p>
                <div className="space-y-4">
                  {[
                    { name: "ANOH Gas Processing Plant", icon: <Zap size={16} />, desc: "Major energy facility driving industrial growth" },
                    { name: "Waltersmith Modular Refinery", icon: <Building2 size={16} />, desc: "One of Nigeria's first modular refineries" },
                    { name: "Ohaji–Egbema Corridor", icon: <MapPin size={16} />, desc: "Emerging energy and industrial hub" },
                  ].map((infra, i) => (
                    <div key={i} className="flex items-start gap-4 py-3 border-b border-[#15803d]/10 last:border-0">
                      <span className="text-[#15803d] shrink-0 mt-0.5">{infra.icon}</span>
                      <div>
                        <p className="text-gray-900 text-xs font-semibold">{infra.name}</p>
                        <p className="text-gray-400 text-xs font-light">{infra.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: INVESTMENT PHILOSOPHY ── */}
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

      {/* ── SECTION 6: DIASPORA / BUY FROM ANYWHERE ── */}
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
                  { t: "Remote property inspection with video evidence", i: <Eye size={16} /> },
                  { t: "Full documentation delivered digitally", i: <FileText size={16} /> },
                  { t: "Dedicated advisor throughout the process", i: <Users size={16} /> },
                  { t: "Clients across Africa, Europe & North America", i: <Globe size={16} /> },
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

            <motion.div {...fadeInUp} className="flex flex-col justify-center">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: <Globe size={20} />, label: "Africa", value: "Nigeria & West Africa" },
                  { icon: <Globe size={20} />, label: "Europe", value: "UK, Germany & More" },
                  { icon: <Globe size={20} />, label: "North America", value: "USA & Canada" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...stagger(i)}
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

              <div className="mt-8 p-8 rounded-sm" style={{
                background: 'linear-gradient(135deg, rgba(21,128,61,0.06) 0%, rgba(21,128,61,0.01) 100%)',
                border: '1px solid rgba(21,128,61,0.2)'
              }}>
                <p className="section-label mb-3">Our Track Record</p>
                <div className="space-y-3">
                  {[
                    "68% of our clients invest again",
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

      {/* ── SECTION 7: TESTIMONIALS ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <p className="section-label mb-4">Client Stories</p>
            <h2 className="serif text-5xl md:text-6xl font-light green-line text-gray-900" style={{ display: 'inline-block' }}>
              What Our<br /><em className="text-[#15803d]">Clients Say.</em>
            </h2>
          </motion.div>

          {/* Featured testimonial – client with pepper farm */}
          <motion.div {...fadeInUp} className="mb-12">
            <div className="green-border-card bg-[#f8fdf9] rounded-sm p-10 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-6 left-8 text-[#15803d] text-7xl serif font-light opacity-10">"</div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#15803d]/10 flex items-center justify-center">
                  <Sprout size={22} className="text-[#15803d]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Verified Client</p>
                  <p className="text-[#15803d] text-xs font-light tracking-wider uppercase">The Flourish City · Ohoba</p>
                </div>
              </div>
              <p className="serif text-xl text-gray-600 italic font-light leading-relaxed relative z-10">
                "This client is already enjoying agricultural yields from his property — pictured with his pepper harvest."
              </p>
              <p className="text-gray-400 text-xs font-light mt-4 relative z-10">📸 Photo: Client with pepper yield from his Flourish City plot.</p>
            </div>
          </motion.div>

          {/* Placeholder testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Diaspora Investor",
                location: "United Kingdom",
                text: "Testimonial coming soon — client review in progress.",
                icon: <Globe size={18} />
              },
              {
                name: "Local Investor",
                location: "Lagos, Nigeria",
                text: "Testimonial coming soon — client review in progress.",
                icon: <HomeIcon size={18} />
              },
              {
                name: "Family Asset Buyer",
                location: "Port Harcourt, Nigeria",
                text: "Testimonial coming soon — client review in progress.",
                icon: <Users size={18} />
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                {...stagger(i)}
                className="green-border-card bg-white p-8 rounded-sm"
              >
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

      {/* ── CONTACT SECTION ── */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          
          {/* Contact Info */}
          <motion.div {...fadeInUp} className="lg:col-span-1 space-y-8">
            <div>
              <p className="section-label mb-4">Reach Out</p>
              <h3 className="serif text-3xl font-light text-gray-900 mb-8">
                Multiple Ways<br /><em className="text-[#15803d]">To Connect</em>
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="green-border-card bg-white p-6 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <Phone className="text-[#15803d] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm font-light">+234 703 097 8492</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="green-border-card bg-white p-6 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <Mail className="text-[#15803d] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm font-light">applizresources@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="green-border-card bg-white p-6 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-[#15803d] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm font-light">
                    24 Ekwema Crescent Cafe One Mesky Plaza Ikenegbu Layout, Owerri, Imo State, Nigeria.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="green-border-card bg-[#f8fdf9] p-6 rounded-sm border border-[#15803d]/20"
            >
              <div className="flex items-start gap-4">
                <Clock className="text-[#15803d] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-gray-600 text-sm font-light">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="https://wa.me/2347030978492"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-sm font-semibold text-sm tracking-wider uppercase transition-colors">
                Message on WhatsApp
              </button>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <div className="mb-8">
              <p className="section-label mb-4">Send A Message</p>
              <h3 className="serif text-3xl font-light text-gray-900">
                We'd Love to <em className="text-[#15803d]">Hear From You</em>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors"
                  placeholder="Your full name"
                />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors"
                    placeholder="+234 ..."
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#15803d] transition-colors resize-none"
                  placeholder="Tell us about your investment goals..."
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                type="submit"
                className="w-full bg-[#15803d] hover:bg-[#16a34a] text-white py-4 rounded-sm font-semibold text-sm tracking-wider uppercase transition-colors"
              >
                Send Message
              </motion.button>

              <p className="text-xs text-gray-500 text-center font-light">
                We take your privacy seriously and will respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
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
              {
                q: "How long does the verification process take?",
                a: "Typically 2–3 weeks for complete verification including title checks, government registry reviews, and site inspections."
              },
              {
                q: "Can I invest as a diaspora investor?",
                a: "Yes! We specialize in supporting Nigerian diaspora investors. All documentation can be handled remotely and we provide regular updates throughout the process."
              },
              {
                q: "What's the minimum investment required?",
                a: "There's no fixed minimum. We work with investors of all sizes. Contact us to discuss options that fit your budget and goals."
              },
              {
                q: "Are there any hidden costs?",
                a: "No. We believe in complete transparency. All costs are disclosed upfront before you make any commitment."
              },
              {
                q: "What happens after I purchase?",
                a: "We provide ongoing support including documentation management, property management referrals, and future investment opportunities."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="green-border-card bg-[#f9fafb] p-6 rounded-sm"
              >
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

      {/* ── SECTION 8: FINAL CTA ── */}
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