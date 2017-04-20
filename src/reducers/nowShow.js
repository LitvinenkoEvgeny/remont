import * as types from '../constants';
const initialState = 'firstForm';

export default function nowShow(state = initialState, action) {
  switch (action.type) {

    case types.CHANGE_SHOW:
      return state = action.payload;

    default:
      return state;
  }
}
