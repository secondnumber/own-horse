import React from 'react';
import Header from '../../Header/Header';
import Newsletter from '../../Pages/MainPage/Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import About from './About/About';
import Achievements from './Achievements/Achievements';
import Testimonials from '../MainPage/Testimonials/Testimonials';

const AboutPage = (props) => (
  <div>
    <Header state={props.state} />
    <Breadcrumbs />
    <About />
    <Achievements />
    <Testimonials state={props.state} />
    <Newsletter />
    <Footer state={props.state} />
  </div>
);

export default AboutPage;
