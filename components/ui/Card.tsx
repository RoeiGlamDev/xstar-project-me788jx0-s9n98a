import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden p-6 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-orange-600 text-2xl font-bold text-center mb-2">
          {title}
        </h2>
        <p className="text-gray-700 text-base text-center">
          {description}
        </p>
        <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg transition-colors duration-300 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;