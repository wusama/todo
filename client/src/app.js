import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <AppContainer key={Math.random()}>
    <AppRouter />
  </AppContainer>,
  document.getElementById('root'),
);
module.hot && module.hot.accept();
