import React from 'react';
import classes from './Content.module.scss';
import Slider from './Slider/Slider';
import ServicesHeader from './ServicesHeader/ServicesHeader';
import Intro from './Intro/Intro';

const Content = () => {
    return (
        <section className={classes.content}>
            Content
            <Slider />
            <ServicesHeader />
            <Intro />
        </section>
    );
};

export default Content;
