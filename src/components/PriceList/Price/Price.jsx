import React from 'react';
import classes from './Price.module.scss';

const Price = (props) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>{props.name}</h1>
      <span>{props.price}</span>
      <span>{props.period}</span>
      <p>{props.descriprion}</p>
    </div>
  );
};

export default Price;
