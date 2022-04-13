import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import mystore from './components/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {mystore}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();