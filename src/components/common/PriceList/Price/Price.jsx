import React from 'react';
import './Price.scss';
import classes from './Price.scss';
import Button from '../../Button/Button';

const Price = (props) => {
  return (
    <div className="wrapper">
      <h1 className="header">{props.name}</h1>
      <div className={`${props.bgClass} price-wrapper`}>
        <span className="currency">{props.currency} </span>
        <span className="integer">{props.integer} </span>
        <span className="fraction">{props.fraction}</span>
        <span className="period">{props.period}</span>
      </div>
      <div className="features">
        <p className="feature">{props.featureOne}</p>
        <p className="feature">{props.featureTwo}</p>
        <p className="feature">{props.featureThree}</p>
        <Button />
      </div>
    </div>
  );
};

export default Price;
