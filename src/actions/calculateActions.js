import * as types from '../constants';


export const calculatePrice = (formData) => ({
  type: types.CALCULATE_PRICE,
  payload: formData
});
