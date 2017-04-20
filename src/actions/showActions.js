import * as types from '../constants';
import axios from 'axios';

export function changeView(name) {
  return {
    type: types.CHANGE_SHOW,
    payload: name
  }
};

export function toggleLoader() {
  return {
    type: types.TOGGLE_LOADER
  }
};

export function sendForm(values) {
  return dispatch => {
    let data = new FormData();
    const message = `Здравствуйте Я хочу сделать заказ на сумму ${values.price}руб, перезвоните мне пожалуйста`;
    data.append('name', values.name);
    data.append('phone', values.phone);
    data.append('message', message);
    dispatch(toggleLoader());
    axios.post('actions/send.php', data);
    setTimeout(() => {
      dispatch(toggleLoader());
      dispatch(changeView('message'));
    }, 3500);
  }
}
