import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {
  businessHours: string;
  location: string;
}

const ContactPage: React.FC<ContactPageProps> = () => {
  const businessHours = "Monday - Friday: 9 AM - 6 PM | Saturday: 10 AM - 4 PM | Sunday: Closed";
  const location = "123 Luxury Ave, Glamour City, CA 90210";

  return (
    <div className="bg-white text-orange-600 min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Contact luxury LRP cosmetics</h1>
        <p className="text-lg mb-4 text-center">
          We would love to hear from you! Please fill out the form below for any inquiries regarding our luxury cosmetics.
        </p>

        <form className="bg-orange-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <p className="text-lg">{location}</p>
          <h3 className="text-xl font-semibold mt-4">Business Hours</h3>
          <p className="text-lg">{businessHours}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;