import React from 'react';
import classes from './FooterNav.module.scss';

const FooterNav = (props) => {
  return (
      <li>{props.menuItem}</li>
  );
};

export default FooterNav;
