import { useEffect, useRef } from 'react';

/
 * useAnimation Hook for luxury LRP cosmetics
 * 
 * This custom hook provides animation support for components within 
 * the luxury LRP cosmetics website, enhancing user experience with 
 * elegant 3D effects that reflect the high-end nature of the brand.
 * 
 * @param {string} animationClass - The CSS class for the animation.
 * @param {number} duration - Duration of the animation in milliseconds.
 * @returns {React.RefObject<HTMLDivElement>} - Ref to the DOM element to apply the animation.
 */
export const useAnimation = (animationClass: string, duration: number): React.RefObject<HTMLDivElement> => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            // Apply animation class
            element.classList.add(animationClass);
            // Remove class after animation duration
            const timeoutId = setTimeout(() => {
                element.classList.remove(animationClass);
            }, duration);

            // Cleanup function to clear the timeout
            return () => clearTimeout(timeoutId);
        }
    }, [animationClass, duration]);

    return elementRef;
};

/
 * Animation class examples for luxury LRP cosmetics
 * 
 * These classes can be used to apply specific animations to elements.
 */
export const animationClasses = {
    fadeIn: 'fade-in-animation',
    scaleUp: 'scale-up-animation',
    rotate: 'rotate-animation',
};

/
 * Types and interfaces for luxury LRP cosmetics animations
 */
export interface AnimationProps {
    animationType: keyof typeof animationClasses;
    duration: number; // Duration in milliseconds
}

/
 * Example usage of useAnimation hook
 * 
 * const MyComponent: React.FC = () => {
 *     const ref = useAnimation(animationClasses.fadeIn, 1000);
 * 
 *     return (
 *         <div ref={ref} className="luxury-lrp-cosmetics-item">
 *             <h1>Welcome to luxury LRP cosmetics</h1>
 *         </div>
 *     );
 * };
 */