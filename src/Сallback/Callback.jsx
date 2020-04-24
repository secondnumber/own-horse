import React from 'react';
import classes from './Callback.module.scss';

const Callback = () => {
    return (
        <section className={classes.wrapper}>
            <p>Give us a shout and we will get back to you</p>
            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <label>
                    Newsletter
                    <input type="checkbox" name="" id="" />
                </label>
                <button>Get back to me</button>
            </form>
        </section>
    );
};

export default Callback;
