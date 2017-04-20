import React from 'react';
import $ from 'jquery';

import './ButtonWithTextStyles.sass';


const ButtonWithText = ({clk, littleText, bigText, type, invalid, classes}) => (
  <button href="#" onClick={clk} type={type} className={classes}>
									<span className="text-button__txt">
										<span className="text-button__small">{littleText}</span>
										<span className="text-button__big">
											<span className="text-button__inner-text">{bigText}</span>
										</span>
									</span>
									<span className="text-button__bg"></span>
								</button>
)

export default ButtonWithText;
