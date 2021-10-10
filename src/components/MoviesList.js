import React from "react";

import classes from './MoviesList.module.css';
import Movie from './Movie';

const MoviesList = (props) => {
    return (
        <ul className={classes['movies-list']}>
            {props.movies.map((movie) => {
                return <Movie key={movie.id} title={movie.title} releaseDate={movie.releaseDate} openingText={movie.openingText} director={movie.director} producer={movie.producer}/>
            })}
        </ul>
    );
};

export default MoviesList;