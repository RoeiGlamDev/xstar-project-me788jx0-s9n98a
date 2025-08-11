import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Reynolds',
    photo: '/images/testimonials/sophia.jpg',
    review: 'Luxury LRP cosmetics transformed my skin! The products feel divine and the results are remarkable.',
    rating: 5,
  },
  {
    name: 'Isabella Chen',
    photo: '/images/testimonials/isabella.jpg',
    review: 'I have never experienced such premium quality. The packaging is stunning, and the formulas are luxurious.',
    rating: 5,
  },
  {
    name: 'Olivia Martinez',
    photo: '/images/testimonials/olivia.jpg',
    review: 'The attention to detail in every product is impressive. Luxury LRP cosmetics is my go-to brand now!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-orange-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <div className="flex justify-center mb-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.121-6.528L1 7.91l6.545-.952L10 1l2.455 5.958L19 7.91l-4.243 3.652 1.121 6.528z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;