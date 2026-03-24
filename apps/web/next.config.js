/** @type {import('next').NextConfig} */
const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  transpilePackages: ["@health-watchers/types"],
};

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
});
