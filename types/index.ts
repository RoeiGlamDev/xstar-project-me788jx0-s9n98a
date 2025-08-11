import { Product } from './product';
import { User } from './user';

/
 * Represents the luxury LRP cosmetics brand.
 * @interface Brand
 */
export interface Brand {
    name: string; // The name of the brand
    colors: string[]; // The primary colors associated with the brand
}

/
 * Represents a cosmetic product in the luxury LRP cosmetics line.
 * @interface CosmeticProduct
 */
export interface CosmeticProduct extends Product {
    /
     * The specific category of the cosmetic product (e.g., foundation, lipstick).
     */
    category: string;

    /
     * The description of the product highlighting its luxury features.
     */
    luxuryDescription: string;

    /
     * The price of the product in USD.
     */
    price: number;

    /
     * The 3D design URL for the product showcasing its luxury appeal.
     */
    designUrl: string;

    /
     * The ingredients used in the cosmetic product.
     */
    ingredients: string[];

    /
     * The launch date of the product.
     */
    launchDate: Date;
}

/
 * Represents a user in the luxury LRP cosmetics application.
 * @interface UserProfile
 */
export interface UserProfile extends User {
    /
     * The user's skin type (e.g., oily, dry, combination).
     */
    skinType: string;

    /
     * The user's preferred luxury LRP cosmetics products.
     */
    preferredProducts: CosmeticProduct[];
}

/
 * Represents the luxury LRP cosmetics brand information.
 * @constant {Brand}
 */
export const luxuryLRPBrand: Brand = {
    name: "luxury LRP cosmetics",
    colors: ["#FFA500", "#FFFFFF"], // Orange and White
};

/
 * Represents a luxury LRP cosmetics product.
 * @param {string} category - The category of the product.
 * @param {string} luxuryDescription - A description highlighting luxury features.
 * @param {number} price - The price of the product.
 * @param {string} designUrl - URL for the 3D design of the product.
 * @param {string[]} ingredients - Ingredients used in the product.
 * @param {Date} launchDate - The launch date of the product.
 * @returns {CosmeticProduct} - The created cosmetic product object.
 */
export function createCosmeticProduct(
    category: string,
    luxuryDescription: string,
    price: number,
    designUrl: string,
    ingredients: string[],
    launchDate: Date
): CosmeticProduct {
    return {
        category,
        luxuryDescription,
        price,
        designUrl,
        ingredients,
        launchDate,
    };
}