import React from 'react';
import classes from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>register for our Newsletter now</h1>
      <p className={classes.caption}>We are always ready to welcome you!</p>
      <input type="text" placeholder="Enter your Email address here" />
    </div>
  );
};

export default Newsletter;
