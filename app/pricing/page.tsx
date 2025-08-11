import React from 'react';
import { motion } from 'framer-motion';

interface PricingItem {
    name: string;
    price: string;
    features: string[];
}

const pricingItems: PricingItem[] = [
    {
        name: 'Signature Glow Package',
        price: '$120',
        features: [
            'Custom Skin Consultation',
            'Luxury Facial Treatment',
            'Exclusive Product Samples',
            'Follow-Up Care Kit'
        ]
    },
    {
        name: 'Radiance Revive Package',
        price: '$200',
        features: [
            'Personalized Beauty Assessment',
            'Hydration Infusion Treatment',
            'Premium Product Samples',
            'Complimentary Touch-Up Service'
        ]
    },
    {
        name: 'Ultimate Luxe Experience',
        price: '$350',
        features: [
            'Comprehensive Skin Analysis',
            'Elite Spa Facial Treatment',
            'Full-Size Product Set',
            'Priority Access to New Launches'
        ]
    }
];

const Pricing: React.FC = () => {
    return (
        <div className="bg-white text-gray-800 p-10">
            <motion.div 
                className="text-4xl font-bold text-orange-600 mb-6" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Luxury LRP Cosmetics Pricing
            </motion.h1>
            <motion.div 
                className="min-w-full border border-orange-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <thead className="bg-orange-600 text-white">
                    <tr>
                        <th className="px-4 py-2">Package</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Features</th>
                    </tr>
                </thead>
                <tbody>
                    {pricingItems.map((item, index) => (
                        <tr key={index} className="hover:bg-orange-100 transition duration-200">
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.price}</td>
                            <td className="border px-4 py-2">
                                <ul>
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="list-disc list-inside">{feature}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </motion.table>
            <section className="mt-10">
                <motion.div 
                    className="text-2xl font-semibold text-orange-600 mb-4" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <div className="bg-orange-50 p-4 rounded border border-orange-200">
                    <motion.div 
                        className="font-medium text-orange-600" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        What is included in each package?
                    </motion.h3>
                    <p>
                        Each package includes a personalized consultation, luxury treatments, and exclusive product samples tailored to your needs.
                    </p>
                </div>
                <div className="bg-orange-50 p-4 rounded border border-orange-200 mt-4">
                    <motion.div 
                        className="font-medium text-orange-600" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        How do I book a session?
                    </motion.h3>
                    <p>
                        You can book your session online through our website or contact our customer service for assistance.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Pricing;