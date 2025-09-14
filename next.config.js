/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['i.imgur.com'],
    formats: ['image/webp', 'image/avif'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
        },
      },
    });
    return config;
  },
}

module.exports = nextConfig
