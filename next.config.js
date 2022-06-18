/** @type {import('next').NextConfig} */

const withVideo = require('next-video');

const nextConfig = withVideo && {
  reactStrictMode: true,
}

module.exports = nextConfig
