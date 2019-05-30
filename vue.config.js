'use strict'
var path = require('path');
module.exports = {
  devServer: {
    contentBase: [path.join(__dirname, 'public')],
    port: 9000,
    open: true,
  },

  runtimeCompiler: true
};