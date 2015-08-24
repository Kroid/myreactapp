var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
	output: {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
	},
	devtool: 'eval',
	devServer: {
		colors: true,
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
  module: {
		loaders: [
			{
				test: /\.styl$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				path: path.resolve(ROOT_PATH, 'app')
			},
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel'],
				include: path.resolve(ROOT_PATH, 'app')
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'FORapp prototype'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
