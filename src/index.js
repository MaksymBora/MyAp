import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherApp } from './components/WeatherApp/WeatherApp';
import { GlobalStyle } from './GlobalStyle';
import { NewsApp } from 'components/News/NewsApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <WeatherApp />
    <NewsApp />
  </React.StrictMode>
);
