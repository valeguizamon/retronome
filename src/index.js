import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App.js';
import reportWebVitals from './assets/others/reportWebVitals.js';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
