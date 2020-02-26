const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

let obj = {};
obj.entry = './src/index.js';

obj.module = {};

obj.module.rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
    },
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    }
]

obj.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
};
obj.plugins = [
    new htmlWebpackPlugin({
        template: './src/index.html'
    })
];
obj.devServer = {historyApiFallback: true}
module.exports = obj;