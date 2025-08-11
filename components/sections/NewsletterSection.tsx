import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title = "Join the Luxury LRP Cosmetics Community", subtitle = "Subscribe for exclusive updates and special offers" }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log(Email submitted: ${email});
    setEmail('');
  };

  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div 
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
          <input 
            type="email" 
            required 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border-2 border-orange-500 rounded-l-md p-2 md:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          />
          <motion.div 
            type="submit" 
            className="bg-orange-500 text-white font-semibold rounded-r-md p-2 md:p-3 hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;