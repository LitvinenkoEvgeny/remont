import React, {Component} from 'react';
import { connect } from 'react-redux';

import FirstViewPres from './FirstViewPres';
import * as actions from '../../actions';

class Firstview extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="Firstview">
        <FirstViewPres changeView={this.props.changeView}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeView: (name) => dispatch(actions.changeView(name))
});

export default connect(null, mapDispatchToProps)(Firstview);
