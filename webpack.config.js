
const path = require('path');
module.exports = {
            context: path.resolve(__dirname, './source'),
            entry: [
              path.resolve(__dirname, './source/app/App.js'),
            ],
            output: {
              path: __dirname,
              filename: "bundle.js"
}, 
module: {
      loaders: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{ presets:['es2015','react',"stage-2"]},
			}],
  },
};