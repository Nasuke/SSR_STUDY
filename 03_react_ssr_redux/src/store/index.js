import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './modules/home';
import aboutReducer from './modules/about';

const store = configureStore({
    reducer: {
        home: homeReducer,
        about: aboutReducer
    }
})

export default store