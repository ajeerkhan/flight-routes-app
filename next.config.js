const path = require('path');
const withPWA = require('next-pwa');
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development' || process.env.DISABLE_PWA === 'true',
    //scope: '/app',
  },
  reactStrictMode: true,
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
  env: {
  },
  i18n: {
    locales: ['en', 'ja', 'ru-RU','ar-AE'],
    defaultLocale: 'en',
  },  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //update if any customization required in webpack configuration.
    return config
  },
});
