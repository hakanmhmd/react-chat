var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'react-hot-loader!babel-loader' 
            }, 
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};