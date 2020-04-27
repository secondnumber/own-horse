import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

const App = (props) => (
  <div>
    <Header navMenuItems={props.state.navMenuItems}/>
    <Slider />
  </div>
);
export default App;
