import React from 'react';
import classes from './Header.module.scss';
import Logo from '../../../assets/Header/Logo.png';
import Search from '../../../assets/Header/Search.png';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = (props) => {
  let menuItemElements = props.header.navMenuItems.map((element) => (
    <HeaderMenu menuItem={element.menuItem} />
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
