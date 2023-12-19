const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v2", // Adjust the path based on your API endpoint
    createProxyMiddleware({
      target: "https://newsapi.org",
      changeOrigin: true,
    })
  );
};
