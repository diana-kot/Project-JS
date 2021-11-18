const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
      main: ["@babel/polyfill", "./src/public/index.js"]
  },
    output: {
      path: path.join(__dirname, 'dist/public'),
      publicPath: "/",
      filename: "js/[name].js"
    },
    target: 'web',
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: 'src/public/index.html',
            filename: 'index.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlagin({
            template: 'src/public/cart.html',
            filename: 'cart.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlagin({
            template: 'src/public/product.html',
            filename: 'product.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlagin({
            template: 'src/public/registration.html',
            filename: 'registration.html',
            excludeChunks: ['server']
        }),
        new HtmlWebpackPlagin({
            template: 'src/public/catalog.html',
            filename: 'catalog.html',
            excludeChunks: ['server']
        }),
            new CopyWebpackPlugin([{
                    from: 'src/public/img',
                    to: './img'
                }
            ]),
        ]
};