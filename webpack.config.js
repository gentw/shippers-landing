const path = require('path');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
	entry: {
		main: './src/js/main.js'
	},
	output: {
    	filename: './js/main.js',
    	path: path.resolve(__dirname, 'dist')
  	},
  	module: {
	  rules: [
	    {
	    	test: /\.m?js$/,
	    	exclude: /(node_modules|bower_components)/,
	    	use: {
	        	loader: 'babel-loader',
	        	options: {
	        	presets: ['@babel/preset-env']
	        	}
	    	}
	    },
	    {
	      test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
	      exclude: /node_modules/,
	      loader: 'url-loader',
	      options: {
	      	outputPath: './fonts/',
	        publicPath: './fonts/',
	        name: './[name].[ext]',
	        limit: 1000
	      }
	    },
	    {
	        loader: "webpack-modernizr-loader",
	        test: /\.modernizrrc\.js$/
	        // Uncomment this when you use `JSON` format for configuration
	        // type: 'javascript/auto'
	    },

	    {
			test: /\.(gif|png|jpe?g|svg)$/i,
			exclude: /node_modules/,
	      	loader: 'file-loader',
	      	options: {
		      	outputPath: './images/',
		        publicPath: '../images/',
		        name: '[name].[ext]'
		      }
	  	},

	    {
	        test: /\.scss$/,
	        use: [
	          {
	          	loader: "style-loader"
	          },
	          
	          {
	            loader: MiniCssExtractPlugin.loader
	          },
	        
	          {
	            loader: "css-loader",
	            options: {
	              sourceMap: true,
	              modules: false,
	              localIdentName: "[local]___[hash:base64:5]"
	            }
	          },
	          {
	          	loader: "sass-loader",
	          },
	          {
	            loader: 'postcss-loader',
	            options: {
	              sourceMap: true,
	              config: {
	                path: 'postcss.config.js'
	              }
	            }
	          }
	        ]
	      },

	  ]
	},
	// devServer: {
	//   writeToDisk: true
	// },
  	plugins: [
  		/*new WriteFilePlugin(),*/
  		 new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      filename: './css/main.css',
	    }),
  		/*new CopyPlugin([
  			{ from: './src/images/', to: './images/' },
  		]),
  		new CopyPlugin([
  			{ from: './src/fonts/', to: './fonts/' },
  		]),
*/  	
	    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
  		
	    new CleanWebpackPlugin(),

	    new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development,
	      // ./public directory is being served
	      host: 'localhost',
	      files: '**/*.html',
	      injectChanges: true,
	      port: 3000,
	      server: { baseDir: ['E:/GitHub/shippers-landing'] }
	    })
  	],
};