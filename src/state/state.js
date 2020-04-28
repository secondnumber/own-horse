import GameImg1 from '../../src/components/Games/Game/game-img-1.jpg';
import GameImg2 from '../../src/components/Games/Game/game-img-2.jpg';
import GameImg3 from '../../src/components/Games/Game/game-img-3.jpg';
import GameImg4 from '../../src/components/Games/Game/game-img-4.jpg';

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
};

export default state;
