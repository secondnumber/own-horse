import React from 'react';
import classes from './NotFound.module.scss';
import Button from '../../../common/Button/Button';

const NotFound = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.numbersBlock}>
      <span className={classes.number}>4</span>
      <span className={classes.zero}>
        <span className={classes.inset}>ooops!</span>
      </span>
      <span className={classes.number}>4</span>
      <p className={classes.text}>SORRY, PAGE NOT FOUND!</p>
      <Button />
    </div>
  </div>
);

export default NotFound;
