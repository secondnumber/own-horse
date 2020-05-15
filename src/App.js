import React from 'react';
import './App.scss';
import MainPage from './components/Pages/MainPage/MainPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';

const App = (props) => (
  <div>
      {/* <MainPage state={props.state}/> */}
    <NotFoundPage state={props.state} />
      {/* <AboutPage state={props.state} /> */}
  </div>
);
export default App;
