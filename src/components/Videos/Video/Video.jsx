import React from 'react';
import classes from './Video.module.scss';

const Video = (props) => {
  return (
    <div className={classes.videosWrapper}>
      <video width="600" controls>
        <source src={props.file} type="video/mp4" />
      </video>
      <div>
        <h1 lassName={classes.header}>{props.header}</h1>
        <p>{props.descriprion}</p>
        <button className={classes.button}>Get started now</button>
        <p>{props.caption}</p>
        <span>{props.count}</span>
      </div>
    </div>
  );
};

export default Video;
