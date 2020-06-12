import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import MainPage from './components/Pages/MainPage/MainPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import AboutPageContainer from './components/Pages/AboutPage/AboutPageContainer';
import TeamPageContainer from './components/Pages/TeamPage/TeamPageContainer';
import PriceListPageContainer from './components/Pages/PriceListPage/PriceListPageContainer';
import GalleryPageContainer from './components/Pages/GalleryPage/GalleryPageGontainer';
import SingleImagePageContainer from './components/Pages/SingleImagePage/SingleImagePageGontainer';
import TestimonialsPageContainer from './components/Pages/TestimonialsPage/TestimonialsPageContainer';
import ContactsPageContainer from './components/Pages/ContactsPage/ContactsPageContainer';

library.add(fab);

const App = (props) => (
  <div>
    <Route exact path="/">
      <MainPage />
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
    <Route exact path="/gallery">
      <GalleryPageContainer />
    </Route>
    <Route path="/gallery/:imageId?">
      <SingleImagePageContainer />
    </Route>
    <Route path="/price">
      <TestimonialsPageContainer />
    </Route>
    <Route path="/contacts">
      <ContactsPageContainer />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </div>
);
export default App;
