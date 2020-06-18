import React from 'react';
import classes from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
import DropdownMenuContainer from './DropdownMenu/DropdownMenuContainer';

const HeaderMenu = (props) => (
    <li className={classes.item}>
      <NavLink
        to={props.menuLink}
        className={classes.link}
        activeClassName={classes.linkActive}
      >
        {props.menuItem}
      </NavLink>
      {props.nestedMenu && <DropdownMenuContainer nestedMenu={props.nestedMenu}/>}
    </li>
  );

export default HeaderMenu;
