import React from 'react';
import classes from './TestimonialsPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import PriceListContainer from '../../common/PriceList/PriceListContainer';
import ImageItem from '../GalleryPage/ImageItem/ImageItem';
import Testimonial from './Testimonial/Testimonial';

const TestimonialsPage = (props) => {
  let testimonialsList = props.testimonials.testimonialsList.map(
    (testimonial) => {
      if (testimonial.id <= 4) {
        return (
          <Testimonial
            key={testimonial.id}
            name={testimonial.name}
            status={testimonial.status}
            description={testimonial.description}
            src={testimonial.src}
          />
        );
      }
    }
  );

  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <ul className={classes.list}>{testimonialsList}</ul>
        <button className={classes.button}>Show more</button>
      </div>
      <FooterContainer />
    </div>
  );
};

export default TestimonialsPage;
