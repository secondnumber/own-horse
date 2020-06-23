import React from 'react';
import classes from './Question.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Questions = (props) => {
  let questionList = props.list.map((el) => (
    <div className={classes.item}>
      <div className={classes.captionBlock}>
        <span className={classes.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <p className={classes.caption}>{el.caption}</p>
        <span className={classes.toggle}>
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </span>
      </div>
      <div className={classes.contentBlock}>
        <p className={classes.content}>{el.content}</p>
      </div>
    </div>
  ));
  return (
    <>
      <h2 className={classes.title}>{props.title}</h2>
        {questionList}
    </>
  );
};
export default Questions;
