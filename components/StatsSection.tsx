import React from 'react';
import { motion } from 'framer-motion';

interface StatsData {
  title: string;
  value: number;
  description: string;
}

const stats: StatsData[] = [
  {
    title: 'Products Launched',
    value: 50,
    description: 'High-end cosmetic products crafted with luxury in mind.',
  },
  {
    title: 'Happy Customers',
    value: 15000,
    description: 'Satisfied customers who indulge in luxury LRP cosmetics.',
  },
  {
    title: 'Awards Won',
    value: 10,
    description: 'Recognized globally for excellence in cosmetics.',
  },
  {
    title: 'Years of Experience',
    value: 5,
    description: 'Five years of delivering luxury beauty solutions.',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          Achievements of luxury LRP cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-orange-600">
                {stat.value}
              </h3>
              <p className="text-lg text-gray-700 font-medium mt-2">
                {stat.title}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;