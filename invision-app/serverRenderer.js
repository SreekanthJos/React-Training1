/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './app/store/';
import fetch from 'isomorphic-fetch';
import App from './app/App';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Netflix Roulette App SSR</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {

  return async (req, res) => {
    const context = {};
    const searchQuery = req.url.split('/search/')[1];

    const initialData = await fetch(`http://localhost:4000/movies?search=${searchQuery}&searchBy=title&sortOrder=desc`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((response) => response.data);
    const store = configureStore();

    const renderRoot = () => (
      <App context={context} location={req.url} Router={StaticRouter} store={store} />
    );

    renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}
