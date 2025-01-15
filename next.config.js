const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4499', // Якщо порт є частиною вашої URL
        pathname: '/covers/**', // Якщо у вас є певний шаблон для шляхів
      },
      {
        protocol: 'https',
        hostname: 'karmolog4u-backend-dev-production.up.railway.app',
        pathname: '/covers/**', // Якщо у вас є певний шаблон для шляхів
      },
      {
        protocol: 'https',
        hostname: 'karmolog-dev.up.railway.app',
        pathname: '/covers/**', // Якщо у вас є певний шаблон для шляхів
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
