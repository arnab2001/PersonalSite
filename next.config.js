/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'your-supabase-storage.supabase.co',
      'cdn.hashnode.com',
      'images.hashnode.com'
    ], // Add your Supabase storage domain if using
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
