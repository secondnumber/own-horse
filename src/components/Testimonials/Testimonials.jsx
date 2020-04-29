import React from 'react';
import classes from './Testimonials.module.scss';
import Testimonial from '../Testimonials/Testimonial/Testimonial';

const Testimonials = (props) => {
  let testimonialsList = props.testimonials.map((testimonial) => (
    <Testimonial
      name={testimonial.name}
      tag={testimonial.tag}
      description={testimonial.description}
      imageSmall={testimonial.src}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Testimonials:</h1>
      <div className={classes.testimonialsWrapper}>
        {testimonialsList}
      </div>
    </div>
  );
};

export default Testimonials;
