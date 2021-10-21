import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500 h-screen py-20">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
