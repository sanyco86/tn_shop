import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from "./AppRouter";

ReactDOM.render(
  <AppRouter/>,
  document.getElementById('app')
);

module.hot.accept();
