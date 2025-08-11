import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
    title: string;
    price: string;
    features: string[];
}

const pricingTiers: PricingTier[] = [
    {
        title: 'Essential Glam',
        price: '$99',
        features: [
            'Personalized Skin Consultation',
            'Makeup Application for Day Events',
            'Luxury Product Samples',
            '15% off Future Purchases',
        ],
    },
    {
        title: 'Premium Luxe',
        price: '$199',
        features: [
            'All Essential Glam Features',
            'Evening Makeup Application',
            'Exclusive Access to New Product Launches',
            '20% off Future Purchases',
        ],
    },
    {
        title: 'Ultimate Indulgence',
        price: '$299',
        features: [
            'All Premium Luxe Features',
            'Full Day Makeup Experience',
            'Custom Makeup Palette Creation',
            'Complimentary Skincare Consultation',
            '30% off Future Purchases',
        ],
    },
];

const PricingSection: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center">
                <motion.div
                    className="text-4xl font-bold text-orange-600 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Pricing Plans for luxury LRP cosmetics
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            className="bg-orange-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.title}</h3>
                            <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
                            <ul className="list-disc list-inside mb-6">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="text-gray-700">{feature}</li>
                                ))}
                            </ul>
                            <a href="/contact" className="inline-block bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;