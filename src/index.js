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
import AuthService from './services/AuthService';

axios.interceptors.request.use(
  (config) => {
    if(AuthService.isAuthenticated()) {  // add token only after LOGIN done
      config.headers['Authorization'] = `Bearer ${AuthService.getToken()}`;
    }
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
