import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import random from 'lodash/random';

const renderComponent = component => (
  <component key={random(1, 100)}
)
const TransitionWrapper = (props) => {
  return(
        <ReactCSSTransitionGroup>
            transitionName={props.animationName}
            transitionEnterTimeout={props.enterTimeout}
            transitionLeaveTimeout={props.leaveTimeout}>
          </ReactCSSTransitionGroup>
  );
}

export default TransitionWrapper;
