import React from 'react';
import classes from './About.module.scss';
import Video from './earth.mp4';

const About = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.aboutBlock}>
      <div className={classes.headers}>
        <span className={classes.number}>{props.aboutPage.aboutItems[0].number}</span>
        <h2 className={classes.title}>{props.aboutPage.aboutItems[0].title}</h2>
        <h2 className={classes.subtitle}>{props.aboutPage.aboutItems[0].subtitle}</h2>
        <div className={classes.textBlock}>
          <p>
          {props.aboutPage.aboutItems[0].text}
          </p>
        </div>
      </div>
      <div>
        <video className={classes.video} width="500" controls>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

export default About;
