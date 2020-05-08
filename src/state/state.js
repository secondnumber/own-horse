import GameImg1 from '../components/Games/GameList/game-img-1.jpg';
import GameImg2 from '../components/Games/GameList/game-img-2.jpg';
import GameImg3 from '../components/Games/GameList/game-img-3.jpg';
import GameImg4 from '../components/Games/GameList/game-img-4.jpg';
import PostImg1 from '../../src/components/Posts/Post/blog-img-1.jpg';
import PostImg2 from '../../src/components/Posts/Post/blog-img-2.jpg';
import PostImg3 from '../../src/components/Posts/Post/blog-img-3.jpg';
import Testimonial1 from '../../src/components/Testimonials/Testimonial/testimonial-author-1.jpg';
import Testimonial2 from '../../src/components/Testimonials/Testimonial/testimonial-author-2.jpg';
import Gallery1 from '../../src/components/Gallery/gallery-1.jpg';
import Gallery2 from '../../src/components/Gallery/gallery-2.jpg';
import Gallery3 from '../../src/components/Gallery/gallery-3.jpg';
import Gallery4 from '../../src/components/Gallery/gallery-4.jpg';
import Video1 from '../components/Videos/Video/earth.mp4';
import FacebookImg from '../components/Footer/FooterSocial/facebook.svg';
import YoutubeImg from '../components/Footer/FooterSocial/youtube.svg';
import WatsappImg from '../components/Footer/FooterSocial/whatsapp.svg';

let state = {
  navMenuItems: [
    { id: 1, menuItem: 'Homepage' },
    { id: 2, menuItem: 'Pages' },
    { id: 3, menuItem: 'Gallery' },
    { id: 4, menuItem: 'Games' },
    { id: 5, menuItem: 'Blog' },
    { id: 6, menuItem: 'Contacts' },
  ],

  introList: [
    {
      id: 1,
      caption: 'Welcome to Gamesplay',
      header: 'Online gaming site',
      description:
        'Pork chop pastrami meatball, picanha salami capicola drumstick tri-tip flank short loin strip steak prosciutto\n' +
        ' leberkas jowl fatback. Alcatra kielbasa sausage, turkey short ribs shank bresaola.',
    },
  ],

  games: [
    { id: 1, name: 'Fifal 2018', date: 'mar 18-20, 2018', src: GameImg1 },
    { id: 2, name: 'Mix Combination', date: 'apr 25-27, 2018', src: GameImg2 },
    { id: 3, name: 'Forza Jacson', date: 'mar 11, 2019', src: GameImg3 },
    { id: 4, name: 'NO MAN’S SKY', date: 'sept 15, 2019', src: GameImg4 },
  ],

  posts: [
    {
      id: 1,
      name: 'Cow biltong pork belly kielbasa shankle',
      tag: 'xbox',
      date: 'mar 14, 2018',
      description:
        'Turducken cupim hamburger beef ribs picanha, drumstick buffalo tri-tip cow. Turducken prosciutto shank pork chop.',
      author: 'Admin',
      src: PostImg1,
    },
    {
      id: 2,
      name: 'Cow short ribs beef strip steak jowl',
      tag: 'ps 3',
      date: 'mar 18, 2018',
      description:
        'Capicola beef ribs pastrami biltong pork chop corned beef alcatra tail landjaeger. Spare ribs t-bone buffalo capicola, pork belly.',
      author: 'Admin',
      src: PostImg2,
    },
    {
      id: 3,
      name: 'boudin shankle pork belly turducken spare rib',
      tag: 'ps vita',
      date: 'mar 23, 2018',
      description:
        'Capicola chicken rump biltong boudin corned beef prosciutto short loin pork chop fatback flank beef porchetta tenderloin.',
      author: 'Admin',
      src: PostImg3,
    },
  ],

  testimonials: [
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

  galleryImages: [
    {
      position: 'img-left',
      src: Gallery1,
    },
    {
      position: 'img-center',
      src: Gallery2,
    },
    {
      position: 'img-right',
      src: Gallery4,
    },
    {
      position: 'img-bottom',
      src: Gallery3,
    },
  ],

  togglesItems: [
    { id: 1, toggleItem: 'Most popular streams', toggleClass: 'tag1' },
    { id: 2, toggleItem: 'Upcoming Competitions', toggleClass: 'tag2' },
    { id: 3, toggleItem: 'Prosciutto meatball flank', toggleClass: 'tag3' },
  ],

  videosItems: [
    {
      id: 1,
      file: Video1,
      header: 'CREATE YOUR OWN CHANNEL AND START TO STREAM GAMES NOW',
      descriprion:
        'Drumstick meatloaf capicola short ribs, pork chop cupim kielbasa jerky porchetta pancetta chicken pastrami turkey tenderloin sausage. ' +
        'Pig buffalo alcatra meatball. T-bone hamburger bresaola kevin shank porchetta ground. Round beef tail tri-tip. Short loin pork strip steak venison.',
      caption: '9 136 streams from most recent games',
      count: '267 347 watching now',
    },
  ],

  priceList: [
    {
      id: 1,
      name: 'Standard Plan',
      price: '$ 39.99',
      period: 'per mouth',
      descriprion:
        'Pork Ground Found Biltong\n' +
        ' Capicola Sausage Beef Ribs\n' +
        ' Pork Doner Frankfurter',
    },
    {
      id: 2,
      name: 'Golden Plan',
      price: '$ 59.59',
      period: 'per mouth',
      descriprion:
        'Doner Boudin Rump Picanha Leberkas Kevin Drumstick \n' +
        'Beef Mignon Bresaola',
    },
    {
      id: 3,
      name: 'Platinum Plan',
      price: '$ 89.39',
      period: 'per mouth',
      descriprion:
        'Bresaola Shoulder Venison Frankfurter Cow Ribeye Kielbasa Cupim Drumstick Tail Pancetta ',
    },
  ],

  questionsList: [
    {
      id: 1,
      question: 'Bresaola hamburger sirloin?',
      answer:
        'Flank andouille leberkas, shoulder shankle prosciutto chicken corned beef cupim kevin ham buffalo. ' +
        'Cow short ribs shoulder pancetta alcatra pork chop.',
    },
    {
      id: 2,
      question: 'capicola jerky turducken meatloaf?',
      answer:
        'Meatloaf shank corned beef rump, alcatra chicken bacon turducken tongue. ' +
        'Burgdoggen drumstick short loin tongue shankle shank. Pig salami pancetta.',
    },
    {
      id: 3,
      question: 'filet mignon rump doner landjaeger?',
      answer:
        'Beef ribs meatloaf andouille tail pork belly bresaola tenderloin. ' +
        'Sirloin shank filet mignon rump. Jerky drumstick meatloaf sirloin ball tip landjaeger. ',
    },
    {
      id: 4,
      question: 'Meatloaf leberkas short loin?',
      answer:
        'Beef leberkas drumstick jowl flank burgdoggen strip \n' +
        'steak shoulder. Shankle tri-tip spare ribs turkey beef ribs fatback buffalo t-bone tail flank.',
    },
  ],

  socialList: [
    { id: 2, src: YoutubeImg },
    { id: 3, src: FacebookImg },
    { id: 4, src: WatsappImg },
  ],
};

export default state;
