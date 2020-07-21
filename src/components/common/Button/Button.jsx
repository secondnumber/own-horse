import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => (
  <div>
    <button className={classes.buttonWhite}>{props.name ? props.name : 'Button'}</button>
  </div>
);

export default Button;
