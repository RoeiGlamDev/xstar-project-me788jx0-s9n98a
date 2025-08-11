export const BRAND_NAME = "luxury LRP cosmetics";
export const PRIMARY_COLOR = "#FFA500"; // Orange
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration settings for the luxury LRP cosmetics application.
 */
export const CONFIG = {
    siteTitle: "luxury LRP cosmetics - Elevate Your Beauty",
    siteDescription: "Discover the elegance of luxury LRP cosmetics, where high-end beauty meets sophistication.",
    logoUrl: "/assets/images/logo.png", // Path to the logo image
    faviconUrl: "/assets/images/favicon.ico", // Path to the favicon
    contactEmail: "info@luxurylrpcosmetics.com", // Contact email for inquiries
    socialMediaLinks: {
        facebook: "https://www.facebook.com/luxurylrpcosmetics",
        instagram: "https://www.instagram.com/luxurylrpcosmetics",
        twitter: "https://twitter.com/luxurylrpcosmetics",
    },
};

/
 * Interface for product details specific to luxury LRP cosmetics.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string; // e.g., "foundation", "lipstick", etc.
    imageUrl: string; // URL to the product image
    isFeatured: boolean; // Flag for featured products
}

/
 * Sample product data for luxury LRP cosmetics.
 */
export const sampleProducts: Product[] = [
    {
        id: "prod01",
        name: "Luxurious Matte Lipstick",
        description: "A high-pigment matte lipstick that glides on smoothly for a rich, luxurious finish.",
        price: 29.99,
        category: "lipstick",
        imageUrl: "/assets/images/products/luxurious-matte-lipstick.png",
        isFeatured: true,
    },
    {
        id: "prod02",
        name: "Silk Touch Foundation",
        description: "A lightweight foundation that provides flawless coverage with a silk-like finish.",
        price: 49.99,
        category: "foundation",
        imageUrl: "/assets/images/products/silk-touch-foundation.png",
        isFeatured: true,
    },
    {
        id: "prod03",
        name: "Radiant Glow Highlighter",
        description: "Illuminate your features with our luxurious highlighter, perfect for a radiant glow.",
        price: 39.99,
        category: "highlighter",
        imageUrl: "/assets/images/products/radiant-glow-highlighter.png",
        isFeatured: false,
    },
];