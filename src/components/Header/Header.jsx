import React from 'react';
import classes from './Header.module.scss';
import Logo from './Logo.png';
import Search from './Search.png';

const Header = (props) => {
  let menuItemElements = props.navMenuItems.map((menuItem) => (
    <li>
      <a className={classes.navItem} href="#">
        {menuItem.menuItem}
      </a>
    </li>
  ));

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.logoImage} src={Logo} />
        <div>
          <p className={classes.logoName}>indiega</p>
          <p className={classes.logoText}>gaming solutions</p>
        </div>
      </div>
      <ul className={classes.navList}>{menuItemElements}</ul>
      <div className={classes.utility}>
        <img className={classes.searchImage} src={Search} />
        <button className={classes.button}>Join us Now</button>
      </div>
    </div>
  );
};

export default Header;
