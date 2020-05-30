import React from 'react';
import classes from './GalleryPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import Tag from '../../common/Tag/Tag';
import ImageItem from './ImageItem/ImageItem';
import ScrollButton from '../../common/ScrollButton/ScrollButton';
import PageNumbers from './PageNumbers/PageNumbers';

const GalleryPage = (props) => {
  let tagsList = props.gallery.galleryTags.map((tag) => (
    <Tag key={tag.id} galleryTag={tag.tag} />
  ));

  let imagesList = props.gallery.galleryImages.map((image) => (
    <ImageItem key={image.id} galleryImage={image.imgSmall} />
  ));

  let pageNumbersList = (
    <PageNumbers
      totalImagesCount={props.gallery.totalImagesCount}
      pageSize={props.gallery.pageSize}
    />
  );

  return (
    <div className={classes.wrapper}>
      <ScrollButton />
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.block}>
        <ul className={classes.tagsList}>{tagsList}</ul>
        <ul className={classes.imagesList}>{imagesList}</ul>
        {pageNumbersList}
      </div>
      <FooterContainer />
    </div>
  );
};

export default GalleryPage;
