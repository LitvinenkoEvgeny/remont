import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import nowShow from './nowShow';
import priceReducer from './priceReducer';
import loader from './loader';

const rootReducer = combineReducers({
  show: nowShow,
  priceReducer,
  form: formReducer,
  loader
});

export default rootReducer;
