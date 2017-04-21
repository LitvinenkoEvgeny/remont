import React from 'react';
import {Field, reduxForm} from 'redux-form';
import cx from 'classnames';
import $ from 'jquery';
const TweenMax = window.TweenMax;

import './FirstFormStyles.sass';
import ButtonWithText from '../../components/Common/GoToVnStar';
import { validate } from './validate';

const initialValues = {
  homeType: "new",
  repareType: "cosmetic"
};

const dropDownField = (field) => {
  return (
    <div className="calculator-form__item calculator-form__item--full-width">
      <label className="calculator-form__label" htmlFor="homeType">
        <select {...field.input}
                className='calculator-form__input calculator-form__input'
                name="homeType"
                type="select">
          {field.options.map((option, i) => (
            <option key={i} value={option.value}> {option.text} </option>
          ))}
        </select>
        <span className="calculator-form__text">
          {field.label}
        </span>
      </label>
    </div>
  );
};

const renderField = (field) => {
  const className = cx({
    'calculator-form__item': true,
    'calculator-form__item--error': field.meta.error,
    'calculator-form__item--full-width': field.fullWidth,
  });

  return (
    <div className={className}>
      <label className="calculator-form__label">
        <input className="calculator-form__input" {...field.input} min={field.min}
               step={field.step}
               type={field.type}
               placeholder={field.placeholder}/>
        <span className="calculator-form__text">
            {field.label}
        </span>
      </label>
    </div>
  );
};

const renderCheckbox = (field) => {
  const className = cx({
    'calculator-form__item': true,
    'calculator-form__item--error': field.meta.touched && field.meta.error,
    'calculator-form__item--full-width': field.fullWidth,
  });
  return (
    <div className={className}>
      <label className="calculator-form__label">
        <input className="calculator-form__input" {...field.input} min={field.min}
               step={field.step}
               type={field.type}
               checked={field.input.checked}
               placeholder={field.placeholder}/>
        <span className="calculator-form__text">
            {field.label}
        </span>
      </label>
    </div>
  );
};



const FirstFormPres = ({onCalculate, handleSubmit, initialValues, invalid}) => {
  const buttonClasses=cx({
    'btn--bordered': true,
    'btn--invalid': invalid
  });
  const onButtonClick = () => {
    if(invalid){
      $('#react-calculator').animate({
        scrollTop: $(".FirstFormPres").offset().top
      }, 2000);
    }
  };

  return (
    <div className="FirstFormPres">
      <form onSubmit={handleSubmit(onCalculate)} className="calculator-form">

        <div className="calculator-form__block">
          <h4 className="calculator-form__head">УКАЖИТЕ ТИП РЕМОНТА</h4>

          <Field name="repareType" component={renderField} type="radio" value="cosmetic" label="косметический"/>
          <Field name="repareType" component={renderField} type="radio" value="capital" label="капитальный"/>
          <Field name="repareType" component={renderField} type="radio" value="individual" label="индивидуальный"/>

        </div>

        <div className="calculator-form__block">
          <h4 className="calculator-form__head" id="firstHeader">ЧТО ВЫ ХОТИТЕ ПОЛУЧИТЬ?</h4>

          <Field name="homeType" selected="new" component={dropDownField} label="Тип жилья" options={[
            {
              id: 1,
              value: 'new',
              text: 'новостройка'
            }, {
              id: 2,
              value: 'old',
              text: 'вторичное жилье'
            }
          ]}/>

          <Field name="totalArea" component={renderField}
                 type="number" min="1"
                 placeholder="м²"
                 label="общая площадь"/>

          <Field name="doorsNumber" type="number" min="0"
                 component={renderField}
                 placeholder="шт"
                 label="кол-во дверей"/>

          <Field name="switchersNumber" type="number" min="0"
                 component={renderField}
                 placeholder="шт"
                 label="кол-во выключателей"/>

          <Field name="roofHeight" type="number" min="1"
                 step='0.1'
                 component={renderField}
                 placeholder="м"
                 label="высота потолков"/>

          <Field name="windowsNumber" type="number" min="1"
                 component={renderField}
                 placeholder="шт"
                 label="кол-во окон"/>

          <Field name="waterPointsNumber" type="number" min="1"
                 component={renderField}
                 placeholder="шт"
                 label="кол-во точек воды"/>


          <Field name="electricPointsNumber" type="number" min="0"
                 component={renderField}
                 placeholder="шт"
                 label="кол-во розеток"/>

          <Field name="lightersNumber" type="number" min="0"
                 component={renderField}
                 placeholder="шт"
                 label="кол-во точек освещения"/>

        </div>

        <div className="calculator-form__block">
          <h4 className="calculator-form__head">ДЕМОНТАЖНЫЕ И ОТДЕЛОЧНЫЕ РАБОТЫ </h4>

          <Field name="removalFloor" component={renderCheckbox} type="checkbox" value="cosmetic" label="демонтаж пола"/>
          <Field name="fixFloor" component={renderCheckbox} type="checkbox" value="cosmetic" label="выравнивание пола"/>

          <Field name="removalWall" component={renderCheckbox} type="checkbox" value="cosmetic" label="демонтаж стен"/>
          <Field name="fixWall" component={renderCheckbox} type="checkbox" value="cosmetic" label="выравнивание стен"/>


          <Field name="removalRoof" component={renderCheckbox} type="checkbox" value="cosmetic"
                 label="демонтаж потолка"/>
          <Field name="fixRoof" component={renderCheckbox} type="checkbox" value="cosmetic"
                 label="выравнивание потолка"/>
        </div>


        <div className="calculator-form__block">
          <h4 className="calculator-form__head">РАБОТЫ ПО ОФОРМЛЕНИЮ КВАРТИРЫ</h4>

          <Field name="designProject" component={renderCheckbox} type="checkbox" value="cosmetic" label="дизайн проект"/>

          <Field name="remodelling" component={renderCheckbox} type="checkbox" value="cosmetic"
                 label="перепланировка помещений"/>

          <Field name="assemblyFurniture" component={renderCheckbox} type="checkbox" value="cosmetic"
                 label="сборка и расстановка мебели"/>
        </div>

        <div className="calculator-form__block">
          <h4 className="calculator-form__head">ПРОЕКТЫ ИНЖЕНЕРНЫХ СИСТЕМ</h4>

          <Field name="waterProject" component={renderCheckbox} type="checkbox" value="cosmetic"
                 label="водоснабжения и канализации"/>

          <Field name="ventilationProject" component={renderCheckbox} type="checkbox" value="cosmetic"
                 label="отопления и вентиляции"/>

          <Field name="electrificationProject" component={renderCheckbox} type="checkbox" value="cosmetic"
                 label="электрификации"/>
        </div>


        <button style={{display: 'none'}} type="submit">Submit</button>

        <ButtonWithText classes={buttonClasses} littleText='посчитать' bigText='Рассчитать' clk={onButtonClick} invalid={invalid} />

      </form>
    </div>
  );
};

export default reduxForm({
  form: 'calculate', // a unique name for this form
  initialValues,
  validate
})(FirstFormPres);
