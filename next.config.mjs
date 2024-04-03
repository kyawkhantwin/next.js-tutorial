/** @type {import('next').NextConfig} */
const nextConfig = {
 
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: "images.pexels.com" }
    ],
  }
};

export default nextConfig;
