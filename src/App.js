import React from 'react';
import './App.scss';
import MainPage from './components/pages/MainPage/MainPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import AboutPageContainer from './components/pages/AboutPage/AboutPageContainer';
import TeamPageContainer from './components/pages/TeamPage/TeamPageContainer';
import PriceListPageContainer from './components/pages/PriceListPage/PriceListPageContainer';
import GalleryPageContainer from './components/pages/GalleryPage/GalleryPageGontainer';
import SingleImagePageContainer from './components/pages/SingleImagePage/SingleImagePageGontainer';

const App = (props) => (
  <div>
    {/* <MainPage /> */}
    {/* <NotFoundPage /> */}
    {/* <AboutPageContainer /> */}
    {/* <TeamPageContainer /> */}
    {/* <PriceListPageContainer /> */}
    {/* <GalleryPageContainer /> */}
    <SingleImagePageContainer />
  </div>
);
export default App;
