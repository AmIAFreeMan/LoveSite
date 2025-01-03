const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  
  // https://docs.nativescript.org/webpack

  return webpack.resolveConfig();
};
