import React from 'react';
import classes from './Loader.module.scss';

const Loader = (props) => (
  <div className={classes}>
    <img className={classes.image} src={props.icon} alt="" />
  </div>
);

export default Loader;
