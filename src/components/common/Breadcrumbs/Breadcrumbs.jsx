import React from 'react';
import classes from './Breadcrumbs.module.scss';

const Breadcrumbs = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.crumbsBlock}>
      <h2 className={classes.title}>About</h2>
      <ul className={classes.linksList}>
        <li className={classes.linksItem}>
          <a className={classes.link} href="#">
            Home
          </a>{' '}
          /
        </li>
        <li className={classes.linksItem}>
          <a className={classes.link} href="#">
            Pages
          </a>{' '}
          /
        </li>
        <li className={classes.linksItem}>
          <a className={classes.link} href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Breadcrumbs;
