import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-full h-screen bg-gradient-to-b from-orange-400 to-white flex items-center justify-center">
            <motion.div
                className="text-5xl md:text-7xl font-bold text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Welcome to luxury LRP cosmetics
            </motion.h1>
            <motion.div
                className="mt-4 text-lg md:text-xl text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Elevate your beauty with our luxurious range of cosmetics.
            </motion.p>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <motion.div
                    className="text-4xl font-bold text-orange-400"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose luxury LRP cosmetics?
                </motion.h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-400">Premium Quality</h3>
                        <p className="mt-2 text-gray-700">
                            Our products are crafted with the finest ingredients for luxurious results.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-400">Elegant Design</h3>
                        <p className="mt-2 text-gray-700">
                            Experience beauty in sophisticated packaging that reflects luxury.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-400">Sustainable Practices</h3>
                        <p className="mt-2 text-gray-700">
                            Committed to eco-friendly practices, we care for both beauty and the planet.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const LuxuryLRPCosmetics: React.FC = () => {
    return (
        <div className="font-sans">
            <HeroSection />
            <FeaturesSection />
        </div>
    );
};

export default LuxuryLRPCosmetics;