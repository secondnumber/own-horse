import React from 'react';
import classes from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import Request from './Request/Request';

const Header = () => {
    return (
        <header className={classes.wrapper}>
            <Navigation />
            <Content />
            <Request />
        </header>
    );
};

export default Header;
