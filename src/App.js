import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import AboutPageContainer from './components/Pages/AboutPage/AboutPageContainer';
import TeamPageContainer from './components/Pages/TeamPage/TeamPageContainer';
import PriceListPageContainer from './components/Pages/PriceListPage/PriceListPageContainer';
import GalleryPageContainer from './components/Pages/GalleryPage/GalleryPageGontainer';
import SingleImagePageContainer from './components/Pages/SingleImagePage/SingleImagePageGontainer';
import TestimonialsPageContainer from './components/Pages/TestimonialsPage/TestimonialsPageContainer';

const App = (props) => (
  <div>
    <Route path="/home">
      <MainPage />
    </Route>
    <Route path="/404">
      <NotFoundPage />
    </Route>
    <Route path="/about">
      <AboutPageContainer />
    </Route>
    <Route path="/team">
      <TeamPageContainer />
    </Route>
    <Route path="/price">
      <PriceListPageContainer />
    </Route>
    <Route path="/gallery">
      <GalleryPageContainer />
    </Route>
    <Route path="/price">
      <SingleImagePageContainer />
    </Route>
    <Route path="/price">
      <TestimonialsPageContainer />
    </Route>
  </div>
);
export default App;
