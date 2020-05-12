import React from 'react';
import classes from './PriceList.module.scss';
import Price from './Price/Price';

const PriceList = (props) => {
  let priceList = props.state.priceList.map((price) => (
    <Price
      name={price.name}
      currency={price.currency}
      integer={price.integer}
      fraction={price.fraction}
      period={price.period}
      bgClass={price.bgClass}
      featureOne={price.featureOne}
      featureTwo={price.featureTwo}
      featureThree={price.featureThree}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>Our Pricing Plans</h2>
        <h2 className={classes.subtitle}>Spesial Plans</h2>
      </div>
      <div className={classes.pricesBlock}>{priceList}</div>
    </div>
  );
};

export default PriceList;
