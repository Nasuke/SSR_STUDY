
// 注意是/server
import React from 'react';
import ReactDom from "react-dom/server";
import App from '../app';
const express = require('express')


const server = express()

// 静态资源部署
server.use(express.static("build"))

server.get("/", (req, res) => {
    const AppString = ReactDom.renderToString(<App></App>)
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>React SSR</h2>
    <div id="root">${AppString}</div>
    <script src="/client/client_bundle.js"></script>
</body>
</html>
    `)
})

// 监听3000端口
server.listen(3000, () => {
    console.log('成功监听3000端口');
})