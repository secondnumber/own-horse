import React from 'react';
import classes from './FooterSocial.module.scss';
import { NavLink } from 'react-router-dom';

const FooterSocial = (props) => {
  return (
    <li className={classes.socialList}>
      <a href={props.socialLink}>
        <img className={classes.image} src={props.socialItem} />
      </a>
    </li>
  );
};

export default FooterSocial;
