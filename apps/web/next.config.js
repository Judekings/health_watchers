/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  transpilePackages: ["@health-watchers/types"],
  webpack(config) {
    config.resolve.alias['@web'] = path.join(__dirname, 'src');
    return config;
  },
};
module.exports = nextConfig;
