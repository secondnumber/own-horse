import React from 'react';
import classes from './Videos.module.scss';
import Video from './Video/Video';
import VideoInformation from './VideoInformation/VideoInformation';

const Videos = () => {
    return (
        <section className={classes.wrapper}>
            <Video />
            <VideoInformation />
        </section>
    );
};

export default Videos;
