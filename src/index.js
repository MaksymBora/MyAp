import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/MyAp">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
