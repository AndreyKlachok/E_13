const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
devtool: 'inline-source-map'

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        hot: true,
        historyApiFallback: true,
        static: './dist',
        open: true,
      },
       plugins: [
              new HtmlWebpackPlugin({
                template: './src/index.pug',
                filename: 'index.html'
              }),
       ],
    output: {
        filename: 'main.js',
    },
    module: {
		rules: [
				{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
				pretty: true
				}
			}
		]
	}
};