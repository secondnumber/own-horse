import { combineReducers, createStore } from 'redux';
import aboutPageReducer from './reducers/aboutPageReducer';
import breadcrumbsReducer from './reducers/breadcrumbsReducer';
import footerReducer from './reducers/footerReducer';
import galleryReducer from './reducers/galleryReducer';
import gamesReducer from './reducers/gamesReducer';
import headerReducer from './reducers/headerReducer';
import notFoundPageReducer from './reducers/notFoundPageReducer';
import postsReducer from './reducers/postsReducer';
import priceListReducer from './reducers/priceListReducer';
import questionsReducer from './reducers/questionsReducer';
import sliderReducer from './reducers/sliderReducer';
import testimonialsReducer from './reducers/testimonialsReducer';
import videosReducer from './reducers/videosReducer';

let reducers = combineReducers({
  aboutPage: aboutPageReducer,
  breadcrumbs: breadcrumbsReducer,
  footer: footerReducer,
  gallery: galleryReducer,
  games: gamesReducer,
  header: headerReducer,
  notFoundPage: notFoundPageReducer,
  posts: postsReducer,
  priceList: priceListReducer,
  questions: questionsReducer,
  slider: sliderReducer,
  testimonials: testimonialsReducer,
  videos: videosReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
