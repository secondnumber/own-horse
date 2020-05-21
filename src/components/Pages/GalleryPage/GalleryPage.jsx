import React from 'react';
import classes from './GalleryPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import Tag from '../../common/Tag/Tag';
import ImageItem from './ImageItem/ImageItem';

const GalleryPage = (props) => {
  let tagsList = props.gallery.galleryTags.map((tag) => <Tag key={tag.id} galleryTag={tag.tag} />);

  let imagesList = props.gallery.galleryImages.map((image) => <ImageItem key={image.id} galleryImage={image.imgSmall} />);

  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <ul className={classes.tagsList}>{tagsList}</ul>
        <ul className={classes.imagesList}>{imagesList}</ul>
        <button className={classes.button}>Show more</button>
      </div>
      <FooterContainer />
    </div>
  );
};

export default GalleryPage;
