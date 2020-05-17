import React from 'react';
import './App.scss';
import MainPage from './components/pages/MainPage/MainPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import AboutPageContainer from './components/pages/AboutPage/AboutPageContainer';

const App = (props) => (
  <div>
    {/* <MainPage /> */}
    {/* <NotFoundPage /> */}
    <AboutPageContainer />
  </div>
);
export default App;
