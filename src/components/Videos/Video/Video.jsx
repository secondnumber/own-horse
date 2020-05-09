import React from 'react';
import classes from './Video.module.scss';

const Video = (props) => {
  return (
    <video className={classes.video} width="500" controls>
      <source src={props.file} type="video/mp4" />
    </video>
  );
};

export default Video;
