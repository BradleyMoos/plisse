import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScrollingBanner() {
  return (
    <div className="bg-gradient-to-r from-primary via-[#F4B942] to-primary py-4 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{
            x: [-2000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex text-white text-2xl font-bold items-center"
        >
          {[...Array(10)].map((_, i) => (
            <Link to="/contact" key={i}>
              <div className="flex items-center cursor-pointer hover:scale-105 transition-transform">
                <span>Neem contact op</span>
                <ArrowRight className="w-6 h-6 ml-2" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}