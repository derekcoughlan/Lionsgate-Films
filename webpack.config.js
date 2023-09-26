const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
        {
            test: /\.s?[ac]ss$/,
            use: [
             'style-loader', 'css-loader', 'sass-loader'
            ],
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        })
    ],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
       },
       proxy: {
        '/home/**': {
            target: 'http://localhost:3000/',
            secure: false,
        } //this may need to change based on how my code is set up.
       }
    },
    resolve: {   
        extensions: ['.js'], 
    },
}