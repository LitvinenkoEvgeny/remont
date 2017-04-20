import React from 'react';

import './goToButtonStyles.sass';

const GoToButton = ({clk, littleText, bigText, type, invalid, classes}) => {

    const go = (e) => {
        e.preventDefault();
        changeView(goTo);
    };

    return (
        <button  onClick={clk} type={type} className={"btn btn_submit" + ` ${classes}`}>
            <div className="btn__hover">
                <div className="btn__hover-in">{bigText}
                    <svg className="icon icon-arrow">
                        <use href="#icon-arrow" />
                    </svg>
                </div>
            </div>
            <div className="btn__front">{bigText}
                <svg className="icon icon-arrow">
                    <use href="#icon-arrow" />
                </svg>
            </div>
        </button>
    );
};

export default GoToButton;
