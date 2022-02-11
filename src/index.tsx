import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { ApolloRequestClient } from './app/utils/ApolloRequestClient';
import ScrollToTop from './app/utils/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <ApolloRequestClient>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </ApolloRequestClient>
  </BrowserRouter>,
  document.getElementById('root'),
);
