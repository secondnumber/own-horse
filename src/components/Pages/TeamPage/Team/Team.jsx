import React from 'react';
import classes from './Team.module.scss';

const Team = (props) => {
  return (
    <li className={classes.item}>
      <img className={classes.image} src={props.image} />
      <p className={classes.name}>{props.name}</p>
      <span className={classes.rank}>{props.rank}</span>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </li>
  );
};

export default Team;