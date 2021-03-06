const
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    VueLoaderPlugin = require('vue-loader/lib/plugin');

const vueLoader = {
    test: /\.(vue)$/,
    exclude: /node_modules/,
    use: 'vue-loader'
};

const scssLoader = {
    test: /\.(css|scss)$/,
    use: ['css-loader', 'sass-loader']
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'installer.js'
    },
    module: {
        rules: [vueLoader, scssLoader]
    },
    resolve: {
        alias: {
            vue$: path.resolve('..', 'node_modules', 'vue', 'dist', 'vue.esm.js')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ]
};
