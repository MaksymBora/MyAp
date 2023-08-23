import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle';
import { App } from 'components/App/App';
import { NewsApp } from 'components/News/NewsApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <NewsApp />
  </React.StrictMode>
);
