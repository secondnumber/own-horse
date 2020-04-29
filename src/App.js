import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Games from './components/Games/Games';
import Posts from './components/Posts/Posts';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Videos from './components/Videos/Videos';
import PriceList from './components/PriceList/PriceList';
import Questions from './components/Questions/Questions';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App = (props) => (
  <div>
    {/*<Header navMenuItems={props.state.navMenuItems} />*/}
    <Slider />
    <Games games={props.state.games} />
    <Posts posts={props.state.posts} />
    <Testimonials testimonials={props.state.testimonials} />
    <Gallery />
    <Videos />
    <PriceList />
    <Questions />
    <Newsletter />
    <Footer />
  </div>
);
export default App;
