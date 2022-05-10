import React from 'react';
import { Fragment } from 'react';
import classes from '.Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

// contains two components, one for the header and one for the image below the header

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1></h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={storeImage} alt='' />
        </div>
    </Fragment>
};

export default Header;