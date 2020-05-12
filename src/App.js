import React from 'react';
import './App.scss';
import MainPage from './components/Pages/MainPage/MainPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';

const App = (props) => (
  <div>
      {/* <MainPage state={props.state}/> */}
      <NotFoundPage state={props.state} />
  </div>
);
export default App;
