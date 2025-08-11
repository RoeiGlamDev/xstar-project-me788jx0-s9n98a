import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formValues.name) newErrors.name = 'Name is required.';
    if (!formValues.email) newErrors.email = 'Email is required.';
    if (!formValues.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Logic to send the form data to a server can be added here

    setSubmitted(true);
    setFormValues({ name: '', email: '', message: '', reason: 'General Inquiry' });
    setErrors({});
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact luxury LRP cosmetics
        </motion.h2>
        <p className="text-lg text-gray-700 mb-8">
          For inquiries about our luxurious cosmetics or to learn more about our products, please fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="bg-orange-100 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className={w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="reason">Reason for Contact</label>
            <select
              name="reason"
              value={formValues.reason}
              onChange={handleChange}
              className="w-full p-3 border rounded border-gray-300"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Information">Product Information</option>
              <option value="Feedback">Feedback</option>
              <option value="Collaboration">Collaboration</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              className={w-full p-3 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <motion.div
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded shadow hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
        {submitted && <p className="mt-6 text-green-500">Thank you for contacting luxury LRP cosmetics!</p>}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-orange-500">Business Information</h3>
          <p className="text-lg text-gray-700">luxury LRP cosmetics</p>
          <p className="text-lg text-gray-700">123 Luxury St, Beautytown, BT 12345</p>
          <p className="text-lg text-gray-700">Business Hours: Mon-Fri 9am - 6pm | Sat 10am - 4pm</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;