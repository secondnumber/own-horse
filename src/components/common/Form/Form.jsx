import React from 'react';
import classes from './Form.module.scss';
import Button from '../Button/Button';

const Form = () => (
  <div className={classes.block}>
    <form action="">
      <input className={classes.input} type="text" placeholder='full name'/>
      <input className={classes.input} type="text" placeholder='email address'/>
      <input className={classes.input} type="text" placeholder='phone number'/>
      <input className={classes.input} type="text" placeholder='subject'/>
      <textarea
        className={classes.textarea}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder='your message...'
      ></textarea>
      <Button />
    </form>
  </div>
);

export default Form;
