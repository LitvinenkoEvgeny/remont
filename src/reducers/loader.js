import * as types from '../constants';

const initialState = false;

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_LOADER:
      return !state
      break;
    default:
      return state
  }
}
