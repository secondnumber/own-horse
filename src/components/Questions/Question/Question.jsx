import React from 'react';
import classes from './Question.module.scss';

const Question = (props) => {
  return (
    <div className={classes.wrapper}>
      <span>{props.id}</span>
      <h2>{props.question}</h2>
      <p>{props.answer}</p>
    </div>
  );
};

export default Question;
