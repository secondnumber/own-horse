import React from 'react';
import classes from './ImageItem.module.scss';

const ImageItem = (props) => {
  return (
    <li className={classes.imageItem}>
      <img src={props.galleryImage} />
    </li>
  );
};

export default ImageItem;
