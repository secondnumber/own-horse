import React from 'react';
import classes from './News.module.scss';
import Image from './game-slide-img-1.jpg'

const News = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.newsBlock}>
        <p className={classes.tags}>NEW GAMES ACTION</p>
        <p className={classes.date}>APR 25-27, 2018</p>
        <h1 className={classes.header}>Mix Combination</h1>
        <p className={classes.description}>
          Andouille frankfurter hamburger, swine leberkas tenderloin cupim.
          Ground round ball tip pastrami, turducken chicken porchetta fatback
          frankfurter. Pig kielbasa jowl strip. Steak sausage pork loin bacon
          tri-tip meatball shoulder cupim beef pork chop kevin boudin. Short
          loin pig meatball ham landjaeger pastrami. Drumstick ham hock chuck
          pork belly chicken prosciutto biltong salami ham pancetta.
        </p>
        <button className={classes.button}>Read more</button>
        <img className={classes.image} src={Image}/>
      </div>
    </div>
  );
};

export default News;
