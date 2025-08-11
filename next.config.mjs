

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: []
},
  webpack(config) {
    
    return config;
  },
  experimental: {
    optimizeCss: true
}
};

export default nextConfig;