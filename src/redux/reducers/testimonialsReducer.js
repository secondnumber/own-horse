import Testimonial1 from '../../assets/Testimonials/testimonial-author-1.jpg';
import Testimonial2 from '../../assets/Testimonials/testimonial-author-2.jpg';

let initialState = {
  testimonialsList: [
    {
      id: 1,
      name: 'Cow biltong pork belly kielbasa shankle',
      status: 'gamer',
      description:
        '"Turducken cupim hamburger beef ribs picanha, drumstick buffalo tri-tip cow. Turducken prosciutto shank pork chop."',
      src: Testimonial1,
    },
    {
      id: 2,
      name: 'Cow short ribs beef strip steak jowl',
      status: 'gamer',
      description:
        '"Capicola beef ribs pastrami biltong pork chop corned beef alcatra tail landjaeger. Spare ribs t-bone buffalo capicola, pork belly. Capicola beef ribs pastrami biltong pork chop corned beef alcatra tail landjaeger. "',
      author: 'Admin',
      src: Testimonial2,
    },
  ],
};

const testimonialsReducer = (state = initialState, action) => {
  return state;
};

export default testimonialsReducer;
