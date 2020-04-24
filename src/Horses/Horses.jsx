import React from 'react';
import classes from './Horses.module.scss';
import Horse from './Horse/Horse';

const Horses = () => {
    return (
        <section className={classes.wrapper}>
            <Horse />
            <Horse />
            <Horse />
            <Horse />
        </section>
    );
};

export default Horses;
