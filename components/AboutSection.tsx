import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Williams',
    title: 'Founder & CEO',
    bio: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision for unparalleled beauty.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    title: 'Chief Product Officer',
    bio: 'Liam brings expertise in product development, ensuring each luxury LRP cosmetics product meets the highest standards of quality and innovation.',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    title: 'Marketing Director',
    bio: 'Olivia crafts the brand’s luxurious presence in the market, connecting with beauty enthusiasts worldwide to share the essence of luxury LRP cosmetics.',
    image: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-orange-600 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-6">About luxury LRP cosmetics</h2>
        <p className="text-lg text-center mb-8">
          At luxury LRP cosmetics, we believe in enhancing natural beauty through high-quality, luxurious products. Founded with a passion for elegance and sophistication, our journey began with a mission to redefine beauty standards in the cosmetics industry.
        </p>
        <h3 className="text-2xl font-semibold text-center mb-4">Our Mission</h3>
        <p className="text-lg text-center mb-8">
          Our mission is to provide premium cosmetics that empower individuals to express their unique beauty. We focus on sustainability, innovation, and excellence, ensuring our products not only elevate your beauty routine but also contribute positively to the environment.
        </p>
        <h3 className="text-2xl font-semibold text-center mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h4 className="text-xl font-bold mt-2">{member.name}</h4>
              <p className="text-md italic">{member.title}</p>
              <p className="text-md mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-center mt-8">Our Values</h3>
        <p className="text-lg text-center mb-8">
          luxury LRP cosmetics is committed to excellence, sustainability, and inclusivity. We take pride in our achievements, including numerous awards for innovation and customer satisfaction in the cosmetics industry.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;