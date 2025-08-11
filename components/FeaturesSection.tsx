import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'Our cosmetics are crafted with the finest ingredients, ensuring a luxurious experience for your skin.',
    icon: '🌿',
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product comes in beautifully designed packaging that reflects the luxury of luxury LRP cosmetics.',
    icon: '📦',
  },
  {
    title: 'Personalized Consultation',
    description: 'Enjoy personalized consultations to find the perfect products tailored to your unique beauty needs.',
    icon: '💁‍♀️',
  },
  {
    title: 'Sustainable Practices',
    description: 'We prioritize sustainability, ensuring that our luxurious products are also kind to the planet.',
    icon: '🌍',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-orange-600">Discover the Luxury of luxury LRP cosmetics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              aria-label={feature.title}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-orange-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;