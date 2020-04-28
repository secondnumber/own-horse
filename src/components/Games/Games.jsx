import React from 'react';
import classes from './Games.module.scss';
import Game from './Game/Game';

const Games = (props) => {
  return (
    <div className={classes.gamesWrapper}>
      <h1 className={classes.header}>Upcoming games</h1>
      <div className={classes.gameWrapper}>
        <Game games={props.games} />
        <Game />
        <Game />
      </div>
    </div>
  );
};

export default Games;
