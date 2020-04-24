import React from 'react';
import classes from './Contents.module.scss';
import Content from './Content/Content';

const Contents = () => {
    return (
        <section className={classes.wrapper}>
            <Content />
            <Content />
        </section>
    );
};

export default Contents;
