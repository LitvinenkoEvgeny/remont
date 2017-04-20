import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import BuyFormComponent from './BuyFormComponent';
import Loader from '../Common/Loader';

class BuyFormContainer extends Component {
  constructor(props) {
    super(props);
    this.hitSubmit = this.hitSubmit.bind(this);
  }

  hitSubmit(values){
    this.props.sendForm(Object.assign({}, values, {price: this.props.price}));
  }

  render() {
    return (
      <div className="BuyFormContainer">
        <h2>
          <span className="big">Заказать ремонт</span>
          <div className="border bottom">
            <div></div>
          </div>
        </h2>

        <div className="text">
          <BuyFormComponent hitSubmit={this.hitSubmit} price={this.props.price} />
        </div>
          {this.props.showLoader && <Loader /> }
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  price: state.priceReducer,
  showLoader: state.loader,
})
const mapDispatchToProps = dispatch => ({
  changeView: (view) => dispatch(actions.toggleLoader(view)),
  toggleLoader: () => dispatch(actions.toggleLoader()),
  sendForm: (values) => dispatch(actions.sendForm(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(BuyFormContainer);
