import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import random from 'lodash/random';



import '../../styles/style.sass';
import FirstView from '../FirstView/Firstview';
import FirstForm from '../FirstForm/FirstForm';
import BuyForm from '../buyForm/BuyFormContainer';
import MessageComponent from '../Message/index.js';

class Calculator extends Component {
  constructor() {
    super(...arguments);
    this.renderCheckedView = this.renderCheckedView.bind(this);
  }

  renderCheckedView() {
    switch (this.props.show) {

      case 'greet':
        return <FirstView /> ;
        break;

      case 'firstForm':
        return <FirstForm />;
        break;

      case 'price':
        return <BuyForm />;
        break;

      case 'message':
        return <MessageComponent />;
        break;

      default:
        return <FirstForm />;
        break;
    }
  }

  render() {
    return (
      <div className="Calculator">
        {this.renderCheckedView()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  show: state.show
});


export default connect(mapStateToProps, null)(Calculator);
