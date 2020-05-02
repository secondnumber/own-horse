import React from 'react';
import classes from './Questions.module.scss';
import Question from './Question/Question';

const Questions = (props) => {
  let questionsList = props.questionsList.map((question) => (
    <Question
      id={question.id}
      question={question.question}
      answer={question.answer}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.questionsWrapper}>
        <h1 className={classes.header}>Frequently Asked Questions</h1>
        <p className={classes.caption}>
          Corned beef ham frankfurter cow, strip steak shoulder doner flank.
          Pork chop spare ribs pork ball tip. Prosciutto jowl meatball shank
        </p>
        {questionsList}
      </div>
    </div>
  );
};

export default Questions;
