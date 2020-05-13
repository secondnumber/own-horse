import React from 'react';
import classes from './NotFoundPage.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NotFound from './NotFound/NotFound';

const NotFoundPage = (props) => {
  return (
    <div className={classes.wrapper}>
      <Header state={props.state} />
      <NotFound />
      <Footer state={props.state} />
    </div>
  );
};
export default NotFoundPage;
