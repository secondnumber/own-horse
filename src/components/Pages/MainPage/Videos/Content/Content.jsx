import React from 'react';
import classes from './Content.module.scss';
import Button from '../../../../common/Button/Button';

const Content = (props) => {
  return (
    <div className={classes.contentBlock}>
      <h1 className={classes.header}>{props.header}</h1>
      <p className={classes.description}>{props.descriprion}</p>
      <Button />
    </div>
  );
};

export default Content;
