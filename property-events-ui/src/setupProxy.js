const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
   app.use(createProxyMiddleware('/property-events',
      { target: 'http://localhost:8080/', secure: false, changeOrigin: false }
   ));

   app.use(createProxyMiddleware('/singularity-support',
      { target: 'http://localhost:8080/', secure: false, changeOrigin: true }
   ));
}
