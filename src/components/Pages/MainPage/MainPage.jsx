import React from 'react';
import Header from '../../common/Header/Header';
import Slider from './Slider/Slider';
import Games from './Games/Games';
import Posts from './Posts/Posts';
import Testimonials from './Testimonials/Testimonials';
import Gallery from './Gallery/Gallery';
import Videos from './Videos/Videos';
import PriceList from './PriceList/PriceList';
import Questions from './Questions/Questions';
import Newsletter from '../../Pages/MainPage/Newsletter/Newsletter';
import Footer from '../../common/Footer/Footer';

const MainPage = (props) => (
  <div>
    <Header state={props.state} />
    <Slider state={props.state} />
    <Games state={props.state} />
    <Posts state={props.state} />
    <Testimonials state={props.state} />
    <Gallery state={props.state} />
    <Videos state={props.state} />
    <PriceList state={props.state} />
    <Questions state={props.state} />
    <Newsletter />
    <Footer state={props.state} />
  </div>
);

export default MainPage;
