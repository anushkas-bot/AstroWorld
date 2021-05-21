import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/container/App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

