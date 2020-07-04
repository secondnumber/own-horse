import instaImg1 from '../../assets/BlogPage/InstaWidget/insta-img-1.jpg';
import instaImg2 from '../../assets/BlogPage/InstaWidget/insta-img-2.jpg';
import instaImg3 from '../../assets/BlogPage/InstaWidget/insta-img-3.jpg';
import instaImg4 from '../../assets/BlogPage/InstaWidget/insta-img-4.jpg';
import instaImg5 from '../../assets/BlogPage/InstaWidget/insta-img-5.jpg';
import instaImg6 from '../../assets/BlogPage/InstaWidget/insta-img-6.jpg';

let initialState = {
  instaImageList: [
    { id: 1, image: instaImg1 },
    { id: 2, image: instaImg2 },
    { id: 3, image: instaImg3 },
    { id: 4, image: instaImg4 },
    { id: 5, image: instaImg5 },
    { id: 6, image: instaImg6 },
  ],
};

const blogReducer = (state = initialState, action) => {
  return state;
};

export default blogReducer;
