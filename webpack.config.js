/**@type{import('webpack').Configuration} */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    mode: 'production',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use:['style-loader','css-loader'],
                test: /.(css)$/,
                exclude: /node_modules/
            },
            {
                use:['file-loader'],
                test:/.(png|svg|jpg|jpeg|gif|icon|txt)$/,
                exclude: /node_modules/
            },
        ],
    },
    resolve:{
        extensions:[".js" , ".jsx" ,".json"],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};