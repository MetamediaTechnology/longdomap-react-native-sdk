const path = require('path');

module.exports = {
  watchFolders: [
    path.resolve(__dirname, 'dist'), // Adjust this path if needed
  ],
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'cjs'], // Add any other extensions your library may use
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg'], // Adjust for your asset types
  },
};