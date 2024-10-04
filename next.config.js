/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'], 
    defaultLocale: 'es',
    localeDetection: true,   
  },
};
module.exports = nextConfig;