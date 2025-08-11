import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Chen',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Carter',
    role: 'Creative Director',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Lead Chemist',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <div className="container mx-auto p-10">
        <motion.div
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          At luxury LRP cosmetics, we believe in the transformative power of beauty. Our journey began with a passion for creating high-end cosmetic products that not only enhance your natural beauty but also embody elegance, sophistication, and luxury. 
        </motion.p>
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <motion.div
          className="text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Founded in 2020, luxury LRP cosmetics has rapidly grown to become a leader in the cosmetics industry. Our commitment to quality and innovation has allowed us to develop a range of products loved by beauty enthusiasts worldwide. 
        </motion.p>
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>
        <motion.div
          className="text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We are dedicated to sustainability, using ethically sourced ingredients and eco-friendly packaging. Our values are rooted in transparency, integrity, and a commitment to enhancing the beauty of our customers while making a positive impact on the world.
        </motion.p>
        
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <motion.div
              key={member.name}
              className="bg-orange-100 rounded-lg shadow-lg p-5 text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-md text-orange-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;