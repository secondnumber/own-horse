import React from 'react';
import classes from './FooterNav.module.scss';

const FooterNav = (props) => {
  return (
      <li className={classes.navItem}>{props.menuItem}</li>
  );
};

export default FooterNav;
