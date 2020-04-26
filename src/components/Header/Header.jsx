import React from 'react';
import classes from './Header.module.scss';
import Logo from './Logo.png';
import Search from './Search.png';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.logoImage} src={Logo} />
        <div>
          <p className={classes.logoName}>indiega</p>
          <p className={classes.logoText}>gaming solutions</p>
        </div>
      </div>
      <ul className={classes.navList}>
        <li><a className={classes.navItem} href='#'>Homepage</a></li>
        <li><a className={classes.navItem} href='#'>Pages</a></li>
        <li><a className={classes.navItem} href='#'>Gallery</a></li>
        <li><a className={classes.navItem} href='#'>Games</a></li>
        <li><a className={classes.navItem} href='#'>Blog</a></li>
        <li><a className={classes.navItem} href='#'>Contacts</a></li>
      </ul>
      <div className={classes.utility}>
        <img className={classes.searchImage} src={Search} />
        <button className={classes.button}>Join us Now</button>
      </div>
    </div>
  );
};

export default Header;
