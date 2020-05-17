import React from 'react';
import { connect } from 'react-redux';
import Slider from './Slider';

let mapStateToProps = (state) => {
  return {
    slider: state.slider,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const SliderContainer = connect(mapStateToProps)(Slider);

export default SliderContainer;