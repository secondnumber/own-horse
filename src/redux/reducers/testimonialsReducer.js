import Testimonial1 from '../../assets/Testimonials/testimonial-author-1.jpg';
import Testimonial2 from '../../assets/Testimonials/testimonial-author-2.jpg';

let initialState = {
  testimonialsList: [
    {
      id: 1,
      name: 'William Castro',
      status: 'gamer',
      description:
        '«Fatback landjaeger prosciutto jerky ham. Salami cappig cupim leberkas. Kevin bacon shankle tenderloin ground round.»',
      src: Testimonial1,
    },
    {
      id: 2,
      name: 'Miguel Carpenter',
      status: 'gamer',
      description:
        '«Porchetta strip steak ball tip, salami pork belly jerky\n' +
        ' beef ribs. Venison ham hock beef ribs sirloin. Burgdoggen filet swine porchetta.»',
      src: Testimonial2,
    },
    {
      id: 3,
      name: 'Glenn Smith',
      status: 'gamer',
      description:
        '«Shank ball tip boudin strip steak tenderloin picanha meatloaf ground round buffalo swine. Ham burgdoggen strip steak drumstick buffalo.»',
      src: Testimonial1,
    },
    {
      id: 4,
      name: 'Harvey Delgado',
      status: 'gamer',
      description:
        '«Brisket chicken meatloaf ribeye venison prosciutto drumstick. Shoulder ball tip beef, bacon porchetta burgdoggen cow fatback venison bresaola.»',
      src: Testimonial2,
    },
    {
      id: 5,
      name: 'Lucy Greene',
      status: 'gamer',
      description:
        '«Bresaola sirloin prosciutto biltong pork chop ribeye chicken fatback. Picanha short loin flank frankfurter pork. Sirloin pork bellystrip steak.»',
      src: Testimonial1,
    },
    {
      id: 6,
      name: 'Tony Haynes',
      status: 'gamer',
      description:
        '«Burgdoggen ground round pork loin meatloaf. \n' +
        'Bacon shoulder alcatra rump. Chicken pancetta \n' +
        'picanha ham. Pancetta chicken tail ham.»',
      src: Testimonial2,
    },
    {
      id: 7,
      name: 'Mildred Floyd',
      status: 'gamer',
      description:
        '«Spare ribs beef ribs prosciutto flank strip steak\n' +
        ' pancetta meatloaf ball tip ham hock tenderloin brisket turducken ribs buffalo bresaola.»',
      src: Testimonial2,
    },
    {
      id: 8,
      name: 'Lewis Fitzgerald',
      status: 'gamer',
      description:
        '«Prosciutto tenderloin hamburger, doner corned beef\n' +
        ' pork loin tri-tip pork belly strip steak picanha. Bresaola rump flank ground round boudin swine.»',
      src: Testimonial2,
    },
  ],
};

const testimonialsReducer = (state = initialState, action) => {
  return state;
};

export default testimonialsReducer;
