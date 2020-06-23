import GameImg1 from '../../assets/Games/game-1.jpg';
import GameImg2 from '../../assets/Games/game-2.jpg';
import GameImg3 from '../../assets/Games/game-3.jpg';
import GameImg4 from '../../assets/Games/game-4.jpg';
import GameImg5 from '../../assets/Games/game-5.jpg';
import GameImg6 from '../../assets/Games/game-6.jpg';

let initialState = {
  gamesOnMain: 4,
  gamesList: [
    {
      id: 1,
      name: 'Fifal 2018',
      date: 'mar 18-20, 2018',
      image: GameImg1,
      description:
        'Turducken cupim hamburger beef ribs picanha, drumstick buffalo tri-tip cow. Turducken p...',
    },
    {
      id: 2,
      name: 'Mix Combination',
      date: 'apr 25-27, 2018',
      image: GameImg2,
      description: 'Boudin ground round brisket, andouille ball tip meatloaf beef kevin. Fatback prosciutto.',
    },
    {
      id: 3,
      name: 'Forza Jacson',
      date: 'mar 11, 2019',
      image: GameImg3,
      description: 'Cupim biltong pork belly filet mignon sausage turkey. Boudin flank beef ribs spare ribs...',
    },
    {
      id: 4,
      name: 'NO MAN’S SKY',
      date: 'sept 15, 2019',
      image: GameImg4,
      description: 'Chicken shank short loin, pastrami shankle short ribs shoulder frankfurter swine ball t...',
    },
    {
      id: 5,
      name: 'BARTISFINK OLE',
      date: 'mar 12, 2019',
      image: GameImg5,
      description: 'Doner tenderloin cupim swine bresaola burgdoggen. Turducken salami rump spare ribs pork...',
    },
    {
      id: 6,
      name: 'DOTDENXX',
      date: 'jun 10-13, 2019',
      image: GameImg6,
      description: 'Pork belly landjaeger kielbasa, spare ribs short ribs short loin turkey capicola veniso...',
    },
  ],
};

const gamesReducer = (state = initialState, action) => {
  return state;
};

export default gamesReducer;
