import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Full-width background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          alt="Luxe raamdecoratie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-lg">Premium Raamdecoratie</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
              Transformeer je Ruimte met Stijlvolle Raamdecoratie
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Ontdek onze collectie hoogwaardige raamdecoratie, vakkundig op maat gemaakt 
              voor jouw woning. Van elegante plissé gordijnen tot praktische horren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold inline-flex items-center space-x-2 hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
                >
                  <span>Neem contact op</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <button 
                onClick={() => {
                  const element = document.getElementById('oplossingen');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/20 transition-colors border border-white/30 w-full sm:w-auto"
              >
                Bekijk Oplossingen
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}