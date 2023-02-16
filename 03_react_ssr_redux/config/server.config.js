
const { merge } = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals') // 排除node_modules

const basicConfig = require('./basic.config')

module.exports = merge(basicConfig, {
    target: "node",
    entry: "./src/server/index.js",
    output: {
        path: path.resolve(__dirname, '../build/server'),
        filename: "server_bundle.js"
    },
    externals: [nodeExternals()]
})