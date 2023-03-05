// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin=require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

// const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
	entry: [
		'./src/app.ts',
		'./src/styles.css',
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		// open: true,
		compress: true,
		host: 'localhost',
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),

		new CopyPlugin({
			patterns: [
			{from: 'static/favicon.ico', to: 'favicon.ico'},
			{from: 'src/server.js', to: 'server.js'},
			],
		}),

		new MiniCssExtractPlugin(),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
		{
			test: /\.(ts|tsx)$/i,
			loader: 'ts-loader',
			options: {configFile: 'tsconfig.webpack.json'},
			exclude: ['/node_modules/'],
		},
		{
			test: /styles.css$/i,
			use: ['style-loader', 'css-loader', 'postcss-loader'],
		},
		{
			test: /\.module.css$/,
			use: ['style-loader', {
				loader: 'css-loader',
				options: {modules: true},
				},
			],
		},
//		{ test: /\.tmpl$/i, loader: "html-loader" },
		{ test: /\.tmpl$/, use: 'raw-loader' },
		{
			test: /\.(ico|eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
			type: 'asset/resource',
		},

		// Add your rules for custom modules here
		// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
	},
	};

	module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
