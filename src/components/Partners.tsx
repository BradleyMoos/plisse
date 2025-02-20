import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Luxaflex', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80' },
  { name: 'Velux', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80' },
  { name: 'Somfy', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80' },
  { name: 'Hunter Douglas', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80' },
  { name: 'Sunway', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80' },
  { name: 'Copahome', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80' },
  { name: 'Bece', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80' },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Premium Partners</h2>
        <div className="relative h-[400px]">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                x: [
                  `${Math.sin(index) * 400}px`,
                  `${Math.cos(index) * 400}px`,
                  `${-Math.sin(index) * 400}px`,
                  `${-Math.cos(index) * 400}px`,
                  `${Math.sin(index) * 400}px`,
                ],
                y: [
                  `${Math.cos(index) * 150}px`,
                  `${-Math.sin(index) * 150}px`,
                  `${-Math.cos(index) * 150}px`,
                  `${Math.sin(index) * 150}px`,
                  `${Math.cos(index) * 150}px`,
                ],
              }}
              transition={{
                duration: 20 + index * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                transition: {
                  duration: 40 + index * 4,
                },
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-24 opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}