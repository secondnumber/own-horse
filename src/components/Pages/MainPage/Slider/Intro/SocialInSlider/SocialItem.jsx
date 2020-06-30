import React from 'react';
import classes from './SocialInSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialInSlider = (props) => (
  <li className={classes.socialItem}>
    <a className={classes.link} href={props.link}>
      <FontAwesomeIcon icon={props.icon} size="2x" />
    </a>
  </li>
);

export default SocialInSlider;
