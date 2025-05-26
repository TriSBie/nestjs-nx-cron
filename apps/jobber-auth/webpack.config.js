const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/jobber-auth'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node', // builds for node
      compiler: 'tsc', // uses the TypeScript compiler
      main: './src/main.ts', // entry point
      tsConfig: './tsconfig.app.json', // tsconfig file
      assets: ['./src/assets'], // assets
      optimization: false, // no optimization
      outputHashing: 'none', // no hashing
      generatePackageJson: true, // generate package.json
    }),
  ],
};
