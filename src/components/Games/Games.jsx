import React from 'react';
import classes from './Games.module.scss';
import Game from './Game/Game';
import News from './News/News';
import ArrowLeft from './left-arrow.svg';
import ArrowRight from './right-arrow.svg';

const Games = (props) => {
  let gamesList = props.games.map((game) => (
    <Game name={game.name} date={game.date} imageSmall={game.src} />
  ));

  return (
    <div className={classes.wrapper}>
        <div className={classes.headers}>
      <h2 className={classes.subtitle}>Coming soon
          <h2 className={classes.title}>Upcoming games</h2>
      </h2>
        </div>
      <div className={classes.block}>
        <button className={classes.button}>
          <img src={ArrowLeft} />
        </button>
        {gamesList}
        <button className={classes.button}>
          <img src={ArrowRight} />
        </button>
      </div>
      <News />
    </div>
  );
};

export default Games;
