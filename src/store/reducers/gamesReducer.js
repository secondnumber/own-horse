import GameImg1 from '../../assets/Games/game-img-1.jpg';
import GameImg2 from '../../assets/Games/game-img-2.jpg';
import GameImg3 from '../../assets/Games/game-img-3.jpg';
import GameImg4 from '../../assets/Games/game-img-4.jpg';

let initialState = {
  games: [
    { id: 1, name: 'Fifal 2018', date: 'mar 18-20, 2018', src: GameImg1 },
    { id: 2, name: 'Mix Combination', date: 'apr 25-27, 2018', src: GameImg2 },
    { id: 3, name: 'Forza Jacson', date: 'mar 11, 2019', src: GameImg3 },
    { id: 4, name: 'NO MAN’S SKY', date: 'sept 15, 2019', src: GameImg4 },
  ],
};

const gamesReducer = (state = initialState, action) => {
  return state;
};

export default gamesReducer;
