const PLATFORM = process.env.VUE_APP_PLATFORM || 'pc';

console.log('VUE_APP_PLATFORM: ', PLATFORM);
console.log('NODE_ENV: ', process.env.NODE_ENV);

module.exports = {
  baseUrl: './',

  outputDir: `dist/${PLATFORM}/`,

  configureWebpack: {
    entry: `./src/${PLATFORM}/main.ts`,
  },

  // devServer: {
  //   proxy: {
  //     '/api/ccenter': {
  //       target: '',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '/' },
  //     },
  //     '/api': {
  //       target: '',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '/' },
  //     },
  //   },
  // },
};
