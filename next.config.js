const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['en', 'es'], 
      defaultLocale: 'es', 
      localeDetection: true, 
    },
  };
module.exports = withNextIntl(nextConfig);
