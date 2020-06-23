import React from 'react';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import TestimonialsContainer from '../MainPage/Testimonials/TestimonialsContainer';
import Newsletter from '../../common/Newsletter/Newsletter';
import FooterContainer from '../../common/Footer/FooterContainer';
import About from './About/About';
import Achievements from './Achievements/Achievements';
import classes from './AboutPage.module.scss';

const AboutPage = (props) => {
  let aboutItems = props.aboutPage.aboutItems.map((element) => (
    <About
      key={element.id}
      number={element.number}
      title={element.title}
      subtitle={element.subtitle}
      text={element.text}
      video={element.video}
      labelOne={element.labelOne}
      labelTwo={element.labelTwo}
    />
  ));

  let achievementsItems = props.aboutPage.achievementsItems.map((element) => (
    <Achievements
      key={element.id}
      counter={element.counter}
      label={element.label}
      image={element.image}
    />
  ));
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      {aboutItems}
      <div className={classes.wrapper}>
        <ul className={classes.list}>{achievementsItems}</ul>
      </div>
      <TestimonialsContainer />
      <Newsletter />
      <FooterContainer />
    </div>
  );
};

export default AboutPage;
