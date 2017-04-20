import * as types from '../constants';

import { calculate } from '../utils';

const initialState = 0;

export default function priceReducer (state = initialState, action) {
  switch (action.type) {
    case types.CALCULATE_PRICE:
      return state = Math.ceil((calculate(action.payload)) * 0.7);
      break;

    default:
      return state;
      break;
  }
}
