import React from 'react';
import classes from './FormFaq.module.scss';
import Button from '../Button/Button';

const FormFaq = () => (
  <div className={classes.block}>
    <form action="">
      <input className={classes.input} type="text" placeholder='your name'/>
      <input className={classes.input} type="text" placeholder='email address'/>
      <input className={classes.input} type="text" placeholder='subject'/>
      <textarea
        className={classes.textarea}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder='your question'
      ></textarea>
      <Button />
    </form>
  </div>
);

export default FormFaq;
