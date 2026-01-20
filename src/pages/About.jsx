import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-green-950 font-bold text-sm uppercase tracking-widest mb-2">Our Story</h2>
            <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
              Redefining Real Estate <br /> 
              <span className="text-green-950">Through Integrity.</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Appliz Properties was founded on a simple realization: many Nigerians want to invest in their homeland but are paralyzed by the fear of fraud and complex documentation.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don't just sell plots; we sell peace of mind. By focusing on the South-South region, we ensure every square meter we transact is 100% verified, government-cleared, and ready for immediate development.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-green-100 p-2 rounded-lg text-green-950">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Our Mission</h4>
                  <p className="text-sm text-gray-500">To provide secure land assets that investors can control and verify from anywhere in the world.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Elements / Values Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-green-950 text-white p-8 rounded-2xl flex flex-col justify-end h-64">
              <Users size={32} className="mb-4 text-green-400" />
              <h4 className="text-xl font-bold">Community Led</h4>
              <p className="text-sm opacity-80">Built for Nigerians, by Nigerians who understand the market.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl flex flex-col justify-end h-64 border border-gray-200">
              <ShieldCheck size={32} className="mb-4 text-green-950" />
              <h4 className="text-xl font-bold text-black">Verified Only</h4>
              <p className="text-sm text-gray-500">Zero tolerance for unverified or disputed land titles.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;