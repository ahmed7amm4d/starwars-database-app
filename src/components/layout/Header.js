import React from "react";

import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <h1>Star<br />World</h1>
            <hr className={classes.hr1} />
        </header>
    );
};

export default Header;