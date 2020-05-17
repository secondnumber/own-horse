import React from 'react';
import classes from './Achievements.module.scss';

const Achievements = (props) => (
  <div className={classes.wrapper}>
    <ul className={classes.achievementsList}>
      <li className={classes.achievementItem}>1</li>
      <li className={classes.achievementItem}>2</li>
      <li className={classes.achievementItem}>3</li>
      <li className={classes.achievementItem}>4</li>
    </ul>
  </div>
);

export default Achievements;
