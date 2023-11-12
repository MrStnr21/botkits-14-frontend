import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';

import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';

import store from './services/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
