import React from 'react';
import classes from './BlogPage.module.scss';
import HeaderContainer from '../../common/Header/HeaderContainer';
import BreadcrumbsContainer from '../../common/Breadcrumbs/BreadcrumbsContainer';
import FooterContainer from '../../common/Footer/FooterContainer';

const BlogPage = (props) => {
  return (
    <div>
      <HeaderContainer />
      <BreadcrumbsContainer />
      <div className={classes.wrapper}>
        <div className={classes.block}>BlogPage</div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default BlogPage;
