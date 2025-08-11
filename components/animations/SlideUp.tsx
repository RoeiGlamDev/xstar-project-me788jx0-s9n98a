import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full p-5 bg-white rounded-lg shadow-lg"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <h2 className="text-3xl font-bold text-orange-600 mb-4">
        Welcome to luxury LRP cosmetics
      </h2>
      <p className="text-lg text-gray-800 mb-6">
        Experience the epitome of elegance and sophistication with our premium cosmetic products, designed for discerning beauty enthusiasts.
      </p>
      <div className="flex space-x-4 mt-4">
        <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-500 focus:outline-none">
          Shop Now
        </button>
        <button className="px-6 py-2 border border-orange-600 text-orange-600 font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-orange-600 hover:text-white focus:outline-none">
          Learn More
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default SlideUp;