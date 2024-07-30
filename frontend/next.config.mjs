/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        "mock-aws-s3": false,
        "aws-sdk": false,
      };
    }

    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader',
    });

    return config;
  },
};

export default nextConfig;
