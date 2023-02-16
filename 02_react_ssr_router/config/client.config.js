
const { merge } = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals') // 排除node_modules

const basicConfig = require('./basic.config')
module.exports = merge(basicConfig, {
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, '../build/client'),
        filename: "client_bundle.js"
    },
})