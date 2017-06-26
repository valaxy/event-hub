const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path')


module.exports = {
    entry: {
        'unit.js': './test/unit.ts'
    },
    output: {
        path: path.join(__dirname, '../dest/'),
        filename: '[name]'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
}
