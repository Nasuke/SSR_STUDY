
const path = require('path')
const nodeExternals = require('webpack-node-externals') // 排除node_modules

module.exports = {
    target: "node",
    mode: "development",
    entry: "./src/server/index.js",
    output: {
        path: path.resolve(__dirname, '../build/server'),
        filename: "server_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    // 处理jsx和es6
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                }
            },
        ],
    },
    resolve: {
        // 添加扩展名后导包就不需要后缀
        extensions: [".js", ".json", ".wasm", ".jsx"]
    },
    externals: [nodeExternals()]
}