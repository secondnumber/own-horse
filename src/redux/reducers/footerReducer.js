import YoutubeImg from '../../assets/FooterSocial/youtube.svg';
import FacebookImg from '../../assets/FooterSocial/facebook.svg';
import WatsappImg from '../../assets/FooterSocial/whatsapp.svg';

let initialState = {
  navMenuItems: [
    { id: 1, menuItem: 'Homepage' },
    { id: 2, menuItem: 'Pages' },
    { id: 3, menuItem: 'Gallery' },
    { id: 4, menuItem: 'Games' },
    { id: 5, menuItem: 'Blog' },
    { id: 6, menuItem: 'Contacts' },
  ],
  socialList: [
    { id: 2, src: YoutubeImg },
    { id: 3, src: FacebookImg },
    { id: 4, src: WatsappImg },
  ],
};

const footerReducer = (state = initialState, action) => {
  return state;
};

export default footerReducer;
