module.exports = {
    entry: {
        javascript: "./app/app.js",
        html: "./static/index.html",
    },
    output: {
        path: __dirname + "/dist",
        filename: "app.js",
        publicPath: "/static/",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "react-hot",
                exclude: /node_modules/,
                include: __dirname + "/app"
            },
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
                include: __dirname + "/app",
                query: {
                    plugins: ["transform-runtime"],
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.html$/,
                loader: "file-loader",
                include: __dirname + "/static",
                query: {
                    name: "[name].[ext]"
                }
            },
        ]
    },
    devServer: {
        contentBase: "./static"
    }
}
