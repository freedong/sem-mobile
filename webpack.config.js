// 基础配置webpack 文件

// 运行webpack --watch命令实时监控编译

var webpack = require("webpack");//引入webpack模块
var path = require("path");//引入path模块


module.exports = {
	// 页面入口文件
	entry: [
		'./app.js'
	],
	// 入口文件输出配置
	output: {
		path: path.resolve(__dirname,'./js'),
		filename: 'hopebundle.js',
	},
	// 加载器配置
	module: {
		rules: [
		{
			// 图片加载器配置
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 12092
				}
			}]
		},
		{
			// css加载器配置
			test: /\.css$/,
			use: ['style-loader','css-loader']
		},
		{
			//scss(sass)加载器配置
			test: /\.scss$/,
			use: [
			{
				loader: "style-loader"
			},
			{
				loader: "css-loader"
			},
			{
				loader: "sass-loader"
			}
			]
		}
		]
	}
};
