import React from 'react';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import AboutContainer from './About/AboutContainer';
import AchievementsContainer from './Achievements/AchievementsContainer';
import TestimonialsContainer from '../MainPage/Testimonials/TestimonialsContainer';
import Newsletter from '../../pages/MainPage/Newsletter/Newsletter';
import FooterContainer from '../../common/Footer/FooterContainer';

const AboutPage = (props) => (
  <div>
    <HeaderContainer />
    <BreadcrumbsContainer />
    <AboutContainer />
    <AchievementsContainer />
    <TestimonialsContainer />
    <Newsletter />
    <FooterContainer />
  </div>
);

export default AboutPage;
