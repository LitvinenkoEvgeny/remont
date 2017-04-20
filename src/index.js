import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';


import Calculator from './components/Calculator/Calculator';
import store from './store';

const htmlContainerElement = document.querySelector('#react-calculator');

ReactDOM.render(
  <Provider store={store}>
    <Calculator/>
  </Provider>
  ,
  htmlContainerElement);
