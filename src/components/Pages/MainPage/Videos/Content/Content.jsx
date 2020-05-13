import React from 'react';
import classes from './Content.module.scss';

const Content = (props) => {
  return (
    <div className={classes.contentBlock}>
      <h1 className={classes.header}>{props.header}</h1>
      <p className={classes.description}>{props.descriprion}</p>
      <button className={classes.button}>Get started now</button>
    </div>
  );
};

export default Content;
