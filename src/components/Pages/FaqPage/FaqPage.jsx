import React from 'react';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';
import classes from './FaqPage.module.scss';

const FaqPage = (props) => {
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>Faq</div>
      <FooterContainer />
    </div>
  );
};

export default FaqPage;
