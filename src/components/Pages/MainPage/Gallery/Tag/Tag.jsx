import React from 'react';
import classes from './Tag.module.scss';

const Tag = (props) => {
  return (
    <div className={classes.wrapper}>
      <a className={classes.tag} href='#'>
      {props.galleryTags}
      </a>
    </div>
  );
};

export default Tag;
