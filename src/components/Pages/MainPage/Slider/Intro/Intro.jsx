import React from 'react';
import classes from './Intro.module.scss';
import FacebookSvg from './facebook.svg';
import TwitterSvg from './twitter.svg';
import YoutubeSvg from './youtube.svg';

const Intro = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperToggle}>
        <span className={classes.toggleNumber}>01</span>
        <span className={classes.toggleNumber}>02</span>
        <span className={classes.toggleNumber}>03</span>
      </div>
      <div className={classes.wrapperText}>
        <p className={classes.caption}>{props.caption}</p>
        <h1 className={classes.header}>{props.header}</h1>
        <p className={classes.description}>{props.description}</p>
        <button className={classes.button}>more About us</button>
      </div>
      <div className={classes.wrapperSocial}>
        <img className={classes.image} src={FacebookSvg} />
          <img className={classes.image} src={TwitterSvg} />
          <img className={classes.image} src={YoutubeSvg} />
      </div>
    </div>
  );
};

export default Intro;
