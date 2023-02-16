import React from 'react';
import ReactDom from 'react-dom/client'
import App from '../app'
import store from '../store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDom.hydrateRoot(document.getElementById("root"),
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
