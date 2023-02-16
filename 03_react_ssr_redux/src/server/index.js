
import React from 'react';
import ReactDom from "react-dom/server";
import App from "../app.jsx";
import store from '../store';

import { StaticRouter } from "react-router-dom/server";
import { Provider } from 'react-redux';

const express = require('express')


const server = express()
server.use(express.static("build"))
server.get('/', (req, res) => {
    const AppHtmlString = ReactDom.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    )
    res.end(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">${AppHtmlString}</div>
    <script src="/client/client_bundle.js"></script>
</body>
</html>
    `)
})



server.listen(3000, () => {
    console.log('3000端口监听成功');
})