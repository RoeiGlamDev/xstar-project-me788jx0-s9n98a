import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Elevate Your Beauty with luxury LRP cosmetics", 
  subtitle = "Discover our exclusive range of high-end cosmetics that enhance your natural elegance.", 
  buttonText = "Shop Now", 
  buttonLink = "/shop" 
}) => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {subtitle}
        </p>
        <motion.div 
          href={buttonLink} 
          className="inline-block bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default CTASection;