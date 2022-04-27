/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.zeplin.io', 'challenge.agenciaego.tech'],
  },
};

module.exports = nextConfig;
