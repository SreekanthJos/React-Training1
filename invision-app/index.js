import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import './index.scss';
import { rootReducer } from './app/store/rootReducer';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
  const app = (
    <Provider store={store}>
      <App/>
    </Provider>
  );
ReactDOM.render(app, document.getElementById('app'));