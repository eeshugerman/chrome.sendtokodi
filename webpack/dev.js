const base = require('./base'),
  writeFilePlugin = require('write-file-webpack-plugin');

base.mode = "development";
base.devtool = "source-map";

base.plugins.push(new writeFilePlugin());

module.exports = base;
