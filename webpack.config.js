const base = require('./webpack.config.base.js');
module.exports = {
    ...base,
    mode: "development", // "production" | "development" | "none"
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: './dist'
    }
}