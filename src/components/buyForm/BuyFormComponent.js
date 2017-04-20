import React from 'react';
import {Field, reduxForm} from 'redux-form';
import cx from 'classnames';
import isMobilePhone from 'validator/lib/isMobilePhone';

import ButtonWithText from '../Common/GoToVnStar';
import './BuyForm.sass';

const validate = values => {
  const errors = {};
  if (!values.name){
    errors.name = 'вы забыли указать как вас зовут';
  } else if (values.name.length < 3) {
    errors.name = 'у вас правда такое короткое имя ?';
  }
  if (!values.phone) {
    errors.phone = 'без телефона мы не сможем вам дозвониться';
  } else if (!isMobilePhone(values.phone, 'ru-RU')) {
    errors.phone = 'не похоже на мобильный телефон';
  }
  return errors;
}

const renderField = field => {
  const className = cx({
    'buy-form__item': true,
    'buy-form__item--error': field.meta.touched && field.meta.error,
    'buy-form__item--valid': field.meta.touched && !field.meta.error,
    'buy-form__item--full-width': field.fullWidth,
  });


  return (
    <div className={className}>
      <label className="buy-form__label">
        <span className="buy-form__text">
            {field.label}
        </span>
        <input className="buy-form__input" {...field.input}
               type={field.type}
               placeholder={field.placeholder}/>
      </label>
      {/* {field.meta.touched && field.meta.error &&
        <span className="buy-form__error">{field.meta.error}</span>} */}
    </div>
  );
};

const BuyFormComponent = ({hitSubmit, handleSubmit, price, dirty, invalid, valid}) => {
  // const buttonClasses=cx({
  //   'text-button': true,
  //   'text-button--disabled': !(dirty && valid)
  // });
  const buttonClasses=cx({
    'btn--bordered': true,
    'btn--invalid': invalid
  });

  return (
    <div className="BuyFormComponent buy-form">
      <div className="buy-form__price-line">
        <span className="buy-form__price-text">Примерная цена заказа:</span>
        <span className="buy-form__price">{price} р.</span>
      </div>
      <form className="buy-form__form" onSubmit={handleSubmit(hitSubmit)}>
        <Field component={renderField} name='name' type="text" label="Имя" placeholder="Михаил" />
        <Field component={renderField} name='phone' type="text" label="Телефон" placeholder="89219380120" />
        <button className="buy-form__submit--hidden" onClick={handleSubmit(hitSubmit)} type="submit">Заказать</button>

        <div className="buy-form__submit-wrp">
          <ButtonWithText type="submit" classes={buttonClasses} littleText='Отправить' bigText='Обсудить условия' invalid={invalid} />
        </div>
      </form>
    </div>
  );
}
export default reduxForm({
  form: 'buyForm',
  validate
})(BuyFormComponent);
