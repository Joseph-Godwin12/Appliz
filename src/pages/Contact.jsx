import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/appliz4.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/applizresources@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();

      if (result.success === 'true' || result.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * { font-family: 'Outfit', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        
        .green-border-card {
          border: 1px solid rgba(21,128,61,0.15);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .green-border-card:hover {
          border-color: rgba(21,128,61,0.4);
          transform: translateY(-2px);
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
      <section id="contact-hero" className="relative min-h-screen md:min-h-[90vh] flex items-center grain-overlay overflow-hidden">
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
              Available · Responsive · Ready to Help
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 max-w-4xl text-white"
          >
            Get In Touch<br />
            With Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-12 font-light"
          >
            Questions about verified properties or our investment process? We're here to help and ready to guide you toward the right decision.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          
          {/* Contact Info */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <p className="section-label mb-4">Reach Out</p>
              <h3 className="serif text-3xl font-light text-gray-900 mb-8">
                Multiple Ways<br /><em className="text-[#15803d]">To Connect</em>
              </h3>
            </div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="green-border-card bg-[#f9fafb] p-6 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <Phone className="text-[#15803d] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm font-light">+234 703 097 8492</p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="green-border-card bg-[#f9fafb] p-6 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <Mail className="text-[#15803d] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm font-light">applizresources@gmail.com</p>
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="green-border-card bg-[#f9fafb] p-6 rounded-sm"
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

            {/* Hours */}
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

            {/* WhatsApp CTA */}
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
          <motion.div
            {...fadeInUp}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <p className="section-label mb-4">Send A Message</p>
              <h3 className="serif text-3xl font-light text-gray-900">
                We'd Love to <em className="text-[#15803d]">Hear From You</em>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
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

              {/* Email & Phone */}
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

              {/* Subject */}
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
                  <option value="Documentation">Documentation Questions</option>
                  <option value="Investment Opportunity">Investment Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              {/* Message */}
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

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-sm font-semibold text-sm tracking-wider uppercase transition-colors text-white
                  ${status === 'success'
                    ? 'bg-green-400 cursor-not-allowed'
                    : status === 'error'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-[#15803d] hover:bg-[#16a34a]'
                  }`}
              >
                {status === 'loading' ? 'Sending...' :
                 status === 'success' ? '✓ Message Sent!' :
                 status === 'error'   ? 'Failed — Try Again' :
                 'Send Message'}
              </motion.button>

              {status === 'error' && (
                <p className="text-xs text-red-500 text-center">
                  Something went wrong. Please email us directly at applizresources@gmail.com
                </p>
              )}

              {status !== 'error' && (
                <p className="text-xs text-gray-500 text-center font-light">
                  We take your privacy seriously and will respond within 24 hours.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-32 px-8 md:px-20 bg-[#f9fafb]">
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
                a: "Typically 2-3 weeks for complete verification including title checks, government registry reviews, and site inspections."
              },
              {
                q: "Can I invest as a diaspora investor?",
                a: "Yes! We specialize in supporting Nigerian diaspora investors. All documentation can be handled remotely and we provide regular updates."
              },
              {
                q: "What's the minimum investment required?",
                a: "There's no fixed minimum. We work with investors of all sizes. Contact us to discuss options that fit your budget."
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
                className="green-border-card bg-white p-6 rounded-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 font-light mb-4">Didn't find your answer?</p>
            <a href="mailto:applizresources@gmail.com">
              <button className="text-[#15803d] font-semibold text-sm uppercase tracking-wider hover:text-[#16a34a] transition-colors">
                Email us →
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;