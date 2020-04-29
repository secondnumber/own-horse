import React from 'react';
import classes from './Tag.module.scss';

const Tag = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.galleryTags}
    </div>
  );
};

export default Tag;
