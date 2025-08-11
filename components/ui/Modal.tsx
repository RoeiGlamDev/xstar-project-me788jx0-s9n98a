import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full transform transition-all"
            initial={{ scale: 0}}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
              Luxury LRP Cosmetics
            </h2>
            <p className="text-gray-700 mb-6">
              Experience the essence of luxury with our premium range of cosmetics tailored for the sophisticated individual. Indulge in our exclusive products designed to enhance your natural beauty and elevate your daily routine.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;