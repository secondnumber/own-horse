import Image1 from '../../assets/Gallery/gallery-1.jpg';
import Image2 from '../../assets/Gallery/gallery-2.jpg';
import Image3 from '../../assets/Gallery/gallery-3.jpg';
import Image4 from '../../assets/Gallery/gallery-4.jpg';

let initialState = {
  galleryImages: [
    {
      position: 'img-left',
      src: Image1,
    },
    {
      position: 'img-center',
      src: Image2,
    },
    {
      position: 'img-right',
      src: Image3,
    },
    {
      position: 'img-bottom',
      src: Image4,
    },
  ],
  galleryTags: [
    {
      tag: 'ALL',
    },
    {
      tag: 'ORIGIN',
    },
    {
      tag: 'PLAYSTATION 4',
    },
    {
      tag: 'STEAM',
    },
    {
      tag: 'UPLAY',
    },
    {
      tag: 'XBOX ONE',
    },
  ],
};

const galleryReducer = (state = initialState, action) => {
  return state;
};

export default galleryReducer;
