import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  // Define any props if needed
}

const Scene: React.FC<SceneProps> = () => {
  useEffect(() => {
    // Initialize any 3D models or effects here
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <motion.div
        className="text-5xl font-bold text-orange-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-xl text-gray-700 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience the elegance and sophistication of our premium cosmetic line, tailored for the discerning beauty aficionado.
      </motion.p>
      <Canvas className="w-full h-full">
        <OrbitControls />
        {/ Add 3D Models and Luxurious Elements Here /}
      </Canvas>
      <motion.div
        className="mt-8 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default Scene;