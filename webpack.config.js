const path = require("path");

module.exports = {
    mode: "production",
    entry: ["@babel/polyfill", "./src/js/index.es6"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        /*port: 8080,*/
        /*index: "index.html"*/
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
