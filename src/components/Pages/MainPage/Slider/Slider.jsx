import React from 'react';
import classes from './Slider.module.scss';
import Intro from './Intro/Intro';

const Slider = (props) => {
  let introBlocks = props.slider.introList.map((element) => (
    <Intro
      caption={element.caption}
      header={element.header}
      description={element.description}
    />
  ));
  return <div className={classes.slider}>{introBlocks}</div>;
};

export default Slider;
