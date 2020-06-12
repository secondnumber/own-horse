import React from 'react';
import classes from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}><FontAwesomeIcon icon={props.icon} /></span>
      <p className={classes.title}>{props.name}</p>
      <p className={classes.contact}>{props.value}</p>
    </li>
  );
};

export default Contact;
