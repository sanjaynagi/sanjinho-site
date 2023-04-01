// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    });

    return config;
  },
};
