import React from 'react';
import { connect } from 'react-redux';
import GalleryPage from './GalleryPage';

let mapStateToProps = (state) => {
  return {
    gallery: state.gallery,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const GalleryPageContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryPage);

export default GalleryPageContainer;