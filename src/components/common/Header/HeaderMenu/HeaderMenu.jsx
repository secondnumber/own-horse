import React from 'react';
import classes from './HeaderMenu.module.scss';

const HeaderMenu = (props) => (
  <li>
    <a className={classes.navItem} href="#">
      {props.menuItem}
    </a>
  </li>
);

export default HeaderMenu;
