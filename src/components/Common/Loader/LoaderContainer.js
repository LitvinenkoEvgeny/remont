import React, {Component} from 'react';
import cx from 'classnames';

import LoaderComponent from './LoaderComponent';
import './loader.sass';

class LoaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LoaderContainer">
        <LoaderComponent />
      </div>
    )
  }
}

LoaderContainer.propTypes = {};

export default LoaderContainer;
