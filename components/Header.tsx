import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-serif text-orange-500">luxury LRP cosmetics</h1>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <motion.div
            href="#products"
            className="block text-gray-800 hover:text-orange-500 transition duration-300 mb-2"
            whileHover={{ scale: 1.05}}
          >
            Products
          </motion.a>
          <motion.div
            href="#about"
            className="block text-gray-800 hover:text-orange-500 transition duration-300 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="block text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>
      )}
    </header>
  );
};

export default Header;