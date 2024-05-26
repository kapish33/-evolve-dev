/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.pexels.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
