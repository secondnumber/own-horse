import React from 'react';
import classes from './NotFoundPage.module.scss';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
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
