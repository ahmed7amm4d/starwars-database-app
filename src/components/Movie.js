import React from "react";

import classes from './Movie.module.css';

const Movie = (props) => {
    return (
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <h4><span>Director: </span>{props.director }</h4>
            <h4><span>Producers: </span>{props.producer}</h4>
            <p>{props.openingText}</p>
        </li>
    );
};

export default Movie;