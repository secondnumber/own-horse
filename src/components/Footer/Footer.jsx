import React from 'react';
import classes from './Footer.module.scss';
import FooterSocial from './FooterSocial/FooterSocial';
import FooterNav from './FooterNav/FooterNav';
import Logo from '../Header/Logo.png';

const Footer = (props) => {
  let socialList = props.socialList.map((socialItem) => (
    <FooterSocial socialItem={socialItem.src} />
  ));
  let navMenu = props.navMenuItems.map((menuItem) => (
    <ul className={classes.navList}>
      <FooterNav menuItem={menuItem.menuItem} />
    </ul>
  ));

  return (
    <div className={classes.wrapper}>
      <div>
        <img className={classes.logoImage} src={Logo} />
      </div>
      <div>
        <div>{socialList}</div>
        <p>
          Andouille landjaeger flank boudin. Jerky cupim alcatra sirloin
          porchetta, turkey short ribs leberkas doner bacon pancetta buffalo.
        </p>
        <div>{navMenu}</div>
        <span>© Copyright 2018 </span>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
