const withAssetsManifest = require('next-assets-manifest');

module.exports = withAssetsManifest({
  // These options are used for both client and server manifest plugins.
  assetsManifest: {
    done(manifest) {
      console.log(`${manifest}`);
    },
  },
  // Customize the client side manifest.
  assetsManifestClient: {
    output: 'client-manifest.json',
  },
  // Customize the server side manifest.
  assetsManifestServer: {
    output: 'server-manifest.json',
  },
});