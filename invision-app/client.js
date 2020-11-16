import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/store';
import App from './app/App';

const preloadedState = window.PRELOADED_STATE;
delete window.PRELOADED_STATE;
const store = configureStore(preloadedState);
const app = (
<App Router={BrowserRouter} store={store} />
);

hydrate(app, document.getElementById('root'));
