import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle';
import { WeatherApp } from 'components/WeatherApp/WeatherApp';
import { NewsApp } from 'components/NewsApp/NewsApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <WeatherApp />
    <NewsApp />
  </React.StrictMode>
);
