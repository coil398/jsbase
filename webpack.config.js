module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        inline: true,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    }
};
