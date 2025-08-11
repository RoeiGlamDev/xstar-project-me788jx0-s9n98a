import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useAnimation } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Mesh[] = [];
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i  3] = (Math.random() - 0.5)  10;
      positions[i  3 + 1] = (Math.random() - 0.5)  10;
      positions[i  3 + 2] = (Math.random() - 0.5)  10;

      colors[i * 3] = 1.0; // White
      colors[i * 3 + 1] = 0.5; // Orange
      colors[i * 3 + 2] = 0.0; // Orange
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);
    particles.push(particlesMesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(particle => {
        particle.rotation.x += 0.001;
        particle.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <h1 className="text-5xl font-bold text-orange-500 hover:text-orange-600 transition duration-300">
          luxury LRP cosmetics
        </h1>
        <p className="mt-4 text-lg text-white text-center">
          Indulge in the elegance of our luxury cosmetics, designed to enhance your natural beauty with sophistication.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
          Explore Our Collection
        </button>
      </div>
    </div>
  );
};

export default ParticleBackground;