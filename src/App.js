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
    <Header navMenuItems={props.state.navMenuItems} />
    <Slider />
    <Games games={props.state.games} />
    <Posts posts={props.state.posts} />
    <Testimonials testimonials={props.state.testimonials} />
    <Gallery
      galleryTags={props.state.galleryTags}
      galleryImages={props.state.galleryImages}
    />
    <Videos
      togglesItems={props.state.togglesItems}
      videosItems={props.state.videosItems}
    />
    <PriceList priceList={props.state.priceList} />
    <Questions questionsList={props.state.questionsList} />
    <Newsletter />
    <Footer
      socialList={props.state.socialList}
      navMenuItems={props.state.navMenuItems}
    />
  </div>
);
export default App;
