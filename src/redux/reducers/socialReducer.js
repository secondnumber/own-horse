import YoutubeImg from '../../assets/FooterSocial/youtube.svg';
import FacebookImg from '../../assets/FooterSocial/facebook.svg';
import WatsappImg from '../../assets/FooterSocial/whatsapp.svg';

let initialState = {
  socialList: [
    { id: 2, src: YoutubeImg },
    { id: 3, src: FacebookImg },
    { id: 4, src: WatsappImg },
  ],
  description: `Andouille landjaeger flank boudin. Jerky cupim alcatra sirloin porchetta, turkey short ribs leberkas doner bacon pancetta buffalo.`,
};

const socialReducer = (state = initialState, action) => {
  return state;
};

export default socialReducer;
