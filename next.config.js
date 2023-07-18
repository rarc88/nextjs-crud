/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/logs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
