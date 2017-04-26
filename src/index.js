import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';


import Calculator from './components/Calculator/Calculator';
import store from './store';

const htmlContainerElement = document.querySelector('#react-calculator');

try {
  ReactDOM.render(
    <Provider store={store}>
      <Calculator/>
    </Provider>
    ,
    htmlContainerElement);
} catch(e){
  console.log(e);
  console.info(`пытается отрендерить калькулятор не на главной странице ( пропустить ошибку )`);
}
