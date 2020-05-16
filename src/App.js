import React from 'react';
import './App.scss';
import MainPage from './components/pages/MainPage/MainPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import AboutPage from './components/pages/AboutPage/AboutPage';

const App = (props) => (
  <div>
    <MainPage state={props.state} />
    <NotFoundPage state={props.state} />
    <AboutPage state={props.state} />
  </div>
);
export default App;
