import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "luxury LRP cosmetics", 
  subtitle = "Indulge in our exclusive range of luxurious cosmetics, designed to elevate your beauty routine.", 
  ctaText = "Explore Our Collection", 
  ctaLink = "/collection" 
}) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: ''url('/path/to/luxury-background.jpg')' '}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 text-center p-10">
        <motion.div 
          className="text-5xl font-bold text-orange-600 tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="mt-4 text-lg text-white font-light"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          href={ctaLink} 
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.a>
        <div className="mt-8 text-white text-sm">
          <p>Trusted by beauty enthusiasts worldwide.</p>
          <p>Experience the essence of luxury with every application.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;