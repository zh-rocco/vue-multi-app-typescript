const path = require('path');

module.exports = {
  baseUrl: '/',

  outputDir: 'dist/' + process.env.ENTRY_TYPE,

  indexPath: 'index.html',

  devServer: {
    proxy: {
      '/api/ccenter': {
        target: '',
        changeOrigin: true,
        pathRewrite: { '^/api': '/' },
      },
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: { '^/api': '/' },
      },
    },
  },
};
