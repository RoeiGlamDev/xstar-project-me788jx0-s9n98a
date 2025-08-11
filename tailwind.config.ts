import type { Config } from "tailwindcss";

/
 * Tailwind CSS configuration for the luxury LRP cosmetics brand.
 * This configuration aims to create a luxurious, elegant, and high-end design
 * focused on the cosmetics industry, utilizing a custom orange and white color scheme.
 * 
 * @constant {Config} config - Tailwind CSS configuration object
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // Custom orange color for luxury LRP cosmetics
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white color for luxury LRP cosmetics
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

/
 * Interface representing a product in the luxury LRP cosmetics line.
 * This interface defines the structure for product details including name, price, and description.
 */
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

/
 * Function to get a list of luxury LRP cosmetics products.
 * This function simulates fetching product data for the cosmetics website.
 * 
 * @returns {Product[]} - Array of luxury LRP cosmetics products
 */
const getProducts = (): Product[] => {
  return [
    {
      id: 1,
      name: 'Luxurious Lipstick',
      price: 30,
      description: 'A rich, creamy lipstick that provides full coverage and a luxurious finish.',
      imageUrl: '/images/luxurious-lipstick.png',
    },
    {
      id: 2,
      name: 'Silk Foundation',
      price: 50,
      description: 'A lightweight foundation that glides on smoothly for a flawless complexion.',
      imageUrl: '/images/silk-foundation.png',
    },
    {
      id: 3,
      name: 'Radiant Blush',
      price: 25,
      description: 'A silky blush that delivers a natural flush of color with a luxurious glow.',
      imageUrl: '/images/radiant-blush.png',
    },
  ];
};

export { config, getProducts, Product };