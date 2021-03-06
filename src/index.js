import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './app';

const route = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(
    route,
    document.getElementById('app')
);
