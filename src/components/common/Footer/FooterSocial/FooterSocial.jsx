import React from 'react';
import classes from './FooterSocial.module.scss';

const FooterSocial = (props) => {
  return (
      <li className={classes.socialList}><img className={classes.image} src={props.socialItem} /></li>
  );
};

export default FooterSocial;
