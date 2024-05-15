const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

console.log({ BASE_PATH });
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: BASE_PATH,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.nhm.ac.uk",
      "nhm.ac.uk",
      "staging.nhm.ac.uk",
      "qa-aem.nhm.ac.uk",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
