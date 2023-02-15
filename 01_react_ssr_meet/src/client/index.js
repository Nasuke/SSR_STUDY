
import React from 'react';
import ReactDom from 'react-dom/client';
import App from '../app.jsx';

// 在客户端激活应用 使应用可以进行交互 这个过程就是hydration
// root在server/index.js中添加
ReactDom.hydrateRoot(document.getElementById("root"), <App />)