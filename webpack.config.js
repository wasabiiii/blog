const webpack = require('webpack');
const path = require('path');
/*const eslintFormatter = require('react-dev-utils/eslintFormatter');*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

let WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
module.exports = {
    //页面入口文件配置
    entry: './src/index.js',
    //入口文件输出配置
    //__dirname表示当前目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: WEBPACK_ENV === 'dev' 
            ? '/dist/' : '',
        filename: 'bundle.js',
    },
    module: {
        //加载器配置
        rules: [
            //eslint新加
            // {
            //     test: /\.(js|jsx)$/,
            //     enforce: 'pre',
            //     use: [
            //         {
            //             options: {
            //                 formatter: eslintFormatter,
            //                 eslintPath: require.resolve('eslint'),
            //                 // @remove-on-eject-begin
            //                 baseConfig: {
            //                     extends: [require.resolve('eslint-config-react-app')],
            //                 },
            //                 //ignore: false,
            //                 useEslintrc: false,
            //                 // @remove-on-eject-end
            //             },
            //             loader: require.resolve('eslint-loader'),
            //         },
            //     ],
            //     // include: [
            //     //     path.resolve(__dirname, "../../app")
            //     // ],
            //     // exclude: [
            //     //     path.resolve(__dirname, "../../node_modules")
            //     // ],
            //     exclude: /node_modules/,
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192&name=../images/[hash:8].[name].[ext]' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // {
            //     test: /\.(scss|sass|css)$/,  // pack sass and css files
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: [
            //             // "style-loader",
            //             "css-loader",
            //             // "postcss-loader",
            //             "sass-loader"
            //         ]
            //     })
            // },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },  //添加
            {
                test: /\.(woff|woff2)$/,
                loader:"url-loader?prefix=font/&limit=5000"
            }, //添加
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, //添加
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            } //添加
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
        }),
        // new ExtractTextPlugin("style.css"),
        // 处理html文件 
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // favicon: './favicon.ico'
        }),
    ],
    devServer: {
        port: 8001,
        historyApiFallback: {
            index: '/dist/index.html'
        },
        proxy : {
            '/api' : {
                target: 'http://localhost:8000',
                changeOrigin : true
            }
        }
    }
}