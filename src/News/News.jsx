import React from 'react';
import classes from './News.module.scss';
import NewsCard from './NewsCard/NewsCard';

const News = () => {
    return (
        <section className={classes.wrapper}>
            <NewsCard />
            <NewsCard />
        </section>
    );
};

export default News;
