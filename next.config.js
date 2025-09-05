const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        tls: false,
        net: false,
        child_process: false,
      };
    }

    return config
  },
  images: {
    domains: [
      'via.placeholder.com', 
      'drive.google.com',
      'lh3.googleusercontent.com'
    ],
  },
}

module.exports = nextConfig;