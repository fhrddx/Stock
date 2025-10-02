import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './chart/index'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);