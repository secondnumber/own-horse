import React from 'react';
import classes from './Testimonials.module.scss';
import Testimonial from './Testimonial/Testimonial';
import ArrowLeft from './left-arrow.svg';
import ArrowRight from './right-arrow.svg';

const Testimonials = (props) => {
  let testimonialsList = props.testimonials.testimonialsList.map(
    (testimonial) => (
      <Testimonial
        name={testimonial.name}
        status={testimonial.status}
        description={testimonial.description}
        imageSmall={testimonial.src}
      />
    )
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.headers}>
        <h2 className={classes.title}>Testimonials:</h2>
        <h2 className={classes.subtitle}>all Reviews</h2>
      </div>
      <div className={classes.testimonialsWrapper}>
        <button className={classes.button}>
          <img src={ArrowLeft} />
        </button>
        {testimonialsList}
        <button className={classes.button}>
          <img src={ArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
