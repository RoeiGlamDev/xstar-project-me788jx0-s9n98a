import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col mb-6 md:mb-0"
        >
          <h2 className="text-2xl font-bold mb-2">{companyName}</h2>
          <p className="text-sm">
            Indulge in the elegance of luxury LRP cosmetics. Our products are designed to enhance your natural beauty with the finest ingredients.
          </p>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-orange-500 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-orange-500 transition duration-300">Products</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </nav>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a key={link.platform} href={link.url} className="hover:text-orange-500 transition duration-300">
                <i className={`fab fa-${link.platform.toLowerCase()`}}></i>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;