const path = require('path')

module.exports = {
    target: "web",
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, '../build/client'),
        filename: "client_bundle.js"
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
    }
}