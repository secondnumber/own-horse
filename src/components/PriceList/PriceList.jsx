import React from 'react';
import classes from './PriceList.module.scss';
import Price from './Price/Price';

const PriceList = (props) => {
  let priceList = props.priceList.map((price) => (
    <Price
      name={price.name}
      price={price.price}
      period={price.period}
      descriprion={price.descriprion}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Name</h1>
      <div className={classes.videoWrapper}>
        {priceList}
      </div>
    </div>
  );
};

export default PriceList;
