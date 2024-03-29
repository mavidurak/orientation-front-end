module.exports = {
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' },
      },
    },
    port: 8080,
  },
};
