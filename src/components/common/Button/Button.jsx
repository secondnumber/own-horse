import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => (
  <div>
    <button
      className={
        props.style === 'buttonContour'
          ? classes.buttonContour
          : props.style === 'buttonWhite'
          ? classes.buttonWhite
          : props.style === 'buttonGradientSquare'
          ? classes.buttonGradientSquare
          : classes.buttonGradient
      }
      onClick={props.do}
    >
      {props.name ? props.name : 'Button'}
    </button>
  </div>
);

export default Button;
