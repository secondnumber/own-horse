import React from 'react';
import HeaderContainer from '../../common/Header/HeaderContainer';
import SliderContainer from './Slider/SliderContainer';
import GamesContainer from './Games/GamesContainer';
import PostsContainer from './Posts/PostsContainer';
import TestimonialsContainer from './Testimonials/TestimonialsContainer';
import GalleryContainer from './Gallery/GalleryContainer';
import VideosContainer from './Videos/VideosContainer';
import PriceListContainer from '../../common/PriceList/PriceListContainer';
import QuestionsContainer from './Questions/QuestionsContainer';
import Newsletter from '../../common/Newsletter/Newsletter';
import FooterContainer from '../../common/Footer/FooterContainer';
import ScrollButton from '../../common/ScrollButton/ScrollButton';
import classes from './MainPage.module.scss';

const MainPage = (props) => (
  <div className={classes.wrapper}>
    <ScrollButton />
    <HeaderContainer />
    <SliderContainer />
    <GamesContainer />
    <PostsContainer />
    <TestimonialsContainer />
    <GalleryContainer />
    <VideosContainer />
    <PriceListContainer />
    <QuestionsContainer />
    <Newsletter />
    <FooterContainer />
  </div>
);

export default MainPage;
