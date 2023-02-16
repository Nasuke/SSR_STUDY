import React from 'react';
import About from "../pages/About";
import Home from "../pages/Home";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]

export default routes