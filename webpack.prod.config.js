const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist')
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                }
                )
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            views: path.resolve(__dirname, './src/view'),
        },
    },
    plugins: [
        new UglifyJsPlugin(),
        new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
    ],
};
