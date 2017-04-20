import React, {Component} from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as actions from '../../actions';
import FirstFormPres from './FirstFormPres';

class FirstForm extends Component {
  constructor() {
    super(...arguments);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.calculatePrice(values);
    this.props.changeView('price');
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 800);
  };

  render() {
    return (
      <div className="FirstForm">
        {/*<h2>*/}
          {/*<span className="small">Заголовок</span>*/}
          {/*<span className="big">РАССЧИТАТЬ СТОИМОСТЬ РЕМОНТА</span>*/}
          {/*<div className="border bottom">*/}
            {/*<div></div>*/}
          {/*</div>*/}
        {/*</h2>*/}

        <div className="text">
          <FirstFormPres onCalculate={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  calculatePrice: (values) => dispatch(actions.calculatePrice(values)),
  changeView: (view) => dispatch(actions.changeView(view))
});

export default connect(null, mapDispatchToProps)(FirstForm);
