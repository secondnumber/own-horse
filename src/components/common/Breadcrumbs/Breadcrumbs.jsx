import React from 'react';
import classes from './Breadcrumbs.module.scss';
import Crumb from './Crumb/Crumb';

const Breadcrumbs = (props) => {
  let crumbsList = props.breadcrumbs.crumbsList.map((element) => (
    <Crumb key={element.id} name={element.name} link={element.link} separator={element.separator}/>
  ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.crumbsBlock}>
        <h2 className={classes.title}>{props.breadcrumbs.title}</h2>
        <ul className={classes.linksList}>{crumbsList}</ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
