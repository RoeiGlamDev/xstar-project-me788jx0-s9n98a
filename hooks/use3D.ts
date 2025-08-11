import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * A custom hook that sets up a 3D scene for luxury LRP cosmetics.
 * This hook uses Three.js to create an interactive 3D environment
 * that showcases luxury cosmetics products in an elegant manner.
 * 
 * @returns {Object} - The 3D scene and rendering functions.
 */
export interface LuxuryLRPCosmeticsScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  animate: () => void;
}

export const use3D = (): LuxuryLRPCosmeticsScene => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    // Initialize the scene
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0xffffff); // White background for elegance

    // Set up camera
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current.position.z = 5;

    // Set up renderer
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererRef.current.domElement);

    // Add a luxury LRP cosmetics product model (example placeholder)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff7f00 }); // Orange color
    const cube = new THREE.Mesh(geometry, material);
    sceneRef.current.add(cube);

    // Lighting for luxury feel
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    sceneRef.current.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      document.body.removeChild(rendererRef.current!.domElement);
    };
  }, []);

  return {
    scene: sceneRef.current!,
    camera: cameraRef.current!,
    renderer: rendererRef.current!,
    animate: () => {
      if (rendererRef.current) {
        rendererRef.current.render(sceneRef.current!, cameraRef.current!);
      }
    },
  };
};