import React from 'react';
import classes from './Gallery.module.scss';
import Tag from './Tag/Tag';
import Image from './Image/Image';

const Gallery = (props) => {
  let tagsList = props.galleryTags.map((tag) => (
    <Tag galleryTags={tag.tag} />
  ));

  let imagesList = props.galleryImages.map((image) => (
    <Image galleryImages={image.src} />
  ));

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Gallery</h1>
      <div className={classes.tagsWrapper}>
        {tagsList}
      </div>
      <div>{imagesList}</div>
    </div>
  );
};

export default Gallery;
