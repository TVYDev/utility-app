module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,css,html,png,jpg,svg,woff2,woff}"],
  globIgnores: ["**/node_modules/**/*"],
  swDest: "dist/sw.js",
  clientsClaim: true,
  skipWaiting: true,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
  cleanupOutdatedCaches: true,
  cacheId: "toolifybox-v1.0.11",
  // Handle navigation requests (SPA routing)
  navigateFallback: "/index.html",
  navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
  // Add runtime caching for navigation requests
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/www\.toolifybox\.app\//,
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
        },
      },
    },
  ],
};
