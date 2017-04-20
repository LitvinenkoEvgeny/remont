import React from 'react';

import './goToButtonStyles.sass';

const GoToButton = ({changeView, goTo}) => {

  const go = (e) => {
    e.preventDefault();
    changeView(goTo);
  };

  return (
    <a href="" onClick={go} className="button" data-anchor="block2">
      <span className="button__bg" />
      <span className="button__icon" />
    </a>
  );
};

export default GoToButton;
