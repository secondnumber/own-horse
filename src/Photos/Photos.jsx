import React from 'react';
import classes from './Photos.module.scss';
import Photo from './Photo/Photo';
import Navigation from './Navigation/Navigation';

const Photos = () => {
    return (
        <section className={classes.wrapper}>
            <Navigation />
            <Photo />
            <Photo />
            <Photo />
            <Photo />
        </section>
    );
};

export default Photos;
