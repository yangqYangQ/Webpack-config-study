const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js');

module.exports = {
    ...base,
    mode: "production", // "production" | "development" | "none"
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../'
                        },
                    },
                    'css-loader',
                ]
            },
        ],
    }
}