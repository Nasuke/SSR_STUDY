import React from 'react';
import ReactDom from 'react-dom/client'
import App from '../app'

import { BrowserRouter } from 'react-router-dom';

ReactDom.hydrateRoot(document.getElementById("root"),
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
