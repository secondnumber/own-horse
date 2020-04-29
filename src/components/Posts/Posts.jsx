import React from 'react';
import classes from './Posts.module.scss';
import Post from './Post/Post';

const Posts = (props) => {
  let postsList = props.posts.map((post) => (
    <Post name={post.name} tag={post.tag} date={post.date} description={post.description} author={post.author} imageSmall={post.src} />
  ));

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Our latest Posts:</h1>
      <p className={classes.caption}>
        Pork chop pastrami meatball, picanha salami capicola drumstick tri-tip
        flank short loin strip steak prosciutto leberkas jowl fatback.
      </p>
      <div className={classes.postsWrapper}>
        {postsList}
        <Post />
      </div>
    </div>
  );
};

export default Posts;
