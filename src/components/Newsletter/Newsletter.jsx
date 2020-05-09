import React from 'react';
import classes from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>register for our Newsletter now</h2>
        <h2 className={classes.subtitle}>Newslatter</h2>
        <p className={classes.caption}>We are always ready to welcome you!</p>
      </div>
      <div className={classes.inputBlock}>
        <input className={classes.input} type="text" placeholder="Enter your Email address here" />
      </div>
    </div>
  );
};

export default Newsletter;
