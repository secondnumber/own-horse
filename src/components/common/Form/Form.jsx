import React from 'react';
import classes from './Form.module.scss';
import Button from '../Button/Button';

const Form = () => (
  <div className={classes.block}>
    <form action="">
      <input className={classes.input} type="text" placeholder='text'/>
      <input className={classes.input} type="text" placeholder='text'/>
      <input className={classes.input} type="text" placeholder='text'/>
      <input className={classes.input} type="text" placeholder='text'/>
      <textarea
        className={classes.textarea}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder='text'
      ></textarea>
      <Button />
    </form>
  </div>
);

export default Form;
