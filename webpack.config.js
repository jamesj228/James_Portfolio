const path = require('path');
const SRC_DIR = require('/client/src');
const DIST_DIR = require('/client/dist');
const uglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve()
	module: {
		rules: [
			{
				test: /\.m?js$/,
        exclude: ["/node_modules/"],
        use: [
          {
            loader:"babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
			}
		]
	}
}