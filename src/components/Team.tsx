import React from 'react';
import { motion } from 'framer-motion';
import { Users, PenTool as Tool, Clock, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Users,
    title: 'Ervaren Monteurs',
    description: 'Ons team bestaat uit vakkundige professionals met jarenlange ervaring.',
    stats: '15+ jaar ervaring'
  },
  {
    icon: Tool,
    title: 'Vakmanschap',
    description: 'Wij werken alleen met de beste materialen en technieken.',
    stats: '1000+ projecten'
  },
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Binnen 48 uur een offerte en flexibele installatietijden.',
    stats: '48 uur responstijd'
  },
  {
    icon: Award,
    title: 'Garantie',
    description: '5 jaar garantie op al onze producten en installaties.',
    stats: '5 jaar garantie'
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-gradient-to-b from-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold">Ons Team</span>
          <h2 className="text-4xl font-bold mb-4 mt-2">Experts in Raamdecoratie</h2>
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-current" />
            ))}
          </div>
          <p className="text-xl text-gray-600">
            Met meer dan 15 jaar ervaring staan wij klaar om je te helpen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700 ease-out" />
              <div className="relative z-10">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-primary font-bold">{feature.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/offerte">
            <button className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors">
              Stel je Offerte Samen
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}