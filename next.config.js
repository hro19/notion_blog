/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'images.unsplash.com',
      'cdn.pixabay.com',
      'placehold.jp',
    ],
  },
  "presets": ['jotai/babel/preset']
};

module.exports = nextConfig;
