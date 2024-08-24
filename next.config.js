/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/engida",
};

module.exports = nextConfig;
