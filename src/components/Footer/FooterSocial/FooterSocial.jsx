import React from 'react';
import classes from './FooterSocial.module.scss';

const FooterSocial = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.socialItem} />
    </div>
  );
};

export default FooterSocial;
