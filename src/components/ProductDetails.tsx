import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

interface ProductDetailsProps {
  specifications: {
    title: string;
    items: string[];
  }[];
  applications: {
    title: string;
    description: string;
    image: string;
  }[];
  benefits: string[];
  materials: {
    name: string;
    description: string;
    features: string[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
    rating: number;
  };
}

export default function ProductDetails({
  specifications,
  applications,
  benefits,
  materials,
  testimonial
}: ProductDetailsProps) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Specifications */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Toepassingen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                    {app.title}
                  </h3>
                </div>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Voordelen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Materials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Materialen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{material.name}</h3>
                <p className="text-gray-600 mb-6">{material.description}</p>
                <ul className="space-y-3">
                  {material.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {testimonial && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-12 text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "{testimonial.quote}"
            </blockquote>
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
          </motion.section>
        )}
      </div>
    </div>
  );
}