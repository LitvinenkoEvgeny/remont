export const validate = values => {
  const errors = {};
  if (!values.totalArea) {
    errors.totalArea = 'обязательное к заполнению поле';
  }
  if (!values.roofHeight) {
    errors.roofHeight = 'обязательное к заполнению поле';
  }
  return errors;
}
