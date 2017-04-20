import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import random from 'lodash/random';

const LoaderComponent = (props) => {
  return (
        <div className="LoaderComponent">
          <div className="loader__wrp">
            <div className="loader">
              <div className="loader__box" />
              <div className="loader__hill" />
            </div>
          </div>
        </div>
  );
}

export default LoaderComponent;
