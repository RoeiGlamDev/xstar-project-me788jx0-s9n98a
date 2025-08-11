import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <label className="block text-white text-lg font-semibold mb-2">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={w-full p-4 border-2 ${
          error ? 'border-red-500' : 'border-orange-500'
        } rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-gray-800 shadow-md ${
          isFocused ? 'shadow-lg' : ''
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;