import React from "react";

import classes from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                {/* <h1>Star<br />World</h1> */}
                <img src="https://fontmeme.com/permalink/211010/ff434dec13d3e6d9979105b386a88199.png" alt="Star World Logo" />
            </header>
            <hr className={classes.hr1} />
        </React.Fragment>
    );
};

export default Header;