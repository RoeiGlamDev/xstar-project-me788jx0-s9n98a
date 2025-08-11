import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application
 * 
 * This file contains various utility functions that are specifically tailored for
 * the luxury LRP cosmetics brand, enhancing the user experience with elegant
 * design and formatting functions.
 * 
 * @module utils
 */

/
 * Represents a product in the luxury LRP cosmetics catalog.
 * 
 * @interface Product
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Description of the product.
 * @property {number} price - Price of the product in USD.
 * @property {string} imageUrl - URL of the product image.
 * @property {boolean} inStock - Availability of the product.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
}

/
 * Formats the price of a product to a luxury standard.
 * 
 * @param price - The price to format.
 * @returns A string representing the formatted price.
 * 
 * @example
 * const formattedPrice = formatPrice(29.99); // "$29.99"
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * Generates a luxury LRP cosmetics-specific class name based on the provided base name.
 * 
 * @param base - The base class name to customize.
 * @returns A string representing the customized class name.
 * 
 * @example
 * const className = cn('button'); // "luxury-LRP-cosmetics-button"
 */
export function cn(base: string): string {
    return luxury-LRP-cosmetics-${base};
}

/
 * Formats a date to the luxury LRP cosmetics brand standard.
 * 
 * @param date - The date to format.
 * @returns A string representing the formatted date.
 * 
 * @example
 * const formattedDate = formatDate(new Date()); // "October 23, 2023"
 */
export function formatDate(date: Date): string {
    return format(date, 'MMMM dd, yyyy');
}

/
 * Example of a function that could retrieve products with luxury LRP cosmetics branding.
 * 
 * @returns An array of luxury LRP cosmetics products.
 */
export function getLuxuryProducts(): Product[] {
    return [
        {
            id: '1',
            name: 'Radiant Luxe Foundation',
            description: 'Achieve a flawless complexion with our Radiant Luxe Foundation, infused with luxurious ingredients for a radiant finish.',
            price: 55.00,
            imageUrl: 'https://example.com/images/radiant-luxe-foundation.jpg',
            inStock: true,
        },
        {
            id: '2',
            name: 'Velvet Matte Lipstick',
            description: 'Indulge in the elegance of our Velvet Matte Lipstick, offering rich color and moisturizing benefits for a luxurious feel.',
            price: 30.00,
            imageUrl: 'https://example.com/images/velvet-matte-lipstick.jpg',
            inStock: true,
        },
        {
            id: '3',
            name: 'Illuminating Face Primer',
            description: 'Our Illuminating Face Primer provides the perfect canvas for makeup, enhancing your natural glow with a touch of luxury.',
            price: 40.00,
            imageUrl: 'https://example.com/images/illuminating-face-primer.jpg',
            inStock: false,
        },
    ];
}