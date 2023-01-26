const path = require('path');

module.exports = {
    entry: {
        example: './example/example.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'example/dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}