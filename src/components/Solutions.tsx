import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Maximize2, Blinds, ScrollText, Monitor, DoorOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: ScrollText,
    title: 'Rolgordijnen',
    description: 'Moderne en praktische oplossing voor lichtregulering. Rolgordijnen zijn eenvoudig te bedienen en bieden een strakke uitstraling. Ze zijn ideaal voor zowel woon- als slaapkamers en verkrijgbaar in verschillende transparanties.',
    image: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80',
    link: '/products/rolgordijnen'
  },
  {
    icon: Shield,
    title: 'Flexibele Horren',
    description: 'De perfecte oplossing voor ramen die vaak open en dicht gaan. Onze flexibele horren zijn gemaakt van hoogwaardig materiaal dat bestand is tegen intensief gebruik. Ze bieden optimale bescherming tegen insecten terwijl ze eenvoudig te bedienen blijven.',
    image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&q=80',
    link: '/products/flexibele-hor'
  },
  {
    icon: Monitor,
    title: 'Screens',
    description: 'Effectieve zonwering voor optimaal comfort. Screens houden de warmte buiten terwijl je toch naar buiten kunt kijken. Ze zijn windvast en vormen een stijlvolle aanvulling op je gevel.',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80',
    link: '/products/screens'
  },
  {
    icon: Blinds,
    title: 'Plissé Gordijnen',
    description: 'Elegante raamdecoratie die perfect aansluit bij elk interieur. Onze plissé gordijnen bieden niet alleen privacy maar ook uitstekende isolatie. Ze zijn verkrijgbaar in diverse kleuren en materialen om perfect bij je interieur te passen.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    link: '/products/plisse-gordijnen'
  },
  {
    icon: Maximize2,
    title: 'Vaste Horren',
    description: 'De klassieke oplossing voor insectenwering. Deze horren combineren functionaliteit met stijl en zijn perfect voor elk raam. Ze zijn gemaakt van hoogwaardig gaas dat optimale ventilatie mogelijk maakt terwijl insecten buiten blijven.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
    link: '/products/vaste-horren'
  },
  {
    icon: DoorOpen,
    title: 'Plissé Deuren',
    description: 'De ideale oplossing voor schuifpuien en terrasdeuren. Onze plissé deuren combineren gebruiksgemak met een stijlvolle uitstraling, perfect voor grotere openingen waar traditionele horren niet volstaan.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80',
    link: '/products/plisse-deuren'
  }
];

export default function Solutions() {
  return (
    <section id="oplossingen" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Onze Oplossingen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek ons complete assortiment aan hoogwaardige raamdecoratie
          </p>
        </motion.div>

        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/5 rounded-xl transform -skew-y-2 group-hover:skew-y-2 transition-transform duration-700" />
                  <div className="relative">
                    <div className="bg-white p-6 rounded-xl shadow-xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <solution.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {solution.description}
                      </p>
                      <Link
                        to={solution.link}
                        className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:translate-x-1 group"
                      >
                        <span className="font-semibold">Meer informatie</span>
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Link to={solution.link}>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}