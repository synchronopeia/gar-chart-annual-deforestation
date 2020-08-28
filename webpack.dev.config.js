'use strict';

const path = require('path');
const assert = require('assert');

/**
 * We use configstore (https://www.npmjs.com/package/configstore) for managing config data.
 * Adjust accordingly for dotenv or if using literals to set the required CONSTANTS.
 */

const Configstore = require('configstore');

const webpack = require('webpack');

const packageJson = require('./package.json');

const config = new Configstore('garancaa');

/** Constants from package.json */

const PACKAGE_NAME = packageJson.name;
const PACKAGE_VERSION = packageJson.version;

/** REQUIRED constants from Configstore (use dotenv or set them with literals) */

const DEV_SERVER_PORT = config.get('DEV_SERVER_PORT') || 3001;
const DEV_SERVER_CHROME_CONFIG_PATH = config.get('DEV_SERVER_CHROME_CONFIG_PATH');
const API_BASE_URI = config.get('API_BASE_URI') || 'http://localhost:3001/json';
// const MAPBOX_ACCESS_TOKEN = config.get('MAPBOX_ACCESS_TOKEN'); /** required for map projects */

assert(DEV_SERVER_PORT, 'DEV_SERVER_PORT constant must be set (e.g. 3001). It is used to configure the Webpack dev server');

assert(API_BASE_URI, 'API_BASE_URI constant must be set. It is made available to the source code via a Webpack plugin. It is the path (e.g. http://localhost:3001/json) the app uses to fetch data.');

// assert(MAPBOX_ACCESS_TOKEN, 'MAPBOX_ACCESS_TOKEN constant is required. It is made available to the source code via a Webpack plugin.'); /** required for map projects */

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
    // modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    publicPath: '/dist/',
    filename: 'main.js', /** dev-server only uses this */
  },
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify({
        PACKAGE_NAME,
        PACKAGE_VERSION,
        API_BASE_URI,
        // MAPBOX_ACCESS_TOKEN,
      }),
    }),
  ],
  devServer: {
    publicPath: '/dist/',
    contentBase: path.join(__dirname, 'public'),
    index: 'index.html',
    port: DEV_SERVER_PORT,
    open: (DEV_SERVER_CHROME_CONFIG_PATH)
      ? {
        app: ['google-chrome', `--user-data-dir=${DEV_SERVER_CHROME_CONFIG_PATH}`, `--app=http://localhost:${DEV_SERVER_PORT}/`, '--new-window'],
      }
      : true,
    watchContentBase: false,
    watchOptions: {
      ignored: /node_modules/,
    },
    compress: true,
    historyApiFallback: true,
  },
};
