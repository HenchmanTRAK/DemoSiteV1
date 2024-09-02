/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.henchman.com.au',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.henchmanusa.com',
        port: '',
      }
    ],
  },
};

export default nextConfig;
