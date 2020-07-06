import React from 'react';
import classes from './BlogSearch.module.scss';
import Search from '../../../common/Search/Search';

const BlogSearch = (props) => {
  return (
    <div>
      <h2 className={classes.header}>SEARCH ON WEBSITE</h2>
      <Search />
    </div>
  );
};

export default BlogSearch;
