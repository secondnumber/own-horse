import React from 'react';
import classes from './Footer.module.scss';
import Social from '../SocialList/Social';
import FooterNav from './FooterNav/FooterNav';
import Logo from '../Header/Logo.png';

const Footer = (props) => {
  let socialList = props.social.socialList.map((item) => (
    <Social key={item.id} icon={item.icon} link={item.link} />
  ));
  let navMenu = props.navigation.navMenuItems.map((item) => (
    <FooterNav key={item.id} menuItem={item.menuItem} menuLink={item.menuLink} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.filter}>
        <div className={classes.footerBlock}>
          <div className={classes.logoBlock}>
            <img className={classes.logoImage} src={Logo} />
          </div>
          <div className={classes.navBlock}>
            <ul className={classes.navList}>{navMenu}</ul>
            <p className={classes.description}>

            </p>
            <ul className={classes.socialList}>{socialList}</ul>
          </div>
        </div>
        <div className={classes.copyrightBlock}>
          <span className={classes.copyright}>© Copyright 2018 </span>
          <span className={classes.copyright}>All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
