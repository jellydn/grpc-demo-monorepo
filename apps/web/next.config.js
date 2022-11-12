/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  swcMinify: true,
  // workaround for getting .js from protobuf generation
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      extensionAlias: {
        ".js": [".ts", ".js"],
      },
    };

    return config;
  },
};
