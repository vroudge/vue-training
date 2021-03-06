const webpack = require('webpack')
exports.devServer = function (options) {
    return {
        devServer: {
            port: 3040,
            historyApiFallback: true,
            hot: true,
            inline: true,
            contentBase: 'build',
            publicPath: '/dist/'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multiStep: false
            })
        ]
    }
}