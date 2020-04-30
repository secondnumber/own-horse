import React from 'react';
import classes from './Videos.module.scss';
import Video from './Video/Video';

const Videos = (props) => {
  let togglesList = props.togglesItems.map((toggle) => (
    <span>{toggle.toggleItem}</span>
  ));

  let videosList = props.videosItems.map((video) => (
    <Video file={video.file} header={video.header} descriprion={video.descriprion} caption={video.caption} count={video.count}/>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.togglesWrapper}>{togglesList}</div>
      {videosList}
    </div>
  );
};

export default Videos;
