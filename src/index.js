import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
import 'bootstrap/dist/js/bootstrap';
import './bootstrap/boostrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './fonts/Gilroy/Gilroy-ExtraBold.otf';
import './fonts/Gilroy/Gilroy-Light.otf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
