import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Footer from "./Footer/Footer.jsx";
import { store } from './_helpers';
import { App } from './App';

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(
    <div>
    <Provider store={store}>
        <App />
    </Provider>
    </div>,
    document.getElementById('app')
);