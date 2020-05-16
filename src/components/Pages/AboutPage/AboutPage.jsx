import React from 'react';
import Header from '../../common/Header/Header';
import Newsletter from '../../pages/MainPage/Newsletter/Newsletter';
import Footer from '../../common/Footer/Footer';
import About from './About/About';
import Achievements from './Achievements/Achievements';
import Testimonials from '../MainPage/Testimonials/Testimonials';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';

const AboutPage = (props) => (
  <div>
    <Header state={props.state} />
    <BreadcrumbsContainer />
    <About />
    <Achievements />
    <Testimonials state={props.state} />
    <Newsletter />
    <Footer state={props.state} />
  </div>
);

export default AboutPage;
