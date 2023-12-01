import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { BrowserRouter } from 'react-router-dom';
import Popper from 'popper.js';
import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
        config.headers['Authorization'] = `Basic YXNlZW06c2Fob28=`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
