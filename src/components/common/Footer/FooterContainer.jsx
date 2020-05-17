import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

let mapStateToProps = (state) => {
  return {
    footer: state.footer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;