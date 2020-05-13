import React from 'react';
import classes from './Posts.module.scss';
import Post from './Post/Post';

const Posts = (props) => {
  let postsList = props.state.posts.map((post) => (
    <Post
      name={post.name}
      tag={post.tag}
      date={post.date}
      description={post.description}
      author={post.author}
      imageSmall={post.src}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.subtitle}>Frash news</h2>
        <h2 className={classes.title}>Our latest Posts:</h2>
      </div>
      <p className={classes.description}>
        Pork chop pastrami meatball, picanha salami capicola drumstick tri-tip
        flank short loin strip steak prosciutto leberkas jowl fatback.
      </p>
      <div className={classes.postsWrapper}>{postsList}</div>
    </div>
  );
};

export default Posts;
