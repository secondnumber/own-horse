import GameImg1 from '../../src/components/Games/Game/game-img-1.jpg';
import GameImg2 from '../../src/components/Games/Game/game-img-2.jpg';
import GameImg3 from '../../src/components/Games/Game/game-img-3.jpg';
import GameImg4 from '../../src/components/Games/Game/game-img-4.jpg';
import PostImg1 from '../../src/components/Posts/Post/blog-img-1.jpg';
import PostImg2 from '../../src/components/Posts/Post/blog-img-2.jpg';
import PostImg3 from '../../src/components/Posts/Post/blog-img-3.jpg';

let state = {
  navMenuItems: [
    { id: 1, menuItem: 'Homepage' },
    { id: 2, menuItem: 'Pages' },
    { id: 3, menuItem: 'Gallery' },
    { id: 4, menuItem: 'Games' },
    { id: 5, menuItem: 'Blog' },
    { id: 6, menuItem: 'Contacts' },
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
};

export default state;
