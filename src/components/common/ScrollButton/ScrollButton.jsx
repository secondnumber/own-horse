import React from 'react';
import classes from './ScrollButton.module.scss';

const ScrollButton = (props) => {

  return (
    <button onClick={() => {window.scrollTo(0, 0);}} className={classes.button}>
      &and;
    </button>
  );
};

export default ScrollButton;
