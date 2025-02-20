import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah de Jong",
    text: "Uitstekende service! De installatie was snel en professioneel.",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Peters",
    text: "Beste kwaliteit horren die ik ooit heb gehad. Elke cent waard.",
    rating: 5
  },
  {
    id: 3,
    name: "Lisa Bakker",
    text: "Heel tevreden met het eindresultaat. Zeker een aanrader!",
    rating: 5
  },
  {
    id: 4,
    name: "Peter van Dijk",
    text: "Snelle levering en perfecte montage. Echt vakwerk!",
    rating: 5
  },
  {
    id: 5,
    name: "Emma Visser",
    text: "Geweldige klantenservice en een prachtig eindresultaat.",
    rating: 5
  },
  {
    id: 6,
    name: "Thomas Jansen",
    text: "De horren passen perfect en werken fantastisch.",
    rating: 5
  },
  {
    id: 7,
    name: "Sophie Mulder",
    text: "Zeer professioneel bedrijf met oog voor detail.",
    rating: 5
  },
  {
    id: 8,
    name: "Lucas de Vries",
    text: "Topkwaliteit en een zeer nette afwerking.",
    rating: 5
  }
];

export default function SocialProof() {
  return (
    <div className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Vertrouwd door Duizenden</h2>
            <div className="flex justify-center space-x-12 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">5000+</p>
                <p className="text-gray-600">Installaties</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-gray-600">Tevreden Klanten</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-gray-600">Jaar Ervaring</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex">
            <motion.div
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }
              }}
              className="flex flex-nowrap gap-6"
            >
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-80 bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}