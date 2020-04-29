import React from 'react';
import classes from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={props.imageSmall} />
      <span className={classes.tag}>{props.tag}</span>
      <span className={classes.date}>{props.date}</span>
      <h1 className={classes.header}>{props.name}</h1>
      <p className={classes.description}>{props.description}</p>
      <span className={classes.author}>{props.author}</span>
    </div>
  );
};

export default Post;
