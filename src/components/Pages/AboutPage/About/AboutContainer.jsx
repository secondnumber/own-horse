import React from 'react';
import { connect } from 'react-redux';
import About from './About';

let mapStateToProps = (state) => {
  debugger
  return {
    aboutPage: state.aboutPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);

export default AboutContainer;