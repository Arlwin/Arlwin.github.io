/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true },
  // redirects: async () => [
  //   {
  //     source: '/',
  //     destination: '/home',
  //     permanent: true,
  //   },
  // ]
}

module.exports = nextConfig
