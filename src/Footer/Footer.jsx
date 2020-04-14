import React from 'react';
import classes from './Footer.module.scss';
import About from './About/About';
import Navigation from './Navigation/Navigation';
import Social from './Social/Social';
import Contact from './Contact/Contact';
import Copyright from './Copyright/Copyright';

const Footer = () => {
    return (
        <section className={classes.wrapper}>
            <About />
            <Navigation />
            <Social />
            <Contact />
            <Copyright />
        </section>
    );
};

export default Footer;
