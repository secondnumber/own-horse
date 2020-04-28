import React from 'react';
import classes from './Game.module.scss';

const Game = (props) => {
  return (
    <div>
      <img className={classes.image} src={props.imageSmall} />
      <h1 className={classes.header}>{props.name}</h1>
      <p className={classes.date}>{props.date}</p>
    </div>
  );
};

export default Game;
