import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Callback from './Сallback/Callback';
import Services from './Services/Services';
import Contents from './Contents/Contents';
import Horses from './Horses/Horses';
import Games from './Games/Games';
import Photos from './Photos/Photos';
import Videos from './Videos/Videos';
import News from './News/News';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Callback />
            <Services />
            <Contents />
            <Horses />
            <Games />
            <Photos />
            <Videos />
            <News />
            <Footer />
        </div>
    );
};

export default App;
