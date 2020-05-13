import React from 'react';
import classes from './About.module.scss';
import Video from './earth.mp4';

const About = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.aboutBlock}>
      <div className={classes.headers}>
        <span className={classes.number}>12</span>
        <h2 className={classes.title}>games Experience</h2>
        <h2 className={classes.subtitle}>Years in</h2>
        <div className={classes.textBlock}>
          <p className={classes.text}>
            Chicken doner salami meatloaf picanha, pastrami short ribs kevin.
            Venison beef burgdoggen pork loin bacon, cow turkey. Hamburger kevin
            sirloin chuck, meatloaf pig picanha pancetta ham shank rump. <br />
            <br />
            Pastrami picanha pig filet mignon, hamburger landjaeger sirloin
            pancetta tenderloin tongue doner. Shoulder venison burgdoggen, doner
            shank short ribs ball tip cupim tongue. Shankle flank kevin pastrami
            bresaola pig ham. Pork beef venison landjaeger filet mignon.
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
