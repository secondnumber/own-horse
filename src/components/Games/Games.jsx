import React from 'react';
import classes from './Games.module.scss';
import Game from './Game/Game';
import News from './News/News';

const Games = (props) => {
  let gamesList = props.games.map((game) => (
    <Game name={game.name} date={game.date} imageSmall={game.src} />
  ));

  return (
    <div className={classes.gamesWrapper}>
      <h1 className={classes.header}>Upcoming games</h1>
      <div className={classes.gameWrapper}>{gamesList}</div>
      <News />
    </div>
  );
};

export default Games;
