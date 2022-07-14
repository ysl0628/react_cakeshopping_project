import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 設定手機版的適配
// 除以視窗的寬度就多少 rem，現在我們設定視窗的總寬度是 750 rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

