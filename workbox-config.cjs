module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,css,html,png,jpg,svg,woff2,woff}"],
  globIgnores: ["**/node_modules/**/*"],
  swDest: "dist/sw.js",
  clientsClaim: true,
  skipWaiting: true,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
  cleanupOutdatedCaches: true,
  cacheId: "utility-app-v1",
};
