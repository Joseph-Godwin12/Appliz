import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MessageCircle, Home, MapPin, ShieldCheck, 
  Globe, CheckCircle2, Search, FileText, CreditCard, UserCheck, 
  Lock, Zap, Star, Phone, Award, Map, Users, Video, BookOpen
} from 'lucide-react';
import heroImg from '../assets/appliz1.jpg';

const LandingPage = () => {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const linkClass = (id) =>
    `transition-colors ${
      active === id
        ? "text-green-950 font-bold border-b-2 border-green-950"
        : "text-gray-600 hover:text-green-950"
    }`;


  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };


  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-green-100">
      
      {/* --- NAVIGATION --- */}
     <nav className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50 md:px-20">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-green-950 flex items-center justify-center rounded-lg">
          <Home className="text-white" size={24} />
        </div>
        <div>
          <h1 className="font-bold text-xl leading-tight uppercase tracking-tighter">
            APPLIZ
          </h1>
          <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">
            RC812094
          </p>
        </div>
      </div>

      <div className="hidden md:flex gap-8 font-medium text-sm">
        <a href="#home" className={linkClass("home")}>
          Home
        </a>
        <a href="#about" className={linkClass("about")}>
          About Us
        </a>
        <a href="#process" className={linkClass("process")}>
          Process
        </a>
        <a href="#contact" className={linkClass("contact")}>
          Contact
        </a>
      </div>
    </nav>

     
        <section id="home" className="grid lg:grid-cols-12 gap-0 overflow-hidden bg-black text-white relative"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
          <div className="lg:col-span-12 px-6 py-16 md:px-20 text-center max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-700 px-4 py-2 rounded-full mb-8 text-green-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck size={16} />
            Verified • Trusted • Transparent
          </div>
            <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8">
            Own Real Estate Assets You Can Control, Verify, and Sleep Peacefully With.
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed mx-auto max-w-3xl">
            We have helped Nigerians at home and across five continents preserve and grow wealth through fully verified, low-risk real estate investments in Southeast and South-South Nigeria.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
           <a
              href="mailto:applizresources@gmail.com"
              className="inline-block"
            >
              <button className="bg-green-950 hover:bg-green-900 text-white px-8 py-4 rounded-md flex items-center gap-3 font-bold transition-all">
            <Calendar size={20} />
            Book a Free Consultation
              </button>
            </a>
            <a
            href="https://wa.me/2347030978492"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
              >
            <button className="border border-green-700 text-green-500 px-8 py-4 rounded-md flex items-center gap-3 font-bold hover:bg-green-950/20 transition-all">
              <MessageCircle size={20} />
              Chat with Us on WhatsApp
            </button>
              </a>
          </div>

          {/* Trust Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 bg-white text-black p-8 rounded-2xl shadow-2xl border border-gray-100">
              {[
                { label: "Plots Sold", value: "102", icon: <Home size={20} className="text-green-950 mb-1"/> },
                { label: "sqm Transacted", value: "47,430+", icon: <MapPin size={20} className="text-green-950 mb-1"/> },
                { label: "Clients Served", value: "54", icon: <Users size={20} className="text-green-950 mb-1"/> },
                { label: "Repeat Buyers", value: "68%", icon: <Star size={20} className="text-green-950 mb-1"/> },
                { label: "Experience", value: "4+ Years", icon: <ShieldCheck size={20} className="text-green-950 mb-1"/> },
                { label: "Verified Docs", value: "100%", icon: <Globe size={20} className="text-green-950 mb-1"/> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  {stat.icon}
                  <span className="font-black text-2xl">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold text-gray-400 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2 & 3. PROBLEM & POSITIONING --- */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Section 2: The Problem */}
          <motion.div {...fadeInUp} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-green-950 font-black text-2xl mb-6 italic border-l-4 border-green-950 pl-4 uppercase">
               THE PROBLEM (Investor Fears)
            </h3>
            <p className="text-gray-600 mb-8 font-medium">
              Most investors don't lose money because land is bad. They lose money because of fear, poor verification, and lack of control.
            </p>
            <ul className="space-y-4">
              {[
                "Fake or disputed land documents",
                "Losing capital or inability to resell",
                "Government acquisition",
                "Developers disappearing after payment",
                "Buying from abroad without control"
              ].map((fear, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-sm text-gray-800">
                  <CheckCircle2 className="text-red-500 shrink-0" size={18} /> {fear}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Positioning */}
          <motion.div {...fadeInUp} className="flex flex-col justify-center">
            <h3 className="text-green-950 font-black text-2xl mb-6 italic uppercase">
               APPLIZ POSITIONING (Why Appliz Exists)
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Appliz Properties exists to help investors buy real estate with peace of mind. We prioritise capital preservation first, because appreciation only matters when the asset is secure.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Peace of mind is the real product", icon: <Lock /> },
                { title: "Preservation before appreciation", icon: <ShieldCheck /> },
                { title: "Real estate wins because investors have control", icon: <Map /> },
                { title: "Trust is proven by delivery, not promises", icon: <Award /> }
              ].map((belief, i) => (
                <div key={i} className="flex flex-col gap-2 bg-green-950 text-white p-5 rounded-xl">
                  <span className="text-green-400">{belief.icon}</span>
                  <p className="text-xs font-bold leading-tight uppercase">{belief.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4, 5, 6. EDUCATION, STORYTELLING & SOCIAL PROOF --- */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Section 4 & 5 */}
            <motion.div {...fadeInUp}>
              <h3 className="text-green-950 font-black text-2xl mb-4 italic uppercase"> SELLING BY EDUCATION</h3>
              <p className="text-gray-600 mb-6 italic font-medium">"Appreciation is optional. Preservation is non-negotiable."</p>
            </motion.div>

            {/* Section 6: Social Proof */}
            <motion.div {...fadeInUp} className="bg-green-950 text-white p-10 rounded-3xl relative overflow-hidden">
               <h3 className="font-black text-2xl mb-4 italic uppercase"> SOCIAL PROOF & CREDIBILITY</h3>
               <p className="opacity-80 text-sm mb-10">Strong proof through numbers and behavior.</p>
               <div className="space-y-6">
                 <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                    <CheckCircle2 className="text-green-400" />
                    <span className="font-black text-xl">68% Repeat Buyers</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                    <Globe className="text-green-400" />
                    <span className="font-black text-lg">Clients across Africa, Europe, and North America</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                    <Award className="text-green-400" />
                    <span className="font-black text-lg">4+ Years of Consistent Delivery</span>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 7, 8, 9. PROCESS & DIASPORA --- */}
      <section id="process" className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div {...fadeInUp}>
            <h3 className="text-green-950 font-black text-2xl mb-8 italic uppercase"> SIMPLE BUYER PROCESS</h3>
            <div className="space-y-4">
              {[
                { t: "Free consultation", i: <Users /> },
                { t: "Investor education & property selection", i: <Search /> },
                { t: "Documentation verification", i: <FileText /> },
                { t: "Payment & allocation", i: <CreditCard /> },
                { t: "Handover & post-purchase support", i: <UserCheck /> }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100 group hover:border-green-950 transition-all">
                  <span className="text-3xl font-black text-green-950/20">{idx + 1}</span>
                  <div className="text-green-950">{step.i}</div>
                  <p className="font-bold text-gray-800">{step.t}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-12">
            <div>
              <h3 className="text-green-950 font-black text-2xl mb-6 italic uppercase"> RISK REDUCTION & ASSURANCE</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {["100% verified documentation", "Clear allocation process", "Transparent communication", "Physical and remote inspections available"].map((text, i) => (
                  <div key={i} className="p-4 border-2 border-green-950 rounded-xl font-bold text-xs uppercase text-center">
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-3xl border-l-8 border-green-500">
               <h3 className="font-black text-xl mb-4 italic uppercase"> DIASPORA BUYERS</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Dedicated solutions for Nigerians abroad. Safely buy, inspect, pay, and receive original documents without being physically present. We act as your trusted eyes on the ground.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 10 & 12. THOUGHT LEADERSHIP & ABOUT --- */}
      <section id="about" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div {...fadeInUp}>
             <h3 className="text-green-950 font-black text-2xl mb-6 italic uppercase underline decoration-green-500 underline-offset-8">
                THOUGHT LEADERSHIP & AUTHORITY
             </h3>
             <p className="font-bold text-lg mb-6">Daniel Ejikeme — Real Estate Educator & Thought Leader</p>
             <div className="space-y-4">
               {[
                 { t: "Nigerian Real Estate Safety Masterclasses", i: <BookOpen /> },
                 { t: "Diaspora training videos (UK, US, Canada)", i: <Video /> },
                 { t: "Educational insights on capital preservation", i: <Zap /> }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl font-bold text-sm">
                   <div className="text-green-950">{item.i}</div> {item.t}
                 </div>
               ))}
             </div>
          </motion.div>

          <motion.div {...fadeInUp}>
             <h3 className="text-green-950 font-black text-2xl mb-6 italic uppercase underline decoration-green-500 underline-offset-8">
                ABOUT APPLIZ PROPERTIES
             </h3>
             <p className="text-gray-600 leading-relaxed mb-6">
               Appliz was founded to solve the trust deficit in Nigerian real estate. We recognized that many Nigerians lose money not to bad luck, but to bad systems. Our long-term vision is to become the gold standard for secure, verified land assets in Southeast and South-South Nigeria.
             </p>
             <div className="bg-green-50 p-6 rounded-2xl border border-green-100 italic font-medium">
               "Helping Nigerians preserve wealth safely through the most secure verification systems in the market."
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- 13. FOOTER TRUST STACK --- */}
      <footer id="contact" className="bg-black text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 border-t border-gray-800 pt-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-black mb-4 italic text-green-500 uppercase tracking-tighter">APPLIZ PROPERTIES</h2>
            <p className="text-gray-400 text-sm mb-8">Registered Business Details: <span className="text-white font-bold font-mono">RC812094</span></p>
            
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-green-500 shrink-0" size={18} />
                <p>24 Ekwema Cresent Cafe One Mesky Plaza Ikenegbu Layout, Owerri, Imo State, Nigeria.</p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-green-500 shrink-0" size={18} />
                <p>Phone & WhatsApp: +2347030978492</p>
              </div>
              <div className="flex gap-3">
                <Globe className="text-green-500 shrink-0" size={18} />
                <p>Operating Regions: Southeast & South-South Nigeria</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-end">
            <div className="bg-green-950 p-8 rounded-3xl w-full max-w-md text-center">
              <h4 className="font-black text-xl mb-6 uppercase italic"> Start Your Journey</h4>
              <div className="flex flex-col gap-4">
               <a
                  href="mailto:applizresources@gmail.com?subject=Free%20Consultation%20Request&body=Hello%20Appliz%20Properties,%0A%0AI%20would%20like%20to%20book%20a%20free%20consultation.%0A%0AThank%20you."
                  className="block w-full"
                >
                  <button className="bg-white text-green-950 w-full py-4 rounded-xl font-black hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    BOOK A FREE CONSULTATION
                  </button>
                </a>
               <a
                  href="https://wa.me/2347030978492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="bg-green-600 text-white w-full py-4 rounded-xl font-black hover:bg-green-500 transition-all flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    CHAT ON WHATSAPP
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
          © 2026 Appliz Properties. Built for capital preservation.
        </div>
      
      </footer>
    </div>
  );
};

export default LandingPage;