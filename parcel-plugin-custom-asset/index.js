module.exports = function(bundler) {
  const jsAsset = require.resolve('./js-asset.js');
  bundler.addAssetType('js', jsAsset);
};
