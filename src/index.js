import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css'

import AppRouter from "./AppRouter";

ReactDOM.render(
  <AppRouter/>,
  document.getElementById('app')
);

module.hot.accept();
