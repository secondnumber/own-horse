import React from 'react';
import classes from './Toggle.scss';

const Toggle = (props) => {
  return (
    <div className={props.toggleClass}>
      <a className="link" href="#">
        {props.toggleItem}
      </a>
    </div>
  );
};

export default Toggle;
