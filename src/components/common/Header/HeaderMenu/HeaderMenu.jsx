import React from 'react';
import classes from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderMenu = (props) => (
  <li>
    <NavLink to={props.menuLink} className={classes.navItem} activeClassName={classes.navItemActive}>
      {props.menuItem}
    </NavLink>
  </li>
);

export default HeaderMenu;
