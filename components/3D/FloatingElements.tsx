import { useEffect, useRef } from 'react';
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  title: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ title }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <motion.div ref={meshRef} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#FF6F20" />
        </motion.mesh>
        <OrbitControls />
      </Canvas>
      <div className="absolute text-center">
        <h1 className="text-5xl font-bold text-orange-600">{title}</h1>
        <p className="mt-4 text-xl text-gray-700">Experience the luxury of high-end cosmetics with luxury LRP cosmetics.</p>
      </div>
    </div>
  );
};

export default FloatingElements;