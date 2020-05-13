import React from 'react';
import classes from './Gallery.module.scss';
import Tag from './Tag/Tag';
import Image from './Image/Image';

const Gallery = (props) => {
  let tagsList = props.state.galleryTags.map((tag) => <Tag galleryTags={tag.tag} />);

  let imagesList = props.state.galleryImages.map((image) => (
    <Image galleryImages={image.src} position={image.position} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>Screenshots gallery</h2>
        <h2 className={classes.subtitle}>all New Images</h2>
      </div>
      <div className={classes.tagsBlock}>{tagsList}</div>
      <div className={classes.imagesBlock}>{imagesList}</div>
      <button className={classes.button}>Discover more</button>
    </div>
  );
};

export default Gallery;
