import React from 'react';
import classes from './Services.module.scss';
import Service from './Service/Service';

const Services = () => {
    return (
        <section className={classes.wrapper}>
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <button>Snow more</button>
        </section>
    );
};

export default Services;
