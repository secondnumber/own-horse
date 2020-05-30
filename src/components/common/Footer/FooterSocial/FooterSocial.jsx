import React from 'react';
import classes from './FooterSocial.module.scss';
import { NavLink } from 'react-router-dom';

const FooterSocial = (props) => {
  return (
    <li className={classes.socialList}>
      <NavLink to={props.socialLink}>
        <img className={classes.image} src={props.socialItem} />
      </NavLink>
    </li>
  );
};

export default FooterSocial;
