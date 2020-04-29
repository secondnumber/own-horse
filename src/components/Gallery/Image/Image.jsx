import React from 'react';
import classes from './Image.module.scss';

const Image = (props) => {
  debugger;
  return (
    <div className={classes.wrapper}>
      <img src={props.galleryImages} />
    </div>
  );
};

export default Image;
