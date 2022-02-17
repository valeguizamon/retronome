import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';

//Importacion de JS y CSS de Bootstrap
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

